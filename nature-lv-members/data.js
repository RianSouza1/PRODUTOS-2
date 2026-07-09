/**
 * DABĪGĀ APTIEKA — Members Area Data (Latviešu)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Dabīgā Aptieka", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Jautājums par piekļuvi kursam (Dabīgā Aptieka)",
        emailBodyTemplate: "Sveika atbalsta komanda! Vēlos saņemt palīdzību saistībā ar savu Dabīgās Aptiekas biedru sadaļu.%0A%0AMans vārds ir: ______.",

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
            title: "Dabīgā Aptieka — Pilnīgs Ceļvedis",
            description: "Galvenais ceļvedis savas mājas dabīgās aptiekas izveidei. Uzziniet, kādus ārstniecības augus izmantot, kuras receptes patiešām darbojas un kā tās sagatavot soli pa solim, bez nepieciešamības būt ekspertam.",
            badgeText: "GALVENĀ GRĀMATA",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Vienkāršas pagatavošanas metodes iesācējiem",
                "Ārstniecības augu un virtuves sastāvdaļu ceļveži",
                "Pakāpeniskas augu receptes biežākajām kaitēm"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-LV.pdf",
            coverImage: "assets/covers/nature_IMG1_lv.png",
            buttonText: "Lejupielādēt Galveno Grāmatu"
        },
        {
            id: "b2",
            title: "Augu Dziedinošais Spēks",
            description: "Atklājiet populārāko ārstniecības augu terapeitiskās īpašības un uzziniet, kā tos droši lietot ikdienas labsajūtai: nomierinošas tējas, sīrupi, ziedes un daudz kas cits.",
            badgeText: "BONUSS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Vairāk nekā 20 ārstniecības augu medicīniskie profili",
                "Drošības vadlīnijas un dozēšana",
                "Tradicionālie dziednieciskie pielietojumi"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-LV.pdf",
            coverImage: "assets/covers/nature_IMG1_lv.png",
            buttonText: "Lejupielādēt Bonusu #1"
        },
        {
            id: "b3",
            title: "Dziedinošo Tēju Ceļvedis",
            description: "Uzziniet, kā no vienkāršām sastāvdaļām pagatavot nomierinošas augu tējas miegam, gremošanai, relaksācijai, kakla veselībai, imunitātei un ikdienas labsajūtai.",
            badgeText: "BONUSS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Maisījumi miegam, gremošanai un relaksācijai",
                "Receptes ar medu, ingveru, mētru un kumelīti",
                "Sagatavošana mājās soli pa solim"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-LV.pdf",
            coverImage: "assets/covers/nature_IMG1_lv.png",
            buttonText: "Lejupielādēt Bonusu #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2