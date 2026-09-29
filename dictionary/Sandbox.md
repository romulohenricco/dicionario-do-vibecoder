---
description: Ambiente isolado em que o agente roda — contêiner, VM ou shell restrito. Limita o raio de impacto das ações do agente.
aliases:
  - Sandboxing
  - Sandbox / Sandboxing
  - Isolamento em sandbox
  - Uso de sandbox
---

Um sandbox (ambiente isolado) é um [ambiente](./Ambiente.md) fechado em que o [agente](./Agente.md) roda — um contêiner, uma VM, um [sistema de arquivos](./Sistema%20de%20arquivos.md) efêmero ou um shell com permissões restritas. Ele limita o raio de impacto das ações do agente: mesmo que o agente rode comandos destrutivos ou baixe algo malicioso, o dano fica contido. É a base de segurança que torna viável o trabalho [AFK](./AFK.md) (longe do teclado).

O sandbox e o [modo de permissão](./Modo%20de%20permiss%C3%A3o.md) resolvem o mesmo problema por lados opostos. As permissões perguntam antes de uma ação rodar; o sandbox limita até onde a ação chega se ela rodar. As permissões exigem que você esteja [no loop](./Humano%20no%20loop.md) — cada pedido é uma interrupção — e uma sessão que pergunta o tempo todo quase não é autônoma. O sandbox gasta infraestrutura em vez de atenção: quanto mais forte o isolamento, menos perguntas precisam ser feitas.

O isolamento vem em níveis:

| Nível          | O que é                                                               | O que contém                                    |
| -------------- | --------------------------------------------------------------------- | ----------------------------------------------- |
| Shell restrito | Confinamento no nível do SO em torno de cada comando                  | Gravações fora do projeto, acesso à rede        |
| Contêiner      | Sistema de arquivos novo, sem credenciais montadas, descartado depois | Tudo o que o agente fizer com a própria máquina |
| VM / nuvem     | Uma máquina separada, muitas vezes fornecida pelo harness             | Tudo, inclusive fugas no nível do kernel        |

O que nenhum sandbox contém: ações que saem dele de forma legítima. Um agente com suas credenciais do git consegue fazer push; um com acesso à rede consegue chamar APIs de produção. Decida o que atravessa a fronteira antes de decidir quão grossa ela deve ser.

_Uso:_

"Quero deixar rodando a noite toda em [bypass-permissions](./Modo%20de%20agente.md), mas não me sinto pronto pra isso."

"Bota ele num sandbox — contêiner novo, sem credenciais montadas, sem rede de saída. No pior caso ele destrói o próprio sistema de arquivos e você descarta o contêiner."
