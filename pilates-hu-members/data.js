/**
 * Pilates & Egészség — Tagi Terület (Magyar)
 */

const APP_DATA = {
    config: {
        brandName: "Pilates & Egészség",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Kérdés a hozzáféréssel kapcsolatban (Pilates & Egészség)",
        emailBodyTemplate: "Kedves ügyfélszolgálat! Szeretnék segítséget kérni a Pilates & Egészség tagi területéhez való hozzáférésemmel kapcsolatban.\n\nNevem: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Pilates kezdőknek — 2026-os Kiadás",
            description: "A saját tempódban, kapkodás nélkül. Lépésről lépésre építed az erőt, a rugalmasságot és az önbizalmat otthonod kényelmében. Úgy tervezték, hogy segítsen Önnek erősebbé és rugalmasabbá válni.",
            badgeText: "Fő Anyag",
            badgeColor: "#C07A68",
            features: [
                "Lépésről lépésre követhető gyakorlatok kezdőknek otthon",
                "Javítsa a testtartást, a rugalmasságot és a törzs erejét",
                "Biztonságos mozdulatok túlzott megterhelés nélkül"
            ],
            downloadUrl: "materials/PILATES-1-HU.pdf",
            coverImage: "assets/covers/pil_IMG1_hu.png",
            buttonText: "Fő Anyag Letöltése"
        },
        {
            id: "b2",
            title: "Falnál végzett Pilates — 2026-os Kiadás",
            description: "Szelíd otthoni gyakorlatok, amelyek természetes módon erősítik az Ön erejét, egyensúlyát és mozgékonyságát. Használja a falat támaszként a testtartás javításához és a test erősítéséhez.",
            badgeText: "Bónusz #1",
            badgeColor: "#5B8C7D",
            features: [
                "Használja a falat a jobb egyensúly és támasz érdekében",
                "Gyengéd mozgékonysági gyakorlatok az egész test számára",
                "Ideális otthoni edzéshez különleges felszerelés nélkül"
            ],
            downloadUrl: "materials/PILATES-2-HU.pdf",
            coverImage: "assets/covers/pil_IMG1_hu.png",
            buttonText: "Bónusz #1 Letöltése"
        },
        {
            id: "b3",
            title: "30 napos pilates program az arany korban — 2026-os Kiadás",
            description: "Egy gyengéd, napról napra követhető program, amely lépésről lépésre kíséri Önt — a saját tempójában, otthona nyugalmában — hogy fokozatosan erőre kapjon, egyensúlyt találjon, rugalmasabbá váljon.",
            badgeText: "Bónusz #2",
            badgeColor: "#9C6A88",
            features: [
                "Teljes 30 napos naptár napi gyengéd edzésekkel",
                "Fókuszban az egyensúly, az ízületi mobilitás és az energiaszint növelése",
                "Biztonságosan végezhető otthon bármilyen edzettségi szinten"
            ],
            downloadUrl: "materials/PILATES-3-HU.pdf",
            coverImage: "assets/covers/pil_IMG1_hu.png",
            buttonText: "Bónusz #2 Letöltése"
        }
    ],

    otherProducts: []
};
