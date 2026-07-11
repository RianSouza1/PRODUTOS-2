/**
 * GLUTEN-FREE — Members Area Data (Italian)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Cucina Senza Glutine", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Domanda sull'accesso al corso (Cucina Senza Glutine)",
        emailBodyTemplate: "Ciao team di supporto! Vorrei ricevere aiuto con la mia area membri Cucina Senza Glutine.\n\nIl mio nome è: ______.",

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
            title: "Cucina semplice senza glutine",
            description: "Pasti semplici per ogni giorno per principianti. Scopri quanto può essere facile e deliziosa la cucina senza glutine con ricette pratiche passo-passo.",
            badgeText: "LIBRO PRINCIPALE",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Pasti semplici per ogni giorno per principianti",
                "Ricette deliziose e salutari passo-passo",
                "Guida essenziale per uno stile di vita senza glutine"
            ],
            downloadUrl: "materials/G-FREE-1-IT.pdf",
            coverImage: "assets/covers/gf_IMG1_it.png",
            buttonText: "Scarica il libro principale"
        },
        {
            id: "b2",
            title: "Cucina senza glutine ogni giorno e comfort food",
            description: "Il miglior pane, snack, dessert e piatti preferiti per tutta la famiglia. Impara a preparare pane e dolci senza glutine soffici e deliziosi che tutti ameranno.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Ricette per pane e snack senza glutine",
                "Dolci deliziose e piatti preferiti della famiglia",
                "Consigli di panificazione per risultati sempre perfetti"
            ],
            downloadUrl: "materials/G-FREE-2-IT.pdf",
            coverImage: "assets/covers/gf_IMG1_it.png",
            buttonText: "Scarica il bonus #1"
        },
        {
            id: "b3",
            title: "Piano pasti senza glutine di 30 giorni e lista della spesa",
            description: "Menu settimanali semplici, liste della spesa organizzate e aiuto esperto nella preparazione dei pasti per rendere la tua transizione facile e senza stress.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Piano pasti completo di 30 giorni",
                "Liste della spesa settimanali organizzate",
                "Consigli utili per preparare facilmente i pasti"
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

// Force redeploy v2