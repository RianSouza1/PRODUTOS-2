/**
 * Údržba & Oprava Domu — Členská sekce (Čeština)
 */

const APP_DATA = {
    config: {
        brandName: "Údržba & Oprava Domu",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Dotaz na přístup (Údržba & Oprava Domu)",
        emailBodyTemplate: "Dobrý den, týme podpory! Rád bych požádal o pomoc s přístupem do členské sekce Údržba & Oprava Domu.\n\nMoje jméno je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Kompletní průvodce údržbou & vylepšením vašeho domu — Vydání 2026",
            description: "Praktické projekty, rady odborníků & výsledky, které vydrží. Váš úplný průvodce údržbou, opravami a vylepšením domova — s jistotou, odborností a výsledkem udělaným pořádně, aby to vydrželo.",
            badgeText: "Hlavní příručka",
            badgeColor: "#D97706",
            features: [
                "Návody krok za krokem pro základní opravy v domě",
                "Rady odborníků pro údržbové projekty",
                "Praktické kutilské tipy pro dlouhotrvající výsledky"
            ],
            downloadUrl: "materials/REPAIR-1-CZ.pdf",
            coverImage: "assets/covers/rep_IMG1_cz.png",
            buttonText: "Stáhnout hlavní příručku"
        },
        {
            id: "b2",
            title: "Praktický průvodce domovními elektroinstalacemi — Aktualizované vydání 2026",
            description: "Bezpečně • V souladu s ČSN 33 2000 • Svépomocí s jistotou. Aktualizovaný praktický manuál pro bezpečnou realizaci elektroinstalací v domácnosti.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Bezpečné provádění domovních elektroinstalačních prací",
                "Plný soulad s normami ČSN 33 2000",
                "Návody krok za krokem pro běžné instalace"
            ],
            downloadUrl: "materials/REPAIR-2-CZ.pdf",
            coverImage: "assets/covers/rep_IMG1_cz.png",
            buttonText: "Stáhnout Bonus #1"
        },
        {
            id: "b3",
            title: "Kompletní průvodce vodoinstalací — Vydání 2026",
            description: "Opravuj • Vylepšuj • Udržuj vše v pořádku. Tvůj praktický manuál pro pochopení, údržbu a udržení domácího potrubí v perfektním stavu.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Diagnostika a řešení běžných problémů s vodoinstalací",
                "Udržování domácích rozvodů vody v perfektním stavu",
                "Jasné instrukce pro začátečníky i domácí kutily"
            ],
            downloadUrl: "materials/REPAIR-3-CZ.pdf",
            coverImage: "assets/covers/rep_IMG1_cz.png",
            buttonText: "Stáhnout Bonus #2"
        }
    ],

    otherProducts: []
};
