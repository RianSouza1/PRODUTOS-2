/**
 * Wędzenie & BBQ — Strefa Członkowska (Polski)
 */

const APP_DATA = {
    config: {
        brandName: "Wędzenie & BBQ",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Zapytanie o dostęp (Wędzenie & BBQ)",
        emailBodyTemplate: "Dzień dobry, zespole wsparcia! Chciałbym poprosić o pomoc dotyczącą mojego dostępu do strefy członkowskiej Wędzenie & BBQ.\n\nMoje imię to: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Wędzenie Mięsa dla Początkujących — Wydanie 2026",
            description: "Opanuj Ogień, Dym, Temperaturę i Kruchość w Domu. Ciepły i zachęcający przewodnik, który możesz łatwo śledzić w zaciszu własnego domu, aby uzyskać idealnie wędzone mięsa.",
            badgeText: "Główna Książka",
            badgeColor: "#BF360C",
            features: [
                "Mistrzowskie kontrolowanie ognia, dymu i temperatury",
                "Szczegółowe instrukcje krok po kroku dla początkujących",
                "Praktyczne wskazówki dotyczące wędzenia w domu"
            ],
            downloadUrl: "materials/SMOKING-1-PL.pdf",
            coverImage: "assets/covers/SMK_IMG1_PL.png",
            buttonText: "Pobierz Główną Książkę"
        },
        {
            id: "b2",
            title: "Przepisy na Grilla w Ogrodzie — Wydanie 2026",
            description: "Wędzone Mięsa, Dodatki i Kompletne Menu na Przyjęcia Plenerowe dla spotkań rodzinnych, urodzin, dni meczowych i niezapomnianych przyjęć w ogrodzie.",
            badgeText: "Bonus #1",
            badgeColor: "#8D6E63",
            features: [
                "Najlepsze przepisy na klasyczne wędzone mięsa",
                "Klasyczne amerykańskie dodatki do BBQ",
                "Kompletne menu na każdą okazję na świeżym powietrzu"
            ],
            downloadUrl: "materials/SMOKING-2-PL.pdf",
            coverImage: "assets/covers/SMK_IMG1_PL.png",
            buttonText: "Pobierz Bonus #1"
        },
        {
            id: "b3",
            title: "Rubs, Sosy & Marynaty BBQ — Wydanie 2026",
            description: "Buduj Odważne i Zrównoważone Smaki dla Każdego Kawałka Mięsa. Ostateczny przewodnik, który nada Twoim potrawom doskonały smakowy akcent.",
            badgeText: "Bonus #2",
            badgeColor: "#E64A19",
            features: [
                "Sekretne przepisy na kultowe rubsy i mieszanki przypraw BBQ",
                "Pyszne sosy i marynaty do każdego rodzaju mięsa",
                "Wskazówki dotyczące maksymalizacji smaku dla mistrzów grillowania"
            ],
            downloadUrl: "materials/SMOKING-3-PL.pdf",
            coverImage: "assets/covers/SMK_IMG1_PL.png",
            buttonText: "Pobierz Bonus #2"
        }
    ],

    otherProducts: []
};
