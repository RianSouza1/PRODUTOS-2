/**
 * A Teljes Zongoragyűjtemény — Tagi Terület (Magyar)
 */

const APP_DATA = {
    config: {
        brandName: "A Teljes Zongoragyűjtemény",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Támogatási kérelem – hozzáférés (A Teljes Zongoragyűjtemény)",
        emailBodyTemplate: "Kedves Ügyfélszolgálat! Szeretnék segítséget kérni a hozzáférésemmel kapcsolatban A Teljes Zongoragyűjtemény tagi felületéhez.\n\nA nevem: ______.",
        showFloatingHelp: true
    },

    videos: [
    {
        "id": "v1",
        "title": "Öt ujj: C, D, E, F, G",
        "category": "Első lépések",
        "description": "Kövesd az öt kiemelt billentyűt. A szám mutatja, melyik ujjat használd.",
        "steps": [
            "Tedd a jobb hüvelykujjadat a középső C-re.",
            "Játszd a C, D, E, F, G hangokat az 1, 2, 3, 4, 5 ujjakkal.",
            "Haladj vissza az F, E, D, C hangokon. Ismételd lassan."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/01-five-fingers.mp4",
        "poster": "assets/videos/01-five-fingers.jpg"
    },
    {
        "id": "v2",
        "title": "C-dúr skála",
        "category": "Skálák",
        "description": "Egyoktávos skála felfelé és lefelé, a billentyűkön jelzett ujjrenddel.",
        "steps": [
            "Felfelé az ujjrend: 1, 2, 3, 1, 2, 3, 4, 5.",
            "Az E után vezesd a hüvelykujjadat a kéz alatt az F-re.",
            "Lefelé: 5, 4, 3, 2, 1, 3, 2, 1. Tarts egyenletes ritmust."
        ],
        "duration": "0:36",
        "videoUrl": "assets/videos/02-c-major-scale.mp4",
        "poster": "assets/videos/02-c-major-scale.jpg"
    },
    {
        "id": "v3",
        "title": "Az első akkordod: C-dúr",
        "category": "Akkordok",
        "description": "Hallgasd meg a C-dúr akkord hangjait először külön, majd együtt.",
        "steps": [
            "Tedd a hüvelykujjadat C-re, a középső ujjadat E-re, a kisujjadat G-re.",
            "Játszd el a három hangot egymás után.",
            "Nyomd le egyszerre a C, E, G hangokat az 1, 3, 5 ujjakkal."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/03-c-major-chord.mp4",
        "poster": "assets/videos/03-c-major-chord.jpg"
    },
    {
        "id": "v4",
        "title": "C-dúr arpeggio",
        "category": "Arpeggiók",
        "description": "Bontsd fel az akkordot: C, E, G, magas C, majd vissza.",
        "steps": [
            "A C, E, G és magas C hanghoz használd az 1, 2, 3, 5 ujjakat.",
            "Figyelj minden hangra, és tartsd lazán a kezed.",
            "Haladj lefelé a G, E, C hangokon a 3, 2, 1 ujjakkal."
        ],
        "duration": "0:27",
        "videoUrl": "assets/videos/04-c-major-arpeggio.mp4",
        "poster": "assets/videos/04-c-major-arpeggio.jpg"
    },
    {
        "id": "v5",
        "title": "Akkordváltás: C, F, G",
        "category": "Akkordok",
        "description": "Figyeld meg a három akkord helyzetét, és válts közöttük nyugodtan.",
        "steps": [
            "Játszd a C-dúrt: C, E, G.",
            "Válts F-dúrra: F, A, C; majd G-dúrra: G, H, D.",
            "Minden akkordhoz az 1, 3, 5 ujjakat használd. C-dúrral fejezd be."
        ],
        "duration": "0:26",
        "videoUrl": "assets/videos/05-chord-changes.mp4",
        "poster": "assets/videos/05-chord-changes.jpg"
    },
    {
        "id": "v6",
        "title": "A két kéz együtt",
        "category": "Koordináció",
        "description": "A jobb kéz öt hangot játszik, a bal pedig C és G hangokkal kísér.",
        "steps": [
            "Készítsd elő a jobb kezet a középső C-n, a balt a mély C-n.",
            "A jobb kéz: C, D, E, F, G, F, E, D, C.",
            "A bal kéz négy ütésig tartja a C-t, majd négyig a G-t. C-n fejezd be."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/06-hands-together.mp4",
        "poster": "assets/videos/06-hands-together.jpg"
    }
],

    books: [
        {
            id: "b1",
            title: "Zongora Teljes Kezdőknek — 1. Rész a 3-ból",
            description: "Billentyűk, akkordok és az első darabjaid. Ismerkedj meg a klaviatúrával, olvasd el az első kottáidat, játssz egyszerű akkordokat, és lépésről lépésre szólaltasd meg az első igazi zeneműveidet.",
            badgeText: "Kezdő Útmutató",
            badgeColor: "#1b2a38",
            features: [
                "Klaviatúra megismerése, helyes test- és kéztartás, kottaolvasás alapjai",
                "Lépésről lépésre vezetett útmutató az első akkordokhoz és ritmusokhoz",
                "Valódi, gyönyörű zongoradarabok megszólaltatása már a kezdetektől"
            ],
            downloadUrl: "materials/PIANO-1-HU.pdf",
            coverImage: "assets/covers/piano_IMG1_hu.png",
            buttonText: "Kezdő Útmutató Letöltése (PDF)"
        },
        {
            id: "b2",
            title: "Egyszerű Zongoradarabok — 2. Rész a 3-ból",
            description: "Lépésről lépésre a ritmus, a koordináció és az igazi játékörömig. Az első dallamtól a magabiztos kétkezes játékig — fokozatosan bővülő repertoár felnőtt kezdőknek.",
            badgeText: "Könnyű Darabok",
            badgeColor: "#4a5568",
            features: [
                "Kifejezetten kezdőknek készült, gyönyörű zongoradarabok",
                "Kétkezes koordináció fejlesztése és gördülékeny akkordváltások",
                "Ismert dallamok és klasszikus gyöngyszemek lépésről lépésre"
            ],
            downloadUrl: "materials/PIANO-2-HU.pdf",
            coverImage: "assets/covers/piano_IMG1_hu.png",
            buttonText: "Kottafüzet Letöltése (PDF)"
        },
        {
            id: "b3",
            title: "30 Napos Zongorista Kihívás — 3. Rész a 3-ból",
            description: "Egy átgondolt napi program, amely fejleszti a ritmusérzéket, erősíti az önbizalmat és tartós gyakorlási szokást épít fel. Napi 20 perc a kottaolvasás, koordináció és folyamatos játék eléréséhez.",
            badgeText: "30 Napos Kihívás",
            badgeColor: "#6b1d2f",
            features: [
                "30 tudatosan felépített nap, napi 20 perc célzott gyakorlással",
                "Kottaolvasási, metronómos és kézkoordinációs gyakorlatok",
                "Tartós, inspiráló és hatékony napi zongorázási rutin kialakítása"
            ],
            downloadUrl: "materials/PIANO-3-HU.pdf",
            coverImage: "assets/covers/piano_IMG1_hu.png",
            buttonText: "Kihívás Letöltése (PDF)"
        }
    ],

    otherProducts: []
};

/* Localized interface for the piano demonstrations. */
APP_DATA.videoUI = {
    "label": "Videók",
    "homeTitle": "Bemutató videók",
    "homeText": "Hat rövid gyakorlat, kizárólag zongorahangokkal",
    "heading": "Nézd, hallgasd és próbáld ki",
    "intro": "Hat rövid animált bemutató. Kövesd a kiemelt billentyűket és az ujjak számozását. Csak zongorahang hallható, beszéd és háttérben hallható hangok nélkül.",
    "demo": "Bemutató",
    "of": "/",
    "sound": "Csak zongora",
    "unsupported": "A böngésződ nem támogatja ezt a videót.",
    "open": "Bemutató megnyitása",
    "speed": "Lejátszási sebesség",
    "replay": "Újrakezdés",
    "practice": "Próbáld ki te is",
    "choose": "Válassz egy bemutatót",
    "fingers": "Ujjak",
    "fingerNames": [
        "hüvelykujj",
        "mutatóujj",
        "középső ujj",
        "gyűrűsujj",
        "kisujj"
    ],
    "creditsLabel": "Hangok",
    "creditsAdapted": "a gyakorlatokhoz átdolgozva",
    "loadError": "A videót nem sikerült betölteni. Frissítsd az oldalt, vagy próbáld újra később.",
    "playHint": "Az indításhoz nyomd meg a lejátszás gombot."
};
