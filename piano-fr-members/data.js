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

    videos: [
    {
        "id": "v1",
        "title": "Cinq doigts : Do, Ré, Mi, Fa, Sol",
        "category": "Premiers pas",
        "description": "Suivez les cinq touches éclairées. Chaque numéro indique le doigt à utiliser.",
        "steps": [
            "Posez le pouce droit sur le Do central.",
            "Jouez Do, Ré, Mi, Fa, Sol avec les doigts 1, 2, 3, 4, 5.",
            "Redescendez : Fa, Mi, Ré, Do. Répétez lentement."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/01-five-fingers.mp4",
        "poster": "assets/videos/01-five-fingers.jpg"
    },
    {
        "id": "v2",
        "title": "Gamme de Do majeur",
        "category": "Gammes",
        "description": "Une gamme d’une octave, montante et descendante, avec le doigté indiqué sur les touches.",
        "steps": [
            "En montant, utilisez les doigts 1, 2, 3, 1, 2, 3, 4, 5.",
            "Après Mi, passez le pouce sous la main vers Fa.",
            "En descendant : 5, 4, 3, 2, 1, 3, 2, 1. Gardez un rythme régulier."
        ],
        "duration": "0:36",
        "videoUrl": "assets/videos/02-c-major-scale.mp4",
        "poster": "assets/videos/02-c-major-scale.jpg"
    },
    {
        "id": "v3",
        "title": "Votre premier accord : Do majeur",
        "category": "Accords",
        "description": "Écoutez les notes de l’accord de Do majeur séparément, puis ensemble.",
        "steps": [
            "Placez le pouce sur Do, le majeur sur Mi et l’auriculaire sur Sol.",
            "Jouez les trois notes une par une.",
            "Appuyez sur Do, Mi et Sol ensemble avec les doigts 1, 3 et 5."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/03-c-major-chord.mp4",
        "poster": "assets/videos/03-c-major-chord.jpg"
    },
    {
        "id": "v4",
        "title": "Arpège de Do majeur",
        "category": "Arpèges",
        "description": "Transformez un accord en arpège : Do, Mi, Sol, Do aigu, puis redescendez.",
        "steps": [
            "Utilisez les doigts 1, 2, 3 et 5 pour Do, Mi, Sol et Do aigu.",
            "Écoutez chaque note et gardez la main détendue.",
            "Redescendez par Sol, Mi, Do avec les doigts 3, 2, 1."
        ],
        "duration": "0:27",
        "videoUrl": "assets/videos/04-c-major-arpeggio.mp4",
        "poster": "assets/videos/04-c-major-arpeggio.jpg"
    },
    {
        "id": "v5",
        "title": "Changer d’accord : Do, Fa, Sol",
        "category": "Accords",
        "description": "Observez les trois positions d’accords et passez de l’une à l’autre tranquillement.",
        "steps": [
            "Jouez Do majeur : Do, Mi, Sol.",
            "Passez à Fa majeur : Fa, La, Do ; puis Sol majeur : Sol, Si, Ré.",
            "Utilisez les doigts 1, 3 et 5 pour chaque accord. Terminez par Do majeur."
        ],
        "duration": "0:26",
        "videoUrl": "assets/videos/05-chord-changes.mp4",
        "poster": "assets/videos/05-chord-changes.jpg"
    },
    {
        "id": "v6",
        "title": "Les deux mains ensemble",
        "category": "Coordination",
        "description": "La main droite joue cinq notes tandis que la gauche accompagne avec Do et Sol.",
        "steps": [
            "Préparez la droite sur le Do central et la gauche sur le Do grave.",
            "La droite joue Do, Ré, Mi, Fa, Sol, Fa, Mi, Ré, Do.",
            "La gauche tient Do pendant quatre temps, puis Sol pendant quatre. Terminez sur Do."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/06-hands-together.mp4",
        "poster": "assets/videos/06-hands-together.jpg"
    }
],

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

/* Localized interface for the piano demonstrations. */
APP_DATA.videoUI = {
    "label": "Vidéos",
    "homeTitle": "Vidéos de démonstration",
    "homeText": "Six exercices courts, avec uniquement le son du piano",
    "heading": "Regardez, écoutez et essayez",
    "intro": "Six courtes démonstrations animées. Suivez les touches éclairées et les numéros des doigts. Le son contient uniquement du piano, sans narration ni voix en arrière-plan.",
    "demo": "Démonstration",
    "of": "sur",
    "sound": "Piano uniquement",
    "unsupported": "Votre navigateur ne prend pas en charge cette vidéo.",
    "open": "Ouvrir la démonstration",
    "speed": "Vitesse de lecture",
    "replay": "Recommencer",
    "practice": "À vous de jouer",
    "choose": "Choisissez une démonstration",
    "fingers": "Doigts",
    "fingerNames": [
        "pouce",
        "index",
        "majeur",
        "annulaire",
        "auriculaire"
    ],
    "creditsLabel": "Sons",
    "creditsAdapted": "adaptés pour les exercices",
    "loadError": "La vidéo n’a pas pu être chargée. Actualisez la page ou réessayez dans un instant.",
    "playHint": "Appuyez sur le bouton de lecture pour commencer."
};
