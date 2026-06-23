/**
 * NATURE'S APOTHECARY — Members Area Data
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Přírodní lékárna", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Dotaz ohledně přístupu ke kurzu (Přírodní lékárna)",
        emailBodyTemplate: "Dobrý den, týme podpory! Rád bych požádal o pomoc s členskou zónou Přírodní lékárna.%0A%0AMoje jméno je: ______.",

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
            title: "Příručka přírodní lékárny",
            description: "Kompletní průvodce vybudováním vlastní přírodní lékárny doma. Zjistěte, které bylinky používat, které recepty opravdu fungují a jak je připravit krok za krokem.",
            badgeText: "HLAVNÍ KNIHA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Snadné metody přípravy pro začátečníky",
                "Průvodce bylinkami a kuchyňskými ingrediencemi",
                "Bylinné recepty krok za krokem"
            ],
            downloadUrl: "materials/natures_apothecary_handbook.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Stáhnout hlavní knihu"
        },
        {
            id: "b2",
            title: "Léčivá síla bylin",
            description: "Odhalte terapeutické vlastnosti běžných léčivých bylin a naučte se je bezpečně používat pro každodenní zdraví, uklidňující čaje a domácí péči.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Léčivé profily více než 20 bylin",
                "Bezpečnostní pokyny a dávkování",
                "Tradiční léčebné využití"
            ],
            downloadUrl: "materials/healing_power_of_herbs.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Stáhnout Bonus #1"
        },
        {
            id: "b3",
            title: "Prostředky inspirované Barbarou O'Neill",
            description: "Tento průvodce, inspirovaný tradičními prostředky a přírodními wellness praktikami, vám pomůže žít zdravější život bez chemických látek pomocí přírodních terapií.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Tradiční přírodní prostředky",
                "Tipy pro život bez chemie",
                "Praktiky inspirované Barbarou O'Neill"
            ],
            downloadUrl: "materials/barbara_oneill_inspired_remedies.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Stáhnout Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
