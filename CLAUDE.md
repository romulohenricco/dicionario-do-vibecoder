README.md é um arquivo gerado, produzido a partir de internal/README.template.md.

Links para outros verbetes devem existir apenas na primeira ocorrência. Ou seja: se "sessão" aparece duas vezes no verbete, só a primeira leva link.

Novos verbetes devem ser adicionados em dictionary/ e ganhar um lugar em internal/Curriculum.md.

Todo verbete precisa ter o campo `description` no frontmatter. Cada descrição deve ter menos de 140 caracteres.

Associe cada conceito ao problema real que ele explica. Quando um termo tem um sintoma reconhecível — uma falha ou surpresa que o leitor provavelmente já viveu — encaixe esse sintoma na prosa, perto da definição, para que o leitor reconheça o próprio incidente no verbete. Prosa tecida, não uma seção nomeada. Termos de vocabulário/blocos de construção (por exemplo, Token, Parâmetros) não têm sintoma; não force um sintoma falso.

Cada verbete deve ter pelo menos 200 palavras (contando o corpo e o diálogo de Uso, sem o frontmatter). Chegue ao mínimo com substância — mecanismo, sintoma, o que fazer a respeito — nunca com enchimento.

Prefira tabelas para material estruturado: ciclos de vida (etapa / quem / o que acontece), escadas de opções e similares. Veja `dictionary/Chamada de ferramenta.md` e `dictionary/Modo de permissão.md` como exemplos. Não force em tabela uma prosa que não seja naturalmente em etapas ou comparativa.

Escreva em registro plano, sem exagero promocional. Sem vender o conceito: evite superlativos ("o meio mais barato que existe"), momentos dramatizados ("Você vai reconhecer o momento", "Esse é o sinal de que") e palavras de ênfase como "núcleo", "todo o valor", "poder real", "direto para". Diga o que acontece e o que fazer, de forma direta.

A primeira frase de um parágrafo precisa ser especialmente clara. Não tente aquecer o parágrafo com uma frase engenhosa logo de início.

Sempre que um novo verbete for adicionado, procure em todos os outros verbetes se ele pode ser referenciado ali. A presença de um novo termo pode reduzir a verbosidade de outros verbetes.

## Convenções de tradução

Este repositório é a tradução para português brasileiro de [mattpocock/dictionary-of-ai-coding](https://github.com/mattpocock/dictionary-of-ai-coding) (remote `upstream`). As regras acima valem também em PT-BR.

- Traduza tudo, exceto nomes próprios (pessoas, empresas, produtos, protocolos), nomes de arquivos/comandos, código e identificadores que precisam ficar em inglês.
- Os termos, plurais e rótulos padronizados estão em `internal/GLOSSARIO.md`. Use-os; se surgir um termo novo, registre-o lá.
- O título do verbete em PT-BR é o nome do arquivo em `dictionary/`, o item em `internal/Curriculum.md` e o texto do link. Verbetes com título traduzido levam `termo_original: <termo em inglês>` no frontmatter; o README gerado mostra "Em inglês: …". Verbetes cujo título ficou em inglês não levam esse campo.
- Links entre verbetes usam o nome do arquivo com percent-encoding: `[janela de contexto](./Janela%20de%20contexto.md)`, `[sessão](./Sess%C3%A3o.md)`.
- Os títulos de seção em `internal/Curriculum.md` seguem o formato `## Seção N — Título` (com travessão).
- Os limites de 140 caracteres na `description` e de 200 palavras por verbete valem para o texto em português.
- Para acompanhar mudanças do original: `git fetch upstream` e compare com `upstream/main`.

## Agent skills

### Issue tracker

As issues ficam no GitHub Issues deste repositório, acessadas pela CLI `gh`. Veja `internal/issue-tracker.md`.

### Triage labels

Vocabulário canônico padrão de labels (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). Veja `internal/triage-labels.md`.

### Domain docs

Layout de contexto único, dentro de `internal/` (`internal/CONTEXT.md`, `internal/adr/`). Veja `internal/domain.md`.
