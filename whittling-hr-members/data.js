/**
 * Rezbarenje & Ručna Izrada od Drva — Korisničko Područje (Hrvatski)
 */

const APP_DATA = {
    config: {
        brandName: "Rezbarenje & Ručna Izrada od Drva",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Upit o pristupu (Rezbarenje & Ručna Izrada od Drva)",
        emailBodyTemplate: "Pozdrav timu za podršku! Želio/željela bih zatražiti pomoć u vezi s pristupom korisničkom području Rezbarenje & Ručna Izrada od Drva.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Rezbarenje Drva za Početnike — Alati, Sigurnost & Prvi Jednostavni Projekti",
            description: "Potpuni i praktični vodič korak po korak za siguran početak ručnog rezbarenja drva.",
            badgeText: "Svezak 1",
            badgeColor: "#475569",
            features: [
                "Osnovna sigurnosna pravila i zaštitna oprema",
                "Kako pravilno čitati teksturu i vlakna drva",
                "Vaš prvi jednostavni projekt rezbarenja"
            ],
            downloadUrl: "materials/WHITTLING-1-HR.pdf",
            coverImage: "assets/covers/whi_IMG1_hr.png",
            buttonText: "Preuzmi Svezak 1 (PDF)"
        },
        {
            id: "b2",
            title: "Jednostavni Projekti Rezbarenja Drva — Vještine i Tehnike Korak po Korak",
            description: "Nastavak Sveska 1 — od jednostavnih geometrijskih rezova do izražajnih drvenih figurica kroz strukturirane projekte.",
            badgeText: "Glavni Vodič",
            badgeColor: "#8B5A2B",
            features: [
                "Jedanaest detaljnih projekata rezbarenja drva",
                "Prilagodba veličine predložaka i prijenos na drvo",
                "Savjeti za kontrolu simetrije i oblika"
            ],
            downloadUrl: "materials/WHITTLING-2-HR.pdf",
            coverImage: "assets/covers/whi_IMG1_hr.png",
            buttonText: "Preuzmi Glavni Vodič (Svezak 2)"
        },
        {
            id: "b3",
            title: "Rezbarenje Drva: Završna Obrada & Dotjerivanje — Oštrenje, Detalji & Obrada Površine",
            description: "Oštrenje, precizno rezbarenje detalja, obrada površine i besprijekorni rezultati. Svezak 3 od 3 kompletne kolekcije.",
            badgeText: "Svezak 3",
            badgeColor: "#2E5A44",
            features: [
                "Tehnike izrade finih detalja i oštrenja noževa",
                "Odabir završnih premaza, ulja i voskova",
                "Kako postići savršen konačni izgled"
            ],
            downloadUrl: "materials/WHITTLING-3-HR.pdf",
            coverImage: "assets/covers/whi_IMG1_hr.png",
            buttonText: "Preuzmi Svezak 3 (PDF)"
        }
    ],

    otherProducts: []
};
