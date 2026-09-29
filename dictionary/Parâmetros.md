---
description: Os números dentro de um modelo, muitas vezes bilhões, ajustados no treinamento. Tudo o que ele sabe está neles. Também chamados de pesos.
termo_original: Parameters
aliases:
  - Pesos
  - Weights
---

Os números dentro de um [modelo](./Modelo.md) — muitas vezes bilhões deles — ajustados durante o [treinamento](./Treinamento.md). Tudo o que o modelo "sabe" está neles. O treinamento define esses números; a [inferência](./Infer%C3%AAncia.md) os usa sem alterá-los. Também chamados de _pesos_.

Mecanicamente, os parâmetros são o que transforma entrada em saída. A [previsão do próximo token](./Previs%C3%A3o%20do%20pr%C3%B3ximo%20token.md) é um cálculo gigante: os [tokens](./Token.md) da [janela de contexto](./Janela%20de%20contexto.md) entram, são multiplicados pelos parâmetros e sai uma previsão para o próximo token. Não existe um banco de dados de fatos dentro do modelo, nem uma tabela de consulta de código, apenas esses números, organizados de modo que o cálculo tenda a produzir uma saída útil. Os fatos que o modelo consegue recitar a partir do treinamento, como a API de uma biblioteca padrão, são [conhecimento paramétrico](./Conhecimento%20param%C3%A9trico.md): ficam guardados nos parâmetros e não são buscados em lugar nenhum.

O detalhe a fixar é que os parâmetros ficam congelados depois do treinamento. Nada do que você faz em uma [sessão](./Sess%C3%A3o.md) os altera: nenhuma correção sua, nenhuma base de código que você mostre, nenhum erro com o qual ele aprenda. Toda sessão roda sobre os mesmos números. É por isso que o modelo é [stateless](./Stateless.md), que o conhecimento embutido dele para na [data de corte do conhecimento](./Data%20de%20corte%20do%20conhecimento.md) e que tudo o que é específico do projeto precisa chegar pelo [contexto](./Contexto.md). Os parâmetros só mudam com mais treinamento, o que produz, na prática, outro modelo.

_Uso:_

"Dá pra fazer fine-tuning dele na nossa base de código?"

"Isso atualizaria os parâmetros, e aí seria outro modelo. Para um projeto só, quase sempre sai mais barato carregar a base de código como contexto do que retreinar."
