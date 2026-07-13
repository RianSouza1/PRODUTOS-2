/**
 * LAKO BEZ GLUTENA — Podaci za Članska Zona (Bosanski)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Lako bez glutena", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pitanje o pristupu kursu (Lako bez glutena)",
        emailBodyTemplate: "Zdravo, tim za podršku! Trebam pomoć s mojom članskom zonom za Lako bez glutena.\n\nMoje ime je: ______.",

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
            title: "Jednostavna kuharska knjiga bez glutena",
            description: "Jednostavna svakodnevna jela za početnike. Otkrijte koliko lako i ukusno može biti kuhanje bez glutena uz praktične recepte korak po korak.",
            badgeText: "GLAVNA KNJIGA",
            badgeColor: "#10B981",
            features: [
                "Jednostavna svakodnevna jela za početnike",
                "Ukusni i zdravi recepti korak po korak",
                "Osnovni vodič za život bez glutena"
            ],
            downloadUrl: "materials/G-FREE-1-BS.pdf",
            coverImage: "assets/covers/gf_IMG1_bs.png",
            buttonText: "Preuzmi glavnu knjigu"
        },
        {
            id: "b2",
            title: "Svakodnevno pečenje bez glutena i domaća jela",
            description: "Bolji kruh, grickalice, deserti i omiljeni porodični obroci. Naučite peći mekane, ukusne bezglutenski kruh i slatkiše koje će svi voljeti.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B",
            features: [
                "Recepti za bezglutenski kruh i grickalice",
                "Ukusni deserti i omiljeni porodični obroci",
                "Savjeti za pečenje za savršene rezultate svaki put"
            ],
            downloadUrl: "materials/G-FREE-2-BS.pdf",
            coverImage: "assets/covers/gf_IMG1_bs.png",
            buttonText: "Preuzmi bonus #1"
        },
        {
            id: "b3",
            title: "30-dnevni plan obroka bez glutena i vodič za kupovinu",
            description: "Jednostavni sedmični meniji, organizirane liste za kupovinu i stručna pomoć u pripremi obroka kako bi vaš prijelaz bio gladak i bez stresa.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6",
            features: [
                "Kompletan 30-dnevni plan obroka",
                "Organizirane sedmične liste za kupovinu",
                "Korisni savjeti za laku pripremu obroka"
            ],
            downloadUrl: "materials/G-FREE-3-BS.pdf",
            coverImage: "assets/covers/gf_IMG1_bs.png",
            buttonText: "Preuzmi bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v9