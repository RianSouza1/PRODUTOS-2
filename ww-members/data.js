/**
 * WOODWORKING MASTERCLASS — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Woodworking Masterclass",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question about course access (Woodworking)",
        emailBodyTemplate: "Hello support team! I need help with my Woodworking members area.%0A%0AMy name is: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            id: 'v1',
            title: 'Lesson 1 - Getting Started with Wood',
            duration: '15:00',
            youtubeId: 'sdbC0PLJVzA'
        },
        {
            id: 'v2',
            title: 'Lesson 2 - Essential Hand Tools',
            duration: '12:00',
            youtubeId: 'cEQZEMAuK1c'
        }
    ],

    books: [
        {
            id: "b1",
            title: "Woodworking for Beginners",
            description: "A complete guide to learning the fundamentals of woodworking, safely using tools, and building your first projects.",
            badgeText: "MAIN BOOK",
            badgeColor: "#C68B3E",
            features: [
                "Fundamentals & Safety",
                "Step-by-Step Instructions",
                "Simple Beginner Projects"
            ],
            downloadUrl: "materials/Woodworking_for_Beginners.pdf",
            coverImage: "assets/covers/book_taichi_seniors_light_v2.jpg",
            buttonText: "Download Book"
        },
        {
            id: "b2",
            title: "5 Weekend Projects",
            description: "Discover 5 simple and useful projects you can build in a single weekend.",
            badgeText: "BONUS",
            badgeColor: "#8B6F47",
            features: [
                "Material Lists Included",
                "Detailed Plans",
                "Time-Saving Tips"
            ],
            downloadUrl: "materials/5_Weekend_Projects.pdf",
            coverImage: "assets/covers/book_taichi_weightloss_light.jpg",
            buttonText: "Download Bonus"
        }
    ],

    otherProducts: []
};
