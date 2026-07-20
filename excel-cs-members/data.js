/**
 * Excel Mastery — Členská zóna (Čeština)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Dotaz ohledně přístupu (Excel Mastery)",
        emailBodyTemplate: "Dobrý den, týme podpory. Rád/a bych získal/a pomoc s mým přístupem do členské zóny Excel Mastery.\n\nMoje jméno je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Od nuly k Excel profesionálovi — Vydání 2026",
            description: "Praktický průvodce pro začátečníky, který pokrývá tabulkové kalkulace, organizaci a každodenní produktivitu. Od první buňky až po pokročilé nástroje.",
            badgeText: "Hlavní materiál",
            badgeColor: "#1a7a45",
            features: [
                "Tabulky a organizace dat pro začátečníky",
                "Každodenní produktivita a správa seznamů klientů",
                "Správa financí a plánování času v Excelu"
            ],
            downloadUrl: "materials/Excel-1-CZ.pdf",
            coverImage: "assets/covers/excel_IMG1_cs.png",
            buttonText: "Stáhnout hlavní materiál"
        },
        {
            id: "b2",
            title: "Excel vzorce, funkce a chytré pracovní postupy — Vydání 2026",
            description: "Praktický průvodce řešením úloh v Excelu rychleji. Využijte vzorce a funkce k přeměně jednoduchých tabulek v mocné nástroje na řešení problémů.",
            badgeText: "Bonus #1",
            badgeColor: "#D97706",
            features: [
                "Pokročilé vzorce a funkce v Excelu",
                "Automatické výpočty a chytré procesy",
                "Rychlé řešení každodenních úkolů"
            ],
            downloadUrl: "materials/Excel-2-CZ.pdf",
            coverImage: "assets/covers/excel_IMG1_cs.png",
            buttonText: "Stáhnout bonus #1"
        },
        {
            id: "b3",
            title: "Excelové tabulky, reporty, vzorce — Vydání 2026",
            description: "Praktický průvodce přeměnou dat na přehledné a profesionální reporty. Naučte se efektivně prezentovat výsledky vedení, klientům nebo týmu.",
            badgeText: "Bonus #2",
            badgeColor: "#7C3AED",
            features: [
                "Profesionální přehledy (Dashboards) a kontingenční tabulky",
                "Souhrnné reporty a Pivot tabulky",
                "Prezentace dat vedení, klientům a týmu"
            ],
            downloadUrl: "materials/Excel-3-CZ.pdf",
            coverImage: "assets/covers/excel_IMG1_cs.png",
            buttonText: "Stáhnout bonus #2"
        }
    ],

    otherProducts: []
};
