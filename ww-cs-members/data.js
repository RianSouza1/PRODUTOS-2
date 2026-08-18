// v2000 forced deploy
/**
 * Zpracování dřeva & Woodworking — Členská sekce (Čeština)
 */

const APP_DATA = {
    config: {
        brandName: "Zpracování dřeva & Woodworking",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Dotaz k přístupu (Zpracování dřeva & Woodworking)",
        emailBodyTemplate: "Dobrý den, týme podpory! Chci se zeptat na pomoci s mým přístupem do členské sekce Zpracování dřeva & Woodworking.\n\nMoje jméno je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Zpracování dřeva pro začátečníky — Nástroje, řezací techniky a spoje",
            description: "Tato kniha je určena všem, kteří vždy chtěli zkusit truhlářství. Nástroje, řezací techniky, spoje a základní dovednosti bez drahých strojů.",
            badgeText: "HLAVNÍ KNIHA",
            badgeColor: "#D97706",
            features: [
                "Základní nástroje, řezací techniky a dřevěné spoje pro začátečníky",
                "Návody krok za krokem bez nutnosti drahé dílny s velkými stroji",
                "Tipy pro výběr materiálu, bezpečnost a čisté řezy"
            ],
            downloadUrl: "materials/WOOD-1-CS.pdf",
            coverImage: "assets/covers/wood_IMG1_cs.png",
            buttonText: "Stáhnout Hlavní knihu (Kniha 1)"
        },
        {
            id: "b2",
            title: "Truhlařina bez zbytečných komplikací — 18 projektů krok za krokem",
            description: "18 kompletních projektů s řeznými seznamy & přehledy rozměrů. Od držáku na telefon až po kobylu — postaveno krok za krokem.",
            badgeText: "KNIHA PROJEKTŮ",
            badgeColor: "#2D6A4F",
            features: [
                "18 kompletních truhlářských projektů s přesnými řeznými seznamy",
                "Výkresy a plány krok za krokem od dílenské kobyly po regál",
                "Praktická příručka přímo na pracovní stůl pro okamžité využití"
            ],
            downloadUrl: "materials/WOOD-2-CS.pdf",
            coverImage: "assets/covers/wood_IMG1_cs.png",
            buttonText: "Stáhnout Knihu projektů (Kniha 2)"
        },
        {
            id: "b3",
            title: "Nábytek & Projekty pro Domácnost — Vyrobte si vlastní nábytek",
            description: "Přestaňte kutit drobnosti: vyrobte si opravdový nábytek s pevnou konstrukcí, vyváženými proporcemi a skvělou povrchovou úpravou.",
            badgeText: "VÝROBA NÁBYTKU",
            badgeColor: "#B45309",
            features: [
                "Vyrobte si sami opravdový dřevěný nábytek s pevnou konstrukcí",
                "Odolné spoje a kvalitní povrchová úprava dřeva",
                "Vyvážený nábytek pro domov, zahradu i dílnu"
            ],
            downloadUrl: "materials/WOOD-3-CS.pdf",
            coverImage: "assets/covers/wood_IMG1_cs.png",
            buttonText: "Stáhnout Knihu o nábytku (Kniha 3)"
        }
    ],

    otherProducts: []
};
