<!--
  ARQUIVO GERADO — NÃO EDITE.
  Fonte: dictionary/*.md, internal/Curriculum.md, internal/README.template.md
  Para regenerar: npm run generate
-->

# Dicionário do Vibecoder

**Programar com IA pode parecer coisa só para especialistas**. Jargão sem explicação. Falhas misteriosas. Contas que não parecem bater com o trabalho feito.

Não é, na verdade. Boa parte da confusão é fabricada: **existe toda uma economia financiada por capital de risco que se beneficia de manter o assunto difícil de entender**.

Os termos básicos se aprendem em uma tarde. Depois de tê-los, o conjunto todo deixa de parecer adivinhação.

Por que o contexto se degrada? Por que a conta está tão alta? Por que o mesmo prompt se comporta de forma diferente de um dia para o outro?

Cada uma dessas perguntas tem uma resposta simples, quando alguém te dá as palavras certas para usar.

É para isso que serve este dicionário. **O vocabulário de programação com IA, traduzido em linguagem simples**.

> Tradução não oficial para português brasileiro do [Dictionary of AI Coding](https://github.com/mattpocock/dictionary-of-ai-coding), de [Matt Pocock](https://www.aihero.dev/ai-coding-dictionary). Os textos e as ideias são do autor original; nomes próprios e identificadores técnicos foram mantidos em inglês. Quer mais que o vocabulário? Veja a [newsletter do autor](https://www.aihero.dev/s/dictionary-newsletter).

---

## Índice

<details>
<summary>Seção 1 — O Modelo</summary>

- [IA](#ia)
- [Modelo](#modelo)
- [Parâmetros](#parâmetros)
- [Treinamento](#treinamento)
- [Inferência](#inferência)
- [Esforço de raciocínio](#esforço-de-raciocínio)
- [Token](#token)
- [Previsão do próximo token](#previsão-do-próximo-token)
- [Não determinismo](#não-determinismo)
- [Provedor de modelo](#provedor-de-modelo)
- [Harness](#harness)
- [Requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo)
- [Tokens de entrada](#tokens-de-entrada)
- [Tokens de saída](#tokens-de-saída)
- [Cache de prefixo](#cache-de-prefixo)
- [Tokens de cache](#tokens-de-cache)

</details>

<details>
<summary>Seção 2 — Sessões, Janelas de Contexto e Turnos</summary>

- [Stateless](#stateless)
- [Contexto](#contexto)
- [Janela de contexto](#janela-de-contexto)
- [Stateful](#stateful)
- [Agente](#agente)
- [Prompt de sistema](#prompt-de-sistema)
- [Sessão](#sessão)
- [Turno](#turno)

</details>

<details>
<summary>Seção 3 — Ferramentas e Ambiente</summary>

- [Ambiente](#ambiente)
- [Sistema de arquivos](#sistema-de-arquivos)
- [Ferramenta](#ferramenta)
- [Chamada de ferramenta](#chamada-de-ferramenta)
- [Resultado de ferramenta](#resultado-de-ferramenta)
- [MCP](#mcp)
- [Pedido de permissão](#pedido-de-permissão)
- [Modo de permissão](#modo-de-permissão)
- [Modo de agente](#modo-de-agente)
- [Sandbox](#sandbox)

</details>

<details>
<summary>Seção 4 — Modos de Falha</summary>

- [Bajulação](#bajulação)
- [Alucinação](#alucinação)
- [Conhecimento paramétrico](#conhecimento-paramétrico)
- [Data de corte do conhecimento](#data-de-corte-do-conhecimento)
- [Conhecimento contextual](#conhecimento-contextual)
- [Relação de atenção](#relação-de-atenção)
- [Orçamento de atenção](#orçamento-de-atenção)
- [Degradação de atenção](#degradação-de-atenção)
- [Zona inteligente](#zona-inteligente)

</details>

<details>
<summary>Seção 5 — Handoffs</summary>

- [Limpeza de contexto](#limpeza-de-contexto)
- [Handoff](#handoff)
- [Fonte primária](#fonte-primária)
- [Fonte secundária](#fonte-secundária)
- [Artefato de handoff](#artefato-de-handoff)
- [Especificação](#especificação)
- [Ticket](#ticket)
- [Compactação](#compactação)
- [Autocompactação](#autocompactação)

</details>

<details>
<summary>Seção 6 — Memória e Direcionamento</summary>

- [Sistema de memória](#sistema-de-memória)
- [AGENTS.md](#agentsmd)
- [Divulgação progressiva](#divulgação-progressiva)
- [Ponteiro de contexto](#ponteiro-de-contexto)
- [Skill](#skill)
- [Subagente](#subagente)

</details>

<details>
<summary>Seção 7 — Padrões de Trabalho</summary>

- [Humano no loop](#humano-no-loop)
- [AFK](#afk)
- [Verificação automatizada](#verificação-automatizada)
- [Revisão automatizada](#revisão-automatizada)
- [Revisão humana](#revisão-humana)
- [Vibe coding](#vibe-coding)
- [Conceito de design](#conceito-de-design)
- [Sabatina](#sabatina)
- [Prototipagem](#prototipagem)
- [DX](#dx)
- [AX](#ax)
- [Fábrica de software](#fábrica-de-software)
- [Fábrica escura](#fábrica-escura)

</details>

## Seção 1 — O Modelo

### IA

_Em inglês: AI_

Um rótulo em movimento, não uma tecnologia. "IA" (inteligência artificial) não nomeia uma coisa fixa, como [modelo](#modelo) ou [token](#token): aponta para o que os computadores passaram a fazer há pouco, de forma impressionante. Hoje aponta para os grandes modelos de linguagem (LLMs). Antes, apontou para coisas muito diferentes:

| Era          | O que "IA" significava                                                                                                |
| ------------ | --------------------------------------------------------------------------------------------------------------------- |
| Anos 1950    | Raciocínio simbólico — provadores de teoremas, programas de damas.                                                    |
| Anos 1960–70 | Programas simbólicos baseados em regras — ELIZA, SHRDLU.                                                              |
| Anos 1980    | Sistemas especialistas — milhares de regras "se-então" escritas à mão, que codificavam a expertise humana.            |
| Anos 1990    | Busca em árvore de jogo — Deep Blue vencendo Kasparov (1997). Os pesquisadores evitavam a palavra "IA".               |
| Anos 2000    | Machine learning estatístico — filtros de spam, recomendadores. Ainda vendido como "machine learning", não como "IA". |
| Anos 2010    | Deep learning — reconhecimento de imagens (AlexNet, 2012), AlphaGo (2016).                                            |
| Anos 2020    | Grandes modelos de linguagem — o ChatGPT (2022) fez "IA" passar a significar chatbots.                                |

O ponteiro se move por um mecanismo conhecido, às vezes chamado de efeito IA: quando uma técnica passa a funcionar de forma confiável, ela ganha outro nome — vira "só" busca, "só" estatística — e "IA" avança para o próximo problema sem solução. A observação é antiga. Bertram Raphael a formulou assim em 1971: "IA é um nome coletivo para problemas que ainda não sabemos resolver direito por computador." A versão de Larry Tesler, de cerca de 1979: "Inteligência é tudo aquilo que as máquinas ainda não fizeram."

Por isso as conversas sobre IA tantas vezes falam de coisas diferentes sem que os envolvidos percebam. Uma afirmação como "a IA não sabe raciocinar" ou "IA é superestimada" carrega uma data escondida: pode ser sobre sistemas especialistas, sobre classificadores de imagem dos anos 2010 ou sobre o LLM do mês passado, e cada referência sustenta uma conclusão diferente. Quando uma discussão sobre IA emperra, a saída costuma ser trocar a palavra pelo termo preciso que se quer dizer: o modelo, o [harness](#harness), o [agente](#agente), o [contexto](#contexto) que ele recebeu.

_Evite:_ "IA" em qualquer afirmação técnica — nomeie a parte a que você se refere. "Programação com IA" como rótulo da prática é aceitável; "a IA está alucinando" não é.

_Uso:_

"A CTO quer saber se uma IA daria conta da fila de triagem."

"Traduza isso antes de definir o escopo — ela quer dizer um LLM num harness com acesso ao sistema de tickets. 'IA' sozinha não é spec."

### Modelo

_Em inglês: Model_

Os [parâmetros](#parâmetros). [Stateless](#stateless) (sem estado) — faz [previsão do próximo token](#previsão-do-próximo-token) e mais nada. "Claude Opus 4.x" e "GPT-5.x" são modelos. Sozinho, um modelo não consegue fazer nada agêntico; ele precisa ser [envolvido por um harness](#harness).

Modelos não conseguem ler arquivos, executar comandos, navegar na web nem lembrar de ontem — recebem [tokens](#token) e preveem tokens, uma vez a cada [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo). Tudo o que parece um [agente](#agente) trabalhando — escolher [ferramentas](#ferramenta), ler resultados, repetir até a tarefa terminar — é o harness orquestrando várias dessas previsões em sequência.

[Provedores de modelo](#provedor-de-modelo) lançam modelos em faixas: um grande, o mais inteligente, porém lento e caro, e outros menores, mais rápidos e baratos, mas menos capazes. Escolher a faixa é uma decisão de verdade — o modelo pesado para planejamento e depuração difícil, o leve para mudanças mecânicas — e os harnesses permitem trocar no meio da [sessão](#sessão).

Usar a palavra com rigor também ajuda no diagnóstico. "O modelo é ruim nisso" é uma afirmação específica — o mesmo modelo, em outro harness ou com outro [contexto](#contexto), muitas vezes se comporta de forma bem diferente. Antes de culpar o modelo, confira o que ele recebeu: a maior parte das saídas decepcionantes vem do contexto ou do harness, não dos parâmetros.

_Uso:_

"Vamos trocar o modelo na etapa de planejamento, do Sonnet para o Opus?"

"Tenta, mas o harness está fazendo a maior parte do trabalho nessa tarefa. Trocar de modelo não vai adiantar se o [prompt de sistema](#prompt-de-sistema) e as ferramentas estiverem errados."

### Parâmetros

_Em inglês: Parameters_

Os números dentro de um [modelo](#modelo) — muitas vezes bilhões deles — ajustados durante o [treinamento](#treinamento). Tudo o que o modelo "sabe" está neles. O treinamento define esses números; a [inferência](#inferência) os usa sem alterá-los. Também chamados de _pesos_.

Mecanicamente, os parâmetros são o que transforma entrada em saída. A [previsão do próximo token](#previsão-do-próximo-token) é um cálculo gigante: os [tokens](#token) da [janela de contexto](#janela-de-contexto) entram, são multiplicados pelos parâmetros e sai uma previsão para o próximo token. Não existe um banco de dados de fatos dentro do modelo, nem uma tabela de consulta de código, apenas esses números, organizados de modo que o cálculo tenda a produzir uma saída útil. Os fatos que o modelo consegue recitar a partir do treinamento, como a API de uma biblioteca padrão, são [conhecimento paramétrico](#conhecimento-paramétrico): ficam guardados nos parâmetros e não são buscados em lugar nenhum.

O detalhe a fixar é que os parâmetros ficam congelados depois do treinamento. Nada do que você faz em uma [sessão](#sessão) os altera: nenhuma correção sua, nenhuma base de código que você mostre, nenhum erro com o qual ele aprenda. Toda sessão roda sobre os mesmos números. É por isso que o modelo é [stateless](#stateless), que o conhecimento embutido dele para na [data de corte do conhecimento](#data-de-corte-do-conhecimento) e que tudo o que é específico do projeto precisa chegar pelo [contexto](#contexto). Os parâmetros só mudam com mais treinamento, o que produz, na prática, outro modelo.

_Uso:_

"Dá pra fazer fine-tuning dele na nossa base de código?"

"Isso atualizaria os parâmetros, e aí seria outro modelo. Para um projeto só, quase sempre sai mais barato carregar a base de código como contexto do que retreinar."

### Treinamento

_Em inglês: Training_

O processo que define os [parâmetros](#parâmetros) de um [modelo](#modelo), expondo-o a grandes quantidades de texto e ajustando os parâmetros para melhorar a [previsão do próximo token](#previsão-do-próximo-token). Um processo pontual e caro, feito pelo [provedor de modelo](#provedor-de-modelo). Abrange tanto o pré-treinamento (a rodada principal) quanto o pós-treinamento (refinamentos posteriores, como o ajuste para seguir instruções e para segurança); a distinção não importa no nível deste glossário.

O mecanismo é repetição em escala: mostrar ao modelo um trecho de texto, pedir que ele preveja o próximo [token](#token), ajustar os parâmetros um pouco na direção do token que realmente veio a seguir e repetir isso ao longo de trilhões de tokens. Nada é armazenado como fato ou regra — tudo o que o modelo "sabe" é um efeito colateral de ficar melhor na previsão, comprimido nos parâmetros como [conhecimento paramétrico](#conhecimento-paramétrico).

Duas consequências importam no dia a dia. O treinamento termina em um ponto no tempo, então o modelo tem uma [data de corte do conhecimento](#data-de-corte-do-conhecimento) — ele não viu a versão da biblioteca para a qual você atualizou no mês passado. E você não tem como treinar o modelo: quando o modelo não conhece sua base de código, suas convenções ou suas APIs internas, a solução nunca é "ensinar o modelo" — é colocar esse material no [contexto](#contexto), a única entrada que você controla.

_Uso:_

"Dá pra fazer ele conhecer a nossa API interna?"

"Por treinamento não — isso é um processo de meses do provedor de modelo. Carrega a documentação da API no contexto, essa é a alavanca que você realmente tem."

### Inferência

_Em inglês: Inference_

Executar um [modelo](#modelo) treinado para gerar saída — o que acontece em toda [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo). Os [parâmetros](#parâmetros) ficam fixos; o modelo apenas faz a [previsão do próximo token](#previsão-do-próximo-token) sobre o [contexto](#contexto) que recebe. A inferência é barata em comparação com o [treinamento](#treinamento), mas é cobrada por [token](#token) e é o custo dominante de usar um modelo.

A vida de um modelo se divide em duas fases:

| Fase        | Quando acontece                  | O que faz                                                               | Parâmetros      |
| ----------- | -------------------------------- | ----------------------------------------------------------------------- | --------------- |
| Treinamento | Uma vez, antes do lançamento     | Produz os parâmetros a partir de um corpus de treinamento               | Sendo escritos  |
| Inferência  | Toda vez que alguém usa o modelo | Executa os parâmetros congelados sobre o seu contexto para gerar tokens | Somente leitura |

Nada do que você faz durante a inferência altera os parâmetros, e é por isso que uma correção feita hoje não persiste amanhã. O modelo que repete o mesmo erro na próxima [sessão](#sessão), depois de você explicar a correção com cuidado, não ignorou o que você disse; ele é incapaz de aprender com a conversa. O modelo é [stateless](#stateless) (sem estado): a continuidade precisa vir de fora dele, da [janela de contexto](#janela-de-contexto) ou de um [sistema de memória](#sistema-de-memória).

Esse mecanismo também explica como você é cobrado. Cada requisição executa o modelo sobre o contexto inteiro, então o custo cresce com os [tokens de entrada](#tokens-de-entrada) e os [tokens de saída](#tokens-de-saída), e um agente que faz dezenas de chamadas de [ferramenta](#ferramenta) paga pela inferência a cada ida e volta. Por isso o tamanho do contexto é tanto uma questão de custo quanto de qualidade.

_Uso:_

"Por que a fatura cresce com o uso, em vez de ser uma licença fixa?"

"Você paga pela inferência — cada requisição ao provedor de modelo executa o modelo no hardware do provedor. O treinamento já aconteceu, mas os custos de inferência se acumulam a cada requisição, e um único [turno](#turno) pode virar várias requisições quando há chamadas de ferramenta."

### Esforço de raciocínio

_Em inglês: Effort_

O esforço é um seletor de quanto raciocínio um [modelo](#modelo) faz antes de responder. Definido em cada [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo), ele controla o tamanho do raciocínio que o modelo percorre antes de começar a escrever a resposta que você vê. Esse raciocínio é gerado durante a [inferência](#inferência), como todo o resto; o [harness](#harness) costuma escondê-lo, mas é trabalho real do modelo.

Mais esforço custa mais e demora mais. O raciocínio é emitido como [tokens](#token), cobrado como [tokens de saída](#tokens-de-saída) mesmo que você nunca os veja, e produzido um token por vez. Por isso, aumentar o esforço alonga a espera pela resposta e aumenta a fatura. O que se troca é mais deliberação por menos velocidade e mais custo.

A maioria dos harnesses expõe o esforço como uma escala curta de níveis:

| Nível  | Para que serve                                                                 |
| ------ | ------------------------------------------------------------------------------ |
| Baixo  | Edições mecânicas, consultas, mudanças bem especificadas com um caminho claro. |
| Médio  | Programação do dia a dia; costuma ser o padrão.                                |
| Alto   | Bugs complicados, decisões de design, planos de vários passos.                 |
| Máximo | Os problemas mais difíceis, em que uma resposta errada é cara de desfazer.     |

Errar a regulagem causa problemas nos dois sentidos. Com esforço baixo demais num problema difícil, você recebe uma resposta confiante e rasa, que pulou o raciocínio de que o problema precisava. Ela parece boa e está errada de um jeito que vai custar caro depois. Com esforço máximo para renomear uma única linha, você espera um raciocínio longo que não entrega nada que o nível mais baixo não entregaria.

Ajuste o esforço à tarefa, não à [sessão](#sessão). Aumente nas partes realmente difíceis de raciocinar e volte a baixar no trabalho braçal ao redor.

_Uso:_

"Ele continua errando essa correção de concorrência, e já expliquei três vezes."

"Sobe o esforço. Esse bug exige muito raciocínio, e no padrão ele não pensa o bastante antes de se fixar numa abordagem."

### Token

Token é a unidade atômica que um [modelo](#modelo) lê e escreve. Tem tamanho próximo ao de uma palavra, mas não exatamente: palavras comuns equivalem a um token, e palavras raras ou longas se dividem em vários. O tamanho da [janela de contexto](#janela-de-contexto), o custo e a latência são todos contados em tokens.

O texto vira tokens por meio de um tokenizador: um vocabulário fixo de dezenas de milhares de fragmentos, aprendido antes do [treinamento](#treinamento), que divide qualquer entrada em uma sequência de itens desse vocabulário. O modelo nunca vê caracteres nem palavras. Todo texto é convertido em tokens na entrada, e a [previsão do próximo token](#previsão-do-próximo-token) produz a saída um token por vez.

Como regra prática, um token equivale a cerca de três quartos de uma palavra em inglês, então mil tokens são aproximadamente 750 palavras. Código é menos previsível: palavras-chave e construções comuns são tokenizadas de forma compacta, enquanto identificadores gerados, hashes, blocos em base64 e saída minificada se dividem em muitos tokens por "palavra". O padrão é este: texto que apareceu com frequência no material que originou o tokenizador recebe codificações curtas e eficientes, e texto que não apareceu é dividido em muitos pedaços pequenos. Um hash como `a3f9c2e1` nunca apareceu em lugar nenhum, então se divide em vários tokens, enquanto `function` é um só. Por isso um arquivo de aparência pequena, cheio de strings incomuns, pode ocupar uma parte da janela de contexto maior do que se espera.

Tudo o mais é medido em tokens. O custo é por token, e os provedores cobram [tokens de entrada](#tokens-de-entrada) e [tokens de saída](#tokens-de-saída) separadamente. A velocidade é medida em tokens por segundo, já que a saída é gerada um token por vez. E a janela de contexto é um número fixo de tokens, então a contagem de tokens dos seus arquivos decide quanto cabe.

_Evite:_ "palavra". As fronteiras dos tokens não coincidem com as das palavras, e as unidades que de fato importam são tokens por segundo e tokens por dólar.

_Uso:_

"Qual vai ser o tamanho desse prompt?"

"Passa pelo tokenizador. O schema é compacto, mas as chaves do JSON são estranhas, então vão virar mais tokens do que você imagina."

### Previsão do próximo token

_Em inglês: Next-token prediction_

O que o [modelo](#modelo) de fato faz. Dado um [contexto](#contexto), ele amostra o próximo [token](#token), anexa e roda de novo. Toda saída — uma frase, uma [chamada de ferramenta](#chamada-de-ferramenta), um arquivo de mil linhas — é construída um token por vez. O modelo não tem outro modo de operação.

Cada etapa funciona do mesmo jeito: os tokens da [janela de contexto](#janela-de-contexto) passam pelos [parâmetros](#parâmetros), que produzem uma probabilidade para cada token do vocabulário — este tem alta probabilidade de vir a seguir, aquele tem menos. Um token é amostrado dessas probabilidades, anexado, e o loop roda de novo com o contexto um pouco maior. Essa etapa de amostragem é o motivo de o mesmo prompt gerar saídas diferentes em execuções diferentes: o [não determinismo](#não-determinismo) é parte do mecanismo, não um bug acrescentado por cima.

Ter esse mecanismo em mente ajuda a entender comportamentos que, de outro modo, parecem estranhos. O modelo nunca verifica se um token é _verdadeiro_ antes de emiti-lo — apenas se é _provável_ — e essa é a origem da [alucinação](#alucinação). Ele assume cada token à medida que avança, então uma primeira frase de tom confiante pode desviar o resto da resposta. E, como os [tokens de saída](#tokens-de-saída) são produzidos estritamente um de cada vez, a velocidade de geração limita a rapidez com que qualquer [agente](#agente) consegue trabalhar.

_Uso:_

"Como o agente 'decide' chamar uma ferramenta?"

"Não decide — é previsão do próximo token do começo ao fim. A chamada de ferramenta é só uma string estruturada que o [harness](#harness) extrai do fluxo de saída."

### Não determinismo

_Em inglês: Non-determinism_

A mesma entrada pode produzir uma saída diferente. Rode um [modelo](#modelo) duas vezes com o mesmo [contexto](#contexto) e você pode receber duas respostas distintas — às vezes uma palavra, às vezes uma abordagem completamente diferente. Nada no seu código precisa mudar para isso acontecer.

É uma propriedade de como os modelos geram texto e de como os [provedores de modelo](#provedor-de-modelo) atendem [requisições](#requisição-ao-provedor-de-modelo). Durante a [inferência](#inferência), o modelo produz uma distribuição de probabilidade sobre os possíveis próximos [tokens](#token) e um deles é sorteado — em geral com alguma aleatoriedade proposital, já que escolher sempre o token mais provável gera texto repetitivo e de qualidade inferior. Um token sorteado de forma diferente no início da resposta altera todos os tokens seguintes, e é assim que uma única palavra diferente vira uma abordagem completamente diferente. No lado do provedor, o atendimento soma mais variação: as requisições são agrupadas em lotes em hardware compartilhado, e diferenças minúsculas de ponto flutuante entre lotes podem decidir uma disputa apertada entre dois tokens. Não existe configuração que faça tudo isso desaparecer.

Espere uma dispersão de resultados de um [agente](#agente) na mesma tarefa. A maioria das respostas cai dentro de uma curva de sino razoável de qualidade — é por isso que o não determinismo é tolerável — mas as caudas existem: em alguns dias o modelo parece afiado; em outros parece que perdeu o fio da meada. Mesma tarefa, lances de dado diferentes. Isso tem duas consequências práticas. Tentar de novo é uma estratégia legítima: uma tentativa que falhou é um sorteio da distribuição, e uma nova tentativa na mesma tarefa pode simplesmente sair melhor. E a verificação importa mais do que com ferramentas determinísticas — você não pode testar o comportamento de um agente uma vez e contar que ele se repita, então as [verificações automatizadas](#verificação-automatizada) precisam capturar os sorteios ruins.

Evite criar narrativas demais para explicar o que acontece. Pessoas são máquinas de reconhecer padrões, e uma sequência de execuções ruins pode parecer prova de que "o modelo piorou esta semana". Em geral é só a distribuição.

_Uso:_

"O Claude está péssimo hoje. Será que lançaram uma versão pior?"

"Provavelmente não — a saída do modelo é não determinística. Você vai ter dias bons e dias ruins na mesma tarefa. Tente de novo amanhã antes de sair procurando uma causa."

### Provedor de modelo

_Em inglês: Model provider_

Quem serve um [modelo](#modelo) para [inferência](#inferência). Em geral é um serviço remoto (Anthropic, OpenAI, Google), mas pode ser local — Ollama, LM Studio, llama.cpp rodando na sua própria máquina. O [harness](#harness) não roda o modelo por conta própria; ele pede a um provedor que faça isso.

O provedor é dono da infraestrutura: os [parâmetros](#parâmetros) ficam no hardware dele, e cada [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo) é o harness enviando [tokens](#token) pela rede e recebendo previsões de volta. Por isso o provedor é a origem de uma categoria inteira de problemas atribuídos por engano ao modelo ou ao harness: rate limits (limites de uso), capacidade degradada e quedas do serviço acontecem aqui. Quando o [agente](#agente) trava no meio da [sessão](#sessão) ou dá erro em todo [turno](#turno), vale olhar a página de status do provedor antes de qualquer outra coisa.

O provedor também define as condições comerciais: o preço por token dos [tokens de entrada](#tokens-de-entrada) e dos [tokens de saída](#tokens-de-saída), os descontos de [cache de prefixo](#cache-de-prefixo) e quais modelos estão disponíveis. Note que o provedor e o fabricante do modelo podem ser empresas diferentes — Bedrock, Vertex e OpenRouter servem modelos de terceiros.

Provedores locais trocam capacidade por controle: os modelos que cabem no hardware do próprio usuário são bem menores que os modelos de ponta, mas nada sai da máquina e não há cobrança por token.

_Uso:_

"Dá pra rodar isso offline para o cliente que trabalha isolado da rede (air-gapped)?"

"Troca o provedor de modelo por um local — Ollama ou llama.cpp na máquina deles. Pro harness tanto faz, ele só bate em outro endpoint."

### Harness

Harness é tudo o que fica ao redor do [modelo](#modelo) e o transforma em [agente](#agente): [ferramentas](#ferramenta), [prompt de sistema](#prompt-de-sistema), [gerenciamento da janela de contexto](#janela-de-contexto), permissões, hooks. O **Claude.ai** e o **Claude Code** rodam no mesmo modelo, mas se comportam de forma diferente porque seus harnesses são diferentes.

O modelo, sozinho, faz uma única coisa: recebe texto e devolve texto. Ele não consegue ler um arquivo, executar um comando nem lembrar do último [turno](#turno). O harness fornece tudo isso. Ele monta o [contexto](#contexto) de cada [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo), executa as [chamadas de ferramenta](#chamada-de-ferramenta) que o modelo pede, devolve os [resultados de ferramenta](#resultado-de-ferramenta), guarda o histórico da [sessão](#sessão), pede sua permissão antes de ações arriscadas e decide quando [compactar](#compactação). O loop do agente — o modelo propõe, o harness executa, repete — é conduzido pelo harness.

Isso importa no diagnóstico. Quando o comportamento muda entre dois produtos, ou entre ontem e hoje, muitas vezes o modelo não é a variável — o harness é. Um prompt de sistema diferente, um conjunto diferente de ferramentas, um padrão de permissões alterado ou uma nova estratégia de gerenciamento de contexto mudam o comportamento sem nenhuma mudança no modelo. Isso também significa que o harness é onde mora a maior parte da sua configuração: arquivos [AGENTS.md](#agentsmd), configurações de permissão e hooks são todos instruções para o harness, não para o modelo.

Exemplos: Claude Code, Cursor, Codex CLI — e o Claude.ai, que é um harness de chat, não de programação.

_Uso:_

"Mesmo modelo, por que o Claude Code edita arquivos e o Claude.ai só responde perguntas?"

"Harnesses diferentes — o Claude Code tem ferramentas de [sistema de arquivos](#sistema-de-arquivos), um prompt de sistema diferente e uma camada de permissões. O modelo não é a variável aqui."

### Requisição ao provedor de modelo

_Em inglês: Model provider request_

Uma ida e volta do [harness](#harness) ao [provedor de modelo](#provedor-de-modelo). O harness envia o [contexto](#contexto) atual; o provedor devolve uma resposta (uma [chamada de ferramenta](#chamada-de-ferramenta) ou uma resposta final). Uma única mensagem do usuário pode gerar muitas requisições ao provedor de modelo se o [agente](#agente) chamar [ferramentas](#ferramenta) — cada [resultado de ferramenta](#resultado-de-ferramenta) dispara outra requisição.

Cada requisição carrega tudo: o [prompt de sistema](#prompt-de-sistema), a conversa inteira até ali, todos os resultados de ferramenta. O [modelo](#modelo) é [stateless](#stateless), então o provedor não guarda nada entre requisições — a requisição quarenta reenvia o que a trinta e nove enviou, mais um resultado de ferramenta. O [cache de prefixo](#cache-de-prefixo) existe para que essa repetição tenha um custo viável.

A requisição também é a unidade de cobrança. [Tokens de entrada](#tokens-de-entrada), [tokens de saída](#tokens-de-saída) e descontos de cache são todos contados por requisição, e é por isso que uma pergunta aparentemente inocente pode custar uma quantia surpreendente: o custo não é proporcional à sua mensagem, e sim ao número de requisições vezes o tamanho do contexto que cada uma carrega.

Vale distinguir a requisição do [turno](#turno). Um turno é uma troca com você, e um único turno — "conserta o teste que está falhando" — se desenrola como uma cadeia de requisições:

| Requisição | O modelo devolve                               | Em seguida, o harness                                 |
| ---------- | ---------------------------------------------- | ----------------------------------------------------- |
| 1          | Chamada de ferramenta: rodar os testes         | Roda os testes e anexa a saída da falha               |
| 2          | Chamada de ferramenta: ler o arquivo de teste  | Anexa o conteúdo do arquivo                           |
| 3          | Chamada de ferramenta: ler o arquivo-fonte     | Anexa o conteúdo do arquivo                           |
| 4          | Chamada de ferramenta: editar o arquivo-fonte  | Aplica a edição e anexa o resultado                   |
| 5          | Chamada de ferramenta: rodar os testes de novo | Roda os testes e anexa a saída com os testes passando |
| 6          | Resposta final: "corrigido, testes passando"   | Mostra a resposta a você                              |

Seis requisições para um turno — cada uma reenviando o contexto inteiro. Quando você se perguntar para onde foram os [tokens](#token), conte as requisições, não os turnos.

_Uso:_

"Uma pergunta queimou quarenta mil tokens?"

"Olha as chamadas de ferramenta — doze greps, oito reads, quatro edits. Cada resultado de ferramenta gera outra requisição ao provedor de modelo, e o prefixo da [sessão](#sessão) inteira é reenviado toda vez."

### Tokens de entrada

_Em inglês: Input tokens_

[Tokens](#token) que o [harness](#harness) envia em cada [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo) — o [prompt de sistema](#prompt-de-sistema), o histórico da conversa, os [resultados de ferramenta](#resultado-de-ferramenta), tudo o que o [modelo](#modelo) lê antes de escrever. São cobrados a uma tarifa menor que os [tokens de saída](#tokens-de-saída), porque são mais baratos de processar.

Na programação com [IA](#ia), os tokens de entrada respondem pela maior parte da sua fatura. O modelo é [stateless](#stateless) (sem estado), então cada [turno](#turno) reenvia a [sessão](#sessão) inteira como entrada: a primeira mensagem, cada resposta, cada resultado de ferramenta desde então. A entrada do turno cinquenta contém os quarenta e nove turnos anteriores. Uma única requisição ao provedor de modelo pode gerar algumas centenas de tokens de saída, mas reenviar cem mil tokens de entrada de histórico acumulado.

O [cache de prefixo](#cache-de-prefixo) reduz o custo: o histórico que coincide exatamente com uma requisição anterior é cobrado como [tokens de cache](#tokens-de-cache), mais baratos, e não como entrada a preço cheio. Quando o custo de entrada ainda pesa, a solução é diminuir o que é reenviado — [limpando o contexto](#limpeza-de-contexto) ou [compactando](#compactação) entre tarefas.

_Uso:_

"A fatura tá alta, mas o [agente](#agente) mal escreve nada."

"São os tokens de entrada — cada turno reenvia a sessão inteira. Sem o cache de prefixo, você paga de novo pelo histórico a cada requisição."

### Tokens de saída

_Em inglês: Output tokens_

Os [tokens](#token) que o [modelo](#modelo) gera de volta. São cobrados a uma tarifa maior que a dos [tokens de entrada](#tokens-de-entrada), geralmente cerca de cinco vezes a tarifa de entrada, porque custam mais processamento para produzir.

Tudo o que o modelo escreve conta: o texto que você lê, o código que ele emite, as [chamadas de ferramenta](#chamada-de-ferramenta) e qualquer raciocínio estendido que ele faz antes de responder. Esse último ponto surpreende muita gente: os tokens de raciocínio são cobrados como saída mesmo que o [harness](#harness) muitas vezes não os mostre a você, e aumentar o [esforço](#esforço-de-raciocínio) gasta mais deles.

Os tokens de saída também definem o ritmo de uma [sessão](#sessão). O modelo lê a entrada rapidamente, mas gera a saída um token por vez. Por isso, quando um [turno](#turno) parece lento, quase sempre o que demora é a escrita da saída, e não a leitura da entrada. Uma espera longa costuma indicar que vem uma resposta longa.

_Uso:_

"A sessão de refatoração está torrando crédito, mesmo com entradas pequenas."

"O agente está reescrevendo arquivos inteiros em vez de aplicar patches. Tokens de saída custam cerca de cinco vezes a tarifa de entrada. Faz ele emitir só as edições e a fatura cai."

### Cache de prefixo

_Em inglês: Prefix cache_

O armazenamento no lado do [provedor](#provedor-de-modelo) que permite que [requisições consecutivas ao provedor de modelo](#requisição-ao-provedor-de-modelo) pulem o reprocessamento de um prefixo compartilhado. Quando o início de uma requisição coincide com o início de uma requisição recente (mesmo [prompt de sistema](#prompt-de-sistema), mesmo histórico até certo ponto), o provedor reaproveita o trabalho anterior e cobra esses [tokens](#token) como [tokens de cache](#tokens-de-cache), a uma tarifa bem menor.

O cache compensa porque as sessões crescem apenas no final (append-only). Toda requisição reenvia o histórico inteiro como [tokens de entrada](#tokens-de-entrada) (veja esse verbete para entender o porquê) e, numa [sessão](#sessão) normal, o histórico só muda no final: cada requisição é a anterior mais algumas mensagens novas. O provedor processa uma vez o longo trecho inicial compartilhado, guarda o resultado e continua de onde o prefixo termina. Sem o cache, uma sessão de 50 [turnos](#turno) pagaria 50 vezes para reprocessar o primeiro turno.

Os caches também expiram. O tempo que uma entrada continua "quente" varia conforme o provedor de modelo, em geral minutos, não horas. Se você deixa a sessão parada além dessa janela, a próxima requisição reconstrói o prefixo uma vez, pela tarifa cheia, e só depois disso o cache volta a funcionar. Isso interessa sobretudo a quem constrói um [harness](#harness). Para quem usa, o efeito visível é que as requisições depois de uma pausa longa custam mais do que as anteriores.

_Uso:_

"Por que a fatura disparou no meio da sessão?"

"O harness começou a injetar a hora atual no prompt de sistema a cada turno. O cache de prefixo quebra no primeiro token que muda, então toda requisição depois disso foi cobrada pela tarifa cheia."

### Tokens de cache

_Em inglês: Cache tokens_

[Tokens de entrada](#tokens-de-entrada) que o [provedor](#provedor-de-modelo) guardou em cache de uma [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo) anterior, para não precisar processá-los de novo. Quando requisições consecutivas compartilham um prefixo, o provedor reaproveita o trabalho por meio do [cache de prefixo](#cache-de-prefixo) e cobra a parte em cache a uma tarifa bem menor. É o que torna [sessões](#sessão) longas viáveis — sem ele, cada [turno](#turno) paga de novo pelo histórico inteiro.

Isso importa por causa da forma como as sessões são cobradas. O [modelo](#modelo) é [stateless](#stateless), então cada requisição reenvia a conversa inteira — [prompt de sistema](#prompt-de-sistema), todas as mensagens, todos os [resultados de ferramenta](#resultado-de-ferramenta) — como tokens de entrada. No turno 50, cada requisição carrega 50 turnos de histórico, e você pagaria a tarifa cheia por tudo isso, toda vez. O cache muda essa conta: os tokens que o provedor já processou num prefixo idêntico são cobrados como tokens de cache, muitas vezes a um décimo da tarifa de entrada ou menos. Numa sessão longa, a maior parte do que você envia são tokens de cache, e a fatura se mantém razoável.

Um exemplo mostra quando os tokens entram no cache e quando não entram. Cada letra representa um bloco de conteúdo da conversa; cada requisição envia a conversa até aquele ponto:

| A requisição envia | Em cache | Cobrado à tarifa cheia | Motivo                                                    |
| ------------------ | -------- | ---------------------- | --------------------------------------------------------- |
| `AB`               | nada     | `AB`                   | Primeira requisição — não há nada para comparar           |
| `ABC`              | `AB`     | `C`                    | `AB` é um prefixo exato da requisição anterior            |
| `ABCD`             | `ABC`    | `D`                    | O prefixo continua intacto                                |
| `AXCD`             | `A`      | `XCD`                  | Uma edição trocou `B` por `X`; a correspondência falha aí |

O cache é frágil de um jeito específico: ele só reconhece prefixos exatos. Se qualquer coisa mudar antes no histórico da conversa — o [harness](#harness) reordena o conteúdo, um timestamp é atualizado, a representação de um arquivo muda —, há falha de cache daquele ponto em diante e tudo o que vem depois é cobrado à tarifa cheia de entrada. Os caches também expiram depois de alguns minutos de inatividade, então uma sessão retomada após uma pausa longa paga o histórico de novo uma vez. Quando o custo de uma sessão dispara sem motivo aparente, compare os tokens de cache com os tokens de entrada no relatório de uso: um cache quebrado aparece ali primeiro.

_Uso:_

"O custo em sessão longa é absurdo — gastei US$ 8 numa refatoração."

"Olha os tokens de cache. Se o harness está reordenando o prompt de sistema ou os arquivos entre um turno e outro, o prefixo quebra e você paga a tarifa cheia de entrada em toda requisição."

## Seção 2 — Sessões, Janelas de Contexto e Turnos

### Stateless

Stateless (sem estado): não carrega informação adiante. O [modelo](#modelo) é stateless entre [requisições ao provedor de modelo](#requisição-ao-provedor-de-modelo) — cada requisição reenvia toda a [janela de contexto](#janela-de-contexto), porque o modelo não tem como ver mais nada. Um [agente](#agente) é stateless entre [sessões](#sessão) por padrão: uma sessão nova começa vazia, sem vestígio das anteriores. Contraparte de [stateful](#stateful).

O próprio modelo é permanentemente stateless: seus [parâmetros](#parâmetros) ficam congelados depois do [treinamento](#treinamento), e nada que você faça durante a [inferência](#inferência) os altera. O modelo não aprende com suas correções, não se lembra de ter ouvido a mesma coisa ontem e não passa a conhecer você aos poucos, por mais que a conversa dê essa impressão. A sensação de continuidade dentro de uma sessão é produzida pelo [harness](#harness), que guarda a transcrição e a reenvia a cada requisição. O modelo não se lembra da conversa; ele a relê.

Na prática: se você quer que algo seja lembrado entre sessões, precisa escrever isso em algum lugar que o agente vá ler de volta. É isso que são os [arquivos AGENTS.md](#agentsmd), os [sistemas de memória](#sistema-de-memória) e os [artefatos de handoff](#artefato-de-handoff) — arquivos que são carregados no [contexto](#contexto) das sessões futuras, no lugar da memória que o modelo não tem. Quando o agente insiste num erro que você já corrigiu, a pergunta não é por que ele não aprendeu — ele não pode — e sim onde essa correção deve ser escrita para que toda sessão futura a leia.

_Uso:_

"Por que ele esquece a convenção toda vez que eu [limpo o contexto](#limpeza-de-contexto)?"

"O modelo é stateless — a sessão nova começa vazia. Se você quer que isso passe de uma sessão pra outra, escreve no AGENTS.md ou num arquivo de memória que o harness carrega no início da sessão."

### Contexto

_Em inglês: Context_

As informações relevantes que o [agente](#agente) tem à disposição agora. É o substantivo abstrato — não a entrada bruta que o modelo enxerga (essa é a [janela de contexto](#janela-de-contexto)), nem o histórico acumulado (esse é a [sessão](#sessão)), mas _o que o agente sabe que é pertinente à tarefa_. "Carregar algo no contexto" significa passar a incluir esse algo no conjunto; "engenharia de contexto" é a disciplina de fazer a curadoria dele.

Os três termos são distintos:

| Termo              | O que nomeia                                                                  |
| ------------------ | ----------------------------------------------------------------------------- |
| Contexto           | As informações relevantes para a tarefa que o agente tem no momento           |
| Janela de contexto | A sequência literal de [tokens](#token) que o modelo vê a cada requisição |
| Sessão             | A conversa em andamento que o [harness](#harness) armazena                |

A separação importa porque contexto é uma medida de qualidade, não de quantidade. Uma janela de contexto pode estar quase cheia e o contexto continuar ruim — milhares de tokens de saídas desatualizadas de ferramentas, nenhum deles sobre a tarefa em questão. Ela também pode estar quase vazia e o contexto ser bom: a única definição de tipo em que a tarefa se apoia.

A maioria das falhas do dia a dia tem origem no contexto. Quando o agente inventa uma API, contradiz uma decisão ou chuta um schema, a primeira pergunta é o que estava no contexto naquela hora — em geral o fato relevante nunca foi carregado, ou ficou soterrado pela [degradação de atenção](#degradação-de-atenção). A correção é a curadoria: carregue o que a tarefa precisa e deixe de fora o que ela não precisa.

_Uso:_

"Ele fica inventando campos que não existem no tipo."

"O arquivo do tipo não está no contexto — ele está lendo os pontos de chamada e chutando. Manda ele ler a definição primeiro."

### Janela de contexto

_Em inglês: Context window_

Tudo o que o [modelo](#modelo) vê em cada [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo). Finita, específica de cada modelo e a _única_ superfície pela qual o modelo percebe qualquer coisa.

É uma única sequência de [tokens](#token): o [prompt de sistema](#prompt-de-sistema), a conversa até aqui e cada [resultado de ferramenta](#resultado-de-ferramenta) que o [harness](#harness) devolveu ao modelo. Se algo está nessa sequência, o modelo pode usar; se não está, ele não sabe que existe — nem a sua base de código, nem o arquivo que você editou ontem, nem a instrução que você deu três sessões atrás. Tudo o que está fora da janela precisa ser trazido para dentro, normalmente por uma [chamada de ferramenta](#chamada-de-ferramenta), antes de poder influenciar qualquer coisa.

Finita quer dizer que ela enche. Cada turno acrescenta mais conteúdo — suas mensagens, as respostas do modelo, os resultados de ferramenta — e uma [sessão](#sessão) longa acaba chegando ao limite, o que força uma [compactação](#compactação) ou uma [limpeza de contexto](#limpeza-de-contexto). Também quer dizer que tudo dentro da janela compete: cada token que você carrega é um a menos para o resto, e o conteúdo desnecessário continua ocupando o [orçamento de atenção](#orçamento-de-atenção) do modelo. Na prática, trate a janela como um orçamento: carregue o que a tarefa exige e deixe o resto de fora.

_Evite:_ "memória" — a janela de contexto é estado de trabalho e não persiste entre sessões. [Memória](#sistema-de-memória) é um conceito separado, montado por cima dela.

_Uso:_

"Posso colar o monorepo inteiro no prompt?"

"A janela de contexto tem 200 mil tokens — isso dá uns 20% do repo. Escolha os arquivos que a tarefa toca e deixe o resto por trás de uma chamada de ferramenta."

### Stateful

Stateful (com estado): carrega informação adiante. Uma [sessão](#sessão) é stateful entre [turnos](#turno) — o [contexto](#contexto) se acumula conforme a sessão roda, e é por isso que sessões longas acabam caindo na [zona burra](#zona-inteligente). Um [agente](#agente) pode ser stateful entre **sessões** quando ganha um [sistema de memória](#sistema-de-memória) que grava informação no [ambiente](#ambiente) e a recarrega no início das sessões futuras. O [modelo](#modelo) nunca é stateful; qualquer continuidade aparente é o [harness](#harness) realimentando o contexto. Contraparte de [stateless](#stateless).

Onde o estado fica em cada camada:

| Camada   | Stateful?     | Como                                                                                                                                    |
| -------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Modelo   | Nunca         | Os [parâmetros](#parâmetros) são congelados; ele só vê o que vem em cada requisição                                            |
| Sessão   | Entre turnos  | O harness acrescenta cada mensagem e cada [resultado de ferramenta](#resultado-de-ferramenta) ao contexto                       |
| Harness  | Entre sessões | Arquivos de memória, [AGENTS.md](#agentsmd), [artefatos de handoff](#artefato-de-handoff) — gravados e recarregados depois |
| Ambiente | Sempre        | Os arquivos persistem com ou sem sessão rodando                                                                                         |

O estado de cada camada é construído relendo algo guardado uma camada abaixo: a sessão parece contínua porque o harness reenvia o histórico de mensagens ao modelo stateless, e o agente lembra entre sessões porque o harness recarrega arquivos do ambiente. Nenhum estado é guardado no próprio modelo.

Nem sempre se quer estado. Tudo o que é carregado adiante influencia o que vem depois, então uma suposição errada feita no começo da sessão também é carregada adiante. A [limpeza de contexto](#limpeza-de-contexto) é o ato deliberado de descartar o estado da sessão e recomeçar a partir do que está escrito.

_Uso:_

"Ele lembrou das minhas preferências de ontem. Isso quer dizer que o modelo aprendeu?"

"Não, o agente é stateful porque o harness gravou isso num arquivo de memória e recarregou no início da sessão. O modelo em si não viu nada de ontem."

### Agente

_Em inglês: Agent_

Um [modelo](#modelo) [envolvido por um harness](#harness) com [ferramentas](#ferramenta), um [prompt de sistema](#prompt-de-sistema) e uma [janela de contexto](#janela-de-contexto), que se reveza com um usuário em [turnos](#turno). _O Claude Code é um agente. O Cursor é um agente. O Claude.ai é um agente._ O agente é aquilo com que você de fato conversa — é o modelo em movimento, configurado para um propósito.

Ao contrário da maioria dos termos deste dicionário, "agente" não nomeia uma peça mecânica. O modelo é um arquivo de [parâmetros](#parâmetros); o harness é um software que dá para apontar. O agente não é nenhum dos dois — é a unidade com quem você está falando. As pessoas antropomorfizam a [IA](#ia) o tempo todo, e o agente é a unidade antropomorfizada: aquilo a que você delega tarefas, aquilo que lê sua mensagem e responde, o "ele" em "ele quebrou o build de novo". Quando você diz que o agente fez algo, quer dizer que o modelo junto com o harness fez, mas você se dirige à combinação como um único ator.

A ideia é mais antiga que esta onda de IA. Agentes de software — programas aos quais você delega um objetivo e que agem em seu nome — existem como conceito desde que existe IA.

_Evite:_ "a IA", "o bot" (vagos demais — não deixam claro se você fala dos parâmetros ou da coisa envolvida por um harness).

_Uso:_

"Qual agente você está usando na migração?"

"Claude Code local, Cursor pro trabalho de UI — mesmo modelo por baixo, harnesses diferentes."

### Prompt de sistema

_Em inglês: System prompt_

As instruções que o [harness](#harness) insere antes de cada [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo) — o briefing fixo do [agente](#agente): quem ele é, como deve se comportar, quais [ferramentas](#ferramenta) pode chamar, quais convenções seguir. Costuma ser estável ao longo de uma [sessão](#sessão).

O prompt de sistema é escrito pelo fornecedor do harness, não por você. Em harnesses de programação ele é extenso: muitas vezes são dezenas de milhares de [tokens](#token) de regras de comportamento, descrições de ferramentas e tratamento de casos de borda, tudo pago como [tokens de entrada](#tokens-de-entrada) a cada [turno](#turno). Suas próprias instruções permanentes vão junto: arquivos como [AGENTS.md](#agentsmd) são carregados ao lado do prompt de sistema no início da sessão, então o [modelo](#modelo) lê o briefing do fornecedor e o seu ao mesmo tempo, antes mesmo de ver a sua mensagem.

Como é idêntico em toda requisição, ele forma o início do [cache de prefixo](#cache-de-prefixo). É em parte por isso que os harnesses o mantêm fixo durante a sessão, em vez de editá-lo conforme ela avança.

Os modelos são treinados para dar prioridade ao prompt de sistema sobre as mensagens do usuário. Por isso, quando um agente insiste numa convenção que você nunca pediu, ou formata a saída de um jeito que você não consegue mudar, em geral ele está obedecendo ao prompt de sistema, e a sua mensagem perde a disputa. Alguns harnesses são personalizáveis: dão acesso completo ao prompt de sistema, então você pode ler o que o agente recebe como instrução e alterar isso.

_Uso:_

"Dois harnesses, mesmo modelo, comportamento completamente diferente pro mesmo prompt."

"Prompts de sistema diferentes. Um é ajustado pra edições de código enxutas, o outro pra explicar — a divergência nasce aí, antes de a sua mensagem chegar."

### Sessão

_Em inglês: Session_

Uma execução delimitada de interação com um [agente](#agente). Começa vazia, acumula mensagens, [resultados de ferramenta](#resultado-de-ferramenta) e arquivos lidos, e termina quando é [limpa](#limpeza-de-contexto), fechada ou [compactada](#compactação) numa sessão nova. A sessão é o que _preenche_ a [janela de contexto](#janela-de-contexto): se a janela de contexto é a caixa, a sessão é o material que vai enchendo a caixa aos poucos. Um trabalho grande demais para uma única janela de contexto precisa ser dividido em várias sessões.

O histórico de mensagens da sessão é a memória de trabalho do agente. O [modelo](#modelo) é [stateless](#stateless) (sem estado), então tudo o que ele parece lembrar — o que você pediu, o que os testes mostraram, o que ele decidiu três turnos atrás — está no histórico de mensagens, reenviado a cada [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo). O que não está na sessão não existe para o agente.

Essa memória acaba junto com a sessão. Uma sessão nova começa do zero: o agente que conhecia bem a sua base de código no fim da sessão de ontem não sabe nada disso hoje de manhã. O que sobrevive é o [sistema de arquivos](#sistema-de-arquivos) — arquivos escritos durante uma sessão podem ser lidos pela seguinte, e é nisso que se apoiam os [handoffs](#handoff), os [sistemas de memória](#sistema-de-memória) e o [AGENTS.md](#agentsmd).

Quem escolhe onde a sessão termina é você. Tudo o que está numa sessão influencia todos os [turnos](#turno) seguintes, então tarefas sem relação feitas na mesma sessão deixam resíduo que influencia a resposta seguinte. Uma tarefa por sessão mantém o contexto relevante; terminar uma tarefa é um ponto natural para limpar.

_Uso:_

"Quanto tempo uma sessão aguenta antes de degringolar?"

"Depende do trabalho — uma refatoração focada se mantém boa por mais tempo do que uma pesquisa em aberto. Quando a sessão incha, faz handoff ou compacta, não fica insistindo."

### Turno

_Em inglês: Turn_

Uma mensagem do usuário mais tudo o que o [agente](#agente) faz em resposta, até devolver a vez ao usuário. Contém uma ou mais [requisições ao provedor de modelo](#requisição-ao-provedor-de-modelo) — muitas, se o agente chamar [ferramentas](#ferramenta). Uma pergunta de esclarecimento encerra o turno; a sua resposta abre o próximo. A hierarquia é [sessão](#sessão) **> Turno > Requisição ao provedor de modelo**.

O que faz o turno merecer um nome é que a duração é decisão do agente, não sua. Você entrega uma mensagem; o agente decide quantas chamadas de ferramenta encadear antes de devolver a vez. Um turno pode ser uma resposta de uma frase ou vinte minutos de leitura, edição e execução de testes. É a mesma propriedade vista de dois ângulos: turnos longos são o que torna possível o trabalho [AFK](#afk), e turnos longos também são onde as coisas dão errado sem supervisão — quando o agente devolve a vez, ele pode ter se desviado bastante do que você queria.

O turno também é a unidade natural de direcionamento. Tudo o que acontece dentro de um turno acontece sem você; os intervalos entre turnos são onde você redireciona. A maioria dos [harnesses](#harness) suaviza isso: você pode interromper no meio do turno para parar o agente e redirecioná-lo, ou digitar uma mensagem enquanto ele trabalha, que será lida quando o turno terminar. Se você fica repetidamente insatisfeito com o ponto em que os turnos terminam, a correção costuma ser pedir turnos menores — primeiro um plano, depois um passo de cada vez — trocando autonomia por intervalos mais frequentes para direcionar.

_Uso:_

"Um turno levou dois minutos?"

"Ele fez catorze [chamadas de ferramenta](#chamada-de-ferramenta) dentro desse turno — cada uma é uma requisição separada ao provedor de modelo. A latência vai se acumulando até o agente finalmente devolver a vez pra você."

## Seção 3 — Ferramentas e Ambiente

### Ambiente

_Em inglês: Environment_

O mundo em que o [agente](#agente) atua — tudo o que fica fora do [harness](#harness) e que o agente percebe por [resultados de ferramenta](#resultado-de-ferramenta) e altera por [chamadas de ferramenta](#chamada-de-ferramenta). O harness _executa_ o agente; o ambiente é o lugar em que o agente _trabalha_. Um arquivo como o [`AGENTS.md`](#agentsmd) fica no ambiente; o harness é quem o carrega na [janela de contexto](#janela-de-contexto). Um [sistema de arquivos](#sistema-de-arquivos) é o tipo mais comum de ambiente, mas não o único (um banco de dados, uma API remota e uma sessão de navegador também podem ser ambientes).

O agente só vê o ambiente quando olha para ele. Tudo o que ele sabe sobre o ambiente chegou por um resultado de ferramenta, então a imagem que ele tem é um conjunto de instantâneos, cada um correto no momento em que foi tirado. Se um arquivo muda depois que o agente o leu — você o edita à mão, uma etapa de build o regenera —, o agente continua raciocinando a partir da cópia desatualizada até que algo o leve a reler. Um agente que descreve com segurança um arquivo que já não está daquele jeito costuma estar nessa situação: o ambiente mudou, o instantâneo não.

O ambiente também é a camada que persiste — a única que é sempre [stateful](#stateful) (com estado). O contexto de uma [sessão](#sessão) some quando a sessão termina, mas os arquivos gravados no ambiente permanecem para a próxima sessão ler — e é nisso que se apoiam os [sistemas de memória](#sistema-de-memória), os [artefatos de handoff](#artefato-de-handoff) e o `AGENTS.md`. Tudo o que um agente ainda precisa saber amanhã tem de acabar no ambiente.

Quem decide o tamanho do ambiente é você. Um [sandbox](#sandbox) o reduz, limitando o que o agente consegue alcançar; adicionar uma [ferramenta](#ferramenta) o amplia, trazendo um banco de dados ou uma API para o alcance do agente. O que está dentro da fronteira é o que o agente pode perceber e alterar; tudo o que está fora dela não existe para o agente. O quanto o ambiente está preparado para apoiar o trabalho do agente é a [AX](#ax) da base de código.

_Evite:_ usar "ambiente" para o runtime ou para o próprio harness — o harness é o invólucro, o ambiente é o espaço de trabalho.

_Uso:_

"O agente não consegue ver o schema do banco de staging."

"Coloca isso no ambiente — dá pra ele uma ferramenta `psql` com acesso somente leitura ao staging. O harness tá certo, ele só não tem nada sobre o que agir."

### Sistema de arquivos

_Em inglês: Filesystem_

Uma árvore de arquivos e diretórios em que o [agente](#agente) lê, escreve e executa — o tipo padrão de [ambiente](#ambiente) de um agente de programação. [AGENTS.md](#agentsmd), [skills](#skill), código-fonte, scripts de build e configurações de [ferramentas](#ferramenta) ficam todos em um sistema de arquivos. Quando um [harness](#harness) "começa no seu projeto", ele está apontando o agente para um sistema de arquivos.

O agente só toca nele por meio de [chamadas de ferramenta](#chamada-de-ferramenta) — ler um arquivo, escrever um arquivo, rodar um comando de shell. Nada no disco está na [janela de contexto](#janela-de-contexto) até que uma chamada de ferramenta o carregue. É isso que permite ao agente trabalhar num repositório muito maior que a janela: o sistema de arquivos guarda tudo, e o contexto guarda só o que a tarefa atual leu. Alguns harnesses carregam por padrão os nomes de arquivo do diretório atual na janela de contexto — não o conteúdo, só a árvore —, e esses nomes funcionam como [ponteiros de contexto](#ponteiro-de-contexto): o agente vê o que existe e lê os arquivos de que precisa.

Você e o agente compartilham o mesmo sistema de arquivos. Os arquivos que o agente edita são os mesmos que você abre no editor e confere com diff no git; é o espaço de trabalho comum em que você revisa o que o agente fez.

_Uso:_

"Por que ele não está pegando meu AGENTS.md?"

"Ele está rodando em outro sistema de arquivos — o [sandbox](#sandbox) montou o diretório pai, não a raiz do projeto. Aponta o harness de novo."

### Ferramenta

_Em inglês: Tool_

Uma função que o [harness](#harness) expõe para o [agente](#agente) chamar — Read, Write, Bash, Search. As ferramentas são a forma como o agente percebe e age no [ambiente](#ambiente): ele só enxerga o ambiente por meio de [resultados de ferramenta](#resultado-de-ferramenta) e só o altera por meio de [chamadas de ferramenta](#chamada-de-ferramenta). Cada chamada de ferramenta custa uma [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo) a mais, já que o resultado precisa voltar ao modelo antes que ele decida o que fazer em seguida.

Ferramentas que a maioria dos agentes de programação traz:

| Ferramenta | O que faz                                                                       |
| ---------- | ------------------------------------------------------------------------------- |
| Read       | Devolve o conteúdo de um arquivo como resultado de ferramenta                   |
| Write      | Cria ou edita um arquivo no [sistema de arquivos](#sistema-de-arquivos) |
| Bash       | Executa um comando de shell e devolve a saída                                   |
| Search     | Encontra arquivos ou trechos de texto que casam com um padrão na base de código |

Uma ferramenta é definida por três coisas: um nome, uma descrição do que ela faz e um schema dos parâmetros. O harness envia essas definições ao [modelo](#modelo) a cada requisição, e o modelo escolhe uma ferramenta do mesmo jeito que produz todo o resto — escrevendo [tokens](#token), neste caso uma chamada estruturada com argumentos. O modelo nunca executa nada por conta própria; o harness lê a chamada, roda a função e devolve o resultado.

A lista de ferramentas define o que o agente consegue fazer. Um modelo capaz com poucas ferramentas é um agente limitado: ele faz tudo passar pelo que tiver, e por isso os agentes dependem tanto do Bash — o shell é uma única ferramenta que alcança quase todo o sistema. Para dar uma capacidade nova ao agente de forma limpa, adicione uma ferramenta para ela; o [MCP](#mcp) é o padrão para conectar ferramentas de fora do harness.

As definições de ferramenta ocupam o [contexto](#contexto) a cada requisição, então um conjunto grande de ferramentas tem um custo fixo antes mesmo de qualquer chamada — e muitas ferramentas com descrições parecidas fazem o modelo errar mais na hora de escolher entre elas.

_Uso:_

"O agente consegue consultar o staging direto?"

"Adiciona uma ferramenta `psql` no harness, somente leitura no staging. Sem uma ferramenta pra isso, o agente fica cego pra tudo que estiver fora do sistema de arquivos."

### Chamada de ferramenta

_Em inglês: Tool call_

A saída do [modelo](#modelo) que nomeia uma [ferramenta](#ferramenta) e seus argumentos — só texto estruturado. Ela não faz nada por conta própria; o [harness](#harness) precisa lê-la e executá-la. É produzida pelo modelo em uma única [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo).

O ciclo de vida de uma chamada de ferramenta:

| Etapa | Quem    | O que acontece                                                                                               |
| ----- | ------- | ------------------------------------------------------------------------------------------------------------ |
| 1     | Modelo  | Descobre quais ferramentas existem pelas descrições no [prompt de sistema](#prompt-de-sistema)       |
| 2     | Modelo  | Emite uma chamada — nome da ferramenta mais argumentos, geralmente em JSON — e para                          |
| 3     | Harness | Faz o parse da chamada e a confere com o [modo de permissão](#modo-de-permissão)                |
| 4     | Harness | Executa, se ela for permitida                                                                                |
| 5     | Harness | Devolve o desfecho como um [resultado de ferramenta](#resultado-de-ferramenta) na próxima requisição |

Um [turno](#turno) de trabalho do [agente](#agente) costuma ser composto de várias dessas idas e voltas encadeadas.

Como a chamada é gerada por [previsão do próximo token](#previsão-do-próximo-token), como todo o resto, ela pode estar errada como qualquer outra saída de modelo: um path que não existe, uma flag que o comando não tem, argumentos plausíveis em vez de corretos. O harness executa o que foi escrito, não o que se quis dizer — um path digitado errado não gera um erro amigável, ele edita o arquivo errado.

_Uso:_

"Ele disse que rodou os testes, mas os timestamps dos arquivos não mudaram."

"Dá uma olhada na transcrição — ele emitiu mesmo uma chamada de ferramenta ou só descreveu que rodou? O modelo produz a chamada, mas se o harness não executou, nada aconteceu."

### Resultado de ferramenta

_Em inglês: Tool result_

O que o [harness](#harness) devolve depois de executar uma [chamada de ferramenta](#chamada-de-ferramenta) — o conteúdo do arquivo, a saída do comando, o erro. A única visão que o [agente](#agente) tem do [ambiente](#ambiente). Volta para o [modelo](#modelo) na _próxima_ [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo), e é ali que o modelo decide o que fazer com ele. A chamada de ferramenta e o resultado de ferramenta são as duas pontas da mesma troca, ambas dentro de um [turno](#turno).

O ciclo de vida de um resultado de ferramenta:

| Etapa | Quem    | O que acontece                                                             |
| ----- | ------- | -------------------------------------------------------------------------- |
| 1     | Harness | Executa a chamada de ferramenta — roda o comando, lê o arquivo             |
| 2     | Harness | Captura o desfecho: saída, conteúdo ou erro                                |
| 3     | Harness | Anexa o resultado ao [contexto](#contexto) como uma mensagem           |
| 4     | Harness | Envia o contexto inteiro na próxima requisição ao provedor de modelo       |
| 5     | Modelo  | Lê o resultado e decide: outra chamada de ferramenta ou uma resposta final |

O resultado permanece no contexto pelo resto da [sessão](#sessão). Os resultados de ferramenta costumam ser a maior parte do contexto de uma sessão de programação: cada arquivo lido, cada execução de testes e cada busca entra por inteiro e continua ocupando [tokens](#token) muito depois de ter deixado de ser útil. Alguns resultados grandes — um log de testes extenso, um arquivo gerado lido por completo — podem empurrar a sessão para o limite da [janela de contexto](#janela-de-contexto) mais rápido do que a própria conversa.

Como o resultado é tudo o que o modelo enxerga, ele não tem como conferir o ambiente por trás dele. Se a saída foi truncada, se o comando falhou em silêncio ou se o harness devolveu um erro em vez do conteúdo, o modelo raciocina com o que recebeu. Quando a imagem que o agente tem do seu sistema parece errada, é nos resultados de ferramenta que você deve procurar: em algum ponto da transcrição há um resultado que diz algo diferente do que você sabe ser verdade.

_Uso:_

"Ele está raciocinando sobre o arquivo como se estivesse vazio."

"O resultado de ferramenta veio como uma negação de permissão, e não como o conteúdo. O modelo só viu a string de erro — ele não tem nenhum outro jeito de ver o arquivo."

### MCP

**Model Context Protocol (protocolo de contexto de modelo).** Um protocolo para conectar servidores de ferramentas externos a um [harness](#harness) — é como um [agente](#agente) ganha [ferramentas](#ferramenta) além das que o harness traz de fábrica. O agente nunca "chama o MCP"; ele chama uma ferramenta, e o harness acabou obtendo essa ferramenta de um servidor MCP. O protocolo também expõe recursos (dados somente leitura) e prompts (modelos reutilizáveis), mas o uso principal é fornecer ferramentas.

O protocolo resolve um problema de integração. Sem um padrão, cada harness precisaria de uma integração própria com o Linear, outra com o Slack, outra com o banco de dados — escritas e mantidas separadamente para cada um. Com o MCP, a integração é escrita uma vez, como um servidor, e qualquer harness compatível com MCP consegue usá-la. O harness se conecta ao servidor, o servidor anuncia quais ferramentas oferece, e essas ferramentas ficam disponíveis para o agente junto com as embutidas.

O custo é pago em [contexto](#contexto). Cada ferramenta que um servidor anuncia chega como uma definição — nome, descrição, schema de parâmetros — e o [modelo](#modelo) só consegue chamar ferramentas que conhece. A abordagem ingênua carrega todas as definições na [janela de contexto](#janela-de-contexto) logo de início: instale alguns servidores com muitas ferramentas e uma [sessão](#sessão) começa com milhares de [tokens](#token) de schemas de ferramentas antes de você digitar qualquer coisa, gastando [orçamento de atenção](#orçamento-de-atenção) com ferramentas que a tarefa nunca vai usar.

Muitos harnesses hoje reduzem esse custo com busca de ferramentas: em vez das definições completas, o contexto guarda um [ponteiro de contexto](#ponteiro-de-contexto) para as ferramentas disponíveis — o agente procura uma ferramenta pelo nome ou pela finalidade e só carrega a definição quando precisa dela. Se o seu harness não faz isso, o custo inicial continua valendo, e vale a pena ativar só os servidores que o projeto realmente usa.

_Uso:_

"O agente precisa ler os tickets do Linear."

"Configura o harness pra usar o servidor MCP do Linear — ele expõe a API do Linear como ferramentas que o agente pode chamar. Poupa você de escrever wrappers de ferramenta na mão."

### Pedido de permissão

_Em inglês: Permission request_

O que o [harness](#harness) mostra ao usuário antes de executar uma [chamada de ferramenta](#chamada-de-ferramenta) que não está pré-aprovada. O [modelo](#modelo) produz uma chamada de ferramenta; em vez de executá-la de imediato, o harness pausa e pergunta. Se você aprova, ela roda; se nega, o harness informa a negação ao modelo como um [resultado de ferramenta](#resultado-de-ferramenta). É o mecanismo pelo qual um harness coloca um humano no [loop](#humano-no-loop) para ações arriscadas ou sensíveis.

O ciclo de vida de um pedido de permissão:

| Etapa | Quem    | O que acontece                                                                                         |
| ----- | ------- | ------------------------------------------------------------------------------------------------------ |
| 1     | Modelo  | Produz uma chamada de ferramenta                                                                       |
| 2     | Harness | Confere a chamada contra o [modo de permissão](#modo-de-permissão) e as aprovações salvas |
| 3     | Harness | Pré-aprovada: executa de imediato. Caso contrário: pausa e mostra o pedido                             |
| 4     | Usuário | Aprova uma vez, aprova pelo resto da [sessão](#sessão) ou nega                                |
| 5     | Harness | Executa a chamada ou devolve a negação como um resultado de ferramenta                                 |

Negar um pedido direciona o agente. O modelo lê a negação como qualquer outro resultado de ferramenta e reage a ela — tenta outra abordagem ou pergunta o que você prefere. A maioria dos harnesses deixa você anexar uma mensagem à negação, o que transforma o pedido num ponto de direcionamento: "assim não, use o script de migração" chega exatamente quando o modelo está decidindo o que fazer em seguida.

O custo é que cada pedido é uma espera síncrona por você. O [agente](#agente) fica bloqueado até você responder, o que é aceitável enquanto você está acompanhando e vira problema quando não está — um agente que dispara pedidos o tempo todo não pode ser deixado trabalhando [AFK](#afk). O modo de permissão é o ajuste: define quais chamadas rodam livremente e quais perguntam antes, de preferência com um [sandbox](#sandbox) que torne seguro ampliar o conjunto de chamadas que rodam livremente.

_Uso:_

"Ficou travado num pedido de permissão por dez minutos — eu estava numa reunião."

"Esse é o custo de ter humano no loop. Pré-aprova as [ferramentas](#ferramenta) seguras, para que o pedido só apareça nas chamadas realmente arriscadas."

### Modo de permissão

_Em inglês: Permission mode_

A parte do [modo de agente](#modo-de-agente) que define a barreira de permissões — quais [chamadas de ferramenta](#chamada-de-ferramenta) geram um [pedido de permissão](#pedido-de-permissão) e quais rodam automaticamente. É a finalidade original dos sistemas de modos, antes de os [harnesses](#harness) começarem a empacotar instruções de comportamento por cima.

Os harnesses trazem uma escada desses modos:

| Modo                        | Leituras    | Escritas e shell                    | Uso típico                                           |
| --------------------------- | ----------- | ----------------------------------- | ---------------------------------------------------- |
| Somente leitura / plan mode | Automáticas | Bloqueadas                          | Pesquisa, planejamento, revisão                      |
| Default                     | Automáticas | Pergunta                            | Trabalho diário supervisionado                       |
| Auto-edit                   | Automáticas | Edições automáticas, shell pergunta | Repositórios confiáveis, mudanças mecânicas          |
| "YOLO mode" / full-auto     | Automáticas | Automáticas                         | [Sandboxes](#sandbox), execuções [AFK](#afk) |

Escolher um degrau é uma troca entre segurança e interrupção, e os dois modos de falha aparecem no uso. Se o modo é restritivo demais, você vira o gargalo: o [agente](#agente) para a cada poucos segundos por causa de leituras inofensivas, você aprova no piloto automático e as aprovações perdem o sentido. Aprovar sem olhar é o pior dos dois mundos, com toda a interrupção e nenhuma proteção. Se o modo é permissivo demais, o agente edita arquivos e roda comandos que você gostaria de ter visto antes.

O extremo permissivo é mais defensável dentro de um sandbox, onde o raio de impacto de uma chamada ruim a uma [ferramenta](#ferramenta) fica contido. Fora dele, a maioria das pessoas aprova as leituras automaticamente e mantém um [humano no loop](#humano-no-loop) para tudo que for irreversível.

_Uso:_

"Ele parou em cada grep e estragou a execução AFK."

"Afrouxa o modo de permissão das ferramentas somente leitura e continua pedindo confirmação nas escritas e no shell. A maioria dos pedidos de permissão numa [sessão](#sessão) de pesquisa é ruído."

### Modo de agente

_Em inglês: Agent mode_

Uma predefinição que molda como o [agente](#agente) opera em tempo de execução — combina um [modo de permissão](#modo-de-permissão) com instruções de comportamento injetadas no [prompt de sistema](#prompt-de-sistema). Exemplos: um modo padrão (default) que pede confirmação em chamadas de risco, um **plan mode** que bloqueia edições e direciona o agente para a pesquisa, um modo **accept-edits** que aprova edições automaticamente, um modo **bypass permissions** (na gíria, **YOLO mode**) que aprova tudo automaticamente. Pode mudar no meio da [sessão](#sessão).

A combinação é o que distingue um modo de uma simples configuração de permissão. Um modo de permissão é só uma barreira: decide quais [chamadas de ferramenta](#chamada-de-ferramenta) passam. Uma barreira sozinha produz um agente que quer editar, mas não pode — ele propõe a escrita, é bloqueado e tenta outro caminho. As instruções injetadas tiram essa vontade: o plan mode não só bloqueia edições, como avisa o agente de que ele está numa fase de planejamento, e por isso o agente lê, pergunta e propõe em vez de forçar a barreira. Barreira e direcionamento apontam para o mesmo lado.

Na prática, você muda de modo conforme a sua confiança varia ao longo de uma tarefa. A mesma tarefa pode passar por vários modos: plan mode enquanto a abordagem ainda está sendo definida, o padrão com confirmação para as primeiras edições delicadas, accept-edits quando o agente já mostrou que entendeu a mudança, bypass para uma execução [AFK](#afk) dentro de um [sandbox](#sandbox). Trocar de modo não custa nada: a conversa continua exatamente de onde estava, com novas permissões e novas instruções. Se você se pega aprovando todo pedido sem ler, o modo está mais restritivo do que a sua confiança real; se você vive rejeitando edições, está mais frouxo.

_Termos de fornecedores:_ o Claude Code chama isso de "permission modes" (modos de permissão), o Codex chama de "approval modes" (modos de aprovação) — ambos anteriores a esse agrupamento com instruções de comportamento.

_Uso:_

"Ele não para de editar arquivo, e eu só queria um plano."

"Muda pro plan mode — ele bloqueia as escritas e fica só na pesquisa."

"E pra rodada AFK de mais tarde?"

"Modo bypass, mas só dentro do sandbox."

### Sandbox

Um sandbox (ambiente isolado) é um [ambiente](#ambiente) fechado em que o [agente](#agente) roda — um contêiner, uma VM, um [sistema de arquivos](#sistema-de-arquivos) efêmero ou um shell com permissões restritas. Ele limita o raio de impacto das ações do agente: mesmo que o agente rode comandos destrutivos ou baixe algo malicioso, o dano fica contido. É a base de segurança que torna viável o trabalho [AFK](#afk) (longe do teclado).

O sandbox e o [modo de permissão](#modo-de-permissão) resolvem o mesmo problema por lados opostos. As permissões perguntam antes de uma ação rodar; o sandbox limita até onde a ação chega se ela rodar. As permissões exigem que você esteja [no loop](#humano-no-loop) — cada pedido é uma interrupção — e uma sessão que pergunta o tempo todo quase não é autônoma. O sandbox gasta infraestrutura em vez de atenção: quanto mais forte o isolamento, menos perguntas precisam ser feitas.

O isolamento vem em níveis:

| Nível          | O que é                                                               | O que contém                                    |
| -------------- | --------------------------------------------------------------------- | ----------------------------------------------- |
| Shell restrito | Confinamento no nível do SO em torno de cada comando                  | Gravações fora do projeto, acesso à rede        |
| Contêiner      | Sistema de arquivos novo, sem credenciais montadas, descartado depois | Tudo o que o agente fizer com a própria máquina |
| VM / nuvem     | Uma máquina separada, muitas vezes fornecida pelo harness             | Tudo, inclusive fugas no nível do kernel        |

O que nenhum sandbox contém: ações que saem dele de forma legítima. Um agente com suas credenciais do git consegue fazer push; um com acesso à rede consegue chamar APIs de produção. Decida o que atravessa a fronteira antes de decidir quão grossa ela deve ser.

_Uso:_

"Quero deixar rodando a noite toda em [bypass-permissions](#modo-de-agente), mas não me sinto pronto pra isso."

"Bota ele num sandbox — contêiner novo, sem credenciais montadas, sem rede de saída. No pior caso ele destrói o próprio sistema de arquivos e você descarta o contêiner."

## Seção 4 — Modos de Falha

### Bajulação

_Em inglês: Sycophancy_

Saída de [modelo](#modelo) que concorda com segurança. A causa é o [treinamento](#treinamento): o modelo foi moldado para favorecer respostas de que humanos gostaram, e humanos tendem a gostar mais de concordância do que de ouvir que estão errados. Assim, o modelo aprendeu que concordar é recompensado — mesmo quando a concordância está errada.

_Aparece como:_

- _Ceder sob pressão_ — inverte uma resposta correta quando você diz "tem certeza?".
- _Elogiar uma entrada ruim_ — diz que seu plano furado é brilhante antes de analisá-lo.
- _Enquadramento enviesado_ — a revisão fica positiva quando você indica que foi você quem escreveu e negativa quando indica que foi outra pessoa. Mesmo artefato, veredito diferente.
- _Imitação_ — devolve seus erros para você como se fossem confirmação.

_Teste diagnóstico:_ o modelo teria dito isso sem o seu direcionamento? Se a única coisa que mudou foi o seu tom ou o seu enquadramento, é bajulação, não uma mudança real na análise.

_Correção:_ esconda suas preferências. Escreva os prompts de forma neutra — "revise este código" e não "este código está bom?".

_Evite:_ usar "bajulação" para qualquer resposta errada que por acaso agrade você. Sem o teste diagnóstico, o termo não vale mais do que "errado".

_Uso:_

"Ele disse que meu plano de refactor estava ótimo, aí eu perguntei 'tem certeza?' e ele voltou atrás em tudo."

"Bajulação clássica — ele concordou primeiro porque você parecia confiante, depois cedeu porque você parecia em dúvida. A qualidade do plano não mudou, o seu tom mudou. [Limpe o contexto](#limpeza-de-contexto) e pergunte de novo sem dar pista para nenhum dos lados."

### Alucinação

_Em inglês: Hallucination_

Saída errada de um [modelo](#modelo), apresentada com confiança. Há dois tipos, com causas e correções diferentes:

| Tipo                     | O que dá errado                                                                                                               | Causa                                                                                                                                                                           | Correção                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| _Factualidade_           | Fatos inventados ou errados sobre o mundo — uma função que não existe, uma assinatura de API errada, uma citação falsa        | Lacunas no [conhecimento paramétrico](#conhecimento-paramétrico), muitas vezes depois da [data de corte do conhecimento](#data-de-corte-do-conhecimento) | Carregar o [conhecimento contextual](#conhecimento-contextual) certo                   |
| _Fidelidade ao contexto_ | A saída se afasta do conhecimento contextual carregado, das instruções do usuário ou do raciocínio anterior do próprio modelo | [Degradação de atenção](#degradação-de-atenção); piora na [zona burra](#zona-inteligente)                                                     | [Limpar o contexto](#limpeza-de-contexto) ou [compactar](#compactação) |

A [previsão do próximo token](#previsão-do-próximo-token) produz texto fluente, seja o fato real ou não. O modelo não tem sinal interno de que não sabe algo, então um método inventado chega no mesmo tom seguro de um método correto. O código alucinado é plausível por construção: é como a API _seria_ se existisse, e é isso que faz o código passar por uma leitura rápida na revisão e falhar só na execução.

Você precisa saber com qual dos tipos está lidando, porque a correção de um piora o outro. Factualidade significa conhecimento ausente: a correção é adicionar contexto — a documentação, as definições de tipos, o arquivo. Fidelidade ao contexto significa que o conhecimento está presente, mas perde a disputa por atenção: a correção é remover contexto. Se você confunde um problema de fidelidade com factualidade e cola mais documentação, o contexto cresce e o desvio piora. Quando o agente errar algo, verifique se a informação correta já estava no contexto antes de decidir qual dos dois problemas você tem.

_Evite:_ "alucinação" como sinônimo genérico de "errado" — sem nomear o tipo, o termo perde o valor diagnóstico.

_Uso:_

"Ele alucinou um método `parseAsync` no schema."

"Factualidade ou fidelidade ao contexto?"

"O método existe na documentação que eu colei — ele só parou de ler depois do [turno](#turno) quarenta."

"Então é fidelidade. Compacta e recarrega, não adianta colar mais documentação."

### Conhecimento paramétrico

_Em inglês: Parametric knowledge_

O que o [modelo](#modelo) "sabe" a partir do [treinamento](#treinamento), guardado nos seus [parâmetros](#parâmetros). Congelado no momento do treinamento — o modelo não enxerga os próprios parâmetros nem consegue atualizá-los. Detalhes se perdem na compressão: bilhões de fatos são comprimidos em um número fixo de parâmetros, e os raros ficam borrados. É a fonte da fluência em assuntos comuns e de invenção nos incomuns. Par do [conhecimento contextual](#conhecimento-contextual).

O conhecimento paramétrico não é armazenado como fatos. O treinamento nunca dá ao modelo um banco de dados para consultar; ele ajusta os parâmetros até o modelo prever bem o texto, e um modelo que prevê bem o texto sobre um tema se comporta como se conhecesse o tema. A confiabilidade do conhecimento acompanha a frequência com que algo apareceu nos dados de treinamento: um tema com milhões de exemplos é reproduzido com precisão, já num tema com poucos exemplos o modelo chuta com base no que costuma valer para temas parecidos. Para o modelo, reproduzir e chutar são o mesmo processo, então ele não sabe dizer qual dos dois está fazendo. Uma resposta inventada chega com a mesma fluência de uma correta. [Alucinação](#alucinação) é o modelo chutando errado.

O conhecimento paramétrico também envelhece. Os parâmetros param de mudar na [data de corte do conhecimento](#data-de-corte-do-conhecimento), então uma biblioteca lançada ou renomeada depois dessa data não existe neles, e uma API que mudou é lembrada na forma antiga.

Nas duas lacunas — raro demais e recente demais — o remédio é o mesmo: o conhecimento não pode ser adicionado aos parâmetros, então precisa ser fornecido como conhecimento contextual.

_Uso:_

"Ele escreve React impecável, mas inventa métodos no nosso SDK interno."

"O React está bem representado no conhecimento paramétrico: são milhões de exemplos de treinamento. O SDK interno não está, então o modelo preenche com formatos que parecem plausíveis. Carregue a documentação do SDK no [contexto](#contexto)."

### Data de corte do conhecimento

_Em inglês: Knowledge cutoff_

A data após a qual um [modelo](#modelo) não tem [conhecimento paramétrico](#conhecimento-paramétrico). Bibliotecas, APIs e eventos posteriores ao corte são armadilhas de invenção, a menos que a documentação seja carregada como [conhecimento contextual](#conhecimento-contextual). Cada lançamento de modelo tem o seu próprio corte.

O corte existe por causa do modo como os modelos são feitos: o [treinamento](#treinamento) grava um instantâneo do texto nos [parâmetros](#parâmetros) do modelo e, depois disso, os parâmetros ficam congelados. O modelo não sabe que o seu conhecimento tem um limite. Se você pergunta sobre algo posterior ao corte, ele não recusa: extrapola a partir do que conhece de mais próximo. É isso que torna a armadilha silenciosa: o código escrito para uma versão antiga de uma biblioteca parece plausível, muitas vezes compila e falha nas partes que mudaram.

A correção é sempre a mesma: colocar informação atual no [contexto](#contexto). Carregue o changelog, aponte para as definições de tipos da versão instalada ou peça ao agente que leia a documentação na web. Qualquer coisa no contexto vale mais do que nada nos parâmetros.

_Uso:_

"Ele continua escrevendo a sintaxe do SDK v3 — a gente está na v5."

"A v5 saiu depois da data de corte. Carrega o changelog da v5 como conhecimento contextual, senão ele vai continuar inventando a partir da versão paramétrica mais antiga."

### Conhecimento contextual

_Em inglês: Contextual knowledge_

Fatos que o [agente](#agente) pode ler diretamente do [contexto](#contexto) neste momento — a tarefa do usuário, arquivos que o agente leu, [resultados de ferramenta](#resultado-de-ferramenta), o conteúdo do [AGENTS.md](#agentsmd) carregado no início da [sessão](#sessão). Contrapartida do [conhecimento paramétrico](#conhecimento-paramétrico): o paramétrico é _lembrado_ a partir dos parâmetros; o contextual é _lido_ da [janela de contexto](#janela-de-contexto). [Alucinações](#alucinação) são bem menos comuns quando o agente trabalha com conhecimento contextual — a resposta está bem na frente dele, e não tirada de uma lembrança vaga.

Dos dois tipos de conhecimento, só o contextual está sob o seu controle. Os parâmetros são fixos, então a única forma de dar ao [modelo](#modelo) um conhecimento que ele não tem — um SDK interno, uma biblioteca lançada depois da [data de corte do conhecimento](#data-de-corte-do-conhecimento), uma decisão tomada ontem — é colocá-lo no contexto. Boa parte do trabalho prático de programação com [IA](#ia) se resume a isto: pôr os fatos certos na frente do modelo no momento em que ele precisa deles.

Quando o conhecimento contextual e o paramétrico entram em conflito, o contextual geralmente vence. Cole a documentação atual da API e o modelo a segue, em vez de usar a lembrança desatualizada que tem da API antiga — embora a versão antiga ainda possa vazar, principalmente no fim de uma sessão longa. Se o agente insiste em voltar a um padrão desatualizado mesmo com a documentação carregada, é o conhecimento paramétrico se sobrepondo ao contextual; repetir a correção ou colocá-la mais perto do trabalho ajuda.

Ao contrário do conhecimento paramétrico, usar o conhecimento contextual tem custo. Tudo o que é carregado na janela gasta [tokens](#token) e disputa o [orçamento de atenção](#orçamento-de-atenção) do modelo, então carregar mais não é automaticamente melhor — o objetivo é ter os fatos relevantes na janela, não todos os fatos.

_Use este termo_ só quando estiver contrastando com o conhecimento paramétrico; nos demais casos, diga apenas **contexto**.

_Evite:_ "memória de trabalho" — o conhecimento contextual é o que está na janela _agora_; um [sistema de memória](#sistema-de-memória) é o que leva conteúdo entre sessões para dentro dela. São escalas diferentes, não misture.

_Uso:_

"Por que ele acerta a API quando eu colo a documentação e inventa quando eu não colo?"

"Com a documentação colada, é conhecimento contextual — ele lê direto da página. Sem ela, é paramétrico e os endpoints menos comuns ficam vagos."

### Relação de atenção

_Em inglês: Attention relationship_

Ao prever cada [token](#token), o [modelo](#modelo) leva em conta todos os outros tokens do [contexto](#contexto) — alguns com muito peso, outros quase nenhum. O par formado por dois tokens é uma **relação de atenção**, e os pares com sentido ("ela" com "Sarah", ou uma chamada `getUser()` com a definição `function getUser`) influenciam-se mais do que os pares sem relação. Um contexto de N tokens tem da ordem de N² relações.

É nos pares que fica a aparente compreensão do modelo. Quando ele resolve um pronome, é porque a relação de atenção entre "ela" e "Sarah" é forte. Quando ele chama uma função com os argumentos certos, quem faz o trabalho é a relação entre o ponto de chamada e a definição que ele leu antes. Nada disso é buscado em lugar nenhum — é calculado do zero a cada [requisição ao provedor de modelo](#requisição-ao-provedor-de-modelo), para cada par.

O N² cresce mais rápido do que a intuição sugere:

| Tamanho do contexto | Pares (~N²)  |
| ------------------- | ------------ |
| 1.000 tokens        | ~1 milhão    |
| 10.000 tokens       | ~100 milhões |
| 100.000 tokens      | ~10 bilhões  |

Cada par também é calculado mais de uma vez. Os modelos têm várias cabeças de atenção — os números exatos dos modelos de ponta não são publicados, mas entre cinquenta e cem é um palpite razoável — e cada cabeça calcula a sua própria versão de cada relação. Ou seja, cada par da tabela acima se repete em todas as cabeças. São muitos pares.

Só um número pequeno dessas relações importa para cada tarefa. O par entre a sua instrução e o código que ela governa é um dos poucos que contam; quase todo o resto do conjunto é ruído. E os dois crescem em ritmos diferentes: as relações que importam ficam mais ou menos constantes, enquanto o total do conjunto cresce quadraticamente com o tamanho do contexto. Com 1.000 tokens, o par que interessa é um em um milhão; com 100.000 tokens, é um em dez bilhões. Essa é a aritmética por trás do [orçamento de atenção](#orçamento-de-atenção), e a [degradação de atenção](#degradação-de-atenção) é o que você percebe quando as relações que importam ficam com uma fatia pequena demais.

_Uso:_

"Ele fica confundindo os dois símbolos `user` ao longo do diff — parece que a gente caiu na [zona burra](#zona-inteligente)."

"É, a relação de atenção entre cada ponto de chamada e a sua declaração compete com a do outro símbolo — mesmo formato de token, vínculos diferentes. Renomeia um dos dois e os pares ficam mais nítidos."

### Orçamento de atenção

_Em inglês: Attention budget_

Cada [token](#token) tem uma quantidade finita de influência para distribuir pelo resto do [contexto](#contexto). Dar muita influência a [uma relação de atenção](#relação-de-atenção) deixa menos para as outras. O orçamento é por token e não cresce quando o contexto cresce, e é por isso que [sessões](#sessão) longas diluem a instrução.

Pense nisso como sinal e ruído. Sua instrução é um sinal em volume fixo; todos os outros tokens na [janela de contexto](#janela-de-contexto) são som competindo com ela. A instrução nunca fica mais baixa — continua lá, caractere por caractere —, mas, conforme o contexto cresce, o ambiente fica mais barulhento ao redor dela, e a relação sinal-ruído cai. Uma instrução que era o som mais alto com 10 mil tokens de contexto vira ruído de fundo com 150 mil. Esse é o mecanismo por trás da [degradação de atenção](#degradação-de-atenção): o modelo não esquece; o sinal se perde no ruído.

O sintoma parece desobediência — o agente concordou com uma restrição no começo e depois se desvia dela, e colar a restrição de novo só ajuda por pouco tempo. A causa não é a instrução; é tudo o mais na janela competindo com ela.

O que você controla é o que entra no contexto. Conteúdo que não serve à tarefa não é neutro — é ruído sobre tudo o que serve. Mantenha a janela pequena, [limpe o contexto](#limpeza-de-contexto) quando o que se acumulou deixar de compensar e reafirme as restrições que importam em vez de confiar que a menção inicial vai se manter.

_Uso:_

"Por que ele continua ignorando o schema que colei lá no começo?"

"Já estamos bem dentro da [zona burra](#zona-inteligente) — o orçamento de atenção de cada token é fixo, mas o contexto continuou crescendo. O sinal do schema agora compete com milhares de tokens mais novos."

### Degradação de atenção

_Em inglês: Attention degradation_

À medida que uma [sessão](#sessão) cresce, o [orçamento de atenção](#orçamento-de-atenção) de cada [token](#token) é dividido entre mais concorrentes. O sinal de qualquer [relação de atenção](#relação-de-atenção) significativa diminui, e o ruído do [contexto](#contexto) irrelevante ganha espaço. É o mesmo [modelo](#modelo), com os mesmos [parâmetros](#parâmetros) — só que com mais bocas para alimentar no mesmo prato. É a causa do efeito [zona inteligente / zona burra](#zona-inteligente).

Aparece como o modelo piorando no meio da sessão: restrições que ele seguiu por uma hora começam a escapar, ele pergunta de novo coisas que já ouviu, escreve código que ignora um arquivo lido antes. Nada mudou no modelo — a única variável é a quantidade de contexto sobre a qual ele distribui atenção agora.

A piora é gradual, e por isso é difícil de notar de dentro da sessão. Não há erro nem limite definido; cada [turno](#turno) é só um pouco pior do que o anterior, e quando as falhas ficam óbvias você já está na zona burra há um tempo.

A recuperação vem de tirar contexto, não de acrescentar mais. Colar de novo a instrução ignorada põe mais um concorrente na mesma janela lotada e ajuda só por pouco tempo. O que funciona: [limpar](#limpeza-de-contexto) e recarregar só o que a tarefa precisa, ou [compactar](#compactação), ou [fazer handoff](#handoff) para uma sessão nova. Trate a queda no cumprimento das instruções como um sinal sobre o tamanho do contexto, não sobre o modelo.

_Uso:_

"Ele está fundo na zona burra — inventando generics que não existem no arquivo de tipos."

"Degradação de atenção. As definições de tipos ainda estão no contexto, mas o sinal sobre elas está soterrado por tudo que acrescentamos depois. Limpa e recarrega."

### Zona inteligente

_Em inglês: Smart zone_

No início de uma [sessão](#sessão) o [agente](#agente) está numa "zona inteligente": preciso, focado, com boa memória. Conforme a sessão cresce, ele desliza para uma "zona burra": mais descuidado, esquecido, com mais erros e com mais [alucinações](#alucinação) de fidelidade ao [contexto](#contexto). É o mesmo [modelo](#modelo) e o mesmo [harness](#harness), só que com mais contexto. É o efeito percebido da [degradação de atenção](#degradação-de-atenção). Em modelos de ponta, a zona burra costuma começar por volta de 125 mil a 150 mil [tokens](#token), embora isso seja debatido. [Limpe o contexto](#limpeza-de-contexto) ou [compacte](#compactação) quando a sessão engordar; não insista.

A queda é gradual, e por isso é fácil não notar. Não há mensagem de erro nem fronteira visível; o agente só passa a render um pouco pior e, depois, claramente pior. Sinais comuns: ele esquece uma instrução dada vinte turnos atrás, repete um erro que já tinha corrigido ou afirma com convicção algo que o contexto contradiz. Como a descida é suave, a reação usual é insistir e explicar de novo, o que acrescenta mais contexto e piora o problema.

As zonas não acompanham o limite da [janela de contexto](#janela-de-contexto). Uma sessão pode estar bem dentro da zona burra com a maior parte da janela ainda livre: o limite é o ponto em que o harness se recusa a continuar, mas a qualidade cai muito antes disso. Planeje pela zona inteligente, não pela janela: o orçamento prático de uma tarefa é a quantidade de tokens com que o agente trabalha bem, não a quantidade que ele consegue manter tecnicamente.

A zona inteligente é um orçamento, e trabalho não relacionado o gasta. Cada tarefa feita na sessão consome tokens, então começar uma segunda tarefa na mesma sessão é começá-la mais perto da zona burra. Fazer uma tarefa por sessão dá a cada uma o trecho da sessão em que o agente rende melhor. Quando uma única tarefa é maior que uma zona inteligente, divida-a: faça [handoff](#handoff) ou compacte num ponto de corte natural e deixe uma sessão nova cuidar da próxima parte.

_Uso:_

"Ele mandou bem nos três primeiros componentes e estragou o quarto."

"Você saiu da zona inteligente: mesmo modelo, só que agora lá no fundo da zona burra. Compacta e recarrega o plano, que o próximo componente sai."

## Seção 5 — Handoffs

### Limpeza de contexto

_Em inglês: Clearing_

Encerrar a [sessão](#sessão) atual e começar uma nova. A próxima mensagem começa com uma sessão vazia e uma [janela de contexto](#janela-de-contexto) vazia. Geralmente é uma ação do usuário.

A limpeza de contexto é a solução para um contexto poluído. Uma sessão acumula tudo: tentativas que falharam, caminhos errados, [resultados de ferramenta](#resultado-de-ferramenta) desatualizados, planos abandonados. O [modelo](#modelo) relê tudo isso a cada [turno](#turno), e um histórico ruim atrapalha o trabalho novo. No meio de uma sessão longa, o [agente](#agente) fica mais vago e menos obediente — instruções que você deu com clareza são ignoradas, a qualidade cai, e insistir para ele fazer melhor não adianta, porque o ruído em que ele está atolado continua no [contexto](#contexto). A limpeza remove o ruído.

Limpar não apaga a conversa. A maioria dos [harnesses](#harness) guarda o histórico das sessões no seu computador, então a transcrição continua lá para ler ou retomar. O que se perde é o estado de trabalho do agente: o modelo é [stateless](#stateless), então a sessão nova não sabe nada do que a antiga sabia. Se a sessão contém decisões ou progresso de que a próxima vai precisar, peça ao agente que escreva um [artefato de handoff](#artefato-de-handoff) antes e inicie a sessão nova apontando para ele.

Compare com a [compactação](#compactação), que resume a sessão no novo contexto, em vez de começar vazio. A limpeza é o recurso menos seletivo: nada é levado adiante, nem o lixo.

_Uso:_

"Ele está preso em loop no teste que falha."

"Limpa e abre uma sessão nova só com o documento de plano e o arquivo de teste. Não adianta brigar com o contexto que está aí."

### Handoff

Handoff (em português, repasse ou transferência) é a passagem do [contexto](#contexto) de um [agente](#agente) de uma [sessão](#sessão) para outra. O mecanismo de transporte varia: um [artefato de handoff](#artefato-de-handoff) escrito, um resumo em memória ([compactação](#compactação)) e outros. Difere da [limpeza de contexto](#limpeza-de-contexto), em que não há transferência nenhuma. Os motivos variam: trocar de papel (planejador → implementador), iniciar uma execução [AFK](#afk) (longe do teclado), abrir sessões em paralelo ou liberar espaço na [janela de contexto](#janela-de-contexto).

A sessão que recebe começa com contexto zero: o [modelo](#modelo) é [stateless](#stateless) (sem estado), e nada da sessão antiga fica visível para a nova. Tudo o que a próxima sessão precisa tem de ser levado explicitamente; o resto se perde. "Sem caminho de volta" é a restrição que define como o material é levado: a sessão nova não pode perguntar à antiga o que ela quis dizer, então o material precisa se sustentar sozinho.

| Mecanismo           | Forma                                | Propriedades                                                                       |
| ------------------- | ------------------------------------ | ---------------------------------------------------------------------------------- |
| Artefato de handoff | Arquivo no [ambiente](#ambiente) | Dá para ler e corrigir antes que algo dependa dele; reutilizável em várias sessões |
| Compactação         | Resumo na janela de contexto         | Automática e barata; mais difícil de inspecionar; alimenta uma só sessão sucessora |

A falha visível de um handoff ruim é a rediscussão: a sessão nova reabre decisões que a antiga já tinha fechado, porque o que foi levado registra o que foi decidido, mas não o porquê. Avalie um handoff pelo que uma sessão com contexto zero conseguiria fazer com ele.

_Uso:_

"A sessão de planejamento está ficando pesada. Será que eu só continuo?"

"Faz um handoff. Escreve as decisões num doc, limpa o contexto e começa a implementação numa sessão nova, lendo a partir dele."

### Fonte primária

_Em inglês: Primary source_

Uma fonte da verdade em sua forma original — o código, a transcrição da conversa, o log bruto, a resposta real da API. Não é um relato da coisa; é a coisa. Contraparte da [fonte secundária](#fonte-secundária).

Se você quer saber o que sua base de código faz, o código é a fonte primária. A documentação, o diagrama de arquitetura e o README são descrições dele — precisos quando foram escritos e, desde então, desatualizados no ritmo que lhes convém. Quando um [agente](#agente) afirma com confiança algo errado sobre o seu projeto, a pergunta a fazer é de qual fonte ele estava partindo: um agente que leu um documento herda a defasagem do documento; um agente que leu o código está lendo a verdade atual.

O custo é o que impede as fontes primárias de serem o padrão. Carregar uma na [janela de contexto](#janela-de-contexto) é caro — o arquivo inteiro, a transcrição inteira, cada [token](#token) cobrado como [token de entrada](#tokens-de-entrada) e disputando o [orçamento de atenção](#orçamento-de-atenção). O que você recebe em troca do custo é completude: nada foi pré-filtrado pelo julgamento de outra pessoa sobre o que importava. Um resumo escrito no mês passado não consegue conter o detalhe que acabou importando hoje; a fonte primária ainda contém.

Recorra à fonte primária quando a precisão importa — a assinatura exata, o erro real, a linha que lança a exceção. Boa parte de gerenciar o [contexto](#contexto) é decidir quando vale pagar pela fonte primária e quando uma fonte secundária basta.

_Uso:_

"O agente diz que a lógica de retry faz backoff exponencial, mas estou vendo ele martelar o endpoint."

"Ele leu isso no design doc. Aponta ele para o módulo de retry de verdade — quando o comportamento importa, trabalha com a fonte primária."

### Fonte secundária

_Em inglês: Secondary source_

Relato de uma [fonte primária](#fonte-primária), a um passo de distância dela — documentação que descreve código, um resumo que descreve uma transcrição, um relatório que descreve resultados de busca. É mais barato de carregar na [janela de contexto](#janela-de-contexto) do que a fonte que descreve, e tem perdas por construção: quem o escreveu decidiu o que importava, e o que ficou de fora é invisível para quem só tem o resumo.

Boa parte da engenharia de [contexto](#contexto) consiste em produzir fontes secundárias. A [compactação](#compactação) transforma o histórico da [sessão](#sessão) em um resumo que inicia a próxima sessão. Um [subagente](#subagente) gasta o próprio contexto numa busca ruidosa e devolve um relatório curto. Um [artefato de handoff](#artefato-de-handoff) condensa as decisões de uma sessão num documento que a sessão seguinte lê. [Sistemas de memória](#sistema-de-memória) destilam em notas o que uma sessão aprendeu. Todos fazem a mesma troca: fidelidade por folga.

Fontes secundárias falham de duas formas. Têm perdas — o resumo de compactação que perdeu a decisão sobre o schema, o relatório que não mencionou o caso de borda. E ficam desatualizadas — a fonte primária muda e o relato não acompanha, então a documentação descreve a arquitetura do trimestre passado com a confiança deste trimestre. Quando um [agente](#agente) age com base numa fonte secundária que falhou de qualquer uma das duas formas, ele trabalha com confiança a partir de informação errada; a correção é mandá-lo de volta à fonte primária.

Nenhuma das duas falhas torna as fontes secundárias um erro. A janela de contexto é finita e as fontes primárias são caras; sem resumos, relatórios e documentos de handoff, nada grande cabe. O que importa é saber quais detalhes sobrevivem à perda — e verificar na fonte primária quando não sobrevivem. Uma fonte secundária bem feita traz um [ponteiro de contexto](#ponteiro-de-contexto) que leva de volta ao original — o resumo que cita a transcrição de onde veio, o doc que cita o arquivo que descreve — para que, quando o relato não bastar, o leitor siga o ponteiro em vez de trabalhar em cima da perda.

_Uso:_

"O doc de handoff diz que a autenticação está pronta, mas a sessão nova continua encontrando o refresh de token quebrado."

"O doc é uma fonte secundária — a última sessão anotou o que achava, não o que é verdade. Manda a sessão nova rodar os testes de autenticação e confiar na fonte primária."

### Artefato de handoff

_Em inglês: Handoff artifact_

Um documento usado como mecanismo de transporte de um [handoff](#handoff) — escrito no [ambiente](#ambiente) por uma [sessão](#sessão) para ser lido por outra. [Especificações](#especificação), [tickets](#ticket) e documentos de plano são todos artefatos de handoff.

O motivo para escrever esse documento: o [modelo](#modelo) é [stateless](#stateless), então nada em uma sessão sobrevive à [limpeza de contexto](#limpeza-de-contexto) dela. Decisões, restrições, planos pela metade — tudo some junto com o [contexto](#contexto) que os continha. O ambiente persiste. Escrever o estado importante em um arquivo o move para um lugar de onde a próxima sessão pode lê-lo de volta.

O artefato é uma [fonte secundária](#fonte-secundária) — um relato do trabalho da sessão, não o trabalho em si. É isso que o deixa pequeno o bastante para orientar uma sessão nova, e também o motivo de ele poder enganá-la: registra o que a sessão que o escreveu acreditava, e tudo o que ficou de fora ou saiu errado é invisível para quem lê. Quando uma afirmação importa, a próxima sessão deve verificá-la na [fonte primária](#fonte-primária) — o código, os testes — em vez de herdá-la.

Um bom artefato é escrito para ser lido por uma sessão sem nenhum contexto. Caminhos de arquivo concretos em vez de "o arquivo que discutimos". O que foi decidido e por quê, para a próxima sessão não rediscutir decisões já tomadas. O que está pronto e o que falta. Ajuda informar à sessão que escreve qual é o destino do artefato: "escreva um documento de handoff para uma sessão nova que não sabe nada sobre este trabalho".

O outro mecanismo de transporte é a [compactação](#compactação), que resume o trabalho na memória. O artefato tem duas vantagens: fica no disco, onde você pode lê-lo e corrigi-lo antes que qualquer coisa dependa dele, e pode ser reutilizado — a mesma especificação pode orientar cinco sessões em paralelo.

_Uso:_

"Como eu divido isso entre o [agente](#agente) de planejamento e o de implementação?"

"Pede pro planejador escrever um artefato de handoff — caminhos de arquivo, decisões, restrições. A sessão do implementador abre com um ponteiro pro artefato e trabalha a partir dele, usando-o como guia."

### Especificação

_Em inglês: Spec_

Um [artefato de handoff](#artefato-de-handoff) que descreve um trabalho de várias [sessões](#sessão) — o que está sendo construído, não como cada sessão faz a sua parte. Muda conforme o trabalho avança. É composta de [tickets](#ticket).

A especificação existe porque sessões são descartáveis e trabalho grande não é. Qualquer trabalho que exija mais esforço do que cabe em uma [janela de contexto](#janela-de-contexto) precisa de um lugar fora do [contexto](#contexto), em algum ponto do [ambiente](#ambiente) do agente que sobreviva à [limpeza de contexto](#limpeza-de-contexto): um arquivo no repositório, uma issue do GitHub ou um issue tracker ao qual o agente tenha acesso. A especificação é esse lugar. Ela guarda o objetivo, as restrições, as decisões tomadas até agora e a lista de tickets com o status de cada um. Qualquer sessão nova pode lê-la e saber em que pé está o trabalho, sem herdar o ruído acumulado da sessão anterior.

Especificações aparecem em estilos reconhecíveis, em geral herdados da forma como as equipes já registram as coisas por escrito. Um _documento de requisitos do produto_ (PRD) tende ao quê e ao porquê voltados ao usuário: funcionalidades, comportamento, critérios de aceitação. Um design doc ou RFC tende ao lado técnico: a abordagem escolhida, as alternativas descartadas, as contrapartidas. No caso mais simples, um `plan.md` com uma lista de verificação de tickets faz o mesmo trabalho numa funcionalidade que ocupa várias sessões. O estilo importa menos que o papel: para o [agente](#agente), todos cumprem a mesma função, a de declaração durável de intenção que ele lê no início de cada sessão.

_Uso:_

"Isso tudo deveria ser uma sessão só?"

"Não, escreve como uma spec: quebra em tickets e roda cada um na sua própria sessão. Se tentar fazer tudo num único contexto, você cai na [zona burra](#zona-inteligente) antes de chegar na metade."

### Ticket

Ticket é um [artefato de handoff](#artefato-de-handoff) que delimita o trabalho de uma [sessão](#sessão). Pode ser avulso ou ficar sob uma [especificação](#especificação), como um de seus filhos. Tickets podem bloquear ou ser bloqueados por tickets irmãos, então a ordem do trabalho decorre do grafo de dependências entre eles, e não de um plano linear.

A restrição que define o ticket é o tamanho: uma sessão. Um ticket deve poder ser concluído antes que a sessão saia da [zona inteligente](#zona-inteligente), e essa restrição é testável. Se as sessões dos seus tickets costumam se degradar antes de o trabalho terminar, os tickets são grandes demais; divida-os. Se cada sessão gasta a maior parte do [contexto](#contexto) com preparação antes de trabalhar por cinco minutos, eles são pequenos demais; junte-os.

Um bom ticket é escrito para um leitor sem nenhum outro contexto. Ele traz o objetivo, os critérios de aceitação e [ponteiros de contexto](#ponteiro-de-contexto) para os arquivos e as decisões relevantes, o bastante para a sessão começar a trabalhar sem precisar reconstruir o que a anterior sabia.

O grafo de dependências também é o que libera o paralelismo. Tickets independentes, as folhas do grafo, podem rodar cada um na sua própria sessão ao mesmo tempo. É um jeito eficaz de rodar vários agentes de uma vez. Em uma [fábrica de software](#fábrica-de-software), marcar um ticket como pronto é, por si só, o gatilho que inicia a sessão dele.

_Uso:_

"Por onde eu começo na spec da migração?"

"Olha o grafo de tickets — a mudança de schema bloqueia o backfill, e o backfill bloqueia a troca da API. Pega uma folha e abre uma sessão nela."

### Compactação

_Em inglês: Compaction_

Um [handoff](#handoff) feito em memória: o histórico da [sessão](#sessão) anterior é resumido, e o resumo inicia uma sessão nova. Com perdas de propósito: a transcrição é uma [fonte primária](#fonte-primária), o resumo é uma [fonte secundária](#fonte-secundária) — detalhe trocado por folga. Acionada manualmente pelo usuário ou automaticamente via [autocompactação](#autocompactação).

O mecanismo: a [janela de contexto](#janela-de-contexto) é finita, e uma sessão longa a enche — cada [resultado de ferramenta](#resultado-de-ferramenta), cada arquivo lido, cada caminho errado continua no histórico. Quando o histórico fica pesado, o [harness](#harness) pede ao [modelo](#modelo) que resuma a sessão, descarta o histórico original e inicia uma sessão nova com o resumo. O que não entrou no resumo some do contexto. Alguns harnesses suavizam isso mantendo a transcrição antiga em disco e deixando no resumo um [ponteiro de contexto](#ponteiro-de-contexto) para ela — a fonte secundária aponta de volta para a fonte primária, e um detalhe que o resumo perdeu pode ser recuperado relendo o original.

O resumo é escrito pelo modelo, então dá para orientá-lo com um prompt. "Preserve as decisões de schema" deixa o resumo gerado mais deliberado. O momento também importa — compacte na virada de fase, depois que o plano está definido, não no meio de uma tarefa.

Compare com a [limpeza de contexto](#limpeza-de-contexto), que descarta tudo e recomeça do zero: a compactação tenta levar o essencial para a sessão nova; a limpeza aposta que o essencial já está escrito em outro lugar, melhor.

_Uso:_

"O [contexto](#contexto) está ficando pesado e eu ainda tenho a rodada de testes pela frente."

"Compacta antes de começar — escreve no prompt do resumo o que precisa sobreviver, para a sessão nova manter as decisões de schema e largar a exploração."

### Autocompactação

_Em inglês: Autocompact_

[Compactação](#compactação) disparada automaticamente pelo [harness](#harness) quando a [janela de contexto](#janela-de-contexto) está quase cheia.

O harness acompanha o quanto da janela de contexto está ocupado. Quando esse nível ultrapassa um limite — em geral perto de 80% — ele pausa, pede ao [modelo](#modelo) que resuma a [sessão](#sessão) até ali e inicia uma sessão nova com esse resumo. O trabalho continua como se nada tivesse acontecido.

Só que algo aconteceu. A compactação tem perdas, e a autocompactação tem perdas num momento que você não escolheu. Uma compactação manual acontece na virada de fase, quando você pode dizer ao modelo o que preservar. A autocompactação dispara no meio da tarefa, sempre que o limite é atingido — possivelmente no meio de uma refatoração, com o resumo decidindo por conta própria quais das suas decisões vale a pena manter. O sintoma clássico: o [agente](#agente) segue em frente com confiança, mas esqueceu, sem avisar, uma restrição que você definiu uma hora atrás, e você só percebe quando o trabalho dele começa a contradizê-la.

A defesa é não deixar que ela dispare. Acompanhe o indicador de contexto e compacte manualmente numa virada natural, ou registre as decisões num documento de plano ou num [artefato de handoff](#artefato-de-handoff) em disco, onde nenhum resumo consegue perdê-las. A maioria dos harnesses também permite ajustar a margem de segurança — adiantando ou atrasando o limite, ou desligando a autocompactação por completo — para regular quanta folga sobra antes de ela disparar.

_Uso:_

"Parece que ele não lembra o que a gente decidiu sobre o schema lá atrás."

"A autocompactação disparou entre [turnos](#turno) — as decisões do começo viraram resumo e a gente deve ter perdido alguma coisa. Recarrega o documento de plano, ou compacta manualmente da próxima vez para controlar o que fica."

## Seção 6 — Memória e Direcionamento

### Sistema de memória

_Em inglês: Memory system_

Sistema que tenta tornar um [agente](#agente) [stateful](#stateful) entre [sessões](#sessão). Persiste informações no [ambiente](#ambiente) durante uma sessão e as recarrega na [janela de contexto](#janela-de-contexto) no início das sessões seguintes, de modo que o agente mantém continuidade mesmo depois de o usuário [limpar](#limpeza-de-contexto) a sessão.

Um sistema de memória tem duas metades. No caminho de escrita, durante uma sessão, o agente registra o que aprendeu — uma preferência que você declarou, um fato sobre o projeto — como arquivos no ambiente. No caminho de leitura, no início da sessão, o [harness](#harness) carrega esses arquivos, ou um índice deles, de volta na janela de contexto. Muitos harnesses já trazem seu próprio sistema de memória — o `/memory` do Claude Code é um deles — mas você também pode montar o seu: um diretório de notas mais uma instrução no [AGENTS.md](#agentsmd) para consultá-lo.

Valem as mesmas contrapartidas de qualquer conteúdo sempre carregado. As memórias se acumulam, então a maioria dos sistemas carrega um índice de uma linha e deixa o conteúdo completo acessível por meio de [ponteiros de contexto](#ponteiro-de-contexto), em vez de incluir tudo direto no contexto. E memórias são [fontes secundárias](#fonte-secundária), então sofrem desvio: um fato registrado em março é carregado com a mesma confiança em junho, depois que o projeto já mudou. Um sistema de memória precisa de poda, do mesmo jeito que o AGENTS.md.

_Uso:_

"Toda hora tenho que repetir pra ele que eu uso Postgres, não MySQL."

"Monta um sistema de memória — grava o que ele aprende no [sistema de arquivos](#sistema-de-arquivos) logo no primeiro [turno](#turno) e recarrega no início da sessão. O [modelo](#modelo) em si é [stateless](#stateless); a camada de memória só simula a continuidade."

### AGENTS.md

Um arquivo no [ambiente](#ambiente) que o [harness](#harness) carrega na [janela de contexto](#janela-de-contexto) no início da [sessão](#sessão) — o briefing permanente do projeto para o [agente](#agente). É uma convenção comum a vários harnesses; alguns também têm uma variante própria (a do Claude Code é o CLAUDE.md).

Por ser carregado automaticamente, ele evita que você se repita a cada sessão. O [modelo](#modelo) é [stateless](#stateless) (sem estado) — uma correção que você dá numa sessão some na seguinte, e você acaba avisando cada sessão nova de que o projeto usa pnpm, de que os testes rodam com determinada flag, de que um diretório é gerado e não deve ser mexido. Se você já corrigiu o agente duas vezes pela mesma coisa, essa correção é candidata a virar uma linha do AGENTS.md.

O conteúdo adequado é o que o agente não consegue deduzir do código: comandos de build e de teste, convenções que a base de código não deixa óbvias, restrições rígidas ("nunca edite o client gerado"). Curto e declarativo — é um briefing, não documentação.

O custo é que tudo o que está nele fica sempre carregado. As instruções se acumulam, a maioria irrelevante para qualquer tarefa específica, e um AGENTS.md longo gasta tokens e se dilui: quanto mais instruções no contexto, menos confiável é a obediência do modelo a cada uma delas.

_Evite:_ usar o AGENTS.md para conteúdo que deveria ser [divulgado progressivamente](#divulgação-progressiva) — tudo o que está nele gera um custo em [tokens](#token) a cada [turno](#turno), em toda sessão, quer aquela sessão precise do conteúdo ou não. Um guia de estilo pode ficar atrás de uma [skill](#skill) ou de um [ponteiro de contexto](#ponteiro-de-contexto); reserve o AGENTS.md para as linhas que valem em qualquer lugar.

_Uso:_

"Por que toda sessão já começa com 4 mil tokens queimados?"

"Olha o AGENTS.md — alguém colou o guia de estilo inteiro ali em vez de deixar atrás de uma skill."

### Divulgação progressiva

_Em inglês: Progressive disclosure_

Carregar apenas o [contexto](#contexto) de que um [agente](#agente) precisa agora, com [ponteiros de contexto](#ponteiro-de-contexto) para o resto. Técnica emprestada do design de interfaces, onde consiste em mostrar ao usuário só os controles relevantes para a tarefa atual e esconder o restante atrás de um clique.

A técnica existe porque o contexto custa duas vezes. Cada [token](#token) carregado de antemão é cobrado como [tokens de entrada](#tokens-de-entrada) a cada [turno](#turno), e cada token gasta [orçamento de atenção](#orçamento-de-atenção), quer o agente precise dele ou não. Um [AGENTS.md](#agentsmd) lotado com o guia de estilo completo, o runbook de deploy e as convenções do banco de dados deixa o agente pior em todos eles — as instruções que importam para a tarefa atual ficam diluídas pelas que não importam. O indício é um agente que ignora regras que você sabe que estão no contexto dele: elas estão lá, mas enterradas.

A divulgação progressiva inverte isso. Mantenha pequena a camada sempre carregada — uma frase por tópico e um ponteiro para onde o detalhe está. O agente lê o guia de estilo quando escreve um componente, o runbook de deploy quando faz deploy e nenhum dos dois quando corrige um teste. As [skills](#skill) são o padrão incorporado ao [harness](#harness): uma descrição curta carregada a cada [sessão](#sessão) e as instruções completas só quando disparadas.

_Uso:_

"Devo jogar o guia de estilo inteiro no AGENTS.md?"

"Não — divulgação progressiva. Referencie o guia de estilo como uma skill, que o agente carrega quando realmente for escrever um componente. O AGENTS.md paga esse custo em tokens a cada turno."

### Ponteiro de contexto

_Em inglês: Context pointer_

Menção em um documento que aponta para outro, para que o [agente](#agente) possa puxá-lo para a [janela de contexto](#janela-de-contexto) só quando a tarefa pedir. É a unidade de que a [divulgação progressiva](#divulgação-progressiva) é feita.

O motivo para usar um ponteiro (em vez de colar o conteúdo) é o custo. Um ponteiro ocupa uma linha na janela de contexto. O documento por trás dele pode ter milhares de [tokens](#token), mas esses tokens não custam nada até o agente de fato seguir o ponteiro. Se você colar um runbook de 2.000 tokens no [AGENTS.md](#agentsmd), toda [sessão](#sessão) paga por ele; se você trocar por "processo de deploy: veja `internal/deploy.md`", só as sessões que fazem deploy chegam a carregá-lo. O agente segue o ponteiro com uma [chamada de ferramenta](#chamada-de-ferramenta) quando a tarefa combina.

Um ponteiro precisa de duas partes para funcionar: um caminho estável e descrição suficiente para o agente saber quando vale a pena segui-lo. Um caminho solto é um ponteiro que o agente não tem motivo para seguir; "veja `internal/deploy.md`" sem nenhuma pista do que há dentro acaba ignorado por uma sessão que precisava dele. Escreva a linha conforme o modo como as tarefas chegam: "release, deploy ou rollback — leia `internal/deploy.md` primeiro".

Ponteiros estão em toda parte quando você começa a procurar: linhas no AGENTS.md, descrições de [skills](#skill) (o harness carrega a descrição; o corpo da skill fica esperando atrás dela), nomes de arquivo na listagem de um diretório, links entre documentos.

Um ponteiro também pode ligar uma [fonte secundária](#fonte-secundária) à [fonte primária](#fonte-primária) de que ela foi derivada — o resumo de compactação que cita a transcrição original, o documento que cita o arquivo-fonte que descreve. Isso torna recuperável a perda de informação da fonte secundária: quando o resumo se mostra insuficiente, o agente segue o ponteiro e lê o original, em vez de trabalhar com o que o resumo preservou.

_Evite:_ "referência" — seca demais; não deixa claro que segui-la traz mais contexto. "Portal" — floreado demais.

_Uso:_

"O AGENTS.md está enorme."

"Quase tudo ali deveria ser ponteiro de contexto, não conteúdo. Deixe as regras sempre carregadas inline; transforme o runbook de deploy e o guia de estilo em skills e deixe um ponteiro de contexto no lugar."

### Skill

Uma skill (em português, "habilidade") é uma capacidade ensinável empacotada como unidade — instruções e recursos para fazer bem uma tarefa, mantida no [ambiente](#ambiente) até que um [ponteiro de contexto](#ponteiro-de-contexto) a leve para a [janela de contexto](#janela-de-contexto), para a tarefa em questão. É a unidade da [divulgação progressiva](#divulgação-progressiva) em um [harness](#harness).

As skills são um padrão aberto, definido em [agentskills.io](https://agentskills.io) — desenvolvido originalmente pela Anthropic e depois adotado pela maioria dos principais harnesses, de modo que uma skill escrita uma vez funciona em todos eles. O formato é uma pasta que contém:

- Um arquivo `SKILL.md` — metadados (no mínimo um nome e uma descrição) mais as instruções em si
- Opcionalmente, scripts que o [agente](#agente) pode executar
- Opcionalmente, templates e material de referência para os quais as instruções apontam

Apenas o nome e a descrição ficam no [contexto](#contexto) por padrão. Quando a tarefa do agente combina com a skill, ele carrega o resto. Até lá, a skill ocupa quase nenhum espaço — uma ou duas frases de [tokens](#token), por maiores que sejam as instruções completas.

Isso diferencia as skills do [AGENTS.md](#agentsmd), que é carregado em toda [sessão](#sessão), seja qual for a tarefa. Uma skill é lida quando surge um tipo específico de trabalho — fazer um release, criar a estrutura de um novo serviço, escrever uma migração — e ignorada no resto do tempo.

_Evite:_ "[ferramenta](#ferramenta)" — uma ferramenta é o que o agente _chama_; uma skill são instruções que ele _lê_.

_Uso:_

"Onde eu coloco o runbook de deploy?"

"Como skill — o agente só carrega quando a tarefa envolve deploy. No AGENTS.md ele gastaria tokens em todo [turno](#turno) por algo que a gente usa uma vez por semana."

### Subagente

_Em inglês: Subagent_

Um [agente](#agente) criado por outro agente por meio de uma [chamada de ferramenta](#chamada-de-ferramenta). Roda em sua própria [sessão](#sessão), com sua própria [janela de contexto](#janela-de-contexto), e devolve um único [resultado de ferramenta](#resultado-de-ferramenta) ao agente pai. Difere de um [handoff](#handoff): o pai espera um retorno, e o handoff não tem caminho de volta. **Não pode criar outros subagentes**, então a árvore tem apenas um nível de profundidade. Subagentes existem para isolar [contexto](#contexto), não para compor hierarquias.

O objetivo é manter o trabalho ruidoso fora do contexto do agente pai. Uma busca ampla ou uma longa sequência de leituras de arquivos produz páginas de resultados de ferramenta, e a maior parte só importa até o momento de achar a resposta. Rodando dentro do pai, tudo isso fica no contexto dele pelo resto da sessão. Rodando dentro de um subagente, o ruído enche uma janela descartável, e só o relatório final chega ao contexto do pai. Esse relatório é uma [fonte secundária](#fonte-secundária): o pai recebe o relato do subagente sobre o que ele encontrou, não os resultados brutos, então tudo o que o relatório deixa de fora fica invisível para o pai.

Subagentes também rodam de forma concorrente: um pai pode abrir vários em paralelo, cada um numa parte independente do trabalho.

_Uso:_

"Os resultados do grep estão estourando meu contexto."

"Dispara um subagente pra fazer a busca — ele gasta a janela de contexto dele com o ruído e volta só com os dois caminhos de arquivo de que você precisa de verdade."

## Seção 7 — Padrões de Trabalho

### Humano no loop

_Em inglês: Human-in-the-loop_

Um padrão de trabalho em que uma ou mais pessoas trabalham em par com o [agente](#agente) durante uma [sessão](#sessão) — revisando, redirecionando ou colaborando em tempo real. A pessoa está presente e engajada, não apenas como barreira para ações isoladas.

O contraste é com o trabalho [AFK](#afk), em que o agente roda sem supervisão e você avalia o resultado depois. Humano no loop significa detectar os problemas enquanto ainda custam pouco: você vê o agente pegar o arquivo errado, entender mal o requisito ou entrar num beco sem saída, e o redireciona com uma frase — em vez de descobrir vinte minutos de trabalho confiante construído em cima desse erro. Agentes nem sempre percebem quando saíram do rumo; sozinhos, tendem a seguir em frente em vez de parar e perguntar.

O padrão adequado depende do trabalho. Tarefas bem especificadas, de baixo risco e fáceis de verificar combinam com AFK. Tarefas ambíguas, irreversíveis ou difíceis de revisar depois de prontas — uma migração de schema, uma decisão de design delicada, qualquer coisa que toque produção — combinam com ficar no loop. A decisão depende de duas perguntas: quanto custa uma curva errada e com que atraso você a perceberia?

Alguns trabalhos são de humano no loop por natureza, porque as suas reações são a entrada. A [sabatina](#sabatina) só funciona com você ali para responder às perguntas; a [prototipagem](#prototipagem) só funciona com você ali para reagir ao artefato.

Ficar no loop custa a sua atenção, que é o recurso escasso. Parte de se sair melhor com agentes é tirar mais trabalho do loop com segurança — com planos, [verificações automatizadas](#verificação-automatizada) e [revisão humana](#revisão-humana) no fim, em vez de supervisão o tempo todo. Uma [fábrica de software](#fábrica-de-software) vai além ao iniciar sessões a partir de gatilhos, de modo que nem o início do trabalho precisa de você.

_Uso:_

"Roda isso AFK de madrugada?"

"Não, é migração de schema — deixa com humano no loop. Quero ver cada passo e redirecionar se ele pegar a coluna errada como origem do backfill."

### AFK

AFK (do inglês away from keyboard, longe do teclado). Um padrão de trabalho em que o usuário inicia uma [sessão](#sessão) e deixa o [agente](#agente) rodando sem supervisão. É o multiplicador de throughput da programação com [IA](#ia) — várias sessões AFK podem rodar em paralelo enquanto você dorme, come ou trabalha em outra coisa. Em geral exige um [modo de permissão](#modo-de-permissão) permissivo, combinado com o uso de [sandbox](#sandbox), para ser seguro.

Quando você não está presente, o agente lida com a ambiguidade de outro jeito. Enquanto você está olhando, uma decisão ambígua aparece como pergunta e você responde; depois que você saiu, o agente escolhe uma opção padrão e segue em frente, e cada decisão seguinte se apoia nesse palpite. A falha característica é voltar e encontrar horas de trabalho pronto e confiante, construído sobre uma escolha errada feita nos primeiros dez minutos. O trabalho não é descuidado — é coerente, só que coerente em torno da coisa errada.

Como você não pode responder durante a execução, dê as respostas antes e depois. Antes: resolva a ambiguidade de antemão — uma [sabatina](#sabatina), uma [especificação](#especificação) escrita — para que o agente tenha menos lacunas a preencher sozinho. Durante: [verificações automatizadas](#verificação-automatizada) e [revisão automatizada](#revisão-automatizada) fazem o papel da atenção que você não está dando, falhando cedo em tudo o que pode ser pego mecanicamente. Depois: a execução termina em algo revisável — um PR, não mudanças já mescladas. AFK não elimina a [revisão humana](#revisão-humana); ele adia toda ela para o fim, e é por isso que o que chega no fim precisa valer a pena ser revisado. É também por isso que a [AX](#ax) pesa mais nas execuções AFK — sem ninguém olhando, o ambiente é o único apoio que o agente recebe.

_Evite:_ "agente em segundo plano" — centra na máquina ("rodando em segundo plano") em vez de no padrão humano ("o usuário se afastou"). AFK nomeia o fato que importa: o usuário não está acompanhando.

_Uso:_

"Estou rodando isso AFK — três agentes em sandbox na refatoração, e eu reviso os PRs de manhã."

"[Bypass permissions](#modo-de-agente)?"

"Isso, com [sistema de arquivos](#sistema-de-arquivos) somente leitura e sem rede."

### Verificação automatizada

_Em inglês: Automated check_

Uma verificação determinística executada no [ambiente](#ambiente) — testes, verificação de tipos, lint, build, hooks de pre-commit. Passa ou falha, sem julgamento. É o sinal a partir do qual um [agente](#agente) consegue se autocorrigir sem envolver mais ninguém. Um teste instável (flaky) é uma verificação quebrada, e não a ausência de verificação; verificações automatizadas são determinísticas _por definição_.

A autocorreção funciona como um loop. O agente faz uma mudança, roda a verificação como uma [chamada de ferramenta](#chamada-de-ferramenta) e a saída da falha chega à sua [janela de contexto](#janela-de-contexto) — um erro de tipo com arquivo e linha, uma asserção que falhou com o valor esperado e o obtido. Isso basta para o agente corrigir o problema e rodar a verificação de novo, e de novo, até passar, sem nenhum humano no loop. O determinismo é o que torna o loop confiável: o mesmo código sempre produz o mesmo veredito, então um "passou" quer dizer algo. Uma verificação instável compromete isso — o agente "corrige" código que estava certo, ou repete a execução até passar e deixa escapar uma falha real.

Por isso, boas verificações pesam bastante na [AX](#ax) de uma base de código. Um agente num repositório com tipagem estrita, um conjunto de testes rápido e um linter pega a maioria dos próprios erros antes de você vê-los; um agente num repositório sem nada disso entrega qualquer coisa que produza. A diferença pesa mais nas execuções [AFK](#afk), em que as verificações são a única conferência feita durante a execução. Mas uma verificação só pega o que ela afirma — verificações verdes significam que as propriedades afirmadas valem, não que o código está certo. As lacunas que exigem julgamento ficam para a [revisão automatizada](#revisão-automatizada) e a [revisão humana](#revisão-humana).

_Evite:_ "loop de feedback" / "backpressure" — ambos misturam verificações com revisão. _Evite:_ "teste" — testes são verificações automatizadas, mas nem toda verificação automatizada é um teste.

_Uso:_

"O agente continua entregando código quebrado nas execuções AFK."

"Quais verificações automatizadas estão configuradas no [sandbox](#sandbox)?"

"Só os testes unitários."

"Adiciona typecheck e lint — ele se autocorrige com esses dois antes de o PR chegar."

### Revisão automatizada

_Em inglês: Automated review_

Revisão do trabalho de um [agente](#agente) feita por outro agente, em geral com um [modelo](#modelo) diferente ou um [prompt de sistema](#prompt-de-sistema) diferente. Não determinística: forma um julgamento. Roda em qualquer lugar: antes do merge em um pull request, depois, sobre o histórico de commits, ou no meio de uma sessão, como [subagente](#subagente). Um LLM como juiz no CI é revisão automatizada, não uma [verificação automatizada](#verificação-automatizada); o que a asserção _faz_ define a categoria, não o lugar onde ela roda.

A revisão funciona porque quem revisa é separado do agente que fez o trabalho. Pedir que o agente que escreveu o código revise o próprio trabalho rende muito pouco: a [sessão](#sessão) que produziu o bug também contém o raciocínio que o produziu, e o agente lê as próprias conclusões como confirmação. Um revisor com uma [janela de contexto](#janela-de-contexto) nova não tem esse apego. Ele vê o diff como um estranho veria, e é disso que a revisão depende. Um modelo diferente ou um prompt de sistema específico para revisão reforça essa separação: os pontos cegos são outros, e o prompt de sistema pode se concentrar no que você realmente quer verificar (segurança, contratos de API, desempenho) em vez de um genérico "procure problemas".

A revisão automatizada fica entre as outras camadas de revisão. As verificações automatizadas são determinísticas e pegam o que pode ser afirmado de forma mecânica. A [revisão humana](#revisão-humana) é cara e é a que menos escala. A revisão automatizada fica no meio: pega problemas que dependem de julgamento, como um nome de função enganoso ou um caso de borda esquecido, com custo de máquina. Por ser não determinística, ela pode deixar problemas passarem e apontar problemas que não existem. Trate-a como um filtro que eleva o nível mínimo de qualidade antes de um humano olhar, não como uma etapa de bloqueio que substitui o humano.

_Evite:_ "revisão por IA" / "revisão por agente", porque são vagos demais para distinguir a revisão do agente que fez o trabalho.

_Uso:_

"Estamos recebendo PRs ruins demais das execuções [AFK](#afk)."

"Coloca uma etapa de revisão automatizada antes do merge: outro modelo, prompt de sistema separado, focado em segurança e mudanças de contrato."

### Revisão humana

_Em inglês: Human review_

O usuário lendo o código que o [agente](#agente) produziu e formando um juízo sobre ele. Ler o diff ou os arquivos alterados conta; ler a _descrição_ que o agente fez do próprio trabalho não — narração não é o artefato. A descrição é uma [fonte secundária](#fonte-secundária), escrita pela parte que está sendo revisada; o diff é a [fonte primária](#fonte-primária), e revisar significa lê-lo.

Agentes aumentam o volume de código produzido, então a revisão vira o gargalo. Uma ideia útil é combinar estratégias de revisão diferentes, em camadas. As [verificações automatizadas](#verificação-automatizada) pegam as falhas mecânicas, a [revisão automatizada](#revisão-automatizada) pega as que dá para descrever, e a revisão humana fica reservada para o que só você pode julgar — se a mudança é a mudança certa, se a abordagem combina com a base de código, se isso deveria mesmo existir.

Revisar também custa menos quando é feito cedo. Ler um plano antes de o trabalho começar, ou um diff pequeno no meio do caminho, leva minutos; vasculhar uma branch pronta depois de uma execução [AFK](#afk) leva mais tempo. Onde colocar o ponto de revisão é uma decisão de [humano no loop](#humano-no-loop), não um detalhe de última hora.

_Evite:_ "code review" isolado — não distingue revisão humana de automatizada.

_Uso:_

"Fiz a revisão humana do que saiu da execução AFK."

"Você leu o diff ou só o resumo?"

"Li o diff. O resumo dizia que ele tinha apagado código morto — só que a função era chamada por um arquivo gerado."

### Vibe coding

Vibe coding (algo como "programar no embalo") é um padrão de trabalho em que o usuário aceita o código do [agente](#agente) sem [revisão humana](#revisão-humana). O diff é tratado como opaco: o que importa é se o programa se comporta bem, não o que há dentro dele. [Revisão automatizada](#revisão-automatizada) e [verificações automatizadas](#verificação-automatizada) podem continuar rodando; o vibe coding não diz nada a respeito de nenhuma das duas.

O termo vem de Andrej Karpathy, que o [cunhou no início de 2025](https://x.com/karpathy/status/1886192184808149383): você "se entrega por completo às vibes" e "esquece que o código sequer existe". Descreve o que quer, aceita o que volta e avalia rodando o programa.

O vibe coding troca inspeção por velocidade. Ler diffs costuma ser a etapa mais lenta do trabalho com agentes, então abrir mão dela remove o principal gargalo. Em código cujas falhas custam pouco, como [protótipos](#prototipagem), scripts descartáveis e ferramentas internas, a troca é razoável. O risco cresce com a vida útil do código e com o que está em jogo nele.

O custo chega depois. As mudanças feitas com vibe coding se acumulam numa base de código que ninguém leu, e o comportamento foi a única coisa checada. Por isso, tudo o que o comportamento não revela, como um segredo escrito nos logs, um caso de borda esquecido ou um tratamento de dados errado sem aviso, vai para produção sem que ninguém veja. A primeira vez que alguém depura o sistema é a primeira vez que alguém lê o código. Sem revisão humana, tudo o que ainda rodar de forma automática (testes, tipos, revisão automatizada) é a única barreira pela qual o código passa. Quando essa mesma postura vale para uma base de código inteira, ou para parte dela, e as mudanças vêm de uma [fábrica de software](#fábrica-de-software), o resultado é uma [fábrica escura](#fábrica-escura).

_Evite:_ "vibe coding" como sinônimo de "programação com IA de baixa qualidade". O termo nomeia a postura de revisão, não o código resultante.

_Uso:_

"Você leu o que ele mudou no fluxo de autenticação?"

"Fiz no vibe coding. O login continua funcionando, foi só isso que eu conferi."

"Leia o diff antes de dar push. Ir no embalo em autenticação é assim que segredo vaza nos logs."

### Conceito de design

_Em inglês: Design concept_

O entendimento compartilhado do que está sendo construído, comum ao usuário e ao [agente](#agente), mas separado de qualquer ativo. Termo de Brooks (_The Design of Design_): a conversa, os [artefatos de handoff](#artefato-de-handoff) e o código são todos ativos que tentam capturar ou alcançar o conceito de design, mas nenhum deles _é_ o conceito. A qualidade do conceito de design se percebe pela qualidade da conversa que o construiu.

O termo dá nome à lacuna por trás de uma frustração conhecida: o agente escreve exatamente o que você pediu e ainda assim está errado. A causa usual é que você ainda não tinha definido por completo o que queria. O conceito de design não estava terminado na sua própria cabeça — seu prompt capturou as partes que você já tinha resolvido e não disse nada sobre as que não tinha. O agente preencheu esses silêncios com suposições próprias, porque não havia nada com que se alinhar. Nada falhou. Não havia conceito de design compartilhado, porque ainda não existia um conceito completo para compartilhar.

Você percebe que um conceito de design é compartilhado do mesmo jeito que faz com um colega: o outro lado começa a responder, como você responderia, perguntas que você ainda não fez. Até lá, o trabalho é conversa — a [sabatina](#sabatina) é a versão deliberada — e escrever uma [especificação](#especificação) cedo demais só registra o desalinhamento num ativo mais durável. O conceito de design também muda conforme você aprende; os ativos ficam defasados, e por isso uma especificação fiel ao entendimento da semana passada ainda pode enganar a sessão desta semana.

_Uso:_

"Ele escreve exatamente o que eu pedi e ainda assim fica errado."

"Você e ele ainda não compartilham um conceito de design — ele está preenchendo as lacunas com suposições. Continue conversando até cancelamento, reembolso e entrega parcial ficarem alinhados entre vocês dois, antes de deixar ele escrever uma spec."

### Sabatina

_Em inglês: Grilling_

Técnica para desenvolver um [conceito de design](#conceito-de-design) com um [agente](#agente): o agente entrevista o usuário de forma socrática, uma decisão por vez, propondo uma resposta recomendada para cada uma. Freia a pressa de chegar a um plano final — nenhum [artefato de handoff](#artefato-de-handoff) é escrito até o conceito se estabilizar.

A técnica existe porque agentes preenchem lacunas em silêncio. Se você pede uma [especificação](#especificação) a partir de um prompt de duas linhas, o agente não para nas decisões que você ainda não tomou — escolhe valores padrão e os escreve no documento. O resultado parece completo, e os palpites ficam indistinguíveis das escolhas, então você só os descobre tarde: na revisão, ou quando a funcionalidade pronta trata um caso de borda de um jeito que você nunca escolheu. A sabatina inverte isso — em vez de supor, o agente precisa perguntar.

É uma técnica de [humano no loop](#humano-no-loop): suas respostas são a entrada. Quando uma pergunta não pode ser respondida na conversa, porque você precisaria ver a coisa funcionando, passe para a [prototipagem](#prototipagem).

_Uso:_

"Ele foi direto escrever a spec e errou a lógica de cancelamento."

"Faz uma sabatina antes: obriga ele a te perguntar sobre cancelamento parcial, reembolso e prazo antes de gravar qualquer coisa no doc. Sai mais barato resolver na conversa do que no código."

### Prototipagem

_Em inglês: Prototyping_

Pedir ao [agente](#agente) uma versão rápida e rudimentar de algo, quando a conversa tem fidelidade baixa demais e você precisa de um artefato real para discutir.

A [sabatina](#sabatina) resolve decisões de design na conversa. Conversar é barato, mas tem baixa fidelidade: algumas perguntas não se respondem com palavras — como uma interação se comporta na prática, se o formato de uma API é ergonômico em código real que a chama, se o layout funciona com volumes reais de dados. A entrevista chega a uma pergunta cuja resposta sincera é "não sei, teria que ver". Daí em diante a discussão fica andando em círculos. Em vez disso, peça ao agente para construir a coisa, olhe para ela e volte à conversa com uma resposta.

Os agentes reduzem o custo de construir, e é isso que torna a prática viável. Uma versão rudimentar que antes levava um dia para ser montada agora leva minutos, então vale fazer isso com frequência. É uma técnica de [humano no loop](#humano-no-loop): o protótipo existe para você reagir a ele.

Normalmente você não para na primeira olhada. Itere com o protótipo — reaja, peça uma mudança, reaja de novo — de modo que cada rodada resolva mais uma decisão diante do artefato real, com fidelidade maior do que a conversa permite.

Um protótipo não precisa ser todo improvisado. Você pode construir com qualidade de produção as partes que está de fato avaliando, para que, quando a decisão sair, o componente ou a API a que você reagiu possa passar para a base de código real. Por isso a prototipagem é um material essencial que a [especificação](#especificação) pode referenciar.

_Uso:_

"Faz meia hora que a gente discute se o wizard deve ser uma página só ou três etapas."

"Na conversa não resolve — pede pro agente prototipar as duas. A gente clica nas duas e em cinco minutos a gente já sabe."

### DX

DX (do inglês developer experience, experiência do desenvolvedor) — o quanto uma base de código e suas ferramentas facilitam o bom trabalho das pessoas. Boa DX é feedback rápido, mensagens de erro claras, documentação que responde à dúvida que você realmente tem e uma configuração que funciona de primeira. O termo é bem anterior à programação com IA; está neste dicionário principalmente como contraste para [AX](#ax).

A DX é a interação entre o humano e a base de código, nada além disso. A principal diferença entre os dois públicos é que os humanos são [stateful](#stateful) e os agentes são [stateless](#stateless). Um humano aprende a base de código uma vez e leva esse conhecimento para todos os dias seguintes, e por isso uma DX ruim é tolerável: a pessoa contorna o CI lento agrupando vários pushes, contorna a documentação que falta perguntando uma vez no Slack, contorna a estrutura confusa lembrando onde cada coisa fica. Os contornos se acumulam, e a equipe acaba produtiva numa base de código que trabalha contra ela.

Os [agentes](#agente) enfrentam a mesma base de código sem nada desse acúmulo. Stateless entre [sessões](#sessão), o agente reaprende a base de código do zero a cada vez. Ele se beneficia do conjunto de testes rápido e das mensagens de erro claras, mas tudo o que descobriu ontem se perde, a menos que tenha sido escrito no [ambiente](#ambiente), que o agente só percebe por meio de [resultados de ferramenta](#resultado-de-ferramenta). Essa é a lacuna que a AX nomeia: as partes da DX que sobrevivem quando quem desenvolve é um agente, além de preocupações que os humanos não têm, como manter a [janela de contexto](#janela-de-contexto) livre.

A sobreposição significa que investir em DX muitas vezes melhora a AX de graça — tipos estritos, testes rápidos e estrutura previsível ajudam os dois. A divergência significa que nem sempre é assim: um bom documento de onboarding ajuda um humano por uma semana e não ajuda em nada um agente, a menos que dê para chegar a ele a partir do [AGENTS.md](#agentsmd).

_Uso:_

"Nossa DX está boa — quem entra na empresa fica produtivo em uma semana."

"Fica produtivo porque alguém senta do lado dele nessa semana. O agente não ganha essa semana; avalie a AX separadamente."

### AX

AX (do inglês agent experience, experiência do agente) — quão bem o [ambiente](#ambiente) está preparado para um [agente](#agente) trabalhar bem numa base de código. A contraparte da [DX](#dx) (experiência do desenvolvedor) voltada ao agente. Quando o mesmo agente se sai bem em um repositório e mal em outro — mesmo [modelo](#modelo), mesmo [harness](#harness) — a diferença costuma ser a AX. O instinto é culpar o modelo ou reescrever o prompt; a correção costuma estar no repositório.

Uma boa AX tem três dimensões principais:

| Dimensão                   | Como é uma boa AX                                                                                                                                                                                                                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Verificações automatizadas | [Verificações automatizadas](#verificação-automatizada) rápidas e determinísticas — tipos, testes, lints — a partir das quais o agente se autocorrige sem um humano                                                                                                            |
| Arquitetura                | Uma base de código que o agente consegue navegar sem ler tudo: estrutura previsível, muito comportamento atrás de interfaces pequenas, nomes que dizem o que as coisas fazem                                                                                                                   |
| Contexto livre             | [AGENTS.md](#agentsmd), [skills](#skill) e [ferramentas](#ferramenta) enxutos, para que a maior parte da [janela de contexto](#janela-de-contexto) fique disponível para a tarefa e o agente permaneça na [zona inteligente](#zona-inteligente) em vez de se afogar |

AX e DX se sobrepõem — boas verificações e uma arquitetura limpa ajudam os dois públicos — mas também divergem. Humanos toleram conhecimento tribal, CI lento e "pergunte à Sarah sobre o módulo de cobrança"; agentes não conseguem. Agentes não se beneficiam de dicas flutuantes da IDE nem de painéis bonitos; precisam das falhas como texto em um [resultado de ferramenta](#resultado-de-ferramenta). Uma base de código pode ter boa DX e AX ruim.

_Evite:_ tratar AX como sinônimo de DX — os dois públicos exigem investimentos diferentes.

_Uso:_

"O agente escreve código ótimo no repo da API e lixo no frontend."

"O repo da API tem tipos estritos e um conjunto de testes rápido; o frontend não tem nenhum dos dois e mantém quarenta skills sempre carregadas. Isso é uma lacuna de AX, não um problema do modelo."

### Fábrica de software

_Em inglês: Software factory_

Um sistema de trabalho em que [sessões](#sessão) de [agentes](#agente) são iniciadas por gatilhos — uma issue criada, um agendamento, uma falha de CI, o fim de outra sessão — e não por um humano, de modo que mais trabalho roda [AFK](#afk) (longe do teclado) e a atenção humana vai para as decisões de [humano no loop](#humano-no-loop) que restam.

Sem uma fábrica, toda sessão começa porque alguém a iniciou. Mesmo o trabalho totalmente AFK depende de uma pessoa que abra a sessão, indique o [ticket](#ticket) e a ponha para rodar. Os times querem entregar mais do que isso permite. Uma fábrica tira o humano da tarefa de iniciar sessões, e não necessariamente de todo o resto.

Gatilhos comuns e as sessões que eles iniciam:

| Gatilho                                | Sessão que ele inicia                      | Exemplo                                                                                                                                          |
| -------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Issue criada ou com label aplicada     | Exploração, correção de bug, implementação | Uma issue com a label `ready-for-agent` ganha uma sessão que abre um PR                                                                          |
| Agendamento (cron)                     | Manutenção recorrente                      | Uma regra de lint corrigida por noite                                                                                                            |
| Falha de CI ou alerta de monitoramento | Diagnóstico, tentativa de correção         | Um build quebrado na main ganha uma sessão que encontra o commit responsável e propõe uma correção                                               |
| Fim de outra sessão                    | Trabalho de continuação                    | Um PR aberto por um agente dispara uma [revisão automatizada](#revisão-automatizada), cujos comentários disparam uma sessão de ajuste |

Uma fábrica não precisa cobrir o processo de software inteiro. Um único job do cron que roda um tipo de sessão e abre um PR revisável já é uma fábrica. Começar nessa escala é útil: um loop estreito produz PRs pequenos e parecidos, e revisá-los mostra até onde o loop merece confiança antes de ser ampliado.

Humanos podem estar em qualquer ponto de uma fábrica — escrevendo e aplicando labels nas issues que disparam sessões, aprovando um plano antes de a implementação começar, fazendo [revisão humana](#revisão-humana) antes do merge. Decidir quais dessas decisões continuam humanas é a principal questão de projeto. Uma base de código, ou parte dela, em que nenhum humano revisa a saída da fábrica é uma [fábrica escura](#fábrica-escura).

_Uso:_

"Quem corrigiu todas as violações de `no-floating-promises`?"

"A fábrica. Tem um cron que pega uma regra de lint por noite e abre um PR. Eu só reviso de manhã."

### Fábrica escura

_Em inglês: Dark factory_

Uma base de código, ou parte dela, em que uma [fábrica de software](#fábrica-de-software) escreve o código e nenhum humano o lê. Não há [revisão humana](#revisão-humana). Humanos ainda podem escrever as issues que iniciam o trabalho. Mas ninguém lê o código que sai. O nome vem das fábricas "lights-out" (de luzes apagadas), que produzem sem ninguém no chão de fábrica.

Uma fábrica escura é [vibe coding](#vibe-coding) para uma área de código, e não para uma única mudança. Quando você faz vibe coding, decide não ler uma mudança que pediu. Mas sabe que a mudança existe. Numa fábrica escura, o time faz essa escolha uma única vez, para a área inteira. Depois disso, nenhuma pessoa pede cada mudança nem a vê. As mudanças chegam na velocidade em que os gatilhos iniciam novos trabalhos.

O problema aparece quando algo quebra. Você não sabe o que mudou, porque ninguém leu as mudanças. Você tem que depurar um código que ninguém do time leu. A causa pode estar em qualquer uma das várias mudanças, e cada uma delas passou nas verificações.

As [verificações automatizadas](#verificação-automatizada) e a [revisão automatizada](#revisão-automatizada) são as únicas barreiras. Se elas não encontram um problema, o problema entra no código.

_Evite:_ chamar uma base de código de "escura" só porque a fábrica roda sem ninguém acompanhando. Se [sessões](#sessão) de [agente](#agente) rodam [AFK](#afk) e um humano revisa os PRs delas, isso é uma fábrica de software. Não é uma fábrica escura.

_Uso:_

"Quem mudou a lógica de retry do serviço de billing? Ninguém do time se lembra disso."

"O serviço de billing é uma fábrica escura. Os agentes fazem merge de tudo o que passa no CI. Ninguém leu essa mudança."

