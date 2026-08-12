/**
 * Akustična Gitara — Korisničko Područje (Hrvatski)
 */

const APP_DATA = {
    config: {
        brandName: "Akustična Gitara",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Upit o pristupu (Akustična Gitara)",
        emailBodyTemplate: "Pozdrav timu za podršku! Želim zatražiti pomoć s pristupom korisničkom području za Akustičnu Gitaru.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            id: "v1",
            title: "Osnovni Akordi za Gitaru — Akord G (Bez Govora)",
            duration: "Početnici • Vizualni prikaz uzoraka prstiju",
            youtubeId: "ES428uOSZ68"
        },
        {
            id: "v2",
            title: "Brze Izmjene Akorda — Vježba za Početnike (Bez Govora)",
            duration: "Početnici • Vježba prstiju i ritma",
            youtubeId: "-lLcxTp9dAg"
        },
        {
            id: "v3",
            title: "Ritam i Pratnja na Gitari — Korak po Korak (Bez Govora)",
            duration: "Početnici • Vježba ritmičkog okidanja",
            youtubeId: "1DPd5zkh1r0"
        },
        {
            id: "v4",
            title: "Čitanje Gitarskih Tablatura i Akorda (Bez Govora)",
            duration: "Početnici • Jednostavna lekcija",
            youtubeId: "bpvLZpcIwZk"
        },
        {
            id: "v5",
            title: "Tehnika Sviranja Prstima — Fingerstyle (Bez Govora)",
            duration: "Napredni • Ugodan zvuk gitare",
            youtubeId: "_aOFJ0WuwQE"
        }
    ],

    books: [
        {
            id: "b1",
            title: "Osnove Gitare za Početnike — Akordi, Ritam i Prve Pjesme",
            description: "Potpuni i praktični korak-po-korak vodič za apsolutne početnike u sviranju akustične gitare.",
            badgeText: "Dio 1",
            badgeColor: "#475569",
            features: [
                "Osnovni hvatovi i postavljanje prstiju na žice",
                "Pravilno držanje gitare i ritmičko okidanje",
                "Vaša prva pjesma u samo nekoliko minuta"
            ],
            downloadUrl: "materials/GUITAR-1-HR.pdf",
            coverImage: "assets/covers/gui_IMG1_hr.png",
            buttonText: "Preuzmi Dio 1 (PDF)"
        },
        {
            id: "b2",
            title: "Sadrži Sve Akorde i Ritmove — Korak po Korak do Samostalnog Sviranja",
            description: "Nastavak osnova — od jednostavnih izmjena akorda do tečnog sviranja cijelih pjesama.",
            badgeText: "Glavni Vodič",
            badgeColor: "#8B5A2B",
            features: [
                "Cjelovita zbirka osnovnih i naprednih akorda",
                "Trikovi za brzu i glatku izmjenu akorda",
                "Različiti uzorci ritma za pratnju"
            ],
            downloadUrl: "materials/GUITAR-2-HR.pdf",
            coverImage: "assets/covers/gui_IMG1_hr.png",
            buttonText: "Preuzmi Glavni Vodič (Dio 2)"
        },
        {
            id: "b3",
            title: "Tajne Akustične Gitare — Napredne Tehnike i Tablature",
            description: "Poboljšanje tehnike sviranja, čitanje tablatura, fingerpicking i ljepši zvuk instrumenta.",
            badgeText: "Dio 3",
            badgeColor: "#2E5A44",
            features: [
                "Tehnika sviranja prstima (fingerpicking)",
                "Jednostavno čitanje gitarskih tablatura",
                "Kako postići čist i jasan zvuk svake žice"
            ],
            downloadUrl: "materials/GUITAR-3-HR.pdf",
            coverImage: "assets/covers/gui_IMG1_hr.png",
            buttonText: "Preuzmi Dio 3 (PDF)"
        }
    ],

    otherProducts: []
};
