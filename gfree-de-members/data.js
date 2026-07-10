/**
 * NATURE'S APOTHECARY — Members Area Data (German)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Natürliche Apotheke", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Frage zum Kurszugang (Natürliche Apotheke)",
        emailBodyTemplate: "Hallo Support-Team! Ich hätte gerne Hilfe mit meinem Mitgliederbereich für Natürliche Apotheke.\n\nMein Name ist: ______.",

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
            title: "Natürliche Apotheke — Kompletter Leitfaden",
            description: "Der Hauptleitfaden für den Aufbau Ihrer eigenen natürlichen Apotheke zu Hause. Erfahren Sie, welche Kräuter Sie verwenden sollten, welche Rezepte wirklich funktionieren und wie Sie diese Schritt für Schritt zubereiten, ohne ein Experte sein zu müssen.",
            badgeText: "HAUPTBUCH",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Einfache Zubereitungsmethoden für Anfänger",
                "Leitfäden für Kräuter und Küchenzutaten",
                "Schritt-für-Schritt-Kräuterrezepte für häufige Beschwerden"
            ],
            downloadUrl: "materials/G-FREE-1-AL.pdf",
            coverImage: "assets/covers/gf_IMG1_al.png",
            buttonText: "Hauptbuch herunterladen"
        },
        {
            id: "b2",
            title: "Heilsame Hausmittel aus der Küche",
            description: "Entdecken Sie die therapeutischen Eigenschaften gängiger Heilkräuter und lernen Sie, diese sicher für das tägliche Wohlbefinden anzuwenden: beruhigende Tees, Sirupe, Salben und mehr.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medizinische Profile für über 20 Kräuter",
                "Sicherheitsrichtlinien und Dosierung",
                "Traditionelle heilsame Anwendungen"
            ],
            downloadUrl: "materials/G-FREE-2-AL.pdf",
            coverImage: "assets/covers/gf_IMG1_al.png",
            buttonText: "Bonus #1 herunterladen"
        },
        {
            id: "b3",
            title: "Heilsame Kräutertees",
            description: "Lernen Sie, beruhigende Kräutertees für Schlaf, Verdauung, Entspannung, Halsgesundheit, Immunsystem und tägliches Wohlbefinden aus einfachen Zutaten zuzubereiten.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Mischungen für Schlaf, Verdauung und Entspannung",
                "Rezepte mit Honig, Ingwer, Minze und Kamille",
                "Schritt für Schritt zu Hause zubereiten"
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

// Force redeploy v5
