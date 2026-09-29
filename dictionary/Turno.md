---
description: Uma mensagem do usuário mais tudo o que o agente faz em resposta, até devolver a vez. Contém uma ou mais requisições ao provedor de modelo.
termo_original: Turn
---

Uma mensagem do usuário mais tudo o que o [agente](./Agente.md) faz em resposta, até devolver a vez ao usuário. Contém uma ou mais [requisições ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md) — muitas, se o agente chamar [ferramentas](./Ferramenta.md). Uma pergunta de esclarecimento encerra o turno; a sua resposta abre o próximo. A hierarquia é [sessão](./Sess%C3%A3o.md) **> Turno > Requisição ao provedor de modelo**.

O que faz o turno merecer um nome é que a duração é decisão do agente, não sua. Você entrega uma mensagem; o agente decide quantas chamadas de ferramenta encadear antes de devolver a vez. Um turno pode ser uma resposta de uma frase ou vinte minutos de leitura, edição e execução de testes. É a mesma propriedade vista de dois ângulos: turnos longos são o que torna possível o trabalho [AFK](./AFK.md), e turnos longos também são onde as coisas dão errado sem supervisão — quando o agente devolve a vez, ele pode ter se desviado bastante do que você queria.

O turno também é a unidade natural de direcionamento. Tudo o que acontece dentro de um turno acontece sem você; os intervalos entre turnos são onde você redireciona. A maioria dos [harnesses](./Harness.md) suaviza isso: você pode interromper no meio do turno para parar o agente e redirecioná-lo, ou digitar uma mensagem enquanto ele trabalha, que será lida quando o turno terminar. Se você fica repetidamente insatisfeito com o ponto em que os turnos terminam, a correção costuma ser pedir turnos menores — primeiro um plano, depois um passo de cada vez — trocando autonomia por intervalos mais frequentes para direcionar.

_Uso:_

"Um turno levou dois minutos?"

"Ele fez catorze [chamadas de ferramenta](./Chamada%20de%20ferramenta.md) dentro desse turno — cada uma é uma requisição separada ao provedor de modelo. A latência vai se acumulando até o agente finalmente devolver a vez pra você."
