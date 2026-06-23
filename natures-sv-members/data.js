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
        emailSubject: "Fråga om kursåtkomst (Naturens Apotek)",
        emailBodyTemplate: "Hej supportteamet! Jag vill ha hjälp med mitt medlemsområde på Naturens Apotek.%0A%0AMitt namn är: ______.",

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
            title: "Handbok för Naturens Apotek",
            description: "Den kompletta guiden för att bygga ditt eget naturliga apotek hemma. Lär dig vilka örter du ska använda, vilka recept som verkligen fungerar och hur du förbereder dem steg för steg.",
            badgeText: "HUVUDBOK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Nybörjarvänliga beredningsmetoder",
                "Guider för örter & köksingredienser",
                "Steg-för-steg örtrecept"
            ],
            downloadUrl: "materials/natures_apothecary_handbook.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Ladda ner huvudbok"
        },
        {
            id: "b2",
            title: "Örternas helande kraft",
            description: "Lås upp de terapeutiska egenskaperna hos vanliga läkeörter och lär dig hur du använder dem säkert för dagligt välbefinnande, lugnande teer och hemvård.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medicinska profiler för 20+ örter",
                "Säkerhetsriktlinjer & dosering",
                "Traditionella helande tillämpningar"
            ],
            downloadUrl: "materials/healing_power_of_herbs.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Ladda ner Bonus #1"
        },
        {
            id: "b3",
            title: "Remedier inspirerade av Barbara O'Neill",
            description: "Inspirerad av traditionella kurer och naturliga hälsoförfaranden hjälper den här guiden dig att leva ett hälsosammare, kemikaliefritt liv med naturliga terapier.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Traditionella naturliga kurer",
                "Tips för kemikaliefritt liv",
                "Barbara O'Neill-inspirerade metoder"
            ],
            downloadUrl: "materials/barbara_oneill_inspired_remedies.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Ladda ner Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
