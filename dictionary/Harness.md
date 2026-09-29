---
description: "Tudo o que fica ao redor do modelo e o transforma em agente: ferramentas, prompt de sistema, janela de contexto, permissões e hooks."
---

Harness é tudo o que fica ao redor do [modelo](./Modelo.md) e o transforma em [agente](./Agente.md): [ferramentas](./Ferramenta.md), [prompt de sistema](./Prompt%20de%20sistema.md), [gerenciamento da janela de contexto](./Janela%20de%20contexto.md), permissões, hooks. O **Claude.ai** e o **Claude Code** rodam no mesmo modelo, mas se comportam de forma diferente porque seus harnesses são diferentes.

O modelo, sozinho, faz uma única coisa: recebe texto e devolve texto. Ele não consegue ler um arquivo, executar um comando nem lembrar do último [turno](./Turno.md). O harness fornece tudo isso. Ele monta o [contexto](./Contexto.md) de cada [requisição ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md), executa as [chamadas de ferramenta](./Chamada%20de%20ferramenta.md) que o modelo pede, devolve os [resultados de ferramenta](./Resultado%20de%20ferramenta.md), guarda o histórico da [sessão](./Sess%C3%A3o.md), pede sua permissão antes de ações arriscadas e decide quando [compactar](./Compacta%C3%A7%C3%A3o.md). O loop do agente — o modelo propõe, o harness executa, repete — é conduzido pelo harness.

Isso importa no diagnóstico. Quando o comportamento muda entre dois produtos, ou entre ontem e hoje, muitas vezes o modelo não é a variável — o harness é. Um prompt de sistema diferente, um conjunto diferente de ferramentas, um padrão de permissões alterado ou uma nova estratégia de gerenciamento de contexto mudam o comportamento sem nenhuma mudança no modelo. Isso também significa que o harness é onde mora a maior parte da sua configuração: arquivos [AGENTS.md](./AGENTS.md.md), configurações de permissão e hooks são todos instruções para o harness, não para o modelo.

Exemplos: Claude Code, Cursor, Codex CLI — e o Claude.ai, que é um harness de chat, não de programação.

_Uso:_

"Mesmo modelo, por que o Claude Code edita arquivos e o Claude.ai só responde perguntas?"

"Harnesses diferentes — o Claude Code tem ferramentas de [sistema de arquivos](./Sistema%20de%20arquivos.md), um prompt de sistema diferente e uma camada de permissões. O modelo não é a variável aqui."
