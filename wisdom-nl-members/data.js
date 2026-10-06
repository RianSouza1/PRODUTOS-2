/**
 * Het Boek van Innerlijke Wijsheid — Ledengebied (Nederlands)
 */

const APP_DATA = {
    config: {
        brandName: "Het Boek van Innerlijke Wijsheid",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vraag over toegang (Het Boek van Innerlijke Wijsheid)",
        emailBodyTemplate: "Hallo supportteam! Ik wil graag hulp vragen met betrekking tot mijn toegang tot het ledengedeelte van Het Boek van Innerlijke Wijsheid.\n\nMijn naam is: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Het Boek van Innerlijke Wijsheid — Volledige Uitgave",
            description: "Oude waarheden, heilige symbolen, lessen van de ziel en innerlijke kracht. Een diepgaande verkenning van tijdloze filosofische en contemplatieve tradities voor een bewuster en evenwichtiger leven.",
            badgeText: "Hoofdgids",
            badgeColor: "#D4AF37",
            features: [
                "Verdieping in stoïcisme, taoïsme, boeddhisme en contemplatie",
                "Onderscheid tussen informatie, kennis en waarachtige wijsheid",
                "Praktische inzichten voor innerlijke rust, focus en veerkracht"
            ],
            downloadUrl: "materials/WISDOM-1-NL.pdf",
            coverImage: "assets/covers/wis_IMG1_nl.png",
            buttonText: "Download het hoofdwerk (PDF)"
        },
        {
            id: "b2",
            title: "De Kracht van Heilige Symbolen",
            description: "Een gids over sacrale tekens en spiritueel bewustzijn. Ontdek de verborgen betekenissen, universele archetypen en de tijdloze werking van heilige symbolen door de eeuwen heen.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "De betekenis van universele tekens, emblemen en talismannen",
                "Historische oorsprong en spirituele werking van sacrale symbolen",
                "Symbolisch bewustzijn en archetypen in het dagelijks leven"
            ],
            downloadUrl: "materials/WISDOM-2-NL.pdf",
            coverImage: "assets/covers/wis_IMG1_nl.png",
            buttonText: "Download Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "De Kybalion Gids",
            description: "Hermetische wijsheid en de zeven universele wetten. Een heldere gids voor de tijdloze principes van het universum en het ontwikkelen van mentaal meesterschap.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "De Zeven Hermetische Principes helder en praktisch uitgelegd",
                "Wetten van mentalisme, polariteit, ritme en causaliteit",
                "Principes toepassen voor mentale helderheid en evenwicht"
            ],
            downloadUrl: "materials/WISDOM-3-NL.pdf",
            coverImage: "assets/covers/wis_IMG1_nl.png",
            buttonText: "Download Bonus #2 (PDF)"
        }
    ],

    otherProducts: []
};
