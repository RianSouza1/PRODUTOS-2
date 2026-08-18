/**
 * Menuiserie & Travail du Bois — Espace Membre (Français)
 */

const APP_DATA = {
    config: {
        brandName: "Menuiserie & Travail du Bois",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question d'accès (Menuiserie & Travail du Bois)",
        emailBodyTemplate: "Bonjour l'équipe support ! Je souhaite obtenir de l'aide concernant mon accès à l'espace membre pour Menuiserie & Travail du Bois.\n\nMon nom est : ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Woodworking for Beginners — Outils, coupes, assemblages et compétences fondamentales",
            description: "Ce livre s'adresse à tous ceux qui ont toujours rêvé de se lancer dans le travail du bois. Outils, coupes, assemblages et compétences fondamentales sans machines coûteuses.",
            badgeText: "GUIDE PRINCIPAL",
            badgeColor: "#D97706",
            features: [
                "Outils de base, coupes et assemblages du bois pour débutants",
                "Instructions étape par étape sans besoin d'un grand atelier équipé",
                "Conseils sur le choix des matériaux, la sécurité et la découpe propre"
            ],
            downloadUrl: "materials/WOOD-1-FR.pdf",
            coverImage: "assets/covers/wood_IMG1_fr.png",
            buttonText: "Télécharger le Guide Principal (Livre 1)"
        },
        {
            id: "b2",
            title: "La menuiserie simplifiée — 18 projets étape par étape",
            description: "18 projets de construction complets avec listes de mesures & de découpes exactes. Du porte-téléphone au chevalet d'atelier — assemblé étape par étape.",
            badgeText: "LIVRE DE PROJETS",
            badgeColor: "#2D6A4F",
            features: [
                "18 projets en bois complets avec listes de débit précises",
                "Plans de construction étape par étape du tréteau à l'étagère",
                "Manuel pratique directement sur l'établi pour une exécution immédiate"
            ],
            downloadUrl: "materials/WOOD-2-FR.pdf",
            coverImage: "assets/covers/wood_IMG1_fr.png",
            buttonText: "Télécharger le Livre de Projets (Livre 2)"
        },
        {
            id: "b3",
            title: "Meubles & Projets pour la Maison — Fabriquez vos propres meubles en bois",
            description: "Arrêtez les petits objets de bricolage : fabriquez de vrais meubles solides, équilibrés et aux finitions soignées.",
            badgeText: "MEUBLES ET MAISON",
            badgeColor: "#B45309",
            features: [
                "Fabriquez vous-même de vrais meubles en bois solides",
                "Assemblages durables et finition haut de gamme des surfaces",
                "Mobilier proportionné pour la maison, le jardin et l'atelier"
            ],
            downloadUrl: "materials/WOOD-3-FR.pdf",
            coverImage: "assets/covers/wood_IMG1_fr.png",
            buttonText: "Télécharger le Livre de Meubles (Livre 3)"
        }
    ],

    otherProducts: []
};
