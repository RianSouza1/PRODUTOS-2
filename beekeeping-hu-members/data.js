/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Méhészeti mesterség",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Kérdés a kurzushoz való hozzáférésről (méhészet)",
        emailBodyTemplate: "Hello támogató csapat! Segítségre van szükségem a Méhészet tagjaimmal kapcsolatban.%0A%0AA nevem: ______.",
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
            title: "Méhészet mindenkinek",
            description: "A teljes útmutató az egyszerű és jövedelmező méhészethez – az első kaptár felállításától a virágzó méhészet egész évben történő kezeléséig.",
            badgeText: "FŐKÖNYV",
            badgeColor: "#E5A817",
            features: [
                "Teljes Hive beállítási útmutató",
                "Szezonális menedzsment naptár",
                "Nyereséges méztermelés"
            ],
            downloadUrl: "materials/Meheszkedes-Kezdoknek-HU.pdf",
            coverImage: "assets/covers/bee_IMG1_hu.png",
            buttonText: "Könyv letöltése"
        },
        {
            id: "b2",
            title: "A háztáji méhész",
            description: "Az Ön alapvető útmutatója az otthoni méhészethez – tanulja meg, hogyan tartsa biztonságosan és sikeresen a méheket a kertjében.",
            badgeText: "ÚTMUTATÓ",
            badgeColor: "#6B8F3C",
            features: [
                "Háztáji kaptár elhelyezése",
                "Kezdőbarát módszerek",
                "Kolónia egészsége és karbantartása"
            ],
            downloadUrl: "materials/Az-Elso-Ev-Meheszeti-Terve-HU..pdf",
            coverImage: "assets/covers/bee_IMG2_hu.png",
            buttonText: "Letöltési útmutató"
        },
        {
            id: "b3",
            title: "Háztáji mézsör készítés",
            description: "Tanulja meg a mézbor készítésének ősi művészetét otthon – lépésről lépésre receptek a saját szüretelt mézből.",
            badgeText: "BÓNUSZ",
            badgeColor: "#B45309",
            features: [
                "Hagyományos mézsör receptek",
                "Fermentációs technikák",
                "Ízváltozatok és tippek"
            ],
            downloadUrl: "materials/Mezbor-Keszitese-Kezdoknek-HU.pdf",
            coverImage: "assets/covers/bee_IMG3_hu.png",
            buttonText: "Letöltés bónusz"
        },
        {
            id: "b4",
            title: "Méhészet egyszerűen",
            description: "Marcus Williams egyszerűsített megközelítése a méhészetben – gyakorlati tippek és trükkök kezdőknek, akik gyors eredményt szeretnének elérni.",
            badgeText: "KÜLÖN",
            badgeColor: "#059669",
            features: [
                "Gyorsindítási módszerek",
                "Gyakori hibák, amelyeket el kell kerülni",
                "Gyakorlati tippek és trükkök"
            ],
            downloadUrl: "materials/ENG 04-Beekeeping-Made-Easy-by-Marcus-Williams.pdf",
            coverImage: "assets/covers/bee_IMG4_hu.png",
            buttonText: "Letöltés Extra"
        }
    ],

    otherProducts: []
};
