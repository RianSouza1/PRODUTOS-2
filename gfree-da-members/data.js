/**
 * GLUTEN-FREE — Members Area Data (Danish)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Enkel Glutenfri", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørgsmål om kursusadgang (Enkel Glutenfri)",
        emailBodyTemplate: "Hej supportteam! Jeg vil gerne have hjælp til mit medlemsområde for Enkel Glutenfri.\n\nMit navn er: ______.",

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
            title: "Den enkle glutenfrie kogebog",
            description: "Enkle måltider til hver dag for begyndere. Oplev, hvor nemt og lækkert glutenfri madlavning kan være med praktiske, trin-for-trin opskrifter.",
            badgeText: "HOVEDBOG",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Enkle måltider til hver dag for begyndere",
                "Lækre og sunde opskrifter trin-for-trin",
                "Essentiel guide til en glutenfri livsstil"
            ],
            downloadUrl: "materials/G-FREE-1-DK.pdf",
            coverImage: "assets/covers/gf_IMG1_da.png",
            buttonText: "Download hovedbog"
        },
        {
            id: "b2",
            title: "Hverdags glutenfri bagning & comfortretter",
            description: "Bedre brød, snacks, desserter og familiens favoritter. Lær at bage bløde, lækre glutenfrie brød og kager, som alle vil elske.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Opskrifter på glutenfrit brød og snacks",
                "Lækre desserter og familiefavoritter",
                "Bagetips til perfekte resultater hver gang"
            ],
            downloadUrl: "materials/G-FREE-2-DK.pdf",
            coverImage: "assets/covers/gf_IMG1_da.png",
            buttonText: "Download bonus #1"
        },
        {
            id: "b3",
            title: "30-dages glutenfri menuplan & indkøbsliste",
            description: "Enkle ugemenuer, organiserede indkøbslister og eksperthjælp til madlavning for at gøre din overgang nem og stressfri.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Komplet 30-dages menuplan",
                "Organiserede ugentlige indkøbslister",
                "Nyttige tips til nem madlavning"
            ],
            downloadUrl: "materials/G-FREE-3-DK.pdf",
            coverImage: "assets/covers/gf_IMG1_da.png",
            buttonText: "Download bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v7