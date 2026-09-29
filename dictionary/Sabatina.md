---
description: "Técnica para desenvolver um conceito de design: o agente entrevista o usuário de forma socrática, uma decisão por vez."
termo_original: Grilling
---

Técnica para desenvolver um [conceito de design](./Conceito%20de%20design.md) com um [agente](./Agente.md): o agente entrevista o usuário de forma socrática, uma decisão por vez, propondo uma resposta recomendada para cada uma. Freia a pressa de chegar a um plano final — nenhum [artefato de handoff](./Artefato%20de%20handoff.md) é escrito até o conceito se estabilizar.

A técnica existe porque agentes preenchem lacunas em silêncio. Se você pede uma [especificação](./Especifica%C3%A7%C3%A3o.md) a partir de um prompt de duas linhas, o agente não para nas decisões que você ainda não tomou — escolhe valores padrão e os escreve no documento. O resultado parece completo, e os palpites ficam indistinguíveis das escolhas, então você só os descobre tarde: na revisão, ou quando a funcionalidade pronta trata um caso de borda de um jeito que você nunca escolheu. A sabatina inverte isso — em vez de supor, o agente precisa perguntar.

É uma técnica de [humano no loop](./Humano%20no%20loop.md): suas respostas são a entrada. Quando uma pergunta não pode ser respondida na conversa, porque você precisaria ver a coisa funcionando, passe para a [prototipagem](./Prototipagem.md).

_Uso:_

"Ele foi direto escrever a spec e errou a lógica de cancelamento."

"Faz uma sabatina antes: obriga ele a te perguntar sobre cancelamento parcial, reembolso e prazo antes de gravar qualquer coisa no doc. Sai mais barato resolver na conversa do que no código."
