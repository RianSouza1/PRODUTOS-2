/**
 * Pilates & Dobrostan — Strefa Członkowska (Polski)
 */

const APP_DATA = {
    config: {
        brandName: "Pilates & Dobrostan",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pytanie dotyczące dostępu (Pilates & Dobrostan)",
        emailBodyTemplate: "Dzień dobry, zespole wsparcia. Chciałbym/chciałabym uzyskać pomoc w dostępie do strefy członkowskiej Pilates & Dobrostan.\n\nMoje imię i nazwisko: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Pilates dla Początkujących — Edycja 2026",
            description: "Prosty, krok po kroku przewodnik po sile, elastyczności i bezpieczeństwie w domu. Stworzony, aby pomóc Ci stać się silniejszym i bardziej elastycznym we własnym tempie.",
            badgeText: "Główny materiał",
            badgeColor: "#C07A68",
            features: [
                "Opracowane krok po kroku ćwiczenia dla początkujących w domu",
                "Poprawa postawy ciała, elastyczności i siły mięśni głębokich",
                "Bezpieczny ruch bez nadmiernego obciążenia"
            ],
            downloadUrl: "materials/PILATES-1-PL.pdf",
            coverImage: "assets/covers/pil_IMG1_pl.png",
            buttonText: "Pobierz główny materiał"
        },
        {
            id: "b2",
            title: "Wall Pilates — Edycja 2026",
            description: "Delikatne, wspierające ćwiczenia na siłę, równowagę i mobilność w domu. Użyj ściany jako partnera, aby poprawić postawę i wzmocnić ciało.",
            badgeText: "Bonus #1",
            badgeColor: "#5B8C7D",
            features: [
                "Wykorzystaj ścianę dla lepszej równowagi i wsparcia",
                "Łagodne ćwiczenia mobilizujące dla całego ciała",
                "Idealne do treningu w domu bez specjalistycznego sprzętu"
            ],
            downloadUrl: "materials/PILATES-2-PL.pdf",
            coverImage: "assets/covers/pil_IMG1_pl.png",
            buttonText: "Pobierz bonus #1"
        },
        {
            id: "b3",
            title: "30 Dni Pilatesu dla Seniorów — Edycja 2026",
            description: "Delikatny codzienny plan na siłę, równowagę, mobilność i pewność siebie. Zaprojektowany specjalnie dla osób starszych, które chcą pozostać bezpiecznie aktywne.",
            badgeText: "Bonus #2",
            badgeColor: "#9C6A88",
            features: [
                "Kompletny program 30-dniowy z codziennymi łagodnymi sesjami",
                "Skupienie na równowadze, ruchomości stawów i energii",
                "Bezpieczne wykonywanie ćwiczeń w domu na każdym poziomie"
            ],
            downloadUrl: "materials/PILATES-3-PL.pdf",
            coverImage: "assets/covers/pil_IMG1_pl.png",
            buttonText: "Pobierz bonus #2"
        }
    ],

    otherProducts: []
};
