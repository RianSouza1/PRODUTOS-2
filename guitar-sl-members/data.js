/**
 * Akustična Kitara — Območje za Člane (Slovenščina)
 */

const APP_DATA = {
    config: {
        brandName: "Akustična Kitara",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vprašanje glede dostopa (Akustična Kitara)",
        emailBodyTemplate: "Pozdravljena ekipa za podporo! Želim zaprositi za pomoč pri dostopu do območja za člane Akustične Kitare.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            id: "v1",
            title: "Osnovni Kitarski Akordi — Akord G (Brez Govora)",
            duration: "Začetniki • Vizualni prikaz prstnih vzorcev",
            youtubeId: "ES428uOSZ68"
        },
        {
            id: "v2",
            title: "Hitre Menjave Akordov — Vaja za Začetnike (Brez Govora)",
            duration: "Začetniki • Vaja za prste in ritem",
            youtubeId: "-lLcxTp9dAg"
        },
        {
            id: "v3",
            title: "Ritem in Spremljava na Kitari — Korak za Korakom (Brez Govora)",
            duration: "Začetniki • Vaja ritmičnega trkanja",
            youtubeId: "1DPd5zkh1r0"
        },
        {
            id: "v4",
            title: "Branje Kitarskih Tablatur in Akordov (Brez Govora)",
            duration: "Začetniki • Enostavna vizualna lekcija",
            youtubeId: "bpvLZpcIwZk"
        },
        {
            id: "v5",
            title: "Tehnika Igranja s Prsti — Fingerstyle (Brez Govora)",
            duration: "Nadaljevalni • Uglajen zvok kitare",
            youtubeId: "_aOFJ0WuwQE"
        }
    ],

    books: [
        {
            id: "b1",
            title: "Osnove Kitare za Začetnike — Akordi, Ritem in Prve Pesmi",
            description: "Popoln in praktičen korak-za-korakom vodnik za popolne začetnike pri igranju akustične kitare.",
            badgeText: "Del 1",
            badgeColor: "#475569",
            features: [
                "Osnovni prijemi in postavitev prstov na strune",
                "Pravilno držanje kitare in ritmično trkanje",
                "Vaša prva pesem v nekaj minutah"
            ],
            downloadUrl: "materials/GUITAR-1-SL.pdf",
            coverImage: "assets/covers/gui_IMG1_sl.png",
            buttonText: "Prenesi Del 1 (PDF)"
        },
        {
            id: "b2",
            title: "Vsebuje Vse Akorde in Ritme — Korak za Korakom do Samostojnega Igranja",
            description: "Nadaljevanje osnov — od preprostih menjav akordov do tekočega igranja celotnih pesmi.",
            badgeText: "Glavni Vodnik",
            badgeColor: "#8B5A2B",
            features: [
                "Popolna zbirka osnovnih in naprednih akordov",
                "Triki za hitro in gladko menjavanje akordov",
                "Različni vzorci ritma za spremljavo"
            ],
            downloadUrl: "materials/GUITAR-2-SL.pdf",
            coverImage: "assets/covers/gui_IMG1_sl.png",
            buttonText: "Prenesi Glavni Vodnik (Del 2)"
        },
        {
            id: "b3",
            title: "Skrivnosti Akustične Kitare — Napredne Tehnike in Tablature",
            description: "Izboljšanje tehnike igranja, branje tablatur, fingerpicking in lepši zvok instrumenta.",
            badgeText: "Del 3",
            badgeColor: "#2E5A44",
            features: [
                "Tehnika igranja s prsti (fingerpicking)",
                "Enostavno branje kitarskih tablatur",
                "Kako doseči čist in čist zvok vsake strune"
            ],
            downloadUrl: "materials/GUITAR-3-SL.pdf",
            coverImage: "assets/covers/gui_IMG1_sl.png",
            buttonText: "Prenesi Del 3 (PDF)"
        }
    ],

    otherProducts: []
};
