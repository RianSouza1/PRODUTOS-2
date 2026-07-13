/**
 * FĂRĂ GLUTEN SIMPLU — Date pentru Zona de Membrii (Română)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Fără Gluten Simplu", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Întrebare privind accesul la curs (Fără Gluten Simplu)",
        emailBodyTemplate: "Bună ziua, echipa de asistență! Aș dori să primesc ajutor cu zona mea de membru pentru Fără Gluten Simplu.\n\nNumele meu este: ______.",

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
            title: "Cartea Simplă de Bucate Fără Gluten",
            description: "Mâncăruri simple de zi cu zi pentru începători. Descoperiți cât de ușor și delicios poate fi gătitul fără gluten cu rețete practice pas cu pas.",
            badgeText: "CARTE PRINCIPALĂ",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Mâncăruri simple de zi cu zi pentru începători",
                "Rețete delicioase și sănătoase pas cu pas",
                "Ghid esențial pentru un stil de viață fără gluten"
            ],
            downloadUrl: "materials/G-FREE-1-RO.pdf",
            coverImage: "assets/covers/gf_IMG1_ro.png",
            buttonText: "Descărcați cartea principală"
        },
        {
            id: "b2",
            title: "Patiserie Zilnică Fără Gluten & Mâncăruri de Confort",
            description: "Pâine mai bună, gustări, deserturi și preferatele familiei. Învățați să coaceți pâine și delicii fără gluten moi și gustoase, pe care toată lumea le va adora.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Rețete de pâine și gustări fără gluten",
                "Deserturi delicioase și preferatele familiei",
                "Sfaturi de copt pentru rezultate perfecte de fiecare dată"
            ],
            downloadUrl: "materials/G-FREE-2-RO.pdf",
            coverImage: "assets/covers/gf_IMG1_ro.png",
            buttonText: "Descărcați bonusul #1"
        },
        {
            id: "b3",
            title: "Plan de Mese Fără Gluten de 30 de Zile & Ghid de Cumpărături",
            description: "Meniuri săptămânale simple, liste de cumpărături organizate și ajutor expert în pregătirea meselor pentru a vă face tranziția ușoară și fără stres.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Plan complet de mese pentru 30 de zile",
                "Liste săptămânale de cumpărături organizate",
                "Sfaturi utile pentru pregătirea ușoară a meselor"
            ],
            downloadUrl: "materials/G-FREE-3-RO.pdf",
            coverImage: "assets/covers/gf_IMG1_ro.png",
            buttonText: "Descărcați bonusul #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v9