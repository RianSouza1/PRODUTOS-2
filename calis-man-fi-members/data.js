/**
 * Sotilaallinen Kalistenia Miehille — Jäsenalue (Suomi)
 */

const APP_DATA = {
    config: {
        brandName: "Sotilaallinen Kalistenia Miehille",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Tukipyyntö – pääsy jäsenalueelle (Sotilaallinen Kalistenia Miehille)",
        emailBodyTemplate: "Hei tukitiimi! Tarvitsen apua pääsyssäni Sotilaallinen Kalistenia Miehille -jäsenalueelle.\n\nNimeni on: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            "id": "v1",
            "title": "Perinteiset Punnerrukset / Push-ups (Ylävartalon Voima)",
            "duration": "0:25 • Perustekniikka",
            "category": "Ylävartalo & Rinta",
            "obs": "Sivukuvakulman demonstraatio oikealla selkärangan ja kyynärpäiden linjauksella.",
            "videoUrl": "https://videos.pexels.com/video-files/6893306/6893306-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v2",
            "title": "Kylkilankku / Side Plank (Keskivartalo & Vakaus)",
            "duration": "0:20 • Keskivartalo & Vakaus",
            "category": "Keskivartalo & Vatsa",
            "obs": "Vahvistaa syviä vatsalihaksia ja parantaa nivelten vakautta.",
            "videoUrl": "https://videos.pexels.com/video-files/6023266/6023266-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v3",
            "title": "Nelinkontin Vastasivun Nosto / Bird-Dog (Selän Hallinta)",
            "duration": "0:30 • Niveliä Säästävä Selkäharjoite",
            "category": "Ryhti & Alaselkä",
            "obs": "Erinomainen lannerangan paineen helpottamiseen ja syvien tukilihasten aktivointiin.",
            "videoUrl": "https://videos.pexels.com/video-files/9058239/9058239-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v4",
            "title": "Haarahypyt / Jumping Jacks (Sotilaallinen Cardio)",
            "duration": "0:15 • Kunto & Kalorinpoltto",
            "category": "Alkulämmittely & Cardio",
            "obs": "Sydän- ja verenkiertoelimistön aktivointi sekä tehokas koko kehon lämmittely.",
            "videoUrl": "https://videos.pexels.com/video-files/7299359/7299359-uhd_2160_3840_30fps.mp4"
        },
        {
            "id": "v5",
            "title": "Lonkan Pyöritykset & Nivelten Liikkuvuus",
            "duration": "0:25 • Lonkkien Avaus",
            "category": "Nivelten Liikkuvuus & Lonkat",
            "obs": "Avaa lonkkien liikelaajuutta ja edistää kivutonta liikkumista.",
            "videoUrl": "https://videos.pexels.com/video-files/9058019/9058019-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v6",
            "title": "Takareisien Venytys & Varpaiden Kosketus",
            "duration": "0:20 • Joustavuus & Palautuminen",
            "category": "Venytys & Joustavuus",
            "obs": "Pidentää takaketjun lihaksia ja ehkäisee alaselän jäykkyyttä.",
            "videoUrl": "https://videos.pexels.com/video-files/6891847/6891847-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v7",
            "title": "Hartioiden & Rinnan Avausliike",
            "duration": "0:20 • Rintarangan Avaus",
            "category": "Ylävartalon Liikkuvuus",
            "obs": "Avaa rintakehän ryhtiä ja vapauttaa jännitystä hartiaseudulta.",
            "videoUrl": "https://videos.pexels.com/video-files/7319946/7319946-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v8",
            "title": "Tankoriipunta / Dead Hang (Puristusvoima & Selkä)",
            "duration": "0:20 • Selkärangan Dekompressio",
            "category": "Puristusvoima & Selkä",
            "obs": "Vapauttaa selkärangan puristusta ja vahvistaa kyynärvarsien sekä puristuksen kestävyyttä.",
            "videoUrl": "https://videos.pexels.com/video-files/10476557/10476557-uhd_4096_2160_25fps.mp4"
        }
    ],

    books: [
        {
            id: "b1",
            title: "Sotilaallinen Kehonpainoharjoittelu Yli 40-vuotiaille Miehille — 28 Päivän Vahva Isä -haaste (Osa 1)",
            description: "Rakenna toiminnallista voimaa, liikkuvuutta ja kestävyyttä 15 minuutissa päivässä ilman kuntosalia. Täydellinen 28 päivän sotilaallinen kehonpainoharjoitteluohjelma, joka on räätälöity erityisesti yli 40-vuotiaille miehille.",
            badgeText: "28 Päivän Haaste",
            badgeColor: "#c45329",
            features: [
                "15 minuuttia päivässä armeijatason kehonpainotreenejä ilman kuntosalia",
                "Suunniteltu erityisesti nivelterveydelle, ryhdille ja liikkuvuudelle 40+ miehille",
                "Ei kuntosalijäsenyyksiä, ei kalliita varusteita eikä tekosyitä"
            ],
            downloadUrl: "materials/MAN-1-FI.pdf",
            coverImage: "assets/covers/man_IMG1_fi.png",
            buttonText: "Lataa Osa 1 (PDF)"
        },
        {
            id: "b2",
            title: "Sotilaallinen Toiminnallinen Kuntoharjoittelu — 9 Viikon Taktinen Protokolla (Osa 2)",
            description: "Edistynyt taktinen kehonpaino-ohjelma maksimaaliseen kestävyyteen, olkapäiden ja keskivartalon vakauteen sekä tehokkaaseen rasvanpolttoon missä ja milloin vain.",
            badgeText: "9 Viikon Protokolla",
            badgeColor: "#3b5940",
            features: [
                "Progressiivinen 9 viikon koko kehon taktinen treenisuunnitelma",
                "Armeijan toiminnalliset rutiinit sitkeyteen, keskivartalon voimaan ja rasvanpolttoon",
                "Optimoitu palautuminen ja vammojen ennaltaehkäisy"
            ],
            downloadUrl: "materials/MAN-2-FI.pdf",
            coverImage: "assets/covers/man_IMG1_fi.png",
            buttonText: "Lataa Pääopas (Osa 2)"
        },
        {
            id: "b3",
            title: "Sotilaallinen Kalistenia Yli 50-vuotiaille Miehille (Osa 3)",
            description: "Rakenna voimaa, tasapainoa, joustavuutta ja kestävää elinvoimaa — kotona tai ulkona ilman kuntosalia. Suunniteltu 50+ miehille painottaen pitkäikäisyyttä, niveliä ja päivittäistä energiaa.",
            badgeText: "Miehet 50+",
            badgeColor: "#1b2a3a",
            features: [
                "Kohdennettu painopiste toiminnalliseen voimaan, tasapainoon ja joustavuuteen",
                "Turvallisia ja erittäin tehokkaita kehonpainoliikkeitä yli 50-vuotiaille miehille",
                "Pitkäaikainen nivelten suojaus ja huipputason arjen jaksaminen"
            ],
            downloadUrl: "materials/MAN-3-FI.pdf",
            coverImage: "assets/covers/man_IMG1_fi.png",
            buttonText: "Lataa Osa 3 (PDF)"
        }
    ],

    otherProducts: []
};
