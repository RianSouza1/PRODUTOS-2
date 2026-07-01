import os
import shutil

base_dir = "/Users/riansouza/Downloads/PRODUTOS 2"
template_dir = os.path.join(base_dir, "bible1-members")

languages = {
    "he": {
        "dir": "bible1-he-members",
        "lang_code": "he",
        "html_title": "אזור חברים",
        "tab_books": "ספרים",
        "tab_products": "מוצרים",
        "tab_contact": "צור קשר",
        
        "brandName": "מדריך וספר עבודה לטאי צ'י", # Changed to Tai Chi Guide
        "emailSubject": "שאלה לגבי גישה לקורס (טאי צ'י)",
        "emailBodyTemplate": "שלום צוות התמיכה! אשמח לעזרה באזור החברים שלי.%0A%0Aשמי הוא: ______.",
        
        "v1_title": "טאי צ'י - שיעור 1 (יסודות)",
        "v2_title": "טאי צ'י - שיעור 2 (נשימה)",
        
        "b1_title": "טאי צ'י לגיל השלישי",
        "b1_desc": "תוכנית של 28 ימים עם תרגילים עדינים לשיווי משקל, ניידות, הקלה על מפרקים, טכניקות נשימה ושגרת יום של 10 דקות.",
        "b1_badge": "ספר ראשי",
        "b1_f1": "תוכנית מתקדמת של 28 ימים",
        "b1_f2": "שגרת יום של 10 דקות",
        "b1_f3": "איורים שלב אחר שלב",
        "b1_btn": "הורד את טאי צ'י לגיל השלישי",
        
        "b2_title": "טאי צ'י לירידה במשקל",
        "b2_desc": "גלה כיצד תנועות טאי צ'י יכולות להגביר את חילוף החומרים ורמות האנרגיה שלך בבטחה - ללא אימונים עצימים.",
        "b2_badge": "בונוס #1",
        "b2_f1": "תנועות להגברת חילוף החומרים",
        "b2_f2": "רצפים לבניית אנרגיה",
        "b2_f3": "טיפים לשילוב תזונה ותנועה",
        "b2_btn": "הורד בונוס ירידה במשקל",
        
        "b3_title": "טאי צ'י למתחילים",
        "b3_desc": "התחל מאפס בביטחון. למד את יסודות הטאי צ'י עם שגרת מתחילים פשוטה של 7 ימים.",
        "b3_badge": "בונוס #2",
        "b3_f1": "היסטוריה ופילוסופיה של טאי צ'י",
        "b3_f2": "עמידות ותנועות בסיסיות",
        "b3_f3": "שגרת מתחילים של 7 ימים",
        "b3_f4": "טעויות נפוצות שכדאי להימנע מהן",
        "b3_btn": "הורד את מדריך המתחילים",
        
        "b4_title": "טופס 24 המפושט",
        "b4_desc": "שלטו ברצף הפופולרי ביותר בעולם עם פירוק מפורט של כל 24 התנועות.",
        "b4_badge": "בונוס #3",
        "b4_f1": "טופס 24 תנוחות שלם",
        "b4_f2": "מעברים וטיפים לזרימה",
        "b4_f3": "דף תרגול להדפסה",
        "b4_btn": "הורד בונוס טופס 24",
        
        "p1_title": "חבילת הריפוי הטבעי",
        "p1_desc": "מדריך שלם לטיפולים טבעיים וריפוי הגוף.",
        "p1_badge": "בריאות",
        "p1_f1": "מדריך ריפוי שלם",
        "p1_f2": "טיפולים אלטרנטיביים וטבעיים",
        "p1_f3": "הפחתת מתח ומניעה",
        "p1_btn": "קבל גישה לחבילת הריפוי",
        
        "p2_title": "סלטים טעימים",
        "p2_desc": "מתכוני סלטים פרקטיים, טעימים ובריאים מאוד.",
        "p2_badge": "תזונה",
        "p2_f1": "מתכונים מהירים ופרקטיים",
        "p2_f2": "תפריט עשיר בוויטמינים",
        "p2_f3": "אידיאלי לירידה קלה במשקל",
        "p2_btn": "קבל גישה לסלטים טעימים",
        
        "p3_title": "ספר מתכונים לחולי סוכרת",
        "p3_desc": "תזונה טעימה וחכמה לניהול סוכרת.",
        "p3_badge": "בריאות",
        "p3_f1": "שליטה גליקמית בריאה",
        "p3_f2": "מתכונים בעלי אינדקס גליקמי נמוך",
        "p3_f3": "אפשרויות מתוקות ללא סוכר",
        "p3_btn": "קבל גישה לספר המתכונים",
        
        "p4_title": "חבילת מתכוני דיאטת GLP-1",
        "p4_desc": "השלם את מסע הבריאות שלך, חילוף החומרים ודיאטת GLP-1.",
        "p4_badge": "חילוף חומרים",
        "p4_f1": "מיקסום אימונים",
        "p4_f2": "שמירה על מסת שריר",
        "p4_f3": "מתכונים משביעים",
        "p4_btn": "קבל גישה לחבילת GLP-1"
    },
    "ru": {
        "dir": "bible1-ru-members",
        "lang_code": "ru",
        "html_title": "Личный кабинет",
        "tab_books": "Книги",
        "tab_products": "Продукты",
        "tab_contact": "Контакты",
        
        "brandName": "Руководство и рабочая тетрадь по Тай-чи",
        "emailSubject": "Вопрос о доступе к курсу (Тай-чи)",
        "emailBodyTemplate": "Здравствуйте, служба поддержки! Мне нужна помощь с личным кабинетом.%0A%0AМеня зовут: ______.",
        
        "v1_title": "Тай-чи - Урок 1 (Основы)",
        "v2_title": "Тай-чи - Урок 2 (Дыхание)",
        
        "b1_title": "Тай-чи для пожилых людей",
        "b1_desc": "Полная 28-дневная программа с мягкими упражнениями для баланса, подвижности, облегчения болей в суставах, дыхательными техниками и 10-минутной ежедневной рутиной.",
        "b1_badge": "ГЛАВНАЯ КНИГА",
        "b1_f1": "28-дневная прогрессивная программа",
        "b1_f2": "10-минутная ежедневная рутина",
        "b1_f3": "Пошаговые иллюстрации",
        "b1_btn": "Скачать Тай-чи для пожилых людей",
        
        "b2_title": "Тай-чи для похудения",
        "b2_desc": "Узнайте, как движения Тай-чи могут безопасно ускорить метаболизм и повысить уровень энергии — без интенсивных тренировок.",
        "b2_badge": "БОНУС #1",
        "b2_f1": "Движения, ускоряющие метаболизм",
        "b2_f2": "Последовательности для повышения энергии",
        "b2_f3": "Советы по питанию и движению",
        "b2_btn": "Скачать бонус для похудения",
        
        "b3_title": "Тай-чи для начинающих",
        "b3_desc": "Начните с нуля уверенно. Изучите основы Тай-чи с простой 7-дневной стартовой программой.",
        "b3_badge": "БОНУС #2",
        "b3_f1": "История и философия Тай-чи",
        "b3_f2": "Базовые стойки и движения",
        "b3_f3": "7-дневная стартовая программа",
        "b3_f4": "Частые ошибки, которых стоит избегать",
        "b3_btn": "Скачать руководство для начинающих",
        
        "b4_title": "Упрощенная форма 24",
        "b4_desc": "Освойте самую популярную последовательность в мире с подробным разбором всех 24 движений.",
        "b4_badge": "БОНУС #3",
        "b4_f1": "Полная форма из 24 поз",
        "b4_f2": "Переходы и советы по плавности",
        "b4_f3": "Лист для практики для печати",
        "b4_btn": "Скачать бонус Форма 24",
        
        "p1_title": "Комплект для естественного исцеления",
        "p1_desc": "Полное руководство по натуральной терапии и исцелению тела.",
        "p1_badge": "ОЗДОРОВЛЕНИЕ",
        "p1_f1": "Полное руководство по исцелению",
        "p1_f2": "Альтернативные и натуральные методы",
        "p1_f3": "Снижение стресса и профилактика",
        "p1_btn": "Получить доступ к комплекту"
        ,
        "p2_title": "Вкусные салаты",
        "p2_desc": "Практичные, вкусные и суперполезные рецепты салатов.",
        "p2_badge": "ПИТАНИЕ",
        "p2_f1": "Быстрые и практичные рецепты",
        "p2_f2": "Богатое витаминами меню",
        "p2_f3": "Идеально для легкого похудения",
        "p2_btn": "Получить доступ к Вкусным салатам",
        
        "p3_title": "Книга рецептов для диабетиков",
        "p3_desc": "Вкусное и умное питание для контроля диабета.",
        "p3_badge": "ЗДОРОВЬЕ",
        "p3_f1": "Здоровый гликемический контроль",
        "p3_f2": "Рецепты с низким гликемическим индексом",
        "p3_f3": "Сладкие варианты без сахара",
        "p3_btn": "Получить доступ к книге рецептов",
        
        "p4_title": "Комплект рецептов для диеты GLP-1",
        "p4_desc": "Дополните свой путь к здоровью, метаболизм и диету на основе GLP-1.",
        "p4_badge": "МЕТАБОЛИЗМ",
        "p4_f1": "Максимизация тренировок",
        "p4_f2": "Сохранение мышечной массы",
        "p4_f3": "Сытные рецепты",
        "p4_btn": "Получить доступ к комплекту GLP-1"
    },
    "el": {
        "dir": "bible1-el-members",
        "lang_code": "el",
        "html_title": "Περιοχή Μελών",
        "tab_books": "Βιβλία",
        "tab_products": "Προϊόντα",
        "tab_contact": "Επικοινωνία",
        
        "brandName": "Οδηγός και Βιβλίο Ασκήσεων Τάι Τσι",
        "emailSubject": "Ερώτηση σχετικά με την πρόσβαση στο μάθημα (Τάι Τσι)",
        "emailBodyTemplate": "Γεια σας ομάδα υποστήριξης! Θα ήθελα βοήθεια με την περιοχή μελών μου.%0A%0AΤο όνομά μου είναι: ______.",
        
        "v1_title": "Τάι Τσι - Μάθημα 1 (Βασικές αρχές)",
        "v2_title": "Τάι Τσι - Μάθημα 2 (Αναπνοή)",
        
        "b1_title": "Τάι Τσι για Ηλικιωμένους",
        "b1_desc": "Πλήρες πρόγραμμα 28 ημερών με ήπιες ασκήσεις για ισορροπία, κινητικότητα, ανακούφιση των αρθρώσεων, τεχνικές αναπνοής και καθημερινή ρουτίνα 10 λεπτών.",
        "b1_badge": "ΚΥΡΙΟ ΒΙΒΛΙΟ",
        "b1_f1": "Προοδευτικό πρόγραμμα 28 ημερών",
        "b1_f2": "Καθημερινή ρουτίνα 10 λεπτών",
        "b1_f3": "Εικονογραφήσεις βήμα-προς-βήμα",
        "b1_btn": "Λήψη του Τάι Τσι για Ηλικιωμένους",
        
        "b2_title": "Τάι Τσι για Απώλεια Βάρους",
        "b2_desc": "Ανακαλύψτε πώς οι κινήσεις του Τάι Τσι μπορούν να ενισχύσουν τον μεταβολισμό και την ενέργειά σας με ασφάλεια — χωρίς έντονες προπονήσεις.",
        "b2_badge": "ΜΠΟΝΟΥΣ #1",
        "b2_f1": "Κινήσεις ενίσχυσης του μεταβολισμού",
        "b2_f2": "Ακολουθίες δημιουργίας ενέργειας",
        "b2_f3": "Συμβουλές διατροφής & κίνησης",
        "b2_btn": "Λήψη μπόνους Απώλειας Βάρους",
        
        "b3_title": "Τάι Τσι για Αρχάριους",
        "b3_desc": "Ξεκινήστε από το μηδέν με αυτοπεποίθηση. Μάθετε τις βασικές αρχές του Τάι Τσι με μια απλή ρουτίνα 7 ημερών.",
        "b3_badge": "ΜΠΟΝΟΥΣ #2",
        "b3_f1": "Ιστορία και Φιλοσοφία του Τάι Τσι",
        "b3_f2": "Βασικές στάσεις και κινήσεις",
        "b3_f3": "Ρουτίνα αρχαρίων 7 ημερών",
        "b3_f4": "Κοινά λάθη προς αποφυγή",
        "b3_btn": "Λήψη Οδηγού για Αρχάριους",
        
        "b4_title": "Η Απλοποιημένη Φόρμα 24",
        "b4_desc": "Μάθετε την πιο δημοφιλή ακολουθία παγκοσμίως με λεπτομερή ανάλυση και των 24 κινήσεων.",
        "b4_badge": "ΜΠΟΝΟΥΣ #3",
        "b4_f1": "Πλήρης Φόρμα 24 Στάσεων",
        "b4_f2": "Μεταβάσεις & Συμβουλές Ροής",
        "b4_f3": "Εκτυπώσιμο φύλλο εξάσκησης",
        "b4_btn": "Λήψη Μπόνους Φόρμας 24",
        
        "p1_title": "Πακέτο Φυσικής Θεραπείας",
        "p1_desc": "Ένας πλήρης οδηγός για φυσικές θεραπείες και επούλωση σώματος.",
        "p1_badge": "ΕΥΕΞΙΑ",
        "p1_f1": "Πλήρης οδηγός θεραπείας",
        "p1_f2": "Εναλλακτικές και φυσικές θεραπείες",
        "p1_f3": "Μείωση άγχους και πρόληψη",
        "p1_btn": "Πρόσβαση στο Πακέτο Φυσικής Θεραπείας",
        
        "p2_title": "Νόστιμες Σαλάτες",
        "p2_desc": "Πρακτικές, νόστιμες και πολύ υγιεινές συνταγές για σαλάτες.",
        "p2_badge": "ΔΙΑΤΡΟΦΗ",
        "p2_f1": "Γρήγορες και πρακτικές συνταγές",
        "p2_f2": "Μενού πλούσιο σε βιταμίνες",
        "p2_f3": "Ιδανικό για ελαφριά απώλεια βάρους",
        "p2_btn": "Πρόσβαση στις Νόστιμες Σαλάτες",
        
        "p3_title": "Βιβλίο Συνταγών για Διαβητικούς",
        "p3_desc": "Νόστιμη και έξυπνη διατροφή για τη διαχείριση του διαβήτη.",
        "p3_badge": "ΥΓΕΙΑ",
        "p3_f1": "Υγιής γλυκαιμικός έλεγχος",
        "p3_f2": "Συνταγές χαμηλού γλυκαιμικού δείκτη",
        "p3_f3": "Γλυκές επιλογές χωρίς ζάχαρη",
        "p3_btn": "Πρόσβαση στο Βιβλίο Συνταγών",
        
        "p4_title": "Πακέτο Συνταγών Διατροφής GLP-1",
        "p4_desc": "Συμπληρώστε το ταξίδι υγείας σας, τον μεταβολισμό και τη δίαιτα GLP-1.",
        "p4_badge": "ΜΕΤΑΒΟΛΙΣΜΟΣ",
        "p4_f1": "Μεγιστοποίηση προπόνησης",
        "p4_f2": "Διατήρηση άλιπης μάζας",
        "p4_f3": "Συνταγές κορεσμού",
        "p4_btn": "Πρόσβαση στο Πακέτο GLP-1"
    },
    "uk": {
        "dir": "bible1-uk-members",
        "lang_code": "uk",
        "html_title": "Особистий кабінет",
        "tab_books": "Книги",
        "tab_products": "Продукти",
        "tab_contact": "Контакти",
        
        "brandName": "Посібник та робочий зошит з Тай-цзі",
        "emailSubject": "Запитання щодо доступу до курсу (Тай-цзі)",
        "emailBodyTemplate": "Вітаю, служба підтримки! Мені потрібна допомога з моїм особистим кабінетом.%0A%0AМене звати: ______.",
        
        "v1_title": "Тай-цзі - Урок 1 (Основи)",
        "v2_title": "Тай-цзі - Урок 2 (Дихання)",
        
        "b1_title": "Тай-цзі для літніх людей",
        "b1_desc": "Повна 28-денна програма з м'якими вправами для балансу, рухливості, полегшення болю в суглобах, дихальними техніками та 10-хвилинною щоденною рутиною.",
        "b1_badge": "ГОЛОВНА КНИГА",
        "b1_f1": "28-денна прогресивна програма",
        "b1_f2": "10-хвилинна щоденна рутина",
        "b1_f3": "Покрокові ілюстрації",
        "b1_btn": "Завантажити Тай-цзі для літніх людей",
        
        "b2_title": "Тай-цзі для схуднення",
        "b2_desc": "Дізнайтеся, як рухи Тай-цзі можуть безпечно прискорити метаболізм і підвищити рівень енергії — без інтенсивних тренувань.",
        "b2_badge": "БОНУС #1",
        "b2_f1": "Рухи, що прискорюють метаболізм",
        "b2_f2": "Послідовності для підвищення енергії",
        "b2_f3": "Поради щодо харчування та руху",
        "b2_btn": "Завантажити бонус для схуднення",
        
        "b3_title": "Тай-цзі для початківців",
        "b3_desc": "Почніть з нуля впевнено. Вивчіть основи Тай-цзі з простою 7-денною стартовою програмою.",
        "b3_badge": "БОНУС #2",
        "b3_f1": "Історія та філософія Тай-цзі",
        "b3_f2": "Базові стійки та рухи",
        "b3_f3": "7-денна стартова програма",
        "b3_f4": "Часті помилки, яких варто уникати",
        "b3_btn": "Завантажити посібник для початківців",
        
        "b4_title": "Спрощена форма 24",
        "b4_desc": "Опануйте найпопулярнішу послідовність у світі з детальним розбором усіх 24 рухів.",
        "b4_badge": "БОНУС #3",
        "b4_f1": "Повна форма з 24 поз",
        "b4_f2": "Переходи та поради щодо плавності",
        "b4_f3": "Аркуш для практики для друку",
        "b4_btn": "Завантажити бонус Форма 24",
        
        "p1_title": "Комплект для природного зцілення",
        "p1_desc": "Повний посібник з натуральної терапії та зцілення тіла.",
        "p1_badge": "ОЗДОРОВЛЕННЯ",
        "p1_f1": "Повний посібник із зцілення",
        "p1_f2": "Альтернативні та природні методи",
        "p1_f3": "Зниження стресу та профілактика",
        "p1_btn": "Отримати доступ до комплекту",
        
        "p2_title": "Смачні салати",
        "p2_desc": "Практичні, смачні та суперкорисні рецепти салатів.",
        "p2_badge": "ХАРЧУВАННЯ",
        "p2_f1": "Швидкі та практичні рецепти",
        "p2_f2": "Багате на вітаміни меню",
        "p2_f3": "Ідеально для легкого схуднення",
        "p2_btn": "Отримати доступ до Смачних салатів",
        
        "p3_title": "Книга рецептів для діабетиків",
        "p3_desc": "Смачне та розумне харчування для контролю діабету.",
        "p3_badge": "ЗДОРОВ'Я",
        "p3_f1": "Здоровий глікемічний контроль",
        "p3_f2": "Рецепти з низьким глікемічним індексом",
        "p3_f3": "Солодкі варіанти без цукру",
        "p3_btn": "Отримати доступ до книги рецептів",
        
        "p4_title": "Комплект рецептів для дієти GLP-1",
        "p4_desc": "Доповніть свій шлях до здоров'я, метаболізм і дієту на основі GLP-1.",
        "p4_badge": "МЕТАБОЛІЗМ",
        "p4_f1": "Максимізація тренувань",
        "p4_f2": "Збереження м'язової маси",
        "p4_f3": "Ситні рецепти",
        "p4_btn": "Отримати доступ до комплекту GLP-1"
    },
    "ar": {
        "dir": "bible1-ar-members",
        "lang_code": "ar",
        "html_title": "منطقة الأعضاء",
        "tab_books": "الكتب",
        "tab_products": "المنتجات",
        "tab_contact": "اتصل بنا",
        
        "brandName": "دليل وكتاب تمارين تاي تشي",
        "emailSubject": "سؤال حول الوصول إلى الدورة (تاي تشي)",
        "emailBodyTemplate": "مرحبًا فريق الدعم! أود المساعدة في منطقة الأعضاء الخاصة بي.%0A%0Aاسمي هو: ______.",
        
        "v1_title": "تاي تشي - الدرس 1 (الأساسيات)",
        "v2_title": "تاي تشي - الدرس 2 (التنفس)",
        
        "b1_title": "تاي تشي لكبار السن",
        "b1_desc": "برنامج كامل لمدة 28 يومًا مع تمارين لطيفة للتوازن والحركة وتخفيف آلام المفاصل وتقنيات التنفس وروتين يومي لمدة 10 دقائق.",
        "b1_badge": "الكتاب الرئيسي",
        "b1_f1": "برنامج تدريجي لمدة 28 يومًا",
        "b1_f2": "روتين يومي لمدة 10 دقائق",
        "b1_f3": "رسوم توضيحية خطوة بخطوة",
        "b1_btn": "تحميل تاي تشي لكبار السن",
        
        "b2_title": "تاي تشي لفقدان الوزن",
        "b2_desc": "اكتشف كيف يمكن لحركات تاي تشي تعزيز عملية التمثيل الغذائي ومستويات الطاقة بأمان - دون الحاجة لتمارين مكثفة.",
        "b2_badge": "مكافأة #1",
        "b2_f1": "حركات لتعزيز الأيض",
        "b2_f2": "تسلسلات لبناء الطاقة",
        "b2_f3": "نصائح لدمج النظام الغذائي والحركة",
        "b2_btn": "تحميل مكافأة فقدان الوزن",
        
        "b3_title": "تاي تشي للمبتدئين",
        "b3_desc": "ابدأ من الصفر بثقة. تعلم أساسيات تاي تشي من خلال روتين مبدئي بسيط لمدة 7 أيام.",
        "b3_badge": "مكافأة #2",
        "b3_f1": "تاريخ وفلسفة تاي تشي",
        "b3_f2": "الوضعيات والحركات الأساسية",
        "b3_f3": "روتين المبتدئين لمدة 7 أيام",
        "b3_f4": "الأخطاء الشائعة لتجنبها",
        "b3_btn": "تحميل دليل المبتدئين",
        
        "b4_title": "النموذج 24 المبسط",
        "b4_desc": "أتقن التسلسل الأكثر شعبية عالميًا مع تفصيل دقيق لجميع الحركات الـ 24.",
        "b4_badge": "مكافأة #3",
        "b4_f1": "نموذج 24 وضعية كامل",
        "b4_f2": "الانتقالات ونصائح الانسيابية",
        "b4_f3": "ورقة تدريب قابلة للطباعة",
        "b4_btn": "تحميل مكافأة النموذج 24",
        
        "p1_title": "حزمة الشفاء الطبيعي",
        "p1_desc": "دليل شامل للعلاجات الطبيعية وشفاء الجسم.",
        "p1_badge": "العافية",
        "p1_f1": "دليل شفاء كامل",
        "p1_f2": "العلاجات البديلة والطبيعية",
        "p1_f3": "الحد من التوتر والوقاية",
        "p1_btn": "الوصول إلى حزمة الشفاء",
        
        "p2_title": "سلطات لذيذة",
        "p2_desc": "وصفات سلطات عملية ولذيذة وصحية للغاية.",
        "p2_badge": "التغذية",
        "p2_f1": "وصفات سريعة وعملية",
        "p2_f2": "قائمة غنية بالفيتامينات",
        "p2_f3": "مثالي لفقدان الوزن الخفيف",
        "p2_btn": "الوصول إلى السلطات اللذيذة",
        
        "p3_title": "كتاب طبخ لمرضى السكري",
        "p3_desc": "تغذية لذيذة وذكية لإدارة مرض السكري.",
        "p3_badge": "الصحة",
        "p3_f1": "التحكم الصحي في نسبة السكر",
        "p3_f2": "وصفات منخفضة المؤشر الجلايسيمي",
        "p3_f3": "خيارات حلوة بدون سكر",
        "p3_btn": "الوصول إلى كتاب الطبخ",
        
        "p4_title": "حزمة وصفات حمية GLP-1",
        "p4_desc": "أكمل رحلتك الصحية وعملية الأيض وحمية GLP-1.",
        "p4_badge": "التمثيل الغذائي",
        "p4_f1": "زيادة كفاءة التمرين",
        "p4_f2": "الحفاظ على كتلة العضلات",
        "p4_f3": "وصفات مشبعة",
        "p4_btn": "الوصول إلى حزمة GLP-1"
    }
}

html_replacements = [
    ('lang="pt-BR"', 'lang="{lang_code}"'),
    ('<title>Members Area</title>', '<title>{html_title}</title>'),
    ('<span>Books</span>', '<span>{tab_books}</span>'),
    ('<span>Products</span>', '<span>{tab_products}</span>'),
    ('<span>Contact</span>', '<span>{tab_contact}</span>'),
]

if __name__ == "__main__":
    with open(os.path.join(template_dir, "index.html"), "r", encoding="utf-8") as f:
        html_template = f.read()
    with open(os.path.join(template_dir, "data.js"), "r", encoding="utf-8") as f:
        data_template = f.read()

    for lang, trans in languages.items():
        target_dir = os.path.join(base_dir, trans["dir"])
        if os.path.exists(target_dir):
            shutil.rmtree(target_dir)
        shutil.copytree(template_dir, target_dir)
        
        # Adjust index.html
        html_content = html_template
        for old, new in html_replacements:
            html_content = html_content.replace(old, new.format(**trans))
            
        # Optional: For RTL languages (Arabic, Hebrew) you might want to add dir="rtl" to <html>
        if lang in ["ar", "he"]:
            html_content = html_content.replace('<html lang="{lang_code}">'.format(lang_code=trans["lang_code"]), '<html lang="{lang_code}" dir="rtl">'.format(lang_code=trans["lang_code"]))

        with open(os.path.join(target_dir, "index.html"), "w", encoding="utf-8") as f:
            f.write(html_content)
            
        # Adjust data.js
        data_content = data_template
        data_content = data_content.replace('brandName: "Bible Guide & Workbook"', 'brandName: "{brandName}"'.format(**trans))
        data_content = data_content.replace('emailSubject: "Question about course access (Tai Chi)"', 'emailSubject: "{emailSubject}"'.format(**trans))
        data_content = data_content.replace('emailBodyTemplate: "Hello support team! I would like help with my members area.%0A%0AMy name is: ______."', 'emailBodyTemplate: "{emailBodyTemplate}"'.format(**trans))
        
        # Videos
        data_content = data_content.replace('title: "Tai Chi - Class 1 (Fundamentals)"', 'title: "{v1_title}"'.format(**trans))
        data_content = data_content.replace('title: "Tai Chi - Class 2 (Breathing)"', 'title: "{v2_title}"'.format(**trans))
        
        # Book 1
        data_content = data_content.replace('title: "Tai Chi for Seniors"', 'title: "{b1_title}"'.format(**trans))
        data_content = data_content.replace('description: "Complete 28-day program with gentle exercises for balance, mobility, joint relief, breathing techniques, and a 10-minute daily routine."', 'description: "{b1_desc}"'.format(**trans))
        data_content = data_content.replace('badgeText: "MAIN BOOK"', 'badgeText: "{b1_badge}"'.format(**trans))
        data_content = data_content.replace('"28-Day Progressive Program"', '"{b1_f1}"'.format(**trans))
        data_content = data_content.replace('"10-Minute Daily Routine"', '"{b1_f2}"'.format(**trans))
        data_content = data_content.replace('"Step-by-Step Illustrations"', '"{b1_f3}"'.format(**trans))
        data_content = data_content.replace('buttonText: "Download Tai Chi for Seniors"', 'buttonText: "{b1_btn}"'.format(**trans))
        
        # Book 2
        data_content = data_content.replace('title: "Tai Chi for Weight Loss"', 'title: "{b2_title}"'.format(**trans))
        data_content = data_content.replace('description: "Discover how Tai Chi movements can boost your metabolism and energy levels safely — no intense workouts needed."', 'description: "{b2_desc}"'.format(**trans))
        data_content = data_content.replace('badgeText: "BONUS #1"', 'badgeText: "{b2_badge}"'.format(**trans))
        data_content = data_content.replace('"Metabolism-Boosting Movements"', '"{b2_f1}"'.format(**trans))
        data_content = data_content.replace('"Energy-Building Sequences"', '"{b2_f2}"'.format(**trans))
        data_content = data_content.replace('"Diet & Movement Synergy Tips"', '"{b2_f3}"'.format(**trans))
        data_content = data_content.replace('buttonText: "Download Weight Loss Bonus"', 'buttonText: "{b2_btn}"'.format(**trans))
        
        # Book 3
        data_content = data_content.replace('title: "Tai Chi for Beginners"', 'title: "{b3_title}"'.format(**trans))
        data_content = data_content.replace('description: "Start from zero with confidence. Learn the fundamentals of Tai Chi with a simple 7-day starter routine."', 'description: "{b3_desc}"'.format(**trans))
        data_content = data_content.replace('badgeText: "BONUS #2"', 'badgeText: "{b3_badge}"'.format(**trans))
        data_content = data_content.replace('"History & Philosophy of Tai Chi"', '"{b3_f1}"'.format(**trans))
        data_content = data_content.replace('"Basic Stances & Movements"', '"{b3_f2}"'.format(**trans))
        data_content = data_content.replace('"7-Day Starter Routine"', '"{b3_f3}"'.format(**trans))
        data_content = data_content.replace('"Common Mistakes to Avoid"', '"{b3_f4}"'.format(**trans))
        data_content = data_content.replace('buttonText: "Download Beginners Guide"', 'buttonText: "{b3_btn}"'.format(**trans))
        
        # Book 4
        data_content = data_content.replace('title: "The Simplified 24 Form"', 'title: "{b4_title}"'.format(**trans))
        data_content = data_content.replace('description: "Master the most popular sequence globally with detailed breakdown of all 24 movements."', 'description: "{b4_desc}"'.format(**trans))
        data_content = data_content.replace('badgeText: "BONUS #3"', 'badgeText: "{b4_badge}"'.format(**trans))
        data_content = data_content.replace('"Complete 24 Postures Form"', '"{b4_f1}"'.format(**trans))
        data_content = data_content.replace('"Transitions & Flow Tips"', '"{b4_f2}"'.format(**trans))
        data_content = data_content.replace('"Printable Practice Sheet"', '"{b4_f3}"'.format(**trans))
        data_content = data_content.replace('buttonText: "Download 24 Form Bonus"', 'buttonText: "{b4_btn}"'.format(**trans))
        
        # Product 1
        data_content = data_content.replace('title: "The Natural Healing Bundle"', 'title: "{p1_title}"'.format(**trans))
        data_content = data_content.replace('description: "A complete guide to natural therapies and body healing."', 'description: "{p1_desc}"'.format(**trans))
        data_content = data_content.replace('badgeText: "WELLNESS"', 'badgeText: "{p1_badge}"'.format(**trans))
        data_content = data_content.replace('"Complete Healing Guide"', '"{p1_f1}"'.format(**trans))
        data_content = data_content.replace('"Alternative and Natural Therapies"', '"{p1_f2}"'.format(**trans))
        data_content = data_content.replace('"Stress Reduction and Prevention"', '"{p1_f3}"'.format(**trans))
        data_content = data_content.replace('buttonText: "Access Natural Healing Bundle"', 'buttonText: "{p1_btn}"'.format(**trans))
        
        # Product 2
        data_content = data_content.replace('title: "Delicious Salads"', 'title: "{p2_title}"'.format(**trans))
        data_content = data_content.replace('description: "Practical, delicious, and super healthy salad recipes."', 'description: "{p2_desc}"'.format(**trans))
        data_content = data_content.replace('badgeText: "NUTRIÇÃO"', 'badgeText: "{p2_badge}"'.format(**trans))
        data_content = data_content.replace('"Quick and Practical Recipes"', '"{p2_f1}"'.format(**trans))
        data_content = data_content.replace('"Vitamin-Rich Menu"', '"{p2_f2}"'.format(**trans))
        data_content = data_content.replace('"Ideal for Light Weight Loss"', '"{p2_f3}"'.format(**trans))
        data_content = data_content.replace('buttonText: "Access Delicious Salads"', 'buttonText: "{p2_btn}"'.format(**trans))
        
        # Product 3
        data_content = data_content.replace('title: "Diabetic Cookbook"', 'title: "{p3_title}"'.format(**trans))
        data_content = data_content.replace('description: "Tasty and smart eating for diabetes management."', 'description: "{p3_desc}"'.format(**trans))
        data_content = data_content.replace('badgeText: "SAÚDE"', 'badgeText: "{p3_badge}"'.format(**trans))
        data_content = data_content.replace('"Healthy Glycemic Control"', '"{p3_f1}"'.format(**trans))
        data_content = data_content.replace('"Low Glycemic Index Recipes"', '"{p3_f2}"'.format(**trans))
        data_content = data_content.replace('"Sugar-Free Sweet Options"', '"{p3_f3}"'.format(**trans))
        data_content = data_content.replace('buttonText: "Access Diabetic Cookbook"', 'buttonText: "{p3_btn}"'.format(**trans))
        
        # Product 4
        data_content = data_content.replace('title: "GLP-1 Diet Cookbook Bundle"', 'title: "{p4_title}"'.format(**trans))
        data_content = data_content.replace('description: "Complement your health journey, metabolism, and GLP-1-based diet."', 'description: "{p4_desc}"'.format(**trans))
        data_content = data_content.replace('badgeText: "METABOLISMO"', 'badgeText: "{p4_badge}"'.format(**trans))
        data_content = data_content.replace('"Workout Maximization"', '"{p4_f1}"'.format(**trans))
        data_content = data_content.replace('"Lean Mass Maintenance"', '"{p4_f2}"'.format(**trans))
        data_content = data_content.replace('"Satiating Recipes"', '"{p4_f3}"'.format(**trans))
        data_content = data_content.replace('buttonText: "Access GLP-1 Bundle"', 'buttonText: "{p4_btn}"'.format(**trans))

        with open(os.path.join(target_dir, "data.js"), "w", encoding="utf-8") as f:
            f.write(data_content)
        
        print(f"Created {target_dir}")
