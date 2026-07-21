/**
 * Survival & Bushcraft — Članska sekcija (Srpski)
 * Kompletna serija o preživljavanju i životu u prirodi
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pitanje o pristupu (Survival & Bushcraft)",
        emailBodyTemplate: "Zdravo timu za podršku. Potrebna mi je pomoć oko pristupa mojoj članskoj sekciji za Survival & Bushcraft.\n\nMoje ime je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Priručnik za Preživljavanje za Početnike — Izdanje 2026",
            description: "Voda, vatra, sklonište, signali za pomoć i osnovne tehnike u prirodi. Praktičan vodič za sve koji provode vreme u prirodi — planinari, kamperi, lovci ili obični avanturisti.",
            badgeText: "Glavni materijal",
            badgeColor: "#6B7C44",
            features: [
                "Pronalaženje, prečišćavanje i obezbeđivanje vode u divljini",
                "Paljenje vatre, pravljenje skloništa i slanje signala za pomoć",
                "U terenu proverene tehnike za početnike"
            ],
            downloadUrl: "materials/SURVIVOR-1-SR.pdf",
            coverImage: "assets/covers/sur_IMG1_sr.png",
            buttonText: "Preuzmi glavni materijal"
        },
        {
            id: "b2",
            title: "Технике за Живот у Природи и Шуми — Издање 2026",
            description: "Опрема, чворови, оријентација, bivouac технике и мудрост преживљавања у дивљини. Основне вештине за безбедан и самоуверен боравак у природи.",
            badgeText: "Bonus #1",
            badgeColor: "#7A5C3E",
            features: [
                "Савладајте алате, чворове и технике навигације",
                "Постављање логора и самостални живот у природи",
                "Корак по корак упутства за почетнике без искуства"
            ],
            downloadUrl: "materials/SURVIVOR-2-SR.pdf",
            coverImage: "assets/covers/sur_IMG1_sr.png",
            buttonText: "Preuzmi Bonus #1"
        },
        {
            id: "b3",
            title: "Припремљеност и Прва Помоћ за Вас и Вашу Породицу — Издање 2026",
            description: "Аваријни ранац за 72 сата, заштита од струјног удара, безбедна евакуација и како да заштитите своју породицу. Све што породице треба да знају у случају нужде.",
            badgeText: "Bonus #2",
            badgeColor: "#8B4513",
            features: [
                "Правилно састављање аваријног ранца за 72 сата",
                "Припрема за нестанак струје, евакуацију и кућну сигурност",
                "Основна прва помоћ за породице у ванредним ситуацијама"
            ],
            downloadUrl: "materials/SURVIVOR-3-SR.pdf",
            coverImage: "assets/covers/sur_IMG1_sr.png",
            buttonText: "Preuzmi Bonus #2"
        }
    ],

    otherProducts: []
};
