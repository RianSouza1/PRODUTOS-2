/**
 * Excel Mastery — Narių sritis (Lietuvių)
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Klausimas dėl prieigos (Excel Mastery)",
        emailBodyTemplate: "Sveiki, palaikymo komanda. Man reikia pagalbos dėl prieigos prie Excel Mastery narių srities.\n\nMano vardas: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Nuo nulio iki „Excel“ profesionalo — 2026 leidimas",
            description: "Praktinis vadovas pradedantiesiems, apimantis skaičiuokles, organizavimą ir kasdienį produktyvumą. Nuo pirmojo langelio iki pažangių įrankių.",
            badgeText: "Pagrindinė medžiaga",
            badgeColor: "#1a7a45",
            features: [
                "Lentelės ir duomenų organizavimas pradedantiesiems",
                "Kasdienis produktyvumas ir klientų sąrašai",
                "Finansų valdymas ir laiko planavimas programoje Excel"
            ],
            downloadUrl: "materials/Excel-1-LTU.pdf",
            coverImage: "assets/covers/excel_IMG1_lt.png",
            buttonText: "Atsisiųsti pagrindinę medžiagą"
        },
        {
            id: "b2",
            title: "„Excel“ funkcijos, operacijos ir išmanūs darbo srautai — 2026 leidimas",
            description: "Praktinis gidas greitesniam užduočių sprendimui „Excel“ programoje. Naudokite formules ir funkcijas, kad paverstumėte įprastą lentelę galingu įrankiu.",
            badgeText: "Premija #1",
            badgeColor: "#D97706",
            features: [
                "Pažangios formulės ir funkcijos",
                "Automatiniai skaičiavimai ir išmanūs darbo srautai",
                "Greitas kasdienių užduočių sprendimas Excel programoje"
            ],
            downloadUrl: "materials/Excel-2-LTU.pdf",
            coverImage: "assets/covers/excel_IMG1_lt.png",
            buttonText: "Atsisiųsti premiją #1"
        },
        {
            id: "b3",
            title: "Nuo Excel skaičiavimų, ataskaitų, formulių — 2026 leidimas",
            description: "Praktinis vadovas, kaip paversti duomenis aiškiomis ir profesionaliomis ataskaitomis. Išmokite efektyviai pateikti duomenis vadovui, klientui ar komandai.",
            badgeText: "Premija #2",
            badgeColor: "#7C3AED",
            features: [
                "Profesionalios suvestinės ir duomenų skydeliai",
                "Suvestinės ataskaitos ir Pivot lentelės",
                "Duomenų pristatymas vadovybei, klientams ir komandai"
            ],
            downloadUrl: "materials/Excel-3-LTU.pdf",
            coverImage: "assets/covers/excel_IMG1_lt.png",
            buttonText: "Atsisiųsti premiją #2"
        }
    ],

    otherProducts: []
};
