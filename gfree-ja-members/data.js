/**
 * 簡単グルテンフリー — メンバーエリアデータ（日本語）
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // GLOBAL CONFIGURATION
    // ----------------------------------------------------------------------
    config: {
        brandName: "簡単グルテンフリー", // Name in the header

        // Official Contact (100% via Email)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "コースへのアクセスに関する質問（簡単グルテンフリー）",
        emailBodyTemplate: "サポートチームの皆様、簡単グルテンフリーのメンバーエリアについてサポートをお願いします。\n\n名前：______。",

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
            title: "簡単グルテンフリー・レシピ本",
            description: "初心者向けのシンプルな家庭料理。ステップバイステップのわかりやすいレシピで、グルテンフリー料理がいかに簡単で美味しいかを発見してください。",
            badgeText: "メイン本",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "初心者向けのシンプルな家庭料理",
                "ステップバイステップのヘルシーで美味しいレシピ",
                "グルテンフリーなライフスタイルへの必須ガイド"
            ],
            downloadUrl: "materials/G-FREE-1-JA.pdf",
            coverImage: "assets/covers/gf_IMG1_ja.png",
            buttonText: "メイン本をダウンロード"
        },
        {
            id: "b2",
            title: "毎日のグルテンフリー・ベーキングと定番料理",
            description: "より美味しいパン、スナック、デザート、保存版の家族のお気に入り。誰もが気に入る、柔らかくて美味しいグルテンフリーのパンやスイーツの作り方を学びましょう。",
            badgeText: "特典 #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "グルテンフリーのパンやスナックのレシピ",
                "美味しいデザートと家族のお気に入り料理",
                "いつでも完璧に仕上がるベーキングのコツ"
            ],
            downloadUrl: "materials/G-FREE-2-JA.pdf",
            coverImage: "assets/covers/gf_IMG1_ja.png",
            buttonText: "特典 #1をダウンロード"
        },
        {
            id: "b3",
            title: "30日間のグルテンフリー食事計画＆ショッピングガイド",
            description: "シンプルな週間メニュー、整理された買い物リスト、そして料理の準備に関する専門的なアドバイスで、スムーズかつストレスフリーな移行をサポートします。",
            badgeText: "特典 #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "完全な30日間の食事計画",
                "整理された週ごとの買い物リスト",
                "簡単な料理準備のための役立つヒント"
            ],
            downloadUrl: "materials/G-FREE-3-JA.pdf",
            coverImage: "assets/covers/gf_IMG1_ja.png",
            buttonText: "特典 #2をダウンロード"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OTHER PRODUCTS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v9