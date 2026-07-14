/**
 * Excel Mesterkurzus — Tagi Felület Adatok (Magyar)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mesterkurzus",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Hozzáférési kérdés (Excel Mesterkurzus)",
        emailBodyTemplate: "Üdvözlet a támogató csapatnak! Szeretnék segítséget kérni az Excel Mesterkurzus tagi felületemmel kapcsolatban.\n\nA nevem: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Excel a nullától a profi szintig — 2026-os kiadás",
            description: "Gyakorlati útmutató kezdőknek a táblázatkezelésről, a szervezésről és a mindennapi produktivitásról. Tanulja meg az Excelt lépésről lépésre, a legelső cellától a haladó eszközökig.",
            badgeText: "FŐ KÖNYV",
            badgeColor: "#1a7a45",
            features: [
                "Táblázatkezelés és adatszervezés kezdőknek",
                "Mindennapi produktivitás és ügyféllista-kezelés",
                "Pénzügyek nyomon követése és naptártervezés Excelben"
            ],
            downloadUrl: "materials/EXCEL-1-HU.pdf",
            coverImage: "assets/covers/excel_IMG1_hu.png",
            buttonText: "Fő könyv letöltése"
        },
        {
            id: "b2",
            title: "Excel-formulák, függvények és intelligens munkafolyamatok — 2026-os kiadás",
            description: "Gyakorlati útmutató ahhoz, hogyan oldhatsz meg gyorsabban problémákat Excelben. Alakítsd egyszerű táblázatodat valódi problémamegoldó eszközzé képletek és függvények segítségével.",
            badgeText: "BÓNUSZ #1",
            badgeColor: "#D97706",
            features: [
                "Képletek és függvények haladó szinten",
                "Automatikus számítások és intelligens munkafolyamatok",
                "Gyorsabb problémamegoldás az Excelben"
            ],
            downloadUrl: "materials/EXCEL-2-HU.pdf",
            coverImage: "assets/covers/excel_IMG1_hu.png",
            buttonText: "Bónusz #1 letöltése"
        },
        {
            id: "b3",
            title: "Excel-panelek, jelentések és kimutatások — 2026-os kiadás",
            description: "Gyakorlati útmutató az adatok átalakításához áttekinthető, professzionális jelentésekké. Tanulja meg, hogyan kommunikálja adatait hatékonyan panelek és kimutatások segítségével.",
            badgeText: "BÓNUSZ #2",
            badgeColor: "#7C3AED",
            features: [
                "Professzionális irányítópultok és vizuális panelek",
                "Összefoglaló kimutatások és dinamikus táblázatok",
                "Adatok bemutatása főnöknek, ügyfélnek és csapatnak"
            ],
            downloadUrl: "materials/EXCEL-3-HU.pdf",
            coverImage: "assets/covers/excel_IMG1_hu.png",
            buttonText: "Bónusz #2 letöltése"
        }
    ],

    otherProducts: []
};
