/**
 * Survival & Bushcraft — Medlemsområde (Svenska)
 * Den kompletta bushcraft- & överlevnadsserien
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Fråga om åtkomst (Survival & Bushcraft)",
        emailBodyTemplate: "Hej supportteamet. Jag behöver hjälp med att komma in på min medlemspanel för Survival & Bushcraft.\n\nMitt namn är: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Överlevnad för nybörjare — Utgåva 2026",
            description: "Vatten, eld, skydd, signalering och grundläggande överlevnadstekniker. En praktisk handbok för alla som spenderar tid i naturen — vandrare, campare, jägare eller vanliga äventyrare.",
            badgeText: "Huvudmaterial",
            badgeColor: "#6B7C44",
            features: [
                "Hitta, rena och säkra vatten i vildmarken",
                "Göra upp eld, bygga skydd och skicka signaler",
                "Beprövade tekniker för nybörjare i fält"
            ],
            downloadUrl: "materials/SURVIVOR-1-SV.pdf",
            coverImage: "assets/covers/sur_IMG1_sv.png",
            buttonText: "Ladda ner huvudmaterial"
        },
        {
            id: "b2",
            title: "Bushcraft & vildmarksfärdigheter — Utgåva 2026",
            description: "Utrustning, knopar, navigation, lägeruppsättning och självständigt liv ute i naturen. Grundläggande bushcraftfärdigheter för ett säkert och tryggt friluftsliv.",
            badgeText: "Bonus #1",
            badgeColor: "#7A5C3E",
            features: [
                "Bemästra verktyg, knopar och navigeringstekniker",
                "Lägeruppsättning och självständigt liv ute i naturen",
                "Steg-för-steg-instruktioner för nybörjare utan förkunskaper"
            ],
            downloadUrl: "materials/SURVIVOR-2-SV.pdf",
            coverImage: "assets/covers/sur_IMG1_sv.png",
            buttonText: "Ladda ner Bonus #1"
        },
        {
            id: "b3",
            title: "Krisberedskap & överlevnadens första hjälp — Utgåva 2026",
            description: "72-timmars nödväska, strömavbrott, evakuering & familjens säkerhet. Allt vad vanliga familjer behöver veta i en nödsituation.",
            badgeText: "Bonus #2",
            badgeColor: "#8B4513",
            features: [
                "Sätta ihop en 72-timmars nödväska på rätt sätt",
                "Förberedelse för strömavbrott, evakuering och hemberedskap",
                "Grundläggande första hjälpen för familjer i nödsituationer"
            ],
            downloadUrl: "materials/SURVIVOR-3-SV.pdf",
            coverImage: "assets/covers/sur_IMG1_sv.png",
            buttonText: "Ladda ner Bonus #2"
        }
    ],

    otherProducts: []
};
