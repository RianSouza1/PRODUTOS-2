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

    videos: [],

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
