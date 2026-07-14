/**
 * KONSERWOWANIE I WEKOWANIE — Dane Obszaru Członkowskiego (Polski)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Konserwowanie & Wekowanie", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Zapytanie o dostęp (Konserwowanie & Wekowanie)",
        emailBodyTemplate: "Witaj zespole wsparcia! Chciałbym uzyskać pomoc dotyczącą mojego obszaru członkowskiego Konserwowanie & Wekowanie.\n\nMoje imię to: ______.",

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
            title: "Kompletna biblia konserwowania i wekowania 2026",
            description: "Przewodnik przyjazny dla początkujących po sterylizacji w kąpieli wodnej, wekowaniu ciśnieniowym, przetworach kiszonych, dżemach, sosach, bezpiecznym przechowywaniu i domowym utrwalaniu żywności. Twój kompletny, nastawiony na bezpieczeństwo przewodnik po nauce domowego konserwowania żywności — od pierwszego słoika aż po w pełni zaopatrzoną spiżarnię.",
            badgeText: "GŁÓWNA KSIĄŻKA",
            badgeColor: "#C2593F", // Terracotta orange
            features: [
                "Sterylizacja w kąpieli wodnej i wekowanie ciśnieniowe",
                "Bezpieczne praktyki kuchenne i temperatury przechowywania",
                "Instrukcje krok po kroku do dżemów, sosów i warzyw"
            ],
            downloadUrl: "materials/CANNING-1-PL.pdf",
            coverImage: "assets/covers/canning_IMG1_pl.png",
            buttonText: "Pobierz główną książkę"
        },
        {
            id: "b2",
            title: "Przewodnik po kuchni z mieszankami do spiżarni o długim terminie przydatności",
            description: "Domowe mieszanki suche, słoiki z gotowymi posiłkami, mieszanki do zup, mieszanki do deserów, mieszanki przypraw i wygodne bazy spiżarniane na co dzień. Twoja kuchnia, twoje składniki, twoje zasady — bez potrzeby używania urządzenia do sterylizacji.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706", // Amber gold
            features: [
                "Domowe suche mieszanki i gotowe posiłki w słoikach",
                "Suche zupy, mieszanki deserowe i zestawy przypraw",
                "Bez potrzeby sterylizacji dla szybkiego przygotowania"
            ],
            downloadUrl: "materials/CANNING-2-PL.pdf",
            coverImage: "assets/covers/canning_IMG1_pl.png",
            buttonText: "Pobierz bonus #1"
        },
        {
            id: "b3",
            title: "Przewodnik po domowej fermentacji dla początkujących",
            description: "Proste fermentowane warzywa, kiszona kapusta, pikle, przepisy podobne do kimchi, solanka, przyprawy, napoje fermentowane, rozwiązywanie problemów i bezpieczne praktyki w kuchni. Tradycyjna, praktyczna i dla początkujących.",
            badgeText: "BONUS #2",
            badgeColor: "#5A7A56", // Olive green
            features: [
                "Przepisy na kiszoną kapustę, kiszonki i kimchi",
                "Proporcje solanki, zestawy przypraw i fermentowane napoje",
                "Rozwiązywanie problemów i tradycyjne, bezpieczne metody"
            ],
            downloadUrl: "materials/CANNING-3-PL.pdf",
            coverImage: "assets/covers/canning_IMG1_pl.png",
            buttonText: "Pobierz bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2