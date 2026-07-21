/**
 * Pilates & Velvære — Medlemsområde (Dansk)
 */

const APP_DATA = {
    config: {
        brandName: "Pilates & Velvære",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørgsmål om adgang (Pilates & Velvære)",
        emailBodyTemplate: "Hej supportteam. Jeg vil gerne have hjælp til min adgang til Pilates & Velvære medlemsområde.\n\nMit navn er: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Pilates for Begyndere — Udgave 2026",
            description: "En enkel trin-for-trin-guide til styrke, smidighed og selvtillid derhjemme. Designet til at hjælpe dig med at blive stærkere, smidigere og more energisk i dit eget tempo.",
            badgeText: "Hovedmateriale",
            badgeColor: "#C07A68",
            features: [
                "Trin-for-trin øvelser for begyndere derhjemme",
                "Forbedr din holdning, smidighed og coremuskulatur",
                "Sikre bevægelser uden unødig belastning"
            ],
            downloadUrl: "materials/PILATES-1-DK.pdf",
            coverImage: "assets/covers/pil_IMG1_dk.png",
            buttonText: "Download hovedmateriale"
        },
        {
            id: "b2",
            title: "Wall Pilates — Udgave 2026",
            description: "Skånsomme, støttede øvelser for styrke, balance og mobilitet derhjemme. Brug væggen som din partner til at korrigere holdningen og styrke kroppen.",
            badgeText: "Bonus #1",
            badgeColor: "#5B8C7D",
            features: [
                "Brug væggen til bedre balance og støtte",
                "Skånsomme mobilitetsøvelser for hele kroppen",
                "Ideel til hjemmetræning uden specielt udstyr"
            ],
            downloadUrl: "materials/PILATES-2-DK.pdf",
            coverImage: "assets/covers/pil_IMG1_dk.png",
            buttonText: "Download bonus #1"
        },
        {
            id: "b3",
            title: "30-Dages Pilates for Seniorer — Udgave 2026",
            description: "En blid daglig plan for styrke, balance, bevægelighed og selvtillid. Specielt udviklet til voksne, der ønsker at forblive aktive på en sikker måde.",
            badgeText: "Bonus #2",
            badgeColor: "#9C6A88",
            features: [
                "Komplet 30-dages program med daglige skånsomme sessioner",
                "Fokus på balance, ledbevægelighed og energi",
                "Sikkert at udføre derhjemme for alle niveauer"
            ],
            downloadUrl: "materials/PILATES-3-DK.pdf",
            coverImage: "assets/covers/pil_IMG1_dk.png",
            buttonText: "Download bonus #2"
        }
    ],

    otherProducts: []
};
