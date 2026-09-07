/**
 * Militaire Calisthenics voor Mannen — Ledengedeelte (Nederlands)
 */

const APP_DATA = {
    config: {
        brandName: "Militaire Calisthenics voor Mannen",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Ondersteuningsverzoek toegang (Militaire Calisthenics voor Mannen)",
        emailBodyTemplate: "Hallo ondersteuningsteam! Ik wil graag hulp vragen bij mijn toegang tot het ledengedeelte van Militaire Calisthenics voor Mannen.\n\nMijn naam is: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
                "id": "v1",
                "title": "Klassieke Push-ups (Bovenlichaamkracht)",
                "duration": "0:25 • Basistechniek",
                "category": "Bovenlichaam & Borst",
                "obs": "Zijaanzicht met correcte uitlijning van rug en ellebogen.",
                "videoUrl": "https://videos.pexels.com/video-files/6893306/6893306-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v2",
                "title": "Zijwaartse Plank voor Core & Stabiliteit",
                "duration": "0:20 • Core & Balans",
                "category": "Core & Stabiliteit",
                "obs": "Versterking van schuine buikspieren en gewrichtsbescherming.",
                "videoUrl": "https://videos.pexels.com/video-files/6023266/6023266-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v3",
                "title": "Vierpunt Stabilisatie (Bird-Dog)",
                "duration": "0:30 • Veilige rugoefening",
                "category": "Houding & Onderrug",
                "obs": "Uitstekend voor ontlasting van de onderrug en diepe core-activatie.",
                "videoUrl": "https://videos.pexels.com/video-files/9058239/9058239-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v4",
                "title": "Jumping Jacks (Militaire Cardio)",
                "duration": "0:15 • Uithoudingsvermogen",
                "category": "Warming-up & Cardio",
                "obs": "Cardiovasculaire activatie en calorieverbranding.",
                "videoUrl": "https://videos.pexels.com/video-files/7299359/7299359-uhd_2160_3840_30fps.mp4"
        },
        {
                "id": "v5",
                "title": "Heupcirkels & Gewrichtsmobiliteit",
                "duration": "0:25 • Soepelheid van heupen",
                "category": "Gewrichtsmobiliteit",
                "obs": "Verbetering van de heupflexibiliteit en bewegingsvrijheid.",
                "videoUrl": "https://videos.pexels.com/video-files/9058019/9058019-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v6",
                "title": "Hamstringstretch & Tenen Aantikken",
                "duration": "0:20 • Flexibiliteit & Herstel",
                "category": "Stretching & Flexibiliteit",
                "obs": "Stretching van hamstrings en preventie van rugklachten.",
                "videoUrl": "https://videos.pexels.com/video-files/6891847/6891847-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v7",
                "title": "Schouder- en Borstmobiliteit",
                "duration": "0:20 • Ontspanning van schouders",
                "category": "Schoudermobiliteit",
                "obs": "Borstopening en verlichting van spanning in de schouders.",
                "videoUrl": "https://videos.pexels.com/video-files/7319946/7319946-hd_1920_1080_25fps.mp4"
        },
        {
                "id": "v8",
                "title": "Hangen aan de Stang (Dead Hang & Gripkracht)",
                "duration": "0:20 • Decompressie van wervelkolom",
                "category": "Gripkracht & Wervelkolom",
                "obs": "Decompressie van de wervelkolom en versterking van de onderarmen.",
                "videoUrl": "https://videos.pexels.com/video-files/10476557/10476557-uhd_4096_2160_25fps.mp4"
        }
],

    books: [
        {
            id: "b1",
            title: "Militaire Calisthenics voor Mannen 40+ — 28 Dagen Challenge (Deel 1)",
            description: "Bouw functionele kracht, mobiliteit en uithoudingsvermogen op met 15 minuten per dag zonder sportschool. Een compleet 28-dagenprogramma met lichaamsgewichtoefeningen speciaal voor mannen boven de 40.",
            badgeText: "28 Dagen Challenge",
            badgeColor: "#c45329",
            features: [
                "15 minuten per dag militaire lichaamsgewichtoefeningen",
                "Speciaal afgestemd op gewrichtsbescherming voor mannen 40+",
                "Geen sportschool, geen dure apparatuur en geen excuses"
            ],
            downloadUrl: "materials/MAN-1-NL.pdf",
            coverImage: "assets/covers/man_IMG1_nl.png",
            buttonText: "Download Deel 1 (PDF)"
        },
        {
            id: "b2",
            title: "Military Functional Fitness Workout — Het 9-Weken Tactisch Protocol (Deel 2)",
            description: "Geavanceerd tactisch programma voor maximale conditie, schouder- en rompstabiliteit en effectieve vetverbranding met eigen lichaamsgewicht.",
            badgeText: "9-Weken Protocol",
            badgeColor: "#3b5940",
            features: [
                "Progressief 9-weken tactisch trainingsschema voor het hele lichaam",
                "Militaire functionele routines voor kracht, conditie en vetverbranding",
                "Optimale hersteltijd en blessurepreventieve opbouw"
            ],
            downloadUrl: "materials/MAN-2-NL.pdf",
            coverImage: "assets/covers/man_IMG1_nl.png",
            buttonText: "Download Hoofdgids (Deel 2)"
        },
        {
            id: "b3",
            title: "Military Calisthenics Workout voor Mannen 50+ (Deel 3)",
            description: "Bouw kracht, balans, mobiliteit en een duurzame conditie op — buiten of thuis, zonder sportschool. Aangepast voor mannen vanaf 50 jaar met focus op vitaliteit en gewrichtsbescherming.",
            badgeText: "Mannen 50+",
            badgeColor: "#1b2a3a",
            features: [
                "Focus op kracht, balans, mobiliteit en duurzame conditie",
                "Veilige en effectieve lichaamsgewichtoefeningen voor 50-plussers",
                "Duurzame gewrichtsbescherming en maximale energie in het dagelijks leven"
            ],
            downloadUrl: "materials/MAN-3-NL.pdf",
            coverImage: "assets/covers/man_IMG1_nl.png",
            buttonText: "Download Deel 3 (PDF)"
        }
    ],

    otherProducts: []
};
