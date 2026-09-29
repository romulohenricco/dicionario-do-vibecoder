---
description: O que o modelo sabe do treinamento, guardado nos parâmetros. Congelado no treinamento. Par do conhecimento contextual.
termo_original: Parametric knowledge
---

O que o [modelo](./Modelo.md) "sabe" a partir do [treinamento](./Treinamento.md), guardado nos seus [parâmetros](./Par%C3%A2metros.md). Congelado no momento do treinamento — o modelo não enxerga os próprios parâmetros nem consegue atualizá-los. Detalhes se perdem na compressão: bilhões de fatos são comprimidos em um número fixo de parâmetros, e os raros ficam borrados. É a fonte da fluência em assuntos comuns e de invenção nos incomuns. Par do [conhecimento contextual](./Conhecimento%20contextual.md).

O conhecimento paramétrico não é armazenado como fatos. O treinamento nunca dá ao modelo um banco de dados para consultar; ele ajusta os parâmetros até o modelo prever bem o texto, e um modelo que prevê bem o texto sobre um tema se comporta como se conhecesse o tema. A confiabilidade do conhecimento acompanha a frequência com que algo apareceu nos dados de treinamento: um tema com milhões de exemplos é reproduzido com precisão, já num tema com poucos exemplos o modelo chuta com base no que costuma valer para temas parecidos. Para o modelo, reproduzir e chutar são o mesmo processo, então ele não sabe dizer qual dos dois está fazendo. Uma resposta inventada chega com a mesma fluência de uma correta. [Alucinação](./Alucina%C3%A7%C3%A3o.md) é o modelo chutando errado.

O conhecimento paramétrico também envelhece. Os parâmetros param de mudar na [data de corte do conhecimento](./Data%20de%20corte%20do%20conhecimento.md), então uma biblioteca lançada ou renomeada depois dessa data não existe neles, e uma API que mudou é lembrada na forma antiga.

Nas duas lacunas — raro demais e recente demais — o remédio é o mesmo: o conhecimento não pode ser adicionado aos parâmetros, então precisa ser fornecido como conhecimento contextual.

_Uso:_

"Ele escreve React impecável, mas inventa métodos no nosso SDK interno."

"O React está bem representado no conhecimento paramétrico: são milhões de exemplos de treinamento. O SDK interno não está, então o modelo preenche com formatos que parecem plausíveis. Carregue a documentação do SDK no [contexto](./Contexto.md)."
