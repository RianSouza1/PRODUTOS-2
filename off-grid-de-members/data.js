/**
 * OFF GRID LIVING — Members Area Data (DE)
 */

const APP_DATA = {
    config: {
        brandName: "Off Grid Leben",
        contactEmail: "suporte@offgridliving.com", 
        emailSubject: "Frage zum Kurszugang (Off Grid)",
        emailBodyTemplate: "Hallo Support-Team! Ich brauche Hilfe mit meinem Off Grid Leben Mitgliederbereich.%0A%0AMein Name ist: ______.",
        showFloatingHelp: true
    },

    videos: [], 

    books: [
        {
            id: "b1",
            title: "Off Grid Living 2026 Kompletter Blueprint",
            description: "Ein kompletter Off-Grid-Blueprint für Energie, Wasser, Nahrung und Sicherheit—kein Raten, keine Lücken.",
            badgeText: "HAUPT-BLUEPRINT",
            badgeColor: "#10B981",
            features: ["Energie- & Wassersysteme", "Nahrungsunabhängigkeit", "Sicherheitsplanung"],
            downloadUrl: "materials/Das-Leben-Off-Grid-Off-Grid-1-DE.pdf",
            coverImage: "assets/covers/CAPA ALEMÃO.png",
            buttonText: "Blueprint herunterladen"
        },
        {
            id: "b2",
            title: "70+ DIY Off-Grid-Projekte",
            description: "Über 70 Schritt-für-Schritt-DIY-Projekte, die Sie auch mit grundlegenden Werkzeugen und Fähigkeiten umsetzen können.",
            badgeText: "DIY PROJEKTE",
            badgeColor: "#059669",
            features: ["Schritt-für-Schritt-Anleitungen", "Grundwerkzeuge ausreichend", "Praktische Bauprojekte"],
            downloadUrl: "materials/UBERLEBENSHANDBUCH-FUR-OFF-GRID-LEB-Off-Grid-2-DE.pdf",
            coverImage: "assets/covers/Capa 2 Alemão.png",
            buttonText: "Projekte herunterladen"
        },
        {
            id: "b3",
            title: "Off Grid Überlebensplanung",
            description: "Off-Grid-Überlebensplanung für Stromausfälle, wirtschaftliche Instabilität und Lieferkettenunterbrechungen.",
            badgeText: "ÜBERLEBENS-GUIDE",
            badgeColor: "#F59E0B",
            features: ["Vorbereitung auf Stromausfälle", "Notfallprotokolle", "8-Wochen-Übergangsplan"],
            downloadUrl: "materials/Autark-Leben-in-8-Wochen.pdf",
            coverImage: "assets/covers/Capa 3 Alemão.png",
            buttonText: "Leitfaden herunterladen"
        }
    ],

    otherProducts: []
};
