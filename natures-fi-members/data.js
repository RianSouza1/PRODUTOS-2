/**
 * NATURE'S APOTHECARY — Members Area Data
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Luonnon Apteekki", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Kysymys kurssille pääsystä (Luonnon Apteekki)",
        emailBodyTemplate: "Hei tukitiimi! Haluaisin apua Luonnon Apteekki -jäsenalueeni kanssa.%0A%0ANimeni on: ______.",

        // Mostrar ícone de "? Ajuda" flutuante em todas as telas
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VÍDEOS (Video Course) - Ocultado ou Vazio se não houver vídeos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. LIVROS (E-books e PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Luonnon Apteekin käsikirja",
            description: "Täydellinen opas oman luonnollisen apteekin rakentamiseen kotona. Opi, mitä yrttejä käyttää, mitkä reseptit todella toimivat ja miten ne valmistetaan vaihe vaiheelta.",
            badgeText: "PÄÄKIRJA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Aloittelijaystävälliset valmistusmenetelmät",
                "Yrttien & keittiön ainesosien oppaat",
                "Vaiheittaiset yrttireseptit"
            ],
            downloadUrl: "materials/natures_apothecary_handbook.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Lataa pääkirja"
        },
        {
            id: "b2",
            title: "Yrttien parantava voima",
            description: "Avaa yleisten lääkeyrttien terapeuttiset ominaisuudet ja opi käyttämään niitä turvallisesti päivittäiseen hyvinvointiin, rauhoittaviin tee-juomiin ja kotihoitoon.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Yli 20 yrtin lääkinnälliset profiilit",
                "Turvallisuusohjeet ja annostus",
                "Perinteiset parantavat sovellukset"
            ],
            downloadUrl: "materials/healing_power_of_herbs.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Lataa Bonus #1"
        },
        {
            id: "b3",
            title: "Barbara O'Neillin inspiroimat hoidot",
            description: "Perinteisten hoitojen ja luonnollisten hyvinvointikäytäntöjen inspiroima opas auttaa sinua elämään terveellisempää ja kemikaalivapaata elämää luonnollisten terapioiden avulla.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Perinteiset luontaishoidot",
                "Vinkkejä kemikaalivapaaseen elämään",
                "Barbara O'Neillin inspiroimat käytännöt"
            ],
            downloadUrl: "materials/barbara_oneill_inspired_remedies.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Lataa Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
