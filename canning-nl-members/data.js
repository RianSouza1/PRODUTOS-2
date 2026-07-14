/**
 * VOEDSELCONSERVERING & OPSLAG — Medledenomgeving Data (Nederlands)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Voedselconservering & Opslag", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vraag over toegang (Voedselconservering & Opslag)",
        emailBodyTemplate: "Hallo supportteam! Ik wil graag hulp krijgen met mijn Voedselconservering & Opslag medledenomgeving.\n\nMijn naam is: ______.",

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
            title: "Complete inblikbijbel voor inmaken en conserveren 2026",
            description: "Een gebruiksvriendelijke gids voor beginners over steriliseren in een waterbad, drukconservering, gefermenteerde producten, jam, sauzen, veilige opslag en het thuis bewaren van voedsel. Uw complete, op veiligheid gerichte gids om thuis voedsel te conserveren – van uw eerste pot tot een volledig gevulde voorraadkast.",
            badgeText: "HOOFDBOEK",
            badgeColor: "#C2593F", // Terracotta orange
            features: [
                "Beginnersgids voor waterbad- & drukconservering",
                "Veilige keukenpraktijken en bewaartemperaturen",
                "Stap-voor-stap methoden voor jam, sauzen en groenten"
            ],
            downloadUrl: "materials/CANNING-1-NL.pdf",
            coverImage: "assets/covers/canning_IMG1_nl.png",
            buttonText: "Download hoofdboek"
        },
        {
            id: "b2",
            title: "Gids voor de keuken met houdbare voorraadmengsels",
            description: "Zelfgemaakte droge mengsels, potten met kant-en-klare maaltijden, soepenmixen, dessertmixen, kruidenmixen en handige basisproducten voor de voorraadkast voor elke dag. Jouw keuken, jouw ingrediënten, jouw regels – zonder dat je sterilisatieapparatuur hoeft te gebruiken.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706", // Amber gold
            features: [
                "Zelfgemaakte droge mixen en kant-en-klare potten",
                "Soepmixen, dessertmixen en kruidenmengsels",
                "Geen sterilisatieapparatuur nodig voor snelle bereiding"
            ],
            downloadUrl: "materials/CANNING-2-NL.pdf",
            coverImage: "assets/covers/canning_IMG1_nl.png",
            buttonText: "Download bonus #1"
        },
        {
            id: "b3",
            title: "Gids voor thuisfermentatie voor beginners",
            description: "Eenvoudige gefermenteerde groenten, zuurkool, ingelegde augurken, recepten vergelijkbaar met kimchi, pekel, kruiden, gefermenteerde dranken, probleemoplossing en veilige keukenpraktijken. Traditioneel, praktisch en beginnersvriendelijk.",
            badgeText: "BONUS #2",
            badgeColor: "#5A7A56", // Olive green
            features: [
                "Gefermenteerde groenten, zuurkool en kimchi recepten",
                "Pekelverhoudingen, kruiden en gefermenteerde dranken",
                "Probleemoplossing & traditionele voedselveilige methoden"
            ],
            downloadUrl: "materials/CANNING-3-NL.pdf",
            coverImage: "assets/covers/canning_IMG1_nl.png",
            buttonText: "Download bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2