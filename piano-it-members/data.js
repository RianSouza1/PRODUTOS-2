/* La collezione completa di pianoforte — Italiano */
const APP_DATA = {
    "config": {
        "brandName": "La collezione completa di pianoforte",
        "contactEmail": "trinityag01@gmail.com",
        "emailSubject": "Richiesta di assistenza — La collezione completa di pianoforte",
        "emailBodyTemplate": "Buongiorno! Ho bisogno di assistenza per il mio accesso all'area riservata della Collezione completa di pianoforte.\n\nIl mio nome: ______\nLa mia richiesta: ______"
    },
    "books": [
        {
            "id": "b1",
            "title": "Pianoforte per principianti assoluti — Libro 1 di 3",
            "description": "Tasti, accordi e i tuoi primi brani. Scopri la tastiera, impara a leggere le note e costruisci le basi della teoria musicale, passo dopo passo.",
            "badgeText": "Guida per principianti",
            "badgeColor": "#1b2a38",
            "pages": 72,
            "features": [
                "Tastiera, postura e posizione delle mani",
                "Lettura musicale, ritmo, scale e accordi di base",
                "Esercizi progressivi per suonare i tuoi primi brani"
            ],
            "downloadUrl": "materials/PIANO-1-IT.pdf",
            "coverImage": "assets/covers/piano_IMG1_it.png"
        },
        {
            "id": "b2",
            "title": "Brani facili per pianoforte — Libro 2 di 3",
            "description": "Dalla prima melodia alla sicurezza con entrambe le mani. Una raccolta di brani di difficoltà progressiva per sviluppare ritmo, coordinazione ed espressività.",
            "badgeText": "Brani facili",
            "badgeColor": "#4a5568",
            "pages": 74,
            "features": [
                "Melodie tradizionali e brani di pubblico dominio",
                "Coordinazione delle mani e accompagnamento con accordi",
                "Dinamica e fraseggio per dare espressione alla musica"
            ],
            "downloadUrl": "materials/PIANO-2-IT.pdf",
            "coverImage": "assets/covers/piano_IMG1_it.png"
        },
        {
            "id": "b3",
            "title": "Sfida al pianoforte di 30 giorni — Libro 3 di 3",
            "description": "Un programma quotidiano strutturato per rendere la pratica più costante. Dedica 20 minuti al giorno alla lettura musicale, al ritmo e alla coordinazione delle mani.",
            "badgeText": "Sfida di 30 giorni",
            "badgeColor": "#6b1d2f",
            "pages": 72,
            "features": [
                "30 giorni di pratica organizzati in quattro fasi",
                "Esercizi con metronomo, accordi e lettura musicale",
                "Diario di pratica per seguire i tuoi progressi"
            ],
            "downloadUrl": "materials/PIANO-3-IT.pdf",
            "coverImage": "assets/covers/piano_IMG1_it.png"
        }
    ],
    "videos": [
        {
            "id": "v1",
            "title": "Cinque dita: Do, Re, Mi, Fa, Sol",
            "category": "Primi passi",
            "description": "Segui i cinque tasti illuminati. Il numero sul tasto indica quale dito usare.",
            "steps": [
                "Appoggia il pollice della mano destra sul Do centrale.",
                "Suona Do, Re, Mi, Fa, Sol con le dita 1, 2, 3, 4, 5.",
                "Torna indietro: Fa, Mi, Re, Do. Ripeti con calma."
            ],
            "duration": "0:24",
            "videoUrl": "assets/videos/01-cinque-dita.mp4",
            "poster": "assets/videos/01-cinque-dita.jpg"
        },
        {
            "id": "v2",
            "title": "Scala di Do maggiore",
            "category": "Scale",
            "description": "Una scala di un’ottava, in salita e in discesa, con la diteggiatura indicata sui tasti.",
            "steps": [
                "In salita usa le dita 1, 2, 3, 1, 2, 3, 4, 5.",
                "Dopo Mi, sposta il pollice sotto le altre dita verso Fa.",
                "In discesa usa 5, 4, 3, 2, 1, 3, 2, 1. Mantieni un ritmo regolare."
            ],
            "duration": "0:36",
            "videoUrl": "assets/videos/02-scala-do-maggiore.mp4",
            "poster": "assets/videos/02-scala-do-maggiore.jpg"
        },
        {
            "id": "v3",
            "title": "Il tuo primo accordo: Do maggiore",
            "category": "Accordi",
            "description": "Scopri le note dell’accordo di Do maggiore e ascolta come suonano insieme.",
            "steps": [
                "Metti il pollice su Do, il medio su Mi e il mignolo su Sol.",
                "Suona le tre note una alla volta.",
                "Premi Do, Mi e Sol insieme con le dita 1, 3 e 5."
            ],
            "duration": "0:24",
            "videoUrl": "assets/videos/03-accordo-do-maggiore.mp4",
            "poster": "assets/videos/03-accordo-do-maggiore.jpg"
        },
        {
            "id": "v4",
            "title": "Arpeggio di Do maggiore",
            "category": "Arpeggi",
            "description": "Passa da un accordo a un arpeggio: Do, Mi, Sol, Do acuto, poi torna indietro.",
            "steps": [
                "Usa le dita 1, 2, 3 e 5 per Do, Mi, Sol e Do acuto.",
                "Ascolta ogni nota e mantieni la mano rilassata.",
                "Scendi con Sol, Mi, Do, usando le dita 3, 2 e 1."
            ],
            "duration": "0:27",
            "videoUrl": "assets/videos/04-arpeggio-do.mp4",
            "poster": "assets/videos/04-arpeggio-do.jpg"
        },
        {
            "id": "v5",
            "title": "Cambiare accordo: Do, Fa, Sol",
            "category": "Accordi",
            "description": "Osserva la posizione dei tre accordi e passa da uno all’altro senza affrettare il movimento.",
            "steps": [
                "Suona Do maggiore: Do, Mi, Sol.",
                "Passa a Fa maggiore: Fa, La, Do; poi a Sol maggiore: Sol, Si, Re.",
                "Per ogni accordo usa le dita 1, 3 e 5. Torna infine a Do maggiore."
            ],
            "duration": "0:26",
            "videoUrl": "assets/videos/05-cambio-accordi.mp4",
            "poster": "assets/videos/05-cambio-accordi.jpg"
        },
        {
            "id": "v6",
            "title": "Le due mani insieme",
            "category": "Coordinazione",
            "description": "Un breve esercizio di coordinazione: la destra suona cinque note e la sinistra accompagna con Do e Sol.",
            "steps": [
                "Prepara la destra su Do centrale e la sinistra sul Do più basso.",
                "La destra suona Do, Re, Mi, Fa, Sol, Fa, Mi, Re, Do.",
                "La sinistra tiene Do per quattro battiti, poi Sol per quattro. Chiudi su Do."
            ],
            "duration": "0:24",
            "videoUrl": "assets/videos/06-mani-insieme.mp4",
            "poster": "assets/videos/06-mani-insieme.jpg"
        }
    ]
};
