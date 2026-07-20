/**
 * Pilates & Welzijn — Ledenomgeving (Nederlands)
 */

const APP_DATA = {
    config: {
        brandName: "Pilates & Welzijn",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vraag over toegang (Pilates & Welzijn)",
        emailBodyTemplate: "Hallo ondersteuningsteam. Ik wil graag hulp met mijn toegang tot de Pilates & Welzijn ledenomgeving.\n\nMijn naam is: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Pilates voor Beginners — Editie 2026",
            description: "Een eenvoudige stapsgewijze gids voor kracht, flexibiliteit en veiligheid thuis. Ontworpen om u te helpen sterker, soepeler en energieker te worden op uw eigen tempo.",
            badgeText: "Hoofdmateriaal",
            badgeColor: "#C07A68",
            features: [
                "Stapsgewijze oefeningen voor beginners thuis",
                "Verbeter uw houding, flexibiliteit en kernkracht",
                "Veilige bewegingen zonder zware belasting"
            ],
            downloadUrl: "materials/PILATES-1-NL.pdf",
            coverImage: "assets/covers/pil_IMG1_nl.png",
            buttonText: "Download hoofdmateriaal"
        },
        {
            id: "b2",
            title: "Wand-Pilates — Editie 2026",
            description: "Zachte, ondersteunende oefeningen voor kracht, balans en mobiliteit thuis. Gebruik de muur als partner om uw houding te corrigeren en uw lichaam te versterken.",
            badgeText: "Bonus #1",
            badgeColor: "#5B8C7D",
            features: [
                "Gebruik de muur voor betere balans en ondersteuning",
                "Zachte mobiliteitsoefeningen voor het hele lichaam",
                "Ideaal voor thuistraining zonder speciale apparatuur"
            ],
            downloadUrl: "materials/PILATES-2-NL.pdf",
            coverImage: "assets/covers/pil_IMG1_nl.png",
            buttonText: "Download bonus #1"
        },
        {
            id: "b3",
            title: "30 Dagen Pilates voor Senioren — Editie 2026",
            description: "Een zacht dagelijks plan voor kracht, evenwicht, mobiliteit en zelfvertrouwen. Speciaal ontwikkeld voor volwassenen die veilig en actief willen blijven.",
            badgeText: "Bonus #2",
            badgeColor: "#9C6A88",
            features: [
                "Compleet 30-dagen schema met dagelijkse zachte sessies",
                "Focus op evenwicht, gewrichtsmobiliteit en energie",
                "Veilig thuis uit te voeren op elk niveau"
            ],
            downloadUrl: "materials/PILATES-3-NL.pdf",
            coverImage: "assets/covers/pil_IMG1_nl.png",
            buttonText: "Download bonus #2"
        }
    ],

    otherProducts: []
};
