const words: Word[] = [
    {
        id: 1,
        categoryId: 3,
        en: "to bake",
        ru: "запекать в духовке",
    },
    {
        id: 2,
        categoryId: 3,
        en: "to beat",
        ru: "Взбивать/смешивать (интенсивно)",
    },
    {
        id: 3,
        categoryId: 3,
        en: "to bleand",
        ru: "смешивать не так интенсивно как beat",
    },
    {
        id: 4,
        categoryId: 3,
        en: "to boil",
        ru: "варить",
    },
    {
        id: 5,
        categoryId: 3,
        en: "to braise",
        ru: "тушить в небольшом кол-ве жидкости, прдварительно обжарив",
    },
    {
        id: 6,
        categoryId: 3,
        en: "to brew",
        ru: "заваривать чай/кофе, варить пиво",
    },
    {
        id: 7,
        categoryId: 3,
        en: "to broil/to grill/to barbecue",
        ru: "жарить на огне",
    },
    {
        id: 8,
        categoryId: 3,
        en: "to brown",
        ru: "жарить до румяной корочки",
    },
    {
        id: 9,
        categoryId: 3,
        en: "to carve",
        ru: "нарезать готовое мясо",
    },
    {
        id: 10,
        categoryId: 3,
        en: "to chop",
        ru: "измельчать/шинковать",
    },
    {
        id: 11,
        categoryId: 3,
        en: "to cut out",
        ru: "вырежать",
    },
    {
        id: 12,
        categoryId: 3,
        en: "to deep fry",
        ru: "жарить во фритюре",
    },
    {
        id: 13,
        categoryId: 3,
        en: "to drain",
        ru: "сливать воду(через дуршлаг)",
    },
    {
        id: 14,
        categoryId: 3,
        en: "to drizzle",
        ru: "сбрызнуть",
    },
    {
        id: 15,
        categoryId: 3,
        en: "to fry",
        ru: "жарить",
    },
    {
        id: 16,
        categoryId: 3,
        en: "to grate",
        ru: "натереть на терке",
    },
    {
        id: 17,
        categoryId: 3,
        en: "to knead",
        ru: "месить тесто",
    },
    {
        id: 18,
        categoryId: 3,
        en: "to mince",
        ru: "пропускать через мясорубку",
    },
    {
        id: 19,
        categoryId: 3,
        en: "to peel",
        ru: "очищать от кожуры",
    },
    {
        id: 20,
        categoryId: 3,
        en: "to pour",
        ru: "наливать",
    },
    {
        id: 21,
        categoryId: 3,
        en: "to rub",
        ru: "натереть мясо специями",
    },
    {
        id: 22,
        categoryId: 3,
        en: "to scald",
        ru: "обдать кипятком",
    },
    {
        id: 23,
        categoryId: 3,
        en: "to sear",
        ru: "быстро обжарить, чтобы сок остался",
    },
    {
        id: 24,
        categoryId: 3,
        en: "to spread",
        ru: "натереть тонким слоем",
    },
    {
        id: 25,
        categoryId: 3,
        en: "to squeeze",
        ru: "выдавить сок",
    },
    {
        id: 26,
        categoryId: 3,
        en: "to stew",
        ru: "тушить",
    },
    {
        id: 27,
        categoryId: 3,
        en: "to stir",
        ru: "мешать ложкой",
    },
    {
        id: 28,
        categoryId: 3,
        en: "to toss",
        ru: "заправлять салат, добавлять соус в пасту",
    },
    {
        id: 29,
        categoryId: 3,
        en: "to whip up",
        ru: "приготовить на скорую руку",
    },
    {
        id: 30,
        categoryId: 3,
        en: "to mash",
        ru: "сделать пюре",
    },
    {
        id: 31,
        categoryId: 3,
        en: "to roast",
        ru: "жарить мясо в духовке или на открытом огне",
    },
    {
        id: 32,
        categoryId: 3,
        en: "to whisk",
        ru: "взбивать венчиком",
    },


    {
        id: 33,
        categoryId: 1,
        en: "a knob",
        ru: "небольшой кусочек",
    },
    {
        id: 34,
        categoryId: 1,
        en: "a dash",
        ru: "очень мало, чуть-чуть",
    },
    {
        id: 35,
        categoryId: 1,
        en: "a drop",
        ru: "капля",
    },
    {
        id: 36,
        categoryId: 1,
        en: "a pinch",
        ru: "щепотка",
    },
    {
        id: 37,
        categoryId: 2,
        en: "cleaver",
        ru: "мясницкий нож, тесак",
    },
    {
        id: 38,
        categoryId: 4,
        en: "junction",
        ru: "Перекресток",
    },
    {
        id: 39,
        categoryId: 4,
        en: "crowd",
        ru: "толпа",
    },
    {
        id: 40,
        categoryId: 4,
        en: "crowded",
        ru: "переполненный",
    },
    {
        id: 41,
        categoryId: 4,
        en: "entrance",
        ru: "вход",
    },
    {
        id: 42,
        categoryId: 4,
        en: "disturb",
        ru: "баспокоить",
    },
    {
        id: 43,
        categoryId: 4,
        en: "whether",
        ru: "будь то, ли",
    },
    {
        id: 44,
        categoryId: 4,
        en: "plenty",
        ru: "множестко, избыток, куча",
    },
    {
        id: 45,
        categoryId: 4,
        en: "forecast",
        ru: "прогноз",
    },
    {
        id: 46,
        categoryId: 4,
        en: "headquarters",
        ru: "штаб-квартира",
    },
    {
        id: 47,
        categoryId: 4,
        en: "scar",
        ru: "шрам",
    },
    {
        id: 48,
        categoryId: 4,
        en: "cheek",
        ru: "щека",
    },
    {
        id: 49,
        categoryId: 4,
        en: "hang",
        ru: "вашать",
    },

    {
        id: 50,
        categoryId: 5,
        en: "fuel inefficient",
        ru: "неэффективное использование топлива",
    },
    {
        id: 51,
        categoryId: 5,
        en: "probably",
        ru: "вероятно",
    },
    {
        id: 52,
        categoryId: 5,
        en: "pressure",
        ru: "давление",
    },
    {
        id: 53,
        categoryId: 5,
        en: "rugged",
        ru: "прочный",
    },
    {
        id: 54,
        categoryId: 5,
        en: "gallon",
        ru: "галлон (или очень много)",
    },
    {
        id: 55,
        categoryId: 5,
        en: "tank",
        ru: "бак",
    },
    {
        id: 56,
        categoryId: 5,
        en: "though",
        ru: "хотя",
    },
    {
        id: 57,
        categoryId: 5,
        en: "lodging",
        ru: "жилье (ночлег)",
    },
    {
        id: 58,
        categoryId: 5,
        en: "amenities",
        ru: "удобства",
    },
    {
        id: 59,
        categoryId: 5,
        en: "daunting",
        ru: "пугающий",
    },
    {
        id: 60,
        categoryId: 5,
        en: "depending",
        ru: "зависящий",
    },
    {
        id: 61,
        categoryId: 5,
        en: "charter",
        ru: "нанять",
    },

    {
        id: 62,
        categoryId: 5,
        en: "wooden",
        ru: "деревянный",
    },
    {
        id: 63,
        categoryId: 5,
        en: "back and forth",
        ru: "туда-сюда",
    },
    {
        id: 64,
        categoryId: 5,
        en: "above",
        ru: "выше (над)",
    },
    {
        id: 65,
        categoryId: 5,
        en: "plenty",
        ru: "много (множество)",
    },
    {
        id: 66,
        categoryId: 5,
        en: "surely",
        ru: "конечно",
    },
    {
        id: 67,
        categoryId: 5,
        en: "firmly planted",
        ru: "твердо стоял",
    },
    {
        id: 68,
        categoryId: 5,
        en: "occasional",
        ru: "время от времени",
    },
    {
        id: 69,
        categoryId: 5,
        en: "particulary",
        ru: "в особеннсти, конкретно",
    },
    {
        id: 70,
        categoryId: 5,
        en: "tech-dependent",
        ru: "технологически зависим",
    },
    {
        id: 71,
        categoryId: 5,
        en: "lighthouse",
        ru: "маяк",
    },
    {
        id: 72,
        categoryId: 5,
        en: "along with",
        ru: "вместе с ",
    },
    {
        id: 73,
        categoryId: 5,
        en: "renovating",
        ru: "ремонтирующий",
    },
    {
        id: 74,
        categoryId: 5,
        en: "plumbing",
        ru: "водопровод",
    },
    {
        id: 75,
        categoryId: 5,
        en: "say the list",
        ru: "мягко говоря",
    },
    {
        id: 76,
        categoryId: 5,
        en: "firm",
        ru: "твердый",
    },
    {
        id: 77,
        categoryId: 5,
        en: "bond with",
        ru: "соединиться с (сблизиться)",
    },
    {
        id: 78,
        categoryId: 5,
        en: "several",
        ru: "несколько",
    },
    {
        id: 79,
        categoryId: 5,
        en: "realize",
        ru: "осознавать",
    },
    {
        id: 80,
        categoryId: 5,
        en: "keep sb up",
        ru: "не давать уснуть",
    },
    {
        id: 81,
        categoryId: 5,
        en: "get paid",
        ru: "получать оплату",
    },
    {
        id: 82,
        categoryId: 5,
        en: "bet",
        ru: "делать ставку",
    },
    {
        id: 83,
        categoryId: 5,
        en: "be down",
        ru: "быть за",
    },
    {
        id: 84,
        categoryId: 5,
        en: "arrival",
        ru: "Прибытие",
    },
    {
        id: 85,
        categoryId: 5,
        en: "gaze",
        ru: "смотреть/залипать",
    },
    {
        id: 86,
        categoryId: 5,
        en: "constellation",
        ru: "созвездие",
    },
    {
        id: 87,
        categoryId: 5,
        en: "shooting star",
        ru: "падающая звезда",
    },
    {
        id: 88,
        categoryId: 5,
        en: "biodegradable",
        ru: "био-разлагаемый",
    },
    {
        id: 89,
        categoryId: 5,
        en: "clay",
        ru: "глина",
    },
    {
        id: 90,
        categoryId: 5,
        en: "remain",
        ru: "оставаться",
    },
    {
        id: 91,
        categoryId: 5,
        en: "otherwise",
        ru: "в противном случае/иначе",
    },
    {
        id: 92,
        categoryId: 5,
        en: "rock",
        ru: "качать",
    },
    {
        id: 93,
        categoryId: 5,
        en: "throughout",
        ru: "через время",
    },
    {
        id: 94,
        categoryId: 5,
        en: "definitely",
        ru: "определенно",
    },
    {
        id: 95,
        categoryId: 6,
        en: "isolated",
        ru: "изолированный",
    },
    {
        id: 96,
        categoryId: 6,
        en: "secluded",
        ru: "уединенный",
    },
    {
        id: 97,
        categoryId: 6,
        en: "appeal",
        ru: "привлекать, вызывать",
    },
    {
        id: 98,
        categoryId: 6,
        en: "candy cane",
        ru: "карамельная трость",
    },
    {
        id: 99,
        categoryId: 6,
        en: "wreath",
        ru: "Венок",
    },
    {
        id: 100,
        categoryId: 6,
        en: "stockings",
        ru: "носки(на камин)",
    },
    {
        id: 101,
        categoryId: 6,
        en: "peppermint",
        ru: "перечная мята",
    },
    {
        id: 102,
        categoryId: 6,
        en: "frosting",
        ru: "глазурь, помадка",
    },
    {
        id: 103,
        categoryId: 6,
        en: "cranberry",
        ru: "клюква",
    },
    {
        id: 104,
        categoryId: 6,
        en: "ribbon",
        ru: "ленточка",
    },

    {
        id: 105,
        categoryId: 7,
        en: "next to",
        ru: "рядом с",
    },
    {
        id: 106,
        categoryId: 7,
        en: "conclusion",
        ru: "вывод",
    },
    {
        id: 107,
        categoryId: 8,
        en: "Indigenous",
        ru: "коренной",
    },
    {
        id: 108,
        categoryId: 8,
        en: "diverse",
        ru: "Разносторонний",
    },
    {
        id: 109,
        categoryId: 8,
        en: "diversity",
        ru: "разнообразие",
    },
    {
        id: 110,
        categoryId: 8,
        en: "heritage",
        ru: "наследие",
    },
    {
        id: 111,
        categoryId: 8,
        en: "commitment",
        ru: "обязательство",
    },
    {
        id: 112,
        categoryId: 8,
        en: "establish",
        ru: "установить",
    },
    {
        id: 113,
        categoryId: 8,
        en: "most recently",
        ru: "совсем недавно",
    },
    {
        id: 114,
        categoryId: 8,
        en: "call sb names",
        ru: "обзываться",
    },
    {
        id: 115,
        categoryId: 8,
        en: "stand up for",
        ru: "постоять за (себя например)",
    },
    {
        id: 116,
        categoryId: 8,
        en: "alongside",
        ru: "бок о бок",
    },
    {
        id: 117,
        categoryId: 8,
        en: "carry",
        ru: "нести (в руках)",
    },
    {
        id: 118,
        categoryId: 8,
        en: "acknowledge",
        ru: "признавать, сознавать, заявлять",
    },
    {
        id: 119,
        categoryId: 8,
        en: "along with",
        ru: "вместе с",
    },
    {
        id: 120,
        categoryId: 8,
        en: "lend",
        ru: "одолжить (дать в долг)",
    },
    {
        id: 121,
        categoryId: 8,
        en: "value",
        ru: "ценить, ценность",
    },
    {
        id: 122,
        categoryId: 8,
        en: "valuable",
        ru: "ценный",
    },
    {
        id: 123,
        categoryId: 8,
        en: "speaking out against",
        ru: "высказываться против",
    },
    {
        id: 124,
        categoryId: 8,
        en: "inspire",
        ru: "вдохновлять",
    },
    {
        id: 125,
        categoryId: 8,
        en: "inspirational",
        ru: "вдохновляющий",
    },
    {
        id: 126,
        categoryId: 8,
        en: "inspiration",
        ru: "вдохновение",
    },
    {
        id: 127,
        categoryId: 9,
        en: "afraid",
        ru: "боящийся",
    },
    {
        id: 128,
        categoryId: 9,
        en: "alive",
        ru: "живой",
    },
    {
        id: 129,
        categoryId: 9,
        en: "aware",
        ru: "осведомленный",
    },
    {
        id: 130,
        categoryId: 9,
        en: "awesome",
        ru: "потрясающий",
    },
    {
        id: 131,
        categoryId: 9,
        en: "amazing",
        ru: "замечательный/удивительный",
    },
    {
        id: 132,
        categoryId: 9,
        en: "angry",
        ru: "сердитый",
    },
    {
        id: 133,
        categoryId: 9,
        en: "awful",
        ru: "отвратительный",
    },
    {
        id: 134,
        categoryId: 9,
        en: "abandoned",
        ru: "заброшенный",
    },
    {
        id: 135,
        categoryId: 9,
        en: "accomplished",
        ru: "успешный/завершенный/выполненный",
    },
    {
        id: 136,
        categoryId: 9,
        en: "acceptable",
        ru: "приемлемый",
    },
    {
        id: 137,
        categoryId: 9,
        en: "accurate",
        ru: "точный",
    },
    {
        id: 138,
        categoryId: 9,
        en: "active",
        ru: "активный",
    },
    {
        id: 139,
        categoryId: 9,
        en: "adorable",
        ru: "умилительный/прелестный",
    },
    {
        id: 140,
        categoryId: 9,
        en: "aggressive",
        ru: "агрессивный",
    },
    {
        id: 141,
        categoryId: 9,
        en: "adventurous",
        ru: "приключенческий",
    },
    {
        id: 142,
        categoryId: 9,
        en: "amusing",
        ru: "забавный",
    },
    {
        id: 143,
        categoryId: 9,
        en: "ancient",
        ru: "древний",
    },
    {
        id: 144,
        categoryId: 9,
        en: "appropriate",
        ru: "подходящий",
    },
    {
        id: 145,
        categoryId: 9,
        en: "ashamed",
        ru: "стыдящийся",
    },
    {
        id: 146,
        categoryId: 9,
        en: "athletic",
        ru: "атлетичный/спортивный",
    },
    {
        id: 147,
        categoryId: 9,
        en: "attractive",
        ru: "привлекательный",
    },
    {
        id: 148,
        categoryId: 9,
        en: "awkward",
        ru: "неловкий",
    },
    {
        id: 149,
        categoryId: 9,
        en: "anxius",
        ru: "тревожный",
    },
    {
        id: 150,
        categoryId: 10,
        en: "calm",
        ru: "спокойный",
    },
    {
        id: 151,
        categoryId: 10,
        en: "careful",
        ru: "осторожный",
    },
    {
        id: 152,
        categoryId: 10,
        en: "clean",
        ru: "чистый",
    },
    {
        id: 153,
        categoryId: 10,
        en: "clear",
        ru: "ясный",
    },
    {
        id: 154,
        categoryId: 10,
        en: "clever",
        ru: "умный",
    },
    {
        id: 155,
        categoryId: 10,
        en: "cold",
        ru: "холодный",
    },
    {
        id: 156,
        categoryId: 10,
        en: "comfortable",
        ru: "удобный",
    },
    {
        id: 157,
        categoryId: 10,
        en: "crazy",
        ru: "сумашедший",
    },
    {
        id: 158,
        categoryId: 10,
        en: "cruel",
        ru: "жестокий",
    },
    {
        id: 159,
        categoryId: 10,
        en: "curious",
        ru: "любопытный",
    },
    {
        id: 160,
        categoryId: 10,
        en: "central",
        ru: "центральный",
    },
    {
        id: 161,
        categoryId: 10,
        en: "current",
        ru: "текущий",
    },
    {
        id: 162,
        categoryId: 10,
        en: "careless",
        ru: "беззаботный",
    },
    {
        id: 163,
        categoryId: 10,
        en: "caring",
        ru: "заботливый",
    },
    {
        id: 165,
        categoryId: 10,
        en: "charming",
        ru: "очаровательный",
    },
    {
        id: 166,
        categoryId: 10,
        en: "cheap",
        ru: "дешевый",
    },
    {
        id: 167,
        categoryId: 10,
        en: "closed",
        ru: "закрытый",
    },
    {
        id: 168,
        categoryId: 10,
        en: "close",
        ru: "близкий",
    },
    {
        id: 169,
        categoryId: 10,
        en: "clueless",
        ru: "не понимающий",
    },
    {
        id: 170,
        categoryId: 10,
        en: "clumsy",
        ru: "неуклюжий",
    },
    {
        id: 171,
        categoryId: 10,
        en: "colorful",
        ru: "цветной/красочный",
    },
    {
        id: 172,
        categoryId: 10,
        en: "complicated",
        ru: "сложный",
    },
    {
        id: 173,
        categoryId: 10,
        en: "confused",
        ru: "поставленный в тупик",
    },
    {
        id: 174,
        categoryId: 10,
        en: "constant",
        ru: "постоянный",
    },
    {
        id: 175,
        categoryId: 10,
        en: "cool",
        ru: "классный",
    },
    {
        id: 176,
        categoryId: 10,
        en: "concerned",
        ru: "обеспокоенный",
    },
    {
        id: 177,
        categoryId: 10,
        en: "common",
        ru: "обычный/распространенный",
    },
    {
        id: 178,
        categoryId: 10,
        en: "creative",
        ru: "креативный",
    },
    {
        id: 179,
        categoryId: 10,
        en: "creepy",
        ru: "бросающий в дрож",
    },
    {
        id: 180,
        categoryId: 10,
        en: "crowded",
        ru: "многолюдный",
    },
    {
        id: 181,
        categoryId: 10,
        en: "crooked",
        ru: "кривой",
    },
    {
        id: 182,
        categoryId: 10,
        en: "crispy",
        ru: "хрустящий",
    },
    {
        id: 183,
        categoryId: 10,
        en: "cute",
        ru: "милый",
    },
    {
        id: 184,
        categoryId: 10,
        en: "curly",
        ru: "кудрявый",
    },
    
    {
        id: 185,
        categoryId: 11,
        en: "bad",
        ru: "плохой",
    },
    {
        id: 186,
        categoryId: 11,
        en: "beautiful",
        ru: "красивый",
    },
    {
        id: 187,
        categoryId: 11,
        en: "bored",
        ru: "скучающий",
    },
    {
        id: 188,
        categoryId: 11,
        en: "boring",
        ru: "скучный",
    },
    {
        id: 189,
        categoryId: 11,
        en: "brave",
        ru: "храбрый",
    },
    {
        id: 190,
        categoryId: 11,
        en: "bright",
        ru: "яркий",
    },
    {
        id: 191,
        categoryId: 11,
        en: "broken",
        ru: "сломанный",
    },
    {
        id: 192,
        categoryId: 11,
        en: "busy",
        ru: "занятой",
    },
    {
        id: 193,
        categoryId: 11,
        en: "bare",
        ru: "голый",
    },
    {
        id: 194,
        categoryId: 11,
        en: "basic",
        ru: "базовый",
    },
    {
        id: 195,
        categoryId: 11,
        en: "bitter",
        ru: "горький",
    },
    {
        id: 196,
        categoryId: 11,
        en: "best",
        ru: "лучший",
    },
    {
        id: 197,
        categoryId: 11,
        en: "better",
        ru: "лучше",
    },
    {
        id: 198,
        categoryId: 11,
        en: "blind",
        ru: "слепой",
    },
    {
        id: 199,
        categoryId: 11,
        en: "boiling",
        ru: "кипящий/оч жаркий",
    },
    {
        id: 200,
        categoryId: 11,
        en: "brilliant",
        ru: "блестящий",
    },
    
    {
        id: 201,
        categoryId: 111,
        en: "detergent",
        ru: "моющее средство",
    },
    {
        id: 202,
        categoryId: 111,
        en: "to forbid",
        ru: "запрещать",
    },
    {
        id: 203,
        categoryId: 111,
        en: "pastry",
        ru: "выпечка, кондитерские изделия",
    },
    {
        id: 204,
        categoryId: 111,
        en: "to last",
        ru: "длиться",
    },
    {
        id: 205,
        categoryId: 111,
        en: "at the end of the",
        ru: "в конце чего-то",
    },
    {
        id: 206,
        categoryId: 111,
        en: "in the end",
        ru: "в итогеб в конце концов",
    },
    {
        id: 207,
        categoryId: 111,
        en: "exhibition",
        ru: "выставка",
    },
    {
        id: 208,
        categoryId: 111,
        en: "to depend on",
        ru: "зависеть от",
    },
    {
        id: 209,
        categoryId: 111,
        en: "to enact a law",
        ru: "принять закон",
    },
    {
        id: 210,
        categoryId: 111,
        en: "literaly",
        ru: "буквально, в прямом смысле",
    },
    {
        id: 211,
        categoryId: 111,
        en: "figuratively",
        ru: "в переносном смысле",
    },
    {
        id: 212,
        categoryId: 111,
        en: "according to",
        ru: "согласно с, на основании",
    },
    {
        id: 213,
        categoryId: 111,
        en: "to quit",
        ru: "бросить, сдаться",
    },
    {
        id: 214,
        categoryId: 111,
        en: "wheel chair",
        ru: "ивалидное кресло",
    },
    {
        id: 215,
        categoryId: 111,
        en: "couple",
        ru: "пара",
    },
    {
        id: 216,
        categoryId: 111,
        en: "overlook",
        ru: "упустить из виду, недостмотреть, не замечать",
    },
    {
        id: 217,
        categoryId: 111,
        en: "at first sight",
        ru: "с перого взгляда",
    },
    {
        id: 218,
        categoryId: 111,
        en: "treatment",
        ru: "лечение",
    },
    {
        id: 219,
        categoryId: 111,
        en: "to belong to",
        ru: "пренадлежать",
    },
    {
        id: 220,
        categoryId: 111,
        en: "give to take",
        ru: "плюс минус",
    },
    {
        id: 221,
        categoryId: 111,
        en: "receipt",
        ru: "чек",
    },
    {
        id: 222,
        categoryId: 111,
        en: "callus",
        ru: "мозоль",
    },
    {
        id: 223,
        categoryId: 111,
        en: "puncture",
        ru: "прокол (колеса)",
    },
    {
        id: 224,
        categoryId: 111,
        en: "spare wheel",
        ru: "запасное колесо",
    },
    {
        id: 225,
        categoryId: 111,
        en: "the rest of",
        ru: "остаток",
    },
    {
        id: 226,
        categoryId: 111,
        en: "to carve",
        ru: "вырезать по дереву",
    },
    {
        id: 227,
        categoryId: 111,
        en: "anxiety",
        ru: "тревога",
    },
    {
        id: 228,
        categoryId: 111,
        en: "to do a favor",
        ru: "сделать одолжение",
    },
    {
        id: 229,
        categoryId: 111,
        en: "handful of",
        ru: "горсть/кучка",
    },
    {
        id: 230,
        categoryId: 111,
        en: "to pick up",
        ru: "подбирать",
    },
    {
        id: 231,
        categoryId: 111,
        en: "to mean to (do something)",
        ru: "намереваться что то сделать",
    },
    {
        id: 232,
        categoryId: 111,
        en: "stunning",
        ru: "ошеломленный",
    },
    {
        id: 233,
        categoryId: 111,
        en: "to repair",
        ru: "чинить",
    },
    {
        id: 234,
        categoryId: 111,
        en: "due to",
        ru: "по причине, из-за",
    },
    {
        id: 235,
        categoryId: 111,
        en: "fortunately",
        ru: "к счастью",
    },
    {
        id: 236,
        categoryId: 112,
        en: "favor",
        ru: "услуга",
    },
    {
        id: 237,
        categoryId: 112,
        en: "dice",
        ru: "игральные кости",
    },
    {
        id: 238,
        categoryId: 112,
        en: "toothpick",
        ru: "зубочистка",
    },
    {
        id: 239,
        categoryId: 112,
        en: "daisy",
        ru: "ромашка",
    },
    {
        id: 240,
        categoryId: 112,
        en: "dandelion",
        ru: "одуванчик",
    },
    {
        id: 241,
        categoryId: 112,
        en: "spare/leisure time",
        ru: "свободное время",
    },
    {
        id: 242,
        categoryId: 112,
        en: "naughty",
        ru: "непослушный",
    },
    {
        id: 243,
        categoryId: 112,
        en: "bulb",
        ru: "лампочка",
    },
    {
        id: 244,
        categoryId: 112,
        en: "yolk",
        ru: "желток",
    },
    {
        id: 245,
        categoryId: 112,
        en: "Cauliflower",
        ru: "цветная капуста",
    },
    {
        id: 246,
        categoryId: 112,
        en: "Cottage cheese",
        ru: "творог",
    },
    {
        id: 247,
        categoryId: 112,
        en: "salmon",
        ru: "лосось",
    },
    {
        id: 248,
        categoryId: 112,
        en: "squirrel",
        ru: "белка",
    },
    {
        id: 249,
        categoryId: 112,
        en: "to bother",
        ru: "беспокоить",
    },
    {
        id: 250,
        categoryId: 112,
        en: "cone",
        ru: "рожок",
    },
    {
        id: 251,
        categoryId: 112,
        en: "to get along",
        ru: "ладить",
    },
    {
        id: 252,
        categoryId: 112,
        en: "to show up",
        ru: "заявиться",
    },
    {
        id: 253,
        categoryId: 112,
        en: "glue",
        ru: "клей",
    },
    {
        id: 261,
        categoryId: 112,
        en: "to be glued",
        ru: "быть приклеенным",
    },
    {
        id: 254,
        categoryId: 112,
        en: "to swear",
        ru: "клясться",
    },
    {
        id: 255,
        categoryId: 112,
        en: "cozy",
        ru: "уютный",
    },
    {
        id: 256,
        categoryId: 112,
        en: "harmless",
        ru: "безвредный",
    },
    {
        id: 257,
        categoryId: 112,
        en: "elbow",
        ru: "локоть",
    },
    {
        id: 258,
        categoryId: 112,
        en: "fence",
        ru: "забор",
    },
    {
        id: 259,
        categoryId: 112,
        en: "Mischievous",
        ru: "вредный",
    },
    {
        id: 260,
        categoryId: 112,
        en: "Convince",
        ru: "Убеждать",
    },
    // {
    //     id: 200,
    //     categoryId: 112,
    //     en: "qwe",
    //     ru: "qwe",
    // },

]
//refugee 
export default words;