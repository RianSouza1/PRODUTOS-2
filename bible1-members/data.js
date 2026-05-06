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
        brandName: "Bible Guide & Workbook", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Question about course access (Tai Chi)",
        emailBodyTemplate: "Hello support team! I would like help with my members area.%0A%0AMy name is: ______.",

        // Mostrar ícone de "? Ajuda" flutuante em todas as telas
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VÍDEOS (Video Course)
    // ----------------------------------------------------------------------
    videos: [],


    // ----------------------------------------------------------------------
    // 2. LIVROS (Materiais Complementares / E-books)
    // ---------------------------------------------------------------------  // 1. Livros (E-books e PDFs)
    books: [
        {
            id: "b1",
            title: "Tai Chi for Seniors",
            description: "Complete 28-day program with gentle exercises for balance, mobility, joint relief, breathing techniques, and a 10-minute daily routine.",
            badgeText: "MAIN BOOK",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "28-Day Progressive Program",
                "10-Minute Daily Routine",
                "Step-by-Step Illustrations"
            ],
            downloadUrl: "materials/Tai Chi for Seniors.pdf",
            coverImage: "assets/covers/book_taichi_seniors_light_v2.jpg",
            buttonText: "Download Tai Chi for Seniors"
        },
        {
            id: "b2",
            title: "Tai Chi for Weight Loss",
            description: "Discover how Tai Chi movements can boost your metabolism and energy levels safely — no intense workouts needed.",
            badgeText: "BONUS #1",
            badgeColor: "#F59E0B", // Amber/Gold
            features: [
                "Metabolism-Boosting Movements",
                "Energy-Building Sequences",
                "Diet & Movement Synergy Tips"
            ],
            downloadUrl: "materials/Tai Chi for Weight Loss.pdf",
            coverImage: "assets/covers/book_taichi_weightloss_light.jpg",
            buttonText: "Download Weight Loss Bonus"
        },
        {
            id: "b3",
            title: "Tai Chi for Beginners",
            description: "Start from zero with confidence. Learn the fundamentals of Tai Chi with a simple 7-day starter routine.",
            badgeText: "BONUS #2",
            badgeColor: "#F59E0B", // Amber/Gold
            features: [
                "History & Philosophy of Tai Chi",
                "Basic Stances & Movements",
                "7-Day Starter Routine",
                "Common Mistakes to Avoid"
            ],
            downloadUrl: "materials/Tai Chi for Beginners (1).pdf",
            coverImage: "assets/covers/book_taichi_beginners_light.jpg",
            buttonText: "Download Beginners Guide"
        },
        {
            id: "b4",
            title: "The Simplified 24 Form",
            description: "Master the most popular sequence globally with detailed breakdown of all 24 movements.",
            badgeText: "BONUS #3",
            badgeColor: "#F59E0B", // Amber/Gold
            features: [
                "Complete 24 Postures Form",
                "Transitions & Flow Tips",
                "Printable Practice Sheet"
            ],
            downloadUrl: "materials/Tai-Chi-for-Seniors-The-Simplified-24-Form.pdf",
            coverImage: "assets/covers/book_taichi_seniors.jpg",
            buttonText: "Download 24 Form Bonus"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Desenvolvidos por nós)
    // ----------------------------------------------------------------------
    otherProducts: [
        {
            id: "p1",
            title: "The Natural Healing Bundle",
            description: "A complete guide to natural therapies and body healing.",
            linkUrl: "https://pay.hotmart.com/T104741595X?checkoutMode=10",
            coverImage: "assets/covers/cover_natural_healing.png",
            badgeText: "WELLNESS",
            badgeColor: "#10B981",
            features: [
                "Complete Healing Guide",
                "Alternative and Natural Therapies",
                "Stress Reduction and Prevention"
            ],
            buttonText: "Access Natural Healing Bundle"
        },
        {
            id: "p2",
            title: "Delicious Salads",
            description: "Practical, delicious, and super healthy salad recipes.",
            linkUrl: "https://pay.hotmart.com/D100572416Q?checkoutMode=10",
            coverImage: "assets/covers/cover_delicious_salads.png",
            badgeText: "NUTRIÇÃO",
            badgeColor: "#F59E0B",
            features: [
                "Quick and Practical Recipes",
                "Vitamin-Rich Menu",
                "Ideal for Light Weight Loss"
            ],
            buttonText: "Access Delicious Salads"
        },
        {
            id: "p3",
            title: "Diabetic Cookbook",
            description: "Tasty and smart eating for diabetes management.",
            linkUrl: "mailto:trinityag01@gmail.com?subject=Interest%20in%20Diabetic%20Cookbook&body=Hello%21%20I%20would%20like%20to%20receive%20the%20link%20to%20access%20the%20Diabetic%20Cookbook.",
            coverImage: "assets/covers/cover_diabetic_cookbook.png",
            badgeText: "SAÚDE",
            badgeColor: "#EF4444",
            features: [
                "Healthy Glycemic Control",
                "Low Glycemic Index Recipes",
                "Sugar-Free Sweet Options"
            ],
            buttonText: "Access Diabetic Cookbook"
        },
        {
            id: "p4",
            title: "GLP-1 Diet Cookbook Bundle",
            description: "Complement your health journey, metabolism, and GLP-1-based diet.",
            linkUrl: "https://pay.hotmart.com/B100814854W?checkoutMode=10",
            coverImage: "assets/covers/cover_glp1_diet.png",
            badgeText: "METABOLISMO",
            badgeColor: "#8B5CF6",
            features: [
                "Workout Maximization",
                "Lean Mass Maintenance",
                "Satiating Recipes"
            ],
            buttonText: "Access GLP-1 Bundle"
        }
    ]
};
