/**
 * Träbearbetning & Woodworking — Medlemsområde (Svenska)
 */

const APP_DATA = {
    config: {
        brandName: "Träbearbetning & Woodworking",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Fråga om åtkomst (Träbearbetning & Woodworking)",
        emailBodyTemplate: "Hej supportteamet! Jag vill gärna be om hjälp med min åtkomst till medlemsområdet för Träbearbetning & Woodworking.\n\nMitt namn är: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Träbearbetning för Nybörjare — Verktyg, sågteknik och fogar",
            description: "Den här boken är till för dig som alltid velat ge dig in i snickeriets värld. Verktyg, sågteknik, fogar och grundläggande färdigheter utan dyra maskiner.",
            badgeText: "HUVUDBOK",
            badgeColor: "#D97706",
            features: [
                "Grundläggande verktyg, sågteknik och träfogar för nybörjare",
                "Steg-för-steg-instruktioner utan krav på dyrt maskinrum",
                "Tips för materialval, säkerhet och rena sågsnitt"
            ],
            downloadUrl: "materials/WOOD-1-SV.pdf",
            coverImage: "assets/covers/wood_IMG1_sv.png",
            buttonText: "Ladda ner Huvudbok (Bok 1)"
        },
        {
            id: "b2",
            title: "Snickeri utan krångel — 18 projekt steg för steg",
            description: "18 kompletta byggprojekt med såglistor & måttöversikter. Från telefonhållare till arbetsbock — byggt steg för steg.",
            badgeText: "PROJEKTBOK",
            badgeColor: "#2D6A4F",
            features: [
                "18 kompletta snickeriprojekt med exakta kaplistor",
                "Steg-för-steg-ritningar från arbetsbock till hylla",
                "Praktisk handbok direkt på arbetsbänken för omedelbar nytta"
            ],
            downloadUrl: "materials/WOOD-2-SV.pdf",
            coverImage: "assets/covers/wood_IMG1_sv.png",
            buttonText: "Ladda ner Projektbok (Bok 2)"
        },
        {
            id: "b3",
            title: "Möbler & Projekt för Hemmet — Bygg riktiga möbler själv",
            description: "Sluta med småpyssel: bygg riktiga möbler med solid konstruktion, välbalanserade proportioner och en fin finish.",
            badgeText: "MÖBELBYGGE",
            badgeColor: "#B45309",
            features: [
                "Bygg riktiga trämöbler med solid konstruktion själv",
                "Hållbara fogar och högkvalitativ ytbehandling",
                "Välproportionerade möbler för hem, trädgård och verkstad"
            ],
            downloadUrl: "materials/WOOD-3-SV.pdf",
            coverImage: "assets/covers/wood_IMG1_sv.png",
            buttonText: "Ladda ner Möbelbok (Bok 3)"
        }
    ],

    otherProducts: []
};
