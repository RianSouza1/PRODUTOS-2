/**
 * LA FARMACIA NATURAL — Members Area Data (Español)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Naturens Apotek", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Fråga om kursåtkomst (Naturens Apotek)",
        emailBodyTemplate: "Hej supportteamet! Jag skulle vilja få hjälp med mitt medlemsområde för Naturens Apotek.%0A%0AMitt namn är: ______.",

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
            title: "Naturens Apotek — Komplett Guide",
            description: "Huvudguiden för att bygga ditt eget naturliga apotek hemma. Lär dig vilka örter du ska använda, vilka recept som faktiskt fungerar och hur du förbereder dem steg för steg, utan att behöva vara expert.",
            badgeText: "HUVUDBOK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Enkla beredningsmetoder för nybörjare",
                "Guider till örter och köksingredienser",
                "Steg för steg örtrecept för vanliga åkommor"
            ],
            downloadUrl: "materials/la_farmacia_natural_guia.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Ladda ner Huvudbok"
        },
        {
            id: "b2",
            title: "Läkande Kökskurer",
            description: "Upptäck de terapeutiska egenskaperna hos vanliga medicinska örter och lär dig använda dem säkert för dagligt välbefinnande: lugnande teer, siraper, salvor och mer.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medicinska profiler för över 20 örter",
                "Säkerhetsriktlinjer och dosering",
                "Traditionella läkande tillämpningar"
            ],
            downloadUrl: "materials/el_poder_curativo_de_las_hierbas.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Ladda ner Bonus #1"
        },
        {
            id: "b3",
            title: "Läkande Örtteer",
            description: "Lär dig att skapa lugnande örtinfusioner för sömn, matsmältning, avslappning, halsens välbefinnande, immunitet och dagligt välbefinnande med enkla ingredienser.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Blandningar för sömn, matsmältning och avslappning",
                "Recept med honung, ingefära, mynta och kamomill",
                "Steg för steg att förbereda hemma"
            ],
            downloadUrl: "materials/guia_infusiones_curativas.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Ladda ner Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
