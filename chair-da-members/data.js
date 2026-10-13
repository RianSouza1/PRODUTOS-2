/* Chair exercises — localized silent demonstrations. */
const APP_DATA = {
  "config": {
    "brandName": "Stolegymnastik for Seniorer",
    "contactEmail": "trinityag01@gmail.com",
    "emailSubject": "Spørgsmål om adgang (Stolegymnastik for Seniorer)",
    "emailBodyTemplate": "Hej supportteam! Jeg vil gerne bede om hjælp vedrørende min adgang til medlemsområdet for Stolegymnastik for Seniorer.\n\nMit navn er: ______.",
    "showFloatingHelp": true
  },
  "videos": [
    {
      "id": "v1",
      "title": "Knæløft i siddende",
      "category": "benen",
      "categoryName": "Ben og hofter",
      "duration": "0:30",
      "target": "Lår og hofter",
      "badgeColor": "#0284c7",
      "description": "Løft knæene skiftevis med en rolig bevægelse.",
      "steps": [
        "Sid oprejst med fødderne fladt på gulvet.",
        "Løft ét knæ langsomt til en behagelig højde.",
        "Sænk benet roligt, og skift side."
      ],
      "tip": "Hold overkroppen oprejst, og undgå ryk.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/01-knee-lifts.mp4",
      "poster": "assets/videos/01-knee-lifts.jpg"
    },
    {
      "id": "v2",
      "title": "Hæl- og tåhævninger",
      "category": "benen",
      "categoryName": "Ben og hofter",
      "duration": "0:25",
      "target": "Lægge og ankler",
      "badgeColor": "#0284c7",
      "description": "Bevæg fødder og ankler, mens du sidder stabilt.",
      "steps": [
        "Placér fødderne under knæene.",
        "Løft hælene med tæerne i gulvet.",
        "Sænk hælene, og løft derefter tæerne."
      ],
      "tip": "Hold bevægelsen rolig og behagelig.",
      "durationSeconds": 25,
      "videoUrl": "assets/videos/02-heel-toe-lifts.mp4",
      "poster": "assets/videos/02-heel-toe-lifts.jpg"
    },
    {
      "id": "v3",
      "title": "Før benet til siden",
      "category": "benen",
      "categoryName": "Ben og hofter",
      "duration": "0:30",
      "target": "Hofter og lår",
      "badgeColor": "#0284c7",
      "description": "Før ét ben til siden, mens overkroppen er stille.",
      "steps": [
        "Sid oprejst med hænderne på lårene.",
        "Før den ene fod roligt ud til siden.",
        "Før foden tilbage til midten, og skift side."
      ],
      "tip": "Hold hofterne og det andet ben stabile.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/03-side-taps.mp4",
      "poster": "assets/videos/03-side-taps.jpg"
    },
    {
      "id": "v4",
      "title": "Armbøjninger i siddende",
      "category": "bovenlichaam",
      "categoryName": "Overkrop",
      "duration": "0:30",
      "target": "Overarme og underarme",
      "badgeColor": "#0d9488",
      "description": "Bøj og stræk albuerne med rolige bevægelser.",
      "steps": [
        "Lad armene hænge langs siden med håndfladerne fremad.",
        "Bøj albuerne, og før hænderne mod skuldrene.",
        "Sænk underarmene langsomt igen."
      ],
      "tip": "Hold albuerne tæt på kroppen.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/04-arm-curls.mp4",
      "poster": "assets/videos/04-arm-curls.jpg"
    },
    {
      "id": "v5",
      "title": "Skulderrulninger",
      "category": "bovenlichaam",
      "categoryName": "Overkrop",
      "duration": "0:25",
      "target": "Skuldre og øvre ryg",
      "badgeColor": "#0d9488",
      "description": "Rul skuldrene i små, rolige cirkler.",
      "steps": [
        "Sid afslappet med armene langs siden.",
        "Løft skuldrene let, rul dem bagud, og sænk dem.",
        "Gentag nogle cirkler, og skift derefter retning."
      ],
      "tip": "Træk vejret roligt, og hold bevægelsen behagelig.",
      "durationSeconds": 25,
      "videoUrl": "assets/videos/05-shoulder-rolls.mp4",
      "poster": "assets/videos/05-shoulder-rolls.jpg"
    },
    {
      "id": "v6",
      "title": "Åbn brystet",
      "category": "bovenlichaam",
      "categoryName": "Overkrop",
      "duration": "0:35",
      "target": "Bryst og øvre ryg",
      "badgeColor": "#0d9488",
      "description": "Før albuerne forsigtigt bagud med hænderne på hofterne.",
      "steps": [
        "Sid oprejst, og læg hænderne på hofterne.",
        "Før albuerne roligt bagud, og åbn brystet let.",
        "Hold kort, og vend tilbage til start."
      ],
      "tip": "Hold skuldrene nede og blikket fremad.",
      "durationSeconds": 35,
      "videoUrl": "assets/videos/06-chest-opening.mp4",
      "poster": "assets/videos/06-chest-opening.jpg"
    },
    {
      "id": "v7",
      "title": "Håndled og fingre",
      "category": "bovenlichaam",
      "categoryName": "Overkrop",
      "duration": "0:20",
      "target": "Håndled og hænder",
      "badgeColor": "#0d9488",
      "description": "Lav små håndledscirkler, og åbn og luk hænderne.",
      "steps": [
        "Hold hænderne afslappet foran kroppen.",
        "Drej håndleddene roligt i begge retninger.",
        "Luk hænderne løst, og stræk derefter fingrene."
      ],
      "tip": "Undgå at knytte hænderne hårdt.",
      "durationSeconds": 20,
      "videoUrl": "assets/videos/07-wrists-fingers.mp4",
      "poster": "assets/videos/07-wrists-fingers.jpg"
    },
    {
      "id": "v8",
      "title": "Rotation af overkroppen",
      "category": "romp",
      "categoryName": "Krop og holdning",
      "duration": "0:30",
      "target": "Krop og rygsøjle",
      "badgeColor": "#d97706",
      "description": "Drej overkroppen roligt fra side til side.",
      "steps": [
        "Kryds armene løst foran brystet.",
        "Drej overkroppen forsigtigt mod den ene side.",
        "Vend tilbage til midten, og skift side."
      ],
      "tip": "Hold hofter og knæ rettet fremad.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/08-trunk-rotation.mp4",
      "poster": "assets/videos/08-trunk-rotation.jpg"
    },
    {
      "id": "v9",
      "title": "Bækkenvip i siddende",
      "category": "romp",
      "categoryName": "Krop og holdning",
      "duration": "0:30",
      "target": "Bækken og lænd",
      "badgeColor": "#d97706",
      "description": "Vip bækkenet med en lille, blød bevægelse.",
      "steps": [
        "Sid oprejst med hænderne på hofterne eller lårene.",
        "Vip bækkenet en smule fremad.",
        "Vip det derefter forsigtigt bagud."
      ],
      "tip": "Bevæg bækkenet roligt uden at presse ryggen.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/09-pelvic-tilts.mp4",
      "poster": "assets/videos/09-pelvic-tilts.jpg"
    },
    {
      "id": "v10",
      "title": "Sidebøjning af overkroppen",
      "category": "romp",
      "categoryName": "Krop og holdning",
      "duration": "0:30",
      "target": "Kroppens sider",
      "badgeColor": "#d97706",
      "description": "Bøj overkroppen roligt til hver side.",
      "steps": [
        "Lad armene hænge langs stolens sider.",
        "Før den ene hånd nedad, mens du bøjer dig let til siden.",
        "Vend tilbage til midten, og skift side."
      ],
      "tip": "Hold begge sider af bækkenet på stolen.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/10-side-bends.mp4",
      "poster": "assets/videos/10-side-bends.jpg"
    },
    {
      "id": "v11",
      "title": "Træk hagen tilbage",
      "category": "nek",
      "categoryName": "Nakke og bevægelighed",
      "duration": "0:20",
      "target": "Nakke og holdning",
      "badgeColor": "#6366f1",
      "description": "Træk hagen let bagud, mens blikket er vandret.",
      "steps": [
        "Se lige frem med afslappede skuldre.",
        "Træk hagen forsigtigt vandret bagud.",
        "Hold kort, og vend tilbage til start."
      ],
      "tip": "Kig ikke ned, og bevæg hovedet uden at tvinge det.",
      "durationSeconds": 20,
      "videoUrl": "assets/videos/11-chin-retraction.mp4",
      "poster": "assets/videos/11-chin-retraction.jpg"
    },
    {
      "id": "v12",
      "title": "Blid sidebøjning af nakken",
      "category": "nek",
      "categoryName": "Nakke og bevægelighed",
      "duration": "0:25",
      "target": "Nakke",
      "badgeColor": "#6366f1",
      "description": "Bøj hovedet roligt til siden uden at løfte skulderen.",
      "steps": [
        "Sid oprejst med afslappede skuldre.",
        "Før det ene øre forsigtigt mod skulderen.",
        "Vend tilbage til midten, og skift side."
      ],
      "tip": "Hold skuldrene nede, og træk ikke i hovedet med hånden.",
      "durationSeconds": 25,
      "videoUrl": "assets/videos/12-neck-side-bends.mp4",
      "poster": "assets/videos/12-neck-side-bends.jpg"
    }
  ],
  "books": [
    {
      "id": "b1",
      "title": "Stolegymnastik for Seniorer — Bog 1 af 3",
      "description": "Målrettede øvelser i siddende stilling for ben, arme og krop — for mere frihed og selvtillid i hverdagen. En komplet guide med styrkende øvelser uden gulvøvelser eller tunge vægte.",
      "badgeText": "Styrketræning",
      "badgeColor": "#0284c7",
      "features": [
        "Træning for ben, lægge, lår, hofter og sædemuskulatur i siddende stilling",
        "Styrkelse af arme, skuldre, øvre ryg og grebsstyrke på en skånsom måde",
        "Sikre og effektive øvelser der giver mere frihed og selvtillid i hverdagen"
      ],
      "downloadUrl": "materials/CHAIR-1-DA.pdf",
      "coverImage": "assets/covers/ch_IMG1_da.png",
      "buttonText": "Download Styrketræning (PDF)"
    },
    {
      "id": "b2",
      "title": "Stolegymnastik & Bevægelighed for Seniorer — Bog 2 af 3",
      "description": "Blide siddende strækøvelser for fleksibilitet, holdning, stive led og lettere hverdagsbevægelser. Forbedr din mobilitet i dit eget tempo uden at belaste leddene.",
      "badgeText": "Bevægelighed & Stræk",
      "badgeColor": "#0d9488",
      "features": [
        "Blide siddende strækøvelser for øget fleksibilitet og bedre kropsholdning",
        "Lindring af stivhed i nakke, skuldre, ryg og hofter",
        "Træning i dit eget tempo med fokus på velvære og behagelige bevægelser"
      ],
      "downloadUrl": "materials/CHAIR-2-DA.pdf",
      "coverImage": "assets/covers/ch_IMG1_da.png",
      "buttonText": "Download Bevægelighed (PDF)"
    },
    {
      "id": "b3",
      "title": "Siddende Træningsprogram — 28 Dage — Bog 3 af 3",
      "description": "10 minutter om dagen for styrke, smidighed, bevægelighed og selvtillid. Et komplet 28-dages program opbygget i lette, trinvise sessioner for daglig velvære.",
      "badgeText": "28-Dages Program",
      "badgeColor": "#d97706",
      "features": [
        "Komplet 28-dages program med ~10 minutters daglige siddende sessioner",
        "Tre tilpassede niveauer: lettere, standard og lidt mere udfordrende",
        "Kombinerer styrke, smidighed og balance i en overskuelig hverdagsrutine"
      ],
      "downloadUrl": "materials/CHAIR-3-DA.pdf",
      "coverImage": "assets/covers/ch_IMG1_da.png",
      "buttonText": "Download 28-Dages Program (PDF)"
    }
  ],
  "otherProducts": [],
  "videoUI": {
    "label": "Videoer",
    "homeTitle": "Videodemonstrationer",
    "homeText": "12 korte, lydløse øvelser på 20–35 sekunder",
    "heading": "Se bevægelsen, og prøv i dit eget tempo",
    "intro": "12 korte animerede demonstrationer på 20–35 sekunder. Videoerne har ingen lydspor, tale eller musik. Følg bevægelserne og den skriftlige vejledning.",
    "demo": "Demonstration",
    "of": "af",
    "sound": "Uden lyd",
    "unsupported": "Din browser understøtter ikke denne video.",
    "open": "Åbn demonstrationen",
    "speed": "Afspilningshastighed",
    "replay": "Start forfra",
    "practice": "Trin for trin",
    "choose": "Vælg en øvelse",
    "tip": "Praktisk tip",
    "creditsLabel": "Originale animationer",
    "creditsAdapted": "skabt til dette medlemsområde",
    "loadError": "Videoen kunne ikke indlæses. Opdater siden, eller prøv igen om lidt.",
    "playHint": "Tryk på afspilningsknappen for at begynde.",
    "categories": [
      "Ben og hofter",
      "Overkrop",
      "Krop og holdning",
      "Nakke og bevægelighed"
    ],
    "overlay": "SIDDENDE ØVELSER",
    "overlayTip": "Rolige, kontrollerede bevægelser"
  }
};
