/**
 * Survival & Bushcraft — Área de Miembros (Spanish)
 * La serie completa de Bushcraft y Supervivencia
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Solicitud de Acceso (Survival & Bushcraft)",
        emailBodyTemplate: "Hola equipo de soporte,\n\nNecesito ayuda para acceder a mi área de miembros de Survival & Bushcraft.\n\nMi nombre es: ______",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Supervivencia para principiantes — Edición 2026",
            description: "Agua, Fuego, Refugio, Señalización y Técnicas Esenciales de Supervivencia. Una guía práctica para quienes pasan tiempo al aire libre: senderistas, campistas, cazadores o entusiastas de la naturaleza.",
            badgeText: "Guía Principal",
            badgeColor: "#6B7C44",
            features: [
                "Cómo encontrar, purificar y asegurar agua en la naturaleza",
                "Hacer fuego, construir refugios y enviar señales de rescate",
                "Técnicas probadas en el campo y adaptadas para principiantes"
            ],
            downloadUrl: "materials/SURVIVOR-1-ES.pdf",
            coverImage: "assets/covers/sur_IMG1_es.png",
            buttonText: "Descargar Guía Principal"
        },
        {
            id: "b2",
            title: "Bushcraft y el arte de vivir en el bosque — Edición 2026",
            description: "Equipo, nudos, navegación, técnicas de campamento y la ciencia de la vida autónoma en la naturaleza. Las habilidades clave necesarias para orientarse y disfrutar del bosque de forma segura y con confianza.",
            badgeText: "Bonus #1",
            badgeColor: "#7A5C3E",
            features: [
                "Uso de herramientas, nudos esenciales y técnicas de navegación",
                "Montar campamentos/vivacs y vivir de forma autónoma en la naturaleza",
                "Instrucciones paso a paso para principiantes sin experiencia previa"
            ],
            downloadUrl: "materials/SURVIVOR-2-ES.pdf",
            coverImage: "assets/covers/sur_IMG1_es.png",
            buttonText: "Descargar Bonus #1"
        },
        {
            id: "b3",
            title: "Preparación ante crisis y primeros auxilios para supervivientes — Edición 2026",
            description: "La Mochila Esencial de 72 Horas, Cortes de Luz, Evacuación y Cómo Mantener a Tu Familia a Salvo. Todo lo que un hogar común necesita saber para estar preparado ante emergencias inesperadas.",
            badgeText: "Bonus #2",
            badgeColor: "#8B4513",
            features: [
                "Lista de equipamiento adecuada para una mochila de emergencia de 72 horas (go-bag)",
                "Preparación ante cortes de luz, evacuaciones y seguridad en el hogar",
                "Conceptos básicos de primeros auxilios esenciales para familias en crisis"
            ],
            downloadUrl: "materials/SURVIVOR-3-ES.pdf",
            coverImage: "assets/covers/sur_IMG1_es.png",
            buttonText: "Descargar Bonus #2"
        }
    ],

    otherProducts: []
};
