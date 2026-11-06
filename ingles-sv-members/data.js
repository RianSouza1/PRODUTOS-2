const APP_DATA = {
  config: {
    brandName: 'Praktisk engelska för vuxna',
    collectionName: 'Den kompletta praktiska engelskasamlingen',
    contactEmail: 'trinityag01@gmail.com',
    coverImage: 'assets/covers/ingles_IMG1_sv.png',
    booksRoute: 'material',
    supportRoute: 'hjalp'
  },
  labels: {
    books: 'Kursmaterial',
    support: 'Hjälp',
    welcome: 'Välkommen till ditt medlemsområde',
    homeIntro: 'Här hittar du tre böcker för att lära dig engelska och öva i din egen takt.',
    materials: 'Dina engelskböcker',
    materialsIntro: 'Börja med grunderna, öva på vardagliga samtal och bygg vidare med naturliga uttryck. Läs böckerna i webbläsaren eller ladda ner dem som PDF.',
    booksSubtitle: 'Tre böcker för din engelskakurs',
    supportSubtitle: 'Hjälp med åtkomst, läsning och nedladdning',
    read: 'Öppna boken',
    download: 'Ladda ner PDF',
    format: 'PDF · Kursbok',
    rights: 'Alla rättigheter förbehållna.',
    supportTitle: 'Hjälp med dina engelskböcker',
    supportIntro: 'Behöver du hjälp med att öppna eller ladda ner kursmaterialet?',
    message: 'Kontakta kundtjänst',
    supportBody: 'Berätta vilken bok din fråga gäller och vad du behöver hjälp med. Använd knappen nedan eller kopiera e-postadressen och skriv till oss.',
    emailButton: 'Skicka ett e-postmeddelande',
    subject: 'Hjälp med min engelskakurs',
    emailBody: 'Hej!\n\nJag behöver hjälp med mitt kursmaterial i engelska.\n\nMitt namn: \nMin fråga: ',
    empty: 'Det finns inga böcker tillgängliga just nu.'
  },
  books: [
    {
      id: 'b1',
      title: 'Engelska från grunden',
      description: 'En nybörjarguide för vuxna med grammatik, ordförråd och meningsbyggnad. Öva steg för steg från A0 till A1 och tidig A2.',
      features: [
        'Grammatik och grundläggande ordförråd',
        'Bygg meningar och ställ frågor',
        'Övningar, lästexter och facit'
      ],
      badgeText: 'Bok 1 · 70 sidor',
      badgeColor: '#2563eb',
      downloadUrl: 'materials/ENGLISH-1-SV.pdf'
    },
    {
      id: 'b2',
      title: 'Engelska samtal i vardagen',
      description: 'Öva engelska på resor, på jobbet och i butiker. Dialoger på A1–A2-nivå visar hur du inleder samtal, ställer frågor och ber om förtydliganden.',
      features: [
        'Dialoger för resor, arbete och inköp',
        'Frågor och svar i vardagliga situationer',
        'Fraser för att be någon upprepa eller förklara'
      ],
      badgeText: 'Bok 2 · 70 sidor',
      badgeColor: '#0f766e',
      downloadUrl: 'materials/ENGLISH-2-SV.pdf'
    },
    {
      id: 'b3',
      title: 'Vägen till flytande engelska',
      description: 'Bygg vidare med partikelverb, vanliga uttryck och flexibla meningsmönster. Öva på att uttrycka åsikter, knyta ihop idéer och föra samtalet vidare.',
      features: [
        'Partikelverb och återkommande ordkombinationer',
        'Naturliga reaktioner och sätt att uttrycka åsikter',
        'Sambandsord och meningsmönster för längre samtal'
      ],
      badgeText: 'Bok 3 · 70 sidor',
      badgeColor: '#7c3aed',
      downloadUrl: 'materials/ENGLISH-3-SV.pdf'
    }
  ]
};
