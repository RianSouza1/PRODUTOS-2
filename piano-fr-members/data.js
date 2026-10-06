/**
 * La Collection Complète de Piano — Espace Membres (Français)
 */

const APP_DATA = {
    config: {
        brandName: "La Collection Complète de Piano",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Demande d'aide pour l'accès (La Collection Complète de Piano)",
        emailBodyTemplate: "Bonjour l'équipe d'assistance ! Je souhaite demander de l'aide concernant mon accès à l'espace membres de La Collection Complète de Piano.\n\nMon nom est : ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Piano pour Grands Débutants — Livre 1 sur 3",
            description: "Touches, accords et vos premiers morceaux. Découvrez le clavier, lisez vos premières notes, comprenez les notions fondamentales du solfège et apprenez à jouer étape par étape.",
            badgeText: "Guide Débutant",
            badgeColor: "#1b2a38",
            features: [
                "Clavier, posture, position des mains et lecture de base des notes",
                "Guide pas à pas pour vos premiers accords et vos premiers rythmes",
                "Jouez de vrais et magnifiques morceaux de piano dès le début"
            ],
            downloadUrl: "materials/PIANO-1-FR.pdf",
            coverImage: "assets/covers/piano_IMG1_fr.png",
            buttonText: "Télécharger le Guide Débutant (PDF)"
        },
        {
            id: "b2",
            title: "Pièces de Piano Faciles — Livre 2 sur 3",
            description: "Pas à pas vers le rythme, la coordination & une pratique sereine. De votre première mélodie à un jeu sûr à deux mains — un recueil de répertoire progressif pour adultes débutants.",
            badgeText: "Morceaux Faciles",
            badgeColor: "#4a5568",
            features: [
                "Magnifiques morceaux spécialement arrangés pour débutants",
                "Développement du jeu à deux mains et enchaînement fluide des accords",
                "Mélodies célèbres et pièces classiques à maîtriser étape par étape"
            ],
            downloadUrl: "materials/PIANO-2-FR.pdf",
            coverImage: "assets/covers/piano_IMG1_fr.png",
            buttonText: "Télécharger le Recueil de Morceaux (PDF)"
        },
        {
            id: "b3",
            title: "Défi Piano 30 Jours — Livre 3 sur 3",
            description: "Un programme journalier structuré pour un meilleur rythme, plus d'assurance et une pratique régulière. 20 minutes par jour pour développer la lecture de notes, la coordination et l'aisance au piano.",
            badgeText: "Défi 30 Jours",
            badgeColor: "#6b1d2f",
            features: [
                "30 jours structurés avec 20 minutes d'entraînement quotidien ciblé",
                "Exercices de lecture de notes, métronome et coordination des mains",
                "Créez une routine de pratique durable, inspirante et efficace"
            ],
            downloadUrl: "materials/PIANO-3-FR.pdf",
            coverImage: "assets/covers/piano_IMG1_fr.png",
            buttonText: "Télécharger le Défi 30 Jours (PDF)"
        }
    ],

    otherProducts: []
};
