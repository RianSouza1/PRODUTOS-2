/**
 * Kodin Kunnostus & Ylläpito — Jäsenalue (Suomi)
 */

const APP_DATA = {
    config: {
        brandName: "Kodin Kunnostus & Ylläpito",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pääsyyn liittyvä kysymys (Kodin Kunnostus & Ylläpito)",
        emailBodyTemplate: "Hei tukitiimi! Haluaisin pyytää apua Kodin Kunnostus & Ylläpito -jäsenalueen käyttöoikeuden kanssa.\n\nNimeni on: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Täydellinen Opas Kodin Kunnostukseen ja Ylläpitoon — Painos 2026",
            description: "Kattava käsikirjasi kodin huoltoon, korjauksiin ja remontointiin — toteutettuna turvallisesti, ammattimaisesti ja tuloksella joka pitää pitkälle tulevaisuuteen.",
            badgeText: "Pääopas",
            badgeColor: "#D97706",
            features: [
                "Vaiheittaiset ohjeet välttämättömiin kodin korjauksiin",
                "Asiantuntijoiden neuvoja kodin ylläpitoprojekteihin",
                "Käytännön tee-se-itse-vinkkejä kestäviin tuloksiin"
            ],
            downloadUrl: "materials/REPAIR-1-FI.pdf",
            coverImage: "assets/covers/rep_IMG1_fi.png",
            buttonText: "Lataa pääopas"
        },
        {
            id: "b2",
            title: "Käytännön Opas Kodin Sähköasennuksiin — Päivitetty Painos 2026",
            description: "Turvallisesti, SFS 6000 / Maankäyttö- ja rakennuslain mukaisesti, itse järkevästi tehden. Käytännöllinen opas kodin sähköasennuksiin.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Käsittele kodin sähkötöitä turvallisesti",
                "Täysin SFS 6000 -standardien ja ohjeiden mukainen",
                "Vaiheittaiset ohjeet yleisiin asennuksiin"
            ],
            downloadUrl: "materials/REPAIR-2-FI.pdf",
            coverImage: "assets/covers/rep_IMG1_fi.png",
            buttonText: "Lataa Bonus #1"
        },
        {
            id: "b3",
            title: "Täydellinen Opas Kodin Putkitöihin — Painos 2026",
            description: "Korjaukset, päivitykset ja huolto huippukunnossa. Käytännöllinen käsikirja kodin putkiston ymmärtämiseen, ylläpitoon ja pitämiseen täydellisessä kunnossa.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Diagnosoi ja korjaa yleiset putkisto-ongelmat",
                "Pidä kodin putkisto täydellisessä kunnossa",
                "Selkeät ohjeet aloittelijoille ja tee-se-itse-harrastajille"
            ],
            downloadUrl: "materials/REPAIR-3-FI.pdf",
            coverImage: "assets/covers/rep_IMG1_fi.png",
            buttonText: "Lataa Bonus #2"
        }
    ],

    otherProducts: []
};
