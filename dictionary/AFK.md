---
description: Padrão de trabalho em que o usuário inicia uma sessão e deixa o agente rodando sem supervisão (longe do teclado).
aliases:
  - longe do teclado
  - AFK (longe do teclado)
  - away from keyboard
---

AFK (do inglês away from keyboard, longe do teclado). Um padrão de trabalho em que o usuário inicia uma [sessão](./Sess%C3%A3o.md) e deixa o [agente](./Agente.md) rodando sem supervisão. É o multiplicador de throughput da programação com [IA](./IA.md) — várias sessões AFK podem rodar em paralelo enquanto você dorme, come ou trabalha em outra coisa. Em geral exige um [modo de permissão](./Modo%20de%20permiss%C3%A3o.md) permissivo, combinado com o uso de [sandbox](./Sandbox.md), para ser seguro.

Quando você não está presente, o agente lida com a ambiguidade de outro jeito. Enquanto você está olhando, uma decisão ambígua aparece como pergunta e você responde; depois que você saiu, o agente escolhe uma opção padrão e segue em frente, e cada decisão seguinte se apoia nesse palpite. A falha característica é voltar e encontrar horas de trabalho pronto e confiante, construído sobre uma escolha errada feita nos primeiros dez minutos. O trabalho não é descuidado — é coerente, só que coerente em torno da coisa errada.

Como você não pode responder durante a execução, dê as respostas antes e depois. Antes: resolva a ambiguidade de antemão — uma [sabatina](./Sabatina.md), uma [especificação](./Especifica%C3%A7%C3%A3o.md) escrita — para que o agente tenha menos lacunas a preencher sozinho. Durante: [verificações automatizadas](./Verifica%C3%A7%C3%A3o%20automatizada.md) e [revisão automatizada](./Revis%C3%A3o%20automatizada.md) fazem o papel da atenção que você não está dando, falhando cedo em tudo o que pode ser pego mecanicamente. Depois: a execução termina em algo revisável — um PR, não mudanças já mescladas. AFK não elimina a [revisão humana](./Revis%C3%A3o%20humana.md); ele adia toda ela para o fim, e é por isso que o que chega no fim precisa valer a pena ser revisado. É também por isso que a [AX](./AX.md) pesa mais nas execuções AFK — sem ninguém olhando, o ambiente é o único apoio que o agente recebe.

_Evite:_ "agente em segundo plano" — centra na máquina ("rodando em segundo plano") em vez de no padrão humano ("o usuário se afastou"). AFK nomeia o fato que importa: o usuário não está acompanhando.

_Uso:_

"Estou rodando isso AFK — três agentes em sandbox na refatoração, e eu reviso os PRs de manhã."

"[Bypass permissions](./Modo%20de%20agente.md)?"

"Isso, com [sistema de arquivos](./Sistema%20de%20arquivos.md) somente leitura e sem rede."
