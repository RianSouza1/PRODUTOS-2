/**
 * BEEKEEPING MASTERY — Members Area Data
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
        {
            id: 'v1',
            title: 'Débuter l\'Apiculture : 01 Ruche, Rucher et Législation',
            duration: 'Vidéo 1',
            youtubeId: 'OR8fLwZKz2A'
        },
        {
            id: 'v2',
            title: 'Visite de Printemps : Quand, Comment, Pourquoi ?',
            duration: 'Vidéo 2',
            youtubeId: 'EfszP31DmQk'
        },
        {
            id: 'v3',
            title: 'Débuter l\'Apiculture : 02 les Abeilles et la Colonie',
            duration: 'Vidéo 3',
            youtubeId: 'kjNHLQ5KS78'
        },
        {
            id: 'v4',
            title: 'Débuter l\'Apiculture : 03 Le matériel de protection, au rucher, pour le miel et combien ça coûte',
            duration: 'Vidéo 4',
            youtubeId: 'MchQYItc8j0'
        },
        {
            id: 'v5',
            title: 'Rotation des Cadres : Pourquoi, Quand et Comment ? (Apiculture)',
            duration: 'Vidéo 5',
            youtubeId: 'a0LnzczJyK4'
        },
        {
            id: 'v6',
            title: 'Débuter l\'Apiculture : 04 Comment allumer son enfumoir, ouvrir et visiter sa ruche',
            duration: 'Vidéo 6',
            youtubeId: 'iFCEy9DI2ww'
        }
    ],

    books: [
        {
            id: "b1",
            title: "L'Apiculture pour Débutants",
            description: "Tout ce dont vous avez besoin pour commencer votre parcours d'apiculteur : du choix de votre première ruche à la récolte du miel doré.",
            badgeText: "LIVRE PRINCIPAL",
            badgeColor: "#E5A817",
            features: [
                "Installation & Emplacement de la Ruche",
                "Calendrier des Soins Saisonniers",
                "Guide de Récolte du Miel"
            ],
            downloadUrl: "materials/Beekeeping_for_Beginners.pdf",
            coverImage: "assets/covers/book_taichi_seniors_light_v2.jpg",
            buttonText: "Télécharger le livre"
        },
        {
            id: "b2",
            title: "Recettes Naturelles au Miel",
            description: "30 délicieuses recettes utilisant votre propre miel maison — des soins de la peau à la gastronomie.",
            badgeText: "BONUS",
            badgeColor: "#6B8F3C",
            features: [
                "Recettes Sucrées & Salées",
                "Soins de la Peau à base de Miel",
                "Conseils de Conservation"
            ],
            downloadUrl: "materials/Natural_Honey_Recipes.pdf",
            coverImage: "assets/covers/book_taichi_weightloss_light.jpg",
            buttonText: "Télécharger le Bonus"
        }
    ],

    otherProducts: []
};
