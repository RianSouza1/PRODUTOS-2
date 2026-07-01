/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Мастерство пчеловодства",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Вопрос по доступу к курсу (Пчеловодство)",
        emailBodyTemplate: "Привет, команда поддержки! Мне нужна помощь с моим разделом для участников пчеловодства.%0A%0AМеня зовут: ______.",
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
            title: "Пчеловодство для всех",
            description: "Полное руководство по простому и прибыльному пчеловодству — от установки первого улья до управления процветающей пасекой круглый год.",
            badgeText: "ГЛАВНАЯ КНИГА",
            badgeColor: "#E5A817",
            features: [
                "Полное руководство по настройке улья",
                "Сезонный календарь управления",
                "Прибыльное производство меда"
            ],
            downloadUrl: "materials/ENG 01-Beekeeping-for-All (1).pdf",
            coverImage: "assets/covers/beekeeping_for_all.png",
            buttonText: "Скачать книгу"
        },
        {
            id: "b2",
            title: "Пчеловод на заднем дворе",
            description: "Ваше основное руководство по домашнему пчеловодству — узнайте, как безопасно и успешно содержать пчел на заднем дворе.",
            badgeText: "ГИД",
            badgeColor: "#6B8F3C",
            features: [
                "Размещение улья на заднем дворе",
                "Методы, удобные для начинающих",
                "Здоровье и обслуживание колонии"
            ],
            downloadUrl: "materials/ENG 02 -The-Backyard-Beekeepers.pdf",
            coverImage: "assets/covers/backyard_beekeepers.png",
            buttonText: "Скачать руководство"
        },
        {
            id: "b3",
            title: "Производство медовухи на заднем дворе",
            description: "Изучите древнее искусство изготовления медового вина в домашних условиях — пошаговые рецепты с использованием меда, собранного собственными силами.",
            badgeText: "БОНУС",
            badgeColor: "#B45309",
            features: [
                "Традиционные рецепты медовухи",
                "Методы ферментации",
                "Вариации вкусов и советы"
            ],
            downloadUrl: "materials/ENG 03-BackyardMeadMaking-pdf.pdf",
            coverImage: "assets/covers/mead_making.png",
            buttonText: "Скачать бонус"
        },
        {
            id: "b4",
            title: "Пчеловодство стало проще",
            description: "Упрощенный подход к пчеловодству от Маркуса Уильямса — практические советы и рекомендации для новичков, которым нужны быстрые результаты.",
            badgeText: "ДОПОЛНИТЕЛЬНЫЙ",
            badgeColor: "#059669",
            features: [
                "Методы быстрого старта",
                "Распространенные ошибки, которых следует избегать",
                "Практические советы и рекомендации"
            ],
            downloadUrl: "materials/ENG 04-Beekeeping-Made-Easy-by-Marcus-Williams.pdf",
            coverImage: "assets/covers/beekeeping_made_easy.png",
            buttonText: "Скачать Экстра"
        }
    ],

    otherProducts: []
};
