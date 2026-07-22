/**
 * Heiminstandhaltung & Reparatur — Mitgliederbereich (Deutsch)
 */

const APP_DATA = {
    config: {
        brandName: "Heiminstandhaltung & Reparatur",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Anfrage zum Zugang (Heiminstandhaltung & Reparatur)",
        emailBodyTemplate: "Hallo Support-Team! Ich benötige Hilfe mit meinem Zugang zum Mitgliederbereich für Heiminstandhaltung & Reparatur.\n\nMein Name ist: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Der komplette Leitfaden zur Instandhaltung & Verbesserung Ihres Zuhauses — Ausgabe 2026",
            description: "Praktische Projekte, Expertenrat & Dauerhafte Ergebnisse. Ihr vollständiges Nachschlagewerk zur Instandhaltung, Reparatur und Verbesserung Ihres Zuhauses — mit Sicherheit, Sachverstand und einem sauberen Endergebnis.",
            badgeText: "Hauptleitfaden",
            badgeColor: "#D97706",
            features: [
                "Schritt-für-Schritt-Anleitungen für wesentliche Heimreparaturen",
                "Expertenrat für Instandhaltungsprojekte",
                "Praktische Heimwerker-Tipps für langanhaltende Ergebnisse"
            ],
            downloadUrl: "materials/REPAIR-1-AL.pdf",
            coverImage: "assets/covers/rep_IMG1_al.png",
            buttonText: "Hauptleitfaden herunterladen"
        },
        {
            id: "b2",
            title: "Der praktische Ratgeber für Heiminstallationen — Ausgabe 2026",
            description: "Sicher • DIN VDE 0100-konform • Selbst machen mit Vertrauen. Ein aktualisiertes praktisches Handbuch für die sichere Durchführung von Elektroarbeiten im Eigenheim.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Elektroarbeiten im Eigenheim sicher durchführen",
                "Vollständig DIN VDE 0100-konform",
                "Schritt-für-Schritt-Anleitungen für gängige Installationen"
            ],
            downloadUrl: "materials/REPAIR-2-AL.pdf",
            coverImage: "assets/covers/rep_IMG1_al.png",
            buttonText: "Bonus #1 herunterladen"
        },
        {
            id: "b3",
            title: "Der vollständige Leitfaden zu Sanitärinstallationen — Ausgabe 2026",
            description: "Reparieren • Verbessern • Im Fluss Halten. Ihr praktisches Nachschlagewerk zum Verstehen, Warten und Instandhalten der Wasserleitungen im Eigenheim.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Häufige Sanitärprobleme erkennen und beheben",
                "Hauswasserleitungen in einwandfreiem Zustand halten",
                "Klare Anleitungen für Einsteiger und Heimwerker"
            ],
            downloadUrl: "materials/REPAIR-3-AL.pdf",
            coverImage: "assets/covers/rep_IMG1_al.png",
            buttonText: "Bonus #2 herunterladen"
        }
    ],

    otherProducts: []
};
