/**
 * Pilates & Velvære — Medlemsområde (Norsk)
 */

const APP_DATA = {
    config: {
        brandName: "Pilates & Velvære",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørsmål om tilgang (Pilates & Velvære)",
        emailBodyTemplate: "Hei kundestøtte! Jeg ønsker hjelp med min tilgang to Pilates & Velvære medlemsområde.\n\nMitt navn er: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Pilates for Nybegynnere — 2026-utgaven",
            description: "En enkel, trinn for trinn-guide til å bygge styrke, fleksibilitet og selvtillit hjemme. Designet for å hjelpe deg med å bli sterkere, mer bevegelig og mer energisk i ditt eget tempo.",
            badgeText: "Hovedmateriale",
            badgeColor: "#C07A68",
            features: [
                "Trinn-for-trinn-øvelser for nybegynnere hjemme",
                "Forbedre din holdning, fleksibilitet og kjerne-styrke",
                "Trygge bevegelser uten tung belastning"
            ],
            downloadUrl: "materials/PILATES-1-NO.pdf",
            coverImage: "assets/covers/pil_IMG1_no.png",
            buttonText: "Last ned hovedmateriale"
        },
        {
            id: "b2",
            title: "Veggpilates — 2026-utgaven",
            description: "Skånsomme øvelser som hjelper deg å bygge styrke, balanse og bevegelighet hjemme. Bruk veggen som din støtte for å korrigere holdningen og styrke kroppen.",
            badgeText: "Bonus #1",
            badgeColor: "#5B8C7D",
            features: [
                "Bruk veggen for bedre balanse og støtte",
                "Skånsomme bevegelighetsøvelser for hele kroppen",
                "Ideell for hjemmetrening uten behov for spesielt utstyr"
            ],
            downloadUrl: "materials/PILATES-2-NO.pdf",
            coverImage: "assets/covers/pil_IMG1_no.png",
            buttonText: "Last ned Bonus #1"
        },
        {
            id: "b3",
            title: "30 Dager med Pilates for Seniorer — 2026-utgaven",
            description: "Et skånsomt daglig program for å bygge styrke, balanse, smidighet og selvtillit. Spesielt utviklet for voksne som ønsker å holde seg aktive og trygge.",
            badgeText: "Bonus #2",
            badgeColor: "#9C6A88",
            features: [
                "Komplett 30-dagers plan med daglige skånsomme økter",
                "Fokus på balanse, leddbevegelighet og økt energi",
                "Trygg å utføre hjemme uansett formnivå"
            ],
            downloadUrl: "materials/PILATES-3-NO.pdf",
            coverImage: "assets/covers/pil_IMG1_no.png",
            buttonText: "Last ned Bonus #2"
        }
    ],

    otherProducts: []
};
