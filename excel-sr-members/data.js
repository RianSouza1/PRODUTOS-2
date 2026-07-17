/**
 * Excel Mastery — Podaci o Zoni za Članove (Srpski)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Upit u vezi sa pristupom (Excel Mastery)",
        emailBodyTemplate: "Pozdrav, timu za podršku! Potrebna mi je pomoć oko pristupa mojoj zoni za članove na Excel Mastery.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Excel od Nule do Profesionalnog Nivoa — Izdanje 2026",
            description: "Praktični vodič za početnike za tabelarne proračune, organizaciju i svakodnevnu produktivnost. Naučite Excel korak po korak, od prve ćelije do naprednih alata.",
            badgeText: "GLAVNA KNJIGA",
            badgeColor: "#1a7a45",
            features: [
                "Tabelarni proračuni i organizacija podataka za početnike",
                "Svakodnevna produktivnost i upravljanje spiskovima klijenata",
                "Praćenje finansija i planiranje rasporeda u Excelu"
            ],
            downloadUrl: "materials/Excel-1-SR.pdf",
            coverImage: "assets/covers/excel_IMG1_sr.png",
            buttonText: "Preuzmite glavnu knjigu"
        },
        {
            id: "b2",
            title: "Formule u Excelu, funkcije i pametni radni tokovi — Izdanje 2026",
            description: "Praktični vodič za lakše i brže rešavanje zadataka u Excelu. Pretvorite običnu tabelu u pravi alat za rešavanje problema pomoću formula i funkcija.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Formule i funkcije na naprednom nivou",
                "Automatski proračuni i pametni radni tokovi",
                "Brže i lakše rešavanje zadataka u Excelu"
            ],
            downloadUrl: "materials/Excel-2-SR.pdf",
            coverImage: "assets/covers/excel_IMG1_sr.png",
            buttonText: "Preuzmite bonus #1"
        },
        {
            id: "b3",
            title: "Excel tabele, izveštaji i formule — Izdanje 2026",
            description: "Praktični vodič za pretvaranje podataka u jasne, profesionalne izveštaje. Naučite kako da efikasno predstavite svoje podatke pomoću tabela i izveštaja.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Profesionalne kontrolne table i vizuelni paneli",
                "Sumarni izveštaji i pivot tabele",
                "Predstavljanje podataka menadžerima, klijentima i timovima"
            ],
            downloadUrl: "materials/Excel-3-SR.pdf",
            coverImage: "assets/covers/excel_IMG1_sr.png",
            buttonText: "Preuzmite bonus #2"
        }
    ],

    otherProducts: []
};
