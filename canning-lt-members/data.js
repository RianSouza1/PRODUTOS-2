/**
 * Namų Produktų Konservavimas — Narių zonos duomenys (Lietuvių)
 * v1
 */

const APP_DATA = {
    config: {
        brandName: "Namų Produktų Konservavimas",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Klausimas dėl prieigos (Namų Produktų Konservavimas)",
        emailBodyTemplate: "Sveiki, palaikymo komanda! Man reikia pagalbos su mano Namų Produktų Konservavimo narių zona.\n\nMano vardas: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Išsamus produktų konservavimo ir laikymo vadovas 2026 m.",
            description: "Praktinis vadovas pradedantiesiems apie konservavimą vandens vonelėje, slėginiu būdu, fermentuotus produktus, uogienes, padažus, saugų laikymą ir namų produktų konservavimą.",
            badgeText: "PAGRINDINĖ KNYGA",
            badgeColor: "#b45309",
            features: [
                "Konservavimas vandens vonelėje ir slėginiu būdu",
                "Naminės uogienės, padažai ir konservai",
                "Saugus laikymas ir konservavimo metodai"
            ],
            downloadUrl: "materials/Canning-1-LT.pdf",
            coverImage: "assets/covers/can_IMG1_lt.png",
            buttonText: "Atsisiųsti pagrindinę knygą"
        },
        {
            id: "b2",
            title: "Maisto gidas ilgalaikiam laikymui",
            description: "Naminiai sausieji mišiniai, paruošti porcijomis ir sudėti į stiklainius, sriubų, desertų mišiniai, prieskonių mišiniai ir praktiški ingredientai kasdieniam sandėliukui — be sterilizavimo įrangos.",
            badgeText: "BONUSAS #1",
            badgeColor: "#D97706",
            features: [
                "Naminiai sausieji ir kepimo mišiniai",
                "Sriubos, prieskoniai ir sandėliuko organizavimas",
                "Sutaupykite laiko ir pinigų su gerai aprūpintu sandėliuku"
            ],
            downloadUrl: "materials/Canning-2-LT.pdf",
            coverImage: "assets/covers/can_IMG1_lt.png",
            buttonText: "Atsisiųsti bonusą #1"
        },
        {
            id: "b3",
            title: "Pradedančiųjų namų fermentacijos vadovas",
            description: "Paprasti fermentuoti daržovės, rauginti kopūstai, fermentuoti marinuoti agurkai, kimči stiliaus receptai, sūrymas, prieskoniai, fermentuoti gėrimai, problemų sprendimas ir saugūs metodai virtuvėje.",
            badgeText: "BONUSAS #2",
            badgeColor: "#7C3AED",
            features: [
                "Rauginti kopūstai, marinuoti agurkai ir kimči receptai",
                "Fermentuoti gėrimai, sūrymas ir naminiai prieskoniai",
                "Saugūs metodai virtuvėje ir problemų sprendimas"
            ],
            downloadUrl: "materials/Canning-3-LT.pdf",
            coverImage: "assets/covers/can_IMG1_lt.png",
            buttonText: "Atsisiųsti bonusą #2"
        }
    ],

    otherProducts: []
};