/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Μελισσοκομική Μαεστρία",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Ερώτηση σχετικά με την πρόσβαση στο μάθημα (Μελισσοκομία)",
        emailBodyTemplate: "Γεια σας ομάδα υποστήριξης! Χρειάζομαι βοήθεια με την περιοχή μελών της Μελισσοκομίας.%0A%0AΤο όνομά μου είναι: ______.",
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
            title: "Μελισσοκομία για Όλους",
            description: "Ο πλήρης οδηγός για απλή και κερδοφόρα μελισσοκομία — από το στήσιμο της πρώτης σας κυψέλης έως τη διαχείριση ενός ακμάζοντος μελισσοκομείου όλο το χρόνο.",
            badgeText: "ΚΥΡΙΟ ΒΙΒΛΙΟ",
            badgeColor: "#E5A817",
            features: [
                "Πλήρης οδηγός εγκατάστασης κυψέλης",
                "Ημερολόγιο Εποχικής Διαχείρισης",
                "Κερδοφόρα Παραγωγή Μελιού"
            ],
            downloadUrl: "materials/Μελισσοκομία για Αρχάριους -EL..pdf",
            coverImage: "assets/covers/bee_IMG1_el.png",
            buttonText: "Λήψη βιβλίου"
        },
        {
            id: "b2",
            title: "Ο μελισσοκόμος της πίσω αυλής",
            description: "Ο βασικός σας οδηγός για την οικιακή μελισσοκομία — μάθετε πώς να κρατάτε τις μέλισσες στην αυλή σας με ασφάλεια και επιτυχία.",
            badgeText: "ΟΔΗΓΟΣ",
            badgeColor: "#6B8F3C",
            features: [
                "Τοποθέτηση κυψέλης πίσω αυλής",
                "Μέθοδοι φιλικές προς τους αρχάριους",
                "Υγεία & Συντήρηση Αποικίας"
            ],
            downloadUrl: "materials/To-Melissokomiko-Sxedio-toy-Prwtoy-Etoys-EL..pdf",
            coverImage: "assets/covers/bee_IMG2_el.png",
            buttonText: "Οδηγός λήψης"
        },
        {
            id: "b3",
            title: "Backyard Mead Making",
            description: "Μάθετε την αρχαία τέχνη της κατασκευής κρασιού από μέλι στο σπίτι — συνταγές βήμα-βήμα χρησιμοποιώντας το δικό σας συγκομισμένο μέλι.",
            badgeText: "ΔΩΡΟ",
            badgeColor: "#B45309",
            features: [
                "Παραδοσιακές Συνταγές Mead",
                "Τεχνικές Ζύμωσης",
                "Γευστικές Παραλλαγές & Συμβουλές"
            ],
            downloadUrl: "materials/Pergatitja-e-Mjaltesires-per-Fillestaret-EL.pdf",
            coverImage: "assets/covers/bee_IMG3_el.png",
            buttonText: "Μπόνους λήψης"
        }],

    otherProducts: []
};
