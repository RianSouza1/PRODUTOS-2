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
    "intro": "Se hur riktiga saxofonister spelar. Lyssna på instrumentet utan tal, följ stegen och upprepa varje övning i din egen takt.",
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
    "error": "Videon kunde inte spelas upp. Försök igen eller öppna källvideon nedan.",
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
    }
  ]
};
