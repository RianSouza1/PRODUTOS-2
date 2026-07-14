/**
 * FØDEVAREKONSERVERING & OPBEVARING — Medlemsområde Data (Dansk)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Fødevarekonservering & Opbevaring", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørgsmål om adgang (Fødevarekonservering & Opbevaring)",
        emailBodyTemplate: "Hej supportteam! Jeg vil gerne have hjælp til min Fødevarekonservering & Opbevaring medlemsområde.\n\nMit navn er: ______.",

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
            title: "Den komplette guide til konservering og bevarelse 2026",
            description: "En brugervenlig guide for begyndere til vandbadsterilisering, trykkonservering, fermenterede produkter, marmelader, saucer, sikker opbevaring og fødevarekonservering i hjemmet. En komplet og sikkerhedsfokuseret guide til fødevarekonservering i hjemmet: fra det første glas til et fuldt fyldt spisekammer.",
            badgeText: "HOVEDBOG",
            badgeColor: "#C2593F", // Terracotta orange
            features: [
                "Begynderguide til vandbads- og trykkonservering",
                "Sikker køkkenpraksis og opbevaringstemperaturer",
                "Trin-for-trin metoder til marmelader, saucer og grøntsager"
            ],
            downloadUrl: "materials/CANNING-1-DA.pdf",
            coverImage: "assets/covers/canning_IMG1_da.png",
            buttonText: "Download hovedbog"
        },
        {
            id: "b2",
            title: "Madlavningsguide til langtidsholdbare forsyninger",
            description: "Hjemmelavede tørblandinger, glas med færdigretter, suppeblandinger, dessertblandinger, krydderiblandinger og praktiske basisvarer til hverdagens spisekammer. Dit køkken, dine ingredienser, dine regler – uden behov for at bruge steriliseringsudstyr.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706", // Amber gold
            features: [
                "Hjemmelavede tørblandinger og fodsportionerede glas",
                "Tørsupper, dessertblandinger og krydderiblandinger",
                "Intet behov for steriliseringsudstyr til hurtig madlavning"
            ],
            downloadUrl: "materials/CANNING-2-DA.pdf",
            coverImage: "assets/covers/canning_IMG1_da.png",
            buttonText: "Download bonus #1"
        },
        {
            id: "b3",
            title: "Begynderguide til hjemmegæring",
            description: "Enkle fermenterede grøntsager, surkål, fermenterede pickles, kimchilignende opskrifter, saltlage, krydderier, fermenterede drikke, fejlfinding og sikre køkkenrutiner. Traditionel, praktisk og begyndervenlig.",
            badgeText: "BONUS #2",
            badgeColor: "#5A7A56", // Olive green
            features: [
                "Fermenterede grøntsager, surkål og kimchi opskrifter",
                "Saltlagsforhold, krydderier og gærede drikkevarer",
                "Fejlfinding og traditionelle fødevaresikre metoder"
            ],
            downloadUrl: "materials/CANNING-3-DA.pdf",
            coverImage: "assets/covers/canning_IMG1_da.png",
            buttonText: "Download bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2