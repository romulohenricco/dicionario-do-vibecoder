---
description: Seletor de quanto o modelo raciocina antes de responder. Mais esforço gasta mais tokens de saída para render mais em problemas difíceis.
aliases:
  - Esforço
  - Nível de esforço
  - Reasoning effort
  - Thinking effort
termo_original: Effort
---

O esforço é um seletor de quanto raciocínio um [modelo](./Modelo.md) faz antes de responder. Definido em cada [requisição ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md), ele controla o tamanho do raciocínio que o modelo percorre antes de começar a escrever a resposta que você vê. Esse raciocínio é gerado durante a [inferência](./Infer%C3%AAncia.md), como todo o resto; o [harness](./Harness.md) costuma escondê-lo, mas é trabalho real do modelo.

Mais esforço custa mais e demora mais. O raciocínio é emitido como [tokens](./Token.md), cobrado como [tokens de saída](./Tokens%20de%20sa%C3%ADda.md) mesmo que você nunca os veja, e produzido um token por vez. Por isso, aumentar o esforço alonga a espera pela resposta e aumenta a fatura. O que se troca é mais deliberação por menos velocidade e mais custo.

A maioria dos harnesses expõe o esforço como uma escala curta de níveis:

| Nível  | Para que serve                                                                 |
| ------ | ------------------------------------------------------------------------------ |
| Baixo  | Edições mecânicas, consultas, mudanças bem especificadas com um caminho claro. |
| Médio  | Programação do dia a dia; costuma ser o padrão.                                |
| Alto   | Bugs complicados, decisões de design, planos de vários passos.                 |
| Máximo | Os problemas mais difíceis, em que uma resposta errada é cara de desfazer.     |

Errar a regulagem causa problemas nos dois sentidos. Com esforço baixo demais num problema difícil, você recebe uma resposta confiante e rasa, que pulou o raciocínio de que o problema precisava. Ela parece boa e está errada de um jeito que vai custar caro depois. Com esforço máximo para renomear uma única linha, você espera um raciocínio longo que não entrega nada que o nível mais baixo não entregaria.

Ajuste o esforço à tarefa, não à [sessão](./Sess%C3%A3o.md). Aumente nas partes realmente difíceis de raciocinar e volte a baixar no trabalho braçal ao redor.

_Uso:_

"Ele continua errando essa correção de concorrência, e já expliquei três vezes."

"Sobe o esforço. Esse bug exige muito raciocínio, e no padrão ele não pensa o bastante antes de se fixar numa abordagem."
