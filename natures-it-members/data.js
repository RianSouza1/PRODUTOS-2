/**
 * NATURE'S APOTHECARY — Members Area Data
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "L'Apoteca della Natura", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Domanda sull'accesso al corso (L'Apoteca della Natura)",
        emailBodyTemplate: "Ciao team di supporto! Vorrei un aiuto con la mia area membri di L'Apoteca della Natura.%0A%0AIl mio nome è: ______.",

        // Mostrar ícone de "? Ajuda" flutuante em todas as telas
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VÍDEOS (Video Course) - Ocultado ou Vazio se não houver vídeos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. LIVROS (E-books e PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Manuale dell'Apoteca della Natura",
            description: "La guida completa per creare la tua apoteca naturale a casa. Scopri quali erbe usare, quali ricette funzionano davvero e come prepararle passo dopo passo.",
            badgeText: "LIBRO PRINCIPALE",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Metodi di preparazione adatti ai principianti",
                "Guide su erbe e ingredienti da cucina",
                "Ricette erboristiche passo dopo passo"
            ],
            downloadUrl: "materials/natures_apothecary_handbook.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Scarica il libro principale"
        },
        {
            id: "b2",
            title: "Il potere curativo delle erbe",
            description: "Scopri le proprietà terapeutiche delle comuni erbe medicinali e impara a usarle in sicurezza per il benessere quotidiano, tisane rilassanti e cura della casa.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Profili terapeutici di oltre 20 erbe",
                "Linee guida sulla sicurezza e dosaggio",
                "Applicazioni curative tradizionali"
            ],
            downloadUrl: "materials/healing_power_of_herbs.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Scarica il Bonus #1"
        },
        {
            id: "b3",
            title: "Rimedi ispirati a Barbara O'Neill",
            description: "Ispirata ai rimedi tradizionali e alle pratiche di benessere naturale, questa guida ti aiuta a vivere una vita più sana e priva di sostanze chimiche con terapie naturali.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Rimedi naturali tradizionali",
                "Consigli per una vita senza chimica",
                "Pratiche ispirate a Barbara O'Neill"
            ],
            downloadUrl: "materials/barbara_oneill_inspired_remedies.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Scarica il Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
