---
description: O usuário lendo o código que o agente produziu e formando um juízo sobre ele. Ler o diff conta; ler o resumo não.
termo_original: Human review
---

O usuário lendo o código que o [agente](./Agente.md) produziu e formando um juízo sobre ele. Ler o diff ou os arquivos alterados conta; ler a _descrição_ que o agente fez do próprio trabalho não — narração não é o artefato. A descrição é uma [fonte secundária](./Fonte%20secund%C3%A1ria.md), escrita pela parte que está sendo revisada; o diff é a [fonte primária](./Fonte%20prim%C3%A1ria.md), e revisar significa lê-lo.

Agentes aumentam o volume de código produzido, então a revisão vira o gargalo. Uma ideia útil é combinar estratégias de revisão diferentes, em camadas. As [verificações automatizadas](./Verifica%C3%A7%C3%A3o%20automatizada.md) pegam as falhas mecânicas, a [revisão automatizada](./Revis%C3%A3o%20automatizada.md) pega as que dá para descrever, e a revisão humana fica reservada para o que só você pode julgar — se a mudança é a mudança certa, se a abordagem combina com a base de código, se isso deveria mesmo existir.

Revisar também custa menos quando é feito cedo. Ler um plano antes de o trabalho começar, ou um diff pequeno no meio do caminho, leva minutos; vasculhar uma branch pronta depois de uma execução [AFK](./AFK.md) leva mais tempo. Onde colocar o ponto de revisão é uma decisão de [humano no loop](./Humano%20no%20loop.md), não um detalhe de última hora.

_Evite:_ "code review" isolado — não distingue revisão humana de automatizada.

_Uso:_

"Fiz a revisão humana do que saiu da execução AFK."

"Você leu o diff ou só o resumo?"

"Li o diff. O resumo dizia que ele tinha apagado código morto — só que a função era chamada por um arquivo gerado."
