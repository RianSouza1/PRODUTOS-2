/**
 * Rökning & BBQ — Medlemsområde (Svenska)
 */

const APP_DATA = {
    config: {
        brandName: "Rökning & BBQ",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Fråga om åtkomst (Rökning & BBQ)",
        emailBodyTemplate: "Hej supportteamet! Jag vill gärna ha hjälp med min åtkomst till medlemsområdet för Rökning & BBQ.\n\nMitt namn är: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Röka Kött för Nybörjare — Utgåva 2026",
            description: "Bemästra Eld, Rök, Temperatur & Mörhet Hemma. En varm och uppmuntrande guide som du enkelt kan följa i bekvämligheten av ditt eget hem för att få fram perfekt rökta kötträtter.",
            badgeText: "Huvudbok",
            badgeColor: "#BF360C",
            features: [
                "Bemästra kontrollen över eld, rök och temperatur",
                "Detaljerade steg-för-steg-instruktioner för nybörjare",
                "Praktiska tips för rökning hemma"
            ],
            downloadUrl: "materials/SMOKING-1-SV.pdf",
            coverImage: "assets/covers/SMK_IMG1_SV.png",
            buttonText: "Ladda ner huvudboken"
        },
        {
            id: "b2",
            title: "Backyard BBQ-recept — Utgåva 2026",
            description: "Uppskattade Rökta Kötträtter, Tillbehör & Kompletta Grillmenyer för familjesammankomster, födelsedagar, speldagar och oförglömliga fester i trädgården.",
            badgeText: "Bonus #1",
            badgeColor: "#8D6E63",
            features: [
                "De bästa recepten för klassiskt rökt kött",
                "Klassiska amerikanska BBQ-tillbehör",
                "Kompletta grillmenyer for alla tillfällen"
            ],
            downloadUrl: "materials/SMOKING-2-SV.pdf",
            coverImage: "assets/covers/SMK_IMG1_SV.png",
            buttonText: "Ladda ner Bonus #1"
        },
        {
            id: "b3",
            title: "BBQ Rubs, Såser & Marinader — Utgåva 2026",
            description: "Bygg Djärva och Balanserade Smaker för Varje Köttbit. Den ultimata guiden för att ge dina rätter den perfekta smakkicken.",
            badgeText: "Bonus #2",
            badgeColor: "#E64A19",
            features: [
                "Hemliga recept för premium BBQ rubs och kryddblandningar",
                "Läckra såser och marinader för varje köttbit",
                "Tips för smakmaximering för grillmästare"
            ],
            downloadUrl: "materials/SMOKING-3-SV.pdf",
            coverImage: "assets/covers/SMK_IMG1_SV.png",
            buttonText: "Ladda ner Bonus #2"
        }
    ],

    otherProducts: []
};
