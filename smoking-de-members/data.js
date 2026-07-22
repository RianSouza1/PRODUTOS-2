/**
 * Räuchern & BBQ — Mitgliederbereich (Deutsch)
 */

const APP_DATA = {
    config: {
        brandName: "Räuchern & BBQ",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Frage zum Zugang (Räuchern & BBQ)",
        emailBodyTemplate: "Hallo Support-Team! Ich benötige Hilfe bei meinem Zugang zum Mitgliederbereich von Räuchern & BBQ.\n\nMein Name ist: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Fleisch räuchern für Einsteiger — Ausgabe 2026",
            description: "Feuer, Rauch, Temperatur & Zartheit zu Hause meistern. Ein warmer, ermutigender Leitfaden, dem Sie bequem von zu Hause aus folgen können, um saftiges Fleisch mit perfektem Raucharoma zuzubereiten.",
            badgeText: "Hauptbuch",
            badgeColor: "#BF360C",
            features: [
                "Feuer, Rauch und Temperatur meisterhaft kontrollieren",
                "Detaillierte Schritt-für-Schritt-Anleitungen für Einsteiger",
                "Praktische Tipps für das Räuchern zu Hause"
            ],
            downloadUrl: "materials/SMOKING-1-DE.pdf",
            coverImage: "assets/covers/SMK_IMG1_DE.png",
            buttonText: "Hauptbuch herunterladen"
        },
        {
            id: "b2",
            title: "Backyard BBQ Rezepte — Ausgabe 2026",
            description: "Beliebte Smoked Meats, klassische Beilagen & komplette Cookout-Menüs für Familientreffen, Geburtstage, Spieltage und unvergessliche Gartenpartys.",
            badgeText: "Bonus #1",
            badgeColor: "#8D6E63",
            features: [
                "Die besten Rezepte für geräuchertes Fleisch",
                "Klassische amerikanische BBQ-Beilagen",
                "Vollständige Menüpläne für Ihre nächste Grillparty"
            ],
            downloadUrl: "materials/SMOKING-2-DE.pdf",
            coverImage: "assets/covers/SMK_IMG1_DE.png",
            buttonText: "Bonus #1 herunterladen"
        },
        {
            id: "b3",
            title: "BBQ-Rubs, Saucen & Marinaden — Ausgabe 2026",
            description: "Kräftige und ausgewogene Aromen für jeden Fleischzuschnitt meisterhaft entwickeln. Der ultimative Leitfaden, um Ihren Gerichten den perfekten Geschmackskick zu verleihen.",
            badgeText: "Bonus #2",
            badgeColor: "#E64A19",
            features: [
                "Geheimrezepte für erstklassige BBQ-Rubs und Gewürzmischungen",
                "Schmackhafte Saucen und Marinaden für jeden Fleischtyp",
                "Tipps zur Aromenmaximierung für Grillprofis"
            ],
            downloadUrl: "materials/SMOKING-3-DE.pdf",
            coverImage: "assets/covers/SMK_IMG1_DE.png",
            buttonText: "Bonus #2 herunterladen"
        }
    ],

    otherProducts: []
};
