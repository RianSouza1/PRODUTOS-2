/**
 * Word Mastery — Členská sekce (Čeština)
 */

const APP_DATA = {
    config: {
        brandName: "Word Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Dotaz na přístup (Word Mastery)",
        emailBodyTemplate: "Dobrý den, týme podpory! Rád bych požádal o pomoc s přístupem do členské sekce Word Mastery.\n\nMoje jméno je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Word od Nuly k Profesionálovi — Vydání 2026 (1. díl z 3)",
            description: "Kompletní průvodce pro začátečníky – naučte se vytvářet přehledné, upravené a profesionální dokumenty v aplikaci Microsoft Word.",
            badgeText: "Hlavní příručka",
            badgeColor: "#2563EB",
            features: [
                "Ovládněte základy aplikace Microsoft Word",
                "Vytvářejte přehledné a skvěle upravené dokumenty",
                "Praktické rady pro každodenní správu dokumentů"
            ],
            downloadUrl: "materials/WORD-1-CZ.pdf",
            coverImage: "assets/covers/word_IMG1_cz.png",
            buttonText: "Stáhnout hlavní příručku"
        },
        {
            id: "b2",
            title: "Formátování, Styly & Chytré Pracovní Postupy ve Wordu — Vydání 2026 (Kniha 2 ze 3)",
            description: "Praktický průvodce tvorbou konzistentních, přehledně strukturovaných a profesionálních dokumentů v Microsoft Wordu.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Používejte pokročilé styly a formátování",
                "Zajistěte konzistentní strukturu všech dokumentů",
                "Zavádějte efektivní a chytré pracovní postupy"
            ],
            downloadUrl: "materials/WORD-2-CZ.pdf",
            coverImage: "assets/covers/word_IMG1_cz.png",
            buttonText: "Stáhnout Bonus #1"
        },
        {
            id: "b3",
            title: "Šablony Wordu, Korespondence & Pokročilé Nástroje — Vydání 2026 (3. díl ze 3)",
            description: "Znovupoužitelné dokumenty, personalizovaná korespondence, interaktivní formuláře a chytrá automatizace v aplikaci Microsoft Word.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Navrhujte opakovaně použitelné šablony a formuláře",
                "Hromadná korespondence pro personalizované dopisy",
                "Využívejte chytré automatizační nástroje ve Wordu"
            ],
            downloadUrl: "materials/WORD-3-CZ.pdf",
            coverImage: "assets/covers/word_IMG1_cz.png",
            buttonText: "Stáhnout Bonus #2"
        }
    ],

    otherProducts: []
};
// Redeploy trigger comment
