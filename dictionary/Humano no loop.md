---
description: Padrão em que uma ou mais pessoas trabalham em par com o agente na sessão, revisando, redirecionando ou colaborando em tempo real.
aliases:
  - HITL
  - Human-in-the-loop
  - Humano no loop (HITL)
termo_original: Human-in-the-loop
---

Um padrão de trabalho em que uma ou mais pessoas trabalham em par com o [agente](./Agente.md) durante uma [sessão](./Sess%C3%A3o.md) — revisando, redirecionando ou colaborando em tempo real. A pessoa está presente e engajada, não apenas como barreira para ações isoladas.

O contraste é com o trabalho [AFK](./AFK.md), em que o agente roda sem supervisão e você avalia o resultado depois. Humano no loop significa detectar os problemas enquanto ainda custam pouco: você vê o agente pegar o arquivo errado, entender mal o requisito ou entrar num beco sem saída, e o redireciona com uma frase — em vez de descobrir vinte minutos de trabalho confiante construído em cima desse erro. Agentes nem sempre percebem quando saíram do rumo; sozinhos, tendem a seguir em frente em vez de parar e perguntar.

O padrão adequado depende do trabalho. Tarefas bem especificadas, de baixo risco e fáceis de verificar combinam com AFK. Tarefas ambíguas, irreversíveis ou difíceis de revisar depois de prontas — uma migração de schema, uma decisão de design delicada, qualquer coisa que toque produção — combinam com ficar no loop. A decisão depende de duas perguntas: quanto custa uma curva errada e com que atraso você a perceberia?

Alguns trabalhos são de humano no loop por natureza, porque as suas reações são a entrada. A [sabatina](./Sabatina.md) só funciona com você ali para responder às perguntas; a [prototipagem](./Prototipagem.md) só funciona com você ali para reagir ao artefato.

Ficar no loop custa a sua atenção, que é o recurso escasso. Parte de se sair melhor com agentes é tirar mais trabalho do loop com segurança — com planos, [verificações automatizadas](./Verifica%C3%A7%C3%A3o%20automatizada.md) e [revisão humana](./Revis%C3%A3o%20humana.md) no fim, em vez de supervisão o tempo todo. Uma [fábrica de software](./F%C3%A1brica%20de%20software.md) vai além ao iniciar sessões a partir de gatilhos, de modo que nem o início do trabalho precisa de você.

_Uso:_

"Roda isso AFK de madrugada?"

"Não, é migração de schema — deixa com humano no loop. Quero ver cada passo e redirecionar se ele pegar a coluna errada como origem do backfill."
