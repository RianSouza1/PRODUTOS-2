/**
 * De Complete Pianocollectie — Ledengebied (Nederlands) v1
 */

const APP_DATA = {
    config: {
        brandName: "De Complete Pianocollectie",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Ondersteuningsverzoek – Toegang (De Complete Pianocollectie)",
        emailBodyTemplate: "Hallo supportteam! Ik wil graag hulp vragen met betrekking tot mijn toegang tot het ledengedeelte van De Complete Pianocollectie.\n\nMijn naam is: ______.",
        showFloatingHelp: true
    },

    videos: [
    {
        "id": "v1",
        "title": "Vijf vingers: C, D, E, F, G",
        "category": "Eerste stappen",
        "description": "Volg de vijf verlichte toetsen. Het nummer geeft aan welke vinger je gebruikt.",
        "steps": [
            "Leg je rechterduim op de centrale C.",
            "Speel C, D, E, F, G met vingers 1, 2, 3, 4, 5.",
            "Ga terug via F, E, D, C. Herhaal rustig."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/01-five-fingers.mp4",
        "poster": "assets/videos/01-five-fingers.jpg"
    },
    {
        "id": "v2",
        "title": "Toonladder van C majeur",
        "category": "Toonladders",
        "description": "Een toonladder van één octaaf omhoog en omlaag, met de vingerzetting op de toetsen.",
        "steps": [
            "Omhoog: vingers 1, 2, 3, 1, 2, 3, 4, 5.",
            "Breng na E je duim onder je hand naar F.",
            "Omlaag: 5, 4, 3, 2, 1, 3, 2, 1. Houd een gelijkmatig ritme."
        ],
        "duration": "0:36",
        "videoUrl": "assets/videos/02-c-major-scale.mp4",
        "poster": "assets/videos/02-c-major-scale.jpg"
    },
    {
        "id": "v3",
        "title": "Je eerste akkoord: C majeur",
        "category": "Akkoorden",
        "description": "Luister naar de noten van C majeur, eerst apart en daarna samen.",
        "steps": [
            "Leg je duim op C, middelvinger op E en pink op G.",
            "Speel de drie noten één voor één.",
            "Druk C, E en G tegelijk in met vingers 1, 3 en 5."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/03-c-major-chord.mp4",
        "poster": "assets/videos/03-c-major-chord.jpg"
    },
    {
        "id": "v4",
        "title": "Arpeggio van C majeur",
        "category": "Arpeggio’s",
        "description": "Speel het akkoord als arpeggio: C, E, G, hoge C en weer terug.",
        "steps": [
            "Gebruik vingers 1, 2, 3 en 5 voor C, E, G en hoge C.",
            "Luister naar elke noot en houd je hand ontspannen.",
            "Ga terug via G, E, C met vingers 3, 2, 1."
        ],
        "duration": "0:27",
        "videoUrl": "assets/videos/04-c-major-arpeggio.mp4",
        "poster": "assets/videos/04-c-major-arpeggio.jpg"
    },
    {
        "id": "v5",
        "title": "Akkoorden wisselen: C, F, G",
        "category": "Akkoorden",
        "description": "Bekijk de drie akkoordposities en wissel rustig van het ene naar het andere.",
        "steps": [
            "Speel C majeur: C, E, G.",
            "Ga naar F majeur: F, A, C; daarna G majeur: G, B, D.",
            "Gebruik telkens vingers 1, 3 en 5. Eindig met C majeur."
        ],
        "duration": "0:26",
        "videoUrl": "assets/videos/05-chord-changes.mp4",
        "poster": "assets/videos/05-chord-changes.jpg"
    },
    {
        "id": "v6",
        "title": "Beide handen samen",
        "category": "Coördinatie",
        "description": "De rechterhand speelt vijf noten terwijl de linkerhand begeleidt met C en G.",
        "steps": [
            "Bereid rechts de centrale C en links de lage C voor.",
            "Rechts speel je C, D, E, F, G, F, E, D, C.",
            "Links houd je C vier tellen vast, daarna G vier tellen. Eindig op C."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/06-hands-together.mp4",
        "poster": "assets/videos/06-hands-together.jpg"
    }
],

    books: [
        {
            id: "b1",
            title: "Piano voor Absolute Beginners — Boek 1 van 3",
            description: "Een onmisbare beginnersgids voor iedereen die zijn eerste stappen zet aan de piano en het keyboard. Leer de basistoetsen, eenvoudig noten lezen, vingerzetting en begin direct met het spelen van uw eerste stukken.",
            badgeText: "Beginnersgids",
            badgeColor: "#1b2a38",
            features: [
                "Het klavier leren kennen, handpositie en eenvoudige noten lezen",
                "Stap voor stap uw eerste piano-akkoorden en ritmes leren",
                "Begin direct met het spelen van uw eerste pianostukken"
            ],
            downloadUrl: "materials/PIANO-1-NL.pdf",
            coverImage: "assets/covers/piano_IMG1_nl.png",
            buttonText: "Download Beginnersgids (PDF)"
        },
        {
            id: "b2",
            title: "Eenvoudige Pianostukken — Boek 2 van de Serie",
            description: "Ontwikkel uw pianovaardigheden door vloeiende akkoordwisselingen en onafhankelijkheid tussen beide handen te beheersen. Speel met zelfvertrouwen dankzij deze inspirerende stukkenbundel.",
            badgeText: "Eenvoudige Stukken",
            badgeColor: "#4a5568",
            features: [
                "Mooie en toegankelijke pianobewerkingen voor beginners en herstarters",
                "Vloeiende akkoordwisselingen en coördinatie tussen beide handen",
                "Stap-voor-stap opbouw naar zelfverzekerd spelen van echte muziek"
            ],
            downloadUrl: "materials/PIANO-2-NL.pdf",
            coverImage: "assets/covers/piano_IMG1_nl.png",
            buttonText: "Download Stukkenbundel (PDF)"
        },
        {
            id: "b3",
            title: "30-Dagen Pianochallenge — Boek 3 van 3",
            description: "Een gestructureerd dagelijks oefenschema om vingersnelheid, ritme, precisie en coördinatie op te bouwen, en een vaste dagelijkse oefenroutine aan de piano te creëren.",
            badgeText: "30-Dagen Challenge",
            badgeColor: "#6b1d2f",
            features: [
                "Gestructureerd dagelijks oefenschema van 30 dagen voor continue vooruitgang",
                "Oefeningen voor vingersnelheid, precisie en tweehandige coördinatie",
                "Effectieve oefenroutine en dagboek voor blijvend succes aan de piano"
            ],
            downloadUrl: "materials/PIANO-3-NL.pdf",
            coverImage: "assets/covers/piano_IMG1_nl.png",
            buttonText: "Download Oefenplan (PDF)"
        }
    ],

    otherProducts: []
};

/* Localized interface for the piano demonstrations. */
APP_DATA.videoUI = {
    "label": "Video’s",
    "homeTitle": "Demonstratievideo’s",
    "homeText": "Zes korte oefeningen met alleen pianogeluid",
    "heading": "Kijk, luister en probeer",
    "intro": "Zes korte geanimeerde demonstraties. Volg de verlichte toetsen en de vingernummers. Je hoort alleen piano, zonder gesproken uitleg of stemmen op de achtergrond.",
    "demo": "Demonstratie",
    "of": "van",
    "sound": "Alleen piano",
    "unsupported": "Je browser ondersteunt deze video niet.",
    "open": "Open de demonstratie",
    "speed": "Afspeelsnelheid",
    "replay": "Opnieuw beginnen",
    "practice": "Probeer het zelf",
    "choose": "Kies een demonstratie",
    "fingers": "Vingers",
    "fingerNames": [
        "duim",
        "wijsvinger",
        "middelvinger",
        "ringvinger",
        "pink"
    ],
    "creditsLabel": "Geluiden",
    "creditsAdapted": "bewerkt voor de oefeningen",
    "loadError": "De video kon niet worden geladen. Vernieuw de pagina of probeer het straks opnieuw.",
    "playHint": "Druk op de afspeelknop om te beginnen."
};
