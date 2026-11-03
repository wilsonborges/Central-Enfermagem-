# Contexto para Codex — Central de Enfermagem

## Estado da migração
Projeto hospedado no GitHub, publicado pelo GitHub Pages e relatado pelo proprietário como funcional no iPhone.
Esta documentação foi adicionada para facilitar a continuação no Codex. **Não é** uma importação automática de conversa ou criação de ambiente Codex Cloud.

## Visão do produto
Aplicativo PWA de apoio educacional à enfermagem, para uso prioritário no iPhone, com eventual acesso no PC. O usuário atua em UPA e valoriza interface moderna, minimalista, rápida e leve. Uso offline e instalação como ícone do iPhone são requisitos fundamentais.

## Implementado no protótipo 0.1
- Página responsiva com menu de calculadoras.
- NEWS2 (parâmetros clínicos básicos e escore).
- Glasgow (E, V, M).
- Pressão arterial média (PAM).
- Gotejamento (mL/h e gotas/min).
- Botão de copiar resultados.
- Tema claro/escuro.
- Manifesto PWA, ícone SVG, service worker simples.
- Sem login, backend ou dados de pacientes.

## Atenção: limitações
- Fórmulas e interpretação clínica **ainda não passaram por revisão/validação independente**.
- A versão inicial é demonstrativa. Não usar para tomar decisões assistenciais sem conferir critérios e protocolo institucional.
- A estratégia atual de cache offline é básica; verificar instalação no iOS e atualização de conteúdo.
- Não há suíte automatizada de testes nem documentação por calculadora.
- Não há sincronização entre dispositivos.

## Prioridades
1. Auditoria clínica e técnica de NEWS2, Glasgow, PAM e gotejamento, com fontes oficiais e testes (valores normais, limites, inválidos).
2. Experiência mobile: desempenho, acessibilidade, contraste, edição de campos, busca, favoritos.
3. PWA: ícones PNG iOS adequados, cache versionado, atualização previsível, teste em Safari/iPhone.
4. Refatoração progressiva do arquivo único em componentes menores sem quebrar a publicação.
5. Adições futuras (dependem de especificação/validação): Braden, Morse, qSOFA, biblioteca de protocolos, calculadora de horários.
6. Fluxos de classificação de dengue somente com base no protocolo vigente do Ministério da Saúde e orientações locais; não automatizar decisões de encaminhamento sem revisão.

## Fluxo de trabalho sugerido
- Explorar o repositório e executar o protótipo.
- Criar uma branch de trabalho.
- Propor plano curto e mudanças incrementais.
- Implementar testes e executar verificações.
- Abrir pull request para revisão antes de publicar a `main`.
- Manter o `README.md` existente e documentar versões.

## Projeto
- Repositório: https://github.com/wilsonborges/Central-Enfermagem-
- Site: https://wilsonborges.github.io/Central-Enfermagem-/
- Branch de publicação: `main`, pasta `/(root)`.

## Primeiro pedido sugerido ao Codex
"Leia AGENTS.md e docs/CODEX_HANDOFF.md. Faça uma auditoria técnica e clínica do protótipo, com foco em segurança dos cálculos NEWS2, Glasgow, PAM e gotejamento, compatibilidade offline no iPhone e testes automatizados. Trabalhe em branch separada e não altere o visual ou publique mudanças sem apresentar relatório e permitir revisão."
