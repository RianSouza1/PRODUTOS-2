/**
 * Den Kompletta Pianosamlingen — Medlemsområde (Svenska)
 */

const APP_DATA = {
    config: {
        brandName: "Den Kompletta Pianosamlingen",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Supportbegäran om åtkomst (Den Kompletta Pianosamlingen)",
        emailBodyTemplate: "Hej supportteamet! Jag vill be om hjälp med min åtkomst till medlemsområdet för Den Kompletta Pianosamlingen.\n\nMitt namn är: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Piano för Absoluta Nybörjare — Del 1 av 3",
            description: "Lär känna klaviaturen, förstå enkla noter, spela grundläggande ackord och öva in dina första musikstycken steg för steg. Den kompletta metoden för nybörjare.",
            badgeText: "Nybörjarguide",
            badgeColor: "#1b2a38",
            features: [
                "Tangenter, grundläggande noter och fingerposition för nybörjare",
                "Steg-för-steg-guide till dina första ackord och rytmer",
                "Börja spela dina första pianostycken direkt"
            ],
            downloadUrl: "materials/PIANO-1-SV.pdf",
            coverImage: "assets/covers/piano_IMG1_sv.png",
            buttonText: "Ladda ner Nybörjarguide (PDF)"
        },
        {
            id: "b2",
            title: "Enkla Pianostycken — Bok 2 av Samlingen",
            description: "Från din första melodi till säkert tvåhandigt spel. En inspirerande repertoarsamling för rytm, koordination och riktigt spelglädje vid pianot.",
            badgeText: "Enkla Stycken",
            badgeColor: "#4a5568",
            features: [
                "Vackra och enkla pianoarrangemang för nybörjare",
                "Smidiga ackordbyten och självständighet mellan båda händerna",
                "Steg för steg genom kända melodier och klassiska verk"
            ],
            downloadUrl: "materials/PIANO-2-SV.pdf",
            coverImage: "assets/covers/piano_IMG1_sv.png",
            buttonText: "Ladda ner Repertoarbok (PDF)"
        },
        {
            id: "b3",
            title: "30-Dagars Pianoutmaning — Del 3 av 3",
            description: "20 minuter om dagen för bättre pianovanor. En strukturerad dagplan för att förbättra notläsning, takt, ackordflyt och bygga en trygg daglig övningsrutin.",
            badgeText: "30-Dagars Utmaning",
            badgeColor: "#6b1d2f",
            features: [
                "30 strukturerade dagar med 20 minuters daglig övning",
                "Övningar för fingerhastighet, precision och koordination",
                "Smart och effektiv pianorutin för kontinuerliga framsteg"
            ],
            downloadUrl: "materials/PIANO-3-SV.pdf",
            coverImage: "assets/covers/piano_IMG1_sv.png",
            buttonText: "Ladda ner Utmaning (PDF)"
        }
    ],

    otherProducts: []
};
