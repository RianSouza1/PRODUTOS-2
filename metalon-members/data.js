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
            videoUrl: 'https://play.tynk.ai/p/bc567ab5-b670-4126-bca1-69c4586ac2f1'
        },
        {
            id: 'v2',
            title: 'Lesson 2 - Essential Safety & Equipment',
            duration: '12:00',
            videoUrl: 'https://play.tynk.ai/p/c44c528a-af78-49e2-8943-dddb84b61236'
        },
        {
            id: 'v3',
            title: 'Lesson 3 - Metalworking Hand Tools',
            duration: '14:00',
            videoUrl: 'https://play.tynk.ai/p/5ff95a2f-a59c-4c61-bf61-a1eace91f16d'
        },
        {
            id: 'v4',
            title: 'Lesson 4 - Measuring and Marking Tools',
            duration: '11:00',
            videoUrl: 'https://play.tynk.ai/p/fd403898-11a5-4f91-994f-8cf349b2f753'
        },
        {
            id: 'v5',
            title: 'Lesson 5 - Cutting and Drilling Metal',
            duration: '16:00',
            videoUrl: 'https://play.tynk.ai/p/15eddbe6-a874-4022-b7b0-2b6d5d364e3e'
        },
        {
            id: 'v6',
            title: 'Lesson 6 - Grinding and Preparing Joints',
            duration: '13:00',
            videoUrl: 'https://play.tynk.ai/p/2e34442a-1a01-4494-97e6-2539aa3bf323'
        },
        {
            id: 'v7',
            title: 'Lesson 7 - Welding Fundamentals (MIG & TIG)',
            duration: '18:00',
            videoUrl: 'https://play.tynk.ai/p/18014f7e-5484-496d-8110-66a68556df05'
        },
        {
            id: 'v8',
            title: 'Lesson 8 - Fastening and Joining Metal',
            duration: '15:00',
            videoUrl: 'https://play.tynk.ai/p/5d4a9ac4-caa3-43e0-a3ad-e1e222a743dd'
        },
        {
            id: 'v9',
            title: 'Lesson 9 - Finishing and Rust Protection',
            duration: '12:00',
            videoUrl: 'https://play.tynk.ai/p/1c32ada8-3e26-4ca8-ae01-1a42bae1d4c9'
        },
        {
            id: 'v10',
            title: 'Lesson 10 - Metalworking Project: Step-by-Step',
            duration: '20:00',
            videoUrl: 'https://play.tynk.ai/p/faacb658-7558-4a79-a4b9-810a4650c9c2'
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
