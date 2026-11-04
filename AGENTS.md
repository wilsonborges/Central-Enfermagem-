# Instruções do projeto — Central de Enfermagem

## Objetivo
Manter e evoluir um PWA brasileiro dedicado à escala de plantões, otimizado para iPhone. Interface minimalista em português, responsiva e com modo claro/escuro.

## Fonte de verdade
Repositório: `wilsonborges/Central-Enfermagem-`. Branch principal: `main`.
Publicação: GitHub Pages a partir de `main` / `(root)`.
Endereço esperado: https://wilsonborges.github.io/Central-Enfermagem-/

## Estrutura existente
- `index.html`: interface, estilos CSS e lógica JavaScript da escala.
- `manifest.webmanifest`: metadados de instalação do PWA.
- `sw.js`: service worker e cache offline.
- `icon.svg`: ícone.
- `README.md`: arquivo original do proprietário; preservar conteúdo existente.
- `docs/CODEX_HANDOFF.md`: contexto, backlog e checklist.

## Instruções obrigatórias
1. Não apagar nem sobrescrever funcionalidades existentes sem solicitação explícita.
2. Preservar GitHub Pages, caminhos relativos, manifesto, service worker e uso offline.
3. Não introduzir serviços externos, bibliotecas remotas, analytics, rastreadores ou armazenamento de dados clínicos de pacientes sem autorização expressa.
4. Nunca tratar protótipo educacional como ferramenta clinicamente validada. Toda calculadora deve ter testes de limites, unidades, regras especiais, fonte, versão e data de revisão antes de uso assistencial.
5. NEWS2: observar regras completas de saturação escala 1/2, oxigênio, ACVPU, pontuação isolada 3 e critérios de escalonamento. Escala 2 exige indicação clínica específica. Não emitir condutas automáticas como substitutas dos protocolos.
6. Preservar design limpo, navegação por toque, acessibilidade, contraste e português brasileiro.
7. Evitar regressões: antes de concluir, testar cadastro/edição de plantões, trocas, repetição, unidades, filtros, backup/importação, os modos claro/escuro, instalação e funcionamento offline.
8. Sempre fornecer resumo das alterações, testes executados, riscos e limitações. Preferir alterações revisáveis em branch/pull request antes de unir à `main`.
9. Não armazenar informações identificáveis de pacientes. Não incluir formulários para dados sensíveis sem definição de segurança institucional e autorização apropriada.
10. Ao modificar assets/cache, atualizar a versão de cache do service worker e validar atualização do PWA.

## Trabalho inicial recomendado
- Auditar fórmulas e resultados das calculadoras existentes, criando testes automatizados.
- Melhorar os metadados/ícones de instalação para iOS e revisar comportamento offline.
- Separar HTML/CSS/JS modularmente sem alterar comportamento.
- Criar novo layout com base em aprovação visual do proprietário.
- Somente depois adicionar Braden, Morse, qSOFA, protocolos e outras funcionalidades.

## Preferências do proprietário
O proprietário é enfermeiro e pede mudanças incrementais, com arquivos prontos e mínima necessidade de edição manual. Explicar decisões em linguagem acessível e apresentar riscos clínicos com clareza.

## Escopo atual autorizado (04/11/2026)
O proprietário solicitou explicitamente remover todas as calculadoras e abrir diretamente na escala. Não reintroduzir calculadoras ou o menu inicial sem solicitação. Tema com apenas ícones ☀️ e 🌑 na interface; preservar nomes acessíveis para leitores de tela.

## Publicação autorizada pelo proprietário
Toda mudança solicitada deve ser implementada, verificada e publicada automaticamente no GitHub Pages. Pedidos de opinião ou sugestão não autorizam alterações. Uma instrução específica para não publicar prevalece sobre esta preferência.
