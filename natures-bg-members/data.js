/**
 * NATURE'S APOTHECARY — Members Area Data
 */

const APP_DATA = {
    // ----------------------------------------------------------------------
    // CONFIGURAÇÕES GLOBAIS DA PÁGINA
    // ----------------------------------------------------------------------
    config: {
        brandName: "Аптека на Природата", // Nome que vai no header

        // Contato Oficial (100% via E-mail)
        contactEmail: "trinityag01@gmail.com",
        emailSubject: "Въпрос относно достъпа до курса (Аптека на Природата)",
        emailBodyTemplate: "Здравейте, екип по поддръжка! Бих искал съдействие за моята зона за членове на Аптека на Природата.%0A%0AИмето ми е: ______.",

        // Mostrar ícone de "? Ajuda" flutuante em todas as telas
        showFloatingHelp: true
    },

    // ----------------------------------------------------------------------
    // 1. VÍDEOS (Video Course) - Ocultado ou Vazio se não houver vídeos
    // ----------------------------------------------------------------------
    videos: [],

    // ----------------------------------------------------------------------
    // 2. LIVROS (E-books e PDFs)
    // ----------------------------------------------------------------------
    books: [
        {
            id: "b1",
            title: "Наръчник по Аптека на Природата",
            description: "Пълното ръководство за изграждане на собствена естествена аптека у дома. Научете кои билки да използвате, кои рецепти наистина работят и как да ги приготвите стъпка по стъпка.",
            badgeText: "ОСНОВНА КНИГА",
            badgeColor: "#10B981", // Emerald Green
            features: [
                "Методи за приготвяне, подходящи за начинаещи",
                "Ръководства за билки и кухненски съставки",
                "Рецепти с билки стъпка по стъпка"
            ],
            downloadUrl: "materials/natures_apothecary_handbook.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Изтегляне на основната книга"
        },
        {
            id: "b2",
            title: "Лечебната сила на билките",
            description: "Отключете терапевтичните свойства на обикновените лечебни билки и се научете как да ги използвате безопасно за ежедневно здраве, успокояващи чайове и домашни грижи.",
            badgeText: "БОНУС #1",
            badgeColor: "#F59E0B", // Gold/Amber
            features: [
                "Лечебни профили на над 20 билки",
                "Указания за безопасност и дозировка",
                "Традиционни лечебни приложения"
            ],
            downloadUrl: "materials/healing_power_of_herbs.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Изтегляне на Бонус #1"
        },
        {
            id: "b3",
            title: "Средства, вдъхновени от Барбара О'Нийл",
            description: "Вдъхновено от традиционни средства и практики за естествено здраве, това ръководство ви помага да живеете по-здравословен живот без химикали чрез естествени терапии.",
            badgeText: "БОНУС #2",
            badgeColor: "#3B82F6", // Blue
            features: [
                "Традиционни естествени лекове",
                "Съвети за живот без химия",
                "Практики, вдъхновени от Барбара О'Нийл"
            ],
            downloadUrl: "materials/barbara_oneill_inspired_remedies.pdf",
            coverImage: "assets/covers/cover_natural_healing.png",
            buttonText: "Изтегляне на Бонус #2"
        }
    ],

    // ----------------------------------------------------------------------
    // 3. OUTROS PRODUTOS (Upsell / Cross-sell)
    // ----------------------------------------------------------------------
    otherProducts: []
};
