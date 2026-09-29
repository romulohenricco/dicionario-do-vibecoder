---
description: Relato de uma fonte primária, a um passo dela: resumos, docs, resumos de compactação. Barato de carregar, com perdas por construção.
termo_original: Secondary source
---

Relato de uma [fonte primária](./Fonte%20prim%C3%A1ria.md), a um passo de distância dela — documentação que descreve código, um resumo que descreve uma transcrição, um relatório que descreve resultados de busca. É mais barato de carregar na [janela de contexto](./Janela%20de%20contexto.md) do que a fonte que descreve, e tem perdas por construção: quem o escreveu decidiu o que importava, e o que ficou de fora é invisível para quem só tem o resumo.

Boa parte da engenharia de [contexto](./Contexto.md) consiste em produzir fontes secundárias. A [compactação](./Compacta%C3%A7%C3%A3o.md) transforma o histórico da [sessão](./Sess%C3%A3o.md) em um resumo que inicia a próxima sessão. Um [subagente](./Subagente.md) gasta o próprio contexto numa busca ruidosa e devolve um relatório curto. Um [artefato de handoff](./Artefato%20de%20handoff.md) condensa as decisões de uma sessão num documento que a sessão seguinte lê. [Sistemas de memória](./Sistema%20de%20mem%C3%B3ria.md) destilam em notas o que uma sessão aprendeu. Todos fazem a mesma troca: fidelidade por folga.

Fontes secundárias falham de duas formas. Têm perdas — o resumo de compactação que perdeu a decisão sobre o schema, o relatório que não mencionou o caso de borda. E ficam desatualizadas — a fonte primária muda e o relato não acompanha, então a documentação descreve a arquitetura do trimestre passado com a confiança deste trimestre. Quando um [agente](./Agente.md) age com base numa fonte secundária que falhou de qualquer uma das duas formas, ele trabalha com confiança a partir de informação errada; a correção é mandá-lo de volta à fonte primária.

Nenhuma das duas falhas torna as fontes secundárias um erro. A janela de contexto é finita e as fontes primárias são caras; sem resumos, relatórios e documentos de handoff, nada grande cabe. O que importa é saber quais detalhes sobrevivem à perda — e verificar na fonte primária quando não sobrevivem. Uma fonte secundária bem feita traz um [ponteiro de contexto](./Ponteiro%20de%20contexto.md) que leva de volta ao original — o resumo que cita a transcrição de onde veio, o doc que cita o arquivo que descreve — para que, quando o relato não bastar, o leitor siga o ponteiro em vez de trabalhar em cima da perda.

_Uso:_

"O doc de handoff diz que a autenticação está pronta, mas a sessão nova continua encontrando o refresh de token quebrado."

"O doc é uma fonte secundária — a última sessão anotou o que achava, não o que é verdade. Manda a sessão nova rodar os testes de autenticação e confiar na fonte primária."
