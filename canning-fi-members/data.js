/**
 * ELINTARVIKKEIDEN SÄILÖNTÄ & VARASTOINTI — Jäsenalueen Tiedot (Suomi)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Säilöntä & Varastointi", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Kysymys pääsystä (Säilöntä & Varastointi)",
        emailBodyTemplate: "Hei tukitiimi! Haluaisin saada apua Säilöntä & Varastointi -jäsenalueeseeni liittyen.\n\nNimeni on: ______.",

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
            title: "Vuoden 2026 kattava opas elintarvikkeiden säilöntään ja varastointiin",
            description: "Vesikylpykäsittely, painepurkitys, fermentoidut elintarvikkeet, hillot, kastikkeet, turvallinen säilytys, käytännöllinen aloittelijan opas kotona tehtävään elintarvikkeiden säilöntään. Kodissa tapahtuvaan elintarvikkeiden säilöntään tarvittavat yksityiskohtaiset ja turvalliset ohjeet: ensimmäisestä purkista aina täysin täyteen ruokakomeroon asti.",
            badgeText: "PÄÄKIRJA",
            badgeColor: "#C2593F", // Terracotta orange
            features: [
                "Aloittelijan opas vesikylpy- & painesäilöntään",
                "Turvalliset keittiökäytännöt ja säilytyslämpötilat",
                "Vaiheittaiset menetelmät hilloille, kastikkeille ja vihanneksille"
            ],
            downloadUrl: "materials/CANNING-1-FI.pdf",
            coverImage: "assets/covers/canning_IMG1_fi.png",
            buttonText: "Lataa pääkirja"
        },
        {
            id: "b2",
            title: "Pitkäaikaissäilytettävien elintarvikkeiden opas",
            description: "Itse tehdyt kuivaseokset, pieniin annoksiin jaetut ja lasipurkkeihin pakatut ainekset, keitto- ja jälkiruokasekoitukset, mausteet sekä käytännölliset arjen kuivamuonat. Käytä kotona jo olevia aineksia omien sääntöjesi mukaan — et tarvitse sterilointilaitteita.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706", // Amber gold
            features: [
                "Itse tehdyt kuivaseokset ja valmiit annospurkit",
                "Keittoseokset, jälkiruokasekoitukset ja mausteet",
                "Ei sterilointilaitteiden tarvetta nopeaan valmistukseen"
            ],
            downloadUrl: "materials/CANNING-2-FI.pdf",
            coverImage: "assets/covers/canning_IMG1_fi.png",
            buttonText: "Lataa bonus #1"
        },
        {
            id: "b3",
            title: "Kotitekoisen fermentoinnin aloitusopas",
            description: "Helppoja reseptejä fermentoiduille vihanneksille, hapankaalille, fermentoiduille maustekurkkuille, kimchityylisille resepteille, suolaliemelle, mausteille, fermentoiduille juomille, ongelmanratkaisuun ja turvallisiin keittiömenetelmiin. Perinteinen, käytännöllinen ja aloittelijaystävällinen.",
            badgeText: "BONUS #2",
            badgeColor: "#5A7A56", // Olive green
            features: [
                "Reseptit hapankaalille, fermentoiduille vihanneksille & kimchille",
                "Suolaliemisuhteet, mausteet ja fermentoidut juomat",
                "Ongelmanratkaisu ja perinteiset turvalliset menetelmät"
            ],
            downloadUrl: "materials/CANNING-3-FI.pdf",
            coverImage: "assets/covers/canning_IMG1_fi.png",
            buttonText: "Lataa bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2