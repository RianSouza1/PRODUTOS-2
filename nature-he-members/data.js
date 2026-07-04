/**
 * בית המרקחת הטבעי — נתוני אזור חברים (עברית)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "בית המרקחת הטבעי", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "שאלה לגבי גישה לקורס (בית המרקחת הטבעי)",
        emailBodyTemplate: "שלום צוות התמיכה! אני זקוק לעזרה עם אזור החברים שלי בבית המרקחת הטבעי.%0A%0Aשמי: ______.",

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
            title: "בית המרקחת הטבעי — המדריך המלא",
            description: "המדריך הראשי לבניית בית מרקחת טבעי משלך בבית. למד אילו צמחי מרפא להשתמש בהם, אילו מתכונים באמת עובדים וכיצד להכינם שלב אחר שלב, מבלי להיות מומחה.",
            badgeText: "הספר הראשי",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "שיטות הכנה פשוטות למתחילים",
                "מדריכים לצמחי מרפא ומרכיבי מטבח",
                "מתכוני צמחי מרפא שלב אחר שלב לבעיות נפוצות"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-HEB.pdf",
            coverImage: "assets/covers/Hebrew - img1.png",
            buttonText: "הורדת הספר הראשי"
        },
        {
            id: "b2",
            title: "תרופות ריפוי מהמטבח",
            description: "גלה את התכונות הטיפוליות של צמחי מרפא נפוצים ולמד להשתמש בהם בבטחה לרווחה יומיומית: תמציות מרגיעות, סירופים, משחות ועוד.",
            badgeText: "בונוס #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "פרופילים רפואיים של יותר מ-20 צמחי מרפא",
                "הנחיות בטיחות ומינון",
                "שימושי ריפוי מסורתיים"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-HEB.pdf",
            coverImage: "assets/covers/Hebrew - img1.png",
            buttonText: "הורדת בונוס #1"
        },
        {
            id: "b3",
            title: "תמציות צמחים מרפאות",
            description: "למד להכין תמציות צמחים מרגיעות לשינה, עיכול, הרפיה, בריאות הגרון, חיסוניות ורווחה יומיומית עם מרכיבים פשוטים.",
            badgeText: "בונוס #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "תמציות לשינה, עיכול והרפיה",
                "מתכונים עם דבש, ג'ינג'ר, נענע וקמומיל",
                "שלב אחר שלב להכנה בבית"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-HEB.pdf",
            coverImage: "assets/covers/Hebrew - img1.png",
            buttonText: "הורדת בונוס #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
