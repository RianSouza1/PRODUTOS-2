/**
 * BEEKEEPING — Members Area Data (ES)
 */

const APP_DATA = {
    config: {
        brandName: "Apicultura para Principiantes",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pregunta sobre el acceso al curso (Apicultura)",
        emailBodyTemplate: "¡Hola equipo de soporte! Necesito ayuda con mi área de miembros de Apicultura.%0A%0AMi nombre es: ______.",
        showFloatingHelp: true
    },

    videos: [
        { id: 'v1', title: 'Apicultura para Principiantes - Introducción', duration: 'Video 1', youtubeId: 'qo4Vs59ndNU' },
        { id: 'v2', title: 'La Colmena y sus Partes', duration: 'Video 2', youtubeId: 'vCCHMEJZuJc' },
        { id: 'v3', title: 'Herramientas Esenciales de Apicultura', duration: 'Video 3', youtubeId: 'YXZmtnnkxDE' },
        { id: 'v4', title: 'Biología de las Abejas Melíferas', duration: 'Video 4', youtubeId: 'oTlP9sYyZ9s' },
        { id: 'v5', title: 'Ubicación de las Colonias de Abejas', duration: 'Video 5', youtubeId: 'PT6VnrOX9zU' },
        { id: 'v6', title: 'Iniciar Nuevas Colonias de Abejas', duration: 'Video 6', youtubeId: 'ppLH1tXR_9s' },
        { id: 'v7', title: 'Gestión del Primer Año de la Colonia', duration: 'Video 7', youtubeId: 'FYoTrwXCEWg' },
        { id: 'v8', title: 'Gestión del Segundo Año de la Colonia', duration: 'Video 8', youtubeId: 'rYDQA5I9dRs' },
        { id: 'v9', title: 'Cosecha de Miel', duration: 'Video 9', youtubeId: 'OsEK_iSdsis' },
        { id: 'v10', title: 'Mantener las Colmenas Saludables', duration: 'Video 10', youtubeId: 'SOH4UvYe-Tg' },
        { id: 'v11', title: 'Control de Ácaros Parásitos', duration: 'Video 11', youtubeId: '6RieuFwg4eY' },
        { id: 'v12', title: 'Manejo de Escarabajos de Colmena', duration: 'Video 12', youtubeId: 'iy5r8Or87_g' },
        { id: 'v13', title: 'Control de Polillas de Cera', duration: 'Video 13', youtubeId: 'VG3XQQrDoIs' },
        { id: 'v14', title: 'Plagas Menores de la Colmena', duration: 'Video 14', youtubeId: '-fxKYKVOKG4' },
        { id: 'v15', title: 'Manejo Integrado de Plagas', duration: 'Video 15', youtubeId: 'iLhNdkVDCnw' },
        { id: 'v16', title: 'Enfermedades de las Abejas', duration: 'Video 16', youtubeId: 'ZEKD5HlIuHM' },
        { id: 'v17', title: 'Reflexiones Finales sobre las Abejas', duration: 'Video 17', youtubeId: 'JSPSqhW6lsU' },
        { id: 'v18', title: '¿Es la Apicultura para Ti?', duration: 'Video 18', youtubeId: 'X3Xp1lQpxOc' },
        { id: 'v19', title: 'Cómo Instalar Abejas en una Colmena', duration: 'Video 19', youtubeId: 'S4A8CTALPDI' }
    ],

    books: [
        {
            id: "b1",
            title: "Apicultura para Todos",
            description: "La guía completa para una apicultura sencilla y rentable — desde montar tu primera colmena hasta gestionar un apiario próspero.",
            badgeText: "LIBRO PRINCIPAL",
            badgeColor: "#E5A817",
            features: [
                "Guía completa de instalación",
                "Calendario de gestión estacional",
                "Producción rentable de miel"
            ],
            downloadUrl: "materials/placeholder.pdf",
            coverImage: "assets/covers/apicultura_para_todos.png",
            buttonText: "Descargar libro"
        },
        {
            id: "b2",
            title: "El Apicultor de Jardín",
            description: "Tu guía esencial para la apicultura doméstica — aprende a mantener abejas en tu jardín de forma segura y exitosa.",
            badgeText: "GUÍA",
            badgeColor: "#6B8F3C",
            features: [
                "Ubicación de colmenas en el jardín",
                "Métodos para principiantes",
                "Salud y mantenimiento de la colonia"
            ],
            downloadUrl: "materials/placeholder.pdf",
            coverImage: "assets/covers/el_apicultor_de_jardin.png",
            buttonText: "Descargar guía"
        },
        {
            id: "b3",
            title: "Elaboración de Hidromiel",
            description: "Aprende el antiguo arte de elaborar vino de miel en casa — recetas paso a paso usando tu propia miel cosechada.",
            badgeText: "BONUS",
            badgeColor: "#B45309",
            features: [
                "Recetas tradicionales de hidromiel",
                "Técnicas de fermentación",
                "Variaciones de sabor y consejos"
            ],
            downloadUrl: "materials/placeholder.pdf",
            coverImage: "assets/covers/elaboracion_de_hidromiel.png",
            buttonText: "Descargar bonus"
        },
        {
            id: "b4",
            title: "Apicultura Fácil",
            description: "Un enfoque simplificado de la apicultura — consejos prácticos y trucos para principiantes que quieren resultados rápidos.",
            badgeText: "EXTRA",
            badgeColor: "#059669",
            features: [
                "Métodos de inicio rápido",
                "Errores comunes a evitar",
                "Consejos y trucos prácticos"
            ],
            downloadUrl: "materials/placeholder.pdf",
            coverImage: "assets/covers/apicultura_facil.png",
            buttonText: "Descargar extra"
        }
    ],

    otherProducts: []
};
