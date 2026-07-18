/**
 * Excel Mastery — Личный кабинет (Русский)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Вопрос по доступу (Excel Mastery)",
        emailBodyTemplate: "Здравствуйте, служба поддержки. Мне нужна помощь с доступом к личному кабинету Excel Mastery.\n\nМое имя: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Excel от нуля до профессионального уровня — Издание 2026",
            description: "Практическое руководство для начинающих, охватывающее электронные таблицы, организацию данных и повседневную продуктивность. От первой ячейки до продвинутых инструментов.",
            badgeText: "Основной материал",
            badgeColor: "#1a7a45",
            features: [
                "Таблицы и организация данных для новичков",
                "Повседневная продуктивность и списки клиентов",
                "Управление финансами и планирование времени в Excel"
            ],
            downloadUrl: "materials/Excel-1-RU.pdf",
            coverImage: "assets/covers/excel_IMG1_ru.png",
            buttonText: "Скачать основной материал"
        },
        {
            id: "b2",
            title: "Формулы Excel, функции и интеллектуальные рабочие процессы — Издание 2026",
            description: "Практическое руководство для более быстрого решения задач в Excel. Используйте формулы и функции, чтобы превратить обычную таблицу в мощный инструмент.",
            badgeText: "Бонус #1",
            badgeColor: "#D97706",
            features: [
                "Продвинутые формулы и функции",
                "Автоматические вычисления и умные процессы",
                "Быстрое решение повседневных задач в Excel"
            ],
            downloadUrl: "materials/Excel-2-RU.pdf",
            coverImage: "assets/covers/excel_IMG1_ru.png",
            buttonText: "Скачать бонус #1"
        },
        {
            id: "b3",
            title: "Таблицы Excel, отчёты и выводы — Издание 2026",
            description: "Практическое руководство по превращению данных в понятные и профессиональные отчёты. Научитесь эффективно представлять результаты руководителю, клиенту или команде.",
            badgeText: "Бонус #2",
            badgeColor: "#7C3AED",
            features: [
                "Профессиональные дашборды и сводные таблицы",
                "Итоговые отчёты и Pivot-таблицы",
                "Презентация данных руководству, клиентам и команде"
            ],
            downloadUrl: "materials/Excel-3-RU.pdf",
            coverImage: "assets/covers/excel_IMG1_ru.png",
            buttonText: "Скачать бонус #2"
        }
    ],

    otherProducts: []
};
