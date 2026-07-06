/**
 * LA FARMACIA NATURAL — Members Area Data (Español)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Naturens Apotek", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Spørgsmål om kursusadgang (Naturens Apotek)",
        emailBodyTemplate: "Hej supportteam! Jeg vil gerne have hjælp til mit medlemsområde for Naturens Apotek.%0A%0AMit navn er: ______.",

        // Mostrar ícone de "? Ajuda" flutuante em todas as telas
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VÍDEOS (Curso em vídeo) — vazio se não houver vídeos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. LIVROS (E-books e PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Naturens Apotek — Komplet Guide",
            description: "Hovedguiden til at bygge dit eget naturlige apotek derhjemme. Lær hvilke urter du skal bruge, hvilke opskrifter der faktisk virker, og hvordan du forbereder dem trin for trin, uden at skulle være ekspert.",
            badgeText: "HOVEDBOG",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Enkle tilberedningsmetoder for begyndere",
                "Guides til urter og køkkeningredienser",
                "Trin for trin urteopskrifter til almindelige lidelser"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-DK.pdf",
            coverImage: "assets/covers/Dinamarquês - img1.png",
            buttonText: "Download Hovedbog"
        },
        {
            id: "b2",
            title: "Helbredende Køkkenmidler",
            description: "Opdag de terapeutiske egenskaber ved almindelige medicinske urter og lær at bruge dem sikkert til dagligt velvære: beroligende teer, sirupper, salver og mere.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medicinske profiler for over 20 urter",
                "Sikkerhedsretningslinjer og dosering",
                "Traditionelle helbredende anvendelser"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-DK.pdf",
            coverImage: "assets/covers/Dinamarquês - img2.png",
            buttonText: "Download Bonus #1"
        },
        {
            id: "b3",
            title: "Helbredende Urteteer",
            description: "Lær at skabe beroligende urteinfusioner til søvn, fordøjelse, afslapning, halsens velvære, immunitet og dagligt velvære med enkle ingredienser.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Blandinger til søvn, fordøjelse og afslapning",
                "Opskrifter med honning, ingefær, mynte og kamille",
                "Trin for trin at forberede derhjemme"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-DK.pdf",
            coverImage: "assets/covers/Dinamarquês - img3.png",
            buttonText: "Download Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v3