/**
 * LA FARMACIA NATURAL — Members Area Data (Español)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "La Farmacia Natural", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pregunta sobre el acceso al curso (La Farmacia Natural)",
        emailBodyTemplate: "¡Hola equipo de soporte! Me gustaría recibir ayuda con mi área de miembros de La Farmacia Natural.%0A%0AMi nombre es: ______.",

        // Mostrar ícone de "? Ajuda" flutuante em todas as telas
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VÍDEOS (Curso em vídeo) — vazio se não houver vídeos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. LIVROS (E-books e PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "La Farmacia Natural — Guía Completa",
            description: "La guía principal para construir tu propia farmacia natural en casa. Aprende qué hierbas usar, qué recetas realmente funcionan y cómo prepararlas paso a paso, sin necesidad de ser un experto.",
            badgeText: "LIBRO PRINCIPAL",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Métodos de preparación sencillos para principiantes",
                "Guías de hierbas e ingredientes de cocina",
                "Recetas herbales paso a paso para dolencias comunes"
            ],
            downloadUrl: "materials/la_farmacia_natural_guia.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Descargar Libro Principal"
        },
        {
            id: "b2",
            title: "El Poder Curativo de las Hierbas",
            description: "Descubre las propiedades terapéuticas de las hierbas medicinales más comunes y aprende a usarlas de forma segura para el bienestar diario: tés calmantes, jarabes, ungüentos y más.",
            badgeText: "BONO #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Perfiles medicinales de más de 20 hierbas",
                "Pautas de seguridad y dosificación",
                "Aplicaciones curativas tradicionales"
            ],
            downloadUrl: "materials/el_poder_curativo_de_las_hierbas.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Descargar Bono #1"
        },
        {
            id: "b3",
            title: "Guía de Infusiones Curativas",
            description: "Aprende a crear infusiones de hierbas calmantes para el sueño, la digestión, la relajación, el bienestar de la garganta, la inmunidad y el bienestar diario con ingredientes simples.",
            badgeText: "BONO #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Mezclas para el sueño, la digestión y la relajación",
                "Recetas con miel, jengibre, menta y manzanilla",
                "Paso a paso para preparar en casa"
            ],
            downloadUrl: "materials/guia_infusiones_curativas.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Descargar Bono #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
