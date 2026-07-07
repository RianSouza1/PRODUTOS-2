/**
 * NATURE'S APOTHECARY — Members Area Data (English)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Nature's Apothecary", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question about course access (Nature's Apothecary)",
        emailBodyTemplate: "Hello support team! I would like to get help with my Nature's Apothecary members area.\n\nMy name is: ______.",

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
            title: "Nature's Apothecary — Complete Guide",
            description: "The main guide to building your own natural pharmacy at home. Learn which herbs to use, which recipes actually work and how to prepare them step by step, without needing to be an expert.",
            badgeText: "MAIN BOOK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Simple preparation methods for beginners",
                "Guides to herbs and kitchen ingredients",
                "Step by step herbal recipes for common ailments"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-UKE(1).pdf",
            coverImage: "assets/covers/English - img1.webp",
            buttonText: "Download Main Book"
        },
        {
            id: "b2",
            title: "Healing Kitchen Remedies",
            description: "Discover the therapeutic properties of common medicinal herbs and learn to use them safely for daily well-being: soothing teas, syrups, salves and more.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medicinal profiles of over 20 herbs",
                "Safety guidelines and dosing",
                "Traditional healing applications"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-UKE(1).pdf",
            coverImage: "assets/covers/English - img1.webp",
            buttonText: "Download Bonus #1"
        },
        {
            id: "b3",
            title: "Healing Herbal Teas",
            description: "Learn to create soothing herbal infusions for sleep, digestion, relaxation, throat wellness, immunity and daily well-being with simple ingredients.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Blends for sleep, digestion and relaxation",
                "Recipes with honey, ginger, mint and chamomile",
                "Step by step to prepare at home"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-UKE(1).pdf",
            coverImage: "assets/covers/English - img1.webp",
            buttonText: "Download Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v5