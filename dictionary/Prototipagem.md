---
description: Pedir ao agente uma versão rápida e rudimentar de algo, quando a conversa não basta e você precisa de um artefato real para discutir.
termo_original: Prototyping
---

Pedir ao [agente](./Agente.md) uma versão rápida e rudimentar de algo, quando a conversa tem fidelidade baixa demais e você precisa de um artefato real para discutir.

A [sabatina](./Sabatina.md) resolve decisões de design na conversa. Conversar é barato, mas tem baixa fidelidade: algumas perguntas não se respondem com palavras — como uma interação se comporta na prática, se o formato de uma API é ergonômico em código real que a chama, se o layout funciona com volumes reais de dados. A entrevista chega a uma pergunta cuja resposta sincera é "não sei, teria que ver". Daí em diante a discussão fica andando em círculos. Em vez disso, peça ao agente para construir a coisa, olhe para ela e volte à conversa com uma resposta.

Os agentes reduzem o custo de construir, e é isso que torna a prática viável. Uma versão rudimentar que antes levava um dia para ser montada agora leva minutos, então vale fazer isso com frequência. É uma técnica de [humano no loop](./Humano%20no%20loop.md): o protótipo existe para você reagir a ele.

Normalmente você não para na primeira olhada. Itere com o protótipo — reaja, peça uma mudança, reaja de novo — de modo que cada rodada resolva mais uma decisão diante do artefato real, com fidelidade maior do que a conversa permite.

Um protótipo não precisa ser todo improvisado. Você pode construir com qualidade de produção as partes que está de fato avaliando, para que, quando a decisão sair, o componente ou a API a que você reagiu possa passar para a base de código real. Por isso a prototipagem é um material essencial que a [especificação](./Especifica%C3%A7%C3%A3o.md) pode referenciar.

_Uso:_

"Faz meia hora que a gente discute se o wizard deve ser uma página só ou três etapas."

"Na conversa não resolve — pede pro agente prototipar as duas. A gente clica nas duas e em cinco minutos a gente já sabe."
