/**
 * The Complete Piano Collection — Members Area (English)
 */

const APP_DATA = {
    config: {
        brandName: "The Complete Piano Collection",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Support Request Regarding Access (The Complete Piano Collection)",
        emailBodyTemplate: "Hello Support Team! I would like to request assistance regarding my access to The Complete Piano Collection members area.\n\nMy name is: ______.",
        showFloatingHelp: true
    },

    videos: [
    {
        "id": "v1",
        "title": "Five fingers: C, D, E, F, G",
        "category": "First steps",
        "description": "Follow the five highlighted keys. Each number shows which finger to use.",
        "steps": [
            "Place your right thumb on middle C.",
            "Play C, D, E, F, G with fingers 1, 2, 3, 4, 5.",
            "Come back through F, E, D, C. Repeat slowly."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/01-five-fingers.mp4",
        "poster": "assets/videos/01-five-fingers.jpg"
    },
    {
        "id": "v2",
        "title": "C major scale",
        "category": "Scales",
        "description": "An ascending and descending one-octave scale, with finger numbers on the keys.",
        "steps": [
            "Going up, use fingers 1, 2, 3, 1, 2, 3, 4, 5.",
            "After E, pass your thumb under your hand to F.",
            "Going down, use 5, 4, 3, 2, 1, 3, 2, 1. Keep a steady rhythm."
        ],
        "duration": "0:36",
        "videoUrl": "assets/videos/02-c-major-scale.mp4",
        "poster": "assets/videos/02-c-major-scale.jpg"
    },
    {
        "id": "v3",
        "title": "Your first chord: C major",
        "category": "Chords",
        "description": "Hear the notes of a C major chord separately, then together.",
        "steps": [
            "Place your thumb on C, middle finger on E and little finger on G.",
            "Play the three notes one at a time.",
            "Press C, E and G together with fingers 1, 3 and 5."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/03-c-major-chord.mp4",
        "poster": "assets/videos/03-c-major-chord.jpg"
    },
    {
        "id": "v4",
        "title": "C major arpeggio",
        "category": "Arpeggios",
        "description": "Turn a chord into an arpeggio: C, E, G, high C, then back down.",
        "steps": [
            "Use fingers 1, 2, 3 and 5 for C, E, G and high C.",
            "Listen to each note and keep your hand relaxed.",
            "Come down through G, E, C with fingers 3, 2, 1."
        ],
        "duration": "0:27",
        "videoUrl": "assets/videos/04-c-major-arpeggio.mp4",
        "poster": "assets/videos/04-c-major-arpeggio.jpg"
    },
    {
        "id": "v5",
        "title": "Changing chords: C, F, G",
        "category": "Chords",
        "description": "Follow the three chord positions and move between them at a calm pace.",
        "steps": [
            "Play C major: C, E, G.",
            "Move to F major: F, A, C; then G major: G, B, D.",
            "Use fingers 1, 3 and 5 for each chord. Finish on C major."
        ],
        "duration": "0:26",
        "videoUrl": "assets/videos/05-chord-changes.mp4",
        "poster": "assets/videos/05-chord-changes.jpg"
    },
    {
        "id": "v6",
        "title": "Both hands together",
        "category": "Coordination",
        "description": "The right hand plays five notes while the left accompanies with C and G.",
        "steps": [
            "Prepare your right hand on middle C and your left on low C.",
            "The right hand plays C, D, E, F, G, F, E, D, C.",
            "The left holds C for four beats, then G for four. Finish on C."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/06-hands-together.mp4",
        "poster": "assets/videos/06-hands-together.jpg"
    }
],

    books: [
        {
            id: "b1",
            title: "Piano for Absolute Beginners — Book 1 of 3",
            description: "Keys, chords & your first songs. Learn the keyboard, read simple sheet music, play essential chords & perform your first songs step by step.",
            badgeText: "Beginner Guide",
            badgeColor: "#1b2a38",
            features: [
                "Keyboard layout, sitting posture, hand position & note reading basics",
                "Step-by-step guidance for essential chords, scales & rhythms",
                "Play real, beautiful piano pieces right from the start"
            ],
            downloadUrl: "materials/PIANO-1-EN.pdf",
            coverImage: "assets/covers/piano_IMG1_en.png",
            buttonText: "Download Beginner Guide (PDF)"
        },
        {
            id: "b2",
            title: "Easy Piano Songs — Book 2 of 3",
            description: "Step-by-step songs for rhythm, coordination & confident playing. From your first melody to confident two-hand playing — a progressive repertoire collection for adult beginners.",
            badgeText: "Easy Songs",
            badgeColor: "#4a5568",
            features: [
                "Beautiful and specially arranged pieces for beginner pianists",
                "Develop two-hand coordination and smooth chord transitions",
                "Familiar melodies and timeless classical gems mastered step by step"
            ],
            downloadUrl: "materials/PIANO-2-EN.pdf",
            coverImage: "assets/covers/piano_IMG1_en.png",
            buttonText: "Download Songbook (PDF)"
        },
        {
            id: "b3",
            title: "30-Day Piano Challenge — Book 3 of 3",
            description: "A simple daily practice plan to build rhythm, confidence & consistency. 20 minutes a day to improve note recognition, coordination, timing, and finger fluency.",
            badgeText: "30-Day Challenge",
            badgeColor: "#6b1d2f",
            features: [
                "30 structured days with 20 minutes of purposeful daily practice",
                "Targeted exercises for note recognition, metronome timing & coordination",
                "Build a lasting, inspiring, and effective piano practice habit"
            ],
            downloadUrl: "materials/PIANO-3-EN.pdf",
            coverImage: "assets/covers/piano_IMG1_en.png",
            buttonText: "Download 30-Day Challenge (PDF)"
        }
    ],

    otherProducts: []
};

/* Localized interface for the piano demonstrations. */
APP_DATA.videoUI = {
    "label": "Videos",
    "homeTitle": "Video demonstrations",
    "homeText": "Six short exercises with piano sound only",
    "heading": "Watch, listen and try",
    "intro": "Six short animated demonstrations. Follow the highlighted keys and finger numbers. The audio contains piano only, with no narration or background voices.",
    "demo": "Demonstration",
    "of": "of",
    "sound": "Piano only",
    "unsupported": "Your browser does not support this video.",
    "open": "Open the demonstration",
    "speed": "Playback speed",
    "replay": "Start again",
    "practice": "Try it yourself",
    "choose": "Choose a demonstration",
    "fingers": "Fingers",
    "fingerNames": [
        "thumb",
        "index",
        "middle",
        "ring",
        "little"
    ],
    "creditsLabel": "Sounds",
    "creditsAdapted": "adapted for the exercises",
    "loadError": "The video could not be loaded. Refresh the page or try again shortly.",
    "playHint": "Press the play button to begin."
};
