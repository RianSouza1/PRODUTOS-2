/**
 * Militär Kalistenik för Män — Medlemsområde (Svenska)
 */

const APP_DATA = {
    config: {
        brandName: "Militär Kalistenik för Män",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Supportbegäran om åtkomst (Militär Kalistenik för Män)",
        emailBodyTemplate: "Hej supportteamet! Jag vill be om hjälp med min åtkomst till medlemsområdet för Militär Kalistenik för Män.\n\nMitt namn är: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
                "id": "v1",
                "title": "Klassiska Armhävningar (Överkroppsstyrka)",
                "duration": "0:25 • Grundläggande teknik",
                "category": "Överkropp & Bröst",
                "obs": "Sidodemonstration med korrekt hållning och armbågsposition.",
                "videoUrl": "https://videos.pexels.com/video-files/6893306/6893306-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v2",
                "title": "Sidoplanka för Bål & Core",
                "duration": "0:20 • Core & Stabilitet",
                "category": "Bål & Stabilitet",
                "obs": "Stärk bålmuskler och skydda lederna.",
                "videoUrl": "https://videos.pexels.com/video-files/6023266/6023266-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v3",
                "title": "Fyrfota Stabilisering (Bird-Dog)",
                "duration": "0:30 • Skonsam ryggövning",
                "category": "Hållning & Ländrygg",
                "obs": "Utmärkt för ländryggens avlastning och djup bålstabilitet.",
                "videoUrl": "https://videos.pexels.com/video-files/9058239/9058239-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v4",
                "title": "Jumping Jacks (Militär Cardio & Uppvärmning)",
                "duration": "0:15 • Kondition & Förbränning",
                "category": "Uppvärmning & Cardio",
                "obs": "Kardiovaskulär aktivering och kaloriförbränning.",
                "videoUrl": "https://videos.pexels.com/video-files/7299359/7299359-uhd_2160_3840_30fps.mp4"
        },
        {
                "id": "v5",
                "title": "Höftcirklar & Ledrörlighet",
                "duration": "0:25 • Smidighet i höfterna",
                "category": "Ledrörlighet & Höfter",
                "obs": "Frigör höftleden för bättre rörelseomfång och rörlighet.",
                "videoUrl": "https://videos.pexels.com/video-files/9058019/9058019-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v6",
                "title": "Baksidebensstretch & Tåvidröring",
                "duration": "0:20 • Flexibilitet & Återhämtning",
                "category": "Stretching & Flexibilitet",
                "obs": "Stretching av baksida lår och förebyggande av ländryggsbesvär.",
                "videoUrl": "https://videos.pexels.com/video-files/6891847/6891847-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v7",
                "title": "Axel- och Bröströrlighet",
                "duration": "0:20 • Öppna upp bröstryggen",
                "category": "Överkroppsrörlighet",
                "obs": "Öppna upp bröstryggen och avlasta spänningar i axlarna.",
                "videoUrl": "https://videos.pexels.com/video-files/7319946/7319946-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v8",
                "title": "Häng i Räck (Dead Hang & Greppstyrka)",
                "duration": "0:20 • Avlastning av ryggraden",
                "category": "Greppstyrka & Ryggrad",
                "obs": "Avlastning av ryggraden och stärkande av underarmarna.",
                "videoUrl": "https://videos.pexels.com/video-files/10476557/10476557-uhd_4096_2160_25fps.mp4"
        }
],

    books: [
        {
            id: "b1",
            title: "Militär Kalistenik för Män Över 40 — 28-Dagarsutmaningen (Del 1)",
            description: "Bygg funktionell styrka, rörlighet och uthållighet med 15 minuter per dag utan gym. Ett komplett 28-dagarsprogram med militära kroppsviktsövningar för män över 40.",
            badgeText: "28-Dagarsutmaning",
            badgeColor: "#c45329",
            features: [
                "15 minuter per dag militära kroppsviktsövningar",
                "Specialanpassat för ledhälsa och rörlighet för män 40+",
                "Inget gym, ingen dyr utrustning och inga ursäkter"
            ],
            downloadUrl: "materials/MAN-1-SV.pdf",
            coverImage: "assets/covers/man_IMG1_sv.png",
            buttonText: "Ladda ner Del 1 (PDF)"
        },
        {
            id: "b2",
            title: "Military Functional Fitness Workout — Det 9-Veckors Taktiska Protokollet (Del 2)",
            description: "Avancerat taktiskt program för maximal uthållighet, axel- och bålstabilitet samt effektiv fettförbränning med egen kroppsvikt.",
            badgeText: "9-Veckors Protokoll",
            badgeColor: "#3b5940",
            features: [
                "Progressivt 9-veckors taktiskt träningsschema för hela kroppen",
                "Militära funktionella rutiner för styrka, kondition och fettförbränning",
                "Optimal återhämtning och skadeförebyggande träning"
            ],
            downloadUrl: "materials/MAN-2-SV.pdf",
            coverImage: "assets/covers/man_IMG1_sv.png",
            buttonText: "Ladda ner Huvudguide (Del 2)"
        },
        {
            id: "b3",
            title: "Military Calisthenics Workout för Män Över 50 (Del 3)",
            description: "Bygg styrka, balans, rörlighet och en hållbar kondition — hemma eller utomhus, utan gym. Anpassat för män från 50 år och uppåt med fokus på vitalitet och ledskydd.",
            badgeText: "Män 50+",
            badgeColor: "#1b2a3a",
            features: [
                "Fokus på styrka, balans, rörlighet och hållbar kondition",
                "Säkra och effektiva kroppsviktsövningar för män 50+",
                "Långsiktigt ledskydd och maximal energi i vardagen"
            ],
            downloadUrl: "materials/MAN-3-SV.pdf",
            coverImage: "assets/covers/man_IMG1_sv.png",
            buttonText: "Ladda ner Del 3 (PDF)"
        }
    ],

    otherProducts: []
};
