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
        emailSubject: "Spørsmål om kurstilgang (Naturens Apotek)",
        emailBodyTemplate: "Hei supportteam! Jeg ønsker hjelp med mitt medlemsområde på Naturens Apotek.%0A%0AMitt navn er: ______.",

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
            title: "Håndbok for Naturens Apotek",
            description: "Den komplette guiden til å bygge ditt eget naturlige apotek hjemme. Lær hvilke urter du skal bruke, hvilke oppskrifter som faktisk fungerer, og hvordan du forbereder dem trinn for trinn.",
            badgeText: "HOVEDBOK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Nybegynnervennlige tilberedningsmetoder",
                "Urte- og kjøkkeningrediensguider",
                "Trinn-for-trinn urteoppskrifter"
            ],
            downloadUrl: "materials/natures_apothecary_handbook.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Last ned hovedbok"
        },
        {
            id: "b2",
            title: "Urtenes helbredende kraft",
            description: "Lås opp de terapeutiske egenskapene til vanlige medisinske urter og lær hvordan du bruker dem trygt til daglig velvære, beroligende teer og hjemmepleie.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medisinske profiler for over 20 urter",
                "Retningslinjer for sikkerhet og dosering",
                "Tradisjonelle helbredende anvendelser"
            ],
            downloadUrl: "materials/healing_power_of_herbs.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Last ned Bonus #1"
        },
        {
            id: "b3",
            title: "Remedier inspirert av Barbara O'Neill",
            description: "Inspirert av tradisjonelle remedier og naturlig velværepraksis, hjelper denne guiden deg med å leve et sunnere, kjemikaliefritt liv ved bruk av naturlige terapier.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Tradisjonelle naturlige remedier",
                "Tips for et kjemikaliefritt liv",
                "Barbara O'Neill-inspirerte metoder"
            ],
            downloadUrl: "materials/barbara_oneill_inspired_remedies.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Last ned Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
