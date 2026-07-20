/**
 * Excel Mastery — Àrea de Membres (Català)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pregunta sobre l'accés (Excel Mastery)",
        emailBodyTemplate: "Hola equip de suport. M'agradaria rebre ajuda amb el meu accés a l'àrea de membres d'Excel Mastery.\n\nEl meu nom és: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "De zero a professional d'Excel — Edició 2026",
            description: "Guia pràctica per a principiants que inclou fulls de càlcul, organització i productivitat diària. Des de la primera cel·la fins a eines avançades.",
            badgeText: "Material principal",
            badgeColor: "#1a7a45",
            features: [
                "Fulls de càlcul i organització de dades per a principiants",
                "Productivitat diària i gestió de llistes de clients",
                "Gestió de finances i planificació del temps a Excel"
            ],
            downloadUrl: "materials/Excel-1-CAT.pdf",
            coverImage: "assets/covers/excel_IMG1_ca.png",
            buttonText: "Descarregar material principal"
        },
        {
            id: "b2",
            title: "Fórmules d'Excel, funcions i fluxos de treball intel·ligents — Edició 2026",
            description: "Guia pràctica per resoldre tasques a Excel més ràpidament. Utilitzeu fórmules i funcions per convertir taules simples en eines potents per a la resolució de problemes.",
            badgeText: "Bonus #1",
            badgeColor: "#D97706",
            features: [
                "Fórmules i funcions avançades d'Excel",
                "Càlculs automàtics i processos intel·ligents",
                "Resolució ràpida de tasques diàries"
            ],
            downloadUrl: "materials/Excel-2-CAT.pdf",
            coverImage: "assets/covers/excel_IMG1_ca.png",
            buttonText: "Descarregar bonus #1"
        },
        {
            id: "b3",
            title: "Fulls d'Excel, informes i conclusions — Edició 2026",
            description: "Guia pràctica per transformar dades en informes clars i professionals. Apreneu a presentar resultats de manera eficaç al vostre equip, clients o direcció.",
            badgeText: "Bonus #2",
            badgeColor: "#7C3AED",
            features: [
                "Quadres de comandament professionals i taules dinàmiques",
                "Informes de resums i taules Pivot",
                "Presentació de dades a la direcció, clients i equip"
            ],
            downloadUrl: "materials/Excel-3-CAT.pdf",
            coverImage: "assets/covers/excel_IMG1_ca.png",
            buttonText: "Descarregar bonus #2"
        }
    ],

    otherProducts: []
};
