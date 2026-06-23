/**
 * NATURE'S APOTHECARY — Members Area Data
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "L'Apothicaire de la Nature", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question sur l'accès au cours (L'Apothicaire de la Nature)",
        emailBodyTemplate: "Bonjour l'équipe support ! Je souhaite obtenir de l'aide concernant mon espace membres de L'Apothicaire de la Nature.%0A%0AMon nom est : ______.",

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
            title: "Manuel de l'Apothicaire de la Nature",
            description: "Le guide complet pour créer votre propre herboristerie à la maison. Apprenez quelles plantes utiliser, quelles recettes fonctionnent vraiment et comment les préparer étape par étape.",
            badgeText: "LIVRE PRINCIPAL",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Méthodes de préparation adaptées aux débutants",
                "Guides des plantes & ingrédients de cuisine",
                "Recettes à base de plantes étape par étape"
            ],
            downloadUrl: "materials/natures_apothecary_handbook.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Télécharger le livre principal"
        },
        {
            id: "b2",
            title: "Le pouvoir guérisseur des plantes",
            description: "Découvrez les propriétés thérapeutiques des plantes médicinales courantes et apprenez à les utiliser en toute sécurité pour le bien-être quotidien, les tisanes apaisantes et les soins à domicile.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Profils médicinaux de plus de 20 plantes",
                "Consignes de sécurité & dosage",
                "Applications thérapeutiques traditionnelles"
            ],
            downloadUrl: "materials/healing_power_of_herbs.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Télécharger le Bonus #1"
        },
        {
            id: "b3",
            title: "Remèdes inspirés de Barbara O'Neill",
            description: "Inspiré des remèdes traditionnels et des pratiques de bien-être naturel, ce guide vous aide à mener une vie plus saine et sans produits chimiques grâce aux thérapies naturelles.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Remèdes naturels traditionnels",
                "Conseils pour une vie sans produits chimiques",
                "Pratiques inspirées de Barbara O'Neill"
            ],
            downloadUrl: "materials/barbara_oneill_inspired_remedies.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Télécharger le Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
