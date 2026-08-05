/**
 * Majstrovstvo v programe Word — Členská Zóna (Slovenčina)
 */

const APP_DATA = {
    config: {
        brandName: "Majstrovstvo v programe Word",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Otázka k prístupu (Majstrovstvo v programe Word)",
        emailBodyTemplate: "Dobrý deň, tím podpory! Rád by som požiadal o pomoc s prístupom do členskej zóny Majstrovstva v programe Word.\n\nMoje meno je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Word od Nuly po Profesionála — Vydanie 2026 (1. časť z 3)",
            description: "Kompletný sprievodca pre začiatočníkov – naučte sa vytvárať prehľadné, upravené a profesionálne dokumenty v aplikácii Microsoft Word.",
            badgeText: "Hlavná príručka",
            badgeColor: "#2563EB",
            features: [
                "Osvojte si základy aplikácie Microsoft Word",
                "Vytvárajte prehľadné a skvele upravené dokumenty",
                "Praktické rady pre každodennú správu dokumentov"
            ],
            downloadUrl: "materials/WORD-1-SK.pdf",
            coverImage: "assets/covers/word_IMG1_sk.png",
            buttonText: "Stiahnuť hlavnú príručku (PDF)"
        },
        {
            id: "b2",
            title: "Formátovanie, Štýly & Inteligentné Pracovné Postupy vo Worde — Vydanie 2026 (2. časť z 3)",
            description: "Praktický sprievodca tvorbou konzistentných, prehľadne štruktúrovaných a profesionálnych dokumentov v Microsoft Worde.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Používajte pokročilé štýly a formátovanie",
                "Zabezpečte konzistentnú štruktúru všetkých dokumentov",
                "Zavádzajte efektívne a inteligentné pracovné postupy"
            ],
            downloadUrl: "materials/WORD-2-SK.pdf",
            coverImage: "assets/covers/word_IMG1_sk.png",
            buttonText: "Stiahnuť Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "Šablóny Wordu, Hromadná Korespondencia & Pokročilé Nástroje — Vydanie 2026 (3. časť z 3)",
            description: "Znovu použiteľné dokumenty, personalizovaná korespondencia, interaktívne formuláre a inteligentná automatizácia v aplikácii Microsoft Word.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Navrhujte opakovane použiteľné šablóny a formuláre",
                "Hromadná korespondencia pre personalizované listy",
                "Využívajte inteligentné automatizačné nástroje vo Worde"
            ],
            downloadUrl: "materials/WORD-3-SK.pdf",
            coverImage: "assets/covers/word_IMG1_sk.png",
            buttonText: "Stiahnuť Bonus #2 (PDF)"
        }
    ],

    otherProducts: []
};
