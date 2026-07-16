/**
 * Domáce konzervovanie potravín — Dáta pre členskú zónu (Slovenčina)
 * v1
 */

const APP_DATA = {
    config: {
        brandName: "Domáce konzervovanie potravín",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Otázka ohľadom prístupu (Domáce konzervovanie potravín)",
        emailBodyTemplate: "Dobrý deň, podpora! Potrebujem pomôcť s prístupom do mojej členskej zóny pre Domáce konzervovanie potravín.\n\nMoje meno: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Kompletný sprievodca konzervovaním a skladovaním potravín v roku 2026",
            description: "Praktický sprievodca pre začiatočníkov konzervovaním vo vodnom kúpeli, tlakovým konzervovaním, fermentovanými potravinami, džemami, omáčkami, bezpečným skladovaním a domácim konzervovaním potravín.",
            badgeText: "HLAVNÁ KNIHA",
            badgeColor: "#b45309",
            features: [
                "Konzervovanie vo vodnom kúpeli a tlakové konzervovanie",
                "Domáce džemy, omáčky a zaváraniny",
                "Bezpečné skladovanie a metódy konzervovania"
            ],
            downloadUrl: "materials/Canning-1-SK.pdf",
            coverImage: "assets/covers/can_IMG1_sk.png",
            buttonText: "Stiahnuť hlavnú knihu"
        },
        {
            id: "b2",
            title: "Sprievodca potravinami na dlhodobé skladovanie",
            description: "Domáce suché zmesi, hotové porciované poháre, polievky, dezertné zmesi, zmesi korenia a praktické ingrediencie do každodennej špajze — bez sterilizačného vybavenia.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Domáce suché zmesi a zmesi na pečenie",
                "Polievky, zmesi korenia a organizácia špajze",
                "Ušetrite čas a peniaze s dobre zásobenou špajzou"
            ],
            downloadUrl: "materials/Canning-2-SK.pdf",
            coverImage: "assets/covers/can_IMG1_sk.png",
            buttonText: "Stiahnuť bonus #1"
        },
        {
            id: "b3",
            title: "Sprievodca pre začiatočníkov v domácej fermentácii",
            description: "Jednoducho fermentovaná zelenina, kyslá kapusta, fermentované nakladané uhorky, recepty podobné kimchi, soľný nálev, koreniny, fermentované nápoje, riešenie problémov a bezpečné metódy v kuchyni.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Kyslá kapusta, nakladané uhorky a recepty na kimchi",
                "Fermentované nápoje, soľný nálev a domáce koreniny",
                "Bezpečné metódy v kuchyni a riešenie problémov"
            ],
            downloadUrl: "materials/Canning-3-SK.pdf",
            coverImage: "assets/covers/can_IMG1_sk.png",
            buttonText: "Stiahnuť bonus #2"
        }
    ],

    otherProducts: []
};