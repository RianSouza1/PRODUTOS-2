/**
 * ENKEL GLUTENFRI — Data for Medlemsområde (Norsk)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Enkel Glutenfri", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørsmål om tilgang til kurset (Enkel Glutenfri)",
        emailBodyTemplate: "Hei kundestøtte! Jeg trenger hjelp med mitt medlemsområde for Enkel Glutenfri.\n\nMitt navn er: ______.",

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
            title: "Den enkle glutenfrie kokeboken",
            description: "Enkle hverdagsmåltider for nybegynnere. Oppdag hvor enkelt og deilig glutenfri matlaging kan være med praktiske oppskrifter trinn for trinn.",
            badgeText: "HOVEDBOK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Enkle hverdagsmåltider for nybegynnere",
                "Deilige og sunne oppskrifter trinn for trinn",
                "Viktig guide til en glutenfri livsstil"
            ],
            downloadUrl: "materials/G-FREE-1-NO.pdf",
            coverImage: "assets/covers/gf_IMG1_no.png",
            buttonText: "Last ned hovedboken"
        },
        {
            id: "b2",
            title: "Glutenfri hverdagsbakst & kosmat",
            description: "Bedre brød, snacks, desserter og familiefavoritter. Lær hvordan du baker myke, deilige glutenfrie brød og godbiter som alle vil elske.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Oppskrifter på glutenfritt brød og snacks",
                "Deilige desserter og familiefavoritter",
                "Baketips for perfekt resultat hver gang"
            ],
            downloadUrl: "materials/G-FREE-2-NO.pdf",
            coverImage: "assets/covers/gf_IMG1_no.png",
            buttonText: "Last ned bonus #1"
        },
        {
            id: "b3",
            title: "30-dagers glutenfri måltidsplan & handleguide",
            description: "Enkle ukemenyer, organiserte handlelister og eksperthjelp med måltidsforberedelse for å gjøre overgangen din sømløs og stressfri.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Komplett 30-dagers måltidsplan",
                "Organiserte ukentlige handlelister",
                "Nyttige tips for enkel måltidsforberedelse"
            ],
            downloadUrl: "materials/G-FREE-3-NO.pdf",
            coverImage: "assets/covers/gf_IMG1_no.png",
            buttonText: "Last ned bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v9