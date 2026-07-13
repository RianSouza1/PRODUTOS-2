/**
 * FÁCIL SIN GLUTEN — Datos del Área de Miembros (Español)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Fácil Sin Gluten", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pregunta sobre el acceso al curso (Fácil Sin Gluten)",
        emailBodyTemplate: "¡Hola equipo de soporte! Necesito ayuda con mi área de miembros de Fácil Sin Gluten.\n\nMi nombre es: ______.",

        // Show floating "?" help button on all screens
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VIDEOS (Video course) — empty if no videos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. BOOKS (E-books and PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "El Libro de Cocina Fácil Sin Gluten",
            description: "Comidas sencillas de todos los días para principiantes. Descubre lo fácil y delicioso que puede ser cocinar sin gluten con recetas prácticas paso a paso.",
            badgeText: "LIBRO PRINCIPAL",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Comidas sencillas de todos los días para principiantes",
                "Recetas deliciosas y saludables paso a paso",
                "Guía esencial para un estilo de vida sin gluten"
            ],
            downloadUrl: "materials/G-FREE-1-ES.pdf",
            coverImage: "assets/covers/gf_IMG1_es.png",
            buttonText: "Descargar libro principal"
        },
        {
            id: "b2",
            title: "Panadería Sin Gluten & Comidas Reconfortantes de Cada Día",
            description: "Los mejores panes, bocadillos, postres y los favoritos de la familia. Aprende a hornear panes y delicias sin gluten suaves y deliciosos que a todos les encantarán.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Recetas de pan y bocadillos sin gluten",
                "Postres deliciosos y favoritos de la familia",
                "Consejos de repostería para obtener resultados perfectos siempre"
            ],
            downloadUrl: "materials/G-FREE-2-ES.pdf",
            coverImage: "assets/covers/gf_IMG1_es.png",
            buttonText: "Descargar bono #1"
        },
        {
            id: "b3",
            title: "Plan de Comidas de 30 Días & Guía de Compras Sin Gluten",
            description: "Menús semanales sencillos, listas de compras organizadas y ayuda experta con la preparación de comidas para que tu transición sea fluida y sin estrés.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Plan de comidas completo de 30 dias",
                "Listas de compras semanales organizadas",
                "Consejos útiles para preparar comidas fácilmente"
            ],
            downloadUrl: "materials/G-FREE-3-ES.pdf",
            coverImage: "assets/covers/gf_IMG1_es.png",
            buttonText: "Descargar bono #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v9