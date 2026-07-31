/**
 * Calisthenics für Zuhause — Mitgliederbereich (Deutsch) v10
 */

const APP_DATA = {
    config: {
        brandName: "Calisthenics für Zuhause",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Support-Anfrage zum Zugang (Calisthenics für Zuhause)",
        emailBodyTemplate: "Hallo Support-Team! Ich möchte bitte Unterstützung bezüglich meines Zugangs zum Mitgliederbereich von Calisthenics für Zuhause anfordern.\n\nMein Name ist: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Calisthenics für absolute Anfänger — Buch 1 von 3",
            description: "Ein essenzieller Einführungsleitfaden für absolute Anfänger, die ihre ersten Schritte im Eigengewichtstraining machen. Lernen Sie Grundübungen, bauen Sie Kraft auf und starten Sie sicher.",
            badgeText: "Anfängerleitfaden",
            badgeColor: "#769B3F",
            features: [
                "Essenzielle Eigengewichtsübungen für Anfänger",
                "Schritt-für-Schritt-Anleitung für sicheres Training",
                "Bauen Sie Kraft und Beweglichkeit im eigenen Tempo auf"
            ],
            downloadUrl: "materials/CALISTENIA-1-AL.pdf",
            coverImage: "assets/covers/cali_IMG1_de.png",
            buttonText: "Anfängerleitfaden herunterladen (PDF)"
        },
        {
            id: "b2",
            title: "Komplettes Eigengewichts-Trainingsprogramm — Buch 2 der Sammlung",
            description: "Bringen Sie Ihr Training auf das nächste Level, indem Sie Progressionen und funktionelle Übungen meistern. Entwickeln Sie Ausdauer, Kontrolle und Muskelmasse ganz ohne Fitnessgeräte.",
            badgeText: "Trainingsprogramm",
            badgeColor: "#475569",
            features: [
                "Fortgeschrittene Übungsprogressionen und Techniken",
                "Kraft und Körperkontrolle bei jeder Bewegung",
                "Kompletter Trainingsleitfaden für Zuhause"
            ],
            downloadUrl: "materials/CALISTENIA-2-AL.pdf",
            coverImage: "assets/covers/cali_IMG1_de.png",
            buttonText: "Trainingsprogramm herunterladen (PDF)"
        },
        {
            id: "b3",
            title: "30-Tage Calisthenics Challenge — Buch 3 von 3",
            description: "Ein strukturierter, täglicher Trainingsplan zur Entwicklung von Konsistenz, Verbesserung der Physis und Stärkung des gesamten Körpers. Ein spezialisiertes Handbuch für schnelle Ergebnisse.",
            badgeText: "30-Tage Challenge",
            badgeColor: "#0F766E",
            features: [
                "Tägliche Trainingsstruktur für 30 Tage",
                "Fokus auf Disziplin, Form und Ausdauer",
                "Intelligente Routinen für kontinuierlichen Erfolg"
            ],
            downloadUrl: "materials/CALISTENIA-3-AL.pdf",
            coverImage: "assets/covers/cali_IMG1_de.png",
            buttonText: "Trainingsplan herunterladen (PDF)"
        }
    ],

    otherProducts: []
};
