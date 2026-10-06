/**
 * Domača Popravila & Izboljšave — Območje za Člane (Slovenščina)
 */

const APP_DATA = {
    config: {
        brandName: "Domača Popravila & Izboljšave",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Povpraševanje glede dostopa (Domača Popravila & Izboljšave)",
        emailBodyTemplate: "Pozdravljena ekipa za podporo! Želim zaprositi za pomoč pri dostopu do območja za člane Domača Popravila & Izboljšave.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Popoln vodnik za domača popravila & izboljšave — Izdaja 2026",
            description: "Praktični projekti, strokovni nasveti in trajni rezultati. Vaš celovit priročnik za varno, zanesljivo in samozavestno vzdrževanje, popravila in prenovo vašega doma.",
            badgeText: "Glavni vodnik",
            badgeColor: "#D97706",
            features: [
                "Navodila korak za korakom za nujna popravila v domu",
                "Strokovni nasveti za vzdrževanje in prenovo bivalnih prostorov",
                "Praktične mojstrske tehnike za trajne in kakovostne rezultate"
            ],
            downloadUrl: "materials/REPAIR-1-SL.pdf",
            coverImage: "assets/covers/rep_IMG1_sl.png",
            buttonText: "Prenesi glavni vodnik (PDF)"
        },
        {
            id: "b2",
            title: "Praktični vodnik za električne inštalacije — Posodobljena izdaja 2026",
            description: "Popolnoma varno • V skladu z varnostnimi standardi • Jasno razloženo za samozavestno in varno izvajanje osnovnih električnih del in popravil v gospodinjstvu.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Varno in zanesljivo ravnanje z domačimi električnimi inštalacijami",
                "Upoštevanje ključnih varnostnih standardov in predpisov",
                "Vodiči korak za korakom za pogosta popravila, menjave in montažo"
            ],
            downloadUrl: "materials/REPAIR-2-SL.pdf",
            coverImage: "assets/covers/rep_IMG1_sl.png",
            buttonText: "Prenesi Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "Esencialni vodnik za vodovod — Izdaja 2026",
            description: "Popravila • Izboljšave • Vzdrževanje brez zapletov. Praktični priročnik za razumevanje, odpravljanje okvar in vzdrževanje vodovodnih inštalacij, pip in odtokov.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Diagnostika in enostavno odpravljanje najpogostejših vodovodnih težav",
                "Preventivno vzdrževanje cevi, pip, ventilov, kotličkov in odtokov",
                "Jasna in razumljiva navodila za začetnike in domače mojstre"
            ],
            downloadUrl: "materials/REPAIR-3-SL.pdf",
            coverImage: "assets/covers/rep_IMG1_sl.png",
            buttonText: "Prenesi Bonus #2 (PDF)"
        }
    ],

    otherProducts: []
};
