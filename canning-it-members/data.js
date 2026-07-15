/**
 * Conservazione & Inscatolamento Alimentare — Dati dell'Area Membri (Italiano)
 * v1
 */

const APP_DATA = {
    config: {
        brandName: "Conservazione & Inscatolamento Alimentare",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Domanda sull'accesso (Conservazione & Inscatolamento Alimentare)",
        emailBodyTemplate: "Gentile team di supporto! Ho bisogno di aiuto con la mia area membri di Conservazione & Inscatolamento Alimentare.\n\nIl mio nome è: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "La Bibbia completa della conservazione e dell'inscatolamento 2026",
            description: "Una guida adatta ai principianti per la sterilizzazione a bagnomaria, l'inscatolamento a pressione, le conserve sottaceto, le marmellate, le salse, la conservazione sicura e la conservazione degli alimenti in casa.",
            badgeText: "LIBRO PRINCIPALE",
            badgeColor: "#b45309",
            features: [
                "Bagnomaria e inscatolamento a pressione per principianti",
                "Marmellate, salse e conserve sottaceto fatte in casa",
                "Conservazione sicura e metodi di conservazione degli alimenti"
            ],
            downloadUrl: "materials/Canning-1-IT.pdf",
            coverImage: "assets/covers/can_IMG1_it.png",
            buttonText: "Scarica il libro principale"
        },
        {
            id: "b2",
            title: "Il libro di cucina con mix da dispensa a lunga conservazione",
            description: "Mix secchi fatti in casa, barattoli con pasti pronti, mix per zuppe, preparati per dolci, miscele di spezie e basi da dispensa convenienti per ogni giorno — senza bisogno di un apparecchio per la sterilizzazione.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Preparati fatti in casa per dolci e mix per zuppe",
                "Miscele di spezie e ingredienti per la dispensa di tutti i giorni",
                "Risparmia tempo e denaro con una dispensa ben organizzata"
            ],
            downloadUrl: "materials/Canning-2-IT.pdf",
            coverImage: "assets/covers/can_IMG1_it.png",
            buttonText: "Scarica il bonus #1"
        },
        {
            id: "b3",
            title: "La guida alla fermentazione casalinga per principianti",
            description: "Semplici verdure fermentate, crauti, sottaceti, ricette simili al kimchi, salamoia, condimenti, bevande fermentate, risoluzione dei problemi e pratiche sicure in cucina.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Crauti, sottaceti e ricette facili di kimchi",
                "Bevande fermentate, salamoia e condimenti fatti in casa",
                "Pratiche sicure in cucina e risoluzione dei problemi"
            ],
            downloadUrl: "materials/Canning-3-IT.pdf",
            coverImage: "assets/covers/can_IMG1_it.png",
            buttonText: "Scarica il bonus #2"
        }
    ],

    otherProducts: []
};