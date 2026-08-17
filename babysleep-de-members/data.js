/**
 * Babyschlaf Ratgeber — Mitgliederbereich (Deutsch)
 */

const APP_DATA = {
    config: {
        brandName: "Babyschlaf Ratgeber",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Frage zum Zugang (Babyschlaf Ratgeber)",
        emailBodyTemplate: "Hallo Support-Team! Ich benötige Hilfe bei meinem Zugang zum Mitgliederbereich für Babyschlaf Ratgeber.\n\nMein Name ist: ______.",
        showFloatingHelp: true
    },

    videos: [],

    books: [
        {
            id: "b1",
            title: "Dein Baby sanft in den Schlaf begleiten",
            description: "Eine liebevolle Schritt-für-Schritt-Abendroutine für Neugeborene und Babys (0–6 Monate). Ein praktischer und einfühlsamer Ratgeber mit echten Tipps statt unrealistischer Versprechen.",
            badgeText: "HAUPTRATGEBER",
            badgeColor: "#6366F1",
            features: [
                "Schritt-für-Schritt-Abendroutinen für Babys von 0 bis 6 Monaten",
                "Das BEOBACHTEN → VORBEREITEN → BERUHIGEN → BEGLEITEN Konzept",
                "Sanfte Beruhigungsstrategien ohne Schreienlassen oder Schlaftraining"
            ],
            downloadUrl: "materials/BABY-1-DE.pdf",
            coverImage: "assets/covers/baby_IMG1_de.png",
            buttonText: "Hauptbuch herunterladen (Buch 1)"
        },
        {
            id: "b2",
            title: "Hilf deinem Baby, länger zu schlafen",
            description: "Häufiges Aufwachen reduzieren und einen erholsameren Nachtschlaf aufbauen. Verstehe den Schlaf deines Babys und reagiere mit Gelassenheit.",
            badgeText: "NACHTSCHLAF",
            badgeColor: "#F59E0B",
            features: [
                "Die PRÜFEN → BEOBACHTEN → REAGIEREN → NEUSTARTEN Methode",
                "Unterscheide Hunger, Unwohlsein und normale Schlafgeräusche",
                "Reduziere nächtlichen Stress und elterliche Erschöpfung"
            ],
            downloadUrl: "materials/BABY-2-DE.pdf",
            coverImage: "assets/covers/baby_IMG1_de.png",
            buttonText: "Nachtschlaf-Buch herunterladen (Buch 2)"
        },
        {
            id: "b3",
            title: "Babyschläfchen & Schlafpläne",
            description: "Alltagstaugliche Routinen für Nickerchen, Wachzeiten & Schlafenszeit (0–6 Monate), ohne den ganzen Tag auf die Uhr zu starren.",
            badgeText: "NICKERCHEN & ROUTINEN",
            badgeColor: "#10B981",
            features: [
                "Wachzeiten verstehen und Müdigkeitssignale rechtzeitig erkennen",
                "Flexible Tagesabläufe für Babys von 0 bis 6 Monaten",
                "Lösungen für kurze Nickerchen, frühes Aufwachen und Verweigerung"
            ],
            downloadUrl: "materials/BABY-3-DE.pdf",
            coverImage: "assets/covers/baby_IMG1_de.png",
            buttonText: "Schlafplan-Buch herunterladen (Buch 3)"
        }
    ],

    otherProducts: []
};
