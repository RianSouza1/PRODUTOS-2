/**
 * Puunveisto & Puutyöt — Jäsenen Alue (Suomi)
 */

const APP_DATA = {
    config: {
        brandName: "Puunveisto & Puutyöt",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Kysymys pääsystä (Puunveisto & Puutyöt)",
        emailBodyTemplate: "Hei tukitiimi! Haluaisin pyytää apua Puunveisto & Puutyöt -jäsenalueen pääsyssäni.\n\nNimeni on: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Puunveisto Aloittelijoille — Työkalut, Turvallisuus & Ensimmäiset Helpot Projektit",
            description: "Kattava ja käytännöllinen vaiheittainen opas turvalliseen käsin tapahtuvaan puunveistoon.",
            badgeText: "Osa 1",
            badgeColor: "#475569",
            features: [
                "Tärkeimmät turvallisuussäännöt ja suojavarusteet",
                "Miten lukea puun syitä ja rakennetta oikein",
                "Ensimmäinen helppo puunveistoprojektisi"
            ],
            downloadUrl: "materials/WHITTLING-1-FI.pdf",
            coverImage: "assets/covers/whi_IMG1_fi.png",
            buttonText: "Lataa Osa 1 (PDF)"
        },
        {
            id: "b2",
            title: "Helpot Puunveistoprojektit — Taidot & Tekniikat Vaihe Vaiheelta",
            description: "Jatkoa Osalle 1 — yksinkertaisista leikkauksista ilmeikkäisiin puuhahmoihin jäsenneltyjen projektien avulla.",
            badgeText: "Pääopas",
            badgeColor: "#8B5A2B",
            features: [
                "Yksitoista yksityiskohtaista puunveistoprojektia",
                "Kaavojen suurentaminen ja siirtäminen puuhun",
                "Symmetrian ja muotojen hallintatekniikat"
            ],
            downloadUrl: "materials/WHITTLING-2-FI.pdf",
            coverImage: "assets/covers/whi_IMG1_fi.png",
            buttonText: "Lataa Pääopas (Osa 2)"
        },
        {
            id: "b3",
            title: "Puunveisto: Viimeistely & Hiominen — Teroitus, Yksityiskohdat & Pintakäsittely",
            description: "Teroitus, tarkkuusveisto, pintakäsittely ja virheetön lopputulos. Osa 3/3 kokoelmaa.",
            badgeText: "Osa 3",
            badgeColor: "#2E5A44",
            features: [
                "Hienot yksityiskohdat ja veitsen teroitustekniikat",
                "Viimeistelyaineiden, öljyjen ja vahojen valinta",
                "Miten saavuttaa täydellinen lopputulos"
            ],
            downloadUrl: "materials/WHITTLING-3-FI.pdf",
            coverImage: "assets/covers/whi_IMG1_fi.png",
            buttonText: "Lataa Osa 3 (PDF)"
        }
    ],

    otherProducts: []
};
