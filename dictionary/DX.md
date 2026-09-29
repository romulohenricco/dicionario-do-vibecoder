---
description: "Experiência do desenvolvedor: quanto a base de código e as ferramentas facilitam o trabalho humano — docs, rapidez do feedback, erros."
aliases:
  - Experiência do desenvolvedor
  - Developer experience
---

DX (do inglês developer experience, experiência do desenvolvedor) — o quanto uma base de código e suas ferramentas facilitam o bom trabalho das pessoas. Boa DX é feedback rápido, mensagens de erro claras, documentação que responde à dúvida que você realmente tem e uma configuração que funciona de primeira. O termo é bem anterior à programação com IA; está neste dicionário principalmente como contraste para [AX](./AX.md).

A DX é a interação entre o humano e a base de código, nada além disso. A principal diferença entre os dois públicos é que os humanos são [stateful](./Stateful.md) e os agentes são [stateless](./Stateless.md). Um humano aprende a base de código uma vez e leva esse conhecimento para todos os dias seguintes, e por isso uma DX ruim é tolerável: a pessoa contorna o CI lento agrupando vários pushes, contorna a documentação que falta perguntando uma vez no Slack, contorna a estrutura confusa lembrando onde cada coisa fica. Os contornos se acumulam, e a equipe acaba produtiva numa base de código que trabalha contra ela.

Os [agentes](./Agente.md) enfrentam a mesma base de código sem nada desse acúmulo. Stateless entre [sessões](./Sess%C3%A3o.md), o agente reaprende a base de código do zero a cada vez. Ele se beneficia do conjunto de testes rápido e das mensagens de erro claras, mas tudo o que descobriu ontem se perde, a menos que tenha sido escrito no [ambiente](./Ambiente.md), que o agente só percebe por meio de [resultados de ferramenta](./Resultado%20de%20ferramenta.md). Essa é a lacuna que a AX nomeia: as partes da DX que sobrevivem quando quem desenvolve é um agente, além de preocupações que os humanos não têm, como manter a [janela de contexto](./Janela%20de%20contexto.md) livre.

A sobreposição significa que investir em DX muitas vezes melhora a AX de graça — tipos estritos, testes rápidos e estrutura previsível ajudam os dois. A divergência significa que nem sempre é assim: um bom documento de onboarding ajuda um humano por uma semana e não ajuda em nada um agente, a menos que dê para chegar a ele a partir do [AGENTS.md](./AGENTS.md.md).

_Uso:_

"Nossa DX está boa — quem entra na empresa fica produtivo em uma semana."

"Fica produtivo porque alguém senta do lado dele nessa semana. O agente não ganha essa semana; avalie a AX separadamente."
