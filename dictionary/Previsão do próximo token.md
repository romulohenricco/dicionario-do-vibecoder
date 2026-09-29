---
description: O que o modelo de fato faz. Amostra o próximo token a partir do contexto, anexa e repete. É o único modo de operação dele.
termo_original: Next-token prediction
---

O que o [modelo](./Modelo.md) de fato faz. Dado um [contexto](./Contexto.md), ele amostra o próximo [token](./Token.md), anexa e roda de novo. Toda saída — uma frase, uma [chamada de ferramenta](./Chamada%20de%20ferramenta.md), um arquivo de mil linhas — é construída um token por vez. O modelo não tem outro modo de operação.

Cada etapa funciona do mesmo jeito: os tokens da [janela de contexto](./Janela%20de%20contexto.md) passam pelos [parâmetros](./Par%C3%A2metros.md), que produzem uma probabilidade para cada token do vocabulário — este tem alta probabilidade de vir a seguir, aquele tem menos. Um token é amostrado dessas probabilidades, anexado, e o loop roda de novo com o contexto um pouco maior. Essa etapa de amostragem é o motivo de o mesmo prompt gerar saídas diferentes em execuções diferentes: o [não determinismo](./N%C3%A3o%20determinismo.md) é parte do mecanismo, não um bug acrescentado por cima.

Ter esse mecanismo em mente ajuda a entender comportamentos que, de outro modo, parecem estranhos. O modelo nunca verifica se um token é _verdadeiro_ antes de emiti-lo — apenas se é _provável_ — e essa é a origem da [alucinação](./Alucina%C3%A7%C3%A3o.md). Ele assume cada token à medida que avança, então uma primeira frase de tom confiante pode desviar o resto da resposta. E, como os [tokens de saída](./Tokens%20de%20sa%C3%ADda.md) são produzidos estritamente um de cada vez, a velocidade de geração limita a rapidez com que qualquer [agente](./Agente.md) consegue trabalhar.

_Uso:_

"Como o agente 'decide' chamar uma ferramenta?"

"Não decide — é previsão do próximo token do começo ao fim. A chamada de ferramenta é só uma string estruturada que o [harness](./Harness.md) extrai do fluxo de saída."
