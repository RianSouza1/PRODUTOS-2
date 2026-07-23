/**
 * Word Mastery — メンバーエリア (日本語)
 */

const APP_DATA = {
    config: {
        brandName: "Word Mastery",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "アクセスに関するお問い合わせ (Word Mastery)",
        emailBodyTemplate: "サポートチームの皆様へ。Word Masteryのメンバー専用エリアへのアクセスに関してサポートをお願いいたします。\n\nお名前: ______。",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "WORD 初心者からプロへ — 2026年版 第1部（全3部）",
            description: "初めての方にも安心の完全ガイド ― Microsoft Word でわかりやすく、整理された、プロ品質 of ビジネス文書を作成する方法を学びましょう。",
            badgeText: "メインガイド",
            badgeColor: "#2563EB",
            features: [
                "Microsoft Wordの基本操作をマスター",
                "わかりやすく整理された文書の作成方法",
                "日常の文書管理に役立つ実践的なコツ"
            ],
            downloadUrl: "materials/WORD-1-JP.pdf",
            coverImage: "assets/covers/word_IMG1_jp.png",
            buttonText: "メインガイドをダウンロード"
        },
        {
            id: "b2",
            title: "デザイン、スタイル Word のスマートなワークフロー — 2026年版（全3巻 第2巻）",
            description: "Microsoft Word で一貫性があり、明確に構造化された、プロフェッショナルな文書を作成するための実践ガイド。",
            badgeText: "ボーナス #1",
            badgeColor: "#475569",
            features: [
                "高度なスタイル設定とデザイン機能の活用",
                "一貫した構造の文書レイアウト設計",
                "効率的でスマートな作業フローの構築"
            ],
            downloadUrl: "materials/WORD-2-JP.pdf",
            coverImage: "assets/covers/word_IMG1_jp.png",
            buttonText: "ボーナス #1 をダウンロード"
        },
        {
            id: "b3",
            title: "Word テンプレート・差し込み印刷 & 高度な活用技術 — 2026年版（第3部 全3巻）",
            description: "Microsoft Word における再利用可能な文書の作成、個別対応の書簡作成、インタラクティブなフォームおよびスマートな自動化。",
            badgeText: "ボーナス #2",
            badgeColor: "#0F766E",
            features: [
                "再利用可能なテンプレートとフォームの設計",
                "個別対応レターを作成する差し込み印刷",
                "Wordに備わるスマートな自動化ツールの活用"
            ],
            downloadUrl: "materials/WORD-3-JP.pdf",
            coverImage: "assets/covers/word_IMG1_jp.png",
            buttonText: "ボーナス #2 をダウンロード"
        }
    ],

    otherProducts: []
};
