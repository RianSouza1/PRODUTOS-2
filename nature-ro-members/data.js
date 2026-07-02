/**
 * LA FARMACIA NATURAL — Members Area Data (Español)
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Farmacia Naturii", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Întrebare despre accesul la curs (Farmacia Naturii)",
        emailBodyTemplate: "Bună echipa de suport! Aș dori să primesc ajutor cu zona mea de membri pentru Farmacia Naturii.%0A%0ANumele meu este: ______.",

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
            title: "Farmacia Naturii — Ghid Complet",
            description: "Ghidul principal pentru construirea propriei farmacii naturale acasă. Află ce ierburi să folosești, ce rețete funcționează cu adevărat și cum să le prepari pas cu pas, fără a fi nevoie să fii expert.",
            badgeText: "CARTEA PRINCIPALĂ",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Metode simple de preparare pentru începători",
                "Ghiduri pentru ierburi și ingrediente de bucătărie",
                "Rețete pe bază de plante pas cu pas pentru afecțiuni comune"
            ],
            downloadUrl: "materials/la_farmacia_natural_guia.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Descarcă Cartea Principală"
        },
        {
            id: "b2",
            title: "Remedii Vindecătoare din Bucătărie",
            description: "Descoperă proprietățile terapeutice ale ierburilor medicinale comune și învață să le folosești în siguranță pentru bunăstarea zilnică: ceaiuri calmante, siropuri, unguente și altele.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Profiluri medicinale pentru peste 20 de ierburi",
                "Ghiduri de siguranță și dozare",
                "Aplicații tradiționale de vindecare"
            ],
            downloadUrl: "materials/el_poder_curativo_de_las_hierbas.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Descarcă Bonus #1"
        },
        {
            id: "b3",
            title: "Ceaiuri din Plante Vindecătoare",
            description: "Învață să creezi infuzii calmante din plante pentru somn, digestie, relaxare, sănătatea gâtului, imunitate și bunăstarea zilnică cu ingrediente simple.",
            badgeText: "BONUS #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Amestecuri pentru somn, digestie și relaxare",
                "Rețete cu miere, ghimbir, mentă și mușețel",
                "Pas cu pas pentru a le prepara acasă"
            ],
            downloadUrl: "materials/guia_infusiones_curativas.pdf",
            coverImage: "assets/covers/Espanhol - img1.png",
            buttonText: "Descarcă Bonus #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
