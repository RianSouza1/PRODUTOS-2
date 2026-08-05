/**
 * Domínio do Word — Área do Aluno (Português)
 */

const APP_DATA = {
    config: {
        brandName: "Domínio do Word",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Dúvida sobre o acesso (Domínio do Word)",
        emailBodyTemplate: "Olá equipe de suporte! Gostaria de pedir ajuda com o meu acesso à área do aluno do Domínio do Word.\n\nMeu nome é: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Word do Zero ao Profissional — Edição 2026 (Volume 1 de 3)",
            description: "O guia completo para iniciantes — aprenda a criar documentos claros, bem estruturados e com design profissional no Microsoft Word.",
            badgeText: "Guia Principal",
            badgeColor: "#2563EB",
            features: [
                "Domine os conceitos fundamentais do Microsoft Word",
                "Crie documentos perfeitamente formatados e elegantes",
                "Dicas práticas para a gestão diária de arquivos"
            ],
            downloadUrl: "materials/WORD-1-PT.pdf",
            coverImage: "assets/covers/word_IMG1_pt.png",
            buttonText: "Baixar Guia Principal (PDF)"
        },
        {
            id: "b2",
            title: "Formatação, Estilos e Fluxos de Trabalho Inteligentes no Word — Edição 2026 (Volume 2 de 3)",
            description: "Um guia prático para criar documentos consistentes, organizados e profissionais no Microsoft Word.",
            badgeText: "Bônus #1",
            badgeColor: "#475569",
            features: [
                "Utilize estilos avançados e formatação profissional",
                "Garanta consistência visual em todos os seus documentos",
                "Implemente fluxos de trabalho eficientes e inteligentes"
            ],
            downloadUrl: "materials/WORD-2-PT.pdf",
            coverImage: "assets/covers/word_IMG1_pt.png",
            buttonText: "Baixar Bônus #1 (PDF)"
        },
        {
            id: "b3",
            title: "Modelos no Word, Mala Direta e Ferramentas Avançadas — Edição 2026 (Volume 3 de 3)",
            description: "Documentos reutilizáveis, correspondência personalizada, formulários interativos e automação inteligente no Microsoft Word.",
            badgeText: "Bônus #2",
            badgeColor: "#0F766E",
            features: [
                "Projete modelos e formulários interativos reutilizáveis",
                "Realize malas diretas para envios personalizados em massa",
                "Aproveite ferramentas avançadas de automação no Word"
            ],
            downloadUrl: "materials/WORD-3-PT.pdf",
            coverImage: "assets/covers/word_IMG1_pt.png",
            buttonText: "Baixar Bônus #2 (PDF)"
        }
    ],

    otherProducts: []
};
