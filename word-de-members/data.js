/**
 * Word Meisterschaft — Mitgliederbereich (Deutsch)
 */

const APP_DATA = {
    config: {
        brandName: "Word Meisterschaft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Frage zum Zugang (Word Meisterschaft)",
        emailBodyTemplate: "Hallo Support-Team! Ich benötige Hilfe bei meinem Zugang zum Mitgliederbereich von Word Meisterschaft.\n\nMein Name ist: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Word von Null zum Profi — Ausgabe 2026 (Teil 1 von 3)",
            description: "Der komplette Leitfaden für Einsteiger – lernen Sie, klare, übersichtliche und professionell gestaltete Dokumente in Microsoft Word zu erstellen.",
            badgeText: "Hauptbuch",
            badgeColor: "#2563EB",
            features: [
                "Meistern Sie die Grundlagen von Microsoft Word",
                "Erstellen Sie perfekt strukturierte Dokumente",
                "Praktische Tipps für die tägliche Dokumentenverwaltung"
            ],
            downloadUrl: "materials/WORD-1-DE.pdf",
            coverImage: "assets/covers/word_IMG1_de.png",
            buttonText: "Hauptbuch herunterladen (PDF)"
        },
        {
            id: "b2",
            title: "Formatierung, Formatvorlagen & smarte Arbeitsabläufe in Word — Ausgabe 2026 (Teil 2 von 3)",
            description: "Ein praktischer Leitfaden zur Erstellung konsistenter, übersichtlich strukturierter und professioneller Dokumente in Microsoft Word.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Nutzen Sie erweiterte Formatvorlagen und professionelle Layouts",
                "Sichern Sie eine einheitliche Struktur in all Ihren Dokumenten",
                "Führen Sie effiziente und smarte Arbeitsabläufe ein"
            ],
            downloadUrl: "materials/WORD-2-DE.pdf",
            coverImage: "assets/covers/word_IMG1_de.png",
            buttonText: "Bonus #1 herunterladen (PDF)"
        },
        {
            id: "b3",
            title: "Word-Vorlagen, Seriendruck & erweiterte Werkzeuge — Ausgabe 2026 (Teil 3 von 3)",
            description: "Wiederverwendbare Dokumente, personalisierter Schriftverkehr, interaktive Formulare und smarte Automatisierung in Microsoft Word.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Gestalten Sie wiederverwendbare Vorlagen und Formulare",
                "Nutzen Sie den Seriendruck für personalisierte Serienbriefe",
                "Verwenden Sie smarte Automatisierungswerkzeuge in Word"
            ],
            downloadUrl: "materials/WORD-3-DE.pdf",
            coverImage: "assets/covers/word_IMG1_de.png",
            buttonText: "Bonus #2 herunterladen (PDF)"
        }
    ],

    otherProducts: []
};
