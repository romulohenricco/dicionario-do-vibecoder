---
description: Cada token tem uma quantidade finita de influência para distribuir pelo resto do contexto. É por token e não cresce com o contexto.
termo_original: Attention budget
---

Cada [token](./Token.md) tem uma quantidade finita de influência para distribuir pelo resto do [contexto](./Contexto.md). Dar muita influência a [uma relação de atenção](./Rela%C3%A7%C3%A3o%20de%20aten%C3%A7%C3%A3o.md) deixa menos para as outras. O orçamento é por token e não cresce quando o contexto cresce, e é por isso que [sessões](./Sess%C3%A3o.md) longas diluem a instrução.

Pense nisso como sinal e ruído. Sua instrução é um sinal em volume fixo; todos os outros tokens na [janela de contexto](./Janela%20de%20contexto.md) são som competindo com ela. A instrução nunca fica mais baixa — continua lá, caractere por caractere —, mas, conforme o contexto cresce, o ambiente fica mais barulhento ao redor dela, e a relação sinal-ruído cai. Uma instrução que era o som mais alto com 10 mil tokens de contexto vira ruído de fundo com 150 mil. Esse é o mecanismo por trás da [degradação de atenção](./Degrada%C3%A7%C3%A3o%20de%20aten%C3%A7%C3%A3o.md): o modelo não esquece; o sinal se perde no ruído.

O sintoma parece desobediência — o agente concordou com uma restrição no começo e depois se desvia dela, e colar a restrição de novo só ajuda por pouco tempo. A causa não é a instrução; é tudo o mais na janela competindo com ela.

O que você controla é o que entra no contexto. Conteúdo que não serve à tarefa não é neutro — é ruído sobre tudo o que serve. Mantenha a janela pequena, [limpe o contexto](./Limpeza%20de%20contexto.md) quando o que se acumulou deixar de compensar e reafirme as restrições que importam em vez de confiar que a menção inicial vai se manter.

_Uso:_

"Por que ele continua ignorando o schema que colei lá no começo?"

"Já estamos bem dentro da [zona burra](./Zona%20inteligente.md) — o orçamento de atenção de cada token é fixo, mas o contexto continuou crescendo. O sinal do schema agora compete com milhares de tokens mais novos."
