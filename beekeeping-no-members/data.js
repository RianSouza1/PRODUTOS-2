/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Mestring av birøkter",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørsmål om kurstilgang (birøkt)",
        emailBodyTemplate: "Hei supportteam! Jeg trenger hjelp med birøktmedlemsområdet mitt.%0A%0AMitt navn er: ______.",
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
            title: "Birøkt for alle",
            description: "Den komplette guiden til enkel og lønnsom birøkt – fra å sette opp din første bikube til å administrere en blomstrende bigård året rundt.",
            badgeText: "Komplett Hive-oppsettveiledning",
            badgeColor: "#E5A817",
            features: [
                "Komplett Hive-oppsettveiledning",
                "Sesongstyringskalender",
                "Lønnsom honningproduksjon"
            ],
            downloadUrl: "materials/Birokt-for-Nybegynnere-NO..pdf",
            coverImage: "assets/covers/bee_IMG1_no.png",
            buttonText: "Last ned bok"
        },
        {
            id: "b2",
            title: "Bakgårdsbirøkteren",
            description: "Din essensielle guide til birøkt hjemme - lær hvordan du holder bier i hagen din trygt og vellykket.",
            badgeText: "GUIDE",
            badgeColor: "#6B8F3C",
            features: [
                "Bakgård Hive Plassering",
                "Nybegynnervennlige metoder",
                "Kolonihelse og vedlikehold"
            ],
            downloadUrl: "materials/Birokterens-Forstearsplan-NO..pdf",
            coverImage: "assets/covers/bee_IMG2_no.png",
            buttonText: "Last ned guide"
        },
        {
            id: "b3",
            title: "Bakgård Mjød Making",
            description: "Lær den eldgamle kunsten å lage honningvin hjemme - trinnvise oppskrifter med din egen høstede honning.",
            badgeText: "Tradisjonelle mjødoppskrifter",
            badgeColor: "#B45309",
            features: [
                "Tradisjonelle mjødoppskrifter",
                "Fermenteringsteknikker",
                "Smakvarianter og tips"
            ],
            downloadUrl: "materials/A-Brygge-Mjod-for-NybegynnereA-Brygge-Mjod-for-Nybegynnere-NO.pdf",
            coverImage: "assets/covers/bee_IMG3_no.png",
            buttonText: "Last ned bonus"
        },
        {
            id: "b4",
            title: "Birøkt på en enkel måte",
            description: "En forenklet tilnærming til birøkt av Marcus Williams — praktiske tips og triks for nybegynnere som ønsker raske resultater.",
            badgeText: "EKSTRA",
            badgeColor: "#059669",
            features: [
                "Hurtigstartmetoder",
                "Vanlige feil å unngå",
                "Praktiske tips og triks"
            ],
            downloadUrl: "materials/ENG 04-Beekeeping-Made-Easy-by-Marcus-Williams.pdf",
            coverImage: "assets/covers/bee_IMG4_no.png",
            buttonText: "Last ned Extra"
        }
    ],

    otherProducts: []
};
