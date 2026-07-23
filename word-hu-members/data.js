/**
 * Word Mastery — Tagok területe (Magyar)
 */

const APP_DATA = {
    config: {
        brandName: "Word Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Hozzáférés kérése (Word Mastery)",
        emailBodyTemplate: "Kedves Támogatói Csapat! Szeretnék segítséget kérni a Word Mastery tagi felületének eléréséhez.\n\nNevem: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Word Kezdőtől a Profiig — 2026-os Kiadás (1. rész a 3-ból)",
            description: "A teljes útmutató kezdők számára – tanulja meg, hogyan készíthet áttekinthető, igényes és professzionális dokumentumokat Microsoft Wordben.",
            badgeText: "Fő kézikönyv",
            badgeColor: "#2563EB",
            features: [
                "Sajátítsa el a Microsoft Word alapjait",
                "Készítsen áttekinthető és igényesen formázott dokumentumokat",
                "Gyakorlati tanácsok a mindennapi dokumentumkezeléshez"
            ],
            downloadUrl: "materials/WORD-1-HU.pdf",
            coverImage: "assets/covers/word_IMG1_hu.png",
            buttonText: "Fő kézikönyv letöltése"
        },
        {
            id: "b2",
            title: "Formázás, Stílusok & Okos Munkafolyamatok Wordben — 2026-os Kiadás (2. könyv a 3-ból)",
            description: "Gyakorlati útmutató következetes, áttekinthetően strukturált és professzionális dokumentumok készítéséhez Microsoft Wordben.",
            badgeText: "Bónusz #1",
            badgeColor: "#475569",
            features: [
                "Haladó stílusok és formázási lehetőségek használata",
                "Biztosítson egységes dokumentumszerkezetet",
                "Alkalmazzon hatékony és okos munkafolyamatokat"
            ],
            downloadUrl: "materials/WORD-2-HU.pdf",
            coverImage: "assets/covers/word_IMG1_hu.png",
            buttonText: "Bónusz #1 letöltése"
        },
        {
            id: "b3",
            title: "Word-sablonok, Körlevél & Haladó Eszközök — 2026-os Kiadás (3. rész / 3)",
            description: "Újrafelhasználható dokumentumok, személyre szabott levelezés, interaktív űrlapok és intelligens automatizálás Microsoft Word-ben.",
            badgeText: "Bónusz #2",
            badgeColor: "#0F766E",
            features: [
                "Tervezzen újrafelhasználható sablonokat és űrlapokat",
                "Körlevél készítése személyre szabott levelekhez",
                "Használja ki a Word intelligens automatizálási eszközeit"
            ],
            downloadUrl: "materials/WORD-3-HU.pdf",
            coverImage: "assets/covers/word_IMG1_hu.png",
            buttonText: "Bónusz #2 letöltése"
        }
    ],

    otherProducts: []
};
