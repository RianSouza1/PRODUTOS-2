/* Teckningskollektionen — svenskt medlemsområde. */
const APP_DATA = {
  "config": {
    "brandName": "Teckningskollektionen för nybörjare",
    "contactEmail": "trinityag01@gmail.com",
    "emailSubject": "Hjälp med tillgång till Teckningskollektionen för nybörjare",
    "emailBodyTemplate": "Hej! Jag behöver hjälp med tillgången till medlemsområdet för Teckningskollektionen för nybörjare.\n\nMitt namn: ",
    "showFloatingHelp": false
  },
  "videos": [
    {
      "id": "v1",
      "title": "Skissa och kontrollera pennan",
      "duration": "Grundläggande teknik",
      "category": "Grunderna",
      "obs": "Håll pennan avslappnat och börja med lätta linjer innan du förtydligar de slutliga konturerna.",
      "videoUrl": "https://assets.mixkit.co/active_storage/video_items/100488/1724285900/100488-video-720.mp4"
    },
    {
      "id": "v2",
      "title": "Hjälplinjer och perspektiv",
      "duration": "Hjälplinjer",
      "category": "Perspektiv och linjer",
      "obs": "Använd enkla konstruktionslinjer för att behålla proportionerna genom hela teckningen.",
      "videoUrl": "https://assets.mixkit.co/videos/5254/5254-720.mp4"
    },
    {
      "id": "v3",
      "title": "Mjuka linjer och penntryck",
      "duration": "Linjekontroll",
      "category": "Kontroll över linjen",
      "obs": "Låt hela underarmen följa med för att rita mjuka, sammanhängande kurvor.",
      "videoUrl": "https://assets.mixkit.co/videos/36721/36721-720.mp4"
    },
    {
      "id": "v4",
      "title": "Porträtt och ansiktets proportioner",
      "duration": "Porträtteckning",
      "category": "Porträtt och anatomi",
      "obs": "Börja med huvudets grundform och markera sedan ögonens, näsans och munnens placering med hjälplinjer.",
      "videoUrl": "https://assets.mixkit.co/videos/30232/30232-720.mp4"
    },
    {
      "id": "v5",
      "title": "Skraffering samt ljus och skugga",
      "duration": "Ljus och skugga",
      "category": "Skuggläggning",
      "obs": "Bygg upp tunna lager av korsskraffering för att skapa djup och volym i teckningen.",
      "videoUrl": "https://assets.mixkit.co/active_storage/video_items/100485/1724285772/100485-video-720.mp4"
    },
    {
      "id": "v6",
      "title": "Hår och fina strukturer",
      "duration": "Teckna struktur",
      "category": "Detaljer och struktur",
      "obs": "Börja med hårets stora former och volym. Lägg till enskilda ljusa partier först därefter.",
      "videoUrl": "https://assets.mixkit.co/videos/40306/40306-720.mp4"
    },
    {
      "id": "v7",
      "title": "Skissboken och att teckna efter verkligheten",
      "duration": "Daglig övning",
      "category": "Kreativitet och övning",
      "obs": "Öva regelbundet i en skissbok för att utveckla din iakttagelseförmåga och bli säkrare med pennan.",
      "videoUrl": "https://assets.mixkit.co/videos/29983/29983-720.mp4"
    },
    {
      "id": "v8",
      "title": "Anatomi och tunna linjer",
      "duration": "Noggrann teckning",
      "category": "Anatomi och precision",
      "obs": "Håll pennan vässad när du arbetar med små detaljer och mer komplexa former.",
      "videoUrl": "https://assets.mixkit.co/videos/9339/9339-720.mp4"
    }
  ],
  "books": [
    {
      "id": "b1",
      "title": "Teckna från grunden — bok 1 av 3",
      "description": "Linjer, former, proportioner, perspektiv och skuggläggning. En komplett teckningskurs för vuxna där du tränar iakttagelseförmåga, pennkontroll och att bygga former med djup.",
      "badgeText": "Grundbok • 70 sidor",
      "badgeColor": "#7C3AED",
      "features": [
        "Kontroll över pennan, linjerna och proportionerna",
        "Bygg enkla former och volymer i perspektiv",
        "Skuggläggning och mjuka övergångar mellan valörer"
      ],
      "buttonText": "Ladda ner grundboken (PDF)",
      "downloadUrl": "materials/DRAW-1-SV.pdf",
      "coverImage": "assets/covers/draw_IMG1_sv.png"
    },
    {
      "id": "b2",
      "title": "Den kompletta guiden till teckningens motiv — bok 2 av 3",
      "description": "Ansikten, figurer, djur, natur och föremål. Lär dig att dela upp det du ser i enkla former och återge motivets viktigaste kännetecken.",
      "badgeText": "Motivguide • 70 sidor",
      "badgeColor": "#475569",
      "features": [
        "Ansiktsuttryck och huvudets proportioner",
        "Förenklad anatomi och djurens poser",
        "Natur, tyg och föremål från vardagen"
      ],
      "buttonText": "Ladda ner motivguiden (PDF)",
      "downloadUrl": "materials/DRAW-2-SV.pdf",
      "coverImage": "assets/covers/draw_IMG1_sv.png"
    },
    {
      "id": "b3",
      "title": "Från skiss till färdig teckning — bok 3 av 3",
      "description": "Komposition, ljus och skugga, struktur samt handledda projekt. Gå från den första skissen till en färdig teckning med genomtänkta val av kontrast och detaljer.",
      "badgeText": "Projektguide • 70 sidor",
      "badgeColor": "#0F766E",
      "features": [
        "Komposition och tydliga blickfång",
        "Ljus, valörer och kontrast",
        "Handledda projekt: stilleben, växter och landskap"
      ],
      "buttonText": "Ladda ner projektguiden (PDF)",
      "downloadUrl": "materials/DRAW-3-SV.pdf",
      "coverImage": "assets/covers/draw_IMG1_sv.png"
    },
    {
      "id": "b4",
      "title": "Övningshäfte 01: Lär dig teckna från grunden",
      "description": "17 stegvisa övningar som utvecklar din linjekontroll, iakttagelseförmåga och förmåga att teckna ett enkelt stilleben.",
      "badgeText": "17 övningar • 18 sidor",
      "badgeColor": "#7C3AED",
      "buttonText": "Ladda ner övningshäfte 01",
      "downloadUrl": "materials/01_Lar_dig_teckna_fran_grunden_SV.pdf",
      "coverImage": "assets/covers/draw_IMG1_sv.png"
    },
    {
      "id": "b5",
      "title": "Övningshäfte 02: Den grundläggande guiden till teckningsmotiv",
      "description": "17 övningar med ansikten, kroppar, djur, natur och vardagsföremål. Bygg upp motiven med enkla former och egna visuella hjälplinjer.",
      "badgeText": "17 övningar • 18 sidor",
      "badgeColor": "#2563EB",
      "buttonText": "Ladda ner övningshäfte 02",
      "downloadUrl": "materials/02_Motiv_att_teckna_SV.pdf",
      "coverImage": "assets/covers/draw_IMG1_sv.png"
    },
    {
      "id": "b6",
      "title": "Övningshäfte 03: Från skiss till färdig teckning",
      "description": "Tre handledda projekt: ett stilleben, en växtstudie och ett landskap, med övningar i komposition, skuggläggning och struktur.",
      "badgeText": "3 projekt • 18 sidor",
      "badgeColor": "#059669",
      "buttonText": "Ladda ner övningshäfte 03",
      "downloadUrl": "materials/03_Fran_skiss_till_fardig_teckning_SV.pdf",
      "coverImage": "assets/covers/draw_IMG1_sv.png"
    }
  ],
  "otherProducts": []
};
