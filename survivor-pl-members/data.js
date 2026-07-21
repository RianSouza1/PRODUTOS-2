/**
 * Survival & Bushcraft — Strefa Członkowska (Polski)
 * Kompletna seria Bushcraft i Survival
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Zapytanie o dostęp (Survival & Bushcraft)",
        emailBodyTemplate: "Dzień dobry, zespole wsparcia. Potrzebuję pomocy w uzyskaniu dostępu do mojej strefy członkowskiej Survival & Bushcraft.\n\nNazywam się: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Survival dla początkujących — Wydanie 2026",
            description: "Woda, ogień, schronienie, sygnalizacja i podstawowe techniki survivalowe. Praktyczny przewodnik dla każdego, kto spędza czas na łonie natury — wędrowców, obozowiczów, myśliwych czy zwykłych poszukiwaczy przygód.",
            badgeText: "Główny materiał",
            badgeColor: "#6B7C44",
            features: [
                "Znajdowanie, uzdatnianie i zabezpieczanie wody w dziczy",
                "Rozpalanie ognia, budowanie schronienia i sygnalizacja ratunkowa",
                "Sprawdzone w terenie techniki dla początkujących"
            ],
            downloadUrl: "materials/SURVIVOR-1-PL.pdf",
            coverImage: "assets/covers/sur_IMG1_pl.png",
            buttonText: "Pobierz główny materiał"
        },
        {
            id: "b2",
            title: "Bushcraft i sztuka życia w lesie — Wydanie 2026",
            description: "Ekwipunek, węzły, nawigacja, techniki biwakowania i wiedza o samodzielnym przetrwaniu w dziczy. Niezbędne umiejętności bushcraftu do bezpiecznego i pewnego przebywania w lesie.",
            badgeText: "Bonus #1",
            badgeColor: "#7A5C3E",
            features: [
                "Opanowanie narzędzi, węzłów i technik nawigacyjnych",
                "Budowanie obozowiska i samodzielne życie w terenie",
                "Instrukcje krok po kroku dla osób bez wcześniejszego doświadczenia"
            ],
            downloadUrl: "materials/SURVIVOR-2-PL.pdf",
            coverImage: "assets/covers/sur_IMG1_pl.png",
            buttonText: "Pobierz Bonus #1"
        },
        {
            id: "b3",
            title: "Przygotowanie na sytuacje kryzysowe i pierwsza pomoc dla Twoich bliskich — Wydanie 2026",
            description: "Plecak ewakuacyjny na 72 godziny, awarie prądu, ewakuacja i jak chronić swoją rodzinę. Wszystko, co zwykła rodzina musi wiedzieć na wypadek sytuacji kryzysowej.",
            badgeText: "Bonus #2",
            badgeColor: "#8B4513",
            features: [
                "Prawidłowe skompletowanie plecaka ewakuacyjnego na 72 godziny",
                "Przygotowanie na awarie prądu, ewakuację i bezpieczeństwo domowe",
                "Podstawy pierwszej pomocy dla rodzin w sytuacjach kryzysowych"
            ],
            downloadUrl: "materials/SURVIVOR-3-PL.pdf",
            coverImage: "assets/covers/sur_IMG1_pl.png",
            buttonText: "Pobierz Bonus #2"
        }
    ],

    otherProducts: []
};
