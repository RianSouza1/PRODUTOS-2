/**
 * Katonai Kaliszténika Férfiaknak — Tagi Felület (Magyar)
 */

const APP_DATA = {
    config: {
        brandName: "Katonai Kaliszténika Férfiaknak",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Hozzáférési támogatás kérése (Katonai Kaliszténika Férfiaknak)",
        emailBodyTemplate: "Üdvözlet a támogató csapatnak! Szeretnék segítséget kérni a Katonai Kaliszténika Férfiaknak tagi felületéhez való hozzáférésemmel kapcsolatban.\n\nA nevem: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            "id": "v1",
            "title": "Klasszikus fekvőtámasz (Felsőtest ereje)",
            "duration": "0:25 • Alapvető technika",
            "category": "Felsőtest & Mellkas",
            "obs": "Oldalsó bemutató helyes testtartással és könyökpozícióval.",
            "videoUrl": "https://videos.pexels.com/video-files/6893306/6893306-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v2",
            "title": "Oldalsó plank (Törzserő & Stabilitás)",
            "duration": "0:20 • Törzs & Stabilitás",
            "category": "Törzs & Hasizmok",
            "obs": "A törzs mélyizmainak erősítése és az ízületek stabilitása.",
            "videoUrl": "https://videos.pexels.com/video-files/6023266/6023266-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v3",
            "title": "Keresztirányú végtagemelés négykézláb (Bird-Dog)",
            "duration": "0:30 • Ízületkímélő hátgyakorlat",
            "category": "Testtartás & Derék",
            "obs": "Kiváló a deréktáji gerinc tehermentesítésére és a mélyizmok stabilizálására.",
            "videoUrl": "https://videos.pexels.com/video-files/9058239/9058239-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v4",
            "title": "Terpeszugrás (Jumping Jacks — Katonai kardió & Bemelegítés)",
            "duration": "0:15 • Kondíció & Zsírégetés",
            "category": "Bemelegítés & Kardió",
            "obs": "Keringésfokozás és hatékony teljes testes bemelegítés.",
            "videoUrl": "https://videos.pexels.com/video-files/7299359/7299359-uhd_2160_3840_30fps.mp4"
        },
        {
            "id": "v5",
            "title": "Csípőkörzés & Ízületi mobilitás",
            "duration": "0:25 • Csípő lazítása",
            "category": "Ízületi mobilitás & Csípő",
            "obs": "A csípőízületek átmozgatása a jobb mozgástartományért és mobilitásért.",
            "videoUrl": "https://videos.pexels.com/video-files/9058019/9058019-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v6",
            "title": "Combhajlító nyújtás & Lábujjak érintése",
            "duration": "0:20 • Rugalmasság & Regeneráció",
            "category": "Nyújtás & Rugalmasság",
            "obs": "A hátsó combizmok nyújtása és a derékfájdalom megelőzése.",
            "videoUrl": "https://videos.pexels.com/video-files/6891847/6891847-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v7",
            "title": "Váll- és mellkasmobilitás nyújtása",
            "duration": "0:20 • Mellkasi gerinc nyitása",
            "category": "Felsőtest mobilitása",
            "obs": "A mellkas megnyitása és a vállöv feszültségének oldása.",
            "videoUrl": "https://videos.pexels.com/video-files/7319946/7319946-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v8",
            "title": "Függeszkedés rúdon (Dead Hang & Fogáserősség)",
            "duration": "0:20 • Gerinc dekompressziója",
            "category": "Fogáserő & Gerinc",
            "obs": "A gerincoszlop tehermentesítése, az alkar és a szorítóerő növelése.",
            "videoUrl": "https://videos.pexels.com/video-files/10476557/10476557-uhd_4096_2160_25fps.mp4"
        }
    ],

    books: [
        {
            id: "b1",
            title: "Katonai Kaliszténika 40 Év Feletti Férfiaknak — 28 Napos Erős Apa Kihívás (1. Rész)",
            description: "Építs funkcionális erőt, mobilitást és állóképességet napi 15 perc alatt, edzőterem nélkül. Komplett 28 napos katonai saját testsúlyos edzésprogram 40 év feletti férfiak számára.",
            badgeText: "28 Napos Kihívás",
            badgeColor: "#c45329",
            features: [
                "Napi 15 perc saját testsúlyos edzés terem nélkül",
                "Kifejezetten a 40 feletti férfiak ízületvédelmére és mobilitására szabva",
                "Nincs edzőterem, nincsenek drága eszközök és nincsenek kifogások"
            ],
            downloadUrl: "materials/MAN-1-HU.pdf",
            coverImage: "assets/covers/man_IMG1_hu.png",
            buttonText: "1. Rész Letöltése (PDF)"
        },
        {
            id: "b2",
            title: "Katonai Funkcionális Erőnléti Edzés — 9 Hetes Taktikai Program (2. Rész)",
            description: "Haladó taktikai saját testsúlyos program a maximális állóképességért, a váll- és törzs-stabilitásért, valamint a hatékony zsírégetésért bárhol és bármikor.",
            badgeText: "9 Hetes Program",
            badgeColor: "#3b5940",
            features: [
                "Fokozatos 9 hetes taktikai edzésterv az egész test számára",
                "Katonai funkcionális rutinok erőhöz, kondícióhoz és zsírégetéshez",
                "Optimális regeneráció és sérülésmegelőzés"
            ],
            downloadUrl: "materials/MAN-2-HU.pdf",
            coverImage: "assets/covers/man_IMG1_hu.png",
            buttonText: "Fő Kézikönyv Letöltése (2. Rész)"
        },
        {
            id: "b3",
            title: "Katonai Kaliszténika Edzés 50 Év Feletti Férfiaknak (3. Rész)",
            description: "Építs erőt, egyensúlyt, rugalmasságot és tartós vitalitást — otthon vagy a szabadban, edzőterem nélkül. Kifejezetten az 50 feletti férfiak igényeire és ízületvédelmére kialakítva.",
            badgeText: "Férfiak 50+",
            badgeColor: "#1b2a3a",
            features: [
                "Kiemelt fókusz az erőn, egyensúlyon, mobilitáson és a tartós fittségen",
                "Biztonságos és hatékony saját testsúlyos gyakorlatok 50 év felettieknek",
                "Hosszú távú ízületvédelem és maximális energiaszint a mindennapokban"
            ],
            downloadUrl: "materials/MAN-3-HU.pdf",
            coverImage: "assets/covers/man_IMG1_hu.png",
            buttonText: "3. Rész Letöltése (PDF)"
        }
    ],

    otherProducts: []
};
