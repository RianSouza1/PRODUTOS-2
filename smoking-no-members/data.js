/**
 * Røyking & BBQ — Medlemsområde (Norsk)
 */

const APP_DATA = {
    config: {
        brandName: "Røyking & BBQ",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørsmål om tilgang (Røyking & BBQ)",
        emailBodyTemplate: "Hei supportteam! Jeg ønsker gjerne hjelp med min tilgang til medlemsområdet for Røyking & BBQ.\n\nMitt navn er: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Røyking av kjøtt for nybegynnere — Utgave 2026",
            description: "Mestre ild, røyk, temperatur og mørhet hjemme. En varm og oppmuntrende guide som du enkelt kan følge i ditt eget hjem for å tilberede perfekt røkt kjøtt.",
            badgeText: "Hovedbok",
            badgeColor: "#BF360C",
            features: [
                "Mestre kontrollen over ild, røyk og temperatur",
                "Detaljerte trinn-for-trinn-instruksjoner for nybegynnere",
                "Praktiske tips for røyking hjemme"
            ],
            downloadUrl: "materials/SMOKING-1-NO.pdf",
            coverImage: "assets/covers/SMK_IMG1_NO.png",
            buttonText: "Last ned hovedboken"
        },
        {
            id: "b2",
            title: "Oppskrifter til Hageselskap med Grilling — Utgave 2026",
            description: "Folkekjære Røkte Kjøttretter, Tilbehør & Komplette Grillmenyer for familiemøter, bursdager, kampdager og uforglemmelige fester i hagen.",
            badgeText: "Bonus #1",
            badgeColor: "#8D6E63",
            features: [
                "De beste oppskriftene for klassisk røkt kjøtt",
                "Klassiske amerikanske BBQ-tilbehør",
                "Komplette grillmenyer for alle anledninger"
            ],
            downloadUrl: "materials/SMOKING-2-NO.pdf",
            coverImage: "assets/covers/SMK_IMG1_NO.png",
            buttonText: "Last ned Bonus #1"
        },
        {
            id: "b3",
            title: "BBQ-Rubs, Sauser & Marinader — Utgave 2026",
            description: "Bygg Dristige og Balanserte Smaker for Hvert Kjøttstykke. Den ultimate guiden for å gi rettene dine det perfekte smakskicket.",
            badgeText: "Bonus #2",
            badgeColor: "#E64A19",
            features: [
                "Hemmelige oppskrifter på premium rubs og krydderblandinger",
                "Deilige sauser og marinader for alle typer kjøtt",
                "Tips til smaksmaksimering for grillentusiaster"
            ],
            downloadUrl: "materials/SMOKING-3-NO.pdf",
            coverImage: "assets/covers/SMK_IMG1_NO.png",
            buttonText: "Last ned Bonus #2"
        }
    ],

    otherProducts: []
};
