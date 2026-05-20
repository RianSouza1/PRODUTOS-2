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
            title: 'Lesson 1 - Introduction to Woodworking',
            duration: '15:00',
            videoUrl: 'https://play.tynk.ai/p/ba7674a3-9ff1-4ed2-983e-8afc74fd974d'
        },
        {
            id: 'v2',
            title: 'Lesson 2 - Essential Hand Tools',
            duration: '12:00',
            videoUrl: 'https://play.tynk.ai/p/d180ac72-5f5f-42ed-8624-0f5603403d13'
        },
        {
            id: 'v3',
            title: 'Lesson 3 - Measuring and Marking',
            duration: '14:00',
            videoUrl: 'https://play.tynk.ai/p/20710418-2b6f-47af-a143-8c9298239a14'
        },
        {
            id: 'v4',
            title: 'Lesson 4 - Power Tools Safety',
            duration: '11:00',
            videoUrl: 'https://play.tynk.ai/p/0b820fb6-afc9-4ca9-8814-2ae17b6c1e78'
        },
        {
            id: 'v5',
            title: 'Lesson 5 - Joinery Techniques',
            duration: '16:00',
            videoUrl: 'https://play.tynk.ai/p/029f93b5-37b7-4bf8-9080-ca747c5aad97'
        },
        {
            id: 'v6',
            title: 'Lesson 6 - Sanding and Preparing',
            duration: '13:00',
            videoUrl: 'https://play.tynk.ai/p/d20cf0eb-3317-40e9-a547-b78d97171006'
        },
        {
            id: 'v7',
            title: 'Lesson 7 - Finishing and Polishing',
            duration: '18:00',
            videoUrl: 'https://play.tynk.ai/p/afebce1e-8dbb-4bd1-8f8d-1516717a5e17'
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
