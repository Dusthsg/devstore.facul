# Guia do Projeto — Loja Online com Dashboard

> Documentação viva da equipe. Atualizem conforme o projeto evolui — isso também é parte do processo Ágil.

---

## 1. Visão Geral

**Objetivo:** construir uma loja online funcional com dashboard administrativo, em equipe de 9 pessoas, aplicando metodologias ágeis (Scrum + XP) como exercício prático além do resultado técnico.

**Contexto da equipe:**
- 9 integrantes (5 no Frontend, 4 no Backend na Fase 1), todos iniciantes em pelo menos uma das áreas do projeto.
- 1 pessoa do time de Backend (o coringa) também atua como Scrum Master, circulando entre as frentes.
- O projeto acontece em **2 fases**, com composição de equipe diferente em cada uma.

**Por que fases, e não times fixos:**
Times fixos do início ao fim fazem cada pessoa aprender só uma fatia do sistema. Mudar a composição no meio do projeto força todo mundo a circular por mais de uma área — o que é bom tanto para aprendizado quanto para reduzir o risco de "só uma pessoa entende essa parte".

---

## 2. Estrutura por Fases

### Fase 1 — Construção da Base
**2 equipes: Backend (4 pessoas) e Frontend (5 pessoas)**

```
┌─────────────────────┐    ┌─────────────────────┐
│      BACKEND        │    │      FRONTEND       │
│  Pessoa 1 (coringa)  │    │  Pessoa 5             │
│  Pessoa 2             │    │  Pessoa 6              │
│  Pessoa 3              │    │  Pessoa 7               │
│  Pessoa 4                │    │  Pessoa 8                │
│                            │    │  Pessoa 9                 │
└─────────────────────┘    └─────────────────────┘
           │                         │
           └───────────┬─────────────┘
                        ↓
                      API
```

**Backend entrega:**
- Banco de dados
- Modelos de dados
- API REST básica
- Autenticação (login/registro)
- Produtos (CRUD)
- Usuários
- Pedidos (fluxo básico)

**Frontend entrega:**
- Estrutura da aplicação (rotas, layout)
- Páginas principais
- Componentes reutilizáveis
- Navegação
- Listagem de produtos
- Carrinho
- Tela de login
- Dashboard inicial (esqueleto)

**Coringa:** circula entre os dois grupos resolvendo problemas de integração e decisões de arquitetura — é quem sabe "os dois lados da história" quando frontend e backend não combinam nos detalhes.

**Critérios de saída da Fase 1** (todos precisam estar ✅ antes de avançar):
- [ ] Banco de dados funcionando
- [ ] API funcionando (endpoints principais respondendo)
- [ ] Frontend consumindo a API (não mockado)
- [ ] Login funcionando ponta a ponta
- [ ] Produtos funcionando (listar/criar/editar)
- [ ] Carrinho funcionando
- [ ] Primeiro pedido completo funcionando

---

### Fase 2 — Especialização
**3 equipes: Backend (3 pessoas), Segurança (2 pessoas) e Frontend (4 pessoas)**

```
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│   BACKEND     │   │   SEGURANÇA   │   │   FRONTEND    │
│   3 pessoas   │   │   2 pessoas   │   │   4 pessoas   │
└───────────────┘   └───────────────┘   └───────────────┘
```

**Como formar o time de Segurança:** puxem 1 pessoa do Backend da Fase 1 e 1 pessoa do Frontend da Fase 1 — não as duas do mesmo lado. Assim o time nasce entendendo tanto a parte de servidor (onde mora a maior parte do trabalho de segurança: hash de senha, JWT, SQL Injection) quanto a de cliente (XSS, CSRF, validação de formulário). Se só vier gente do frontend, por exemplo, o time perde intimidade com autenticação no servidor logo de cara.

**Por que o Frontend fica com 4 e o Backend com 3:** o Frontend começou com mais gente (5) e tem mais superfície de trabalho na Fase 2 (checkout, perfil, histórico, dashboard com gráficos, responsividade) — faz sentido manter o time maior lá. O coringa continua no Backend.

**Backend foca em:**
- Regras de negócio mais complexas
- Estoque
- Pagamentos simulados
- Relatórios (dados para o dashboard)

**Segurança não é um projeto isolado — audita e protege os outros dois times:**

```
Frontend ───────┐
                 ↓
             Segurança
                 ↓
Backend ────────┘
```

Trabalha em:
- Autenticação e autorização (roles)
- Hash de senha
- Validação de entrada
- Proteção contra SQL Injection, XSS, CSRF
- Gerenciamento de sessão/token
- Rate limiting
- Logs e auditoria

Isso força o time de segurança a conversar constantemente com os outros dois — o que é uma boa simulação de como segurança funciona em empresas reais.

**Frontend evolui para:**
- Checkout completo
- Perfil de usuário
- Histórico de pedidos
- Dashboard com gráficos
- Responsividade
- Tratamento de erros e estados de carregamento

**Coringa:** continua circulando pelas 3 frentes, ajudando a traduzir necessidades entre os times (ex.: "o frontend precisa desse endpoint", "a segurança exige autenticação nessa rota").

**Critérios de saída da Fase 2:**
- [ ] Autorização (roles) implementada
- [ ] Segurança revisada nas rotas principais
- [ ] Dashboard funcional com dados reais
- [ ] Estoque funcionando
- [ ] Pedidos completos (do carrinho ao histórico)
- [ ] Logs implementados
- [ ] Testes principais passando

---

## 3. Papel do Coringa (Scrum Master + Apoio Técnico)

```
        BACKEND
     ┌───────────┐
     │   VOCÊ    │ ← alocado aqui, mas circula
     │ (coringa) │
     └───────────┘
             │
        Scrum Master
       Apoio técnico
             │
   ┌─────────┼─────────┐
   ↓         ↓         ↓
Backend  Segurança  Frontend
```

Você está fisicamente no time de Backend (faz parte da contagem de 4 na Fase 1 e 3 na Fase 2), mas seu papel vai além disso.

Responsabilidades principais:
- Facilitar as cerimônias Scrum (abaixo).
- Garantir que as áreas conversem — traduzir necessidades técnicas entre times.
- Ajudar a resolver bloqueios e dependências entre backend/frontend/segurança.
- Não é "o chefe" — é quem remove obstáculos e mantém o fluxo de comunicação.

---

## 4. Aplicando Scrum

### Sprints
Vocês ainda não decidiram a duração — aqui vai o comparativo para decidir em equipe:

| Duração | Vantagem | Desvantagem | Melhor para |
|---|---|---|---|
| **1 semana** | Feedback rápido, força a quebrar tarefas bem pequenas, bom pra manter ritmo de faculdade | Pouco tempo para tarefas mais complexas, overhead de cerimônias toda semana | Equipes que já têm rotina definida de encontros |
| **2 semanas** | Mais tempo para tarefas de verdade, menos overhead de reuniões | Feedback mais lento, risco de deixar tudo pro fim | Equipes iniciantes — **recomendado para vocês** |

**Sugestão:** comecem com sprints de 2 semanas. Como todos são iniciantes, tarefas tendem a demorar mais do que o esperado — 1 semana pode gerar frustração de "nunca terminamos nada".

### Cerimônias

**Sprint Planning** (início do sprint, ~1h)
- Escolher itens do backlog para o sprint.
- Quebrar em tarefas pequenas (ideal: cada tarefa cabe em 1 dia de trabalho).

**Daily Standup** (curto, 10-15 min — pode ser assíncrono em grupo de chat)
Cada pessoa responde:
1. O que fiz desde o último standup?
2. O que vou fazer até o próximo?
3. Tenho algum bloqueio?

**Sprint Review** (fim do sprint, ~30-45 min)
- Mostrar o que foi entregue e funciona de verdade (não "quase pronto").

**Retrospectiva** (logo após a review, ~30 min)
Três perguntas simples:
- O que funcionou bem?
- O que atrapalhou?
- O que vamos mudar no próximo sprint?

### Backlog e Board
Usem um quadro Kanban simples (Trello, GitHub Projects ou Notion) com colunas:

```
A Fazer → Em Progresso → Em Revisão → Concluído
```

Cada card = 1 tarefa pequena, com responsável e time (Backend/Frontend/Segurança) marcados.

---

## 5. Aplicando XP (Extreme Programming)

XP encaixa bem com Scrum aqui porque a equipe é pequena e iniciante — as práticas de XP dão suporte técnico ao que o Scrum organiza em processo.

**Práticas recomendadas para vocês:**

- **Pair Programming (Programação em Par):** especialmente entre quem já sabe mais e quem está mais perdido em determinada área. Não precisa ser o tempo todo — usem em tarefas mais difíceis ou de integração.
- **Code Review obrigatório:** ninguém sobe código direto na branch principal sem pelo menos 1 revisão. Ótimo para espalhar conhecimento entre o time.
- **Integração Contínua simplificada:** integrem o código com frequência (não deixem uma pessoa trabalhar 2 semanas isolada numa branch). Rodem os testes antes de mesclar.
- **Design simples:** resolvam o problema de hoje, não o de "e se um dia precisarmos escalar para 1 milhão de usuários". Iniciantes tendem a superengenhar — resistam a isso.
- **Testes automatizados básicos:** pelo menos testes para as regras de negócio principais (ex.: "não deixar finalizar pedido com carrinho vazio"). Não precisa cobertura 100%.
- **Refatoração contínua:** se o código ficou confuso, arrumem antes de empilhar mais coisa em cima.

**O que simplificar (vocês são iniciantes, não precisam do XP "raiz"):**
- Não é necessário Test-Driven Development estrito desde o início — testes depois da funcionalidade já ajuda bastante.
- "Cliente presente o tempo todo" (prática clássica de XP) pode virar: revisões periódicas com o professor/orientador da disciplina, se houver.

---

## 6. Sugestão de Stack Técnica (simples para iniciantes)

Critério: poucas peças móveis, muita documentação em português/inglês, curva de aprendizado curta.

| Camada | Sugestão | Por quê |
|---|---|---|
| **Frontend** | React + Vite | Muito material de estudo, comunidade enorme, Vite é rápido e simples de configurar |
| **Estilização** | Tailwind CSS | Evita escrever CSS do zero, resultado profissional rápido |
| **Backend** | Node.js + Express | Mesma linguagem do frontend (JavaScript) — menos contexto para trocar de cabeça |
| **Banco de dados** | PostgreSQL (ou SQLite para começar) | SQLite não exige servidor — ótimo pra Fase 1; migrem para PostgreSQL na Fase 2 se quiserem algo mais "produção" |
| **ORM** | Prisma | Facilita muito trabalhar com banco sem escrever SQL puro toda hora, e gera modelos automaticamente |
| **Autenticação** | JWT (jsonwebtoken) + bcrypt para hash de senha | Padrão simples e amplamente documentado |
| **Versionamento** | Git + GitHub (branches por feature, Pull Requests) | Já treina o fluxo de trabalho usado no mercado |
| **Gestão de tarefas** | GitHub Projects ou Trello | Gratuito, integra fácil com o repositório |

**Alternativa ainda mais simples**, se quiserem reduzir o número de tecnologias diferentes: **Next.js** (front + back no mesmo framework) + **Prisma** + **SQLite/PostgreSQL**. Isso reduz a "costura" entre frontend e backend, mas exige aprender o modelo de rotas do Next.

---

## 7. Guias Oficiais de Cada Tecnologia

Comecem sempre pela documentação oficial — é a fonte mais confiável e geralmente tem tutorial "getting started" próprio.

| Tecnologia | Guia oficial |
|---|---|
| **React** | https://pt-br.react.dev/ (documentação em português) |
| **Vite** | https://vitejs.dev/guide/ |
| **Tailwind CSS** | https://tailwindcss.com/docs |
| **Node.js** | https://nodejs.org/pt/docs |
| **Express** | https://expressjs.com/pt-br/ (também tem versão em português) |
| **Next.js** (se optarem pela alternativa) | https://nextjs.org/docs |
| **Prisma** | https://www.prisma.io/docs |
| **PostgreSQL** | https://www.postgresql.org/docs/ |
| **SQLite** | https://www.sqlite.org/docs.html |
| **JWT (jsonwebtoken)** | https://jwt.io/introduction e https://www.npmjs.com/package/jsonwebtoken |
| **bcrypt** | https://www.npmjs.com/package/bcrypt |
| **Git** | https://git-scm.com/doc |
| **GitHub** (fluxo de PR, Projects, Actions) | https://docs.github.com/pt |

**Dica:** cada dupla/trio deve ler pelo menos o guia "getting started" da tecnologia da sua área **antes** da Sprint Planning da Fase 1 — isso evita perder tempo de sprint aprendendo do zero.

---

## 8. Como Todos Ganharem o Máximo de Experiência (não só técnica)

O maior risco de projetos em grupo é uma pessoa acabar dominando uma área e as outras cinco nunca aprenderem aquilo. Algumas práticas para evitar isso, além da rotação natural entre Fase 1 e Fase 2:

**Rotação de papéis nas cerimônias Scrum**
Não deixem sempre a mesma pessoa conduzindo o Daily ou a Retrospectiva. Revezem quem facilita cada cerimônia — isso é uma habilidade em si (facilitação), não só "ser bonzinho e deixar todo mundo falar".

**Rotação do Product Owner "interno"**
Mesmo sem cliente real, alguém precisa priorizar o backlog. Revezem quem assume esse papel a cada sprint — quem prioriza aprende a pensar em valor de negócio, não só em código.

**Pair Programming cruzado**
Além de usar pares para tarefas difíceis (seção 5), tentem formar pares que **misturem** quem já manja mais de uma tecnologia com quem manja menos — e troquem os pares a cada sprint, não sempre os mesmos dois.

**"Embaixadores" entre áreas**
Na Fase 2, quando o time se divide em Backend/Segurança/Frontend, designem 1 pessoa por sprint como "embaixadora" que participa de pelo menos 1 reunião do outro time. Isso mantém todo mundo com visão do sistema inteiro, não só da própria fatia.

**Documentação como responsabilidade rotativa**
Não deixe sempre a mesma pessoa escrevendo a documentação técnica (seção 7 da vida real: README, contratos de API, etc.). Revezem — quem documenta aprende a explicar, que é diferente de só saber fazer.

**Sessões de "Show and Tell" técnico**
Uma vez por sprint (pode ser dentro da Sprint Review), cada área mostra rapidamente pros outros times **como** resolveu algo técnico, não só **o que** entregou. Isso espalha conhecimento técnico entre backend/frontend/segurança.

**Registro de decisões (ADR simplificado)**
Sempre que tomarem uma decisão técnica importante (ex: "por que escolhemos JWT em vez de sessão"), registrem em 3-4 linhas: contexto, decisão, motivo. Isso vira material de estudo pra quem não participou da decisão e ajuda a não repetir debates.

---

## 9. Convenções de Trabalho (preencher em equipe)

- **Padrão de commits:** ex. `feat: adiciona carrinho de compras`, `fix: corrige validação de login`
- **Padrão de branches:** ex. `feature/nome-da-feature`, `fix/nome-do-bug`
- **Contrato de API:** documentem endpoints (rota, método, parâmetros, resposta esperada) num arquivo compartilhado antes de implementar — evita retrabalho entre backend e frontend.
- **Reuniões fixas:** definam dia/horário do daily e das cerimônias de sprint.

---

## 10. Checklist Rápido de Kickoff

- [ ] Definir duração do sprint
- [ ] Escolher e configurar a stack
- [ ] Criar repositório no GitHub com estrutura inicial (backend/ e frontend/)
- [ ] Criar board Kanban
- [ ] Escrever o backlog inicial da Fase 1
- [ ] Marcar a primeira Sprint Planning
- [ ] Definir convenções de commit/branch
