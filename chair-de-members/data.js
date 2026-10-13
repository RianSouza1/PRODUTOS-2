/* Chair exercises — localized silent demonstrations. */
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
      "duration": "0:30",
      "target": "Oberschenkel und Hüften",
      "badgeColor": "#0284c7",
      "description": "Eine einfache Bewegung zum kontrollierten Anheben der Knie im Sitzen.",
      "steps": [
        "Sitzen Sie aufrecht mit den Füßen flach auf dem Boden.",
        "Heben Sie ein Knie langsam bis zu einer angenehmen Höhe an.",
        "Senken Sie das Bein kontrolliert ab und wechseln Sie die Seite."
      ],
      "tip": "Bleiben Sie aufrecht und vermeiden Sie ruckartige Bewegungen.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/01-knee-lifts.mp4",
      "poster": "assets/videos/01-knee-lifts.jpg"
    },
    {
      "id": "v2",
      "title": "Fersenheben und Fußbewegungen",
      "category": "benen",
      "categoryName": "Beine und Hüften",
      "duration": "0:25",
      "target": "Waden und Sprunggelenke",
      "badgeColor": "#0284c7",
      "description": "Bewegen Sie Füße und Sprunggelenke in einer ruhigen Sitzposition.",
      "steps": [
        "Stellen Sie beide Füße unter die Knie.",
        "Heben Sie die Fersen an und lassen Sie die Zehen auf dem Boden.",
        "Senken Sie die Fersen und heben Sie anschließend die Zehen an."
      ],
      "tip": "Führen Sie die Bewegung langsam und ohne starken Druck aus.",
      "durationSeconds": 25,
      "videoUrl": "assets/videos/02-heel-toe-lifts.mp4",
      "poster": "assets/videos/02-heel-toe-lifts.jpg"
    },
    {
      "id": "v3",
      "title": "Seitliches Öffnen der Beine",
      "category": "benen",
      "categoryName": "Beine und Hüften",
      "duration": "0:30",
      "target": "Hüften und Oberschenkel",
      "badgeColor": "#0284c7",
      "description": "Bewegen Sie ein Bein zur Seite, während der Oberkörper ruhig bleibt.",
      "steps": [
        "Sitzen Sie aufrecht und legen Sie die Hände auf die Oberschenkel.",
        "Bewegen Sie einen Fuß langsam seitlich nach außen.",
        "Führen Sie den Fuß zurück zur Mitte und wechseln Sie die Seite."
      ],
      "tip": "Halten Sie den Oberkörper und das andere Bein stabil.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/03-side-taps.mp4",
      "poster": "assets/videos/03-side-taps.jpg"
    },
    {
      "id": "v4",
      "title": "Armbeugen im Sitzen",
      "category": "bovenlichaam",
      "categoryName": "Oberkörper",
      "duration": "0:30",
      "target": "Oberarme und Unterarme",
      "badgeColor": "#0d9488",
      "description": "Beugen und strecken Sie die Ellenbogen mit kontrollierten Bewegungen.",
      "steps": [
        "Lassen Sie die Arme seitlich hängen, die Handflächen zeigen nach vorne.",
        "Beugen Sie die Ellenbogen und führen Sie die Hände Richtung Schultern.",
        "Senken Sie die Unterarme langsam wieder ab."
      ],
      "tip": "Halten Sie die Ellenbogen nah am Körper.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/04-arm-curls.mp4",
      "poster": "assets/videos/04-arm-curls.jpg"
    },
    {
      "id": "v5",
      "title": "Schulterkreisen",
      "category": "bovenlichaam",
      "categoryName": "Oberkörper",
      "duration": "0:25",
      "target": "Schultern und oberer Rücken",
      "badgeColor": "#0d9488",
      "description": "Bewegen Sie die Schultern mit kleinen, ruhigen Kreisen.",
      "steps": [
        "Sitzen Sie entspannt und lassen Sie die Arme locker hängen.",
        "Heben Sie die Schultern leicht an, rollen Sie sie nach hinten und senken Sie sie.",
        "Wiederholen Sie einige Kreise und wechseln Sie dann die Richtung."
      ],
      "tip": "Atmen Sie ruhig und halten Sie den Bewegungsumfang angenehm.",
      "durationSeconds": 25,
      "videoUrl": "assets/videos/05-shoulder-rolls.mp4",
      "poster": "assets/videos/05-shoulder-rolls.jpg"
    },
    {
      "id": "v6",
      "title": "Brust öffnen und oberen Rücken bewegen",
      "category": "bovenlichaam",
      "categoryName": "Oberkörper",
      "duration": "0:35",
      "target": "Brust und oberer Rücken",
      "badgeColor": "#0d9488",
      "description": "Öffnen Sie die Arme in einem angenehmen Bewegungsbereich.",
      "steps": [
        "Sitzen Sie aufrecht und legen Sie die Hände auf die Hüften.",
        "Führen Sie die Ellenbogen sanft nach hinten und öffnen Sie den Brustkorb leicht.",
        "Halten Sie kurz inne und kehren Sie zur Ausgangsposition zurück."
      ],
      "tip": "Halten Sie den Blick nach vorne und überstrecken Sie den Nacken nicht.",
      "durationSeconds": 35,
      "videoUrl": "assets/videos/06-chest-opening.mp4",
      "poster": "assets/videos/06-chest-opening.jpg"
    },
    {
      "id": "v7",
      "title": "Handgelenke und Finger bewegen",
      "category": "bovenlichaam",
      "categoryName": "Oberkörper",
      "duration": "0:20",
      "target": "Handgelenke und Hände",
      "badgeColor": "#0d9488",
      "description": "Kombinieren Sie kleine Handgelenkskreise mit dem Öffnen der Hände.",
      "steps": [
        "Halten Sie die Arme locker vor dem Körper.",
        "Kreisen Sie langsam mit den Handgelenken in beide Richtungen.",
        "Schließen Sie die Hände locker und öffnen Sie anschließend die Finger."
      ],
      "tip": "Bewegen Sie die Hände ohne übermäßigen Druck.",
      "durationSeconds": 20,
      "videoUrl": "assets/videos/07-wrists-fingers.mp4",
      "poster": "assets/videos/07-wrists-fingers.jpg"
    },
    {
      "id": "v8",
      "title": "Rumpfdrehung im Sitzen",
      "category": "romp",
      "categoryName": "Rumpf und Haltung",
      "duration": "0:30",
      "target": "Rumpf und Wirbelsäule",
      "badgeColor": "#d97706",
      "description": "Drehen Sie den Oberkörper langsam zu beiden Seiten.",
      "steps": [
        "Kreuzen Sie die Arme locker vor der Brust.",
        "Drehen Sie den Oberkörper vorsichtig nach rechts, soweit es angenehm ist.",
        "Kehren Sie zur Mitte zurück und wiederholen Sie die Bewegung nach links."
      ],
      "tip": "Hüften und Knie bleiben nach vorne ausgerichtet.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/08-trunk-rotation.mp4",
      "poster": "assets/videos/08-trunk-rotation.jpg"
    },
    {
      "id": "v9",
      "title": "Beckenkippen im Sitzen",
      "category": "romp",
      "categoryName": "Rumpf und Haltung",
      "duration": "0:30",
      "target": "Becken und unterer Rücken",
      "badgeColor": "#d97706",
      "description": "Kippen Sie das Becken mit einer kleinen, sanften Bewegung.",
      "steps": [
        "Sitzen Sie aufrecht und legen Sie die Hände auf die Hüften oder Oberschenkel.",
        "Kippen Sie das Becken leicht nach vorne.",
        "Kippen Sie es anschließend behutsam nach hinten."
      ],
      "tip": "Bleiben Sie in einem angenehmen Bewegungsbereich und erzwingen Sie nichts.",
      "durationSeconds": 30,
      "videoUrl": "assets/videos/09-pelvic-tilts.mp4",
      "poster": "assets/videos/09-pelvic-tilts.jpg"
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
      "videoUrl": "assets/videos/10-side-bends.mp4",
      "poster": "assets/videos/10-side-bends.jpg"
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
      "tip": "Halten Sie den Blick auf gleicher Höhe.",
      "durationSeconds": 20,
      "videoUrl": "assets/videos/11-chin-retraction.mp4",
      "poster": "assets/videos/11-chin-retraction.jpg"
    },
    {
      "id": "v12",
      "title": "Sanfte seitliche Nackenbewegung",
      "category": "nek",
      "categoryName": "Nacken und Beweglichkeit",
      "duration": "0:25",
      "target": "Nacken",
      "badgeColor": "#6366f1",
      "description": "Neigen Sie den Kopf sanft zur Seite, ohne die Schulter anzuheben.",
      "steps": [
        "Sitzen Sie aufrecht mit entspannten Schultern.",
        "Neigen Sie ein Ohr vorsichtig zur Schulter, nur soweit es angenehm ist.",
        "Kehren Sie zur Mitte zurück und wechseln Sie die Seite."
      ],
      "tip": "Halten Sie die Schultern unten und ziehen Sie nicht mit der Hand am Kopf.",
      "durationSeconds": 25,
      "videoUrl": "assets/videos/12-neck-side-bends.mp4",
      "poster": "assets/videos/12-neck-side-bends.jpg"
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
    "homeText": "12 kurze Übungen ohne Ton, jeweils 20–35 Sekunden",
    "heading": "Bewegung ansehen und in Ruhe ausprobieren",
    "intro": "12 kurze animierte Demonstrationen von 20–35 Sekunden. Die Videos haben keine Tonspur, keine Sprache und keine Musik. Folgen Sie den Bewegungen und der schriftlichen Anleitung.",
    "demo": "Demonstration",
    "of": "von",
    "sound": "Ohne Ton",
    "unsupported": "Ihr Browser unterstützt dieses Video nicht.",
    "open": "Demonstration öffnen",
    "speed": "Wiedergabegeschwindigkeit",
    "replay": "Neu starten",
    "practice": "Schritt für Schritt",
    "choose": "Wählen Sie eine Übung",
    "tip": "Praktischer Hinweis",
    "creditsLabel": "Originalanimationen",
    "creditsAdapted": "für diesen Mitgliederbereich erstellt",
    "loadError": "Das Video konnte nicht geladen werden. Laden Sie die Seite neu oder versuchen Sie es gleich noch einmal.",
    "playHint": "Drücken Sie die Wiedergabetaste, um zu beginnen.",
    "categories": [
      "Beine und Hüften",
      "Oberkörper",
      "Rumpf und Haltung",
      "Nacken und Beweglichkeit"
    ],
    "overlay": "STUHLÜBUNGEN",
    "overlayTip": "Ruhige, kontrollierte Bewegungen"
  }
};
