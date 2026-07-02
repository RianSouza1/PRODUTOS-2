/**
 * 自然药房 — Members Area Data (简体中文)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "自然药房", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "关于课程访问的问题 (自然药房)",
        emailBodyTemplate: "您好支持团队！我需要关于我的自然药房会员区的帮助。%0A%0A我的名字是：______。",

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
            title: "自然药房 — 完整指南",
            description: "在家建立您自己的自然药房的主要指南。学习使用哪些草药，哪些配方真正有效，以及如何一步一步准备，无需成为专家。",
            badgeText: "主书",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "适合初学者的简单制作方法",
                "草药和厨房食材指南",
                "针对常见不适的一步步草药配方"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-ZH.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "下载主书"
        },
        {
            id: "b2",
            title: "草药的治愈力量",
            description: "探索常见药用草药的治疗功效，并学习如何安全地将它们用于日常健康：舒缓茶、糖浆、软膏等。",
            badgeText: "赠品 #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "超过20种草药的药用特征",
                "安全指南和剂量建议",
                "传统治愈应用"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-ZH.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "下载赠品 #1"
        },
        {
            id: "b3",
            title: "治愈草药茶指南",
            description: "学习如何使用简单的原料为睡眠、消化、放松、咽喉健康、免疫力和日常健康制作舒缓的草药茶。",
            badgeText: "赠品 #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "针对睡眠、消化和放松的配方",
                "包含蜂蜜、生姜、薄荷和洋甘菊的配方",
                "在家一步步制作"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-ZH.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "下载赠品 #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2