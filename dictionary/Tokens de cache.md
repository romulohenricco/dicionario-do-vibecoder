---
description: Tokens de entrada que o provedor guardou de uma requisição anterior no cache de prefixo, cobrados a uma tarifa bem menor.
termo_original: Cache tokens
---

[Tokens de entrada](./Tokens%20de%20entrada.md) que o [provedor](./Provedor%20de%20modelo.md) guardou em cache de uma [requisição ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md) anterior, para não precisar processá-los de novo. Quando requisições consecutivas compartilham um prefixo, o provedor reaproveita o trabalho por meio do [cache de prefixo](./Cache%20de%20prefixo.md) e cobra a parte em cache a uma tarifa bem menor. É o que torna [sessões](./Sess%C3%A3o.md) longas viáveis — sem ele, cada [turno](./Turno.md) paga de novo pelo histórico inteiro.

Isso importa por causa da forma como as sessões são cobradas. O [modelo](./Modelo.md) é [stateless](./Stateless.md), então cada requisição reenvia a conversa inteira — [prompt de sistema](./Prompt%20de%20sistema.md), todas as mensagens, todos os [resultados de ferramenta](./Resultado%20de%20ferramenta.md) — como tokens de entrada. No turno 50, cada requisição carrega 50 turnos de histórico, e você pagaria a tarifa cheia por tudo isso, toda vez. O cache muda essa conta: os tokens que o provedor já processou num prefixo idêntico são cobrados como tokens de cache, muitas vezes a um décimo da tarifa de entrada ou menos. Numa sessão longa, a maior parte do que você envia são tokens de cache, e a fatura se mantém razoável.

Um exemplo mostra quando os tokens entram no cache e quando não entram. Cada letra representa um bloco de conteúdo da conversa; cada requisição envia a conversa até aquele ponto:

| A requisição envia | Em cache | Cobrado à tarifa cheia | Motivo                                                    |
| ------------------ | -------- | ---------------------- | --------------------------------------------------------- |
| `AB`               | nada     | `AB`                   | Primeira requisição — não há nada para comparar           |
| `ABC`              | `AB`     | `C`                    | `AB` é um prefixo exato da requisição anterior            |
| `ABCD`             | `ABC`    | `D`                    | O prefixo continua intacto                                |
| `AXCD`             | `A`      | `XCD`                  | Uma edição trocou `B` por `X`; a correspondência falha aí |

O cache é frágil de um jeito específico: ele só reconhece prefixos exatos. Se qualquer coisa mudar antes no histórico da conversa — o [harness](./Harness.md) reordena o conteúdo, um timestamp é atualizado, a representação de um arquivo muda —, há falha de cache daquele ponto em diante e tudo o que vem depois é cobrado à tarifa cheia de entrada. Os caches também expiram depois de alguns minutos de inatividade, então uma sessão retomada após uma pausa longa paga o histórico de novo uma vez. Quando o custo de uma sessão dispara sem motivo aparente, compare os tokens de cache com os tokens de entrada no relatório de uso: um cache quebrado aparece ali primeiro.

_Uso:_

"O custo em sessão longa é absurdo — gastei US$ 8 numa refatoração."

"Olha os tokens de cache. Se o harness está reordenando o prompt de sistema ou os arquivos entre um turno e outro, o prefixo quebra e você paga a tarifa cheia de entrada em toda requisição."
