---
description: Artefato de handoff que delimita uma sessão de trabalho. Avulso ou filho de uma especificação, bloqueia ou é bloqueado por tickets irmãos.
---

Ticket é um [artefato de handoff](./Artefato%20de%20handoff.md) que delimita o trabalho de uma [sessão](./Sess%C3%A3o.md). Pode ser avulso ou ficar sob uma [especificação](./Especifica%C3%A7%C3%A3o.md), como um de seus filhos. Tickets podem bloquear ou ser bloqueados por tickets irmãos, então a ordem do trabalho decorre do grafo de dependências entre eles, e não de um plano linear.

A restrição que define o ticket é o tamanho: uma sessão. Um ticket deve poder ser concluído antes que a sessão saia da [zona inteligente](./Zona%20inteligente.md), e essa restrição é testável. Se as sessões dos seus tickets costumam se degradar antes de o trabalho terminar, os tickets são grandes demais; divida-os. Se cada sessão gasta a maior parte do [contexto](./Contexto.md) com preparação antes de trabalhar por cinco minutos, eles são pequenos demais; junte-os.

Um bom ticket é escrito para um leitor sem nenhum outro contexto. Ele traz o objetivo, os critérios de aceitação e [ponteiros de contexto](./Ponteiro%20de%20contexto.md) para os arquivos e as decisões relevantes, o bastante para a sessão começar a trabalhar sem precisar reconstruir o que a anterior sabia.

O grafo de dependências também é o que libera o paralelismo. Tickets independentes, as folhas do grafo, podem rodar cada um na sua própria sessão ao mesmo tempo. É um jeito eficaz de rodar vários agentes de uma vez. Em uma [fábrica de software](./F%C3%A1brica%20de%20software.md), marcar um ticket como pronto é, por si só, o gatilho que inicia a sessão dele.

_Uso:_

"Por onde eu começo na spec da migração?"

"Olha o grafo de tickets — a mudança de schema bloqueia o backfill, e o backfill bloqueia a troca da API. Pega uma folha e abre uma sessão nela."
