/**
 * Mistrzostwo Excela — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Mistrzostwo Excela",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pytanie dotyczące dostępu do kursu (Excel)",
        emailBodyTemplate: "Witaj zespole wsparcia! Chciałbym otrzymać pomoc w związku z moją strefą członkowską Excela.%0A%0AMoje imię to: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Microsoft Excel — Podręcznik",
            description: "Kompleksowy podręcznik do programu Microsoft Excel. Poznaj wszystkie funkcje od A do Z.",
            badgeText: "GŁÓWNY PODRĘCZNIK",
            badgeColor: "#047857",
            features: ["Kompleksowy podręcznik", "Wyjaśnienie wszystkich funkcji", "Dla początkujących i zaawansowanych"],
            downloadUrl: "materials/Excel-1-PL.pdf",
            coverImage: "assets/covers/cover_excel_handbuch.png",
            buttonText: "Pobierz książkę"
        },
        {
            id: "b2",
            title: "Excel — Zaawansowane techniki",
            description: "Cenne wskazówki praktyczne, skróty klawiszowe i zaawansowane techniki dla użytkowników programu Excel.",
            badgeText: "WSKAZÓWKI PRAKTYCZNE",
            badgeColor: "#3B82F6",
            features: ["Skróty klawiszowe i triki", "Techniki praktyczne", "Zwiększenie wydajności"],
            downloadUrl: "materials/Excel-2-PL.pdf",
            coverImage: "assets/covers/cover_tipps_fortgeschrittene.png",
            buttonText: "Pobierz poradnik"
        },
        {
            id: "b3",
            title: "Zaawansowane ćwiczenia z Excela",
            description: "Opanuj swoje umiejętności w programie Excel dzięki temu obszernemu zeszytowi ćwiczeń dla zaawansowanych.",
            badgeText: "ZESZYT ĆWICZEŃ",
            badgeColor: "#047857",
            features: ["Wiele zadań ćwiczeniowych", "Dla zaawansowanych", "Praktyczne przykłady"],
            downloadUrl: "materials/Excel-3-PL.pdf",
            coverImage: "assets/covers/cover_fortgeschrittene_uebungen.png",
            buttonText: "Pobierz zeszyt ćwiczeń"
        }
    ],

    otherProducts: []
};
