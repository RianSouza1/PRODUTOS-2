/**
 * Pilates & Välbefinnande — Medlemszon (Svenska)
 */

const APP_DATA = {
    config: {
        brandName: "Pilates & Välbefinnande",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Fråga om tillgång (Pilates & Välbefinnande)",
        emailBodyTemplate: "Hej supportteamet. Jag vill gärna få hjälp med min tillgång till Pilates & Välbefinnande medlemszon.\n\nMitt namn är: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Pilates för Nybörjare — Utgåva 2026",
            description: "En enkel steg-för-steg-guide till styrka, rörlighet och säkerhet i hemmet. Designad för att hjälpa dig att bli starkare, smidigare och mer energisk i din egen takt.",
            badgeText: "Huvudmaterial",
            badgeColor: "#C07A68",
            features: [
                "Steg-för-steg-övningar för nybörjare hemma",
                "Förbättra din hållning, rörlighet och bålstyrka",
                "Säkra rörelser utan tung belastning"
            ],
            downloadUrl: "materials/PILATES-1-SV.pdf",
            coverImage: "assets/covers/pil_IMG1_sv.png",
            buttonText: "Ladda ner huvudmaterial"
        },
        {
            id: "b2",
            title: "Vägg-Pilates — Utgåva 2026",
            description: "Milda, stödjande övningar för styrka, balans och rörlighet hemma. Använd väggen som partner för att korrigera hållningen och stärka kroppen.",
            badgeText: "Bonus #1",
            badgeColor: "#5B8C7D",
            features: [
                "Använd väggen för bättre balans och stöd",
                "Milda rörlighetsövningar för hela kroppen",
                "Perfekt för hemmaträning utan extra utrustning"
            ],
            downloadUrl: "materials/PILATES-2-SV.pdf",
            coverImage: "assets/covers/pil_IMG1_sv.png",
            buttonText: "Ladda ner bonus #1"
        },
        {
            id: "b3",
            title: "30 Dagar av Pilates för Seniorer — Utgåva 2026",
            description: "En skonsam daglig plan för styrka, balans, rörlighet och självförtroende. Speciellt utformad för vuxna som vill hålla sig aktiva på ett säkert sätt.",
            badgeText: "Bonus #2",
            badgeColor: "#9C6A88",
            features: [
                "Komplett 30-dagarsschema med dagliga milda pass",
                "Fokus på balans, ledrörlighet och energi",
                "Säkert att utföra hemma på alla nivåer"
            ],
            downloadUrl: "materials/PILATES-3-SV.pdf",
            coverImage: "assets/covers/pil_IMG1_sv.png",
            buttonText: "Ladda ner bonus #2"
        }
    ],

    otherProducts: []
};
