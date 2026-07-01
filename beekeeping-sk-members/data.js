/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Včelárske majstrovstvo",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Otázka o prístupe ku kurzu (Včelárstvo)",
        emailBodyTemplate: "Dobrý deň, tím podpory! Potrebujem pomoc s mojou členskou oblasťou Včelárstvo.%0A%0AMoje meno je: ______.",
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
            title: "Včelárstvo pre všetkých",
            description: "Kompletný sprievodca jednoduchým a ziskovým včelárstvom – od založenia prvého úľa až po riadenie prosperujúceho včelína po celý rok.",
            badgeText: "HLAVNÁ KNIHA",
            badgeColor: "#E5A817",
            features: [
                "Kompletná príručka nastavenia úľa",
                "Kalendár sezónneho manažmentu",
                "Zisková produkcia medu"
            ],
            downloadUrl: "materials/ENG 01-Beekeeping-for-All (1).pdf",
            coverImage: "assets/covers/beekeeping_for_all.png",
            buttonText: "Stiahnite si knihu"
        },
        {
            id: "b2",
            title: "Včelár na dvore",
            description: "Váš základný sprievodca domácim včelárstvom – naučte sa, ako bezpečne a úspešne chovať včely na vašom dvore.",
            badgeText: "GUIDE",
            badgeColor: "#6B8F3C",
            features: [
                "Umiestnenie úľa na dvore",
                "Metódy vhodné pre začiatočníkov",
                "Zdravie a údržba kolónií"
            ],
            downloadUrl: "materials/ENG 02 -The-Backyard-Beekeepers.pdf",
            coverImage: "assets/covers/backyard_beekeepers.png",
            buttonText: "Stiahnite si príručku"
        },
        {
            id: "b3",
            title: "Výroba medoviny na dvore",
            description: "Naučte sa starému umeniu výroby medového vína doma – recepty krok za krokom s použitím vlastného zozbieraného medu.",
            badgeText: "BONUS",
            badgeColor: "#B45309",
            features: [
                "Tradičné recepty na medovinu",
                "Fermentačné techniky",
                "Chuťové variácie a tipy"
            ],
            downloadUrl: "materials/ENG 03-BackyardMeadMaking-pdf.pdf",
            coverImage: "assets/covers/mead_making.png",
            buttonText: "Včelárenie je jednoduché"
        },
        {
            id: "b4",
            title: "Včelárenie je jednoduché",
            description: "Zjednodušený prístup k včeláreniu od Marcusa Williamsa – praktické tipy a triky pre začiatočníkov, ktorí chcú výsledky rýchlo.",
            badgeText: "EXTRA",
            badgeColor: "#059669",
            features: [
                "Metódy rýchleho spustenia",
                "Bežné chyby, ktorým sa treba vyhnúť",
                "Praktické tipy a triky"
            ],
            downloadUrl: "materials/ENG 04-Beekeeping-Made-Easy-by-Marcus-Williams.pdf",
            coverImage: "assets/covers/beekeeping_made_easy.png",
            buttonText: "Stiahnite si Extra"
        }
    ],

    otherProducts: []
};
