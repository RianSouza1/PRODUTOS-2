/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Пчеларско майсторство",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Въпрос за достъп до курс (Пчеларство)",
        emailBodyTemplate: "Здравейте екип за поддръжка! Имам нужда от помощ за моята зона за членове на пчеларството.%0A%0AКазвам се: ______.",
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
            title: "Пчеларство за всички",
            description: "Пълното ръководство за лесно и рентабилно пчеларство - от създаването на първия ви кошер до управлението на процъфтяващ пчелин през цялата година.",
            badgeText: "ОСНОВНА КНИГА",
            badgeColor: "#E5A817",
            features: [
                "Пълно ръководство за настройка на Hive",
                "Календар за сезонно управление",
                "Доходоносно производство на мед"
            ],
            downloadUrl: "materials/ENG 01-Beekeeping-for-All (1).pdf",
            coverImage: "assets/covers/beekeeping_for_all.png",
            buttonText: "Изтегляне на книга"
        },
        {
            id: "b2",
            title: "Пчеларът в задния двор",
            description: "РЪКОВОДСТВО",
            badgeText: "РЪКОВОДСТВО",
            badgeColor: "#6B8F3C",
            features: [
                "Удобни за начинаещи методи",
                "Удобни за начинаещи методи",
                "Здраве и поддръжка на колонията"
            ],
            downloadUrl: "materials/ENG 02 -The-Backyard-Beekeepers.pdf",
            coverImage: "assets/covers/backyard_beekeepers.png",
            buttonText: "Приготвяне на медовина в двора"
        },
        {
            id: "b3",
            title: "Приготвяне на медовина в двора",
            description: "Научете древното изкуство за приготвяне на медено вино у дома — рецепти стъпка по стъпка, като използвате собствения си мед.",
            badgeText: "БОНУС",
            badgeColor: "#B45309",
            features: [
                "Традиционни рецепти за медовина",
                "Техники за ферментация",
                "Вкусови вариации и съвети"
            ],
            downloadUrl: "materials/ENG 03-BackyardMeadMaking-pdf.pdf",
            coverImage: "assets/covers/mead_making.png",
            buttonText: "Бонус за изтегляне"
        },
        {
            id: "b4",
            title: "Лесно пчеларство",
            description: "Опростен подход към пчеларството от Маркъс Уилямс — практически съвети и трикове за начинаещи, които искат бързи резултати.",
            badgeText: "ЕКСТРА",
            badgeColor: "#059669",
            features: [
                "Методи за бърз старт",
                "Практически съвети и трикове",
                "Практически съвети и трикове"
            ],
            downloadUrl: "materials/ENG 04-Beekeeping-Made-Easy-by-Marcus-Williams.pdf",
            coverImage: "assets/covers/beekeeping_made_easy.png",
            buttonText: "Изтеглете Extra"
        }
    ],

    otherProducts: []
};
