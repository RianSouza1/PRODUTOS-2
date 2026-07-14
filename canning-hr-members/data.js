/**
 * KONZERVIRANJE I SKLADIŠTENJE HRANE — Podaci o Članskom Području (Hrvatski)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Konzerviranje & Skladištenje", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Upit o pristupu (Konzerviranje & Skladištenje Hrane)",
        emailBodyTemplate: "Pozdrav timu za podršku! Želio bih dobiti pomoć s mojim medijem za članove Konzerviranje & Skladištenje.\n\nMoje ime je: ______.",

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
            title: "Sveobuhvatni vodič za konzerviranje i skladištenje hrane za 2026. godinu",
            description: "Obrada u vodenoj kupelji, konzerviranje pod tlakom, fermentirana hrana, džemovi, umaci, sigurno skladištenje, praktični vodič za početnike za kućno konzerviranje hrane. Od prve staklenke pa sve do potpuno pune ostave za hranu.",
            badgeText: "GLAVNA KNJIGA",
            badgeColor: "#C2593F", // Terracotta orange
            features: [
                "Vodič za vodenu kupelj & konzerviranje pod tlakom",
                "Sigurne kuhinjske prakse i temperature skladištenja",
                "Korak-po-korak metode za džemove, umake i povrće"
            ],
            downloadUrl: "materials/CANNING-1-HR.pdf",
            coverImage: "assets/covers/canning_IMG1_hr.png",
            buttonText: "Preuzmi glavnu knjigu"
        },
        {
            id: "b2",
            title: "Vodič za dugotrajno čuvanu hranu",
            description: "Domaće suhe mješavine, sastojci podijeljeni u male porcije i spakirani u staklene tegle, mješavine za juhe i deserte, začini i praktične suhe namirnice za svakodnevnu upotrebu. Koristi sastojke koje već imaš kod kuće — ne trebaju ti uređaji za sterilizaciju.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706", // Amber gold
            features: [
                "Domaće suhe mješavine i gotove teglice",
                "Suhe juhe, mješavine za deserte i začini",
                "Bez potrebe za sterilizacijom za brzu pripremu"
            ],
            downloadUrl: "materials/CANNING-2-HR.pdf",
            coverImage: "assets/covers/canning_IMG1_hr.png",
            buttonText: "Preuzmi bonus #1"
        },
        {
            id: "b3",
            title: "Vodič za početak kućne fermentacije",
            description: "Jednostavni recepti za fermentirano povrće, kiseli kupus, fermentirane kisele krastavce, kimchi stil recepata, rasol, začine, fermentirana pića, rješavanje problema i sigurne kuhinjske metode. Tradicionalno, praktično i prikladno za početnike.",
            badgeText: "BONUS #2",
            badgeColor: "#5A7A56", // Olive green
            features: [
                "Recepti za fermentirano povrće, kiseli kupus i kimchi",
                "Omjeri rasola, začini i fermentirana pića",
                "Rješavanje problema i tradicionalne sigurne metode"
            ],
            downloadUrl: "materials/CANNING-3-HR.pdf",
            coverImage: "assets/covers/canning_IMG1_hr.png",
            buttonText: "Preuzmi bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2