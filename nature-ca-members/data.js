/**
 * LA FARMÀCIA NATURAL — Members Area Data (Català)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "La Farmàcia Natural", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pregunta sobre l'accés al curs (La Farmàcia Natural)",
        emailBodyTemplate: "Hola equip de suport! M'agradaria rebre ajuda amb la meva àrea de membres de La Farmàcia Natural.%0A%0AEl meu nom és: ______.",

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
            title: "La Farmàcia Natural — Guia Completa",
            description: "La guia principal per construir la teva pròpia farmàcia natural a casa. Aprèn quines herbes fer servir, quines receptes funcionen realment i com preparar-les pas a pas, sense necessitat de ser un expert.",
            badgeText: "LLIBRE PRINCIPAL",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Mètodes de preparació senzills per a principiants",
                "Guies d'herbes i ingredients de cuina",
                "Receptes d'herbes pas a pas per a dolors comuns"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-CA.pdf",
            coverImage: "assets/covers/nature_IMG1_cat.png",
            buttonText: "Descarregar Llibre Principal"
        },
        {
            id: "b2",
            title: "El Poder Curativo de les Herbes",
            description: "Descobreix les propietats terapèutiques de les herbes medicinals més comunes i aprèn a fer-les servir de manera segura per al benestar diari: tes calmantes, jarabes, ungüents i més.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Perfils medicinals de més de 20 herbes",
                "Pautes de seguretat i dosificació",
                "Aplicacions curatives tradicionals"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-CA.pdf",
            coverImage: "assets/covers/nature_IMG1_cat.png",
            buttonText: "Descarregar Bonus #1"
        },
        {
            id: "b3",
            title: "Guia d'Infusions Curatives",
            description: "Aprèn a crear infusions d'herbes calmants per al son, la digestió, la relaxació, el benestar del coll, la immunitat i el benestar diari amb ingredients simples.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Barreges per al son, la digestió i la relaxació",
                "Receptes amb mel, gingebre, menta i camamilla",
                "Pas a pas per preparar a casa"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-CA.pdf",
            coverImage: "assets/covers/nature_IMG1_cat.png",
            buttonText: "Descarregar Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2