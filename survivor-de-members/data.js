/**
 * Survival & Bushcraft — Mitgliederbereich (Deutsch)
 * Die Vollständige Bushcraft & Überleben Kollektion
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Frage zum Zugang (Survival & Bushcraft)",
        emailBodyTemplate: "Hallo Support-Team. Ich benötige Hilfe beim Zugang zu meinem Survival & Bushcraft Mitgliederbereich.\n\nMein Name ist: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Überleben für Einsteiger — Ausgabe 2026",
            description: "Wasser, Feuer, Unterkunft, Signalisierung und grundlegende Überlebenstechniken. Ein praxisnaher Leitfaden für alle, die Zeit in der Natur verbringen — Wanderer, Camper, Jäger oder einfache Abenteurer.",
            badgeText: "Hauptmaterial",
            badgeColor: "#6B7C44",
            features: [
                "Wasser finden, aufbereiten und sichern in der Wildnis",
                "Feuer machen, Unterkunft bauen und Signale senden",
                "Im Gelände erprobte Techniken für Einsteiger"
            ],
            downloadUrl: "materials/SURVIVOR-1-DE.pdf",
            coverImage: "assets/covers/sur_IMG1_de.png",
            buttonText: "Hauptmaterial herunterladen"
        },
        {
            id: "b2",
            title: "Bushcraft & Wildnisfähigkeiten — Ausgabe 2026",
            description: "Ausrüstung, Knoten, Navigation, Lageraufbau und eigenständiges Überleben in der Natur. Grundlegende Bushcraft-Fertigkeiten für sicheres und selbstbewusstes Draußenleben.",
            badgeText: "Bonus #1",
            badgeColor: "#7A5C3E",
            features: [
                "Werkzeuge, Knoten und Navigationstechniken meistern",
                "Lageraufbau und eigenständiges Überleben in der Natur",
                "Schritt-für-Schritt-Anleitungen für Anfänger ohne Vorkenntnisse"
            ],
            downloadUrl: "materials/SURVIVOR-2-DE.pdf",
            coverImage: "assets/covers/sur_IMG1_de.png",
            buttonText: "Bonus #1 herunterladen"
        },
        {
            id: "b3",
            title: "Notfallvorsorge & Überlebens-Erste-Hilfe — Ausgabe 2026",
            description: "72-Stunden-Notgepäck, Stromausfälle, Evakuierung & Familiensicherheit. Alles, was gewöhnliche Familien für den Notfall wissen müssen.",
            badgeText: "Bonus #2",
            badgeColor: "#8B4513",
            features: [
                "72-Stunden-Notgepäck richtig zusammenstellen",
                "Stromausfall, Evakuierung und häusliche Notfallvorsorge",
                "Grundlegende Erste Hilfe für Familien in Notsituationen"
            ],
            downloadUrl: "materials/SURVIVOR-3-DE.pdf",
            coverImage: "assets/covers/sur_IMG1_de.png",
            buttonText: "Bonus #2 herunterladen"
        }
    ],

    otherProducts: []
};
