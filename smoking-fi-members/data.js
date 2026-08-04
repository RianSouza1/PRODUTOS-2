/**
 * Lihan Savustus & BBQ — Jäsenalue (Suomi)
 */

const APP_DATA = {
    config: {
        brandName: "Lihan Savustus & BBQ",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Tukipyyntö pääsystä (Lihan Savustus & BBQ)",
        emailBodyTemplate: "Hei tukitiimi! Haluaisin pyytää apua pääsyyni Lihan Savustus & BBQ -jäsenalueelle.\n\nNimeni on: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Lihan Savustus Aloittelijoille — Vuoden 2026 Painos",
            description: "Hallitse Tuli, Savu, Lämpötila ja Mureus Kotona. Selkeä ja helppolukuinen opas vaihe vaiheelta oman kotisi rauhassa täydellisten savustettujen lihojen valmistukseen.",
            badgeText: "Pääkirja",
            badgeColor: "#BF360C",
            features: [
                "Tulen, savun ja lämpötilan tarkka hallinta",
                "Yksityiskohtaiset vaiheittaiset ohjeet aloittelijoille",
                "Käytännön vinkit lihan savustukseen kotona"
            ],
            downloadUrl: "materials/SMOKING-1-FI.pdf",
            coverImage: "assets/covers/smo_IMG1_fi.png",
            buttonText: "Lataa Pääkirja (PDF)"
        },
        {
            id: "b2",
            title: "Pihagrillin & BBQ:n Reseptit — Vuoden 2026 Painos",
            description: "Herkulliset Savustetut Lihat, Lisukkeet & Täydelliset Grillimenut perhetapaamisiin, syntymäpäiville, urheilujuhliin ja unohtumattomiin puutarhajuhliin.",
            badgeText: "Bonus #1",
            badgeColor: "#8D6E63",
            features: [
                "Parhaat perinteiset savulihareseptit",
                "Klassiset amerikkalaistyyliset BBQ-lisukkeet",
                "Kattavat menukokonaisuudet jokaiseen tilaisuuteen"
            ],
            downloadUrl: "materials/SMOKING-2-FI.pdf",
            coverImage: "assets/covers/smo_IMG1_fi.png",
            buttonText: "Lataa Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "BBQ-Mausteseokset, Kastikkeet & Marinadit — Vuoden 2026 Painos",
            description: "Luo Rohkeita ja Tasapainoisia Makuja Jokaiselle Lihapalalle. Lopullinen opas antamaan ruoillesi täydellisen ja vastustamattoman makuelämyksen.",
            badgeText: "Bonus #2",
            badgeColor: "#E64A19",
            features: [
                "Salaiset reseptit premium-tason dry rub -mausteseoksiin",
                "Herkulliset kastikkeet ja marinadit jokaiselle lihalajille",
                "Mavun maximointitekniikat grillimestareille"
            ],
            downloadUrl: "materials/SMOKING-3-FI.pdf",
            coverImage: "assets/covers/smo_IMG1_fi.png",
            buttonText: "Lataa Bonus #2 (PDF)"
        }
    ],

    otherProducts: []
};
