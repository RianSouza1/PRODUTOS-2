/**
 * Kompletní Kolekce pro Bicí — Členská Oblast (Čeština)
 */

const APP_DATA = {
    config: {
        brandName: "Kompletní Kolekce pro Bicí",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Žádost o podporu – přístup (Kompletní Kolekce pro Bicí)",
        emailBodyTemplate: "Dobrý den, týme podpory! Rád bych požádal o pomoc s přístupem do členské sekce Kompletní Kolekce pro Bicí.\n\nMoje jméno je: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Bicí pro Začátečníky — Kniha 1",
            description: "Posed, tempo, koordinace & základní rytmy. Úchop paliček, správné držení těla, rytmické členění a základní beaty pro jistý začátek hry na bicí soupravu.",
            badgeText: "Kniha 1 — Začátečníci",
            badgeColor: "#e6392a",
            features: [
                "Ergonomický posed, správný úchop paliček a rovnováha těla",
                "Kontrola tempa, rytmické členění a základní údery",
                "Zahrajte své první plnohodnotné rytmy na bicí s jistotou"
            ],
            downloadUrl: "materials/BATERIA-1-CS.pdf",
            coverImage: "assets/covers/batera_IMG1_cs.png",
            buttonText: "Stáhnout Knihu 1 (PDF)"
        },
        {
            id: "b2",
            title: "Kompletní Průvodce Groovy a Přechody na Bicí — Kniha 2",
            description: "Rock, pop, funk, blues & praktické rytmické vzory. Ucelená metoda groovů a fillů pro pokročilého bubeníka, dynamika a variace basového bubnu.",
            badgeText: "Kniha 2 — Groovy & Přechody",
            badgeColor: "#d97706",
            features: [
                "Základní groovy v rocku, popu, funku, blues i shuffle stylu",
                "Techniky přechodů (fills) a plynulé návraty do rytmu",
                "Akcenty na hi-hat, synkopy a citlivá práce s dynamikou"
            ],
            downloadUrl: "materials/BATERIA-2-CS.pdf",
            coverImage: "assets/covers/batera_IMG1_cs.png",
            buttonText: "Stáhnout Knihu 2 (PDF)"
        },
        {
            id: "b3",
            title: "Dokonalý Tréninkový Program pro Bubeníky — Kniha 3",
            description: "30denní program pro rozvoj timingu, rychlosti, kontroly a nezávislosti rukou a nohou. Strukturovaný tréninkový plán pro měřitelný pokrok.",
            badgeText: "Kniha 3 — 30denní Plán",
            badgeColor: "#0284c7",
            features: [
                "Strukturovaný 30denní denní plán pro měřitelný růst techniky",
                "Úplná nezávislost 4 končetin a rychlost rukou i nohou",
                "Dynamická kontrola, vytrvalost a přesnost s metronomem"
            ],
            downloadUrl: "materials/BATERIA-3-CS.pdf",
            coverImage: "assets/covers/batera_IMG1_cs.png",
            buttonText: "Stáhnout Knihu 3 (PDF)"
        }
    ],

    otherProducts: []
};
