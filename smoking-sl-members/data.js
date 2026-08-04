/**
 * Dimljenje Mesa in BBQ — Območje za člane (Slovenščina)
 */

const APP_DATA = {
    config: {
        brandName: "Dimljenje Mesa in BBQ",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Zahteva za podporo glede dostopa (Dimljenje Mesa in BBQ)",
        emailBodyTemplate: "Pozdravljena ekipa za podporo! Želel/a bi zaprositi za pomoč glede mojega dostopa do območja za člane Dimljenje Mesa in BBQ.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Dimljenje Mesa za Začetnike — Izdaja 2026",
            description: "Obvladajte Ogenj, Dim, Temperaturo in Sočnost Doma. Jasen in preprost vodnik korak za korakom v udobju vašega doma za pripravo popolnega dimljenega mesa.",
            badgeText: "Glavna knjiga",
            badgeColor: "#BF360C",
            features: [
                "Natančen nadzor ognja, dima in temperature",
                "Podrobna navodila korak za korakom za začetnike",
                "Praktični nasveti za dimljenje mesa doma"
            ],
            downloadUrl: "materials/SMOKING-1-SL.pdf",
            coverImage: "assets/covers/smo_IMG1_sl.png",
            buttonText: "Prenesi Glavno knjigo (PDF)"
        },
        {
            id: "b2",
            title: "Recepti za Piknik in BBQ — Izdaja 2026",
            description: "Okusno Dimljeno Meso, Priloge in Popolni Meniji za Piknik za družinska srečanja, rojstne dneve, športne dogodke in nepozabne zabave na vrtu.",
            badgeText: "Bonus #1",
            badgeColor: "#8D6E63",
            features: [
                "Najboljši tradicionalni recepti za dimljeno meso",
                "Klasične priloge v stilu ameriškega BBQ",
                "Popolni meniji primerni za vsako priložnost"
            ],
            downloadUrl: "materials/SMOKING-2-SL.pdf",
            coverImage: "assets/covers/smo_IMG1_sl.png",
            buttonText: "Prenesi Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "BBQ Začimbe, Omake in Marinade — Izdaja 2026",
            description: "Ustvarite Izrazite in Uravnotežene Okuse za Vsak Kos Mesa. Popolni vodnik za dodajanje neustavljivega okusa vašim jedem.",
            badgeText: "Bonus #2",
            badgeColor: "#E64A19",
            features: [
                "Skrivni recepti za vrhunske mešanice začimb in dry rubs",
                "Okusne omake in marinade za vsako vrsto mesa",
                "Tehnike maksimiranja okusa za mojstre žara"
            ],
            downloadUrl: "materials/SMOKING-3-SL.pdf",
            coverImage: "assets/covers/smo_IMG1_sl.png",
            buttonText: "Prenesi Bonus #2 (PDF)"
        }
    ],

    otherProducts: []
};
