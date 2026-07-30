/**
 * Akustikgitarren-Meisterschaft — Mitgliederbereich (Deutsch) v6
 */

const APP_DATA = {
    config: {
        brandName: "Akustikgitarren-Meisterschaft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Zugangs-Support-Anfrage (Akustikgitarren-Meisterschaft)",
        emailBodyTemplate: "Hallo Support-Team! Ich möchte Unterstützung bezüglich meines Zugangs zum Mitgliederbereich der Akustikgitarren-Meisterschaft anfordern.\n\nMein Name ist: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Akustikgitarre für absolute Anfänger — Buch 1 von 3",
            description: "Ein essenzieller Einführungskurs für absolute Anfänger, die ihre ersten Schritte auf der Akustikgitarre machen. Lernen Sie grundlegende Akkorde, Basisrhythmen und spielen Sie Ihre allerersten Songs.",
            badgeText: "Anfänger-Handbuch",
            badgeColor: "#F57C00",
            features: [
                "Essenzielle Akkorde für absolute Anfänger",
                "Grundlegende Rhythmus- und Schlagmuster-Lektionen",
                "Schritt-für-Schritt-Anleitung zu Ihren ersten Songs"
            ],
            downloadUrl: "materials/GUITAR-1-AL.pdf",
            coverImage: "assets/covers/guitar_IMG1_de.png",
            buttonText: "Anfänger-Handbuch herunterladen (PDF)"
        },
        {
            id: "b2",
            title: "Einfache Akustikgitarren-Songs — Buch 2 der Sammlung",
            description: "Bringen Sie Ihre Fähigkeiten weiter, indem Sie Akkordwechsel und Schlagmuster meistern. Spielen Sie mit Selbstvertrauen durch dieses Schritt-für-Schritt-Liederbuch für progressives Lernen.",
            badgeText: "Einfache Songs",
            badgeColor: "#475569",
            features: [
                "Flüssige Akkordwechsel und Übergänge",
                "Dynamische Schlagmuster-Tutorials",
                "Schritt-für-Schritt-Songs für mehr Selbstvertrauen"
            ],
            downloadUrl: "materials/GUITAR-2-AL.pdf",
            coverImage: "assets/covers/guitar_IMG1_de.png",
            buttonText: "Liederbuch herunterladen (PDF)"
        },
        {
            id: "b3",
            title: "30-Tage Akustikgitarren-Herausforderung — Buch 3 von 3",
            description: "Ein strukturierter, täglicher Übungsplan zur Verbesserung Ihres Rhythmus, Aufbaus von Selbstvertrauen und Kontinuität. Ein spezialisiertes Trainingshandbuch von Daniel Harper.",
            badgeText: "30-Tage-Challenge",
            badgeColor: "#0F766E",
            features: [
                "Täglicher Übungsplan für 30 Tage",
                "Rhythmus-, Selbstvertrauens- und Präzisionsübungen",
                "Intelligente Routinenplanung für stetigen Fortschritt"
            ],
            downloadUrl: "materials/GUITAR-3-AL.pdf",
            coverImage: "assets/covers/guitar_IMG1_de.png",
            buttonText: "Übungsplan herunterladen (PDF)"
        }
    ],

    otherProducts: []
};
