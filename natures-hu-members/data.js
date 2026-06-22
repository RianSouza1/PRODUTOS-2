/**
 * NATURE'S APOTHECARY — Members Area Data
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Természet Patikája", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Kérdés a kurzushoz való hozzáférésről (Természet Patikája)",
        emailBodyTemplate: "Kedves ügyfélszolgálati csapat! Segítséget szeretnék kérni a Természet Patikája tagok területével kapcsolatban.%0A%0AA nevem: ______.",

        // Mostrar ícone de "? Ajuda" flutuante em todas as telas
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VÍDEOS (Video Course) - Ocultado ou Vazio se não houver vídeos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. LIVROS (E-books e PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Természet Patikája Kézikönyv",
            description: "A teljes útmutató a saját otthoni természetes patika felépítéséhez. Ismerje meg, milyen gyógynövényeket használjon, mely receptek működnek igazán, és hogyan készítse el őket lépésről lépésre.",
            badgeText: "FŐ KÖNYV",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Kezdőbarát elkészítési módszerek",
                "Gyógynövény- és konyhai alapanyag-útmutatók",
                "Lépésről lépésre gyógynövényes receptek"
            ],
            downloadUrl: "materials/Natures 1 - HU.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Fő könyv letöltése"
        },
        {
            id: "b2",
            title: "A gyógynövények gyógyító ereje",
            description: "Fedezze fel a gyakori gyógynövények terápiás tulajdonságatait, és tanulja meg, hogyan használhatja őket biztonságosan a mindennapi egészségért, nyugtató teákhoz és otthoni ápoláshoz.",
            badgeText: "BÓNUSZ #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Több mint 20 gyógynövény gyógyászati profilja",
                "Biztonsági irányelvek és adagolás",
                "Hagyományos gyógyászati alkalmazások"
            ],
            downloadUrl: "materials/Natures 2 - HU.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Bónusz #1 letöltése"
        },
        {
            id: "b3",
            title: "Barbara O'Neill ihlette gyógymódok",
            description: "A hagyományos gyógymódok és a természetes wellness gyakorlatok által ihletett útmutató segít egészségesebb, vegyszermentes életet élni természetes terápiák segítségével.",
            badgeText: "BÓNUSZ #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Hagyományos természetes gyógymódok",
                "Tippek a vegyszermentes élethez",
                "Barbara O'Neill ihlette gyakorlatok"
            ],
            downloadUrl: "materials/Natures 3 - HU.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Bónusz #2 letöltése"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
