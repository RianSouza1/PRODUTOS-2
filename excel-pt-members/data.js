/**
 * Mestria em Excel — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Mestria em Excel",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Pergunta sobre o acesso ao curso (Excel)",
        emailBodyTemplate: "Olá equipa de suporte! Preciso de ajuda com a minha área de membros de Excel.%0A%0AO meu nome é: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            id: "v1",
            title: "Aula 1 — O que é o Excel? (Básico ao Avançado)",
            duration: "Curso Completo",
            embedUrl: "https://www.youtube.com/embed/qu2QBEMs1j4?list=PLFKhhNd35zq8DJTr8ucZVHIbf64XCObbL"
        },
        {
            id: "v2",
            title: "Aula 2 — Primeiros Passos e Fórmulas de Base",
            duration: "Curso Completo",
            embedUrl: "https://www.youtube.com/embed/qu2QBEMs1j4?list=PLFKhhNd35zq8DJTr8ucZVHIbf64XCObbL&index=2"
        },
        {
            id: "v3",
            title: "Aula 3 — Formatação de Células e Tabelas",
            duration: "Curso Completo",
            embedUrl: "https://www.youtube.com/embed/qu2QBEMs1j4?list=PLFKhhNd35zq8DJTr8ucZVHIbf64XCObbL&index=3"
        },
        {
            id: "v4",
            title: "Aula 4 — Visão Geral da Área de Trabalho (Curso Prático)",
            duration: "Curso Complementar",
            embedUrl: "https://www.youtube.com/embed/UxE4wYCtCoU?list=PLncJ4nqa2FJNlxHYAuAqJzTGRm8-j7982"
        },
        {
            id: "v5",
            title: "Aula 5 — Linhas, Colunas e Células na Prática",
            duration: "Curso Complementar",
            embedUrl: "https://www.youtube.com/embed/UxE4wYCtCoU?list=PLncJ4nqa2FJNlxHYAuAqJzTGRm8-j7982&index=2"
        },
        {
            id: "v6",
            title: "Aula 6 — Inserção de Dados e Atalhos Úteis",
            duration: "Curso Complementar",
            embedUrl: "https://www.youtube.com/embed/UxE4wYCtCoU?list=PLncJ4nqa2FJNlxHYAuAqJzTGRm8-j7982&index=3"
        }
    ],

    books: [
        {
            id: "b1",
            title: "Excel Expert",
            description: "Torne-se um especialista em Microsoft Excel e domine as ferramentas mais avançadas do mercado.",
            badgeText: "GUIA EXPERT",
            badgeColor: "#10B981",
            features: ["Fórmulas complexas", "Análise de dados avançada", "Dicas de especialista"],
            downloadUrl: "materials/excel_expert.pdf",
            coverImage: "assets/covers/cover_excel_expert.png",
            buttonText: "Baixar Livro"
        },
        {
            id: "b2",
            title: "Manual de Excel Avançado",
            description: "O manual definitivo para aprender recursos avançados, macros e automação em Excel.",
            badgeText: "MANUAL AVANÇADO",
            badgeColor: "#059669",
            features: ["Macros & Automação", "Tabelas Dinâmicas avançadas", "Projetos práticos"],
            downloadUrl: "materials/manual_excel_avancado.pdf",
            coverImage: "assets/covers/cover_manual_excel_avancado.png",
            buttonText: "Baixar Manual"
        }
    ],

    otherProducts: []
};
