---
description: A unidade atômica que um modelo lê e escreve, de tamanho próximo ao de uma palavra. Contexto, custo e latência são medidos em tokens.
---

Token é a unidade atômica que um [modelo](./Modelo.md) lê e escreve. Tem tamanho próximo ao de uma palavra, mas não exatamente: palavras comuns equivalem a um token, e palavras raras ou longas se dividem em vários. O tamanho da [janela de contexto](./Janela%20de%20contexto.md), o custo e a latência são todos contados em tokens.

O texto vira tokens por meio de um tokenizador: um vocabulário fixo de dezenas de milhares de fragmentos, aprendido antes do [treinamento](./Treinamento.md), que divide qualquer entrada em uma sequência de itens desse vocabulário. O modelo nunca vê caracteres nem palavras. Todo texto é convertido em tokens na entrada, e a [previsão do próximo token](./Previs%C3%A3o%20do%20pr%C3%B3ximo%20token.md) produz a saída um token por vez.

Como regra prática, um token equivale a cerca de três quartos de uma palavra em inglês, então mil tokens são aproximadamente 750 palavras. Código é menos previsível: palavras-chave e construções comuns são tokenizadas de forma compacta, enquanto identificadores gerados, hashes, blocos em base64 e saída minificada se dividem em muitos tokens por "palavra". O padrão é este: texto que apareceu com frequência no material que originou o tokenizador recebe codificações curtas e eficientes, e texto que não apareceu é dividido em muitos pedaços pequenos. Um hash como `a3f9c2e1` nunca apareceu em lugar nenhum, então se divide em vários tokens, enquanto `function` é um só. Por isso um arquivo de aparência pequena, cheio de strings incomuns, pode ocupar uma parte da janela de contexto maior do que se espera.

Tudo o mais é medido em tokens. O custo é por token, e os provedores cobram [tokens de entrada](./Tokens%20de%20entrada.md) e [tokens de saída](./Tokens%20de%20sa%C3%ADda.md) separadamente. A velocidade é medida em tokens por segundo, já que a saída é gerada um token por vez. E a janela de contexto é um número fixo de tokens, então a contagem de tokens dos seus arquivos decide quanto cabe.

_Evite:_ "palavra". As fronteiras dos tokens não coincidem com as das palavras, e as unidades que de fato importam são tokens por segundo e tokens por dólar.

_Uso:_

"Qual vai ser o tamanho desse prompt?"

"Passa pelo tokenizador. O schema é compacto, mas as chaves do JSON são estranhas, então vão virar mais tokens do que você imagina."
