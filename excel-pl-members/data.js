/**
 * Excel Mastery — Dane obszaru członkowskiego (Polski)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Zapytanie dotyczące dostępu (Excel Mastery)",
        emailBodyTemplate: "Cześć zespole wsparcia! Potrzebuję pomocy z dostępem do mojego obszaru członkowskiego Excel Mastery.\n\nMoje imię to: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Excel od zera do profesjonalisty — Wydanie 2026",
            description: "Praktyczny poradnik dla początkujących o arkuszach kalkulacyjnych, organizacji i codziennej produktywności. Ucz się Excela krok po kroku, od pierwszej komórki po zaawansowane narzędzia.",
            badgeText: "GŁÓWNA KSIĄŻKA",
            badgeColor: "#1a7a45",
            features: [
                "Arkusze kalkulacyjne i organizacja danych dla początkujących",
                "Codzienna produktywność i zarządzanie listami klientów",
                "Śledzenie finansów i planowanie kalendarza w Excelu"
            ],
            downloadUrl: "materials/Excel-1-PL.pdf",
            coverImage: "assets/covers/excel_IMG1_pl.png",
            buttonText: "Pobierz główną książkę"
        },
        {
            id: "b2",
            title: "Formuły Excela, funkcje i inteligentne przepływy pracy — Wydanie 2026",
            description: "Praktyczny przewodnik, jak szybciej rozwiązywać problemy w Excelu. Zamień prostą tabelę w prawdziwe narzędzie do rozwiązywania problemów za pomocą formuł i funkcji.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Formuły i funkcje na poziomie zaawansowanym",
                "Automatyczne obliczenia i inteligentne przepływy pracy",
                "Szybsze rozwiązywanie problemów w Excelu"
            ],
            downloadUrl: "materials/Excel-2-PL.pdf",
            coverImage: "assets/covers/excel_IMG1_pl.png",
            buttonText: "Pobierz bonus #1"
        },
        {
            id: "b3",
            title: "Panele Excel, raporty i tabele przestawne — Edycja 2026",
            description: "Praktyczny przewodnik po przekształcaniu danych in przejrzyste, profesjonalne raporty. Dowiedz się, jak skutecznie prezentować swoje dane za pomocą paneli i raportów.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Profesjonalne panele kontrolne i wizualne",
                "Raporty podsumowujące i tabele przestawne",
                "Prezentacja danych przełożonym, klientom i zespołowi"
            ],
            downloadUrl: "materials/Excel-3-PL.pdf",
            coverImage: "assets/covers/excel_IMG1_pl.png",
            buttonText: "Pobierz bonus #2"
        }
    ],

    otherProducts: []
};
