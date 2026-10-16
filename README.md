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

Copie `config/env.template` para `.env.local` e preencha, sem versionar senhas:

- `NEXT_PUBLIC_SITE_URL`
- `RESEND_API_KEY`
- `RESEND_FROM`
- `CONTACT_EMAIL`
- `MB_MAIL_PASSWORD` (senha da caixa para avisos SMTP autenticados)

O servidor recebe orçamentos no banco e envia os avisos comerciais pela caixa autenticada da MB. O Resend é opcional como contingência, mas os alertas exigem um transporte de e-mail funcional.

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

## Publicação pela Nexora (14/10/2026)

- Prévia pública: https://mbdigitaltech.46-225-114-87.sslip.io/
- Hospedagem: contêiner Next.js separado no Hetzner, gateway HTTPS Caddy e banco próprio `mb_digital_tech`, administrados pela infraestrutura Nexora.
- Orçamentos: salvos em `public.project_briefings`, mesmo sem e-mail transacional configurado.
- Eventos de WhatsApp: `public.contact_events`, separados por origem do CTA. O link funciona independentemente da gravação da métrica.
- Telefone comercial: (21) 98577-3165 (`wa.me/5521985773165`).
- Documento de auditoria, resultados e pendências: `SITE_AUDIT_REPORT_2026-10-14.md`.
- Atenção ao deploy: o Caddyfile é montado como arquivo somente leitura. Depois de substituir o arquivo no host, é necessário recriar o serviço `gateway` do Compose para remontar o novo inode; validar o Caddyfile e preservar as rotas dos demais projetos.
