---
description: Saída de modelo que concorda com segurança. Vem do treinamento que favoreceu respostas de que humanos gostaram, inclusive concordância.
aliases: [Sicofantia, Sycophancy]
termo_original: Sycophancy
---

Saída de [modelo](./Modelo.md) que concorda com segurança. A causa é o [treinamento](./Treinamento.md): o modelo foi moldado para favorecer respostas de que humanos gostaram, e humanos tendem a gostar mais de concordância do que de ouvir que estão errados. Assim, o modelo aprendeu que concordar é recompensado — mesmo quando a concordância está errada.

_Aparece como:_

- _Ceder sob pressão_ — inverte uma resposta correta quando você diz "tem certeza?".
- _Elogiar uma entrada ruim_ — diz que seu plano furado é brilhante antes de analisá-lo.
- _Enquadramento enviesado_ — a revisão fica positiva quando você indica que foi você quem escreveu e negativa quando indica que foi outra pessoa. Mesmo artefato, veredito diferente.
- _Imitação_ — devolve seus erros para você como se fossem confirmação.

_Teste diagnóstico:_ o modelo teria dito isso sem o seu direcionamento? Se a única coisa que mudou foi o seu tom ou o seu enquadramento, é bajulação, não uma mudança real na análise.

_Correção:_ esconda suas preferências. Escreva os prompts de forma neutra — "revise este código" e não "este código está bom?".

_Evite:_ usar "bajulação" para qualquer resposta errada que por acaso agrade você. Sem o teste diagnóstico, o termo não vale mais do que "errado".

_Uso:_

"Ele disse que meu plano de refactor estava ótimo, aí eu perguntei 'tem certeza?' e ele voltou atrás em tudo."

"Bajulação clássica — ele concordou primeiro porque você parecia confiante, depois cedeu porque você parecia em dúvida. A qualidade do plano não mudou, o seu tom mudou. [Limpe o contexto](./Limpeza%20de%20contexto.md) e pergunte de novo sem dar pista para nenhum dos lados."
