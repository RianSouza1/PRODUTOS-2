/**
 * NATURALNA APTEKA — Members Area Data (Polski)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Naturalna Apteka", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pytanie dotyczące dostępu do kursu (Naturalna Apteka)",
        emailBodyTemplate: "Witaj zespole wsparcia! Chciałbym otrzymać pomoc w związku z moją strefą członkowską Naturalnej Apteki.%0A%0AMoje imię to: ______.",

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
            title: "Naturalna Apteka — Kompletny Przewodnik",
            description: "Główny przewodnik po budowaniu własnej domowej naturalnej apteki. Dowiedz się, jakich ziół używać, jakie przepisy naprawdę działają i jak je krok po kroku przygotować, bez konieczności bycia ekspertem.",
            badgeText: "GŁÓWNA KSIĄŻKA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Proste metody przygotowania dla początkujących",
                "Przewodniki po ziołach i składnikach kuchennych",
                "Przepisy ziołowe krok po kroku na powszechne dolegliwości"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-PL.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Pobierz Główną Książkę"
        },
        {
            id: "b2",
            title: "Uzdrawiająca Moc Ziół",
            description: "Odkryj właściwości terapeutyczne najpopularniejszych ziół leczniczych i dowiedz się, jak bezpiecznie z nich korzystać w codziennym życiu: wyciszające napary, syropy, maści i wiele więcej.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Opisy lecznicze ponad 20 ziół",
                "Wskazówki dotyczące bezpieczeństwa i dawkowania",
                "Tradiycyjne zastosowania lecznicze"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-PL.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Pobierz Bonus #1"
        },
        {
            id: "b3",
            title: "Przewodnik po Uzdrawiających Naparach",
            description: "Dowiedz się, jak tworzyć wyciszające napary ziołowe na sen, trawienie, relaks, gardło, odporność i codzienne dobre samopoczucie przy użyciu prostych składników.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Mieszanki na sen, trawienie i relaks",
                "Przepisy z miodem, imbirem, miętą i rumiankiem",
                "Przygotowanie w domu krok po kroku"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-PL.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Pobierz Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
