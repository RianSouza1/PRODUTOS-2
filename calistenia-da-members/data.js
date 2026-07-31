/**
 * Calisthenics Hjemme — Medlemsområde (Dansk) v10
 */

const APP_DATA = {
    config: {
        brandName: "Calisthenics Hjemme",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Supportanmodning om adgang (Calisthenics Hjemme)",
        emailBodyTemplate: "Hej supportteam! Jeg vil gerne bede om hjælp vedrørende min adgang til medlemsområdet for Calisthenics Hjemme.\n\nMit navn er: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Calisthenics for Absolute Begyndere — Bog 1 af 3",
            description: "En essensiel introduktionsguide til absolutte begyndere, der tager deres første skridt inden for kropsvægtstræning. Lær grundlæggende øvelser, opbyg styrke og kom sikkert i gang.",
            badgeText: "Begynderguide",
            badgeColor: "#769B3F",
            features: [
                "Essentielle kropsvægtsøvelser for begyndere",
                "Trin-for-trin vejledning til sikker træning",
                "Opbyg styrke og mobilitet i dit eget tempo"
            ],
            downloadUrl: "materials/CALISTENIA-1-DK.pdf",
            coverImage: "assets/covers/cali_IMG1_dk.png",
            buttonText: "Download Begynderguide (PDF)"
        },
        {
            id: "b2",
            title: "Komplet Program for Kropsvægtstræning — Bog 2 af Samlingen",
            description: "Tag din træning til næste niveau ved at mestre progressioner og funktionelle øvelser. Udvikl udholdenhed, kontrol og muskelmasse helt uden fitnessudstyr.",
            badgeText: "Træningsprogram",
            badgeColor: "#475569",
            features: [
                "Avancerede øvelsesprogressioner og teknikker",
                "Styrke og kropskontrol i enhver bevægelse",
                "Komplet træningsguide til hjemmebrug"
            ],
            downloadUrl: "materials/CALISTENIA-2-DK.pdf",
            coverImage: "assets/covers/cali_IMG1_dk.png",
            buttonText: "Download Træningsprogram (PDF)"
        },
        {
            id: "b3",
            title: "30-Dages Calisthenics Udfordring — Bog 3 af 3",
            description: "En struktureret, daglig træningsplan designet til at opbygge konsistens, forbedre fysikken og styrke hele kroppen. En specialiseret træningshåndbog for hurtige resultater.",
            badgeText: "30-Dages Udfordring",
            badgeColor: "#0F766E",
            features: [
                "Daglig træningsstruktur i 30 dage",
                "Fokus på disciplin, form og udholdenhed",
                "Smarte rutiner for kontinuerlig succes"
            ],
            downloadUrl: "materials/CALISTENIA-3-DK.pdf",
            coverImage: "assets/covers/cali_IMG1_dk.png",
            buttonText: "Download Træningsplan (PDF)"
        }
    ],

    otherProducts: []
};
