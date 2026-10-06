/**
 * Stolegymnastik for Seniorer — Medlemsområde (Dansk)
 */

const APP_DATA = {
    config: {
        brandName: "Stolegymnastik for Seniorer",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørgsmål om adgang (Stolegymnastik for Seniorer)",
        emailBodyTemplate: "Hej supportteam! Jeg vil gerne bede om hjælp vedrørende min adgang til medlemsområdet for Stolegymnastik for Seniorer.\n\nMit navn er: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Stolegymnastik for Seniorer — Bog 1 af 3",
            description: "Målrettede øvelser i siddende stilling for ben, arme og krop — for mere frihed og selvtillid i hverdagen. En komplet guide med styrkende øvelser uden gulvøvelser eller tunge vægte.",
            badgeText: "Styrketræning",
            badgeColor: "#0284c7",
            features: [
                "Træning for ben, lægge, lår, hofter og sædemuskulatur i siddende stilling",
                "Styrkelse af arme, skuldre, øvre ryg og grebsstyrke på en skånsom måde",
                "Sikre og effektive øvelser der giver mere frihed og selvtillid i hverdagen"
            ],
            downloadUrl: "materials/CHAIR-1-DA.pdf",
            coverImage: "assets/covers/ch_IMG1_da.png",
            buttonText: "Download Styrketræning (PDF)"
        },
        {
            id: "b2",
            title: "Stolegymnastik & Bevægelighed for Seniorer — Bog 2 af 3",
            description: "Blide siddende strækøvelser for fleksibilitet, holdning, stive led og lettere hverdagsbevægelser. Forbedr din mobilitet i dit eget tempo uden at belaste leddene.",
            badgeText: "Bevægelighed & Stræk",
            badgeColor: "#0d9488",
            features: [
                "Blide siddende strækøvelser for øget fleksibilitet og bedre kropsholdning",
                "Lindring af stivhed i nakke, skuldre, ryg og hofter",
                "Træning i dit eget tempo med fokus på velvære og behagelige bevægelser"
            ],
            downloadUrl: "materials/CHAIR-2-DA.pdf",
            coverImage: "assets/covers/ch_IMG1_da.png",
            buttonText: "Download Bevægelighed (PDF)"
        },
        {
            id: "b3",
            title: "Siddende Træningsprogram — 28 Dage — Bog 3 af 3",
            description: "10 minutter om dagen for styrke, smidighed, bevægelighed og selvtillid. Et komplet 28-dages program opbygget i lette, trinvise sessioner for daglig velvære.",
            badgeText: "28-Dages Program",
            badgeColor: "#d97706",
            features: [
                "Komplet 28-dages program med ~10 minutters daglige siddende sessioner",
                "Tre tilpassede niveauer: lettere, standard og lidt mere udfordrende",
                "Kombinerer styrke, smidighed og balance i en overskuelig hverdagsrutine"
            ],
            downloadUrl: "materials/CHAIR-3-DA.pdf",
            coverImage: "assets/covers/ch_IMG1_da.png",
            buttonText: "Download 28-Dages Program (PDF)"
        }
    ],

    otherProducts: []
};
