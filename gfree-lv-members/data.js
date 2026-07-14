/**
 * VIENKĀRŠI BEZ GLUTĒNA — Dalībnieku zonas dati (Latviešu)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Vienkārši bez glutēna", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Jautājums par piekļuvi kursam (Vienkārši bez glutēna)",
        emailBodyTemplate: "Sveiki, atbalsta komanda! Man nepieciešama palīdzība ar manu Vienkārši bez glutēna dalībnieku zonu.\n\nMani sauc: ______.",

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
            title: "Vienkārša bezglutēna pavārgrāmata",
            description: "Vienkāršas ikdienas maltītes iesācējiem. Atklājiet, cik vienkārša un garšīga var būt bezglutēna gatavošana ar praktiskām un saprotamām receptēm solis pa solim.",
            badgeText: "GALVENĀ GRĀMATA",
            badgeColor: "#10B981",
            features: [
                "Vienkāršas ikdienas maltītes iesācējiem",
                "Garšīgas un veselīgas receptes solis pa solim",
                "Būtisks ceļvedis bezglutēna dzīvesveidam"
            ],
            downloadUrl: "materials/G-FREE-1-LV.pdf",
            coverImage: "assets/covers/gf_IMG1_lv.png",
            buttonText: "Lejupielādēt galveno grāmatu"
        },
        {
            id: "b2",
            title: "Ikdienas bezglutēna cepšana un mājas ēdieni",
            description: "Labāka maize, uzkodas, deserti un ģimenes iecienītākie ēdieni. Iemācieties izcept mīkstu, garšīgu bezglutēna maizi un gardumus, kas garšos ikvienam.",
            badgeText: "BONUSS #1",
            badgeColor: "#F59E0B",
            features: [
                "Bezglutēna maizes un uzkodu receptes",
                "Gardas kūkas, deserti un iecienīti mājas ēdieni",
                "Noderīgi cepšanas padomi izcilam rezultātam katru reizi"
            ],
            downloadUrl: "materials/G-FREE-2-LV.pdf",
            coverImage: "assets/covers/gf_IMG1_lv.png",
            buttonText: "Lejupielādēt bonusu #1"
        },
        {
            id: "b3",
            title: "30 dienu bezglutēna uztura plāns un iepirkumu ceļvedis",
            description: "Vienkāršas nedēļas ēdienkartes, sakārtoti iepirkumu saraksti un ekspertu palīdzība maltīšu plānošanā, lai pāreja noritētu bez stresa.",
            badgeText: "BONUSS #2",
            badgeColor: "#3B82F6",
            features: [
                "Pilnīgs 30 dienu uztura plāns",
                "Sakārtoti iknedēļas iepirkumu saraksti",
                "Praktiski padomi vieglākai maltīšu sagatavošanai"
            ],
            downloadUrl: "materials/G-FREE-3-LV.pdf",
            coverImage: "assets/covers/gf_IMG1_lv.png",
            buttonText: "Lejupielādēt bonusu #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v9