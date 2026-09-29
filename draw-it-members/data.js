/**
 * La Raccolta Pratica di Disegno — Area Membri (Italiano)
 */

const APP_DATA = {
    config: {
        brandName: "La Raccolta Pratica di Disegno",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Richiesta di assistenza sull'accesso (La Raccolta Pratica di Disegno)",
        emailBodyTemplate: "Ciao team di supporto! Vorrei richiedere assistenza riguardo al mio accesso all'area membri di La Raccolta Pratica di Disegno.\n\nIl mio nome è: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            id: "v1",
            title: "Controllo dell'Impugnatura & Tratti Fluidi",
            duration: "0:22 • Tecnica di base",
            category: "Fondamenti",
            obs: "Mantieni il polso rilassato e guida il tratto dalla spalla per linee decise e pulite.",
            videoUrl: "https://videos.pexels.com/video-files/6891843/6891843-hd_1920_1080_25fps.mp4"
        },
        {
            id: "v2",
            title: "Tratteggio & Chiaroscuro a Matita",
            duration: "0:25 • Luce & Ombre",
            category: "Luce & Ombra",
            obs: "Costruisci gradualmente i toni dal chiaro allo scuro senza calcare eccessivamente la grafite.",
            videoUrl: "https://videos.pexels.com/video-files/6891844/6891844-hd_1920_1080_25fps.mp4"
        },
        {
            id: "v3",
            title: "Costruzione di Forme 3D & Volumi",
            duration: "0:15 • Visione spaziale",
            category: "Prospettiva & Volume",
            obs: "Usa linee guida geometriche per trasformare semplici sagome in solidi tridimensionali.",
            videoUrl: "https://videos.pexels.com/video-files/6891845/6891845-hd_1920_1080_25fps.mp4"
        },
        {
            id: "v4",
            title: "Proporzioni del Volto & Anatomia degli Occhi",
            duration: "0:24 • Disegno del ritratto",
            category: "Ritratto & Anatomia",
            obs: "Segui gli assi centrali e le distanze proporzionali per catturare un'espressione realistica.",
            videoUrl: "https://videos.pexels.com/video-files/6891846/6891846-hd_1920_1080_25fps.mp4"
        },
        {
            id: "v5",
            title: "Schizzo Botanico & Texture Naturali",
            duration: "0:20 • Forme organiche",
            category: "Natura & Piante",
            obs: "Segui l'andamento naturale delle venature fogliari per donare vita e freschezza al disegno.",
            videoUrl: "https://videos.pexels.com/video-files/6891847/6891847-hd_1920_1080_25fps.mp4"
        },
        {
            id: "v6",
            title: "Schizzo di Animali & Cattura del Movimento",
            duration: "0:25 • Schizzo veloce",
            category: "Animali & Movimento",
            obs: "Traccia prima la linea d'azione principale del corpo e poi definisci i dettagli del manto.",
            videoUrl: "https://videos.pexels.com/video-files/6891848/6891848-hd_1920_1080_25fps.mp4"
        },
        {
            id: "v7",
            title: "Composizione & Studio di Natura Morta",
            duration: "0:20 • Impaginazione visiva",
            category: "Composizione",
            obs: "Stabilisci un punto focale dominante e gestisci con cura le sovrapposizioni degli elementi.",
            videoUrl: "https://videos.pexels.com/video-files/6891849/6891849-hd_1920_1080_25fps.mp4"
        },
        {
            id: "v8",
            title: "Rifiniture, Texture & Contrasto Elevato",
            duration: "0:30 • Resa finale",
            category: "Finitura",
            obs: "Utilizza la gomma pane per ricavare punti luce luminosi e intensifica i neri per il massimo contrasto.",
            videoUrl: "https://videos.pexels.com/video-files/6893300/6893300-hd_1920_1080_25fps.mp4"
        }
    ],

    books: [
        {
            id: "b1",
            title: "Disegnare da Zero — Volume 1",
            description: "Linee, forme, proporzioni, prospettiva e chiaroscuro. Un corso di disegno completo per adulti: sviluppa la visione artistica, il controllo del tratto e crea volumi tridimensionali con sicurezza.",
            badgeText: "Guida Principale",
            badgeColor: "#7C3AED",
            features: [
                "Padroneggia l'impugnatura della matita, le linee e le proporzioni",
                "Costruisci solidi e forme complesse in prospettiva",
                "Impara le tecniche di ombreggiatura e sfumatura a matita"
            ],
            downloadUrl: "materials/DRAW-1-IT.pdf",
            coverImage: "assets/covers/draw_IMG1_it.png",
            buttonText: "Scarica la Guida Principale (PDF)"
        },
        {
            id: "b2",
            title: "La Guida Completa ai Soggetti del Disegno — Volume 2",
            description: "Volti, figure, animali, natura e oggetti del quotidiano. Impara a scomporre qualsiasi soggetto reale in forme semplici ed espressive, catturandone la struttura fondamentale.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Disegna volti espressivi e le corrette proporzioni della testa",
                "Cattura l'anatomia semplificata e le pose degli animali",
                "Tecniche per la natura, i panneggi e gli oggetti di ogni giorno"
            ],
            downloadUrl: "materials/DRAW-2-IT.pdf",
            coverImage: "assets/covers/draw_IMG1_it.png",
            buttonText: "Scarica il Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "Dallo Schizzo al Disegno Compiuto — Volume 3",
            description: "Composizione, luce e ombra, texture ed esercitazioni guidate. Dalla bozza iniziale all'opera finale: padroneggia il contrasto, la resa materica e completa progetti passo dopo passo.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Regole di composizione visiva e punti focali",
                "Gestione avanzata di luce, valori tonali e contrasti",
                "Progetti guidati passo dopo passo: natura morta, botanica e paesaggio"
            ],
            downloadUrl: "materials/DRAW-3-IT.pdf",
            coverImage: "assets/covers/draw_IMG1_it.png",
            buttonText: "Scarica il Bonus #2 (PDF)"
        },
        {
            id: "b4",
            title: "Quaderno Pratico 01 : Impara a disegnare da zero",
            description: "17 sessioni pratiche guidate per acquisire precisione nel tratto, osservazione e completare la tua prima natura morta.",
            badgeText: "17 Sessioni",
            badgeColor: "#7C3AED",
            downloadUrl: "materials/01_Impara_a_disegnare_da_zero_IT.pdf",
            coverImage: "assets/covers/draw_IMG1_it.png",
            buttonText: "Scarica il Quaderno 01"
        },
        {
            id: "b5",
            title: "Quaderno Pratico 02 : Guida ai soggetti del disegno",
            description: "17 sessioni mirate per trasformare forme semplici in soggetti vivi: volti, corpi, animali e oggetti.",
            badgeText: "17 Sessioni",
            badgeColor: "#2563EB",
            downloadUrl: "materials/02_Guida_ai_soggetti_del_disegno_IT.pdf",
            coverImage: "assets/covers/draw_IMG1_it.png",
            buttonText: "Scarica il Quaderno 02"
        },
        {
            id: "b6",
            title: "Quaderno Pratico 03 : Dallo schizzo al disegno finito",
            description: "3 progetti pratici completi guidati: composizione, chiaroscuro, texture e rifiniture.",
            badgeText: "3 Progetti",
            badgeColor: "#059669",
            downloadUrl: "materials/03_Dallo_schizzo_al_disegno_finito_IT.pdf",
            coverImage: "assets/covers/draw_IMG1_it.png",
            buttonText: "Scarica il Quaderno 03"
        }
    ],

    otherProducts: []
};
