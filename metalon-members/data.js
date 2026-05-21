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
            title: 'Lesson 1 - Project: Concrete & Steel Coffee Table',
            duration: '15:00',
            videoUrl: 'https://play.tynk.ai/p/bc567ab5-b670-4126-bca1-69c4586ac2f1'
        },
        {
            id: 'v2',
            title: 'Lesson 2 - Project: DIY Geometric Steel Fire Pit',
            duration: '12:00',
            videoUrl: 'https://play.tynk.ai/p/c44c528a-af78-49e2-8943-dddb84b61236'
        },
        {
            id: 'v3',
            title: 'Lesson 3 - Project: Modular Mid-Century Bench',
            duration: '14:00',
            videoUrl: 'https://play.tynk.ai/p/5ff95a2f-a59c-4c61-bf61-a1eace91f16d'
        },
        {
            id: 'v4',
            title: 'Lesson 4 - Project: Steel Bench with Marble Top',
            duration: '11:00',
            videoUrl: 'https://play.tynk.ai/p/fd403898-11a5-4f91-994f-8cf349b2f753'
        },
        {
            id: 'v5',
            title: 'Lesson 5 - Project: DIY Modern Lounge Chair',
            duration: '16:00',
            videoUrl: 'https://play.tynk.ai/p/15eddbe6-a874-4022-b7b0-2b6d5d364e3e'
        },
        {
            id: 'v6',
            title: 'Lesson 6 - Project: Concrete & Steel Dining Table',
            duration: '13:00',
            videoUrl: 'https://play.tynk.ai/p/2e34442a-1a01-4494-97e6-2539aa3bf323'
        },
        {
            id: 'v7',
            title: 'Lesson 7 - Project: DIY Steel & Concrete Stool',
            duration: '18:00',
            videoUrl: 'https://play.tynk.ai/p/18014f7e-5484-496d-8110-66a68556df05'
        },
        {
            id: 'v8',
            title: 'Lesson 8 - Project: Steel Frame Floating Bed',
            duration: '15:00',
            videoUrl: 'https://play.tynk.ai/p/5d4a9ac4-caa3-43e0-a3ad-e1e222a743dd'
        },
        {
            id: 'v9',
            title: 'Lesson 9 - Project: Metal & Wood Bookcase',
            duration: '12:00',
            videoUrl: 'https://play.tynk.ai/p/1c32ada8-3e26-4ca8-ae01-1a42bae1d4c9'
        },
        {
            id: 'v10',
            title: 'Lesson 10 - Project: Heavy-Duty Maker Workbench',
            duration: '20:00',
            videoUrl: 'https://play.tynk.ai/p/faacb658-7558-4a79-a4b9-810a4650c9c2'
        }
    ],

    books: [
        {
            id: "b1",
            title: "400+ Industrial Metal Furniture Projects",
            description: "The ultimate compendium of 400+ premium industrial steel and wood furniture designs, featuring fully detailed cut lists and dimension layouts.",
            badgeText: "MAIN GUIDE",
            badgeColor: "#E85D3A",
            features: [
                "400+ Furniture Plans",
                "Industrial Designs",
                "Material Cut Lists"
            ],
            downloadUrl: "materials/400_Industrial_Metal_Furniture_Projects.pdf",
            coverImage: "assets/covers/cover_metal_400.png",
            buttonText: "Download Guide"
        },
        {
            id: "b2",
            title: "100+ Step-by-Step Furniture Projects (Part 1)",
            description: "Step-by-step assembly guide and technical blueprints for building high-quality steel furniture from scratch. Part 1.",
            badgeText: "STEP-BY-STEP",
            badgeColor: "#FF8C69",
            features: [
                "Step-by-Step Assembly",
                "Detailed Illustrations",
                "Easy-to-Follow Guides"
            ],
            downloadUrl: "materials/100_Step_by_Step_Furniture_Projects_Part1.pdf",
            coverImage: "assets/covers/cover_metal_100_step.png",
            buttonText: "Download Part 1"
        },
        {
            id: "b3",
            title: "100 Metal Projects & Blueprints",
            description: "A massive collection of one hundred diverse metalworking projects with precise fabrication drawings, measurements, and welding symbols.",
            badgeText: "BLUEPRINTS",
            badgeColor: "#2563EB",
            features: [
                "100 Unique Projects",
                "Welding Blueprints",
                "Various Difficulty Levels"
            ],
            downloadUrl: "materials/100_Metal_Projects.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Book"
        },
        {
            id: "b4",
            title: "100+ Step-by-Step Furniture Projects (Part 2)",
            badgeText: "PART 2",
            badgeColor: "#71717a",
            downloadUrl: "materials/100_Step_by_Step_Furniture_Projects_Part2.pdf"
        },
        {
            id: "b5",
            title: "100+ Step-by-Step Furniture Projects (Part 3)",
            badgeText: "PART 3",
            badgeColor: "#71717a",
            downloadUrl: "materials/100_Step_by_Step_Furniture_Projects_Part3.pdf"
        },
        {
            id: "b6",
            title: "100+ Step-by-Step Furniture Projects (Part 4)",
            badgeText: "PART 4",
            badgeColor: "#71717a",
            downloadUrl: "materials/100_Step_by_Step_Furniture_Projects_Part4.pdf"
        },
        {
            id: "b7",
            title: "21 Metal Projects & Fabrication Plans",
            badgeText: "PLANS",
            badgeColor: "#71717a",
            downloadUrl: "materials/21_Metal_Projects.pdf"
        },
        {
            id: "b8",
            title: "24 Practical Metal Projects",
            badgeText: "PLANS",
            badgeColor: "#71717a",
            downloadUrl: "materials/24_Metal_Projects.pdf"
        },
        {
            id: "b9",
            title: "30 Steel Welding Projects",
            badgeText: "PLANS",
            badgeColor: "#71717a",
            downloadUrl: "materials/30_Metal_Projects.pdf"
        },
        {
            id: "b10",
            title: "50 Advanced Metalworking Projects",
            badgeText: "ADVANCED",
            badgeColor: "#71717a",
            downloadUrl: "materials/50_Metal_Projects.pdf"
        },
        {
            id: "b11",
            title: "80 Premium Metalworking Blueprints",
            badgeText: "PLANS",
            badgeColor: "#71717a",
            downloadUrl: "materials/80_Metal_Projects.pdf"
        },
        {
            id: "b12",
            title: "100+ Projects Measurements Pack 1",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            downloadUrl: "materials/100_Projects_Measurements_Pack1.pdf"
        },
        {
            id: "b13",
            title: "100+ Projects Measurements Pack 2",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            downloadUrl: "materials/100_Projects_Measurements_Pack2.pdf"
        },
        {
            id: "b14",
            title: "100+ Projects Measurements Pack 3",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            downloadUrl: "materials/100_Projects_Measurements_Pack3.pdf"
        },
        {
            id: "b15",
            title: "100+ Projects Measurements Pack 4",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            downloadUrl: "materials/100_Projects_Measurements_Pack4.pdf"
        },
        {
            id: "b16",
            title: "100+ Projects Measurements Pack 5",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            downloadUrl: "materials/100_Projects_Measurements_Pack5.pdf"
        },
        {
            id: "b17",
            title: "100+ Projects Measurements Pack 6",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            downloadUrl: "materials/100_Projects_Measurements_Pack6.pdf"
        },
        {
            id: "b18",
            title: "100+ Projects Measurements Pack 7",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            downloadUrl: "materials/100_Projects_Measurements_Pack7.pdf"
        },
        {
            id: "b19",
            title: "100+ Projects Measurements Pack 8",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            downloadUrl: "materials/100_Projects_Measurements_Pack8.pdf"
        },
        {
            id: "b20",
            title: "100+ Projects Measurements Pack 9",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            downloadUrl: "materials/100_Projects_Measurements_Pack9.pdf"
        },
        {
            id: "b21",
            title: "100+ Projects Measurements Pack 10",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            downloadUrl: "materials/100_Projects_Measurements_Pack10.pdf"
        },
        {
            id: "b22",
            title: "Bathroom Towel Rack Ideas",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            downloadUrl: "materials/Bathroom_Towel_Rack_Ideas.pdf"
        },
        {
            id: "b23",
            title: "Wardrobe and Closet Ideas",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            downloadUrl: "materials/Wardrobe_and_Closet_Ideas.pdf"
        },
        {
            id: "b24",
            title: "Fireplace Ideas v1.0",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            downloadUrl: "materials/Fireplace_Ideas_v1.0.pdf"
        },
        {
            id: "b25",
            title: "Fireplace Ideas v2.0",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            downloadUrl: "materials/Fireplace_Ideas_v2.0.pdf"
        },
        {
            id: "b26",
            title: "Bathroom Sink and Vanity Ideas",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            downloadUrl: "materials/Bathroom_Sink_and_Vanity_Ideas.pdf"
        },
        {
            id: "b27",
            title: "Chair Ideas",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            downloadUrl: "materials/Chair_Ideas.pdf"
        },
        {
            id: "b28",
            title: "Living Room Decorative Table Ideas",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            downloadUrl: "materials/Living_Room_Decorative_Table_Ideas.pdf"
        },
        {
            id: "b29",
            title: "Minimalist Mini Table Ideas",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            downloadUrl: "materials/Minimalist_Mini_Table_Ideas.pdf"
        },
        {
            id: "b30",
            title: "Armchair and Lounge Chair Ideas",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            downloadUrl: "materials/Armchair_and_Lounge_Chair_Ideas.pdf"
        }
    ],

    otherProducts: []
};
