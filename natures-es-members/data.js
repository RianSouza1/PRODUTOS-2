/**
 * NATURE'S APOTHECARY — Members Area Data
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "La Botica de la Naturaleza", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pregunta sobre el acceso al curso (La Botica de la Naturaleza)",
        emailBodyTemplate: "¡Hola equipo de soporte! Me gustaría recibir ayuda con mi área de miembros de La Botica de la Naturaleza.%0A%0AMi nombre es: ______.",

        // Mostrar ícone de "? Ajuda" flutuante em todas as telas
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VÍDEOS (Video Course) - Ocultado ou Vazio se não houver vídeos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. LIVROS (E-books e PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Manual de la Botica de la Naturaleza",
            description: "La guía completa para construir su propia botica natural en casa. Aprenda qué hierbas usar, qué recetas realmente funcionan y cómo prepararlas paso a paso.",
            badgeText: "LIBRO PRINCIPAL",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Métodos de preparación sencillos para principiantes",
                "Guías de hierbas e ingredientes de cocina",
                "Recetas herbales paso a paso"
            ],
            downloadUrl: "materials/natures_apothecary_handbook.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Descargar Libro Principal"
        },
        {
            id: "b2",
            title: "El poder curativo de las hierbas",
            description: "Descubra las propiedades terapéuticas de las hierbas medicinales comunes y aprenda a usarlas de forma segura para el bienestar diario, tés calmantes y cuidado del hogar.",
            badgeText: "BONO #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Perfiles medicinales de más de 20 hierbas",
                "Pautas de seguridad y dosificación",
                "Aplicaciones curativas tradicionales"
            ],
            downloadUrl: "materials/healing_power_of_herbs.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Descargar Bono #1"
        },
        {
            id: "b3",
            title: "Remedios inspirados en Barbara O'Neill",
            description: "Inspirada en remedios tradicionales y prácticas de bienestar natural, esta guía le ayuda a llevar una vida más saludable y libre de químicos mediante terapias naturales.",
            badgeText: "BONO #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Remedios naturales tradicionales",
                "Consejos para una vida sin químicos",
                "Prácticas inspiradas en Barbara O'Neill"
            ],
            downloadUrl: "materials/barbara_oneill_inspired_remedies.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Descargar Bono #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
