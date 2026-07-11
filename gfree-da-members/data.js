/**
 * NATURLIGT APOTEK — Medlemsområde Data (Dansk)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Naturligt Apotek", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørgsmål om kursusadgang (Naturligt Apotek)",
        emailBodyTemplate: "Hej supportteam! Jeg vil gerne have hjælp til mit medlemsområde for Naturligt Apotek.\n\nMit navn er: ______.",

        // Show floating "?" help button on all screens
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VIDEOS (Video course) — empty if no videos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. BOOKS (E-books and PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Naturligt Apotek — Komplet guide",
            description: "Hovedguiden til at opbygge dit eget naturlige apotek derhjemme. Lær, hvilke urter du skal bruge, hvilke opskrifter der virkelig virker, og hvordan du forbereder dem trin for trin, uden at du behøver at være ekspert.",
            badgeText: "HOVEDBOG",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Simple tilberedningsmetoder for begyndere",
                "Guider til urter og køkkeningredienser",
                "Trin-for-trin urteopskrifter til almindelige gener"
            ],
            downloadUrl: "materials/G-FREE-1-DK.pdf",
            coverImage: "assets/covers/gf_IMG1_da.png",
            buttonText: "Download hovedbog"
        },
        {
            id: "b2",
            title: "Helbredende husråd fra køkkenet",
            description: "Oplev de terapeutiske egenskaber ved almindelige lægeurter og lær at bruge dem sikkert til dit daglige velvære: beroligende teer, sirupper, salver og mere.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medicinske profiler for over 20 urter",
                "Retningslinjer for sikkerhed og dosering",
                "Traditionelle helbredende anvendelser"
            ],
            downloadUrl: "materials/G-FREE-2-DK.pdf",
            coverImage: "assets/covers/gf_IMG1_da.png",
            buttonText: "Download bonus #1"
        },
        {
            id: "b3",
            title: "Helbredende urteteer",
            description: "Lær at lave beroligende urteudtræk til søvn, fordøjelse, afslapning, halssundhed, immunforsvar og dagligt velvære med enkle ingredienser.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Blandinger til søvn, fordøjelse og afslapning",
                "Opskrifter med honning, ingefær, mynte og kamille",
                "Trin for trin til at tilberede derhjemme"
            ],
            downloadUrl: "materials/G-FREE-3-DK.pdf",
            coverImage: "assets/covers/gf_IMG1_da.png",
            buttonText: "Download bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v6