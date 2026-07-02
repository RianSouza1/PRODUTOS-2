/**
 * 自然薬房 — Members Area Data (日本語)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "自然薬房", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "コースへのアクセスに関する質問 (自然薬房)",
        emailBodyTemplate: "サポートチームの皆様、こんにちは。自然薬房のメンバーエリアについてサポートをお願いいたします。%0A%0A私の名前は: ______ です。",

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
            title: "自然薬房 — 完全ガイド",
            description: "自宅で自分だけの自然薬房を作るためのメインガイド。専門知識がなくても、どのハーブを使い、どのレシピが実際に効果的で、どのようにステップバイステップで準備するかを学びます。",
            badgeText: "メイン書籍",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "初心者向けの簡単な準備方法",
                "ハーブとキッチンの食材ガイド",
                "一般的な不調のためのステップバイステップのハーブレシピ"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-JA.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "メイン書籍をダウンロード"
        },
        {
            id: "b2",
            title: "ハーブの癒やしの力",
            description: "一般的な薬用ハーブの治療特性を発見し、日常生活で安全に使用する方法を学びます：落ち着くお茶、シロップ、軟膏など。",
            badgeText: "特典 #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "20種類以上のハーブの薬効プロフィール",
                "安全ガイドラインと使用量",
                "伝統的な癒やしの応用"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-JA.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "特典 #1 をダウンロード"
        },
        {
            id: "b3",
            title: "癒やしのハーブティーガイド",
            description: "睡眠、消化、リラクゼーション、喉のケア、免疫力、日々の健康のために、シンプルな食材で心休まるハーブティーを作る方法を学びます。",
            badgeText: "特典 #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "睡眠、消化、リラクゼーションのためのブレンド",
                "蜂蜜、生姜、ミント、カモミールを使ったレシピ",
                "自宅でできるステップバイステップの作り方"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-JA.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "特典 #2 をダウンロード"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2