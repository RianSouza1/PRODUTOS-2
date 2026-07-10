/**
 * NATUURLIJKE APOTHEEK — Ledengedeelte Data (Nederlands)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Natuurlijke Apotheek", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vraag over toegang tot de cursus (Natuurlijke Apotheek)",
        emailBodyTemplate: "Hallo supportteam! Ik wil graag hulp met mijn ledengedeelte voor Natuurlijke Apotheek.\n\nMijn naam is: ______.",

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
            title: "Natuurlijke Apotheek — Complete gids",
            description: "De hoofdgids om thuis je eigen natuurlijke apotheek op te zetten. Leer welke kruiden je moet gebruiken, welke recepten echt werken en hoe je ze stap voor stap bereidt, zonder een expert te hoeven zijn.",
            badgeText: "HOOFDBOEK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Eenvoudige bereidingsmethoden voor beginners",
                "Gidsen voor kruiden en keukeningrediënten",
                "Stap-voor-stap kruidenrecepten voor veelvoorkomende kwalen"
            ],
            downloadUrl: "materials/G-FREE-1-NL.pdf",
            coverImage: "assets/covers/gf_IMG1_nl.png",
            buttonText: "Hoofdboek downloaden"
        },
        {
            id: "b2",
            title: "Genezende huismiddeltjes uit de keuken",
            description: "Ontdek de therapeutische eigenschappen van veelvoorkomende geneeskrachtige kruiden en leer hoe je ze veilig kunt gebruiken voor dagelijks welzijn: verzachtende theesoorten, siropen, zalven en meer.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medische profielen voor meer dan 20 kruiden",
                "Veiligheidsrichtlijnen en dosering",
                "Tradionele geneeskrachtige toepassingen"
            ],
            downloadUrl: "materials/G-FREE-2-NL.pdf",
            coverImage: "assets/covers/gf_IMG1_nl.png",
            buttonText: "Bonus #1 downloaden"
        },
        {
            id: "b3",
            title: "Genezende kruidentheeën",
            description: "Leer hoe je verzachtende kruideninfusies maakt voor slaap, spijsvertering, ontspanning, keelgezondheid, immuunsysteem en dagelijks welzijn met eenvoudige ingrediënten.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Mengsels voor slaap, spijsvertering en ontspanning",
                "Recepten met honing, gember, munt en kamille",
                "Stap-voor-stap om thuis te bereiden"
            ],
            downloadUrl: "materials/G-FREE-3-NL.pdf",
            coverImage: "assets/covers/gf_IMG1_nl.png",
            buttonText: "Bonus #2 downloaden"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v6