/**
 * METALWORKING GUIDE — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Metalworking Guide",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question about course access (Metalworking)",
        emailBodyTemplate: "Hello support team! I need help with my Metalworking members area.%0A%0AMy name is: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            id: 'v1',
            title: 'Lesson 1 - Introduction to Metalworking',
            duration: '15:00',
            youtubeId: 'sdbC0PLJVzA'
        },
        {
            id: 'v2',
            title: 'Lesson 2 - Welding Fundamentals',
            duration: '12:00',
            youtubeId: 'cEQZEMAuK1c'
        }
    ],

    books: [
        {
            id: "b1",
            title: "Metalworking for Beginners",
            description: "Master the fundamentals of metalworking: welding, cutting, grinding, and forging your first pieces with confidence.",
            badgeText: "MAIN BOOK",
            badgeColor: "#E85D3A",
            features: [
                "Welding & Cutting Basics",
                "Safety Equipment Guide",
                "First Project Blueprints"
            ],
            downloadUrl: "materials/Metalworking_for_Beginners.pdf",
            coverImage: "assets/covers/book_taichi_seniors_light_v2.jpg",
            buttonText: "Download Book"
        },
        {
            id: "b2",
            title: "Essential Welding Techniques",
            description: "A focused guide on MIG, TIG, and Stick welding techniques for home workshops.",
            badgeText: "BONUS",
            badgeColor: "#71717a",
            features: [
                "MIG vs TIG vs Stick Comparison",
                "Practice Exercises",
                "Common Mistakes to Avoid"
            ],
            downloadUrl: "materials/Essential_Welding.pdf",
            coverImage: "assets/covers/book_taichi_weightloss_light.jpg",
            buttonText: "Download Bonus"
        }
    ],

    otherProducts: []
};
