/**
 * DADOS ISOLADOS DO PRODUTO ATUAL
 * 
 * Este arquivo é a única coisa que precisa ser alterada 
 * ao duplicar a área de membros para um novo curso/produto.
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Holzbearbeitung für Anfänger", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Frage zum Kurszugang (Holzbearbeitung)",
        emailBodyTemplate: "Hallo Support-Team! Ich brauche Hilfe mit meinem Mitgliederbereich.%0A%0AMein Name ist: ______.",

        // Mostrar ícone de "? Ajuda" flutuante em todas as telas
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VÍDEOS (Video Course)
    // ----------------------------------------------------------------------
    videos: [
        {
            id: 'v1',
            title: 'Lektion 1 - Einführung in die Holzbearbeitung',
            duration: '15:00',
            videoUrl: 'https://play.tynk.ai/p/bfce7ba0-de50-4c53-91b7-bf5ed2af98ab'
        },
        {
            id: 'v2',
            title: 'Lektion 2 - Essentielle Handwerkzeuge',
            duration: '12:00',
            videoUrl: 'https://play.tynk.ai/p/0826468c-b0f5-4a23-8266-9a40db11bf55'
        },
        {
            id: 'v3',
            title: 'Lektion 3 - Messen und Markieren',
            duration: '14:00',
            videoUrl: 'https://play.tynk.ai/p/76e92ffa-fdb4-40ff-a840-2321619297b4'
        },
        {
            id: 'v4',
            title: 'Lektion 4 - Sicherheit bei Elektrowerkzeugen',
            duration: '11:00',
            videoUrl: 'https://play.tynk.ai/p/a5749b7a-0ec5-4abd-8057-7bb959dd5e5c'
        },
        {
            id: 'v5',
            title: 'Lektion 5 - Verbindungstechniken',
            duration: '16:00',
            videoUrl: 'https://play.tynk.ai/p/e2b6bcdf-3ccd-491e-97eb-ef48d8d2e281'
        },
        {
            id: 'v6',
            title: 'Lektion 6 - Schleifen und Vorbereiten',
            duration: '13:00',
            videoUrl: 'https://play.tynk.ai/p/2aab902b-5319-4c78-9c8f-b978606ceec8'
        },
        {
            id: 'v7',
            title: 'Lektion 7 - Oberflächenbehandlung und Polieren',
            duration: '18:00',
            videoUrl: 'https://play.tynk.ai/p/607f7059-fc2d-4f60-95f4-f7fd0e190bc1'
        }
    ],

    // ----------------------------------------------------------------------
    // 2. LIVROS (Materiais Complementares / E-books)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Holzbearbeitung für Anfänger",
            description: "Ein vollständiger Leitfaden, um die Grundlagen der Holzbearbeitung zu erlernen, Werkzeuge sicher zu verwenden und Ihre ersten Projekte zu erstellen.",
            badgeText: "HAUPTBUCH",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Grundlagen & Sicherheit",
                "Schritt-für-Schritt-Anleitungen",
                "Einfache Anfängerprojekte"
            ],
            downloadUrl: "materials/Holzbearbeitung_fuer_Anfaenger.pdf",
            coverImage: "assets/covers/book_taichi_seniors_light_v2.jpg", // TODO: Trocar capa
            buttonText: "Buch herunterladen"
        },
        {
            id: "b2",
            title: "5 Einfache Projekte",
            description: "Entdecken Sie 5 einfache und nützliche Projekte, die Sie an einem Wochenende bauen können.",
            badgeText: "BONUS",
            badgeColor: "#F59E0B", // Amber/Gold
            features: [
                "Materiallisten",
                "Detaillierte Pläne",
                "Zeitersparnis-Tipps"
            ],
            downloadUrl: "materials/5_Einfache_Projekte.pdf",
            coverImage: "assets/covers/book_taichi_weightloss_light.jpg", // TODO: Trocar capa
            buttonText: "Bonus herunterladen"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Desenvolvidos por nós)
    // ----------------------------------------------------------------------
    otherProducts: []
};
