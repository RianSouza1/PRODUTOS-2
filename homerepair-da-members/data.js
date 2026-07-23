/**
 * Hjemmevedligeholdelse & Reparation — Medlemsområde (Dansk)
 */

const APP_DATA = {
    config: {
        brandName: "Hjemmevedligeholdelse & Reparation",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørgsmål om adgang (Hjemmevedligeholdelse & Reparation)",
        emailBodyTemplate: "Hej supportteam! Jeg vil gerne have hjælp med min adgang til medlemsområdet for Hjemmevedligeholdelse & Reparation.\n\nMits navn er: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Den komplette guide til vedligeholdelse & forbedring af dit hjem — Udgave 2026",
            description: "Praktiske Projekter, Ekspertråd & Holdbare Resultater. Dit komplette opslagsværk til at vedligeholde, reparere og forbedre dit hjem — med selvtillid, sikkerhed og et ordentligt slutresultat.",
            badgeText: "Hovedguide",
            badgeColor: "#D97706",
            features: [
                "Trin-for-trin instruktioner til nødvendige hjemmereparationer",
                "Ekspertråd til vedligeholdelsesprojekter",
                "Praktiske gør-det-selv-tips til holdbare resultater"
            ],
            downloadUrl: "materials/REPAIR-1-DK.pdf",
            coverImage: "assets/covers/rep_IMG1_dk.png",
            buttonText: "Download hovedguiden"
        },
        {
            id: "b2",
            title: "Den praktiske guide til hjemmeinstallationer — Opdateret udgave 2026",
            description: "Sikkert • DS/EN-standardbevidst • Løs det selv med selvtillid. En opdateret praktisk håndbog til sikkert at håndtere elinstallationer i hjemmet.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Håndter elarbejde i hjemmet på en sikker måde",
                "Fuldt tilpasset DS/EN standarder og retningslinjer",
                "Trin-for-trin instruktioner til almindelige installationer"
            ],
            downloadUrl: "materials/REPAIR-2-DK.pdf",
            coverImage: "assets/covers/rep_IMG1_dk.png",
            buttonText: "Download Bonus #1"
        },
        {
            id: "b3",
            title: "Den komplette guide til rørinstallationer — Udgave 2026",
            description: "Reparer Det • Forbedr Det • Hold Det Flydende. Dit praktiske opslagsværk til at forstå, fejlfinde og vedligeholde hjemmets rørinstallationer.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Diagnosticer og afhjælp almindelige rørproblemer",
                "Hold hjemmets rørsystem i perfekt stand",
                "Tydelige instruktioner tilpasset begyndere og gør-det-selv-folk"
            ],
            downloadUrl: "materials/REPAIR-3-DK.pdf",
            coverImage: "assets/covers/rep_IMG1_dk.png",
            buttonText: "Download Bonus #2"
        }
    ],

    otherProducts: []
};
