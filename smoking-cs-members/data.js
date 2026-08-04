/**
 * Uzení Masa & Grilování — Členská sekce (Čeština)
 */

const APP_DATA = {
    config: {
        brandName: "Uzení Masa & Grilování",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Dotaz na podporu ohledně přístupu (Uzení Masa & Grilování)",
        emailBodyTemplate: "Dobrý den, týme podpory! Rád/a bych požádal/a o pomoc ohledně mého přístupu do členské sekce Uzení Masa & Grilování.\n\nMoje jméno je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Uzení Masa pro Začátečníky — Edice 2026",
            description: "Ovlásněte Oheň, Kouř, Teplotu a Šťavnatost Doma. Jasný a srozumitelný průvodce krok za krokem v pohodlí vašeho domova pro dosažení dokonalého uzeného masa.",
            badgeText: "Hlavní kniha",
            badgeColor: "#BF360C",
            features: [
                "Přesná kontrola ohně, kouře a teploty",
                "Podrobné pokyny krok za krokem pro začátečníky",
                "Praktické tipy pro uzení masa doma"
            ],
            downloadUrl: "materials/SMOKING-1-CZ.pdf",
            coverImage: "assets/covers/smo_IMG1_cz.png",
            buttonText: "Stáhnout Hlavní knihu (PDF)"
        },
        {
            id: "b2",
            title: "Recepty na Grilování a BBQ — Edice 2026",
            description: "Vynikající Uzená Masa, Přílohy a Kompletní Grilovací Menu pro rodinná setkání, narozeniny, sportovní akce a nezapomenutelné párty na zahradě.",
            badgeText: "Bonus #1",
            badgeColor: "#8D6E63",
            features: [
                "Nejlepší tradiční recepty na uzené maso",
                "Klasické přílohy ve stylu BBQ",
                "Kompletní menu pro každou příležitost"
            ],
            downloadUrl: "materials/SMOKING-2-CZ.pdf",
            coverImage: "assets/covers/smo_IMG1_cz.png",
            buttonText: "Stáhnout Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "BBQ Koření, Omáčky a Marinády — Edice 2026",
            description: "Vytvořte Výrazné a Vyvážené Chutě pro Každý Druh Masa. Definitivní průvodce dodáním dokonalého a neodolatelného chuťového nádechu vašim pokrmům.",
            badgeText: "Bonus #2",
            badgeColor: "#E64A19",
            features: [
                "Tajné recepty na prémiové směsi koření a dry rubs",
                "Vynikající omáčky a marinády pro každý typ masa",
                "Techniky maximalizace chuti pro mistry grilu"
            ],
            downloadUrl: "materials/SMOKING-3-CZ.pdf",
            coverImage: "assets/covers/smo_IMG1_cz.png",
            buttonText: "Stáhnout Bonus #2 (PDF)"
        }
    ],

    otherProducts: []
};
