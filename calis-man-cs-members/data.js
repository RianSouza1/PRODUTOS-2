/**
 * Vojenská kalistenika pro muže — Členská sekce (Čeština)
 */

const APP_DATA = {
    config: {
        brandName: "Vojenská kalistenika pro muže",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Žádost o podporu – přístup (Vojenská kalistenika pro muže)",
        emailBodyTemplate: "Dobrý den, týme podpory! Rád bych požádal o pomoc s přístupem do členské sekce Vojenská kalistenika pro muže.\n\nMoje jméno je: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            "id": "v1",
            "title": "Klasické kliky (Síla horní části těla)",
            "duration": "0:25 • Základní technika",
            "category": "Horní část těla & Hrudník",
            "obs": "Boční ukázka se správným držením těla a pozicí loktů.",
            "videoUrl": "https://videos.pexels.com/video-files/6893306/6893306-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v2",
            "title": "Boční prkno (Side Plank pro střed těla)",
            "duration": "0:20 • Střed těla & Stabilita",
            "category": "Střed těla & Core",
            "obs": "Posílení svalů středu těla a stabilita kloubů.",
            "videoUrl": "https://videos.pexels.com/video-files/6023266/6023266-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v3",
            "title": "Stabilizace na čtyřech (Bird-Dog)",
            "duration": "0:30 • Šetrné cvičení na záda",
            "category": "Držení těla & Bedra",
            "obs": "Vynikající pro odlehčení bederní páteře a hlubokou stabilizaci.",
            "videoUrl": "https://videos.pexels.com/video-files/9058239/9058239-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v4",
            "title": "Jumping Jacks (Vojenské kardio & Zahřátí)",
            "duration": "0:15 • Kondice & Spalování",
            "category": "Zahřátí & Kardio",
            "obs": "Kardiovaskulární aktivace a efektivní zahřátí celého těla.",
            "videoUrl": "https://videos.pexels.com/video-files/7299359/7299359-uhd_2160_3840_30fps.mp4"
        },
        {
            "id": "v5",
            "title": "Kroužení v bocích & Mobilita kloubů",
            "duration": "0:25 • Uvolnění kyčlí",
            "category": "Mobilita kloubů & Kyčle",
            "obs": "Uvolnění kyčelních kloubů pro lepší rozsah pohybu a mobilitu.",
            "videoUrl": "https://videos.pexels.com/video-files/9058019/9058019-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v6",
            "title": "Protahování zadní strany stehen & Dotyk špiček",
            "duration": "0:20 • Flexibilita & Regenerace",
            "category": "Protahování & Flexibilita",
            "obs": "Protahování hamstringů a prevence bolesti beder.",
            "videoUrl": "https://videos.pexels.com/video-files/6891847/6891847-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v7",
            "title": "Mobilita ramen a hrudníku",
            "duration": "0:20 • Otevření hrudní páteře",
            "category": "Mobilita horní části těla",
            "obs": "Otevření hrudníku a uvolnění napětí v ramenou.",
            "videoUrl": "https://videos.pexels.com/video-files/7319946/7319946-hd_1920_1080_25fps.mp4"
        },
        {
            "id": "v8",
            "title": "Vis na hrazdě (Dead Hang & Síla úchopu)",
            "duration": "0:20 • Dekomprese páteře",
            "category": "Síla úchopu & Páteř",
            "obs": "Dekomprese páteře a posílení předloktí a úchopu.",
            "videoUrl": "https://videos.pexels.com/video-files/10476557/10476557-uhd_4096_2160_25fps.mp4"
        }
    ],

    books: [
        {
            id: "b1",
            title: "Vojenský trénink s vlastní vahou pro muže po 40. — 28denní výzva (Část 1)",
            description: "Buduj funkční sílu, mobilitu a vytrvalost díky 15 minutám denně bez posilovny. Kompletní 28denní program s vojenskými cviky s vlastní vahou těla pro muže po čtyřicítce.",
            badgeText: "28denní výzva",
            badgeColor: "#c45329",
            features: [
                "15 minut denně cvičení s vlastní vahou bez posilovny",
                "Speciálně přizpůsobeno pro zdraví kloubů a mobilitu mužů 40+",
                "Žádné fitness centrum, žádné drahé vybavení a žádné výmluvy"
            ],
            downloadUrl: "materials/MAN-1-CS.pdf",
            coverImage: "assets/covers/man_IMG1_cs.png",
            buttonText: "Stáhnout Část 1 (PDF)"
        },
        {
            id: "b2",
            title: "Elitní vojenský funkční trénink — 9týdenní taktický program (Část 2)",
            description: "Pokročilý taktický program s vlastní vahou těla pro maximální vytrvalost, stabilitu ramen a středu těla a efektivní spalování tuků kdekoliv a kdykoliv.",
            badgeText: "9týdenní program",
            badgeColor: "#3b5940",
            features: [
                "Progresivní 9týdenní taktický tréninkový plán pro celé tělo",
                "Vojenské funkční rutiny pro sílu, kondici a spalování tuků",
                "Optimální regenerace a prevence zranění"
            ],
            downloadUrl: "materials/MAN-2-CS.pdf",
            coverImage: "assets/covers/man_IMG1_cs.png",
            buttonText: "Stáhnout Hlavního průvodce (Část 2)"
        },
        {
            id: "b3",
            title: "Vojenský kalistenický trénink pro muže po 50. roce života (Část 3)",
            description: "Buduj sílu, rovnováhu, flexibilitu a trvalou vytrvalost — doma nebo venku, bez posilovny. Přizpůsobeno pro muže od 50 let s důrazem na vitalitu a ochranu kloubů.",
            badgeText: "Muži 50+",
            badgeColor: "#1b2a3a",
            features: [
                "Důraz na sílu, rovnováhu, mobilitu a udržitelnou kondici",
                "Bezpečné a efektivní cviky s vlastní vahou pro muže 50+",
                "Dlouhodobá ochrana kloubů a maximum energie v běžném životě"
            ],
            downloadUrl: "materials/MAN-3-CS.pdf",
            coverImage: "assets/covers/man_IMG1_cs.png",
            buttonText: "Stáhnout Část 3 (PDF)"
        }
    ],

    otherProducts: []
};
