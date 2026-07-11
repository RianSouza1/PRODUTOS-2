/**
 * FARMACIA NATURALE — Dati Area Membri (Italiano)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Farmacia Naturale", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Domanda sull'accesso al corso (Farmacia Naturale)",
        emailBodyTemplate: "Gentile supporto! Desidero ricevere assistenza per la mia area membri di Farmacia Naturale.\n\nIl mio nome è: ______.",

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
            title: "Farmacia Naturale — Guida Completa",
            description: "La guida principale per creare la tua farmacia naturale a casa. Scopri quali erbe utilizzare, quali ricette funzionano davvero e come prepararle passo dopo passo, senza dover essere un esperto.",
            badgeText: "LIBRO PRINCIPALE",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Metodi di preparazione semplici per principianti",
                "Guide alle erbe e agli ingredienti da cucina",
                "Ricette a base di erbe passo dopo passo per disturbi comuni"
            ],
            downloadUrl: "materials/G-FREE-1-IT.pdf",
            coverImage: "assets/covers/gf_IMG1_it.png",
            buttonText: "Scarica il libro principale"
        },
        {
            id: "b2",
            title: "Rimedi Casalinghi Curativi dalla Cucina",
            description: "Scopri le proprietà terapeutiche delle comuni erbe medicinali e impara a usarle in modo sicuro per il benessere quotidiano: tisane rilassanti, sciroppi, unguenti e altro ancora.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Profili medicinali per oltre 20 erbe",
                "Linee guida sulla sicurezza e dosaggio",
                "Applicazioni curative tradizionali"
            ],
            downloadUrl: "materials/G-FREE-2-IT.pdf",
            coverImage: "assets/covers/gf_IMG1_it.png",
            buttonText: "Scarica il bonus #1"
        },
        {
            id: "b3",
            title: "Tisane Curative a base di Erbe",
            description: "Impara a preparare tisane rilassanti a base di erbe per il sonno, la digestione, il rilassamento, la salute della gola, il supporto immunitario e il benessere quotidiano con ingredienti semplici.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Miscele per il sonno, la digestione e il relax",
                "Ricette con miele, zenzero, menta e camomilla",
                "Preparazione passo dopo passo da fare a casa"
            ],
            downloadUrl: "materials/G-FREE-3-IT.pdf",
            coverImage: "assets/covers/gf_IMG1_it.png",
            buttonText: "Scarica il bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v1