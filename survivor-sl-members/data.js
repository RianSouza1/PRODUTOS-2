/**
 * Preživetje in Bushcraft — Območje za Člane (Slovenščina)
 */

const APP_DATA = {
    config: {
        brandName: "Preživetje in Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vprašanje glede dostopa (Preživetje in Bushcraft)",
        emailBodyTemplate: "Pozdravljena ekipa za podporo! Želim zaprositi za pomoč pri dostopu do območja za člane Preživetja in Bushcrafta.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Preživetje v Naravi za Začetnike — Praktični Vodnik",
            description: "Voda, ogenj, zavetišče, signalizacija in ključne tehnike preživetja. Praktični priročnik za vse, ki preživljajo čas v naravi — pohodnike, tabornike ali pustolovce.",
            badgeText: "Glavni Vodnik",
            badgeColor: "#6B7C44",
            features: [
                "Kako najti, očistiti in zagotoviti pitno vodo v divjini",
                "Postavitev ognja, gradnja zavetišč in pošiljanje signalov za reševanje",
                "Praktične in preizkušene tehnike, prilagojene začetnikom"
            ],
            downloadUrl: "materials/SURVIVOR-1-SL.pdf",
            coverImage: "assets/covers/sur_IMG1_sl.png",
            buttonText: "Prenesi Glavni Vodnik"
        },
        {
            id: "b2",
            title: "Bushcraft in Umetnost Življenja v Naravi",
            description: "Oprema, vozli, navigacija, taborjenje in osnove samostojnega življenja v naravi. Osnovne veščine za varno in samozavestno gibanje v gozdu.",
            badgeText: "Bonus #1",
            badgeColor: "#7A5C3E",
            features: [
                "Obvladovanje orodij, ključnih vozlov in tehnik navigacije",
                "Postavitev tabora in samostojno bivanje v naravi",
                "Navodila korak za korakom brez potrebnih predhodnih izkušenj"
            ],
            downloadUrl: "materials/SURVIVOR-2-SL.pdf",
            coverImage: "assets/covers/sur_IMG1_sl.png",
            buttonText: "Prenesi Bonus #1"
        },
        {
            id: "b3",
            title: "Pripravljenost na Krize in Prva Pomoč za Preživetje",
            description: "72-urna nujna oprema, izpadi električne energije, evakuacija in varnost vaše družine. Vse, kar običajno gospodinjstvo potrebuje za pripravo na nepredvidene krizne situacije.",
            badgeText: "Bonus #2",
            badgeColor: "#8B4513",
            features: [
                "Natančen seznam opreme za 72-urni nujni nahrbtnik",
                "Priprava na izpade elektrike, evakuacijo in varnost doma",
                "Osnovna prva pomoč za družine v kriznih razmerah"
            ],
            downloadUrl: "materials/SURVIVOR-3-SL.pdf",
            coverImage: "assets/covers/sur_IMG1_sl.png",
            buttonText: "Prenesi Bonus #2"
        }
    ],

    otherProducts: []
};
