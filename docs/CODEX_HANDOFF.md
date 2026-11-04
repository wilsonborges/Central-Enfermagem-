# Estado atual — Minha Escala

Atualizado em 04/11/2026 por solicitação do proprietário: o PWA agora é dedicado à escala de plantões. As calculadoras foram removidas, incluindo interface e lógica. O aplicativo abre diretamente no calendário, sem menu inicial.

Preservar plantões e os nomes das chaves de armazenamento existentes (`central-enfermagem-shifts-v1`, unidades, setores e preferência de tema). Não migrar nem apagar os dados ao atualizar.

Tema: botões discretos ☀️ e 🌑, com nomes acessíveis e preferência persistida. A preferência automática anterior continua respeitada até uma escolha explícita. Manter logotipos com contraste adequado em ambos os temas.

Preservar cadastro/edição/exclusão, repetição 12×36, marcação de troca, filtros, backup/importação, ícones PNG e funcionamento offline. Publicação pelo GitHub Pages em `main` / raiz.

## Aparência da agenda
Cabeçalho compacto com logotipos adaptados aos temas. Formulário em `#shiftEditor`, recolhido por padrão; abrir ao selecionar uma data ou editar um plantão e recolher após salvar. Cartões destacam horários, unidade e observações; ações em menu nativo `details` com ícone ⋯. O gesto antigo de deslizar cartões foi substituído por esse menu. Manter alvos de toque, foco visível e contraste no modo escuro.
