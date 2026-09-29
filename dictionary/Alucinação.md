---
description: "Saída errada de um modelo, dita com certeza. Dois tipos: factualidade (fatos inventados) e fidelidade ao contexto carregado."
termo_original: Hallucination
---

Saída errada de um [modelo](./Modelo.md), apresentada com confiança. Há dois tipos, com causas e correções diferentes:

| Tipo                     | O que dá errado                                                                                                               | Causa                                                                                                                                                                           | Correção                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| _Factualidade_           | Fatos inventados ou errados sobre o mundo — uma função que não existe, uma assinatura de API errada, uma citação falsa        | Lacunas no [conhecimento paramétrico](./Conhecimento%20param%C3%A9trico.md), muitas vezes depois da [data de corte do conhecimento](./Data%20de%20corte%20do%20conhecimento.md) | Carregar o [conhecimento contextual](./Conhecimento%20contextual.md) certo                   |
| _Fidelidade ao contexto_ | A saída se afasta do conhecimento contextual carregado, das instruções do usuário ou do raciocínio anterior do próprio modelo | [Degradação de atenção](./Degrada%C3%A7%C3%A3o%20de%20aten%C3%A7%C3%A3o.md); piora na [zona burra](./Zona%20inteligente.md)                                                     | [Limpar o contexto](./Limpeza%20de%20contexto.md) ou [compactar](./Compacta%C3%A7%C3%A3o.md) |

A [previsão do próximo token](./Previs%C3%A3o%20do%20pr%C3%B3ximo%20token.md) produz texto fluente, seja o fato real ou não. O modelo não tem sinal interno de que não sabe algo, então um método inventado chega no mesmo tom seguro de um método correto. O código alucinado é plausível por construção: é como a API _seria_ se existisse, e é isso que faz o código passar por uma leitura rápida na revisão e falhar só na execução.

Você precisa saber com qual dos tipos está lidando, porque a correção de um piora o outro. Factualidade significa conhecimento ausente: a correção é adicionar contexto — a documentação, as definições de tipos, o arquivo. Fidelidade ao contexto significa que o conhecimento está presente, mas perde a disputa por atenção: a correção é remover contexto. Se você confunde um problema de fidelidade com factualidade e cola mais documentação, o contexto cresce e o desvio piora. Quando o agente errar algo, verifique se a informação correta já estava no contexto antes de decidir qual dos dois problemas você tem.

_Evite:_ "alucinação" como sinônimo genérico de "errado" — sem nomear o tipo, o termo perde o valor diagnóstico.

_Uso:_

"Ele alucinou um método `parseAsync` no schema."

"Factualidade ou fidelidade ao contexto?"

"O método existe na documentação que eu colei — ele só parou de ler depois do [turno](./Turno.md) quarenta."

"Então é fidelidade. Compacta e recarrega, não adianta colar mais documentação."
