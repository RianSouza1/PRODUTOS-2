/**
 * Survival & Bushcraft — Tagi Terület (Hungarian)
 * A teljes Bushcraft & Túlélés Sorozat
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Hozzáférés igénylése (Survival & Bushcraft)",
        emailBodyTemplate: "Kedves Támogatói Csapat!\n\nSegítségre van szükségem a Survival & Bushcraft tagi területemhez való hozzáférésben.\n\nNevem: ______",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Túlélés kezdőknek — 2026-os kiadás",
            description: "Víz, tűz, menedék, jelzés és alapvető túlélési technikák. Gyakorlati kézikönyv mindazoknak, akik időt töltenek a természetben — túrázóknak, kempingezőknek, vadászoknak vagy a vadon kalandorainak.",
            badgeText: "Fő útmutató",
            badgeColor: "#6B7C44",
            features: [
                "Vízkeresés, tisztítás és tárolás a vadonban",
                "Tűzgyújtás, menedéképítés és vészjelzések küldése",
                "Gyakorlatban tesztelt módszerek kezdők számára"
            ],
            downloadUrl: "materials/SURVIVOR-1-HU.pdf",
            coverImage: "assets/covers/sur_IMG1_hu.png",
            buttonText: "Fő útmutató letöltése"
        },
        {
            id: "b2",
            title: "Bushcraft & vadonjárás mestersége — 2026-os kiadás",
            description: "Felszerelés, csomók, tájékozódás, táborverés és az önálló természetjárás tudománya. Azok az alapvető készségek, amelyekre szükséged van az erdei környezetben való biztonságos és magabiztos boldoguláshoz.",
            badgeText: "Bónusz #1",
            badgeColor: "#7A5C3E",
            features: [
                "Eszközhasználat, alapvető csomók és tájékozódás",
                "Táborverés, bivuakolás és önellátás a természetben",
                "Lépésről lépésre követhető útmutató kezdőknek"
            ],
            downloadUrl: "materials/SURVIVOR-2-HU.pdf",
            coverImage: "assets/covers/sur_IMG1_hu.png",
            buttonText: "Bónusz #1 letöltése"
        },
        {
            id: "b3",
            title: "Válsághelyzeti felkészültség & elsősegély túlélőknek — 2026-os kiadás",
            description: "72 órás nélkülözhetetlen táska, áramszünet, evakuáció és a család biztonsága. Minden, amire egy átlagos háztartásnak szüksége van a váratlan vészhelyzetekre való felkészüléshez.",
            badgeText: "Bónusz #2",
            badgeColor: "#8B4513",
            features: [
                "A 72 órás túlélőcsomag (go-bag) helyes összeállítása",
                "Felkészülés áramszünetre, evakuációra és otthoni vészhelyzetekre",
                "Alapvető elsősegélynyújtási ismeretek családok számára"
            ],
            downloadUrl: "materials/SURVIVOR-3-HU.pdf",
            coverImage: "assets/covers/sur_IMG1_hu.png",
            buttonText: "Bónusz #2 letöltése"
        }
    ],

    otherProducts: []
};
