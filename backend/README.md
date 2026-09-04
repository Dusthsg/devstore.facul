# Backend — DevStore API

## Como rodar

_A preencher pelo time conforme a stack escolhida (instalação de dependências, comando para subir o servidor, etc.)_

## Estrutura

```
src/
├── config/         → configuração de banco, variáveis de ambiente
├── controllers/     → recebe requisição HTTP e devolve resposta
├── services/         → regras de negócio (o "miolo" da aplicação)
├── models/            → schemas/modelos de dados
├── routes/             → define os endpoints (ex: /produtos, /auth)
├── middlewares/         → validações intermediárias (autenticação, logs, etc.)
└── app.js                → arquivo principal que sobe o servidor
```

**Fluxo típico de uma requisição:**
`rota → middleware (ex: autenticação) → controller → service → model/banco → resposta`

## Contrato de API

Documentem aqui (ou em arquivo separado) cada endpoint conforme for criado:

```
POST /auth/login
Body: { email, senha }
Resposta: { token, usuario }
```

Isso evita retrabalho entre backend e frontend — combinem o contrato antes de implementar.

## Guias de referência

- Node.js: https://nodejs.org/pt/docs
- Express: https://expressjs.com/pt-br/
- Prisma (se for usar ORM): https://www.prisma.io/docs
- JWT: https://jwt.io/introduction
