/**
 * PRIRODNA APOTEKA — Members Area Data (Srpski - Ćirilica)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Природна Апотека", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Питање у вези са приступом курсу (Природна Апотека)",
        emailBodyTemplate: "Здраво, потребан ми је приступ или помоћ у вези са Чланском зоном Природне Апотеке.\n\nМоје име је: ______.",

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
            title: "Природна Апотека — Комплетан водич",
            description: "Главни водич за изградњу сопствене domaće природне апотеке. Научите како да користите лековито биље, који рецепти заиста делују и како да их припремите корак по корак, без потребе да будете стручњак.",
            badgeText: "ГЛАВНА КЊИГА",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Једноставне методе припреме за почетнике",
                "Водичи за биље и кухињске састојке",
                "Биљни рецепти корак по корак за уобичајене тегоbe"
            ],
            downloadUrl: "materials/Natures-Apothecary-1-SR.pdf",
            coverImage: "assets/covers/nature_IMG1_sr.png",
            buttonText: "Преузми Главну Књигу"
        },
        {
            id: "b2",
            title: "Лековита моћ биља",
            description: "Откријте терапеутска својства уобичајеног лековитог биља и научите да га безбедно користите за свакодневно благостање: умирујући чајеви, сирупи, масти и још много тога.",
            badgeText: "БОНУС #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Медицински профили за више од 20 биљака",
                "Смернице за безбедност и дозирање",
                "Традиционална лековита примена"
            ],
            downloadUrl: "materials/Kitchen-Remedies-2-SR.pdf",
            coverImage: "assets/covers/nature_IMG1_sr.png",
            buttonText: "Преузми Бонус #1"
        },
        {
            id: "b3",
            title: "Водич за лековите чајеве",
            description: "Научите како да креирате умирујуће биљне инфузије за сан, варење, опуштање, грло, имунитеet и свакодневно благостање са једноставним састојцима.",
            badgeText: "БОНУС #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Мешавине за сан, варење и опуштање",
                "Рецепти са медом, ђумбиром, ментом и камилицом",
                "Припрема код куће корак по корак"
            ],
            downloadUrl: "materials/Healing-Herbal-Teas-3-SR.pdf",
            coverImage: "assets/covers/nature_IMG1_sr.png",
            buttonText: "Преузми Бонус #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};

// Force redeploy v3