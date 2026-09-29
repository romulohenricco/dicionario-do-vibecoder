---
description: O par formado por dois tokens — pares com sentido influenciam-se mais que os sem relação. Um contexto de N tokens tem ~N² deles.
termo_original: Attention relationship
---

Ao prever cada [token](./Token.md), o [modelo](./Modelo.md) leva em conta todos os outros tokens do [contexto](./Contexto.md) — alguns com muito peso, outros quase nenhum. O par formado por dois tokens é uma **relação de atenção**, e os pares com sentido ("ela" com "Sarah", ou uma chamada `getUser()` com a definição `function getUser`) influenciam-se mais do que os pares sem relação. Um contexto de N tokens tem da ordem de N² relações.

É nos pares que fica a aparente compreensão do modelo. Quando ele resolve um pronome, é porque a relação de atenção entre "ela" e "Sarah" é forte. Quando ele chama uma função com os argumentos certos, quem faz o trabalho é a relação entre o ponto de chamada e a definição que ele leu antes. Nada disso é buscado em lugar nenhum — é calculado do zero a cada [requisição ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md), para cada par.

O N² cresce mais rápido do que a intuição sugere:

| Tamanho do contexto | Pares (~N²)  |
| ------------------- | ------------ |
| 1.000 tokens        | ~1 milhão    |
| 10.000 tokens       | ~100 milhões |
| 100.000 tokens      | ~10 bilhões  |

Cada par também é calculado mais de uma vez. Os modelos têm várias cabeças de atenção — os números exatos dos modelos de ponta não são publicados, mas entre cinquenta e cem é um palpite razoável — e cada cabeça calcula a sua própria versão de cada relação. Ou seja, cada par da tabela acima se repete em todas as cabeças. São muitos pares.

Só um número pequeno dessas relações importa para cada tarefa. O par entre a sua instrução e o código que ela governa é um dos poucos que contam; quase todo o resto do conjunto é ruído. E os dois crescem em ritmos diferentes: as relações que importam ficam mais ou menos constantes, enquanto o total do conjunto cresce quadraticamente com o tamanho do contexto. Com 1.000 tokens, o par que interessa é um em um milhão; com 100.000 tokens, é um em dez bilhões. Essa é a aritmética por trás do [orçamento de atenção](./Or%C3%A7amento%20de%20aten%C3%A7%C3%A3o.md), e a [degradação de atenção](./Degrada%C3%A7%C3%A3o%20de%20aten%C3%A7%C3%A3o.md) é o que você percebe quando as relações que importam ficam com uma fatia pequena demais.

_Uso:_

"Ele fica confundindo os dois símbolos `user` ao longo do diff — parece que a gente caiu na [zona burra](./Zona%20inteligente.md)."

"É, a relação de atenção entre cada ponto de chamada e a sua declaração compete com a do outro símbolo — mesmo formato de token, vínculos diferentes. Renomeia um dos dois e os pares ficam mais nítidos."
