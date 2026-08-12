/**
 * עישון בשר & BBQ — אזור חברים (עברית)
 */

const APP_DATA = {
    config: {
        brandName: "עישון בשר & BBQ",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "בקשת תמיכה עבור גישה (עישון בשר & BBQ)",
        emailBodyTemplate: "שלום לצוות התמיכה! אשמח לקבל עזרה בנוגע לגישה שלי לאזור החברים של עישון בשר & BBQ.\n\nהשם שלי הוא: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "עישון בשר למתחילים",
            description: "שליטה באש, עשן, טמפרטורה ורכות בבית. מדריך חם ומעצים שתוכל לעקוב אחריו מהבית להכנת בשר עסיסי עם ארומת עשן מושלמת.",
            badgeText: "ספר ראשי",
            badgeColor: "#BF360C",
            features: [
                "שליטה מקצועית באש, עשן וטמפרטורה",
                "הוראות מפורטות שלב אחר שלב למתחילים",
                "טיפים מעשיים לעישון בשר בבית"
            ],
            downloadUrl: "materials/SMOKING-1-HE.pdf",
            coverImage: "assets/covers/smo_IMG1_he.png",
            buttonText: "הורד ספר ראשי"
        },
        {
            id: "b2",
            title: "מתכוני BBQ לחצר האחורית",
            description: "נתחי בשר מעושנים אהובים, תוספות קלאסיות ותפריטים שלמים למפגשים משפחתיים, ימי הולדת ומסיבות חצר בלתי נשכחות.",
            badgeText: "בונוס #1",
            badgeColor: "#8D6E63",
            features: [
                "המתכונים הטובים ביותר לבשר מעושן",
                "תוספות BBQ קלאסיות",
                "תכנון תפריט מלא למסיבת הגריל הבאה שלך"
            ],
            downloadUrl: "materials/SMOKING-2-HE.pdf",
            coverImage: "assets/covers/smo_IMG1_he.png",
            buttonText: "הורד בונוס #1"
        },
        {
            id: "b3",
            title: "תערובות תבלינים, רטבים ומרינדות ל-BBQ",
            description: "טעמים עשירים ומאוזנים לכל סוגי הבשר. המדריך האולטימטיבי להענקת שדרוג טעם מושלם למנות שלך.",
            badgeText: "בונוס #2",
            badgeColor: "#E64A19",
            features: [
                "מתכונים סודיים לתערובות תבלינים משובחות",
                "רטבים ומרינדות טעימים לכל סוגי הבשר",
                "טיפים למיקסום הטעם למומחי גריל"
            ],
            downloadUrl: "materials/SMOKING-3-HE.pdf",
            coverImage: "assets/covers/smo_IMG1_he.png",
            buttonText: "הורד בונוס #2"
        }
    ],

    otherProducts: []
};
