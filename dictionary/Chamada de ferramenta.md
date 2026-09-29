---
description: A saída do modelo que nomeia uma ferramenta e seus argumentos — só texto estruturado. O harness precisa ler e executar.
termo_original: Tool call
---

A saída do [modelo](./Modelo.md) que nomeia uma [ferramenta](./Ferramenta.md) e seus argumentos — só texto estruturado. Ela não faz nada por conta própria; o [harness](./Harness.md) precisa lê-la e executá-la. É produzida pelo modelo em uma única [requisição ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md).

O ciclo de vida de uma chamada de ferramenta:

| Etapa | Quem    | O que acontece                                                                                               |
| ----- | ------- | ------------------------------------------------------------------------------------------------------------ |
| 1     | Modelo  | Descobre quais ferramentas existem pelas descrições no [prompt de sistema](./Prompt%20de%20sistema.md)       |
| 2     | Modelo  | Emite uma chamada — nome da ferramenta mais argumentos, geralmente em JSON — e para                          |
| 3     | Harness | Faz o parse da chamada e a confere com o [modo de permissão](./Modo%20de%20permiss%C3%A3o.md)                |
| 4     | Harness | Executa, se ela for permitida                                                                                |
| 5     | Harness | Devolve o desfecho como um [resultado de ferramenta](./Resultado%20de%20ferramenta.md) na próxima requisição |

Um [turno](./Turno.md) de trabalho do [agente](./Agente.md) costuma ser composto de várias dessas idas e voltas encadeadas.

Como a chamada é gerada por [previsão do próximo token](./Previs%C3%A3o%20do%20pr%C3%B3ximo%20token.md), como todo o resto, ela pode estar errada como qualquer outra saída de modelo: um path que não existe, uma flag que o comando não tem, argumentos plausíveis em vez de corretos. O harness executa o que foi escrito, não o que se quis dizer — um path digitado errado não gera um erro amigável, ele edita o arquivo errado.

_Uso:_

"Ele disse que rodou os testes, mas os timestamps dos arquivos não mudaram."

"Dá uma olhada na transcrição — ele emitiu mesmo uma chamada de ferramenta ou só descreveu que rodou? O modelo produz a chamada, mas se o harness não executou, nada aconteceu."
