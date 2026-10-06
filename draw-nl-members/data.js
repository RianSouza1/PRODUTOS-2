/**
 * De Praktische Tekencollectie — Ledengebied (Nederlands)
 */

const APP_DATA = {
    config: {
        brandName: "De Praktische Tekencollectie",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Vraag over toegang (De Praktische Tekencollectie)",
        emailBodyTemplate: "Hallo supportteam! Ik wil graag hulp vragen met betrekking tot mijn toegang tot het ledengedeelte van De Praktische Tekencollectie.\n\nMijn naam is: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            id: "v1",
            title: "Schetstechniek & Potloodcontrole op Papier",
            duration: "0:25 • Basistechniek",
            category: "Fundamenten",
            obs: "Houd het potlood soepel vast en zet lichte schetslijnen op voordat u details aanbrengt.",
            videoUrl: "https://assets.mixkit.co/active_storage/video_items/100488/1724285900/100488-video-720.mp4"
        },
        {
            id: "v2",
            title: "Basislijnen & Perspectiefconstructie",
            duration: "0:20 • Ruimtelijk inzicht",
            category: "Perspectief & Lijnen",
            obs: "Trek loodrechte referentielijnen om de juiste verhoudingen van uw compositie te bepalen.",
            videoUrl: "https://assets.mixkit.co/videos/5254/5254-720.mp4"
        },
        {
            id: "v3",
            title: "Vrije Lijnvoering & Vloeiende Schetsen",
            duration: "0:22 • Handcontrole",
            category: "Lijncontrole",
            obs: "Beweeg vanuit uw onderarm om langere, vloeiende curven te tekenen zonder aarzeling.",
            videoUrl: "https://assets.mixkit.co/videos/36721/36721-720.mp4"
        },
        {
            id: "v4",
            title: "Portrettekenen & Vrouwelijke Gezichtsverhoudingen",
            duration: "0:30 • Portretkunst",
            category: "Portret & Anatomie",
            obs: "Bouw het gezicht op vanuit een ovaal en plaats de ogen en neus langs de centrale symmetrie-as.",
            videoUrl: "https://assets.mixkit.co/videos/30232/30232-720.mp4"
        },
        {
            id: "v5",
            title: "Arcering & Gedetailleerde Schaduwopbouw",
            duration: "0:25 • Licht & Schaduw",
            category: "Schaduwtechniek",
            obs: "Werk met zachte kruisarcering in meerdere dunne lagen voor een realistisch volume-effect.",
            videoUrl: "https://assets.mixkit.co/active_storage/video_items/100485/1724285772/100485-video-720.mp4"
        },
        {
            id: "v6",
            title: "Haartexturen & Fijne Details Tekenen",
            duration: "0:22 • Textuurweergave",
            category: "Detail & Textuur",
            obs: "Teken haar in grotere bundels en voeg pas op het einde individuele highlights toe.",
            videoUrl: "https://assets.mixkit.co/videos/40306/40306-720.mp4"
        },
        {
            id: "v7",
            title: "Creatieve Schetsboektechnieken & Dynamiek",
            duration: "0:25 • Schetsboek",
            category: "Vrije Expressie",
            obs: "Oefen dagelijks met snelle schetsen in uw schetsboek om uw observatievermogen te trainen.",
            videoUrl: "https://assets.mixkit.co/videos/29983/29983-720.mp4"
        },
        {
            id: "v8",
            title: "Anatomische Precisie & Fijne Lijnkunst",
            duration: "0:28 • Precisietekenen",
            category: "Anatomie & Precisie",
            obs: "Let op de onderlinge afstanden en hou de potloodpunt scherp voor fijne anatomische lijnen.",
            videoUrl: "https://assets.mixkit.co/videos/9339/9339-720.mp4"
        }
    ],

    books: [
        {
            id: "b1",
            title: "Leren Tekenen Vanaf Nul — Deel 1",
            description: "Lijnen, vormen, verhoudingen, perspectief en clair-obscur. Een complete tekencursus voor volwassenen: ontwikkel artistiek inzicht, beheers uw potloodstreek en creëer met vertrouwen driedimensionale volumes.",
            badgeText: "Hoofdgids",
            badgeColor: "#7C3AED",
            features: [
                "Beheers de juiste potloodgreep, lijnen en verhoudingen",
                "Bouw geometrische vormen en complexe figuren in perspectief",
                "Leer schaduw- en doordruktechnieken met potlood"
            ],
            downloadUrl: "materials/DRAW-1-NL.pdf",
            coverImage: "assets/covers/draw_IMG1_nl.png",
            buttonText: "Download de Hoofdgids (PDF)"
        },
        {
            id: "b2",
            title: "De Complete Gids voor Tekenonderwerpen — Deel 2",
            description: "Gezichten, figuren, dieren, natuur en alledaagse voorwerpen. Leer hoe u elk echt onderwerp kunt ontleden in eenvoudige, expressieve basisvormen met behoud van de juiste structuur.",
            badgeText: "Bonus #1",
            badgeColor: "#475569",
            features: [
                "Teken sprekende gezichten en de juiste proporties van het hoofd",
                "Leg de vereenvoudigde anatomie en houdingen van dieren vast",
                "Technieken voor planten, landschappen en dagelijkse objecten"
            ],
            downloadUrl: "materials/DRAW-2-NL.pdf",
            coverImage: "assets/covers/draw_IMG1_nl.png",
            buttonText: "Download Bonus #1 (PDF)"
        },
        {
            id: "b3",
            title: "Van Schets tot Afgewerkte Tekening — Deel 3",
            description: "Compositie, licht en schaduw, texturen en begeleide projecten. Van de eerste ruwe schets tot het voltooide kunstwerk: beheers contrasten, textuurweergave en voltooi stap-voor-stap projecten.",
            badgeText: "Bonus #2",
            badgeColor: "#0F766E",
            features: [
                "Regels voor visuele compositie en focuspunten",
                "Geavanceerde beheersing van lichtwaarden, toon en contrast",
                "Stap-voor-stap begeleide projecten: stilleven, botanica en landschap"
            ],
            downloadUrl: "materials/DRAW-3-NL.pdf",
            coverImage: "assets/covers/draw_IMG1_nl.png",
            buttonText: "Download Bonus #2 (PDF)"
        },
        {
            id: "b4",
            title: "Praktijkwerkboek 01 : Leren tekenen vanaf nul",
            description: "17 begeleide praktijksessies om precisie in uw lijnvoering en observatie te ontwikkelen en uw eerste stilleven te voltooien.",
            badgeText: "17 Sessies",
            badgeColor: "#7C3AED",
            downloadUrl: "materials/01_Leren_tekenen_vanaf_nul_NL.pdf",
            coverImage: "assets/covers/draw_IMG1_nl.png",
            buttonText: "Download Werkboek 01"
        },
        {
            id: "b5",
            title: "Praktijkwerkboek 02 : Onderwerpen om te tekenen",
            description: "17 gerichte sessies om eenvoudige vormen om te zetten in levendige onderwerpen: gezichten, lichamen, dieren en objecten.",
            badgeText: "17 Sessies",
            badgeColor: "#2563EB",
            downloadUrl: "materials/02_Onderwerpen_om_te_tekenen_NL.pdf",
            coverImage: "assets/covers/draw_IMG1_nl.png",
            buttonText: "Download Werkboek 02"
        },
        {
            id: "b6",
            title: "Praktijkwerkboek 03 : Van schets tot afgewerkte tekening",
            description: "3 volledige begeleide praktijkprojecten: compositie, clair-obscur, texturen en verfijning.",
            badgeText: "3 Projecten",
            badgeColor: "#059669",
            downloadUrl: "materials/03_Van_schets_tot_afgewerkte_tekening_NL.pdf",
            coverImage: "assets/covers/draw_IMG1_nl.png",
            buttonText: "Download Werkboek 03"
        }
    ],

    otherProducts: []
};
