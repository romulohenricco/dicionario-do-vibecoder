---
description: O que o harness devolve após uma chamada de ferramenta — conteúdo, saída ou erro. A única visão do agente sobre o ambiente.
termo_original: Tool result
---

O que o [harness](./Harness.md) devolve depois de executar uma [chamada de ferramenta](./Chamada%20de%20ferramenta.md) — o conteúdo do arquivo, a saída do comando, o erro. A única visão que o [agente](./Agente.md) tem do [ambiente](./Ambiente.md). Volta para o [modelo](./Modelo.md) na _próxima_ [requisição ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md), e é ali que o modelo decide o que fazer com ele. A chamada de ferramenta e o resultado de ferramenta são as duas pontas da mesma troca, ambas dentro de um [turno](./Turno.md).

O ciclo de vida de um resultado de ferramenta:

| Etapa | Quem    | O que acontece                                                             |
| ----- | ------- | -------------------------------------------------------------------------- |
| 1     | Harness | Executa a chamada de ferramenta — roda o comando, lê o arquivo             |
| 2     | Harness | Captura o desfecho: saída, conteúdo ou erro                                |
| 3     | Harness | Anexa o resultado ao [contexto](./Contexto.md) como uma mensagem           |
| 4     | Harness | Envia o contexto inteiro na próxima requisição ao provedor de modelo       |
| 5     | Modelo  | Lê o resultado e decide: outra chamada de ferramenta ou uma resposta final |

O resultado permanece no contexto pelo resto da [sessão](./Sess%C3%A3o.md). Os resultados de ferramenta costumam ser a maior parte do contexto de uma sessão de programação: cada arquivo lido, cada execução de testes e cada busca entra por inteiro e continua ocupando [tokens](./Token.md) muito depois de ter deixado de ser útil. Alguns resultados grandes — um log de testes extenso, um arquivo gerado lido por completo — podem empurrar a sessão para o limite da [janela de contexto](./Janela%20de%20contexto.md) mais rápido do que a própria conversa.

Como o resultado é tudo o que o modelo enxerga, ele não tem como conferir o ambiente por trás dele. Se a saída foi truncada, se o comando falhou em silêncio ou se o harness devolveu um erro em vez do conteúdo, o modelo raciocina com o que recebeu. Quando a imagem que o agente tem do seu sistema parece errada, é nos resultados de ferramenta que você deve procurar: em algum ponto da transcrição há um resultado que diz algo diferente do que você sabe ser verdade.

_Uso:_

"Ele está raciocinando sobre o arquivo como se estivesse vazio."

"O resultado de ferramenta veio como uma negação de permissão, e não como o conteúdo. O modelo só viu a string de erro — ele não tem nenhum outro jeito de ver o arquivo."
