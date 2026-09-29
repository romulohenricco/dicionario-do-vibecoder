---
description: Compactação disparada automaticamente pelo harness quando a janela de contexto está quase cheia.
termo_original: Autocompact
---

[Compactação](./Compacta%C3%A7%C3%A3o.md) disparada automaticamente pelo [harness](./Harness.md) quando a [janela de contexto](./Janela%20de%20contexto.md) está quase cheia.

O harness acompanha o quanto da janela de contexto está ocupado. Quando esse nível ultrapassa um limite — em geral perto de 80% — ele pausa, pede ao [modelo](./Modelo.md) que resuma a [sessão](./Sess%C3%A3o.md) até ali e inicia uma sessão nova com esse resumo. O trabalho continua como se nada tivesse acontecido.

Só que algo aconteceu. A compactação tem perdas, e a autocompactação tem perdas num momento que você não escolheu. Uma compactação manual acontece na virada de fase, quando você pode dizer ao modelo o que preservar. A autocompactação dispara no meio da tarefa, sempre que o limite é atingido — possivelmente no meio de uma refatoração, com o resumo decidindo por conta própria quais das suas decisões vale a pena manter. O sintoma clássico: o [agente](./Agente.md) segue em frente com confiança, mas esqueceu, sem avisar, uma restrição que você definiu uma hora atrás, e você só percebe quando o trabalho dele começa a contradizê-la.

A defesa é não deixar que ela dispare. Acompanhe o indicador de contexto e compacte manualmente numa virada natural, ou registre as decisões num documento de plano ou num [artefato de handoff](./Artefato%20de%20handoff.md) em disco, onde nenhum resumo consegue perdê-las. A maioria dos harnesses também permite ajustar a margem de segurança — adiantando ou atrasando o limite, ou desligando a autocompactação por completo — para regular quanta folga sobra antes de ela disparar.

_Uso:_

"Parece que ele não lembra o que a gente decidiu sobre o schema lá atrás."

"A autocompactação disparou entre [turnos](./Turno.md) — as decisões do começo viraram resumo e a gente deve ter perdido alguma coisa. Recarrega o documento de plano, ou compacta manualmente da próxima vez para controlar o que fica."
