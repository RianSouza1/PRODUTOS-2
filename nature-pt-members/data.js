/**
 * A FARMÁCIA NATURAL — Members Area Data (Português)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "A Farmácia Natural", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Dúvida sobre o acesso ao curso (A Farmácia Natural)",
        emailBodyTemplate: "Olá equipa de suporte! Gostaria de receber ajuda com a minha área de membros de A Farmácia Natural.%0A%0AO meu nome é: ______.",

        // Mostrar ícone de "? Ajuda" flutuante em todas as telas
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VÍDEOS (Curso em vídeo) — vazio se não houver vídeos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. LIVROS (E-books e PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "A Farmácia Natural — Guia Completo",
            description: "O guia principal para construir a sua própria farmácia natural em casa. Aprenda quais as ervas a usar, quais as receitas que realmente funcionam e como prepará-las passo a passo, sem necessidade de ser um especialista.",
            badgeText: "LIVRO PRINCIPAL",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Métodos de preparação simples para principiantes",
                "Guias de ervas e ingredientes de cozinha",
                "Receitas de ervas passo a passo para queixas comuns"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-PT.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Descarregar Livro Principal"
        },
        {
            id: "b2",
            title: "O Poder Curativo das Ervas",
            description: "Descubra as propriedades terapêuticas das ervas medicinais mais comuns e aprenda a usá-las de forma segura para o bem-estar diário: chás calmantes, xaropes, pomadas e muito mais.",
            badgeText: "BÓNUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Perfis medicinais de mais de 20 ervas",
                "Orientações de segurança e dosagem",
                "Aplicações curativas tradicionais"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-PT.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Descarregar Bónus #1"
        },
        {
            id: "b3",
            title: "Guia de Infusões Curativas",
            description: "Aprenda a criar infusões de ervas calmantes para o sono, digestão, relaxamento, bem-estar da garganta, imunidade e bem-estar diário com ingredientes simples.",
            badgeText: "BÓNUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Misturas para o sono, digestão e relaxamento",
                "Receitas com mel, gengibre, hortelã e camomilla",
                "Passo a passo para preparar em casa"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-PT.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Descarregar Bónus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
