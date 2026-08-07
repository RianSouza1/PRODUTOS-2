/**
 * Fafaragás & Kézi Fafaragás — Tagok Területe (Magyar)
 */

const APP_DATA = {
    config: {
        brandName: "Fafaragás & Kézi Fafaragás",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Kérdés a hozzáférésről (Fafaragás & Kézi Fafaragás)",
        emailBodyTemplate: "Üdvözlöm a támogatási csapatot! Szeretnék segítséget kérni a Fafaragás & Kézi Fafaragás tagi terület hozzáférésemhez.\n\nNevem: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Fafaragás Kezdőknek — Eszközök, Biztonság & Első Egyszerű Projektek",
            description: "Átfogó és praktikus lépésről lépésre útmutató a biztonságos kézi fafaragás elkezdéséhez.",
            badgeText: "1. Kötet",
            badgeColor: "#475569",
            features: [
                "Alapvető biztonsági szabályok és védőfelszerelések",
                "Hogyan olvassuk helyesen a fa erezetét",
                "Az Ön legelső egyszerű fafaragó projektje"
            ],
            downloadUrl: "materials/WHITTLING-1-HU.pdf",
            coverImage: "assets/covers/whi_IMG1_hu.png",
            buttonText: "1. Kötet letöltése (PDF)"
        },
        {
            id: "b2",
            title: "Egyszerű Fafaragó Projektek — Készségek és Technikák Lépésről Lépésre",
            description: "Az 1. Kötet folytatása — az egyszerű geometriai vágásoktól a kifejező fa figurákig strukturált projekteken keresztül.",
            badgeText: "Fő Útmutató",
            badgeColor: "#8B5A2B",
            features: [
                "Tizenegy részletes fafaragási projekt",
                "Sablonok méretezése és átvitele a fára",
                "Tippek a szimmetria és a formák szabályozásához"
            ],
            downloadUrl: "materials/WHITTLING-2-HU.pdf",
            coverImage: "assets/covers/whi_IMG1_hu.png",
            buttonText: "Fő Útmutató (2. Kötet) letöltése"
        },
        {
            id: "b3",
            title: "Fafaragás: Felületkezelés & Finomítás — Élezés, Részletek & Felületkezelési Eljárások",
            description: "Élezés, precíziós fafaragás, felületkezelés és tökéletes végeredmény. A teljes gyűjtemény 3. kötete a 3-ból.",
            badgeText: "3. Kötet",
            badgeColor: "#2E5A44",
            features: [
                "Finom részletkidolgozás és késélezési technikák",
                "Felületkezelők, olajok és viaszok kiválasztása",
                "Hogyan érjünk el tökéletes végső megjelenést"
            ],
            downloadUrl: "materials/WHITTLING-3-HU.pdf",
            coverImage: "assets/covers/whi_IMG1_hu.png",
            buttonText: "3. Kötet letöltése (PDF)"
        }
    ],

    otherProducts: []
};
