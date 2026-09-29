---
description: Arquivo no ambiente que o harness carrega na janela de contexto no início da sessão — o briefing permanente do projeto para o agente.
---

Um arquivo no [ambiente](./Ambiente.md) que o [harness](./Harness.md) carrega na [janela de contexto](./Janela%20de%20contexto.md) no início da [sessão](./Sess%C3%A3o.md) — o briefing permanente do projeto para o [agente](./Agente.md). É uma convenção comum a vários harnesses; alguns também têm uma variante própria (a do Claude Code é o CLAUDE.md).

Por ser carregado automaticamente, ele evita que você se repita a cada sessão. O [modelo](./Modelo.md) é [stateless](./Stateless.md) (sem estado) — uma correção que você dá numa sessão some na seguinte, e você acaba avisando cada sessão nova de que o projeto usa pnpm, de que os testes rodam com determinada flag, de que um diretório é gerado e não deve ser mexido. Se você já corrigiu o agente duas vezes pela mesma coisa, essa correção é candidata a virar uma linha do AGENTS.md.

O conteúdo adequado é o que o agente não consegue deduzir do código: comandos de build e de teste, convenções que a base de código não deixa óbvias, restrições rígidas ("nunca edite o client gerado"). Curto e declarativo — é um briefing, não documentação.

O custo é que tudo o que está nele fica sempre carregado. As instruções se acumulam, a maioria irrelevante para qualquer tarefa específica, e um AGENTS.md longo gasta tokens e se dilui: quanto mais instruções no contexto, menos confiável é a obediência do modelo a cada uma delas.

_Evite:_ usar o AGENTS.md para conteúdo que deveria ser [divulgado progressivamente](./Divulga%C3%A7%C3%A3o%20progressiva.md) — tudo o que está nele gera um custo em [tokens](./Token.md) a cada [turno](./Turno.md), em toda sessão, quer aquela sessão precise do conteúdo ou não. Um guia de estilo pode ficar atrás de uma [skill](./Skill.md) ou de um [ponteiro de contexto](./Ponteiro%20de%20contexto.md); reserve o AGENTS.md para as linhas que valem em qualquer lugar.

_Uso:_

"Por que toda sessão já começa com 4 mil tokens queimados?"

"Olha o AGENTS.md — alguém colou o guia de estilo inteiro ali em vez de deixar atrás de uma skill."
