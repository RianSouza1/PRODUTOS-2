/**
 * LA PHARMACIE NATURELLE — Members Area Data (Français)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "La Pharmacie Naturelle", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question concernant l'accès au cours (La Pharmacie Naturelle)",
        emailBodyTemplate: "Bonjour l'équipe d'assistance ! Je souhaite recevoir de l'aide concernant mon espace membres de La Pharmacie Naturelle.%0A%0AMon nom est : ______.",

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
            title: "La Pharmacie Naturelle — Guide Complet",
            description: "Le guide principal pour créer votre propre pharmacie naturelle à la maison. Apprenez quelles plantes utiliser, quelles recettes fonctionnent réellement et comment les préparer étape par étape, sans avoir besoin d'être un expert.",
            badgeText: "LIVRE PRINCIPAL",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Méthodes de préparation simples pour débutants",
                "Guides des plantes et ingrédients de cuisine",
                "Recettes à base de plantes étape par étape pour les affections courantes"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-FR.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Télécharger le Livre Principal"
        },
        {
            id: "b2",
            title: "Le Pouvoir Guérisseur des Plantes",
            description: "Découvrez les propriétés thérapeutiques des plantes médicinales les plus courantes et apprenez à les utiliser en toute sécurité pour votre bien-être quotidien : tisanes apaisantes, sirops, onguents et plus encore.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Profils médicinaux de plus de 20 plantes",
                "Consignes de sécurité et dosage",
                "Applications thérapeutiques traditionnelles"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-FR.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Télécharger le Bonus #1"
        },
        {
            id: "b3",
            title: "Guide des Infusions Apaisantes",
            description: "Apprenez à préparer des infusions à base de plantes apaisantes pour le sommeil, la digestion, la relaxation, le soulagement de la gorge, l'immunité et le bien-être quotidien avec des ingrédients simples.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Mélanges pour le sommeil, la digestion et la relaxation",
                "Recettes à base de miel, gingembre, menthe et camomille",
                "Étape par étape pour préparer à la maison"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-FR.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Télécharger le Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
