/**
 * Excel Mastery — Informații Zona Membrilor (Română)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Solicitare acces (Excel Mastery)",
        emailBodyTemplate: "Bună ziua, echipa de asistență! Am nevoie de ajutor pentru a-mi accesa zona de membru pe Excel Mastery.\n\nNumele meu este: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "De la zero la profesionist Excel — Ediția 2026",
            description: "Un ghid practic pentru începători, care acoperă tabelele de calcul, organizarea și productivitatea de zi cu zi. Învață Excel pas cu pas, de la prima celulă până la instrumente avansate.",
            badgeText: "CARTEA PRINCIPALĂ",
            badgeColor: "#1a7a45",
            features: [
                "Foi de calcul și organizarea datelor pentru începători",
                "Productivitatea zilnică și gestionarea listelor de clienți",
                "Urmărirea finanțelor și planificarea timpului în Excel"
            ],
            downloadUrl: "materials/Excel-1-RO.pdf",
            coverImage: "assets/covers/excel_IMG1_ro.png",
            buttonText: "Descarcă cartea principală"
        },
        {
            id: "b2",
            title: "Formule Excel, funcții și fluxuri de lucru inteligente — Ediția 2026",
            description: "Ghid practic pentru rezolvarea sarcinilor în Excel mai rapid. Transformă un simplu tabel într-un instrument care chiar rezolvă probleme cu ajutorul formulelor și funcțiilor.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Formule și funcții la nivel avansat",
                "Calcule automate și fluxuri de lucru inteligente",
                "Rezolvă sarcinile în Excel mai rapid"
            ],
            downloadUrl: "materials/Excel-2-RO.pdf",
            coverImage: "assets/covers/excel_IMG1_ro.png",
            buttonText: "Descarcă bonus #1"
        },
        {
            id: "b3",
            title: "Foi de calcul Excel, rapoarte, formule — Ediția 2026",
            description: "Un ghid practic pentru transformarea datelor în rapoarte clare și profesionale. Învață să îți prezinți datele în mod eficient folosind foi de calcul și rapoarte.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Tablouri de bord profesionale și panouri vizuale",
                "Rapoarte sintetice și tabele pivot",
                "Prezentarea datelor pentru manageri, clienți și echipe"
            ],
            downloadUrl: "materials/Excel-3-RO.pdf",
            coverImage: "assets/covers/excel_IMG1_ro.png",
            buttonText: "Descarcă bonus #2"
        }
    ],

    otherProducts: []
};
