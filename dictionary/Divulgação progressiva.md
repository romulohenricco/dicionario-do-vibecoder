---
description: Carregar só o contexto de que o agente precisa agora, com ponteiros de contexto para o resto. Emprestada do design de UI.
aliases: [Revelação progressiva]
termo_original: Progressive disclosure
---

Carregar apenas o [contexto](./Contexto.md) de que um [agente](./Agente.md) precisa agora, com [ponteiros de contexto](./Ponteiro%20de%20contexto.md) para o resto. Técnica emprestada do design de interfaces, onde consiste em mostrar ao usuário só os controles relevantes para a tarefa atual e esconder o restante atrás de um clique.

A técnica existe porque o contexto custa duas vezes. Cada [token](./Token.md) carregado de antemão é cobrado como [tokens de entrada](./Tokens%20de%20entrada.md) a cada [turno](./Turno.md), e cada token gasta [orçamento de atenção](./Or%C3%A7amento%20de%20aten%C3%A7%C3%A3o.md), quer o agente precise dele ou não. Um [AGENTS.md](./AGENTS.md.md) lotado com o guia de estilo completo, o runbook de deploy e as convenções do banco de dados deixa o agente pior em todos eles — as instruções que importam para a tarefa atual ficam diluídas pelas que não importam. O indício é um agente que ignora regras que você sabe que estão no contexto dele: elas estão lá, mas enterradas.

A divulgação progressiva inverte isso. Mantenha pequena a camada sempre carregada — uma frase por tópico e um ponteiro para onde o detalhe está. O agente lê o guia de estilo quando escreve um componente, o runbook de deploy quando faz deploy e nenhum dos dois quando corrige um teste. As [skills](./Skill.md) são o padrão incorporado ao [harness](./Harness.md): uma descrição curta carregada a cada [sessão](./Sess%C3%A3o.md) e as instruções completas só quando disparadas.

_Uso:_

"Devo jogar o guia de estilo inteiro no AGENTS.md?"

"Não — divulgação progressiva. Referencie o guia de estilo como uma skill, que o agente carrega quando realmente for escrever um componente. O AGENTS.md paga esse custo em tokens a cada turno."
