/**
 * Natūrali Vaistinė — Members Area Data (Lietuvių)
 */

const APP_DATA = {
    config: {
        brandName: "Natūrali Vaistinė",

        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Klausimas dėl prieigos prie kurso (Natūrali Vaistinė)",
        emailBodyTemplate: "Sveiki, palaikymo komanda! Norėčiau gauti pagalbos dėl savo narių zonos Natūrali Vaistinė.%0A%0AMano vardas: ______.",

        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Natūrali Vaistinė — Išsamus Vadovas",
            description: "Pagrindinis vadovas, kaip sukurti savo natūralią vaistinę namuose. Sužinokite, kokius augalus naudoti, kokie receptai iš tikrųjų veikia ir kaip juos ruošti žingsnis po žingsnio — nereikia būti ekspertu.",
            badgeText: "PAGRINDINĖ KNYGA",
            badgeColor: "#10B981",
            features: [
                "Paprasti paruošimo būdai pradedantiesiems",
                "Augalų ir virtuvės ingredientų vadovas",
                "Žingsnis po žingsnio žolelių receptai dažniems negalavimams"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-LT.pdf",
            coverImage: "assets/covers/nature_IMG1_lt.png",
            buttonText: "Atsisiųsti pagrindinę knygą"
        },
        {
            id: "b2",
            title: "Gydomoji Augalų Galia",
            description: "Atraskite dažniausių vaistinių augalų gydomąsias savybes ir išmokite juos saugiai naudoti kasdienei gerovei: raminančios arbatos, sirupai, tepalai ir dar daugiau.",
            badgeText: "PRIEDAS #1",
            badgeColor: "#F59E0B",
            features: [
                "Daugiau nei 20 augalų gydomieji profiliai",
                "Saugos instrukcijos ir dozavimas",
                "Tradicinis terapinis naudojimas"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-LT.pdf",
            coverImage: "assets/covers/nature_IMG1_lt.png",
            buttonText: "Atsisiųsti priedą #1"
        },
        {
            id: "b3",
            title: "Raminančių Žolelių Arbatų Vadovas",
            description: "Išmokite ruošti raminančius žolelių gėrimus miegui, virškinimui, atsipalaidavimui, gerklės skausmui malšinti, imunitetui ir kasdienei sveikatai iš paprastų ingredientų.",
            badgeText: "PRIEDAS #2",
            badgeColor: "#3B82F6",
            features: [
                "Mišiniai miegui, virškinimui ir atsipalaidavimui",
                "Receptai su medumi, imbieru, mėtomis ir ramunėlėmis",
                "Žingsnis po žingsnio namų paruošimas"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-LT.pdf",
            coverImage: "assets/covers/nature_IMG1_lt.png",
            buttonText: "Atsisiųsti priedą #2"
        }
    ],

    otherProducts: []
};