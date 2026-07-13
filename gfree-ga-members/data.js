/**
 * ÉASCA SAOR Ó GHLÚTAN — Sonraí Limistéar Ball (Gaeilge)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Éasca Saor ó Ghlútan", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Ceist faoi rochtain ar an gcúrsa (Éasca Saor ó Ghlútan)",
        emailBodyTemplate: "Dia daoibh, a fhoireann tacaíochta! Ba mhaith liom cabhair a fháil le mo limistéar ball do Éasca Saor ó Ghlútan.\n\nIs é m'ainm ná: ______.",

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
            title: "An Leabhar Cócaireachta Éasca Saor ó Ghlútan",
            description: "Béilí simplí laethúla do thosaitheoirí. Faigh amach cé chomh héasca agus chomh blasta is féidir le cócaireacht saor ó ghlútan a bheith le hoidis phraiticiúla céim ar chéim.",
            badgeText: "PRÍOMHLEABHAR",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Béilí simplí laethúla do thosaitheoirí",
                "Oidis bhlasta agus shláintiúla céim ar chéim",
                "Treoir riachtanach do stíl mhaireachtála saor ó ghlútan"
            ],
            downloadUrl: "materials/G-FREE-1-GA.pdf",
            coverImage: "assets/covers/gf_IMG1_ga.png",
            buttonText: "Íoslódáil an príomhleabhar"
        },
        {
            id: "b2",
            title: "Bácáil Laethúil Saor ó Ghlútan & Bia Compordach",
            description: "Arán níos fearr, sneaiceanna, milseoga agus rogha an teaghlaigh. Foghlaim conas aráin agus milseáin bhoga, bhlasta shaor ó ghlútan a bhácáil a mbeidh grá ag gach duine orthu.",
            badgeText: "BÓNAS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Oidis le haghaidh arán agus sneaiceanna saor ó ghlútan",
                "Milseoga blasta agus rogha an teaghlaigh",
                "Leideanna bácála le haghaidh torthaí foirfe gach uair"
            ],
            downloadUrl: "materials/G-FREE-2-GA.pdf",
            coverImage: "assets/covers/gf_IMG1_ga.png",
            buttonText: "Íoslódáil bónas #1"
        },
        {
            id: "b3",
            title: "Plean Béile Saor ó Ghlútan 30 Lá & Treoir Siopadóireachta",
            description: "Roghchláir shimplí seachtainiúla, liostaí eagraithe siopadóireachta agus cabhair saineolaithe maidir le hullmhú béilí chun d'aistriú a dhéanamh gan uaim agus saor ó strus.",
            badgeText: "BÓNAS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Plean béile iomlán 30 lá",
                "Liostaí seachtainiúla eagraithe siopadóireachta",
                "Leideanna cabhracha maidir le hullmhú béilí go héasca"
            ],
            downloadUrl: "materials/G-FREE-3-GA.pdf",
            coverImage: "assets/covers/gf_IMG1_ga.png",
            buttonText: "Íoslódáil bónas #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v9