/**
 * Houtbewerking & Woodworking — Ledengedeelte (Nederlands)
 */

const APP_DATA = {
    config: {
        brandName: "Houtbewerking & Woodworking",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vraag over toegang (Houtbewerking & Woodworking)",
        emailBodyTemplate: "Hallo supportteam! Ik wil graag hulp vragen bij mijn toegang tot het ledengedeelte voor Houtbewerking & Woodworking.\n\nMijn naam is: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Houtbewerking voor Beginners — Gereedschap, zaagtechnieken en verbindingen",
            description: "Dit boek is bedoeld voor iedereen die altijd al aan de slag heeft willen gaan met houtbewerking. Gereedschap, zaagtechnieken, verbindingen en basisvaardigheden zonder dure machines.",
            badgeText: "HOOFDBOEK",
            badgeColor: "#D97706",
            features: [
                "Basisgereedschap, zaagtechnieken en houtverbindingen voor beginners",
                "Stap-voor-stap handleidingen zonder noodzaak voor een dure werkplaats",
                "Tips voor materiaalkeuze, veiligheid en strak zaagwerk"
            ],
            downloadUrl: "materials/WOOD-1-NL.pdf",
            coverImage: "assets/covers/wood_IMG1_nl.png",
            buttonText: "Download Hoofdboek (Boek 1)"
        },
        {
            id: "b2",
            title: "Houtbewerking zonder gedoe — 18 projecten stap voor stap",
            description: "18 complete bouwprojecten met zaaglijsten & maatoverzichten. Van telefoonhouder tot werkbankbok — stap voor stap gebouwd.",
            badgeText: "PROJECTENBOEK",
            badgeColor: "#2D6A4F",
            features: [
                "18 complete houtbouwprojecten met nauwkeurige zaaglijsten",
                "Stap-voor-stap bouwplannen van schraag tot kast",
                "Praktisch handboek direct op de werkbank voor onmiddellijke uitvoering"
            ],
            downloadUrl: "materials/WOOD-2-NL.pdf",
            coverImage: "assets/covers/wood_IMG1_nl.png",
            buttonText: "Download Projectenboek (Boek 2)"
        },
        {
            id: "b3",
            title: "Meubels & Projecten voor Thuis — Bouw zelf echte houten meubels",
            description: "Stop met kleine knutselprojecten: bouw echte meubels met een solide constructie, evenwichtige verhoudingen en een strakke afwerking.",
            badgeText: "MEUBELBOUW",
            badgeColor: "#B45309",
            features: [
                "Bouw zelf echte houten meubels met een solide constructie",
                "Duurzame houtverbindingen en hoogwaardige oppervlakteafwerking",
                "Mooi geproportioneerde meubels voor huis, tuin en werkplaats"
            ],
            downloadUrl: "materials/WOOD-3-NL.pdf",
            coverImage: "assets/covers/wood_IMG1_nl.png",
            buttonText: "Download Meubelboek (Boek 3)"
        }
    ],

    otherProducts: []
};
