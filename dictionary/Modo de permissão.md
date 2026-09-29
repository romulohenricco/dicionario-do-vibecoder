---
description: A parte do modo de agente que define quais chamadas de ferramenta geram um pedido de permissão e quais rodam automaticamente.
termo_original: Permission mode
---

A parte do [modo de agente](./Modo%20de%20agente.md) que define a barreira de permissões — quais [chamadas de ferramenta](./Chamada%20de%20ferramenta.md) geram um [pedido de permissão](./Pedido%20de%20permiss%C3%A3o.md) e quais rodam automaticamente. É a finalidade original dos sistemas de modos, antes de os [harnesses](./Harness.md) começarem a empacotar instruções de comportamento por cima.

Os harnesses trazem uma escada desses modos:

| Modo                        | Leituras    | Escritas e shell                    | Uso típico                                           |
| --------------------------- | ----------- | ----------------------------------- | ---------------------------------------------------- |
| Somente leitura / plan mode | Automáticas | Bloqueadas                          | Pesquisa, planejamento, revisão                      |
| Default                     | Automáticas | Pergunta                            | Trabalho diário supervisionado                       |
| Auto-edit                   | Automáticas | Edições automáticas, shell pergunta | Repositórios confiáveis, mudanças mecânicas          |
| "YOLO mode" / full-auto     | Automáticas | Automáticas                         | [Sandboxes](./Sandbox.md), execuções [AFK](./AFK.md) |

Escolher um degrau é uma troca entre segurança e interrupção, e os dois modos de falha aparecem no uso. Se o modo é restritivo demais, você vira o gargalo: o [agente](./Agente.md) para a cada poucos segundos por causa de leituras inofensivas, você aprova no piloto automático e as aprovações perdem o sentido. Aprovar sem olhar é o pior dos dois mundos, com toda a interrupção e nenhuma proteção. Se o modo é permissivo demais, o agente edita arquivos e roda comandos que você gostaria de ter visto antes.

O extremo permissivo é mais defensável dentro de um sandbox, onde o raio de impacto de uma chamada ruim a uma [ferramenta](./Ferramenta.md) fica contido. Fora dele, a maioria das pessoas aprova as leituras automaticamente e mantém um [humano no loop](./Humano%20no%20loop.md) para tudo que for irreversível.

_Uso:_

"Ele parou em cada grep e estragou a execução AFK."

"Afrouxa o modo de permissão das ferramentas somente leitura e continua pedindo confirmação nas escritas e no shell. A maioria dos pedidos de permissão numa [sessão](./Sess%C3%A3o.md) de pesquisa é ruído."
