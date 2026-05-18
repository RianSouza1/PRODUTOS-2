/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Beekeeping Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question about course access (Beekeeping)",
        emailBodyTemplate: "Hello support team! I need help with my Beekeeping members area.%0A%0AMy name is: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            id: 'v1',
            title: 'Lesson 1 - Your First Hive',
            duration: '15:00',
            youtubeId: 'sdbC0PLJVzA'
        },
        {
            id: 'v2',
            title: 'Lesson 2 - Understanding Bee Behavior',
            duration: '12:00',
            youtubeId: 'cEQZEMAuK1c'
        }
    ],

    books: [
        {
            id: "b1",
            title: "Beekeeping for Beginners",
            description: "Everything you need to start your beekeeping journey: from choosing your first hive to harvesting golden honey.",
            badgeText: "MAIN BOOK",
            badgeColor: "#E5A817",
            features: [
                "Hive Setup & Placement",
                "Seasonal Care Calendar",
                "Honey Harvesting Guide"
            ],
            downloadUrl: "materials/Beekeeping_for_Beginners.pdf",
            coverImage: "assets/covers/book_taichi_seniors_light_v2.jpg",
            buttonText: "Download Book"
        },
        {
            id: "b2",
            title: "Natural Honey Recipes",
            description: "30 delicious recipes using your own homemade honey — from skincare to gourmet cooking.",
            badgeText: "BONUS",
            badgeColor: "#6B8F3C",
            features: [
                "Sweet & Savory Recipes",
                "Honey-Based Skincare",
                "Preservation Tips"
            ],
            downloadUrl: "materials/Natural_Honey_Recipes.pdf",
            coverImage: "assets/covers/book_taichi_weightloss_light.jpg",
            buttonText: "Download Bonus"
        }
    ],

    otherProducts: []
};
