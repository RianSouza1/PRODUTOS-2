/**
 * OFF GRID LIVING — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Off Grid Living",
        contactEmail: "suporte@offgridliving.com", // Adjust later if needed
        emailSubject: "Question about course access (Off Grid)",
        emailBodyTemplate: "Hello support team! I need help with my Off Grid Living members area.%0A%0AMy name is: ______.",
        showFloatingHelp: true
    },

    videos: [], // Assuming no videos based on the bundle description, but keeping the array just in case.

    books: [
        {
            id: "b1",
            title: "Off Grid Living 2026 Complete Blueprint",
            description: "A complete off-grid blueprint for energy, water, food, and security—no guesswork, no gaps.",
            badgeText: "MAIN BLUEPRINT",
            badgeColor: "#10B981", // Emerald Green
            features: ["Energy & Water Systems", "Food Independence", "Security Planning"],
            downloadUrl: "materials/Off_Grid_Living_2026_Complete_Blueprint.pdf",
            coverImage: "assets/covers/cover_off_grid_blueprint.jpg",
            buttonText: "Download Blueprint"
        },
        {
            id: "b2",
            title: "70+ DIY Off-Grid Projects",
            description: "70+ step-by-step DIY projects you can actually build, even with basic tools and skills.",
            badgeText: "DIY PROJECTS",
            badgeColor: "#059669", // Darker Green
            features: ["Step-by-step Guides", "Basic Tools Required", "Practical Builds"],
            downloadUrl: "materials/70_DIY_Off_Grid_Projects.pdf",
            coverImage: "assets/covers/cover_off_grid_projects.jpg",
            buttonText: "Download Projects"
        },
        {
            id: "b3",
            title: "Off Grid Survival Planning",
            description: "Off-grid survival planning for blackouts, economic instability, and supply chain breakdowns.",
            badgeText: "SURVIVAL GUIDE",
            badgeColor: "#F59E0B", // Warning Orange/Amber
            features: ["Blackout Preparation", "Emergency Protocols", "8-Week Transition Plan"],
            downloadUrl: "materials/Off_Grid_Survival_Planning.pdf",
            coverImage: "assets/covers/cover_off_grid_survival.jpg",
            buttonText: "Download Guide"
        }
    ],

    otherProducts: []
};
