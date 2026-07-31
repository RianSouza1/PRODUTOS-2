/**
 * Calisthenics Thuis — Ledengedeelte (Nederlands) v10
 */

const APP_DATA = {
    config: {
        brandName: "Calisthenics Thuis",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Supportverzoek over toegang (Calisthenics Thuis)",
        emailBodyTemplate: "Hallo supportteam! Ik wil graag hulp vragen bij mijn toegang tot het ledengedeelte van Calisthenics Thuis.\n\nMijn naam is: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Calisthenics voor Absolute Beginners — Boek 1 van 3",
            description: "Een essentiële introductiegids voor absolute beginners die hun eerste stappen zetten met lichaamsgewichttraining. Leer de basisbewegingen, bouw kracht op en begin veilig te trainen.",
            badgeText: "Beginnersgids",
            badgeColor: "#769B3F",
            features: [
                "Essentiële lichaamsgewichtoefeningen voor beginners",
                "Stap-voor-stap begeleiding voor veilige training",
                "Bouw kracht en mobiliteit op in uw eigen tempo"
            ],
            downloadUrl: "materials/CALISTENIA-1-NL.pdf",
            coverImage: "assets/covers/cali_IMG1_nl.png",
            buttonText: "Download Beginnersgids (PDF)"
        },
        {
            id: "b2",
            title: "Compleet Programma voor Lichaamsgewichttraining — Boek 2 van de Collectie",
            description: "Til uw training naar een hoger niveau door progressies en functionele oefeningen onder de knie te krijgen. Ontwikkel uithoudingsvermogen, controle en spiermassa zonder apparatuur.",
            badgeText: "Trainingsprogramma",
            badgeColor: "#475569",
            features: [
                "Geavanceerde oefenprogressies en technieken",
                "Kracht en lichaamsbeheersing bij elke beweging",
                "Complete trainingsgids voor thuisgebruik"
            ],
            downloadUrl: "materials/CALISTENIA-2-NL.pdf",
            coverImage: "assets/covers/cali_IMG1_nl.png",
            buttonText: "Download Trainingsprogramma (PDF)"
        },
        {
            id: "b3",
            title: "30-Dagen Calisthenics Challenge — Boek 3 van 3",
            description: "Een gestructureerd, dagelijks trainingsschema ontworpen om consistentie op te bouwen, de fysiek te verbeteren en het hele lichaam te versterken. Een gespecialiseerd trainingshandboek.",
            badgeText: "30-Dagen Challenge",
            badgeColor: "#0F766E",
            features: [
                "Dagelijkse trainingsstructuur gedurende 30 dagen",
                "Focus op discipline, vorm en uithoudingsvermogen",
                "Slimme routines voor continu succes"
            ],
            downloadUrl: "materials/CALISTENIA-3-NL.pdf",
            coverImage: "assets/covers/cali_IMG1_nl.png",
            buttonText: "Download Trainingsschema (PDF)"
        }
    ],

    otherProducts: []
};
