/**
 * Rénovation & Entretien de la Maison — Espace Membres (Français)
 */

const APP_DATA = {
    config: {
        brandName: "Rénovation & Entretien de la Maison",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question d'accès (Rénovation & Entretien de la Maison)",
        emailBodyTemplate: "Bonjour l'équipe d'assistance ! Je souhaite demander de l'aide concernant mon accès à l'espace membres Rénovation & Entretien de la Maison.\n\nMon nom est : ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Le Guide Complet de la Rénovation et de l'Entretien de la Maison — Édition 2026",
            description: "Votre manuel de référence pour l'entretien, les réparations et la rénovation de votre logement — réalisés en toute sécurité, dans les règles de l'art, et avec des résultats durables.",
            badgeText: "Guide principal",
            badgeColor: "#D97706",
            features: [
                "Instructions étape par étape pour les réparations nécessaires",
                "Conseils d'experts pour vos projets d'entretien",
                "Astuces de bricolage pratiques pour des résultats durables"
            ],
            downloadUrl: "materials/REPAIR-1-FR.pdf",
            coverImage: "assets/covers/rep_IMG1_fr.png",
            buttonText: "Télécharger le guide principal"
        },
        {
            id: "b2",
            title: "Guide Pratique des Installations Électriques Domestiques — Édition Mise à Jour 2026",
            description: "En toute sécurité, conformément à la norme NF C 15-100 / au code de la construction et de l'habitation, en faisant les choses intelligemment soi-même. Un guide pratique de l'électricité domestique.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Gérer les travaux électriques chez vous en toute sécurité",
                "Entièrement conforme à la norme NF C 15-100 et directives",
                "Instructions étape par étape pour les installations courantes"
            ],
            downloadUrl: "materials/REPAIR-2-FR.pdf",
            coverImage: "assets/covers/rep_IMG1_fr.png",
            buttonText: "Télécharger le Bonus #1"
        },
        {
            id: "b3",
            title: "Le Guide Complet de la Plomberie Maison — Édition 2026",
            description: "Réparations, améliorations et entretien au top. Le manuel pratique pour comprendre, entretenir et maintenir en parfait état la plomberie de votre logement.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Diagnostiquer et résoudre les problèmes de plomberie courants",
                "Maintenir la plomberie de votre maison en parfait état",
                "Instructions claires conçues pour les débutants et bricoleurs"
            ],
            downloadUrl: "materials/REPAIR-3-FR.pdf",
            coverImage: "assets/covers/rep_IMG1_fr.png",
            buttonText: "Télécharger le Bonus #2"
        }
    ],

    otherProducts: []
};
