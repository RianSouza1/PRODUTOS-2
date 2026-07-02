/**
 * PRIRODNA APOTEKA — Members Area Data (Srpski)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Prirodna Apoteka", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pitanje u vezi sa pristupom kursu (Prirodna Apoteka)",
        emailBodyTemplate: "Zdravo tim za podršku! Želim da dobijem pomoć u vezi sa svojim članskim područjem Prirodne Apoteke.%0A%0AMoje ime je: ______.",

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
            description: "Glavni vodič za izgradnju sopstvene domaće prirodne apoteke. Naučite koje biljke koristiti, koji recepti zaista deluju i kako ih pripremiti korak po korak, bez potrebe da budete stručnjak.",
            badgeText: "GLAVNA KNJIGA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Jednostavne metode pripreme za početnike",
                "Vodiči za bilje i kuhinjske sastojke",
                "Biljni recepti korak po korak za uobičajene tegobe"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-SR.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Preuzmi Glavnu Knjigu"
        },
        {
            id: "b2",
            title: "Lekovita Moć Bilja",
            description: "Otkrijte terapeutska svojstva uobičajenog lekovitog bilja i naučite da ga bezbedno koristite za svakodnevno blagostanje: umirujući čajevi, sirupi, masti i još mnogo toga.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medicinski profili za više od 20 biljaka",
                "Smernice za bezbednost i doziranje",
                "Tradicionalna lekovita primena"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-SR.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Preuzmi Bonus #1"
        },
        {
            id: "b3",
            title: "Vodič za Lekovite Čajeve",
            description: "Naučite kako da kreirate umirujuće biljne infuzije za san, probavu, opuštanje, grlo, imunitet i svakodnevno blagostanje sa jednostavnim sastojcima.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Mešavine za san, probavu i opuštanje",
                "Recepti sa medom, đumbirom, mentom i kamilicom",
                "Priprema kod kuće korak po korak"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-SR.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Preuzmi Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
