/**
 * Akustisk Guitar Mastery — Medlemsområde (Dansk) v1
 */

const APP_DATA = {
    config: {
        brandName: "Akustisk Guitar Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Anmodning om support – adgang (Akustisk Guitar Mastery)",
        emailBodyTemplate: "Hej supportteam! Jeg vil gerne bede om hjælp vedrørende min adgang til medlemsområdet for Akustisk Guitar Mastery.\n\nMit navn er: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            id: "v1",
            title: "Sådan spiller du G-akkorden på guitar",
            duration: "For begyndere • Hænder på gribebrættet + akkorddiagram",
            youtubeId: "ES428uOSZ68"
        },
        {
            id: "v2",
            title: "Sådan spiller du C-akkorden på guitar",
            duration: "For begyndere • Hænder på gribebrættet + akkorddiagram",
            youtubeId: "-lLcxTp9dAg"
        },
        {
            id: "v3",
            title: "Sådan spiller du D-akkorden på guitar",
            duration: "For begyndere • Hænder på gribebrættet + akkorddiagram",
            youtubeId: "1DPd5zkh1r0"
        },
        {
            id: "v4",
            title: "Sådan spiller du A-akkorden på guitar",
            duration: "For begyndere • Hænder på gribebrættet + akkorddiagram",
            youtubeId: "bpvLZpcIwZk"
        },
        {
            id: "v5",
            title: "Sådan spiller du Em-akkorden på guitar",
            duration: "For begyndere • Hænder på gribebrættet + akkorddiagram",
            youtubeId: "_aOFJ0WuwQE"
        }
    ],

    books: [
        {
            id: "b1",
            title: "Akustisk Guitar for Absolutte Begyndere — Bog 1 af 3",
            description: "En uundværlig begynderguide til alle, der tager deres første skridt med akustisk guitar. Lær grundlæggende akkorder, enkel rytme og begynd at spille dine første sange med det samme.",
            badgeText: "Begynderguide",
            badgeColor: "#F57C00",
            features: [
                "Grundlæggende akkorder for absolutte begyndere",
                "Rytme- og spilleteknik for begyndere",
                "Trin-for-trin guide til dine første sange"
            ],
            downloadUrl: "materials/GUITAR-1-DA.pdf",
            coverImage: "assets/covers/gui_IMG1_da.png",
            buttonText: "Download Begynderguide (PDF)"
        },
        {
            id: "b2",
            title: "NEMME Akustiske Guitarsange — Bog 2 i Samlingen",
            description: "Udvikl dine evner ved at mestre akkordskift og spilleteknikker. Spil med selvtillid takket være denne trin-for-trin sangbog.",
            badgeText: "Nemme Sanger",
            badgeColor: "#475569",
            features: [
                "Glatte akkordskift og overgange",
                "Dynamiske guider til spilleteknik",
                "Sange trin-for-trin for at opbygge selvtillid"
            ],
            downloadUrl: "materials/GUITAR-2-DA.pdf",
            coverImage: "assets/covers/gui_IMG1_da.png",
            buttonText: "Download Sangbog (PDF)"
        },
        {
            id: "b3",
            title: "30-Dages Udfordring for Akustisk Guitar — Bog 3 af 3",
            description: "En struktureret daglig øveplan til at forbedre din rytme, opbygge selvtillid og skabe en fast øverutine. En specialiseret træningshåndbog af Daniel Harper.",
            badgeText: "30-Dages Udfordring",
            badgeColor: "#0F766E",
            features: [
                "Daglig øveplan i 30 dage",
                "Øvelser til rytme, selvtillid og præcision",
                "Smart rutine til kontinuerlig fremgang"
            ],
            downloadUrl: "materials/GUITAR-3-DA.pdf",
            coverImage: "assets/covers/gui_IMG1_da.png",
            buttonText: "Download Øveplan (PDF)"
        }
    ],

    otherProducts: []
};
