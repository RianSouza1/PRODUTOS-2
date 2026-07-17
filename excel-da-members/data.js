/**
 * Excel Mastery — Oplysninger om Medlemsområdet (Dansk)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Forespørgsel om adgang (Excel Mastery)",
        emailBodyTemplate: "Hej supportteam! Jeg har brug for hjælp til at få adgang til mit medlemsområde på Excel Mastery.\n\nMit navn er: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Excel fra nul til professionel — Udgave 2026",
            description: "En praktisk begynderguide til regneark, organisering og daglig produktivitet. Lær Excel trin for trin, fra den allerførste celle til avancerede værktøjer.",
            badgeText: "HOVEDBOG",
            badgeColor: "#1a7a45",
            features: [
                "Regneark og dataorganisering for begyndere",
                "Daglig produktivitet og administration af kundelister",
                "Finansiel sporing og kalenderplanlægning i Excel"
            ],
            downloadUrl: "materials/Excel-1-DK.pdf",
            coverImage: "assets/covers/excel_IMG1_dk.png",
            buttonText: "Download hovedbog"
        },
        {
            id: "b2",
            title: "Excel-formler, funktioner & smarte workflows — Udgave 2026",
            description: "En praktisk guide til at løse problemer hurtigere med Excel. Forvandl en simpel tabel til et ægte problemløsningsværktøj ved hjælp af formler og funktioner.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Avancerede formler og funktioner",
                "Automatiske beregninger og smarte arbejdsgange",
                "Hurtigere problemløsning i Excel"
            ],
            downloadUrl: "materials/Excel-2-DK.pdf",
            coverImage: "assets/covers/excel_IMG1_dk.png",
            buttonText: "Download bonus #1"
        },
        {
            id: "b3",
            title: "Excel-dashboards, rapporter & pivottabeller — 2026 udgave",
            description: "En praktisk guide til at omdanne data til klare, professionelle rapporter. Lær at præsentere dine data effektivt ved hjælp af dashboards og rapporter.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Professionelle dashboards og visuelle paneler",
                "Resumerapporter og pivottabeller",
                "Præsentation af data til ledere, kunder og teams"
            ],
            downloadUrl: "materials/Excel-3-DK.pdf",
            coverImage: "assets/covers/excel_IMG1_dk.png",
            buttonText: "Download bonus #2"
        }
    ],

    otherProducts: []
};
