---
description: Menção em um documento que aponta para outro, para o agente carregá-lo no contexto só quando a tarefa pedir.
termo_original: Context pointer
---

Menção em um documento que aponta para outro, para que o [agente](./Agente.md) possa puxá-lo para a [janela de contexto](./Janela%20de%20contexto.md) só quando a tarefa pedir. É a unidade de que a [divulgação progressiva](./Divulga%C3%A7%C3%A3o%20progressiva.md) é feita.

O motivo para usar um ponteiro (em vez de colar o conteúdo) é o custo. Um ponteiro ocupa uma linha na janela de contexto. O documento por trás dele pode ter milhares de [tokens](./Token.md), mas esses tokens não custam nada até o agente de fato seguir o ponteiro. Se você colar um runbook de 2.000 tokens no [AGENTS.md](./AGENTS.md.md), toda [sessão](./Sess%C3%A3o.md) paga por ele; se você trocar por "processo de deploy: veja `internal/deploy.md`", só as sessões que fazem deploy chegam a carregá-lo. O agente segue o ponteiro com uma [chamada de ferramenta](./Chamada%20de%20ferramenta.md) quando a tarefa combina.

Um ponteiro precisa de duas partes para funcionar: um caminho estável e descrição suficiente para o agente saber quando vale a pena segui-lo. Um caminho solto é um ponteiro que o agente não tem motivo para seguir; "veja `internal/deploy.md`" sem nenhuma pista do que há dentro acaba ignorado por uma sessão que precisava dele. Escreva a linha conforme o modo como as tarefas chegam: "release, deploy ou rollback — leia `internal/deploy.md` primeiro".

Ponteiros estão em toda parte quando você começa a procurar: linhas no AGENTS.md, descrições de [skills](./Skill.md) (o harness carrega a descrição; o corpo da skill fica esperando atrás dela), nomes de arquivo na listagem de um diretório, links entre documentos.

Um ponteiro também pode ligar uma [fonte secundária](./Fonte%20secund%C3%A1ria.md) à [fonte primária](./Fonte%20prim%C3%A1ria.md) de que ela foi derivada — o resumo de compactação que cita a transcrição original, o documento que cita o arquivo-fonte que descreve. Isso torna recuperável a perda de informação da fonte secundária: quando o resumo se mostra insuficiente, o agente segue o ponteiro e lê o original, em vez de trabalhar com o que o resumo preservou.

_Evite:_ "referência" — seca demais; não deixa claro que segui-la traz mais contexto. "Portal" — floreado demais.

_Uso:_

"O AGENTS.md está enorme."

"Quase tudo ali deveria ser ponteiro de contexto, não conteúdo. Deixe as regras sempre carregadas inline; transforme o runbook de deploy e o guia de estilo em skills e deixe um ponteiro de contexto no lugar."
