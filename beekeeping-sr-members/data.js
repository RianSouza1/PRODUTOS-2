/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Мајсторство пчеларства",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Питање о приступу курсу (Пчеларство)",
        emailBodyTemplate: "Здраво тиму за подршку! Потребна ми је помоћ око подручја за чланове пчеларства.%0A%0AМоје име је: ______.",
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
            title: "Комплетан водич за једноставно и профитабилно пчеларство — од постављања ваше прве кошнице до управљања успешним пчелињаком током целе године.",
            description: "Комплетан водич за једноставно и профитабилно пчеларство — од постављања ваше прве кошнице до управљања успешним пчелињаком током целе године.",
            badgeText: "ГЛАВНА КЊИГА",
            badgeColor: "#E5A817",
            features: [
                "Комплетан водич за подешавање кошнице",
                "Сезонски календар управљања",
                "Профитабилна производња меда"
            ],
            downloadUrl: "materials/ENG 01-Beekeeping-for-All (1).pdf",
            coverImage: "assets/covers/beekeeping_for_all.png",
            buttonText: "Довнлоад Боок"
        },
        {
            id: "b2",
            title: "Дворски пчелар",
            description: "Ваш основни водич за кућно пчеларство — научите како да безбедно и успешно држите пчеле у свом дворишту.",
            badgeText: "ГУИДЕ",
            badgeColor: "#6B8F3C",
            features: [
                "Постављање кошница у дворишту",
                "Методе прилагођене почетницима",
                "Здравље и одржавање колоније"
            ],
            downloadUrl: "materials/ENG 02 -The-Backyard-Beekeepers.pdf",
            coverImage: "assets/covers/backyard_beekeepers.png",
            buttonText: "Преузмите водич"
        },
        {
            id: "b3",
            title: "Прављење медовине у дворишту",
            description: "Научите древну уметност прављења вина од меда код куће - корак по корак рецепте користећи сопствени убрани мед.",
            badgeText: "БОНУС",
            badgeColor: "#B45309",
            features: [
                "Традиционални рецепти за медовину",
                "Технике ферментације",
                "Варијације укуса и савети"
            ],
            downloadUrl: "materials/ENG 03-BackyardMeadMaking-pdf.pdf",
            coverImage: "assets/covers/mead_making.png",
            buttonText: "Довнлоад Бонус"
        },
        {
            id: "b4",
            title: "Пчеларство је једноставно",
            description: "Поједностављени приступ пчеларењу Маркуса Вилијамса — практични савети и трикови за почетнике који желе брзе резултате.",
            badgeText: "ЕКСТРА",
            badgeColor: "#059669",
            features: [
                "Методе брзог покретања",
                "Уобичајене грешке које треба избегавати",
                "Практични савети и трикови"
            ],
            downloadUrl: "materials/ENG 04-Beekeeping-Made-Easy-by-Marcus-Williams.pdf",
            coverImage: "assets/covers/beekeeping_made_easy.png",
            buttonText: "Преузмите Ектра"
        }
    ],

    otherProducts: []
};
