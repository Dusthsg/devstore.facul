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

## Dúvidas de metodologia

Consulte o [guia de metodologia do projeto](./docs/guia-projeto-loja-online.md) para entender fases, papéis, Scrum e XP.
