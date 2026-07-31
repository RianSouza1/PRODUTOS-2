/**
 * Calisthenics i Hemmet — Medlemsområde (Svenska) v6
 */

const APP_DATA = {
    config: {
        brandName: "Calisthenics i Hemmet",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Supportförfrågan om åtkomst (Calisthenics i Hemmet)",
        emailBodyTemplate: "Hej supportteamet! Jag vill be om hjälp gällande min åtkomst till medlemsområdet för Calisthenics i Hemmet.\n\nMitt namn är: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Calisthenics för Absoluta Nybörjare — Bok 1 av 3",
            description: "En grundläggande introduktionsguide för absoluta nybörjare som tar sina första steg med kroppsviktsträning. Lär dig grundläggande rörelser, bygga styrka och komma igång på ett säkert sätt.",
            badgeText: "Nybörjarguide",
            badgeColor: "#F43F5E",
            features: [
                "Grundläggande kroppsviktsövningar för nybörjare",
                "Steg-för-steg guidning för säker träning",
                "Bygg styrka och rörlighet i din egen takt"
            ],
            downloadUrl: "materials/CALISTENIA-1-SV.pdf",
            coverImage: "assets/covers/cali_IMG1_sv.png",
            buttonText: "Ladda ner Nybörjarguide (PDF)"
        },
        {
            id: "b2",
            title: "Komplett Program för Kroppsviktsträning — Bok 2 i Samlingen",
            description: "Ta din träning till nästa nivå genom att bemästra progressioner och funktionella övningar. Utveckla uthållighet, kontroll och muskelmassa helt utan gymutrustning.",
            badgeText: "Träningsprogram",
            badgeColor: "#475569",
            features: [
                "Avancerade övningsprogressioner och tekniker",
                "Styrka och kroppskontroll i varje rörelse",
                "Komplett träningsguide för hemmabruk"
            ],
            downloadUrl: "materials/CALISTENIA-2-SV.pdf",
            coverImage: "assets/covers/cali_IMG1_sv.png",
            buttonText: "Ladda ner Träningsprogram (PDF)"
        },
        {
            id: "b3",
            title: "30-Dagars Calisthenics Utmaning — Bok 3 av 3",
            description: "En strukturerad, daglig träningsplan utformad för att bygga konsistens, förbättra fysiken och stärka hela kroppen. En specialiserad träningshandbok för snabba resultat.",
            badgeText: "30-Dagars Utmaning",
            badgeColor: "#0F766E",
            features: [
                "Daglig träningsstruktur under 30 dagar",
                "Fokus på disciplin, form och uthållighet",
                "Smarta rutiner för kontinuerlig framgång"
            ],
            downloadUrl: "materials/CALISTENIA-3-SV.pdf",
            coverImage: "assets/covers/cali_IMG1_sv.png",
            buttonText: "Ladda ner Träningsplan (PDF)"
        }
    ],

    otherProducts: []
};
