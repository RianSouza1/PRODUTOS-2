/**
 * PRÍRODNÁ LEKÁREŇ — Members Area Data (Slovenčina)
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
    // 1. VÍDEOS (Curso em vídeo) — vazio se não houver vídeos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. LIVROS (E-books e PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Prírodná Lekáreň — Kompletný sprievodca",
            description: "Hlavný sprievodca vybudovaním vlastnej prírodnej lekárne doma. Zistite, ktoré bylinky používať, ktoré recepty naozaj fungujú a ako ich pripraviť krok za krokom, bez toho, aby ste museli byť odborníkom.",
            badgeText: "HLAVNÁ KNIHA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Jednoduché metódy prípravy pre začiatočníkov",
                "Sprievodcovia bylinkami a kuchynskými prísadami",
                "Bylinné recepty krok za krokom na bežné ťažkosti"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-SK.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Stiahnuť hlavnú knihu"
        },
        {
            id: "b2",
            title: "Liečivá sila bylín",
            description: "Odhaľte terapeutické vlastnosti bežných liečivých bylín a naučte sa ich bezpečne používať na každodenné zdravie: upokojujúce čaje, sirupy, masti a ďalšie.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Liečivé profily viac ako 20 bylín",
                "Bezpečnostné pokyny a dávkovanie",
                "Tradičné liečebné využitie"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-SK.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Stiahnuť Bonus #1"
        },
        {
            id: "b3",
            title: "Sprievodca liečivými nálevmi",
            description: "Naučte sa vytvárať upokojujúce bylinné nálevy na spanie, trávenie, relaxáciu, zdravie hrdla, imunitu a každodenné zdravie z jednoduchých prísad.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Zmesi na spanie, trávenie a relaxáciu",
                "Recepty s medom, zázvorom, mätou a harmančekom",
                "Postup na prípravu doma krok za krokom"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-SK.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Stiahnuť Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v3