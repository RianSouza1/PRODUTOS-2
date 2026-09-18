/**
 * Calisthénie Militaire pour Hommes — Espace Membre (Français)
 */

const APP_DATA = {
    config: {
        brandName: "Calisthénie Militaire pour Hommes",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Demande d'aide pour l'accès (Calisthénie Militaire pour Hommes)",
        emailBodyTemplate: "Bonjour l'équipe support ! Je souhaite obtenir de l'aide concernant mon accès à l'espace membre pour Calisthénie Militaire pour Hommes.\n\nMon nom est : ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            "id": "v1",
            "title": "Pompes classiques (Force du haut du corps)",
            "duration": "0:25 • Technique fondamentale",
            "category": "Haut du corps & Pectoraux",
            "obs": "Démonstration de profil avec alignement parfait de la colonne et placement des coudes.",
            "videoUrl": "https://videos.pexels.com/video-files/6893306/6893306-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v2",
            "title": "Gainage latéral (Planche latérale & Stabilité)",
            "duration": "0:20 • Gainage & Stabilité",
            "category": "Sangle abdominale & Core",
            "obs": "Renforcement des muscles profonds du tronc et protection des articulations.",
            "videoUrl": "https://videos.pexels.com/video-files/6023266/6023266-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v3",
            "title": "Bird-Dog à quatre pattes (Stabilisation du dos & Tronc)",
            "duration": "0:30 • Exercice doux pour le dos",
            "category": "Posture & Lombaires",
            "obs": "Idéal pour décompresser la colonne lombaire et activer les stabilisateurs profonds.",
            "videoUrl": "https://videos.pexels.com/video-files/9058239/9058239-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v4",
            "title": "Jumping Jacks (Cardio militaire & Échauffement)",
            "duration": "0:15 • Condition physique & Brûle-graisse",
            "category": "Échauffement & Cardio",
            "obs": "Activation cardiovasculaire et préparation musculaire complète du corps.",
            "videoUrl": "https://videos.pexels.com/video-files/7299359/7299359-uhd_2160_3840_30fps.mp4"
        },
        {
            "id": "v5",
            "title": "Rotations des hanches & Mobilité articulaire",
            "duration": "0:25 • Déverrouillage du bassin",
            "category": "Mobilité articulaire & Hanches",
            "obs": "Déverrouillage des hanches pour une meilleure amplitude de mouvement sans douleur.",
            "videoUrl": "https://videos.pexels.com/video-files/9058019/9058019-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v6",
            "title": "Étirement des ischio-jambiers & Toucher d'orteils",
            "duration": "0:20 • Souplesse & Récupération",
            "category": "Étirements & Souplesse",
            "obs": "Assouplissement de la chaîne postérieure et prévention des raideurs lombaires.",
            "videoUrl": "https://videos.pexels.com/video-files/6891847/6891847-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v7",
            "title": "Ouverture thoracique & Mobilité des épaules",
            "duration": "0:20 • Ouverture de la cage thoracique",
            "category": "Mobilité du haut du corps",
            "obs": "Ouverture de la posture thoracique et libération des tensions de la ceinture scapulaire.",
            "videoUrl": "https://videos.pexels.com/video-files/7319946/7319946-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v8",
            "title": "Suspension à la barre (Dead Hang & Force de préhension)",
            "duration": "0:20 • Décompression vertébrale",
            "category": "Force de préhension & Dos",
            "obs": "Décompression vertébrale complète et renforcement de la poigne et des avant-bras.",
            "videoUrl": "https://videos.pexels.com/video-files/10476557/10476557-uhd_4096_2160_25fps.mp4"
        }
    ],

    books: [
        {
            id: "b1",
            title: "Calisthénie Militaire pour Hommes 40+ — Défi Papa Fort 28 Jours (Partie 1)",
            description: "Développez une force fonctionnelle, une mobilité et une endurance remarquables en seulement 15 minutes par jour, sans salle de sport. Programme militaire complet au poids du corps spécialement conçu pour les hommes de plus de 40 ans.",
            badgeText: "Défi 28 Jours",
            badgeColor: "#c45329",
            features: [
                "15 minutes par jour d'exercices militaires au poids du corps sans matériel",
                "Spécialement adapté pour protéger les articulations et renforcer la posture des 40+",
                "Pas d'abonnement en salle, aucun équipement coûteux et zéro excuse"
            ],
            downloadUrl: "materials/MAN-1-FR.pdf",
            coverImage: "assets/covers/man_IMG1_fr.png",
            buttonText: "Télécharger la Partie 1 (PDF)"
        },
        {
            id: "b2",
            title: "Entraînement Fonctionnel Militaire — Protocole de 9 Semaines (Partie 2)",
            description: "Programme tactique avancé au poids du corps pour une endurance maximale, la stabilité des épaules et du tronc, et une perte de graisse efficace où et quand vous voulez.",
            badgeText: "Protocole 9 Semaines",
            badgeColor: "#3b5940",
            features: [
                "Plan d'entraînement tactique progressif sur 9 semaines pour tout le corps",
                "Routines fonctionnelles militaires pour la force, le souffle et le physique",
                "Récupération optimisée et prévention des blessures articulaires"
            ],
            downloadUrl: "materials/MAN-2-FR.pdf",
            coverImage: "assets/covers/man_IMG1_fr.png",
            buttonText: "Télécharger le Guide Principal (Partie 2)"
        },
        {
            id: "b3",
            title: "Entraînement de Calisthénie Militaire pour Hommes 50+ (Partie 3)",
            description: "Construisez une force durable, de l'équilibre, de la souplesse et une énergie débordante — à la maison ou en plein air, sans salle de sport. Conçu pour les hommes de plus de 50 ans avec un accent majeur sur la longévité et la santé des articulations.",
            badgeText: "Hommes 50+",
            badgeColor: "#1b2a3a",
            features: [
                "Focus ciblé sur la force, l'équilibre, la mobilité et la vitalité durable",
                "Mouvements au poids du corps sécurisés et hautement efficaces pour les 50+",
                "Protection articulaire à long terme et énergie maximale au quotidien"
            ],
            downloadUrl: "materials/MAN-3-FR.pdf",
            coverImage: "assets/covers/man_IMG1_fr.png",
            buttonText: "Télécharger la Partie 3 (PDF)"
        }
    ],

    otherProducts: []
};
