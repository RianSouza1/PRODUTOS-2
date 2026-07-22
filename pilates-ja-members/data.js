/**
 * ピラティス＆ウェルネス — メンバーエリア (日本語)
 */

const APP_DATA = {
    config: {
        brandName: "ピラティス＆ウェルネス",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "アクセスに関するお問い合わせ (ピラティス＆ウェルネス)",
        emailBodyTemplate: "サポートチームの皆様、ピラティス＆ウェルネスのメンバーエリアへのアクセスについてサポートをお願いいたします。\n\nお名前: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "はじめてのピラティス — 2026年版",
            description: "自分のペースで、無理せず。体の力と柔軟性、そして自信を少しずつ育てていく。自宅でできる、ていねいなステップアップガイドです。",
            badgeText: "メイン教材",
            badgeColor: "#C07A68",
            features: [
                "自宅でできる初心者向けのステップバイステップのエクササイズ",
                "姿勢、柔軟性、そして体幹の筋力を向上させます",
                "体に無理のない安全な動きをサポート"
            ],
            downloadUrl: "materials/PILATES-1-JP.pdf",
            coverImage: "assets/covers/pil_IMG1_jp.png",
            buttonText: "メイン教材をダウンロード"
        },
        {
            id: "b2",
            title: "ウォールピラティス — 2026年版",
            description: "筋力・バランス・柔軟性を無理なく高める、自宅でできるやさしいエクササイズです。壁をサポートとして活用し、姿勢を正して体幹を強化しましょう。",
            badgeText: "ボーナス #1",
            badgeColor: "#5B8C7D",
            features: [
                "より良いバランスとサポートのために壁を活用",
                "体全体のためのやさしい可動性エクササイズ",
                "特別な器具なしで自宅でトレーニングするのに最適"
            ],
            downloadUrl: "materials/PILATES-2-JP.pdf",
            coverImage: "assets/covers/pil_IMG1_jp.png",
            buttonText: "ボーナス #1をダウンロード"
        },
        {
            id: "b3",
            title: "シニアのための 30 日間ピラティス — 2026年版",
            description: "筋力・バランス・柔軟性・自信を、ご自身のペースで少しずつ育てていく、やさしい毎日のプログラムです。安全にアクティブであり続けたい大人の方に最適です。",
            badgeText: "ボーナス #2",
            badgeColor: "#9C6A88",
            features: [
                "毎日のやさしいセッションが含まれる完全な30日間プラン",
                "バランス、関節 of 可動性、そしてエネルギーの向上に焦点を当てます",
                "どんなフィットネスレベルでも自宅で安全に実践可能"
            ],
            downloadUrl: "materials/PILATES-3-JP.pdf",
            coverImage: "assets/covers/pil_IMG1_jp.png",
            buttonText: "ボーナス #2をダウンロード"
        }
    ],

    otherProducts: []
};
