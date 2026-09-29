---
description: Capacidade ensinável empacotada como unidade — fica fora da janela de contexto até um ponteiro de contexto trazê-la para a tarefa.
---

Uma skill (em português, "habilidade") é uma capacidade ensinável empacotada como unidade — instruções e recursos para fazer bem uma tarefa, mantida no [ambiente](./Ambiente.md) até que um [ponteiro de contexto](./Ponteiro%20de%20contexto.md) a leve para a [janela de contexto](./Janela%20de%20contexto.md), para a tarefa em questão. É a unidade da [divulgação progressiva](./Divulga%C3%A7%C3%A3o%20progressiva.md) em um [harness](./Harness.md).

As skills são um padrão aberto, definido em [agentskills.io](https://agentskills.io) — desenvolvido originalmente pela Anthropic e depois adotado pela maioria dos principais harnesses, de modo que uma skill escrita uma vez funciona em todos eles. O formato é uma pasta que contém:

- Um arquivo `SKILL.md` — metadados (no mínimo um nome e uma descrição) mais as instruções em si
- Opcionalmente, scripts que o [agente](./Agente.md) pode executar
- Opcionalmente, templates e material de referência para os quais as instruções apontam

Apenas o nome e a descrição ficam no [contexto](./Contexto.md) por padrão. Quando a tarefa do agente combina com a skill, ele carrega o resto. Até lá, a skill ocupa quase nenhum espaço — uma ou duas frases de [tokens](./Token.md), por maiores que sejam as instruções completas.

Isso diferencia as skills do [AGENTS.md](./AGENTS.md.md), que é carregado em toda [sessão](./Sess%C3%A3o.md), seja qual for a tarefa. Uma skill é lida quando surge um tipo específico de trabalho — fazer um release, criar a estrutura de um novo serviço, escrever uma migração — e ignorada no resto do tempo.

_Evite:_ "[ferramenta](./Ferramenta.md)" — uma ferramenta é o que o agente _chama_; uma skill são instruções que ele _lê_.

_Uso:_

"Onde eu coloco o runbook de deploy?"

"Como skill — o agente só carrega quando a tarefa envolve deploy. No AGENTS.md ele gastaria tokens em todo [turno](./Turno.md) por algo que a gente usa uma vez por semana."
