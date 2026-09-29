---
description: Base de código, ou parte dela, em que uma fábrica de software escreve o código e nenhum humano o revisa.
termo_original: Dark factory
---

Uma base de código, ou parte dela, em que uma [fábrica de software](./F%C3%A1brica%20de%20software.md) escreve o código e nenhum humano o lê. Não há [revisão humana](./Revis%C3%A3o%20humana.md). Humanos ainda podem escrever as issues que iniciam o trabalho. Mas ninguém lê o código que sai. O nome vem das fábricas "lights-out" (de luzes apagadas), que produzem sem ninguém no chão de fábrica.

Uma fábrica escura é [vibe coding](./Vibe%20coding.md) para uma área de código, e não para uma única mudança. Quando você faz vibe coding, decide não ler uma mudança que pediu. Mas sabe que a mudança existe. Numa fábrica escura, o time faz essa escolha uma única vez, para a área inteira. Depois disso, nenhuma pessoa pede cada mudança nem a vê. As mudanças chegam na velocidade em que os gatilhos iniciam novos trabalhos.

O problema aparece quando algo quebra. Você não sabe o que mudou, porque ninguém leu as mudanças. Você tem que depurar um código que ninguém do time leu. A causa pode estar em qualquer uma das várias mudanças, e cada uma delas passou nas verificações.

As [verificações automatizadas](./Verifica%C3%A7%C3%A3o%20automatizada.md) e a [revisão automatizada](./Revis%C3%A3o%20automatizada.md) são as únicas barreiras. Se elas não encontram um problema, o problema entra no código.

_Evite:_ chamar uma base de código de "escura" só porque a fábrica roda sem ninguém acompanhando. Se [sessões](./Sess%C3%A3o.md) de [agente](./Agente.md) rodam [AFK](./AFK.md) e um humano revisa os PRs delas, isso é uma fábrica de software. Não é uma fábrica escura.

_Uso:_

"Quem mudou a lógica de retry do serviço de billing? Ninguém do time se lembra disso."

"O serviço de billing é uma fábrica escura. Os agentes fazem merge de tudo o que passa no CI. Ninguém leu essa mudança."
