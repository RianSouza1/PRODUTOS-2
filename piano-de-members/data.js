/**
 * Die komplette Klaviersammlung — Mitgliederbereich (Deutsch)
 */

const APP_DATA = {
    config: {
        brandName: "Die komplette Klaviersammlung",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Support-Anfrage zum Zugang (Die komplette Klaviersammlung)",
        emailBodyTemplate: "Hallo Support-Team! Ich benötige Hilfe mit meinem Zugang zum Mitgliederbereich für Die komplette Klaviersammlung.\n\nMein Name ist: ______.",
        showFloatingHelp: true
    },

    videos: [
    {
        "id": "v1",
        "title": "Fünf Finger: C, D, E, F, G",
        "category": "Erste Schritte",
        "description": "Folge den fünf leuchtenden Tasten. Die Zahl zeigt den passenden Finger.",
        "steps": [
            "Lege den rechten Daumen auf das mittlere C.",
            "Spiele C, D, E, F, G mit den Fingern 1, 2, 3, 4, 5.",
            "Gehe über F, E, D, C zurück. Wiederhole langsam."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/01-five-fingers.mp4",
        "poster": "assets/videos/01-five-fingers.jpg"
    },
    {
        "id": "v2",
        "title": "C-Dur-Tonleiter",
        "category": "Tonleitern",
        "description": "Eine Tonleiter über eine Oktave aufwärts und abwärts, mit Fingernummern auf den Tasten.",
        "steps": [
            "Aufwärts: Finger 1, 2, 3, 1, 2, 3, 4, 5.",
            "Führe nach E den Daumen unter der Hand zum F.",
            "Abwärts: 5, 4, 3, 2, 1, 3, 2, 1. Halte den Rhythmus gleichmäßig."
        ],
        "duration": "0:36",
        "videoUrl": "assets/videos/02-c-major-scale.mp4",
        "poster": "assets/videos/02-c-major-scale.jpg"
    },
    {
        "id": "v3",
        "title": "Dein erster Akkord: C-Dur",
        "category": "Akkorde",
        "description": "Höre die Töne des C-Dur-Akkords zuerst einzeln und dann zusammen.",
        "steps": [
            "Lege den Daumen auf C, den Mittelfinger auf E und den kleinen Finger auf G.",
            "Spiele die drei Töne nacheinander.",
            "Drücke C, E und G gleichzeitig mit den Fingern 1, 3 und 5."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/03-c-major-chord.mp4",
        "poster": "assets/videos/03-c-major-chord.jpg"
    },
    {
        "id": "v4",
        "title": "C-Dur-Arpeggio",
        "category": "Arpeggien",
        "description": "Spiele den Akkord als Arpeggio: C, E, G, hohes C und wieder zurück.",
        "steps": [
            "Nutze die Finger 1, 2, 3 und 5 für C, E, G und das hohe C.",
            "Höre auf jeden Ton und halte die Hand locker.",
            "Gehe über G, E, C mit den Fingern 3, 2, 1 zurück."
        ],
        "duration": "0:27",
        "videoUrl": "assets/videos/04-c-major-arpeggio.mp4",
        "poster": "assets/videos/04-c-major-arpeggio.jpg"
    },
    {
        "id": "v5",
        "title": "Akkorde wechseln: C, F, G",
        "category": "Akkorde",
        "description": "Beobachte die drei Akkordpositionen und wechsle in Ruhe zwischen ihnen.",
        "steps": [
            "Spiele C-Dur: C, E, G.",
            "Wechsle zu F-Dur: F, A, C; dann G-Dur: G, H, D.",
            "Nutze für jeden Akkord die Finger 1, 3 und 5. Ende mit C-Dur."
        ],
        "duration": "0:26",
        "videoUrl": "assets/videos/05-chord-changes.mp4",
        "poster": "assets/videos/05-chord-changes.jpg"
    },
    {
        "id": "v6",
        "title": "Beide Hände zusammen",
        "category": "Koordination",
        "description": "Die rechte Hand spielt fünf Töne, die linke begleitet mit C und G.",
        "steps": [
            "Bereite rechts das mittlere C und links das tiefe C vor.",
            "Rechts spielst du C, D, E, F, G, F, E, D, C.",
            "Links hältst du C vier Schläge, dann G vier Schläge. Ende auf C."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/06-hands-together.mp4",
        "poster": "assets/videos/06-hands-together.jpg"
    }
],

    books: [
        {
            id: "b1",
            title: "Klavier für absolute Anfänger — Band 1 von 3",
            description: "Tasten, Akkorde & Ihre ersten Stücke. Die Klaviatur kennenlernen, einfache Noten lesen, grundlegende Akkorde greifen und erste Musikstücke Schritt für Schritt spielen.",
            badgeText: "Anfänger-Leitfaden",
            badgeColor: "#1b2a38",
            features: [
                "Tastatur, Sitzhaltung, Handposition und elementares Notenlesen",
                "Schritt-für-Schritt-Anleitung für Ihre ersten Akkorde und Rhythmen",
                "Spielen Sie Ihre ersten echten Klavierstücke von Anfang an"
            ],
            downloadUrl: "materials/PIANO-1-DE.pdf",
            coverImage: "assets/covers/piano_IMG1_de.png",
            buttonText: "Anfänger-Leitfaden herunterladen (PDF)"
        },
        {
            id: "b2",
            title: "Leichte Klavierstücke — Buch 2 von 3",
            description: "Schritt für Schritt zu Rhythmus, Koordination & sicherem Spiel. Von der ersten Melodie zum beidhändigen Spiel – eine aufbauende Repertoiresammlung für echte Spielfreude am Klavier.",
            badgeText: "Leichte Stücke",
            badgeColor: "#4a5568",
            features: [
                "Wunderschöne, eigens arrangierte Stücke für Anfänger",
                "Aufbau der Zweihändigkeit und flüssige Akkordwechsel",
                "Bekannte Melodien und traditionelle Werke schrittweise meistern"
            ],
            downloadUrl: "materials/PIANO-2-DE.pdf",
            coverImage: "assets/covers/piano_IMG1_de.png",
            buttonText: "Repertoirebuch herunterladen (PDF)"
        },
        {
            id: "b3",
            title: "30-Tage-Klavierchallenge — Buch 3 von 3",
            description: "Ein strukturierter Tagesplan für mehr Rhythmus, Sicherheit & Beständigkeit. 20 Minuten täglich zur Verbesserung von Notenkenntnis, Koordination, Takt und Akkordflüssigkeit.",
            badgeText: "30-Tage-Challenge",
            badgeColor: "#6b1d2f",
            features: [
                "30 strukturierte Tage mit je 20 Minuten gezielter Tagesübung",
                "Übungen für Notenlesen, Metronom-Takt und Fingerkoordination",
                "Entwickeln Sie eine verlässliche und effektive Übungsroutine"
            ],
            downloadUrl: "materials/PIANO-3-DE.pdf",
            coverImage: "assets/covers/piano_IMG1_de.png",
            buttonText: "Challenge herunterladen (PDF)"
        }
    ],

    otherProducts: []
};

/* Localized interface for the piano demonstrations. */
APP_DATA.videoUI = {
    "label": "Videos",
    "homeTitle": "Video-Demonstrationen",
    "homeText": "Sechs kurze Übungen mit reinem Klavierklang",
    "heading": "Ansehen, zuhören und ausprobieren",
    "intro": "Sechs kurze animierte Demonstrationen. Folge den leuchtenden Tasten und den angezeigten Fingernummern. Du hörst ausschließlich Klavier, ohne Erklärstimme oder Stimmen im Hintergrund.",
    "demo": "Demonstration",
    "of": "von",
    "sound": "Nur Klavier",
    "unsupported": "Dein Browser unterstützt dieses Video nicht.",
    "open": "Demonstration öffnen",
    "speed": "Wiedergabegeschwindigkeit",
    "replay": "Neu starten",
    "practice": "Jetzt bist du dran",
    "choose": "Wähle eine Demonstration",
    "fingers": "Finger",
    "fingerNames": [
        "Daumen",
        "Zeigefinger",
        "Mittelfinger",
        "Ringfinger",
        "kleiner Finger"
    ],
    "creditsLabel": "Klänge",
    "creditsAdapted": "für die Übungen bearbeitet",
    "loadError": "Das Video konnte nicht geladen werden. Lade die Seite neu oder versuche es gleich noch einmal.",
    "playHint": "Drücke die Wiedergabetaste, um zu beginnen."
};
