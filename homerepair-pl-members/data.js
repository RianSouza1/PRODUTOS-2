/**
 * Naprawa i Konserwacja Domu — Strefa Członkowska (Polski)
 */

const APP_DATA = {
    config: {
        brandName: "Naprawa i Konserwacja Domu",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Zapytanie o dostęp (Naprawa i Konserwacja Domu)",
        emailBodyTemplate: "Dzień dobry, zespole wsparcia! Chciałbym poprosić o pomoc z dostępem do strefy członkowskiej Naprawa i Konserwacja Domu.\n\nMoje imię i nazwisko: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Kompletny Poradnik Remontów i Utrzymania Domu — Wydanie 2026",
            description: "Twój kompletny przewodnik po konserwacji, naprawach i remontach — realizowanych pewnie, fachowo i z takim wykończeniem, które będzie służyć przez długie lata.",
            badgeText: "Główny podręcznik",
            badgeColor: "#D97706",
            features: [
                "Instrukcje krok po kroku do niezbędnych napraw domowych",
                "Eksperckie porady dotyczące projektów konserwacyjnych",
                "Praktyczne wskazówki DIY dla trwałych rezultatów"
            ],
            downloadUrl: "materials/REPAIR-1-PL.pdf",
            coverImage: "assets/covers/rep_IMG1_pl.png",
            buttonText: "Pobierz główny podręcznik"
        },
        {
            id: "b2",
            title: "Praktyczny Przewodnik po Domowych Instalacjach Elektrycznych — Wydanie Zaktualizowane 2026",
            description: "Bezpiecznie, zgodnie z normą PN-HD 60364 / przepisami prawa budowlanego, samodzielnie i z głową. Praktyczny przewodnik po domowej elektryce.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Bezpieczne wykonywanie prac elektrycznych w domu",
                "Zgodność z normami i przepisami prawa budowlanego",
                "Instrukcje krok po kroku dla typowych instalacji"
            ],
            downloadUrl: "materials/REPAIR-2-PL.pdf",
            coverImage: "assets/covers/rep_IMG1_pl.png",
            buttonText: "Pobierz Bonus #1"
        },
        {
            id: "b3",
            title: "Kompletny Przewodnik po Instalacjach Wodno-Kanalizacyjnych w Domu — Wydanie 2026",
            description: "Naprawy, modernizacja i utrzymanie w doskonałym stanie. Twój praktyczny poradnik do konserwacji domowej instalacji wodno-kanalizacyjnej.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Diagnozowanie i usuwanie typowych problemów hydraulicznych",
                "Utrzymanie domowego systemu rurociągów w doskonałym stanie",
                "Jasne instrukcje napisane z myślą o początkujących"
            ],
            downloadUrl: "materials/REPAIR-3-PL.pdf",
            coverImage: "assets/covers/rep_IMG1_pl.png",
            buttonText: "Pobierz Bonus #2"
        }
    ],

    otherProducts: []
};
