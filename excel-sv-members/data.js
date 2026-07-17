/**
 * Excel Mastery — Information om Medlemsområdet (Svenska)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Förfrågan om tillgång (Excel Mastery)",
        emailBodyTemplate: "Hej supportteam! Jag behöver hjälp med att få tillgång till mitt medlemsområde på Excel Mastery.\n\nMitt namn är: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Excel från noll till professionell — Utgåva 2026",
            description: "En praktisk nybörjarguide till kalkylblad, organisering och daglig produktivitet. Lär dig Excel steg för steg, från den allra första cellen till avancerade verktyg.",
            badgeText: "HUVUDBOK",
            badgeColor: "#1a7a45",
            features: [
                "Kalkylblad och dataorganisering for nybörjare",
                "Daglig produktivitet och hantering av kundlistor",
                "Ekonomispårning och kalenderplanering i Excel"
            ],
            downloadUrl: "materials/Excel-1-SV.pdf",
            coverImage: "assets/covers/excel_IMG1_sv.png",
            buttonText: "Ladda ner huvudboken"
        },
        {
            id: "b2",
            title: "Excel-formler, funktioner & smarta arbetsflöden — Utgåva 2026",
            description: "En praktisk guide för att lösa problem snabbare med Excel. Förvandla en enkel tabell till ett verkligt verktyg för att lösa problem med formler och funktioner.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Avancerade formler och funktioner",
                "Automatiska beräkningar och smarta arbetsflöden",
                "Lös problem snabbare i Excel"
            ],
            downloadUrl: "materials/Excel-2-SV.pdf",
            coverImage: "assets/covers/excel_IMG1_sv.png",
            buttonText: "Ladda ner bonus #1"
        },
        {
            id: "b3",
            title: "Excel-paneler, rapporter & pivottabeller — 2026 utgåva",
            description: "En praktisk guide till to omvandla data till tydliga, professionella rapporter. Lär dig att presentera dina data effektivt med hjälp av paneler och rapporter.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Professionella instrumentpaneler och visuella paneler",
                "Sammanfattande rapporter och pivottabeller",
                "Presentation av data för chefer, kunder och team"
            ],
            downloadUrl: "materials/Excel-3-SV.pdf",
            coverImage: "assets/covers/excel_IMG1_sv.png",
            buttonText: "Ladda ner bonus #2"
        }
    ],

    otherProducts: []
};
