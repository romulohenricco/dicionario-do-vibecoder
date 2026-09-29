---
description: "Revisão do trabalho de um agente feita por outro, em geral com outro modelo ou prompt. Não determinística: forma um julgamento."
termo_original: Automated review
---

Revisão do trabalho de um [agente](./Agente.md) feita por outro agente, em geral com um [modelo](./Modelo.md) diferente ou um [prompt de sistema](./Prompt%20de%20sistema.md) diferente. Não determinística: forma um julgamento. Roda em qualquer lugar: antes do merge em um pull request, depois, sobre o histórico de commits, ou no meio de uma sessão, como [subagente](./Subagente.md). Um LLM como juiz no CI é revisão automatizada, não uma [verificação automatizada](./Verifica%C3%A7%C3%A3o%20automatizada.md); o que a asserção _faz_ define a categoria, não o lugar onde ela roda.

A revisão funciona porque quem revisa é separado do agente que fez o trabalho. Pedir que o agente que escreveu o código revise o próprio trabalho rende muito pouco: a [sessão](./Sess%C3%A3o.md) que produziu o bug também contém o raciocínio que o produziu, e o agente lê as próprias conclusões como confirmação. Um revisor com uma [janela de contexto](./Janela%20de%20contexto.md) nova não tem esse apego. Ele vê o diff como um estranho veria, e é disso que a revisão depende. Um modelo diferente ou um prompt de sistema específico para revisão reforça essa separação: os pontos cegos são outros, e o prompt de sistema pode se concentrar no que você realmente quer verificar (segurança, contratos de API, desempenho) em vez de um genérico "procure problemas".

A revisão automatizada fica entre as outras camadas de revisão. As verificações automatizadas são determinísticas e pegam o que pode ser afirmado de forma mecânica. A [revisão humana](./Revis%C3%A3o%20humana.md) é cara e é a que menos escala. A revisão automatizada fica no meio: pega problemas que dependem de julgamento, como um nome de função enganoso ou um caso de borda esquecido, com custo de máquina. Por ser não determinística, ela pode deixar problemas passarem e apontar problemas que não existem. Trate-a como um filtro que eleva o nível mínimo de qualidade antes de um humano olhar, não como uma etapa de bloqueio que substitui o humano.

_Evite:_ "revisão por IA" / "revisão por agente", porque são vagos demais para distinguir a revisão do agente que fez o trabalho.

_Uso:_

"Estamos recebendo PRs ruins demais das execuções [AFK](./AFK.md)."

"Coloca uma etapa de revisão automatizada antes do merge: outro modelo, prompt de sistema separado, focado em segurança e mudanças de contrato."
