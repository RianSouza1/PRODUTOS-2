/**
 * Den Komplette Klaversamling — Medlemsområde (Dansk) v1
 */

const APP_DATA = {
    config: {
        brandName: "Den Komplette Klaversamling",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Anmodning om support – adgang (Den Komplette Klaversamling)",
        emailBodyTemplate: "Hej supportteam! Jeg vil gerne bede om hjælp vedrørende min adgang til medlemsområdet for Den Komplette Klaversamling.\n\nMit navn er: ______.",
        showFloatingHelp: true
    },

    videos: [
    {
        "id": "v1",
        "title": "Fem fingre: C, D, E, F, G",
        "category": "Første skridt",
        "description": "Følg de fem oplyste tangenter. Nummeret viser, hvilken finger du skal bruge.",
        "steps": [
            "Placér højre tommelfinger på midter-C.",
            "Spil C, D, E, F, G med fingrene 1, 2, 3, 4, 5.",
            "Gå tilbage gennem F, E, D, C. Gentag roligt."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/01-five-fingers.mp4",
        "poster": "assets/videos/01-five-fingers.jpg"
    },
    {
        "id": "v2",
        "title": "C-dur-skala",
        "category": "Skalaer",
        "description": "En skala over én oktav op og ned, med fingernumre på tangenterne.",
        "steps": [
            "Opad: fingrene 1, 2, 3, 1, 2, 3, 4, 5.",
            "Efter E føres tommelfingeren under hånden til F.",
            "Nedad: 5, 4, 3, 2, 1, 3, 2, 1. Hold en jævn rytme."
        ],
        "duration": "0:36",
        "videoUrl": "assets/videos/02-c-major-scale.mp4",
        "poster": "assets/videos/02-c-major-scale.jpg"
    },
    {
        "id": "v3",
        "title": "Din første akkord: C-dur",
        "category": "Akkorder",
        "description": "Hør tonerne i C-dur-akkorden først hver for sig og derefter sammen.",
        "steps": [
            "Placér tommelfingeren på C, langfingeren på E og lillefingeren på G.",
            "Spil de tre toner én ad gangen.",
            "Tryk C, E og G ned samtidig med fingrene 1, 3 og 5."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/03-c-major-chord.mp4",
        "poster": "assets/videos/03-c-major-chord.jpg"
    },
    {
        "id": "v4",
        "title": "Arpeggio i C-dur",
        "category": "Arpeggioer",
        "description": "Spil akkorden som et arpeggio: C, E, G, højt C og tilbage igen.",
        "steps": [
            "Brug fingrene 1, 2, 3 og 5 til C, E, G og højt C.",
            "Lyt til hver tone, og hold hånden afslappet.",
            "Gå ned gennem G, E, C med fingrene 3, 2, 1."
        ],
        "duration": "0:27",
        "videoUrl": "assets/videos/04-c-major-arpeggio.mp4",
        "poster": "assets/videos/04-c-major-arpeggio.jpg"
    },
    {
        "id": "v5",
        "title": "Skift akkord: C, F, G",
        "category": "Akkorder",
        "description": "Se de tre akkordpositioner, og skift roligt mellem dem.",
        "steps": [
            "Spil C-dur: C, E, G.",
            "Skift til F-dur: F, A, C; derefter G-dur: G, H, D.",
            "Brug fingrene 1, 3 og 5 til hver akkord. Slut på C-dur."
        ],
        "duration": "0:26",
        "videoUrl": "assets/videos/05-chord-changes.mp4",
        "poster": "assets/videos/05-chord-changes.jpg"
    },
    {
        "id": "v6",
        "title": "Begge hænder sammen",
        "category": "Koordination",
        "description": "Højre hånd spiller fem toner, mens venstre ledsager med C og G.",
        "steps": [
            "Gør højre hånd klar på midter-C og venstre på det dybe C.",
            "Højre spiller C, D, E, F, G, F, E, D, C.",
            "Venstre holder C i fire slag og derefter G i fire. Slut på C."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/06-hands-together.mp4",
        "poster": "assets/videos/06-hands-together.jpg"
    }
],

    books: [
        {
            id: "b1",
            title: "Klaver for Absolutte Begyndere — Bog 1 af 3",
            description: "En uundværlig begynderguide til alle, der tager deres første skridt med klaver og keyboard. Lær grundlæggende noder, akkorder, fingerstilling og begynd at spille dine første sange med det samme.",
            badgeText: "Begynderguide",
            badgeColor: "#1b2a38",
            features: [
                "Grundlæggende noder, tangenter og fingerstilling for begyndere",
                "Trin-for-trin guide til dine første klaverakkorder og rytmer",
                "Start med at spille dine første klavermelodier med det samme"
            ],
            downloadUrl: "materials/PIANO-1-DA.pdf",
            coverImage: "assets/covers/piano_IMG1_da.png",
            buttonText: "Download Begynderguide (PDF)"
        },
        {
            id: "b2",
            title: "Nemme Klaversange — Bog 2 af Samlingen",
            description: "Udvikl dine klaverfærdigheder ved at mestre glatte akkordskift og to-hånds uafhængighed. Spil med selvtillid takket være denne inspirerende sangbog.",
            badgeText: "Nemme Sange",
            badgeColor: "#4a5568",
            features: [
                "Smukke og nemme klaverarrangementer for begyndere og øvede",
                "Glatte akkordskift og uafhængighed mellem højre og venstre hånd",
                "Trin-for-trin guider til populære og klassiske melodier"
            ],
            downloadUrl: "materials/PIANO-2-DA.pdf",
            coverImage: "assets/covers/piano_IMG1_da.png",
            buttonText: "Download Sangbog (PDF)"
        },
        {
            id: "b3",
            title: "30-Dages Klaverchallenge — Bog 3 af 3",
            description: "En struktureret daglig øveplan til at opbygge din fingerhastighed, rytme, præcision og skabe en fast daglig øverutine ved klaveret.",
            badgeText: "30-Dages Challenge",
            badgeColor: "#6b1d2f",
            features: [
                "Struktureret daglig øveplan i 30 dage for kontinuerlig fremgang",
                "Øvelser til fingerhastighed, præcision og uafhængighed",
                "Smart og effektiv klaverrutine til vedvarende succes"
            ],
            downloadUrl: "materials/PIANO-3-DA.pdf",
            coverImage: "assets/covers/piano_IMG1_da.png",
            buttonText: "Download Øveplan (PDF)"
        }
    ],

    otherProducts: []
};

/* Localized interface for the piano demonstrations. */
APP_DATA.videoUI = {
    "label": "Videoer",
    "homeTitle": "Demonstrationsvideoer",
    "homeText": "Seks korte øvelser med kun klaverlyd",
    "heading": "Se, lyt og prøv",
    "intro": "Seks korte animerede demonstrationer. Følg de oplyste tangenter og fingrenes numre. Lyden består kun af klaver, uden fortællerstemme eller stemmer i baggrunden.",
    "demo": "Demonstration",
    "of": "af",
    "sound": "Kun klaver",
    "unsupported": "Din browser understøtter ikke denne video.",
    "open": "Åbn demonstrationen",
    "speed": "Afspilningshastighed",
    "replay": "Start forfra",
    "practice": "Prøv selv",
    "choose": "Vælg en demonstration",
    "fingers": "Fingre",
    "fingerNames": [
        "tommelfinger",
        "pegefinger",
        "langfinger",
        "ringfinger",
        "lillefinger"
    ],
    "creditsLabel": "Lyde",
    "creditsAdapted": "tilpasset til øvelserne",
    "loadError": "Videoen kunne ikke indlæses. Opdater siden, eller prøv igen om lidt.",
    "playHint": "Tryk på afspilningsknappen for at begynde."
};
