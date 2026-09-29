---
description: Protocolo para conectar servidores de ferramentas externos a um harness, dando ao agente ferramentas além das que o harness já traz.
---

**Model Context Protocol (protocolo de contexto de modelo).** Um protocolo para conectar servidores de ferramentas externos a um [harness](./Harness.md) — é como um [agente](./Agente.md) ganha [ferramentas](./Ferramenta.md) além das que o harness traz de fábrica. O agente nunca "chama o MCP"; ele chama uma ferramenta, e o harness acabou obtendo essa ferramenta de um servidor MCP. O protocolo também expõe recursos (dados somente leitura) e prompts (modelos reutilizáveis), mas o uso principal é fornecer ferramentas.

O protocolo resolve um problema de integração. Sem um padrão, cada harness precisaria de uma integração própria com o Linear, outra com o Slack, outra com o banco de dados — escritas e mantidas separadamente para cada um. Com o MCP, a integração é escrita uma vez, como um servidor, e qualquer harness compatível com MCP consegue usá-la. O harness se conecta ao servidor, o servidor anuncia quais ferramentas oferece, e essas ferramentas ficam disponíveis para o agente junto com as embutidas.

O custo é pago em [contexto](./Contexto.md). Cada ferramenta que um servidor anuncia chega como uma definição — nome, descrição, schema de parâmetros — e o [modelo](./Modelo.md) só consegue chamar ferramentas que conhece. A abordagem ingênua carrega todas as definições na [janela de contexto](./Janela%20de%20contexto.md) logo de início: instale alguns servidores com muitas ferramentas e uma [sessão](./Sess%C3%A3o.md) começa com milhares de [tokens](./Token.md) de schemas de ferramentas antes de você digitar qualquer coisa, gastando [orçamento de atenção](./Or%C3%A7amento%20de%20aten%C3%A7%C3%A3o.md) com ferramentas que a tarefa nunca vai usar.

Muitos harnesses hoje reduzem esse custo com busca de ferramentas: em vez das definições completas, o contexto guarda um [ponteiro de contexto](./Ponteiro%20de%20contexto.md) para as ferramentas disponíveis — o agente procura uma ferramenta pelo nome ou pela finalidade e só carrega a definição quando precisa dela. Se o seu harness não faz isso, o custo inicial continua valendo, e vale a pena ativar só os servidores que o projeto realmente usa.

_Uso:_

"O agente precisa ler os tickets do Linear."

"Configura o harness pra usar o servidor MCP do Linear — ele expõe a API do Linear como ferramentas que o agente pode chamar. Poupa você de escrever wrappers de ferramenta na mão."
