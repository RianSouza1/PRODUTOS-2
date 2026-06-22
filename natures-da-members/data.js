/**
 * NATURE'S APOTHECARY — Members Area Data
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Naturens Apotek", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørgsmål om kursusadgang (Naturens Apotek)",
        emailBodyTemplate: "Hej supportteam! Jeg ønsker hjælp til mit medlemsområde på Naturens Apotek.%0A%0AMit navn er: ______.",

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
            title: "Håndbog for Naturens Apotek",
            description: "Den komplette guide til at bygge dit eget naturlige apotek derhjemme. Lær hvilke urter du skal bruge, hvilke opskrifter der faktisk virker, og hvordan du tilbereder dem trin for trin.",
            badgeText: "HOVEDBOG",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Begyndervenlige tilberedningsmetoder",
                "Guider til urter og køkkeningredienser",
                "Trin-for-trin urteopskrifter"
            ],
            downloadUrl: "materials/Natures 1 - DK.pdf",
            coverImage: "assets/covers/Dinamarquês - img1.png",
            buttonText: "Download hovedbog"
        },
        {
            id: "b2",
            title: "Urternes helbredende kraft",
            description: "Lås op for de terapeutiske egenskaber ved almindelige lægeurter, og lær hvordan du bruger dem sikkert til daglig velvære, beroligende teer og hjemmepleje.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medicinske profiler for over 20 urter",
                "Sikkerhedsretningslinjer og dosering",
                "Tradisjonelle helbredende anvendelser"
            ],
            downloadUrl: "materials/Natures  2 - DK.pdf",
            coverImage: "assets/covers/Dinamarquês - img2.png",
            buttonText: "Download Bonus #1"
        },
        {
            id: "b3",
            title: "Remedier inspireret af Barbara O'Neill",
            description: "Inspireret af traditionelle midler og naturlig wellness-praksis hjælper denne guide dig til at leve et sundere, kemikaliefrit liv ved hjælp af naturlige terapier.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Trtraditionelle naturlige midler",
                "Tips til et kemikaliefrit liv",
                "Barbara O'Neill-inspirerede metoder"
            ],
            downloadUrl: "materials/Natures 3 - DK.pdf",
            coverImage: "assets/covers/Dinamarquês - img3.png",
            buttonText: "Download Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
