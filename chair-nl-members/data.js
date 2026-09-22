/**
 * Stoelgymnastiek voor Senioren — Ledenomgeving (Nederlands)
 */

const APP_DATA = {
    config: {
        brandName: "Stoelgymnastiek voor Senioren",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vragen over toegang (Stoelgymnastiek voor Senioren)",
        emailBodyTemplate: "Hallo ondersteuningsteam! Ik wil graag hulp vragen met betrekking tot mijn toegang tot de ledenomgeving van Stoelgymnastiek voor Senioren.\n\nMijn naam is: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Stoelgymnastiek voor Senioren — Boek 1 van 3",
            description: "Gerichte oefeningen in zittende positie voor benen, armen en romp — voor meer vrijheid en zelfvertrouwen in het dagelijks leven. Een complete gids met spierversterkende oefeningen zonder vloeroefeningen of zware gewichten.",
            badgeText: "Krachttraining",
            badgeColor: "#0284c7",
            features: [
                "Training voor benen, kuiten, dijen, heupen en bilspieren in zittende positie",
                "Versterking van armen, schouders, bovenrug en grijpkracht op een veilige manier",
                "Veilige en effectieve oefeningen voor meer vrijheid en zelfvertrouwen in het dagelijks leven"
            ],
            downloadUrl: "materials/CHAIR-1-NL.pdf",
            coverImage: "assets/covers/ch_IMG1_nl.png",
            buttonText: "Download Krachttraining (PDF)"
        },
        {
            id: "b2",
            title: "Stoelgymnastiek & Mobiliteit voor Senioren — Boek 2 van 3",
            description: "Zachte zittende rekoefeningen voor soepelheid, houding, stijve gewrichten en gemakkelijkere dagelijkse bewegingen. Verbeter uw mobiliteit in uw eigen tempo zonder overbelasting van de gewrichten.",
            badgeText: "Mobiliteit & Rekken",
            badgeColor: "#0d9488",
            features: [
                "Zachte zittende rekoefeningen voor meer flexibiliteit en een betere lichaamshouding",
                "Verlichting van stijfheid in nek, schouders, rug en heupen",
                "Oefenen in uw eigen tempo met de focus op welzijn en comfortabele bewegingen"
            ],
            downloadUrl: "materials/CHAIR-2-NL.pdf",
            coverImage: "assets/covers/ch_IMG1_nl.png",
            buttonText: "Download Mobiliteit (PDF)"
        },
        {
            id: "b3",
            title: "Zittend Oefenprogramma — 28 Dagen — Boek 3 van 3",
            description: "10 minuten per dag voor kracht, soepelheid, beweeglijkheid en zelfvertrouwen. Een compleet 28-dagen programma opgebouwd in eenvoudige, stapsgewijze sessies voor dagelijks welzijn.",
            badgeText: "28-Dagen Programma",
            badgeColor: "#d97706",
            features: [
                "Compleet 28-dagen programma met ~10 minuten dagelijkse zittende sessies",
                "Drie aanpasbare niveaus: makkelijker, standaard en met lichte uitdaging",
                "Combineert kracht, soepelheid en balans in een overzichtelijke dagelijkse routine"
            ],
            downloadUrl: "materials/CHAIR-3-NL.pdf",
            coverImage: "assets/covers/ch_IMG1_nl.png",
            buttonText: "Download 28-Dagen Programma (PDF)"
        }
    ],

    otherProducts: []
};
