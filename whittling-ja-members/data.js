/**
 * ウッドカービング＆木工細工入門 — メンバー専用エリア (日本語)
 */

const APP_DATA = {
    config: {
        brandName: "ウッドカービング＆木工細工入門",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "アクセスに関するお問い合わせ（ウッドカービング＆木工細工入門）",
        emailBodyTemplate: "サポートチームの皆様へ\n\nウッドカービング＆木工細工入門のメンバーエリアへのアクセスについてサポートをお願いします。\n\nお名前：______",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "初心者向けウッドカービング — 道具、安全＆簡単な最初のプロジェクト",
            description: "安全に手彫り木工を始めるための実践的で包括的なステップバイステップガイド。",
            badgeText: "第1巻",
            badgeColor: "#475569",
            features: [
                "基本の安全ルールと保護具の準備",
                "木目と木肌を正しく読む技術",
                "簡単に作れる初めての木彫りプロジェクト"
            ],
            downloadUrl: "materials/WHITTLING-1-JP.pdf",
            coverImage: "assets/covers/whi_IMG1_jp.png",
            buttonText: "第1巻（PDF）をダウンロード"
        },
        {
            id: "b2",
            title: "かんたん木工細工プロジェクト — ステップバイステップの技術＆テクニック",
            description: "第1巻の応用編 — 基本的な直線カットから立体的な木彫りフィギュアまで構造的に学びます。",
            badgeText: "メインガイド",
            badgeColor: "#8B5A2B",
            features: [
                "11種類の詳しい木彫り・細工プロジェクト",
                "型紙の拡大縮小と木材への転写テクニック",
                "左右対称と立体フォルムのコントロール術"
            ],
            downloadUrl: "materials/WHITTLING-2-JP.pdf",
            coverImage: "assets/covers/whi_IMG1_jp.png",
            buttonText: "メインガイド（第2巻）をダウンロード"
        },
        {
            id: "b3",
            title: "ウッドカービング：仕上げと極意 — 研ぎ陣、ディテール加工＆表面処理",
            description: "ナイフの刃研ぎ、精密な細部掘り込み、仕上げの表面処理。全3巻の最終巻。",
            badgeText: "第3巻",
            badgeColor: "#2E5A44",
            features: [
                "繊細な彫り込みとナイフ研ぎの専門技法",
                "オイル・ワックス・塗料の選び方と塗布",
                "完璧な作品仕上げを達成する方法"
            ],
            downloadUrl: "materials/WHITTLING-3-JP.pdf",
            coverImage: "assets/covers/whi_IMG1_jp.png",
            buttonText: "第3巻（PDF）をダウンロード"
        }
    ],

    otherProducts: []
};
