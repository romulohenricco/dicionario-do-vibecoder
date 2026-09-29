---
description: Predefinição que junta um modo de permissão a instruções de comportamento no prompt de sistema. Pode mudar no meio da sessão.
aliases:
  - modo de planejamento
  - plan mode
  - accept-edits
  - bypass permissions
  - YOLO mode
termo_original: Agent mode
---

Uma predefinição que molda como o [agente](./Agente.md) opera em tempo de execução — combina um [modo de permissão](./Modo%20de%20permiss%C3%A3o.md) com instruções de comportamento injetadas no [prompt de sistema](./Prompt%20de%20sistema.md). Exemplos: um modo padrão (default) que pede confirmação em chamadas de risco, um **plan mode** que bloqueia edições e direciona o agente para a pesquisa, um modo **accept-edits** que aprova edições automaticamente, um modo **bypass permissions** (na gíria, **YOLO mode**) que aprova tudo automaticamente. Pode mudar no meio da [sessão](./Sess%C3%A3o.md).

A combinação é o que distingue um modo de uma simples configuração de permissão. Um modo de permissão é só uma barreira: decide quais [chamadas de ferramenta](./Chamada%20de%20ferramenta.md) passam. Uma barreira sozinha produz um agente que quer editar, mas não pode — ele propõe a escrita, é bloqueado e tenta outro caminho. As instruções injetadas tiram essa vontade: o plan mode não só bloqueia edições, como avisa o agente de que ele está numa fase de planejamento, e por isso o agente lê, pergunta e propõe em vez de forçar a barreira. Barreira e direcionamento apontam para o mesmo lado.

Na prática, você muda de modo conforme a sua confiança varia ao longo de uma tarefa. A mesma tarefa pode passar por vários modos: plan mode enquanto a abordagem ainda está sendo definida, o padrão com confirmação para as primeiras edições delicadas, accept-edits quando o agente já mostrou que entendeu a mudança, bypass para uma execução [AFK](./AFK.md) dentro de um [sandbox](./Sandbox.md). Trocar de modo não custa nada: a conversa continua exatamente de onde estava, com novas permissões e novas instruções. Se você se pega aprovando todo pedido sem ler, o modo está mais restritivo do que a sua confiança real; se você vive rejeitando edições, está mais frouxo.

_Termos de fornecedores:_ o Claude Code chama isso de "permission modes" (modos de permissão), o Codex chama de "approval modes" (modos de aprovação) — ambos anteriores a esse agrupamento com instruções de comportamento.

_Uso:_

"Ele não para de editar arquivo, e eu só queria um plano."

"Muda pro plan mode — ele bloqueia as escritas e fica só na pesquisa."

"E pra rodada AFK de mais tarde?"

"Modo bypass, mas só dentro do sandbox."
