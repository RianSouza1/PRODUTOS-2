/**
 * Matkonservering & Oppbevaring — Medlemsområde Data (Norsk)
 * v1
 */

const APP_DATA = {
    config: {
        brandName: "Matkonservering & Oppbevaring",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørsmål om tilgang (Matkonservering & Oppbevaring)",
        emailBodyTemplate: "Hei støtteteam! Jeg trenger hjelp med mitt medlemsområde for Matkonservering & Oppbevaring.\n\nMitt navn er: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Den komplette guiden til matkonservering og oppbevaring i 2026",
            description: "En praktisk guide for nybegynnere til vannbadhermetisering, trykkhermetisering, fermenterte matvarer, syltetøy, sauser, sikker oppbevaring og konservering av mat hjemme.",
            badgeText: "HOVEDBOK",
            badgeColor: "#b45309",
            features: [
                "Vannbad- og trykkhermetisering for nybegynnere",
                "Syltetøy, sauser og fermenterte matvarer",
                "Sikker oppbevaring og konservering hjemme"
            ],
            downloadUrl: "materials/Canning-1-NO.pdf",
            coverImage: "assets/covers/can_IMG1_no.png",
            buttonText: "Last ned hovedboken"
        },
        {
            id: "b2",
            title: "Langtidslagringsmat-guide",
            description: "Hjemmelagde tørre blandinger, porsjonerte ferdige glass, supper, dessertblandinger, krydderblandinger og praktiske ingredienser til det daglige spiskammeret — uten steriliseringsutstyr.",
            badgeText: "BONUS #1",
            badgeColor: "#D97706",
            features: [
                "Hjemmelagde tørrblandinger og bakeblandinger",
                "Supper, krydderblandinger og spiskammerorganisering",
                "Spar tid og penger med et velorganisert spiskammer"
            ],
            downloadUrl: "materials/Canning-2-NO.pdf",
            coverImage: "assets/covers/can_IMG1_no.png",
            buttonText: "Last ned bonus #1"
        },
        {
            id: "b3",
            title: "Begynnerguide til fermentering hjemme",
            description: "Enkle fermenterte grønnsaker, surkål, fermenterte pickles, kimchi-lignende oppskrifter, lake, krydder og fermenterte drikker — tradisjonell, praktisk og nybegynnervennlig.",
            badgeText: "BONUS #2",
            badgeColor: "#7C3AED",
            features: [
                "Surkål, kimchi og fermenterte pickles",
                "Fermenterte drikker og krydderblandinger",
                "Trygge kjøkkenmetoder og feilsøking"
            ],
            downloadUrl: "materials/Canning-3-NO.pdf",
            coverImage: "assets/covers/can_IMG1_no.png",
            buttonText: "Last ned bonus #2"
        }
    ],

    otherProducts: []
};