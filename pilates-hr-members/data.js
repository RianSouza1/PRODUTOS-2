/**
 * Pilates i Zdravlje — Članska Zona (Hrvatski)
 */

const APP_DATA = {
    config: {
        brandName: "Pilates i Zdravlje",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Upit u vezi s pristupom (Pilates i Zdravlje)",
        emailBodyTemplate: "Poštovani timu za podršku! Želio bih pomoć u vezi s mojim pristupom članskoj zoni Pilates i Zdravlje.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Pilates za početnike — Izdanje 2026",
            description: "Vlastitim tempom, bez žurbe. Korak po korak gradiš snagu, fleksibilnost i samopouzdanje u ugodi svoga doma. Dizajnirano kako bi vam pomoglo da postanete snažniji i fleksibilniji.",
            badgeText: "Glavni Materijal",
            badgeColor: "#C07A68",
            features: [
                "Vježbe korak-po-korak za početnike kod kuće",
                "Poboljšajte držanje tijela, fleksibilnost i snagu trupa",
                "Sigurni pokreti bez prekomjernog napora"
            ],
            downloadUrl: "materials/PILATES-1-HR.pdf",
            coverImage: "assets/covers/pil_IMG1_hr.png",
            buttonText: "Preuzmi Glavni Materijal"
        },
        {
            id: "b2",
            title: "Pilates uz zid — Izdanje 2026",
            description: "Blage vježbe kod kuće koje prirodno jačaju Vašu snagu, ravnotežu i pokretljivost. Koristite zid kao oslonac za korekciju držanja i jačanje tijela.",
            badgeText: "Bonus #1",
            badgeColor: "#5B8C7D",
            features: [
                "Koristite zid za bolju ravnotežu i podršku",
                "Blage vježbe pokretljivosti za cijelo tijelo",
                "Idealno za trening kod kuće bez posebne opreme"
            ],
            downloadUrl: "materials/PILATES-2-HR.pdf",
            coverImage: "assets/covers/pil_IMG1_hr.png",
            buttonText: "Preuzmi Bonus #1"
        },
        {
            id: "b3",
            title: "30-dnevni program pilatesa za zlatnu dob — Izdanje 2026",
            description: "Nježan i svakodnevni program koji će vas pratiti korak po korak, vašim tempom i u miru — kako biste postupno izgradili snagu, ravnotežu, fleksibilnost i povjerenje u vlastito tijelo.",
            badgeText: "Bonus #2",
            badgeColor: "#9C6A88",
            features: [
                "Cjeloviti 30-dnevni kalendar s blagim svakodnevnim treninzima",
                "Fokus na ravnotežu, pokretljivost zglobova i povećanje energije",
                "Sigurno za izvođenje kod kuće za bilo koju razinu kondicije"
            ],
            downloadUrl: "materials/PILATES-3-HR.pdf",
            coverImage: "assets/covers/pil_IMG1_hr.png",
            buttonText: "Preuzmi Bonus #2"
        }
    ],

    otherProducts: []
};
