/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Meesterschap in de bijenteelt",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Boek downloaden",
        emailBodyTemplate: "Hallo ondersteuningsteam! Ik heb hulp nodig met mijn ledengedeelte voor de bijenteelt.%0A%0AMijn naam is: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            id: 'v1',
            title: 'Part 1: Intro to Beekeeping',
            duration: 'Video 1',
            youtubeId: 'qo4Vs59ndNU'
        },
        {
            id: 'v2',
            title: 'Part 2: The Beehive',
            duration: 'Video 2',
            youtubeId: 'vCCHMEJZuJc'
        },
        {
            id: 'v3',
            title: 'Part 3: Essential Beekeeping Tools',
            duration: 'Video 3',
            youtubeId: 'YXZmtnnkxDE'
        },
        {
            id: 'v4',
            title: 'Part 4: Honey Bee Biology',
            duration: 'Video 4',
            youtubeId: 'oTlP9sYyZ9s'
        },
        {
            id: 'v5',
            title: 'Part 5: Considerations for Placing Bee Colonies',
            duration: 'Video 5',
            youtubeId: 'PT6VnrOX9zU'
        },
        {
            id: 'v6',
            title: 'Part 6: Starting New Bee Colonies',
            duration: 'Video 6',
            youtubeId: 'ppLH1tXR_9s'
        },
        {
            id: 'v7',
            title: 'Part 7: First Year Bee Colony Management',
            duration: 'Video 7',
            youtubeId: 'FYoTrwXCEWg'
        },
        {
            id: 'v8',
            title: 'Part 8: Second Year Bee Colony Management',
            duration: 'Video 8',
            youtubeId: 'rYDQA5I9dRs'
        },
        {
            id: 'v9',
            title: 'Part 9: Harvesting Your Honey',
            duration: 'Video 9',
            youtubeId: 'OsEK_iSdsis'
        },
        {
            id: 'v10',
            title: 'Part 10: Keeping Hives Healthy',
            duration: 'Video 10',
            youtubeId: 'SOH4UvYe-Tg'
        },
        {
            id: 'v11',
            title: 'Part 11: Managing Parasitic Mites',
            duration: 'Video 11',
            youtubeId: '6RieuFwg4eY'
        },
        {
            id: 'v12',
            title: 'Part 12: Managing Small Hive Beetles',
            duration: 'Video 12',
            youtubeId: 'iy5r8Or87_g'
        },
        {
            id: 'v13',
            title: 'Part 13: Managing Wax Moths',
            duration: 'Video 13',
            youtubeId: 'VG3XQQrDoIs'
        },
        {
            id: 'v14',
            title: 'Part 14: Minor Bee Hive Pests',
            duration: 'Video 14',
            youtubeId: '-fxKYKVOKG4'
        },
        {
            id: 'v15',
            title: 'Part 15: Integrated Pest Management',
            duration: 'Video 15',
            youtubeId: 'iLhNdkVDCnw'
        },
        {
            id: 'v16',
            title: 'Part 16: Honey Bee Diseases',
            duration: 'Video 16',
            youtubeId: 'ZEKD5HlIuHM'
        },
        {
            id: 'v17',
            title: 'Part 17: Final Thoughts on Honey Bees',
            duration: 'Video 17',
            youtubeId: 'JSPSqhW6lsU'
        },
        {
            id: 'v18',
            title: 'Is Beekeeping Right for You?',
            duration: 'Video 18',
            youtubeId: 'X3Xp1lQpxOc'
        },
        {
            id: 'v19',
            title: 'How to Install Honey Bees into a Hive',
            duration: 'Video 19',
            youtubeId: 'S4A8CTALPDI'
        }
    ],

    books: [
        {
            id: "b1",
            title: "Boek downloaden",
            description: "De achtertuin-imker",
            badgeText: "De achtertuin-imker",
            badgeColor: "#E5A817",
            features: [
                "De achtertuin-imker",
                "De achtertuin-imker",
                "De achtertuin-imker"
            ],
            downloadUrl: "materials/Imkeren-voor-Beginners-NL.pdf",
            coverImage: "assets/covers/bee_IMG1_nl.png",
            buttonText: "De achtertuin-imker"
        },
        {
            id: "b2",
            title: "De achtertuin-imker",
            description: "Uw essentiële gids voor de bijenteelt thuis: leer hoe u veilig en succesvol bijen in uw achtertuin kunt houden.",
            badgeText: "GIDS",
            badgeColor: "#6B8F3C",
            features: [
                "Plaatsing van een bijenkorf in de achtertuin",
                "Beginnersvriendelijke methoden",
                "Koloniegezondheid en onderhoud"
            ],
            downloadUrl: "materials/Het-Imkerplan-voor-het-Eerste-Jaar-NL..pdf",
            coverImage: "assets/covers/bee_IMG2_nl.png",
            buttonText: "Weide maken in de achtertuin"
        },
        {
            id: "b3",
            title: "Leer thuis de eeuwenoude kunst van het maken van honingwijn: stapsgewijze recepten met je eigen geoogste honing.",
            description: "Leer thuis de eeuwenoude kunst van het maken van honingwijn: stapsgewijze recepten met je eigen geoogste honing.",
            badgeText: "BONUS",
            badgeColor: "#B45309",
            features: [
                "Traditionele Mede-recepten",
                "Fermentatietechnieken",
                "Smaakvariaties en tips"
            ],
            downloadUrl: "materials/Metwijn-Maken-voor-Beginners-NL.pdf",
            coverImage: "assets/covers/bee_IMG3_nl.png",
            buttonText: "Bonus downloaden"
        },
        {
            id: "b4",
            title: "Bijenteelt gemakkelijk gemaakt",
            description: "Een vereenvoudigde benadering van de bijenteelt door Marcus Williams – praktische tips en trucs voor beginners die snel resultaten willen.",
            badgeText: "EXTRA",
            badgeColor: "#059669",
            features: [
                "Snelstartmethoden",
                "Veelvoorkomende fouten die u moet vermijden",
                "Praktische tips en trucs"
            ],
            downloadUrl: "materials/ENG 04-Beekeeping-Made-Easy-by-Marcus-Williams.pdf",
            coverImage: "assets/covers/bee_IMG4_nl.png",
            buttonText: "Extra downloaden"
        }
    ],

    otherProducts: []
};
