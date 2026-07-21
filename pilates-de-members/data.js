/**
 * Pilates & Wohlbefinden — Mitgliederbereich (Deutsch)
 */

const APP_DATA = {
    config: {
        brandName: "Pilates & Wohlbefinden",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Frage zum Zugang (Pilates & Wohlbefinden)",
        emailBodyTemplate: "Hallo Support-Team. Ich benötige Hilfe beim Zugang zu meinem Pilates & Wohlbefinden Mitgliederbereich.\n\nMein Name ist: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Pilates für Anfänger — Ausgabe 2026",
            description: "Eine einfache Schritt-für-Schritt-Anleitung zu Kraft, Beweglichkeit und Selbstvertrauen zu Hause. Entwickelt, um Ihnen zu helfen, in Ihrem eigenen Tempo stärker, beweglicher und energiegeladener zu werden.",
            badgeText: "Hauptmaterial",
            badgeColor: "#C07A68",
            features: [
                "Schritt-für-Schritt-Übungen für Anfänger zu Hause",
                "Verbessern Sie Haltung, Beweglichkeit und Core-Kraft",
                "Sichere Bewegungen ohne übermäßige Belastung"
            ],
            downloadUrl: "materials/PILATES-1-DE.pdf",
            coverImage: "assets/covers/pil_IMG1_de.png",
            buttonText: "Hauptmaterial herunterladen"
        },
        {
            id: "b2",
            title: "Wall Pilates — Ausgabe 2026",
            description: "Sanfte, unterstützte Übungen für Kraft, Balance und Mobilität zu Hause. Nutzen Sie die Wand als Partnerin, um Ihre Haltung zu korrigieren und Ihren Körper zu stärken.",
            badgeText: "Bonus #1",
            badgeColor: "#5B8C7D",
            features: [
                "Nutzen Sie die Wand für besseres Gleichgewicht und Unterstützung",
                "Sanfte Mobilitätsübungen für den gesamten Körper",
                "Ideal für das Training zu Hause ohne spezielle Ausrüstung"
            ],
            downloadUrl: "materials/PILATES-2-DE.pdf",
            coverImage: "assets/covers/pil_IMG1_de.png",
            buttonText: "Bonus #1 herunterladen"
        },
        {
            id: "b3",
            title: "30-Tägiges Pilates für Senioren — Ausgabe 2026",
            description: "Ein sanfter täglicher Plan für Kraft, Gleichgewicht, Beweglichkeit und Selbstvertrauen. Speziell für Erwachsene entwickelt, die sicher aktiv bleiben möchten.",
            badgeText: "Bonus #2",
            badgeColor: "#9C6A88",
            features: [
                "Vollständiges 30-Tage-Programm mit täglichen sanften Einheiten",
                "Fokus auf Gleichgewicht, Gelenkbeweglichkeit und Energie",
                "Sicher zu Hause für jedes Fitnessniveau durchführbar"
            ],
            downloadUrl: "materials/PILATES-3-DE.pdf",
            coverImage: "assets/covers/pil_IMG1_de.png",
            buttonText: "Bonus #2 herunterladen"
        }
    ],

    otherProducts: []
};
