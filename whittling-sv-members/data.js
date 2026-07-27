/**
 * Träsnideri & Slöjd — Medlemsområde (Svenska)
 */

const APP_DATA = {
    config: {
        brandName: "Träsnideri & Slöjd",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Fråga om tillgång (Träsnideri & Slöjd)",
        emailBodyTemplate: "Hej supportteamet! Jag skulle vilja be om hjälp med min tillgång till medlemsområdet för Träsnideri & Slöjd.\n\nMitt namn är: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Träsnideri för Nybörjare — Steg för steg mot grundläggande tekniker och säkerhet",
            description: "Lär dig grunderna i träsnideri på ett säkert sätt. Hur du håller kniven, läser träets fiber, gör dina första snitt, stoppsnitt och fasar.",
            badgeText: "Bok 1",
            badgeColor: "#475569",
            features: [
                "Grundläggande säkerhet och skyddsutrustning",
                "Så läser du träets fiber korrekt",
                "Tre enkla nybörjarprojekt (blyertspenna, svamp, gran)"
            ],
            downloadUrl: "materials/WHITTLING-1-SV.pdf",
            coverImage: "assets/covers/whi_IMG1_sv.png",
            buttonText: "Ladda ner Bok 1"
        },
        {
            id: "b2",
            title: "Enkla Träsnideriprojekt — Steg för steg mot nya färdigheter och trygg teknik",
            description: "Med utgångspunkt i nybörjargrunderna får du här elva praktiska projekt ordnade efter svårighetsgrad. Från geometriska former till figurer.",
            badgeText: "Huvudguide",
            badgeColor: "#8B5A2B",
            features: [
                "Elva detaljerade träsnideriprojekt",
                "Hur du skalar och överför mallar till träblocket",
                "Smarta knep för symmetri- och formkontroller"
            ],
            downloadUrl: "materials/WHITTLING-2-SV.pdf",
            coverImage: "assets/covers/whi_IMG1_sv.png",
            buttonText: "Ladda ner Huvudguide (Bok 2)"
        },
        {
            id: "b3",
            title: "Avancerade Träsnideriprojekt — Figursnidning, ansikten och komplexa detaljer",
            description: "Ta ditt snidande till nästa nivå. Fördjupa dig i avancerade figurer, ansiktsuttryck, komplexa texturer och professionell ytbehandling.",
            badgeText: "Bok 3",
            badgeColor: "#2E5A44",
            features: [
                "Avancerad figursnidning och ansiktsuttryck",
                "Tekniker för komplexa yttaxeringar och detaljer",
                "Guide till ytbehandling, oljor och vaxning"
            ],
            downloadUrl: "materials/WHITTLING-3-SV.pdf",
            coverImage: "assets/covers/whi_IMG1_sv.png",
            buttonText: "Ladda ner Bok 3"
        }
    ],

    otherProducts: []
};
