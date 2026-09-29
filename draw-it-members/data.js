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
            title: "Tecnica di Schizzo & Controllo della Matita",
            duration: "0:25 • Tecnica di base",
            category: "Fondamenti",
            obs: "Impugna la matita in modo rilassato e traccia linee leggere prima di definire i contorni finali.",
            videoUrl: "https://assets.mixkit.co/active_storage/video_items/100488/1724285900/100488-video-720.mp4"
        },
        {
            id: "v2",
            title: "Linee Guida & Costruzione Prospettica",
            duration: "0:20 • Punti di riferimento",
            category: "Prospettiva & Linee",
            obs: "Usa linee di costruzione geometriche per equilibrare perfettamente le proporzioni complessive.",
            videoUrl: "https://assets.mixkit.co/videos/5254/5254-720.mp4"
        },
        {
            id: "v3",
            title: "Tratto Fluido & Durezza del Segno",
            duration: "0:22 • Destrezza",
            category: "Controllo del Segno",
            obs: "Muovi l'intero avambraccio per ottenere curve continue e prive di incertezze.",
            videoUrl: "https://assets.mixkit.co/videos/36721/36721-720.mp4"
        },
        {
            id: "v4",
            title: "Disegno del Ritratto & Proporzioni del Volto",
            duration: "0:30 • Arte del ritratto",
            category: "Ritratto & Anatomia",
            obs: "Imposta prima l'ovale della testa e posiziona con precisione occhi, naso e bocca sugli assi.",
            videoUrl: "https://assets.mixkit.co/videos/30232/30232-720.mp4"
        },
        {
            id: "v5",
            title: "Tratteggio & Chiaroscuro Dettagliato",
            duration: "0:25 • Luce & Ombra",
            category: "Ombreggiatura",
            obs: "Lavora a strati sottili con tratteggio incrociato per donare profondità e tridimensionalità.",
            videoUrl: "https://assets.mixkit.co/active_storage/video_items/100485/1724285772/100485-video-720.mp4"
        },
        {
            id: "v6",
            title: "Resa dei Capelli & Texture di Precisione",
            duration: "0:22 • Resa materica",
            category: "Dettaglio & Texture",
            obs: "Tratta i capelli come masse e volumi principali prima di inserire i riflessi di luce singoli.",
            videoUrl: "https://assets.mixkit.co/videos/40306/40306-720.mp4"
        },
        {
            id: "v7",
            title: "Taccuino di Schizzi & Studio dal Vero",
            duration: "0:25 • Taccuino d'artista",
            category: "Creatività & Pratica",
            obs: "Esercitati quotidianamente sul tuo sketchbook per affinare l'occhio e la velocità di esecuzione.",
            videoUrl: "https://assets.mixkit.co/videos/29983/29983-720.mp4"
        },
        {
            id: "v8",
            title: "Precisione Anatomica & Tratti Sottili",
            duration: "0:28 • Disegno di precisione",
            category: "Anatomia & Rigore",
            obs: "Mantieni la punta della matita sempre ben affilata per le strutture anatomiche più complesse.",
            videoUrl: "https://assets.mixkit.co/videos/9339/9339-720.mp4"
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
