/**
 * PROSTY BEZGLUTEN — Members Area Data (Polski)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Prosty Bezgluten", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pytanie dotyczące dostępu do kursu (Prosty Bezgluten)",
        emailBodyTemplate: "Witaj zespole wsparcia! Chciał(a)bym otrzymać pomoc w sprawie mojej strefy członkowskiej Prosty Bezgluten.\n\nMoje imię to: ______.",

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
            title: "Prosta Kuchnia Bezglutenowa",
            description: "Proste posiłki na każdy dzień dla początkujących. Odkryj, jak łatwe i pyszne może być gotowanie bezglutenowe dzięki praktycznym przepisom krok po kroku.",
            badgeText: "GŁÓWNA KSIĄŻKA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Proste posiłki na każdy dzień dla początkujących",
                "Pyszne i zdrowe przepisy krok po kroku",
                "Niezbędny przewodnik po bezglutenowym stylu życia"
            ],
            downloadUrl: "materials/G-FREE-1-PL.pdf",
            coverImage: "assets/covers/gf_IMG1_pl.png",
            buttonText: "Pobierz główną książkę"
        },
        {
            id: "b2",
            title: "Bezglutenowe Pieczenie na Co Dzień & Comfort Food",
            description: "Lepszy chleb, przekąski, desery i ulubione dania całej rodziny. Dowiedz się, jak upiec miękki, pyszny bezglutenowy chleb i smakołyki, które pokochają wszyscy.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Przepisy na bezglutenowy chleb i przekąski",
                "Pyszne desery i ulubione dania całej rodziny",
                "Wskazówki dotyczące pieczenia zapewniające doskonałe rezultaty za każdym razem"
            ],
            downloadUrl: "materials/G-FREE-2-PL.pdf",
            coverImage: "assets/covers/gf_IMG1_pl.png",
            buttonText: "Pobierz bonus #1"
        },
        {
            id: "b3",
            title: "30-Dniowy Bezglutenowy Plan Posiłków & Lista Zakupów",
            description: "Proste menu tygodniowe, zorganizowane listy zakupów i fachowa pomoc w przygotowywaniu posiłków, aby przejście na nową dietę było płynne i bezstresowe.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Kompletny 30-dniowy plan posiłków",
                "Zorganizowane tygodniowe listy zakupów",
                "Pomocne wskazówki dotyczące łatwego przygotowywania posiłków"
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