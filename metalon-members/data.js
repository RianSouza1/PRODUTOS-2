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
            description: "Detailed steel furniture assembly diagrams, welding specs, and layouts. Part 2.",
            badgeText: "PART 2",
            badgeColor: "#71717a",
            features: ["Part 2 Blueprints", "Welding Details", "Cut Lists Included"],
            downloadUrl: "materials/100_Step_by_Step_Furniture_Projects_Part2.pdf",
            coverImage: "assets/covers/cover_metal_100_step.png",
            buttonText: "Download Part 2"
        },
        {
            id: "b5",
            title: "100+ Step-by-Step Furniture Projects (Part 3)",
            description: "Step-by-step guides and designs for custom steel workspace furniture. Part 3.",
            badgeText: "PART 3",
            badgeColor: "#71717a",
            features: ["Part 3 Layouts", "Fabrication Details", "Workspace Projects"],
            downloadUrl: "materials/100_Step_by_Step_Furniture_Projects_Part3.pdf",
            coverImage: "assets/covers/cover_metal_100_step.png",
            buttonText: "Download Part 3"
        },
        {
            id: "b6",
            title: "100+ Step-by-Step Furniture Projects (Part 4)",
            description: "Advanced metal-and-wood hybrid furniture blueprints and assemblies. Part 4.",
            badgeText: "PART 4",
            badgeColor: "#71717a",
            features: ["Part 4 Blueprints", "Hybrid Projects", "Step-by-Step Assembly"],
            downloadUrl: "materials/100_Step_by_Step_Furniture_Projects_Part4.pdf",
            coverImage: "assets/covers/cover_metal_100_step.png",
            buttonText: "Download Part 4"
        },
        {
            id: "b7",
            title: "21 Metal Projects & Fabrication Plans",
            description: "Collection of 21 practical metal projects for home improvement and utility shops.",
            badgeText: "PLANS",
            badgeColor: "#71717a",
            features: ["21 Utility Plans", "Fabrication Basics", "Shop Projects"],
            downloadUrl: "materials/21_Metal_Projects.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Plans"
        },
        {
            id: "b8",
            title: "24 Practical Metal Projects",
            description: "Highly detailed blueprints for 24 functional, everyday metal items and shop fixtures.",
            badgeText: "PLANS",
            badgeColor: "#71717a",
            features: ["24 Shop Projects", "Materials Cut List", "Welding Diagrams"],
            downloadUrl: "materials/24_Metal_Projects.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Plans"
        },
        {
            id: "b9",
            title: "30 Steel Welding Projects",
            description: "30 excellent practice projects designed to refine MIG, TIG, and Stick welding skills.",
            badgeText: "PLANS",
            badgeColor: "#71717a",
            features: ["30 Welding Practice", "MIG/TIG Layouts", "Step-by-Step Builds"],
            downloadUrl: "materials/30_Metal_Projects.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Plans"
        },
        {
            id: "b10",
            title: "50 Advanced Metalworking Projects",
            description: "High-level fabrication blueprints for experienced fabricators and professional shops.",
            badgeText: "ADVANCED",
            badgeColor: "#71717a",
            features: ["50 Expert Designs", "Complex Joins", "Industrial Hardware"],
            downloadUrl: "materials/50_Metal_Projects.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Plans"
        },
        {
            id: "b11",
            title: "80 Premium Metalworking Blueprints",
            description: "A comprehensive selection of 80 detailed plans covering steel brackets, frames, and furniture.",
            badgeText: "PLANS",
            badgeColor: "#71717a",
            features: ["80 Blueprints", "Precise Measurements", "Welding Callouts"],
            downloadUrl: "materials/80_Metal_Projects.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Plans"
        },
        {
            id: "b12",
            title: "100+ Projects Measurements Pack 1",
            description: "Pack 1: Clear dimension-only layouts and material lists for custom steel builds.",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            features: ["Dimension Layouts", "Material Lists", "Pack 1 Selection"],
            downloadUrl: "materials/100_Projects_Measurements_Pack1.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Pack 1"
        },
        {
            id: "b13",
            title: "100+ Projects Measurements Pack 2",
            description: "Pack 2: Precise measurements and assembly diagrams for metal shop furniture.",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            features: ["Shop Tool Stands", "Assembly Layouts", "Pack 2 Details"],
            downloadUrl: "materials/100_Projects_Measurements_Pack2.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Pack 2"
        },
        {
            id: "b14",
            title: "100+ Projects Measurements Pack 3",
            description: "Pack 3: Blueprint specs and steel gauge lists for outdoor metal creations.",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            features: ["Steel Gauge Specs", "Outdoor Designs", "Pack 3 Schemes"],
            downloadUrl: "materials/100_Projects_Measurements_Pack3.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Pack 3"
        },
        {
            id: "b15",
            title: "100+ Projects Measurements Pack 4",
            description: "Pack 4: Assembly blueprints and size options for minimalist frame shelving.",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            features: ["Frame Shelving", "Size Guides", "Pack 4 Layouts"],
            downloadUrl: "materials/100_Projects_Measurements_Pack4.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Pack 4"
        },
        {
            id: "b16",
            title: "100+ Projects Measurements Pack 5",
            description: "Pack 5: Engineering dimensions and welding specifications for steel stands.",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            features: ["Welding Callouts", "Steel Stands", "Pack 5 Specs"],
            downloadUrl: "materials/100_Projects_Measurements_Pack5.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Pack 5"
        },
        {
            id: "b17",
            title: "100+ Projects Measurements Pack 6",
            description: "Pack 6: Dimension references for lightweight steel tubes and brackets.",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            features: ["Steel Tube Layouts", "Lightweight Designs", "Pack 6 Diagrams"],
            downloadUrl: "materials/100_Projects_Measurements_Pack6.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Pack 6"
        },
        {
            id: "b18",
            title: "100+ Projects Measurements Pack 7",
            description: "Pack 7: Structural design sizes for industrial brackets and shelves.",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            features: ["Heavy Bracket Sizes", "Shelving Systems", "Pack 7 Blueprints"],
            downloadUrl: "materials/100_Projects_Measurements_Pack7.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Pack 7"
        },
        {
            id: "b19",
            title: "100+ Projects Measurements Pack 8",
            description: "Pack 8: Technical measurements for complex structural joints and hinges.",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            features: ["Hinges & Joint Specs", "Technical Drawings", "Pack 8 Diagrams"],
            downloadUrl: "materials/100_Projects_Measurements_Pack8.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Pack 8"
        },
        {
            id: "b20",
            title: "100+ Projects Measurements Pack 9",
            description: "Pack 9: Fabrication dimensions for custom steel shop organizers.",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            features: ["Shop Organizers", "Welding Blueprints", "Pack 9 Measures"],
            downloadUrl: "materials/100_Projects_Measurements_Pack9.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Pack 9"
        },
        {
            id: "b21",
            title: "100+ Projects Measurements Pack 10",
            description: "Pack 10: Complete fabrication blueprints with heavy-duty metal joints.",
            badgeText: "MEASUREMENTS",
            badgeColor: "#71717a",
            features: ["Heavy Joints", "Master Blueprint", "Pack 10 Selection"],
            downloadUrl: "materials/100_Projects_Measurements_Pack10.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Pack 10"
        },
        {
            id: "b22",
            title: "Bathroom Towel Rack Ideas",
            description: "Visual design inspiration and metal styling guides for sleek bathroom towel racks.",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            features: ["Sleek Metal Styling", "Visual Inspirations", "Mounting Concepts"],
            downloadUrl: "materials/Bathroom_Towel_Rack_Ideas.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Ideas"
        },
        {
            id: "b23",
            title: "Wardrobe and Closet Ideas",
            description: "Contemporary wardrobe layout designs featuring industrial pipe framing and steel bars.",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            features: ["Industrial Pipe Styling", "Wardrobe Fittings", "Contemporary Layouts"],
            downloadUrl: "materials/Wardrobe_and_Closet_Ideas.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Ideas"
        },
        {
            id: "b24",
            title: "Fireplace Ideas v1.0",
            description: "Modern steel and brick fireplace facade concepts and aesthetic inspiration. Version 1.0.",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            features: ["Steel Fireplaces", "Modern Facades", "Aesthetic Concepts"],
            downloadUrl: "materials/Fireplace_Ideas_v1.0.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Ideas"
        },
        {
            id: "b25",
            title: "Fireplace Ideas v2.0",
            description: "Advanced geometric metal fireplace surrounding styles and plans. Version 2.0.",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            features: ["Geometric Surroundings", "Aesthetic Finishes", "Advanced Ideas"],
            downloadUrl: "materials/Fireplace_Ideas_v2.0.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Ideas"
        },
        {
            id: "b26",
            title: "Bathroom Sink and Vanity Ideas",
            description: "Creative industrial vanities and bathroom washbasin steel support designs.",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            features: ["Industrial Vanities", "Steel Supports", "Bathroom Layouts"],
            downloadUrl: "materials/Bathroom_Sink_and_Vanity_Ideas.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Ideas"
        },
        {
            id: "b27",
            title: "Chair Ideas",
            description: "Beautiful metal frame chairs, stools, and bench design concepts.",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            features: ["Metal Stool Design", "Aesthetic Frames", "Premium Seating"],
            downloadUrl: "materials/Chair_Ideas.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Ideas"
        },
        {
            id: "b28",
            title: "Living Room Decorative Table Ideas",
            description: "Modern coffee, console, and accent table frame styling with geometric metalwork.",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            features: ["Console & Coffee Tables", "Geometric Bases", "Modern Steelwork"],
            downloadUrl: "materials/Living_Room_Decorative_Table_Ideas.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Ideas"
        },
        {
            id: "b29",
            title: "Minimalist Mini Table Ideas",
            description: "Minimalist and space-saving side table styles using lightweight iron bars and steel plates.",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            features: ["Space-Saving Tables", "Iron Bar Frame", "Steel Plate Styling"],
            downloadUrl: "materials/Minimalist_Mini_Table_Ideas.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Ideas"
        },
        {
            id: "b30",
            title: "Armchair and Lounge Chair Ideas",
            description: "Ergonomic steel tube lounge armchair frames and elegant visual models.",
            badgeText: "DESIGN IDEAS",
            badgeColor: "#71717a",
            features: ["Steel Tube Armchairs", "Ergonomic Styling", "Premium Accent Seating"],
            downloadUrl: "materials/Armchair_and_Lounge_Chair_Ideas.pdf",
            coverImage: "assets/covers/cover_metal_100_projects.png",
            buttonText: "Download Ideas"
        }
    ],

    otherProducts: []
};
