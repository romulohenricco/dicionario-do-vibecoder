---
description: Tokens que o modelo gera de volta. Cobrados a uma tarifa maior que os tokens de entrada, pois custam mais processamento para produzir.
aliases:
  - Output tokens
  - Tokens gerados
termo_original: Output tokens
---

Os [tokens](./Token.md) que o [modelo](./Modelo.md) gera de volta. São cobrados a uma tarifa maior que a dos [tokens de entrada](./Tokens%20de%20entrada.md), geralmente cerca de cinco vezes a tarifa de entrada, porque custam mais processamento para produzir.

Tudo o que o modelo escreve conta: o texto que você lê, o código que ele emite, as [chamadas de ferramenta](./Chamada%20de%20ferramenta.md) e qualquer raciocínio estendido que ele faz antes de responder. Esse último ponto surpreende muita gente: os tokens de raciocínio são cobrados como saída mesmo que o [harness](./Harness.md) muitas vezes não os mostre a você, e aumentar o [esforço](./Esfor%C3%A7o%20de%20racioc%C3%ADnio.md) gasta mais deles.

Os tokens de saída também definem o ritmo de uma [sessão](./Sess%C3%A3o.md). O modelo lê a entrada rapidamente, mas gera a saída um token por vez. Por isso, quando um [turno](./Turno.md) parece lento, quase sempre o que demora é a escrita da saída, e não a leitura da entrada. Uma espera longa costuma indicar que vem uma resposta longa.

_Uso:_

"A sessão de refatoração está torrando crédito, mesmo com entradas pequenas."

"O agente está reescrevendo arquivos inteiros em vez de aplicar patches. Tokens de saída custam cerca de cinco vezes a tarifa de entrada. Faz ele emitir só as edições e a fatura cai."
