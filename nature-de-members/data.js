/**
 * LA FARMACIA NATURAL — Members Area Data (Español)
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
        emailBodyTemplate: "Hallo Support-Team! Ich hätte gerne Hilfe mit meinem Mitgliederbereich der Naturapotheke.%0A%0AMein Name ist: ______.",

        // Mostrar ícone de "? Ajuda" flutuante em todas as telas
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VÍDEOS (Curso em vídeo) — vazio se não houver vídeos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. LIVROS (E-books e PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Die Naturapotheke — Der Komplette Leitfaden",
            description: "Der Hauptleitfaden zum Aufbau Ihrer eigenen natürlichen Apotheke zu Hause. Lernen Sie, welche Kräuter Sie verwenden sollten, welche Rezepte wirklich funktionieren und wie Sie sie Schritt für Schritt zubereiten, ohne ein Experte sein zu müssen.",
            badgeText: "HAUPTBUCH",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Einfache Zubereitungsmethoden für Anfänger",
                "Leitfäden zu Kräutern und Küchenzutaten",
                "Schritt-für-Schritt Kräuterrezepte für häufige Beschwerden"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-DE.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Hauptbuch Herunterladen"
        },
        {
            id: "b2",
            title: "Heilende Küchenrezepte",
            description: "Entdecken Sie die therapeutischen Eigenschaften häufiger Heilkräuter und lernen Sie, sie sicher für das tägliche Wohlbefinden zu verwenden: beruhigende Tees, Sirupe, Salben und mehr.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medizinische Profile von über 20 Kräutern",
                "Sicherheitsrichtlinien und Dosierung",
                "Traditionelle Heilanwendungen"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-DE.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Bonus #1 Herunterladen"
        },
        {
            id: "b3",
            title: "Heilende Kräutertees",
            description: "Lernen Sie, beruhigende Kräutertees für Schlaf, Verdauung, Entspannung, Halsgesundheit, Immunität und tägliches Wohlbefinden mit einfachen Zutaten zu kreieren.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Mischungen für Schlaf, Verdauung und Entspannung",
                "Rezepte mit Honig, Ingwer, Minze und Kamille",
                "Schritt-für-Schritt Zubereitung zu Hause"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-DE.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Bonus #2 Herunterladen"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
