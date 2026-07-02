/**
 * LUONNON APTEEKKI — Members Area Data (Suomi)
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
        emailBodyTemplate: "Hei tukitiimi! Haluaisin apua Luonnon Apteekin jäsenalueeseeni liittyen.%0A%0ANimeni on: ______.",

        // Mostrar ícone de "? Ajuda" flutuante em todas as telas
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VÍDEOS (Curso em vídeo) — vazio se não houver vídeos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. LIVROS (E-books e PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Luonnon Apteekki — Kattava Opas",
            description: "Tärkein opas oman luonnollisen apteekin rakentamiseen kotona. Opi mitä yrttejä käyttää, mitkä reseptit todella toimivat ja miten ne valmistetaan vaihe vaiheelta, ilman että sinun tarvitsee olla asiantuntija.",
            badgeText: "PÄÄKIRJA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Yksinkertaiset valmistusmenetelmät aloittelijoille",
                "Opas yrtteihin ja keittiön ainesosiin",
                "Vaiheittaiset yrttireseptit yleisiin vaivoihin"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-FI.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Lataa Pääkirja"
        },
        {
            id: "b2",
            title: "Yrttien Parantava Voima",
            description: "Tutustu yleisimpien lääkeyrttien terapeuttisiin ominaisuuksiin ja opi käyttämään niitä turvallisesti päivittäisessä hyvinvoinnissasi: rauhoittavat teet, siirapit, voiteet ja paljon muuta.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Yli 20 yrtin lääkinnälliset profiilit",
                "Turvallisuusohjeet ja annostus",
                "Perinteiset parantavat sovellukset"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-FI.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Lataa Bonus #1"
        },
        {
            id: "b3",
            title: "Parantavien Teiden Opas",
            description: "Opi luomaan rauhoittavia yrttijuomia uneen, ruoansulatukseen, rentoutumiseen, kurkun hyvinvointiin, immuniteettiin ja päivittäiseen hyvinvointiin yksinkertaisista ainesosista.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Sekoitukset uneen, ruoansulatukseen ja rentoutumiseen",
                "Reseptit hunajalla, inkiväärillä, mintulla ja kamomillalla",
                "Vaiheittainen valmistus kotona"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-FI.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Lataa Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
