---
description: Armazenamento no provedor que evita reprocessar o prefixo repetido entre requisições e cobra esses tokens a uma tarifa menor.
termo_original: Prefix cache
---

O armazenamento no lado do [provedor](./Provedor%20de%20modelo.md) que permite que [requisições consecutivas ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md) pulem o reprocessamento de um prefixo compartilhado. Quando o início de uma requisição coincide com o início de uma requisição recente (mesmo [prompt de sistema](./Prompt%20de%20sistema.md), mesmo histórico até certo ponto), o provedor reaproveita o trabalho anterior e cobra esses [tokens](./Token.md) como [tokens de cache](./Tokens%20de%20cache.md), a uma tarifa bem menor.

O cache compensa porque as sessões crescem apenas no final (append-only). Toda requisição reenvia o histórico inteiro como [tokens de entrada](./Tokens%20de%20entrada.md) (veja esse verbete para entender o porquê) e, numa [sessão](./Sess%C3%A3o.md) normal, o histórico só muda no final: cada requisição é a anterior mais algumas mensagens novas. O provedor processa uma vez o longo trecho inicial compartilhado, guarda o resultado e continua de onde o prefixo termina. Sem o cache, uma sessão de 50 [turnos](./Turno.md) pagaria 50 vezes para reprocessar o primeiro turno.

Os caches também expiram. O tempo que uma entrada continua "quente" varia conforme o provedor de modelo, em geral minutos, não horas. Se você deixa a sessão parada além dessa janela, a próxima requisição reconstrói o prefixo uma vez, pela tarifa cheia, e só depois disso o cache volta a funcionar. Isso interessa sobretudo a quem constrói um [harness](./Harness.md). Para quem usa, o efeito visível é que as requisições depois de uma pausa longa custam mais do que as anteriores.

_Uso:_

"Por que a fatura disparou no meio da sessão?"

"O harness começou a injetar a hora atual no prompt de sistema a cada turno. O cache de prefixo quebra no primeiro token que muda, então toda requisição depois disso foi cobrada pela tarifa cheia."
