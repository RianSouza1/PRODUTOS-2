/**
 * Eine Stunde mit Jesus — Mitgliederbereich (Deutsch)
 */

const APP_DATA = {
    config: {
        brandName: "Eine Stunde mit Jesus",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Frage zum Zugang (Eine Stunde mit Jesus)",
        emailBodyTemplate: "Hallo Support-Team! Ich möchte um Hilfe bezüglich meines Zugangs zum Mitgliederbereich von Eine Stunde mit Jesus bitten.\n\nMein Name ist: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Band 1: Psalmen 1–50 — Von der Zuflucht zum Vertrauen",
            description: "Tägliche Betrachtungen zu jedem Psalm (1 bis 50). Entdecken Sie täglich Zuflucht, Trost und Stärke im Wort Gottes.",
            badgeText: "Band 1",
            badgeColor: "#B45309",
            features: [
                "Betrachtungen zu den Psalmen 1–50",
                "Tägliche Inspirationen und Gebete",
                "Druckfertiges PDF-Format"
            ],
            downloadUrl: "materials/Book1_Psalms_1-50_DE_FINAL.pdf",
            coverImage: "assets/covers/sal_IMG1_de.png",
            buttonText: "Band 1 herunterladen (PDF)"
        },
        {
            id: "b2",
            title: "Band 2: Psalmen 51–100 — Von der Vergebung zum Lobpreis",
            description: "Tägliche Betrachtungen zu jedem Psalm (51 bis 100). Erleben Sie die heilende Kraft der Vergebung und des Lobes Gottes.",
            badgeText: "Band 2",
            badgeColor: "#B45309",
            features: [
                "Betrachtungen zu den Psalmen 51–100",
                "Tägliche Inspirationen und Gebete",
                "Druckfertiges PDF-Format"
            ],
            downloadUrl: "materials/Book2_Psalms_51-100_DE_FINAL.pdf",
            coverImage: "assets/covers/sal_IMG1_de.png",
            buttonText: "Band 2 herunterladen (PDF)"
        },
        {
            id: "b3",
            title: "Band 3: Psalmen 101–150 — Von der Weisheit zum Lobpreis",
            description: "Tägliche Betrachtungen zu jedem Psalm (101 bis 150). Treten Sie auf den Weg göttlicher Weisheit und freudiger Feier Seiner Gegenwart.",
            badgeText: "Band 3",
            badgeColor: "#B45309",
            features: [
                "Betrachtungen zu den Psalmen 101–150",
                "Tägliche Inspirationen und Gebete",
                "Druckfertiges PDF-Format"
            ],
            downloadUrl: "materials/Book3_Psalms_101-150_DE_FINAL.pdf",
            coverImage: "assets/covers/sal_IMG1_de.png",
            buttonText: "Band 3 herunterladen (PDF)"
        }
    ],

    otherProducts: []
};
