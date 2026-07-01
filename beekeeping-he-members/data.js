/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "שליטה בגידול דבורים",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "שאלה לגבי גישה לקורס (גידול דבורים)",
        emailBodyTemplate: "שלום צוות תמיכה! אני צריך עזרה עם אזור חברי גידול הדבורים שלי.%0A%0Aשמי: ______.",
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
            title: "גידול דבורים לכולם",
            description: "המדריך המלא לגידול דבורים פשוט ורווחי - מהקמת הכוורת הראשונה ועד לניהול מכוורת משגשגת כל השנה.",
            badgeText: "ספר ראשי",
            badgeColor: "#E5A817",
            features: [
                "לוח שנה לניהול עונתי",
                "לוח שנה לניהול עונתי",
                "הורד ספר"
            ],
            downloadUrl: "materials/ENG 01-Beekeeping-for-All (1).pdf",
            coverImage: "assets/covers/beekeeping_for_all.png",
            buttonText: "הורד ספר"
        },
        {
            id: "b2",
            title: "כוורן החצר האחורית",
            description: "המדריך החיוני שלך לגידול דבורים ביתי - למד כיצד לשמור דבורים בחצר האחורית שלך בבטחה ובהצלחה.",
            badgeText: "מַדְרִיך",
            badgeColor: "#6B8F3C",
            features: [
                "מיקום כוורת בחצר האחורית",
                "שיטות ידידותיות למתחילים",
                "בריאות ותחזוקה של המושבה"
            ],
            downloadUrl: "materials/ENG 02 -The-Backyard-Beekeepers.pdf",
            coverImage: "assets/covers/backyard_beekeepers.png",
            buttonText: "מדריך להורדה"
        },
        {
            id: "b3",
            title: "הכנת בשר בחצר האחורית",
            description: "למד את האמנות העתיקה של יצירת יין דבש בבית - מתכונים שלב אחר שלב תוך שימוש בדבש שנקטף משלך.",
            badgeText: "מַעֲנָק",
            badgeColor: "#B45309",
            features: [
                "מתכוני בשר מסורתיים",
                "טכניקות תסיסה",
                "וריאציות טעמים וטיפים"
            ],
            downloadUrl: "materials/ENG 03-BackyardMeadMaking-pdf.pdf",
            coverImage: "assets/covers/mead_making.png",
            buttonText: "הורד בונוס"
        },
        {
            id: "b4",
            title: "גידול דבורים קל",
            description: "גישה פשוטה לגידול דבורים מאת מרקוס וויליאמס - טיפים וטריקים מעשיים למתחילים שרוצים תוצאות מהירות.",
            badgeText: "תוֹסֶפֶת",
            badgeColor: "#059669",
            features: [
                "שיטות התחלה מהירה",
                "טעויות נפוצות שיש להימנע מהן",
                "טיפים וטריקים מעשיים"
            ],
            downloadUrl: "materials/ENG 04-Beekeeping-Made-Easy-by-Marcus-Williams.pdf",
            coverImage: "assets/covers/beekeeping_made_easy.png",
            buttonText: "הורד את Extra"
        }
    ],

    otherProducts: []
};
