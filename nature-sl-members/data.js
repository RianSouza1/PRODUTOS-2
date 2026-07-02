/**
 * NARAVNA LEKARNA — Members Area Data (Slovenščina)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Naravna Lekarna", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vprašanje o dostopu do tečaja (Naravna Lekarna)",
        emailBodyTemplate: "Pozdravljeni ekipa za podporo! Želim prejeti pomoč glede mojega članskega območja Naravne Lekarne.%0A%0AMoje ime je: ______.",

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
            title: "Naravna Lekarna — Popoln Vodnik",
            description: "Glavni vodnik za gradnjo lastne domače naravne lekarne. Naučite se, katera zelišča uporabiti, kateri recepti resnično delujejo in kako jih pripraviti korak za korakom, ne da bi morali biti strokovnjak.",
            badgeText: "GLAVNA KNJIGA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Enostavni načini priprave za začetnike",
                "Vodniki po zeliščih in kuhinjskih sestavinah",
                "Zeliščni recepti korak za korakom za pogoste težave"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-SL.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Prenesi Glavno Knjigo"
        },
        {
            id: "b2",
            title: "Zdravilna Moč Zelišč",
            description: "Odkrijte terapevtske lastnosti najpogostejših zdravilnih zelišč in se jih naučite varno uporabljati za vsakodnevno dobro počutje: pomirjujoči čaji, sirupi, mazila in še več.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Zdravilni profili več kot 20 zelišč",
                "Smernice za varnost in odmerjanje",
                "Tradicionalna zdravilna uporaba"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-SL.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Prenesi Bonus #1"
        },
        {
            id: "b3",
            title: "Vodnik po Zdravilnih Napitkih",
            description: "Naučite se ustvariti pomirjujoče zeliščne napitke za spanje, prebavo, sprostitev, dobro počutje grla, odpornost in vsakodnevno počutje s preprostimi sestavinami.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Mešanice za spanje, prebavo in sprostitev",
                "Recepti z medom, ingverjem, mete in kamilico",
                "Priprava korak za korakom doma"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-SL.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Prenesi Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2