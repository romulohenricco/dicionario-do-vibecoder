---
description: Os parâmetros. Stateless — faz previsão do próximo token e mais nada. Sozinho, não consegue fazer nada agêntico.
termo_original: Model
---

Os [parâmetros](./Par%C3%A2metros.md). [Stateless](./Stateless.md) (sem estado) — faz [previsão do próximo token](./Previs%C3%A3o%20do%20pr%C3%B3ximo%20token.md) e mais nada. "Claude Opus 4.x" e "GPT-5.x" são modelos. Sozinho, um modelo não consegue fazer nada agêntico; ele precisa ser [envolvido por um harness](./Harness.md).

Modelos não conseguem ler arquivos, executar comandos, navegar na web nem lembrar de ontem — recebem [tokens](./Token.md) e preveem tokens, uma vez a cada [requisição ao provedor de modelo](./Requisi%C3%A7%C3%A3o%20ao%20provedor%20de%20modelo.md). Tudo o que parece um [agente](./Agente.md) trabalhando — escolher [ferramentas](./Ferramenta.md), ler resultados, repetir até a tarefa terminar — é o harness orquestrando várias dessas previsões em sequência.

[Provedores de modelo](./Provedor%20de%20modelo.md) lançam modelos em faixas: um grande, o mais inteligente, porém lento e caro, e outros menores, mais rápidos e baratos, mas menos capazes. Escolher a faixa é uma decisão de verdade — o modelo pesado para planejamento e depuração difícil, o leve para mudanças mecânicas — e os harnesses permitem trocar no meio da [sessão](./Sess%C3%A3o.md).

Usar a palavra com rigor também ajuda no diagnóstico. "O modelo é ruim nisso" é uma afirmação específica — o mesmo modelo, em outro harness ou com outro [contexto](./Contexto.md), muitas vezes se comporta de forma bem diferente. Antes de culpar o modelo, confira o que ele recebeu: a maior parte das saídas decepcionantes vem do contexto ou do harness, não dos parâmetros.

_Uso:_

"Vamos trocar o modelo na etapa de planejamento, do Sonnet para o Opus?"

"Tenta, mas o harness está fazendo a maior parte do trabalho nessa tarefa. Trocar de modelo não vai adiantar se o [prompt de sistema](./Prompt%20de%20sistema.md) e as ferramentas estiverem errados."
