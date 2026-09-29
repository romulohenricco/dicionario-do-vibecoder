---
description: A mesma entrada pode gerar saídas diferentes. Propriedade de como os modelos geram texto e de como os provedores atendem requisições.
termo_original: Non-determinism
---

A mesma entrada pode produzir uma saída diferente. Rode um [modelo](./Modelo.md) duas vezes com o mesmo [contexto](./Contexto.md) e você pode receber duas respostas distintas — às vezes uma palavra, às vezes uma abordagem completamente diferente. Nada no seu código precisa mudar para isso acontecer.

É uma propriedade de como os modelos geram texto e de como os [provedores de modelo](./Provedor%20de%20modelo.md) atendem [requisições](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md). Durante a [inferência](./Infer%C3%AAncia.md), o modelo produz uma distribuição de probabilidade sobre os possíveis próximos [tokens](./Token.md) e um deles é sorteado — em geral com alguma aleatoriedade proposital, já que escolher sempre o token mais provável gera texto repetitivo e de qualidade inferior. Um token sorteado de forma diferente no início da resposta altera todos os tokens seguintes, e é assim que uma única palavra diferente vira uma abordagem completamente diferente. No lado do provedor, o atendimento soma mais variação: as requisições são agrupadas em lotes em hardware compartilhado, e diferenças minúsculas de ponto flutuante entre lotes podem decidir uma disputa apertada entre dois tokens. Não existe configuração que faça tudo isso desaparecer.

Espere uma dispersão de resultados de um [agente](./Agente.md) na mesma tarefa. A maioria das respostas cai dentro de uma curva de sino razoável de qualidade — é por isso que o não determinismo é tolerável — mas as caudas existem: em alguns dias o modelo parece afiado; em outros parece que perdeu o fio da meada. Mesma tarefa, lances de dado diferentes. Isso tem duas consequências práticas. Tentar de novo é uma estratégia legítima: uma tentativa que falhou é um sorteio da distribuição, e uma nova tentativa na mesma tarefa pode simplesmente sair melhor. E a verificação importa mais do que com ferramentas determinísticas — você não pode testar o comportamento de um agente uma vez e contar que ele se repita, então as [verificações automatizadas](./Verifica%C3%A7%C3%A3o%20automatizada.md) precisam capturar os sorteios ruins.

Evite criar narrativas demais para explicar o que acontece. Pessoas são máquinas de reconhecer padrões, e uma sequência de execuções ruins pode parecer prova de que "o modelo piorou esta semana". Em geral é só a distribuição.

_Uso:_

"O Claude está péssimo hoje. Será que lançaram uma versão pior?"

"Provavelmente não — a saída do modelo é não determinística. Você vai ter dias bons e dias ruins na mesma tarefa. Tente de novo amanhã antes de sair procurando uma causa."
