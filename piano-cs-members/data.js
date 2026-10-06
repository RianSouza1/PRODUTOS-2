/**
 * Kompletní Klavírní Sbírka — Členská Oblast (Čeština)
 */

const APP_DATA = {
    config: {
        brandName: "Kompletní Klavírní Sbírka",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Žádost o podporu – přístup (Kompletní Klavírní Sbírka)",
        emailBodyTemplate: "Dobrý den, týme podpory! Rád bych požádal o pomoc s přístupem do členské sekce Kompletní Klavírní Sbírka.\n\nMoje jméno je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Klavír pro Úplné Začátečníky — 1. Část z 3",
            description: "Klávesy, akordy a tvoje první skladby. Seznam se s klaviaturou, přečti své první noty, pochop základy hudební teorie a zahraj své první skutečné hudební skladby krok za krokem.",
            badgeText: "Průvodce pro Začátečníky",
            badgeColor: "#1b2a38",
            features: [
                "Seznámení s klaviaturou, správné držení těla a rukou, základy čtení not",
                "Průvodce krok za krokem k prvním akordům, stupnicím a rytmům",
                "Hrajte skutečné a krásné klavírní skladby již od samého začátku"
            ],
            downloadUrl: "materials/PIANO-1-CS.pdf",
            coverImage: "assets/covers/piano_IMG1_cs.png",
            buttonText: "Stáhnout Průvodce pro Začátečníky (PDF)"
        },
        {
            id: "b2",
            title: "Jednoduché Skladby pro Klavír — 2. Kniha z 3",
            description: "Krok za krokem k rytmu, koordinaci a skutečné radosti ze hry. Od první melodie k jistotě hry oběma rukama — repertoár s postupně rostoucí obtížností pro dospělé začátečníky.",
            badgeText: "Snadné Skladby",
            badgeColor: "#4a5568",
            features: [
                "Krásné skladby speciálně upravené pro dospělé začátečníky",
                "Rozvoj koordinace obou rukou a plynulé přechody mezi akordy",
                "Známé melodie a klasické klenoty, které zvládnete krok za krokem"
            ],
            downloadUrl: "materials/PIANO-2-CS.pdf",
            coverImage: "assets/covers/piano_IMG1_cs.png",
            buttonText: "Stáhnout Skladby (PDF)"
        },
        {
            id: "b3",
            title: "30denní Pianistická Výzva — 3. Kniha z 3",
            description: "Strukturovaný každodenní program, který buduje cit pro rytmus, posiluje sebedůvěru a vytváří trvalý návyk pravidelného cvičení. 20 minut denně pro plynulost a jistotu ve hře.",
            badgeText: "30denní Výzva",
            badgeColor: "#6b1d2f",
            features: [
                "30 promyšlených dní s 20 minutami cíleného denního cvičení",
                "Cvičení pro čtení not, metronomický rytmus a koordinaci rukou",
                "Vybudování trvalé, inspirativní a efektivní cvičební rutiny"
            ],
            downloadUrl: "materials/PIANO-3-CS.pdf",
            coverImage: "assets/covers/piano_IMG1_cs.png",
            buttonText: "Stáhnout 30denní Výzvu (PDF)"
        }
    ],

    otherProducts: []
};
