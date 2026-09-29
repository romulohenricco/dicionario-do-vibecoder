---
description: Padrão de trabalho em que o usuário aceita o código do agente sem revisão humana. O diff é tratado como opaco.
---

Vibe coding (algo como "programar no embalo") é um padrão de trabalho em que o usuário aceita o código do [agente](./Agente.md) sem [revisão humana](./Revis%C3%A3o%20humana.md). O diff é tratado como opaco: o que importa é se o programa se comporta bem, não o que há dentro dele. [Revisão automatizada](./Revis%C3%A3o%20automatizada.md) e [verificações automatizadas](./Verifica%C3%A7%C3%A3o%20automatizada.md) podem continuar rodando; o vibe coding não diz nada a respeito de nenhuma das duas.

O termo vem de Andrej Karpathy, que o [cunhou no início de 2025](https://x.com/karpathy/status/1886192184808149383): você "se entrega por completo às vibes" e "esquece que o código sequer existe". Descreve o que quer, aceita o que volta e avalia rodando o programa.

O vibe coding troca inspeção por velocidade. Ler diffs costuma ser a etapa mais lenta do trabalho com agentes, então abrir mão dela remove o principal gargalo. Em código cujas falhas custam pouco, como [protótipos](./Prototipagem.md), scripts descartáveis e ferramentas internas, a troca é razoável. O risco cresce com a vida útil do código e com o que está em jogo nele.

O custo chega depois. As mudanças feitas com vibe coding se acumulam numa base de código que ninguém leu, e o comportamento foi a única coisa checada. Por isso, tudo o que o comportamento não revela, como um segredo escrito nos logs, um caso de borda esquecido ou um tratamento de dados errado sem aviso, vai para produção sem que ninguém veja. A primeira vez que alguém depura o sistema é a primeira vez que alguém lê o código. Sem revisão humana, tudo o que ainda rodar de forma automática (testes, tipos, revisão automatizada) é a única barreira pela qual o código passa. Quando essa mesma postura vale para uma base de código inteira, ou para parte dela, e as mudanças vêm de uma [fábrica de software](./F%C3%A1brica%20de%20software.md), o resultado é uma [fábrica escura](./F%C3%A1brica%20escura.md).

_Evite:_ "vibe coding" como sinônimo de "programação com IA de baixa qualidade". O termo nomeia a postura de revisão, não o código resultante.

_Uso:_

"Você leu o que ele mudou no fluxo de autenticação?"

"Fiz no vibe coding. O login continua funcionando, foi só isso que eu conferi."

"Leia o diff antes de dar push. Ir no embalo em autenticação é assim que segredo vaza nos logs."
