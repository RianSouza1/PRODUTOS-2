/**
 * Onderhoud & Reparatie Thuis — Ledengebied (Nederlands)
 */

const APP_DATA = {
    config: {
        brandName: "Onderhoud & Reparatie Thuis",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Toegangsvraag (Onderhoud & Reparatie Thuis)",
        emailBodyTemplate: "Hallo supportteam! Ik wil graag hulp bij mijn toegang tot het ledengebied voor Onderhoud & Reparatie Thuis.\n\nMijn naam is: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "De Complete Gids voor Onderhoud & Verbetering van je Huis — Editie 2026",
            description: "Praktische Klussen, Vakkundige Tips & Blijvend Resultaat. Jouw complete naslagwerk voor het onderhouden, repareren en verbeteren van je woning — met zelfvertrouwen, veiligheid en een degelijk eindresultaat.",
            badgeText: "Hoofdgids",
            badgeColor: "#D97706",
            features: [
                "Stap-voor-stap instructies voor essentiële reparaties thuis",
                "Vakkundige tips voor onderhoudsklusjes",
                "Praktische doe-het-zelf adviezen voor blijvend resultaat"
            ],
            downloadUrl: "materials/REPAIR-1-NL.pdf",
            coverImage: "assets/covers/rep_IMG1_nl.png",
            buttonText: "Download de hoofdgids"
        },
        {
            id: "b2",
            title: "De Praktische Gids voor Thuisinstallaties — Editie 2026",
            description: "Veilig • NEN 1010-bewust • Zelf klussen met vertrouwen. Een bijgewerkt praktisch handboek voor het veilig uitvoeren van elektrische klussen in huis.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Elektrische klussen thuis veilig uitvoeren",
                "Volledig NEN 1010-bewust",
                "Stap-voor-stap handleidingen voor veelvoorkomende installaties"
            ],
            downloadUrl: "materials/REPAIR-2-NL.pdf",
            coverImage: "assets/covers/rep_IMG1_nl.png",
            buttonText: "Download Bonus #1"
        },
        {
            id: "b3",
            title: "De Complete Gids voor Loodgieterswerk — Editie 2026",
            description: "Repareer Het • Verbeter Het • Houd Het Stromend. Uw praktisch naslagwerk voor het begrijpen, diagnosticeren en onderhouden van huishoudelijke leidinginstallaties.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Veelvoorkomende loodgietersProblemen opsporen en oplossen",
                "Huishoudelijke leidingen in perfecte staat houden",
                "Duidelijke instructies voor beginners en doe-het-zelvers"
            ],
            downloadUrl: "materials/REPAIR-3-NL.pdf",
            coverImage: "assets/covers/rep_IMG1_nl.png",
            buttonText: "Download Bonus #2"
        }
    ],

    otherProducts: []
};
