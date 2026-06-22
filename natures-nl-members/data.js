/**
 * NATURE'S APOTHECARY — Members Area Data
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "De Natuurapotheek", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vraag over toegang tot de cursus (De Natuurapotheek)",
        emailBodyTemplate: "Hallo supportteam! Ik wil graag hulp met mijn De Natuurapotheek ledengedeelte.%0A%0AMijn naam is: ______.",

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
            title: "Handboek De Natuurapotheek",
            description: "De complete gids voor het opzetten van je eigen natuurlijke apotheek thuis. Leer welke kruiden je moet gebruiken, welke recepten echt werken en hoe je ze stap voor stap bereidt.",
            badgeText: "HOOFDBOEK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Beginnervriendelijke bereidingswijzen",
                "Kruiden- & Keukenberidingsgidsen",
                "Stap-voor-stap kruidenrecepten"
            ],
            downloadUrl: "materials/Natures 1 - NL.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Download Hoofdboek"
        },
        {
            id: "b2",
            title: "De helende kracht van kruiden",
            description: "Ontdek de therapeutische eigenschappen van veelvoorkomende medicinale kruiden en leer hoe je ze veilig gebruikt voor dagelijks welzijn, verzachtende thee en thuisverzorging.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medicinale profielen van 20+ kruiden",
                "Veiligheidsrichtlijnen & dosering",
                "Traditionele genezingstoepassingen"
            ],
            downloadUrl: "materials/Natures  2 - NL.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Download Bonus #1"
        },
        {
            id: "b3",
            title: "Op Barbara O'Neill geïnspireerde remedies",
            description: "Geïnspireerd door traditionele remedies en natuurlijke wellnesspraktijken, helpt deze gids je om gezonder en chemicaliënvrij te leven met natuurlijke therapieën.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Traditionele natuurlijke remedies",
                "Tips voor chemicaliënvrij leven",
                "Op Barbara O'Neill geïnspireerde praktijken"
            ],
            downloadUrl: "materials/Natures  3 - NL.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Download Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
