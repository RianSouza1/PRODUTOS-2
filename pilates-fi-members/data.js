/**
 * Pilates & Hyvinvointi — Jäsenalue (Suomi)
 */

const APP_DATA = {
    config: {
        brandName: "Pilates & Hyvinvointi",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Kysymys pääsystä (Pilates & Hyvinvointi)",
        emailBodyTemplate: "Hei tukitiimi! Haluaisin apua Pilates & Hyvinvointi -jäsenalueeni käyttöön.\n\nNimeni on: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Pilates Aloittelijoille — Vuoden 2026 painos",
            description: "Selkeä, askel askeleelta etenevä opas voiman, joustavuuden ja itseluottamuksen rakentamiseen omassa kodissasi. Suunniteltu auttamaan sinua tulemaan vahvemmaksi, notkeammaksi ja energisemmäksi omaan tahtiisi.",
            badgeText: "Päämateriaali",
            badgeColor: "#C07A68",
            features: [
                "Askel askeleelta -harjoitukset aloittelijoille kotona",
                "Paranna rintakehän asentoa, joustavuutta ja keskivartalon voimaa",
                "Turvallisia liikkeitä ilman raskasta rasitusta"
            ],
            downloadUrl: "materials/PILATES-1-FI.pdf",
            coverImage: "assets/covers/pil_IMG1_fi.png",
            buttonText: "Lataa päämateriaali"
        },
        {
            id: "b2",
            title: "Veggpilates — Vuoden 2026 painos",
            description: "Lempeät harjoitteet, jotka auttavat sinua rakentamaan voimaa, tasapainoa ja liikkuvuutta omassa kodissasi. Käytä seinää tukenasi korjaamaan asentoasi ja vahvistamaan kehoasi.",
            badgeText: "Bonus #1",
            badgeColor: "#5B8C7D",
            features: [
                "Käytä seinää parempaan tasapainoon ja tukeen",
                "Lempeät liikkuvuusharjoitukset koko keholle",
                "Ihanteellinen kotitreeniin ilman erikoislaitteita"
            ],
            downloadUrl: "materials/PILATES-2-FI.pdf",
            coverImage: "assets/covers/pil_IMG1_fi.png",
            buttonText: "Lataa Bonus #1"
        },
        {
            id: "b3",
            title: "30 Päivää Pilatesta Senioreille — Vuoden 2026 painos",
            description: "Lempeä päivittäinen ohjelma voiman, tasapainon, liikkuvuuden ja itseluottamuksen rakentamiseen. Suunniteltu erityisesti aikuisille, jotka haluavat pysyä aktiivisina ja turvassa.",
            badgeText: "Bonus #2",
            badgeColor: "#9C6A88",
            features: [
                "Täydellinen 30 päivän kalenteri päivittäisillä lempeillä sessioilla",
                "Keskittyy tasapainoon, nivelten liikkuvuuteen ja energisyyteen",
                "Turvallinen suorittaa kotona millä tahansa kuntotasolla"
            ],
            downloadUrl: "materials/PILATES-3-FI.pdf",
            coverImage: "assets/covers/pil_IMG1_fi.png",
            buttonText: "Lataa Bonus #2"
        }
    ],

    otherProducts: []
};
