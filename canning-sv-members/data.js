/**
 * LIVSMEDELSKONSERVERING & FÖRVARING — Medlemsområde Data (Svenska)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Livsmedelskonservering & Förvaring", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Fråga om åtkomst (Livsmedelskonservering & Förvaring)",
        emailBodyTemplate: "Hej supportteam! Jag skulle vilja få hjälp med mitt medlemsområde för Livsmedelskonservering & Förvaring.\n\nMitt namn är: ______.",

        // Show floating "?" help button on all screens
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VIDEOS (Video course) — empty if no videos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. BOOKS (E-books and PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Den fullständiga guiden till konservering och förvaring 2026",
            description: "En praktisk nybörjarguide till sterilisering i vattenbad, tryckkonservering, fermenterade produkter, marmelader, såser, säker förvaring och att bevara mat hemma. En komplett och säkerhetsfokuserad guide till att konservera mat hemma: från den första burken till ett fullt utrustat skafferi.",
            badgeText: "HUVUDBOK",
            badgeColor: "#C2593F", // Terracotta orange
            features: [
                "Nybörjarguide till vattenbads- & tryckkonservering",
                "Säker kökspraxis och förvaringstemperaturer",
                "Steg-för-steg-metoder för sylt, såser och grönsaker"
            ],
            downloadUrl: "materials/CANNING-1-SV.pdf",
            coverImage: "assets/covers/canning_IMG1_sv.png",
            buttonText: "Ladda ner huvudboken"
        },
        {
            id: "b2",
            title: "Matlagningsguide med lång hållbarhet",
            description: "Hemgjorda torrblandningar, burkar med färdiga rätter, soppmixar, dessertmixar, kryddblandningar och praktiska basvaror för den dagliga skafferihyllan. Ditt kök, dina ingredienser, dina regler – utan behov av steriliseringsutrustning.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706", // Amber gold
            features: [
                "Hemgjorda torrblandningar och färdiga burkar",
                "Soppmixar, dessertmixar och kryddblandningar",
                "Inget behov av steriliseringsutrustning för snabb matlagning"
            ],
            downloadUrl: "materials/CANNING-2-SV.pdf",
            coverImage: "assets/covers/canning_IMG1_sv.png",
            buttonText: "Ladda ner bonus #1"
        },
        {
            id: "b3",
            title: "Nybörjarguide till hemmagjord fermentering",
            description: "Enkla fermenterade grönsaker, surkål, fermenterade inläggningar, kimchi-liknande recept, saltlake, kryddor, fermenterade drycker, felsökning och säkra metoder i köket. Traditionell, praktisk och nybörjarvänlig.",
            badgeText: "BONUS #2",
            badgeColor: "#5A7A56", // Olive green
            features: [
                "Fermenterade grönsaker, surkål och kimchi-recept",
                "Saltlakesförhållanden, kryddor och guldade drycker",
                "Felsökning & traditionella livsmedelssäkra metoder"
            ],
            downloadUrl: "materials/CANNING-3-SV.pdf",
            coverImage: "assets/covers/canning_IMG1_sv.png",
            buttonText: "Ladda ner bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2