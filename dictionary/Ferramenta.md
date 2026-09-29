---
description: Função que o harness expõe para o agente chamar — Read, Write, Bash, Search. É como o agente percebe e age no ambiente.
termo_original: Tool
---

Uma função que o [harness](./Harness.md) expõe para o [agente](./Agente.md) chamar — Read, Write, Bash, Search. As ferramentas são a forma como o agente percebe e age no [ambiente](./Ambiente.md): ele só enxerga o ambiente por meio de [resultados de ferramenta](./Resultado%20de%20ferramenta.md) e só o altera por meio de [chamadas de ferramenta](./Chamada%20de%20ferramenta.md). Cada chamada de ferramenta custa uma [requisição ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md) a mais, já que o resultado precisa voltar ao modelo antes que ele decida o que fazer em seguida.

Ferramentas que a maioria dos agentes de programação traz:

| Ferramenta | O que faz                                                                       |
| ---------- | ------------------------------------------------------------------------------- |
| Read       | Devolve o conteúdo de um arquivo como resultado de ferramenta                   |
| Write      | Cria ou edita um arquivo no [sistema de arquivos](./Sistema%20de%20arquivos.md) |
| Bash       | Executa um comando de shell e devolve a saída                                   |
| Search     | Encontra arquivos ou trechos de texto que casam com um padrão na base de código |

Uma ferramenta é definida por três coisas: um nome, uma descrição do que ela faz e um schema dos parâmetros. O harness envia essas definições ao [modelo](./Modelo.md) a cada requisição, e o modelo escolhe uma ferramenta do mesmo jeito que produz todo o resto — escrevendo [tokens](./Token.md), neste caso uma chamada estruturada com argumentos. O modelo nunca executa nada por conta própria; o harness lê a chamada, roda a função e devolve o resultado.

A lista de ferramentas define o que o agente consegue fazer. Um modelo capaz com poucas ferramentas é um agente limitado: ele faz tudo passar pelo que tiver, e por isso os agentes dependem tanto do Bash — o shell é uma única ferramenta que alcança quase todo o sistema. Para dar uma capacidade nova ao agente de forma limpa, adicione uma ferramenta para ela; o [MCP](./MCP.md) é o padrão para conectar ferramentas de fora do harness.

As definições de ferramenta ocupam o [contexto](./Contexto.md) a cada requisição, então um conjunto grande de ferramentas tem um custo fixo antes mesmo de qualquer chamada — e muitas ferramentas com descrições parecidas fazem o modelo errar mais na hora de escolher entre elas.

_Uso:_

"O agente consegue consultar o staging direto?"

"Adiciona uma ferramenta `psql` no harness, somente leitura no staging. Sem uma ferramenta pra isso, o agente fica cego pra tudo que estiver fora do sistema de arquivos."
