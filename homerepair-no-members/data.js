/**
 * Boligvedlikehold & Reparasjon — Medlemsområde (Norsk)
 */

const APP_DATA = {
    config: {
        brandName: "Boligvedlikehold & Reparasjon",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørsmål om tilgang (Boligvedlikehold & Reparasjon)",
        emailBodyTemplate: "Hei supportteam! Jeg vil gjerne ha hjelp med min tilgang til medlemsområdet for Boligvedlikehold & Reparasjon.\n\nMitt navn er: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Komplett Guide til Boligrenovering og Vedlikehold — Utgave 2026",
            description: "Din komplette håndbok for vedlikehold, reparasjoner og renovering — gjennomført trygt, fagmessig og med et resultat som holder i mange år fremover.",
            badgeText: "Hovedguide",
            badgeColor: "#D97706",
            features: [
                "Trinn-for-trinn instruksjoner til nødvendige hjemmereparasjoner",
                "Ekspertråd til vedlikeholdsprosjekter i boligen",
                "Praktiske gjør-det-selv-tips for varige resultater"
            ],
            downloadUrl: "materials/REPAIR-1-NO.pdf",
            coverImage: "assets/covers/rep_IMG1_no.png",
            buttonText: "Last ned hovedguiden"
        },
        {
            id: "b2",
            title: "Praktisk Guide til Elektriske Installasjoner i Hjemmet — Oppdatert Utgave 2026",
            description: "Trygt, i henhold to NEK 400 / Plan- og bygningsloven, gjør det riktig selv. En oppdatert praktisk håndbok til elektriske installasjoner i hjemmet.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Håndter elektroarbeid i hjemmet på en trygg måte",
                "Fullt tilpasset NEK 400 og gjeldende retningslinjer",
                "Trinn-for-trinn instruksjoner for vanlige installasjoner"
            ],
            downloadUrl: "materials/REPAIR-2-NO.pdf",
            coverImage: "assets/covers/rep_IMG1_no.png",
            buttonText: "Last ned Bonus #1"
        },
        {
            id: "b3",
            title: "Komplett Guide til Rørleggerarbeid i Hjemmet — Utgave 2026",
            description: "Reparasjoner, oppgradering og vedlikehold i toppstand. Din praktiske håndbok for å forstå, vedlikeholde og holde røropplegget i hjemmet i perfekt stand.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Diagnostiser og utbedre vanlige rørproblemer",
                "Hold hjemmets røropplegg i perfekt stand",
                "Tydelige instruksjoner tilpasset nybegynnere og hobbysnekkere"
            ],
            downloadUrl: "materials/REPAIR-3-NO.pdf",
            coverImage: "assets/covers/rep_IMG1_no.png",
            buttonText: "Last ned Bonus #2"
        }
    ],

    otherProducts: []
};
