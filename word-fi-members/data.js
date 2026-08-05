/**
 * Word-hallinta — Jäsenen Alue (Suomi)
 */

const APP_DATA = {
    config: {
        brandName: "Word-hallinta",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Kysymys pääsystä (Word-hallinta)",
        emailBodyTemplate: "Hei tukitiimi! Haluaisin pyytää apua pääsyssäni Word-hallinnan jäsenalueelle.\n\nNimeni on: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Word nollasta ammattilaiseksi — Vuoden 2026 painos (Osa 1/3)",
            description: "Täydellinen opas aloittelijoille – opi luomaan selkeitä, huoliteltuja ja ammattimaisen näköisiä asiakirjoja Microsoft Wordissä.",
            badgeText: "Pääopas",
            badgeColor: "#2563EB",
            features: [
                "Hallitse Microsoft Wordin olennaiset perusteet",
                "Luo täydellisesti strukturoituja ja tyylikkäitä asiakirjoja",
                "Käytännön vinkkejä päivittäiseen asiakirjahallintaan"
            ],
            downloadUrl: "materials/WORD-1-FI.pdf",
            coverImage: "assets/covers/word_IMG1_fi.png",
            buttonText: "Lataa pääopas (PDF)"
        },
        {
            id: "b2",
            title: "Muotoilu, Tyylit & Älykkäät Työvuo-prosessit Wordissä — Vuoden 2026 painos (Osa 2/3)",
            description: "Käytännön opas johdonmukaisten, hyvin organisoitujen ja ammattimaisten asiakirjojen luomiseen Microsoft Wordissä.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Käytä edistyneitä tyylejä ja ammattimaista muotoilua",
                "Varmista visuaalinen johdonmukaisuus kaikissa asiakirjoissasi",
                "Toteuta tehokkaita ja älykkäitä työvuo-prosesseja"
            ],
            downloadUrl: "materials/WORD-2-FI.pdf",
            coverImage: "assets/covers/word_IMG1_fi.png",
            buttonText: "Lataa Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "Word-mallit, Joukkokirjeet & Edistyneet Työkalut — Vuoden 2026 painos (Osa 3/3)",
            description: "Uudelleenkäytettävät asiakirjat, personoitu kirjeenvaihto, interaktiiviset lomakkeet ja älykäs automaatio Microsoft Wordissä.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Suunnittele uudelleenkäytettäviä malleja ja interaktiivisia lomakkeita",
                "Toteuta joukkokirjeitä personoituja massalähetyksiä varten",
                "Hyödynnä Wordin edistyneitä automaatiotyökaluja"
            ],
            downloadUrl: "materials/WORD-3-FI.pdf",
            coverImage: "assets/covers/word_IMG1_fi.png",
            buttonText: "Lataa Bonus #2 (PDF)"
        }
    ],

    otherProducts: []
};
