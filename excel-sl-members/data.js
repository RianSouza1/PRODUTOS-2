/**
 * Excel Mastery — Podatki o Članskem Območju (Slovenščina)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Poizvedba glede dostopa (Excel Mastery)",
        emailBodyTemplate: "Pozdravljena ekipa za podporo! Potrebujem pomoč pri dostopu do svojega članskega območja za Excel Mastery.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Od nič do Excel profesionalca — Izdaja 2026",
            description: "Praktični vodič za začetnike, ki zajema preglednice, organizacijo in vsakodnevno produktivnost. Naučite se Excela korak za korakom, od prve celice do naprednih orodij.",
            badgeText: "GLAVNA KNJIGA",
            badgeColor: "#1a7a45",
            features: [
                "Preglednice in organizacija podatkov za začetnike",
                "Vsakodnevna produktivnost in upravljanje seznamov strank",
                "Spremljanje financ in načrtovanje koledarja v Excelu"
            ],
            downloadUrl: "materials/Excel-1-SL.pdf",
            coverImage: "assets/covers/excel_IMG1_sl.png",
            buttonText: "Prenesi glavno knjigo"
        },
        {
            id: "b2",
            title: "Excel funkcije, operacije in pametni delovni tokovi — Izdaja 2026",
            description: "Praktični vodnik za hitrejše reševanje nalog v Excelu. Spremenite preprosto tabelo v pravo orodje za reševanje težav s pomočjo formul in funkcij.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Napredne formule in funkcije",
                "Samodejni izračuni in pametni delovni tokovi",
                "Hitrejše reševanje težav v Excelu"
            ],
            downloadUrl: "materials/Excel-2-SL.pdf",
            coverImage: "assets/covers/excel_IMG1_sl.png",
            buttonText: "Prenesi bonus #1"
        },
        {
            id: "b3",
            title: "Od Excel izračunov, poročil, formul — Izdaja 2026.",
            description: "Praktični vodnik za pretvarjanje podatkov v jasna in profesionalna poročila. Naučite se učinkovito predstaviti svoje podatke s pomočjo nadzornih plošč in poročil.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Profesionalne nadzorne plošče in vizualne plošče",
                "Zbirna poročila in vrtilne tabele",
                "Predstavitev podatkov nadrejenim, strankam in ekipi"
            ],
            downloadUrl: "materials/Excel-3-SL.pdf",
            coverImage: "assets/covers/excel_IMG1_sl.png",
            buttonText: "Prenesi bonus #2"
        }
    ],

    otherProducts: []
};
