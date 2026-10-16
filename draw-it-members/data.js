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

    "videos": [
  {
    "id": "v1",
    "youtubeId": "fIfi4QcNdZY",
    "start": 0,
    "end": 19,
    "creator": "Marissa Purnell",
    "title": "Ombreggiare con piccoli cerchi",
    "categoryName": "Ombreggiatura",
    "description": "Piccoli cerchi sovrapposti creano un’ombra uniforme senza tratti evidenti.",
    "steps": [
      "Inizia con piccoli movimenti circolari leggeri.",
      "Aggiungi più strati nelle zone scure."
    ],
    "tip": "Lascia quasi intatta la parte più illuminata del foglio."
  },
  {
    "id": "v2",
    "youtubeId": "b6UuTWm9MIQ",
    "start": 0,
    "end": 14,
    "creator": "Circle Line Art School",
    "title": "Disegnare un cerchio a mano libera",
    "categoryName": "Le basi",
    "description": "Osserva il movimento della mano e del foglio per ottenere un cerchio regolare.",
    "steps": [
      "Impugna la matita senza tensione e segui un movimento arrotondato.",
      "Prova a ruotare gradualmente il foglio mentre tracci il cerchio."
    ],
    "tip": "Inizia con un segno leggero prima di rinforzare il contorno."
  },
  {
    "id": "v3",
    "youtubeId": "A0Vsu7VtV_o",
    "start": 0,
    "end": 7,
    "creator": "Marissa Purnell",
    "title": "Ombreggiare con segni liberi",
    "categoryName": "Ombreggiatura",
    "description": "Piccoli riccioli sovrapposti costruiscono una trama espressiva.",
    "steps": [
      "Traccia piccoli riccioli liberi senza premere forte.",
      "Sovrapponi maggiormente i segni nelle zone d’ombra."
    ],
    "tip": "Ripeti il breve filmato e prova il gesto su un foglio di esercizio."
  },
  {
    "id": "v4",
    "youtubeId": "HtKuG9CDRQg",
    "start": 0,
    "end": 28,
    "creator": "Marissa Purnell",
    "title": "Sfumare la grafite",
    "categoryName": "Ombreggiatura",
    "description": "Osserva come uno strumento ammorbidisce la grafite e i passaggi di tono.",
    "steps": [
      "Stendi prima un sottile strato di grafite.",
      "Sfuma delicatamente senza sporcare la zona di luce."
    ],
    "tip": "Lavora con strati leggeri anziché con una forte pressione."
  },
  {
    "id": "v5",
    "youtubeId": "0HSZTTc-Byc",
    "start": 0,
    "end": 14,
    "creator": "Marissa Purnell",
    "title": "Creare volume con i punti",
    "categoryName": "Ombreggiatura",
    "description": "La distanza tra i punti rende la superficie più chiara o più scura.",
    "steps": [
      "Distanzia i punti sul lato illuminato.",
      "Avvicina e moltiplica i punti nelle ombre."
    ],
    "tip": "Varia la densità dei punti anziché la pressione della matita."
  },
  {
    "id": "v6",
    "youtubeId": "5miv178rZLQ",
    "start": 0,
    "end": 21,
    "creator": "Marissa Purnell",
    "title": "Ombreggiare con il tratteggio",
    "categoryName": "Ombreggiatura",
    "description": "Tratti paralleli costruiscono gradualmente i toni del disegno.",
    "steps": [
      "Traccia brevi linee nella stessa direzione.",
      "Avvicina le linee e aggiungi strati nelle zone d’ombra."
    ],
    "tip": "Mantieni una direzione coerente e lascia visibili gli spazi chiari."
  },
  {
    "id": "v7",
    "youtubeId": "bUo52UvO3SY",
    "start": 0,
    "end": 25,
    "creator": "Marissa Purnell",
    "title": "Tratti che seguono la forma",
    "categoryName": "Ombreggiatura",
    "description": "Le linee curve seguono la superficie e ne mostrano il volume.",
    "steps": [
      "Inizia con linee curve che seguono la forma arrotondata.",
      "Aggiungi linee dove la superficie si allontana dalla luce."
    ],
    "tip": "Immagina come si disporrebbero le linee su una vera palla."
  },
  {
    "id": "v8",
    "youtubeId": "1eAe7axDCKc",
    "start": 0,
    "end": 32,
    "creator": "Circle Line Art School",
    "title": "Una strada in prospettiva a un punto",
    "categoryName": "Prospettiva",
    "description": "Osserva come le linee della strada e delle case convergono verso un unico punto.",
    "steps": [
      "Segna un punto di fuga e orienta verso di esso i bordi della strada.",
      "Costruisci le case con verticali e linee dirette allo stesso punto."
    ],
    "tip": "Riduci i dettagli man mano che si allontanano."
  },
  {
    "id": "v9",
    "youtubeId": "6gNhCei6d0w",
    "start": 0,
    "end": 33,
    "creator": "Evas art",
    "videoShape": "portrait",
    "title": "Dal cerchio alla sfera: luce e ombra",
    "categoryName": "Luce e volume",
    "description": "Osserva come un cerchio acquista volume con la grafite, una parte illuminata e un’ombra sul piano.",
    "steps": [
      "Abbozza un cerchio leggero e scegli la direzione della luce.",
      "Costruisci l’ombra con strati sottili e conserva la parte chiara della carta.",
      "Aggiungi un’ombra sotto la sfera e confronta la forma prima e dopo."
    ],
    "tip": "Inizia con un tratto leggero. Scegli 0,5× per seguire la matita e poi esercitati con calma.",
    "thumbnail": "https://i.ytimg.com/vi/6gNhCei6d0w/hq2.jpg"
  },
  {
    "id": "v10",
    "youtubeId": "fvyQlOY8OAw",
    "start": 5,
    "end": 64,
    "creator": "Riar Art",
    "videoShape": "landscape",
    "title": "Costruire un cubo con spigoli chiari",
    "categoryName": "Forma e costruzione",
    "description": "Segui linee semplici che si uniscono in un cubo. L’esercizio aiuta a distinguere la faccia frontale, il lato e la parte superiore.",
    "steps": [
      "Traccia la linea dell’orizzonte e segna due punti di fuga.",
      "Posiziona lo spigolo verticale anteriore e traccia le linee guida verso entrambi i punti di fuga.",
      "Aggiungi gli spigoli verticali laterali e unisci i vertici per formare il cubo."
    ],
    "tip": "Disegna piccolo e leggero all’inizio. Controlla la forma prima di premere di più.",
    "thumbnail": "https://i.ytimg.com/vi/fvyQlOY8OAw/hq2.jpg"
  },
  {
    "id": "v11",
    "youtubeId": "m7Ds8TVJ4aQ",
    "start": 10,
    "end": 30,
    "creator": "Paintellectual PriyA",
    "videoShape": "portrait",
    "title": "Un occhio: forma, iride e contrasto",
    "categoryName": "Dettagli e osservazione",
    "description": "Osserva la costruzione del contorno, dell’iride e delle zone scure dell’occhio. Usa il video come breve studio di forme e contrasti.",
    "steps": [
      "Abbozza la forma generale dell’occhio con linee leggere.",
      "Posiziona iride e pupilla lasciando un piccolo riflesso bianco.",
      "Scurisci gradualmente le zone d’ombra e conserva chiara la parte bianca dell’occhio."
    ],
    "tip": "Il video è veloce. Metti spesso in pausa e scegli 0,5×; dedica più tempo alle proporzioni che ai dettagli.",
    "thumbnail": "https://i.ytimg.com/vi/m7Ds8TVJ4aQ/hq2.jpg",
    "segments": [
      {
        "start": 10,
        "end": 22
      },
      {
        "start": 27,
        "end": 30
      }
    ]
  },
  {
    "id": "v12",
    "youtubeId": "48SS7HTCH4M",
    "start": 0,
    "end": 55,
    "creator": "Nura Art Gallery",
    "videoShape": "portrait",
    "title": "Un ramo con foglie: contorni, nervature e colore",
    "categoryName": "Natura e tratto",
    "description": "Osserva come nasce un ramo con foglie, contorni chiari e strati di colore verde.",
    "steps": [
      "Disegna uno stelo curvo e disponi le foglie lungo il ramo.",
      "Aggiungi le nervature centrali e quelle più piccole.",
      "Stendi il verde con leggerezza, lasciando visibili le nervature."
    ],
    "tip": "Comincia con una foglia semplice. Mantieni le piccole differenze tra i due lati.",
    "thumbnail": "https://i.ytimg.com/vi/48SS7HTCH4M/hq2.jpg"
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

    otherProducts: [],
  "videoUI": {
  "eyebrow": "DISEGNO PASSO DOPO PASSO",
  "heading": "Osserva il gesto. Poi prova tu.",
  "intro": "Dodici brevi dimostrazioni con mani vere, matita e carta. Esercita le tecniche di base e applicale poi a forme e dettagli. I video vengono riprodotti senza audio.",
  "shortLessons": "brevi dimostrazioni",
  "noSound": "Senza audio",
  "closeUp": "Mani reali",
  "lesson": "Tecnica",
  "seconds": "s",
  "excerpt": "Breve dimostrazione",
  "play": "Riproduci",
  "pause": "Pausa",
  "watch": "Guarda la tecnica",
  "replay": "Riguarda",
  "fullscreen": "Schermo intero",
  "speed": "Velocità",
  "loading": "Caricamento del video…",
  "ready": "Osserva prima il movimento della mano, poi riproducilo sul tuo foglio.",
  "playing": "Segui il movimento della matita e la costruzione dei segni.",
  "paused": "In pausa. Leggi i passaggi con calma.",
  "finished": "Dimostrazione terminata. Riguardala oppure scegli la tecnica successiva.",
  "next": "Tecnica successiva",
  "first": "Torna alla prima tecnica",
  "progress": "Avanzamento",
  "practice": "Prova sul tuo foglio",
  "tip": "Consiglio pratico",
  "choose": "Scegli una tecnica",
  "source": "Dimostrazione originale",
  "original": "Apri il video originale",
  "error": "Il video non è disponibile. Riprova oppure apri il video originale.",
  "note": "Prepara carta, matita e gomma. Osserva prima il gesto, rallenta il video se necessario e poi prova sul tuo foglio."
}
};
