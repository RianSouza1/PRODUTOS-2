/**
 * EASY CANNING — Members Area Data (English)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Easy Canning Guide", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question about course access (Easy Canning Guide)",
        emailBodyTemplate: "Hello support team! I would like to get help with my Easy Canning Guide members area.\n\nMy name is: ______.",

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
            title: "The Complete Guide to Canning & Preserving",
            description: "Simple techniques and step-by-step methods for water bath and pressure canning at home safely.",
            badgeText: "MAIN BOOK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Safe water bath & pressure canning methods",
                "Step-by-step canning guides for beginners",
                "Essential checklist for kitchen setup"
            ],
            downloadUrl: "materials/CANNING-1-EN.pdf",
            coverImage: "assets/covers/canning_IMG1_en.png",
            buttonText: "Download main book"
        },
        {
            id: "b2",
            title: "Everyday Canning Recipes & Jams",
            description: "Over 50 delicious recipes for preserving fruits, vegetables, jams, jellies, pickles, and sauces.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Delicious jam, jelly, and pickle recipes",
                "Sauces, salsas, and pressure canning recipes",
                "Long-term pantry storage tips"
            ],
            downloadUrl: "materials/CANNING-2-EN.pdf",
            coverImage: "assets/covers/canning_IMG1_en.png",
            buttonText: "Download bonus #1"
        },
        {
            id: "b3",
            title: "30-Day Canning Planner & Checklist",
            description: "Organize your preserving season, keep track of jar inventory, and plan your shopping and harvest schedules.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Annual harvest & canning calendar",
                "Jar inventory & batch records templates",
                "Seasonal planner & shopping lists"
            ],
            downloadUrl: "materials/CANNING-3-EN.pdf",
            coverImage: "assets/covers/canning_IMG1_en.png",
            buttonText: "Download bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v1