/**
 * NATURAL APOTHECARY — Members Area Data (English)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Natural Apothecary", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question about course access (Natural Apothecary)",
        emailBodyTemplate: "Hello support team! I would like to get help with my Natural Apothecary members area.\n\nMy name is: ______.",

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
            title: "Natural Apothecary — Complete Guide",
            description: "The main guide to building your own natural apothecary at home. Learn which herbs to use, which recipes actually work, and how to prepare them step by step, without needing to be an expert.",
            badgeText: "MAIN BOOK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Simple preparation methods for beginners",
                "Guides to herbs and kitchen ingredients",
                "Step-by-step herb recipes for common ailments"
            ],
            downloadUrl: "materials/G-FREE-1-EN.pdf",
            coverImage: "assets/covers/gf_IMG1_en.png",
            buttonText: "Download main book"
        },
        {
            id: "b2",
            title: "Healing Home Remedies from the Kitchen",
            description: "Discover the therapeutic properties of common medicinal herbs and learn to use them safely for daily well-being: soothing teas, syrups, ointments, and more.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medicinal profiles for over 20 herbs",
                "Safety guidelines and dosage",
                "Traditional healing applications"
            ],
            downloadUrl: "materials/G-FREE-2-EN.pdf",
            coverImage: "assets/covers/gf_IMG1_en.png",
            buttonText: "Download bonus #1"
        },
        {
            id: "b3",
            title: "Healing Herbal Teas",
            description: "Learn to create soothing herbal infusions for sleep, digestion, relaxation, throat health, immune support, and daily well-being with simple ingredients.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Blends for sleep, digestion, and relaxation",
                "Recipes with honey, ginger, mint, and chamomile",
                "Step-by-step to prepare at home"
            ],
            downloadUrl: "materials/G-FREE-3-EN.pdf",
            coverImage: "assets/covers/gf_IMG1_en.png",
            buttonText: "Download bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v7