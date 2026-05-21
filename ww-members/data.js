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
            features: ["Fundamentals & Safety", "Step-by-Step Instructions", "Simple Beginner Projects"],
            downloadUrl: "materials/Woodworking_for_Beginners.pdf",
            coverImage: "assets/covers/cover_woodworking_beginners.png",
            buttonText: "Download Book"
        },
        {
            id: "b2",
            title: "Guide to Woodworking Tools",
            description: "Learn all about the essential tools needed for woodworking, how to choose, use, and maintain them.",
            badgeText: "BONUS GUIDE",
            badgeColor: "#8B6F47",
            features: ["Essential Tools Guide", "Maintenance Tips", "Selection Criteria"],
            downloadUrl: "materials/To_Woodworking_Tools.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Bonus"
        },
        {
            id: "b3",
            title: "Woodworking Plans (1600 Pages)",
            description: "Over 1,600 pages of detailed, step-by-step woodworking plans for furniture, outdoor projects, and more.",
            badgeText: "PLANS",
            badgeColor: "#3B82F6",
            features: ["1,600 Pages of Plans", "Detailed Blueprints", "Various Difficulty Levels"],
            downloadUrl: "materials/Woodworking_Plans_1600_Pages.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Plans"
        },
        {
            id: "b4",
            title: "Woodworking Plans - Part 1",
            description: "Detailed blueprints and step-by-step plans for beginner and intermediate woodworking projects.",
            badgeText: "PLANS",
            badgeColor: "#10B981",
            features: ["Step-by-Step Blueprints", "Material Lists", "Weekend Projects"],
            downloadUrl: "materials/Woodworking_Plans_Part1.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Plans"
        },
        {
            id: "b5",
            title: "8,500 Woodworking Plans",
            description: "A massive collection of premium woodworking plans and projects to inspire and guide your builds.",
            badgeText: "MEGA BUNDLE",
            badgeColor: "#8B5CF6",
            features: ["8,500 Plans & Projects", "Comprehensive Guides", "Indoor & Outdoor Builds"],
            downloadUrl: "materials/8500_Woodworking_Plans.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Bundle"
        },
        {
            id: "b6",
            title: "510 Craft Plans - Part 1",
            description: "Part 1 of our comprehensive collection of 510 creative and practical craft plans for woodworkers.",
            badgeText: "CRAFT PLANS",
            badgeColor: "#EF4444",
            features: ["Creative Wood Crafts", "Easy-to-Follow Guides", "Part 1 Collection"],
            downloadUrl: "materials/510_Craft_Plans_Part1.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Plans"
        },
        {
            id: "b7",
            title: "510 Craft Plans - Part 2",
            description: "Part 2 of our comprehensive collection of 510 creative and practical craft plans for woodworkers.",
            badgeText: "CRAFT PLANS",
            badgeColor: "#EF4444",
            features: ["Creative Wood Crafts", "Easy-to-Follow Guides", "Part 2 Collection"],
            downloadUrl: "materials/510_Craft_Plans_Part2.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Plans"
        },
        {
            id: "b8",
            title: "510 Craft Plans - Part 3",
            description: "Part 3 of our comprehensive collection of 510 creative and practical craft plans for woodworkers.",
            badgeText: "CRAFT PLANS",
            badgeColor: "#EF4444",
            features: ["Creative Wood Crafts", "Easy-to-Follow Guides", "Part 3 Collection"],
            downloadUrl: "materials/510_Craft_Plans_Part3.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Plans"
        },
        {
            id: "b9",
            title: "11 Woodworking Projects Kit",
            description: "Kit with 11 practical and easy woodworking projects to build at home.",
            badgeText: "PROJECTS KIT",
            badgeColor: "#F59E0B",
            features: ["11 Practical Projects", "Simple Step-by-Step", "Great for Beginners"],
            downloadUrl: "materials/Kit_11_Projetos_Marcenaria.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Kit"
        },
        {
            id: "b10",
            title: "176 Woodworking Projects",
            description: "Detailed woodworking plans and instructions for 176 unique wood projects.",
            badgeText: "PLANS BUNDLE",
            badgeColor: "#10B981",
            features: ["176 Projects", "Detailed Diagrams", "Various Builds"],
            downloadUrl: "materials/176_Woodworking_Projects.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Plans"
        },
        {
            id: "b11",
            title: "Woodworking Plans Projects",
            description: "A comprehensive handbook containing step-by-step woodworking plans.",
            badgeText: "BLUEPRINTS",
            badgeColor: "#10B981",
            features: ["Complete Blueprints", "Material Selection", "Step-by-Step Guides"],
            downloadUrl: "materials/Woodworking_Plans_Projects.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Plans"
        },
        {
            id: "b12",
            title: "Minwax Advanced Project Toolbox",
            description: "Advanced guide and building plan for woodworking toolboxes and cabinets.",
            badgeText: "MINWAX PROJECT",
            badgeColor: "#F59E0B",
            features: ["Advanced Toolbox", "Toolbox Blueprint", "Assembly Steps"],
            downloadUrl: "materials/Minwax_Advanced_Project_Toolbox.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Project"
        },
        {
            id: "b13",
            title: "Minwax Beginner Dolly",
            description: "Simple beginner woodworking guide for building a rolling wooden utility dolly.",
            badgeText: "MINWAX PROJECT",
            badgeColor: "#F59E0B",
            features: ["Rolling Dolly", "Step-by-Step Plans", "Beginner Friendly"],
            downloadUrl: "materials/Minwax_Beginner_Dolly.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Project"
        },
        {
            id: "b14",
            title: "Minwax Beginner Project Jewelry Box",
            description: "Easy and beautiful woodworking guide for building a custom wooden jewelry box.",
            badgeText: "MINWAX PROJECT",
            badgeColor: "#F59E0B",
            features: ["Jewelry Box Plan", "Simple Cuts", "Finishing Tips"],
            downloadUrl: "materials/Minwax_Beginner_Project_Jewelry_Box.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Project"
        },
        {
            id: "b15",
            title: "Minwax Beginner Project Nesting Trays",
            description: "Detailed woodworking plan for constructing beautiful nesting serving trays.",
            badgeText: "MINWAX PROJECT",
            badgeColor: "#F59E0B",
            features: ["Nesting Trays", "Classic Joinery", "Step-by-Step Guide"],
            downloadUrl: "materials/Minwax_Beginner_Project_Nesting_Trays.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Project"
        },
        {
            id: "b16",
            title: "Minwax Beginner Project Shaker Style Coat Mitten Rack",
            description: "Woodworking guide for building a Shaker-style wall coat and mitten rack.",
            badgeText: "MINWAX PROJECT",
            badgeColor: "#F59E0B",
            features: ["Shaker Style Rack", "Wall Mounting Guide", "Beginner Level"],
            downloadUrl: "materials/Minwax_Beginner_Project_Shaker_Style_Coat_Mitten_Rack.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Project"
        },
        {
            id: "b17",
            title: "Minwax Beginner Project Whittled Peg Rack",
            description: "Simple whittling and assembly guide to build a wooden peg hanging rack.",
            badgeText: "MINWAX PROJECT",
            badgeColor: "#F59E0B",
            features: ["Peg Hanging Rack", "Whittling Basics", "Easy Construction"],
            downloadUrl: "materials/Minwax_Beginner_Project_Whittled_Peg_Rack.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Download Project"
        }
    ],

    otherProducts: []
};
