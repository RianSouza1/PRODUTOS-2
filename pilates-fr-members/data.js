/**
 * Pilates & Bien-être — Espace Membres (Français)
 */

const APP_DATA = {
    config: {
        brandName: "Pilates & Bien-être",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question concernant l'accès (Pilates & Bien-être)",
        emailBodyTemplate: "Bonjour l'équipe d'assistance ! Je souhaite obtenir de l'aide concernant mon accès à l'espace membres de Pilates & Bien-être.\n\nMon nom est : ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Le Pilates pour Débutants — Édition 2026",
            description: "Un guide simple, pas à pas, pour gagner en force, en souplesse et en confiance depuis chez vous. Conçu pour vous aider à devenir plus fort, plus souple et plus dynamique à votre propre rythme.",
            badgeText: "Matériel Principal",
            badgeColor: "#C07A68",
            features: [
                "Exercices pas à pas pour débutants à la maison",
                "Améliorez votre posture, votre souplesse et votre force abdominale",
                "Des mouvements sûrs sans effort excessif"
            ],
            downloadUrl: "materials/PILATES-1-FR.pdf",
            coverImage: "assets/covers/pil_IMG1_fr.png",
            buttonText: "Télécharger le Matériel Principal"
        },
        {
            id: "b2",
            title: "Pilates au Mur — Édition 2026",
            description: "Des exercices doux et accessibles pour retrouver force, équilibre et mobilité depuis chez vous. Utilisez le mur comme partenaire pour corriger votre posture et renforcer votre corps.",
            badgeText: "Bonus #1",
            badgeColor: "#5B8C7D",
            features: [
                "Utilisez le mur pour un meilleur équilibre et soutien",
                "Exercices de mobilité douce pour tout le corps",
                "Idéal pour s'entraîner à la maison sans équipement spécial"
            ],
            downloadUrl: "materials/PILATES-2-FR.pdf",
            coverImage: "assets/covers/pil_IMG1_fr.png",
            buttonText: "Télécharger le Bonus #1"
        },
        {
            id: "b3",
            title: "30 Jours de Pilates pour les Seniors — Édition 2026",
            description: "Un programme quotidien en douceur pour gagner en force, en équilibre, en souplesse et en confiance. Spécialement conçu pour les adultes souhaitant rester actifs en toute sécurité.",
            badgeText: "Bonus #2",
            badgeColor: "#9C6A88",
            features: [
                "Calendrier complet de 30 jours avec des séances quotidiennes en douceur",
                "Focus sur l'équilibre, la mobilité articulaire et l'énergie",
                "Sûr à pratiquer à la maison quel que soit votre niveau"
            ],
            downloadUrl: "materials/PILATES-3-FR.pdf",
            coverImage: "assets/covers/pil_IMG1_fr.png",
            buttonText: "Télécharger le Bonus #2"
        }
    ],

    otherProducts: []
};
