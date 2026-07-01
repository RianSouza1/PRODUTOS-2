/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Biavlermesterskab",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørgsmål om kursusadgang (biavl)",
        emailBodyTemplate: "Hej supportteam! Jeg har brug for hjælp til mit område for biavlsmedlemmer.%0A%0AMit navn er: ______.",
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
            title: "Komplet Hive-opsætningsvejledning",
            description: "Den komplette guide til enkel og rentabel biavl - fra opsætning af din første bikube til styring af en blomstrende bigård året rundt.",
            badgeText: "HOVEDBOG",
            badgeColor: "#E5A817",
            features: [
                "Sæsonstyringskalender",
                "Sæsonstyringskalender",
                "Rentabel honningproduktion"
            ],
            downloadUrl: "materials/Biavl-for-Begyndere-DA..pdf",
            coverImage: "assets/covers/bee_IMG1_da.png",
            buttonText: "Download bog"
        },
        {
            id: "b2",
            title: "Baghavens biavler",
            description: "Din væsentlige guide til biavl i hjemmet - lær hvordan du holder bier i din baghave sikkert og med succes.",
            badgeText: "GUIDE",
            badgeColor: "#6B8F3C",
            features: [
                "Placering af hive i baggård",
                "Begyndervenlige metoder",
                "Kolonisundhed og vedligeholdelse"
            ],
            downloadUrl: "materials/Biavlerens-Forstearsplan-DA..pdf",
            coverImage: "assets/covers/bee_IMG2_da.png",
            buttonText: "Download guide"
        },
        {
            id: "b3",
            title: "Baggårdsmjødfremstilling",
            description: "Lær den ældgamle kunst at lave honningvin derhjemme - trin-for-trin opskrifter med din egen høstede honning.",
            badgeText: "BONUS",
            badgeColor: "#B45309",
            features: [
                "Traditionelle mjødopskrifter",
                "Fermenteringsteknikker",
                "Smagsvariationer og tips"
            ],
            downloadUrl: "materials/At-Brygge-Mjod-for-Begyndere-DA.pdf",
            coverImage: "assets/covers/bee_IMG3_da.png",
            buttonText: "Download bonus"
        },
        {
            id: "b4",
            title: "En forenklet tilgang til biavl af Marcus Williams — praktiske tips og tricks til begyndere, der gerne vil have resultater hurtigt.",
            description: "En forenklet tilgang til biavl af Marcus Williams — praktiske tips og tricks til begyndere, der gerne vil have resultater hurtigt.",
            badgeText: "EKSTRA",
            badgeColor: "#059669",
            features: [
                "Hurtig-start metoder",
                "Almindelige fejl at undgå",
                "Praktiske tips og tricks"
            ],
            downloadUrl: "materials/ENG 04-Beekeeping-Made-Easy-by-Marcus-Williams.pdf",
            coverImage: "assets/covers/bee_IMG4_da.png",
            buttonText: "Download ekstra"
        }
    ],

    otherProducts: []
};
