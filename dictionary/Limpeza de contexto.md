---
description: Encerrar a sessão atual e começar uma nova. A próxima mensagem começa com sessão vazia e janela de contexto vazia.
termo_original: Clearing
---

Encerrar a [sessão](./Sess%C3%A3o.md) atual e começar uma nova. A próxima mensagem começa com uma sessão vazia e uma [janela de contexto](./Janela%20de%20contexto.md) vazia. Geralmente é uma ação do usuário.

A limpeza de contexto é a solução para um contexto poluído. Uma sessão acumula tudo: tentativas que falharam, caminhos errados, [resultados de ferramenta](./Resultado%20de%20ferramenta.md) desatualizados, planos abandonados. O [modelo](./Modelo.md) relê tudo isso a cada [turno](./Turno.md), e um histórico ruim atrapalha o trabalho novo. No meio de uma sessão longa, o [agente](./Agente.md) fica mais vago e menos obediente — instruções que você deu com clareza são ignoradas, a qualidade cai, e insistir para ele fazer melhor não adianta, porque o ruído em que ele está atolado continua no [contexto](./Contexto.md). A limpeza remove o ruído.

Limpar não apaga a conversa. A maioria dos [harnesses](./Harness.md) guarda o histórico das sessões no seu computador, então a transcrição continua lá para ler ou retomar. O que se perde é o estado de trabalho do agente: o modelo é [stateless](./Stateless.md), então a sessão nova não sabe nada do que a antiga sabia. Se a sessão contém decisões ou progresso de que a próxima vai precisar, peça ao agente que escreva um [artefato de handoff](./Artefato%20de%20handoff.md) antes e inicie a sessão nova apontando para ele.

Compare com a [compactação](./Compacta%C3%A7%C3%A3o.md), que resume a sessão no novo contexto, em vez de começar vazio. A limpeza é o recurso menos seletivo: nada é levado adiante, nem o lixo.

_Uso:_

"Ele está preso em loop no teste que falha."

"Limpa e abre uma sessão nova só com o documento de plano e o arquivo de teste. Não adianta brigar com o contexto que está aí."
