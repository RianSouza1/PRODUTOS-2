/**
 * Colecția Completă de Pian — Zonă Membri (Română)
 */

const APP_DATA = {
    config: {
        brandName: "Colecția Completă de Pian",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Solicitare de suport – acces (Colecția Completă de Pian)",
        emailBodyTemplate: "Bună ziua, echipă de suport! Aș dori să cer ajutor privind accesul la zona de membri Colecția Completă de Pian.\n\nNumele meu este: ______.",
        showFloatingHelp: true
    },

    videos: [
    {
        "id": "v1",
        "title": "Cinci degete: Do, Re, Mi, Fa, Sol",
        "category": "Primii pași",
        "description": "Urmărește cele cinci clape evidențiate. Numărul arată ce deget să folosești.",
        "steps": [
            "Așază degetul mare drept pe Do central.",
            "Cântă Do, Re, Mi, Fa, Sol cu degetele 1, 2, 3, 4, 5.",
            "Revino prin Fa, Mi, Re, Do. Repetă încet."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/01-five-fingers.mp4",
        "poster": "assets/videos/01-five-fingers.jpg"
    },
    {
        "id": "v2",
        "title": "Gama Do major",
        "category": "Game",
        "description": "O gamă de o octavă, ascendentă și descendentă, cu numerele degetelor pe clape.",
        "steps": [
            "La urcare folosește degetele 1, 2, 3, 1, 2, 3, 4, 5.",
            "După Mi, trece degetul mare pe sub mână spre Fa.",
            "La coborâre: 5, 4, 3, 2, 1, 3, 2, 1. Păstrează un ritm regulat."
        ],
        "duration": "0:36",
        "videoUrl": "assets/videos/02-c-major-scale.mp4",
        "poster": "assets/videos/02-c-major-scale.jpg"
    },
    {
        "id": "v3",
        "title": "Primul tău acord: Do major",
        "category": "Acorduri",
        "description": "Ascultă notele acordului Do major mai întâi separat, apoi împreună.",
        "steps": [
            "Așază degetul mare pe Do, mijlociul pe Mi și degetul mic pe Sol.",
            "Cântă cele trei note pe rând.",
            "Apasă Do, Mi și Sol împreună cu degetele 1, 3 și 5."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/03-c-major-chord.mp4",
        "poster": "assets/videos/03-c-major-chord.jpg"
    },
    {
        "id": "v4",
        "title": "Arpegiu în Do major",
        "category": "Arpegii",
        "description": "Transformă acordul în arpegiu: Do, Mi, Sol, Do acut, apoi înapoi.",
        "steps": [
            "Folosește degetele 1, 2, 3 și 5 pentru Do, Mi, Sol și Do acut.",
            "Ascultă fiecare notă și menține mâna relaxată.",
            "Coboară prin Sol, Mi, Do cu degetele 3, 2, 1."
        ],
        "duration": "0:27",
        "videoUrl": "assets/videos/04-c-major-arpeggio.mp4",
        "poster": "assets/videos/04-c-major-arpeggio.jpg"
    },
    {
        "id": "v5",
        "title": "Schimbarea acordurilor: Do, Fa, Sol",
        "category": "Acorduri",
        "description": "Observă cele trei poziții de acord și treci calm de la una la alta.",
        "steps": [
            "Cântă Do major: Do, Mi, Sol.",
            "Treci la Fa major: Fa, La, Do; apoi Sol major: Sol, Si, Re.",
            "Folosește degetele 1, 3 și 5 pentru fiecare acord. Încheie cu Do major."
        ],
        "duration": "0:26",
        "videoUrl": "assets/videos/05-chord-changes.mp4",
        "poster": "assets/videos/05-chord-changes.jpg"
    },
    {
        "id": "v6",
        "title": "Ambele mâini împreună",
        "category": "Coordonare",
        "description": "Dreapta cântă cinci note, iar stânga acompaniază cu Do și Sol.",
        "steps": [
            "Pregătește dreapta pe Do central și stânga pe Do grav.",
            "Dreapta cântă Do, Re, Mi, Fa, Sol, Fa, Mi, Re, Do.",
            "Stânga ține Do patru bătăi, apoi Sol patru bătăi. Încheie pe Do."
        ],
        "duration": "0:24",
        "videoUrl": "assets/videos/06-hands-together.mp4",
        "poster": "assets/videos/06-hands-together.jpg"
    }
],

    books: [
        {
            id: "b1",
            title: "Pian pentru Începători Absoluți — Partea 1 din 3",
            description: "Clape, acorduri și primele tale piese. Familiarizează-te cu claviatura, învață să citești primele note, cântă acorduri simple și interpretează primele tale piese muzicale adevărate.",
            badgeText: "Ghid pentru Începători",
            badgeColor: "#1b2a38",
            features: [
                "Familiarizarea cu claviatura, poziția corectă a mâinilor și citirea notelor",
                "Ghid pas cu pas pentru primele acorduri, ritmuri și cheia sol/fa",
                "Interpretarea de piese muzicale adevărate și frumoase chiar de la început"
            ],
            downloadUrl: "materials/PIANO-1-RO.pdf",
            coverImage: "assets/covers/piano_IMG1_ro.png",
            buttonText: "Descarcă Ghidul (PDF)"
        },
        {
            id: "b2",
            title: "Piese Ușoare de Pian — Cartea a 2-a din 3",
            description: "Pas cu pas spre ritm, coordonare și bucuria autentică a interpretării. De la prima melodie până la cântatul sigur cu ambele mâini — repertoriu progresiv pentru adulți începători.",
            badgeText: "Piese Ușoare",
            badgeColor: "#4a5568",
            features: [
                "Piese de pian frumoase, aranjate special pentru începători",
                "Coordonarea ambelor mâini și independența degetelor",
                "Melodii cunoscute și capodopere clasice învățate pas cu pas"
            ],
            downloadUrl: "materials/PIANO-2-RO.pdf",
            coverImage: "assets/covers/piano_IMG1_ro.png",
            buttonText: "Descarcă Caietul de Partituri (PDF)"
        },
        {
            id: "b3",
            title: "Provocarea de 30 de Zile la Pian — Partea a 3-a din 3",
            description: "Un program zilnic bine gândit de 20 de minute pe zi, care dezvoltă simțul ritmic, îți dă încredere și construiește un obicei de studiu care durează.",
            badgeText: "Provocarea de 30 Zile",
            badgeColor: "#6b1d2f",
            features: [
                "30 de zile structurate cu exerciții zilnice de 20 de minute",
                "Exerciții de citire a notelor, metronom și coordonare a mâinilor",
                "Construirea unei rutine de studiu durabile, fluide și inspirate"
            ],
            downloadUrl: "materials/PIANO-3-RO.pdf",
            coverImage: "assets/covers/piano_IMG1_ro.png",
            buttonText: "Descarcă Provocarea (PDF)"
        }
    ],

    otherProducts: []
};

/* Localized interface for the piano demonstrations. */
APP_DATA.videoUI = {
    "label": "Videoclipuri",
    "homeTitle": "Videoclipuri demonstrative",
    "homeText": "Șase exerciții scurte, doar cu sunet de pian",
    "heading": "Privește, ascultă și încearcă",
    "intro": "Șase demonstrații animate scurte. Urmărește clapele evidențiate și numerele degetelor. Sunetul conține doar pian, fără explicații vorbite sau voci în fundal.",
    "demo": "Demonstrația",
    "of": "din",
    "sound": "Doar pian",
    "unsupported": "Browserul tău nu acceptă acest videoclip.",
    "open": "Deschide demonstrația",
    "speed": "Viteza de redare",
    "replay": "Reîncepe",
    "practice": "Încearcă și tu",
    "choose": "Alege o demonstrație",
    "fingers": "Degete",
    "fingerNames": [
        "degetul mare",
        "arătător",
        "mijlociu",
        "inelar",
        "degetul mic"
    ],
    "creditsLabel": "Sunete",
    "creditsAdapted": "adaptate pentru exerciții",
    "loadError": "Videoclipul nu a putut fi încărcat. Reîmprospătează pagina sau încearcă din nou în scurt timp.",
    "playHint": "Apasă butonul de redare pentru a începe."
};
