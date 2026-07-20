/**
 * Conservation & Stockage des Aliments — Données de l'Espace Membre (Français)
 */

const APP_DATA = {
    config: {
        brandName: "Conservation & Stockage",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question sur l'accès (Conservation & Stockage)",
        emailBodyTemplate: "Bonjour l'équipe de support. J'aimerais obtenir de l'aide concernant mon accès à l'espace membre Conservation & Stockage.\n\nMon nom est : ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Le guide complet de conservation et de stockage 2026",
            description: "Guide pratique pour débutants sur la stérilisation au bain-marie, la mise en conserve sous pression, les aliments fermentés, les confitures, les sauces, le stockage sûr et la conservation des aliments à la maison.",
            badgeText: "Livre Principal",
            badgeColor: "#C2593F",
            features: [
                "Guides pour débutants : bain-marie et mise en conserve sous pression",
                "Pratiques culinaires sûres et températures de stockage",
                "Méthodes étape par étape pour confitures, sauces et légumes"
            ],
            downloadUrl: "materials/Canning-1-FR.pdf",
            coverImage: "assets/covers/can_IMG1_fr.png",
            buttonText: "Télécharger le livre principal"
        },
        {
            id: "b2",
            title: "Guide de cuisine à longue durée de conservation",
            description: "Mélanges secs faits maison, bocaux avec portions prêtes à l'emploi, soupes, mélanges de desserts, mélanges d'épices et ingrédients de base pratiques pour le garde-manger du quotidien.",
            badgeText: "Bonus #1",
            badgeColor: "#D97706",
            features: [
                "Mélanges secs maison et bocaux prêts à l'emploi",
                "Soupes déshydratées, mélanges pour desserts et épices",
                "Pas besoin d'équipement de stérilisation lourd"
            ],
            downloadUrl: "materials/Canning-2-FR.pdf",
            coverImage: "assets/covers/can_IMG1_fr.png",
            buttonText: "Télécharger le bonus #1"
        },
        {
            id: "b3",
            title: "Guide du débutant à la fermentation maison",
            description: "Légumes fermentés simples, choucroute, pickles fermentés, recettes de style kimchi, saumure, épices, boissons fermentées, dépannage et méthodes sûres en cuisine.",
            badgeText: "Bonus #2",
            badgeColor: "#5A7A56",
            features: [
                "Légumes fermentés, choucroute et recettes de kimchi",
                "Dosages de saumure, épices et boissons fermentées",
                "Résolution des problèmes et méthodes traditionnelles sûres"
            ],
            downloadUrl: "materials/Canning-3-FR.pdf",
            coverImage: "assets/covers/can_IMG1_fr.png",
            buttonText: "Télécharger le bonus #2"
        }
    ],

    otherProducts: []
};