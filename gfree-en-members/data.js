/**
 * GLUTEN-FREE — Members Area Data (English)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Easy Gluten-Free", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question about course access (Easy Gluten-Free)",
        emailBodyTemplate: "Hello support team! I would like to get help with my Easy Gluten-Free members area.\n\nMy name is: ______.",

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
            title: "The Easy Gluten-Free Cookbook",
            description: "Simple everyday meals for beginners. Discover how easy and delicious gluten-free cooking can be with practical, step-by-step recipes.",
            badgeText: "MAIN BOOK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Simple everyday meals for beginners",
                "Delicious and healthy recipes step-by-step",
                "Essential guide to a gluten-free lifestyle"
            ],
            downloadUrl: "materials/G-FREE-1-EN.pdf",
            coverImage: "assets/covers/gf_IMG1_en.png",
            buttonText: "Download main book"
        },
        {
            id: "b2",
            title: "Everyday Gluten-Free Baking & Comfort Foods",
            description: "Better breads, snacks, desserts, and family favorites. Learn how to bake soft, delicious gluten-free breads and treats that everyone will love.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Gluten-free bread and snack recipes",
                "Delicious desserts and family favorites",
                "Baking tips for perfect results every time"
            ],
            downloadUrl: "materials/G-FREE-2-EN.pdf",
            coverImage: "assets/covers/gf_IMG1_en.png",
            buttonText: "Download bonus #1"
        },
        {
            id: "b3",
            title: "30-Day Gluten-Free Meal Plan & Shopping Guide",
            description: "Simple weekly menus, organized shopping lists, and expert help with meal preparation to make your transition seamless and stress-free.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Complete 30-day meal plan",
                "Organized weekly shopping lists",
                "Helpful tips for easy meal prep"
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

// Force redeploy v8