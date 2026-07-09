/**
 * 천연 약방 — Members Area Data (한국어)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "천연 약방", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "코스 액세스에 관한 문의 (천연 약방)",
        emailBodyTemplate: "안녕하세요 지원 팀! 천연 약방 회원 공간 이용에 도움이 필요합니다.%0A%0A제 이름은: ______ 입니다.",

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
            title: "천연 약방 — 완전한 가이드",
            description: "집에서 자신만의 천연 약방을 만들기 위한 메인 가이드입니다. 어떤 허브를 사용할지, 어떤 레시피가 실제로 효과가 있는지, 전문가가 아니어도 쉽게 따라 할 수 있는 단계별 준비 방법을 알아보세요.",
            badgeText: "메인 도서",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "초보자를 위한 간단한 준비 방법",
                "허브 및 주방 식재료 가이드",
                "흔한 질환을 위한 단계별 허브 레시피"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-KO.pdf",
            coverImage: "assets/covers/nature_IMG1_ko.png",
            buttonText: "메인 도서 다운로드"
        },
        {
            id: "b2",
            title: "허브의 치유력",
            description: "가장 흔한 약용 허브의 치료적 특성을 알아보고 일상에서 안전하게 사용하는 방법을 배우세요: 진정 차, 시럽, 연고 등.",
            badgeText: "보너스 #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "20가지 이상 허브의 약용 프로필",
                "안전 가이드라인 및 복용량",
                "전통적인 치유 방법"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-KO.pdf",
            coverImage: "assets/covers/nature_IMG1_ko.png",
            buttonText: "보너스 #1 다운로드"
        },
        {
            id: "b3",
            title: "치유 허브티 가이드",
            description: "수면, 소화, 휴식, 목 건강, 면역력 및 일상 건강을 위한 진정 허브 주입액을 간단한 재료로 만드는 방법을 알아봅니다.",
            badgeText: "보너스 #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "수면, 소화, 휴식을 위한 블렌드",
                "꿀, 생강, 민트, 카모마일을 곁들인 레시피",
                "집에서 직접 만드는 단계별 안내"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-KO.pdf",
            coverImage: "assets/covers/nature_IMG1_ko.png",
            buttonText: "보너스 #2 다운로드"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v2