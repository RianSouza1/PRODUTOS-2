/**
 * Babysömn Guide — Medlemsområde (Svenska)
 */

const APP_DATA = {
    config: {
        brandName: "Babysömn Guide",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Fråga om åtkomst (Babysömn Guide)",
        emailBodyTemplate: "Hej supportteamet! Jag vill gärna be om hjälp med min åtkomst till medlemsområdet för Babysömn Guide.\n\nMitt namn är: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Guida din bebis mjukt in i drömmarnas land",
            description: "En kärleksfull, steg-för-steg-rutin vid sänggåendet för nyfödda och spädbarn (0–6 månader). En praktisk och jordnära guide med ärliga, realistiska tips.",
            badgeText: "HUVUDGUIDE",
            badgeColor: "#6366F1",
            features: [
                "Steg-för-steg-rutiner vid sänggåendet för bebisar 0–6 månader",
                "Observera → Förbereda → Lugna → Stötta metoden",
                "Mjuka beroligande strategier utan gråtskrik eller sömnträning"
            ],
            downloadUrl: "materials/BABY-1-SV.pdf",
            coverImage: "assets/covers/baby_IMG1_sv.png",
            buttonText: "Ladda ner Huvudguide (Bok 1)"
        },
        {
            id: "b2",
            title: "Hjälp din baby sova längre",
            description: "Färre nattliga uppvaknanden och en lugnare, mer vilsam natt för er båda. Förstå spädbarnets sömncykler och reagera med trygghet.",
            badgeText: "NATTSÖMN",
            badgeColor: "#F59E0B",
            features: [
                "Kolla → Observera → Reagera → Återställa metoden",
                "Skilj på hunger, obehag och normala sömnljud",
                "Minska nattlig stress och föräldrars utmattning"
            ],
            downloadUrl: "materials/BABY-2-SV.pdf",
            coverImage: "assets/covers/baby_IMG1_sv.png",
            buttonText: "Ladda ner Nattsömnguide (Bok 2)"
        },
        {
            id: "b3",
            title: "Babylurar & Sömnscheman",
            description: "Praktiska rutiner för lurer, vakenhetsfönster & läggdags (0–6 månader) utan att behöva stirra på klockan hela dagen.",
            badgeText: "LURAR & RUTINER",
            badgeColor: "#10B981",
            features: [
                "Förstå vakenfönster och läs av trötthetssignaler i tid",
                "Flexibla dagsrutiner anpassade för bebisar 0–6 månader",
                "Lösningar för korta lurer, tidiga morgnar och vägran"
            ],
            downloadUrl: "materials/BABY-3-SV.pdf",
            coverImage: "assets/covers/baby_IMG1_sv.png",
            buttonText: "Ladda ner Sömnschemaguide (Bok 3)"
        }
    ],

    otherProducts: []
};
