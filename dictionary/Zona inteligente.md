---
description: "No início da sessão o agente é preciso e focado. Com o tempo cai na zona burra: mais descuidos, esquecimentos e erros."
aliases:
  - Zona burra
  - Zona inteligente / zona burra
  - Dumb zone
  - Smart zone / Dumb zone
termo_original: Smart zone
---

No início de uma [sessão](./Sess%C3%A3o.md) o [agente](./Agente.md) está numa "zona inteligente": preciso, focado, com boa memória. Conforme a sessão cresce, ele desliza para uma "zona burra": mais descuidado, esquecido, com mais erros e com mais [alucinações](./Alucina%C3%A7%C3%A3o.md) de fidelidade ao [contexto](./Contexto.md). É o mesmo [modelo](./Modelo.md) e o mesmo [harness](./Harness.md), só que com mais contexto. É o efeito percebido da [degradação de atenção](./Degrada%C3%A7%C3%A3o%20de%20aten%C3%A7%C3%A3o.md). Em modelos de ponta, a zona burra costuma começar por volta de 125 mil a 150 mil [tokens](./Token.md), embora isso seja debatido. [Limpe o contexto](./Limpeza%20de%20contexto.md) ou [compacte](./Compacta%C3%A7%C3%A3o.md) quando a sessão engordar; não insista.

A queda é gradual, e por isso é fácil não notar. Não há mensagem de erro nem fronteira visível; o agente só passa a render um pouco pior e, depois, claramente pior. Sinais comuns: ele esquece uma instrução dada vinte turnos atrás, repete um erro que já tinha corrigido ou afirma com convicção algo que o contexto contradiz. Como a descida é suave, a reação usual é insistir e explicar de novo, o que acrescenta mais contexto e piora o problema.

As zonas não acompanham o limite da [janela de contexto](./Janela%20de%20contexto.md). Uma sessão pode estar bem dentro da zona burra com a maior parte da janela ainda livre: o limite é o ponto em que o harness se recusa a continuar, mas a qualidade cai muito antes disso. Planeje pela zona inteligente, não pela janela: o orçamento prático de uma tarefa é a quantidade de tokens com que o agente trabalha bem, não a quantidade que ele consegue manter tecnicamente.

A zona inteligente é um orçamento, e trabalho não relacionado o gasta. Cada tarefa feita na sessão consome tokens, então começar uma segunda tarefa na mesma sessão é começá-la mais perto da zona burra. Fazer uma tarefa por sessão dá a cada uma o trecho da sessão em que o agente rende melhor. Quando uma única tarefa é maior que uma zona inteligente, divida-a: faça [handoff](./Handoff.md) ou compacte num ponto de corte natural e deixe uma sessão nova cuidar da próxima parte.

_Uso:_

"Ele mandou bem nos três primeiros componentes e estragou o quarto."

"Você saiu da zona inteligente: mesmo modelo, só que agora lá no fundo da zona burra. Compacta e recarrega o plano, que o próximo componente sai."
