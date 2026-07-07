/**
 * PRÍRODNÁ LEKÁREŇ — Members Area Data (Slovenčina)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Prírodná Lekáreň", // Name shown in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Otázka ohľadom prístupu ku kurzu (Prírodná Lekáreň)",
        emailBodyTemplate: "Dobrý deň, tím podpory! Rád by som požiadal o pomoc s členskou zónou Prírodná Lekáreň.\n\nMoje meno je: ______.",

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
            title: "Príručka prírodnej lekárne",
            description: "Kompletný sprievodca vybudovaním vlastnej prírodnej lekárne doma. Zistite, ktoré bylinky používať, ktoré recepty naozaj fungujú a ako ich pripraviť krok za krokom.",
            badgeText: "HLAVNÁ KNIHA",
            badgeColor: "#10B981",
            features: [
                "Jednoduché metódy prípravy pre začiatočníkov",
                "Sprievodcovia bylinkami a kuchynskými ingredienciami",
                "Bylinné recepty krok za krokom"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-SK.pdf",
            coverImage: "assets/covers/nature_IMG1_sk.png",
            buttonText: "Stiahnuť hlavnú knihu"
        },
        {
            id: "b2",
            title: "Liečivá sila bylín",
            description: "Odhaľte terapeutické vlastnosti bežných liečivých bylín a naučte sa ich bezpečne používať na každodenné zdravie, upokojujúce čaje a domácu starostlivosť.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B",
            features: [
                "Liečivé profily viac ako 20 bylín",
                "Bezpečnostné pokyny a dávkovanie",
                "Tradičné liečebné využitie"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-SK.pdf",
            coverImage: "assets/covers/nature_IMG1_sk.png",
            buttonText: "Stiahnuť Bonus #1"
        },
        {
            id: "b3",
            title: "Prostriedky inšpirované Barbarou O'Neill",
            description: "Tento sprievodca, inšpirovaný tradičnými prostriedkami a prírodnými wellness praktikami, vám pomôže žiť zdravší život bez chemických látok pomocou prírodných terapií.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6",
            features: [
                "Tradičné prírodné prostriedky",
                "Tipy pre život bez chémie",
                "Praktiky inšpirované Barbarou O'Neill"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-SK.pdf",
            coverImage: "assets/covers/nature_IMG1_sk.png",
            buttonText: "Stiahnuť Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
