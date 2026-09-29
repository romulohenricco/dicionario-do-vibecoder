---
description: Carrega informação adiante. Sessões são stateful entre turnos; agentes podem ser stateful entre sessões com um sistema de memória.
---

Stateful (com estado): carrega informação adiante. Uma [sessão](./Sess%C3%A3o.md) é stateful entre [turnos](./Turno.md) — o [contexto](./Contexto.md) se acumula conforme a sessão roda, e é por isso que sessões longas acabam caindo na [zona burra](./Zona%20inteligente.md). Um [agente](./Agente.md) pode ser stateful entre **sessões** quando ganha um [sistema de memória](./Sistema%20de%20mem%C3%B3ria.md) que grava informação no [ambiente](./Ambiente.md) e a recarrega no início das sessões futuras. O [modelo](./Modelo.md) nunca é stateful; qualquer continuidade aparente é o [harness](./Harness.md) realimentando o contexto. Contraparte de [stateless](./Stateless.md).

Onde o estado fica em cada camada:

| Camada   | Stateful?     | Como                                                                                                                                    |
| -------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Modelo   | Nunca         | Os [parâmetros](./Par%C3%A2metros.md) são congelados; ele só vê o que vem em cada requisição                                            |
| Sessão   | Entre turnos  | O harness acrescenta cada mensagem e cada [resultado de ferramenta](./Resultado%20de%20ferramenta.md) ao contexto                       |
| Harness  | Entre sessões | Arquivos de memória, [AGENTS.md](./AGENTS.md.md), [artefatos de handoff](./Artefato%20de%20handoff.md) — gravados e recarregados depois |
| Ambiente | Sempre        | Os arquivos persistem com ou sem sessão rodando                                                                                         |

O estado de cada camada é construído relendo algo guardado uma camada abaixo: a sessão parece contínua porque o harness reenvia o histórico de mensagens ao modelo stateless, e o agente lembra entre sessões porque o harness recarrega arquivos do ambiente. Nenhum estado é guardado no próprio modelo.

Nem sempre se quer estado. Tudo o que é carregado adiante influencia o que vem depois, então uma suposição errada feita no começo da sessão também é carregada adiante. A [limpeza de contexto](./Limpeza%20de%20contexto.md) é o ato deliberado de descartar o estado da sessão e recomeçar a partir do que está escrito.

_Uso:_

"Ele lembrou das minhas preferências de ontem. Isso quer dizer que o modelo aprendeu?"

"Não, o agente é stateful porque o harness gravou isso num arquivo de memória e recarregou no início da sessão. O modelo em si não viu nada de ontem."
