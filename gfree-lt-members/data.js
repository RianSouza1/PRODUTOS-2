/**
 * LENGVA BE GLIUTENO — Narių zonos duomenys (Lietuvių)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "Lengva be gliuteno", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Klausimas dėl prieigos prie kurso (Lengva be gliuteno)",
        emailBodyTemplate: "Sveiki, pagalbos komanda! Man reikia pagalbos dėl mano Lengva be gliuteno narių zonos.\n\nMano vardas: ______.",

        // Show floating "?" help button on all screens
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VIDEOS (Video course) — empty if no videos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. BOOKS (E-books and PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Lengva receptų be gliuteno knyga",
            description: "Paprasti kasdieniai patiekalai pradedantiesiems. Sužinokite, kaip lengva ir skanu gali būti gaminti be gliuteno, vadovaujantis praktiškais receptais žingsnis po žingsnio.",
            badgeText: "PAGRINDINĖ KNYGA",
            badgeColor: "#10B981",
            features: [
                "Paprasti kasdieniai patiekalai pradedantiesiems",
                "Skanūs ir sveiki receptai žingsnis po žingsnio",
                "Svarbiausias gyvenimo be gliuteno vadovas"
            ],
            downloadUrl: "materials/G-FREE-1-LT.pdf",
            coverImage: "assets/covers/gf_IMG1_lt.png",
            buttonText: "Atsisiųsti pagrindinę knygą"
        },
        {
            id: "b2",
            title: "Kasdieniai kepiniai be gliuteno ir namų patiekalai",
            description: "Geresnė duona, užkandžiai, desertai ir šeimos pamėgti patiekalai. Išmokite išsikepti minkštą, skanią duoną ir gardumynus be gliuteno, kuriuos pamėgs visi.",
            badgeText: "BONUSAS #1",
            badgeColor: "#F59E0B",
            features: [
                "Duonos ir užkandžių be gliuteno receptai",
                "Skanūs desertai ir šeimos pamėgti patiekalai",
                "Kepimo patarimai tobulam rezultatui kiekvieną kartą"
            ],
            downloadUrl: "materials/G-FREE-2-LT.pdf",
            coverImage: "assets/covers/gf_IMG1_lt.png",
            buttonText: "Atsisiųsti bonusą #1"
        },
        {
            id: "b3",
            title: "30 dienų mitybos be gliuteno planas ir pirkinių gidas",
            description: "Paprasti savaitiniai meniu, suorganizuoti pirkinių sąrašai ir ekspertų patarimai ruošiant maistą, kad jūsų pokyčiai būtų sklandūs ir be streso.",
            badgeText: "BONUSAS #2",
            badgeColor: "#3B82F6",
            features: [
                "Išsamus 30 dienų mitybos planas",
                "Suorganizuoti savaitiniai pirkinių sąrašai",
                "Naudingi patarimai lengvam maisto ruošimui"
            ],
            downloadUrl: "materials/G-FREE-3-LT.pdf",
            coverImage: "assets/covers/gf_IMG1_lt.png",
            buttonText: "Atsisiųsti bonusą #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v9