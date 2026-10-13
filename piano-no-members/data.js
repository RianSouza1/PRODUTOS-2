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

    videos: [
    {
        "id": "v1",
        "title": "Fem fingre: C, D, E, F, G",
        "category": "Første steg",
        "description": "Følg de fem opplyste tangentene. Nummeret viser hvilken finger du skal bruke.",
        "steps": [
            "Plasser høyre tommel på midtre C.",
            "Spill C, D, E, F, G med fingrene 1, 2, 3, 4, 5.",
            "Gå tilbake gjennom F, E, D, C. Gjenta rolig."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/01-five-fingers.mp4",
        "poster": "assets/videos/01-five-fingers.jpg"
    },
    {
        "id": "v2",
        "title": "C-durskala",
        "category": "Skalaer",
        "description": "En skala over én oktav opp og ned, med fingernumre på tangentene.",
        "steps": [
            "Oppover: fingrene 1, 2, 3, 1, 2, 3, 4, 5.",
            "Etter E fører du tommelen under hånden til F.",
            "Nedover: 5, 4, 3, 2, 1, 3, 2, 1. Hold en jevn rytme."
        ],
        "duration": "0:36",
        "videoUrl": "assets/videos/02-c-major-scale.mp4",
        "poster": "assets/videos/02-c-major-scale.jpg"
    },
    {
        "id": "v3",
        "title": "Din første akkord: C-dur",
        "category": "Akkorder",
        "description": "Hør tonene i C-durakkorden først hver for seg og deretter sammen.",
        "steps": [
            "Plasser tommelen på C, langfingeren på E og lillefingeren på G.",
            "Spill de tre tonene én om gangen.",
            "Trykk C, E og G samtidig med fingrene 1, 3 og 5."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/03-c-major-chord.mp4",
        "poster": "assets/videos/03-c-major-chord.jpg"
    },
    {
        "id": "v4",
        "title": "Arpeggio i C-dur",
        "category": "Arpeggioer",
        "description": "Spill akkorden som et arpeggio: C, E, G, høy C og tilbake igjen.",
        "steps": [
            "Bruk fingrene 1, 2, 3 og 5 til C, E, G og høy C.",
            "Lytt til hver tone og hold hånden avslappet.",
            "Gå ned gjennom G, E, C med fingrene 3, 2, 1."
        ],
        "duration": "0:27",
        "videoUrl": "assets/videos/04-c-major-arpeggio.mp4",
        "poster": "assets/videos/04-c-major-arpeggio.jpg"
    },
    {
        "id": "v5",
        "title": "Bytt akkord: C, F, G",
        "category": "Akkorder",
        "description": "Se de tre akkordposisjonene og bytt rolig mellom dem.",
        "steps": [
            "Spill C-dur: C, E, G.",
            "Bytt til F-dur: F, A, C; deretter G-dur: G, H, D.",
            "Bruk fingrene 1, 3 og 5 til hver akkord. Avslutt med C-dur."
        ],
        "duration": "0:26",
        "videoUrl": "assets/videos/05-chord-changes.mp4",
        "poster": "assets/videos/05-chord-changes.jpg"
    },
    {
        "id": "v6",
        "title": "Begge hender sammen",
        "category": "Koordinasjon",
        "description": "Høyre hånd spiller fem toner mens venstre akkompagnerer med C og G.",
        "steps": [
            "Gjør høyre hånd klar på midtre C og venstre på den lave C-en.",
            "Høyre spiller C, D, E, F, G, F, E, D, C.",
            "Venstre holder C i fire slag, deretter G i fire. Avslutt på C."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/06-hands-together.mp4",
        "poster": "assets/videos/06-hands-together.jpg"
    }
],

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

/* Localized interface for the piano demonstrations. */
APP_DATA.videoUI = {
    "label": "Videoer",
    "homeTitle": "Demonstrasjonsvideoer",
    "homeText": "Seks korte øvelser med bare pianolyd",
    "heading": "Se, lytt og prøv",
    "intro": "Seks korte animerte demonstrasjoner. Følg de opplyste tangentene og fingernumrene. Lyden består bare av piano, uten fortellerstemme eller stemmer i bakgrunnen.",
    "demo": "Demonstrasjon",
    "of": "av",
    "sound": "Bare piano",
    "unsupported": "Nettleseren din støtter ikke denne videoen.",
    "open": "Åpne demonstrasjonen",
    "speed": "Avspillingshastighet",
    "replay": "Start på nytt",
    "practice": "Prøv selv",
    "choose": "Velg en demonstrasjon",
    "fingers": "Fingre",
    "fingerNames": [
        "tommel",
        "pekefinger",
        "langfinger",
        "ringfinger",
        "lillefinger"
    ],
    "creditsLabel": "Lyder",
    "creditsAdapted": "tilpasset øvelsene",
    "loadError": "Videoen kunne ikke lastes inn. Oppdater siden eller prøv igjen om litt.",
    "playHint": "Trykk på avspillingsknappen for å begynne."
};
