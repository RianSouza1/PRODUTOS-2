/**
 * Excel Mastery — 会员专区信息（中文）
 */

const APP_DATA = {
    config: {
        brandName: "Excel Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "关于访问权限的咨询（Excel Mastery）",
        emailBodyTemplate: "您好，支持团队。我需要关于Excel Mastery会员专区访问权限的帮助。\n\n我的名字是：______。",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "从零到专业级 Excel — 2026版",
            description: "适合初学者的实用指南，涵盖试算表、整理与日常生产力。从第一个单元格到高级工具，一步一步掌握Excel。",
            badgeText: "主要教材",
            badgeColor: "#1a7a45",
            features: [
                "初学者试算表与数据整理",
                "日常生产力与客户名单管理",
                "用Excel掌控财务与时间规划"
            ],
            downloadUrl: "materials/Excel-1-CHN.pdf",
            coverImage: "assets/covers/excel_IMG1_zh.png",
            buttonText: "下载主要教材"
        },
        {
            id: "b2",
            title: "Excel 公式、函数与智慧工作流程 — 2026年版",
            description: "以更快速度解决Excel任务的实用指南。使用公式与函数，将普通试算表变成真正能解决问题的工具。",
            badgeText: "奖励 #1",
            badgeColor: "#D97706",
            features: [
                "高级公式与函数",
                "自动计算与智慧工作流程",
                "更快速度解决Excel任务"
            ],
            downloadUrl: "materials/Excel-2-CHN.pdf",
            coverImage: "assets/covers/excel_IMG1_zh.png",
            buttonText: "下载奖励 #1"
        },
        {
            id: "b3",
            title: "Excel 试算表、报告与公式 — 2026版",
            description: "将数据转化为清晰且专业报告的实用指南。学习如何使用试算表和报告有效呈现数据。",
            badgeText: "奖励 #2",
            badgeColor: "#7C3AED",
            features: [
                "专业仪表板与视觉化面板",
                "汇总报告与枢纽分析表",
                "向经理、客户与团队呈现数据"
            ],
            downloadUrl: "materials/Excel-3-CHN.pdf",
            coverImage: "assets/covers/excel_IMG1_zh.png",
            buttonText: "下载奖励 #2"
        }
    ],

    otherProducts: []
};
