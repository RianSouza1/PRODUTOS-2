/**
 * Täydellinen Rumpukokoelma — Jäsenalue (Suomi)
 */

const APP_DATA = {
    config: {
        brandName: "Täydellinen Rumpukokoelma",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Tukipyyntö – pääsy (Täydellinen Rumpukokoelma)",
        emailBodyTemplate: "Hei tukitiimi! Haluaisin pyytää apua Täydellisen Rumpukokoelman jäsenalueen käyttöön.\n\nNimeni on: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Rummutus Aloittelijalle — Osa 1",
            description: "Asento, tempo, koordinaatio & perusrytmit. Oikea kapulaote, soittoasento, rytminen jaottelu ja peruskompit rumpusetin varmaan ja helppoon aloittamiseen.",
            badgeText: "Kirja 1 — Aloittelijat",
            badgeColor: "#e6392a",
            features: [
                "Ergonominen soittoasento, oikea kapulaote ja kehon tasapaino",
                "Ajoitus, pulssi, jaottelu ja peruslyönnit metronomitietoisuudella",
                "Soita ensimmäiset aidot rumpurytmit ja groovet varmuudella"
            ],
            downloadUrl: "materials/BATERIA-1-FI.pdf",
            coverImage: "assets/covers/batera_IMG1_fi.png",
            buttonText: "Lataa Kirja 1 (PDF)"
        },
        {
            id: "b2",
            title: "Täydellinen Opas Grooveihin ja Filleihin Rummulla — Osa 2",
            description: "Rock, pop, funk, blues & käytännön rytmikaavat. Kattava metodi grooveista ja filleistä edistyneelle rumpalistille, dynamiikka ja bassorummun variaatiot.",
            badgeText: "Kirja 2 — Groovet & Fillit",
            badgeColor: "#d97706",
            features: [
                "Rock-, pop-, funk- ja blues-groovet sekä shuffle-fraseeraus",
                "Fill-tekniikat ja musikaaliset siirtymät ilman rytmistä horjumista",
                "Hi-hat-aksentit, synkoopit, dynamiikka ja bassorummun variaatiot"
            ],
            downloadUrl: "materials/BATERIA-2-FI.pdf",
            coverImage: "assets/covers/batera_IMG1_fi.png",
            buttonText: "Lataa Kirja 2 (PDF)"
        },
        {
            id: "b3",
            title: "Täydellinen Harjoitusohjelma Rumpalille — Osa 3",
            description: "30 päivän ohjelma timingin, nopeuden, kontrollin ja käsien sekä jalkojen itsenäisyyden kehittämiseen. Strukturoitu harjoitussuunnitelma mitattavaan kehitykseen.",
            badgeText: "Kirja 3 — 30 Päivän Ohjelma",
            badgeColor: "#0284c7",
            features: [
                "Strukturoitu 30 päivän päivittäinen harjoitussuunnitelma",
                "4 raajan täysi itsenäisyys sekä käsien ja jalkojen nopeus",
                "Dynaaminen kontrolli, kestävyys ja mitattava edistyminen"
            ],
            downloadUrl: "materials/BATERIA-3-FI.pdf",
            coverImage: "assets/covers/batera_IMG1_fi.png",
            buttonText: "Lataa Kirja 3 (PDF)"
        }
    ],

    otherProducts: []
};
