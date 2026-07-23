/**
 * Hemunderhåll & Reparation — Medlemsområde (Svenska)
 */

const APP_DATA = {
    config: {
        brandName: "Hemunderhåll & Reparation",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Fråga om åtkomst (Hemunderhåll & Reparation)",
        emailBodyTemplate: "Hej supportteam! Jag vill gärna ha hjälp med min åtkomst till medlemsområdet för Hemunderhåll & Reparation.\n\nMitt namn är: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Den kompletta guiden till underhåll & förbättring av ditt hem — Upplaga 2026",
            description: "Praktiska Projekt, Expertips & Varaktiga Resultat. Ditt kompletta uppslagsverk för att underhålla, reparera och förbättra ditt hem — med självförtroende, säkerhet och ett ordentligt slutresultat.",
            badgeText: "Huvudguide",
            badgeColor: "#D97706",
            features: [
                "Steg-för-steg-instruktioner för nödvändiga hemreparationer",
                "Expertråd för underhållsprojekt",
                "Praktiska hemmafixartips för långvariga resultat"
            ],
            downloadUrl: "materials/REPAIR-1-SV.pdf",
            coverImage: "assets/covers/rep_IMG1_sv.png",
            buttonText: "Ladda ner huvudguiden"
        },
        {
            id: "b2",
            title: "Den praktiska guiden till heminstallationer — Uppdaterad utgåva 2026",
            description: "Säkert • SEK Handbok 444-medveten • Fixa själv med självförtroende. En uppdaterad praktisk handbok för att säkert hantera elinstallationer i hemmet.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Hantera elarbeten i hemmet på ett säkert sätt",
                "Helt anpassad till SEK Handbok 444 standarder",
                "Steg-för-steg-instruktioner för vanliga installationer"
            ],
            downloadUrl: "materials/REPAIR-2-SV.pdf",
            coverImage: "assets/covers/rep_IMG1_sv.png",
            buttonText: "Ladda ner Bonus #1"
        },
        {
            id: "b3",
            title: "Den kompletta guiden till rörinstallationer — Utgåva 2026",
            description: "Åtgärda Det • Förbättra Det • Håll Det Flödande. Ditt praktiska referensverk för att förstå, felsöka och underhålla husets rördragningar.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Diagnostisera och åtgärda vanliga rörproblem",
                "Håll husets rörsystem i perfekt skick",
                "Tydliga instruktioner anpassade för nybörjare och hemmafixare"
            ],
            downloadUrl: "materials/REPAIR-3-SV.pdf",
            coverImage: "assets/covers/rep_IMG1_sv.png",
            buttonText: "Ladda ner Bonus #2"
        }
    ],

    otherProducts: []
};
