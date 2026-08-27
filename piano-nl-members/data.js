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

    videos: [],

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
