---
description: Tokens que o harness envia em cada requisição ao provedor de modelo. Cobrados a uma tarifa menor que os tokens de saída.
termo_original: Input tokens
---

[Tokens](./Token.md) que o [harness](./Harness.md) envia em cada [requisição ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md) — o [prompt de sistema](./Prompt%20de%20sistema.md), o histórico da conversa, os [resultados de ferramenta](./Resultado%20de%20ferramenta.md), tudo o que o [modelo](./Modelo.md) lê antes de escrever. São cobrados a uma tarifa menor que os [tokens de saída](./Tokens%20de%20sa%C3%ADda.md), porque são mais baratos de processar.

Na programação com [IA](./IA.md), os tokens de entrada respondem pela maior parte da sua fatura. O modelo é [stateless](./Stateless.md) (sem estado), então cada [turno](./Turno.md) reenvia a [sessão](./Sess%C3%A3o.md) inteira como entrada: a primeira mensagem, cada resposta, cada resultado de ferramenta desde então. A entrada do turno cinquenta contém os quarenta e nove turnos anteriores. Uma única requisição ao provedor de modelo pode gerar algumas centenas de tokens de saída, mas reenviar cem mil tokens de entrada de histórico acumulado.

O [cache de prefixo](./Cache%20de%20prefixo.md) reduz o custo: o histórico que coincide exatamente com uma requisição anterior é cobrado como [tokens de cache](./Tokens%20de%20cache.md), mais baratos, e não como entrada a preço cheio. Quando o custo de entrada ainda pesa, a solução é diminuir o que é reenviado — [limpando o contexto](./Limpeza%20de%20contexto.md) ou [compactando](./Compacta%C3%A7%C3%A3o.md) entre tarefas.

_Uso:_

"A fatura tá alta, mas o [agente](./Agente.md) mal escreve nada."

"São os tokens de entrada — cada turno reenvia a sessão inteira. Sem o cache de prefixo, você paga de novo pelo histórico a cada requisição."
