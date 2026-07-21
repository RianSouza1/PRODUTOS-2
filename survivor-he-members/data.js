/**
 * Survival & Bushcraft — אזור חברים (Hebrew)
 * הסדרה המלאה להישרדות ו-Bushcraft
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "בקשת גישה (Survival & Bushcraft)",
        emailBodyTemplate: "שלום לצוות התמיכה,\n\nאני זקוק לעזרה בקבלת גישה לאזור החברים שלי ב-Survival & Bushcraft.\n\nשמי הוא: ______",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "מדריך ההישרדות למתחילים — מהדורת 2026",
            description: "מים, אש, מחסה, איתות וטכניקות בסיסיות להישרדות. מדריך מעשי לכל מי שמבלה בטבע — מטיילים, קמפינג, ציידים או הרפתקנים בשטח הפראי.",
            badgeText: "מדריך ראשי",
            badgeColor: "#6B7C44",
            features: [
                "מציאת, טיהור ואבטחת מים בטבע",
                "הדלקת מדורות, בניית מחסות ושליחת אותות מצוקה",
                "טכניקות שנבחנו בשטח ומותאמות למתחילים"
            ],
            downloadUrl: "materials/SURVIVOR-1-HE.pdf",
            coverImage: "assets/covers/sur_IMG1_he.png",
            buttonText: "הורד את המדריך הראשי"
        },
        {
            id: "b2",
            title: "טכניקות לחיים בשטח ובטבע — מהדורת 2026",
            description: "ציוד, קשרים, ניווט, טכניקות bivouac וחוכמת הישרדות בשטח הפראי. מיומנויות הליבה הדרושות לך כדי להתנהל בבטחה ובביטחון בסביבה מיוערת.",
            badgeText: "בונוס #1",
            badgeColor: "#7A5C3E",
            features: [
                "שליטה בכלי עבודה, קשרים חיוניים וטכניקות ניווט",
                "הקמת מחנות/בקתות ומחיה עצמאית בטבע",
                "הוראות שלב אחר שלב למתחילים ללא כל ניסיון קודם"
            ],
            downloadUrl: "materials/SURVIVOR-2-HE.pdf",
            coverImage: "assets/covers/sur_IMG1_he.png",
            buttonText: "הורד את בונוס #1"
        },
        {
            id: "b3",
            title: "מוכנות לחירום ועזרה ראשונה — מהדורת 2026",
            description: "תיק חירום ל-72 שעות, הפסקות חשמל, פינוי ושמירה על בטיחות המשפחה. כל מה שמשק בית רגיל צריך כדי להיערך למצבי חירום בלתי צפויים.",
            badgeText: "בונוס #2",
            badgeColor: "#8B4513",
            features: [
                "רשימת ציוד נכונה לתיק חירום ל-72 שעות (go-bag)",
                "היערכות להפסקות חשמל, פינוי ומוכנות ביתית",
                "יסודות עזרה ראשונה חיוניים למשפחות במצבי משבר"
            ],
            downloadUrl: "materials/SURVIVOR-3-HE.pdf",
            coverImage: "assets/covers/sur_IMG1_he.png",
            buttonText: "הורד את בונוס #2"
        }
    ],

    otherProducts: []
};
