/**
 * Pilates & Pohoda — Členská Zóna (Slovenčina)
 */

const APP_DATA = {
    config: {
        brandName: "Pilates & Pohoda",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Otázka ohľadom prístupu (Pilates & Pohoda)",
        emailBodyTemplate: "Dobrý deň, tím podpory! Chcel by som pomôcť s mojím prístupom do členskej zóny Pilates & Pohoda.\n\nMoje meno je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Pilates pre začiatočníkov — Edícia 2026",
            description: "Vlastným tempom, bez zhonu. Krok za krokom buduješ silu, pružnosť a dôveru v seba pohodlne priamo z domu. Navrhnuté tak, aby vám pomohlo stať sa silnejšími a flexibilnejšími.",
            badgeText: "Hlavný Materiál",
            badgeColor: "#C07A68",
            features: [
                "Cvičenia krok za krokom pre začiatočníkov doma",
                "Zlepšite svoje držanie tela, pružnosť a silu jadra",
                "Bezpečné pohyby bez nadmernej záťaže"
            ],
            downloadUrl: "materials/PILATES-1-SK.pdf",
            coverImage: "assets/covers/pil_IMG1_sk.png",
            buttonText: "Stiahnuť Hlavný Materiál"
        },
        {
            id: "b2",
            title: "Pilates pri Stene — Edícia 2026",
            description: "Jemné cvičenia pre domáce prostredie, ktoré prirodzene posilňujú vašu silu, rovnováhu a pohyblivosť. Použite stenu ako oporu pre korekciu držania tela a posilnenie tela.",
            badgeText: "Bonus #1",
            badgeColor: "#5B8C7D",
            features: [
                "Využite stenu pre lepšiu rovnováhu a podporu",
                "Jemné mobilizačné cvičenia pre celé telo",
                "Ideálne na domáce cvičenie bez špeciálneho vybavenia"
            ],
            downloadUrl: "materials/PILATES-2-SK.pdf",
            coverImage: "assets/covers/pil_IMG1_sk.png",
            buttonText: "Stiahnuť Bonus #1"
        },
        {
            id: "b3",
            title: "30-dňový program Pilates pre seniorov — Edícia 2026",
            description: "Jemný, každodenný program, ktorý vám pomôže krok za krokom a bez zhonu budovať silu, rovnováhu, pohyblivosť a dôveru vo vlastné telo. Špeciálne navrhnuté tak, aby ste zostali aktívni v bezpečí.",
            badgeText: "Bonus #2",
            badgeColor: "#9C6A88",
            features: [
                "Kompletný 30-dňový kalendár s každodennými jemnými cvičeniami",
                "Zameranie na rovnováhu, mobilitu kĺbov a zvýšenie energie",
                "Bezpečné na cvičenie doma pre akúkoľvek úroveň kondície"
            ],
            downloadUrl: "materials/PILATES-3-SK.pdf",
            coverImage: "assets/covers/pil_IMG1_sk.png",
            buttonText: "Stiahnuť Bonus #2"
        }
    ],

    otherProducts: []
};
