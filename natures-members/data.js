/**
 * NATURE'S APOTHECARY — Members Area Data
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Nature's Apothecary", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question about course access (Nature's Apothecary)",
        emailBodyTemplate: "Hello support team! I would like help with my Nature's Apothecary members area.%0A%0AMy name is: ______.",

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
            title: "Nature's Apothecary Handbook",
            description: "The complete guide to building your own natural apothecary at home. Learn which herbs to use, what recipes actually work, and how to prepare them step by step.",
            badgeText: "MAIN BOOK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Beginner-Friendly Preparation Methods",
                "Herbs & Kitchen Ingredients Guides",
                "Step-by-Step Herbal Recipes"
            ],
            downloadUrl: "materials/natures_apothecary_handbook.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Download Main Book"
        },
        {
            id: "b2",
            title: "The Healing Power of Herbs",
            description: "Unlock the therapeutic properties of common medicinal herbs and learn how to use them safely for everyday wellness, soothing teas, and home care.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medicinal Profiles of 20+ Herbs",
                "Safety Guidelines & Dosage",
                "Traditional Healing Applications"
            ],
            downloadUrl: "materials/healing_power_of_herbs.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Download Bonus #1"
        },
        {
            id: "b3",
            title: "Barbara O'Neill Inspired Remedies",
            description: "Inspired by traditional remedies and natural wellness practices, this guide helps you live a healthier, chemical-free life using natural therapies.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Traditional Natural Remedies",
                "Chemical-Free Living Tips",
                "Barbara O'Neill Inspired Practices"
            ],
            downloadUrl: "materials/barbara_oneill_inspired_remedies.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Download Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
