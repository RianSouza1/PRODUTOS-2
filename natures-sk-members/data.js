/**
 * NATURE'S APOTHECARY — Members Area Data
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Prírodná Lekáreň", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Otázka ohľadom prístupu ku kurzu (Prírodná Lekáreň)",
        emailBodyTemplate: "Dobrý deň, tím podpory! Rád by som požiadal o pomoc s členskou zónou Prírodná Lekáreň.%0A%0AMoje meno je: ______.",

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
            title: "Príručka prírodnej lekárne",
            description: "Kompletný sprievodca vybudovaním vlastnej prírodnej lekárne doma. Zistite, ktoré bylinky používať, ktoré recepty naozaj fungujú a ako ich pripraviť krok za krokom.",
            badgeText: "HLAVNÁ KNIHA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Jednoduché metódy prípravy pre začiatočníkov",
                "Sprievodcovia bylinkami a kuchynskými ingredienciami",
                "Bylinné recepty krok za krokom"
            ],
            downloadUrl: "materials/natures_apothecary_handbook.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Stiahnuť hlavnú knihu"
        },
        {
            id: "b2",
            title: "Liečivá sila bylín",
            description: "Odhaľte terapeutické vlastnosti bežných liečivých bylín a naučte sa ich bezpečne používať na každodenné zdravie, upokojujúce čaje a domácu starostlivosť.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Liečivé profily viac ako 20 bylín",
                "Bezpečnostné pokyny a dávkovanie",
                "Tradičné liečebné využitie"
            ],
            downloadUrl: "materials/healing_power_of_herbs.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Stiahnuť Bonus #1"
        },
        {
            id: "b3",
            title: "Prostriedky inšpirované Barbarou O'Neill",
            description: "Tento sprievodca, inšpirovaný tradičnými prostriedkami a prírodnými wellness praktikami, vám pomôže žiť zdravší život bez chemických látok pomocou prírodných terapií.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Tradičné prírodné prostriedky",
                "Tipy pre život bez chémie",
                "Praktiky inšpirované Barbarou O'Neill"
            ],
            downloadUrl: "materials/barbara_oneill_inspired_remedies.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Stiahnuť Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
