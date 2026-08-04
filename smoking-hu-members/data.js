/**
 * Húsfüstölés és Grill — Tagi terület (Magyar)
 */

const APP_DATA = {
    config: {
        brandName: "Húsfüstölés és Grill",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Támogatási kérelem a hozzáférésről (Húsfüstölés és Grill)",
        emailBodyTemplate: "Üdvözlöm a támogatási csapatot! Szeretnék segítséget kérni a Húsfüstölés és Grill tagi területhez való hozzáférésemmel kapcsolatban.\n\nA nevem: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Húsfüstölés Kezdőknek — 2026-os Kiadás",
            description: "Sajátítsa el a Tüzet, a Füstöt, a Hőmérsékletet és az Omlósságot Otthon. Egy világos és lépésről lépésre követhető útmutató otthona kényelmében a tökéletes füstölt húsok elkészítéséhez.",
            badgeText: "Főkönyv",
            badgeColor: "#BF360C",
            features: [
                "A tűz, füst és hőmérséklet pontos szabályozása",
                "Részletes, lépésről lépésre követhető utasítások kezdőknek",
                "Gyakorlati tanácsok az otthoni húsfüstöléshez"
            ],
            downloadUrl: "materials/SMOKING-1-HU.pdf",
            coverImage: "assets/covers/smo_IMG1_hu.png",
            buttonText: "Főkönyv letöltése (PDF)"
        },
        {
            id: "b2",
            title: "Kerti Grill & BBQ Receptek — 2026-os Kiadás",
            description: "Ízletes Füstölt Húsok, Köretek és Teljes Grillezési Menük családi összejövetelekre, születésnapokra, sporteseményekre és felejthetetlen kerti partikra.",
            badgeText: "Bónusz #1",
            badgeColor: "#8D6E63",
            features: [
                "A legjobb hagyományos füstölt hús receptek",
                "Klasszikus amerikai BBQ köretek",
                "Komplett menük minden alkalomra"
            ],
            downloadUrl: "materials/SMOKING-2-HU.pdf",
            coverImage: "assets/covers/smo_IMG1_hu.png",
            buttonText: "Bónusz #1 letöltése (PDF)"
        },
        {
            id: "b3",
            title: "BBQ Fűszerkeverékek, Szószok és Pácok — 2026-os Kiadás",
            description: "Hozzon Létre Merész és Kiegyensúlyozott Ízeket Minden Húsféléhez. A végső útmutató ahhoz, hogy ételeinek tökéletes és ellenállhatatlan ízvilágot adjon.",
            badgeText: "Bónusz #2",
            badgeColor: "#E64A19",
            features: [
                "Titkos receptek prémium fűszerkeverékekhez és dry rub-okhoz",
                "Ízletes szószok és pácok minden hústípushoz",
                "Ízmaximálási technikák grillmestereknek"
            ],
            downloadUrl: "materials/SMOKING-3-HU.pdf",
            coverImage: "assets/covers/smo_IMG1_hu.png",
            buttonText: "Bónusz #2 letöltése (PDF)"
        }
    ],

    otherProducts: []
};
