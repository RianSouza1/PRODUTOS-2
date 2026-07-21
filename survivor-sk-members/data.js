/**
 * Survival & Bushcraft — Členská Zóna (Slovak)
 * Kompletná séria outdooru & prežitia
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Žiadosť o prístup (Survival & Bushcraft)",
        emailBodyTemplate: "Dobrý deň, tím podpory,\n\npotrebujem pomôcť s prístupom do svojej členskej zóny Survival & Bushcraft.\n\nMoje meno je: ______",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Príručka prežitia pre začiatočníkov — Vydanie 2026",
            description: "Voda, oheň, úkryt, núdzové signály a základné techniky v prírode. Praktická príručka pre každého, kto trávi čas vonku — turistov, kemperov, poľovníkov alebo milovníkov divokej prírody.",
            badgeText: "Hlavná Príručka",
            badgeColor: "#6B7C44",
            features: [
                "Ako nájsť, vyčistiť a zabezpečiť vodu v prírode",
                "Zakladanie ohňa, stavba úkrytov a odosielanie núdzových signálov",
                "V teréne overené techniky prispôsobené pre začiatočníkov"
            ],
            downloadUrl: "materials/SURVIVOR-1-SK.pdf",
            coverImage: "assets/covers/sur_IMG1_sk.png",
            buttonText: "Stiahnuť hlavnú príručku"
        },
        {
            id: "b2",
            title: "Techniky života v prírode a lese — Vydanie 2026",
            description: "Výbava, uzly, orientácia, techniky bivouac a múdrosť prežitia v divokej prírode. Kľúčové zručnosti potrebné na orientáciu a sebestačný život v lese s istotou a dôverou.",
            badgeText: "Bonus #1",
            badgeColor: "#7A5C3E",
            features: [
                "Ovládanie nástrojov, základné uzly a techniky navigácie",
                "Stavba táborov/bivakov a sebestačný život v prírode",
                "Podrobné pokyny pre začiatočníkov bez predchádzajúcich skúseností"
            ],
            downloadUrl: "materials/SURVIVOR-2-SK.pdf",
            coverImage: "assets/covers/sur_IMG1_sk.png",
            buttonText: "Stiahnuť Bonus #1"
        },
        {
            id: "b3",
            title: "Pripravenosť a prvá pomoc pre vás a vašu rodinu — Vydanie 2026",
            description: "Núdzový batoh na 72 hodín, príprava na výpadok elektriny, bezpečná evakuácia a ako ochrániť svoju rodinu. Všetko, čo bežná domácnosť potrebuje vedieť, aby bola pripravená na neočakávané núdzové situácie.",
            badgeText: "Bonus #2",
            badgeColor: "#8B4513",
            features: [
                "Správny zoznam vecí do núdzového batohu na 72 hodín (go-bag)",
                "Príprava na výpadky prúdu, evakuáciu a bezpečnosť domova",
                "Základy prvej pomoci nevyhnutné pre rodiny v krízových situáciách"
            ],
            downloadUrl: "materials/SURVIVOR-3-SK.pdf",
            coverImage: "assets/covers/sur_IMG1_sk.png",
            buttonText: "Stiahnuť Bonus #2"
        }
    ],

    otherProducts: []
};
