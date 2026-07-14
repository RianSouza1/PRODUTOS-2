/**
 * Lebensmittelkonservierung & Haltbarmachung — Mitgliederbereich Daten (Deutsch)
 * v1
 */

const APP_DATA = {
    config: {
        brandName: "Lebensmittelkonservierung & Haltbarmachung",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Frage zum Zugang (Lebensmittelkonservierung & Haltbarmachung)",
        emailBodyTemplate: "Hallo Support-Team! Ich benötige Hilfe mit meinem Mitgliederbereich für Lebensmittelkonservierung & Haltbarmachung.\n\nMein Name ist: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Die vollständige Konservierungs- und Einmach-Bibel 2026",
            description: "Ein anfängerfreundlicher Leitfaden für Einkochen im Wasserbad, Druckeinkochen, Einlegen, Marmeladen, Saucen, sichere Lagerung und Lebensmittelkonservierung zu Hause.",
            badgeText: "HAUPTBUCH",
            badgeColor: "#b45309",
            features: [
                "Wasserbad- und Druckeinkochen für Einsteiger",
                "Marmeladen, Saucen und Einmachen leicht gemacht",
                "Sichere Lagerung und Lebensmittelkonservierung zu Hause"
            ],
            downloadUrl: "materials/Canning-1-AL.pdf",
            coverImage: "assets/covers/can_IMG1_al.png",
            buttonText: "Hauptbuch herunterladen"
        },
        {
            id: "b2",
            title: "Das Kochbuch mit lagerstabiler Vorratsmischung",
            description: "Hausgemachte Trockenmischungen, Mahlzeitengläser, Suppenmischungen, Backmischungen, Gewürzmischungen und budgetfreundliche Vorratsgrundlagen für den Alltag — ganz ohne Einkochgerät.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Selbstgemachte Back- und Suppenmischungen im Glas",
                "Gewürzmischungen und budgetfreundliche Grundlagen",
                "Sparen Sie Zeit und Geld mit intelligenter Vorratshaltung"
            ],
            downloadUrl: "materials/Canning-2-AL.pdf",
            coverImage: "assets/covers/can_IMG1_al.png",
            buttonText: "Bonus #1 herunterladen"
        },
        {
            id: "b3",
            title: "Der Leitfaden für das Fermentieren zu Hause für Einsteiger",
            description: "Einfache fermentierte Gemüse, Sauerkraut, Gurken, Kimchi-ähnliche Rezepte, Salzlake, Würzmittel und fermentierte Getränke — Traditionell · Praktisch · Einsteigerfreundlich.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Sauerkraut, Gurken und Kimchi-Rezepte",
                "Fermentierte Getränke, Lake und Gewürze",
                "Sichere Küchenpraktiken und Fehlerbehebung"
            ],
            downloadUrl: "materials/Canning-3-AL.pdf",
            coverImage: "assets/covers/can_IMG1_al.png",
            buttonText: "Bonus #2 herunterladen"
        }
    ],

    otherProducts: []
};