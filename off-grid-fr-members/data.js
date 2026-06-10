/**
 * OFF GRID LIVING — Members Area Data (FR)
 */

const APP_DATA = {
    config: {
        brandName: "Vivre Hors Réseau",
        contactEmail: "suporte@offgridliving.com", 
        emailSubject: "Question sur l'accès au cours (Off Grid)",
        emailBodyTemplate: "Bonjour l'équipe support ! J'ai besoin d'aide avec mon espace membre Vivre Hors Réseau.%0A%0AMon nom est : ______.",
        showFloatingHelp: true
    },

    videos: [], 

    books: [
        {
            id: "b1",
            title: "Off Grid Living 2026 Plan Complet",
            description: "Un plan complet hors réseau pour l'énergie, l'eau, la nourriture et la sécurité—pas de devinettes, pas de lacunes.",
            badgeText: "PLAN PRINCIPAL",
            badgeColor: "#10B981",
            features: ["Systèmes d'Énergie & Eau", "Indépendance Alimentaire", "Planification de Sécurité"],
            downloadUrl: "materials/La-Vie-Hors-Reseau-Off-Grid-1-FR.pdf",
            coverImage: "assets/covers/CAPA FRANCÊS.png",
            buttonText: "Télécharger le plan"
        },
        {
            id: "b2",
            title: "70+ Projets Hors-Réseau DIY",
            description: "Plus de 70 projets DIY étape par étape que vous pouvez réellement construire, même avec des outils et compétences de base.",
            badgeText: "PROJETS DIY",
            badgeColor: "#059669",
            features: ["Guides Étape par Étape", "Outils de Base Requis", "Constructions Pratiques"],
            downloadUrl: "materials/MANUEL-DE-SURVIE-HORS-RESEAU-Off-Grid-2.pdf",
            coverImage: "assets/covers/CAPA 2 Francês.png",
            buttonText: "Télécharger les projets"
        },
        {
            id: "b3",
            title: "Planification de Survie Off Grid",
            description: "Planification de survie hors réseau pour les coupures de courant, l'instabilité économique et les ruptures de chaîne d'approvisionnement.",
            badgeText: "GUIDE DE SURVIE",
            badgeColor: "#F59E0B",
            features: ["Préparation aux Coupures", "Protocoles d'Urgence", "Plan de Transition de 8 Semaines"],
            downloadUrl: "materials/Vie-Hors-Reseau-en-8-Semaines-Off-Grid-3-FR.pdf",
            coverImage: "assets/covers/capa 3 francês.png",
            buttonText: "Télécharger le guide"
        }
    ],

    otherProducts: []
};
