/**
 * Vojaška Kalistenika za Moške — Območje za Člane (Slovenščina)
 */

const APP_DATA = {
    config: {
        brandName: "Vojaška Kalistenika za Moške",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Zahteva za podporo glede dostopa (Vojaška Kalistenika za Moške)",
        emailBodyTemplate: "Pozdravljena ekipa za podporo! Želim zaprositi za pomoč pri dostopu do območja za člane Vojaške Kalistenike za Moške.\n\nMoje ime je: _______.",
        showFloatingHelp: true
    },

    videos: [
        {
                "id": "v1",
                "title": "Klasične Sklece (Moč Zgornjega Dela)",
                "duration": "0:25 • Osnovna tehnika",
                "category": "Moč & Prsni Koš",
                "obs": "Prikaz s strani s pravilno poravnavo hrbtenice in komolcev.",
                "videoUrl": "https://videos.pexels.com/video-files/6893306/6893306-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v2",
                "title": "Stranska Deska (Plank) za Trup",
                "duration": "0:20 • Stabilnost & Trup",
                "category": "Stabilnost & Trup",
                "obs": "Krepitev stranskih trebušnih mišic in stabilnost sklepov.",
                "videoUrl": "https://videos.pexels.com/video-files/6023266/6023266-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v3",
                "title": "Stabilizacija na Štirih Točkah (Bird-Dog)",
                "duration": "0:30 • Varna vaja za hrbet",
                "category": "Drža & Hrbtenica",
                "obs": "Odlično za razbremenitev hrbtenice in aktivacijo globokih trebušnih mišic.",
                "videoUrl": "https://videos.pexels.com/video-files/9058239/9058239-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v4",
                "title": "Poskoki z Odročenjem (Vojaški Kardio)",
                "duration": "0:15 • Vzdržljivost & Izgorevanje",
                "category": "Ogrevanje & Kardio",
                "obs": "Kardiovaskularna aktivacija in ogrevanje celotnega telesa.",
                "videoUrl": "https://videos.pexels.com/video-files/7299359/7299359-uhd_2160_3840_30fps.mp4"
        },
        {
                "id": "v5",
                "title": "Kroženje s Kolki & Gibljivost Sklepov",
                "duration": "0:25 • Gibčnost kolkov",
                "category": "Gibljivost Sklepov",
                "obs": "Sproščanje kolčnega sklepa za večji obseg gibanja.",
                "videoUrl": "https://videos.pexels.com/video-files/9058019/9058019-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v6",
                "title": "Razteg Zadnje Lože & Dotik Prstov",
                "duration": "0:20 • Raztezanje & Regeneracija",
                "category": "Raztezanje & Prožnost",
                "obs": "Raztezanje stegenskih mišic in preprečevanje bolečin v hrbtu.",
                "videoUrl": "https://videos.pexels.com/video-files/6891847/6891847-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v7",
                "title": "Gibljivost Ramen & Prsnega Koša",
                "duration": "0:20 • Sprostitev ramen",
                "category": "Gibljivost Zgornjega Dela",
                "obs": "Odpiranje prsnega koša in sprostitev napetosti v ramenih.",
                "videoUrl": "https://videos.pexels.com/video-files/7319946/7319946-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v8",
                "title": "Viseča Držana na Drogu (Dead Hang)",
                "duration": "0:20 • Razbremenitev hrbtenice",
                "category": "Moč Oprijema & Hrbtenica",
                "obs": "Razbremenitev hrbtenice in krepitev podlakti.",
                "videoUrl": "https://videos.pexels.com/video-files/10476557/10476557-uhd_4096_2160_25fps.mp4"
        }
],

    books: [
        {
            id: "b1",
            title: "Vojaška Kalistenika za Moške po 40. Letu — 28-Dnevni Izziv (1. Del)",
            description: "Zgradi funkcionalno moč, gibljivost in vzdržljivost s 15 minutami na dan brez telovadnice. Celovit 28-dnevni vojaški program z lastno telesno težo za moške po 40. letu.",
            badgeText: "28-Dnevni Izziv",
            badgeColor: "#c45329",
            features: [
                "15 minut na dan vojaških vaj z lastno telesno težo",
                "Posebej prilagojeno za zaščito sklepov pri moških 40+",
                "Brez telovadnice, brez drage opreme in brez izgovorov"
            ],
            downloadUrl: "materials/MAN-1-SL.pdf",
            coverImage: "assets/covers/man_IMG1_sl.png",
            buttonText: "Prenesi 1. Del (PDF)"
        },
        {
            id: "b2",
            title: "Elitni Vojaški Funkcionalni Trening — 9-Tedenski Protokol (2. Del)",
            description: "Napredni taktični program za maksimalno vzdržljivost, stabilnost ramen in trupa ter učinkovito izgorevanje maščob z lastno telesno težo.",
            badgeText: "9-Tedenski Protokol",
            badgeColor: "#3b5940",
            features: [
                "Progresivni 9-tedenski taktični program za celotno telo",
                "Vojaške funkcionalne rutine za moč, kondicijo in vzdržljivost",
                "Optimalen čas za regeneracijo in preprečevanje poškodb"
            ],
            downloadUrl: "materials/MAN-2-SL.pdf",
            coverImage: "assets/covers/man_IMG1_sl.png",
            buttonText: "Prenesi Glavni Priročnik (2. Del)"
        },
        {
            id: "b3",
            title: "Vojaška Kalisteniška Vadba za Moške po 50. Letu (3. Del)",
            description: "Zgradi moč, ravnotežje, gibljivost in dolgotrajno vzdržljivost — doma ali na prostem, brez fitnesa. Prilagojeno za moške nad 50 let z osredotočenostjo na vitalnost in zaščito sklepov.",
            badgeText: "Moški 50+",
            badgeColor: "#1b2a3a",
            features: [
                "Osredotočenost na moč, ravnotežje, gibljivost in trajnostno kondicijo",
                "Varne in učinkovite vaje z lastno telesno težo za moške 50+",
                "Trajna zaščita sklepov in maksimalna energija v vsakdanjem življenju"
            ],
            downloadUrl: "materials/MAN-3-SL.pdf",
            coverImage: "assets/covers/man_IMG1_sl.png",
            buttonText: "Prenesi 3. Del (PDF)"
        }
    ],

    otherProducts: []
};
