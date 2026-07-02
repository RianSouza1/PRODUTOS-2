/**
 * LA FARMACIA NATURAL — Members Area Data (Español)
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
        emailBodyTemplate: "Hello support team! I would like to get help with my Nature's Apothecary members area.%0A%0AMy name is: ______.",

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
            title: "Nature's Apothecary — Complete Guide",
            description: "The main guide to building your own natural pharmacy at home. Learn which herbs to use, which recipes actually work and how to prepare them step by step, without needing to be an expert.",
            badgeText: "MAIN BOOK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Simple preparation methods for beginners",
                "Guides to herbs and kitchen ingredients",
                "Step by step herbal recipes for common ailments"
            ],
            downloadUrl: "materials/la_farmacia_natural_guia.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Download Main Book"
        },
        {
            id: "b2",
            title: "Healing Kitchen Remedies",
            description: "Discover the therapeutic properties of common medicinal herbs and learn to use them safely for daily well-being: soothing teas, syrups, salves and more.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medicinal profiles of over 20 herbs",
                "Safety guidelines and dosing",
                "Traditional healing applications"
            ],
            downloadUrl: "materials/el_poder_curativo_de_las_hierbas.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Download Bonus #1"
        },
        {
            id: "b3",
            title: "Healing Herbal Teas",
            description: "Learn to create soothing herbal infusions for sleep, digestion, relaxation, throat wellness, immunity and daily well-being with simple ingredients.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Blends for sleep, digestion and relaxation",
                "Recipes with honey, ginger, mint and chamomile",
                "Step by step to prepare at home"
            ],
            downloadUrl: "materials/guia_infusiones_curativas.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Download Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
