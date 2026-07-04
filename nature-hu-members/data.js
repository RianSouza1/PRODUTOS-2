/**
 * LA FARMACIA NATURAL — Members Area Data (Español)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "A Természet Patikája", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Kérdés a tanfolyamhoz való hozzáférésről (A Természet Patikája)",
        emailBodyTemplate: "Kedves Támogató Csapat! Segítséget szeretnék kérni a Természet Patikája tagok területével kapcsolatban.%0A%0AA nevem: ______.",

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
            title: "A Természet Patikája — Teljes Útmutató",
            description: "A fő útmutató a saját természetes házipatika felépítéséhez. Tanuld meg, milyen gyógynövényeket használj, milyen receptek működnek igazán, és hogyan készítsd el őket lépésről lépésre anélkül, hogy szakértőnek kellene lenned.",
            badgeText: "FŐKÖNYV",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Egyszerű elkészítési módszerek kezdőknek",
                "Útmutatók gyógynövényekhez és konyhai összetevőkhöz",
                "Lépésről lépésre gyógynövényes receptek gyakori panaszokra"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-HU.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Főkönyv Letöltése"
        },
        {
            id: "b2",
            title: "Gyógyító Konyhai Receptek",
            description: "Fedezd fel a gyakori gyógynövények terápiás tulajdonságait, és tanuld meg biztonságosan használni őket a mindennapi jó közérzetért: nyugtató teák, szirupok, kenőcsök és még sok más.",
            badgeText: "BÓNUSZ #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Több mint 20 gyógynövény gyógyászati profilja",
                "Biztonsági irányelvek és adagolás",
                "Hagyományos gyógyító alkalmazások"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-HU.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Bónusz #1 Letöltése"
        },
        {
            id: "b3",
            title: "Gyógyító Gyógyteák",
            description: "Tanuld meg elkészíteni a nyugtató gyógynövényforrázatokat alvásra, emésztésre, relaxációra, torokfájásra, immunitásra és a mindennapi jó közérzetért egyszerű összetevőkből.",
            badgeText: "BÓNUSZ #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Keverékek alvásra, emésztésre és relaxációra",
                "Receptek mézzel, gyömbérrel, mentával és kamillával",
                "Lépésről lépésre házi elkészítéshez"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-HU.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Bónusz #2 Letöltése"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2