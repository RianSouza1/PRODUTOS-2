/**
 * Survival & Bushcraft — Medlemsområde (Norsk)
 * Den komplette serien om bushcraft og overlevelse
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørsmål om tilgang (Survival & Bushcraft)",
        emailBodyTemplate: "Hei supportteam. Jeg trenger hjelp med å få tilgang til mitt medlemsområde for Survival & Bushcraft.\n\nMitt navn er: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Overlevelse for nybegynnere — Utgave 2026",
            description: "Vann, bål, ly, nødsignalering og grunnleggende survivalteknikker. En praktisk håndbok for alle som tilbringer tid i naturen — turgåere, campere, jegere eller vanlige eventyrere.",
            badgeText: "Hovedmateriale",
            badgeColor: "#6B7C44",
            features: [
                "Finne, rense og sikre vann i villmarken",
                "Tenne bål, bygge ly og sende nødsignaler",
                "Feltprøvde teknikker for nybegynnere"
            ],
            downloadUrl: "materials/SURVIVOR-1-NO.pdf",
            coverImage: "assets/covers/sur_IMG1_no.png",
            buttonText: "Last ned hovedmateriale"
        },
        {
            id: "b2",
            title: "Bushcraft og kunsten å leve i skogen — Utgave 2026",
            description: "Utstyr, knuter, navigasjon, bivuakkteknikker og kunnskap om selvberging i naturen. Grunnleggende ferdigheter for et sikkert og trygt friluftsliv.",
            badgeText: "Bonus #1",
            badgeColor: "#7A5C3E",
            features: [
                "Mestre verktøy, knuter og navigasjonsteknikker",
                "Sette opp leir/bivuakk og leve selvstendig i naturen",
                "Trinn-for-trinn-instruksjoner for nybegynnere uten forkunnskaper"
            ],
            downloadUrl: "materials/SURVIVOR-2-NO.pdf",
            coverImage: "assets/covers/sur_IMG1_no.png",
            buttonText: "Last ned Bonus #1"
        },
        {
            id: "b3",
            title: "Beredskap og førstehjelp for deg og dine nærmeste — Utgave 2026",
            description: "72-timers beredskapssekk, strømbrudd, evakuering og hvordan du beskytter familien din. Alt hva en vanlig familie trenger å vite i en nødsituasjon.",
            badgeText: "Bonus #2",
            badgeColor: "#8B4513",
            features: [
                "Riktig pakking av en 72-timers beredskapssekk",
                "Forberedelse på strømbrudd, evakuering og hemberedskap",
                "Grunnleggende førstehjelp for familier i krisesituasjoner"
            ],
            downloadUrl: "materials/SURVIVOR-3-NO.pdf",
            coverImage: "assets/covers/sur_IMG1_no.png",
            buttonText: "Last ned Bonus #2"
        }
    ],

    otherProducts: []
};
