/**
 * Kućno Konzervisanje Hrane — Podaci o zoni za članove (Srpski)
 * v1
 */

const APP_DATA = {
    config: {
        brandName: "Kućno Konzervisanje Hrane",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pitanje o pristupu (Kućno Konzervisanje Hrane)",
        emailBodyTemplate: "Zdravo timu za podršku! Potrebna mi je pomoć sa mojom zonom za članove za Kućno Konzervisanje Hrane.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Sveobuhvatan vodič za konzerviranje i skladištenje hrane za 2026. godinu",
            description: "Obrada u vodenoj kupki, konzerviranje pod pritiskom, fermentisana hrana, džemovi, sosovi, bezbedno skladištenje, praktičan vodič za početnike za kućno konzerviranje hrane.",
            badgeText: "GLAVNA KNJIGA",
            badgeColor: "#b45309",
            features: [
                "Obrada u vodenoj kupki i konzerviranje pod pritiskom",
                "Domaći džemovi, sosovi i zimnica",
                "Bezbedno skladištenje i metode kućnog konzerviranja"
            ],
            downloadUrl: "materials/Canning-1-SR.pdf",
            coverImage: "assets/covers/can_IMG1_sr.png",
            buttonText: "Preuzmi glavnu knjigu"
        },
        {
            id: "b2",
            title: "Vodič za dugotrajno čuvanu hranu",
            description: "Domaće suve mešavine, sastojci podeljeni u male porcije i spakovani u staklene tegle, mešavine za supe i deserte, začini i praktične suve namirnice za svakodnevnu upotrebu — bez aparata za sterilizaciju.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Domaće suve mešavine i mešavine za pečenje",
                "Moguće supe, začini i organizacija ostave",
                "Uštedite vreme i novac uz dobro opremljenu ostavu"
            ],
            downloadUrl: "materials/Canning-2-SR.pdf",
            coverImage: "assets/covers/can_IMG1_sr.png",
            buttonText: "Preuzmi bonus #1"
        },
        {
            id: "b3",
            title: "Vodič za početak kućne fermentacije",
            description: "Jednostavni recepti za fermentisano povrće, kiseli kupus, fermentisane kisele krastavce, kimči stil recepata, rasol, začine, fermentisana pića, rešavanje problema i bezbedne kuhinjske metode.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Kiseli kupus, krastavci i jednostavan kimči",
                "Fermentisana pića, rasol i domaći začini",
                "Bezbedne kuhinjske metode i rešavanje problema"
            ],
            downloadUrl: "materials/Canning-3-SR.pdf",
            coverImage: "assets/covers/can_IMG1_sr.png",
            buttonText: "Preuzmi bonus #2"
        }
    ],

    otherProducts: []
};