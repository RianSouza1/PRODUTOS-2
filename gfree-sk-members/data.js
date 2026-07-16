/**
 * Jednoduché bezlepkové jedlá — Údaje pre Členskú zónu (Slovenčina)
 */

const APP_DATA = {
    config: {
        brandName: "Jednoduché bezlepkové jedlá",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Otázka ohľadom prístupu (Jednoduchné bezlepkové jedlá)",
        emailBodyTemplate: "Dobrý deň, tím podpory! Potrebujem pomoc s prístupom do členskej zóny pre Jednoduchné bezlepkové jedlá.\n\nMoje meno je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Jednoduchné bezlepkové jedlá",
            description: "Jednoduché každodenné recepty pre začiatočníkov. Zistite, aké jednoduché a chutné môže byť varenie bez lepku s praktickými receptmi krok za krokom.",
            badgeText: "HLAVNÁ KNIHA",
            badgeColor: "#10B981",
            features: [
                "Jednoduché každodenné jedlá pre začiatočníkov",
                "Chutné a zdravé recepty krok za krokom",
                "Základný sprievodca životom bez lepku"
            ],
            downloadUrl: "materials/G-FREE-1-SK.pdf",
            coverImage: "assets/covers/gf_IMG1_sk.png",
            buttonText: "Stiahnuť hlavnú knihu"
        },
        {
            id: "b2",
            title: "Chutné bezlepkové jedlá a každodenné varenie",
            description: "Najlepšie chleby, snacky, dezerty a domáce jedlá, ktoré majú radi všetci. Naučte sa piecť mäkký a chutný bezlepkový chlieb a sladkosti, ktoré si obľúbi celá rodina.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B",
            features: [
                "Recepty na bezlepkový chlieb a snacky",
                "Chutné dezerty a domáce jedlá pre rodinu",
                "Tipy na pečenie pre dokonalé výsledky zakaždým"
            ],
            downloadUrl: "materials/G-FREE-2-SK.pdf",
            coverImage: "assets/covers/gf_IMG1_sk.png",
            buttonText: "Stiahnuť bonus #1"
        },
        {
            id: "b3",
            title: "30-dňový bezlepkový jedálniček a nákupný zoznam",
            description: "Jednoduché týždenné plány, organizované nákupné zoznamy a odborné tipy na predprípravu jedál, aby váš prechod bol pohodlný a bez stresu.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6",
            features: [
                "Kompletný 30-dňový plán jedál",
                "Organizované týždenné nákupné zoznamy",
                "Užitočné tipy na jednoduchú predprípravu jedál"
            ],
            downloadUrl: "materials/G-FREE-3-SK.pdf",
            coverImage: "assets/covers/gf_IMG1_sk.png",
            buttonText: "Stiahnuť bonus #2"
        }
    ],

    otherProducts: []
};