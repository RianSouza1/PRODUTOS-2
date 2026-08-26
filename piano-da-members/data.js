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

    videos: [],

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
