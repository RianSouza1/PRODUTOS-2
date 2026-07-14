/**
 * FÀCIL SENSE GLUTEN — Àrea de Membres Data (Català)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Fàcil Sense Gluten", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pregunta sobre l'accés al curs (Fàcil Sense Gluten)",
        emailBodyTemplate: "Hola equip de suport! M'agradaria rebre ajuda amb la meva àrea de membres de Fàcil Sense Gluten.\n\nEl meu nom és: ______.",

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
            title: "El llibre de cuina fàcil sense gluten",
            description: "Menjars senzills de cada dia per a principiants. Descobreix com de fàcil i deliciosa pot ser la cuina sense gluten amb receptes pràctiques pas a pas.",
            badgeText: "LLIBRE PRINCIPAL",
            badgeColor: "#10B981",
            features: [
                "Menjars senzills de cada dia per a principiants",
                "Receptes delicioses i saludables pas a pas",
                "Guia essencial per a un estil de vida sense gluten"
            ],
            downloadUrl: "materials/G-FREE-1-CA.pdf",
            coverImage: "assets/covers/gf_IMG1_ca.png",
            buttonText: "Descarrega el llibre principal"
        },
        {
            id: "b2",
            title: "Forn fàcil sense gluten i menjars de confort",
            description: "Millors pans, aperitius, postres i preferits familiars. Apren a enfornar pans i dolços sense gluten tendres i deliciosos que agradaran a tothom.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B",
            features: [
                "Receptes de pa i aperitius sense gluten",
                "Postres delicioses i preferits familiars",
                "Consells de forn per a resultats perfectes cada vegada"
            ],
            downloadUrl: "materials/G-FREE-2-CA.pdf",
            coverImage: "assets/covers/gf_IMG1_ca.png",
            buttonText: "Descarrega el bonus #1"
        },
        {
            id: "b3",
            title: "Pla de menjars de 30 dies sense gluten i guia de compres",
            description: "Menús setmanals senzills, llistes de compres organitzades i ajuda d'experts amb la preparació dels menjars per fer la teva transició senzilla i sense estrès.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6",
            features: [
                "Pla de menjars complet de 30 dies",
                "Llistes de compres setmanals organitzades",
                "Consells útils per preparar fàcilment els menjars"
            ],
            downloadUrl: "materials/G-FREE-3-CA.pdf",
            coverImage: "assets/covers/gf_IMG1_ca.png",
            buttonText: "Descarrega el bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v10