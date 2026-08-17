/**
 * Frysemåltider & Madlavning — Medlemsområde (Dansk)
 */

const APP_DATA = {
    config: {
        brandName: "Frysemåltider & Madlavning",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørgsmål om adgang (Frysemåltider & Madlavning)",
        emailBodyTemplate: "Hej supportteam! Jeg vil gerne bede om hjælp til min adgang til medlemsområdet for Frysemåltider & Madlavning.\n\nMit navn er: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Frysemåltider for begyndere — Den komplette trin-for-trin guide",
            description: "Den komplette trin-for-trin guide til at forberede, fryse, opbevare, optø og genopvarme mad på den rigtige måde.",
            badgeText: "HOVEDBOG",
            badgeColor: "#0D5C75",
            features: [
                "Forberedelse, frysning og opbevaring for begyndere",
                "Tips til sikker optøning og genopvarmning uden kvalitetstab",
                "Grundudstyr og de bedste beholdere til fryseren"
            ],
            downloadUrl: "materials/FREEZER-1-DA.pdf",
            coverImage: "assets/covers/free_IMG1_da.png",
            buttonText: "Download Hovedbog (Bog 1)"
        },
        {
            id: "b2",
            title: "50 Nemme Fryseretter til Hverdagen — Opskrifter til Morgenmad, Frokost & Aftensmad",
            description: "50 praktiske opskrifter til morgenmad, frokost, aftensmad & travle hverdage. Alle opskrifter er gennemtestede, fryseegnede og skrevet til et almindeligt køkken.",
            badgeText: "OPSKRIFTSSAMLING",
            badgeColor: "#D97706",
            features: [
                "50 gennemtestede og lækre fryseretter",
                "Perfekt til morgenmad, frokost og aftensmad i hverdagen",
                "Nemme trin-for-trin instruktioner til ethvert køkken"
            ],
            downloadUrl: "materials/FREEZER-2-DA.pdf",
            coverImage: "assets/covers/free_IMG1_da.png",
            buttonText: "Download Opskriftsbog (Bog 2)"
        },
        {
            id: "b3",
            title: "30-Dages Fryser- og Batchkogningsplan",
            description: "Et komplet trin-for-trin system til at forberede mad i forvejen, fylde fryseren op, spare tid og spise godt i en hel måned — uden stress.",
            badgeText: "30-DAGES SYSTEM",
            badgeColor: "#2D6A4F",
            features: [
                "Komplet 30-dages batch-cooking system for maksimal tidsbesparelse",
                "Ugentlige indkøbslister og forberedelsesplaner",
                "Ingen daglig madlavningsstress og intet rod i køkkenet"
            ],
            downloadUrl: "materials/FREEZER-3-DA.pdf",
            coverImage: "assets/covers/free_IMG1_da.png",
            buttonText: "Download 30-Dages Plan (Bog 3)"
        }
    ],

    otherProducts: []
};
