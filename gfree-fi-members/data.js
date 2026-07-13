/**
 * HELPPO GLUTEENITON — Jäsenalueen Tiedot (Suomi)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Helppo Gluteeniton", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Kysymys kurssin pääsystä (Helppo Gluteeniton)",
        emailBodyTemplate: "Hei tukitiimi! Tarvitsen apua Helppo Gluteeniton -jäsenalueeni kanssa.\n\nNimeni on: ______.",

        // Show floating "?" help button on all screens
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VIDEOS (Video course) — empty if no videos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. BOOKS (E-books and PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Helppo Gluteeniton Keittokirja",
            description: "Yksinkertaisia arkiruokia aloittelijoille. Löydä miten helppoa ja herkullista gluteeniton ruoanlaitto voi olla käytännöllisten vaiheittaisten reseptien avulla.",
            badgeText: "PÄÄKIRJA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Yksinkertaisia arkiruokia aloittelijoille",
                "Herkullisia ja terveellisiä reseptejä vaihe vaiheelta",
                "Olennainen opas gluteenittomaan elämään"
            ],
            downloadUrl: "materials/G-FREE-1-FI.pdf",
            coverImage: "assets/covers/gf_IMG1_fi.png",
            buttonText: "Lataa pääkirja"
        },
        {
            id: "b2",
            title: "Gluteeniton Arkileivonta & Herkkuruoat",
            description: "Paremmat leivät, välipalat, jälkiruoat ja perheen suosikit. Opi leipomaan pehmeitä, herkullisia gluteenittomia leipiä ja herkkuja, joita kaikki rakastavat.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Gluteenittoman leivän ja välipalojen reseptit",
                "Herkulliset jälkiruoat ja perheen suosikit",
                "Leivontavinkit täydellisiin tuloksiin joka kerta"
            ],
            downloadUrl: "materials/G-FREE-2-FI.pdf",
            coverImage: "assets/covers/gf_IMG1_fi.png",
            buttonText: "Lataa bonus #1"
        },
        {
            id: "b3",
            title: "30 Päivän Gluteeniton Ateriaohjelma & Ostosopas",
            description: "Yksinkertaiset viikoittaiset ruokalistat, järjestetyt ostoslistat ja asiantuntijan apu aterioiden valmistelussa, jotta siirtymäsi olisi sujuva ja stressitön.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Täydellinen 30 päivän ateriasuunnitelma",
                "Järjestetyt viikoittaiset ostoslistat",
                "Hyödyllisiä vinkkejä helppoon aterioiden valmisteluun"
            ],
            downloadUrl: "materials/G-FREE-3-FI.pdf",
            coverImage: "assets/covers/gf_IMG1_fi.png",
            buttonText: "Lataa bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v9