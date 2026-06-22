/**
 * NATURE'S APOTHECARY — Members Area Data
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Apteka Natury", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pytanie dotyczące dostępu do kursu (Apteka Natury)",
        emailBodyTemplate: "Witam zespół wsparcia! Chciałbym uzyskać pomoc dotyczącą mojej strefy członkowskiej Apteka Natury.%0A%0AMoje imię to: ______.",

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
            title: "Podręcznik Apteki Natury",
            description: "Kompletny przewodnik po budowie własnej naturalnej apteki w domu. Dowiedz się, jakich ziół używać, jakie przepisy naprawdę działają i jak je przygotować krok po kroku.",
            badgeText: "GŁÓWNA KSIĄŻKA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Przyjazne dla początkujących metody przygotowania",
                "Przewodniki po ziołach i składnikach kuchennych",
                "Przepisy ziołowe krok po kroku"
            ],
            downloadUrl: "materials/Natures  1 - PL.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Pobierz główną książkę"
        },
        {
            id: "b2",
            title: "Uzdrawiająca moc ziół",
            description: "Odblokuj właściwości terapeutyczne popularnych ziół leczniczych i dowiedz się, jak bezpiecznie z nich korzystać w codziennym życiu, do łagodzących herbat i domowej pielęgnacji.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Profile lecznicze ponad 20 ziół",
                "Zasady bezpieczeństwa i dawkowanie",
                "Tradycyjne zastosowania lecznicze"
            ],
            downloadUrl: "materials/Natures 2- PL.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Pobierz Bonus #1"
        },
        {
            id: "b3",
            title: "Środki inspirowane Barbarą O'Neill",
            description: "Zainspirowany tradycyjnymi recepturami i naturalnymi praktykami wellness, ten przewodnik pomoże Ci prowadzić zdrowsze życie wolne od chemii dzięki naturalnym terapiom.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Tradycyjne naturalne środki zaradcze",
                "Wskazówki dotyczące życia bez chemii",
                "Praktyki inspirowane Barbarą O'Neill"
            ],
            downloadUrl: "materials/Natures 3 - PL.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Pobierz Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
