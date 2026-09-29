---
description: A coisa em si — código, transcrições, dados brutos. Completa e de referência, mas cara de carregar no contexto.
termo_original: Primary source
---

Uma fonte da verdade em sua forma original — o código, a transcrição da conversa, o log bruto, a resposta real da API. Não é um relato da coisa; é a coisa. Contraparte da [fonte secundária](./Fonte%20secund%C3%A1ria.md).

Se você quer saber o que sua base de código faz, o código é a fonte primária. A documentação, o diagrama de arquitetura e o README são descrições dele — precisos quando foram escritos e, desde então, desatualizados no ritmo que lhes convém. Quando um [agente](./Agente.md) afirma com confiança algo errado sobre o seu projeto, a pergunta a fazer é de qual fonte ele estava partindo: um agente que leu um documento herda a defasagem do documento; um agente que leu o código está lendo a verdade atual.

O custo é o que impede as fontes primárias de serem o padrão. Carregar uma na [janela de contexto](./Janela%20de%20contexto.md) é caro — o arquivo inteiro, a transcrição inteira, cada [token](./Token.md) cobrado como [token de entrada](./Tokens%20de%20entrada.md) e disputando o [orçamento de atenção](./Or%C3%A7amento%20de%20aten%C3%A7%C3%A3o.md). O que você recebe em troca do custo é completude: nada foi pré-filtrado pelo julgamento de outra pessoa sobre o que importava. Um resumo escrito no mês passado não consegue conter o detalhe que acabou importando hoje; a fonte primária ainda contém.

Recorra à fonte primária quando a precisão importa — a assinatura exata, o erro real, a linha que lança a exceção. Boa parte de gerenciar o [contexto](./Contexto.md) é decidir quando vale pagar pela fonte primária e quando uma fonte secundária basta.

_Uso:_

"O agente diz que a lógica de retry faz backoff exponencial, mas estou vendo ele martelar o endpoint."

"Ele leu isso no design doc. Aponta ele para o módulo de retry de verdade — quando o comportamento importa, trabalha com a fonte primária."
