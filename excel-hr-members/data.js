/**
 * Excel Mastery — Podaci o Članskoj Zoni (Hrvatski)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Upit u vezi pristupa (Excel Mastery)",
        emailBodyTemplate: "Pozdrav timu za podršku! Trebam pomoć oko pristupa svojoj članskoj zoni za Excel Mastery.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Od nule do Excel profesionalca — Izdanje 2026.",
            description: "Praktični vodič za početnike koji obuhvaća proračunske tablice, organizaciju i svakodnevnu produktivnost. Naučite Excel korak po korak, od prve ćelije do naprednih alata.",
            badgeText: "GLAVNA KNJIGA",
            badgeColor: "#1a7a45",
            features: [
                "Proračunske tablice i organizacija podataka za početnike",
                "Svakodnevna produktivnost i upravljanje popisima klijenata",
                "Praćenje financija i planiranje kalendara u Excelu"
            ],
            downloadUrl: "materials/Excel-1-HR.pdf",
            coverImage: "assets/covers/excel_IMG1_hr.png",
            buttonText: "Preuzmi glavnu knjigu"
        },
        {
            id: "b2",
            title: "Excel funkcije, operacije i pametni radni tijekovi — Izdanje 2026.",
            description: "Praktični vodič za brže rješavanje zadataka u Excelu. Pretvorite jednostavnu tablicu u pravi alat za rješavanje problema pomoću formula i funkcija.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Napredne formule i funkcije",
                "Automatski izračuni i pametni radni tijekovi",
                "Brže rješavanje problema u Excelu"
            ],
            downloadUrl: "materials/Excel-2-HR.pdf",
            coverImage: "assets/covers/excel_IMG1_hr.png",
            buttonText: "Preuzmi bonus #1"
        },
        {
            id: "b3",
            title: "Od Excel izračuna, izvješća, formula — Izdanje 2026.",
            description: "Praktični vodič za pretvaranje podataka u jasna i profesionalna izvješća. Naučite kako učinkovito predstaviti svoje podatke pomoću nadzornih ploča i izvješća.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Profesionalne nadzorne ploče i vizualni paneli",
                "Sažeta izvješća i pivot tablice",
                "Predstavljanje podataka nadređenima, klijentima i timu"
            ],
            downloadUrl: "materials/Excel-3-HR.pdf",
            coverImage: "assets/covers/excel_IMG1_hr.png",
            buttonText: "Preuzmi bonus #2"
        }
    ],

    otherProducts: []
};
