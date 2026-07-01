/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Meistrolaeth Cadw Gwenyn",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Cwestiwn am fynediad i gyrsiau (Cadw Gwenyn)",
        emailBodyTemplate: "Helo tîm cefnogi! Dwi angen help gyda fy ardal aelodau Cadw Gwenyn.%0A%0AFy enw i yw: ______.",
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
            title: "Cadw Gwenyn i Bawb",
            description: "Y canllaw cyflawn i gadw gwenyn syml a phroffidiol - o sefydlu eich cwch gwenyn cyntaf i reoli gwenynfa ffyniannus trwy gydol y flwyddyn.",
            badgeText: "PRIF LYFR",
            badgeColor: "#E5A817",
            features: [
                "Cwblhau Canllaw Gosod Hive",
                "Cynhyrchu Mêl Proffidiol",
                "Cynhyrchu Mêl Proffidiol"
            ],
            downloadUrl: "materials/ENG 01-Beekeeping-for-All (1).pdf",
            coverImage: "assets/covers/beekeeping_for_all.png",
            buttonText: "Download Llyfr"
        },
        {
            id: "b2",
            title: "Gwenynwr yr Iard Gefn",
            description: "Eich canllaw hanfodol ar gadw gwenyn gartref - dysgwch sut i gadw gwenyn yn eich iard gefn yn ddiogel ac yn llwyddiannus.",
            badgeText: "CYFARWYDD",
            badgeColor: "#6B8F3C",
            features: [
                "Lleoliad Cwch Iard Gefn",
                "Dulliau Cyfeillgar i Ddechreuwyr",
                "Iechyd a Chynnal a Chadw Trefedigaethau"
            ],
            downloadUrl: "materials/ENG 02 -The-Backyard-Beekeepers.pdf",
            coverImage: "assets/covers/backyard_beekeepers.png",
            buttonText: "Lawrlwythwch Canllaw"
        },
        {
            id: "b3",
            title: "Gwneud Medd iard Gefn",
            description: "Dysgwch y grefft hynafol o grefftio gwin mêl gartref - ryseitiau cam wrth gam gan ddefnyddio'ch mêl wedi'i gynaeafu eich hun.",
            badgeText: "BONUS",
            badgeColor: "#B45309",
            features: [
                "Ryseitiau Medd Traddodiadol",
                "Technegau Eplesu",
                "Amrywiadau Blas a Chynghorion"
            ],
            downloadUrl: "materials/ENG 03-BackyardMeadMaking-pdf.pdf",
            coverImage: "assets/covers/mead_making.png",
            buttonText: "Bonws Lawrlwytho"
        },
        {
            id: "b4",
            title: "Cadw Gwenyn yn Hawdd",
            description: "Dull symlach o gadw gwenyn gan Marcus Williams - awgrymiadau a thriciau ymarferol i ddechreuwyr sydd eisiau canlyniadau'n gyflym.",
            badgeText: "YCHWANEGOL",
            badgeColor: "#059669",
            features: [
                "Dulliau Cychwyn Cyflym",
                "Camgymeriadau Cyffredin i'w Osgoi",
                "Awgrymiadau a Thriciau Ymarferol"
            ],
            downloadUrl: "materials/ENG 04-Beekeeping-Made-Easy-by-Marcus-Williams.pdf",
            coverImage: "assets/covers/beekeeping_made_easy.png",
            buttonText: "Lawrlwythwch Extra"
        }
    ],

    otherProducts: []
};
