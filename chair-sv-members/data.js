/* Chair exercises — short real-person demonstrations. */
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
      "duration": "0:14",
      "target": "Lår och höfter",
      "badgeColor": "#0284c7",
      "description": "En enkel rörelse där du lyfter knäna kontrollerat från en sittande position.",
      "steps": [
        "Sitt upprätt med fötterna plant på golvet.",
        "Lyft ett knä långsamt till en bekväm höjd.",
        "Sänk benet kontrollerat och byt sida."
      ],
      "tip": "Håll överkroppen upprätt och undvik ryckiga rörelser.",
      "durationSeconds": 14,
      "youtubeId": "Q2fsp3p0Buc",
      "start": 0,
      "end": 14,
      "creator": "HEP2go Inc"
    },
    {
      "id": "v2",
      "title": "Hällyft i sittande",
      "category": "benen",
      "categoryName": "Ben och höfter",
      "duration": "0:25",
      "target": "Vader och fotleder",
      "badgeColor": "#0284c7",
      "description": "Lyft och sänk hälarna medan tårna är kvar på golvet.",
      "steps": [
        "Sitt upprätt med båda fötterna under knäna.",
        "Tryck framfötterna lätt mot golvet och lyft hälarna.",
        "Sänk hälarna långsamt igen och upprepa rörelsen."
      ],
      "tip": "Gör rörelsen långsamt och utan att pressa.",
      "durationSeconds": 25,
      "youtubeId": "HYYi5jYGZ70",
      "start": 3,
      "end": 28,
      "creator": "OrthoIndy"
    },
    {
      "id": "v3",
      "title": "För benet åt sidan",
      "category": "benen",
      "categoryName": "Ben och höfter",
      "duration": "0:20",
      "target": "Höfter och lår",
      "badgeColor": "#0284c7",
      "description": "För ett ben åt sidan medan överkroppen hålls stilla.",
      "steps": [
        "Sitt upprätt med händerna på låren.",
        "För ena foten långsamt ut åt sidan.",
        "För foten tillbaka till mitten och byt sida."
      ],
      "tip": "Håll överkroppen och det andra benet stilla.",
      "durationSeconds": 20,
      "youtubeId": "oN9yENov8kE",
      "start": 0,
      "end": 20,
      "creator": "HEP2go Inc"
    },
    {
      "id": "v4",
      "title": "Armböjningar i sittande",
      "category": "bovenlichaam",
      "categoryName": "Överkropp",
      "duration": "0:30",
      "target": "Överarmar och underarmar",
      "badgeColor": "#0d9488",
      "description": "Se hur armbågarna böjs och sträcks långsamt i sittande.",
      "steps": [
        "Sitt upprätt och håll överarmarna nära kroppen.",
        "Böj ena armbågen och för handen mot axeln.",
        "Sänk handen långsamt och upprepa med den andra armen."
      ],
      "tip": "Filmen visar lätta hantlar. Du kan lära dig rörelsen utan extra vikt.",
      "durationSeconds": 30,
      "youtubeId": "8I640AY2j-U",
      "start": 4,
      "end": 34,
      "creator": "Rehab My Patient"
    },
    {
      "id": "v5",
      "title": "Axelrullningar",
      "category": "bovenlichaam",
      "categoryName": "Överkropp",
      "duration": "0:30",
      "target": "Axlar och övre rygg",
      "badgeColor": "#0d9488",
      "description": "Rulla axlarna i små, lugna cirklar.",
      "steps": [
        "Sitt avslappnat med armarna längs sidorna.",
        "Lyft axlarna lätt, rulla dem bakåt och sänk dem.",
        "Gör några cirklar och byt sedan riktning."
      ],
      "tip": "Andas lugnt och håll rörelsen bekväm.",
      "durationSeconds": 30,
      "youtubeId": "XbzY45Z5DE8",
      "start": 10,
      "end": 40,
      "creator": "Vive Health"
    },
    {
      "id": "v6",
      "title": "Dra ihop skulderbladen",
      "category": "bovenlichaam",
      "categoryName": "Överkropp",
      "duration": "0:30",
      "target": "Axlar och övre rygg",
      "badgeColor": "#0d9488",
      "description": "För armarna lätt bakåt och dra ihop skulderbladen.",
      "steps": [
        "Sitt upprätt med armarna avslappnade längs sidorna.",
        "Vrid handflatorna framåt och för armarna lite bakåt och utåt.",
        "Dra försiktigt ihop skulderbladen, slappna av och upprepa."
      ],
      "tip": "Håll axlarna nere och undvik att svanka kraftigt.",
      "durationSeconds": 30,
      "youtubeId": "pU5hXD_ll3A",
      "start": 4,
      "end": 34,
      "creator": "Rehab My Patient"
    },
    {
      "id": "v7",
      "title": "Cirklar med handlederna",
      "category": "bovenlichaam",
      "categoryName": "Överkropp",
      "duration": "0:26",
      "target": "Handleder",
      "badgeColor": "#0d9488",
      "description": "Se handledens cirkelrörelse på nära håll.",
      "steps": [
        "Håll ena armen avslappnad framför kroppen.",
        "Gör långsamma cirklar med handen från handleden.",
        "Byt riktning och upprepa med den andra handen."
      ],
      "tip": "Rör händerna utan att pressa hårt.",
      "durationSeconds": 26,
      "youtubeId": "wRSk1_C6yOM",
      "start": 0,
      "end": 26,
      "creator": "Rehab My Patient"
    },
    {
      "id": "v8",
      "title": "Bålrotation i sittande",
      "category": "romp",
      "categoryName": "Bål och hållning",
      "duration": "0:12",
      "target": "Bål och ryggrad",
      "badgeColor": "#d97706",
      "description": "Vrid överkroppen långsamt åt båda sidor.",
      "steps": [
        "Korsa armarna löst framför bröstet.",
        "Vrid överkroppen försiktigt åt höger så långt det känns bekvämt.",
        "Återgå till mitten och upprepa åt vänster."
      ],
      "tip": "Höfter och knän fortsätter att peka framåt.",
      "durationSeconds": 12,
      "youtubeId": "_71vJV2fZng",
      "start": 0,
      "end": 12,
      "creator": "E3 Rehab Exercise Library"
    },
    {
      "id": "v9",
      "title": "Bäckentippning i sittande",
      "category": "romp",
      "categoryName": "Bål och hållning",
      "duration": "0:12",
      "target": "Bäcken och nedre rygg",
      "badgeColor": "#d97706",
      "description": "Tippa bäckenet med en liten, mjuk rörelse.",
      "steps": [
        "Sitt upprätt med händerna på höfterna eller låren.",
        "Tippa bäckenet lätt framåt.",
        "Tippa det sedan försiktigt bakåt."
      ],
      "tip": "Håll rörelsen bekväm och undvik att tvinga kroppen.",
      "durationSeconds": 12,
      "youtubeId": "ep5OpYmyCps",
      "start": 0,
      "end": 12,
      "creator": "E3 Rehab Exercise Library"
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
      "youtubeId": "qBi3bRc4Adw",
      "start": 4,
      "end": 34,
      "creator": "Rehab My Patient"
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
      "tip": "Ett finger mot hakan kan fungera som en lätt vägledning. Tryck inte huvudet bakåt.",
      "durationSeconds": 20,
      "youtubeId": "IEF6zU9tBpQ",
      "start": 0,
      "end": 20,
      "creator": "Whole Health Partners"
    },
    {
      "id": "v12",
      "title": "Mjuk sidoböjning av nacken",
      "category": "nek",
      "categoryName": "Nacke och rörlighet",
      "duration": "0:27",
      "target": "Nacke",
      "badgeColor": "#6366f1",
      "description": "Luta huvudet försiktigt åt sidan utan att lyfta axeln.",
      "steps": [
        "Sitt upprätt med avslappnade axlar.",
        "Luta ena örat mot axeln, bara så långt det känns bekvämt.",
        "Återgå till mitten och byt sida."
      ],
      "tip": "Håll axlarna sänkta och dra inte i huvudet med handen.",
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
    "homeText": "12 korta övningar med riktiga människor, utan ljud",
    "heading": "Se rörelsen och prova i din egen takt",
    "intro": "12 korta filmer med riktiga människor. Se rörelsen, läs stegen och prova i din egen takt. Uppspelning utan ljud.",
    "demo": "Demonstration",
    "of": "av",
    "sound": "Utan ljud",
    "speed": "Uppspelningshastighet",
    "replay": "Börja om",
    "practice": "Steg för steg",
    "choose": "Välj en övning",
    "tip": "Praktiskt tips",
    "loadError": "Filmen kunde inte laddas. Uppdatera sidan eller försök igen om en stund.",
    "playHint": "Tryck på uppspelningsknappen för att börja.",
    "categories": [
      "Ben och höfter",
      "Överkropp",
      "Bål och hållning",
      "Nacke och rörlighet"
    ],
    "eyebrow": "RÖRELSE STEG FÖR STEG",
    "shortLessons": "övningar · 12–30 sekunder",
    "noSound": "Utan ljud",
    "closeUp": "Riktiga människor",
    "lesson": "Övning",
    "seconds": "sek.",
    "excerpt": "Videoklipp",
    "play": "Spela upp",
    "pause": "Paus",
    "watch": "Se rörelsen",
    "loading": "Filmen laddas …",
    "ready": "Se rörelsen först. Upprepa klippet när du behöver.",
    "playing": "Titta på hållningen och den lugna rörelsen.",
    "paused": "Pausad. Läs stegen i lugn och ro.",
    "finished": "Klippet är slut. Upprepa rörelsen eller välj nästa övning.",
    "next": "Nästa övning",
    "first": "Till första övningen",
    "progress": "Klippets förlopp",
    "source": "Videodemonstration",
    "original": "Se originalfilmen",
    "error": "Filmen är inte tillgänglig just nu. Försök igen eller öppna originalfilmen.",
    "note": "Använd en stadig stol utan hjul. Rör dig långsamt inom ett bekvämt rörelseomfång och avbryt vid smärta."
  }
};
