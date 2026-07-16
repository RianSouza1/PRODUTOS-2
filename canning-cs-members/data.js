/**
 * Domácí zavařování potravin — Data pro členskou zónu (Čeština)
 * v1
 */

const APP_DATA = {
    config: {
        brandName: "Domácí zavařování potravin",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Dotaz ohledně přístupu (Domácí zavařování potravin)",
        emailBodyTemplate: "Dobrý den, podpora! Potřebuji pomoci s přístupem do své členské zóny pro Domácí zavařování potravin.\n\nMoje jméno: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Kompletní bible zavařování a konzervování 2026",
            description: "Příručka přívětivá pro začátečníky k sterilizaci ve vodní lázni, tlakové konzervaci, kvašeným výrobkům, džemům, omáčkám, bezpečnému skladování a domácímu uchovávání potravin.",
            badgeText: "HLAVNÍ KNIHA",
            badgeColor: "#b45309",
            features: [
                "Sterilizace ve vodní lázni a tlaková konzervace",
                "Domácí džemy, omáčky a zavařeniny",
                "Bezpečné skladování a metody konzervace"
            ],
            downloadUrl: "materials/Canning-1-CZ.pdf",
            coverImage: "assets/covers/can_IMG1_cz.png",
            buttonText: "Stáhnout hlavní knihu"
        },
        {
            id: "b2",
            title: "Průvodce kuchyní s dlouhotrvajícími spížími směsmi",
            description: "Domácí suché směsi, sklenice s hotovými jídly, směsi do polévek, směsi do dezertů, kořenící směsi a pohodlné základní suroviny do spíže pro každý den — bez sterilizačního zařízení.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Domácí suché směsi a směsi na pečení",
                "Polévky, kořenící směsi a organizace spíže",
                "Ušetřete čas i peníze s dobře zásobenou spíží"
            ],
            downloadUrl: "materials/Canning-2-CZ.pdf",
            coverImage: "assets/covers/can_IMG1_cz.png",
            buttonText: "Stáhnout bonus #1"
        },
        {
            id: "b3",
            title: "Průvodce domácí fermentací pro začátečníky",
            description: "Jednoduchá fermentovaná zelenina, kysané zelí, nakládané okurky, recepty podobné kimchi, nálev, koření, fermentované nápoje, řešení problémů a bezpečné kuchyňské postupy.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Kysané zelí, nakládané okurky a recepty na kimchi",
                "Fermentované nápoje, nálevy a domácí koření",
                "Bezpečné kuchyňské postupy a řešení problémů"
            ],
            downloadUrl: "materials/Canning-3-CZ.pdf",
            coverImage: "assets/covers/can_IMG1_cz.png",
            buttonText: "Stáhnout bonus #2"
        }
    ],

    otherProducts: []
};