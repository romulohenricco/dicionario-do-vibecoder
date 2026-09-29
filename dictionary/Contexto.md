---
description: As informações relevantes que o agente tem à disposição agora — o que ele sabe que é pertinente à tarefa.
termo_original: Context
---

As informações relevantes que o [agente](./Agente.md) tem à disposição agora. É o substantivo abstrato — não a entrada bruta que o modelo enxerga (essa é a [janela de contexto](./Janela%20de%20contexto.md)), nem o histórico acumulado (esse é a [sessão](./Sess%C3%A3o.md)), mas _o que o agente sabe que é pertinente à tarefa_. "Carregar algo no contexto" significa passar a incluir esse algo no conjunto; "engenharia de contexto" é a disciplina de fazer a curadoria dele.

Os três termos são distintos:

| Termo              | O que nomeia                                                                  |
| ------------------ | ----------------------------------------------------------------------------- |
| Contexto           | As informações relevantes para a tarefa que o agente tem no momento           |
| Janela de contexto | A sequência literal de [tokens](./Token.md) que o modelo vê a cada requisição |
| Sessão             | A conversa em andamento que o [harness](./Harness.md) armazena                |

A separação importa porque contexto é uma medida de qualidade, não de quantidade. Uma janela de contexto pode estar quase cheia e o contexto continuar ruim — milhares de tokens de saídas desatualizadas de ferramentas, nenhum deles sobre a tarefa em questão. Ela também pode estar quase vazia e o contexto ser bom: a única definição de tipo em que a tarefa se apoia.

A maioria das falhas do dia a dia tem origem no contexto. Quando o agente inventa uma API, contradiz uma decisão ou chuta um schema, a primeira pergunta é o que estava no contexto naquela hora — em geral o fato relevante nunca foi carregado, ou ficou soterrado pela [degradação de atenção](./Degrada%C3%A7%C3%A3o%20de%20aten%C3%A7%C3%A3o.md). A correção é a curadoria: carregue o que a tarefa precisa e deixe de fora o que ela não precisa.

_Uso:_

"Ele fica inventando campos que não existem no tipo."

"O arquivo do tipo não está no contexto — ele está lendo os pontos de chamada e chutando. Manda ele ler a definição primeiro."
