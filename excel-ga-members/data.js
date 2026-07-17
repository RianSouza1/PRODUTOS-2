/**
 * Excel Mastery — Sonraí Limistéar na mBall (Gaeilge)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Inquiry regarding access (Excel Mastery)",
        emailBodyTemplate: "Dia dhuit, foireann tacaíochta! Tá cabhair uaim chun rochtain a fháil ar mo limistéar na mball ar Excel Mastery.\n\nIs é m'ainm ná: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Excel ó Nialas go Leibhéal Gairmiúil — Eagrán 2026",
            description: "Treoir phraiticiúil do thosaitheoirí ar scarbhileoga, eagrú agus táirgiúlacht laethúil. Foghlaim Excel céim ar chéim, ón gcéad chill go huirlisí chun cinn.",
            badgeText: "PRÍOMH-LEABHAR",
            badgeColor: "#1a7a45",
            features: [
                "Scarbhileoga agus eagrú sonraí do thosaitheoirí",
                "Táirgiúlacht laethúil agus bainistiú liostaí custaiméirí",
                "Rianú airgeadais agus pleanáil sceidil in Excel"
            ],
            downloadUrl: "materials/Excel-1-IR.pdf",
            coverImage: "assets/covers/excel_IMG1_ir.png",
            buttonText: "Íoslódáil an príomh-leabhar"
        },
        {
            id: "b2",
            title: "Foirmlí Excel, feidhmeanna agus sreafaí oibre cliste — Eagrán 2026",
            description: "Treoir phraiticiúil chun tascanna in Excel a réiteach níos tapúla. Tiontaigh gnáth-thábla go huirlis fhíor chun fadhbanna a réiteach le foirmlí agus feidhmeanna.",
            badgeText: "BÓNAS #1",
            badgeColor: "#D97706",
            features: [
                "Foirmlí agus feidhmeanna ar leibhéal chun cinn",
                "Ríomhanna uathoibríocha agus sreafaí oibre cliste",
                "Réitigh tascanna in Excel níos tapúla"
            ],
            downloadUrl: "materials/Excel-2-IR.pdf",
            coverImage: "assets/covers/excel_IMG1_ir.png",
            buttonText: "Íoslódáil bónas #1"
        },
        {
            id: "b3",
            title: "Táblaí Excel, tuarascálacha agus luanna — Eagrán 2026",
            description: "Treoir phraiticiúil chun sonraí a iompú ina dtuarascálacha soiléire gairmiúla. Foghlaim conas do chuid sonraí a chur i láthair go héifeachtach le táblaí agus tuarascálacha.",
            badgeText: "BÓNAS #2",
            badgeColor: "#7C3AED",
            features: [
                "Painéil faisnéise ghairmiúla agus comhpháirteanna amhairc",
                "Tuarascálacha achoimre agus pivot táblaí",
                "Cur i láthair sonraí do bhainisteoirí, cliaint agus foirne"
            ],
            downloadUrl: "materials/Excel-3-IR.pdf",
            coverImage: "assets/covers/excel_IMG1_ir.png",
            buttonText: "Íoslódáil bónas #2"
        }
    ],

    otherProducts: []
};
