/**
 * Kompletní Klavírní Sbírka — Členská Oblast (Čeština)
 */

const APP_DATA = {
    config: {
        brandName: "Kompletní Klavírní Sbírka",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Žádost o podporu – přístup (Kompletní Klavírní Sbírka)",
        emailBodyTemplate: "Dobrý den, týme podpory! Rád bych požádal o pomoc s přístupem do členské sekce Kompletní Klavírní Sbírka.\n\nMoje jméno je: ______.",
        showFloatingHelp: true
    },

    videos: [
    {
        "id": "v1",
        "title": "Pět prstů: C, D, E, F, G",
        "category": "První kroky",
        "description": "Sledujte pět zvýrazněných kláves. Číslo ukazuje, který prst použít.",
        "steps": [
            "Položte pravý palec na střední C.",
            "Hrajte C, D, E, F, G prsty 1, 2, 3, 4, 5.",
            "Vraťte se přes F, E, D, C. Pomalu opakujte."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/01-five-fingers.mp4",
        "poster": "assets/videos/01-five-fingers.jpg"
    },
    {
        "id": "v2",
        "title": "Stupnice C dur",
        "category": "Stupnice",
        "description": "Stupnice v rozsahu jedné oktávy nahoru a dolů, s prstokladem na klávesách.",
        "steps": [
            "Nahoru použijte prsty 1, 2, 3, 1, 2, 3, 4, 5.",
            "Po E podložte palec pod ruku na F.",
            "Dolů: 5, 4, 3, 2, 1, 3, 2, 1. Udržujte pravidelný rytmus."
        ],
        "duration": "0:36",
        "videoUrl": "assets/videos/02-c-major-scale.mp4",
        "poster": "assets/videos/02-c-major-scale.jpg"
    },
    {
        "id": "v3",
        "title": "Váš první akord: C dur",
        "category": "Akordy",
        "description": "Poslechněte si tóny akordu C dur nejprve zvlášť a pak společně.",
        "steps": [
            "Položte palec na C, prostředník na E a malíček na G.",
            "Zahrajte tři tóny postupně.",
            "Stiskněte C, E a G společně prsty 1, 3 a 5."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/03-c-major-chord.mp4",
        "poster": "assets/videos/03-c-major-chord.jpg"
    },
    {
        "id": "v4",
        "title": "Arpeggio C dur",
        "category": "Arpeggia",
        "description": "Zahrajte akord jako arpeggio: C, E, G, vysoké C a zpět.",
        "steps": [
            "Pro C, E, G a vysoké C použijte prsty 1, 2, 3 a 5.",
            "Poslouchejte každý tón a nechte ruku uvolněnou.",
            "Vraťte se přes G, E, C prsty 3, 2, 1."
        ],
        "duration": "0:27",
        "videoUrl": "assets/videos/04-c-major-arpeggio.mp4",
        "poster": "assets/videos/04-c-major-arpeggio.jpg"
    },
    {
        "id": "v5",
        "title": "Střídání akordů: C, F, G",
        "category": "Akordy",
        "description": "Sledujte tři polohy akordů a pomalu mezi nimi přecházejte.",
        "steps": [
            "Zahrajte C dur: C, E, G.",
            "Přejděte na F dur: F, A, C; pak G dur: G, H, D.",
            "Pro každý akord použijte prsty 1, 3 a 5. Zakončete akordem C dur."
        ],
        "duration": "0:26",
        "videoUrl": "assets/videos/05-chord-changes.mp4",
        "poster": "assets/videos/05-chord-changes.jpg"
    },
    {
        "id": "v6",
        "title": "Obě ruce společně",
        "category": "Koordinace",
        "description": "Pravá ruka hraje pět tónů a levá doprovází tóny C a G.",
        "steps": [
            "Připravte pravou ruku na středním C a levou na nízkém C.",
            "Pravá hraje C, D, E, F, G, F, E, D, C.",
            "Levá drží C čtyři doby, poté G čtyři doby. Zakončete na C."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/06-hands-together.mp4",
        "poster": "assets/videos/06-hands-together.jpg"
    }
],

    books: [
        {
            id: "b1",
            title: "Klavír pro Úplné Začátečníky — 1. Část z 3",
            description: "Klávesy, akordy a tvoje první skladby. Seznam se s klaviaturou, přečti své první noty, pochop základy hudební teorie a zahraj své první skutečné hudební skladby krok za krokem.",
            badgeText: "Průvodce pro Začátečníky",
            badgeColor: "#1b2a38",
            features: [
                "Seznámení s klaviaturou, správné držení těla a rukou, základy čtení not",
                "Průvodce krok za krokem k prvním akordům, stupnicím a rytmům",
                "Hrajte skutečné a krásné klavírní skladby již od samého začátku"
            ],
            downloadUrl: "materials/PIANO-1-CS.pdf",
            coverImage: "assets/covers/piano_IMG1_cs.png",
            buttonText: "Stáhnout Průvodce pro Začátečníky (PDF)"
        },
        {
            id: "b2",
            title: "Jednoduché Skladby pro Klavír — 2. Kniha z 3",
            description: "Krok za krokem k rytmu, koordinaci a skutečné radosti ze hry. Od první melodie k jistotě hry oběma rukama — repertoár s postupně rostoucí obtížností pro dospělé začátečníky.",
            badgeText: "Snadné Skladby",
            badgeColor: "#4a5568",
            features: [
                "Krásné skladby speciálně upravené pro dospělé začátečníky",
                "Rozvoj koordinace obou rukou a plynulé přechody mezi akordy",
                "Známé melodie a klasické klenoty, které zvládnete krok za krokem"
            ],
            downloadUrl: "materials/PIANO-2-CS.pdf",
            coverImage: "assets/covers/piano_IMG1_cs.png",
            buttonText: "Stáhnout Skladby (PDF)"
        },
        {
            id: "b3",
            title: "30denní Pianistická Výzva — 3. Kniha z 3",
            description: "Strukturovaný každodenní program, který buduje cit pro rytmus, posiluje sebedůvěru a vytváří trvalý návyk pravidelného cvičení. 20 minut denně pro plynulost a jistotu ve hře.",
            badgeText: "30denní Výzva",
            badgeColor: "#6b1d2f",
            features: [
                "30 promyšlených dní s 20 minutami cíleného denního cvičení",
                "Cvičení pro čtení not, metronomický rytmus a koordinaci rukou",
                "Vybudování trvalé, inspirativní a efektivní cvičební rutiny"
            ],
            downloadUrl: "materials/PIANO-3-CS.pdf",
            coverImage: "assets/covers/piano_IMG1_cs.png",
            buttonText: "Stáhnout 30denní Výzvu (PDF)"
        }
    ],

    otherProducts: []
};

/* Localized interface for the piano demonstrations. */
APP_DATA.videoUI = {
    "label": "Videa",
    "homeTitle": "Názorná videa",
    "homeText": "Šest krátkých cvičení pouze se zvukem klavíru",
    "heading": "Sledujte, poslouchejte a zkuste to",
    "intro": "Šest krátkých animovaných ukázek. Sledujte zvýrazněné klávesy a čísla prstů. Uslyšíte pouze klavír, bez mluveného komentáře nebo hlasů v pozadí.",
    "demo": "Ukázka",
    "of": "z",
    "sound": "Pouze klavír",
    "unsupported": "Váš prohlížeč toto video nepodporuje.",
    "open": "Otevřít ukázku",
    "speed": "Rychlost přehrávání",
    "replay": "Spustit znovu",
    "practice": "Zkuste to sami",
    "choose": "Vyberte si ukázku",
    "fingers": "Prsty",
    "fingerNames": [
        "palec",
        "ukazovák",
        "prostředník",
        "prsteník",
        "malíček"
    ],
    "creditsLabel": "Zvuky",
    "creditsAdapted": "upravené pro tato cvičení",
    "loadError": "Video se nepodařilo načíst. Obnovte stránku nebo to za chvíli zkuste znovu.",
    "playHint": "Začněte stisknutím tlačítka přehrávání."
};
