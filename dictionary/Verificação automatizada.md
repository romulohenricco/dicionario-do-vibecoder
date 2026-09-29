---
description: Verificação determinística executada no ambiente — testes, tipos, lint, build, hooks de pre-commit. Passa ou falha, sem julgamento.
termo_original: Automated check
---

Uma verificação determinística executada no [ambiente](./Ambiente.md) — testes, verificação de tipos, lint, build, hooks de pre-commit. Passa ou falha, sem julgamento. É o sinal a partir do qual um [agente](./Agente.md) consegue se autocorrigir sem envolver mais ninguém. Um teste instável (flaky) é uma verificação quebrada, e não a ausência de verificação; verificações automatizadas são determinísticas _por definição_.

A autocorreção funciona como um loop. O agente faz uma mudança, roda a verificação como uma [chamada de ferramenta](./Chamada%20de%20ferramenta.md) e a saída da falha chega à sua [janela de contexto](./Janela%20de%20contexto.md) — um erro de tipo com arquivo e linha, uma asserção que falhou com o valor esperado e o obtido. Isso basta para o agente corrigir o problema e rodar a verificação de novo, e de novo, até passar, sem nenhum humano no loop. O determinismo é o que torna o loop confiável: o mesmo código sempre produz o mesmo veredito, então um "passou" quer dizer algo. Uma verificação instável compromete isso — o agente "corrige" código que estava certo, ou repete a execução até passar e deixa escapar uma falha real.

Por isso, boas verificações pesam bastante na [AX](./AX.md) de uma base de código. Um agente num repositório com tipagem estrita, um conjunto de testes rápido e um linter pega a maioria dos próprios erros antes de você vê-los; um agente num repositório sem nada disso entrega qualquer coisa que produza. A diferença pesa mais nas execuções [AFK](./AFK.md), em que as verificações são a única conferência feita durante a execução. Mas uma verificação só pega o que ela afirma — verificações verdes significam que as propriedades afirmadas valem, não que o código está certo. As lacunas que exigem julgamento ficam para a [revisão automatizada](./Revis%C3%A3o%20automatizada.md) e a [revisão humana](./Revis%C3%A3o%20humana.md).

_Evite:_ "loop de feedback" / "backpressure" — ambos misturam verificações com revisão. _Evite:_ "teste" — testes são verificações automatizadas, mas nem toda verificação automatizada é um teste.

_Uso:_

"O agente continua entregando código quebrado nas execuções AFK."

"Quais verificações automatizadas estão configuradas no [sandbox](./Sandbox.md)?"

"Só os testes unitários."

"Adiciona typecheck e lint — ele se autocorrige com esses dois antes de o PR chegar."
