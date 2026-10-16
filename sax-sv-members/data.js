/* Saxofonsamlingen — svenskt medlemsområde. */
const APP_DATA = {
  "config": {
    "brandName": "Den kompletta saxofonsamlingen",
    "collectionName": "Den kompletta saxofonsamlingen",
    "contactEmail": "trinityag01@gmail.com",
    "coverImage": "assets/covers/saxo_IMG1_sv.png",
    "booksRoute": "bocker",
    "supportRoute": "hjalp",
    "videosRoute": "filmer"
  },
  "labels": {
    "brand": "Den kompletta saxofonsamlingen",
    "member": "Medlemsområde",
    "booksRoute": "bocker",
    "supportRoute": "hjalp",
    "books": "Böcker",
    "support": "Hjälp",
    "welcome": "Välkommen till ditt medlemsområde!",
    "intro": "Din tillgång är bekräftad. Upptäck dina tre saxofonböcker och utveckla dina färdigheter steg för steg.",
    "enter": "Till dina material",
    "materials": "Dina saxofonböcker",
    "materialsIntro": "Börja med grunderna, utveckla din klang och skapa en regelbunden övningsrutin. Öppna böckerna direkt eller ladda ner dem som PDF.",
    "homeIntro": "Vad vill du börja med idag?",
    "booksSubtitle": "Tre böcker för att lära dig och öva",
    "supportSubtitle": "Hjälp med tillgång och nedladdning",
    "read": "Öppna boken",
    "download": "Ladda ner PDF",
    "format": "PDF • Nedladdningsbar bok",
    "rights": "Alla rättigheter förbehållna.",
    "supportTitle": "Medlemssupport",
    "supportIntro": "Behöver du hjälp med dina saxofonböcker?",
    "message": "Skicka ett meddelande",
    "supportBody": "Klicka på knappen för att skicka ett mejl. Du kan också kopiera adressen nedan och skriva till oss från ditt e-postprogram.",
    "emailButton": "Kontakta supporten",
    "subject": "Hjälp med saxofonsamlingen",
    "emailBody": "Hej! Jag behöver hjälp med min tillgång till saxofonsamlingen.\n\nMitt namn: ______\nMin fråga: ______",
    "empty": "Det finns inga böcker tillgängliga just nu.",
    "pdfLabel": "3 böcker i PDF-format",
    "practiceLabel": "Lär dig och öva",
    "bookLabel": "Bok",
    "pagesLabel": "sidor",
    "titles": [
      "Saxofon steg för steg",
      "Den stora guiden till saxofonens klang och stilar",
      "Progressionsmetod för saxofon"
    ],
    "descriptions": [
      "Lär dig att montera instrumentet säkert och öva embouchure, andning och grundläggande fingersättning. En väg för nybörjare, från de första tonerna till enkla melodier.",
      "Utveckla din tonkvalitet, intonation och artikulation. Arbeta med skalor, frasering, musikaliska stilar och improvisation för att ge musiken mer uttryck.",
      "En 30-dagarsplan för klang, fingerkoordination, rytm och självförtroende. Organisera din övning i sex faser med tydliga mål, aktivt lyssnande och gradvis progression."
    ],
    "features": [
      [
        "Montering av instrumentet och de första tonerna",
        "Embouchure, luftstöd och grundläggande fingersättning",
        "Rytm och enkla melodier"
      ],
      [
        "Tonkvalitet, intonation och artikulation",
        "Skalor, frasering och musikaliskt uttryck",
        "Spelstilar och praktisk improvisation"
      ],
      [
        "30 dagar med stegvisa övningar i sex faser",
        "Fingerkoordination, rytm och teknik",
        "Tydliga mål, aktivt lyssnande och uppföljning"
      ]
    ],
    "videos": "Videor",
    "videosSubtitle": "Korta demonstrationer med riktiga saxofonister"
  },
  "books": [
    {
      "id": "b1",
      "title": "Saxofon steg för steg",
      "description": "Lär dig att montera instrumentet säkert och öva embouchure, andning och grundläggande fingersättning. En väg för nybörjare, från de första tonerna till enkla melodier.",
      "badgeText": "Bok 1 • 70 sidor",
      "badgeColor": "#74602f",
      "features": [
        "Montering av instrumentet och de första tonerna",
        "Embouchure, luftstöd och grundläggande fingersättning",
        "Rytm och enkla melodier"
      ],
      "downloadUrl": "materials/SAXO-BOOK-1-SV.pdf",
      "coverImage": "assets/covers/saxo_IMG1_sv.png"
    },
    {
      "id": "b2",
      "title": "Den stora guiden till saxofonens klang och stilar",
      "description": "Utveckla din tonkvalitet, intonation och artikulation. Arbeta med skalor, frasering, musikaliska stilar och improvisation för att ge musiken mer uttryck.",
      "badgeText": "Bok 2 • 70 sidor",
      "badgeColor": "#3f7062",
      "features": [
        "Tonkvalitet, intonation och artikulation",
        "Skalor, frasering och musikaliskt uttryck",
        "Spelstilar och praktisk improvisation"
      ],
      "downloadUrl": "materials/SAXO-BOOK-2-SV.pdf",
      "coverImage": "assets/covers/saxo_IMG1_sv.png"
    },
    {
      "id": "b3",
      "title": "Progressionsmetod för saxofon",
      "description": "En 30-dagarsplan för klang, fingerkoordination, rytm och självförtroende. Organisera din övning i sex faser med tydliga mål, aktivt lyssnande och gradvis progression.",
      "badgeText": "Bok 3 • 71 sidor",
      "badgeColor": "#546b87",
      "features": [
        "30 dagar med stegvisa övningar i sex faser",
        "Fingerkoordination, rytm och teknik",
        "Tydliga mål, aktivt lyssnande och uppföljning"
      ],
      "downloadUrl": "materials/SAXO-BOOK-3-SV.pdf",
      "coverImage": "assets/covers/saxo_IMG1_sv.png"
    }
  ],
  "videoUI": {
    "eyebrow": "SE · LYSSNA · SPELA",
    "heading": "Saxofonteknik i korta videor",
    "intro": "Se hur riktiga saxofonister spelar, med närbilder av händerna och klaffarna. Lyssna på instrumentet utan tal, följ stegen och upprepa varje övning i din egen takt.",
    "shortLessons": "korta demonstrationer",
    "noSound": "Instrumentljud · utan tal",
    "closeUp": "Riktiga saxofonister",
    "lesson": "Demonstration",
    "seconds": "sek",
    "excerpt": "övning",
    "play": "Spela upp",
    "pause": "Pausa",
    "replay": "Se igen",
    "speed": "Uppspelningshastighet",
    "progress": "Demonstrationens förlopp",
    "ready": "Tryck på Spela upp. Titta först och prova sedan själv.",
    "loading": "Videon laddas…",
    "playing": "Titta på rörelsen och lyssna på tonen.",
    "paused": "Pausad. Fortsätt när du är redo.",
    "finished": "Bra! Prova själv och upprepa gärna övningen.",
    "error": "Videon kunde inte spelas upp. Kontrollera anslutningen och tryck på Spela upp för att försöka igen.",
    "watch": "Se demonstrationen",
    "practice": "Prova själv – steg för steg",
    "tip": "Att tänka på",
    "source": "Videokälla",
    "original": "Öppna källvideon",
    "choose": "Välj din nästa övning",
    "next": "Nästa övning",
    "first": "Börja från första övningen",
    "note": "Börja lugnt. Se övningen, spela efter och jämför klangen. Tonerna anges som skrivna saxofontoner; klingande tonhöjd beror på vilken saxofon du spelar.",
    "soundOn": "Ljud på",
    "soundOff": "Ljud av",
    "soundLabel": "Instrumentljud",
    "fullscreen": "Helskärm",
    "exitFullscreen": "Stäng helskärm"
  },
  "videos": [
    {
      "title": "C-dur: uppåt och nedåt",
      "categoryName": "Fingrar och skala",
      "youtubeId": "Kv7ChZmcjKA",
      "start": 175,
      "end": 189,
      "creator": "Alexander Mathias · Saxophone Masterclass",
      "description": "Följ fingrarna när C-durskalan spelas uppåt och nedåt. Samma grepp används på alt-, tenor-, baryton- och sopransaxofon.",
      "steps": [
        "Följ tonerna C–D–E–F–G–A–B–C och se hur fingrarna rör sig.",
        "Spela långsamt uppåt och tillbaka nedåt. Håll fingrarna nära klaffarna.",
        "Upprepa tills tonbytena känns lugna och jämna."
      ],
      "tip": "Sänk hastigheten till 0,75× för att följa greppen. B motsvarar H i vissa äldre notsystem.",
      "thumbnail": "https://i.ytimg.com/vi/Kv7ChZmcjKA/hq3.jpg"
    },
    {
      "title": "En jämn, lång ton",
      "categoryName": "Klang och luft",
      "youtubeId": "A6xNAGql8nM",
      "start": 95,
      "end": 111,
      "creator": "Dr. Noa Even · VandorenUSA",
      "description": "Se en närbild med munstycke och saxofonhals. Lyssna på hur en lång ton hålls stadig med jämn luft och en avslappnad ansats.",
      "steps": [
        "Sitt eller stå upprätt och låt remmen bära instrumentets vikt.",
        "Andas in lugnt och håll ut en bekväm ton med jämn luft.",
        "Lyssna efter en stabil klang och vila en stund innan du upprepar."
      ],
      "tip": "Du kan öva på hela saxofonen. Försök hålla tonen jämn utan att bita hårt i munstycket och avsluta innan luften tar slut.",
      "thumbnail": "https://i.ytimg.com/vi/A6xNAGql8nM/hqdefault.jpg"
    },
    {
      "title": "Starta tonen rent",
      "categoryName": "Tungans ansats",
      "youtubeId": "-ko5qsJAesY",
      "start": 346,
      "end": 353,
      "creator": "Jamie Anderson · Get Your Sax Together",
      "description": "En närbild med munstycke och saxofonhals visar hur en ton kan börja tydligt. Lyssna på början av varje ton.",
      "steps": [
        "Håll munstycket stadigt och förbered en lugn luftström.",
        "Låt tungan röra vid rörbladet lätt och släpp den för att starta tonen.",
        "Upprepa på en bekväm ton med kort vila mellan försöken."
      ],
      "tip": "Liten tungrörelse räcker. Du kan öva på hela saxofonen även om demonstrationen använder munstycke och hals.",
      "thumbnail": "https://i.ytimg.com/vi/-ko5qsJAesY/hq2.jpg"
    },
    {
      "title": "Legato: mjuka tonstarter",
      "categoryName": "Artikulation",
      "youtubeId": "-ko5qsJAesY",
      "start": 500,
      "end": 507,
      "creator": "Jamie Anderson · Get Your Sax Together",
      "description": "Hör hur flera toner får en mjuk, lätt markerad början inom samma luftström. Munstycke och saxofonhals gör ansatsen tydlig i bilden.",
      "steps": [
        "Börja med en jämn ton och behåll ett stadigt luftflöde.",
        "Rör vid rörbladet mycket kort med tungan för att markera nästa ton.",
        "Prova fyra lugna ansatser utan långa pauser mellan tonerna."
      ],
      "tip": "Lyssna efter mjuka övergångar. Undvik att trycka hårdare med käken för varje ton.",
      "thumbnail": "https://i.ytimg.com/vi/-ko5qsJAesY/hq2.jpg"
    },
    {
      "title": "Staccato: korta, tydliga toner",
      "categoryName": "Artikulation",
      "youtubeId": "-ko5qsJAesY",
      "start": 575,
      "end": 580,
      "creator": "Jamie Anderson · Get Your Sax Together",
      "description": "Jämför med legatoövningen: här avslutas varje ton snabbt och tydligt. Se den kompakta demonstrationen och härma rytmen.",
      "steps": [
        "Starta en bekväm ton med en lätt tungansats.",
        "För tungan tillbaka mot rörbladet för att avsluta tonen tydligt.",
        "Spela fyra korta toner med jämna mellanrum."
      ],
      "tip": "Håll kroppen avslappnad. Tonerna ska vara korta och kontrollerade, inte hårt pressade.",
      "thumbnail": "https://i.ytimg.com/vi/-ko5qsJAesY/hq2.jpg"
    },
    {
      "title": "Sätt ihop tekniken i en melodi",
      "categoryName": "Frasering",
      "youtubeId": "-ko5qsJAesY",
      "start": 837,
      "end": 859,
      "creator": "Jamie Anderson · Get Your Sax Together",
      "description": "Se och hör hur olika tonstarter och tonlängder används i en enkel melodi. Lägg märke till fingrarnas rörelse och frasernas form.",
      "steps": [
        "Lyssna en gång och följ melodins rytm utan att spela.",
        "Välj en kort fras. Spela först långsamt och lägg märke till långa och korta toner.",
        "Upprepa frasen med mjuka tonbyten och tydliga avslut."
      ],
      "tip": "Fokusera på en fras i taget. Målet är en jämn, tydlig melodi – hastigheten kan komma senare.",
      "thumbnail": "https://i.ytimg.com/vi/-ko5qsJAesY/hq2.jpg"
    },
    {
      "title": "D-dur: samordna båda händerna",
      "categoryName": "Fingrar och skala",
      "youtubeId": "F_qfE0OLwZw",
      "start": 215,
      "end": 235,
      "creator": "Alexander Mathias · Saxophone Masterclass",
      "description": "Följ närbilden av händerna när D-durskalan spelas. Greppbilden bredvid visar vilka klaffar som trycks ned för varje ton.",
      "steps": [
        "Titta på båda händerna och följ tonerna D–E–F♯–G–A–B–C♯–D.",
        "Öva tonbytena långsamt. Släpp och tryck ned fingrarna tillsammans och håll dem nära klaffarna.",
        "Spela skalan nedåt och uppåt med jämn luft. Pausa och upprepa de byten som känns svåra."
      ],
      "tip": "D-dur har F♯ och C♯. Använd 0,75× för att se hur fingrarna samordnas och lägg märke till oktavklaffens läge.",
      "thumbnail": "https://i.ytimg.com/vi/F_qfE0OLwZw/hq2.jpg"
    },
    {
      "title": "A-dur: säkra fingergrepp",
      "categoryName": "Fingrar och skala",
      "youtubeId": "WOZYG9Ibghg",
      "start": 178,
      "end": 195,
      "creator": "Alexander Mathias · Saxophone Masterclass",
      "description": "En närbild gör det lätt att följa fingrarnas rörelser i A-dur. Jämför händerna med greppbilden och lyssna på skalan uppåt och nedåt.",
      "steps": [
        "Följ tonerna A–B–C♯–D–E–F♯–G♯–A medan du ser på händerna.",
        "Öva övergången F♯–G♯–A långsamt. Se hur vänster lillfinger använder G♯-klaffen.",
        "Sätt ihop hela skalan och spela tillbaka nedåt med samma lugna tempo."
      ],
      "tip": "A-dur har tre korsförtecken: F♯, C♯ och G♯. Börja med två toner i taget innan du spelar hela skalan.",
      "thumbnail": "https://i.ytimg.com/vi/WOZYG9Ibghg/hq2.jpg"
    },
    {
      "title": "C-durpentatonik: fem toner i följd",
      "categoryName": "Pentatoniska grepp",
      "youtubeId": "QoqGUYBC_oM",
      "start": 119,
      "end": 124,
      "creator": "Alexander Mathias · Saxophone Masterclass",
      "description": "Se händerna i närbild samtidigt som saxofonisten spelar C-durpentatonik. Fem olika toner bildar en enkel grund för små melodier.",
      "steps": [
        "Följ fingrarna genom C–D–E–G–A–C. Här utelämnas F och B från C-durskalan.",
        "Pausa efter varje ton och prova samma grepp på din saxofon.",
        "Spela följden långsamt och jämnt. Upprepa klippet innan du ökar tempot."
      ],
      "tip": "Klippet är mycket kort. Välj 0,75× och använd Se igen för att lättare följa varje grepp.",
      "thumbnail": "https://i.ytimg.com/vi/QoqGUYBC_oM/hq2.jpg"
    },
    {
      "title": "A-mollpentatonik: jämna tonbyten",
      "categoryName": "Pentatoniska grepp",
      "youtubeId": "nZonyMH61io",
      "start": 109,
      "end": 115,
      "creator": "Alexander Mathias · Saxophone Masterclass",
      "description": "Följ båda händerna i en kort demonstration av A-mollpentatonik. Närbilden visar hur fingrarna växlar mellan skalans fem toner.",
      "steps": [
        "Se och lyssna på följden A–C–D–E–G–A.",
        "Öva övergången C–D långsamt och samordna händerna med vänster tumme på oktavklaffen.",
        "Spela hela följden med jämna tonlängder. Upprepa och håll fingrarna nära klaffarna."
      ],
      "tip": "A-mollpentatonik använder samma fem toner som C-durpentatonik, men börjar på A. Jämför de två klippen och lyssna på skillnaden.",
      "thumbnail": "https://i.ytimg.com/vi/nZonyMH61io/hq2.jpg"
    },
    {
      "title": "G-dur: följ fingrarna genom skalan",
      "categoryName": "Fingrar och skala",
      "youtubeId": "jORVSjwr0HE",
      "start": 178,
      "end": 199,
      "creator": "Alexander Mathias · Saxophone Masterclass",
      "description": "Följ händerna i närbild när G-durskalan spelas uppåt och nedåt. Greppbilden visar hur fingrarna och oktavklaffen samverkar.",
      "steps": [
        "Se och lyssna på tonerna G–A–B–C–D–E–F♯–G.",
        "Öva långsamt och håll fingrarna nära klaffarna. Samordna båda händerna när du går från C till D.",
        "Spela tillbaka nedåt med jämn luft och jämna tonlängder. Upprepa innan du ökar tempot."
      ],
      "tip": "G-dur har ett korsförtecken: F♯. Välj 0,75× för att följa varje grepp i lugnare tempo.",
      "thumbnail": "https://i.ytimg.com/vi/jORVSjwr0HE/hq2.jpg"
    },
    {
      "title": "C till D: byt oktav med kontroll",
      "categoryName": "Fingerkoordination",
      "youtubeId": "EU28xswTQaU",
      "start": 392,
      "end": 403,
      "creator": "Alexander Mathias · Saxophone Masterclass",
      "description": "En kort demonstration av övergången mellan C och D. Lägg märke till hur händerna byter grepp tillsammans för att få rena, jämna tonbyten.",
      "steps": [
        "Börja med C: tryck ned vänster långfingers klaff och håll oktavklaffen släppt.",
        "Gå till D: tryck ned pek-, lång- och ringfinger på båda händerna samtidigt som vänster tumme trycker på oktavklaffen.",
        "Gå tillbaka till C och släpp oktavklaffen i tid. Öva först greppbytet utan att blåsa och lägg sedan till en jämn luftström."
      ],
      "tip": "Håll vänster tumme nära oktavklaffen. Små rörelser gör det lättare att samordna tummen med de andra fingrarna.",
      "thumbnail": "https://i.ytimg.com/vi/EU28xswTQaU/hq2.jpg"
    }
  ]
};
