# MB Digital Tech

Site institucional e futura plataforma de relacionamento com clientes da **MB Digital Tech**.

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS próprio
- GitHub Actions para lint e build

## Rodando localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

Para validar produção:

```bash
npm run lint
npm run build
npm run start
```

## Estrutura atual

- `/` — site institucional
- `/orcamento` — briefing interativo para novos projetos
- `/cliente` — prévia da futura área privada do cliente
- `MB_DIGITAL_TECH_PROJECT_MEMORY.md` — memória viva e fonte de contexto do projeto

## Fluxo atual de orçamento

O visitante pode estruturar um briefing com contato, tipo de projeto, estágio atual, faixa de investimento, prazo e descrição. O site gera um texto organizado, permite copiá-lo e prepara um e-mail provisório.

O canal comercial definitivo ainda não foi definido.

## Estado

Versão inicial em desenvolvimento. Autenticação, banco de dados, avaliações persistentes, cases reais, painel administrativo e integrações comerciais ainda não foram implementados.

A branch `main` possui CI para validar `npm run lint` e `npm run build` a cada alteração.

Antes de alterar decisões estruturais, consulte e atualize `MB_DIGITAL_TECH_PROJECT_MEMORY.md`.
