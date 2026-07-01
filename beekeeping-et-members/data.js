/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Mesinduse meisterlikkus",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Küsimus kursusele juurdepääsu kohta (mesindus)",
        emailBodyTemplate: "Tere tugimeeskond! Vajan abi oma mesinduse liikmete valdkonnaga.%0A%0AMinu nimi on: ______.",
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
            title: "Täielik juhend lihtsaks ja kasumlikuks mesinduseks – alates esimese taru rajamisest kuni õitseva mesila aastaringse haldamiseni.",
            description: "Täielik juhend lihtsaks ja kasumlikuks mesinduseks – alates esimese taru rajamisest kuni õitseva mesila aastaringse haldamiseni.",
            badgeText: "Täielik taru seadistamise juhend",
            badgeColor: "#E5A817",
            features: [
                "Täielik taru seadistamise juhend",
                "Hooajalise juhtimise kalender",
                "Kasumlik mee tootmine"
            ],
            downloadUrl: "materials/ENG 01-Beekeeping-for-All (1).pdf",
            coverImage: "assets/covers/beekeeping_for_all.png",
            buttonText: "Lae raamat alla"
        },
        {
            id: "b2",
            title: "Tagahoovi mesinik",
            description: "Teie oluline kodumesinduse juhend – õppige, kuidas mesilasi oma tagaaias ohutult ja edukalt hoida.",
            badgeText: "JUHEND",
            badgeColor: "#6B8F3C",
            features: [
                "Tagaõue tarude paigutus",
                "Algajatele sobivad meetodid",
                "Koloonia tervis ja hooldus"
            ],
            downloadUrl: "materials/ENG 02 -The-Backyard-Beekeepers.pdf",
            coverImage: "assets/covers/backyard_beekeepers.png",
            buttonText: "Mõdu valmistamine tagaaias"
        },
        {
            id: "b3",
            title: "Mõdu valmistamine tagaaias",
            description: "Õppige kodus meeveini valmistamise iidset kunsti – samm-sammult retseptid, kasutades teie enda korjatud mett.",
            badgeText: "BOONUS",
            badgeColor: "#B45309",
            features: [
                "Traditsioonilised mõdu retseptid",
                "Kääritamise tehnikad",
                "Maitsevariatsioonid ja näpunäited"
            ],
            downloadUrl: "materials/ENG 03-BackyardMeadMaking-pdf.pdf",
            coverImage: "assets/covers/mead_making.png",
            buttonText: "Laadige alla boonus"
        },
        {
            id: "b4",
            title: "Mesindus on tehtud lihtsaks",
            description: "Marcus Williamsi lihtsustatud lähenemine mesindusele – praktilised näpunäited ja nipid algajatele, kes soovivad kiireid tulemusi.",
            badgeText: "EXTRA",
            badgeColor: "#059669",
            features: [
                "Levinud vead, mida vältida",
                "Levinud vead, mida vältida",
                "Praktilised näpunäited ja nipid"
            ],
            downloadUrl: "materials/ENG 04-Beekeeping-Made-Easy-by-Marcus-Williams.pdf",
            coverImage: "assets/covers/beekeeping_made_easy.png",
            buttonText: "Laadige alla Extra"
        }
    ],

    otherProducts: []
};
