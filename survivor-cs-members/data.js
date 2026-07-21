/**
 * Survival & Bushcraft — Členská sekce (Čeština)
 * Kompletní série Bushcraft & Přežití
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Dotaz k přístupu (Survival & Bushcraft)",
        emailBodyTemplate: "Dobrý den, potřebuji pomoci s přístupem do své členské sekce Survival & Bushcraft.\n\nMoje jméno je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Přežití pro začátečníky — Vydání 2026",
            description: "Voda, oheň, úkryt, signalizace a základní techniky přežití. Praktický průvodce pro každého, kdo tráví čas v přírodě — turisté, táborníci, lovci nebo běžní dobrodruzi.",
            badgeText: "Hlavní materiál",
            badgeColor: "#6B7C44",
            features: [
                "Jak najít, upravit a zajistit vodu v divočině",
                "Jak rozdělat oheň, postavit přístřešek a vysílat signály",
                "V terénu ověřené techniky pro začátečníky"
            ],
            downloadUrl: "materials/SURVIVOR-1-CZ.pdf",
            coverImage: "assets/covers/sur_IMG1_cz.png",
            buttonText: "Stáhnout hlavní materiál"
        },
        {
            id: "b2",
            title: "Bushcraft & dovednosti divočiny — Vydání 2026",
            description: "Vybavení, uzly, orientace, stavba tábora a samostatný život v přírodě. Základní dovednosti bushcraftu pro bezpečný a sebevědomý pobyt venku.",
            badgeText: "Bonus #1",
            badgeColor: "#7A5C3E",
            features: [
                "Ovládnutí nástrojů, uzlů a navigačních technik",
                "Stavba tábora a samostatné přežití v přírodě",
                "Podrobné návody krok za krokem pro začátečníky bez předchozích znalostí"
            ],
            downloadUrl: "materials/SURVIVOR-2-CZ.pdf",
            coverImage: "assets/covers/sur_IMG1_cz.png",
            buttonText: "Stáhnout Bonus #1"
        },
        {
            id: "b3",
            title: "Krizová připravenost & první pomoc pro přežití — Vydání 2026",
            description: "72hodinová nouzová taška, výpadek proudu, evakuace & bezpečnost rodiny. Vše, co běžné rodiny potřebují vědět pro případ nouze.",
            badgeText: "Bonus #2",
            badgeColor: "#8B4513",
            features: [
                "Správné sestavení 72hodinové nouzové tašky",
                "Příprava na výpadek proudu, evakuaci a domácí pohotovost",
                "Základní první pomoc pro rodiny v nouzových situacích"
            ],
            downloadUrl: "materials/SURVIVOR-3-CZ.pdf",
            coverImage: "assets/covers/sur_IMG1_cz.png",
            buttonText: "Stáhnout Bonus #2"
        }
    ],

    otherProducts: []
};
