/* Chair exercises — localized silent demonstrations. */
const APP_DATA = {
  "config": {
    "brandName": "Stolsgymnastik för seniorer",
    "contactEmail": "trinityag01@gmail.com",
    "emailSubject": "Hjälp med tillgång till stolsgymnastik för seniorer",
    "emailBodyTemplate": "Hej! Jag behöver hjälp med min tillgång till stolsgymnastik för seniorer.\n\nMitt namn: ",
    "showFloatingHelp": false
  },
  "videos": [
    {
      "id": "v1",
      "title": "Knälyft i sittande",
      "category": "benen",
      "categoryName": "Ben och höfter",
      "duration": "0:30",
      "target": "Lår och höfter",
      "badgeColor": "#0284c7",
      "description": "En enkel rörelse där du lyfter knäna kontrollerat från en sittande position.",
      "steps": [
        "Sitt upprätt med fötterna plant på golvet.",
        "Lyft ett knä långsamt till en bekväm höjd.",
        "Sänk benet kontrollerat och byt sida."
      ],
      "tip": "Håll överkroppen upprätt och undvik ryckiga rörelser.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/01-knee-lifts.mp4",
      "poster": "assets/videos/01-knee-lifts.jpg"
    },
    {
      "id": "v2",
      "title": "Hällyft och fotrörelser",
      "category": "benen",
      "categoryName": "Ben och höfter",
      "duration": "0:25",
      "target": "Vader och fotleder",
      "badgeColor": "#0284c7",
      "description": "Rör fötter och fotleder medan du sitter stadigt.",
      "steps": [
        "Placera båda fötterna under knäna.",
        "Lyft hälarna och låt tårna vara kvar på golvet.",
        "Sänk hälarna och lyft sedan tårna."
      ],
      "tip": "Gör rörelsen långsamt och utan att pressa.",
      "durationSeconds": 25,
      "videoUrl": "assets/videos/02-heel-toe-lifts.mp4",
      "poster": "assets/videos/02-heel-toe-lifts.jpg"
    },
    {
      "id": "v3",
      "title": "För benet åt sidan",
      "category": "benen",
      "categoryName": "Ben och höfter",
      "duration": "0:30",
      "target": "Höfter och lår",
      "badgeColor": "#0284c7",
      "description": "För ett ben åt sidan medan överkroppen hålls stilla.",
      "steps": [
        "Sitt upprätt med händerna på låren.",
        "För ena foten långsamt ut åt sidan.",
        "För foten tillbaka till mitten och byt sida."
      ],
      "tip": "Håll överkroppen och det andra benet stilla.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/03-side-taps.mp4",
      "poster": "assets/videos/03-side-taps.jpg"
    },
    {
      "id": "v4",
      "title": "Armböjningar i sittande",
      "category": "bovenlichaam",
      "categoryName": "Överkropp",
      "duration": "0:30",
      "target": "Överarmar och underarmar",
      "badgeColor": "#0d9488",
      "description": "Böj och sträck armbågarna med kontrollerade rörelser.",
      "steps": [
        "Låt armarna hänga längs sidorna med handflatorna framåt.",
        "Böj armbågarna och för händerna mot axlarna.",
        "Sänk underarmarna långsamt igen."
      ],
      "tip": "Håll armbågarna nära kroppen.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/04-arm-curls.mp4",
      "poster": "assets/videos/04-arm-curls.jpg"
    },
    {
      "id": "v5",
      "title": "Axelrullningar",
      "category": "bovenlichaam",
      "categoryName": "Överkropp",
      "duration": "0:25",
      "target": "Axlar och övre rygg",
      "badgeColor": "#0d9488",
      "description": "Rulla axlarna i små, lugna cirklar.",
      "steps": [
        "Sitt avslappnat med armarna längs sidorna.",
        "Lyft axlarna lätt, rulla dem bakåt och sänk dem.",
        "Gör några cirklar och byt sedan riktning."
      ],
      "tip": "Andas lugnt och håll rörelsen bekväm.",
      "durationSeconds": 25,
      "videoUrl": "assets/videos/05-shoulder-rolls.mp4",
      "poster": "assets/videos/05-shoulder-rolls.jpg"
    },
    {
      "id": "v6",
      "title": "Öppna bröstet och rör övre ryggen",
      "category": "bovenlichaam",
      "categoryName": "Överkropp",
      "duration": "0:35",
      "target": "Bröst och övre rygg",
      "badgeColor": "#0d9488",
      "description": "Öppna armarna inom ett bekvämt rörelseomfång.",
      "steps": [
        "Sitt upprätt och placera händerna på höfterna.",
        "För armbågarna försiktigt bakåt och öppna bröstet lätt.",
        "Håll en kort stund och återgå till startläget."
      ],
      "tip": "Titta framåt och undvik att böja nacken för långt bakåt.",
      "durationSeconds": 35,
      "videoUrl": "assets/videos/06-chest-opening.mp4",
      "poster": "assets/videos/06-chest-opening.jpg"
    },
    {
      "id": "v7",
      "title": "Handledscirklar och fingerrörelser",
      "category": "bovenlichaam",
      "categoryName": "Överkropp",
      "duration": "0:20",
      "target": "Handleder och händer",
      "badgeColor": "#0d9488",
      "description": "Kombinera små handledscirklar med att öppna händerna.",
      "steps": [
        "Håll armarna avslappnat framför kroppen.",
        "Gör långsamma cirklar med handlederna åt båda håll.",
        "Slut händerna löst och öppna sedan fingrarna."
      ],
      "tip": "Rör händerna utan att pressa hårt.",
      "durationSeconds": 20,
      "videoUrl": "assets/videos/07-wrists-fingers.mp4",
      "poster": "assets/videos/07-wrists-fingers.jpg"
    },
    {
      "id": "v8",
      "title": "Bålrotation i sittande",
      "category": "romp",
      "categoryName": "Bål och hållning",
      "duration": "0:30",
      "target": "Bål och ryggrad",
      "badgeColor": "#d97706",
      "description": "Vrid överkroppen långsamt åt båda sidor.",
      "steps": [
        "Korsa armarna löst framför bröstet.",
        "Vrid överkroppen försiktigt åt höger så långt det känns bekvämt.",
        "Återgå till mitten och upprepa åt vänster."
      ],
      "tip": "Höfter och knän fortsätter att peka framåt.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/08-trunk-rotation.mp4",
      "poster": "assets/videos/08-trunk-rotation.jpg"
    },
    {
      "id": "v9",
      "title": "Bäckentippning i sittande",
      "category": "romp",
      "categoryName": "Bål och hållning",
      "duration": "0:30",
      "target": "Bäcken och nedre rygg",
      "badgeColor": "#d97706",
      "description": "Tippa bäckenet med en liten, mjuk rörelse.",
      "steps": [
        "Sitt upprätt med händerna på höfterna eller låren.",
        "Tippa bäckenet lätt framåt.",
        "Tippa det sedan försiktigt bakåt."
      ],
      "tip": "Håll rörelsen bekväm och undvik att tvinga kroppen.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/09-pelvic-tilts.mp4",
      "poster": "assets/videos/09-pelvic-tilts.jpg"
    },
    {
      "id": "v10",
      "title": "Sidoböjning av bålen",
      "category": "romp",
      "categoryName": "Bål och hållning",
      "duration": "0:30",
      "target": "Bålens sidor",
      "badgeColor": "#d97706",
      "description": "Luta överkroppen kontrollerat åt ena sidan.",
      "steps": [
        "Låt armarna hänga längs stolens sidor.",
        "För en hand långsamt mot golvet och luta överkroppen åt sidan.",
        "Återgå till mitten och byt sida."
      ],
      "tip": "Behåll båda sittbenen på stolen.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/10-side-bends.mp4",
      "poster": "assets/videos/10-side-bends.jpg"
    },
    {
      "id": "v11",
      "title": "Dra in hakan försiktigt",
      "category": "nek",
      "categoryName": "Nacke och rörlighet",
      "duration": "0:20",
      "target": "Nacke och hållning",
      "badgeColor": "#6366f1",
      "description": "Dra hakan lätt bakåt utan att titta ner.",
      "steps": [
        "Titta rakt fram och slappna av i käke och axlar.",
        "Dra hakan försiktigt rakt bakåt.",
        "Håll en kort stund och återgå till utgångsläget."
      ],
      "tip": "Håll blicken på samma höjd.",
      "durationSeconds": 20,
      "videoUrl": "assets/videos/11-chin-retraction.mp4",
      "poster": "assets/videos/11-chin-retraction.jpg"
    },
    {
      "id": "v12",
      "title": "Mjuk sidoböjning av nacken",
      "category": "nek",
      "categoryName": "Nacke och rörlighet",
      "duration": "0:25",
      "target": "Nacke",
      "badgeColor": "#6366f1",
      "description": "Luta huvudet försiktigt åt sidan utan att lyfta axeln.",
      "steps": [
        "Sitt upprätt med avslappnade axlar.",
        "Luta ena örat mot axeln, bara så långt det känns bekvämt.",
        "Återgå till mitten och byt sida."
      ],
      "tip": "Håll axlarna sänkta och dra inte i huvudet med handen.",
      "durationSeconds": 25,
      "videoUrl": "assets/videos/12-neck-side-bends.mp4",
      "poster": "assets/videos/12-neck-side-bends.jpg"
    }
  ],
  "books": [
    {
      "id": "b1",
      "title": "Stolsgymnastik för seniorer — bok 1 av 3",
      "description": "En guide med sittande övningar för ben, armar och bål. Lär dig rörelserna steg för steg med en stadig stol som utgångspunkt.",
      "badgeText": "Styrka i sittande • 70 sidor",
      "badgeColor": "#0284c7",
      "features": [
        "Övningar för ben, höfter och säte",
        "Rörelser för armar, axlar och händer",
        "Stegvisa instruktioner för daglig övning"
      ],
      "downloadUrl": "materials/CHAIR-1-SV.pdf",
      "coverImage": "assets/covers/ch_IMG1_sv.png",
      "buttonText": "Ladda ner PDF"
    },
    {
      "id": "b2",
      "title": "Stolsgymnastik och rörlighet för seniorer — bok 2 av 3",
      "description": "Mjuka rörelser och sittande stretchövningar för rörlighet och hållning. Använd instruktionerna i din egen takt.",
      "badgeText": "Rörlighet • 70 sidor",
      "badgeColor": "#0d9488",
      "features": [
        "Mjuka stretchövningar i sittande",
        "Rörelser för nacke, axlar, rygg och höfter",
        "Övningar inom ett bekvämt rörelseomfång"
      ],
      "downloadUrl": "materials/CHAIR-2-SV.pdf",
      "coverImage": "assets/covers/ch_IMG1_sv.png",
      "buttonText": "Ladda ner PDF"
    },
    {
      "id": "b3",
      "title": "Träningsprogrammet i sittande — 28 dagar — bok 3 av 3",
      "description": "Ett strukturerat program med cirka tio minuters sittande övningar om dagen. Planen kombinerar styrka, rörlighet och koordination i stegvisa pass.",
      "badgeText": "28-dagarsprogram • 70 sidor",
      "badgeColor": "#d97706",
      "features": [
        "28 dagar med korta dagliga pass",
        "Tre anpassningsbara nivåer",
        "En tydlig rutin för träning i sittande"
      ],
      "downloadUrl": "materials/CHAIR-3-SV.pdf",
      "coverImage": "assets/covers/ch_IMG1_sv.png",
      "buttonText": "Ladda ner PDF"
    }
  ],
  "otherProducts": [],
  "videoUI": {
    "label": "Filmer",
    "homeTitle": "Videodemonstrationer",
    "homeText": "12 korta övningar utan ljud på 20–35 sekunder",
    "heading": "Se rörelsen och prova i din egen takt",
    "intro": "12 korta animerade demonstrationer på 20–35 sekunder. Filmerna har inget ljudspår, tal eller musik. Följ rörelserna och de skriftliga instruktionerna.",
    "demo": "Demonstration",
    "of": "av",
    "sound": "Utan ljud",
    "unsupported": "Din webbläsare stöder inte den här videon.",
    "open": "Öppna demonstrationen",
    "speed": "Uppspelningshastighet",
    "replay": "Börja om",
    "practice": "Steg för steg",
    "choose": "Välj en övning",
    "tip": "Praktiskt tips",
    "creditsLabel": "Originalanimationer",
    "creditsAdapted": "skapade för detta medlemsområde",
    "loadError": "Filmen kunde inte laddas. Uppdatera sidan eller försök igen om en stund.",
    "playHint": "Tryck på uppspelningsknappen för att börja.",
    "categories": [
      "Ben och höfter",
      "Överkropp",
      "Bål och hållning",
      "Nacke och rörlighet"
    ],
    "overlay": "STOLSGYMNASTIK",
    "overlayTip": "Lugna, kontrollerade rörelser"
  }
};
