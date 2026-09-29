---
description: O processo que define os parâmetros de um modelo ao expô-lo a muito texto e ajustá-los para melhorar a previsão do próximo token.
termo_original: Training
---

O processo que define os [parâmetros](./Par%C3%A2metros.md) de um [modelo](./Modelo.md), expondo-o a grandes quantidades de texto e ajustando os parâmetros para melhorar a [previsão do próximo token](./Previs%C3%A3o%20do%20pr%C3%B3ximo%20token.md). Um processo pontual e caro, feito pelo [provedor de modelo](./Provedor%20de%20modelo.md). Abrange tanto o pré-treinamento (a rodada principal) quanto o pós-treinamento (refinamentos posteriores, como o ajuste para seguir instruções e para segurança); a distinção não importa no nível deste glossário.

O mecanismo é repetição em escala: mostrar ao modelo um trecho de texto, pedir que ele preveja o próximo [token](./Token.md), ajustar os parâmetros um pouco na direção do token que realmente veio a seguir e repetir isso ao longo de trilhões de tokens. Nada é armazenado como fato ou regra — tudo o que o modelo "sabe" é um efeito colateral de ficar melhor na previsão, comprimido nos parâmetros como [conhecimento paramétrico](./Conhecimento%20param%C3%A9trico.md).

Duas consequências importam no dia a dia. O treinamento termina em um ponto no tempo, então o modelo tem uma [data de corte do conhecimento](./Data%20de%20corte%20do%20conhecimento.md) — ele não viu a versão da biblioteca para a qual você atualizou no mês passado. E você não tem como treinar o modelo: quando o modelo não conhece sua base de código, suas convenções ou suas APIs internas, a solução nunca é "ensinar o modelo" — é colocar esse material no [contexto](./Contexto.md), a única entrada que você controla.

_Uso:_

"Dá pra fazer ele conhecer a nossa API interna?"

"Por treinamento não — isso é um processo de meses do provedor de modelo. Carrega a documentação da API no contexto, essa é a alavanca que você realmente tem."
