# Como Contribuir

Guia rápido de convenções para manter o repositório organizado. Todo mundo segue isso — inclusive o coringa.

## Branches

Formato: `tipo/nome-curto-da-tarefa`

Tipos usados:
- `feature/` — nova funcionalidade (ex: `feature/carrinho-de-compras`)
- `fix/` — correção de bug (ex: `fix/erro-login`)
- `refactor/` — melhoria de código sem mudar comportamento
- `docs/` — mudanças só de documentação

Nunca commitar direto na branch principal (`main`). Sempre crie uma branch, abra um Pull Request e peça revisão.

## Commits

Formato: `tipo: descrição curta no imperativo`

Exemplos:
```
feat: adiciona listagem de produtos no dashboard
fix: corrige validação de e-mail no cadastro
docs: atualiza README do backend
refactor: extrai lógica de cálculo de frete para service
test: adiciona teste para criação de pedido
```

Tipos: `feat`, `fix`, `docs`, `refactor`, `test`, `chore` (tarefas de manutenção, configs, etc.)

## Uso de IA (ChatGPT, Claude, Copilot, etc.)

Uso de IA é permitido, mas com uma regra que vale para todo o time: **quem abre o PR precisa saber explicar qualquer trecho do código, mesmo que a IA tenha gerado.**

Na prática, isso significa:

- Se alguém perguntar "por que você fez assim?" numa revisão de PR, você precisa saber responder — não vale "foi a IA que sugeriu".
- Você precisa conseguir editar aquele código sozinho se algo precisar mudar depois, sem reabrir a IA para reescrever do zero.
- Copiar e colar um bloco grande sem entender o que ele faz não é aceitável, mesmo que "funcione".

**Isso não é para desencorajar o uso da ferramenta** — é para garantir que o aprendizado aconteça de verdade. Use a IA para entender conceitos, gerar um primeiro rascunho, tirar dúvida de sintaxe, ou revisar seu próprio código. Só não deixe que ela pense no seu lugar.

**Na prática do PR:** quem revisa pode perguntar sobre qualquer linha do código, e quem abriu o PR precisa saber responder. Se não souber explicar, o PR não é aprovado — não porque o código está errado, mas porque a pessoa ainda não entendeu o que está entregando.

## Pull Requests

1. Abra o PR usando o template automático (`.github/PULL_REQUEST_TEMPLATE.md`).
2. Preencha o que foi feito e como testar.
3. Peça revisão de pelo menos 1 pessoa antes de mesclar (regra de XP: nada sobe sem revisão).
4. Só faça merge depois da aprovação.

## Antes de abrir o PR, confira

- [ ] O código roda localmente sem erros
- [ ] Não tem `console.log` ou código de teste esquecido
- [ ] Se adicionou variável de ambiente nova, atualizou o `.env.example`
- [ ] Se mudou um endpoint da API, avisou o time de frontend
- [ ] Eu sei explicar qualquer trecho deste código, mesmo o que foi gerado com ajuda de IA

## Dúvidas de metodologia

Consulte o [guia de metodologia do projeto](./docs/guia-projeto-loja-online.md) para entender fases, papéis, Scrum e XP.
