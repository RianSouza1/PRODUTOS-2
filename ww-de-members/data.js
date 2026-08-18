/**
 * Holzbearbeitung & Woodworking — Mitgliederbereich (Deutsch)
 */

const APP_DATA = {
    config: {
        brandName: "Holzbearbeitung & Woodworking",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Frage zum Zugang (Holzbearbeitung & Woodworking)",
        emailBodyTemplate: "Hallo Support-Team! Ich benötige Hilfe bei meinem Zugang zum Mitgliederbereich für Holzbearbeitung & Woodworking.\n\nMein Name ist: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Woodworking for Beginners — Werkzeuge, Schnitte & Verbindungen",
            description: "Dieses Buch wurde für alle geschrieben, die schon immer Holzbearbeitung lernen wollten. Werkzeuge, Schnitte, Verbindungen und grundlegende Fertigkeiten ohne teure Maschinen.",
            badgeText: "HAUPTBUCH",
            badgeColor: "#D97706",
            features: [
                "Grundlegende Werkzeuge, Schnitte und Holzverbindungen für Einsteiger",
                "Schritt-für-Schritt-Anleitungen ohne teure Maschinenpark-Pflicht",
                "Tipps zur Materialauswahl, Sicherheit und sauberen Holzbearbeitung"
            ],
            downloadUrl: "materials/WOOD-1-DE.pdf",
            coverImage: "assets/covers/wood_IMG1_de.png",
            buttonText: "Hauptbuch herunterladen (Buch 1)"
        },
        {
            id: "b2",
            title: "Holzbearbeitung leicht gemacht — 18 Projekte Schritt für Schritt",
            description: "18 vollständige Bauprojekte mit exakten Maßen & Schnittlisten. Vom Handyständer bis zur Werkstattbockbank — Schritt für Schritt gebaut.",
            badgeText: "PROJEKTBUCH",
            badgeColor: "#2D6A4F",
            features: [
                "18 vollständige Holzbauprojekte mit exakten Zuschnittlisten",
                "Schritt-für-Schritt-Baupläne vom Werkstattbock bis zum Regal",
                "Praktisches Handbuch direkt auf der Werkbank für sofortige Umsetzung"
            ],
            downloadUrl: "materials/WOOD-2-DE.pdf",
            coverImage: "assets/covers/wood_IMG1_de.png",
            buttonText: "Projektbuch herunterladen (Buch 2)"
        },
        {
            id: "b3",
            title: "Möbel & Projekte für Zuhause — Echte Holzmöbel selber bauen",
            description: "Schluss mit kleinen Basteleien: Bauen Sie echte Möbel mit solider Konstruktion, ausgewogenen Proportionen und perfekter Oberfläche.",
            badgeText: "MÖBELBAU",
            badgeColor: "#B45309",
            features: [
                "Echte Holzmöbel mit solider Konstruktion selbst bauen",
                "Langlebige Verbindungen und hochwertige Holzoberflächen-Veredelung",
                "Proportionierte Möbelstücke für Haus, Garten und Werkstatt"
            ],
            downloadUrl: "materials/WOOD-3-DE.pdf",
            coverImage: "assets/covers/wood_IMG1_de.png",
            buttonText: "Möbelbau-Buch herunterladen (Buch 3)"
        }
    ],

    otherProducts: []
};
