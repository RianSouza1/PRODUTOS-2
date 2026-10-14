/* Chair exercises — short real-person demonstrations. */
const APP_DATA = {
  "config": {
    "brandName": "Stuhlübungen für Senioren",
    "contactEmail": "trinityag01@gmail.com",
    "emailSubject": "Hilfe zum Zugang zu Stuhlübungen für Senioren",
    "emailBodyTemplate": "Guten Tag! Ich benötige Hilfe mit meinem Zugang zu Stuhlübungen für Senioren.\n\nMein Name: ",
    "showFloatingHelp": false
  },
  "videos": [
    {
      "id": "v1",
      "title": "Knieheben im Sitzen",
      "category": "benen",
      "categoryName": "Beine und Hüften",
      "duration": "0:14",
      "target": "Oberschenkel und Hüften",
      "badgeColor": "#0284c7",
      "description": "Eine einfache Bewegung zum kontrollierten Anheben der Knie im Sitzen.",
      "steps": [
        "Sitzen Sie aufrecht mit den Füßen flach auf dem Boden.",
        "Heben Sie ein Knie langsam bis zu einer angenehmen Höhe an.",
        "Senken Sie das Bein kontrolliert ab und wechseln Sie die Seite."
      ],
      "tip": "Bleiben Sie aufrecht und vermeiden Sie ruckartige Bewegungen.",
      "durationSeconds": 14,
      "youtubeId": "Q2fsp3p0Buc",
      "start": 0,
      "end": 14,
      "creator": "HEP2go Inc"
    },
    {
      "id": "v2",
      "title": "Fersenheben im Sitzen",
      "category": "benen",
      "categoryName": "Beine und Hüften",
      "duration": "0:25",
      "target": "Waden und Sprunggelenke",
      "badgeColor": "#0284c7",
      "description": "Heben und senken Sie die Fersen, während die Zehen auf dem Boden bleiben.",
      "steps": [
        "Sitzen Sie aufrecht mit beiden Füßen unter den Knien.",
        "Drücken Sie den Vorderfuß sanft in den Boden und heben Sie die Fersen an.",
        "Senken Sie die Fersen langsam wieder ab und wiederholen Sie die Bewegung."
      ],
      "tip": "Führen Sie die Bewegung langsam und ohne starken Druck aus.",
      "durationSeconds": 25,
      "youtubeId": "HYYi5jYGZ70",
      "start": 3,
      "end": 28,
      "creator": "OrthoIndy"
    },
    {
      "id": "v3",
      "title": "Seitliches Öffnen der Beine",
      "category": "benen",
      "categoryName": "Beine und Hüften",
      "duration": "0:20",
      "target": "Hüften und Oberschenkel",
      "badgeColor": "#0284c7",
      "description": "Bewegen Sie ein Bein zur Seite, während der Oberkörper ruhig bleibt.",
      "steps": [
        "Sitzen Sie aufrecht und legen Sie die Hände auf die Oberschenkel.",
        "Bewegen Sie einen Fuß langsam seitlich nach außen.",
        "Führen Sie den Fuß zurück zur Mitte und wechseln Sie die Seite."
      ],
      "tip": "Halten Sie den Oberkörper und das andere Bein stabil.",
      "durationSeconds": 20,
      "youtubeId": "oN9yENov8kE",
      "start": 0,
      "end": 20,
      "creator": "HEP2go Inc"
    },
    {
      "id": "v4",
      "title": "Armbeugen im Sitzen",
      "category": "bovenlichaam",
      "categoryName": "Oberkörper",
      "duration": "0:30",
      "target": "Oberarme und Unterarme",
      "badgeColor": "#0d9488",
      "description": "Sehen Sie, wie die Ellenbogen im Sitzen langsam gebeugt und wieder gestreckt werden.",
      "steps": [
        "Sitzen Sie aufrecht und halten Sie die Oberarme nah am Körper.",
        "Beugen Sie einen Ellenbogen und führen Sie die Hand Richtung Schulter.",
        "Senken Sie die Hand langsam ab und wiederholen Sie die Bewegung mit dem anderen Arm."
      ],
      "tip": "Das Video zeigt leichte Hanteln. Zum Kennenlernen können Sie die Bewegung ohne Zusatzgewicht üben.",
      "durationSeconds": 30,
      "youtubeId": "8I640AY2j-U",
      "start": 4,
      "end": 34,
      "creator": "Rehab My Patient"
    },
    {
      "id": "v5",
      "title": "Schulterkreisen",
      "category": "bovenlichaam",
      "categoryName": "Oberkörper",
      "duration": "0:30",
      "target": "Schultern und oberer Rücken",
      "badgeColor": "#0d9488",
      "description": "Bewegen Sie die Schultern mit kleinen, ruhigen Kreisen.",
      "steps": [
        "Sitzen Sie entspannt und lassen Sie die Arme locker hängen.",
        "Heben Sie die Schultern leicht an, rollen Sie sie nach hinten und senken Sie sie.",
        "Wiederholen Sie einige Kreise und wechseln Sie dann die Richtung."
      ],
      "tip": "Atmen Sie ruhig und halten Sie den Bewegungsumfang angenehm.",
      "durationSeconds": 30,
      "youtubeId": "XbzY45Z5DE8",
      "start": 10,
      "end": 40,
      "creator": "Vive Health"
    },
    {
      "id": "v6",
      "title": "Schulterblätter zusammenführen",
      "category": "bovenlichaam",
      "categoryName": "Oberkörper",
      "duration": "0:30",
      "target": "Schultern und oberer Rücken",
      "badgeColor": "#0d9488",
      "description": "Ziehen Sie die Arme leicht nach hinten und führen Sie die Schulterblätter zusammen.",
      "steps": [
        "Sitzen Sie aufrecht und lassen Sie die Arme seitlich locker hängen.",
        "Drehen Sie die Handflächen nach vorne und bewegen Sie die Arme leicht nach hinten und außen.",
        "Führen Sie die Schulterblätter sanft zusammen, lösen Sie die Spannung und wiederholen Sie."
      ],
      "tip": "Halten Sie die Schultern unten und vermeiden Sie ein starkes Hohlkreuz.",
      "durationSeconds": 30,
      "youtubeId": "pU5hXD_ll3A",
      "start": 4,
      "end": 34,
      "creator": "Rehab My Patient"
    },
    {
      "id": "v7",
      "title": "Handgelenke kreisen",
      "category": "bovenlichaam",
      "categoryName": "Oberkörper",
      "duration": "0:26",
      "target": "Handgelenke",
      "badgeColor": "#0d9488",
      "description": "Sehen Sie die kreisende Bewegung der Handgelenke aus der Nähe.",
      "steps": [
        "Halten Sie einen Arm entspannt vor dem Körper.",
        "Kreisen Sie langsam mit der Hand aus dem Handgelenk.",
        "Wechseln Sie die Richtung und wiederholen Sie mit der anderen Hand."
      ],
      "tip": "Bewegen Sie die Hände ohne übermäßigen Druck.",
      "durationSeconds": 26,
      "youtubeId": "wRSk1_C6yOM",
      "start": 0,
      "end": 26,
      "creator": "Rehab My Patient"
    },
    {
      "id": "v8",
      "title": "Rumpfdrehung im Sitzen",
      "category": "romp",
      "categoryName": "Rumpf und Haltung",
      "duration": "0:12",
      "target": "Rumpf und Wirbelsäule",
      "badgeColor": "#d97706",
      "description": "Drehen Sie den Oberkörper langsam zu beiden Seiten.",
      "steps": [
        "Kreuzen Sie die Arme locker vor der Brust.",
        "Drehen Sie den Oberkörper vorsichtig nach rechts, soweit es angenehm ist.",
        "Kehren Sie zur Mitte zurück und wiederholen Sie die Bewegung nach links."
      ],
      "tip": "Hüften und Knie bleiben nach vorne ausgerichtet.",
      "durationSeconds": 12,
      "youtubeId": "_71vJV2fZng",
      "start": 0,
      "end": 12,
      "creator": "E3 Rehab Exercise Library"
    },
    {
      "id": "v9",
      "title": "Beckenkippen im Sitzen",
      "category": "romp",
      "categoryName": "Rumpf und Haltung",
      "duration": "0:12",
      "target": "Becken und unterer Rücken",
      "badgeColor": "#d97706",
      "description": "Kippen Sie das Becken mit einer kleinen, sanften Bewegung.",
      "steps": [
        "Sitzen Sie aufrecht und legen Sie die Hände auf die Hüften oder Oberschenkel.",
        "Kippen Sie das Becken leicht nach vorne.",
        "Kippen Sie es anschließend behutsam nach hinten."
      ],
      "tip": "Bleiben Sie in einem angenehmen Bewegungsbereich und erzwingen Sie nichts.",
      "durationSeconds": 12,
      "youtubeId": "ep5OpYmyCps",
      "start": 0,
      "end": 12,
      "creator": "E3 Rehab Exercise Library"
    },
    {
      "id": "v10",
      "title": "Seitliche Rumpfneigung",
      "category": "romp",
      "categoryName": "Rumpf und Haltung",
      "duration": "0:30",
      "target": "Seitlicher Rumpf",
      "badgeColor": "#d97706",
      "description": "Neigen Sie den Oberkörper kontrolliert zu einer Seite.",
      "steps": [
        "Lassen Sie die Arme seitlich am Stuhl hängen.",
        "Führen Sie eine Hand langsam Richtung Boden und neigen Sie den Oberkörper zur Seite.",
        "Kehren Sie zur Mitte zurück und wechseln Sie die Seite."
      ],
      "tip": "Bleiben Sie mit beiden Seiten des Beckens auf dem Stuhl.",
      "durationSeconds": 30,
      "youtubeId": "qBi3bRc4Adw",
      "start": 4,
      "end": 34,
      "creator": "Rehab My Patient"
    },
    {
      "id": "v11",
      "title": "Kinn sanft zurückziehen",
      "category": "nek",
      "categoryName": "Nacken und Beweglichkeit",
      "duration": "0:20",
      "target": "Nacken und Haltung",
      "badgeColor": "#6366f1",
      "description": "Ziehen Sie das Kinn leicht nach hinten, ohne nach unten zu schauen.",
      "steps": [
        "Schauen Sie geradeaus und entspannen Sie Kiefer und Schultern.",
        "Ziehen Sie das Kinn sanft waagerecht nach hinten.",
        "Halten Sie kurz inne und kehren Sie in die Ausgangsposition zurück."
      ],
      "tip": "Ein Finger am Kinn kann als leichte Orientierung dienen. Drücken Sie den Kopf nicht nach hinten.",
      "durationSeconds": 20,
      "youtubeId": "IEF6zU9tBpQ",
      "start": 0,
      "end": 20,
      "creator": "Whole Health Partners"
    },
    {
      "id": "v12",
      "title": "Sanfte seitliche Nackenbewegung",
      "category": "nek",
      "categoryName": "Nacken und Beweglichkeit",
      "duration": "0:27",
      "target": "Nacken",
      "badgeColor": "#6366f1",
      "description": "Neigen Sie den Kopf sanft zur Seite, ohne die Schulter anzuheben.",
      "steps": [
        "Sitzen Sie aufrecht mit entspannten Schultern.",
        "Neigen Sie ein Ohr vorsichtig zur Schulter, nur soweit es angenehm ist.",
        "Kehren Sie zur Mitte zurück und wechseln Sie die Seite."
      ],
      "tip": "Halten Sie die Schultern unten und ziehen Sie nicht mit der Hand am Kopf.",
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
      "title": "Stuhlübungen für Senioren — Buch 1 von 3",
      "description": "Ein Leitfaden mit Übungen im Sitzen für Beine, Arme und Rumpf. Lernen Sie die Bewegungen Schritt für Schritt mit einem stabilen Stuhl als Ausgangspunkt.",
      "badgeText": "Kraft im Sitzen • 70 Seiten",
      "badgeColor": "#0284c7",
      "features": [
        "Übungen für Beine, Hüften und Gesäß",
        "Bewegungen für Arme, Schultern und Hände",
        "Schrittweise Anleitungen für die tägliche Übung"
      ],
      "downloadUrl": "materials/CHAIR-1-DE.pdf",
      "coverImage": "assets/covers/ch_IMG1_de.png",
      "buttonText": "PDF herunterladen"
    },
    {
      "id": "b2",
      "title": "Stuhlgymnastik und Mobilität für Senioren — Buch 2 von 3",
      "description": "Sanfte Bewegungen und Dehnübungen im Sitzen für Beweglichkeit und Haltung. Nutzen Sie die Anleitungen in Ihrem eigenen Tempo.",
      "badgeText": "Beweglichkeit • 70 Seiten",
      "badgeColor": "#0d9488",
      "features": [
        "Sanfte Dehnübungen im Sitzen",
        "Bewegungen für Nacken, Schultern, Rücken und Hüften",
        "Üben in einem angenehmen Bewegungsbereich"
      ],
      "downloadUrl": "materials/CHAIR-2-DE.pdf",
      "coverImage": "assets/covers/ch_IMG1_de.png",
      "buttonText": "PDF herunterladen"
    },
    {
      "id": "b3",
      "title": "Der 28-Tage-Stuhlfitnessplan — Buch 3 von 3",
      "description": "Ein strukturiertes Programm mit täglich etwa zehn Minuten Sitzübungen. Der Plan verbindet Kraft, Beweglichkeit und Koordination in aufeinander aufbauenden Einheiten.",
      "badgeText": "28-Tage-Plan • 70 Seiten",
      "badgeColor": "#d97706",
      "features": [
        "28 Tage mit kurzen täglichen Einheiten",
        "Drei anpassbare Schwierigkeitsstufen",
        "Eine übersichtliche Routine für Übungen im Sitzen"
      ],
      "downloadUrl": "materials/CHAIR-3-DE.pdf",
      "coverImage": "assets/covers/ch_IMG1_de.png",
      "buttonText": "PDF herunterladen"
    }
  ],
  "otherProducts": [],
  "videoUI": {
    "label": "Videos",
    "homeTitle": "Videodemonstrationen",
    "homeText": "12 kurze Übungen mit echten Personen, ohne Ton",
    "heading": "Bewegung ansehen und in Ruhe ausprobieren",
    "intro": "12 kurze Videos mit echten Personen. Sehen Sie sich die Bewegung an, lesen Sie die Schritte und probieren Sie sie in Ihrem eigenen Tempo. Wiedergabe ohne Ton.",
    "demo": "Demonstration",
    "of": "von",
    "sound": "Ohne Ton",
    "speed": "Wiedergabegeschwindigkeit",
    "replay": "Neu starten",
    "practice": "Schritt für Schritt",
    "choose": "Wählen Sie eine Übung",
    "tip": "Praktischer Hinweis",
    "loadError": "Das Video konnte nicht geladen werden. Laden Sie die Seite neu oder versuchen Sie es gleich noch einmal.",
    "playHint": "Drücken Sie die Wiedergabetaste, um zu beginnen.",
    "categories": [
      "Beine und Hüften",
      "Oberkörper",
      "Rumpf und Haltung",
      "Nacken und Beweglichkeit"
    ],
    "eyebrow": "BEWEGUNG SCHRITT FÜR SCHRITT",
    "shortLessons": "Übungen · 12–30 Sekunden",
    "noSound": "Ohne Ton",
    "closeUp": "Echte Personen",
    "lesson": "Übung",
    "seconds": "Sek.",
    "excerpt": "Videoausschnitt",
    "play": "Abspielen",
    "pause": "Pause",
    "watch": "Bewegung ansehen",
    "loading": "Das Video wird geladen …",
    "ready": "Sehen Sie zuerst die Bewegung an. Wiederholen Sie den Ausschnitt bei Bedarf.",
    "playing": "Achten Sie auf die Haltung und den langsamen Bewegungsablauf.",
    "paused": "Pausiert. Sie können in Ruhe die Schritte lesen.",
    "finished": "Ausschnitt beendet. Wiederholen Sie die Bewegung oder wählen Sie die nächste Übung.",
    "next": "Nächste Übung",
    "first": "Zur ersten Übung",
    "progress": "Fortschritt des Ausschnitts",
    "source": "Videodemonstration",
    "original": "Originalvideo ansehen",
    "error": "Das Video ist gerade nicht verfügbar. Versuchen Sie es erneut oder öffnen Sie das Originalvideo.",
    "note": "Nutzen Sie einen stabilen Stuhl ohne Rollen. Bewegen Sie sich langsam in einem angenehmen Bereich und hören Sie bei Schmerzen auf."
  }
};
