/**
 * NATURALNA APTEKA — Members Area Data (Polski)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Naturalna Apteka", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pytanie dotyczące dostępu do kursu (Naturalna Apteka)",
        emailBodyTemplate: "Witaj zespole wsparcia! Chciał(a)bym otrzymać pomoc w sprawie mojej strefy członkowskiej Naturalna Apteka.\n\nMoje imię to: ______.",

        // Show floating "?" help button on all screens
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VIDEOS (Video course) — empty if no videos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. BOOKS (E-books and PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Naturalna Apteka — Kompletny Przewodnik",
            description: "Główny przewodnik po tworzeniu własnej naturalnej apteki w domu. Dowiedz się, jakich ziół używać, które przepisy naprawdę działają i jak przygotować je krok po kroku — bez konieczności bycia ekspertem.",
            badgeText: "GŁÓWNA KSIĄŻKA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Proste metody przygotowania dla początkujących",
                "Przewodniki po ziołach i składnikach kuchennych",
                "Ziołowe przepisy krok po kroku na powszechne dolegliwości"
            ],
            downloadUrl: "materials/G-FREE-1-PL.pdf",
            coverImage: "assets/covers/gf_IMG1_pl.png",
            buttonText: "Pobierz główną książkę"
        },
        {
            id: "b2",
            title: "Uzdrawiające domowe sposoby z kuchni",
            description: "Odkryj właściwości terapeutyczne najpopularniejszych ziół leczniczych i dowiedz się, jak bezpiecznie z nich korzystać dla codziennego dobrego samopoczucia: kojące herbaty, syropy, maści i wiele innych.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Profile medyczne dla ponad 20 ziół",
                "Wytyczne dotyczące bezpieczeństwa i dawkowania",
                "Tradycyjne zastosowania lecznicze"
            ],
            downloadUrl: "materials/G-FREE-2-PL.pdf",
            coverImage: "assets/covers/gf_IMG1_pl.png",
            buttonText: "Pobierz bonus #1"
        },
        {
            id: "b3",
            title: "Uzdrawiające herbaty ziołowe",
            description: "Dowiedz się, jak przyrządzać kojące napary ziołowe na sen, trawienie, relaks, łagodzenie bólu gardła, odporność i codzienne dobre samopoczucie z prostych składników.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Mieszanki na sen, trawienie i relaks",
                "Przepisy na bazie miodu, imbiru, mięty i rumianku",
                "Przygotowanie w domu krok po kroku"
            ],
            downloadUrl: "materials/G-FREE-3-PL.pdf",
            coverImage: "assets/covers/gf_IMG1_pl.png",
            buttonText: "Pobierz bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};