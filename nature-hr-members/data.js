/**
 * LA FARMACIA NATURAL — Members Area Data (Español)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Prirodna Ljekarna", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pitanje o pristupu tečaju (Prirodna Ljekarna)",
        emailBodyTemplate: "Poštovani tima za podršku! Želio/la bih dobiti pomoć sa svojom zonom za članove Prirodne Ljekarne.%0A%0AMoje ime je: ______.",

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
            title: "Prirodna Ljekarna — Potpuni Vodič",
            description: "Glavni vodič za izgradnju vlastite prirodne ljekarne kod kuće. Saznajte koje bilje koristiti, koji recepti doista djeluju i kako ih pripremiti korak po korak, a da ne morate biti stručnjak.",
            badgeText: "GLAVNA KNJIGA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Jednostavne metode pripreme za početnike",
                "Vodiči za bilje i kuhinjske sastojke",
                "Korak po korak biljni recepti za uobičajene tegobe"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-HR.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Preuzmi Glavnu Knjigu"
        },
        {
            id: "b2",
            title: "Ljekoviti Kuhinjski Recepti",
            description: "Otkrijte terapeutska svojstva uobičajenog ljekovitog bilja i naučite ih sigurno koristiti za svakodnevno blagostanje: umirujući čajevi, sirupi, masti i više.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medicinski profili preko 20 biljaka",
                "Sigurnosne smjernice i doziranje",
                "Tradicionalne ljekovite primjene"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-HR.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Preuzmi Bonus #1"
        },
        {
            id: "b3",
            title: "Ljekoviti Biljni Čajevi",
            description: "Naučte kreirati umirujuće biljne infuzije za san, probavu, opuštanje, zdravlje grla, imunitet i svakodnevno blagostanje s jednostavnim sastojcima.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Mješavine za san, probavu i opuštanje",
                "Recepti s medom, đumbirom, mentom i kamilicom",
                "Korak po korak za pripremu kod kuće"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-HR.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Preuzmi Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
