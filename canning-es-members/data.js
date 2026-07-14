/**
 * CONSERVACIÓN Y ALMACENAMIENTO DE ALIMENTOS — Datos del Área de Miembros (Español)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Conservación y Almacenamiento", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pregunta sobre el acceso (Conservación y Almacenamiento)",
        emailBodyTemplate: "Hola equipo de soporte! Me gustaría recibir ayuda con mi área de miembros de Conservación y Almacenamiento.\n\nMi nombre es: ______.",

        // Show floating "?" help button on all screens
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VIDEOS (Video course) — empty if no videos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. BOOKS (E-books and PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "La biblia completa de conservas y preservación 2026",
            description: "Una guía fácil de usar para principiantes sobre esterilización en baño María, conservas a presión, productos fermentados, mermeladas, salsas, almacenamiento seguro y conservación de alimentos en el hogar. Desde el primer frasco hasta una despensa completamente llena.",
            badgeText: "LIBRO PRINCIPAL",
            badgeColor: "#C2593F", // Terracotta orange
            features: [
                "Guía para principiantes sobre baño María y presión",
                "Prácticas seguras y temperaturas de almacenamiento",
                "Métodos paso a paso para mermeladas, salsas y verduras"
            ],
            downloadUrl: "materials/CANNING-1-ES.pdf",
            coverImage: "assets/covers/canning_IMG1_es.png",
            buttonText: "Descargar libro principal"
        },
        {
            id: "b2",
            title: "Guía de cocina para provisiones duraderas",
            description: "Mezclas secas caseras, frascos con comidas preparadas, mezclas para sopas, mezclas para postres, mezclas de especias y alimentos básicos prácticos para la despensa de cada día. Tu cocina, tus ingredientes, tus reglas – sin necesidad de usar equipo de esterilización.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706", // Amber gold
            features: [
                "Mezclas secas caseras y frascos listos para servir",
                "Sopas secas, mezclas para postres y especias",
                "Sin necesidad de esterilizadores para preparación rápida"
            ],
            downloadUrl: "materials/CANNING-2-ES.pdf",
            coverImage: "assets/covers/canning_IMG1_es.png",
            buttonText: "Descargar bonus #1"
        },
        {
            id: "b3",
            title: "Guía para principiantes sobre la fermentación casera",
            description: "Verduras fermentadas sencillas, chucrut, pepinillos fermentados, recetas similares al kimchi, salmuera, especias, bebidas fermentadas, solución de problemas y prácticas seguras de cocina. Tradicional, práctica y para principiantes.",
            badgeText: "BONUS #2",
            badgeColor: "#5A7A56", // Olive green
            features: [
                "Recetas de verduras fermentadas, chucrut y kimchi",
                "Ratios de salmuera, especias y bebidas fermentadas",
                "Solución de problemas y métodos tradicionales seguros"
            ],
            downloadUrl: "materials/CANNING-3-ES.pdf",
            coverImage: "assets/covers/canning_IMG1_es.png",
            buttonText: "Descargar bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2