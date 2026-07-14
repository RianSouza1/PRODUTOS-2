/**
 * 轻松无麸质 — 会员区数据 (简体中文)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "轻松无麸质", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "关于课程访问的问题 (轻松无麸质)",
        emailBodyTemplate: "您好支持团队！我需要关于我的轻松无麸质会员区的帮助。\n\n我的名字是：______。",

        // Show floating "?" help button on all screens
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VIDEOS (Video course) — empty if no videos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. BOOKS (E-books and PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "轻松无麸质食谱",
            description: "适合初学者的简单日常膳食。通过实用的步骤食谱，探索无麸质烹饪是多么轻松美味。",
            badgeText: "主书",
            badgeColor: "#10B981",
            features: [
                "适合初学者的简单日常膳食",
                "一步一步的美味健康食谱",
                "无麸质生活方式的基本指南"
            ],
            downloadUrl: "materials/G-FREE-1-ZH.pdf",
            coverImage: "assets/covers/gf_IMG1_zh.png",
            buttonText: "下载主书"
        },
        {
            id: "b2",
            title: "日常无麸质烘焙和舒适美食",
            description: "更好的面包、小吃、甜点和家庭最爱。学会烘焙柔软美味的无麸质面包和每个人都会喜欢的点心。",
            badgeText: "赠品 #1",
            badgeColor: "#F59E0B",
            features: [
                "无麸质面包和点心食谱",
                "美味甜点和家庭最爱美食",
                "每次烘焙都能获得完美效果的技巧"
            ],
            downloadUrl: "materials/G-FREE-2-ZH.pdf",
            coverImage: "assets/covers/gf_IMG1_zh.png",
            buttonText: "下载赠品 #1"
        },
        {
            id: "b3",
            title: "30天无麸质饮食计划和购物指南",
            description: "简单的每周菜单、井井有条的购物清单和专业的备餐帮助，让您的过渡顺畅无压力。",
            badgeText: "赠品 #2",
            badgeColor: "#3B82F6",
            features: [
                "完整的30天饮食计划",
                "井井有条的每周购物清单",
                "轻松准备膳食的有用技巧"
            ],
            downloadUrl: "materials/G-FREE-3-ZH.pdf",
            coverImage: "assets/covers/gf_IMG1_zh.png",
            buttonText: "下载赠品 #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v9