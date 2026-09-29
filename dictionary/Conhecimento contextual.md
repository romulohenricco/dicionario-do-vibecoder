---
description: Fatos que o agente lê diretamente do contexto neste momento. Contrapartida do conhecimento paramétrico.
termo_original: Contextual knowledge
---

Fatos que o [agente](./Agente.md) pode ler diretamente do [contexto](./Contexto.md) neste momento — a tarefa do usuário, arquivos que o agente leu, [resultados de ferramenta](./Resultado%20de%20ferramenta.md), o conteúdo do [AGENTS.md](./AGENTS.md.md) carregado no início da [sessão](./Sess%C3%A3o.md). Contrapartida do [conhecimento paramétrico](./Conhecimento%20param%C3%A9trico.md): o paramétrico é _lembrado_ a partir dos parâmetros; o contextual é _lido_ da [janela de contexto](./Janela%20de%20contexto.md). [Alucinações](./Alucina%C3%A7%C3%A3o.md) são bem menos comuns quando o agente trabalha com conhecimento contextual — a resposta está bem na frente dele, e não tirada de uma lembrança vaga.

Dos dois tipos de conhecimento, só o contextual está sob o seu controle. Os parâmetros são fixos, então a única forma de dar ao [modelo](./Modelo.md) um conhecimento que ele não tem — um SDK interno, uma biblioteca lançada depois da [data de corte do conhecimento](./Data%20de%20corte%20do%20conhecimento.md), uma decisão tomada ontem — é colocá-lo no contexto. Boa parte do trabalho prático de programação com [IA](./IA.md) se resume a isto: pôr os fatos certos na frente do modelo no momento em que ele precisa deles.

Quando o conhecimento contextual e o paramétrico entram em conflito, o contextual geralmente vence. Cole a documentação atual da API e o modelo a segue, em vez de usar a lembrança desatualizada que tem da API antiga — embora a versão antiga ainda possa vazar, principalmente no fim de uma sessão longa. Se o agente insiste em voltar a um padrão desatualizado mesmo com a documentação carregada, é o conhecimento paramétrico se sobrepondo ao contextual; repetir a correção ou colocá-la mais perto do trabalho ajuda.

Ao contrário do conhecimento paramétrico, usar o conhecimento contextual tem custo. Tudo o que é carregado na janela gasta [tokens](./Token.md) e disputa o [orçamento de atenção](./Or%C3%A7amento%20de%20aten%C3%A7%C3%A3o.md) do modelo, então carregar mais não é automaticamente melhor — o objetivo é ter os fatos relevantes na janela, não todos os fatos.

_Use este termo_ só quando estiver contrastando com o conhecimento paramétrico; nos demais casos, diga apenas **contexto**.

_Evite:_ "memória de trabalho" — o conhecimento contextual é o que está na janela _agora_; um [sistema de memória](./Sistema%20de%20mem%C3%B3ria.md) é o que leva conteúdo entre sessões para dentro dela. São escalas diferentes, não misture.

_Uso:_

"Por que ele acerta a API quando eu colo a documentação e inventa quando eu não colo?"

"Com a documentação colada, é conhecimento contextual — ele lê direto da página. Sem ela, é paramétrico e os endpoints menos comuns ficam vagos."
