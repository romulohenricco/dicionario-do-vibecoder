---
description: Tudo o que o modelo vê em cada requisição ao provedor. Finita, específica de cada modelo e a única superfície pela qual ele percebe algo.
termo_original: Context window
---

Tudo o que o [modelo](./Modelo.md) vê em cada [requisição ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md). Finita, específica de cada modelo e a _única_ superfície pela qual o modelo percebe qualquer coisa.

É uma única sequência de [tokens](./Token.md): o [prompt de sistema](./Prompt%20de%20sistema.md), a conversa até aqui e cada [resultado de ferramenta](./Resultado%20de%20ferramenta.md) que o [harness](./Harness.md) devolveu ao modelo. Se algo está nessa sequência, o modelo pode usar; se não está, ele não sabe que existe — nem a sua base de código, nem o arquivo que você editou ontem, nem a instrução que você deu três sessões atrás. Tudo o que está fora da janela precisa ser trazido para dentro, normalmente por uma [chamada de ferramenta](./Chamada%20de%20ferramenta.md), antes de poder influenciar qualquer coisa.

Finita quer dizer que ela enche. Cada turno acrescenta mais conteúdo — suas mensagens, as respostas do modelo, os resultados de ferramenta — e uma [sessão](./Sess%C3%A3o.md) longa acaba chegando ao limite, o que força uma [compactação](./Compacta%C3%A7%C3%A3o.md) ou uma [limpeza de contexto](./Limpeza%20de%20contexto.md). Também quer dizer que tudo dentro da janela compete: cada token que você carrega é um a menos para o resto, e o conteúdo desnecessário continua ocupando o [orçamento de atenção](./Or%C3%A7amento%20de%20aten%C3%A7%C3%A3o.md) do modelo. Na prática, trate a janela como um orçamento: carregue o que a tarefa exige e deixe o resto de fora.

_Evite:_ "memória" — a janela de contexto é estado de trabalho e não persiste entre sessões. [Memória](./Sistema%20de%20mem%C3%B3ria.md) é um conceito separado, montado por cima dela.

_Uso:_

"Posso colar o monorepo inteiro no prompt?"

"A janela de contexto tem 200 mil tokens — isso dá uns 20% do repo. Escolha os arquivos que a tarefa toca e deixe o resto por trás de uma chamada de ferramenta."
