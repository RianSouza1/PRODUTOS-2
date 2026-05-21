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
            badgeColor: "#C68B3E",
            features: ["Grundlagen & Sicherheit", "Schritt-für-Schritt-Anleitungen", "Einfache Anfängerprojekte"],
            downloadUrl: "materials/Holzbearbeitung_fuer_Anfaenger.pdf",
            coverImage: "assets/covers/cover_woodworking_beginners.png",
            buttonText: "Buch herunterladen"
        },
        {
            id: "b2",
            title: "Leitfaden für Holzbearbeitungswerkzeuge",
            description: "Erfahren Sie alles über die wichtigsten Werkzeuge für die Holzbearbeitung, wie man sie auswählt, verwendet und pflegt.",
            badgeText: "BONUS-ANLEITUNG",
            badgeColor: "#8B6F47",
            features: ["Wichtiger Werkzeugführer", "Tipps zur Pflege", "Auswahlkriterien"],
            downloadUrl: "materials/Leitfaden_fuer_Holzbearbeitungswerkzeuge.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Bonus herunterladen"
        },
        {
            id: "b3",
            title: "Holzbearbeitungspläne (1600 Seiten)",
            description: "Über 1.600 Seiten mit detaillierten Schritt-für-Schritt-Plänen für Möbel, Outdoor-Projekte und mehr.",
            badgeText: "PLÄNE",
            badgeColor: "#3B82F6",
            features: ["1.600 Seiten Pläne", "Detaillierte Baupläne", "Verschiedene Schwierigkeitsgrade"],
            downloadUrl: "materials/Holzbearbeitungsplaene_1600_Seiten.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Pläne herunterladen"
        },
        {
            id: "b4",
            title: "Holzbearbeitungspläne - Teil 1",
            description: "Detaillierte Baupläne und Schritt-für-Schritt-Anleitungen für Anfänger und Fortgeschrittene.",
            badgeText: "PLÄNE",
            badgeColor: "#10B981",
            features: ["Schritt-für-Schritt-Pläne", "Materiallisten", "Wochenendprojekte"],
            downloadUrl: "materials/Holzbearbeitungsplaene_Teil1.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Pläne herunterladen"
        },
        {
            id: "b5",
            title: "8.500 Holzbearbeitungspläne",
            description: "Eine riesige Sammlung von Premium-Holzbearbeitungsplänen und -Projekten, die Sie inspirieren und anleiten.",
            badgeText: "MEGA-PAKET",
            badgeColor: "#8B5CF6",
            features: ["8.500 Pläne & Projekte", "Umfassende Anleitungen", "Innen- & Außenbereich"],
            downloadUrl: "materials/8500_Holzbearbeitungsplaene.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Paket herunterladen"
        },
        {
            id: "b6",
            title: "510 Bastelpläne - Teil 1",
            description: "Teil 1 unserer umfassenden Sammlung von 510 kreativen und praktischen Bastelplänen für Holzarbeiter.",
            badgeText: "BASTELPLÄNE",
            badgeColor: "#EF4444",
            features: ["Kreatives Holzhandwerk", "Leicht verständlich", "Sammlung Teil 1"],
            downloadUrl: "materials/510_Bastelplaene_Teil1.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Pläne herunterladen"
        },
        {
            id: "b7",
            title: "510 Bastelpläne - Teil 2",
            description: "Teil 2 unserer umfassenden Sammlung von 510 kreativen und praktischen Bastelplänen für Holzarbeiter.",
            badgeText: "BASTELPLÄNE",
            badgeColor: "#EF4444",
            features: ["Kreatives Holzhandwerk", "Leicht verständlich", "Sammlung Teil 2"],
            downloadUrl: "materials/510_Bastelplaene_Teil2.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Pläne herunterladen"
        },
        {
            id: "b8",
            title: "510 Bastelpläne - Teil 3",
            description: "Teil 3 unserer umfassenden Sammlung von 510 kreativen und praktischen Bastelplänen für Holzarbeiter.",
            badgeText: "BASTELPLÄNE",
            badgeColor: "#EF4444",
            features: ["Kreatives Holzhandwerk", "Leicht verständlich", "Sammlung Teil 3"],
            downloadUrl: "materials/510_Bastelplaene_Teil3.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Pläne herunterladen"
        },
        {
            id: "b9",
            title: "Kit 11 Holzbearbeitungsprojekte",
            description: "Kit mit 11 praktischen und einfachen Holzbearbeitungsprojekten für zu Hause.",
            badgeText: "PROJEKT-KIT",
            badgeColor: "#F59E0B",
            features: ["11 Praktische Projekte", "Einfache Schritt-für-Schritt", "Ideal für Anfänger"],
            downloadUrl: "materials/Kit_11_Holzbearbeitungsprojekte.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Kit herunterladen"
        },
        {
            id: "b10",
            title: "Das Holzbau Buch",
            description: "Umfassendes Handbuch für den Holzbau und fortgeschrittene Holzbearbeitungsprojekte.",
            badgeText: "HOLZBAU-BUCH",
            badgeColor: "#3B82F6",
            features: ["Holzbau-Grundlagen", "Konstruktionspläne", "Fachwissen"],
            downloadUrl: "materials/Das_Holzbau_Buch.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b11",
            title: "Anfängerlehrbuch der Holzbearbeitung",
            description: "Ein klassisches Lehrbuch mit allen Grundlagen, Techniken und Übungen für Holzarbeiter.",
            badgeText: "LEHRBUCH",
            badgeColor: "#C68B3E",
            features: ["Grundlegende Techniken", "Traditionelle Methoden", "Schritt-für-Schritt"],
            downloadUrl: "materials/Anfaengerlehrbuch.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b12",
            title: "Bauplan Sitzgruppe",
            description: "Detaillierter Bauplan für eine komplette Sitzgruppe aus Holz für Garten und Terrasse.",
            badgeText: "BAUPLAN",
            badgeColor: "#10B981",
            features: ["Gartenmöbel Pläne", "Materialbedarf", "Montageanleitung"],
            downloadUrl: "materials/Bauplan_Sitzgruppe.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b13",
            title: "Festool Bauplan Biertischgarnitur",
            description: "Professioneller Bauplan von Festool zur Herstellung einer stabilen Biertischgarnitur.",
            badgeText: "FESTOOL PLAN",
            badgeColor: "#3B82F6",
            features: ["Biertisch & Bänke", "Robuste Konstruktion", "Präzisions-Anleitung"],
            downloadUrl: "materials/Festool_Bauplan_Biertischgarnitur.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b14",
            title: "Festool Bauplan Esstisch",
            description: "Bauanleitung für einen eleganten und modernen Esstisch aus Massivholz.",
            badgeText: "FESTOOL PLAN",
            badgeColor: "#3B82F6",
            features: ["Massivholz Esstisch", "Moderne Holzverbindung", "Detaillierte Skizzen"],
            downloadUrl: "materials/Festool_Bauplan_Esstisch2.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b15",
            title: "Festool Bauplan Fußballtor",
            description: "Schritt-für-Schritt-Anleitung für den Bau eines stabilen Fußballtors für den Garten.",
            badgeText: "FESTOOL PLAN",
            badgeColor: "#3B82F6",
            features: ["Garten-Fußballtor", "Wetterfestes Holz", "Spaß für Kinder"],
            downloadUrl: "materials/Festool_Bauplan_Fussballtor.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b16",
            title: "Festool Bauplan Grillcaddy",
            description: "Praktischer mobiler Grillwagen / Grillcaddy mit viel Stauraum und Arbeitsfläche.",
            badgeText: "FESTOOL PLAN",
            badgeColor: "#3B82F6",
            features: ["Mobiler Grillwagen", "Ablagen & Halterungen", "Perfekt für Sommer"],
            downloadUrl: "materials/Festool_Bauplan_Grillcaddy.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b17",
            title: "Festool Bauplan Kommode",
            description: "Anleitung zum Bau einer eleganten Kommode für Schlafzimmer oder Flur.",
            badgeText: "FESTOOL PLAN",
            badgeColor: "#3B82F6",
            features: ["Elegante Kommode", "Schubladen-Bau", "Schreinerqualität"],
            downloadUrl: "materials/Festool_Bauplan_Kommode.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b18",
            title: "Festool Bauplan Pflanzschubkarre",
            description: "Bauplan für eine dekorative Pflanzschubkarre aus Holz als Gartendekoration.",
            badgeText: "FESTOOL PLAN",
            badgeColor: "#3B82F6",
            features: ["Dekorative Schubkarre", "Gartendekoration", "Einfacher Nachbau"],
            downloadUrl: "materials/Festool_Bauplan_Pflanzschubkarre.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b19",
            title: "Festool Bauplan Pflanztisch",
            description: "Bauplan für einen praktischen und ergonomischen Pflanztisch für den Garten.",
            badgeText: "FESTOOL PLAN",
            badgeColor: "#3B82F6",
            features: ["Pflanztisch", "Ergonomische Höhe", "Witterungsbeständig"],
            downloadUrl: "materials/Festool_Bauplan_Pflanztisch.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b20",
            title: "Festool Bauplan Schaukelbank",
            description: "Anleitung für den Bau einer bequemen Schaukelbank zum Entspannen im Garten.",
            badgeText: "FESTOOL PLAN",
            badgeColor: "#3B82F6",
            features: ["Gartenschaukel", "Bequeme Sitzfläche", "Stabile Aufhängung"],
            downloadUrl: "materials/Festool_Bauplan_Schaukelbank.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b21",
            title: "Festool Bauplan Schaukelpferd",
            description: "Klassisches Kinderspielzeug aus Holz zum Selberbauen - der Traum jedes Kindes.",
            badgeText: "FESTOOL PLAN",
            badgeColor: "#3B82F6",
            features: ["Klassisches Schaukelpferd", "Kinderspielzeug", "Sicheres Design"],
            downloadUrl: "materials/Festool_Bauplan_Schaukelpferd.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b22",
            title: "Festool Bauplan Schneidbrett",
            description: "Herstellung eines edlen Stirnholz-Schneidebretts mit Saftrinne und Griffmulden.",
            badgeText: "FESTOOL PLAN",
            badgeColor: "#3B82F6",
            features: ["Edles Schneidebrett", "Stirnholz-Technik", "Kopfholz-Verarbeitung"],
            downloadUrl: "materials/Festool_Bauplan_Schneidbrett.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b23",
            title: "Festool Bauplan Seifenkiste",
            description: "Detaillierter Bauplan für eine fahrbereite Seifenkiste für rasante Fahrten.",
            badgeText: "FESTOOL PLAN",
            badgeColor: "#3B82F6",
            features: ["Seifenkiste", "Lenkung & Bremse", "Cooles DIY-Fahrzeug"],
            downloadUrl: "materials/Festool_Bauplan_Seifenkiste.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b24",
            title: "Festool Bauplan Sitzbank",
            description: "Bauplan für eine zeitlose und bequeme Holzbank für Haus und Garten.",
            badgeText: "FESTOOL PLAN",
            badgeColor: "#3B82F6",
            features: ["Klassische Sitzbank", "Wetterfeste Holzarten", "Solide Verbindungen"],
            downloadUrl: "materials/Festool_Bauplan_Sitzbank.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b25",
            title: "Festool Bauplan Stuhl",
            description: "Ergonomisch geformter und stabiler Stuhl aus Holz zum Selberbauen.",
            badgeText: "FESTOOL PLAN",
            badgeColor: "#3B82F6",
            features: ["Ergonomischer Stuhl", "Stabile Zargenverbindung", "Komfortables Design"],
            downloadUrl: "materials/Festool_Bauplan_Stuhl.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b26",
            title: "Festool Bauplan Tablett-Tisch",
            description: "Praktischer Beistelltisch mit abnehmbarem Tablett-Aufsatz.",
            badgeText: "FESTOOL PLAN",
            badgeColor: "#3B82F6",
            features: ["Tablett-Tisch", "Abnehmbares Tablett", "Platzsparend"],
            downloadUrl: "materials/Festool_Bauplan_Tablett_Tisch.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b27",
            title: "Festool Bauplan Werkzeugeinsatz",
            description: "Ordnungssystem und Werkzeugeinsatz für Werkstattwagen und Schubladen.",
            badgeText: "FESTOOL PLAN",
            badgeColor: "#3B82F6",
            features: ["Ordnungssystem", "Maßgeschneidert", "Einfache Organisation"],
            downloadUrl: "materials/Festool_Bauplan_Werkzeugeinsatz.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b28",
            title: "Grundlagen der Handwerkzeuge",
            description: "Einführung in die Verwendung, Schärfung und Pflege klassischer Handwerkzeuge.",
            badgeText: "HANDWERKZEUGE",
            badgeColor: "#C68B3E",
            features: ["Hobeln & Sägen", "Schärfanleitung", "Präzisionsarbeit"],
            downloadUrl: "materials/Grundlagen_Handwerkzeuge.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b29",
            title: "Schubladen und Türen bauen",
            description: "Schnittmuster und Pläne zum perfekten Einbau von Schubladen und Möbeltüren.",
            badgeText: "MÖBELBAU GUIDE",
            badgeColor: "#C68B3E",
            features: ["Führungen & Beschläge", "Türen & Klappen", "Profi-Tipps"],
            downloadUrl: "materials/HolzWerken_Schubladen_und_Tueren.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b30",
            title: "Die Grundlagen des Möbelbaus",
            description: "Schlüsselkonzepte, Pläne und Holzverbindungen für den Bau langlebiger Möbel.",
            badgeText: "MÖBELBAU BASICS",
            badgeColor: "#C68B3E",
            features: ["Rahmen & Korpus", "Holzverbindungen", "Konstruktionsregeln"],
            downloadUrl: "materials/HolzWerken_Die_Grundlagen_des_Moebelbaus.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b31",
            title: "Holzarbeiten mit Handwerkzeugen",
            description: "Wie man erstaunliche Projekte komplett ohne elektrische Maschinen baut.",
            badgeText: "MANUELLES ARBEITEN",
            badgeColor: "#C68B3E",
            features: ["Keine Maschinen nötig", "Hobel & Stemmeisen", "Klassische Verbindungen"],
            downloadUrl: "materials/Holzarbeiten_Handwerkzeuge.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b32",
            title: "Holzidee Magazin Ausgabe 01",
            description: "Inspirierende Holzbearbeitungsprojekte, Tests, Baupläne und Werkstatttipps aus dem Holzidee Magazin.",
            badgeText: "HOLZIDEE MAGAZIN",
            badgeColor: "#8B5CF6",
            features: ["Inspirierende Projekte", "Schritt-für-Schritt", "Werkstatt-Tipps"],
            downloadUrl: "materials/Holzidee_01.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b33",
            title: "Holzidee Magazin Ausgabe 02",
            description: "Inspirierende Holzbearbeitungsprojekte, Tests, Baupläne und Werkstatttipps aus dem Holzidee Magazin.",
            badgeText: "HOLZIDEE MAGAZIN",
            badgeColor: "#8B5CF6",
            features: ["Inspirierende Projekte", "Schritt-für-Schritt", "Werkstatt-Tipps"],
            downloadUrl: "materials/Holzidee_02.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b34",
            title: "Holzidee Magazin Ausgabe 03",
            description: "Inspirierende Holzbearbeitungsprojekte, Tests, Baupläne und Werkstatttipps aus dem Holzidee Magazin.",
            badgeText: "HOLZIDEE MAGAZIN",
            badgeColor: "#8B5CF6",
            features: ["Inspirierende Projekte", "Schritt-für-Schritt", "Werkstatt-Tipps"],
            downloadUrl: "materials/Holzidee_03.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b35",
            title: "Holzidee Magazin Ausgabe 04",
            description: "Inspirierende Holzbearbeitungsprojekte, Tests, Baupläne und Werkstatttipps aus dem Holzidee Magazin.",
            badgeText: "HOLZIDEE MAGAZIN",
            badgeColor: "#8B5CF6",
            features: ["Inspirierende Projekte", "Schritt-für-Schritt", "Werkstatt-Tipps"],
            downloadUrl: "materials/Holzidee_04.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b36",
            title: "Holzidee Magazin Ausgabe 05",
            description: "Inspirierende Holzbearbeitungsprojekte, Tests, Baupläne und Werkstatttipps aus dem Holzidee Magazin.",
            badgeText: "HOLZIDEE MAGAZIN",
            badgeColor: "#8B5CF6",
            features: ["Inspirierende Projekte", "Schritt-für-Schritt", "Werkstatt-Tipps"],
            downloadUrl: "materials/Holzidee_05.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b37",
            title: "Holzidee Magazin Ausgabe 06",
            description: "Inspirierende Holzbearbeitungsprojekte, Tests, Baupläne und Werkstatttipps aus dem Holzidee Magazin.",
            badgeText: "HOLZIDEE MAGAZIN",
            badgeColor: "#8B5CF6",
            features: ["Inspirierende Projekte", "Schritt-für-Schritt", "Werkstatt-Tipps"],
            downloadUrl: "materials/Holzidee_06.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b38",
            title: "Holzidee Magazin Ausgabe 07",
            description: "Inspirierende Holzbearbeitungsprojekte, Tests, Baupläne und Werkstatttipps aus dem Holzidee Magazin.",
            badgeText: "HOLZIDEE MAGAZIN",
            badgeColor: "#8B5CF6",
            features: ["Inspirierende Projekte", "Schritt-für-Schritt", "Werkstatt-Tipps"],
            downloadUrl: "materials/Holzidee_07.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b39",
            title: "Holzidee Magazin Ausgabe 08",
            description: "Inspirierende Holzbearbeitungsprojekte, Tests, Baupläne und Werkstatttipps aus dem Holzidee Magazin.",
            badgeText: "HOLZIDEE MAGAZIN",
            badgeColor: "#8B5CF6",
            features: ["Inspirierende Projekte", "Schritt-für-Schritt", "Werkstatt-Tipps"],
            downloadUrl: "materials/Holzidee_08.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b40",
            title: "Holzidee Magazin Ausgabe 09",
            description: "Inspirierende Holzbearbeitungsprojekte, Tests, Baupläne und Werkstatttipps aus dem Holzidee Magazin.",
            badgeText: "HOLZIDEE MAGAZIN",
            badgeColor: "#8B5CF6",
            features: ["Inspirierende Projekte", "Schritt-für-Schritt", "Werkstatt-Tipps"],
            downloadUrl: "materials/Holzidee_09.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b41",
            title: "Holzidee Magazin Ausgabe 10",
            description: "Inspirierende Holzbearbeitungsprojekte, Tests, Baupläne und Werkstatttipps aus dem Holzidee Magazin.",
            badgeText: "HOLZIDEE MAGAZIN",
            badgeColor: "#8B5CF6",
            features: ["Inspirierende Projekte", "Schritt-für-Schritt", "Werkstatt-Tipps"],
            downloadUrl: "materials/Holzidee_10.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b42",
            title: "Holzidee Magazin Ausgabe 11",
            description: "Inspirierende Holzbearbeitungsprojekte, Tests, Baupläne und Werkstatttipps aus dem Holzidee Magazin.",
            badgeText: "HOLZIDEE MAGAZIN",
            badgeColor: "#8B5CF6",
            features: ["Inspirierende Projekte", "Schritt-für-Schritt", "Werkstatt-Tipps"],
            downloadUrl: "materials/Holzidee_11.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b43",
            title: "Holzidee Magazin Ausgabe 12",
            description: "Inspirierende Holzbearbeitungsprojekte, Tests, Baupläne und Werkstatttipps aus dem Holzidee Magazin.",
            badgeText: "HOLZIDEE MAGAZIN",
            badgeColor: "#8B5CF6",
            features: ["Inspirierende Projekte", "Schritt-für-Schritt", "Werkstatt-Tipps"],
            downloadUrl: "materials/Holzidee_12.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        },
        {
            id: "b44",
            title: "Holzidee Magazin Ausgabe 13",
            description: "Inspirierende Holzbearbeitungsprojekte, Tests, Baupläne und Werkstatttipps aus dem Holzidee Magazin.",
            badgeText: "HOLZIDEE MAGAZIN",
            badgeColor: "#8B5CF6",
            features: ["Inspirierende Projekte", "Schritt-für-Schritt", "Werkstatt-Tipps"],
            downloadUrl: "materials/Holzidee_13.pdf",
            coverImage: "assets/covers/cover_woodworking_plans.png",
            buttonText: "Plan herunterladen"
        }
    ],

    otherProducts: []
};
