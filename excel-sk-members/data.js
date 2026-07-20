/**
 * Excel Mastery — Členská zóna (Slovenčina)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Otázka ohľadom prístupu (Excel Mastery)",
        emailBodyTemplate: "Dobrý deň, tím podpory. Rád/rada by som získal/a pomoc s mojím prístupom do členskej zóny Excel Mastery.\n\nMoje meno je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Excel od nuly po profesionálnu úroveň — Vydanie 2026",
            description: "Praktický sprievodca pre začiatočníkov o tabuľkových procesoroch, organizácii a každodennej produktivite. Od prvej bunky až po pokročilé nástroje.",
            badgeText: "Hlavný materiál",
            badgeColor: "#1a7a45",
            features: [
                "Tabuľky a organizácia údajov pre začiatočníkov",
                "Každodenná produktivita a správa zoznamov klientov",
                "Správa financií a plánovanie času v Exceli"
            ],
            downloadUrl: "materials/Excel-1-SK.pdf",
            coverImage: "assets/covers/excel_IMG1_sk.png",
            buttonText: "Stiahnuť hlavný materiál"
        },
        {
            id: "b2",
            title: "Excelové vzorce, funkcie a inteligentné pracovné postupy — Vydanie 2026",
            description: "Praktický sprievodca, ako rýchlejšie riešiť problémy v Exceli. Využite vzorce a funkcie na premenu jednoduchých tabuliek na výkonné nástroje na riešenie úloh.",
            badgeText: "Bonus #1",
            badgeColor: "#D97706",
            features: [
                "Pokročilé vzorce a funkcie v Exceli",
                "Automatické výpočty a inteligentné procesy",
                "Rýchle riešenie každodenných úloh"
            ],
            downloadUrl: "materials/Excel-2-SK.pdf",
            coverImage: "assets/covers/excel_IMG1_sk.png",
            buttonText: "Stiahnuť bonus #1"
        },
        {
            id: "b3",
            title: "Tabuľky Excelu, správy a výkazy — Vydanie 2026",
            description: "Praktický sprievodca premenou údajov na prehľadné, profesionálne správy. Naučte sa efektívne prezentovať výsledky šéfovi, klientovi alebo tímu.",
            badgeText: "Bonus #2",
            badgeColor: "#7C3AED",
            features: [
                "Profesionálne prehľady (Dashboards) a kontingenčné tabuľky",
                "Súhrnné správy a Pivot tabuľky",
                "Prezentácia údajov šéfovi, klientom a tímu"
            ],
            downloadUrl: "materials/Excel-3-SK.pdf",
            coverImage: "assets/covers/excel_IMG1_sk.png",
            buttonText: "Stiahnuť bonus #2"
        }
    ],

    otherProducts: []
};
