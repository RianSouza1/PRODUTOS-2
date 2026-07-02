/**
 * LA FARMACIA NATURAL — Members Area Data (Español)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Přírodní Lékárna", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Dotaz na přístup do kurzu (Přírodní Lékárna)",
        emailBodyTemplate: "Dobrý den, týme podpory! Rád bych získal pomoc s mou členskou sekcí Přírodní Lékárna.%0A%0AMé jméno je: ______.",

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
            title: "Přírodní Lékárna — Kompletní Průvodce",
            description: "Hlavní průvodce k vytvoření vaší vlastní přírodní lékárny doma. Naučte se, jaké bylinky používat, jaké recepty skutečně fungují a jak je připravit krok za krokem, aniž byste museli být odborníkem.",
            badgeText: "HLAVNÍ KNIHA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Jednoduché metody přípravy pro začátečníky",
                "Průvodce bylinkami a kuchyňskými přísadami",
                "Krok za krokem bylinné recepty pro běžné potíže"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-CS.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Stáhnout Hlavní Knihu"
        },
        {
            id: "b2",
            title: "Léčivé Kuchyňské Recepty",
            description: "Objevte terapeutické vlastnosti běžných léčivých bylin a naučte se je bezpečně používat pro každodenní pohodu: uklidňující čaje, sirupy, masti a další.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Léčivé profily více než 20 bylin",
                "Bezpečnostní pokyny a dávkování",
                "Tradiční léčebné aplikace"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-CS.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Stáhnout Bonus #1"
        },
        {
            id: "b3",
            title: "Léčivé Bylinné Čaje",
            description: "Naučte se vytvářet uklidňující bylinné nálevy pro spánek, trávení, relaxaci, zdraví v krku, imunitu a každodenní pohodu s jednoduchými přísadami.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Směsi pro spánek, trávení a relaxaci",
                "Recepty s medem, zázvorem, mátou a heřmánkem",
                "Krok za krokem pro přípravu doma"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-CS.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Stáhnout Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
