/* Svenskt medlemsområde: böcker och filmade handgrepp. */
const APP_DATA = {
  "config": {
    "brandName": "Torkning av mat",
    "collectionName": "Torkning av mat för nybörjare",
    "contactEmail": "trinityag01@gmail.com",
    "coverImage": "assets/covers/food_IMG1_sv.png",
    "booksRoute": "bocker",
    "supportRoute": "hjalp",
    "emailSubject": "Hjälp med tillgång till Torkning av mat",
    "emailBodyTemplate": "Hej! Jag behöver hjälp med min tillgång till medlemsområdet för Torkning av mat.\n\nMitt namn: \nMin fråga: ",
    "videosRoute": "filmer"
  },
  "labels": {
    "member": "Medlemsområde",
    "welcome": "Välkommen till ditt medlemsområde!",
    "homeIntro": "Läs dina böcker och öva med korta filmer. Börja med ett handgrepp i taget.",
    "books": "Böcker",
    "booksSubtitle": "Tre guider om torkning, matlagning och förvaring",
    "support": "Hjälp",
    "supportSubtitle": "Frågor om tillgång och nedladdning",
    "library": "Dina böcker om att torka mat",
    "libraryIntro": "Börja med grunderna i bok 1, laga mat med de torkade ingredienserna i bok 2 och planera ditt skafferi med bok 3. Öppna böckerna här eller ladda ner dem till din enhet.",
    "read": "Läs boken",
    "download": "Ladda ner PDF",
    "pages": "sidor",
    "rights": "Alla rättigheter förbehållna.",
    "loading": "Dina böcker laddas…",
    "empty": "Det finns inga böcker tillgängliga just nu.",
    "supportHeading": "Hjälp för medlemmar",
    "supportIntro": "Behöver du hjälp med att öppna böckerna eller ladda ner dina PDF-filer?",
    "supportTitle": "Skicka ett meddelande",
    "supportBody": "Klicka på knappen för att mejla din fråga. Du kan också kopiera adressen nedan och skriva från ditt vanliga e-postprogram.",
    "emailButton": "Kontakta supporten",
    "noScript": "Aktivera JavaScript för att använda medlemsområdet. Du kan också öppna dina PDF-filer direkt via länkarna nedan.",
    "videos": "Filmer",
    "videosSubtitle": "Fyra korta demonstrationer med tydliga steg"
  },
  "books": [
    {
      "id": "b1",
      "title": "Matdehydrering för nybörjare — bok 1 av 3",
      "description": "En introduktion till att torka frukt, grönsaker, örter och andra råvaror. Följ arbetsgången från förberedelse och val av utrustning till kontroll av torkningsgrad, förpackning och förvaring.",
      "badgeText": "Grunderna · Bok 1",
      "badgeColor": "#a45a23",
      "features": [
        "Förberedelser, skivning och användning av matdehydratorn",
        "Torkningsgrad och livsmedelssäkerhet för olika råvaror",
        "Avkylning, förpackning, märkning och förvaring"
      ],
      "pageCount": 70,
      "fileSizeLabel": "3,0 MB",
      "downloadUrl": "materials/FOOD-1-SV.pdf",
      "coverImage": "assets/covers/food_IMG1_sv.png"
    },
    {
      "id": "b2",
      "title": "Kokbok med torkade ingredienser — bok 2 av 3",
      "description": "120 recept som hjälper dig att använda dina torkade ingredienser i vardagen. Upptäck måltider, snacks, soppor, pulver och recept för skafferiet, med metoder för blötläggning och tillagning.",
      "badgeText": "120 recept · Bok 2",
      "badgeColor": "#476a3c",
      "features": [
        "120 recept i nio kategorier, från frukost till bakning",
        "Blötläggning och matlagning med torkade ingredienser",
        "Soppor, snacks, pulver och användning i vardagsmåltider"
      ],
      "pageCount": 68,
      "fileSizeLabel": "1,8 MB",
      "downloadUrl": "materials/FOOD-2-SV.pdf",
      "coverImage": "assets/covers/food_IMG1_sv.png"
    },
    {
      "id": "b3",
      "title": "Skafferiet med torkad mat — bok 3 av 3",
      "description": "Bygg ett användbart förråd utifrån vad ditt hushåll faktiskt lagar och äter. Planera portioner och förpackningar, märk innehållet och organisera påfyllning och rotation för att minska matsvinnet.",
      "badgeText": "Skafferi och planering · Bok 3",
      "badgeColor": "#69753b",
      "features": [
        "Planera förrådet kring riktiga måltider och matvanor",
        "Portionering, förpackning, märkning och ordning",
        "Rotation, kvalitetskontroll och genomtänkt påfyllning"
      ],
      "pageCount": 81,
      "fileSizeLabel": "5,0 MB",
      "downloadUrl": "materials/FOOD-3-SV.pdf",
      "coverImage": "assets/covers/food_IMG1_sv.png"
    }
  ],
  "videos": [
    {
      "id": "apple",
      "youtubeId": "fMywG1BnClU",
      "creator": "Cook Calm Enjoy",
      "sourceTitle": "How To Make Apple Chips Short",
      "title": "Äppelchips: från äpple till torkbricka",
      "category": "Frukt · Grunderna",
      "description": "Se hur äpplet tvättas, kärnas ur och skivas innan skivorna läggs på torkbrickan. Sist visas de färdiga chipsen.",
      "preparation": "Äpplen, skärbräda, urkärnare, kniv eller mandolin med fingerskydd och en matdehydrator.",
      "waiting": "Torkningen tar flera timmar och visas inte i realtid. Följ bok 1 och anvisningarna för din matdehydrator; kontrollera bitarna när de har svalnat.",
      "tip": "Skär jämntjocka skivor och lägg dem i ett lager utan överlappning. Använd alltid fingerskydd om du använder en mandolin.",
      "books": [
        "b1",
        "b3"
      ],
      "storage": "Låt chipsen svalna helt före förpackning. Läs bok 3 om portionsförpackning, märkning och hur du kontrollerar ditt förråd.",
      "steps": [
        {
          "start": 2,
          "end": 6,
          "title": "Tvätta äpplet",
          "instruction": "Tvätta ett friskt, oskadat äpple innan du börjar skära."
        },
        {
          "start": 6,
          "end": 10,
          "title": "Ta bort kärnhuset",
          "instruction": "Ställ äpplet stadigt och ta bort kärnhuset."
        },
        {
          "start": 10,
          "end": 15,
          "title": "Skiva jämnt",
          "instruction": "Gör tunna, jämntjocka skivor. Håll fingrarna skyddade."
        },
        {
          "start": 15,
          "end": 23,
          "title": "Fördela på brickan",
          "instruction": "Lägg skivorna i ett lager med utrymme för luften att cirkulera."
        },
        {
          "start": 23,
          "end": 27,
          "title": "Torka enligt anvisningarna",
          "instruction": "Sätt in brickorna. Följ bokens metod och din maskins anvisningar; väntetiden är bortklippt."
        },
        {
          "start": 27,
          "end": 38,
          "title": "Titta på resultatet",
          "instruction": "Här visas färdiga äppelchips. Låt dina egna chips svalna innan du bedömer torkningsgraden och packar dem."
        }
      ]
    },
    {
      "id": "tomato",
      "youtubeId": "RLlybEJjDYc",
      "creator": "NC State Extension",
      "sourceTitle": "Dehydrating Tomatoes",
      "title": "Förbered tomater för torkning",
      "category": "Grönsaker · Förberedelse",
      "description": "En kort övning i förberedelsen: blanchera, kyl, skär och fördela tomaterna. Filmen slutar vid torkbrickan.",
      "preparation": "Fasta, mogna tomater, kastrull, hålslev eller tång, isvatten, skärbräda, kniv och torkbrickor.",
      "waiting": "Detta är en demonstration av förberedelsen, inte en hel torkningscykel. Följ bok 1 och aktuella anvisningar för tid, temperatur och färdig torkningsgrad.",
      "tip": "Använd friska tomater. Skär bitarna jämnt och lämna mellanrum på brickan så att luften kan komma åt.",
      "books": [
        "b1",
        "b2"
      ],
      "storage": "Läs bok 2 om hur du använder de färdigtorkade tomaterna i matlagning.",
      "steps": [
        {
          "start": 49,
          "end": 58,
          "title": "Blanchera",
          "instruction": "Filmen visar tomater som doppas i hett vatten för att underlätta skalningen. Följ bokens metod och arbeta försiktigt vid kastrullen."
        },
        {
          "start": 58,
          "end": 65,
          "title": "Kyl i isvatten",
          "instruction": "Flytta tomaterna till isvatten med en hålslev eller tång."
        },
        {
          "start": 66,
          "end": 72,
          "title": "Skär jämna bitar",
          "instruction": "Skala vid behov och skär tomaterna i jämna bitar på en stadig skärbräda."
        },
        {
          "start": 72,
          "end": 75,
          "title": "Lägg på torkbrickan",
          "instruction": "Fördela bitarna i ett lager. Nästa moment är torkningen enligt bok 1 och maskinens anvisningar."
        }
      ]
    },
    {
      "id": "fruit-roll",
      "youtubeId": "_bwgGveMDqA",
      "creator": "Crafts to Crumbs",
      "sourceTitle": "Mango Roll Ups - Fruit Leather (American Style) - No dehydrator",
      "title": "Fruktrullar: mixa, bred ut och rulla",
      "category": "Fruktsnacks · Handgrepp",
      "description": "Följ handgreppen i en ugnsdemonstration med mango: mixa, värm, bred ut, låt torka och svalna, skär och rulla. Använd bokens recept när du väljer mängder och metod.",
      "preparation": "Mango och ingredienser enligt ditt recept, mixer, kastrull, spatel, bakplåt med lämpligt bakunderlag och sax eller kniv.",
      "waiting": "Torkning och avsvalning tar betydligt längre tid än filmen. Originalet använder ugn. Följ ett recept avsett för din ugn eller matdehydrator; byt inte mellan metoder med samma inställningar.",
      "tip": "Ett jämnt, tunt lager torkar jämnare. Skär först när fruktarket har svalnat och går att lossa från underlaget.",
      "books": [
        "b1",
        "b2"
      ],
      "storage": "Öva på ett litet fruktark först. Läs bok 1 om fruktläder och bok 2 om fruktsnacks.",
      "steps": [
        {
          "start": 12,
          "end": 20,
          "title": "Mixa frukten",
          "instruction": "Mixa mangon till en slät puré utan stora bitar."
        },
        {
          "start": 24,
          "end": 40,
          "title": "Värm och rör",
          "instruction": "I den här metoden värms purén med receptets övriga ingredienser. Rör längs kastrullens botten."
        },
        {
          "start": 46,
          "end": 55,
          "title": "Bred ut jämnt",
          "instruction": "Häll på ett lämpligt bakunderlag och bred ut purén till ett tunt, jämnt lager."
        },
        {
          "start": 62,
          "end": 68,
          "title": "Efter torkningen",
          "instruction": "Filmen hoppar fram till det torkade fruktarket. Låt det svalna innan nästa steg."
        },
        {
          "start": 76,
          "end": 83,
          "title": "Skär remsor",
          "instruction": "Skär eller klipp det avsvalnade arket i remsor."
        },
        {
          "start": 86,
          "end": 94,
          "title": "Rulla ihop",
          "instruction": "Lossa remsan försiktigt och rulla ihop den, gärna med bakpapper mellan lagren."
        }
      ]
    },
    {
      "id": "herbs",
      "youtubeId": "oWge1065-og",
      "creator": "Wild Yeast and More",
      "sourceTitle": "2 Easy Ways to Dry Herb: Parsley",
      "title": "Smula torkad persilja till krydda",
      "category": "Örter · Använd dina råvaror",
      "description": "Öva på ett enkelt handgrepp med persilja som redan är helt torr. Repa av bladen, smula dem försiktigt och kontrollera strukturen.",
      "preparation": "Helt torkad och avsvalnad persilja samt en ren, torr livsmedelspåse eller skål.",
      "waiting": "Torkningen är redan klar när denna övning börjar. Använd endast helt torra blad som lätt smulas; mjuka eller fuktiga blad behöver torka vidare.",
      "tip": "Smula lite i taget. Spara gärna en del blad hela och smula dem först när de ska användas i maten.",
      "books": [
        "b1",
        "b2",
        "b3"
      ],
      "storage": "Lägg den torra, avsvalnade kryddan i en ren, torr och tätslutande behållare. Märk innehåll och datum och förvara mörkt och torrt.",
      "steps": [
        {
          "start": 99,
          "end": 110,
          "title": "Repa av de torra bladen",
          "instruction": "Håll i stjälken och dra försiktigt loss de torra bladen i en ren, torr påse eller skål."
        },
        {
          "start": 110,
          "end": 121,
          "title": "Smula med händerna",
          "instruction": "Tryck och gnugga försiktigt så att bladen bryts till mindre flingor. Plocka bort grova stjälkar."
        },
        {
          "start": 121,
          "end": 128,
          "title": "Kontrollera flingorna",
          "instruction": "Titta på resultatet. Bladen ska smulas lätt och kännas torra innan du lägger dem i en märkt, tätslutande behållare."
        }
      ]
    }
  ]
};
