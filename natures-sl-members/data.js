/**
 * NATURE'S APOTHECARY — Members Area Data
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
        emailBodyTemplate: "Pozdravljena ekipa za podporo! Želim pomoč pri članskem območju Naravne Lekarne.%0A%0AMoje ime je: ______.",

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
            title: "Priročnik Naravne Lekarne",
            description: "Popoln vodnik za gradnjo lastne naravne lekarne doma. Naučite se, katera zelišča uporabiti, kateri recepti resnično delujejo in kako jih pripraviti korak za korakom.",
            badgeText: "GLAVNA KNJIGA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Začetnikom prijazne metode priprave",
                "Vodniki za zelišča in kuhinjske sestavine",
                "Zeliščni recepti korak za korakom"
            ],
            downloadUrl: "materials/natures_apothecary_handbook.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Prenesi glavno knjigo"
        },
        {
            id: "b2",
            title: "Zdravilna moč zelišč",
            description: "Odkrijte terapevtske lastnosti običajnih zdravilnih zelišč in se naučite, kako jih varno uporabljati za vsakodnevno dobro počutje, pomirjujoče čaje in nego na domu.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Zdravilni profili več kot 20 zelišč",
                "Varnostne smernice in doziranje",
                "Tradicijonalni načini zdravljenja"
            ],
            downloadUrl: "materials/healing_power_of_herbs.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Prenesi Bonus #1"
        },
        {
            id: "b3",
            title: "Pripravki po navdihu Barbare O'Neill",
            description: "Ta vodnik, ki ga navdihujejo tradicionalna zdravila in naravne prakse dobrega počutja, vam pomaga živeti bolj zdravo življenje brez kemikalij z uporabo naravnih terapij.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Tradicionalna naravna zdravila",
                "Nasveti za življenje brez kemikalij",
                "Prakse po navdihu Barbare O'Neill"
            ],
            downloadUrl: "materials/barbara_oneill_inspired_remedies.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Prenesi Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
