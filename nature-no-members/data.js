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
        emailSubject: "Spørsmål om kurstilgang (Naturens Apotek)",
        emailBodyTemplate: "Hei supportteam! Jeg vil gjerne ha hjelp med medlemsområdet mitt for Naturens Apotek.%0A%0AMitt navn er: ______.",

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
            title: "Naturens Apotek — Komplett Guide",
            description: "Hovedguiden for å bygge ditt eget naturlige apotek hjemme. Lær hvilke urter du skal bruke, hvilke oppskrifter som faktisk fungerer, og hvordan du tilbereder dem trinn for trinn, uten å måtte være ekspert.",
            badgeText: "HOVEDBOK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Enkle tilberedningsmetoder for nybegynnere",
                "Guider til urter og kjøkkeningredienser",
                "Trinn for trinn urteoppskrifter for vanlige plager"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-NO.pdf",
            coverImage: "assets/covers/Noruegues - img1.png",
            buttonText: "Last Ned Hovedbok"
        },
        {
            id: "b2",
            title: "Helbredende Kjøkkenmidler",
            description: "Oppdag de terapeutiske egenskapene til vanlige medisinske urter og lær å bruke dem trygt for daglig velvære: beroligende teer, siruper, salver og mer.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Medisinske profiler for over 20 urter",
                "Sikkerhetsretningslinjer og dosering",
                "Tradisjonelle helbredende applikasjoner"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-NO.pdf",
            coverImage: "assets/covers/Noruegues - img1.png",
            buttonText: "Last Ned Bonus #1"
        },
        {
            id: "b3",
            title: "Helbredende Urteteer",
            description: "Lær å lage beroligende urteinfusjoner for søvn, fordøyelse, avslapning, halsens velvære, immunitet og daglig velvære med enkle ingredienser.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Blandinger for søvn, fordøyelse og avslapning",
                "Oppskrifter med honning, ingefær, mynte og kamille",
                "Trinn for trinn for å tilberede hjemme"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-NO.pdf",
            coverImage: "assets/covers/Noruegues - img1.png",
            buttonText: "Last Ned Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2