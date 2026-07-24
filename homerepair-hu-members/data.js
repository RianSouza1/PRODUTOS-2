/**
 * Otthoni Karbantartás & Javítás — Tagi Terület (Magyar)
 */

const APP_DATA = {
    config: {
        brandName: "Otthoni Karbantartás & Javítás",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Hozzáférésre vonatkozó kérdés (Otthoni Karbantartás & Javítás)",
        emailBodyTemplate: "Kedves ügyfélszolgálat! Segítséget szeretnék kérni az Otthoni Karbantartás & Javítás tagi területéhez való hozzáférésemmel kapcsolatban.\n\nA nevem: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Teljes Útmutató a Lakásfelújításhoz és Otthoni Karbantartáshoz — 2026-os Kiadás",
            description: "A te kézikönyved a lakás karbantartásához, javításához és felújításához — ahogy kell csinálni: biztonságosan, szakszerűen, tartósan.",
            badgeText: "Fő útmutató",
            badgeColor: "#D97706",
            features: [
                "Lépésről lépésre útmutatás a szükséges lakásjavításokhoz",
                "Szakértői tanácsok az otthoni karbantartási projektekhez",
                "Gyakorlati barkácsolási tippek a tartós eredményekért"
            ],
            downloadUrl: "materials/REPAIR-1-HU.pdf",
            coverImage: "assets/covers/rep_IMG1_hu.png",
            buttonText: "Fő útmutató letöltése"
        },
        {
            id: "b2",
            title: "Gyakorlati Útmutató a Háztartási Villamos Berendezésekhez — Frissített Kiadás 2026",
            description: "Teljes biztonságban, az MSZ HD 60364 szabvány betartásával, értelmesen, saját kezűleg. Gyakorlati útmutató a háztartási villamos berendezésekhez.",
            badgeText: "Bónusz #1",
            badgeColor: "#475569",
            features: [
                "Háztartási villanyszerelési munkák biztonságos végzése",
                "Teljes mértékben megfelel az érvényes szabványoknak",
                "Lépésről lépésre útmutatás a gyakori szerelésekhez"
            ],
            downloadUrl: "materials/REPAIR-2-HU.pdf",
            coverImage: "assets/covers/rep_IMG1_hu.png",
            buttonText: "Bónusz #1 letöltése"
        },
        {
            id: "b3",
            title: "Teljes Útmutató a Házi Vízszereléshez — 2026-os Kiadás",
            description: "Javítások, fejlesztések és hibátlan karbantartás. Gyakorlati kézikönyv, amely segít megérteni, rendben tartani és tökéletes állapotban megőrizni otthonod vízvezeték-rendszerét.",
            badgeText: "Bónusz #2",
            badgeColor: "#0F766E",
            features: [
                "A gyakori vízszerelési problémák felismerése és javítása",
                "Az otthoni csőhálózat tökéletes állapotban tartása",
                "Kezdőknek és barkácsolóknak tervezett egyértelmű útmutatás"
            ],
            downloadUrl: "materials/REPAIR-3-HU.pdf",
            coverImage: "assets/covers/rep_IMG1_hu.png",
            buttonText: "Bónusz #2 letöltése"
        }
    ],

    otherProducts: []
};
