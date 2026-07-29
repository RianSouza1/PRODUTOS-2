/**
 * Godzina z Jezusem — Strefa Członkowska (Polski)
 */

const APP_DATA = {
    config: {
        brandName: "Godzina z Jezusem",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pytanie dotyczące dostępu (Godzina z Jezusem)",
        emailBodyTemplate: "Witaj wsparcie! Chciałbym poprosić o pomoc w uzyskaniu dostępu do strefy członkowskiej Godzina z Jezusem.\n\nMoje imię to: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Księga 1: Psalmy od 1 do 50 — Od schronienia do zaufania",
            description: "Codzienne rozważania na temat każdego psalmu (od 1 do 50). Odkryj schronienie, pocieszenie i siłę w Słowie Bożym każdego dnia.",
            badgeText: "Księga 1",
            badgeColor: "#B45309",
            features: [
                "Rozważania dla psalmów 1-50",
                "Codzienne inspiracje i modlitwy",
                "Format PDF gotowy do druku"
            ],
            downloadUrl: "materials/Book1_Psalms_1-50_PL_FINAL.pdf",
            coverImage: "assets/covers/sal_IMG1_pl.png",
            buttonText: "Pobierz Księgę 1 (PDF)"
        },
        {
            id: "b2",
            title: "Księga 2: Psalmy od 51 do 100 — Od przebaczenia do pochwały",
            description: "Codzienne rozważania na temat każdego psalmu (od 51 do 100). Doświadcz uzdrawiającej mocy Bożego przebaczenia i chwały.",
            badgeText: "Księga 2",
            badgeColor: "#B45309",
            features: [
                "Rozważania dla psalmów 51-100",
                "Codzienne inspiracje i modlitwy",
                "Format PDF gotowy do druku"
            ],
            downloadUrl: "materials/Book2_Psalms_51-100_PL_FINAL.pdf",
            coverImage: "assets/covers/sal_IMG1_pl.png",
            buttonText: "Pobierz Księgę 2 (PDF)"
        },
        {
            id: "b3",
            title: "Księga 3: Psalmy od 101 do 150 — Od mądrości do świętowania",
            description: "Codzienne rozważania na temat każdego psalmu (od 101 do 150). Wejdź na ścieżkę Bożej mądrości i radosnego świętowania Jego obecności.",
            badgeText: "Księga 3",
            badgeColor: "#B45309",
            features: [
                "Rozważania dla psalmów 101-150",
                "Codzienne inspiracje i modlitwy",
                "Format PDF gotowy do druku"
            ],
            downloadUrl: "materials/Book3_Psalms_101-150_PL_FINAL.pdf",
            coverImage: "assets/covers/sal_IMG1_pl.png",
            buttonText: "Pobierz Księgę 3 (PDF)"
        }
    ],

    otherProducts: []
};
