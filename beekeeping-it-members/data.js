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
        { id: 'v1', title: 'Corso Apicoltura 2021 pratica 1^ parte', duration: 'Video 1', youtubeId: 'LURMj_rXH1s' },
        { id: 'v2', title: 'Corso Apicoltura 2021 pratica 2^ parte', duration: 'Video 2', youtubeId: '6XAyGmyUyCQ' },
        { id: 'v3', title: 'Corso Apicoltura 2021 pratica 3^ parte', duration: 'Video 3', youtubeId: 'gWiC4wMU5B8' },
        { id: 'v4', title: 'La produzione della propoli', duration: 'Video 4', youtubeId: 'FjSzTHhpLAg' },
        { id: 'v5', title: 'Novembre 2021 trattamenti varroa e invernamento', duration: 'Video 5', youtubeId: 'QryqXUM7kHQ' },
        { id: 'v6', title: 'Dicembre 2021 analisi trattamenti varroa', duration: 'Video 6', youtubeId: '2Nod24Ew7v0' },
        { id: 'v7', title: 'Lo stato sanitario dell\'alveare', duration: 'Video 7', youtubeId: 'Qu6m6g53cvM' },
        { id: 'v8', title: 'Norme e regolamenti apicoltura', duration: 'Video 8', youtubeId: 'dkJzvnT7jkE' },
        { id: 'v9', title: '2020 Corso base apicoltura lezione 2', duration: 'Video 9', youtubeId: 'cEAFFe_hK8A' },
        { id: 'v10', title: '2020 Corso Base apicoltura lezione 3', duration: 'Video 10', youtubeId: '-ua7Xty-CZo' },
        { id: 'v11', title: 'Corso Base apicoltura lezione 4', duration: 'Video 11', youtubeId: 'cyA1vnkMsxc' },
        { id: 'v12', title: '2020 Corso Base Apicoltura Lezione 5', duration: 'Video 12', youtubeId: '6CU2YIy1hh8' },
        { id: 'v13', title: '2020 Corso Base pratica lezione 6', duration: 'Video 13', youtubeId: 'vVIbwoaicz8' },
        { id: 'v14', title: 'Febbraio 2022 lavori apiario ripresa primaverile', duration: 'Video 14', youtubeId: 'qsG_LlIZIj0' },
        { id: 'v15', title: 'Marzo 2022 Le complessità dei flussi nettariferi', duration: 'Video 15', youtubeId: 'lm4J8igJU50' },
        { id: 'v16', title: '29 luglio 2021 allevamento api regine', duration: 'Video 16', youtubeId: 'qV9TUvevBuw' },
        { id: 'v17', title: 'Sciamatura prevenzione e gestione', duration: 'Video 17', youtubeId: 'oxv7kk_aRnY' },
        { id: 'v18', title: 'Aprile 2022 La sciamatura prevenzione e gestione', duration: 'Video 18', youtubeId: 'QTvink8vs40' },
        { id: 'v19', title: 'Interventi estivi antivarroa blocco di covata attivo', duration: 'Video 19', youtubeId: 'RSlhNs1RjoQ' },
        { id: 'v20', title: 'Blocco di Covata metodo Campese', duration: 'Video 20', youtubeId: 'FHkXkebbdZA' },
        { id: 'v21', title: 'La ripartenza degli alveari in apicoltura', duration: 'Video 21', youtubeId: 'PbAkprynMFk' },
        { id: 'v22', title: 'Apicoltura — Lezione Completa', duration: 'Video 22', youtubeId: 'J19uIMGyLZs' },
        { id: 'v23', title: 'Apicoltura — Tecniche e Consigli', duration: 'Video 23', youtubeId: 'kAox5jKdYKE' }
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
            coverImage: "assets/covers/beekeeping_for_all.png",
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
            coverImage: "assets/covers/backyard_beekeepers.png",
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
            coverImage: "assets/covers/mead_making.png",
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
            coverImage: "assets/covers/beekeeping_made_easy.png",
            buttonText: "Scarica l'extra"
        }
    ],

    otherProducts: []
};
