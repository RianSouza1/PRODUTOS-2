/**
 * EENVOUDIG GLUTENVRIJ — Ledengedeelte Data (Nederlands)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Eenvoudig Glutenvrij", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vraag over toegang tot de cursus (Eenvoudig Glutenvrij)",
        emailBodyTemplate: "Hallo supportteam! Ik wil graag hulp met mijn ledengedeelte voor Eenvoudig Glutenvrij.\n\nMijn naam is: ______.",

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
            title: "Het Eenvoudige Glutenvrije Kookboek",
            description: "Eenvoudige maaltijden voor elke dag voor beginners. Ontdek hoe eenvoudig en heerlijk glutenvrij koken kan zijn met praktische, stap-voor-stap recepten.",
            badgeText: "HOOFDBOEK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Eenvoudige maaltijden voor elke dag voor beginners",
                "Heerlijke en gezonde recepten stap-voor-stap",
                "Essentiële gids voor een glutenvrije levensstijl"
            ],
            downloadUrl: "materials/G-FREE-1-NL.pdf",
            coverImage: "assets/covers/gf_IMG1_nl.png",
            buttonText: "Hoofdboek downloaden"
        },
        {
            id: "b2",
            title: "Alledaags Glutenvrij Bakken & Comfortgerechten",
            description: "Beter brood, snacks, desserts & familiefavorieten. Leer hoe je zacht, heerlijk glutenvrij brood en lekkernijen bakt waar iedereen dol op zal zijn.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Recepten voor glutenvrij brood en snacks",
                "Heerlijke desserts en familiefavorieten",
                "Baktips voor perfecte resultaten, elke keer weer"
            ],
            downloadUrl: "materials/G-FREE-2-NL.pdf",
            coverImage: "assets/covers/gf_IMG1_nl.png",
            buttonText: "Bonus #1 downloaden"
        },
        {
            id: "b3",
            title: "30-Daags Glutenvrij Menuplan & Boodschappenlijst",
            description: "Eenvoudige weekmenu's, boodschappenlijsten & hulp bij het voorbereiden van maaltijden om je overgang soepel en stressvrij te maken.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Compleet 30-daags menuplan",
                "Georganiseerde wekelijkse boodschappenlijsten",
                "Handige tips voor eenvoudige maaltijdvoorbereiding"
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

// Force redeploy v9