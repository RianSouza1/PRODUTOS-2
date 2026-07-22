/**
 * פילאטיס ובריאות — אזור חברים (עברית)
 */

const APP_DATA = {
    config: {
        brandName: "פילאטיס ובריאות",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "שאלה לגבי גישה (פילאטיס ובריאות)",
        emailBodyTemplate: "שלום לצוות התמיכה! אשמח לעזרה לגבי הגישה שלי לאזור החברים של פילאטיס ובריאות.\n\nהשם שלי הוא: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "פילאטיס למתחילים — מהדורת 2026",
            description: "צעד אחר צעד. בונה כוח, גמישות וביטחון עצמי בקצב שלך, בלי למהר ובנוחות של הבית שלך. מיועד לעזור לך להתחזק ולהתגמש.",
            badgeText: "חומר עיקרי",
            badgeColor: "#C07A68",
            features: [
                "תרגילים צעד אחר צעד למתחילים בבית",
                "שיפור היציבה, הגמישות וכוח הליבה",
                "תנועות בטוחות ללא מאמץ יתר"
            ],
            downloadUrl: "materials/PILATES-1-HE.pdf",
            coverImage: "assets/covers/pil_IMG1_he.png",
            buttonText: "הורד חומר עיקרי"
        },
        {
            id: "b2",
            title: "פילאטיס קיר — מהדורת 2026",
            description: "תרגילים עדינים בבית שמחזקים בטבעיות את הכוח, שיווי המשקל והניידות שלך. השתמש בקיר כתמיכה לתיקון היציבה וחיזוק הגוף.",
            badgeText: "בונוס #1",
            badgeColor: "#5B8C7D",
            features: [
                "שימוש בקיר לשיווי משקל ותמיכה טובים יותר",
                "תרגילי ניידות עדינים לכל הגוף",
                "אידיאלי לאימון ביתי ללא ציוד מיוחד"
            ],
            downloadUrl: "materials/PILATES-2-HE.pdf",
            coverImage: "assets/covers/pil_IMG1_he.png",
            buttonText: "הורד בונוס #1"
        },
        {
            id: "b3",
            title: "תוכנית פילאטיס של 30 יום לגיל הזהב — מהדורת 2026",
            description: "תוכנית עדינה ויומיומית שתלווה אתכם צעד אחר צעד, בקצב שלכם ובשקט — כדי לבנות בהדרגה כוח, שיווי משקל, גמישות וביטחון בגוף שלכם.",
            badgeText: "בונוס #2",
            badgeColor: "#9C6A88",
            features: [
                "לוח שנה מלא של 30 יום עם אימונים עדינים יומיים",
                "התמקדות בשיווי משקל, ניידות מפרקים והגברת האנרגיה",
                "בטוח לביצוע בבית לכל רמת כושר גופני"
            ],
            downloadUrl: "materials/PILATES-3-HE.pdf",
            coverImage: "assets/covers/pil_IMG1_he.png",
            buttonText: "הורד בונוס #2"
        }
    ],

    otherProducts: []
};
