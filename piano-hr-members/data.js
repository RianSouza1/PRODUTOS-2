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

    videos: [
    {
        "id": "v1",
        "title": "Pet prstiju: C, D, E, F, G",
        "category": "Prvi koraci",
        "description": "Pratite pet osvijetljenih tipki. Broj pokazuje kojim prstom svirati.",
        "steps": [
            "Stavite desni palac na srednji C.",
            "Svirajte C, D, E, F, G prstima 1, 2, 3, 4, 5.",
            "Vratite se preko F, E, D, C. Polako ponovite."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/01-five-fingers.mp4",
        "poster": "assets/videos/01-five-fingers.jpg"
    },
    {
        "id": "v2",
        "title": "C-dur ljestvica",
        "category": "Ljestvice",
        "description": "Ljestvica kroz jednu oktavu uzlazno i silazno, s prstometom na tipkama.",
        "steps": [
            "Uzlazno koristite prste 1, 2, 3, 1, 2, 3, 4, 5.",
            "Nakon E provucite palac ispod ruke do F.",
            "Silazno: 5, 4, 3, 2, 1, 3, 2, 1. Održavajte pravilan ritam."
        ],
        "duration": "0:36",
        "videoUrl": "assets/videos/02-c-major-scale.mp4",
        "poster": "assets/videos/02-c-major-scale.jpg"
    },
    {
        "id": "v3",
        "title": "Vaš prvi akord: C-dur",
        "category": "Akordi",
        "description": "Poslušajte tonove C-dur akorda najprije pojedinačno, a zatim zajedno.",
        "steps": [
            "Stavite palac na C, srednji prst na E i mali prst na G.",
            "Svirajte tri tona jedan po jedan.",
            "Pritisnite C, E i G zajedno prstima 1, 3 i 5."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/03-c-major-chord.mp4",
        "poster": "assets/videos/03-c-major-chord.jpg"
    },
    {
        "id": "v4",
        "title": "Arpeggio u C-duru",
        "category": "Arpeggia",
        "description": "Svirajte akord kao arpeggio: C, E, G, visoki C, pa natrag.",
        "steps": [
            "Za C, E, G i visoki C koristite prste 1, 2, 3 i 5.",
            "Slušajte svaki ton i opustite ruku.",
            "Vratite se preko G, E, C prstima 3, 2, 1."
        ],
        "duration": "0:27",
        "videoUrl": "assets/videos/04-c-major-arpeggio.mp4",
        "poster": "assets/videos/04-c-major-arpeggio.jpg"
    },
    {
        "id": "v5",
        "title": "Promjena akorda: C, F, G",
        "category": "Akordi",
        "description": "Promatrajte tri položaja akorda i polako prelazite iz jednog u drugi.",
        "steps": [
            "Svirajte C-dur: C, E, G.",
            "Prijeđite na F-dur: F, A, C; zatim G-dur: G, H, D.",
            "Za svaki akord koristite prste 1, 3 i 5. Završite C-durom."
        ],
        "duration": "0:26",
        "videoUrl": "assets/videos/05-chord-changes.mp4",
        "poster": "assets/videos/05-chord-changes.jpg"
    },
    {
        "id": "v6",
        "title": "Obje ruke zajedno",
        "category": "Koordinacija",
        "description": "Desna ruka svira pet tonova, a lijeva prati tonovima C i G.",
        "steps": [
            "Pripremite desnu ruku na srednjem C i lijevu na dubokom C.",
            "Desna svira C, D, E, F, G, F, E, D, C.",
            "Lijeva drži C četiri dobe, zatim G četiri dobe. Završite na C."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/06-hands-together.mp4",
        "poster": "assets/videos/06-hands-together.jpg"
    }
],

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

/* Localized interface for the piano demonstrations. */
APP_DATA.videoUI = {
    "label": "Videozapisi",
    "homeTitle": "Pokazni videozapisi",
    "homeText": "Šest kratkih vježbi uz samo zvuk klavira",
    "heading": "Gledajte, slušajte i pokušajte",
    "intro": "Šest kratkih animiranih prikaza. Pratite osvijetljene tipke i brojeve prstiju. Čuje se samo klavir, bez govora ili glasova u pozadini.",
    "demo": "Prikaz",
    "of": "od",
    "sound": "Samo klavir",
    "unsupported": "Vaš preglednik ne podržava ovaj videozapis.",
    "open": "Otvori prikaz",
    "speed": "Brzina reprodukcije",
    "replay": "Počni ponovno",
    "practice": "Pokušajte sami",
    "choose": "Odaberite prikaz",
    "fingers": "Prsti",
    "fingerNames": [
        "palac",
        "kažiprst",
        "srednji prst",
        "prstenjak",
        "mali prst"
    ],
    "creditsLabel": "Zvukovi",
    "creditsAdapted": "prilagođeni za vježbe",
    "loadError": "Videozapis se nije mogao učitati. Osvježite stranicu ili pokušajte ponovno malo kasnije.",
    "playHint": "Pritisnite gumb za reprodukciju kako biste započeli."
};
