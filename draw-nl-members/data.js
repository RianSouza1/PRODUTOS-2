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
            title: "Beheersing van Potloodgreep & Vrije Lijnen",
            duration: "0:22 • Basistechniek",
            category: "Fundamenten",
            obs: "Houd de pols ontspannen en beweeg vanuit de schouder voor soepele, rechte lijnen.",
            videoUrl: "https://videos.pexels.com/video-files/6891843/6891843-hd_1920_1080_25fps.mp4"
        },
        {
            id: "v2",
            title: "Hatching & Schaduwopbouw met Grafiet",
            duration: "0:25 • Schaduwtechniek",
            category: "Licht & Schaduw",
            obs: "Bouw lagen geleidelijk op van licht naar donker zonder hard op het papier te drukken.",
            videoUrl: "https://videos.pexels.com/video-files/6891844/6891844-hd_1920_1080_25fps.mp4"
        },
        {
            id: "v3",
            title: "Constructie van 3D Vormen & Verhoudingen",
            duration: "0:15 • Ruimtelijk inzicht",
            category: "Perspectief & Volume",
            obs: "Gebruik hulplijnen om geometrische basisvormen om te zetten in driedimensionale objecten.",
            videoUrl: "https://videos.pexels.com/video-files/6891845/6891845-hd_1920_1080_25fps.mp4"
        },
        {
            id: "v4",
            title: "Gezichtscontouren & Oogverhoudingen",
            duration: "0:24 • Portrettekenen",
            category: "Portret & Anatomie",
            obs: "Let op de centrale as en de afstanden tussen de ogen voor een natuurlijke expressie.",
            videoUrl: "https://videos.pexels.com/video-files/6891846/6891846-hd_1920_1080_25fps.mp4"
        },
        {
            id: "v5",
            title: "Botanische Schetsen & Natuurlijke Texturen",
            duration: "0:20 • Organische vormen",
            category: "Natuur & Planten",
            obs: "Volg de natuurlijke nerf van bladeren en bloembladen voor levendige organische texturen.",
            videoUrl: "https://videos.pexels.com/video-files/6891847/6891847-hd_1920_1080_25fps.mp4"
        },
        {
            id: "v6",
            title: "Dynamische Dierenschetsen & Beweging",
            duration: "0:25 • Snelle schetsen",
            category: "Dieren & Dynamiek",
            obs: "Vang eerst de bewegingslijn (line of action) voordat u details zoals vacht toevoegt.",
            videoUrl: "https://videos.pexels.com/video-files/6891848/6891848-hd_1920_1080_25fps.mp4"
        },
        {
            id: "v7",
            title: "Compositie & Opzet van Stillevens",
            duration: "0:20 • Beeldopbouw",
            category: "Compositie",
            obs: "Kies een duidelijk focuspunt en controleer de overlap tussen voor- en achtergrond.",
            videoUrl: "https://videos.pexels.com/video-files/6891849/6891849-hd_1920_1080_25fps.mp4"
        },
        {
            id: "v8",
            title: "Verfijning, Textuur & Hoog Contrast",
            duration: "0:30 • Eindafwerking",
            category: "Finishing Touch",
            obs: "Gebruik een kneedgum om subtiele glimlichten te creëren en het diepste zwart voor maximaal contrast.",
            videoUrl: "https://videos.pexels.com/video-files/6893300/6893300-hd_1920_1080_25fps.mp4"
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
