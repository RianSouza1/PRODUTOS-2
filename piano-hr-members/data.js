/**
 * Potpuna Kolekcija za Klavir — Korisničko Područje (Hrvatski)
 */

const APP_DATA = {
    config: {
        brandName: "Potpuna Kolekcija za Klavir",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Zahtjev za podršku – pristup (Potpuna Kolekcija za Klavir)",
        emailBodyTemplate: "Pozdrav timu za podršku! Želio/željela bih zatražiti pomoć u vezi s pristupom korisničkom području Potpuna Kolekcija za Klavir.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Klavir za Apsolutne Početnike — Knjiga 1 od 3",
            description: "Tipke, akordi i tvoji prvi komadi. Upoznaj klavijaturu, nauči čitati prve note, razumij osnove glazbene teorije i sviraj svoje prve pjesme korak po korak.",
            badgeText: "Vodič za Početnike",
            badgeColor: "#1b2a38",
            features: [
                "Upoznavanje klavijature, pravilan položaj tijela i ruku te čitanje nota",
                "Postupno vođenje kroz prve akorde, ljestvice i ritmove",
                "Sviranje stvarnih i lijepih klavirskih skladbi od samog početka"
            ],
            downloadUrl: "materials/PIANO-1-HR.pdf",
            coverImage: "assets/covers/piano_IMG1_hr.png",
            buttonText: "Preuzmi Vodič za Početnike (PDF)"
        },
        {
            id: "b2",
            title: "Jednostavni Komadi za Klavir — Knjiga 2 od 3",
            description: "Korak po korak prema ritmu, koordinaciji i pravoj radosti sviranja. Od prve jednostavne melodije do sigurnog sviranja s obje ruke — inspirativna zbirka repertoara za odrasle početnike.",
            badgeText: "Lagane Skladbe",
            badgeColor: "#4a5568",
            features: [
                "Prekrasne skladbe posebno prilagođene za početnike",
                "Razvoj koordinacije obje ruke i glatki prijelazi među akordima",
                "Poznate melodije i klasična remek-djela koja savladavaš korak po korak"
            ],
            downloadUrl: "materials/PIANO-2-HR.pdf",
            coverImage: "assets/covers/piano_IMG1_hr.png",
            buttonText: "Preuzmi Zbirku Skladbi (PDF)"
        },
        {
            id: "b3",
            title: "Izazov 30 Dana na Klaviru — Knjiga 3 od 3",
            description: "Svakodnevni strukturirani program za razvoj osjećaja za ritam, samopouzdanje i naviku vježbanja. 20 minuta dnevno za poboljšanje čitanja nota, koordinacije i tečnosti u sviranju.",
            badgeText: "30-Dnevni Izazov",
            badgeColor: "#6b1d2f",
            features: [
                "30 strukturiranih dana s 20 minuta ciljanog dnevnog vježbanja",
                "Vježbe za prepoznavanje nota, metronomski ritam i koordinaciju ruku",
                "Stvaranje trajne, inspirativne i učinkovite rutine sviranja"
            ],
            downloadUrl: "materials/PIANO-3-HR.pdf",
            coverImage: "assets/covers/piano_IMG1_hr.png",
            buttonText: "Preuzmi 30-Dnevni Izazov (PDF)"
        }
    ],

    otherProducts: []
};
