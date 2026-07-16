/**
 * 家庭食物罐藏指南 — 会员区数据 (中文)
 * v1
 */

const APP_DATA = {
    config: {
        brandName: "家庭食物罐藏指南",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "关于访问权限的疑问 (家庭食物罐藏指南)",
        emailBodyTemplate: "您好，支持团队！我在访问我的家庭食物罐藏指南会员区时需要帮助。\n\n我的名字是：______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "2026 年食品保存与储存详尽指南",
            description: "水浴法、压力罐装、发酵食品、果酱、酱料、安全储存、居家食品保存的初学者实用指南。",
            badgeText: "核心指南",
            badgeColor: "#b45309",
            features: [
                "水浴法与压力罐装初学者指南",
                "自制果酱、酱汁与居家罐藏",
                "安全食物储存与长期保存方法"
            ],
            downloadUrl: "materials/Canning-1-ZH.pdf",
            coverImage: "assets/covers/can_IMG1_zh.png",
            buttonText: "下载核心指南"
        },
        {
            id: "b2",
            title: "长期保存的食材指南",
            description: "自制干燥混合、分装成小份并装入玻璃罐、汤品与甜点用混合料、香料，以及日常储粮的实用材料 — 不需要消毒设备。",
            badgeText: "赠品 #1",
            badgeColor: "#D97706",
            features: [
                "自制干燥与烘焙调理包",
                "汤品、香料与食品储藏室整理",
                "利用储备充足的储藏室节省时间与金钱"
            ],
            downloadUrl: "materials/Canning-2-ZH.pdf",
            coverImage: "assets/covers/can_IMG1_zh.png",
            buttonText: "下载赠品 #1"
        },
        {
            id: "b3",
            title: "家庭发酵新手指南",
            description: "简单发酵蔬菜、酸菜、发酵腌黄瓜、泡菜风格食谱、盐水、香料、发酵饮品、问题排解与安全的厨房方法。",
            badgeText: "赠品 #2",
            badgeColor: "#7C3AED",
            features: [
                "简单发酵蔬菜、酸菜与泡菜食谱",
                "发酵饮品、盐水与自制香料",
                "安全的厨房方法与问题排解"
            ],
            downloadUrl: "materials/Canning-3-ZH.pdf",
            coverImage: "assets/covers/can_IMG1_zh.png",
            buttonText: "下载赠品 #2"
        }
    ],

    otherProducts: []
};