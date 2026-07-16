/**
 * Conservarea Alimentelor acasă — Date din Zona Membrilor (Română)
 * v1
 */

const APP_DATA = {
    config: {
        brandName: "Conservarea Alimentelor acasă",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Întrebare despre acces (Conservarea Alimentelor acasă)",
        emailBodyTemplate: "Bună ziua echipei de asistență! Am nevoie de ajutor cu zona mea de membru pentru Conservarea Alimentelor acasă.\n\nNumele meu este: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Ghidul complet pentru conservarea și depozitarea alimentelor în 2026",
            description: "Un ghid practic pentru începători despre conservarea la bain-marie, conservarea sub presiune, alimente fermentate, gemuri, sosuri, depozitare sigură și conservarea alimentelor acasă.",
            badgeText: "CARTE PRINCIPALĂ",
            badgeColor: "#b45309",
            features: [
                "Conservare la bain-marie și sub presiune pentru începători",
                "Gemuri, sosuri și conserve de casă",
                "Depozitare sigură și metode de conservare acasă"
            ],
            downloadUrl: "materials/Canning-1-RO.pdf",
            coverImage: "assets/covers/can_IMG1_ro.png",
            buttonText: "Descarcă cartea principală"
        },
        {
            id: "b2",
            title: "Ghid pentru alimente de depozitare pe termen lung",
            description: "Amestecuri uscate de casă, borcane gata porționate, supe, amestecuri pentru desert, amestecuri de condimente și ingrediente practice pentru cămara de zi cu zi — fără echipament de sterilizare.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Amestecuri uscate și preparate de copt făcute în casă",
                "Supe, condimente și organizarea cămării",
                "Economisește timp și bani cu o cămară bine aprovizionată"
            ],
            downloadUrl: "materials/Canning-2-RO.pdf",
            coverImage: "assets/covers/can_IMG1_ro.png",
            buttonText: "Descarcă bonus #1"
        },
        {
            id: "b3",
            title: "Ghid pentru începători în fermentarea acasă",
            description: "Legume fermentate simple, varză murată, castraveți murați fermentați, rețete asemănătoare kimchi-ului, saramură, condimente, băuturi fermentate, depanare și metode sigure în bucătărie.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Varză murată, castraveți murați și rețete simple de kimchi",
                "Băuturi fermentate, saramură și condimente de casă",
                "Metode sigure în bucătărie și depanare"
            ],
            downloadUrl: "materials/Canning-3-RO.pdf",
            coverImage: "assets/covers/can_IMG1_ro.png",
            buttonText: "Descarcă bonus #2"
        }
    ],

    otherProducts: []
};