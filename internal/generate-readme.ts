#!/usr/bin/env -S npx tsx
// Gera o README.md a partir de internal/Curriculum.md + dictionary/*.md + internal/README.template.md.

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(HERE);
const CURRICULUM = join(HERE, "Curriculum.md");
const TEMPLATE = join(HERE, "README.template.md");
const DICT_DIR = join(ROOT, "dictionary");
const OUTPUT = join(ROOT, "README.md");
const MARKER = "<!-- CURRICULUM -->";
const TOC_MARKER = "<!-- TOC -->";

const SECTION_RE = /^## Seção \d+ — .+$/;
const BULLET_RE = /^- (.+)$/;
const LINK_RE = /\[([^\]]+)\]\(\.\/([^)]+)\.md\)/g;
const ORIGINAL_TERM_RE = /^termo_original:\s*(.+?)\s*$/m;

type Section = { heading: string; terms: string[] };

function fail(msg: string): never {
  console.error(msg);
  process.exit(1);
}

// Espelha o slugger de headings do GitHub: minúsculas, remove pontuação (mantendo hífens),
// depois troca espaços por hífens. "Seção 1 — Fundamentos" → "seção-1--fundamentos".
// Normaliza para NFC para que letras acentuadas não sejam decompostas (macOS).
function headingSlug(heading: string): string {
  return heading
    .normalize("NFC")
    .toLowerCase()
    .replace(/[^\p{L}\p{N} -]/gu, "")
    .replace(/ /g, "-");
}

function parseCurriculum(text: string): Section[] {
  const sections: Section[] = [];
  let current: Section | null = null;

  text.split("\n").forEach((raw, idx) => {
    const lineNo = idx + 1;
    const line = raw.trimEnd();
    if (line === "") return;

    if (line.startsWith("## ")) {
      if (!SECTION_RE.test(line)) {
        fail(
          `Curriculum.md:${lineNo}: o título da seção deve seguir "## Seção N — Título" (travessão em-dash obrigatório): ${line}`
        );
      }
      current = { heading: line.slice(3).normalize("NFC"), terms: [] };
      sections.push(current);
      return;
    }

    if (line.startsWith("- ")) {
      if (!current)
        fail(`Curriculum.md:${lineNo}: item de lista antes de qualquer seção`);
      const m = line.match(BULLET_RE);
      if (!m || !m[1])
        fail(`Curriculum.md:${lineNo}: item de lista malformado: ${line}`);
      const term = m[1];
      if (term.trim() !== term)
        fail(`Curriculum.md:${lineNo}: o termo tem espaços nas pontas`);
      if (/[*_`\[]/.test(term))
        fail(
          `Curriculum.md:${lineNo}: o termo deve ser texto simples, sem markdown: ${term}`
        );
      current.terms.push(term.normalize("NFC"));
      return;
    }

    fail(
      `Curriculum.md:${lineNo}: só são permitidos títulos "## Seção N — Título" e itens "- Termo": ${line}`
    );
  });

  return sections;
}

function splitFrontmatter(body: string): { front: string; rest: string } {
  if (!body.startsWith("---\n")) return { front: "", rest: body };
  const end = body.indexOf("\n---\n", 4);
  if (end === -1) return { front: "", rest: body };
  return {
    front: body.slice(4, end),
    rest: body.slice(end + 5).replace(/^\n+/, ""),
  };
}

// Lê o campo opcional `termo_original` do frontmatter (o termo em inglês
// quando o título do verbete foi traduzido).
function originalTerm(front: string): string | null {
  const m = front.match(ORIGINAL_TERM_RE);
  if (!m || !m[1]) return null;
  return m[1].replace(/^(["'])(.*)\1$/, "$2");
}

function rewriteLinks(body: string): string {
  return body.replace(LINK_RE, (_, text: string, target: string) => {
    return `[${text}](#${headingSlug(decodeURIComponent(target))})`;
  });
}

function main(): void {
  const template = readFileSync(TEMPLATE, "utf8");
  if (!template.includes(MARKER))
    fail(`O template não tem o marcador ${MARKER}`);
  if (!template.includes(TOC_MARKER))
    fail(`O template não tem o marcador ${TOC_MARKER}`);

  const sections = parseCurriculum(readFileSync(CURRICULUM, "utf8"));

  const seen = new Set<string>();
  const parts: string[] = [];
  for (const section of sections) {
    parts.push(`## ${section.heading}`, "");
    for (const term of section.terms) {
      if (seen.has(term)) fail(`Curriculum.md: termo duplicado "${term}"`);
      seen.add(term);
      const entryPath = join(DICT_DIR, `${term}.md`);
      let body: string;
      try {
        body = readFileSync(entryPath, "utf8");
      } catch {
        fail(`Curriculum.md referencia "${term}" mas ${entryPath} não existe`);
      }
      const { front, rest } = splitFrontmatter(body);
      const original = originalTerm(front);
      parts.push(`### ${term}`, "");
      if (original) parts.push(`_Em inglês: ${original}_`, "");
      parts.push(rewriteLinks(rest.trimEnd()), "");
    }
  }

  const onDisk = new Set(
    readdirSync(DICT_DIR)
      .filter((n) => n.endsWith(".md"))
      .map((n) => n.normalize("NFC").slice(0, -3))
  );
  const orphans = [...onDisk].filter((t) => !seen.has(t)).sort();
  if (orphans.length)
    fail(
      `Entradas em dictionary/ não referenciadas por Curriculum.md: ${orphans.join(", ")}`
    );

  const block = parts.join("\n").trimEnd() + "\n";
  const toc = sections
    .map((s) => {
      const terms = s.terms
        .map((t) => `- [${t}](#${headingSlug(t)})`)
        .join("\n");
      return [
        "<details>",
        `<summary>${s.heading}</summary>`,
        "",
        terms,
        "",
        "</details>",
      ].join("\n");
    })
    .join("\n\n");
  const banner =
    "<!--\n" +
    "  ARQUIVO GERADO — NÃO EDITE.\n" +
    "  Fonte: dictionary/*.md, internal/Curriculum.md, internal/README.template.md\n" +
    "  Para regenerar: npm run generate\n" +
    "-->\n\n";
  writeFileSync(
    OUTPUT,
    banner + template.replace(TOC_MARKER, toc).replace(MARKER, block)
  );
}

main();
