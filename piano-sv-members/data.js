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

    videos: [
    {
        "id": "v1",
        "title": "Fem fingrar: C, D, E, F, G",
        "category": "Första stegen",
        "description": "Följ de fem upplysta tangenterna. Numret visar vilket finger du ska använda.",
        "steps": [
            "Placera höger tumme på mitt-C.",
            "Spela C, D, E, F, G med fingrarna 1, 2, 3, 4, 5.",
            "Gå tillbaka genom F, E, D, C. Upprepa lugnt."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/01-five-fingers.mp4",
        "poster": "assets/videos/01-five-fingers.jpg"
    },
    {
        "id": "v2",
        "title": "C-durskala",
        "category": "Skalor",
        "description": "En skala över en oktav uppåt och nedåt, med fingernummer på tangenterna.",
        "steps": [
            "Uppåt: fingrarna 1, 2, 3, 1, 2, 3, 4, 5.",
            "Efter E för du tummen under handen till F.",
            "Nedåt: 5, 4, 3, 2, 1, 3, 2, 1. Håll en jämn rytm."
        ],
        "duration": "0:36",
        "videoUrl": "assets/videos/02-c-major-scale.mp4",
        "poster": "assets/videos/02-c-major-scale.jpg"
    },
    {
        "id": "v3",
        "title": "Ditt första ackord: C-dur",
        "category": "Ackord",
        "description": "Lyssna på tonerna i C-durackordet först var för sig och sedan tillsammans.",
        "steps": [
            "Placera tummen på C, långfingret på E och lillfingret på G.",
            "Spela de tre tonerna en i taget.",
            "Tryck ner C, E och G samtidigt med fingrarna 1, 3 och 5."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/03-c-major-chord.mp4",
        "poster": "assets/videos/03-c-major-chord.jpg"
    },
    {
        "id": "v4",
        "title": "Arpeggio i C-dur",
        "category": "Arpeggion",
        "description": "Spela ackordet som ett arpeggio: C, E, G, högt C och tillbaka igen.",
        "steps": [
            "Använd fingrarna 1, 2, 3 och 5 för C, E, G och högt C.",
            "Lyssna på varje ton och håll handen avslappnad.",
            "Gå ner genom G, E, C med fingrarna 3, 2, 1."
        ],
        "duration": "0:27",
        "videoUrl": "assets/videos/04-c-major-arpeggio.mp4",
        "poster": "assets/videos/04-c-major-arpeggio.jpg"
    },
    {
        "id": "v5",
        "title": "Byt ackord: C, F, G",
        "category": "Ackord",
        "description": "Se de tre ackordpositionerna och växla lugnt mellan dem.",
        "steps": [
            "Spela C-dur: C, E, G.",
            "Byt till F-dur: F, A, C; sedan G-dur: G, H, D.",
            "Använd fingrarna 1, 3 och 5 för varje ackord. Avsluta med C-dur."
        ],
        "duration": "0:26",
        "videoUrl": "assets/videos/05-chord-changes.mp4",
        "poster": "assets/videos/05-chord-changes.jpg"
    },
    {
        "id": "v6",
        "title": "Båda händerna tillsammans",
        "category": "Koordination",
        "description": "Höger hand spelar fem toner medan vänster ackompanjerar med C och G.",
        "steps": [
            "Förbered höger hand på mitt-C och vänster på det låga C.",
            "Höger spelar C, D, E, F, G, F, E, D, C.",
            "Vänster håller C i fyra slag, sedan G i fyra. Avsluta på C."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/06-hands-together.mp4",
        "poster": "assets/videos/06-hands-together.jpg"
    }
],

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

/* Localized interface for the piano demonstrations. */
APP_DATA.videoUI = {
    "label": "Videor",
    "homeTitle": "Demonstrationsvideor",
    "homeText": "Sex korta övningar med enbart pianoljud",
    "heading": "Titta, lyssna och prova",
    "intro": "Sex korta animerade demonstrationer. Följ de upplysta tangenterna och fingernumren. Ljudet innehåller enbart piano, utan berättarröst eller röster i bakgrunden.",
    "demo": "Demonstration",
    "of": "av",
    "sound": "Enbart piano",
    "unsupported": "Din webbläsare stöder inte den här videon.",
    "open": "Öppna demonstrationen",
    "speed": "Uppspelningshastighet",
    "replay": "Börja om",
    "practice": "Prova själv",
    "choose": "Välj en demonstration",
    "fingers": "Fingrar",
    "fingerNames": [
        "tumme",
        "pekfinger",
        "långfinger",
        "ringfinger",
        "lillfinger"
    ],
    "creditsLabel": "Ljud",
    "creditsAdapted": "anpassade för övningarna",
    "loadError": "Videon kunde inte laddas. Uppdatera sidan eller försök igen om en stund.",
    "playHint": "Tryck på uppspelningsknappen för att börja."
};
