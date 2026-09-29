---
description: "Handoff feito em memória: resume-se a sessão anterior e o resumo inicia uma sessão nova. Com perdas: detalhe trocado por folga."
termo_original: Compaction
---

Um [handoff](./Handoff.md) feito em memória: o histórico da [sessão](./Sess%C3%A3o.md) anterior é resumido, e o resumo inicia uma sessão nova. Com perdas de propósito: a transcrição é uma [fonte primária](./Fonte%20prim%C3%A1ria.md), o resumo é uma [fonte secundária](./Fonte%20secund%C3%A1ria.md) — detalhe trocado por folga. Acionada manualmente pelo usuário ou automaticamente via [autocompactação](./Autocompacta%C3%A7%C3%A3o.md).

O mecanismo: a [janela de contexto](./Janela%20de%20contexto.md) é finita, e uma sessão longa a enche — cada [resultado de ferramenta](./Resultado%20de%20ferramenta.md), cada arquivo lido, cada caminho errado continua no histórico. Quando o histórico fica pesado, o [harness](./Harness.md) pede ao [modelo](./Modelo.md) que resuma a sessão, descarta o histórico original e inicia uma sessão nova com o resumo. O que não entrou no resumo some do contexto. Alguns harnesses suavizam isso mantendo a transcrição antiga em disco e deixando no resumo um [ponteiro de contexto](./Ponteiro%20de%20contexto.md) para ela — a fonte secundária aponta de volta para a fonte primária, e um detalhe que o resumo perdeu pode ser recuperado relendo o original.

O resumo é escrito pelo modelo, então dá para orientá-lo com um prompt. "Preserve as decisões de schema" deixa o resumo gerado mais deliberado. O momento também importa — compacte na virada de fase, depois que o plano está definido, não no meio de uma tarefa.

Compare com a [limpeza de contexto](./Limpeza%20de%20contexto.md), que descarta tudo e recomeça do zero: a compactação tenta levar o essencial para a sessão nova; a limpeza aposta que o essencial já está escrito em outro lugar, melhor.

_Uso:_

"O [contexto](./Contexto.md) está ficando pesado e eu ainda tenho a rodada de testes pela frente."

"Compacta antes de começar — escreve no prompt do resumo o que precisa sobreviver, para a sessão nova manter as decisões de schema e largar a exploração."
