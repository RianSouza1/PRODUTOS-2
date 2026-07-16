/**
 * 가정에서의 식품 보존 — 회원 영역 데이터 (한국어)
 * v1
 */

const APP_DATA = {
    config: {
        brandName: "가정에서의 식품 보존",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "접속 관련 문의 (가정에서의 식품 보존)",
        emailBodyTemplate: "안녕하세요, 지원팀! 가정에서의 식품 보존 회원 영역 접속에 도움을 요청합니다.\n\n이름: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "2026년 식품 보존 및 저장에 대한 상세 가이드",
            description: "물통식, 압력식, 발효식품, 잼, 소스, 안전한 저장, 가정에서의 식품 보존에 관한 초보자를 위한 실용 가이드.",
            badgeText: "기본 도서",
            badgeColor: "#b45309",
            features: [
                "물통식 및 압력식 통조림 가이드",
                "수제 잼, 소스 및 절임 식품 만들기",
                "안전한 보존 방법과 식품 저장 기술"
            ],
            downloadUrl: "materials/Canning-1-KO.pdf",
            coverImage: "assets/covers/can_IMG1_ko.png",
            buttonText: "기본 도서 다운로드"
        },
        {
            id: "b2",
            title: "장기 보관을 위한 식재료 가이드",
            description: "수제 건조 믹스, 작은 분량으로 나누어 유리병에 담은 것, 수프와 디저트용 믹스, 향신료, 그리고 일상적인 팬트리용 실용 재료 — 멸균 장비 없이.",
            badgeText: "보너스 #1",
            badgeColor: "#D97706",
            features: [
                "수제 건조 믹스 및 홈베이킹용 믹스",
                "수프, 향신료 및 알찬 팬트리 구성법",
                "팬트리 정리로 시간과 장보기 비용 절약"
            ],
            downloadUrl: "materials/Canning-2-KO.pdf",
            coverImage: "assets/covers/can_IMG1_ko.png",
            buttonText: "보너스 #1 다운로드"
        },
        {
            id: "b3",
            title: "가정 발효 초보 가이드",
            description: "간단한 발효 채소, 사워크라우트, 발효 피클, 김치 스타일 레시피, 소금물, 향신료, 발효 음료, 문제 해결 및 안전한 주방 방법.",
            badgeText: "보너스 #2",
            badgeColor: "#7C3AED",
            features: [
                "사워크라우트, 수제 피클 및 김치 스타일 레시피",
                "발효 음료, 소금물 염수 및 수제 향신료",
                "안전한 위생 수칙 및 발효 문제 해결 가이드"
            ],
            downloadUrl: "materials/Canning-3-KO.pdf",
            coverImage: "assets/covers/can_IMG1_ko.png",
            buttonText: "보너스 #2 다운로드"
        }
    ],

    otherProducts: []
};