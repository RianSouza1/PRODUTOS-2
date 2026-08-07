/**
 * Sculpture sur Bois & Sculptage — Espace Membres (Français)
 */

const APP_DATA = {
    config: {
        brandName: "Sculpture sur Bois & Sculptage",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question concernant l'accès (Sculpture sur Bois & Sculptage)",
        emailBodyTemplate: "Bonjour l'équipe support ! Je souhaite demander de l'aide concernant mon accès à l'espace membres de Sculpture sur Bois & Sculptage.\n\nMon nom est : ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Sculpture sur Bois pour Débutants — Outils, Sécurité & Premiers Projets Simples",
            description: "Un guide pratique et complet pour débuter la sculpture sur bois à la main en toute sécurité.",
            badgeText: "Volume 1",
            badgeColor: "#475569",
            features: [
                "Règles fondamentales de sécurité et équipement de protection",
                "Comment lire correctement le fil du bois",
                "Votre tout premier projet de sculpture facile"
            ],
            downloadUrl: "materials/WHITTLING-1-FR.pdf",
            coverImage: "assets/covers/whi_IMG1_fr.png",
            buttonText: "Télécharger le Volume 1 (PDF)"
        },
        {
            id: "b2",
            title: "Projets Faciles de Sculpture sur Bois — Compétences & Techniques Étape par Étape",
            description: "Dans la continuité du Volume 1 — des coupes géométriques simples aux figurines expressives en bois grâce à des projets structurés.",
            badgeText: "Guide Principal",
            badgeColor: "#8B5A2B",
            features: [
                "Onze projets détaillés de sculpture sur bois",
                "Redimensionner des modèles et les transférer sur le bois",
                "Astuces pour contrôler la symétrie et les formes"
            ],
            downloadUrl: "materials/WHITTLING-2-FR.pdf",
            coverImage: "assets/covers/whi_IMG1_fr.png",
            buttonText: "Télécharger le Guide Principal (Volume 2)"
        },
        {
            id: "b3",
            title: "Sculpture sur Bois : Finitions & Perfectionnement — Affûtage, Travail de Détail & Traitement des Surfaces",
            description: "Affûtage, sculpture de précision, traitement des surfaces & résultats impeccables. Volume 3 sur 3 de la collection complète.",
            badgeText: "Volume 3",
            badgeColor: "#2E5A44",
            features: [
                "Techniques de sculpture de précision et d'affûtage de couteau",
                "Sélection des finitions, huiles et cires",
                "Comment obtenir un résultat final parfait"
            ],
            downloadUrl: "materials/WHITTLING-3-FR.pdf",
            coverImage: "assets/covers/whi_IMG1_fr.png",
            buttonText: "Télécharger le Volume 3 (PDF)"
        }
    ],

    otherProducts: []
};
