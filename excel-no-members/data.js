/**
 * Excel Mastery — Informasjon om Medlemsområdet (Norsk)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Forespørsel om tilgang (Excel Mastery)",
        emailBodyTemplate: "Hei supportteam! Jeg trenger hjelp til å få tilgang til medlemsområdet mitt på Excel Mastery.\n\nMitt navn er: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Fra null til proff i Excel — Utgaven for 2026",
            description: "En praktisk guide for nybegynnere som dekker regneark, organisering og hverdagsproduktivitet. Lær Excel trinn for trinn, fra den første cellen til avanserte verktøy.",
            badgeText: "HOVEDBOK",
            badgeColor: "#1a7a45",
            features: [
                "Regneark og dataorganisering for nybegynnere",
                "Hverdagsproduktivitet og håndtering av kundelister",
                "Økonomisporing og tidsplanlegging i Excel"
            ],
            downloadUrl: "materials/Excel-1-NO.pdf",
            coverImage: "assets/covers/excel_IMG1_no.png",
            buttonText: "Last ned hovedboken"
        },
        {
            id: "b2",
            title: "Excel-formler, funksjoner og smarte arbeidsflyter — Utgaven for 2026",
            description: "En praktisk guide for å løse Excel-oppgaver raskere. Forvandle et enkelt regneark til et verktøy som virkelig løser problemer med formler og funksjoner.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Formler og funksjoner på avansert nivå",
                "Automatiske beregninger og smarte arbeidsflyter",
                "Løs Excel-oppgaver raskere"
            ],
            downloadUrl: "materials/Excel-2-NO.pdf",
            coverImage: "assets/covers/excel_IMG1_no.png",
            buttonText: "Last ned bonus #1"
        },
        {
            id: "b3",
            title: "Excel-regneark, rapporter, formler — Utgaven for 2026",
            description: "Praktisk guide til å gjøre data om til klare og profesjonelle rapporter. Lær å presentere dataene dine effektivt ved hjelp av regneark og rapporter.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Profesjonelle dashbord og visuelle paneler",
                "Sammendragsrapporter og pivot-tabeller",
                "Presentasjon av data for ledere, kunder og team"
            ],
            downloadUrl: "materials/Excel-3-NO.pdf",
            coverImage: "assets/covers/excel_IMG1_no.png",
            buttonText: "Last ned bonus #2"
        }
    ],

    otherProducts: []
};
