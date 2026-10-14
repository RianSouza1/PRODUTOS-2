/* Chair exercises — filmed demonstrations with real people. */
const APP_DATA = {
  "config": {
    "brandName": "Stoelgymnastiek voor Senioren",
    "contactEmail": "trinityag01@gmail.com",
    "emailSubject": "Vragen over toegang (Stoelgymnastiek voor Senioren)",
    "emailBodyTemplate": "Hallo ondersteuningsteam! Ik wil graag hulp vragen met betrekking tot mijn toegang tot de ledenomgeving van Stoelgymnastiek voor Senioren.\n\nMijn naam is: ______.",
    "showFloatingHelp": true
  },
  "videos": [
    {
      "id": "v1",
      "title": "Zittende Knieheffing",
      "category": "benen",
      "categoryName": "Benen en heupen",
      "duration": "0:14",
      "target": "Quadriceps & Heupbuigers",
      "badgeColor": "#0284c7",
      "description": "Til de knieën beurtelings op met een rustige beweging.",
      "steps": [
        "Zit rechtop met de voeten plat op de vloer.",
        "Til één knie rustig op tot een comfortabele hoogte.",
        "Laat het been rustig zakken en wissel van kant."
      ],
      "tip": "Houd de rug lang en de buikspieren licht aangespannen. Vermijd schokkerige bewegingen.",
      "durationSeconds": 14,
      "youtubeId": "Q2fsp3p0Buc",
      "start": 0,
      "end": 14,
      "creator": "HEP2go Inc"
    },
    {
      "id": "v2",
      "title": "Hielen heffen in zit",
      "category": "benen",
      "categoryName": "Benen en heupen",
      "duration": "0:18",
      "target": "Kuitspieren & Enkelmobiliteit",
      "badgeColor": "#0284c7",
      "description": "Til uw hielen op en laat ze zakken terwijl uw tenen op de vloer blijven.",
      "steps": [
        "Zit rechtop met beide voeten onder uw knieën.",
        "Druk de voorvoeten licht in de vloer en til uw hielen op.",
        "Laat de hielen langzaam zakken en herhaal de beweging."
      ],
      "tip": "Ideaal om ook tussendoor tijdens het zitten te herhalen om stijve benen te voorkomen.",
      "durationSeconds": 18,
      "youtubeId": "HYYi5jYGZ70",
      "start": 6,
      "end": 24,
      "creator": "OrthoIndy"
    },
    {
      "id": "v3",
      "title": "Beenspreiding & Sluiting",
      "category": "benen",
      "categoryName": "Benen en heupen",
      "duration": "0:20",
      "target": "Buitenste Heupspieren & Dijbenen",
      "badgeColor": "#0284c7",
      "description": "Beweeg één been opzij terwijl de romp stil blijft.",
      "steps": [
        "Zit rechtop met de handen op de bovenbenen.",
        "Beweeg één voet rustig naar buiten.",
        "Breng de voet terug naar het midden en wissel van kant."
      ],
      "tip": "Beweeg alleen het been; houd het bovenlichaam en de andere knie stabiel in het midden.",
      "durationSeconds": 20,
      "youtubeId": "oN9yENov8kE",
      "start": 0,
      "end": 20,
      "creator": "HEP2go Inc"
    },
    {
      "id": "v4",
      "title": "Armen buigen in zit",
      "category": "bovenlichaam",
      "categoryName": "Bovenlichaam",
      "duration": "0:10",
      "target": "Biceps & Onderarmspieren",
      "badgeColor": "#0d9488",
      "description": "Bekijk hoe u de ellebogen in zit langzaam buigt en weer strekt.",
      "steps": [
        "Zit rechtop en houd de bovenarmen dicht bij uw lichaam.",
        "Buig één elleboog en breng de hand naar uw schouder.",
        "Laat de hand langzaam zakken en herhaal met de andere arm."
      ],
      "tip": "In de video worden halters gebruikt. U kunt de beweging eerst zonder extra gewicht oefenen.",
      "durationSeconds": 10,
      "youtubeId": "eZAvPxEB5Dw",
      "start": 4,
      "end": 14,
      "creator": "OPEX Fitness"
    },
    {
      "id": "v5",
      "title": "Schouderrollen & Mobiliteit",
      "category": "bovenlichaam",
      "categoryName": "Bovenlichaam",
      "duration": "0:24",
      "target": "Schouders & Nek-Trapezius",
      "badgeColor": "#0d9488",
      "description": "Rol de schouders in kleine, rustige cirkels.",
      "steps": [
        "Zit ontspannen met de armen langs het lichaam.",
        "Til de schouders licht op, rol ze naar achteren en laat ze zakken.",
        "Herhaal een paar cirkels en wissel daarna van richting."
      ],
      "tip": "Adem diep in wanneer de schouders omhoog gaan en adem rustig uit bij het laten zakken.",
      "durationSeconds": 24,
      "youtubeId": "XbzY45Z5DE8",
      "start": 10,
      "end": 34,
      "creator": "Vive Health"
    },
    {
      "id": "v6",
      "title": "Schouderbladen naar elkaar toe bewegen",
      "category": "bovenlichaam",
      "categoryName": "Bovenlichaam",
      "duration": "0:26",
      "target": "Schouders en bovenrug",
      "badgeColor": "#0d9488",
      "description": "Bekijk hoe u de schouderbladen in zit rustig naar elkaar toe beweegt.",
      "steps": [
        "Zit rechtop en ontspan de schouders.",
        "Trek de schouderbladen rustig naar achteren en naar elkaar toe.",
        "Houd kort vast, ontspan en herhaal de beweging."
      ],
      "tip": "Houd de schouders laag en maak de onderrug niet overdreven hol.",
      "durationSeconds": 26,
      "youtubeId": "eiFEbTDOtao",
      "thumbnail": "https://i.ytimg.com/vi/eiFEbTDOtao/hqdefault.jpg",
      "start": 3,
      "end": 29,
      "creator": "ChildrensOrtho"
    },
    {
      "id": "v7",
      "title": "Polscirkels",
      "category": "bovenlichaam",
      "categoryName": "Bovenlichaam",
      "duration": "0:27",
      "target": "Polsen",
      "badgeColor": "#0d9488",
      "description": "Bekijk de cirkelbeweging van de pols van dichtbij.",
      "steps": [
        "Houd één arm ontspannen voor uw lichaam.",
        "Maak langzaam cirkels met de hand vanuit de pols.",
        "Wissel van richting en herhaal met de andere hand."
      ],
      "tip": "Maak de beweging rustig en zet geen kracht.",
      "durationSeconds": 27,
      "youtubeId": "p8pHQpJfVdU",
      "start": 0,
      "end": 27,
      "creator": "E3 Rehab Exercise Library"
    },
    {
      "id": "v8",
      "title": "Zittende Romprotatie",
      "category": "romp",
      "categoryName": "Romp en houding",
      "duration": "0:12",
      "target": "Schuine Buikspieren & Wervelkolom",
      "badgeColor": "#d97706",
      "description": "Draai het bovenlichaam rustig van links naar rechts.",
      "steps": [
        "Kruis de armen losjes voor de borst.",
        "Draai de romp rustig naar één kant.",
        "Keer terug naar het midden en wissel van kant."
      ],
      "tip": "Houd de heupen en knieën recht naar voren; laat alleen het bovenlichaam soepel draaien.",
      "durationSeconds": 12,
      "youtubeId": "_71vJV2fZng",
      "start": 0,
      "end": 12,
      "creator": "E3 Rehab Exercise Library"
    },
    {
      "id": "v9",
      "title": "Bekkenkanteling & Houdingscontrole",
      "category": "romp",
      "categoryName": "Romp en houding",
      "duration": "0:12",
      "target": "Diepe Romp & Onderrug",
      "badgeColor": "#d97706",
      "description": "Kantel het bekken met een kleine, zachte beweging.",
      "steps": [
        "Zit rechtop met de handen op de heupen of bovenbenen.",
        "Kantel het bekken een klein beetje naar voren.",
        "Kantel het daarna voorzichtig naar achteren."
      ],
      "tip": "Maak een vloeiende, zachte golfbeweging zonder forceren in de rug.",
      "durationSeconds": 12,
      "youtubeId": "ep5OpYmyCps",
      "start": 0,
      "end": 12,
      "creator": "E3 Rehab Exercise Library"
    },
    {
      "id": "v10",
      "title": "Zijwaartse Rompbuiging",
      "category": "romp",
      "categoryName": "Romp en houding",
      "duration": "0:26",
      "target": "Flankspieren & Wervelkolom",
      "badgeColor": "#d97706",
      "description": "Buig de romp rustig naar beide kanten.",
      "steps": [
        "Laat de armen langs de stoel hangen.",
        "Laat één hand zakken terwijl u de romp licht opzij buigt.",
        "Keer terug naar het midden en wissel van kant."
      ],
      "tip": "Blijf met beide zitbotten stevig op de stoel; leun niet naar voren of naar achteren.",
      "durationSeconds": 26,
      "youtubeId": "qBi3bRc4Adw",
      "start": 8,
      "end": 34,
      "creator": "Rehab My Patient"
    },
    {
      "id": "v11",
      "title": "Kin zachtjes terugtrekken",
      "category": "nek",
      "categoryName": "Nek en mobiliteit",
      "duration": "0:20",
      "target": "Diepe Nekspieren & Houding",
      "badgeColor": "#6366f1",
      "description": "Trek de kin licht naar achteren terwijl u recht vooruit kijkt.",
      "steps": [
        "Kijk recht vooruit met ontspannen schouders.",
        "Trek de kin zachtjes horizontaal naar achteren.",
        "Houd kort vast en keer terug naar de beginpositie."
      ],
      "tip": "Een vinger tegen de kin kan als lichte aanwijzing dienen. Duw het hoofd niet naar achteren.",
      "durationSeconds": 20,
      "youtubeId": "IEF6zU9tBpQ",
      "start": 0,
      "end": 20,
      "creator": "Whole Health Partners"
    },
    {
      "id": "v12",
      "title": "Zachte Zijwaartse Nekrek",
      "category": "nek",
      "categoryName": "Nek en mobiliteit",
      "duration": "0:21",
      "target": "Nekspieren & Hals",
      "badgeColor": "#6366f1",
      "description": "Buig het hoofd rustig opzij zonder de schouder op te trekken.",
      "steps": [
        "Zit rechtop met ontspannen schouders.",
        "Beweeg één oor zachtjes richting de schouder.",
        "Houd kort vast, keer terug naar het midden en wissel van kant."
      ],
      "tip": "Til de schouder niet op naar het oor; laat het oor rustig naar de schouder zakken.",
      "durationSeconds": 21,
      "youtubeId": "P7T_9ittmwY",
      "start": 0,
      "end": 21,
      "creator": "E3 Rehab Exercise Library"
    }
  ],
  "books": [
    {
      "id": "b1",
      "title": "Stoelgymnastiek voor Senioren — Boek 1 van 3",
      "description": "Gerichte oefeningen in zittende positie voor benen, armen en romp — voor meer vrijheid en zelfvertrouwen in het dagelijks leven. Een complete gids met spierversterkende oefeningen zonder vloeroefeningen of zware gewichten.",
      "badgeText": "Krachttraining",
      "badgeColor": "#0284c7",
      "features": [
        "Training voor benen, kuiten, dijen, heupen en bilspieren in zittende positie",
        "Versterking van armen, schouders, bovenrug en grijpkracht op een veilige manier",
        "Veilige en effectieve oefeningen voor meer vrijheid en zelfvertrouwen in het dagelijks leven"
      ],
      "downloadUrl": "materials/CHAIR-1-NL.pdf",
      "coverImage": "assets/covers/ch_IMG1_nl.png",
      "buttonText": "Download Krachttraining (PDF)"
    },
    {
      "id": "b2",
      "title": "Stoelgymnastiek & Mobiliteit voor Senioren — Boek 2 van 3",
      "description": "Zachte zittende rekoefeningen voor soepelheid, houding, stijve gewrichten en gemakkelijkere dagelijkse bewegingen. Verbeter uw mobiliteit in uw eigen tempo zonder overbelasting van de gewrichten.",
      "badgeText": "Mobiliteit & Rekken",
      "badgeColor": "#0d9488",
      "features": [
        "Zachte zittende rekoefeningen voor meer flexibiliteit en een betere lichaamshouding",
        "Verlichting van stijfheid in nek, schouders, rug en heupen",
        "Oefenen in uw eigen tempo met de focus op welzijn en comfortabele bewegingen"
      ],
      "downloadUrl": "materials/CHAIR-2-NL.pdf",
      "coverImage": "assets/covers/ch_IMG1_nl.png",
      "buttonText": "Download Mobiliteit (PDF)"
    },
    {
      "id": "b3",
      "title": "Zittend Oefenprogramma — 28 Dagen — Boek 3 van 3",
      "description": "10 minuten per dag voor kracht, soepelheid, beweeglijkheid en zelfvertrouwen. Een compleet 28-dagen programma opgebouwd in eenvoudige, stapsgewijze sessies voor dagelijks welzijn.",
      "badgeText": "28-Dages Programma",
      "badgeColor": "#d97706",
      "features": [
        "Compleet 28-dagen programma met ~10 minuten dagelijkse zittende sessies",
        "Drie aanpasbare niveaus: makkelijker, standaard en met lichte uitdaging",
        "Combineert kracht, soepelheid en balans in een overzichtelijke dagelijkse routine"
      ],
      "downloadUrl": "materials/CHAIR-3-NL.pdf",
      "coverImage": "assets/covers/ch_IMG1_nl.png",
      "buttonText": "Download 28-Dagen Programma (PDF)"
    }
  ],
  "otherProducts": [],
  "videoUI": {
    "label": "Video’s",
    "homeTitle": "Videodemonstraties",
    "homeText": "12 korte oefeningen met echte mensen, zonder geluid",
    "heading": "Bekijk de beweging en probeer in uw eigen tempo",
    "intro": "12 korte video's met echte mensen. Bekijk de beweging, lees de stappen en probeer het in uw eigen tempo. Afspelen zonder geluid.",
    "demo": "Demonstratie",
    "of": "van",
    "sound": "Zonder geluid",
    "speed": "Afspeelsnelheid",
    "replay": "Opnieuw beginnen",
    "practice": "Stap voor stap",
    "choose": "Kies een oefening",
    "tip": "Praktische tip",
    "loadError": "De video kon niet worden geladen. Vernieuw de pagina of probeer het straks opnieuw.",
    "playHint": "Druk op de afspeelknop om te beginnen.",
    "categories": [
      "Benen en heupen",
      "Bovenlichaam",
      "Romp en houding",
      "Nek en mobiliteit"
    ],
    "eyebrow": "BEWEGEN STAP VOOR STAP",
    "shortLessons": "oefeningen · 10–27 seconden",
    "noSound": "Zonder geluid",
    "closeUp": "Echte mensen",
    "lesson": "Oefening",
    "seconds": "sec.",
    "excerpt": "Videofragment",
    "play": "Afspelen",
    "pause": "Pauze",
    "watch": "Bekijk de beweging",
    "loading": "De video wordt geladen …",
    "ready": "Bekijk eerst de beweging. Herhaal het fragment wanneer u wilt.",
    "playing": "Let op de houding en de rustige uitvoering.",
    "paused": "Gepauzeerd. Lees de stappen op uw gemak.",
    "finished": "Het fragment is afgelopen. Herhaal de beweging of kies de volgende oefening.",
    "next": "Volgende oefening",
    "first": "Naar de eerste oefening",
    "progress": "Voortgang van het fragment",
    "source": "Videodemonstratie",
    "original": "Bekijk de originele video",
    "error": "De video is nu niet beschikbaar. Probeer het opnieuw of open de originele video.",
    "note": "Gebruik een stevige stoel zonder wielen. Beweeg langzaam binnen een comfortabele bewegingsruimte en stop bij pijn."
  }
};
