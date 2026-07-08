/**
 * NATURE'S APOTHECARY — Members Area Data (English)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Naturligt Apotek", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Fråga om kursåtkomst (Naturligt Apotek)",
        emailBodyTemplate: "Hej supportteamet! Jag skulle vilja få hjälp med mitt medlemsområde för Naturligt Apotek.\n\nMitt namn är: ______.",

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
            title: "Naturligt Apotek — Komplett guide",
            description: "Huvudguiden för att bygga ditt eget naturliga apotek hemma. Lär dig vilka örter du ska använda, vilka recept som verkligen fungerar och hur du förbereder dem steg för steg, utan att behöva vara en expert.",
            badgeText: "HUVUDBOK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Enkla beredningsmetoder för nybörjare",
                "Guider till örter och köksingredienser",
                "Steg för steg-örtrecept för vanliga besvär"
            ],
            downloadUrl: "materials/G-FREE-1-SV.pdf",
            coverImage: "assets/covers/gf_IMG1_sv.png",
            buttonText: "Ladda ner huvudbok"
        },
        {
            id: "b2",
            title: "Läkande huskurer från köket",
            description: "Upptäck de terapeutiska egenskaperna hos vanliga läkeörter och lär dig att använda dem säkert för dagligt välbefinnande: lugnande teer, siraper, salvor och mer.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medicinska profiler för över 20 örter",
                "Säkerhetsriktlinjer och dosering",
                "Traditionella läkande tillämpningar"
            ],
            downloadUrl: "materials/G-FREE-2-SV.pdf",
            coverImage: "assets/covers/gf_IMG1_sv.png",
            buttonText: "Ladda ner bonus #1"
        },
        {
            id: "b3",
            title: "Läkande örtteer",
            description: "Lär dig att skapa lugnande örtinfusioner för sömn, matsmältning, avslappning, halsens hälsa, immunförsvar och dagligt välbefinnande med enkla ingredienser.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Blandningar för sömn, matsmältning och avslappning",
                "Recept med honung, ingefära, mynta och kamomill",
                "Steg för steg för att förbereda hemma"
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

// Force redeploy v5