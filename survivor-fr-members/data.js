/**
 * Survival & Bushcraft — Espace Membres (French)
 * La série complète Bushcraft et Survie
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Demande d'accès (Survival & Bushcraft)",
        emailBodyTemplate: "Bonjour l'équipe de support,\n\nJ'ai besoin d'aide pour accéder à mon espace membre de Survival & Bushcraft.\n\nMon nom est : ______",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Survie pour débutants — Édition 2026",
            description: "Eau, Feu, Abri, Signalisation et Techniques Essentielles de Survie. Un manuel pratique pour tous ceux qui passent du temps en plein air — randonneurs, campeurs, chasseurs ou aventuriers de la nature sauvage.",
            badgeText: "Guide Principal",
            badgeColor: "#6B7C44",
            features: [
                "Trouver, purifier et sécuriser l'eau dans la nature",
                "Allumer des feux de camp, construire des abris et envoyer des signaux de détresse",
                "Techniques testées sur le terrain et adaptées aux débutants"
            ],
            downloadUrl: "materials/SURVIVOR-1-FR.pdf",
            coverImage: "assets/covers/sur_IMG1_fr.png",
            buttonText: "Télécharger le Guide Principal"
        },
        {
            id: "b2",
            title: "Le bushcraft et l'art de vivre en forêt — Édition 2026",
            description: "Équipement, nœuds, navigation, techniques de campement et la science de la vie autonome en pleine nature. Les compétences clés indispensables pour s'orienter et profiter des milieux forestiers en toute sécurité et confiance.",
            badgeText: "Bonus #1",
            badgeColor: "#7A5C3E",
            features: [
                "Maîtrise des outils, des nœuds essentiels et des techniques de navigation",
                "Établir des campements/bivouacs et vivre en autonomie dans la nature",
                "Instructions étape par étape pour les débutants sans expérience préalable"
            ],
            downloadUrl: "materials/SURVIVOR-2-FR.pdf",
            coverImage: "assets/covers/sur_IMG1_fr.png",
            buttonText: "Télécharger le Bonus #1"
        },
        {
            id: "b3",
            title: "Préparation aux crises et premiers secours pour les survivants — Édition 2026",
            description: "Le sac d'urgence 72 heures, les coupures de courant, l'évacuation et la sécurité familiale. Tout ce dont un foyer ordinaire a besoin pour se préparer à des situations d'urgence inattendues.",
            badgeText: "Bonus #2",
            badgeColor: "#8B4513",
            features: [
                "Liste d'équipement appropriée pour un sac d'urgence de 72 heures (go-bag)",
                "Se préparer aux coupures de courant, à l'évacuation et à la sécurité à domicile",
                "Bases des premiers secours essentiels pour les familles en situation de crise"
            ],
            downloadUrl: "materials/SURVIVOR-3-FR.pdf",
            coverImage: "assets/covers/sur_IMG1_fr.png",
            buttonText: "Télécharger le Bonus #2"
        }
    ],

    otherProducts: []
};
