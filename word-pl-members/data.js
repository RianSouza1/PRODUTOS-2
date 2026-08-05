/**
 * Mistrzostwo Worda — Strefa Członkowska (Polski)
 */

const APP_DATA = {
    config: {
        brandName: "Mistrzostwo Worda",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pytanie dotyczące dostępu (Mistrzostwo Worda)",
        emailBodyTemplate: "Cześć zespole wsparcia! Chciałbym poprosić o pomoc w uzyskaniu dostępu do strefy członkowskiej Mistrzostwa Worda.\n\nMoje imię to: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Word od Zera do Profesjonalisty — Wydanie 2026 (Tom 1 z 3)",
            description: "Kompleksowy przewodnik dla początkujących – naucz się tworzyć przejrzyste, dopracowane i profesjonalnie wyglądające dokumenty w programie Microsoft Word.",
            badgeText: "Główny Podręcznik",
            badgeColor: "#2563EB",
            features: [
                "Opanuj kluczowe podstawy programu Microsoft Word",
                "Twórz doskonale ustrukturyzowane i eleganckie dokumenty",
                "Praktyczne wskazówki dotyczące codziennego zarządzania plikami"
            ],
            downloadUrl: "materials/WORD-1-PL.pdf",
            coverImage: "assets/covers/word_IMG1_pl.png",
            buttonText: "Pobierz Główny Podręcznik (PDF)"
        },
        {
            id: "b2",
            title: "Formatowanie, Style i Inteligentne Przepływy Pracy w Wordzie — Wydanie 2026 (Tom 2 z 3)",
            description: "Praktyczny przewodnik po tworzeniu spójnych, dobrze zorganizowanych i profesjonalnych dokumentów w Microsoft Word.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Używaj zaawansowanych stylów i profesjonalnego formatowania",
                "Zapewnij spójność wizualną we wszystkich swoich dokumentach",
                "Wdrażaj wydajne i inteligentne przepływy pracy"
            ],
            downloadUrl: "materials/WORD-2-PL.pdf",
            coverImage: "assets/covers/word_IMG1_pl.png",
            buttonText: "Pobierz Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "Szablony Worda, Korespondencja Seryjna i Zaawansowane Narzędzia — Wydanie 2026 (Tom 3 z 3)",
            description: "Dokumenty wielokrotnego użytku, spersonalizowana korespondencja, interaktywne formularze i inteligentna automatyzacja w programie Microsoft Word.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Projektuj szablony i interaktywne formularze wielokrotnego użytku",
                "Wykorzystuj korespondencję seryjną do masowych wysyłek",
                "Korzystaj z zaawansowanych narzędzi automatyzacji w Wordzie"
            ],
            downloadUrl: "materials/WORD-3-PL.pdf",
            coverImage: "assets/covers/word_IMG1_pl.png",
            buttonText: "Pobierz Bonus #2 (PDF)"
        }
    ],

    otherProducts: []
};
