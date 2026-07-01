/**
 * LA FARMACIA NATURALE — Members Area Data (Italiano)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "La Farmacia Naturale", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Domanda sull'accesso al corso (La Farmacia Naturale)",
        emailBodyTemplate: "Ciao team di supporto! Vorrei ricevere assistenza con la mia area membri di La Farmacia Naturale.%0A%0AIl mio nome è: ______.",

        // Mostrar ícone de "? Ajuda" flutuante em todas as telas
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VÍDEOS (Curso em vídeo) — vazio se não houver vídeos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. LIVROS (E-books e PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "La Farmacia Naturale — Guida Completa",
            description: "La guida principale per creare la tua farmacia naturale a casa. Impara quali erbe usare, quali ricette funzionano davvero e come prepararle passo dopo passo, senza essere un esperto.",
            badgeText: "LIBRO PRINCIPALE",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Metodi di preparazione semplici per principianti",
                "Guide alle erbe e agli ingredienti da cucina",
                "Ricette erboristiche passo dopo passo per disturbi comuni"
            ],
            downloadUrl: "materials/la_farmacia_natural_guia.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Scarica il Libro Principale"
        },
        {
            id: "b2",
            title: "Il Potere Curativo delle Erbe",
            description: "Scopri le proprietà terapeutiche delle erbe medicinali più comuni e impara a usarle in modo sicuro per il benessere quotidiano: tisane rilassanti, sciroppi, unguenti e altro ancora.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Profili medicinali di oltre 20 erbe",
                "Linee guida per la sicurezza e il dosaggio",
                "Applicazioni terapeutiche tradizionali"
            ],
            downloadUrl: "materials/el_poder_curativo_de_las_hierbas.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Scarica il Bonus #1"
        },
        {
            id: "b3",
            title: "Guida alle Infusioni Curative",
            description: "Impara a creare infusioni erboristiche rilassanti per il sonno, la digestione, il relax, il benessere della gola, l'immunità e il benessere quotidiano con ingredienti semplici.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Miscele per il sonno, la digestione e il relax",
                "Ricette con miele, zenzero, menta e camomilla",
                "Preparazione passo dopo passo a casa"
            ],
            downloadUrl: "materials/guia_infusiones_curativas.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Scarica il Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
