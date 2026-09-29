---
description: "Experiência do agente: quão bem o ambiente está preparado para um agente trabalhar bem — verificações, arquitetura e contexto livre."
aliases:
  - Experiência do agente
  - Agent experience
---

AX (do inglês agent experience, experiência do agente) — quão bem o [ambiente](./Ambiente.md) está preparado para um [agente](./Agente.md) trabalhar bem numa base de código. A contraparte da [DX](./DX.md) (experiência do desenvolvedor) voltada ao agente. Quando o mesmo agente se sai bem em um repositório e mal em outro — mesmo [modelo](./Modelo.md), mesmo [harness](./Harness.md) — a diferença costuma ser a AX. O instinto é culpar o modelo ou reescrever o prompt; a correção costuma estar no repositório.

Uma boa AX tem três dimensões principais:

| Dimensão                   | Como é uma boa AX                                                                                                                                                                                                                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Verificações automatizadas | [Verificações automatizadas](./Verifica%C3%A7%C3%A3o%20automatizada.md) rápidas e determinísticas — tipos, testes, lints — a partir das quais o agente se autocorrige sem um humano                                                                                                            |
| Arquitetura                | Uma base de código que o agente consegue navegar sem ler tudo: estrutura previsível, muito comportamento atrás de interfaces pequenas, nomes que dizem o que as coisas fazem                                                                                                                   |
| Contexto livre             | [AGENTS.md](./AGENTS.md.md), [skills](./Skill.md) e [ferramentas](./Ferramenta.md) enxutos, para que a maior parte da [janela de contexto](./Janela%20de%20contexto.md) fique disponível para a tarefa e o agente permaneça na [zona inteligente](./Zona%20inteligente.md) em vez de se afogar |

AX e DX se sobrepõem — boas verificações e uma arquitetura limpa ajudam os dois públicos — mas também divergem. Humanos toleram conhecimento tribal, CI lento e "pergunte à Sarah sobre o módulo de cobrança"; agentes não conseguem. Agentes não se beneficiam de dicas flutuantes da IDE nem de painéis bonitos; precisam das falhas como texto em um [resultado de ferramenta](./Resultado%20de%20ferramenta.md). Uma base de código pode ter boa DX e AX ruim.

_Evite:_ tratar AX como sinônimo de DX — os dois públicos exigem investimentos diferentes.

_Uso:_

"O agente escreve código ótimo no repo da API e lixo no frontend."

"O repo da API tem tipos estritos e um conjunto de testes rápido; o frontend não tem nenhum dos dois e mantém quarenta skills sempre carregadas. Isso é uma lacuna de AX, não um problema do modelo."
