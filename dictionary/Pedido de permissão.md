---
description: O que o harness mostra ao usuário antes de executar uma chamada de ferramenta não pré-aprovada. É o mecanismo que coloca um humano no loop.
termo_original: Permission request
---

O que o [harness](./Harness.md) mostra ao usuário antes de executar uma [chamada de ferramenta](./Chamada%20de%20ferramenta.md) que não está pré-aprovada. O [modelo](./Modelo.md) produz uma chamada de ferramenta; em vez de executá-la de imediato, o harness pausa e pergunta. Se você aprova, ela roda; se nega, o harness informa a negação ao modelo como um [resultado de ferramenta](./Resultado%20de%20ferramenta.md). É o mecanismo pelo qual um harness coloca um humano no [loop](./Humano%20no%20loop.md) para ações arriscadas ou sensíveis.

O ciclo de vida de um pedido de permissão:

| Etapa | Quem    | O que acontece                                                                                         |
| ----- | ------- | ------------------------------------------------------------------------------------------------------ |
| 1     | Modelo  | Produz uma chamada de ferramenta                                                                       |
| 2     | Harness | Confere a chamada contra o [modo de permissão](./Modo%20de%20permiss%C3%A3o.md) e as aprovações salvas |
| 3     | Harness | Pré-aprovada: executa de imediato. Caso contrário: pausa e mostra o pedido                             |
| 4     | Usuário | Aprova uma vez, aprova pelo resto da [sessão](./Sess%C3%A3o.md) ou nega                                |
| 5     | Harness | Executa a chamada ou devolve a negação como um resultado de ferramenta                                 |

Negar um pedido direciona o agente. O modelo lê a negação como qualquer outro resultado de ferramenta e reage a ela — tenta outra abordagem ou pergunta o que você prefere. A maioria dos harnesses deixa você anexar uma mensagem à negação, o que transforma o pedido num ponto de direcionamento: "assim não, use o script de migração" chega exatamente quando o modelo está decidindo o que fazer em seguida.

O custo é que cada pedido é uma espera síncrona por você. O [agente](./Agente.md) fica bloqueado até você responder, o que é aceitável enquanto você está acompanhando e vira problema quando não está — um agente que dispara pedidos o tempo todo não pode ser deixado trabalhando [AFK](./AFK.md). O modo de permissão é o ajuste: define quais chamadas rodam livremente e quais perguntam antes, de preferência com um [sandbox](./Sandbox.md) que torne seguro ampliar o conjunto de chamadas que rodam livremente.

_Uso:_

"Ficou travado num pedido de permissão por dez minutos — eu estava numa reunião."

"Esse é o custo de ter humano no loop. Pré-aprova as [ferramentas](./Ferramenta.md) seguras, para que o pedido só apareça nas chamadas realmente arriscadas."
