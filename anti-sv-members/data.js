/**
 * Den Stora Antiinflammatoriska Samlingen — Medlemsområde (Svenska)
 */

const APP_DATA = {
    config: {
        brandName: "Den Stora Antiinflammatoriska Samlingen",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Supportbegäran om åtkomst (Den Stora Antiinflammatoriska Samlingen)",
        emailBodyTemplate: "Hej supportteamet! Jag vill be om hjälp med min åtkomst till medlemsområdet för Den Stora Antiinflammatoriska Samlingen.\n\nMitt namn är: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Den Stora Antiinflammatoriska Kokboken — 200 Recept (Del 1)",
            description: "200 kompletta recept för hälsosam vardagsmat. Från näringsrika frukostar och smoothies till mustiga luncher och middagar — vetenskapligt baserade recept som dämpar inflammation i kroppen.",
            badgeText: "Huvudkokbok",
            badgeColor: "#15803d",
            features: [
                "200 kompletta och beprövade recept för frukost, lunch och middag",
                "Tydliga instruktioner med exakta mått, tider och praktiska köksknep",
                "Naturliga råvaror som dämpar inflammation och ökar din energi"
            ],
            downloadUrl: "materials/INFLAMA-1-SV.pdf",
            coverImage: "assets/covers/anti_IMG1_sv.png",
            buttonText: "Ladda ner Huvudkokbok (PDF)"
        },
        {
            id: "b2",
            title: "Det Antiinflammatoriska Enkelgryteköket (Del 2)",
            description: "50+ kompletta recept i en enda gryta, panna eller ugnsform. Riktig och hälsosam matlagning på nolltid med minimal disk och maximal smak.",
            badgeText: "Enkelgrytor & One-Pot",
            badgeColor: "#c2410c",
            features: [
                "Över 50 snabba recept tillagade i en och samma gryta eller panna",
                "Mindre disk, enkel vardagsmatlagning och fantastiska smaker",
                "Smarta frysvänliga rätter och 30-minuters recept för hela familjen"
            ],
            downloadUrl: "materials/INFLAMA-2-SV.pdf",
            coverImage: "assets/covers/anti_IMG1_sv.png",
            buttonText: "Ladda ner Enkelgryteköket (PDF)"
        },
        {
            id: "b3",
            title: "Antiinflammatorisk Tröstmat — Näringsrik Vardagslyx (Del 3)",
            description: "Hjärtliga, hemtrevliga och näringsrika versioner av dina absoluta favoriträtter. God matlagning som ger njutning och samtidigt stärker immunförsvaret.",
            badgeText: "Tröstmat & Klassiker",
            badgeColor: "#0f766e",
            features: [
                "Hemtrevliga klassiker återskapade med antiinflammatoriska råvaror",
                "Mättande pastarätter, ugnsformar och goda desserter utan kompromisser",
                "Praktiska Meal Prep-tips, smarta byten och familjefavoriter"
            ],
            downloadUrl: "materials/INFLAMA-3-SV.pdf",
            coverImage: "assets/covers/anti_IMG1_sv.png",
            buttonText: "Ladda ner Tröstmat (PDF)"
        }
    ],

    otherProducts: []
};
