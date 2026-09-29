---
description: Não carrega informação adiante. O modelo é stateless entre requisições; um agente é stateless entre sessões por padrão.
---

Stateless (sem estado): não carrega informação adiante. O [modelo](./Modelo.md) é stateless entre [requisições ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md) — cada requisição reenvia toda a [janela de contexto](./Janela%20de%20contexto.md), porque o modelo não tem como ver mais nada. Um [agente](./Agente.md) é stateless entre [sessões](./Sess%C3%A3o.md) por padrão: uma sessão nova começa vazia, sem vestígio das anteriores. Contraparte de [stateful](./Stateful.md).

O próprio modelo é permanentemente stateless: seus [parâmetros](./Par%C3%A2metros.md) ficam congelados depois do [treinamento](./Treinamento.md), e nada que você faça durante a [inferência](./Infer%C3%AAncia.md) os altera. O modelo não aprende com suas correções, não se lembra de ter ouvido a mesma coisa ontem e não passa a conhecer você aos poucos, por mais que a conversa dê essa impressão. A sensação de continuidade dentro de uma sessão é produzida pelo [harness](./Harness.md), que guarda a transcrição e a reenvia a cada requisição. O modelo não se lembra da conversa; ele a relê.

Na prática: se você quer que algo seja lembrado entre sessões, precisa escrever isso em algum lugar que o agente vá ler de volta. É isso que são os [arquivos AGENTS.md](./AGENTS.md.md), os [sistemas de memória](./Sistema%20de%20mem%C3%B3ria.md) e os [artefatos de handoff](./Artefato%20de%20handoff.md) — arquivos que são carregados no [contexto](./Contexto.md) das sessões futuras, no lugar da memória que o modelo não tem. Quando o agente insiste num erro que você já corrigiu, a pergunta não é por que ele não aprendeu — ele não pode — e sim onde essa correção deve ser escrita para que toda sessão futura a leia.

_Uso:_

"Por que ele esquece a convenção toda vez que eu [limpo o contexto](./Limpeza%20de%20contexto.md)?"

"O modelo é stateless — a sessão nova começa vazia. Se você quer que isso passe de uma sessão pra outra, escreve no AGENTS.md ou num arquivo de memória que o harness carrega no início da sessão."
