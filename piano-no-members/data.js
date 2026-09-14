/**
 * Den Komplette Pianosamlingen — Medlemsområde (Norsk)
 */

const APP_DATA = {
    config: {
        brandName: "Den Komplette Pianosamlingen",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Supportforespørsel om tilgang (Den Komplette Pianosamlingen)",
        emailBodyTemplate: "Hei supportteam! Jeg ønsker å be om hjelp angående min tilgang til medlemsområdet for Den Komplette Pianosamlingen.\n\nMitt navn er: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Piano for Helt Nybegynnere — Bok 1 av 3",
            description: "Tangenter, akkorder og dine første stykker. Bli kjent med klaviaturet, lær å lese enkle noter, forstå grunnleggende akkorder og spill dine første sanger trinn for trinn.",
            badgeText: "Nybegynnerguide",
            badgeColor: "#1b2a38",
            features: [
                "Klaviatur, sittestilling, håndposisjon og grunnleggende notelære",
                "Trinn-for-trinn-veiledning til dine første akkorder og rytmer",
                "Spill ekte og vakre pianostykker helt fra starten av"
            ],
            downloadUrl: "materials/PIANO-1-NO.pdf",
            coverImage: "assets/covers/piano_IMG1_no.png",
            buttonText: "Last ned Nybegynnerguide (PDF)"
        },
        {
            id: "b2",
            title: "Enkle Pianosanger — Bok 2 av 3",
            description: "Trinn for trinn til rytme, koordinasjon og trygt spill. Fra den første enkle melodien til tohåndsspill – en inspirerende repertoarsamling for ekte spilleglede ved pianoet.",
            badgeText: "Enkle Sanger",
            badgeColor: "#4a5568",
            features: [
                "Vakre og spesialarrangerte sanger for nybegynnere",
                "Utvikling av tohåndsspill og flytende akkordskifter",
                "Kjente melodier og klassiske perler du mestrer steg for steg"
            ],
            downloadUrl: "materials/PIANO-2-NO.pdf",
            coverImage: "assets/covers/piano_IMG1_no.png",
            buttonText: "Last ned Sangbok (PDF)"
        },
        {
            id: "b3",
            title: "30-Dagers Pianoutfordring — Bok 3 av 3",
            description: "En strukturert daglig øveplan for mer rytme, presisjon og mestring. 20 minutter daglig for å forbedre notelesing, koordinasjon, takt og fingerferdighet.",
            badgeText: "30-Dagers Utfordring",
            badgeColor: "#6b1d2f",
            features: [
                "30 strukturerte dager med 20 minutters målrettet daglig øving",
                "Øvelser for notelesing, metronomtakt og koordinasjon mellom hendene",
                "Bygg en varig, inspirerende og effektiv øverutine"
            ],
            downloadUrl: "materials/PIANO-3-NO.pdf",
            coverImage: "assets/covers/piano_IMG1_no.png",
            buttonText: "Last ned Utfordring (PDF)"
        }
    ],

    otherProducts: []
};
