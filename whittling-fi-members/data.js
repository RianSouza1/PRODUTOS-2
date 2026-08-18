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

    videos: [
        {
            id: "v1",
            title: "Start Whittling TODAY — Complete Beginners Guide",
            duration: "Beginner • Essential grips, cuts & safety rules",
            youtubeId: "cghNbdy0xtc"
        },
        {
            id: "v2",
            title: "The 5-Minute Wizard (Doug Linker) — Simple Carving Project",
            duration: "Beginner • Fast, easy & satisfying 1x1 carving",
            youtubeId: "AlIr95-ZlCc"
        },
        {
            id: "v3",
            title: "How to Whittle a Cute Bunny — Step-by-Step Tutorial",
            duration: "Beginner • Shaping, rounding & detailing a rabbit",
            youtubeId: "eG88Ny-hNOc"
        },
        {
            id: "v4",
            title: "How to Carve a Wooden Spoon — Beginner Tutorial",
            duration: "Beginner • Sloyd & hook knife spoon carving",
            youtubeId: "lS7IMuS4gv4"
        },
        {
            id: "v5",
            title: "Beginners Whittle — Facial Detailing: Eyes & Nose",
            duration: "Beginner • Facial carving techniques & fine details",
            youtubeId: "8MfD4LSNI9g"
        },
    ],

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
