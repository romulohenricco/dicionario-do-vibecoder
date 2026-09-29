---
description: Documento usado como mecanismo de transporte de um handoff — escrito por uma sessão para ser lido por outra.
termo_original: Handoff artifact
---

Um documento usado como mecanismo de transporte de um [handoff](./Handoff.md) — escrito no [ambiente](./Ambiente.md) por uma [sessão](./Sess%C3%A3o.md) para ser lido por outra. [Especificações](./Especifica%C3%A7%C3%A3o.md), [tickets](./Ticket.md) e documentos de plano são todos artefatos de handoff.

O motivo para escrever esse documento: o [modelo](./Modelo.md) é [stateless](./Stateless.md), então nada em uma sessão sobrevive à [limpeza de contexto](./Limpeza%20de%20contexto.md) dela. Decisões, restrições, planos pela metade — tudo some junto com o [contexto](./Contexto.md) que os continha. O ambiente persiste. Escrever o estado importante em um arquivo o move para um lugar de onde a próxima sessão pode lê-lo de volta.

O artefato é uma [fonte secundária](./Fonte%20secund%C3%A1ria.md) — um relato do trabalho da sessão, não o trabalho em si. É isso que o deixa pequeno o bastante para orientar uma sessão nova, e também o motivo de ele poder enganá-la: registra o que a sessão que o escreveu acreditava, e tudo o que ficou de fora ou saiu errado é invisível para quem lê. Quando uma afirmação importa, a próxima sessão deve verificá-la na [fonte primária](./Fonte%20prim%C3%A1ria.md) — o código, os testes — em vez de herdá-la.

Um bom artefato é escrito para ser lido por uma sessão sem nenhum contexto. Caminhos de arquivo concretos em vez de "o arquivo que discutimos". O que foi decidido e por quê, para a próxima sessão não rediscutir decisões já tomadas. O que está pronto e o que falta. Ajuda informar à sessão que escreve qual é o destino do artefato: "escreva um documento de handoff para uma sessão nova que não sabe nada sobre este trabalho".

O outro mecanismo de transporte é a [compactação](./Compacta%C3%A7%C3%A3o.md), que resume o trabalho na memória. O artefato tem duas vantagens: fica no disco, onde você pode lê-lo e corrigi-lo antes que qualquer coisa dependa dele, e pode ser reutilizado — a mesma especificação pode orientar cinco sessões em paralelo.

_Uso:_

"Como eu divido isso entre o [agente](./Agente.md) de planejamento e o de implementação?"

"Pede pro planejador escrever um artefato de handoff — caminhos de arquivo, decisões, restrições. A sessão do implementador abre com um ponteiro pro artefato e trabalha a partir dele, usando-o como guia."
