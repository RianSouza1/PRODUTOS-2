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

    "videos": [
  {
    "id": "v1",
    "youtubeId": "fIfi4QcNdZY",
    "start": 0,
    "end": 19,
    "creator": "Marissa Purnell",
    "title": "Ombrer avec de petits cercles",
    "categoryName": "Ombrage",
    "description": "Des cercles qui se chevauchent créent une ombre douce, sans traits marqués.",
    "steps": [
      "Commence avec de petits mouvements circulaires légers.",
      "Superpose davantage de couches dans les zones sombres."
    ],
    "tip": "Préserve le papier dans la zone la plus éclairée."
  },
  {
    "id": "v2",
    "youtubeId": "b6UuTWm9MIQ",
    "start": 0,
    "end": 14,
    "creator": "Circle Line Art School",
    "title": "Tracer un cercle à main levée",
    "categoryName": "Les bases",
    "description": "Observe le mouvement de la main et du papier pour construire un cercle régulier.",
    "steps": [
      "Tiens le crayon sans crispation et suis un mouvement arrondi.",
      "Essaie de tourner progressivement le papier pendant le tracé."
    ],
    "tip": "Commence avec un trait léger avant de renforcer le contour."
  },
  {
    "id": "v3",
    "youtubeId": "A0Vsu7VtV_o",
    "start": 0,
    "end": 7,
    "creator": "Marissa Purnell",
    "title": "Ombrer avec des boucles libres",
    "categoryName": "Ombrage",
    "description": "De petites boucles superposées construisent une texture expressive.",
    "steps": [
      "Dessine des boucles libres sans appuyer fortement.",
      "Superpose davantage les boucles dans les ombres."
    ],
    "tip": "Repasse le court extrait et reproduis le geste sur une feuille d’essai."
  },
  {
    "id": "v4",
    "youtubeId": "HtKuG9CDRQg",
    "start": 0,
    "end": 28,
    "creator": "Marissa Purnell",
    "title": "Estomper le graphite",
    "categoryName": "Ombrage",
    "description": "Observe comment un outil adoucit le graphite et les transitions de valeurs.",
    "steps": [
      "Dépose d’abord une fine couche de graphite.",
      "Estompe doucement sans salir la zone de lumière."
    ],
    "tip": "Procède par couches légères plutôt que par une forte pression."
  },
  {
    "id": "v5",
    "youtubeId": "0HSZTTc-Byc",
    "start": 0,
    "end": 14,
    "creator": "Marissa Purnell",
    "title": "Créer du volume avec des points",
    "categoryName": "Ombrage",
    "description": "L’espacement des points rend une surface plus claire ou plus sombre.",
    "steps": [
      "Espace les points du côté éclairé.",
      "Rapproche et multiplie les points dans les ombres."
    ],
    "tip": "Fais varier la densité des points plutôt que la pression."
  },
  {
    "id": "v6",
    "youtubeId": "5miv178rZLQ",
    "start": 0,
    "end": 21,
    "creator": "Marissa Purnell",
    "title": "Ombrer avec des hachures",
    "categoryName": "Ombrage",
    "description": "Des traits parallèles construisent progressivement les valeurs.",
    "steps": [
      "Trace de petits traits dans une même direction.",
      "Resserre les traits et ajoute des couches dans les ombres."
    ],
    "tip": "Garde une direction cohérente et laisse des espaces clairs."
  },
  {
    "id": "v7",
    "youtubeId": "bUo52UvO3SY",
    "start": 0,
    "end": 25,
    "creator": "Marissa Purnell",
    "title": "Des hachures qui suivent la forme",
    "categoryName": "Ombrage",
    "description": "Des lignes courbes suivent la surface et suggèrent son volume.",
    "steps": [
      "Trace des lignes courbes qui épousent la forme arrondie.",
      "Ajoute des lignes là où la surface s’éloigne de la lumière."
    ],
    "tip": "Imagine comment les lignes se poseraient sur une vraie balle."
  },
  {
    "id": "v8",
    "youtubeId": "1eAe7axDCKc",
    "start": 0,
    "end": 32,
    "creator": "Circle Line Art School",
    "title": "Une rue en perspective à un point",
    "categoryName": "Perspective",
    "description": "Observe comment les lignes de la rue et des maisons convergent vers un même point.",
    "steps": [
      "Place un point de fuite et dirige les bords de la rue vers lui.",
      "Construis les maisons avec des verticales et des lignes vers ce point."
    ],
    "tip": "Réduis les détails à mesure qu’ils s’éloignent."
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

    otherProducts: [],
  "videoUI": {
  "eyebrow": "LE DESSIN PAS À PAS",
  "heading": "Observe le geste. À toi de dessiner.",
  "intro": "Huit démonstrations courtes avec de vraies mains, un crayon et du papier. Regarde sans son, puis exerce-toi avec les étapes sous la vidéo.",
  "shortLessons": "démonstrations · 7–32 secondes",
  "noSound": "Sans son",
  "closeUp": "De vraies mains",
  "lesson": "Technique",
  "seconds": "s",
  "excerpt": "Démonstration courte",
  "play": "Lire",
  "pause": "Pause",
  "watch": "Voir la technique",
  "replay": "Revoir",
  "fullscreen": "Plein écran",
  "speed": "Vitesse",
  "loading": "Chargement de la vidéo…",
  "ready": "Observe d’abord le mouvement de la main, puis reproduis-le sur ta feuille.",
  "playing": "Suis le mouvement du crayon et la construction des traits.",
  "paused": "En pause. Consulte les étapes à ton rythme.",
  "finished": "Démonstration terminée. Revois-la ou choisis la technique suivante.",
  "next": "Technique suivante",
  "first": "Revenir au début",
  "progress": "Progression",
  "practice": "À toi de pratiquer",
  "tip": "Conseil pratique",
  "choose": "Choisis une technique",
  "source": "Démonstration originale",
  "original": "Ouvrir la vidéo originale",
  "error": "La vidéo ne peut pas être chargée. Réessaie ou ouvre la vidéo originale.",
  "note": "Prépare du papier, un crayon et une gomme. Observe d’abord, ralentis la vidéo si besoin, puis reproduis le geste."
}
};
