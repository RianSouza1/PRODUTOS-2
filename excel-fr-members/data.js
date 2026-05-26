/**
 * Excel Maîtrise — Espace Membres Data
 */

const APP_DATA = {
    config: {
        brandName: "Excel Maîtrise",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question sur l'accès au cours (Excel)",
        emailBodyTemplate: "Bonjour l'équipe support ! J'ai besoin d'aide avec mon espace membre Excel.%0A%0AMon nom est : ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            id: "v1",
            title: "Formation Excel Débutant — Les Bases Fondamentales",
            duration: "Formation Complète",
            embedUrl: "https://www.youtube.com/embed/wHGMBjkce8o?list=PL8sQnj6qF1Lv6ejdklq25MGfPJFxThMw6"
        },
        {
            id: "v2",
            title: "Tableaux de Bord & Analyse Visuelle",
            duration: "Formation Avancée",
            embedUrl: "https://www.youtube.com/embed/N6m78wxhMys?list=PLXGfRYcOx3jg_ijUIS9iFfCXhCcTS6yIT"
        }
    ],

    books: [
        {
            id: "b1",
            title: "L'Art de Maîtriser Excel",
            description: "Le guide ultime et complet pour devenir autonome et productif avec Microsoft Excel, étape par étape.",
            badgeText: "LIVRE PRINCIPAL",
            badgeColor: "#10B981",
            features: ["Guide complet de A à Z", "Astuces de productivité", "Pour débutants et intermédiaires"],
            downloadUrl: "materials/l_art_de_maitriser_excel.pdf",
            coverImage: "assets/covers/cover_art_maitriser_excel.png",
            buttonText: "Télécharger le livre"
        },
        {
            id: "b2",
            title: "L'Essentiel d'Excel — Les Bases",
            description: "Apprenez les bases fondamentales de l'outil de bureautique le plus utilisé au monde pour bien démarrer.",
            badgeText: "GUIDE DE BASE",
            badgeColor: "#059669",
            features: ["Raccourcis indispensables", "Interface et navigation", "Premiers pas faciles"],
            downloadUrl: "materials/excel_les_bases.pdf",
            coverImage: "assets/covers/cover_excel_bases.png",
            buttonText: "Télécharger le guide"
        },
        {
            id: "b3",
            title: "Excel Avancé : Fonctions & Formules",
            description: "Dominez les fonctions complexes, les formules avancées et la création de graphiques professionnels.",
            badgeText: "GUIDE AVANCÉ",
            badgeColor: "#3B82F6",
            features: ["Fonctions avancées", "Formules et calculs complexes", "Graphiques dynamiques"],
            downloadUrl: "materials/excel_avance_fonctions.pdf",
            coverImage: "assets/covers/cover_excel_avance.png",
            buttonText: "Télécharger le guide"
        },
        {
            id: "b4",
            title: "100 Exercices sur Excel",
            description: "Mettez en pratique vos compétences avec 100 exercices concrets pour aller beaucoup plus loin.",
            badgeText: "EXERCICES PRATIQUES",
            badgeColor: "#047857",
            features: ["100 exercices concrets", "Cas pratiques d'entreprise", "Solutions étape par étape"],
            downloadUrl: "materials/100_exercices_sur_excel.pdf",
            coverImage: "assets/covers/cover_excel_exercices.png",
            buttonText: "Télécharger le recueil"
        }
    ],

    otherProducts: []
};
