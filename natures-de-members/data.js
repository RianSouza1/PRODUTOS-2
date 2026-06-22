/**
 * NATURE'S APOTHECARY — Members Area Data
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Die Naturapotheke", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Frage zum Kurszugang (Die Naturapotheke)",
        emailBodyTemplate: "Hallo Support-Team! Ich benötige Hilfe mit meinem Mitgliederbereich von Die Naturapotheke.%0A%0AMein Name ist: ______.",

        // Mostrar ícone de "? Ajuda" flutuante em todas as telas
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VÍDEOS (Video Course) - Ocultado ou Vazio se não houver vídeos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. LIVROS (E-books e PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Handbuch der Naturapotheke",
            description: "Der komplette Leitfaden für den Aufbau Ihrer eigenen natürlichen Apotheke zu Hause. Erfahren Sie, welche Kräuter Sie verwenden sollten, welche Rezepte wirklich funktionieren und wie Sie diese Schritt für Schritt zubereiten.",
            badgeText: "HAUPTBUCH",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Anfängerfreundliche Zubereitungsmethoden",
                "Kräuter- & Küchenzutaten-Leitfäden",
                "Schritt-für-Schritt-Kräuterrezepte"
            ],
            downloadUrl: "materials/natures_apothecary_handbook.pdf",
            coverImage: "assets/covers/wall1.webp",
            buttonText: "Hauptbuch herunterladen"
        },
        {
            id: "b2",
            title: "Die Heilkraft der Kräuter",
            description: "Schalten Sie die therapeutischen Eigenschaften gängiger Heilkräuter frei und lernen Sie, wie Sie diese sicher für das tägliche Wohlbefinden, beruhigende Tees und die häusliche Pflege nutzen.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Heilprofile von über 20 Kräutern",
                "Sicherheitsrichtlinien & Dosierung",
                "Traditionelle Heilanwendungen"
            ],
            downloadUrl: "materials/healing_power_of_herbs.pdf",
            coverImage: "assets/covers/wall1.webp",
            buttonText: "Bonus #1 herunterladen"
        },
        {
            id: "b3",
            title: "Von Barbara O'Neill inspirierte Heilmittel",
            description: "Inspiriert von traditionellen Heilmittel- und natürlichen Wellnesspraktiken hilft Ihnen dieser Leitfaden, ein gesünderes, chemiefreies Leben mit natürlichen Therapien zu führen.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Traditionelle natürliche Heilmittel",
                "Tipps für ein chemiefreies Leben",
                "Von Barbara O'Neill inspirierte Praktiken"
            ],
            downloadUrl: "materials/barbara_oneill_inspired_remedies.pdf",
            coverImage: "assets/covers/wall1.webp",
            buttonText: "Bonus #2 herunterladen"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
