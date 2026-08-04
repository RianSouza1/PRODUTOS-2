/**
 * Údenie Mäsa & Grilovanie — Členská zóna (Slovenčina)
 */

const APP_DATA = {
    config: {
        brandName: "Údenie Mäsa & Grilovanie",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Žiadosť o podporu ohľadom prístupu (Údenie Mäsa & Grilovanie)",
        emailBodyTemplate: "Dobrý deň, tím podpory! Rád/rada by som požiadal/a o pomoc ohľadom môjho prístupu do členskej zóny Údenie Mäsa & Grilovanie.\n\nMoje meno je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Údenie Mäsa pre Začiatočníkov — Edícia 2026",
            description: "Ovládnite Oheň, Dym, Teplotu a Šťavnatosť Doma. Jasný a jednoduchý sprievodca krok za krokom v pohodlí vášho domova pre prípravu dokonalého údeného mäsa.",
            badgeText: "Hlavná kniha",
            badgeColor: "#BF360C",
            features: [
                "Presná kontrola ohňa, dymu a teploty",
                "Podrobné pokyny krok za krokom pre začiatočníkov",
                "Praktické tipy na údenie mäsa doma"
            ],
            downloadUrl: "materials/SMOKING-1-SK.pdf",
            coverImage: "assets/covers/smo_IMG1_sk.png",
            buttonText: "Stiahnuť Hlavnú knihu (PDF)"
        },
        {
            id: "b2",
            title: "Recepty na Grilovanie a BBQ — Edícia 2026",
            description: "Vynikajúce Údené Mäso, Prílohy a Kompletné Grilovacie Menu pre rodinné stretnutia, narodeniny, športové podujatia a nezabudnuteľné párty na záhrade.",
            badgeText: "Bonus #1",
            badgeColor: "#8D6E63",
            features: [
                "Najlepšie tradičné recepty na údené mäso",
                "Klasické prílohy v štýle BBQ",
                "Kompletné menu pre každú príležitosť"
            ],
            downloadUrl: "materials/SMOKING-2-SK.pdf",
            coverImage: "assets/covers/smo_IMG1_sk.png",
            buttonText: "Stiahnuť Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "BBQ Korenie, Omáčky a Marinády — Edícia 2026",
            description: "Vytvorte Výrazné a Vyvážené Chute pre Každý Druh Mäsa. Definitívny sprievodca dodaním dokonalého a neodolateľného chuťového nádychu vašim jedlám.",
            badgeText: "Bonus #2",
            badgeColor: "#E64A19",
            features: [
                "Tajné recepty na prémiové zmesi korenia a dry rubs",
                "Chutné omáčky a marinády pre každý typ mäsa",
                "Techniky maximalizácie chuti pre majstrov grilu"
            ],
            downloadUrl: "materials/SMOKING-3-SK.pdf",
            coverImage: "assets/covers/smo_IMG1_sk.png",
            buttonText: "Stiahnuť Bonus #2 (PDF)"
        }
    ],

    otherProducts: []
};
