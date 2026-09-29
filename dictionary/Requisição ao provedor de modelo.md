---
description: Uma ida e volta do harness ao provedor de modelo. O harness envia o contexto; o provedor devolve uma resposta.
termo_original: Model provider request
---

Uma ida e volta do [harness](./Harness.md) ao [provedor de modelo](./Provedor%20de%20modelo.md). O harness envia o [contexto](./Contexto.md) atual; o provedor devolve uma resposta (uma [chamada de ferramenta](./Chamada%20de%20ferramenta.md) ou uma resposta final). Uma única mensagem do usuário pode gerar muitas requisições ao provedor de modelo se o [agente](./Agente.md) chamar [ferramentas](./Ferramenta.md) — cada [resultado de ferramenta](./Resultado%20de%20ferramenta.md) dispara outra requisição.

Cada requisição carrega tudo: o [prompt de sistema](./Prompt%20de%20sistema.md), a conversa inteira até ali, todos os resultados de ferramenta. O [modelo](./Modelo.md) é [stateless](./Stateless.md), então o provedor não guarda nada entre requisições — a requisição quarenta reenvia o que a trinta e nove enviou, mais um resultado de ferramenta. O [cache de prefixo](./Cache%20de%20prefixo.md) existe para que essa repetição tenha um custo viável.

A requisição também é a unidade de cobrança. [Tokens de entrada](./Tokens%20de%20entrada.md), [tokens de saída](./Tokens%20de%20sa%C3%ADda.md) e descontos de cache são todos contados por requisição, e é por isso que uma pergunta aparentemente inocente pode custar uma quantia surpreendente: o custo não é proporcional à sua mensagem, e sim ao número de requisições vezes o tamanho do contexto que cada uma carrega.

Vale distinguir a requisição do [turno](./Turno.md). Um turno é uma troca com você, e um único turno — "conserta o teste que está falhando" — se desenrola como uma cadeia de requisições:

| Requisição | O modelo devolve                               | Em seguida, o harness                                 |
| ---------- | ---------------------------------------------- | ----------------------------------------------------- |
| 1          | Chamada de ferramenta: rodar os testes         | Roda os testes e anexa a saída da falha               |
| 2          | Chamada de ferramenta: ler o arquivo de teste  | Anexa o conteúdo do arquivo                           |
| 3          | Chamada de ferramenta: ler o arquivo-fonte     | Anexa o conteúdo do arquivo                           |
| 4          | Chamada de ferramenta: editar o arquivo-fonte  | Aplica a edição e anexa o resultado                   |
| 5          | Chamada de ferramenta: rodar os testes de novo | Roda os testes e anexa a saída com os testes passando |
| 6          | Resposta final: "corrigido, testes passando"   | Mostra a resposta a você                              |

Seis requisições para um turno — cada uma reenviando o contexto inteiro. Quando você se perguntar para onde foram os [tokens](./Token.md), conte as requisições, não os turnos.

_Uso:_

"Uma pergunta queimou quarenta mil tokens?"

"Olha as chamadas de ferramenta — doze greps, oito reads, quatro edits. Cada resultado de ferramenta gera outra requisição ao provedor de modelo, e o prefixo da [sessão](./Sess%C3%A3o.md) inteira é reenviado toda vez."
