/**
 * GLUTEN-FREE — Members Area Data (Swedish)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Enkel Glutenfri", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Fråga om kursåtkomst (Enkel Glutenfri)",
        emailBodyTemplate: "Hej supportteamet! Jag skulle vilja få hjälp med mitt medlemsområde för Enkel Glutenfri.\n\nMitt namn är: ______.",

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
            title: "Den enkla glutenfria kokboken",
            description: "Enkla måltider för varje dag för nybörjare. Upptäck hur enkelt och gott det kan vara att laga glutenfri mat med praktiska recept steg-för-steg.",
            badgeText: "HUVUDBOK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Enkla måltider för varje dag för nybörjare",
                "Goda och hälsosamma recept steg-för-steg",
                "Oumbärlig guide till en glutenfri livsstil"
            ],
            downloadUrl: "materials/G-FREE-1-SV.pdf",
            coverImage: "assets/covers/gf_IMG1_sv.png",
            buttonText: "Ladda ner huvudbok"
        },
        {
            id: "b2",
            title: "Glutenfri vardagsbakning & comfort food",
            description: "Bättre bröd, snacks, desserter och familjens favoriter. Lär dig baka mjuka, goda glutenfria bröd och bakverk som alla kommer att älska.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Recept på glutenfritt bröd och snacks",
                "Goda desserter och familjens favoriter",
                "Baktips för perfekt resultat varje gång"
            ],
            downloadUrl: "materials/G-FREE-2-SV.pdf",
            coverImage: "assets/covers/gf_IMG1_sv.png",
            buttonText: "Ladda ner bonus #1"
        },
        {
            id: "b3",
            title: "30-dagars glutenfri menyplan & inköpslista",
            description: "Enkla veckomenyer, organiserade inköpslistor och experthjälp med matförberedelser för att göra din övergång smidig och stressfri.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Komplett 30-dagars menyplan",
                "Organiserade veckovisa inköpslistor",
                "Praktiska tips för enkel matförberedelse"
            ],
            downloadUrl: "materials/G-FREE-3-SV.pdf",
            coverImage: "assets/covers/gf_IMG1_sv.png",
            buttonText: "Ladda ner bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v6