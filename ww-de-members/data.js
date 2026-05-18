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
            title: 'Sägen ohne ausfransen mit der Stichsäge. Schreinerei trick',
            duration: '6:01',
            youtubeId: 'sdbC0PLJVzA'
        },
        {
            id: 'v2',
            title: '🔥 Wie man ganz einfach Holzkugeln herstellt',
            duration: '4:10',
            youtubeId: 'K0rI73mGjpU'
        },
        {
            id: 'v3',
            title: 'Aus holz schraubzwingen selber bauen',
            duration: '8:43',
            youtubeId: '_MMGRIEz6n8'
        },
        {
            id: 'v4',
            title: 'Seitenführung Schablone für Stichsäge für Holz schneiden',
            duration: '8:30',
            youtubeId: '8WQ6KaG4Rpw'
        },
        {
            id: 'v5',
            title: 'Sie werden nicht glauben, dass dieses Holzbearbeitung Vorrichtung funktioniert',
            duration: '7:39',
            youtubeId: 'cXH9ihAJ-hU'
        },
        {
            id: 'v6',
            title: '🔥 + 20 Tricks mit Nägeln | Tischlerei- und Heimwerkertricks',
            duration: '12:15',
            youtubeId: '54XOm0dwX8A'
        },
        {
            id: 'v7',
            title: 'Revolutionärer Trick mit Doppeldrehpunkt: Perfekte Holzkreise mit der Stichsäge schneiden!',
            duration: '7:23',
            youtubeId: 'SKZvxZarsqY'
        },
        {
            id: 'v8',
            title: 'Die ultimative Vorrichtung zum Zuschneiden von Holzstäben mit der Stichsäge',
            duration: '8:22',
            youtubeId: 'KkfofWvxpBU'
        },
        {
            id: 'v9',
            title: 'Revolutionäre Holzbohrer im Test: Schneller, Präziser, Besser - Sehen Sie den Unterschied!',
            duration: '6:29',
            youtubeId: 'DODC0O9BJcg'
        },
        {
            id: 'v10',
            title: 'Die beste Vorrichtung für Stichsägen. Perfekte vertikale Schnitte für all Ihre Holzprojekte',
            duration: '5:50',
            youtubeId: 'Rnfuf_KNCAE'
        },
        {
            id: 'v11',
            title: 'Praktische Demonstration: Vorrichtung für die Stichsäge zum Schneiden eines perfekten Holzkreises',
            duration: '5:35',
            youtubeId: 'BnJYqamEjEg'
        },
        {
            id: 'v12',
            title: 'Wie man die Vernier Skala liest: Ein Leitfaden zum Verstehen der Nonius-Skala',
            duration: '1:00',
            youtubeId: 'JHypawcax4M'
        },
        {
            id: 'v13',
            title: 'So schneiden Sie eine Fase in einen Holzkreis mit einer Stichsäge',
            duration: '6:50',
            youtubeId: '9rG66r4Yq8M'
        },
        {
            id: 'v14',
            title: 'Lets bastel Holzwürfel in einem Würfel mit einer Säulenbohrmaschine',
            duration: '10:01',
            youtubeId: 'LPXhTpJ9U_A'
        },
        {
            id: 'v15',
            title: 'Restaurieren Sie die Tropenholz-Tischplatte des Gartentisches selbst',
            duration: '12:47',
            youtubeId: '05Nar5YcGdg'
        },
        {
            id: 'v16',
            title: 'Vermeiden Sie Tanninflecken auf Holz: Verwendung einer tannin blockierenden Grundierung',
            duration: '4:53',
            youtubeId: 'VZIorRhbvVs'
        },
        {
            id: 'v17',
            title: 'Unglaublich, let\'s bastel ein gerades Holzprisma innerhalb eines anderen',
            duration: '11:49',
            youtubeId: 'YsRRPjUFUoI'
        },
        {
            id: 'v18',
            title: 'Perfekte Ankörn-Schablone für verdeckte Topfscharniere!',
            duration: '13:16',
            youtubeId: '-JIPF-oEwk0'
        },
        {
            id: 'v19',
            title: 'Die besten Profi Tricks fur die Dübellehre',
            duration: '15:41',
            youtubeId: 'M193aZfthGU'
        },
        {
            id: 'v20',
            title: 'Perfekte verzierte Sparrenköpfe an Holzbalken mit einer Stichsäge erzielen',
            duration: '12:20',
            youtubeId: 'HRr156voDvM'
        },
        {
            id: 'v21',
            title: 'Abnehmbare Halbkreisausschnitt-(Fischmaul)-Verbindungen mit Holzstäben – Schritt für Schritt erklärt',
            duration: '8:02',
            youtubeId: 'uyLEmwxYma8'
        },
        {
            id: 'v22',
            title: 'Ich säge Gehrungsschnitte von 60 Grad, um einen sechseckigen Rahmen zu erstellen',
            duration: '10:22',
            youtubeId: '_omStS_bg4o'
        },
        {
            id: 'v23',
            title: 'Hexagonale Rahmen sowie Boden- und Deckelplatten. Holzverarbeitung Berechnungen',
            duration: '11:36',
            youtubeId: '0_HUtHEo6iM'
        },
        {
            id: 'v24',
            title: 'How to drill perfect holes in wooden balls and beads. Super easy.',
            duration: '8:43',
            youtubeId: 'opgbCsZn3DE'
        },
        {
            id: 'v25',
            title: 'High-precision milling device for precise milling of inner circles – with 2 pivot points',
            duration: '10:58',
            youtubeId: 'w7ILLUaLmCE'
        },
        {
            id: 'v26',
            title: 'Trick for drilling aligned and 90-degree holes in wooden sticks',
            duration: '7:00',
            youtubeId: 'oCFPwBaD7Rc'
        },
        {
            id: 'v27',
            title: 'Japanese saws – tips and tricks revealed',
            duration: '4:02',
            youtubeId: 'PPl_gsZXcEI'
        },
        {
            id: 'v28',
            title: 'Bohrer, um Holzkugeln mit der Standbohrmaschine herzustellen? Mmmm!!',
            duration: '7:32',
            youtubeId: 'MIKPmuR1tXc'
        },
        {
            id: 'v29',
            title: 'Zerlegbare Verbindungen mit Confirmat-Schrauben und Holzdübeln in melaminbeschichteten Spanplatten',
            duration: '6:35',
            youtubeId: 'GGAAcRxGZAo'
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
