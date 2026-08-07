/**
 * גילוף בעץ ועבודת יד בעץ — אזור חברים (עברית)
 */

const APP_DATA = {
    config: {
        brandName: "גילוף בעץ ועבודת יד בעץ",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "שאלה בנוגע לגישה (גילוף בעץ ועבודת יד בעץ)",
        emailBodyTemplate: "שלום לצוות התמיכה! אשמח לקבל עזרה בנוגע לגישה שלי לאזור החברים גילוף בעץ ועבודת יד בעץ.\n\nשמי הוא: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "גילוף בעץ למתחילים — כלים, בטיחות ופרויקטים קלים ראשונים",
            description: "מדריך מעשי ומלא צעד אחר צעד להתחלת גילוף עץ ידני בבטיחות מלאה.",
            badgeText: "כרך 1",
            badgeColor: "#475569",
            features: [
                "כללי בטיחות חיוניים וציוד מגן",
                "איך לקרוא נכון את סיבי העץ ומרקמו",
                "פרויקט גילוף העץ הפשוט הראשון שלך"
            ],
            downloadUrl: "materials/WHITTLING-1-HE.pdf",
            coverImage: "assets/covers/whi_IMG1_he.png",
            buttonText: "הורד כרך 1 (PDF)"
        },
        {
            id: "b2",
            title: "פרויקטים קלים בגילוף עץ — מיומנויות וטכניקות צעד אחר צעד",
            description: "המשך לכרך 1 — מחיתוכים גיאומטריים פשוטים ועד לדמויות עץ מביעות דרך פרויקטים מובנים.",
            badgeText: "המדריך המרכזי",
            badgeColor: "#8B5A2B",
            features: [
                "אחד עשר פרויקטים מפורטים בגילוף עץ",
                "הגדלת שבלונות והעברתן לעץ",
                "טיפים לשליטה בסימטריה ובצורות"
            ],
            downloadUrl: "materials/WHITTLING-2-HE.pdf",
            coverImage: "assets/covers/whi_IMG1_he.png",
            buttonText: "הורד את המדריך המרכזי (כרך 2)"
        },
        {
            id: "b3",
            title: "גילוף בעץ: גימור וליטוש — השחזה, פרטים וטיפול במשטח",
            description: "השחזה, גילוף פרטים מדויק, טיפול במשטחים ותוצאות מושלמות. כרך 3 מתוך 3 באוסף המלא.",
            badgeText: "כרך 3",
            badgeColor: "#2E5A44",
            features: [
                "טכניקות לעבודה על פרטים עדינים והשחזת סכינים",
                "בחירת גימורים, שמנים ושעוות",
                "איך להגיע למראה סופי מושלם"
            ],
            downloadUrl: "materials/WHITTLING-3-HE.pdf",
            coverImage: "assets/covers/whi_IMG1_he.png",
            buttonText: "הורד כרך 3 (PDF)"
        }
    ],

    otherProducts: []
};
