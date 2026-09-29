---
description: Agente criado por outro agente via chamada de ferramenta. Roda em sessão própria e devolve um único resultado. Não pode criar subagentes.
termo_original: Subagent
---

Um [agente](./Agente.md) criado por outro agente por meio de uma [chamada de ferramenta](./Chamada%20de%20ferramenta.md). Roda em sua própria [sessão](./Sess%C3%A3o.md), com sua própria [janela de contexto](./Janela%20de%20contexto.md), e devolve um único [resultado de ferramenta](./Resultado%20de%20ferramenta.md) ao agente pai. Difere de um [handoff](./Handoff.md): o pai espera um retorno, e o handoff não tem caminho de volta. **Não pode criar outros subagentes**, então a árvore tem apenas um nível de profundidade. Subagentes existem para isolar [contexto](./Contexto.md), não para compor hierarquias.

O objetivo é manter o trabalho ruidoso fora do contexto do agente pai. Uma busca ampla ou uma longa sequência de leituras de arquivos produz páginas de resultados de ferramenta, e a maior parte só importa até o momento de achar a resposta. Rodando dentro do pai, tudo isso fica no contexto dele pelo resto da sessão. Rodando dentro de um subagente, o ruído enche uma janela descartável, e só o relatório final chega ao contexto do pai. Esse relatório é uma [fonte secundária](./Fonte%20secund%C3%A1ria.md): o pai recebe o relato do subagente sobre o que ele encontrou, não os resultados brutos, então tudo o que o relatório deixa de fora fica invisível para o pai.

Subagentes também rodam de forma concorrente: um pai pode abrir vários em paralelo, cada um numa parte independente do trabalho.

_Uso:_

"Os resultados do grep estão estourando meu contexto."

"Dispara um subagente pra fazer a busca — ele gasta a janela de contexto dele com o ruído e volta só com os dois caminhos de arquivo de que você precisa de verdade."
