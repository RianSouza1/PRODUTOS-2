/**
 * Survival & Bushcraft — Area Membri (Italiano)
 * La serie completa di Bushcraft e Sopravvivenza
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Richiesta di accesso (Survival & Bushcraft)",
        emailBodyTemplate: "Gentile team di supporto, ho bisogno di assistenza per accedere alla mia area membri di Survival & Bushcraft.\n\nIl mio nome è: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Sopravvivenza per principianti — Edizione 2026",
            description: "Acqua, fuoco, riparo, segnalazione e tecniche essenziali di sopravvivenza. Una guida pratica per chiunque trascorra del tempo nella natura selvaggia: escursionisti, campeggiatori, cacciatori o avventurieri.",
            badgeText: "Guida principale",
            badgeColor: "#6B7C44",
            features: [
                "Trovare, purificare e conservare l'acqua in natura",
                "Accendere un fuoco, costruire un riparo e inviare segnali di soccorso",
                "Tecniche collaudate sul campo per principianti"
            ],
            downloadUrl: "materials/SURVIVOR-1-IT.pdf",
            coverImage: "assets/covers/sur_IMG1_it.png",
            buttonText: "Scarica la guida principale"
        },
        {
            id: "b2",
            title: "Il bushcraft e l'arte di vivere nel bosco — Edizione 2026",
            description: "Attrezzatura, nodi, navigazione, tecniche di accampamento e la scienza della vita autonoma in piena natura. Le competenze fondamentali per vivere il bosco in sicurezza e con fiducia.",
            badgeText: "Bonus #1",
            badgeColor: "#7A5C3E",
            features: [
                "Padroneggiare strumenti, nodi e tecniche di navigazione",
                "Allestire un accampamento e vivere in autonomia nella natura",
                "Istruzioni passo-passo per principianti senza esperienza"
            ],
            downloadUrl: "materials/SURVIVOR-2-IT.pdf",
            coverImage: "assets/covers/sur_IMG1_it.png",
            buttonText: "Scarica il Bonus #1"
        },
        {
            id: "b3",
            title: "Preparazione alle emergenze e primo soccorso per i sopravvissuti — Edizione 2026",
            description: "Lo zaino di emergenza 72 ore, i blackout, l'evacuazione e come proteggere la tua famiglia. Tutto ciò che una famiglia deve sapere per essere pronta a qualsiasi situazione di emergenza.",
            badgeText: "Bonus #2",
            badgeColor: "#8B4513",
            features: [
                "Come preparare correttamente uno zaino d'emergenza da 72 ore",
                "Preparazione a blackout, piani di evacuazione e sicurezza domestica",
                "Nozioni fondamentali di primo soccorso per famiglie in emergenza"
            ],
            downloadUrl: "materials/SURVIVOR-3-IT.pdf",
            coverImage: "assets/covers/sur_IMG1_it.png",
            buttonText: "Scarica il Bonus #2"
        }
    ],

    otherProducts: []
};
