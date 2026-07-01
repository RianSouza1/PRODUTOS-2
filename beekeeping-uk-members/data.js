/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Майстерність бджільництва",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Бджільництво для всіх",
        emailBodyTemplate: "Привіт, команда підтримки! Мені потрібна допомога з моєю зоною для членів Бджільництва.%0A%0AМене звати: ______.",
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
            title: "Бджільництво для всіх",
            description: "Повний посібник із простого й прибуткового бджільництва — від встановлення вашого першого вулика до управління процвітаючою пасікою цілий рік.",
            badgeText: "ОСНОВНА КНИГА",
            badgeColor: "#E5A817",
            features: [
                "Повний посібник зі встановлення Hive",
                "Сезонний календар управління",
                "Прибуткове виробництво меду"
            ],
            downloadUrl: "materials/ENG 01-Beekeeping-for-All (1).pdf",
            coverImage: "assets/covers/beekeeping_for_all.png",
            buttonText: "Завантажити книгу"
        },
        {
            id: "b2",
            title: "Бджоляр на задньому дворі",
            description: "Ваш важливий посібник із домашнього бджільництва — дізнайтеся, як безпечно та успішно утримувати бджіл у своєму дворі.",
            badgeText: "ПОСІБНИК",
            badgeColor: "#6B8F3C",
            features: [
                "Методи, зручні для початківців",
                "Методи, зручні для початківців",
                "Здоров'я та обслуговування колонії"
            ],
            downloadUrl: "materials/ENG 02 -The-Backyard-Beekeepers.pdf",
            coverImage: "assets/covers/backyard_beekeepers.png",
            buttonText: "Завантажити посібник"
        },
        {
            id: "b3",
            title: "Приготування медовухи на задньому дворі",
            description: "Навчіться стародавньому мистецтву виготовлення медового вина вдома — покрокові рецепти з використанням власноруч зібраного меду.",
            badgeText: "БОНУС",
            badgeColor: "#B45309",
            features: [
                "Традиційні рецепти медовухи",
                "Техніка бродіння",
                "Смакові варіації та поради"
            ],
            downloadUrl: "materials/ENG 03-BackyardMeadMaking-pdf.pdf",
            coverImage: "assets/covers/mead_making.png",
            buttonText: "Завантажити бонус"
        },
        {
            id: "b4",
            title: "Бджільництво стало легким",
            description: "Спрощений підхід до бджільництва від Маркуса Вільямса — практичні поради та підказки для новачків, які хочуть швидкого результату.",
            badgeText: "ЕКСТРА",
            badgeColor: "#059669",
            features: [
                "Методи швидкого запуску",
                "Поширених помилок, яких слід уникати",
                "Практичні поради та підказки"
            ],
            downloadUrl: "materials/ENG 04-Beekeeping-Made-Easy-by-Marcus-Williams.pdf",
            coverImage: "assets/covers/beekeeping_made_easy.png",
            buttonText: "Завантажити Extra"
        }
    ],

    otherProducts: []
};
