/**
 * BEEKEEPING — Members Area Data (FR)
 */

const APP_DATA = {
    config: {
        brandName: "L'art de l'Apiculture",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question concernant l'accès au cours (Apiculture)",
        emailBodyTemplate: "Bonjour l'équipe d'assistance ! J'ai besoin d'aide avec mon espace membres Apiculture.%0A%0AMon nom est : ______.",
        showFloatingHelp: true
    },

    videos: [
        { id: 'v1', title: 'Débuter l\'Apiculture : 01 Ruche, Rucher et Législation', duration: 'Vidéo 1', youtubeId: 'OR8fLwZKz2A' },
        { id: 'v2', title: 'Visite de Printemps : Quand, Comment, Pourquoi ?', duration: 'Vidéo 2', youtubeId: 'EfszP31DmQk' },
        { id: 'v3', title: 'Débuter l\'Apiculture : 02 les Abeilles et la Colonie', duration: 'Vidéo 3', youtubeId: 'kjNHLQ5KS78' },
        { id: 'v4', title: 'Débuter l\'Apiculture : 03 Le matériel de protection', duration: 'Vidéo 4', youtubeId: 'MchQYItc8j0' },
        { id: 'v5', title: 'Rotation des Cadres : Pourquoi, Quand et Comment ?', duration: 'Vidéo 5', youtubeId: 'a0LnzczJyK4' },
        { id: 'v6', title: 'Débuter l\'Apiculture : 04 Comment allumer son enfumoir', duration: 'Vidéo 6', youtubeId: 'iFCEy9DI2ww' }
    ],

    books: [
        {
            id: "b1",
            title: "L'Abeille et la Ruche",
            description: "Un guide complet sur le monde fascinant des abeilles et la gestion de la ruche — de l'installation à la récolte du miel.",
            badgeText: "LIVRE PRINCIPAL",
            badgeColor: "#E5A817",
            features: [
                "Biologie complète de l'abeille",
                "Installation et gestion de la ruche",
                "Techniques de récolte du miel"
            ],
            downloadUrl: "materials/FR 01 - Labeille-et-la-ruche-Alain-Pe-ricard-Z.pdf",
            coverImage: "assets/covers/beekeeping_for_all.png",
            buttonText: "Télécharger le livre"
        },
        {
            id: "b2",
            title: "Manuel Populaire d'Apiculture",
            description: "Le manuel de référence pour l'apiculteur — des bases aux techniques avancées de gestion des colonies d'abeilles.",
            badgeText: "MANUEL",
            badgeColor: "#6B8F3C",
            features: [
                "Gestion saisonnière du rucher",
                "Prévention des maladies",
                "Techniques d'élevage des reines"
            ],
            downloadUrl: "materials/FR 02-manuel-populaire-apiculture-2.pdf",
            coverImage: "assets/covers/backyard_beekeepers.png",
            buttonText: "Télécharger le manuel"
        },
        {
            id: "b3",
            title: "Guide Pratique de l'Apiculteur",
            description: "Un guide pratique et accessible pour débuter en apiculture avec confiance et maîtrise.",
            badgeText: "GUIDE",
            badgeColor: "#B45309",
            features: [
                "Approche pratique et simple",
                "Conseils pour débutants",
                "Illustrations et schémas utiles"
            ],
            downloadUrl: "materials/FR 03.pdf",
            coverImage: "assets/covers/mead_making.png",
            buttonText: "Télécharger le guide"
        },
        {
            id: "b4",
            title: "Apiculture Avancée",
            description: "Approfondissements et techniques avancées pour les apiculteurs qui souhaitent perfectionner leur pratique.",
            badgeText: "EXTRA",
            badgeColor: "#059669",
            features: [
                "Techniques avancées d'élevage",
                "Optimisation de la production",
                "Gestion professionnelle du rucher"
            ],
            downloadUrl: "materials/FR04.pdf",
            coverImage: "assets/covers/beekeeping_made_easy.png",
            buttonText: "Télécharger l'extra"
        }
    ],

    otherProducts: []
};
