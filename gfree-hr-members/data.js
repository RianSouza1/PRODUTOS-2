/**
 * JEDNOSTAVNO BEZ GLUTENA — Podaci za Člansko Područje (Hrvatski)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Jednostavno Bez Glutena", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Upit o pristupu tečaju (Jednostavno Bez Glutena)",
        emailBodyTemplate: "Pozdrav timu za podršku! Želim zatražiti pomoć oko svog članskog područja za Jednostavno Bez Glutena.\n\nMoje ime je: ______.",

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
            title: "Jednostavna Kuharica Bez Glutena",
            description: "Jednostavni svakodnevni obroci za početnike. Otkrijte kako jednostavno i ukusno može biti kuhanje bez glutena uz praktične recepte korak po korak.",
            badgeText: "GLAVNA KNJIGA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Jednostavni svakodnevni obroci za početnike",
                "Ukusni i zdravi recepti korak po korak",
                "Osnovni vodič za život bez glutena"
            ],
            downloadUrl: "materials/G-FREE-1-HR.pdf",
            coverImage: "assets/covers/gf_IMG1_hr.png",
            buttonText: "Preuzmi glavnu knjigu"
        },
        {
            id: "b2",
            title: "Svakodnevno Pečenje Bez Glutena & Omiljena Jela",
            description: "Bolji kruhovi, grickalice, deserti i obiteljski favoriti. Naučite peći mekani, ukusni kruh bez glutena i poslastice koje će svi voljeti.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Recepti za kruh i grickalice bez glutena",
                "Ukusni deserti i obiteljski favoriti",
                "Savjeti za pečenje za savršene rezultate svaki put"
            ],
            downloadUrl: "materials/G-FREE-2-HR.pdf",
            coverImage: "assets/covers/gf_IMG1_hr.png",
            buttonText: "Preuzmi bonus #1"
        },
        {
            id: "b3",
            title: "30-Dnevni Plan Obroka & Vodič za Kupnju Bez Glutena",
            description: "Jednostavni tjedni jelovnici, organizirani popisi za kupnju i stručna pomoć u pripremi obroka kako bi vaš prijelaz bio ugodan i bez stresa.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Potpuni 30-dnevni plan obroka",
                "Organizirani tjedni popisi za kupnju",
                "Korisni savjeti za jednostavnu pripremu obroka"
            ],
            downloadUrl: "materials/G-FREE-3-HR.pdf",
            coverImage: "assets/covers/gf_IMG1_hr.png",
            buttonText: "Preuzmi bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v9