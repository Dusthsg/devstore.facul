# Frontend — DevStore

## Como rodar

_A preencher pelo time conforme a stack escolhida (instalação de dependências, comando para subir o servidor de desenvolvimento, etc.)_

> Importante: o backend precisa estar rodando para o frontend conseguir consumir a API.

## Estrutura

```
src/
├── assets/       → imagens, fontes, estilos globais
├── components/    → componentes reutilizáveis (Botão, Card, Input...)
├── pages/          → telas da aplicação (Home, Login, Dashboard...)
├── services/        → configuração de chamadas à API (axios/fetch)
├── utils/             → funções utilitárias (formatação de data, moeda, etc.)
├── App.jsx              → componente principal e rotas
└── main.jsx               → ponto de entrada da aplicação
```

## Convenção de componentes

- 1 componente por arquivo, nome do arquivo = nome do componente (`ProductCard.jsx`).
- Componentes de UI genéricos (botão, input) ficam em `components/`.
- Componentes específicos de uma tela podem ficar dentro da própria pasta da página, se preferirem.

## Guias de referência

- React: https://pt-br.react.dev/
- Vite: https://vitejs.dev/guide/
- Tailwind CSS: https://tailwindcss.com/docs
- React Router: https://reactrouter.com/
