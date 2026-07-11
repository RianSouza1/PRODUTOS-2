/**
 * GLUTEN-FREE — Members Area Data (German)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Einfach Glutenfrei", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Frage zum Kurszugang (Einfach Glutenfrei)",
        emailBodyTemplate: "Hallo Support-Team! Ich hätte gerne Hilfe mit meinem Mitgliederbereich für Einfach Glutenfrei.\n\nMein Name ist: ______.",

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
            title: "Das einfache glutenfreie Kochbuch",
            description: "Einfache Alltagsgerichte für Anfänger. Entdecken Sie mit praktischen Schritt-für-Schritt-Rezepten, wie einfach und lecker glutenfreies Kochen sein kann.",
            badgeText: "HAUPTBUCH",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Einfache Alltagsgerichte für Anfänger",
                "Leckere und gesunde Rezepte Schritt für Schritt",
                "Unverzichtbarer Leitfaden für einen glutenfreien Lebensstil"
            ],
            downloadUrl: "materials/G-FREE-1-AL.pdf",
            coverImage: "assets/covers/gf_IMG1_al.png",
            buttonText: "Hauptbuch herunterladen"
        },
        {
            id: "b2",
            title: "Alltägliches glutenfreies Backen & Wohlfühlgerichte",
            description: "Bessere Brote, Snacks, Desserts und Familienlieblinge. Lernen Sie, wie man weiche, leckere glutenfreie Brote und Leckereien backt, die jeder lieben wird.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Rezepte für glutenfreies Brot und Snacks",
                "Leckere Desserts und Familienlieblinge",
                "Backtipps für perfekte Ergebnisse bei jedem Mal"
            ],
            downloadUrl: "materials/G-FREE-2-AL.pdf",
            coverImage: "assets/covers/gf_IMG1_al.png",
            buttonText: "Bonus #1 herunterladen"
        },
        {
            id: "b3",
            title: "30-Tage glutenfreier Speiseplan & Einkaufsguide",
            description: "Einfache Wochenmenüs, organisierte Einkaufslisten und fachkundige Hilfe bei der Essensvorbereitung für einen reibungslosen und stressfreien Übergang.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Kompletter 30-Tage-Speiseplan",
                "Organisierte wöchentliche Einkaufslisten",
                "Hilfreiche Tipps für die einfache Essensvorbereitung"
            ],
            downloadUrl: "materials/G-FREE-3-AL.pdf",
            coverImage: "assets/covers/gf_IMG1_al.png",
            buttonText: "Bonus #2 herunterladen"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v6

