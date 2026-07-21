/**
 * Survival & Bushcraft — Jäsenen alue (Finnish)
 * Täydellinen erämaataito- ja selviytymissarja
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pääsypyyntö (Survival & Bushcraft)",
        emailBodyTemplate: "Hei tukitiimi,\n\ntarvitsen apua jäsenaluelleni pääsyssä Survival & Bushcraftissa.\n\nNimeni on: ______",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Selviytyminen aloittelijoille — Vuoden 2026 painos",
            description: "Vesi, Nuotio, Suoja, Hätämerkintä ja Perustaidot Erämaassa. Käytännöllinen opas kaikille luonnossa liikkuville — retkeilijöille, leiriytyjille, metsästäjille tai erämaan ystäville.",
            badgeText: "Pääopas",
            badgeColor: "#6B7C44",
            features: [
                "Veden löytäminen, puhdistaminen ja varmistaminen luonnossa",
                "Nuotion sytyttäminen, suojan rakentaminen ja hätämerkkien lähettäminen",
                "Kentällä testatut ja aloittelijoille sovitetut menetelmät"
            ],
            downloadUrl: "materials/SURVIVOR-1-FI.pdf",
            coverImage: "assets/covers/sur_IMG1_fi.png",
            buttonText: "Lataa pääopas"
        },
        {
            id: "b2",
            title: "Erämaataito ja metsässä elämisen taito — Vuoden 2026 painos",
            description: "Varusteet, solmut, navigointi, bivouac-tekniikat ja selviytymistieto luonnossa. Keskeiset taidot, joita tarvitset metsässä liikkumiseen ja itsenäiseen toimeentuloon luottavaisin mielin.",
            badgeText: "Bonus #1",
            badgeColor: "#7A5C3E",
            features: [
                "Työkalujen hallinta, tärkeimmät solmut ja suunnistusmenetelmät",
                "Leirin/bivouacin pystyttäminen ja omavarainen elämä luonnossa",
                "Vaiheittaiset ohjeet aloittelijoille ilman aiempaa kokemusta"
            ],
            downloadUrl: "materials/SURVIVOR-2-FI.pdf",
            coverImage: "assets/covers/sur_IMG1_fi.png",
            buttonText: "Lataa Bonus #1"
        },
        {
            id: "b3",
            title: "Varautuminen ja ensiapu sinulle ja läheisillesi — Vuoden 2026 painos",
            description: "72 tunnin varautumisreppu, sähkökatkot, evakuointi ja miten suojaat perheesi. Kaikki mitä tavallisen kotitalouden tarvitsee tietää valmistautuakseen yllättäviin hätätilanteisiin.",
            badgeText: "Bonus #2",
            badgeColor: "#8B4513",
            features: [
                "Asianmukainen pakkauslista 72 tunnin varautumisreppuun (go-bag)",
                "Sähkökatkoihin, evakuointiin ja kodin varautumiseen valmistautuminen",
                "Perheen välttämättömät ensiaputaidot kriisitilanteissa"
            ],
            downloadUrl: "materials/SURVIVOR-3-FI.pdf",
            coverImage: "assets/covers/sur_IMG1_fi.png",
            buttonText: "Lataa Bonus #2"
        }
    ],

    otherProducts: []
};
