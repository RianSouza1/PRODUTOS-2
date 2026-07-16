/**
 * Mājas Produktu Konservēšana — Biedru zonas dati (Latviešu)
 * v1
 */

const APP_DATA = {
    config: {
        brandName: "Mājas Produktu Konservēšana",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Jautājums par piekļuvi (Mājas Produktu Konservēšana)",
        emailBodyTemplate: "Sveiki, atbalsta komanda! Man nepieciešama palīdzība ar manu Mājas Produktu Konservēšanas biedru zonu.\n\nMani sauc: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Pilnīgs produktu konservēšanas un uzglabāšanas ceļvedis 2026. gadā",
            description: "Praktisks ceļvedis iesācējiem par konservēšanu ūdens vannā, ar spiedienu, fermentētiem produktiem, ievārījumiem, mērcēm, drošu uzglabāšanu un mājas produktu konservēšanu.",
            badgeText: "GALVENĀ GRĀMATA",
            badgeColor: "#b45309",
            features: [
                "Konservēšana ūdens vannā un ar spiedienu",
                "Mājas ievārījumi, mērces un konservi",
                "Droša uzglabāšana un konservēšanas metodes"
            ],
            downloadUrl: "materials/Canning-1-LV.pdf",
            coverImage: "assets/covers/can_IMG1_lv.png",
            buttonText: "Lejupielādēt galveno grāmatu"
        },
        {
            id: "b2",
            title: "Pārtikas ceļvedis ilgstošai uzglabāšanai",
            description: "Mājas sausie maisījumi, gatavi porcijās salikti burciņās, zupas, desertu maisījumi, garšvielu maisījumi un praktiskas sastāvdaļas ikdienas pieliekamajam — bez sterilizācijas iekārtām.",
            badgeText: "BONUSS #1",
            badgeColor: "#D97706",
            features: [
                "Mājas sausie un cepšanas maisījumi",
                "Zupas, garšvielas un pieliekamā organizēšana",
                "Ietaupiet laiku un naudu ar labi aprīkotu pieliekamo"
            ],
            downloadUrl: "materials/Canning-2-LV.pdf",
            coverImage: "assets/covers/can_IMG1_lv.png",
            buttonText: "Lejupielādēt bonusu #1"
        },
        {
            id: "b3",
            title: "Iesācēju rokasgrāmata mājas fermentācijai",
            description: "Vienkārši fermentēti dārzeņi, skābēti kāposti, fermentēti marinēti gurķi, kimči stila receptes, sāls sālījums, garšvielas, fermentēti dzērieni, problēmu risināšana un drošas metodes virtuvē.",
            badgeText: "BONUSS #2",
            badgeColor: "#7C3AED",
            features: [
                "Skābēti kāposti, marinēti gurķi un kimči receptes",
                "Fermentēti dzērieni, sālījumi un mājas garšvielas",
                "Drošas metodes virtuvē un problēmu risināšana"
            ],
            downloadUrl: "materials/Canning-3-LV.pdf",
            coverImage: "assets/covers/can_IMG1_lv.png",
            buttonText: "Lejupielādēt bonusu #2"
        }
    ],

    otherProducts: []
};