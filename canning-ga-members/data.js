/**
 * Caomhnú & Canáil Bia — Sonraí Limistéar Ballraíochta (Gaeilge)
 * v1
 */

const APP_DATA = {
    config: {
        brandName: "Caomhnú & Canáil Bia",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Ceist faoi rochtain (Caomhnú & Canáil Bia)",
        emailBodyTemplate: "Dia duit a fhoireann tacaíochta! Teastaíonn cabhair uaim le mo réimse ballraíochta do Caomhnú & Canáil Bia.\n\nIs é m'ainm ná: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Treoir mhionsonraithe ar chaomhnú agus ar stóráil bia 2026",
            description: "Treoir phraiticiúil do thosaitheoirí ar chaomhnú i ndabhach uisce, faoi bhrú, ar tháirgí coipthe, ar subha, ar sháits, ar stóráil shábháilte agus ar chaomhnú bia sa bhaile.",
            badgeText: "PRÍOMHLEABHAR",
            badgeColor: "#b45309",
            features: [
                "Caomhnú i ndabhach uisce agus faoi bhrú do thosaitheoirí",
                "Subha, sáits agus táirgí coipthe baile",
                "Stóráil shábháilte agus leasú bia sa bhaile"
            ],
            downloadUrl: "materials/Canning-1-GA.pdf",
            coverImage: "assets/covers/can_IMG1_ga.png",
            buttonText: "Íoslódáil an príomhleabhar"
        },
        {
            id: "b2",
            title: "Treoir do tháirgí le haghaidh stórála fadtéarmaí",
            description: "Meascáin thirim bhaile, ullmhaithe ina gcodanna agus curtha i ngloine, meascáin do anraithí, milseoga, spíosraí agus comhábhair phraiticiúla don pantry laethúil — gan trealamh steiriliúcháin.",
            badgeText: "BONAS #1",
            badgeColor: "#D97706",
            features: [
                "Meascáin thirim agus meascáin bhácála baile",
                "Anraithí, blastáin agus eagrú an pantry",
                "Sábháil am agus airgead le pantry stocáilte"
            ],
            downloadUrl: "materials/Canning-2-GA.pdf",
            coverImage: "assets/covers/can_IMG1_ga.png",
            buttonText: "Íoslódáil bonas #1"
        },
        {
            id: "b3",
            title: "Treoir Thosaigh do Fhorméadú Baile",
            description: "Glasraí coipthe simplí, cabáiste géar, picilíní coipthe, oidis i stíl kimchi, sáile, spíosraí, deochanna coipthe, fabhtcheartú agus modhanna sábháilte sa chistin.",
            badgeText: "BONAS #2",
            badgeColor: "#7C3AED",
            features: [
                "Cabáiste géar, picilíní agus oidis kimchi éasca",
                "Deochanna coipthe, sáile agus blastáin bhaile",
                "Modhanna sábháilte cistine agus fabhtcheartú"
            ],
            downloadUrl: "materials/Canning-3-GA.pdf",
            coverImage: "assets/covers/can_IMG1_ga.png",
            buttonText: "Íoslódáil bonas #2"
        }
    ],

    otherProducts: []
};