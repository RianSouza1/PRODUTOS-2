/**
 * Excel Mastery — Données Espace Membres (Français)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question concernant l'accès (Excel Mastery)",
        emailBodyTemplate: "Bonjour l'équipe support ! J'ai besoin d'aide pour accéder à mon espace membre Excel Mastery.\n\nMon nom est : ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Excel de zéro à un niveau professionnel — Édition 2026",
            description: "Guide pratique pour débutants sur les feuilles de calcul, l'organisation et la productivité au quotidien. Apprenez Excel étape par étape, de la toute première cellule aux outils avancés.",
            badgeText: "LIVRE PRINCIPAL",
            badgeColor: "#1a7a45",
            features: [
                "Feuilles de calcul et organisation des données pour débutants",
                "Productivité quotidienne et gestion des listes de clients",
                "Suivi des finances et planification de calendriers dans Excel"
            ],
            downloadUrl: "materials/Excel-1-FR.pdf",
            coverImage: "assets/covers/excel_IMG1_fr.png",
            buttonText: "Télécharger le livre principal"
        },
        {
            id: "b2",
            title: "Formules dans Excel, fonctions et flux de travail intelligents — Édition 2026",
            description: "Guide pratique pour résoudre plus rapidement les tâches dans Excel. Transformez un simple tableau en un véritable outil de résolution de problèmes à l'aide de formules et de fonctions.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Formules et fonctions au niveau avancé",
                "Calculs automatiques et flux de travail intelligents",
                "Résolution plus rapide des problèmes dans Excel"
            ],
            downloadUrl: "materials/Excel-2-FR.pdf",
            coverImage: "assets/covers/excel_IMG1_fr.png",
            buttonText: "Télécharger le bonus #1"
        },
        {
            id: "b3",
            title: "Tableurs Excel, rapports et formules — Édition 2026",
            description: "Guide pratique pour transformer les données en rapports clairs et professionnels. Apprenez à présenter efficacement vos données à l'aide de tableaux de bord et de rapports.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Tableaux de bord professionnels et panneaux visuels",
                "Rapports de synthèse et tableaux dynamiques",
                "Présentation des données aux responsables, clients et équipes"
            ],
            downloadUrl: "materials/Excel-3-FR.pdf",
            coverImage: "assets/covers/excel_IMG1_fr.png",
            buttonText: "Télécharger le bonus #2"
        }
    ],

    otherProducts: []
};
