/**
 * La Collection Pratique du Dessin — Espace Membres (Français)
 */

const APP_DATA = {
    config: {
        brandName: "La Collection Pratique du Dessin",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Demande d'aide sur l'accès (La Collection Pratique du Dessin)",
        emailBodyTemplate: "Bonjour l'équipe support ! Je souhaite obtenir de l'aide concernant mon accès à l'espace membres La Collection Pratique du Dessin.\n\nMon nom est : ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            id: "v1",
            title: "Technique d'Esquisse & Maîtrise du Crayon",
            duration: "0:25 • Technique de base",
            category: "Fondamentaux",
            obs: "Tenez le crayon avec souplesse et posez des traits légers avant de définir les contours finaux.",
            videoUrl: "https://assets.mixkit.co/active_storage/video_items/100488/1724285900/100488-video-720.mp4"
        },
        {
            id: "v2",
            title: "Lignes de Base & Construction en Perspective",
            duration: "0:20 • Repères visuels",
            category: "Perspective & Lignes",
            obs: "Tracez des lignes de repère pour équilibrer les proportions globales de votre sujet.",
            videoUrl: "https://assets.mixkit.co/videos/5254/5254-720.mp4"
        },
        {
            id: "v3",
            title: "Tracé Fluide & Contrôle du Geste",
            duration: "0:22 • Dextérité",
            category: "Contrôle du Trait",
            obs: "Accompagnez le mouvement avec l'avant-bras pour obtenir des courbes harmonieuses et nettes.",
            videoUrl: "https://assets.mixkit.co/videos/36721/36721-720.mp4"
        },
        {
            id: "v4",
            title: "Dessin de Portrait & Proportions Féminines",
            duration: "0:30 • Art du portrait",
            category: "Portrait & Anatomie",
            obs: "Construisez la forme globale de la tête avant de placer avec soin le regard et la bouche.",
            videoUrl: "https://assets.mixkit.co/videos/30232/30232-720.mp4"
        },
        {
            id: "v5",
            title: "Hachures & Dégradés d'Ombrage Détaillés",
            duration: "0:25 • Ombre & Lumière",
            category: "Technique d'Ombrage",
            obs: "Superposez délicatement les hachures croisées pour modeler les volumes en profondeur.",
            videoUrl: "https://assets.mixkit.co/active_storage/video_items/100485/1724285772/100485-video-720.mp4"
        },
        {
            id: "v6",
            title: "Rendu des Cheveux & Textures Fines",
            duration: "0:22 • Rendu matière",
            category: "Détails & Textures",
            obs: "Dessinez la chevelure par grandes mèches cohérentes avant d'ajouter les rehauts de lumière.",
            videoUrl: "https://assets.mixkit.co/videos/40306/40306-720.mp4"
        },
        {
            id: "v7",
            title: "Carnet de Croquis & Pratique Quotidienne",
            duration: "0:25 • Carnet d'artiste",
            category: "Créativité & Pratique",
            obs: "Prenez l'habitude de croquer rapidement sur le vif pour développer votre sens de l'observation.",
            videoUrl: "https://assets.mixkit.co/videos/29983/29983-720.mp4"
        },
        {
            id: "v8",
            title: "Précision Anatomique & Finesse du Trait",
            duration: "0:28 • Dessin de précision",
            category: "Anatomie & Rigueur",
            obs: "Conservez une mine de crayon bien taillée pour réussir les tracés anatomiques complexes.",
            videoUrl: "https://assets.mixkit.co/videos/9339/9339-720.mp4"
        }
    ],

    books: [
        {
            id: "b1",
            title: "Apprendre à Dessiner en Partant de Zéro — Tome 1",
            description: "Le guide fondamental pour débutants : maîtrisez la tenue du crayon, les formes de base, la justesse des proportions, la perspective et le rendu des ombres avec assurance.",
            badgeText: "Guide Principal",
            badgeColor: "#7C3AED",
            features: [
                "Maîtrisez la tenue du crayon, les lignes et les proportions",
                "Construisez des volumes solides en perspective",
                "Apprenez les techniques d'ombrage et de dégradés au crayon"
            ],
            downloadUrl: "materials/DRAW-1-FR.pdf",
            coverImage: "assets/covers/draw_IMG1_fr.png",
            buttonText: "Télécharger le Guide Principal (PDF)"
        },
        {
            id: "b2",
            title: "Le Guide Essentiel des Sujets de Dessin — Tome 2",
            description: "Apprenez à décomposer n'importe quel sujet du monde réel en formes simples et expressives : visages, corps humain, animaux, textures végétales et objets du quotidien.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Dessinez des visages expressifs et les proportions de la tête",
                "Capturez l'anatomie simplifiée et les postures d'animaux",
                "Techniques pour la nature, les drapés et les objets du quotidien"
            ],
            downloadUrl: "materials/DRAW-2-FR.pdf",
            coverImage: "assets/covers/draw_IMG1_fr.png",
            buttonText: "Télécharger le Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "De l'Esquisse au Dessin Abouti — Tome 3",
            description: "De la première esquisse à l'œuvre finale : travaillez la composition, le contraste, les textures réalistes et réalisez des projets complets étape par étape.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Règles de composition visuelle et points focaux",
                "Gestion avancée de la lumière, des valeurs et des contrastes",
                "Projets complets guidés pas à pas : nature morte, botanique et paysage"
            ],
            downloadUrl: "materials/DRAW-3-FR.pdf",
            coverImage: "assets/covers/draw_IMG1_fr.png",
            buttonText: "Télécharger le Bonus #2 (PDF)"
        },
        {
            id: "b4",
            title: "Cahier Pratique 01 : Apprenez à dessiner en partant de zéro",
            description: "17 séances pratiques guidées pour développer la précision du trait, l'observation et réussir votre première nature morte.",
            badgeText: "17 Séances",
            badgeColor: "#7C3AED",
            downloadUrl: "materials/01_Apprendre_a_dessiner_FR.pdf",
            coverImage: "assets/covers/draw_IMG1_fr.png",
            buttonText: "Télécharger le Cahier 01"
        },
        {
            id: "b5",
            title: "Cahier Pratique 02 : Le guide essentiel des sujets à dessiner",
            description: "17 séances ciblées pour transformer des formes simples en sujets vivants : visages, corps, animaux et objets.",
            badgeText: "17 Séances",
            badgeColor: "#2563EB",
            downloadUrl: "materials/02_Les_sujets_du_dessin_FR.pdf",
            coverImage: "assets/covers/draw_IMG1_fr.png",
            buttonText: "Télécharger le Cahier 02"
        },
        {
            id: "b6",
            title: "Cahier Pratique 03 : Du croquis au dessin abouti",
            description: "3 projets guidés étape par étape : composition, ombrage, textures fines et finitions.",
            badgeText: "3 Projets",
            badgeColor: "#059669",
            downloadUrl: "materials/03_De_l_esquisse_au_dessin_fini_FR.pdf",
            coverImage: "assets/covers/draw_IMG1_fr.png",
            buttonText: "Télécharger le Cahier 03"
        }
    ],

    otherProducts: []
};
