---
description: Árvore de arquivos e diretórios em que o agente lê, escreve e executa; é o ambiente padrão de um agente de programação.
termo_original: Filesystem
---

Uma árvore de arquivos e diretórios em que o [agente](./Agente.md) lê, escreve e executa — o tipo padrão de [ambiente](./Ambiente.md) de um agente de programação. [AGENTS.md](./AGENTS.md.md), [skills](./Skill.md), código-fonte, scripts de build e configurações de [ferramentas](./Ferramenta.md) ficam todos em um sistema de arquivos. Quando um [harness](./Harness.md) "começa no seu projeto", ele está apontando o agente para um sistema de arquivos.

O agente só toca nele por meio de [chamadas de ferramenta](./Chamada%20de%20ferramenta.md) — ler um arquivo, escrever um arquivo, rodar um comando de shell. Nada no disco está na [janela de contexto](./Janela%20de%20contexto.md) até que uma chamada de ferramenta o carregue. É isso que permite ao agente trabalhar num repositório muito maior que a janela: o sistema de arquivos guarda tudo, e o contexto guarda só o que a tarefa atual leu. Alguns harnesses carregam por padrão os nomes de arquivo do diretório atual na janela de contexto — não o conteúdo, só a árvore —, e esses nomes funcionam como [ponteiros de contexto](./Ponteiro%20de%20contexto.md): o agente vê o que existe e lê os arquivos de que precisa.

Você e o agente compartilham o mesmo sistema de arquivos. Os arquivos que o agente edita são os mesmos que você abre no editor e confere com diff no git; é o espaço de trabalho comum em que você revisa o que o agente fez.

_Uso:_

"Por que ele não está pegando meu AGENTS.md?"

"Ele está rodando em outro sistema de arquivos — o [sandbox](./Sandbox.md) montou o diretório pai, não a raiz do projeto. Aponta o harness de novo."
