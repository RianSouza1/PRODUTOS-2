/**
 * 燻製肉＆バーベキュー — メンバーエリア (日本語)
 */

const APP_DATA = {
    config: {
        brandName: "燻製肉＆バー베キュー",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "アクセスに関するお問い合わせ（燻製肉＆バーベキュー）",
        emailBodyTemplate: "サポートチームの皆様へ。燻製肉＆バーベキューのメンバーエリアへのアクセスに関して問い合わせいたします。\n\nお名前：______。",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "初心者向け本格スモーク肉マスターガイド — 2026年版",
            description: "火加減、煙、温度管理、そして極上の柔らかさを自宅でマスター。自宅にいながらステップバイステップで絶品スモーク肉を失敗なく作れる完全入門ガイド。",
            badgeText: "メインガイド",
            badgeColor: "#BF360C",
            features: [
                "火加減・煙・温度の精密なコントロール技術",
                "初心者でも迷わない丁寧なステップバイステップ手順",
                "家庭用スモーカーやグリルで美味しく仕上げる実践テクニック"
            ],
            downloadUrl: "materials/SMOKING-1-JP.pdf",
            coverImage: "assets/covers/smo_IMG1_jp.png",
            buttonText: "メインガイドをダウンロード (PDF)"
        },
        {
            id: "b2",
            title: "極上バーベキュー＆スモークレシピ集 — 2026年版",
            description: "風味豊かな本格スモーク肉、絶品サイドディッシュ、フルコースBBQメニュー。家族の集まりや休日、パーティーを格上げする本格レシピ。",
            badgeText: "特典 #1",
            badgeColor: "#8D6E63",
            features: [
                "伝統的で本格的なスモーク肉の人気レシピ",
                "本場アメリカンスタイルの定番BBQサイドディッシュ",
                "あらゆるイベントに対応するバランス抜群のコース献立"
            ],
            downloadUrl: "materials/SMOKING-2-JP.pdf",
            coverImage: "assets/covers/smo_IMG1_jp.png",
            buttonText: "特典 #1をダウンロード (PDF)"
        },
        {
            id: "b3",
            title: "BBQスパイスラブ・ソース＆マリネ液の秘密 — 2026年版",
            description: "あらゆる肉の部位に深い旨味と最高の香りを創り出す。料理を一口で病みつきにする究極の味付けコンプリートガイド。",
            badgeText: "特典 #2",
            badgeColor: "#E64A19",
            features: [
                "極上ドライラブ（自家製スパイスブレンド）の秘伝レシピ",
                "肉の種類と部位に合わせたオリジナルソース＆マリネ液",
                "グリルのプロが実践する味の引き出し方とコーティング技術"
            ],
            downloadUrl: "materials/SMOKING-3-JP.pdf",
            coverImage: "assets/covers/smo_IMG1_jp.png",
            buttonText: "特典 #2をダウンロード (PDF)"
        }
    ],

    otherProducts: []
};
