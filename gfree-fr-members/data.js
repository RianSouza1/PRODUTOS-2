/**
 * GLUTEN-FREE — Members Area Data (French)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Cuisine Sans Gluten",

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question concernant l'accès au cours (Cuisine Sans Gluten)",
        emailBodyTemplate: "Bonjour l'équipe d'assistance ! Je souhaite obtenir de l'aide concernant mon espace membre Cuisine Sans Gluten.\n\nMon nom est : ______.",

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
            title: "Cuisine simple sans gluten",
            description: "Des repas simples du quotidien pour débutants. Découvrez à quel point la cuisine sans gluten peut être simple et délicieuse grâce à des recettes pratiques, étape par étape.",
            badgeText: "LIVRE PRINCIPAL",
            badgeColor: "#10B981",
            features: [
                "Repas simples du quotidien pour débutants",
                "Recettes délicieuses et saines étape par étape",
                "Guide essentiel pour un mode de vie sans gluten"
            ],
            downloadUrl: "materials/G-FREE-1-FR.pdf",
            coverImage: "assets/covers/gf_IMG1_fr.png",
            buttonText: "Télécharger le livre principal"
        },
        {
            id: "b2",
            title: "Cuisine sans gluten au quotidien et comfort food",
            description: "Le meilleur du pain, des en-cas, des desserts et des plats réconfortants pour toute la famille. Apprenez à préparer du pain et des douceurs sans gluten moelleux et délicieux que tout le monde adorera.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B",
            features: [
                "Recettes de pain et d'en-cas sans gluten",
                "Desserts délicieux et plats familiaux préférés",
                "Astuces de cuisson pour des résultats parfaits à chaque fois"
            ],
            downloadUrl: "materials/G-FREE-2-FR.pdf",
            coverImage: "assets/covers/gf_IMG1_fr.png",
            buttonText: "Télécharger le bonus #1"
        },
        {
            id: "b3",
            title: "Plan de repas sans gluten sur 30 jours et liste de courses",
            description: "Des menus hebdomadaires simples, des listes de courses organisées et une aide précieuse pour la prparation des repas afin de rendre votre transition facile et sans stress.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6",
            features: [
                "Plan de repas complet sur 30 jours",
                "Listes de courses hebdomadaires organisées",
                "Conseils utiles pour préparer facilement vos repas"
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

// Force redeploy v2-fr