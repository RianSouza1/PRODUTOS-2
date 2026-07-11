/**
 * PHARMACIE NATURELLE — Espace Membres (Français)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Pharmacie Naturelle",

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question sur l'accès au cours (Pharmacie Naturelle)",
        emailBodyTemplate: "Bonjour, équipe d'assistance ! Je souhaite obtenir de l'aide pour mon espace membres de la Pharmacie Naturelle.\n\nMon nom est : ______.",

        // Show floating "?" help button on all screens
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VIDEOS (Video course) — empty if no videos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. BOOKS (E-books and PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Pharmacie Naturelle — Guide Complet",
            description: "Le guide principal pour créer votre propre pharmacie naturelle à la maison. Apprenez quelles plantes utiliser, quelles recettes fonctionnent vraiment et comment les préparer étape par étape, sans avoir besoin d'être expert.",
            badgeText: "LIVRE PRINCIPAL",
            badgeColor: "#10B981",
            features: [
                "Méthodes de préparation simples pour les débutants",
                "Guides sur les plantes et les ingrédients de cuisine",
                "Recettes de plantes médicinales étape par étape pour les maux courants"
            ],
            downloadUrl: "materials/G-FREE-1-FR.pdf",
            coverImage: "assets/covers/gf_IMG1_fr.png",
            buttonText: "Télécharger le livre principal"
        },
        {
            id: "b2",
            title: "Remèdes Maison Guérisseurs de la Cuisine",
            description: "Découvrez les propriétés thérapeutiques des plantes médicinales courantes et apprenez à les utiliser en toute sécurité pour le bien-être quotidien : tisanes apaisantes, sirops, onguents et bien plus encore.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B",
            features: [
                "Profils médicinaux de plus de 20 plantes",
                "Directives de sécurité et posologie",
                "Applications thérapeutiques traditionnelles"
            ],
            downloadUrl: "materials/G-FREE-2-FR.pdf",
            coverImage: "assets/covers/gf_IMG1_fr.png",
            buttonText: "Télécharger le bonus #1"
        },
        {
            id: "b3",
            title: "Tisanes Médicinales Guérisseuses",
            description: "Apprenez à créer des infusions d'herbes apaisantes pour le sommeil, la digestion, la relaxation, la santé de la gorge, le soutien immunitaire et le bien-être quotidien avec des ingrédients simples.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6",
            features: [
                "Mélanges pour le sommeil, la digestion et la relaxation",
                "Recettes avec du miel, du gingembre, de la menthe et de la camomille",
                "Étape par étape pour préparer à la maison"
            ],
            downloadUrl: "materials/G-FREE-3-FR.pdf",
            coverImage: "assets/covers/gf_IMG1_fr.png",
            buttonText: "Télécharger le bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v1-fr