# MB Digital Tech | Auditoria de segurança, recuperação, qualidade e SEO

**Data:** 16/10/2026 (execução de tarefas no servidor e no Windows).
**Repositório:** MBdigitaltech. **Site:** https://mbdigitaltech.com.br.
**Natureza:** auditoria técnica interna; não equivale a certificação, pen-test independente ou garantia de ausência de falhas.

## Auditoria de segurança (OWASP ASVS como referência)

| Controle | Evidência | Resultado |
|---|---|---|
| Identidade e autorização | Site público de contato; sem contas, sessões de usuários nem operações administrativas expostas | Não se aplica autenticação nos formulários anônimos |
| Isolamento | Contêiner apenas nas redes `nexora_data_mb` e `nexora_edge_mb`; conexão PostgreSQL usa usuário `mb_digital_tech_app` e banco `mb_digital_tech` | Aprovado para este escopo |
| SQL injection | Inserções de lead e evento usam parâmetros vinculados ($1...$n) em vez de interpolação | Aprovado nos fluxos examinados |
| Validação e tamanho de entrada | Corpo JSON em streaming com máximo real de 20 KB nos formulários e 1 KB em telemetria; arrays, tipos inesperados e JSON inválido rejeitados | Aprovado |
| Avaliações | Nota obrigatoriamente inteira entre 1 e 5; texto, identidade, e-mail e consentimento validados | Aprovado |
| Abuso de formulários | Limite por IP/endpoint, HTTP 429 e `Retry-After`; testes de saturação controlados em staging | Aprovado com ressalva: contador em memória por instância |
| Cabeçalhos e navegador | TLS 1.3, HSTS, nosniff, frame protection, Permissions-Policy e CSP com `object-src 'none'`, `frame-ancestors 'none'`, `base-uri 'self'` e `form-action 'self'` | Aprovado nos controles medidos |
| Execução de scripts | CSP testada em Chrome desktop/mobile sem violações observadas | Parcial: usa `script-src 'unsafe-inline'`; avaliar nonce/hash futuramente |
| CSRF | Endpoints públicos anônimos não dependem de cookie de autenticação; não há ação privilegiada protegida por cookie | Risco reduzido neste modelo; monitorar abuso entre origens |
| Upload, SSRF e sessão | Não há upload de usuários nem URL de destino controlada pelo visitante nos endpoints inspecionados; sem sessões públicas | Sem vetor direto identificado no escopo |
| Segredos e dependências | Quality Lab passou verificador de segredos; `npm audit --omit=dev` sem vulnerabilidades conhecidas | Aprovado na data da execução |

**Limites:** mecanismos em memória não são rate limit distribuído; escalar para múltiplas réplicas exige proteção compartilhada ou no gateway. O Caddy deve remover cabeçalhos `X-Forwarded-For` enviados por origens não confiáveis. Testes internos não substituem auditoria externa especializada.

## Testes reais e evidências

- Site publicado: **61/61 verificações E2E** aprovadas (telas, menus, terminal interativo, links, APIs negativas, metadados e assets).
- Novo teste de segurança HTTP em staging: **25 verificações aprovadas**, incluindo status 400/413/415/429 e CSP.
- Testes unitários: **8 aprovados**, cobrindo catálogo, links de SEO, JSON malformado, tamanho, mídia e limites de IP.
- Design Lab: **40/40 verificações** em staging e na versão pública após a reformulação de design; logo e terminal preservados.
- Code Auditor: **39 arquivos examinados, nenhum achado heurístico** no relatório.
- Lint, TypeScript, build e auditoria de dependências: aprovados após as correções.
- Medidas históricas do teste local: 36 requisições com concorrência 4, p50 16 ms, p95 29 ms. Não são garantia de Web Vitals ou carga pública.
- Quality Lab: usar o relatório mais recente em `C:\Users\RefreshMeat\AI-Tools\jarvis\quality-lab\reports` para status formal de cada gate.

## Recuperação e infraestrutura

- Backup de e-mails no Nexora: timer systemd `mb-mail-backup.timer` ativo.
- Backup externo no PC: espelho criptografado DPAPI de mensagens e orçamentos.
- **Ensaio de restauração sem afetar produção:** cópia de e-mail descriptografada e arquivo TAR.GZ inspecionado (14 membros); cópia de orçamentos descriptografada, GZIP/JSON validado e contagem reconciliada (1 registro no snapshot utilizado).
- **Rollback testado sem alterar o DNS ou gateway:** versão anterior do Docker foi iniciada, respondeu à requisição da homepage e foi interrompida; gateway permaneceu apontando para a versão ativa.
- Não foi feito um restabelecimento completo da VPS ou restauração efetiva sobre banco de produção, pois causaria risco desnecessário. Recuperação do DPAPI depende do Windows/usuário que criptografou os arquivos.

## SEO após a revisão de design

- Auditoria automatizada de **20 URLs** do sitemap: **zero problemas técnicos**, zero títulos duplicados.
- Canonicals consistentes, descrições, headings e rotas de serviços preservados. HTTPS, redirecionamento de `www` e `robots.txt` válidos.
- CTAs nas páginas comerciais permanecem acessíveis.
- **Conclusão:** não é necessário reescrever títulos, URLs ou conteúdo só por causa da atualização visual. Preservar o que já está publicado e indexado evita regressão.
- **Limitação:** a conta conectada do GSC Wizard retornou assinatura inativa. Esta auditoria não atesta cobertura real de indexação, rankings, cliques, impressões ou Web Vitals de campo. Essas medições exigem acesso ao Search Console ou dados RUM.

## Riscos residuais e próximos cuidados

1. Pentest externo independente ou revisão especializada de OWASP ASVS: **não executado**; não declarar invulnerabilidade.
2. Rate limiting compartilhado na borda, caso o site tenha múltiplas instâncias.
3. CSP com nonce/hash se for desejado eliminar a permissão a scripts inline.
4. Exercício isolado de recuperação completa da VPS e cópia externa adicional independente do PC.
5. Acompanhamento da indexação real e resultados de buscas no Search Console; não refazer SEO sem dados.
6. BIMI certificado para foto de remetente do Gmail, caso seja objetivo comercial.

**Decisão técnica:** permitir publicação de correções após build, E2E e smoke público. Manter cautela nas afirmações de segurança e em testes não realizados.
