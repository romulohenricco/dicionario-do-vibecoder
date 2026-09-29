---
description: O mundo em que o agente atua: tudo fora do harness que ele percebe por resultados de ferramenta e altera por chamadas de ferramenta.
termo_original: Environment
---

O mundo em que o [agente](./Agente.md) atua — tudo o que fica fora do [harness](./Harness.md) e que o agente percebe por [resultados de ferramenta](./Resultado%20de%20ferramenta.md) e altera por [chamadas de ferramenta](./Chamada%20de%20ferramenta.md). O harness _executa_ o agente; o ambiente é o lugar em que o agente _trabalha_. Um arquivo como o [`AGENTS.md`](./AGENTS.md.md) fica no ambiente; o harness é quem o carrega na [janela de contexto](./Janela%20de%20contexto.md). Um [sistema de arquivos](./Sistema%20de%20arquivos.md) é o tipo mais comum de ambiente, mas não o único (um banco de dados, uma API remota e uma sessão de navegador também podem ser ambientes).

O agente só vê o ambiente quando olha para ele. Tudo o que ele sabe sobre o ambiente chegou por um resultado de ferramenta, então a imagem que ele tem é um conjunto de instantâneos, cada um correto no momento em que foi tirado. Se um arquivo muda depois que o agente o leu — você o edita à mão, uma etapa de build o regenera —, o agente continua raciocinando a partir da cópia desatualizada até que algo o leve a reler. Um agente que descreve com segurança um arquivo que já não está daquele jeito costuma estar nessa situação: o ambiente mudou, o instantâneo não.

O ambiente também é a camada que persiste — a única que é sempre [stateful](./Stateful.md) (com estado). O contexto de uma [sessão](./Sess%C3%A3o.md) some quando a sessão termina, mas os arquivos gravados no ambiente permanecem para a próxima sessão ler — e é nisso que se apoiam os [sistemas de memória](./Sistema%20de%20mem%C3%B3ria.md), os [artefatos de handoff](./Artefato%20de%20handoff.md) e o `AGENTS.md`. Tudo o que um agente ainda precisa saber amanhã tem de acabar no ambiente.

Quem decide o tamanho do ambiente é você. Um [sandbox](./Sandbox.md) o reduz, limitando o que o agente consegue alcançar; adicionar uma [ferramenta](./Ferramenta.md) o amplia, trazendo um banco de dados ou uma API para o alcance do agente. O que está dentro da fronteira é o que o agente pode perceber e alterar; tudo o que está fora dela não existe para o agente. O quanto o ambiente está preparado para apoiar o trabalho do agente é a [AX](./AX.md) da base de código.

_Evite:_ usar "ambiente" para o runtime ou para o próprio harness — o harness é o invólucro, o ambiente é o espaço de trabalho.

_Uso:_

"O agente não consegue ver o schema do banco de staging."

"Coloca isso no ambiente — dá pra ele uma ferramenta `psql` com acesso somente leitura ao staging. O harness tá certo, ele só não tem nada sobre o que agir."
