# Definition of Done (DoD)

> O que precisa ser verdade para uma tarefa ser considerada **realmente concluída** — não só "funciona na minha máquina". Usem isso ao mover um card para "Concluído" no board e durante a Sprint Review.

## Para qualquer tarefa

- [ ] O código faz o que a issue/história pedia (critérios de aceite atendidos)
- [ ] Rodei localmente e testei manualmente que funciona
- [ ] Não deixei `console.log`, comentário de debug ou código morto
- [ ] Abri Pull Request com descrição do que foi feito e como testar
- [ ] Pelo menos 1 pessoa revisou e aprovou o PR
- [ ] Fiz o merge sem conflitos pendentes
- [ ] Se mudei uma variável de ambiente, atualizei o `.env.example`
- [ ] Sei explicar qualquer trecho do código, incluindo o que foi gerado com ajuda de IA (ver [CONTRIBUTING.md](../CONTRIBUTING.md))

## Se a tarefa envolve backend (API)

- [ ] O endpoint está documentado no contrato de API (`backend/README.md`)
- [ ] Testei os casos de erro, não só o caminho feliz (ex: e-mail duplicado, campo faltando)
- [ ] Rotas que exigem login/permissão estão de fato protegidas

## Se a tarefa envolve frontend

- [ ] A tela funciona tanto com dados reais quanto no caso "vazio" (ex: lista de produtos sem nenhum produto)
- [ ] Existe algum feedback visual de carregamento e de erro (não só o caminho de sucesso)
- [ ] Testei em pelo menos duas larguras de tela diferentes (celular e desktop)

## Se a tarefa envolve integração entre frontend e backend

- [ ] Avisei o outro time sobre qualquer mudança no contrato de API (endpoint, formato de resposta)
- [ ] Testei o fluxo ponta a ponta, não só cada lado isoladamente

---

**Regra geral:** se alguma dessas caixas não pode ser marcada, a tarefa não está pronta — ela volta para "Em Progresso" ou "Em Revisão", não é empurrada para "Concluído" só porque o prazo está apertado.
