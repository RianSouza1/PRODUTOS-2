/**
 * Excel Mastery — Jäsenalueen Tiedot (Suomi)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pääsyä koskeva kysely (Excel Mastery)",
        emailBodyTemplate: "Hei tukitiimi! Tarvitsen apua Excel Mastery -jäsenalueelleni pääsyssä.\n\nNimeni on: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Nollasta Excel-ammattilaiseksi — Vuoden 2026 painos",
            description: "Käytännöllinen opas aloittelijoille, joka kattaa taulukkolaskennan, organisoinnin ja arjen tuottavuuden. Opi Exceliä vaihe vaiheelta, ensimmäisestä solusta edistyneisiin työkaluihin.",
            badgeText: "PÄÄKIRJA",
            badgeColor: "#1a7a45",
            features: [
                "Taulukkolaskenta ja datan organisointi aloittelijoille",
                "Arjen tuottavuus ja asiakaslistojen hallinta",
                "Talousseuranta ja kalenterin suunnittelu Excelissä"
            ],
            downloadUrl: "materials/Excel-1-FI.pdf",
            coverImage: "assets/covers/excel_IMG1_fi.png",
            buttonText: "Lataa pääkirja"
        },
        {
            id: "b2",
            title: "Excel-kaavat, funktiot ja älykkäät työnkulut — Vuoden 2026 painos",
            description: "Käytännöllinen opas Excel-tehtävien ratkaisemiseen nopeammin. Muuta yksinkertainen taulukko todelliseksi ongelmanratkaisutyökaluksi kaavojen ja funktioiden avulla.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Edistyneet kaavat ja funktiot",
                "Automaattiset laskennat ja älykkäät työnkulut",
                "Nopeampi ongelmanratkaisu Excelissä"
            ],
            downloadUrl: "materials/Excel-2-FI.pdf",
            coverImage: "assets/covers/excel_IMG1_fi.png",
            buttonText: "Lataa bonus #1"
        },
        {
            id: "b3",
            title: "Excel-laskentataulukot, raportit, kaavat — Vuoden 2026 painos",
            description: "Käytännön opas datan muuttamiseen selkeiksi ja ammattimaisiksi raporteiksi. Opi esittämään tietosi tehokkaasti koontinäyttöjen ja raporttien avulla.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Ammattimaiset koontinäytöt ja visuaaliset paneelit",
                "Yhteenvetoraportit ja pivot-taulukot",
                "Datan esittäminen esimiehille, asiakkaille ja tiimeille"
            ],
            downloadUrl: "materials/Excel-3-FI.pdf",
            coverImage: "assets/covers/excel_IMG1_fi.png",
            buttonText: "Lataa bonus #2"
        }
    ],

    otherProducts: []
};
