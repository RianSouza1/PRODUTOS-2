/**
 * NATURE'S APOTHECARY — Members Area Data
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "A Botica da Natureza", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Dúvida sobre o acesso ao curso (A Botica da Natureza)",
        emailBodyTemplate: "Olá equipa de suporte! Gostaria de obter ajuda com a minha área de membros da Botica da Natureza.%0A%0AO meu nome é: ______.",

        // Mostrar ícone de "? Ajuda" flutuante em todas as telas
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VÍDEOS (Video Course) - Ocultado ou Vazio se não houver vídeos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. LIVROS (E-books e PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Manual da Botica da Natureza",
            description: "O guia completo para construir a sua própria botica natural em casa. Aprenda quais as ervas a usar, quais as receitas que realmente funcionam e como prepará-las passo a passo.",
            badgeText: "LIVRO PRINCIPAL",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Métodos de preparação simples para principiantes",
                "Guias de ervas e ingredientes de cozinha",
                "Receitas de ervas passo a passo"
            ],
            downloadUrl: "materials/natures_apothecary_handbook.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Descarregar Livro Principal"
        },
        {
            id: "b2",
            title: "O poder curativo das plantas",
            description: "Descubra as propriedades terapêuticas das plantas medicinais comuns e aprenda a utilizá-las de forma segura para o bem-estar diário, chás calmantes e cuidados em casa.",
            badgeText: "BÓNUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Perfis medicinais de mais de 20 plantas",
                "Diretrizes de segurança e dosagem",
                "Aplicações de cura tradicionais"
            ],
            downloadUrl: "materials/healing_power_of_herbs.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Descarregar Bónus #1"
        },
        {
            id: "b3",
            title: "Remédios inspirados em Barbara O'Neill",
            description: "Inspirado em remédios tradicionais e práticas de bem-estar natural, este guia ajuda-o a levar uma vida mais saudável e livre de químicos recorrendo a terapias naturais.",
            badgeText: "BÓNUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Remédios naturais tradicionais",
                "Conselhos para uma vida sem químicos",
                "Práticas inspiradas em Barbara O'Neill"
            ],
            downloadUrl: "materials/barbara_oneill_inspired_remedies.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Descarregar Bónus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
