/**
 * Englantia alkeista aikuisille — Jäsenalue (suomi)
 */

const APP_DATA = {
    config: {
        brandName: "Englantia alkeista aikuisille",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Tukipyyntö – kurssin käyttöoikeus",
        emailBodyTemplate: "Hei tukitiimi! Tarvitsen apua Englantia alkeista aikuisille -kurssin käyttöoikeuden kanssa.\n\nNimeni: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Englantia alkeista — kielioppi, sanasto ja lauserakenteet (osa 1/3)",
            description: "Kattava englannin kurssi aikuisille aloittelijoille | A0 → A1 / alkeistason A2. Opit kieliopin selkeiden mallien avulla, kartutat arjen sanastoa ja rakennat lauseita vaihe vaiheelta ilman ulkoa opettelua.",
            badgeText: "Perusteet A0 → A1",
            badgeColor: "#2563eb",
            features: [
                "Selkeät kielioppimallit ja lauseiden rakentaminen vaihe vaiheelta",
                "Sanastoa ja esimerkkilauseita aikuisten arkisiin tilanteisiin",
                "Käytännön harjoituksia, luettavia tekstejä ja kattavat mallivastaukset"
            ],
            downloadUrl: "materials/ENGLISH-1-FI.pdf",
            coverImage: "assets/covers/ingles_IMG1_fi.png",
            buttonText: "Lataa osa 1 (PDF)"
        },
        {
            id: "b2",
            title: "Englantia arjen tilanteisiin — käytännön keskusteluopas (osa 2/3)",
            description: "Matkailu, työ, ostokset ja sosiaaliset tilanteet | A1–A2. Harjoittele tavallisia arkikeskusteluja ja opi vastaamaan luontevasti kuuden keskeisen keskustelutaidon ja toimivien fraasien avulla.",
            badgeText: "Keskustelu A1 → A2",
            badgeColor: "#0d9488",
            features: [
                "Kuusi tärkeää taitoa sujuvaan arjen viestintään",
                "Käytännön dialogeja ja fraaseja lentokentälle, hotelliin, ravintolaan, töihin ja ostoksille",
                "Opit pyytämään toistamaan ja tarkentamaan sekä jatkamaan keskustelua luontevasti"
            ],
            downloadUrl: "materials/ENGLISH-2-FI.pdf",
            coverImage: "assets/covers/ingles_IMG1_fi.png",
            buttonText: "Lataa osa 2 (PDF)"
        },
        {
            id: "b3",
            title: "Kohti sujuvaa englantia — fraasit, idiomit ja lausemallit (osa 3/3)",
            description: "Kattava menetelmä aikuisille, jotka haluavat päästä eroon sanasta sanaan kääntämisestä ja oppia puhumaan luontevasti valmiiden fraasien, sanaparien ja joustavien lausemallien avulla.",
            badgeText: "Sujuvuus ja fraasit",
            badgeColor: "#d97706",
            features: [
                "Lopeta sanasta sanaan kääntäminen ja muodosta lauseita luontevien fraasien avulla",
                "Yleisimmät fraasiverbit, sanaparit ja joustavat lauserakenteet",
                "Kehitä varmuutta ja ilmaise itseäsi sujuvasti erilaisissa tilanteissa"
            ],
            downloadUrl: "materials/ENGLISH-3-FI.pdf",
            coverImage: "assets/covers/ingles_IMG1_fi.png",
            buttonText: "Lataa osa 3 (PDF)"
        }
    ],

    otherProducts: []
};
