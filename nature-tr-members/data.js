/**
 * Doğal Eczane — Members Area Data (Türkçe)
 */

const APP_DATA = {
    config: {
        brandName: "Doğal Eczane",

        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Kurs erişimi hakkında soru (Doğal Eczane)",
        emailBodyTemplate: "Merhaba destek ekibi! Doğal Eczane üyeler alanım hakkında yardım almak istiyorum.%0A%0AAdım: ______.",

        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Doğal Eczane — Eksiksiz Rehber",
            description: "Evde kendi doğal eczanenizi oluşturmak için ana rehber. Hangi bitkileri kullanacağınızı, hangi tariflerin gerçekten işe yaradığını ve uzman olmadan adım adım nasıl hazırlayacağınızı öğrenin.",
            badgeText: "ANA KİTAP",
            badgeColor: "#10B981",
            features: [
                "Yeni başlayanlar için kolay hazırlama yöntemleri",
                "Bitki ve mutfak malzemeleri rehberi",
                "Yaygın rahatsızlıklar için adım adım bitkisel tarifler"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-TR.pdf",
            coverImage: "assets/covers/nature_IMG1_tr.png",
            buttonText: "Ana Kitabı İndir"
        },
        {
            id: "b2",
            title: "Bitkilerin İyileştirici Gücü",
            description: "En yaygın şifalı bitkilerin terapötik özelliklerini keşfedin ve günlük refahınız için güvenli bir şekilde nasıl kullanacağınızı öğrenin: sakinleştirici çaylar, şuruplar, merhemler ve daha fazlası.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B",
            features: [
                "20'den fazla bitkinin tıbbi profilleri",
                "Güvenlik talimatları ve dozaj bilgileri",
                "Geleneksel terapötik uygulamalar"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-TR.pdf",
            coverImage: "assets/covers/nature_IMG1_tr.png",
            buttonText: "Bonus #1'i İndir"
        },
        {
            id: "b3",
            title: "Sakinleştirici Bitkisel Çaylar Rehberi",
            description: "Basit malzemeler kullanarak uyku, sindirim, rahatlama, boğaz ağrısı giderme, bağışıklık ve günlük sağlık için sakinleştirici bitkisel içecekler nasıl hazırlanır öğrenin.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6",
            features: [
                "Uyku, sindirim ve rahatlama için karışımlar",
                "Bal, zencefil, nane ve papatya bazlı tarifler",
                "Evde hazırlama için adım adım talimatlar"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-TR.pdf",
            coverImage: "assets/covers/nature_IMG1_tr.png",
            buttonText: "Bonus #2'yi İndir"
        }
    ],

    otherProducts: []
};