---
description: Transferência do contexto de um agente para outra sessão, sem caminho de volta. O mecanismo varia: artefato, compactação e outros.
---

Handoff (em português, repasse ou transferência) é a passagem do [contexto](./Contexto.md) de um [agente](./Agente.md) de uma [sessão](./Sess%C3%A3o.md) para outra. O mecanismo de transporte varia: um [artefato de handoff](./Artefato%20de%20handoff.md) escrito, um resumo em memória ([compactação](./Compacta%C3%A7%C3%A3o.md)) e outros. Difere da [limpeza de contexto](./Limpeza%20de%20contexto.md), em que não há transferência nenhuma. Os motivos variam: trocar de papel (planejador → implementador), iniciar uma execução [AFK](./AFK.md) (longe do teclado), abrir sessões em paralelo ou liberar espaço na [janela de contexto](./Janela%20de%20contexto.md).

A sessão que recebe começa com contexto zero: o [modelo](./Modelo.md) é [stateless](./Stateless.md) (sem estado), e nada da sessão antiga fica visível para a nova. Tudo o que a próxima sessão precisa tem de ser levado explicitamente; o resto se perde. "Sem caminho de volta" é a restrição que define como o material é levado: a sessão nova não pode perguntar à antiga o que ela quis dizer, então o material precisa se sustentar sozinho.

| Mecanismo           | Forma                                | Propriedades                                                                       |
| ------------------- | ------------------------------------ | ---------------------------------------------------------------------------------- |
| Artefato de handoff | Arquivo no [ambiente](./Ambiente.md) | Dá para ler e corrigir antes que algo dependa dele; reutilizável em várias sessões |
| Compactação         | Resumo na janela de contexto         | Automática e barata; mais difícil de inspecionar; alimenta uma só sessão sucessora |

A falha visível de um handoff ruim é a rediscussão: a sessão nova reabre decisões que a antiga já tinha fechado, porque o que foi levado registra o que foi decidido, mas não o porquê. Avalie um handoff pelo que uma sessão com contexto zero conseguiria fazer com ele.

_Uso:_

"A sessão de planejamento está ficando pesada. Será que eu só continuo?"

"Faz um handoff. Escreve as decisões num doc, limpa o contexto e começa a implementação numa sessão nova, lendo a partir dele."
