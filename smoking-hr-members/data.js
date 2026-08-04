/**
 * Dimljenje Mesa & Roštilj — Korisničko područje (Hrvatski)
 */

const APP_DATA = {
    config: {
        brandName: "Dimljenje Mesa & Roštilj",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Upit za podršku u vezi pristupa (Dimljenje Mesa & Roštilj)",
        emailBodyTemplate: "Pozdrav timu za podršku! Želio/želja bih zatražiti pomoć u vezi mog pristupa korisničkom području Dimljenje Mesa & Roštilj.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Dimljenje Mesa za Početnike — Izdanje 2026",
            description: "Savladajte Vatru, Dim, Temperaturu i Sočnost Kod Kuće. Jasan i jednostavan vodič korak po korak u udobnosti vašeg doma za pripremu savršenog dimljenog mesa.",
            badgeText: "Glavna knjiga",
            badgeColor: "#BF360C",
            features: [
                "Precizna kontrola vatre, dima i temperature",
                "Detaljne upute korak po korak za početnike",
                "Praktični savjeti za dimljenje mesa kod kuće"
            ],
            downloadUrl: "materials/SMOKING-1-HR.pdf",
            coverImage: "assets/covers/smo_IMG1_hr.png",
            buttonText: "Preuzmite Glavnu knjigu (PDF)"
        },
        {
            id: "b2",
            title: "Recepti za Roštilj i BBQ — Izdanje 2026",
            description: "Ukusna Dimljena Mesa, Prilozi i Kompletni Jelovnici za Roštilj za obiteljska okupljanja, rođendane, sportske događaje i nezaboravne zabave u dvorištu.",
            badgeText: "Bonus #1",
            badgeColor: "#8D6E63",
            features: [
                "Najbolji tradicionalni recepti za dimljeno meso",
                "Klasični prilozi u stilu BBQ-a",
                "Kompletni jelovnici za svaku prigodu"
            ],
            downloadUrl: "materials/SMOKING-2-HR.pdf",
            coverImage: "assets/covers/smo_IMG1_hr.png",
            buttonText: "Preuzmite Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "BBQ Začini, Umaci i Marinade — Izdanje 2026",
            description: "Stvorite Izražajne i Uravnotežene Okuse za Svaki Komad Mesa. Savršeni vodič koji vašim jelima daje neodoljiv i bogat okus.",
            badgeText: "Bonus #2",
            badgeColor: "#E64A19",
            features: [
                "Tajni recepti za vrhunske mješavine začina i dry rubs",
                "Ukusni umaci i marinade za svaku vrstu mesa",
                "Tehnike maksimiziranja okusa za majstore roštilja"
            ],
            downloadUrl: "materials/SMOKING-3-HR.pdf",
            coverImage: "assets/covers/smo_IMG1_hr.png",
            buttonText: "Preuzmite Bonus #2 (PDF)"
        }
    ],

    otherProducts: []
};
