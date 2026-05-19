/**
 * BEEKEEPING — Members Area Data (PT)
 */

const APP_DATA = {
    config: {
        brandName: "Apicultura para Iniciantes",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Questão sobre o acesso ao curso (Apicultura)",
        emailBodyTemplate: "Olá equipa de suporte! Preciso de ajuda com a minha área de membros de Apicultura.%0A%0AO meu nome é: ______.",
        showFloatingHelp: true
    },

    videos: [
        { id: 'v1', title: 'Introdução à Apicultura', duration: 'Vídeo 1', youtubeId: 'qo4Vs59ndNU' },
        { id: 'v2', title: 'A Colmeia e as Suas Partes', duration: 'Vídeo 2', youtubeId: 'vCCHMEJZuJc' },
        { id: 'v3', title: 'Ferramentas Essenciais de Apicultura', duration: 'Vídeo 3', youtubeId: 'YXZmtnnkxDE' },
        { id: 'v4', title: 'Biologia das Abelhas', duration: 'Vídeo 4', youtubeId: 'oTlP9sYyZ9s' },
        { id: 'v5', title: 'Localização das Colónias de Abelhas', duration: 'Vídeo 5', youtubeId: 'PT6VnrOX9zU' },
        { id: 'v6', title: 'Iniciar Novas Colónias de Abelhas', duration: 'Vídeo 6', youtubeId: 'ppLH1tXR_9s' },
        { id: 'v7', title: 'Gestão do Primeiro Ano da Colónia', duration: 'Vídeo 7', youtubeId: 'FYoTrwXCEWg' },
        { id: 'v8', title: 'Gestão do Segundo Ano da Colónia', duration: 'Vídeo 8', youtubeId: 'rYDQA5I9dRs' },
        { id: 'v9', title: 'Colheita do Mel', duration: 'Vídeo 9', youtubeId: 'OsEK_iSdsis' },
        { id: 'v10', title: 'Manter as Colmeias Saudáveis', duration: 'Vídeo 10', youtubeId: 'SOH4UvYe-Tg' },
        { id: 'v11', title: 'Controlo de Ácaros Parasitas', duration: 'Vídeo 11', youtubeId: '6RieuFwg4eY' },
        { id: 'v12', title: 'Gestão de Escaravelhos da Colmeia', duration: 'Vídeo 12', youtubeId: 'iy5r8Or87_g' },
        { id: 'v13', title: 'Controlo de Traças da Cera', duration: 'Vídeo 13', youtubeId: 'VG3XQQrDoIs' },
        { id: 'v14', title: 'Pragas Menores da Colmeia', duration: 'Vídeo 14', youtubeId: '-fxKYKVOKG4' },
        { id: 'v15', title: 'Gestão Integrada de Pragas', duration: 'Vídeo 15', youtubeId: 'iLhNdkVDCnw' },
        { id: 'v16', title: 'Doenças das Abelhas', duration: 'Vídeo 16', youtubeId: 'ZEKD5HlIuHM' },
        { id: 'v17', title: 'Reflexões Finais sobre as Abelhas', duration: 'Vídeo 17', youtubeId: 'JSPSqhW6lsU' },
        { id: 'v18', title: 'A Apicultura é para Si?', duration: 'Vídeo 18', youtubeId: 'X3Xp1lQpxOc' },
        { id: 'v19', title: 'Como Instalar Abelhas numa Colmeia', duration: 'Vídeo 19', youtubeId: 'S4A8CTALPDI' }
    ],

    books: [
        {
            id: "b1",
            title: "Apicultura para Todos",
            description: "O guia completo para uma apicultura simples e rentável — desde montar a sua primeira colmeia até gerir um apiário próspero.",
            badgeText: "LIVRO PRINCIPAL",
            badgeColor: "#E5A817",
            features: [
                "Guia completo de instalação",
                "Calendário de gestão sazonal",
                "Produção rentável de mel"
            ],
            downloadUrl: "materials/placeholder.pdf",
            coverImage: "assets/covers/beekeeping_for_all.png",
            buttonText: "Descarregar livro"
        },
        {
            id: "b2",
            title: "O Apicultor de Quintal",
            description: "O seu guia essencial para a apicultura doméstica — aprenda a manter abelhas no seu quintal de forma segura e bem-sucedida.",
            badgeText: "GUIA",
            badgeColor: "#6B8F3C",
            features: [
                "Localização de colmeias no quintal",
                "Métodos para iniciantes",
                "Saúde e manutenção da colónia"
            ],
            downloadUrl: "materials/placeholder.pdf",
            coverImage: "assets/covers/backyard_beekeepers.png",
            buttonText: "Descarregar guia"
        },
        {
            id: "b3",
            title: "Fabrico de Hidromel",
            description: "Aprenda a antiga arte de fabricar vinho de mel em casa — receitas passo a passo utilizando o seu próprio mel colhido.",
            badgeText: "BÓNUS",
            badgeColor: "#B45309",
            features: [
                "Receitas tradicionais de hidromel",
                "Técnicas de fermentação",
                "Variações de sabor e dicas"
            ],
            downloadUrl: "materials/placeholder.pdf",
            coverImage: "assets/covers/mead_making.png",
            buttonText: "Descarregar bónus"
        },
        {
            id: "b4",
            title: "Apicultura Fácil",
            description: "Uma abordagem simplificada da apicultura — dicas práticas e truques para iniciantes que querem resultados rápidos.",
            badgeText: "EXTRA",
            badgeColor: "#059669",
            features: [
                "Métodos de início rápido",
                "Erros comuns a evitar",
                "Dicas e truques práticos"
            ],
            downloadUrl: "materials/placeholder.pdf",
            coverImage: "assets/covers/beekeeping_made_easy.png",
            buttonText: "Descarregar extra"
        }
    ],

    otherProducts: []
};
