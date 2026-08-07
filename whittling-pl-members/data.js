/**
 * Rzeźbienie w Drewnie & Rękodzieło — Strefa Członkowska (Polski)
 */

const APP_DATA = {
    config: {
        brandName: "Rzeźbienie w Drewnie & Rękodzieło",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pytanie dotyczące dostępu (Rzeźbienie w Drewnie & Rękodzieło)",
        emailBodyTemplate: "Cześć Zespole Pomocy! Chciałbym prosić o pomoc w dostępie do strefy członkowskiej Rzeźbienie w Drewnie & Rękodzieło.\n\nMoje imię to: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Rzeźbienie w Drewnie dla Początkujących — Narzędzia, Bezpieczeństwo i Pierwsze Łatwe Projekty",
            description: "Kompletny, praktyczny przewodnik krok po kroku po bezpiecznym ręcznym rzeźbieniu w drewnie dla początkujących.",
            badgeText: "Tom 1",
            badgeColor: "#475569",
            features: [
                "Podstawowe zasady bezpieczeństwa i sprzęt ochronny",
                "Jak prawidłowo odczytywać układ słojów drewna",
                "Twój pierwszy prosty projekt rzeźbiarski"
            ],
            downloadUrl: "materials/WHITTLING-1-PL.pdf",
            coverImage: "assets/covers/whi_IMG1_pl.png",
            buttonText: "Pobierz Tom 1 (PDF)"
        },
        {
            id: "b2",
            title: "Łatwe Projekty Rzeźbiarskie w Drewnie — Umiejętności i Techniki Krok po Kroku",
            description: "Kontynuacja Tomu 1 — od prostych cięć geometrycznych po ekspresyjne drewniane figurki dzięki ustrukturyzowanym projektom.",
            badgeText: "Główny Przewodnik",
            badgeColor: "#8B5A2B",
            features: [
                "Jedenasty szczegółowych projektów rzeźbiarskich w drewnie",
                "Skalowanie szablonów i przenoszenie ich na drewno",
                "Sposoby na kontrolę symetrii i kształtów"
            ],
            downloadUrl: "materials/WHITTLING-2-PL.pdf",
            coverImage: "assets/covers/whi_IMG1_pl.png",
            buttonText: "Pobierz Główny Przewodnik (Tom 2)"
        },
        {
            id: "b3",
            title: "Rzeźbienie w Drewnie: Wykończenie i Doskonalenie — Ostrzenie, Detale i Obróbka Powierzchni",
            description: "Ostrzenie, rzeźbienie precyzyjne, obróbka powierzchni i wykończenie na najwyższym poziomie. Tom 3 z 3 pełnej kolekcji.",
            badgeText: "Tom 3",
            badgeColor: "#2E5A44",
            features: [
                "Praca nad detalami oraz techniki ostrzenia noży",
                "Wybór wykończeń, olejów i wosków",
                "Jak osiągnąć idealny efekt końcowy"
            ],
            downloadUrl: "materials/WHITTLING-3-PL.pdf",
            coverImage: "assets/covers/whi_IMG1_pl.png",
            buttonText: "Pobierz Tom 3 (PDF)"
        }
    ],

    otherProducts: []
};
