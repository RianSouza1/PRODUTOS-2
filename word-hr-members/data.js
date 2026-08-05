/**
 * Ovladavanje Wordom — Korisničko Područje (Hrvatski)
 */

const APP_DATA = {
    config: {
        brandName: "Ovladavanje Wordom",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Upit o pristupu (Ovladavanje Wordom)",
        emailBodyTemplate: "Pozdrav timu za podršku! Želio/željela bih zatražiti pomoć s pristupom korisničkom području za Ovladavanje Wordom.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Word od Nule do Profesionalca — Izdanje 2026 (1. dio od 3)",
            description: "Potpuni vodič za početnike – naučite stvarati jasne, dobro oblikovane i profesionalne dokumente u Microsoft Wordu.",
            badgeText: "Glavni vodič",
            badgeColor: "#2563EB",
            features: [
                "Savladajte osnove programa Microsoft Word",
                "Stvarajte dobro strukturirane i elegantne dokumente",
                "Praktični savjeti za svakodnevno upravljanje dokumentima"
            ],
            downloadUrl: "materials/WORD-1-HR.pdf",
            coverImage: "assets/covers/word_IMG1_hr.png",
            buttonText: "Preuzmi glavni vodič (PDF)"
        },
        {
            id: "b2",
            title: "Oblikovanje, Stilovi & Pametni Radni Tijekovi u Wordu — Izdanje 2026 (2. dio od 3)",
            description: "Praktični vodič za izradu dosljednih, dobro organiziranih i profesionalnih dokumenata u Microsoft Wordu.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Koristite napredne stilove i profesionalno oblikovanje",
                "Osigurajte vizualnu dosljednost u svim dokumentima",
                "Implementirajte učinkovite i pametne radne tijekove"
            ],
            downloadUrl: "materials/WORD-2-HR.pdf",
            coverImage: "assets/covers/word_IMG1_hr.png",
            buttonText: "Preuzmi Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "Word Predlošci, Cirkularna Pisma & Napredni Alati — Izdanje 2026 (3. dio od 3)",
            description: "Višekratno upotrebljivi dokumenti, personalizirana korespondencija, interaktivni obrasci i pametna automatizacija u Microsoft Wordu.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Dizajnirajte višekratne predloške i interaktivne obrasce",
                "Izradite cirkularna pisma za personaliziranu masovnu poštu",
                "Koristite pametne alate za automatizaciju u Wordu"
            ],
            downloadUrl: "materials/WORD-3-HR.pdf",
            coverImage: "assets/covers/word_IMG1_hr.png",
            buttonText: "Preuzmi Bonus #2 (PDF)"
        }
    ],

    otherProducts: []
};
