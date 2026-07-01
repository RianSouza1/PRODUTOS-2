/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "養蜂の熟練",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "コースアクセス（養蜂）についての質問",
        emailBodyTemplate: "こんにちは、サポートチームです！養蜂メンバーエリアについてサポートが必要です。%0A%0A私の名前は： ______。",
        showFloatingHelp: true
    },

    videos: [
        {
            id: 'v1',
            title: 'Part 1: Intro to Beekeeping',
            duration: 'Video 1',
            youtubeId: 'qo4Vs59ndNU'
        },
        {
            id: 'v2',
            title: 'Part 2: The Beehive',
            duration: 'Video 2',
            youtubeId: 'vCCHMEJZuJc'
        },
        {
            id: 'v3',
            title: 'Part 3: Essential Beekeeping Tools',
            duration: 'Video 3',
            youtubeId: 'YXZmtnnkxDE'
        },
        {
            id: 'v4',
            title: 'Part 4: Honey Bee Biology',
            duration: 'Video 4',
            youtubeId: 'oTlP9sYyZ9s'
        },
        {
            id: 'v5',
            title: 'Part 5: Considerations for Placing Bee Colonies',
            duration: 'Video 5',
            youtubeId: 'PT6VnrOX9zU'
        },
        {
            id: 'v6',
            title: 'Part 6: Starting New Bee Colonies',
            duration: 'Video 6',
            youtubeId: 'ppLH1tXR_9s'
        },
        {
            id: 'v7',
            title: 'Part 7: First Year Bee Colony Management',
            duration: 'Video 7',
            youtubeId: 'FYoTrwXCEWg'
        },
        {
            id: 'v8',
            title: 'Part 8: Second Year Bee Colony Management',
            duration: 'Video 8',
            youtubeId: 'rYDQA5I9dRs'
        },
        {
            id: 'v9',
            title: 'Part 9: Harvesting Your Honey',
            duration: 'Video 9',
            youtubeId: 'OsEK_iSdsis'
        },
        {
            id: 'v10',
            title: 'Part 10: Keeping Hives Healthy',
            duration: 'Video 10',
            youtubeId: 'SOH4UvYe-Tg'
        },
        {
            id: 'v11',
            title: 'Part 11: Managing Parasitic Mites',
            duration: 'Video 11',
            youtubeId: '6RieuFwg4eY'
        },
        {
            id: 'v12',
            title: 'Part 12: Managing Small Hive Beetles',
            duration: 'Video 12',
            youtubeId: 'iy5r8Or87_g'
        },
        {
            id: 'v13',
            title: 'Part 13: Managing Wax Moths',
            duration: 'Video 13',
            youtubeId: 'VG3XQQrDoIs'
        },
        {
            id: 'v14',
            title: 'Part 14: Minor Bee Hive Pests',
            duration: 'Video 14',
            youtubeId: '-fxKYKVOKG4'
        },
        {
            id: 'v15',
            title: 'Part 15: Integrated Pest Management',
            duration: 'Video 15',
            youtubeId: 'iLhNdkVDCnw'
        },
        {
            id: 'v16',
            title: 'Part 16: Honey Bee Diseases',
            duration: 'Video 16',
            youtubeId: 'ZEKD5HlIuHM'
        },
        {
            id: 'v17',
            title: 'Part 17: Final Thoughts on Honey Bees',
            duration: 'Video 17',
            youtubeId: 'JSPSqhW6lsU'
        },
        {
            id: 'v18',
            title: 'Is Beekeeping Right for You?',
            duration: 'Video 18',
            youtubeId: 'X3Xp1lQpxOc'
        },
        {
            id: 'v19',
            title: 'How to Install Honey Bees into a Hive',
            duration: 'Video 19',
            youtubeId: 'S4A8CTALPDI'
        }
    ],

    books: [
        {
            id: "b1",
            title: "みんなの養蜂",
            description: "最初の巣箱の設置から一年中繁盛する養蜂場の管理まで、シンプルで収益性の高い養蜂の完全ガイド。",
            badgeText: "メインブック",
            badgeColor: "#E5A817",
            features: [
                "完全な Hive セットアップ ガイド",
                "季節管理カレンダー",
                "ダウンロードブック"
            ],
            downloadUrl: "materials/ENG 01-Beekeeping-for-All (1).pdf",
            coverImage: "assets/covers/beekeeping_for_all.png",
            buttonText: "裏庭の養蜂家"
        },
        {
            id: "b2",
            title: "裏庭の養蜂家",
            description: "家庭養蜂の重要なガイド — 裏庭でミツバチを安全かつ上手に飼う方法を学びましょう。",
            badgeText: "ガイド",
            badgeColor: "#6B8F3C",
            features: [
                "裏庭の巣箱の配置",
                "初心者に優しい方法",
                "コロニーの健康と維持"
            ],
            downloadUrl: "materials/ENG 02 -The-Backyard-Beekeepers.pdf",
            coverImage: "assets/covers/backyard_beekeepers.png",
            buttonText: "ダウンロードガイド"
        },
        {
            id: "b3",
            title: "裏庭でのミード作り",
            description: "自宅で蜂蜜酒を作る古代の芸術、自分で収穫した蜂蜜を使った段階的なレシピを学びましょう。",
            badgeText: "ボーナス",
            badgeColor: "#B45309",
            features: [
                "伝統的なミードのレシピ",
                "発酵技術",
                "フレーバーのバリエーションとヒント"
            ],
            downloadUrl: "materials/ENG 03-BackyardMeadMaking-pdf.pdf",
            coverImage: "assets/covers/mead_making.png",
            buttonText: "ダウンロード特典"
        },
        {
            id: "b4",
            title: "養蜂が簡単に",
            description: "マーカス・ウィリアムズによる養蜂への簡略化されたアプローチ — 早く結果を求める初心者向けの実用的なヒントとコツ。",
            badgeText: "余分な",
            badgeColor: "#059669",
            features: [
                "クイックスタート方法",
                "避けるべきよくある間違い",
                "実用的なヒントとコツ"
            ],
            downloadUrl: "materials/ENG 04-Beekeeping-Made-Easy-by-Marcus-Williams.pdf",
            coverImage: "assets/covers/beekeeping_made_easy.png",
            buttonText: "追加のダウンロード"
        }
    ],

    otherProducts: []
};
