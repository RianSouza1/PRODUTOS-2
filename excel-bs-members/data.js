/**
 * Excel Mastery — Članska zona (Bosanski)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pitanje u vezi s pristupom (Excel Mastery)",
        emailBodyTemplate: "Zdravo timu podrške. Želio/željela bih dobiti pomoć s mojim pristupom členskoj zoni Excel Mastery.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Od nule do „Excel” profesionalca — Izdanje za 2026. godinu",
            description: "Praktični vodič za početnike koji obuhvata proračunske tabele, organizaciju i svakodnevnu produktivnost. Od prve ćelije do naprednih alata.",
            badgeText: "Glavni materijal",
            badgeColor: "#1a7a45",
            features: [
                "Proračunske tabele i organizacija podataka za početnike",
                "Svakodnevna produktivnost i upravljanje klijentima",
                "Sređivanje ličnih finansija i planiranje vremena"
            ],
            downloadUrl: "materials/Excel-1-BS.pdf",
            coverImage: "assets/covers/excel_IMG1_bs.png",
            buttonText: "Preuzmi glavni materijal"
        },
        {
            id: "b2",
            title: "„Excel” funkcije, operacije i pametni radni tokovi — Izdanje za 2026. godinu",
            description: "Praktični vodič za brže rješavanje zadataka u programu „Excel”. Pretvorite obične tabele u moćne alate za rješavanje problema.",
            badgeText: "Bonus #1",
            badgeColor: "#D97706",
            features: [
                "Formule, funkcije i operacije u Excelu",
                "Automatsko preračunavanje i pametni radni tokovi",
                "Brže rješavanje svakodnevnih zadataka"
            ],
            downloadUrl: "materials/Excel-2-BS.pdf",
            coverImage: "assets/covers/excel_IMG1_bs.png",
            buttonText: "Preuzmi bonus #1"
        },
        {
            id: "b3",
            title: "Bez Excela za proračune, izvještaje, formule — Izdanje za 2026. godinu",
            description: "Praktični vodič za pretvaranje podataka u jasne i profesionalne izvještaje. Naučite kako ih efikasno prezentirati menadžeru, klijentu ili timu.",
            badgeText: "Bonus #2",
            badgeColor: "#7C3AED",
            features: [
                "Pretvaranje podataka u jasne i profesionalne izvještaje",
                "Izrada grafikona i vizualizacija podataka",
                "Prezentovanje izvještaja menadžeru, klijentu ili timu"
            ],
            downloadUrl: "materials/Excel-3-BS.pdf",
            coverImage: "assets/covers/excel_IMG1_bs.png",
            buttonText: "Preuzmi bonus #2"
        }
    ],

    otherProducts: []
};
