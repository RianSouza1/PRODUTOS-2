/**
 * Excel Mastery — Biedru zona (Latviešu)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Jautājums par piekļuvi (Excel Mastery)",
        emailBodyTemplate: "Sveiki, atbalsta komanda. Man ir nepieciešama palīdzība ar piekļuvi Excel Mastery biedru zonai.\n\nMani sauc: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "No nulles līdz „Excel” profesionālim — 2026. gada izdevums",
            description: "Praktisks ceļvedis iesācējiem, kas aptver izklājlapas, organizēšanu un ikdienas produktivitāti. No pirmās šūnas līdz progresīviem rīkiem.",
            badgeText: "Galvenais materiāls",
            badgeColor: "#1a7a45",
            features: [
                "Tabulas un datu organizēšana iesācējiem",
                "Ikdienas produktivitāte un klientu saraksti",
                "Finanšu pārvaldība un laika plānošana programmā Excel"
            ],
            downloadUrl: "materials/Excel-1-LV.pdf",
            coverImage: "assets/covers/excel_IMG1_lv.png",
            buttonText: "Lejupielādēt galveno materiālu"
        },
        {
            id: "b2",
            title: "„Excel” funkcijas, operācijas un viedas darba plūsmas — 2026. gada izdevums",
            description: "Praktisks ceļvedis ātrākai uzdevumu risināšanai programmā „Excel”. Izmantojiet formulas un funkcijas, lai pārvērstu parastu tabulu par jaudīgu rīku.",
            badgeText: "Bonuss #1",
            badgeColor: "#D97706",
            features: [
                "Progresīvas formulas un funkcijas",
                "Automātiski aprēķini un viedi darba procesi",
                "Ātra ikdienas uzdevumu risināšana programmā Excel"
            ],
            downloadUrl: "materials/Excel-2-LV.pdf",
            coverImage: "assets/covers/excel_IMG1_lv.png",
            buttonText: "Lejupielādēt bonusu #1"
        },
        {
            id: "b3",
            title: "No Excel aprēķiniem, atskaitēm, formulām — 2026. gada izdevums",
            description: "Praktisks ceļvedis, kā pārvērst datus skaidros un profesionālos pārskatos. Iemācieties efektīvi prezentēt datus vadītājam, klientam vai komandai.",
            badgeText: "Bonuss #2",
            badgeColor: "#7C3AED",
            features: [
                "Profesionāli datu paneļi un kopsavilkuma tabulas",
                "Kopsavilkuma atskaites un Pivot tabulas",
                "Datu prezentēšana vadībai, klientiem un komandai"
            ],
            downloadUrl: "materials/Excel-3-LV.pdf",
            coverImage: "assets/covers/excel_IMG1_lv.png",
            buttonText: "Lejupielādēt bonusu #2"
        }
    ],

    otherProducts: []
};
