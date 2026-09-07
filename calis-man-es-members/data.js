/**
 * Calistenia Militar para Hombres — Área de Miembros (Español)
 */

const APP_DATA = {
    config: {
        brandName: "Calistenia Militar para Hombres",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Solicitud de soporte – acceso (Calistenia Militar para Hombres)",
        emailBodyTemplate: "¡Hola equipo de soporte! Me gustaría solicitar ayuda con mi acceso al área de miembros de Calistenia Militar para Hombres.\n\nMi nombre es: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            "id": "v1",
            "title": "Flexiones tradicionales (Fuerza del tren superior)",
            "duration": "0:25 • Técnica básica",
            "category": "Tren superior & Pecho",
            "obs": "Demostración lateral con postura correcta y alineación de codos.",
            "videoUrl": "https://videos.pexels.com/video-files/6893306/6893306-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v2",
            "title": "Plancha lateral para Core y Estabilidad",
            "duration": "0:20 • Core & Estabilidad",
            "category": "Core & Abdomen",
            "obs": "Fortalece el cinturón abdominal y protege las articulaciones.",
            "videoUrl": "https://videos.pexels.com/video-files/6023266/6023266-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v3",
            "title": "Estabilización en cuatro apoyos (Bird-Dog)",
            "duration": "0:30 • Ejercicio lumbar seguro",
            "category": "Postura & Zona lumbar",
            "obs": "Excelente para descomprimir la zona lumbar y estabilidad profunda.",
            "videoUrl": "https://videos.pexels.com/video-files/9058239/9058239-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v4",
            "title": "Polichinelas / Jumping Jacks (Cardio militar)",
            "duration": "0:15 • Acondicionamiento & Quema",
            "category": "Calentamiento & Cardio",
            "obs": "Activación cardiovascular y quema calórica efectiva.",
            "videoUrl": "https://videos.pexels.com/video-files/7299359/7299359-uhd_2160_3840_30fps.mp4"
        },
        {
            "id": "v5",
            "title": "Círculos de cadera & Movilidad articular",
            "duration": "0:25 • Movilidad en caderas",
            "category": "Movilidad articular & Caderas",
            "obs": "Libera la articulación coxofemoral para mayor rango de movimiento.",
            "videoUrl": "https://videos.pexels.com/video-files/9058019/9058019-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v6",
            "title": "Estiramiento de isquiotibiales & Toque de pies",
            "duration": "0:20 • Flexibilidad & Recuperación",
            "category": "Estiramiento & Flexibilidad",
            "obs": "Estiramiento de la cadena posterior y prevención de molestias lumbares.",
            "videoUrl": "https://videos.pexels.com/video-files/6891847/6891847-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v7",
            "title": "Movilidad de hombros y apertura de pecho",
            "duration": "0:20 • Apertura de espalda alta",
            "category": "Movilidad del tren superior",
            "obs": "Abre la caja torácica y alivia la tensión acumulada en hombros.",
            "videoUrl": "https://videos.pexels.com/video-files/7319946/7319946-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v8",
            "title": "Suspensión en barra (Dead Hang & Fuerza de agarre)",
            "duration": "0:20 • Descompresión espinal",
            "category": "Agarre & Columna",
            "obs": "Descompresión de la columna vertebral y fortalecimiento de antebrazos.",
            "videoUrl": "https://videos.pexels.com/video-files/10476557/10476557-uhd_4096_2160_25fps.mp4"
        }
    ],

    books: [
        {
            id: "b1",
            title: "Entrenamiento Militar con Peso Corporal para Hombres Mayores de 40 — El Reto de los 28 Días (Parte 1)",
            description: "Desarrolla fuerza funcional, movilidad y resistencia con 15 minutos al día sin gimnasio. Un programa completo de 28 días con ejercicios militares de peso corporal para hombres mayores de 40.",
            badgeText: "Reto de 28 Días",
            badgeColor: "#c45329",
            features: [
                "15 minutos al día de ejercicios militares con peso corporal",
                "Especialmente adaptado para la salud articular y movilidad de hombres 40+",
                "Sin gimnasio, sin equipamiento costoso y sin excusas"
            ],
            downloadUrl: "materials/MAN-1-ES.pdf",
            coverImage: "assets/covers/man_IMG1_es.png",
            buttonText: "Descargar Parte 1 (PDF)"
        },
        {
            id: "b2",
            title: "Entrenamiento Funcional de Élite Militar — El Programa Táctico de 9 Semanas (Parte 2)",
            description: "Programa táctico avanzado con peso corporal para máxima resistencia, estabilidad de hombros y core, y quema de grasa eficaz en cualquier lugar y momento.",
            badgeText: "Programa de 9 Semanas",
            badgeColor: "#3b5940",
            features: [
                "Plan táctico progresivo de 9 semanas para todo el cuerpo",
                "Rutinas militares funcionales de fuerza, resistencia y quema de grasa",
                "Recuperación óptima y prevención de lesiones"
            ],
            downloadUrl: "materials/MAN-2-ES.pdf",
            coverImage: "assets/covers/man_IMG1_es.png",
            buttonText: "Descargar Guía Principal (Parte 2)"
        },
        {
            id: "b3",
            title: "Entrenamiento Militar de Calistenia para Hombres Mayores de 50 (Parte 3)",
            description: "Desarrolla fuerza, equilibrio, movilidad y resistencia duradera — en casa o al aire libre, sin gimnasio. Diseñado para hombres a partir de los 50 años enfocado en vitalidad y protección articular.",
            badgeText: "Hombres 50+",
            badgeColor: "#1b2a3a",
            features: [
                "Enfoque en fuerza, equilibrio, movilidad y resistencia sostenible",
                "Ejercicios seguros y efectivos con peso corporal para hombres 50+",
                "Protección articular a largo plazo y máxima energía en el día a día"
            ],
            downloadUrl: "materials/MAN-3-ES.pdf",
            coverImage: "assets/covers/man_IMG1_es.png",
            buttonText: "Descargar Parte 3 (PDF)"
        }
    ],

    otherProducts: []
};
