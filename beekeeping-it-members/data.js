/**
 * BEEKEEPING — Members Area Data (IT)
 */

const APP_DATA = {
    config: {
        brandName: "L'arte dell'Apicoltura",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Domanda sull'accesso al corso (Apicoltura)",
        emailBodyTemplate: "Ciao team di supporto! Ho bisogno di aiuto con la mia area membri di Apicoltura.%0A%0AIl mio nome è: ______.",
        showFloatingHelp: true
    },

    videos: [
        { id: 'v1', title: 'Lezione 1 - Corso Pratico di Apicoltura (Parte 1)', duration: 'Video 1', youtubeId: 'LURMj_rXH1s' },
        { id: 'v2', title: 'Lezione 2 - Corso Pratico di Apicoltura (Parte 2)', duration: 'Video 2', youtubeId: '6XAyGmyUyCQ' },
        { id: 'v3', title: 'Lezione 3 - Corso Pratico di Apicoltura (Parte 3)', duration: 'Video 3', youtubeId: 'gWiC4wMU5B8' },
        { id: 'v4', title: 'Lezione 4 - La Produzione della Propoli', duration: 'Video 4', youtubeId: 'FjSzTHhpLAg' },
        { id: 'v5', title: 'Lezione 5 - Trattamenti Varroa e Invernamento (Novembre)', duration: 'Video 5', youtubeId: 'QryqXUM7kHQ' },
        { id: 'v6', title: 'Lezione 6 - Analisi dei Trattamenti Varroa (Dicembre)', duration: 'Video 6', youtubeId: '2Nod24Ew7v0' },
        { id: 'v7', title: 'Lezione 7 - Lo Stato Sanitario dell\'Alveare', duration: 'Video 7', youtubeId: 'Qu6m6g53cvM' },
        { id: 'v8', title: 'Lezione 8 - Norme e Regolamenti dell\'Apicoltura', duration: 'Video 8', youtubeId: 'dkJzvnT7jkE' },
        { id: 'v9', title: 'Lezione 9 - Corso Base di Apicoltura (Parte 4)', duration: 'Video 9', youtubeId: 'cEAFFe_hK8A' },
        { id: 'v10', title: 'Lezione 10 - Corso Base di Apicoltura (Parte 5)', duration: 'Video 10', youtubeId: '-ua7Xty-CZo' },
        { id: 'v11', title: 'Lezione 11 - Corso Base di Apicoltura (Parte 6)', duration: 'Video 11', youtubeId: 'cyA1vnkMsxc' },
        { id: 'v12', title: 'Lezione 12 - Corso Base di Apicoltura (Parte 7)', duration: 'Video 12', youtubeId: '6CU2YIy1hh8' },
        { id: 'v13', title: 'Lezione 13 - Corso Base Pratico (Lezione 6)', duration: 'Video 13', youtubeId: 'vVIbwoaicz8' },
        { id: 'v14', title: 'Lezione 14 - Lavori in Apiario e Ripresa Primavera', duration: 'Video 14', youtubeId: 'qsG_LlIZIj0' },
        { id: 'v15', title: 'Lezione 15 - La Complessità dei Flussi Nettariferi', duration: 'Video 15', youtubeId: 'lm4J8igJU50' },
        { id: 'v16', title: 'Lezione 16 - Allevamento delle Api Regine', duration: 'Video 16', youtubeId: 'qV9TUvevBuw' },
        { id: 'v17', title: 'Lezione 17 - Sciamatura: Prevenzione e Gestione', duration: 'Video 17', youtubeId: 'oxv7kk_aRnY' },
        { id: 'v18', title: 'Lezione 18 - Gestione e Prevenzione della Sciamatura', duration: 'Video 18', youtubeId: 'QTvink8vs40' },
        { id: 'v19', title: 'Lezione 19 - Interventi Estivi Antivarroa (Blocco di Covata)', duration: 'Video 19', youtubeId: 'RSlhNs1RjoQ' },
        { id: 'v20', title: 'Lezione 20 - Blocco di Covata con Metodo Campese', duration: 'Video 20', youtubeId: 'FHkXkebbdZA' },
        { id: 'v21', title: 'Lezione 21 - La Ripartenza degli Alveari in Apicoltura', duration: 'Video 21', youtubeId: 'PbAkprynMFk' },
        { id: 'v22', title: 'Lezione 22 - Lezione Completa di Apicoltura', duration: 'Video 22', youtubeId: 'J19uIMGyLZs' },
        { id: 'v23', title: 'Lezione 23 - Tecniche Avanzate e Consigli Pratici', duration: 'Video 23', youtubeId: 'kAox5jKdYKE' }
    ],

    books: [
        {
            id: "b1",
            title: "Schede Tecniche di Apicoltura",
            description: "Un riferimento tecnico completo con schede pratiche per ogni fase dell'apicoltura — dalla gestione stagionale alla raccolta del miele.",
            badgeText: "LIBRO PRINCIPALE",
            badgeColor: "#E5A817",
            features: [
                "Schede tecniche dettagliate",
                "Gestione stagionale dell'apiario",
                "Riferimento rapido per apicoltori"
            ],
            downloadUrl: "materials/IT 01 -Schede-Tecniche-Di-Apicoltura.pdf",
            coverImage: "assets/covers/schede_tecniche_apicoltura.png",
            buttonText: "Scarica il libro"
        },
        {
            id: "b2",
            title: "Manuale di Apicoltura",
            description: "Il manuale completo per l'apicoltore — dalle basi della biologia delle api alle tecniche avanzate di gestione dell'alveare.",
            badgeText: "MANUALE",
            badgeColor: "#6B8F3C",
            features: [
                "Biologia delle api mellifere",
                "Tecniche di gestione dell'alveare",
                "Prevenzione delle malattie"
            ],
            downloadUrl: "materials/IT-02 -Manuale-Apicoltura.pdf",
            coverImage: "assets/covers/manuale_apicoltura.png",
            buttonText: "Scarica il manuale"
        },
        {
            id: "b3",
            title: "Guida Pratica all'Apicoltura",
            description: "Una guida pratica e accessibile per chi vuole iniziare il proprio percorso nell'apicoltura con sicurezza e competenza.",
            badgeText: "GUIDA",
            badgeColor: "#B45309",
            features: [
                "Approccio pratico e semplice",
                "Consigli per principianti",
                "Illustrazioni e diagrammi utili"
            ],
            downloadUrl: "materials/Libri 3.pdf",
            coverImage: "assets/covers/guida_pratica_apicoltura.png",
            buttonText: "Scarica la guida"
        },
        {
            id: "b4",
            title: "Apicoltura Avanzata",
            description: "Approfondimenti e tecniche avanzate per apicoltori che vogliono portare la propria pratica al livello successivo.",
            badgeText: "EXTRA",
            badgeColor: "#059669",
            features: [
                "Tecniche avanzate di allevamento",
                "Ottimizzazione della produzione",
                "Gestione professionale dell'apiario"
            ],
            downloadUrl: "materials/IT04.pdf",
            coverImage: "assets/covers/apicoltura_avanzata.png",
            buttonText: "Scarica l'extra"
        }
    ],

    otherProducts: []
};
