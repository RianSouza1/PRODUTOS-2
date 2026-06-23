/**
 * NATURE'S APOTHECARY — Members Area Data
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Prirodna Ljekarna", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Upit o pristupu tečaju (Prirodna Ljekarna)",
        emailBodyTemplate: "Pozdrav timu za podršku! Želio bih pomoć oko članskog područja Prirodne Ljekarne.%0A%0AMoje ime je: ______.",

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
            title: "Priručnik Prirodne Ljekarne",
            description: "Kompletan vodič za izgradnju vlastite prirodne ljekarne kod kuće. Saznajte koje biljke koristiti, koji recepti stvarno djeluju i kako ih pripremiti korak po korak.",
            badgeText: "GLAVNA KNJIGA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Metode pripreme prilagođene početnicima",
                "Vodiči za bilje i kuhinjske sastojke",
                "Biljni recepti korak po korak"
            ],
            downloadUrl: "materials/natures_apothecary_handbook.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Preuzmi glavnu knjigu"
        },
        {
            id: "b2",
            title: "Ljekovita moć bilja",
            description: "Otkrijte terapeutska svojstva uobičajenog ljekovitog bilja i naučite kako ga sigurno koristiti za svakodnevno zdravlje, umirujuće čajeve i kućnu njegu.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Ljekoviti profili za više od 20 biljaka",
                "Sigurnosne smjernice i doziranje",
                "Tradicijonalni načini liječenja"
            ],
            downloadUrl: "materials/healing_power_of_herbs.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Preuzmi Bonus #1"
        },
        {
            id: "b3",
            title: "Pripravci inspirirani Barbarom O'Neill",
            description: "Inspiriran tradicionalnim lijekovima i prirodnim praksama dobrobiti, ovaj vam vodič pomaže da živite zdravijim životom bez kemikalija koristeći prirodne terapije.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Tradicionalni prirodni lijekovi",
                "Savjeti za život bez kemikalija",
                "Praksa inspirirana Barbarom O'Neill"
            ],
            downloadUrl: "materials/barbara_oneill_inspired_remedies.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Preuzmi Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
