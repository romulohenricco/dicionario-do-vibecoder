# Issue tracker: GitHub

Issues e PRDs deste repositório ficam como issues do GitHub. Use a CLI `gh` para todas as operações.

## Convenções

- **Criar uma issue**: `gh issue create --title "..." --body "..."`. Use um heredoc para corpos de várias linhas.
- **Ler uma issue**: `gh issue view <número> --comments`, filtrando os comentários com `jq` e buscando também as labels.
- **Listar issues**: `gh issue list --state open --json number,title,body,labels,comments --jq '[.[] | {number, title, body, labels: [.labels[].name], comments: [.comments[].body]}]'` com os filtros `--label` e `--state` apropriados.
- **Comentar numa issue**: `gh issue comment <número> --body "..."`
- **Aplicar / remover labels**: `gh issue edit <número> --add-label "..."` / `--remove-label "..."`
- **Fechar**: `gh issue close <número> --comment "..."`

Deduza o repositório a partir de `git remote -v` — o `gh` faz isso automaticamente quando executado dentro de um clone.

## Quando uma skill diz "publique no issue tracker"

Crie uma issue no GitHub.

## Quando uma skill diz "busque o ticket relevante"

Execute `gh issue view <número> --comments`.
