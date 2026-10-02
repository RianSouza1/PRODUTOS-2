/**
 * Affumicatura delle carni e barbecue — Area membri (italiano)
 */

const APP_DATA = {
    config: {
        brandName: "Affumicatura delle carni e barbecue",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Richiesta di assistenza – Affumicatura delle carni e barbecue",
        emailBodyTemplate: "Ciao, team di assistenza! Ho bisogno di aiuto per accedere all'area membri del corso Affumicatura delle carni e barbecue.\n\nMi chiamo: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Affumicatura delle carni per principianti",
            description: "Impara a gestire il fuoco, il fumo e la temperatura per ottenere carni tenere e ricche di sapore a casa tua. Una guida pratica che ti accompagna passo dopo passo, dalle attrezzature alle tecniche di base.",
            badgeText: "Guida principale",
            badgeColor: "#BF360C",
            features: [
                "Gestione del fuoco, del fumo e della temperatura",
                "Istruzioni dettagliate per iniziare ad affumicare la carne",
                "Consigli pratici per l'affumicatura domestica"
            ],
            downloadUrl: "materials/SMOKING-1-IT.pdf",
            coverImage: "assets/covers/smo_IMG1_it.png",
            buttonText: "Scarica la guida principale (PDF)"
        },
        {
            id: "b2",
            title: "Ricette di barbecue all'aperto",
            description: "Carni affumicate, contorni classici e menu completi per le grigliate in giardino, le tavolate in famiglia e le feste con gli amici. Scopri ricette e abbinamenti per organizzare il tuo prossimo barbecue.",
            badgeText: "Bonus 1",
            badgeColor: "#8D6E63",
            features: [
                "Ricette per preparare carni affumicate saporite",
                "Contorni e abbinamenti del barbecue americano",
                "Menu completi per le grigliate all'aperto"
            ],
            downloadUrl: "materials/SMOKING-2-IT.pdf",
            coverImage: "assets/covers/smo_IMG1_it.png",
            buttonText: "Scarica il bonus 1 (PDF)"
        },
        {
            id: "b3",
            title: "Miscele di spezie, salse e marinature per il barbecue",
            description: "Crea sapori intensi ed equilibrati per ogni taglio di carne. Impara a preparare miscele di spezie, salse, glassature e marinature per arricchire le tue grigliate.",
            badgeText: "Bonus 2",
            badgeColor: "#E64A19",
            features: [
                "Ricette per miscele di spezie e condimenti secchi",
                "Salse e marinature per manzo, maiale e pollame",
                "Tecniche per valorizzare i sapori del barbecue"
            ],
            downloadUrl: "materials/SMOKING-3-IT.pdf",
            coverImage: "assets/covers/smo_IMG1_it.png",
            buttonText: "Scarica il bonus 2 (PDF)"
        }
    ],

    otherProducts: []
};
