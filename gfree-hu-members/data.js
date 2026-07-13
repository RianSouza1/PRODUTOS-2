/**
 * KÖNNYŰ GLUTÉNMENTES — Tagi Terület Adatok (Magyar)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Könnyű Gluténmentes", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Kérdés a kurzus elérésével kapcsolatban (Könnyű Gluténmentes)",
        emailBodyTemplate: "Kedves ügyfélszolgálat! Segítséget szeretnék kérni a Könnyű Gluténmentes tagi területemmel kapcsolatban.\n\nA nevem: ______.",

        // Show floating "?" help button on all screens
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VIDEOS (Video course) — empty if no videos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. BOOKS (E-books and PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "A Könnyű Gluténmentes Szakácskönyv",
            description: "Egyszerű mindennapi ételek kezdőknek. Fedezze fel, milyen egyszerű és finom lehet a gluténmentes főzés a gyakorlatias, lépésről lépésre követhető receptek segítségével.",
            badgeText: "FŐKÖNYV",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Egyszerű mindennapi ételek kezdőknek",
                "Ízletes és egészséges receptek lépésről lépésre",
                "Alapvető útmutató a gluténmentes életmódhoz"
            ],
            downloadUrl: "materials/G-FREE-1-HU.pdf",
            coverImage: "assets/covers/gf_IMG1_hu.png",
            buttonText: "Főkönyv letöltése"
        },
        {
            id: "b2",
            title: "Gluténmentes Mindennapi Sütés & Házias Ételek",
            description: "Finomabb kenyerek, tízóraik, desszertek és a család kedvencei. Tanuljon meg puha, ízletes gluténmentes kenyereket és finomságokat sütni, amelyeket mindenki imádni fog.",
            badgeText: "BÓNUSZ #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Gluténmentes kenyér- és snackreceptek",
                "Ízletes desszertek és a család kedvencei",
                "Sütési tippek a tökéletes eredményért minden alkalommal"
            ],
            downloadUrl: "materials/G-FREE-2-HU.pdf",
            coverImage: "assets/covers/gf_IMG1_hu.png",
            buttonText: "Bónusz #1 letöltése"
        },
        {
            id: "b3",
            title: "30 Napos Gluténmentes Étkezési Terv & Bevásárlási Útmutató",
            description: "Egyszerű heti menük, rendszerezett bevásárlólisták és szakértő segítség az ételek előkészítésében, hogy az átállás zökkenőmentes és stresszmentes legyen.",
            badgeText: "BÓNUSZ #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Teljes 30 napos étkezési terv",
                "Rendszerezett heti bevásárlólisták",
                "Hasznos tippek az egyszerű ételkészítéshez"
            ],
            downloadUrl: "materials/G-FREE-3-HU.pdf",
            coverImage: "assets/covers/gf_IMG1_hu.png",
            buttonText: "Bónusz #2 letöltése"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v9