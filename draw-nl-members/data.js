/**
 * De Praktische Tekencollectie — Ledengebied (Nederlands)
 */

const APP_DATA = {
    config: {
        brandName: "De Praktische Tekencollectie",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vraag over toegang (De Praktische Tekencollectie)",
        emailBodyTemplate: "Hallo supportteam! Ik wil graag hulp vragen met betrekking tot mijn toegang tot het ledengedeelte van De Praktische Tekencollectie.\n\nMijn naam is: ______.",
        showFloatingHelp: true
    },

    "videos": [
  {
    "id": "v1",
    "youtubeId": "fIfi4QcNdZY",
    "start": 0,
    "end": 19,
    "creator": "Marissa Purnell",
    "title": "Schaduwen met kleine cirkels",
    "categoryName": "Schaduw",
    "description": "Kleine overlappende cirkels zorgen voor een zachte schaduw zonder opvallende strepen.",
    "steps": [
      "Begin met kleine, lichte cirkelbewegingen.",
      "Voeg meer lagen toe waar de vorm donkerder moet worden."
    ],
    "tip": "Laat het lichtste deel van het papier bijna onaangeraakt."
  },
  {
    "id": "v2",
    "youtubeId": "b6UuTWm9MIQ",
    "start": 0,
    "end": 14,
    "creator": "Circle Line Art School",
    "title": "Een cirkel uit de vrije hand",
    "categoryName": "De basis",
    "description": "Bekijk hoe hand en papier samenwerken om een gelijkmatige cirkel te tekenen.",
    "steps": [
      "Houd het potlood ontspannen vast en volg een ronde beweging.",
      "Probeer het papier tijdens het tekenen geleidelijk te draaien."
    ],
    "tip": "Begin met een lichte lijn voordat je de omtrek donkerder maakt."
  },
  {
    "id": "v3",
    "youtubeId": "A0Vsu7VtV_o",
    "start": 0,
    "end": 7,
    "creator": "Marissa Purnell",
    "title": "Schaduwen met vrije lusjes",
    "categoryName": "Schaduw",
    "description": "Korte, overlappende lusjes bouwen een levendige structuur op.",
    "steps": [
      "Teken kleine vrije lusjes zonder hard te drukken.",
      "Laat de lusjes in de schaduw meer overlappen."
    ],
    "tip": "Herhaal het korte filmpje en probeer de beweging op kladpapier."
  },
  {
    "id": "v4",
    "youtubeId": "HtKuG9CDRQg",
    "start": 0,
    "end": 28,
    "creator": "Marissa Purnell",
    "title": "Grafiet zacht uitwrijven",
    "categoryName": "Schaduw",
    "description": "Bekijk hoe een hulpmiddel het grafiet en de overgangen tussen licht en donker verzacht.",
    "steps": [
      "Breng eerst een dun laagje grafiet aan.",
      "Werk het laagje voorzichtig uit en houd de lichtste plek schoon."
    ],
    "tip": "Werk met lichte lagen in plaats van hard te drukken."
  },
  {
    "id": "v5",
    "youtubeId": "0HSZTTc-Byc",
    "start": 0,
    "end": 14,
    "creator": "Marissa Purnell",
    "title": "Volume opbouwen met stippen",
    "categoryName": "Schaduw",
    "description": "De afstand tussen de stippen maakt het oppervlak lichter of donkerder.",
    "steps": [
      "Plaats de stippen verder uit elkaar aan de lichte kant.",
      "Zet meer stippen dicht bij elkaar in de schaduw."
    ],
    "tip": "Verander de dichtheid van de stippen in plaats van de druk."
  },
  {
    "id": "v6",
    "youtubeId": "5miv178rZLQ",
    "start": 0,
    "end": 21,
    "creator": "Marissa Purnell",
    "title": "Schaduwen met arceringen",
    "categoryName": "Schaduw",
    "description": "Evenwijdige lijnen bouwen de toonwaarden stap voor stap op.",
    "steps": [
      "Trek korte lijnen in dezelfde richting.",
      "Zet de lijnen dichter bij elkaar en voeg lagen toe in de schaduw."
    ],
    "tip": "Houd dezelfde richting aan en laat lichte openingen zichtbaar."
  },
  {
    "id": "v7",
    "youtubeId": "bUo52UvO3SY",
    "start": 0,
    "end": 25,
    "creator": "Marissa Purnell",
    "title": "Lijnen die de vorm volgen",
    "categoryName": "Schaduw",
    "description": "Gebogen arceringen volgen het oppervlak en laten het volume zien.",
    "steps": [
      "Begin met gebogen lijnen die de ronde vorm volgen.",
      "Voeg lijnen toe waar het oppervlak van het licht af draait."
    ],
    "tip": "Stel je voor hoe de lijnen op een echte bal zouden liggen."
  },
  {
    "id": "v8",
    "youtubeId": "1eAe7axDCKc",
    "start": 0,
    "end": 32,
    "creator": "Circle Line Art School",
    "title": "Een straat in eenpuntsperspectief",
    "categoryName": "Perspectief",
    "description": "Bekijk hoe de lijnen van de straat en de huizen naar hetzelfde verdwijnpunt lopen.",
    "steps": [
      "Zet een verdwijnpunt en trek de straatranden naar dat punt.",
      "Bouw de huizen met verticale lijnen en lijnen naar hetzelfde punt."
    ],
    "tip": "Maak details kleiner naarmate ze verder weg liggen."
  }
],

    books: [
        {
            id: "b1",
            title: "Leren Tekenen Vanaf Nul — Deel 1",
            description: "Lijnen, vormen, verhoudingen, perspectief en clair-obscur. Een complete tekencursus voor volwassenen: ontwikkel artistiek inzicht, beheers uw potloodstreek en creëer met vertrouwen driedimensionale volumes.",
            badgeText: "Hoofdgids",
            badgeColor: "#7C3AED",
            features: [
                "Beheers de juiste potloodgreep, lijnen en verhoudingen",
                "Bouw geometrische vormen en complexe figuren in perspectief",
                "Leer schaduw- en doordruktechnieken met potlood"
            ],
            downloadUrl: "materials/DRAW-1-NL.pdf",
            coverImage: "assets/covers/draw_IMG1_nl.png",
            buttonText: "Download de Hoofdgids (PDF)"
        },
        {
            id: "b2",
            title: "De Complete Gids voor Tekenonderwerpen — Deel 2",
            description: "Gezichten, figuren, dieren, natuur en alledaagse voorwerpen. Leer hoe u elk echt onderwerp kunt ontleden in eenvoudige, expressieve basisvormen met behoud van de juiste structuur.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Teken sprekende gezichten en de juiste proporties van het hoofd",
                "Leg de vereenvoudigde anatomie en houdingen van dieren vast",
                "Technieken voor planten, landschappen en dagelijkse objecten"
            ],
            downloadUrl: "materials/DRAW-2-NL.pdf",
            coverImage: "assets/covers/draw_IMG1_nl.png",
            buttonText: "Download Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "Van Schets tot Afgewerkte Tekening — Deel 3",
            description: "Compositie, licht en schaduw, texturen en begeleide projecten. Van de eerste ruwe schets tot het voltooide kunstwerk: beheers contrasten, textuurweergave en voltooi stap-voor-stap projecten.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Regels voor visuele compositie en focuspunten",
                "Geavanceerde beheersing van lichtwaarden, toon en contrast",
                "Stap-voor-stap begeleide projecten: stilleven, botanica en landschap"
            ],
            downloadUrl: "materials/DRAW-3-NL.pdf",
            coverImage: "assets/covers/draw_IMG1_nl.png",
            buttonText: "Download Bonus #2 (PDF)"
        },
        {
            id: "b4",
            title: "Praktijkwerkboek 01 : Leren tekenen vanaf nul",
            description: "17 begeleide praktijksessies om precisie in uw lijnvoering en observatie te ontwikkelen en uw eerste stilleven te voltooien.",
            badgeText: "17 Sessies",
            badgeColor: "#7C3AED",
            downloadUrl: "materials/01_Leren_tekenen_vanaf_nul_NL.pdf",
            coverImage: "assets/covers/draw_IMG1_nl.png",
            buttonText: "Download Werkboek 01"
        },
        {
            id: "b5",
            title: "Praktijkwerkboek 02 : Onderwerpen om te tekenen",
            description: "17 gerichte sessies om eenvoudige vormen om te zetten in levendige onderwerpen: gezichten, lichamen, dieren en objecten.",
            badgeText: "17 Sessies",
            badgeColor: "#2563EB",
            downloadUrl: "materials/02_Onderwerpen_om_te_tekenen_NL.pdf",
            coverImage: "assets/covers/draw_IMG1_nl.png",
            buttonText: "Download Werkboek 02"
        },
        {
            id: "b6",
            title: "Praktijkwerkboek 03 : Van schets tot afgewerkte tekening",
            description: "3 volledige begeleide praktijkprojecten: compositie, clair-obscur, texturen en verfijning.",
            badgeText: "3 Projecten",
            badgeColor: "#059669",
            downloadUrl: "materials/03_Van_schets_tot_afgewerkte_tekening_NL.pdf",
            coverImage: "assets/covers/draw_IMG1_nl.png",
            buttonText: "Download Werkboek 03"
        }
    ],

    otherProducts: [],
  "videoUI": {
  "eyebrow": "STAP VOOR STAP TEKENEN",
  "heading": "Bekijk de beweging. Probeer het zelf.",
  "intro": "Acht korte demonstraties met echte handen, potlood en papier. Kijk zonder geluid en oefen met de stappen onder de video.",
  "shortLessons": "demonstraties · 7–32 seconden",
  "noSound": "Zonder geluid",
  "closeUp": "Echte handen",
  "lesson": "Techniek",
  "seconds": "s",
  "excerpt": "Korte demonstratie",
  "play": "Afspelen",
  "pause": "Pauzeren",
  "watch": "Bekijk de techniek",
  "replay": "Opnieuw bekijken",
  "speed": "Snelheid",
  "loading": "De video wordt geladen…",
  "ready": "Bekijk eerst de handbeweging en herhaal die daarna op je eigen papier.",
  "playing": "Volg de potloodbeweging en de opbouw van de lijnen.",
  "paused": "Gepauzeerd. Lees de stappen op je gemak.",
  "finished": "Demonstratie afgelopen. Bekijk hem opnieuw of kies de volgende techniek.",
  "next": "Volgende techniek",
  "first": "Terug naar het begin",
  "progress": "Voortgang",
  "practice": "Probeer het op je eigen papier",
  "tip": "Praktische tip",
  "choose": "Kies een techniek",
  "source": "Oorspronkelijke demonstratie",
  "original": "Open de oorspronkelijke video",
  "error": "De video kan niet worden geladen. Probeer opnieuw of open de oorspronkelijke video.",
  "note": "Leg papier, een potlood en een gum klaar. Kijk eerst, vertraag de video als dat helpt en oefen daarna zelf."
}
};
