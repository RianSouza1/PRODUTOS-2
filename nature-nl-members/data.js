/**
 * LA FARMACIA NATURAL — Members Area Data (Español)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "De Natuurlijke Apotheek", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vraag over toegang tot cursus (De Natuurlijke Apotheek)",
        emailBodyTemplate: "Hallo supportteam! Ik wil graag hulp met mijn ledenomgeving van De Natuurlijke Apotheek.%0A%0AMijn naam is: ______.",

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
            title: "De Natuurlijke Apotheek — Complete Gids",
            description: "De hoofdgids voor het bouwen van je eigen natuurlijke apotheek thuis. Leer welke kruiden je moet gebruiken, welke recepten echt werken en hoe je ze stap voor stap bereidt, zonder dat je een expert hoeft te zijn.",
            badgeText: "HOOFDBOEK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Eenvoudige bereidingswijzen voor beginners",
                "Gidsen voor kruiden en keukeningrediënten",
                "Stap voor stap kruidenrecepten voor veelvoorkomende kwalen"
            ],
            downloadUrl: "materials/la_farmacia_natural_guia.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Download Hoofdboek"
        },
        {
            id: "b2",
            title: "Genezende Keukenremedies",
            description: "Ontdek de therapeutische eigenschappen van veelvoorkomende medicinale kruiden en leer ze veilig gebruiken voor dagelijks welzijn: rustgevende thees, siropen, zalven en meer.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medicinale profielen van meer dan 20 kruiden",
                "Veiligheidsrichtlijnen en dosering",
                "Traditionele helende toepassingen"
            ],
            downloadUrl: "materials/el_poder_curativo_de_las_hierbas.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Download Bonus #1"
        },
        {
            id: "b3",
            title: "Genezende Kruidenthees",
            description: "Leer rustgevende kruideninfusies maken voor slaap, spijsvertering, ontspanning, keelwelzijn, immuniteit en dagelijks welzijn met eenvoudige ingrediënten.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Mengsels voor slaap, spijsvertering en ontspanning",
                "Recepten met honing, gember, munt en kamille",
                "Stap voor stap thuis bereiden"
            ],
            downloadUrl: "materials/guia_infusiones_curativas.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Download Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
