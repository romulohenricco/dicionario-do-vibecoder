---
description: Conforme a sessão cresce, o orçamento de atenção de cada token se divide entre mais concorrentes e o sinal das relações úteis diminui.
termo_original: Attention degradation
---

À medida que uma [sessão](./Sess%C3%A3o.md) cresce, o [orçamento de atenção](./Or%C3%A7amento%20de%20aten%C3%A7%C3%A3o.md) de cada [token](./Token.md) é dividido entre mais concorrentes. O sinal de qualquer [relação de atenção](./Rela%C3%A7%C3%A3o%20de%20aten%C3%A7%C3%A3o.md) significativa diminui, e o ruído do [contexto](./Contexto.md) irrelevante ganha espaço. É o mesmo [modelo](./Modelo.md), com os mesmos [parâmetros](./Par%C3%A2metros.md) — só que com mais bocas para alimentar no mesmo prato. É a causa do efeito [zona inteligente / zona burra](./Zona%20inteligente.md).

Aparece como o modelo piorando no meio da sessão: restrições que ele seguiu por uma hora começam a escapar, ele pergunta de novo coisas que já ouviu, escreve código que ignora um arquivo lido antes. Nada mudou no modelo — a única variável é a quantidade de contexto sobre a qual ele distribui atenção agora.

A piora é gradual, e por isso é difícil de notar de dentro da sessão. Não há erro nem limite definido; cada [turno](./Turno.md) é só um pouco pior do que o anterior, e quando as falhas ficam óbvias você já está na zona burra há um tempo.

A recuperação vem de tirar contexto, não de acrescentar mais. Colar de novo a instrução ignorada põe mais um concorrente na mesma janela lotada e ajuda só por pouco tempo. O que funciona: [limpar](./Limpeza%20de%20contexto.md) e recarregar só o que a tarefa precisa, ou [compactar](./Compacta%C3%A7%C3%A3o.md), ou [fazer handoff](./Handoff.md) para uma sessão nova. Trate a queda no cumprimento das instruções como um sinal sobre o tamanho do contexto, não sobre o modelo.

_Uso:_

"Ele está fundo na zona burra — inventando generics que não existem no arquivo de tipos."

"Degradação de atenção. As definições de tipos ainda estão no contexto, mas o sinal sobre elas está soterrado por tudo que acrescentamos depois. Limpa e recarrega."
