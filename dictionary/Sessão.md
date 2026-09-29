---
description: Uma execução delimitada de interação com um agente. Começa vazia, acumula e termina ao ser limpa, fechada ou compactada.
termo_original: Session
---

Uma execução delimitada de interação com um [agente](./Agente.md). Começa vazia, acumula mensagens, [resultados de ferramenta](./Resultado%20de%20ferramenta.md) e arquivos lidos, e termina quando é [limpa](./Limpeza%20de%20contexto.md), fechada ou [compactada](./Compacta%C3%A7%C3%A3o.md) numa sessão nova. A sessão é o que _preenche_ a [janela de contexto](./Janela%20de%20contexto.md): se a janela de contexto é a caixa, a sessão é o material que vai enchendo a caixa aos poucos. Um trabalho grande demais para uma única janela de contexto precisa ser dividido em várias sessões.

O histórico de mensagens da sessão é a memória de trabalho do agente. O [modelo](./Modelo.md) é [stateless](./Stateless.md) (sem estado), então tudo o que ele parece lembrar — o que você pediu, o que os testes mostraram, o que ele decidiu três turnos atrás — está no histórico de mensagens, reenviado a cada [requisição ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md). O que não está na sessão não existe para o agente.

Essa memória acaba junto com a sessão. Uma sessão nova começa do zero: o agente que conhecia bem a sua base de código no fim da sessão de ontem não sabe nada disso hoje de manhã. O que sobrevive é o [sistema de arquivos](./Sistema%20de%20arquivos.md) — arquivos escritos durante uma sessão podem ser lidos pela seguinte, e é nisso que se apoiam os [handoffs](./Handoff.md), os [sistemas de memória](./Sistema%20de%20mem%C3%B3ria.md) e o [AGENTS.md](./AGENTS.md.md).

Quem escolhe onde a sessão termina é você. Tudo o que está numa sessão influencia todos os [turnos](./Turno.md) seguintes, então tarefas sem relação feitas na mesma sessão deixam resíduo que influencia a resposta seguinte. Uma tarefa por sessão mantém o contexto relevante; terminar uma tarefa é um ponto natural para limpar.

_Uso:_

"Quanto tempo uma sessão aguenta antes de degringolar?"

"Depende do trabalho — uma refatoração focada se mantém boa por mais tempo do que uma pesquisa em aberto. Quando a sessão incha, faz handoff ou compacta, não fica insistindo."
