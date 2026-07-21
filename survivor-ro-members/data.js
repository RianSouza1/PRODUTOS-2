/**
 * Survival & Bushcraft — Zona Membri (Română)
 * Seria completă de Bushcraft & Supraviețuire
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Întrebare privind accesul (Survival & Bushcraft)",
        emailBodyTemplate: "Bună ziua, echipă de asistență. Am nevoie de ajutor pentru a accesa zona mea de membru Survival & Bushcraft.\n\nNumele meu este: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Ghid de Supraviețuire pentru Începători — Ediția 2026",
            description: "Apă, foc, adăpost, semnale de urgență și tehnici de bază în natură. Un ghid practic pentru oricine petrece timp în natură — drumeți, camperi, vânători sau simpli aventurieri.",
            badgeText: "Material principal",
            badgeColor: "#6B7C44",
            features: [
                "Găsirea, purificarea și asigurarea apei în sălbăticie",
                "Aprinderea focului, construirea adăpostului și trimiterea semnalelor de urgență",
                "Tehnici testate pe teren pentru începători"
            ],
            downloadUrl: "materials/SURVIVOR-1-RO.pdf",
            coverImage: "assets/covers/sur_IMG1_ro.png",
            buttonText: "Descarcă materialul principal"
        },
        {
            id: "b2",
            title: "Tehnici de Viață în Natură și Pădure — Ediția 2026",
            description: "Echipament, noduri, navigație, tehnici de bivuac și înțelepciunea supraviețuirii în sălbăticie. Abilități esențiale de bushcraft pentru o viață sigură și încrezătoare în aer liber.",
            badgeText: "Bonus #1",
            badgeColor: "#7A5C3E",
            features: [
                "Stăpânirea instrumentelor, nodurilor și tehnicilor de navigație",
                "Instalarea taberei și viața pe cont propriu în natură",
                "Instrucțiuni pas cu pas pentru începători fără experiență anterioară"
            ],
            downloadUrl: "materials/SURVIVOR-2-RO.pdf",
            coverImage: "assets/covers/sur_IMG1_ro.png",
            buttonText: "Descarcă Bonus #1"
        },
        {
            id: "b3",
            title: "Pregătire și Prim Ajutor pentru Tine și Familia Ta — Ediția 2026",
            description: "Rucsacul de urgență pentru 72 de ore, pregătirea pentru pene de curent, evacuarea în siguranță și cum să îți protejezi familia. Tot ce trebuie să știe o familie obișnuită în caz de urgență.",
            badgeText: "Bonus #2",
            badgeColor: "#8B4513",
            features: [
                "Pregătirea corectă a rucsacului de urgență pentru 72 de ore",
                "Pregătirea pentru pene de curent, evacuare și siguranța casei",
                "Prim ajutor de bază pentru familii în situații de urgență"
            ],
            downloadUrl: "materials/SURVIVOR-3-RO.pdf",
            coverImage: "assets/covers/sur_IMG1_ro.png",
            buttonText: "Descarcă Bonus #2"
        }
    ],

    otherProducts: []
};
