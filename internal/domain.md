# Documentação de domínio

Como as skills de engenharia devem consumir a documentação de domínio deste repositório ao explorar a base de código.

## Antes de explorar, leia

- **`internal/CONTEXT.md`**, na raiz do repositório.
- **`internal/adr/`** — leia os ADRs que tocam a área em que você vai trabalhar.

Se algum desses arquivos não existir, **prossiga em silêncio**. Não sinalize a ausência e não sugira criá-los de antemão. A skill produtora (`/grill-with-docs`) os cria sob demanda, quando termos ou decisões são de fato resolvidos.

## Estrutura de arquivos

Repositório de contexto único:

```
/
├── internal/
│   ├── CONTEXT.md
│   └── adr/
│       ├── 0001-...md
│       └── 0002-...md
├── dictionary/
└── Curriculum.md
```

## Use o vocabulário do glossário

Quando sua saída nomear um conceito de domínio (no título de uma issue, numa proposta de refatoração, numa hipótese, no nome de um teste), use o termo como definido em `internal/CONTEXT.md`. Não derive para sinônimos que o glossário evita explicitamente.

Se o conceito de que você precisa ainda não está no glossário, isso é um sinal: ou você está inventando uma linguagem que o projeto não usa (reconsidere) ou existe uma lacuna real (anote para `/grill-with-docs`).

## Sinalize conflitos com ADRs

Se sua saída contradiz um ADR existente, aponte isso explicitamente em vez de sobrescrevê-lo em silêncio:

> _Contradiz o ADR-0007 (pedidos com event sourcing) — mas vale reabrir porque…_
