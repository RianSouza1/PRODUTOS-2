/* La colección completa de piano — Español. */
const APP_DATA = {
  "config": {
    "brandName": "La colección completa de piano",
    "contactEmail": "trinityag01@gmail.com",
    "emailSubject": "Ayuda con el acceso a La colección completa de piano",
    "emailBodyTemplate": "¡Hola! Necesito ayuda con el acceso a la zona de miembros de La colección completa de piano.\n\nMi nombre: ______\nMi consulta: ______"
  },
  "books": [
    {
      "id": "b1",
      "title": "Piano para principiantes absolutos — Libro 1 de 3",
      "description": "Teclas, acordes y tus primeras piezas. Conoce el teclado, aprende a leer las notas y construye las bases de la teoría musical paso a paso.",
      "badgeText": "Guía para principiantes",
      "badgeColor": "#1b2a38",
      "pages": 72,
      "features": [
        "Teclado, postura y posición de las manos",
        "Lectura musical, ritmo, escalas y acordes básicos",
        "Ejercicios progresivos para tocar tus primeras piezas"
      ],
      "downloadUrl": "materials/PIANO-1-ES.pdf",
      "coverImage": "assets/covers/piano_IMG1_es.png"
    },
    {
      "id": "b2",
      "title": "Piezas fáciles de piano — Libro 2 de 3",
      "description": "De tu primera melodía a tocar con confianza con ambas manos. Una colección de piezas de dificultad progresiva para desarrollar el ritmo, la coordinación y la expresividad.",
      "badgeText": "Piezas fáciles",
      "badgeColor": "#4a5568",
      "pages": 74,
      "features": [
        "Melodías tradicionales y piezas de dominio público",
        "Coordinación de las manos y acompañamiento con acordes",
        "Dinámica y fraseo para dar expresión a la música"
      ],
      "downloadUrl": "materials/PIANO-2-ES.pdf",
      "coverImage": "assets/covers/piano_IMG1_es.png"
    },
    {
      "id": "b3",
      "title": "Reto de piano de 30 días — Libro 3 de 3",
      "description": "Un programa diario estructurado para crear un hábito de práctica constante. Dedica 20 minutos al día a la lectura musical, el ritmo y la coordinación de las manos.",
      "badgeText": "Reto de 30 días",
      "badgeColor": "#6b1d2f",
      "pages": 72,
      "features": [
        "30 días de práctica organizados en cuatro fases",
        "Ejercicios con metrónomo, acordes y lectura musical",
        "Diario de práctica para seguir tus progresos"
      ],
      "downloadUrl": "materials/PIANO-3-ES.pdf",
      "coverImage": "assets/covers/piano_IMG1_es.png"
    }
  ],
  "videos": [
    {
      "id": "v1",
      "youtubeId": "iH2_9nwTQMw",
      "start": 0,
      "end": 12,
      "creator": "Piano tips",
      "title": "Escala de Do mayor: mano derecha",
      "categoryName": "Primeros pasos",
      "description": "Observa desde arriba cómo la mano derecha recorre una octava de Do mayor.",
      "steps": [
        "Localiza Do en el teclado y prepara la mano derecha.",
        "Sube con los dedos 1, 2, 3, 1, 2, 3, 4 y 5.",
        "Vuelve con calma y repite a una velocidad cómoda."
      ],
      "tip": "Mantén la mano relajada y deja que el pulgar pase suavemente por debajo."
    },
    {
      "id": "v2",
      "youtubeId": "FZNtmZ0sPv4",
      "start": 0,
      "end": 17,
      "creator": "eNovativePiano",
      "title": "Escala de Do mayor: ambas manos",
      "categoryName": "Coordinación",
      "description": "Una demostración de la escala de Do mayor con las dos manos a la vez, en una octava.",
      "steps": [
        "Practica primero la escala con cada mano por separado.",
        "Observa cómo se coordinan los cambios de dedo en ambas manos.",
        "Toca lentamente y busca que las dos manos suenen juntas."
      ],
      "tip": "Reduce la velocidad antes de intentar seguir el ritmo del vídeo."
    },
    {
      "id": "v3",
      "youtubeId": "oU5jRnpJqM4",
      "start": 0,
      "end": 20,
      "creator": "eNovativePiano",
      "title": "Escala de Do mayor: dos octavas",
      "categoryName": "Escalas",
      "description": "Sigue el movimiento de las manos al ampliar la escala de Do mayor a dos octavas.",
      "steps": [
        "Asegura primero una octava con una digitación cómoda.",
        "Observa el paso del pulgar y el desplazamiento lateral de las manos.",
        "Amplía el recorrido poco a poco, manteniendo un pulso regular."
      ],
      "tip": "No busques velocidad: escucha que las notas tengan una intensidad uniforme."
    },
    {
      "id": "v4",
      "youtubeId": "5BYm23BJf-w",
      "start": 0,
      "end": 24,
      "creator": "eNovativePiano",
      "title": "Arpegio en una octava",
      "categoryName": "Arpegios",
      "description": "Observa cómo las notas del acorde se tocan una tras otra y cómo se desplaza la mano por el teclado.",
      "steps": [
        "Fíjate en las notas que forman el arpegio.",
        "Imita el recorrido con una sola mano y sin tensar la muñeca.",
        "Practica la subida y la bajada antes de aumentar el ritmo."
      ],
      "tip": "Deja espacio entre los dedos sin forzar la apertura de la mano."
    },
    {
      "id": "v5",
      "youtubeId": "dAE_Fd-Q9hs",
      "start": 0,
      "end": 30,
      "creator": "eNovativePiano",
      "title": "Acordes e inversiones",
      "categoryName": "Acordes",
      "description": "Observa cómo cambia la posición de las manos al tocar distintas inversiones de un acorde.",
      "steps": [
        "Identifica las notas que forman cada posición.",
        "Mira qué dedo cambia al pasar de una inversión a otra.",
        "Practica una posición cada vez y enlázalas lentamente."
      ],
      "tip": "Levanta la mano lo justo para cambiar de posición y mantén la muñeca flexible."
    },
    {
      "id": "v6",
      "youtubeId": "PBJ4Q7dv_3c",
      "start": 0,
      "end": 12,
      "creator": "eNovativePiano",
      "title": "Arpegios con ambas manos",
      "categoryName": "Coordinación",
      "description": "Un ejemplo de arpegio con las dos manos recorriendo el teclado de forma coordinada.",
      "steps": [
        "Practica el recorrido con cada mano por separado.",
        "Observa cómo se desplazan las manos sin perder la forma del arpegio.",
        "Combina las manos despacio y escucha que las notas coincidan."
      ],
      "tip": "Usa la velocidad reducida para observar el movimiento antes de imitarlo."
    }
  ],
  "videoUI": {
    "eyebrow": "PIANO PASO A PASO",
    "heading": "Mira, escucha y practica",
    "intro": "Seis demostraciones breves con manos reales al piano. Observa la técnica desde arriba, escucha las notas y practica a tu ritmo, sin narración.",
    "shortLessons": "demostraciones · 12–30 segundos",
    "noSound": "Solo piano",
    "closeUp": "Manos reales",
    "lesson": "Demostración",
    "seconds": "s",
    "excerpt": "Fragmento",
    "play": "Reproducir",
    "pause": "Pausa",
    "watch": "Ver la técnica",
    "replay": "Repetir",
    "speed": "Velocidad",
    "loading": "Cargando el vídeo…",
    "ready": "Observa primero las manos. Puedes repetir el fragmento cuando quieras.",
    "playing": "Observa la posición de las manos y escucha las notas.",
    "paused": "En pausa. Consulta los pasos con calma.",
    "finished": "Fragmento terminado. Repítelo o elige la siguiente demostración.",
    "next": "Siguiente demostración",
    "first": "Volver al principio",
    "progress": "Progreso del fragmento",
    "practice": "Practica paso a paso",
    "tip": "Consejo práctico",
    "choose": "Elige una demostración",
    "source": "Demostración original",
    "original": "Ver el vídeo original",
    "error": "El vídeo no está disponible en este momento. Inténtalo de nuevo o abre el vídeo original.",
    "note": "Dedos: 1 = pulgar · 2 = índice · 3 = medio · 4 = anular · 5 = meñique. Practica despacio y mantén las manos relajadas."
  }
};
