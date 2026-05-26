/**
 * Excel Maestria — Members Area Data
 */

const APP_DATA = {
    config: {
        brandName: "Excel Maestria",
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Domanda sull'accesso al corso (Excel)",
        emailBodyTemplate: "Ciao team di supporto! Ho bisogno di aiuto con la mia area membri Excel.%0A%0AIl mio nome è: ______.",
        showFloatingHelp: true
    },

    videos: [
        {
            id: "v1",
            title: "Lezione 1 — Introduzione all'Interfaccia di Excel",
            duration: "Corso Base",
            embedUrl: "https://www.youtube.com/embed/fbe_pQhQwE4?list=PLP5MAKLy8lP-lC4pGt64iXehuinJX5ZYu"
        },
        {
            id: "v2",
            title: "Lezione 2 — La Backstage View & Gestione dei File",
            duration: "Corso Base",
            embedUrl: "https://www.youtube.com/embed/fbe_pQhQwE4?list=PLP5MAKLy8lP-lC4pGt64iXehuinJX5ZYu&index=2"
        },
        {
            id: "v3",
            title: "Lezione 3 — Inserimento dei Dati e Formattazione Celle",
            duration: "Corso Base",
            embedUrl: "https://www.youtube.com/embed/fbe_pQhQwE4?list=PLP5MAKLy8lP-lC4pGt64iXehuinJX5ZYu&index=3"
        },
        {
            id: "v4",
            title: "Lezione 4 — Formule Fondamentali e Gestione Tabelle",
            duration: "Corso Avanzato",
            embedUrl: "https://www.youtube.com/embed/fbe_pQhQwE4?list=PLP5MAKLy8lP-lC4pGt64iXehuinJX5ZYu&index=4"
        }
    ],

    books: [
        {
            id: "b1",
            title: "Manuale Pratico di Excel",
            description: "La guida completa e pratica per imparare ad usare Microsoft Excel da zero, passo dopo passo.",
            badgeText: "GUIDA PRINCIPALE",
            badgeColor: "#10B981",
            features: ["Guida passo dopo passo", "Pratica e semplice", "Per tutti i livelli"],
            downloadUrl: "materials/manuale_pratico_excel.pdf",
            coverImage: "assets/covers/cover_manuale_pratico.png",
            buttonText: "Scarica il libro"
        },
        {
            id: "b2",
            title: "Excel — Elementi di Base",
            description: "Scopri i concetti fondamentali dei fogli di calcolo per iniziare al meglio con Microsoft Excel.",
            badgeText: "GUIDA DI BASE",
            badgeColor: "#059669",
            features: ["Concetti fondamentali", "Celle e formule semplici", "Esempi pratici immediati"],
            downloadUrl: "materials/excel_elementi_di_base.pdf",
            coverImage: "assets/covers/cover_elementi_di_base.png",
            buttonText: "Scarica la guida"
        },
        {
            id: "b3",
            title: "30 Progetti Pratici per Excel",
            description: "Metti alla prova le tue competenze con 30 progetti e casi studio reali e pratici.",
            badgeText: "PROGETTI REALI",
            badgeColor: "#3B82F6",
            features: ["30 progetti guidati", "Casi di studio aziendali", "Esercizi passo dopo passo"],
            downloadUrl: "materials/30_progetti_pratici_per_excel.pdf",
            coverImage: "assets/covers/cover_progetti_pratici.png",
            buttonText: "Scarica la raccolta"
        },
        {
            id: "b4",
            title: "Quaderno di Esercizi — Excel Avanzato",
            description: "Ottimizza il tuo flusso di lavoro con esercizi pratici di livello avanzato.",
            badgeText: "ESERCIZI AVANZATI",
            badgeColor: "#047857",
            features: ["Esercizi avanzati", "Formule e funzioni complesse", "Soluzioni pratiche integrate"],
            downloadUrl: "materials/quaderno_esercizi_excel_avanzato.pdf",
            coverImage: "assets/covers/cover_quaderno_esercizi.png",
            buttonText: "Scarica il quaderno"
        }
    ],

    otherProducts: []
};
