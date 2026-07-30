/**
 * Maîtrise de la Guitare Acoustique — Espace Membres (Français) v3
 */

const APP_DATA = {
    config: {
        brandName: "Maîtrise de la Guitare Acoustique",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Demande d'assistance (Maîtrise de la Guitare Acoustique)",
        emailBodyTemplate: "Bonjour à l'équipe de support ! Je souhaite obtenir de l'aide concernant mon accès à l'espace membres de Maîtrise de la Guitare Acoustique.\n\nMon nom est : ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Guitare Acoustique pour les Grands Débutants — Livre 1 sur 3",
            description: "Un guide d'introduction essentiel pour les grands débutants qui font leurs premiers pas avec la guitare acoustique. Apprenez les accords fondamentaux, le rythme de base et commencez à jouer vos toutes premières chansons.",
            badgeText: "Guide Débutant",
            badgeColor: "#F57C00",
            features: [
                "Accords essentiels pour les grands débutants",
                "Leçons de rythme et de strumming de base",
                "Guide étape par étape pour vos premières chansons"
            ],
            downloadUrl: "materials/GUITAR-1-FR.pdf",
            coverImage: "assets/covers/guitar_IMG1_fr.png",
            buttonText: "Télécharger le Guide Débutant (PDF)"
        },
        {
            id: "b2",
            title: "Chansons Faciles à la Guitare Acoustique — Livre 2 de la Collection",
            description: "Développez vos compétences en maîtrisant les changements d'accords et les patterns de strumming. Jouez avec confiance grâce à ce recueil de chansons conçu pour un apprentissage progressif.",
            badgeText: "Chansons Faciles",
            badgeColor: "#475569",
            features: [
                "Changements et transitions d'accords fluides",
                "Tutoriels de patterns de strumming dynamiques",
                "Chansons étape par étape pour gagner en confiance"
            ],
            downloadUrl: "materials/GUITAR-2-FR.pdf",
            coverImage: "assets/covers/guitar_IMG1_fr.png",
            buttonText: "Télécharger le Recueil (PDF)"
        },
        {
            id: "b3",
            title: "Défi Guitare Acoustique 30 Jours — Livre 3 sur 3",
            description: "Un plan de pratique quotidien structuré pour améliorer votre rythme, gagner en confiance et construire une régularité. Un manuel d'entraînement spécialisé par Daniel Harper.",
            badgeText: "Défi 30 Jours",
            badgeColor: "#0F766E",
            features: [
                "Plan de pratique quotidien sur 30 jours",
                "Exercices de rythme, confiance et précision",
                "Programme intelligent pour des progrès constants"
            ],
            downloadUrl: "materials/GUITAR-3-FR.pdf",
            coverImage: "assets/covers/guitar_IMG1_fr.png",
            buttonText: "Télécharger le Plan d'Entraînement (PDF)"
        }
    ],

    otherProducts: []
};
