# Glossário de tradução (EN → PT-BR)

Fonte de verdade para manter a tradução consistente. Ao adicionar ou revisar um verbete, use os termos daqui. O título do verbete em PT-BR é também o nome do arquivo em `dictionary/` e o texto do link nas referências cruzadas.

## Regras gerais

- Tratamento: 'você' (nunca 'tu'), imperativo na forma de 'você'. Registro plano e sem hype, conforme o CLAUDE.md original (abertura clara, sem frases de efeito).
- Regra do usuário: ficam no original apenas nomes próprios (pessoas, empresas, produtos, protocolos), nomes de arquivos/comandos/paths, código, identificadores e empréstimos universais sem tradução estabelecida. Ex.: Claude Code, Claude.ai, Cursor, Codex CLI, Ollama, LM Studio, llama.cpp, Anthropic, OpenAI, Google, Bedrock, Vertex, OpenRouter, Linear, Slack, Karpathy, Brooks, Raphael, Tesler, ELIZA, SHRDLU, Deep Blue, Kasparov, AlphaGo, AlexNet, ChatGPT, modelos (Claude Opus, Sonnet, GPT), AGENTS.md, CLAUDE.md, SKILL.md, plan.md, /clear, /compact, /memory, ferramentas Read/Write/Bash/Search, grep, psql, pnpm, parseAsync, no-floating-promises, ready-for-agent. O título da obra 'The Design of Design' permanece em inglês.
- Títulos mantidos em inglês (14): AFK, AGENTS.md, AX, DX, Handoff, Harness, MCP, Sandbox, Skill, Stateful, Stateless, Ticket, Token, Vibe coding. Na 1ª frase de cada um, glosa em português (ex.: 'AFK (do inglês away from keyboard, longe do teclado)'); os aliases registram a tradução. Esses títulos NÃO levam a nota 'Em inglês:' no README.
- Títulos traduzidos levam o original em inglês: na 1ª frase do verbete, entre parênteses, quando ajudar a busca (ex.: 'Janela de contexto (context window)'), e sempre nos aliases do frontmatter (ex.: Sandboxing, HITL, Human-in-the-loop, Reasoning effort, Dumb zone, Agent experience, Developer experience). O README exibe 'Em inglês: X'. Não repetir o inglês depois da 1ª frase.
- Caixa de título: sentence case (só a 1ª letra maiúscula, exceto siglas e nomes próprios), NFC com acentos corretos, sem / \ : \* ? " < > |. Arquivo = título + .md; AGENTS.md permanece AGENTS.md.md.
- Palavras mantidas em inglês não levam itálico nem aspas. Plural: 's' minúsculo sem apóstrofo (tokens, skills, harnesses, sandboxes, handoffs, tickets). Stateful, Stateless, AFK, AX, DX e 'vibe coding' são invariáveis. Gêneros: o harness, o handoff, o token, o prompt, o sandbox, o ticket, o MCP, o AGENTS.md; a skill, a issue, a IA, a DX, a AX, a especificação.
- Não criar verbos derivados de empréstimos ('promptar', 'handoffar'): usar 'fazer handoff', 'enviar um prompt', 'fazer merge'. Verbos de termos traduzidos: limpar, compactar, sabatinar, prototipar.
- Famílias lexicais parelhas: Tokens de entrada/saída/cache; Relação/Orçamento/Degradação de atenção; Conhecimento contextual/paramétrico; Fonte primária/secundária; Modo de agente/Modo de permissão; Chamada/Resultado de ferramenta; Provedor de modelo/Requisição ao provedor de modelo; Verificação/Revisão automatizada e Revisão humana; Fábrica de software/Fábrica escura; Compactação/Autocompactação/Limpeza de contexto; Stateful/Stateless.
- Desambiguações: 'requisição' = request ao provedor (API); 'pedido' = pergunta ao humano (permissão); 'chamada' = tool call; 'turno' = uma troca com o usuário; 'sessão' = histórico; 'contexto' = informação pertinente; 'ambiente' = onde o agente atua; 'verificação' = check (nunca 'teste'); 'automatizada' só em verificação/revisão; 'provedor' = de modelo, 'fornecedor' = só vendor; 'spec' só em nomes de arquivo e diálogos informais.
- Links: [texto](./Titulo%20do%20arquivo.md) com espaços e acentos percent-encoded (encodeURIComponent em UTF-8 NFC), de forma uniforme em todos os verbetes e no README. Só a 1ª ocorrência de cada termo no verbete vira link; o texto do link concorda em gênero e número com a frase e aponta para o arquivo do título canônico.
- Frontmatter: chaves em inglês (description, aliases), valores traduzidos. Cada description < 140 caracteres EM PT-BR (revisar cada uma, pois o português é mais longo); as que começam com aspas continuam entre aspas no YAML. Mínimo de 200 palavras por verbete.
- Aspas duplas retas ("), como no original; aspas simples só dentro de aspas. Travessão ' — ' com espaços preservado. Faixas como 1960s–70s viram 'anos 1960–70'. Números em formato brasileiro (10.000; vírgula decimal); '125K-150K tokens' vira '125 mil a 150 mil tokens'; '~1 million' vira '~1 milhão'.
- Rótulos em itálico mantêm a forma _Rótulo:_ com os dois-pontos dentro do itálico. '_Reach for this term_' vira '_Use este termo_' e a frase continua em PT. Diálogos de '_Uso:_': fala coloquial de dev brasileiro, aspas duplas, uma fala por parágrafo; podem manter spec, PR, repo, agente, harness e tokens.
- Citações históricas (Raphael 1971, Tesler ~1979, Karpathy) traduzidas livremente, com autor e data mantidos; original em inglês entre parênteses na 1ª ocorrência se necessário ao sentido.
- Seções do Curriculum: 'Seção N — Título' com em-dash; ordem interna igual à do Curriculum original.
- Projeto: repositório 'dicionario-do-vibecoder' (privado, romulohenricco); título do README 'Dicionário do Vibecoder'; manter atribuição visível a Matt Pocock / dictionary-of-ai-coding e a licença original.

## Verbetes

| Termo original         | Título em português              | Decisão                                                                                                                                             |
| ---------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| AI                     | IA                               | Sigla PT-BR consagrada; expandir 'inteligência artificial' na 1ª frase.                                                                             |
| Model                  | Modelo                           | Tradução universal; nomes de modelos (Claude Opus, GPT) intactos.                                                                                   |
| Parameters             | Parâmetros                       | 'Pesos' fica como alias.                                                                                                                            |
| Training               | Treinamento                      | Contraste com Inferência.                                                                                                                           |
| Inference              | Inferência                       | Termo estabelecido em ML.                                                                                                                           |
| Effort                 | Esforço de raciocínio            | Decisão: 'Esforço' sozinho é ambíguo (esforço humano); alias original 'Reasoning effort'. No corpo usar 'esforço'. Níveis: baixo/médio/alto/máximo. |
| Token                  | Token (mantido em inglês)        | Termo universal; base da família Tokens de X.                                                                                                       |
| Next-token prediction  | Previsão do próximo token        | 'Previsão' (não 'predição'); 'token' mantido.                                                                                                       |
| Non-determinism        | Não determinismo                 | Sem hífen (AO90 e nome de arquivo).                                                                                                                 |
| Model provider         | Provedor de modelo               | 'Provedor' (fornecedor fica só para 'vendor').                                                                                                      |
| Harness                | Harness (mantido em inglês)      | Sem tradução estabelecida ('arnês' é estranho e não pesquisável); 'harnessed' vira 'envolvido por um harness'.                                      |
| Model provider request | Requisição ao provedor de modelo | 'Requisição' só para chamadas ao provedor; 'pedido' reservado a permissão.                                                                          |
| Input tokens           | Tokens de entrada                | Família Tokens de X.                                                                                                                                |
| Output tokens          | Tokens de saída                  | Par de Tokens de entrada.                                                                                                                           |
| Prefix cache           | Cache de prefixo                 | 'Cache' é empréstimo dicionarizado.                                                                                                                 |
| Cache tokens           | Tokens de cache                  | Família Tokens de X.                                                                                                                                |
| Stateless              | Stateless (mantido em inglês)    | Termo dominante na fala dev BR; glosa 'sem estado' na 1ª frase; invariável.                                                                         |
| Context                | Contexto                         | Tradução direta.                                                                                                                                    |
| Context window         | Janela de contexto               | Tradução estabelecida.                                                                                                                              |
| Stateful               | Stateful (mantido em inglês)     | Par de Stateless; glosa 'com estado' na 1ª frase; invariável.                                                                                       |
| Agent                  | Agente                           | Consolidado em PT-BR.                                                                                                                               |
| System prompt          | Prompt de sistema                | 'Prompt' mantido, 'de sistema' traduzido (forma comum nas docs PT-BR).                                                                              |
| Session                | Sessão                           | Hierarquia: Sessão > Turno > Requisição.                                                                                                            |
| Turn                   | Turno                            | Termo de conversação multi-turno.                                                                                                                   |
| Environment            | Ambiente                         | Onde o agente atua; não usar solto para staging/dev.                                                                                                |
| Filesystem             | Sistema de arquivos              | Tradução estabelecida.                                                                                                                              |
| Tool                   | Ferramenta                       | Nomes Read, Write, Bash, Search permanecem.                                                                                                         |
| Tool call              | Chamada de ferramenta            | Família Ferramenta.                                                                                                                                 |
| Tool result            | Resultado de ferramenta          | Par de Chamada de ferramenta.                                                                                                                       |
| MCP                    | MCP (mantido em inglês)          | Nome próprio de protocolo (Model Context Protocol).                                                                                                 |
| Permission request     | Pedido de permissão              | 'Pedido' (dirigido ao humano) distingue de 'requisição' (API).                                                                                      |
| Permission mode        | Modo de permissão                | Família Modo de X; nomes dos modos (default, plan mode, YOLO mode) ficam.                                                                           |
| Agent mode             | Modo de agente                   | Família Modo de X.                                                                                                                                  |
| Sandbox                | Sandbox (mantido em inglês)      | Empréstimo universal; 'sandboxing' vira 'uso de sandbox'/'isolamento em sandbox'.                                                                   |
| Sycophancy             | Bajulação                        | 'Sicofantia' só como alias.                                                                                                                         |
| Hallucination          | Alucinação                       | Sabores: factualidade e fidelidade ao contexto.                                                                                                     |
| Parametric knowledge   | Conhecimento paramétrico         | Par de Conhecimento contextual.                                                                                                                     |
| Knowledge cutoff       | Data de corte do conhecimento    | Autoexplicativo para iniciante; 'corte' como forma curta no corpo.                                                                                  |
| Contextual knowledge   | Conhecimento contextual          | Par de Conhecimento paramétrico.                                                                                                                    |
| Attention relationship | Relação de atenção               | Família 'X de atenção'.                                                                                                                             |
| Attention budget       | Orçamento de atenção             | Preserva a metáfora de orçamento.                                                                                                                   |
| Attention degradation  | Degradação de atenção            | Família 'X de atenção'.                                                                                                                             |
| Smart zone             | Zona inteligente                 | Preserva o par 'zona burra' (dumb zone, alias).                                                                                                     |
| Clearing               | Limpeza de contexto              | Decisão: 'Limpeza' sozinha é vaga numa lista de 71 títulos; 'de contexto' diz o efeito e faz par com Compactação. Verbo 'limpar' (/clear).          |
| Handoff                | Handoff (mantido em inglês)      | Empréstimo corrente na fala dev BR; 'repasse'/'transferência' ambíguos; 'fazer handoff'.                                                            |
| Primary source         | Fonte primária                   | Par de Fonte secundária.                                                                                                                            |
| Secondary source       | Fonte secundária                 | Par de Fonte primária.                                                                                                                              |
| Handoff artifact       | Artefato de handoff              | 'Artefato' traduzido, 'handoff' mantido como no verbete Handoff.                                                                                    |
| Spec                   | Especificação                    | 'spec' só em nomes de arquivo (spec.md) e nos diálogos informais.                                                                                   |
| Ticket                 | Ticket (mantido em inglês)       | 'Tarefa' colide com task; 'chamado' tem outro sentido; issue do GitHub fica 'issue'.                                                                |
| Compaction             | Compactação                      | Verbo 'compactar' (/compact).                                                                                                                       |
| Autocompact            | Autocompactação                  | Derivada de Compactação; 'automatizada' reservado a verificação/revisão.                                                                            |
| Memory system          | Sistema de memória               | Tradução direta.                                                                                                                                    |
| AGENTS.md              | AGENTS.md (mantido em inglês)    | Nome de arquivo; o arquivo do verbete continua AGENTS.md.md.                                                                                        |
| Progressive disclosure | Divulgação progressiva           | Termo de UX estabelecido em PT-BR; 'revelação progressiva' pode ser alias.                                                                          |
| Context pointer        | Ponteiro de contexto             | 'Ponteiro' é consagrado em programação.                                                                                                             |
| Skill                  | Skill (mantido em inglês)        | Nome do padrão (SKILL.md, agentskills.io); 'habilidade' não é pesquisável; glosa na 1ª frase.                                                       |
| Subagent               | Subagente                        | Prefixo sub- transparente; família Agente.                                                                                                          |
| Human-in-the-loop      | Humano no loop                   | 'Loop' de uso universal; HITL e o original como alias.                                                                                              |
| AFK                    | AFK (mantido em inglês)          | Sigla consagrada; expandir 'longe do teclado' na 1ª frase.                                                                                          |
| Automated check        | Verificação automatizada         | 'Verificação' (não 'teste', que é só um tipo).                                                                                                      |
| Automated review       | Revisão automatizada             | Par com Verificação automatizada e Revisão humana.                                                                                                  |
| Human review           | Revisão humana                   | Par de Revisão automatizada.                                                                                                                        |
| Vibe coding            | Vibe coding (mantido em inglês)  | Termo cunhado por Karpathy; dá nome ao dicionário; invariável.                                                                                      |
| Design concept         | Conceito de design               | Termo de Brooks; 'design' no sentido de concepção, não visual.                                                                                      |
| Grilling               | Sabatina                         | Verbo 'sabatinar'.                                                                                                                                  |
| Prototyping            | Prototipagem                     | Verbo 'prototipar'.                                                                                                                                 |
| DX                     | DX (mantido em inglês)           | Sigla par de AX; expandir 'experiência do desenvolvedor' na 1ª frase e em alias.                                                                    |
| AX                     | AX (mantido em inglês)           | Sigla par de DX; expandir 'experiência do agente' na 1ª frase e em alias.                                                                           |
| Software factory       | Fábrica de software              | 1ª frase deve evitar leitura como 'software house': sistema de trabalho em que gatilhos iniciam sessões de agentes.                                 |
| Dark factory           | Fábrica escura                   | Calco de 'lights-out'; par de Fábrica de software.                                                                                                  |

## Expressões recorrentes no corpo dos verbetes

| Original                                      | Português                                                   |
| --------------------------------------------- | ----------------------------------------------------------- |
| LLM                                           | LLM                                                         |
| large language model                          | grande modelo de linguagem (LLM)                            |
| prompt                                        | prompt                                                      |
| codebase                                      | base de código                                              |
| repo / repository                             | repositório ("repo" só nos diálogos)                        |
| pull request / PR                             | pull request (PR)                                           |
| diff                                          | diff                                                        |
| commit / commit history                       | commit / histórico de commits                               |
| branch / push                                 | branch / push                                               |
| merge (noun)                                  | merge                                                       |
| to merge                                      | fazer merge / mesclar                                       |
| issue                                         | issue                                                       |
| issue tracker                                 | issue tracker (rastreador de issues)                        |
| CI                                            | CI (integração contínua)                                    |
| lint / linter                                 | lint / linter                                               |
| typecheck / type check                        | verificação de tipos (typecheck quando for o comando)       |
| tests / test suite                            | testes / conjunto de testes                                 |
| flaky test                                    | teste instável (flaky)                                      |
| hooks                                         | hooks                                                       |
| pre-commit hook                               | hook de pre-commit                                          |
| deploy / rollback                             | deploy / rollback                                           |
| runbook                                       | runbook                                                     |
| schema                                        | schema                                                      |
| schema migration / migration                  | migração de schema / migração                               |
| API / SDK / endpoint / changelog              | API / SDK / endpoint / changelog                            |
| cron / cron job                               | cron / job do cron                                          |
| backfill                                      | backfill                                                    |
| staging                                       | staging                                                     |
| production                                    | produção                                                    |
| onboarding                                    | onboarding                                                  |
| frontier model                                | modelo de ponta                                             |
| context engineering                           | engenharia de contexto                                      |
| load into context                             | carregar no contexto                                        |
| context rot                                   | deterioração do contexto (context rot)                      |
| context pollution / polluted context          | contexto poluído                                            |
| signal-to-noise ratio / signal / noise        | relação sinal-ruído / sinal / ruído                         |
| agent loop                                    | loop do agente                                              |
| loop                                          | loop                                                        |
| feedback / feedback loop                      | feedback / loop de feedback                                 |
| backpressure                                  | backpressure                                                |
| harnessed (verb)                              | envolvido por um harness                                    |
| agentic                                       | agêntico                                                    |
| coding agent                                  | agente de programação                                       |
| AI coding                                     | programação com IA                                          |
| the AI effect                                 | efeito IA                                                   |
| expert systems                                | sistemas especialistas                                      |
| deep learning / machine learning              | deep learning / machine learning                            |
| pre-training / post-training                  | pré-treinamento / pós-treinamento                           |
| fine-tune                                     | fazer fine-tuning                                           |
| weights                                       | pesos                                                       |
| tokenizer                                     | tokenizador                                                 |
| attention head                                | cabeça de atenção                                           |
| floating-point                                | ponto flutuante                                             |
| extended thinking                             | raciocínio estendido                                        |
| reasoning tokens                              | tokens de raciocínio                                        |
| thinking / reasoning                          | raciocínio                                                  |
| latency                                       | latência                                                    |
| throughput                                    | throughput                                                  |
| rate limits                                   | rate limits (limites de uso na 1ª menção)                   |
| billed / billing / bill                       | cobrado / cobrança / fatura                                 |
| rate (price per token)                        | tarifa                                                      |
| usage report                                  | relatório de uso                                            |
| status page                                   | página de status                                            |
| outage                                        | queda do serviço                                            |
| provider (of models)                          | provedor                                                    |
| vendor                                        | fornecedor                                                  |
| cache hit / miss                              | acerto / falha de cache                                     |
| round trip                                    | ida e volta                                                 |
| append-only                                   | só cresce no fim (append-only)                              |
| trigger (software factory)                    | gatilho                                                     |
| label (GitHub label)                          | label                                                       |
| style guide                                   | guia de estilo                                              |
| plan doc                                      | documento de plano                                          |
| design doc / RFC / PRD                        | design doc / RFC / PRD (documento de requisitos do produto) |
| acceptance criteria                           | critérios de aceitação                                      |
| edge case                                     | caso de borda                                               |
| dead code                                     | código morto                                                |
| dependency graph                              | grafo de dependências                                       |
| blast radius                                  | raio de impacto                                             |
| air-gapped                                    | isolado da rede (air-gapped)                                |
| read-only                                     | somente leitura                                             |
| credentials                                   | credenciais                                                 |
| container / VM                                | contêiner / VM (máquina virtual)                            |
| fan out (parallel sessions)                   | abrir em paralelo                                           |
| spawn (a subagent)                            | criar / disparar                                            |
| tool search                                   | busca de ferramentas                                        |
| tribal knowledge                              | conhecimento tribal                                         |
| background agent                              | agente em segundo plano                                     |
| LLM-as-judge                                  | LLM como juiz                                               |
| plan mode                                     | plan mode                                                   |
| accept-edits                                  | accept-edits                                                |
| bypass permissions                            | bypass permissions                                          |
| YOLO mode                                     | YOLO mode                                                   |
| Low / Medium / High / Max (effort levels)     | Baixo / Médio / Alto / Máximo                               |
| dumb zone                                     | zona burra                                                  |
| factuality (hallucination flavor)             | factualidade                                                |
| faithfulness (hallucination flavor)           | fidelidade ao contexto                                      |
| caving under pushback                         | ceder sob pressão                                           |
| pushback                                      | contestação                                                 |
| praising bad input                            | elogiar uma entrada ruim                                    |
| biased framing                                | enquadramento enviesado                                     |
| mimicry                                       | imitação                                                    |
| relitigate / relitigation                     | rediscutir decisões já tomadas / rediscussão                |
| rubber-stamping                               | aprovar no automático                                       |
| stale (copy, doc)                             | desatualizado                                               |
| drift                                         | desvio                                                      |
| lossy                                         | com perdas                                                  |
| headroom                                      | folga                                                       |
| low-fidelity / high-fidelity                  | baixa fidelidade / alta fidelidade                          |
| fabrication trap / fabricate                  | armadilha de invenção / inventar                            |
| yield back to the user                        | devolver a vez ao usuário                                   |
| fresh session                                 | sessão nova                                                 |
| zero context                                  | contexto zero                                               |
| always-loaded                                 | sempre carregado                                            |
| seed (a session with a summary)               | iniciar (uma sessão) com um resumo                          |
| transcript                                    | transcrição (histórico da conversa)                         |
| summary                                       | resumo                                                      |
| carry mechanism / no return path              | mecanismo de transporte / sem caminho de volta              |
| steer / steering                              | direcionar / direcionamento                                 |
| gate / gating                                 | barreira / controle                                         |
| push through                                  | insistir mesmo assim                                        |
| anthropomorphize                              | antropomorfizar                                             |
| entry / entries (of the dictionary)           | verbete(s)                                                  |
| the reader                                    | o leitor                                                    |
| user                                          | usuário (ou "você" em diálogos)                             |
| Step / Who / What happens (table headers)     | Etapa / Quem / O que acontece                               |
| Mechanism / Form / Properties (table headers) | Mecanismo / Forma / Propriedades                            |

## Rótulos em itálico

| Original                | Português                   |
| ----------------------- | --------------------------- |
| `_Usage:_`              | `_Uso:_`                    |
| `_Avoid:_`              | `_Evite:_`                  |
| `_Diagnostic test:_`    | `_Teste diagnóstico:_`      |
| `_Fix:_`                | `_Correção:_`               |
| `_Surfaces as:_`        | `_Aparece como:_`           |
| `_Vendor terms:_`       | `_Termos de fornecedores:_` |
| `_Reach for this term_` | `_Use este termo_`          |
