/**
 * BEFŐZÉS & TARTÓSÍTÁS — Tagi Felület Adatok (Magyar)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Befőzés & Tartósítás", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Hozzáférési kérdés (Befőzés & Tartósítás)",
        emailBodyTemplate: "Üdvözlet a támogató csapatnak! Szeretnék segítséget kérni a Befőzés & Tartósítás tagi felületemmel kapcsolatban.\n\nA nevem: ______.",

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
            title: "A befőzés és tartósítás teljes bibliája 2026",
            description: "Használóbarát útmutató kezdőknek vízfürdős sterilizáláshoz, nyomásos befőzéshez, fermentált termékekhez, lekvárokhoz, szószokhoz, biztonságos tároláshoz és az otthoni élelmiszer-tartósításhoz. Az első üvegtől a teljesen megtöltött kamráig.",
            badgeText: "FŐ KÖNYV",
            badgeColor: "#C2593F", // Terracotta orange
            features: [
                "Vízfürdős sterilizálás és nyomásos befőzés kezdőknek",
                "Biztonságos konyhai gyakorlatok és tárolási hőmérsékletek",
                "Lépésről lépésre útmutatók lekvárokhoz, szószokhoz és zöldségekhez"
            ],
            downloadUrl: "materials/CANNING-1-HU.pdf",
            coverImage: "assets/covers/canning_IMG1_hu.png",
            buttonText: "Fő könyv letöltése"
        },
        {
            id: "b2",
            title: "Konyhai útmutató tartós készletekhez",
            description: "Házi szárazmixek, készételeket tartalmazó üvegek, levesmixek, desszertmixek, fűszerkeverékek és praktikus alapélelmiszerek a kamrába a mindennapokra. A te konyhád, a te hozzávalóid, a te szabályaid — anélkül, hogy sterilizáló felszerelést kellene használnod.",
            badgeText: "BÓNUSZ #1",
            badgeColor: "#D97706", // Amber gold
            features: [
                "Házi száraz keverékek és előkészített üvegek",
                "Száraz levesek, desszertkeverékek és fűszerek",
                "Nincs szükség sterilizáló eszközökre a gyors előkészítéshez"
            ],
            downloadUrl: "materials/CANNING-2-HU.pdf",
            coverImage: "assets/covers/canning_IMG1_hu.png",
            buttonText: "Bonus #1 letöltése"
        },
        {
            id: "b3",
            title: "Útmutató kezdőknek az otthoni fermentáláshoz",
            description: "Egyszerű fermentált zöldségek, savanyú káposzta, kovászos uborka, kimcsihez hasonló receptek, sólé, fűszerek, fermentált italok, hibaelhárítás és biztonságos konyhai gyakorlatok. Hagyományos, gyakorlati és kezdőknek.",
            badgeText: "BÓNUSZ #2",
            badgeColor: "#5A7A56", // Olive green
            features: [
                "Savanyú káposzta, fermentált zöldségek és kimcsi receptek",
                "Sólé arányok, fűszerek és fermentált italok",
                "Hibaelhárítás és hagyományos élelmiszer-biztonsági módszerek"
            ],
            downloadUrl: "materials/CANNING-3-HU.pdf",
            coverImage: "assets/covers/canning_IMG1_hu.png",
            buttonText: "Bonus #2 letöltése"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2