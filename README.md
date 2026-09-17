# MB Digital Tech

Site institucional e comercial da MB Digital Tech.

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS próprio
- Route Handlers do Next.js
- Resend para envio transacional
- GitHub Actions para lint e build

## Desenvolvimento local

```bash
npm install
npm run dev
```

A aplicação abre em `http://localhost:3000`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

- `NEXT_PUBLIC_SITE_URL`
- `RESEND_API_KEY`
- `RESEND_FROM`
- `CONTACT_EMAIL`

Sem essas variáveis, o site continua carregando, mas os endpoints de orçamento e avaliações retornam que o envio não está configurado.

## Rotas principais

- `/` — Home
- `/projetos` — portfólio/cases
- `/orcamento` — briefing comercial
- `/avaliar` — envio de avaliações
- `/cliente` — prévia da futura área do cliente
- `/privacidade` — política de privacidade
- `/termos` — termos de uso

## Qualidade

O workflow `.github/workflows/ci.yml` executa instalação, lint e build em cada push.

## Produção

Antes do deploy público:

1. definir o domínio final;
2. configurar `NEXT_PUBLIC_SITE_URL`;
3. validar o domínio remetente no Resend;
4. preencher `RESEND_API_KEY`, `RESEND_FROM` e `CONTACT_EMAIL` no ambiente de produção;
5. publicar em uma hospedagem compatível com Next.js.

A logo oficial aprovada está em `public/mb-digital-tech-logo.png` e deve ser preservada sem redesenho.
