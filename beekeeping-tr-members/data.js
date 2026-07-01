/**
 * BEEKEEPING MASTERY — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Arıcılık Ustalığı",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Kursa erişimle ilgili soru (Arıcılık)",
        emailBodyTemplate: "Merhaba destek ekibi! Arıcılık üyeleri alanımla ilgili yardıma ihtiyacım var.%0A%0ABenim adım: ______.",
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
            title: "Herkes İçin Arıcılık",
            description: "İlk kovanınızı kurmaktan yıl boyunca gelişen bir arı kovanını yönetmeye kadar basit ve karlı arıcılık için eksiksiz bir rehber.",
            badgeText: "ANA KİTAP",
            badgeColor: "#E5A817",
            features: [
                "Hive Kurulum Kılavuzunu Tamamlayın",
                "Sezonsal Yönetim Takvimi",
                "Kitabı İndir"
            ],
            downloadUrl: "materials/Yeni-Baslayanlar-icin-Aricilik-TR (1).pdf",
            coverImage: "assets/covers/bee_IMG1_tr.png",
            buttonText: "Arka Bahçe Arıcısı"
        },
        {
            id: "b2",
            title: "Arka Bahçe Arıcısı",
            description: "Evde arıcılık için temel rehberiniz — arıları arka bahçenizde nasıl güvenli ve başarılı bir şekilde tutacağınızı öğrenin.",
            badgeText: "REHBER",
            badgeColor: "#6B8F3C",
            features: [
                "Arka Bahçe Kovanının Yerleştirilmesi",
                "Başlangıç ​​Dostu Yöntemler",
                "Koloni Sağlığı ve Bakımı"
            ],
            downloadUrl: "materials/Aricinin-Ilk-Yil-PlaniAricinin-Ilk-Yil-Plani-TR..pdf",
            coverImage: "assets/covers/bee_IMG2_tr.png",
            buttonText: "Kılavuzu İndir"
        },
        {
            id: "b3",
            title: "Arka Bahçe Bal Şarabı Yapımı",
            description: "Evde bal şarabı hazırlamanın eski sanatını öğrenin; kendi topladığınız balı kullanarak adım adım tarifler verin.",
            badgeText: "BONUS",
            badgeColor: "#B45309",
            features: [
                "Geleneksel Mead Tarifleri",
                "Fermantasyon Teknikleri",
                "Lezzet Çeşitleri ve İpuçları"
            ],
            downloadUrl: "materials/Yeni-Baslayanlar-Icin-Bal-Sarabi-Yapimi-TR.pdf",
            coverImage: "assets/covers/bee_IMG3_tr.png",
            buttonText: "Bonusu İndir"
        },
        {
            id: "b4",
            title: "Arıcılık Kolaylaştı",
            description: "Marcus Williams'tan arıcılık konusunda basitleştirilmiş bir yaklaşım - hızlı sonuç almak isteyen yeni başlayanlar için pratik ipuçları ve püf noktaları.",
            badgeText: "EKSTRA",
            badgeColor: "#059669",
            features: [
                "Hızlı Başlangıç ​​Yöntemleri",
                "Kaçınılması Gereken Yaygın Hatalar",
                "Pratik İpuçları ve Püf Noktaları"
            ],
            downloadUrl: "materials/ENG 04-Beekeeping-Made-Easy-by-Marcus-Williams.pdf",
            coverImage: "assets/covers/bee_IMG4_tr.png",
            buttonText: "Ekstra İndir"
        }
    ],

    otherProducts: []
};
