/**
 * 글루텐 없이 간단하게 요리하기 — 회원 영역 데이터 (한국어)
 */

const APP_DATA = {
    config: {
        brandName: "글루텐 없이 간단하게 요리하기",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "회원 영역 접속 문의 (글루텐 없이 간단하게 요리하기)",
        emailBodyTemplate: "안녕하세요, 고객 지원팀! 글루텐 없이 간단하게 요리하기 회원 영역 접속에 도움이 필요합니다.\n\n이름: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "글루텐 없이 간단하게 요리하기",
            description: "초보자를 위한 쉽고 일상적인 레시피. 글루텐 없는 요리가 얼마나 쉽고 맛있을 수 있는지 단계별 실용 레시피로 알아보세요.",
            badgeText: "메인 도서",
            badgeColor: "#10B981",
            features: [
                "초보자를 위한 쉽고 일상적인 식사",
                "맛있고 건강한 단계별 레시피",
                "글루텐 없는 생활을 위한 기본 가이드"
            ],
            downloadUrl: "materials/G-FREE-1-KO.pdf",
            coverImage: "assets/covers/gf_IMG1_ko.png",
            buttonText: "메인 도서 다운로드"
        },
        {
            id: "b2",
            title: "일상 속의 위로가 되는 글루텐 프리 요리와 음식",
            description: "온 가족을 위한 더 맛있는 빵, 간식, 디저트, 그리고 좋아하는 요리. 부드럽고 맛있는 글루텐 프리 빵과 온 가족이 좋아할 디저트 만드는 법을 배워보세요.",
            badgeText: "보너스 #1",
            badgeColor: "#F59E0B",
            features: [
                "글루텐 프리 빵과 간식 레시피",
                "맛있는 디저트와 온 가족이 좋아하는 요리",
                "매번 완벽한 결과를 위한 제빵 팁"
            ],
            downloadUrl: "materials/G-FREE-2-KO.pdf",
            coverImage: "assets/covers/gf_IMG1_ko.png",
            buttonText: "보너스 #1 다운로드"
        },
        {
            id: "b3",
            title: "30일간의 글루텐 프리 식단 계획과 장보기 목록",
            description: "간단한 주간 메뉴, 정리된 장보기 목록, 식사 준비 가이드로 스트레스 없이 편안하게 전환할 수 있도록 도와드립니다.",
            badgeText: "보너스 #2",
            badgeColor: "#3B82F6",
            features: [
                "완전한 30일 식단 계획",
                "정리된 주간 장보기 목록",
                "간편한 식사 준비를 위한 유용한 팁"
            ],
            downloadUrl: "materials/G-FREE-3-KO.pdf",
            coverImage: "assets/covers/gf_IMG1_ko.png",
            buttonText: "보너스 #2 다운로드"
        }
    ],

    otherProducts: []
};