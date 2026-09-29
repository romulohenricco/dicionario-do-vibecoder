---
description: A data após a qual um modelo não tem conhecimento paramétrico. Bibliotecas e APIs posteriores levam a invenções sem docs.
termo_original: Knowledge cutoff
---

A data após a qual um [modelo](./Modelo.md) não tem [conhecimento paramétrico](./Conhecimento%20param%C3%A9trico.md). Bibliotecas, APIs e eventos posteriores ao corte são armadilhas de invenção, a menos que a documentação seja carregada como [conhecimento contextual](./Conhecimento%20contextual.md). Cada lançamento de modelo tem o seu próprio corte.

O corte existe por causa do modo como os modelos são feitos: o [treinamento](./Treinamento.md) grava um instantâneo do texto nos [parâmetros](./Par%C3%A2metros.md) do modelo e, depois disso, os parâmetros ficam congelados. O modelo não sabe que o seu conhecimento tem um limite. Se você pergunta sobre algo posterior ao corte, ele não recusa: extrapola a partir do que conhece de mais próximo. É isso que torna a armadilha silenciosa: o código escrito para uma versão antiga de uma biblioteca parece plausível, muitas vezes compila e falha nas partes que mudaram.

A correção é sempre a mesma: colocar informação atual no [contexto](./Contexto.md). Carregue o changelog, aponte para as definições de tipos da versão instalada ou peça ao agente que leia a documentação na web. Qualquer coisa no contexto vale mais do que nada nos parâmetros.

_Uso:_

"Ele continua escrevendo a sintaxe do SDK v3 — a gente está na v5."

"A v5 saiu depois da data de corte. Carrega o changelog da v5 como conhecimento contextual, senão ele vai continuar inventando a partir da versão paramétrica mais antiga."
