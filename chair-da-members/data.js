/* Chair exercises — short real-person demonstrations. */
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
      "duration": "0:14",
      "target": "Lår og hofter",
      "badgeColor": "#0284c7",
      "description": "Løft knæene skiftevis med en rolig bevægelse.",
      "steps": [
        "Sid oprejst med fødderne fladt på gulvet.",
        "Løft ét knæ langsomt til en behagelig højde.",
        "Sænk benet roligt, og skift side."
      ],
      "tip": "Hold overkroppen oprejst, og undgå ryk.",
      "durationSeconds": 14,
      "youtubeId": "Q2fsp3p0Buc",
      "start": 0,
      "end": 14,
      "creator": "HEP2go Inc"
    },
    {
      "id": "v2",
      "title": "Hælløft i siddende stilling",
      "category": "benen",
      "categoryName": "Ben og hofter",
      "duration": "0:25",
      "target": "Lægge og ankler",
      "badgeColor": "#0284c7",
      "description": "Løft og sænk hælene, mens tæerne bliver på gulvet.",
      "steps": [
        "Sid oprejst med begge fødder under knæene.",
        "Pres forfoden let mod gulvet, og løft hælene.",
        "Sænk hælene langsomt igen, og gentag bevægelsen."
      ],
      "tip": "Hold bevægelsen rolig og behagelig.",
      "durationSeconds": 25,
      "youtubeId": "HYYi5jYGZ70",
      "start": 3,
      "end": 28,
      "creator": "OrthoIndy"
    },
    {
      "id": "v3",
      "title": "Før benet til siden",
      "category": "benen",
      "categoryName": "Ben og hofter",
      "duration": "0:20",
      "target": "Hofter og lår",
      "badgeColor": "#0284c7",
      "description": "Før ét ben til siden, mens overkroppen er stille.",
      "steps": [
        "Sid oprejst med hænderne på lårene.",
        "Før den ene fod roligt ud til siden.",
        "Før foden tilbage til midten, og skift side."
      ],
      "tip": "Hold hofterne og det andet ben stabile.",
      "durationSeconds": 20,
      "youtubeId": "oN9yENov8kE",
      "start": 0,
      "end": 20,
      "creator": "HEP2go Inc"
    },
    {
      "id": "v4",
      "title": "Armbøjninger i siddende stilling",
      "category": "bovenlichaam",
      "categoryName": "Overkrop",
      "duration": "0:30",
      "target": "Overarme og underarme",
      "badgeColor": "#0d9488",
      "description": "Se, hvordan albuerne bøjes og strækkes langsomt, mens du sidder.",
      "steps": [
        "Sid oprejst, og hold overarmene tæt ved kroppen.",
        "Bøj den ene albue, og før hånden mod skulderen.",
        "Sænk hånden langsomt, og gentag med den anden arm."
      ],
      "tip": "Videoen viser lette håndvægte. Du kan lære bevægelsen uden ekstra vægt.",
      "durationSeconds": 30,
      "youtubeId": "8I640AY2j-U",
      "start": 4,
      "end": 34,
      "creator": "Rehab My Patient"
    },
    {
      "id": "v5",
      "title": "Skulderrulninger",
      "category": "bovenlichaam",
      "categoryName": "Overkrop",
      "duration": "0:30",
      "target": "Skuldre og øvre ryg",
      "badgeColor": "#0d9488",
      "description": "Rul skuldrene i små, rolige cirkler.",
      "steps": [
        "Sid afslappet med armene langs siden.",
        "Løft skuldrene let, rul dem bagud, og sænk dem.",
        "Gentag nogle cirkler, og skift derefter retning."
      ],
      "tip": "Træk vejret roligt, og hold bevægelsen behagelig.",
      "durationSeconds": 30,
      "youtubeId": "XbzY45Z5DE8",
      "start": 10,
      "end": 40,
      "creator": "Vive Health"
    },
    {
      "id": "v6",
      "title": "Saml skulderbladene",
      "category": "bovenlichaam",
      "categoryName": "Overkrop",
      "duration": "0:30",
      "target": "Skuldre og øvre ryg",
      "badgeColor": "#0d9488",
      "description": "Før armene let bagud, og saml skulderbladene.",
      "steps": [
        "Sid oprejst med armene afslappede langs siden.",
        "Drej håndfladerne fremad, og før armene lidt bagud og udad.",
        "Saml skulderbladene forsigtigt, slap af, og gentag."
      ],
      "tip": "Hold skuldrene nede, og undgå at svaje kraftigt i ryggen.",
      "durationSeconds": 30,
      "youtubeId": "pU5hXD_ll3A",
      "start": 4,
      "end": 34,
      "creator": "Rehab My Patient"
    },
    {
      "id": "v7",
      "title": "Cirkler med håndleddene",
      "category": "bovenlichaam",
      "categoryName": "Overkrop",
      "duration": "0:26",
      "target": "Håndled",
      "badgeColor": "#0d9488",
      "description": "Se håndleddets cirkelbevægelse på tæt hold.",
      "steps": [
        "Hold den ene arm afslappet foran kroppen.",
        "Lav langsomme cirkler med hånden fra håndleddet.",
        "Skift retning, og gentag med den anden hånd."
      ],
      "tip": "Undgå at knytte hænderne hårdt.",
      "durationSeconds": 26,
      "youtubeId": "wRSk1_C6yOM",
      "start": 0,
      "end": 26,
      "creator": "Rehab My Patient"
    },
    {
      "id": "v8",
      "title": "Rotation af overkroppen",
      "category": "romp",
      "categoryName": "Krop og holdning",
      "duration": "0:12",
      "target": "Krop og rygsøjle",
      "badgeColor": "#d97706",
      "description": "Drej overkroppen roligt fra side til side.",
      "steps": [
        "Kryds armene løst foran brystet.",
        "Drej overkroppen forsigtigt mod den ene side.",
        "Vend tilbage til midten, og skift side."
      ],
      "tip": "Hold hofter og knæ rettet fremad.",
      "durationSeconds": 12,
      "youtubeId": "_71vJV2fZng",
      "start": 0,
      "end": 12,
      "creator": "E3 Rehab Exercise Library"
    },
    {
      "id": "v9",
      "title": "Bækkenvip i siddende",
      "category": "romp",
      "categoryName": "Krop og holdning",
      "duration": "0:12",
      "target": "Bækken og lænd",
      "badgeColor": "#d97706",
      "description": "Vip bækkenet med en lille, blød bevægelse.",
      "steps": [
        "Sid oprejst med hænderne på hofterne eller lårene.",
        "Vip bækkenet en smule fremad.",
        "Vip det derefter forsigtigt bagud."
      ],
      "tip": "Bevæg bækkenet roligt uden at presse ryggen.",
      "durationSeconds": 12,
      "youtubeId": "ep5OpYmyCps",
      "start": 0,
      "end": 12,
      "creator": "E3 Rehab Exercise Library"
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
      "youtubeId": "qBi3bRc4Adw",
      "start": 4,
      "end": 34,
      "creator": "Rehab My Patient"
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
      "tip": "En finger på hagen kan bruges som en let rettesnor. Pres ikke hovedet bagud.",
      "durationSeconds": 20,
      "youtubeId": "IEF6zU9tBpQ",
      "start": 0,
      "end": 20,
      "creator": "Whole Health Partners"
    },
    {
      "id": "v12",
      "title": "Blid sidebøjning af nakken",
      "category": "nek",
      "categoryName": "Nakke og bevægelighed",
      "duration": "0:27",
      "target": "Nakke",
      "badgeColor": "#6366f1",
      "description": "Bøj hovedet roligt til siden uden at løfte skulderen.",
      "steps": [
        "Sid oprejst med afslappede skuldre.",
        "Før det ene øre forsigtigt mod skulderen.",
        "Vend tilbage til midten, og skift side."
      ],
      "tip": "Hold skuldrene nede, og træk ikke i hovedet med hånden.",
      "durationSeconds": 27,
      "youtubeId": "PTz8tnICXYQ",
      "start": 3,
      "end": 30,
      "creator": "Rehab My Patient"
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
    "homeText": "12 korte øvelser med rigtige mennesker, uden lyd",
    "heading": "Se bevægelsen, og prøv i dit eget tempo",
    "intro": "12 korte videoer med rigtige mennesker. Se bevægelsen, læs trinene, og prøv i dit eget tempo. Afspilning uden lyd.",
    "demo": "Demonstration",
    "of": "af",
    "sound": "Uden lyd",
    "speed": "Afspilningshastighed",
    "replay": "Start forfra",
    "practice": "Trin for trin",
    "choose": "Vælg en øvelse",
    "tip": "Praktisk tip",
    "loadError": "Videoen kunne ikke indlæses. Opdater siden, eller prøv igen om lidt.",
    "playHint": "Tryk på afspilningsknappen for at begynde.",
    "categories": [
      "Ben og hofter",
      "Overkrop",
      "Krop og holdning",
      "Nakke og bevægelighed"
    ],
    "eyebrow": "BEVÆGELSE TRIN FOR TRIN",
    "shortLessons": "øvelser · 12–30 sekunder",
    "noSound": "Uden lyd",
    "closeUp": "Rigtige mennesker",
    "lesson": "Øvelse",
    "seconds": "sek.",
    "excerpt": "Videoklip",
    "play": "Afspil",
    "pause": "Pause",
    "watch": "Se bevægelsen",
    "loading": "Videoen indlæses …",
    "ready": "Se først bevægelsen. Gentag klippet efter behov.",
    "playing": "Læg mærke til kropsholdningen og den langsomme bevægelse.",
    "paused": "Sat på pause. Læs trinene i ro og mag.",
    "finished": "Klippet er slut. Gentag bevægelsen, eller vælg den næste øvelse.",
    "next": "Næste øvelse",
    "first": "Til den første øvelse",
    "progress": "Klippets forløb",
    "source": "Videodemonstration",
    "original": "Se den originale video",
    "error": "Videoen er ikke tilgængelig lige nu. Prøv igen, eller åbn den originale video.",
    "note": "Brug en stabil stol uden hjul. Bevæg dig langsomt inden for et behageligt område, og stop ved smerter."
  }
};
