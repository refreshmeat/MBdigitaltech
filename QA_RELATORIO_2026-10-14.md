# Auditoria de lançamento — MB Digital Tech

Data dos testes: 14–15/10/2026. Site: https://mbdigitaltech.com.br

## Estado operacional
- Homepage, serviços, orçamento, HTTPS, favicon e navegação: aprovados.
- E2E Playwright na versão pública após implantação: **61/61 verificações aprovadas**, em seis tamanhos de tela.
- Sitemap: 20 URLs válidas; títulos, descriptions, canonicals, headings e páginas acessíveis.
- Links: 23 URLs internas diferentes testadas sem erros; 362 ocorrências de links verificadas.
- Next.js 16.4.1: build e lint passaram; dependências de produção com **zero vulnerabilidades** no `npm audit --omit=dev`.
- Cabeçalhos de segurança HTTP: HSTS, nosniff, Referrer-Policy, X-Frame-Options e Permissions-Policy.
- WhatsApp: links e número verificados em todos os tamanhos de tela.
- Formulário de orçamento: validação, persistência em PostgreSQL, emissão de aviso SMTP autenticado.
- Formulário de avaliação: validação e notificação SMTP autenticada.
- Ambos os envios retornaram `HTTP 200` e `delivery=smtp-auth`, e foram confirmados na pasta **Caixa de Entrada**, não no spam, por IMAP.
- Registros fictícios de orçamentos da QA foram removidos do banco após teste.
- Servidor de e-mail: SMTP, IMAP, STARTTLS e envio externo funcionando, antivazamento de relay aberto verificado.
- Backup diário do correio no servidor: systemd timer ativo, arquivo validado.
- Cópias fora da VPS no Windows: arquivos do correio e tabela de orçamentos criptografados com DPAPI; transferência e leitura de verificação realizadas; tarefa Windows executa no logon e diariamente, último resultado **0**.
- O site permanece hospedado no Nexora mesmo com o PC desligado; a cópia externa sincroniza apenas quando o computador está conectado.

## Pendências que exigem ação externa
- **Foto de remetente na caixa de entrada:** para exibição oficial em Gmail de forma consistente, a marca precisa de BIMI e certificado VMC ou CMC emitido por uma certificadora. Sem certificado, não é garantido. Não foi comprado nem configurado um certificado.
- **DMARC:** continua `v=DMARC1; p=none`. A sessão do Registro.br expirou e exige novo login para alterar DNS. Migrar gradualmente após conferir todas as origens válidas de envio, evitando rejeitar mensagens legítimas.
- **Resend:** existe uma chave antiga que já foi exibida em conversa anterior. Revogação exige confirmação explícita do responsável pelo serviço; não revogar sem substituir as credenciais nas rotas SMTP e confirmar envio.
- **Recuperação de desastres extrema:** o backup externo atual é um espelho no PC, não uma cópia continuamente sincronizada na nuvem. Uma cópia adicional em armazenamento cloud independente daria resiliência ainda maior.

## Notas
- A logo do site está servida corretamente como favicon. O Google recebeu a solicitação de novo rastreamento; a exibição do resultado depende do índice.
- Não há logo embutida nos corpos dos e-mails: o pedido é pela imagem do remetente na caixa de entrada.
- O projeto local e sua branch foram preservados. Todos os dados de produção continuam no Nexora isolado da aplicação.
