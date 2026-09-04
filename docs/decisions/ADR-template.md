# ADR-000: Título curto da decisão

> Copie este arquivo para `docs/decisions/ADR-00X-titulo-curto.md` sempre que o time tomar uma decisão técnica que valha a pena registrar (escolha de biblioteca, padrão de arquitetura, troca de abordagem no meio do projeto). Numerar sequencialmente (001, 002, ...). 3-4 linhas por seção já é suficiente — o objetivo é registrar o raciocínio, não escrever um artigo.

**Data:** AAAA-MM-DD
**Status:** proposto / aceito / substituído por ADR-00X

## Contexto

Qual problema ou dúvida motivou essa decisão? O que estava em jogo?

## Decisão

O que foi decidido, de forma direta.

## Alternativas consideradas

O que mais foi cogitado e não foi escolhido (pode ser só uma lista curta).

## Consequências

O que essa decisão facilita, e o que ela custa ou limita daqui pra frente.

---

## Exemplo preenchido (apagar ao usar o template)

**Data:** 2026-09-10
**Status:** aceito

### Contexto
Precisávamos escolher como o backend acessa o banco de dados — SQL puro ou um ORM.

### Decisão
Usar Prisma como ORM.

### Alternativas consideradas
- SQL puro com `pg` — mais controle, mas mais verboso para quem é iniciante.
- Sequelize — outra opção de ORM, mas com menos documentação em português.

### Consequências
Facilita escrever queries e gerar migrations sem escrever SQL manualmente. Custo: mais uma ferramenta pra equipe aprender, e menos controle fino sobre queries muito específicas se precisarmos otimizar depois.
