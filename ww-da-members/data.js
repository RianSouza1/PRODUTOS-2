/**
 * Træbearbejdning & Woodworking — Medlemsområde (Dansk)
 */

const APP_DATA = {
    config: {
        brandName: "Træbearbejdning & Woodworking",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørgsmål om adgang (Træbearbejdning & Woodworking)",
        emailBodyTemplate: "Hej supportteam! Jeg vil gerne bede om hjælp til min adgang til medlemsområdet for Træbearbejdning & Woodworking.\n\nMit navn er: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Woodworking for Beginners — Værktøj, snit, samlinger og grundlæggende færdigheder",
            description: "Denne bog er skrevet til alle, der altid har ønsket at lære træbearbejdning. Værktøj, snit, samlinger og grundlæggende færdigheder uden dyre maskiner.",
            badgeText: "HOVEDBOG",
            badgeColor: "#D97706",
            features: [
                "Grundlæggende værktøj, snit og træsamlinger for begyndere",
                "Trin-for-trin vejledninger uden krav om dyrt maskinværksted",
                "Tips til materialevalg, sikkerhed og ren træbearbejdning"
            ],
            downloadUrl: "materials/WOOD-1-DA.pdf",
            coverImage: "assets/covers/wood_IMG1_da.png",
            buttonText: "Download Hovedbog (Bog 1)"
        },
        {
            id: "b2",
            title: "Træbearbejdning gjort let — 18 projekter trin for trin",
            description: "18 komplette byggeprojekter med præcise mål & skærelister. Fra mobilholder til arbejdsbuk — bygget trin for trin.",
            badgeText: "PROJEKTBOG",
            badgeColor: "#2D6A4F",
            features: [
                "18 komplette træprojekter med præcise skærelister",
                "Trin-for-trin byggeplaner fra arbejdsbuk til reol",
                "Praktisk håndbog direkte på arbejdsbordet til øjeblikkelig brug"
            ],
            downloadUrl: "materials/WOOD-2-DA.pdf",
            coverImage: "assets/covers/wood_IMG1_da.png",
            buttonText: "Download Projektbog (Bog 2)"
        },
        {
            id: "b3",
            title: "Møbler & Projekter til Hjemmet — Byg rigtige træmøbler selv",
            description: "Slut med små hobbyprojekter: Byg rigtige møbler med solid konstruktion, velafbalancerede proportioner og flot overflade.",
            badgeText: "MØBELBYGNING",
            badgeColor: "#B45309",
            features: [
                "Byg rigtige træmøbler med solid konstruktion selv",
                "Holdbare samlinger og højkvalitets træoverflade-behandling",
                "Velproportionerede møbler til hjem, have og værksted"
            ],
            downloadUrl: "materials/WOOD-3-DA.pdf",
            coverImage: "assets/covers/wood_IMG1_da.png",
            buttonText: "Download Møbelbog (Bog 3)"
        }
    ],

    otherProducts: []
};
