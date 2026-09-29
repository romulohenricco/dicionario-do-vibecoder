---
description: Quem serve um modelo para inferência. Em geral é remoto (Anthropic, OpenAI, Google), mas pode ser local (Ollama, llama.cpp).
termo_original: Model provider
---

Quem serve um [modelo](./Modelo.md) para [inferência](./Infer%C3%AAncia.md). Em geral é um serviço remoto (Anthropic, OpenAI, Google), mas pode ser local — Ollama, LM Studio, llama.cpp rodando na sua própria máquina. O [harness](./Harness.md) não roda o modelo por conta própria; ele pede a um provedor que faça isso.

O provedor é dono da infraestrutura: os [parâmetros](./Par%C3%A2metros.md) ficam no hardware dele, e cada [requisição ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md) é o harness enviando [tokens](./Token.md) pela rede e recebendo previsões de volta. Por isso o provedor é a origem de uma categoria inteira de problemas atribuídos por engano ao modelo ou ao harness: rate limits (limites de uso), capacidade degradada e quedas do serviço acontecem aqui. Quando o [agente](./Agente.md) trava no meio da [sessão](./Sess%C3%A3o.md) ou dá erro em todo [turno](./Turno.md), vale olhar a página de status do provedor antes de qualquer outra coisa.

O provedor também define as condições comerciais: o preço por token dos [tokens de entrada](./Tokens%20de%20entrada.md) e dos [tokens de saída](./Tokens%20de%20sa%C3%ADda.md), os descontos de [cache de prefixo](./Cache%20de%20prefixo.md) e quais modelos estão disponíveis. Note que o provedor e o fabricante do modelo podem ser empresas diferentes — Bedrock, Vertex e OpenRouter servem modelos de terceiros.

Provedores locais trocam capacidade por controle: os modelos que cabem no hardware do próprio usuário são bem menores que os modelos de ponta, mas nada sai da máquina e não há cobrança por token.

_Uso:_

"Dá pra rodar isso offline para o cliente que trabalha isolado da rede (air-gapped)?"

"Troca o provedor de modelo por um local — Ollama ou llama.cpp na máquina deles. Pro harness tanto faz, ele só bate em outro endpoint."
