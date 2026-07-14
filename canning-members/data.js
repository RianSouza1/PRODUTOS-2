/**
 * FOOD PRESERVATION & STORAGE — Members Area Data (English)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Food Preservation & Storage", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question about access (Food Preservation & Storage)",
        emailBodyTemplate: "Hello support team! I would like to get help with my Food Preservation & Storage members area.\n\nMy name is: ______.",

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
            title: "The Complete 2026 Guide to Food Preservation and Storage",
            description: "A practical guide for beginners to water-bath canning, pressure canning, fermented foods, jams, sauces, safe storage, and home food preservation. From your first jar right through to a fully stocked pantry.",
            badgeText: "MAIN BOOK",
            badgeColor: "#C2593F", // Terracotta orange
            features: [
                "Beginner guides to water-bath and pressure canning",
                "Safe kitchen practices and storage temperatures",
                "Step-by-step methods for jams, sauces, and veggies"
            ],
            downloadUrl: "materials/CANNING-1-EN.pdf",
            coverImage: "assets/covers/canning_IMG1_en.png",
            buttonText: "Download main book"
        },
        {
            id: "b2",
            title: "Long-life Cooking Guide",
            description: "Homemade dry mixes, portioned ready-made jars, soups, dessert mixes, spice blends and practical ingredients for the everyday pantry. Your kitchen, your ingredients, your rules – without sterilising equipment.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706", // Amber gold
            features: [
                "Homemade dry mixes and portioned ready-made jars",
                "Dry soups, dessert mixes, spice blends, and ingredients",
                "No sterilising equipment needed for quick prep"
            ],
            downloadUrl: "materials/CANNING-2-EN.pdf",
            coverImage: "assets/covers/canning_IMG1_en.png",
            buttonText: "Download bonus #1"
        },
        {
            id: "b3",
            title: "Beginner's Guide to Home Fermentation",
            description: "Simple fermented vegetables, sauerkraut, fermented pickles, kimchi-style recipes, brine, spices, fermented drinks, troubleshooting and safe kitchen methods. Traditional, practical and beginner-friendly.",
            badgeText: "BONUS #2",
            badgeColor: "#5A7A56", // Olive green
            features: [
                "Fermented vegetables, sauerkraut, and kimchi recipes",
                "Brine ratios, spices, and fermented drinks guides",
                "Troubleshooting & traditional food-safe methods"
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

// Force redeploy v2