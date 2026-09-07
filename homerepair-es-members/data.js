/**
 * Mantenimiento y Reparación del Hogar — Área de Miembros (Español)
 */

const APP_DATA = {
    config: {
        brandName: "Mantenimiento y Reparación del Hogar",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Consulta de acceso (Mantenimiento y Reparación del Hogar)",
        emailBodyTemplate: "¡Hola equipo de soporte! Me gustaría solicitar ayuda con mi acceso al área de miembros de Mantenimiento y Reparación del Hogar.\n\nMi nombre es: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Guía Completa de Reformas y Mantenimiento del Hogar — Edición 2026",
            description: "Proyectos prácticos, consejos probados y resultados que duran décadas. Tu manual definitivo para cuidar, reparar y renovar tu hogar con seguridad, buen oficio y acabados profesionales.",
            badgeText: "Guía Principal",
            badgeColor: "#D97706",
            features: [
                "Instrucciones paso a paso para reparaciones esenciales del hogar",
                "Consejos de expertos en proyectos de mantenimiento y reformas",
                "Técnicas prácticas de bricolaje para resultados duraderos"
            ],
            downloadUrl: "materials/REPAIR-1-ES.pdf",
            coverImage: "assets/covers/rep_IMG1_es.png",
            buttonText: "Descargar Guía Principal (PDF)"
        },
        {
            id: "b2",
            title: "Guía Práctica para las Instalaciones Eléctricas del Hogar — Edición 2026",
            description: "Con total seguridad • Conforme al Reglamento Electrotécnico de Baja Tensión (REBT) y normas UNE/IEC • Explicado de forma clara para realizar trabajos eléctricos con confianza.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Manejo seguro y responsable de instalaciones eléctricas domésticas",
                "Alineación total con normativas y estándares de seguridad REBT",
                "Guías paso a paso para reparaciones e instalaciones comunes"
            ],
            downloadUrl: "materials/REPAIR-2-ES.pdf",
            coverImage: "assets/covers/rep_IMG1_es.png",
            buttonText: "Descargar Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "Guía Completa de Fontanería para el Hogar — Edición 2026",
            description: "Reparaciones • Mejoras • Mantenimiento sin complicaciones. El manual práctico para entender, mantener y conservar en perfecto estado toda la fontanería y tuberías de tu casa.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Diagnóstico y solución de averías comunes de fontanería",
                "Mantenimiento preventivo para tuberías, grifos y desagües",
                "Instrucciones claras pensadas para principiantes y aficionados"
            ],
            downloadUrl: "materials/REPAIR-3-ES.pdf",
            coverImage: "assets/covers/rep_IMG1_es.png",
            buttonText: "Descargar Bonus #2 (PDF)"
        }
    ],

    otherProducts: []
};
