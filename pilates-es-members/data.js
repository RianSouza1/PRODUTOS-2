/**
 * Pilates & Bienestar — Área de Miembros (Español)
 */

const APP_DATA = {
    config: {
        brandName: "Pilates & Bienestar",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pregunta sobre el acceso (Pilates & Bienestar)",
        emailBodyTemplate: "¡Hola, equipo de soporte! Me gustaría recibir ayuda con mi acceso al área de miembros de Pilates & Bienestar.\n\nMi nombre es: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Pilates para Principiantes — Edición 2026",
            description: "Una guía sencilla, paso a paso, para ganar fuerza, flexibilidad y confianza desde casa. Diseñada para ayudarte a ser más fuerte, más flexible y con más energía a tu propio ritmo.",
            badgeText: "Material Principal",
            badgeColor: "#C07A68",
            features: [
                "Ejercicios paso a paso para principiantes en casa",
                "Mejora tu postura, flexibilidad y fuerza central",
                "Movimientos seguros sin esfuerzo pesado"
            ],
            downloadUrl: "materials/PILATES-1-ES.pdf",
            coverImage: "assets/covers/pil_IMG1_es.png",
            buttonText: "Descargar Material Principal"
        },
        {
            id: "b2",
            title: "Pilates en Pared — Edición 2026",
            description: "Ejercicios suaves y seguros para ganar fuerza, equilibrio y movilidad desde casa. Utiliza la pared como tu compañera para corregir tu postura y fortalecer tu cuerpo.",
            badgeText: "Bono #1",
            badgeColor: "#5B8C7D",
            features: [
                "Utiliza la pared para un mejor equilibrio y apoyo",
                "Ejercicios suaves de movilidad para todo el cuerpo",
                "Ideal para entrenar en casa sin equipo especial"
            ],
            downloadUrl: "materials/PILATES-2-ES.pdf",
            coverImage: "assets/covers/pil_IMG1_es.png",
            buttonText: "Descargar Bono #1"
        },
        {
            id: "b3",
            title: "30 Días de Pilates para Adultos Mayores — Edición 2026",
            description: "Un programa diario suave para ganar fuerza, equilibrio, movilidad y confianza. Especialmente diseñado para adultos que desean mantenerse seguros y activos.",
            badgeText: "Bono #2",
            badgeColor: "#9C6A88",
            features: [
                "Calendario completo de 30 días con sesiones suaves diarias",
                "Enfoque en el equilibrio, la movilidad articular y la energía",
                "Seguro de realizar en casa para cualquier nivel de condición física"
            ],
            downloadUrl: "materials/PILATES-3-ES.pdf",
            coverImage: "assets/covers/pil_IMG1_es.png",
            buttonText: "Descargar Bono #2"
        }
    ],

    otherProducts: []
};
