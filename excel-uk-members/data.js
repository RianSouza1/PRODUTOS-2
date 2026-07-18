/**
 * Excel Mastery — Область учасників (Українська)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Питання щодо доступу (Excel Mastery)",
        emailBodyTemplate: "Привіт, команда підтримки. Мені потрібна допомога з доступом до області учасників Excel Mastery.\n\nМоє ім'я: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Від нуля до професіонала в Excel — Видання 2026",
            description: "Практичний посібник для початківців, що охоплює електронні таблиці, організацію та щоденну продуктивність. Від першої клітинки до розширених інструментів.",
            badgeText: "Основний матеріал",
            badgeColor: "#1a7a45",
            features: [
                "Таблиці та організація даних для початківців",
                "Щоденна продуктивність і списки клієнтів",
                "Управління фінансами та планування часу в Excel"
            ],
            downloadUrl: "materials/Excel-1-UK.pdf",
            coverImage: "assets/covers/excel_IMG1_uk.png",
            buttonText: "Завантажити основний матеріал"
        },
        {
            id: "b2",
            title: "Функції Excel, операції та розумні робочі процеси — Видання 2026",
            description: "Практичний посібник для швидшого вирішення завдань у Excel. Використовуйте формули та функції, щоб перетворити звичайну таблицю на справжній інструмент вирішення проблем.",
            badgeText: "Бонус #1",
            badgeColor: "#D97706",
            features: [
                "Розширені формули та функції",
                "Автоматичні обчислення та розумні процеси",
                "Швидке вирішення завдань у Excel"
            ],
            downloadUrl: "materials/Excel-2-UK.pdf",
            coverImage: "assets/covers/excel_IMG1_uk.png",
            buttonText: "Завантажити бонус #1"
        },
        {
            id: "b3",
            title: "Excel для обчислень, звітів та формул — Видання 2026",
            description: "Практичний посібник із перетворення даних на чіткі та професійні звіти. Навчіться ефективно представляти дані керівнику, клієнту чи команді.",
            badgeText: "Бонус #2",
            badgeColor: "#7C3AED",
            features: [
                "Професійні інформаційні панелі та зведені таблиці",
                "Узагальнені звіти та Pivot-таблиці",
                "Представлення даних керівнику, клієнту та команді"
            ],
            downloadUrl: "materials/Excel-3-UK.pdf",
            coverImage: "assets/covers/excel_IMG1_uk.png",
            buttonText: "Завантажити бонус #2"
        }
    ],

    otherProducts: []
};
