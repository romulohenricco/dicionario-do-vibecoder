---
description: Sistema de trabalho em que gatilhos, e não pessoas, iniciam sessões de agentes, com mais trabalho AFK e tempo HITL só para o que precisa.
aliases:
  - fábrica
  - factory
termo_original: Software factory
---

Um sistema de trabalho em que [sessões](./Sess%C3%A3o.md) de [agentes](./Agente.md) são iniciadas por gatilhos — uma issue criada, um agendamento, uma falha de CI, o fim de outra sessão — e não por um humano, de modo que mais trabalho roda [AFK](./AFK.md) (longe do teclado) e a atenção humana vai para as decisões de [humano no loop](./Humano%20no%20loop.md) que restam.

Sem uma fábrica, toda sessão começa porque alguém a iniciou. Mesmo o trabalho totalmente AFK depende de uma pessoa que abra a sessão, indique o [ticket](./Ticket.md) e a ponha para rodar. Os times querem entregar mais do que isso permite. Uma fábrica tira o humano da tarefa de iniciar sessões, e não necessariamente de todo o resto.

Gatilhos comuns e as sessões que eles iniciam:

| Gatilho                                | Sessão que ele inicia                      | Exemplo                                                                                                                                          |
| -------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Issue criada ou com label aplicada     | Exploração, correção de bug, implementação | Uma issue com a label `ready-for-agent` ganha uma sessão que abre um PR                                                                          |
| Agendamento (cron)                     | Manutenção recorrente                      | Uma regra de lint corrigida por noite                                                                                                            |
| Falha de CI ou alerta de monitoramento | Diagnóstico, tentativa de correção         | Um build quebrado na main ganha uma sessão que encontra o commit responsável e propõe uma correção                                               |
| Fim de outra sessão                    | Trabalho de continuação                    | Um PR aberto por um agente dispara uma [revisão automatizada](./Revis%C3%A3o%20automatizada.md), cujos comentários disparam uma sessão de ajuste |

Uma fábrica não precisa cobrir o processo de software inteiro. Um único job do cron que roda um tipo de sessão e abre um PR revisável já é uma fábrica. Começar nessa escala é útil: um loop estreito produz PRs pequenos e parecidos, e revisá-los mostra até onde o loop merece confiança antes de ser ampliado.

Humanos podem estar em qualquer ponto de uma fábrica — escrevendo e aplicando labels nas issues que disparam sessões, aprovando um plano antes de a implementação começar, fazendo [revisão humana](./Revis%C3%A3o%20humana.md) antes do merge. Decidir quais dessas decisões continuam humanas é a principal questão de projeto. Uma base de código, ou parte dela, em que nenhum humano revisa a saída da fábrica é uma [fábrica escura](./F%C3%A1brica%20escura.md).

_Uso:_

"Quem corrigiu todas as violações de `no-floating-promises`?"

"A fábrica. Tem um cron que pega uma regra de lint por noite e abre um PR. Eu só reviso de manhã."
