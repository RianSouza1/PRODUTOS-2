/* Chair exercises — localized silent demonstrations. */
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
      "duration": "0:30",
      "target": "Quadriceps & Heupbuigers",
      "badgeColor": "#0284c7",
      "description": "Til de knieën beurtelings op met een rustige beweging.",
      "steps": [
        "Zit rechtop met de voeten plat op de vloer.",
        "Til één knie rustig op tot een comfortabele hoogte.",
        "Laat het been rustig zakken en wissel van kant."
      ],
      "tip": "Houd de rug lang en de buikspieren licht aangespannen. Vermijd schokkerige bewegingen.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/01-knee-lifts.mp4",
      "poster": "assets/videos/01-knee-lifts.jpg"
    },
    {
      "id": "v2",
      "title": "Kuitheffen & Enkelpompen",
      "category": "benen",
      "categoryName": "Benen en heupen",
      "duration": "0:25",
      "target": "Kuitspieren & Enkelmobiliteit",
      "badgeColor": "#0284c7",
      "description": "Beweeg de voeten en enkels terwijl u stabiel zit.",
      "steps": [
        "Plaats beide voeten onder de knieën.",
        "Til de hielen op terwijl de tenen op de vloer blijven.",
        "Laat de hielen zakken en til daarna de tenen op."
      ],
      "tip": "Ideaal om ook tussendoor tijdens het zitten te herhalen om stijve benen te voorkomen.",
      "durationSeconds": 25,
      "videoUrl": "assets/videos/02-heel-toe-lifts.mp4",
      "poster": "assets/videos/02-heel-toe-lifts.jpg"
    },
    {
      "id": "v3",
      "title": "Beenspreiding & Sluiting",
      "category": "benen",
      "categoryName": "Benen en heupen",
      "duration": "0:30",
      "target": "Buitenste Heupspieren & Dijbenen",
      "badgeColor": "#0284c7",
      "description": "Beweeg één been opzij terwijl de romp stil blijft.",
      "steps": [
        "Zit rechtop met de handen op de bovenbenen.",
        "Beweeg één voet rustig naar buiten.",
        "Breng de voet terug naar het midden en wissel van kant."
      ],
      "tip": "Beweeg alleen het been; houd het bovenlichaam en de andere knie stabiel in het midden.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/03-side-taps.mp4",
      "poster": "assets/videos/03-side-taps.jpg"
    },
    {
      "id": "v4",
      "title": "Bicep Curls Zittend",
      "category": "bovenlichaam",
      "categoryName": "Bovenlichaam",
      "duration": "0:30",
      "target": "Biceps & Onderarmspieren",
      "badgeColor": "#0d9488",
      "description": "Buig en strek de ellebogen met rustige bewegingen.",
      "steps": [
        "Laat de armen langs het lichaam hangen met de handpalmen naar voren.",
        "Buig de ellebogen en breng de handen richting de schouders.",
        "Laat de onderarmen langzaam weer zakken."
      ],
      "tip": "Houd de ellebogen dicht bij de zij en beweeg uitsluitend de onderarmen.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/04-arm-curls.mp4",
      "poster": "assets/videos/04-arm-curls.jpg"
    },
    {
      "id": "v5",
      "title": "Schouderrollen & Mobiliteit",
      "category": "bovenlichaam",
      "categoryName": "Bovenlichaam",
      "duration": "0:25",
      "target": "Schouders & Nek-Trapezius",
      "badgeColor": "#0d9488",
      "description": "Rol de schouders in kleine, rustige cirkels.",
      "steps": [
        "Zit ontspannen met de armen langs het lichaam.",
        "Til de schouders licht op, rol ze naar achteren en laat ze zakken.",
        "Herhaal een paar cirkels en wissel daarna van richting."
      ],
      "tip": "Adem diep in wanneer de schouders omhoog gaan en adem rustig uit bij het laten zakken.",
      "durationSeconds": 25,
      "videoUrl": "assets/videos/05-shoulder-rolls.mp4",
      "poster": "assets/videos/05-shoulder-rolls.jpg"
    },
    {
      "id": "v6",
      "title": "Borst Openen & Bovenrug Strekken",
      "category": "bovenlichaam",
      "categoryName": "Bovenlichaam",
      "duration": "0:35",
      "target": "Borstkas & Tussenribspieren",
      "badgeColor": "#0d9488",
      "description": "Breng de ellebogen zachtjes naar achteren met de handen op de heupen.",
      "steps": [
        "Zit rechtop en leg de handen op de heupen.",
        "Breng de ellebogen zachtjes naar achteren en open de borstkas licht.",
        "Houd kort vast en keer terug naar de beginpositie."
      ],
      "tip": "Strek de nek niet te ver naar achteren; houd de kin horizontaal en de blik naar voren.",
      "durationSeconds": 35,
      "videoUrl": "assets/videos/06-chest-opening.mp4",
      "poster": "assets/videos/06-chest-opening.jpg"
    },
    {
      "id": "v7",
      "title": "Polscirkels & Vingergrijpkracht",
      "category": "bovenlichaam",
      "categoryName": "Bovenlichaam",
      "duration": "0:20",
      "target": "Polsgewrichten & Handkracht",
      "badgeColor": "#0d9488",
      "description": "Maak kleine polscirkels en open en sluit de handen.",
      "steps": [
        "Houd de handen ontspannen voor het lichaam.",
        "Draai kleine, rustige cirkels met de polsen in beide richtingen.",
        "Sluit de handen losjes en strek vervolgens de vingers."
      ],
      "tip": "Maak de beweging rustig en zet geen kracht.",
      "durationSeconds": 20,
      "videoUrl": "assets/videos/07-wrists-fingers.mp4",
      "poster": "assets/videos/07-wrists-fingers.jpg"
    },
    {
      "id": "v8",
      "title": "Zittende Romprotatie",
      "category": "romp",
      "categoryName": "Romp en houding",
      "duration": "0:30",
      "target": "Schuine Buikspieren & Wervelkolom",
      "badgeColor": "#d97706",
      "description": "Draai het bovenlichaam rustig van links naar rechts.",
      "steps": [
        "Kruis de armen losjes voor de borst.",
        "Draai de romp rustig naar één kant.",
        "Keer terug naar het midden en wissel van kant."
      ],
      "tip": "Houd de heupen en knieën recht naar voren; laat alleen het bovenlichaam soepel draaien.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/08-trunk-rotation.mp4",
      "poster": "assets/videos/08-trunk-rotation.jpg"
    },
    {
      "id": "v9",
      "title": "Bekkenkanteling & Houdingscontrole",
      "category": "romp",
      "categoryName": "Romp en houding",
      "duration": "0:30",
      "target": "Diepe Romp & Onderrug",
      "badgeColor": "#d97706",
      "description": "Kantel het bekken met een kleine, zachte beweging.",
      "steps": [
        "Zit rechtop met de handen op de heupen of bovenbenen.",
        "Kantel het bekken een klein beetje naar voren.",
        "Kantel het daarna voorzichtig naar achteren."
      ],
      "tip": "Maak een vloeiende, zachte golfbeweging zonder forceren in de rug.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/09-pelvic-tilts.mp4",
      "poster": "assets/videos/09-pelvic-tilts.jpg"
    },
    {
      "id": "v10",
      "title": "Zijwaartse Rompbuiging",
      "category": "romp",
      "categoryName": "Romp en houding",
      "duration": "0:30",
      "target": "Flankspieren & Wervelkolom",
      "badgeColor": "#d97706",
      "description": "Buig de romp rustig naar beide kanten.",
      "steps": [
        "Laat de armen langs de stoel hangen.",
        "Laat één hand zakken terwijl u de romp licht opzij buigt.",
        "Keer terug naar het midden en wissel van kant."
      ],
      "tip": "Blijf met beide zitbotten stevig op de stoel; leun niet naar voren of naar achteren.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/10-side-bends.mp4",
      "poster": "assets/videos/10-side-bends.jpg"
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
      "tip": "Kijk niet naar beneden tijdens het intrekken van de kin; houd de ooghoogte gelijk.",
      "durationSeconds": 20,
      "videoUrl": "assets/videos/11-chin-retraction.mp4",
      "poster": "assets/videos/11-chin-retraction.jpg"
    },
    {
      "id": "v12",
      "title": "Zachte Zijwaartse Nekrek",
      "category": "nek",
      "categoryName": "Nek en mobiliteit",
      "duration": "0:25",
      "target": "Nekspieren & Hals",
      "badgeColor": "#6366f1",
      "description": "Buig het hoofd rustig opzij zonder de schouder op te trekken.",
      "steps": [
        "Zit rechtop met ontspannen schouders.",
        "Beweeg één oor zachtjes richting de schouder.",
        "Houd kort vast, keer terug naar het midden en wissel van kant."
      ],
      "tip": "Til de schouder niet op naar het oor; laat het oor rustig naar de schouder zakken.",
      "durationSeconds": 25,
      "videoUrl": "assets/videos/12-neck-side-bends.mp4",
      "poster": "assets/videos/12-neck-side-bends.jpg"
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
    "homeText": "12 korte, geluidloze oefeningen van 20–35 seconden",
    "heading": "Bekijk de beweging en probeer in uw eigen tempo",
    "intro": "12 korte geanimeerde demonstraties van 20–35 seconden. De video’s hebben geen geluidsspoor, gesproken uitleg of muziek. Volg de bewegingen en de geschreven instructies.",
    "demo": "Demonstratie",
    "of": "van",
    "sound": "Zonder geluid",
    "unsupported": "Uw browser ondersteunt deze video niet.",
    "open": "Open de demonstratie",
    "speed": "Afspeelsnelheid",
    "replay": "Opnieuw beginnen",
    "practice": "Stap voor stap",
    "choose": "Kies een oefening",
    "tip": "Praktische tip",
    "creditsLabel": "Originele animaties",
    "creditsAdapted": "gemaakt voor deze ledenomgeving",
    "loadError": "De video kon niet worden geladen. Vernieuw de pagina of probeer het straks opnieuw.",
    "playHint": "Druk op de afspeelknop om te beginnen.",
    "categories": [
      "Benen en heupen",
      "Bovenlichaam",
      "Romp en houding",
      "Nek en mobiliteit"
    ],
    "overlay": "STOELGYMNASTIEK",
    "overlayTip": "Rustige, gecontroleerde bewegingen"
  }
};
