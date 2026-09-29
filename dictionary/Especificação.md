---
description: Artefato de handoff que descreve um trabalho de várias sessões — o que se constrói, não como cada uma faz sua parte. Feita de tickets.
termo_original: Spec
---

Um [artefato de handoff](./Artefato%20de%20handoff.md) que descreve um trabalho de várias [sessões](./Sess%C3%A3o.md) — o que está sendo construído, não como cada sessão faz a sua parte. Muda conforme o trabalho avança. É composta de [tickets](./Ticket.md).

A especificação existe porque sessões são descartáveis e trabalho grande não é. Qualquer trabalho que exija mais esforço do que cabe em uma [janela de contexto](./Janela%20de%20contexto.md) precisa de um lugar fora do [contexto](./Contexto.md), em algum ponto do [ambiente](./Ambiente.md) do agente que sobreviva à [limpeza de contexto](./Limpeza%20de%20contexto.md): um arquivo no repositório, uma issue do GitHub ou um issue tracker ao qual o agente tenha acesso. A especificação é esse lugar. Ela guarda o objetivo, as restrições, as decisões tomadas até agora e a lista de tickets com o status de cada um. Qualquer sessão nova pode lê-la e saber em que pé está o trabalho, sem herdar o ruído acumulado da sessão anterior.

Especificações aparecem em estilos reconhecíveis, em geral herdados da forma como as equipes já registram as coisas por escrito. Um _documento de requisitos do produto_ (PRD) tende ao quê e ao porquê voltados ao usuário: funcionalidades, comportamento, critérios de aceitação. Um design doc ou RFC tende ao lado técnico: a abordagem escolhida, as alternativas descartadas, as contrapartidas. No caso mais simples, um `plan.md` com uma lista de verificação de tickets faz o mesmo trabalho numa funcionalidade que ocupa várias sessões. O estilo importa menos que o papel: para o [agente](./Agente.md), todos cumprem a mesma função, a de declaração durável de intenção que ele lê no início de cada sessão.

_Uso:_

"Isso tudo deveria ser uma sessão só?"

"Não, escreve como uma spec: quebra em tickets e roda cada um na sua própria sessão. Se tentar fazer tudo num único contexto, você cai na [zona burra](./Zona%20inteligente.md) antes de chegar na metade."
