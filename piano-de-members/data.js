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

    videos: [],

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
