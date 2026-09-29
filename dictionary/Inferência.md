---
description: Executar um modelo treinado para gerar saída — o que acontece em toda requisição ao provedor de modelo. Os parâmetros ficam fixos.
termo_original: Inference
---

Executar um [modelo](./Modelo.md) treinado para gerar saída — o que acontece em toda [requisição ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md). Os [parâmetros](./Par%C3%A2metros.md) ficam fixos; o modelo apenas faz a [previsão do próximo token](./Previs%C3%A3o%20do%20pr%C3%B3ximo%20token.md) sobre o [contexto](./Contexto.md) que recebe. A inferência é barata em comparação com o [treinamento](./Treinamento.md), mas é cobrada por [token](./Token.md) e é o custo dominante de usar um modelo.

A vida de um modelo se divide em duas fases:

| Fase        | Quando acontece                  | O que faz                                                               | Parâmetros      |
| ----------- | -------------------------------- | ----------------------------------------------------------------------- | --------------- |
| Treinamento | Uma vez, antes do lançamento     | Produz os parâmetros a partir de um corpus de treinamento               | Sendo escritos  |
| Inferência  | Toda vez que alguém usa o modelo | Executa os parâmetros congelados sobre o seu contexto para gerar tokens | Somente leitura |

Nada do que você faz durante a inferência altera os parâmetros, e é por isso que uma correção feita hoje não persiste amanhã. O modelo que repete o mesmo erro na próxima [sessão](./Sess%C3%A3o.md), depois de você explicar a correção com cuidado, não ignorou o que você disse; ele é incapaz de aprender com a conversa. O modelo é [stateless](./Stateless.md) (sem estado): a continuidade precisa vir de fora dele, da [janela de contexto](./Janela%20de%20contexto.md) ou de um [sistema de memória](./Sistema%20de%20mem%C3%B3ria.md).

Esse mecanismo também explica como você é cobrado. Cada requisição executa o modelo sobre o contexto inteiro, então o custo cresce com os [tokens de entrada](./Tokens%20de%20entrada.md) e os [tokens de saída](./Tokens%20de%20sa%C3%ADda.md), e um agente que faz dezenas de chamadas de [ferramenta](./Ferramenta.md) paga pela inferência a cada ida e volta. Por isso o tamanho do contexto é tanto uma questão de custo quanto de qualidade.

_Uso:_

"Por que a fatura cresce com o uso, em vez de ser uma licença fixa?"

"Você paga pela inferência — cada requisição ao provedor de modelo executa o modelo no hardware do provedor. O treinamento já aconteceu, mas os custos de inferência se acumulam a cada requisição, e um único [turno](./Turno.md) pode virar várias requisições quando há chamadas de ferramenta."
