---
description: As instruções que o harness põe antes de cada requisição ao provedor de modelo — o briefing fixo do agente. Costuma ser estável na sessão.
termo_original: System prompt
---

As instruções que o [harness](./Harness.md) insere antes de cada [requisição ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md) — o briefing fixo do [agente](./Agente.md): quem ele é, como deve se comportar, quais [ferramentas](./Ferramenta.md) pode chamar, quais convenções seguir. Costuma ser estável ao longo de uma [sessão](./Sess%C3%A3o.md).

O prompt de sistema é escrito pelo fornecedor do harness, não por você. Em harnesses de programação ele é extenso: muitas vezes são dezenas de milhares de [tokens](./Token.md) de regras de comportamento, descrições de ferramentas e tratamento de casos de borda, tudo pago como [tokens de entrada](./Tokens%20de%20entrada.md) a cada [turno](./Turno.md). Suas próprias instruções permanentes vão junto: arquivos como [AGENTS.md](./AGENTS.md.md) são carregados ao lado do prompt de sistema no início da sessão, então o [modelo](./Modelo.md) lê o briefing do fornecedor e o seu ao mesmo tempo, antes mesmo de ver a sua mensagem.

Como é idêntico em toda requisição, ele forma o início do [cache de prefixo](./Cache%20de%20prefixo.md). É em parte por isso que os harnesses o mantêm fixo durante a sessão, em vez de editá-lo conforme ela avança.

Os modelos são treinados para dar prioridade ao prompt de sistema sobre as mensagens do usuário. Por isso, quando um agente insiste numa convenção que você nunca pediu, ou formata a saída de um jeito que você não consegue mudar, em geral ele está obedecendo ao prompt de sistema, e a sua mensagem perde a disputa. Alguns harnesses são personalizáveis: dão acesso completo ao prompt de sistema, então você pode ler o que o agente recebe como instrução e alterar isso.

_Uso:_

"Dois harnesses, mesmo modelo, comportamento completamente diferente pro mesmo prompt."

"Prompts de sistema diferentes. Um é ajustado pra edições de código enxutas, o outro pra explicar — a divergência nasce aí, antes de a sua mensagem chegar."
