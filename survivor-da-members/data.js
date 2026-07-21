/**
 * Survival & Bushcraft — Medlemsområde (Danish)
 * Den komplette bushcraft- & overlevelsesserie
 */

const APP_DATA = {
    config: {
        brandName: "Survival & Bushcraft",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Anmodning om adgang (Survival & Bushcraft)",
        emailBodyTemplate: "Hej supportteam,\n\nJeg har brug for hjælp til at få adgang til mit medlemsområde for Survival & Bushcraft.\n\nMits navn er: ______",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Overlevelse for begyndere — 2026-udgave",
            description: "Vand, Ild, Ly, Signalering og Grundlæggende Overlevelsesteknikker. En praktisk guide til alle, der tilbringer tid udendørs: vandrere, campister, jægere eller naturentusiaster.",
            badgeText: "Hovedguide",
            badgeColor: "#6B7C44",
            features: [
                "Sådan finder, renser og sikrer du vand i naturen",
                "Tænde bål, bygge ly og sende redningssignaler",
                "Felt-testede teknikker skræddersyet til begyndere"
            ],
            downloadUrl: "materials/SURVIVOR-1-DK.pdf",
            coverImage: "assets/covers/sur_IMG1_da.png",
            buttonText: "Download hovedguide"
        },
        {
            id: "b2",
            title: "Bushcraft & vildmarksfærdigheder — 2026-udgave",
            description: "Udstyr, knob, navigation, lejropbygning og det selvstændige liv i naturen. De vigtigste færdigheder, du har brug for for at navigere og leve selvstændigt i skoven med tillid og tryghed.",
            badgeText: "Bonus #1",
            badgeColor: "#7A5C3E",
            features: [
                "Brug af værktøjer, vigtige knob og navigationsteknikker",
                "Opsætning af lejr/bivuak og selvstændigt liv i naturen",
                "Trin-for-trin instruktioner til begyndere uden forudgående erfaring"
            ],
            downloadUrl: "materials/SURVIVOR-2-DK.pdf",
            coverImage: "assets/covers/sur_IMG1_da.png",
            buttonText: "Download Bonus #1"
        },
        {
            id: "b3",
            title: "Kriseberedskab & overlevelsens førstehjælp — 2026-udgave",
            description: "72-timers nødtaske, strømafbrydelse, evakuering & familiens sikkerhed. Alt, hvad en almindelig husstand har brug for at vide for at være forberedt på uventede nødsituationer.",
            badgeText: "Bonus #2",
            badgeColor: "#8B4513",
            features: [
                "Korrekt pakkeliste to en 72-timers nødtaske (go-bag)",
                "Forberedelse til strømafbrydelser, evakuering og hjemmesikkerhed",
                "Grundlæggende førstehjælp, der er afgørende for familier i krisesituationer"
            ],
            downloadUrl: "materials/SURVIVOR-3-DK.pdf",
            coverImage: "assets/covers/sur_IMG1_da.png",
            buttonText: "Download Bonus #2"
        }
    ],

    otherProducts: []
};
