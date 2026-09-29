---
description: Sistema que tenta tornar um agente stateful entre sessões, gravando no ambiente e recarregando no início da sessão.
termo_original: Memory system
---

Sistema que tenta tornar um [agente](./Agente.md) [stateful](./Stateful.md) entre [sessões](./Sess%C3%A3o.md). Persiste informações no [ambiente](./Ambiente.md) durante uma sessão e as recarrega na [janela de contexto](./Janela%20de%20contexto.md) no início das sessões seguintes, de modo que o agente mantém continuidade mesmo depois de o usuário [limpar](./Limpeza%20de%20contexto.md) a sessão.

Um sistema de memória tem duas metades. No caminho de escrita, durante uma sessão, o agente registra o que aprendeu — uma preferência que você declarou, um fato sobre o projeto — como arquivos no ambiente. No caminho de leitura, no início da sessão, o [harness](./Harness.md) carrega esses arquivos, ou um índice deles, de volta na janela de contexto. Muitos harnesses já trazem seu próprio sistema de memória — o `/memory` do Claude Code é um deles — mas você também pode montar o seu: um diretório de notas mais uma instrução no [AGENTS.md](./AGENTS.md.md) para consultá-lo.

Valem as mesmas contrapartidas de qualquer conteúdo sempre carregado. As memórias se acumulam, então a maioria dos sistemas carrega um índice de uma linha e deixa o conteúdo completo acessível por meio de [ponteiros de contexto](./Ponteiro%20de%20contexto.md), em vez de incluir tudo direto no contexto. E memórias são [fontes secundárias](./Fonte%20secund%C3%A1ria.md), então sofrem desvio: um fato registrado em março é carregado com a mesma confiança em junho, depois que o projeto já mudou. Um sistema de memória precisa de poda, do mesmo jeito que o AGENTS.md.

_Uso:_

"Toda hora tenho que repetir pra ele que eu uso Postgres, não MySQL."

"Monta um sistema de memória — grava o que ele aprende no [sistema de arquivos](./Sistema%20de%20arquivos.md) logo no primeiro [turno](./Turno.md) e recarrega no início da sessão. O [modelo](./Modelo.md) em si é [stateless](./Stateless.md); a camada de memória só simula a continuidade."
