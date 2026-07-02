/**
 * PRIRODNA APOTEKA — Members Area Data (Bosanski)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Prirodna Apoteka", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pitanje o pristupu kursu (Prirodna Apoteka)",
        emailBodyTemplate: "Zdravo tim za podršku! Želim dobiti pomoć sa svojim članskim područjem Prirodne Apoteke.%0A%0AMoje ime je: ______.",

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
            title: "Prirodna Apoteka — Kompletan Vodič",
            description: "Glavni vodič za izgradnju vlastite domaće prirodne apoteke. Naučite koje biljke koristiti, koji recepti zaista djeluju i kako ih pripremiti korak po korak, bez potrebe da budete stručnjak.",
            badgeText: "GLAVNA KNJIGA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Jednostavne metode pripreme za početnike",
                "Vodiči za bilje i kuhinjske sastojke",
                "Biljni recepti korak po korak za uobičajene tegobe"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-BO.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Preuzmi Glavnu Knjigu"
        },
        {
            id: "b2",
            title: "Ljekovita Moć Bilja",
            description: "Otkrijte terautska svojstva uobičajenog ljekovitog bilja i naučite ga sigurno koristiti za svakodnevno blagostanje: umirujući čajevi, sirupi, masti i još mnogo toga.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medicinski profili za više od 20 biljaka",
                "Smjernice za sigurnost i doziranje",
                "Tradicionalna ljekovita primjena"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-BO.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Preuzmi Bonus #1"
        },
        {
            id: "b3",
            title: "Vodič za Ljekovite Biljne Čajeve",
            description: "Naučite kreirati umirujuće biljne infuzije za san, probavu, opuštanje, grlo, imunitet i svakodnevno blagostanje sa jednostavnim sastojcima.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Mješavine za san, probavu i opuštanje",
                "Recepti sa medom, đumbirom, mentom i kamilicom",
                "Korak po korak za pripremu kod kuće"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-BO.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Preuzmi Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
