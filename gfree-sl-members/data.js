/**
 * Preprosta Kuhinja Brez Glutena — Podatki za Območje Članov (Slovenščina)
 */

const APP_DATA = {
    config: {
        brandName: "Preprosta Kuhinja Brez Glutena",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vprašanje glede dostopa (Preprosta Kuhinja Brez Glutena)",
        emailBodyTemplate: "Pozdravljeni, ekipa za podporo! Potrebujem pomoč pri dostopu do svojega območja članov za Preprosta Kuhinja Brez Glutena.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Preprosto kuhanje brez glutena",
            description: "Enostavni in vsakdanji recepti za začetnike. Odkrijte, kako preprosto in okusno je lahko kuhanje brez glutena s praktičnimi recepti korak za korakom.",
            badgeText: "GLAVNA KNJIGA",
            badgeColor: "#10B981",
            features: [
                "Enostavni vsakdanji obroki za začetnike",
                "Okusni in zdravi recepti korak za korakom",
                "Osnovni vodnik za življenje brez glutena"
            ],
            downloadUrl: "materials/G-FREE-1-SL.pdf",
            coverImage: "assets/covers/gf_IMG1_sl.png",
            buttonText: "Prenesi glavno knjigo"
        },
        {
            id: "b2",
            title: "Tolažilna brezglutenska kuhinja in hrana za vsakdan",
            description: "Boljši kruh, prigrizki, sladice in priljubljene jedi za vso družino. Naučite se peči mehak, okusen brezglutenski kruh in sladice, ki jih bodo vsi imeli radi.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B",
            features: [
                "Recepti za brezglutenski kruh in prigrizke",
                "Okusne sladice in priljubljene jedi za družino",
                "Nasveti za pečenje za popolne rezultate vsakič"
            ],
            downloadUrl: "materials/G-FREE-2-SL.pdf",
            coverImage: "assets/covers/gf_IMG1_sl.png",
            buttonText: "Prenesi bonus #1"
        },
        {
            id: "b3",
            title: "30-dnevni načrt obrokov brez glutena in nakupovalni seznam",
            description: "Enostavni tedenski meniji, organizirani nakupovalni seznami in strokovni nasveti za pripravo obrokov, da bo vaš prehod udoben in brez stresa.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6",
            features: [
                "Popoln 30-dnevni načrt obrokov",
                "Organizirani tedenski nakupovalni seznami",
                "Koristni nasveti za enostavno pripravo obrokov"
            ],
            downloadUrl: "materials/G-FREE-3-SL.pdf",
            coverImage: "assets/covers/gf_IMG1_sl.png",
            buttonText: "Prenesi bonus #2"
        }
    ],

    otherProducts: []
};