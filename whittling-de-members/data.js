/**
 * Schnitzen & Holzhandwerk — Mitgliederbereich (Deutsch)
 */

const APP_DATA = {
    config: {
        brandName: "Schnitzen & Holzhandwerk",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Frage zum Zugang (Schnitzen & Holzhandwerk)",
        emailBodyTemplate: "Hallo Support-Team! Ich möchte gerne Hilfe bei meinem Zugang zum Mitgliederbereich für Schnitzen & Holzhandwerk anfordern.\n\nMein Name ist: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Schnitzen für Einsteiger — Werkzeug, Sicherheit & erste einfache Projekte",
            description: "Ein vollständiger, praxisnaher Leitfaden zum sicheren Handschnitzen für absolute Anfänger.",
            badgeText: "Band 1",
            badgeColor: "#475569",
            features: [
                "Grundlegende Sicherheit und Schutzausrüstung",
                "Wie Sie die Holzmaserung richtig lesen",
                "Ihr allererstes einfaches Schnitzprojekt"
            ],
            downloadUrl: "materials/WHITTLING-1-AL.pdf",
            coverImage: "assets/covers/whi_IMG1_al.png",
            buttonText: "Band 1 herunterladen"
        },
        {
            id: "b2",
            title: "Einfache Schnitzprojekte aus Holz — Schritt für Schritt zu neuen Fertigkeiten und sicherer Technik",
            description: "Aufbauend auf Schnitzen für Einsteiger — von einfachen geometrischen Formen hin zu ausdrucksstarken Figuren, durch strukturierte und gut umsetzbare Projekte.",
            badgeText: "Hauptanleitung",
            badgeColor: "#8B5A2B",
            features: [
                "Elf detaillierte Holzschnitzprojekte",
                "Vorlagen skalieren und auf den Holzblock übertragen",
                "Clevere Tricks zur Symmetrie- und Formkontrolle"
            ],
            downloadUrl: "materials/WHITTLING-2-AL.pdf",
            coverImage: "assets/covers/whi_IMG1_al.png",
            buttonText: "Hauptanleitung herunterladen (Band 2)"
        },
        {
            id: "b3",
            title: "Holzschnitzen: Finishing & Qualitätsverbesserung — Schärfen, Detailarbeit & Oberflächengestaltung",
            description: "Schärfen, Detailarbeit, Oberflächengestaltung & vollendete Ergebnisse. Band 3 von 3 in der kompletten Holzschnitz-Reihe.",
            badgeText: "Band 3",
            badgeColor: "#2E5A44",
            features: [
                "Detailarbeit und Techniken zum Messerschärfen",
                "Auswahl an Finishs, Ölen und Wachsen",
                "Wie Sie das perfekte Endergebnis erzielen"
            ],
            downloadUrl: "materials/WHITTLING-3-AL.pdf",
            coverImage: "assets/covers/whi_IMG1_al.png",
            buttonText: "Band 3 herunterladen"
        }
    ],

    otherProducts: []
};
