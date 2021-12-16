const tasks = [{
  id: 1,
  emoji: '0️⃣',
  description: 'Напишите условие которое не пропустит в консоль числа меньше чем 0.5 используя оператор <selection>></selection> — Больше. Используйте конструкцию: <selection>console.log(number)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const number = Math.random().toFixed(3)
    return {
      varData: {
        number
      },
      code: `
        var number = ${number};
      `
    }
  },
  testedCodeFunction: (varData, number) => (varData.number > 0.5) && (number > 0.5),
  confirm: false
}, {
  id: 2,
  emoji: '✏️',
  description: 'Напишите условие которое не пропустит в консоль не существующих имен используя оператор <selection>!=</selection> — не равенства. Используйте конструкцию: <selection>console.log(name)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const names = ['Anton', '', '', '', '', '', 'Gena', 'Stas', 'Anna', 'Dasha', 'Irina', 'Evgeniy', 'Igor']

    const name = names[parseInt(Math.random() * names.length)]

    return {
      varData: {
        name
      },
      code: `
        var name = "${name}";
      `
    }
  },
  testedCodeFunction: (varData, name) => varData.name === name && name !== '',
  confirm: false
}, {
  id: 3,
  emoji: '🔞',
  description: 'Напишите условие которое не пропустит в консоль людей младше 18 и без имени используя операторы <selection>></selection> — Больше <selection>!=</selection> — не равенство и логический опреатор <selection>&&</selection> — И. Используйте конструкцию: <selection>console.log(name, age)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const names = ['Anton', '', '', '', '', '', 'Gena', 'Stas', 'Anna', 'Dasha', 'Irina', 'Evgeniy', 'Igor']
    const ages = Array(20).fill(0).map((_, key) => key + 16)

    const name = names[parseInt(Math.random() * names.length)]
    const age = ages[parseInt(Math.random() * ages.length)]

    return {
      varData: {
        name,
        age
      },
      code: `
        var name = "${name}";
        var age = ${age};
      `
    }
  },
  testedCodeFunction: (varData, name, age) => (varData.name !== '' && varData.age > 18) && (name !== '' && age > 18),
  confirm: false
}, {
  id: 4,
  emoji: '➕',
  description: 'Напишите условие которое будет выводить только результат сложения используя оператор <selection>==</selection> — равенство. Используйте конструкцию: <selection>console.log(a + b)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const symbols = ['+', '-', '/', '*', '%']
    const as = Array(200).fill(0).map((_, key) => key - 100)
    const bs = Array(200).fill(0).map((_, key) => key - 100)

    const symbol = symbols[parseInt(Math.random() * symbols.length)]
    const b = bs[parseInt(Math.random() * bs.length)]
    const a = as[parseInt(Math.random() * as.length)]

    return {
      varData: {
        a,
        b,
        symbol
      },
      code: `
        var a = ${a};
        var b = ${b};
        var symbol = "${symbol}";
      `
    }
  },
  testedCodeFunction: (varData, sum) => varData.a + varData.b === sum && varData.symbol === '+',
  confirm: false
}, {
  id: 5,
  emoji: '📬',
  description: 'Напишите условие которое будет выводить только почтовые ящики в консоль, каждый почтовый ящик должен иметь <selection>@</selection>. Используя метод <selection>match</selection> — регулярные выражения. Используйте конструкцию: <selection>console.log(email)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const emails = ['prohetamine@yandex.ru', 'lolikekdev@gmail.com', 'AlexPetrowIvanov@mail.ru', 'Misha Jol', 'Piter Pen', 'maksim1488', 'vlad1992@site.org', '982322', 'rine1', '3', '-_____-', '777badman777.com', 'qwerty527$mail.ru']

    const email = emails[parseInt(Math.random() * emails.length)]

    return {
      varData: {
        email
      },
      code: `
        var email = "${email}";
      `
    }
  },
  testedCodeFunction: (varData, email) => !!varData.email.match(/@/) && !!email.match(/@/),
  confirm: false
}, {
  id: 6,
  emoji: '➗',
  description: 'Напишите условие которое будет выводить только результат деления используя оператор <selection>==</selection> — равенство. Используйте конструкцию: <selection>console.log(a / b)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const symbols = ['+', '-', '/', '*', '%']
    const as = Array(20).fill(0).map((_, key) => key - 10)
    const bs = Array(20).fill(0).map((_, key) => key)

    const symbol = symbols[parseInt(Math.random() * symbols.length)]
    const b = bs[parseInt(Math.random() * bs.length)]
    const a = as[parseInt(Math.random() * as.length)]

    return {
      varData: {
        a,
        b,
        symbol
      },
      code: `
        var a = ${a};
        var b = ${b};
        var symbol = "${symbol}";
      `
    }
  },
  testedCodeFunction: (varData, sum) => varData.a / varData.b === sum && varData.symbol === '/',
  confirm: false
}, {
  id: 7,
  emoji: '📝',
  description: 'Напишите условие которое будет выводить слова длиной больше или равно 5 символов. Используя опреатор <selection>>=</selection> — больше или равно и метод <selection>length</selection> — определяет размер строки. Используйте конструкцию: <selection>console.log(word)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const words = `У лукоморья дуб зелёный Златая цепь на дубе том И днём и ночью кот учёный Всё ходит по цепи кругом Идёт направо  песнь заводит Налево  сказку говорит Там чудеса там леший бродит Русалка на ветвях сидит Там на неведомых дорожках Следы невиданных зверей Избушка там на курьих ножках Стоит без окон без дверей Там лес и дол видений полны Там о заре прихлынут волны На брег песчаный и пустой И тридцать витязей прекрасных Чредой из вод выходят ясных И с ними дядька их морской Там королевич мимоходом Пленяет грозного царя Там в облаках перед народом Через леса через моря Колдун несёт богатыря В темнице там царевна тужит А бурый волк ей верно служит Там ступа с Бабою Ягой Идёт бредёт сама собой Там царь Кащей над златом чахнет Там русский дух там Русью пахнет И там я был и мёд я пил У моря видел дуб зелёный Под ним сидел и кот учёный Свои мне сказки говорил`.split(' ')

    const word = words[parseInt(Math.random() * words.length)]

    return {
      varData: {
        word
      },
      code: `
        var word = "${word}";
      `
    }
  },
  testedCodeFunction: (varData, word) => varData.word.length >= 5 && word.length >= 5,
  confirm: false
}, {
  id: 8,
  emoji: '✖️',
  description: 'Напишите условие которое будет выводить только результат умножения используя оператор <selection>==</selection> — равенство. Используйте конструкцию: <selection>console.log(a * b)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const symbols = ['+', '-', '/', '*', '%']
    const as = Array(20).fill(0).map((_, key) => key - 10)
    const bs = Array(20).fill(0).map((_, key) => key)

    const symbol = symbols[parseInt(Math.random() * symbols.length)]
    const b = bs[parseInt(Math.random() * bs.length)]
    const a = as[parseInt(Math.random() * as.length)]

    return {
      varData: {
        a,
        b,
        symbol
      },
      code: `
        var a = ${a};
        var b = ${b};
        var symbol = "${symbol}";
      `
    }
  },
  testedCodeFunction: (varData, sum) => varData.a * varData.b === sum && varData.symbol === '*',
  confirm: false
}, {
  id: 9,
  emoji: '➖',
  description: 'Напишите условие которое будет выводить только результат вычитания используя оператор <selection>==</selection> — равенство. Используйте конструкцию: <selection>console.log(a - b)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const symbols = ['+', '-', '/', '*', '%']
    const as = Array(20).fill(0).map((_, key) => key - 10)
    const bs = Array(20).fill(0).map((_, key) => key)

    const symbol = symbols[parseInt(Math.random() * symbols.length)]
    const b = bs[parseInt(Math.random() * bs.length)]
    const a = as[parseInt(Math.random() * as.length)]

    return {
      varData: {
        a,
        b,
        symbol
      },
      code: `
        var a = ${a};
        var b = ${b};
        var symbol = "${symbol}";
      `
    }
  },
  testedCodeFunction: (varData, sum) => varData.a - varData.b === sum && varData.symbol === '-',
  confirm: false
}, {
  id: 10,
  emoji: '🚫',
  description: 'Напишите условие которое будет выводить только цифры. Используя оператор <selection>==</selection> — равенство и функцию <selection>typeof</selection> — определяет тип данных в переменной. Используйте конструкцию: <selection>console.log(number)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const numbers = [1,2,44,50,32,7,9, ...(`Чему равно число пи? В простых случаях хватает знать первые 3 знака (3,14). Но для более сложных случаев и там, где нужна бОльшая точность необходимо знать больше, чем 3 цифры.`.split(' '))]

    const number = numbers[parseInt(Math.random() * numbers.length)]

    return {
      varData: {
        number
      },
      code: `
        var number = ${typeof(number) === 'number' ? `${number}`: `"${number}"`};
      `
    }
  },
  testedCodeFunction: (varData, number) => typeof(varData.number) === 'number' && number === varData.number,
  confirm: false
}, {
  id: 11,
  emoji: '💎',
  description: 'Напишите условие которое будет пропускать только true. Используя оператор <selection>===</selection> — строгое равенство. Используйте конструкцию: <selection>console.log(data)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const isOks = ["true", true, true, true, "false", false, 0, 1, "", "истина"]

    const isOk = isOks[parseInt(Math.random() * isOks.length)]

    return {
      varData: {
        isOk
      },
      code: `
        var isOk = ${typeof(isOk) === 'string' ? `"${isOk}"`: `${isOk}`};
      `
    }
  },
  testedCodeFunction: (varData, isOk) => varData.isOk === true && isOk === true,
  confirm: false
}, {
  id: 12,
  emoji: '🦠',
  description: 'Напишите условие которое будет пропускать связанные с короновирусом, избергайте слова начинаюищеся на <selection>коронави</selection> и <selection>COVID-19</selection>. используя метод <selection>match</selection> — регулярные выражения и логический оператор <selection>!</selection> — отрицание. Используйте конструкцию: <selection>console.log(word)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const words = 'Коронавирус COVID-19Симптомы коронавируса COVID-19 Симптомы коронавируса COVID-19 Полезные статьи Симптомы Справочник Коронавирус COVID-19 Лабораторная диагностика Коронавирус коронавирусной болезни COVID-19 от ОРВИ и гриппа  COVID-19 Коронавирус может протекать в более тяжелой форме, нежели коронавируса от относительно безобидной простуды.  В коронавируса от ОРВИ   Более длительный инкубационный коронавирусу же требуется до 2 недель. В отличие от коронавирусе наблюдается невысокая 37-37,5°С температура коронавирусом часто бывает длительным, сухим, мучительным Коронавирусная инфекция может вызывать расстройство коронавирус, ОРВИ, грипп) поможет только лабораторный коронавируса от гриппа  Надо отметить, что COVID-19 Коронавирус развивается постепенно - от общего недомогания коронавируса от гриппа устанавливал врач, так как оба коронавирус, ему тоже нужна медицинская помощь и лечение коронавирусную инфекцию и часто являются ее бессимптомными коронавируса у взрослого человека по дням  1-3-й день. коронавирусной инфекцией. У 80% заболевших COVID-19 коронавирусом, требуется в среднем до двух недель с коронавирус методом ПЦР дали отрицательный результат. коронавирус SARS-CoV-2, мазок (PCR, Coronavirus SARS-CoV-2, коронавирус SARS-CoV-2, мазок (PCR, Coronavirus SARS-CoV-2, коронавирусу SARS-CoV-2; (Anti-SARS-CoV-2, IgM and IgG, коронавирусом уже справился с инфекцией и выздоровел. коронавируса COVID-19, простудных заболеваний и гриппа. коронавирусной инфекции (COVID-19). Минздрав РФ, версия коронавирус Нарушение или потеря вкуса  Нарушение и коронавирус covid 19 COVID-19: механизмы и пути передачи, коронавирус 2 тяжелого острого респираторного синдрома коронавирусной болезнью 2019 (COronaVIrus Disease 2019 Коронавирус COVID-19 Профилактика новой коронавирусной коронавирусная инфекция (COVID-19) относится к группе'.split(' ')

    const word = words[parseInt(Math.random() * words.length)]

    return {
      varData: {
        word
      },
      code: `
        var word = "${word}";
      `
    }
  },
  testedCodeFunction: (varData, word) => !varData.word.match(/(коронави|COVID-19)/) && !word.match(/(коронави|COVID-19)/),
  confirm: false
}, {
  id: 13,
  emoji: '🍒',
  description: 'Напишите условие которое будет выводить большую по колличеству символов строку. используя метод <selection>length</selection> — определяет размер строки, логический оператор <selection>></selection> — больше. Используйте конструкцию: <selection>console.log(a)</selection> или <selection>console.log(b)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const words = `Абиу,Абрикос,Авокадо,Айва,Аки,Алиберция,Алыча,Амбарелла,Американский абрикос,Американский орех,Ананас,Аннона горная,Аннона колючая,Аннона сетчатая,Аннона черимола,Аннона чешуйчатая,Антильский крыжовник,Апельсин,Арабика,Араза,Арахис,Арбуз обыкновенный,Астрокариум колючий,Атимойя,Африканский колючий огурец,Африканский тамаринд,Бакау,Баклажан,Балия,Бананы,Баобаб,Барбадин (Большая гранадилла),Барбадосская вишня,Бархатное яблоко,Баэль,Белая сапота,Бергамот,Билимби,Бирсонима,Блигия вкусная,Большой змеиный фрукт,Боярышник,Бразильский орех,Бычье сердце,Вампи,Вангерия,Ваниль,Виноград,Вишня,Воаванга,Водяное(восковое) яблоко,Гандария,Генипа,Гибискус съедобный,Гнетум гнемон,Голубиная слива,Голубой квандонг,Горлянка,Горький огурец,Гранадилла (Маракуйа),Гранадилла большая (Барбадин),Гранадилла сладкая,Гранат,Грейпфрут,Грумичама,Груша,Гуайява земляничная,Гуайява коста-риканская,Гуайява красная,Гуайява обыкновенная,Гуарана,Давидсония,Дамские пальчики,Деревянное яблоко,Десертный квандонг,Джекфрут,Древесная калебаса,Дуку,Дуриан,Дуриан цибетиновый,Дынная груша,Дынное дерево,Дыня обыкновенная,Евгения одноцветковая,Жаботикаба,Звездчатое яблоко,Земляничная груша,Земляничный томат,Земляной орех,Зизифус мавританский,Золотая слива,Золотистый апельсин,Индийские бобы,Индийский инжир,Индийский миндаль,Индийское розовое яблоко,Инжир,Кабачки,Каинито,Какао,Кактус инжировый,Каламондин,Калебаса,Калина,Канариум яйцевидный,Капский крыжовник,Карамбола,Кас,Квини,Квинслендский орех,Кепель,Кетамбилла,Кивано,Киви,Китайская калебаса,Клементин,Кокколоба ягодоносная,Кокос,Корилла,Кофейные деревья,Кранжи,Кумкват овальный,Купуасу,Курбарил,Кустовой горошек,Лайм настоящий,Лангсат,Лансиум домашний,Леуцена светлоголовчатая,Либерика,Ликания,Лимон грубокожистый,Лимон обыкновенный,Лимон Мейера,Лимонная осина,Личи,Лобия,Ложный мангустан,Лох узколистный,Лукума,Луло,Люффа остроребристая,Маболо,Мадагаскарская слива,Макадамия цельнолистная,Малабарская тыква,Малабарский апельсин,Малайское яблоко,Малуко,Мальпигия гранатолистная,Маммея американская,Мамончилло (Лайм испанский),Манго благоухающее,Манго великолепное,Манго индийское,Манго резко пахнущее,Мангостан,Мангустан,Мандарин,Манилкара,Маракуйя,Мармеладный плод,Марула,Мауриция извилистая,Маш,Мексиканская земляная вишня,Мексиканский огурец,Мелинжо,Моква,Момбин желтый,Момбин красный,Момордика,Моринда,Мунду,Мускатный орех,Мушмула японская,Наранхилла,Ням-ням,Нектарин (подвид персика),Обезьяний хлеб,Огурец,Огуречное дерево,Орех кешью,Пальма катеху,Пальма кокосовая,Пальма масличная африканская,Пальма персиковая,Пальчиковый лайм,Папайя,Папайя горная,Папеда,Паприка,Пара-гуайява,Паркия красивая,Пассифлора съедобная,Пекуи,Пепино,Перец,Перец кайенский,Перец стручковый,Персик,Перуанская вишня,Питайя,Питомба,Пиши,Помело,Померанец,Помидор,Помпельмус,Понцирус (несъедобный плод),Приморский виноград,Путерия,Пуласан,Ракум-салакка,Рамбай,Рамбутан,Робуста,Розовое яблоко,Роллиния слизистая,Салакка,Салакка скученная,Саламандровое дерево,Сантол,Саподилла,Сатсума,Сахарное яблоко,Сахарный горошек,Свечное дерево,Свити,Сизигиум аквеум,Сизигиум малаккский,Сизигиум ямбоза,Сингапурский миндаль,Слива,Слива какаду,Слоновье яблоко,Сметанное яблоко,Сонсоя,Соя,Спаржевая фасоль,Страстоцвет,Суринамская вишня,Съедобный таитянский орех,Таитянское яблоко,Такако,Тамарилло,Тамаринд,Танжерин,Терминалия катаппа,Томат настоящий,Томатное дерево,Тукума,Тупа,Тыква бутылочная,Тыква восковая,Тыква мускатная,Тыква обыкновенная,Тыква фиголистная,Тыквенное дерево,Фейхоа,Ферония лимонная,Ферония слоновая,Физалис земляничный,Филиппинское розовое яблоко,Филлантус кислый,Финик,Флакурция,Хлебное дерево,Хлебные бобы,Хурма восточная (японская),Цейлонский крыжовник,Циклантера,Цуккини,Чайот,Чампедак,Черешня,Черимойя,Черная гуайява,Черная сапота,Черная хурма,Черный тамаринд,Чили,Чилибуха колючая,Чупа,Шоколадное дерево,Яблоко,Яблоко-кажу,Яботикаба,Ямайская вишня,Ятоба`.split(',')

    const a = words[parseInt(Math.random() * words.length)]
    const b = words[parseInt(Math.random() * words.length)]

    return {
      varData: {
        a,
        b
      },
      code: `
        var a = "${a}";
        var b = "${b}";
      `
    }
  },
  testedCodeFunction: (varData, word) => varData.a.length > varData.b.length ? varData.a.length === word.length : varData.b.length === word.length,
  confirm: false
}, {
  id: 14,
  emoji: '🔍',
  description: 'Напишите условие которое найдет человека по имени и фамилии используя операторы <selection>==</selection> — равно. Используйте конструкцию: <selection>console.log(first_name + " " + last_name)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const first_names = ["Влад", "Влад", "Влад", "Толик", "Женя", "Игорь", "Антон", "Стас", "Денис", "Саша"]
    const last_names = ["Петров", "Сдоров", "Понамарев", "Понамарев", "Понамарев"]

    const first_name = first_names[parseInt(Math.random() * first_names.length)]
    const last_name = last_names[parseInt(Math.random() * last_names.length)]

    return {
      varData: {
        first_name,
        last_name
      },
      code: `
        var first_name = "${first_name}";
        var last_name = "${last_name}";
        var findUser = "Влад Понамарев"
      `
    }
  },
  testedCodeFunction: (varData, findUser) => (varData.first_name + ' ' + varData.last_name) === findUser,
  confirm: false
}, {
  id: 15,
  emoji: '🌆',
  description: 'Напишите условие которое будет выводить меньшую по колличеству символов строку. используя метод <selection>length</selection> — определяет размер строки, логический оператор <selection>></selection> — больше. Используйте конструкцию: <selection>console.log(a)</selection> или <selection>console.log(b)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const words = 'Абаза,Абакан,Абдулино,Абинск,Агидель,Агрыз,Адыгейск,Азнакаево,Азов,Ак-Довурак,Аксай,Алагир,Алапаевск,Алатырь,Алдан,Алейск,Александров,Александровск,Александровск-Сахалинский,Алексеевка,Алексин,Алзамай,Алупка,Алушта,Альметьевск,Амурск,Анадырь,Анапа,Ангарск,Андреаполь,Анжеро-Судженск,Анива,Апатиты,Апрелевка,Апшеронск,Арамиль,Аргун,Ардатов,Ардон,Арзамас,Аркадак,Армавир,Армянск,Арсеньев,Арск,Артём,Артёмовск,Артёмовский,Архангельск,Асбест,Асино,Астрахань,Аткарск,Ахтубинск,Ачинск,Аша,Бабаево,Бабушкин,Бавлы,Багратионовск,Байкальск,Баймак,Бакал,Баксан,Балабаново,Балаково,Балахна,Балашиха,Балашов,Балей,Балтийск,Барабинск,Барнаул,Барыш,Батайск,Бахчисарай,Бежецк,Белая Калитва,Белая Холуница,Белгород,Белебей,Белёв,Белинский,Белово,Белогорск,Белогорск,Белозерск,Белокуриха,Беломорск,Белорецк,Белореченск,Белоусово,Белоярский,Белый,Бердск,Березники,Берёзовский,Берёзовский,Беслан,Бийск,Бикин,Билибино,Биробиджан,Бирск,Бирюсинск,Бирюч,Благовещенск (Амурская область),Благовещенск (Башкортостан),Благодарный,Бобров,Богданович,Богородицк,Богородск,Боготол,Богучар,Бодайбо,Бокситогорск,Болгар,Бологое,Болотное,Болохово,Болхов,Большой Камень,Бор,Борзя,Борисоглебск,Боровичи,Боровск,Бородино,Братск,Бронницы,Брянск,Бугульма,Бугуруслан,Будённовск,Бузулук,Буинск,Буй,Буйнакск,Бутурлиновка,Валдай,Валуйки,Велиж,Великие Луки,Великий Новгород,Великий Устюг,Вельск,Венёв,Верещагино,Верея,Верхнеуральск,Верхний Тагил,Верхний Уфалей,Верхняя Пышма,Верхняя Салда,Верхняя Тура,Верхотурье,Верхоянск,Весьегонск,Ветлуга,Видное,Вилюйск,Вилючинск,Вихоревка,Вичуга,Владивосток,Владикавказ,Владимир,Волгоград,Волгодонск,Волгореченск,Волжск,Волжский,Вологда,Володарск,Волоколамск,Волосово,Волхов,Волчанск,Вольск,Воркута,Воронеж,Ворсма,Воскресенск,Воткинск,Всеволожск,Вуктыл,Выборг,Выкса,Высоковск,Высоцк,Вытегра,Вышний Волочёк,Вяземский,Вязники,Вязьма,Вятские Поляны,Гаврилов Посад,Гаврилов-Ям,Гагарин,Гаджиево,Гай,Галич,Гатчина,Гвардейск,Гдов,Геленджик,Георгиевск,Глазов,Голицыно,Горбатов,Горно-Алтайск,Горнозаводск,Горняк,Городец,Городище,Городовиковск,Гороховец,Горячий Ключ,Грайворон,Гремячинск,Грозный,Грязи,Грязовец,Губаха,Губкин,Губкинский,Гудермес,Гуково,Гулькевичи,Гурьевск,Гурьевск,Гусев,Гусиноозёрск,Гусь-Хрустальный,Давлеканово,Дагестанские Огни,Далматово,Дальнегорск,Дальнереченск,Данилов,Данков,Дегтярск,Дедовск,Демидов,Дербент,Десногорск,Джанкой,Дзержинск,Дзержинский,Дивногорск,Дигора,Димитровград,Дмитриев,Дмитров,Дмитровск,Дно,Добрянка,Долгопрудный,Долинск,Домодедово,Донецк,Донской,Дорогобуж,Дрезна,Дубна,Дубовка,Дудинка,Духовщина,Дюртюли,Дятьково,Евпатория,Егорьевск,Ейск,Екатеринбург,Елабуга,Елец,Елизово,Ельня,Еманжелинск,Емва,Енисейск,Ермолино,Ершов,Ессентуки,Ефремов,Железноводск,Железногорск (Красноярский край),Железногорск (Курская область),Железногорск-Илимский,Жердевка,Жигулёвск,Жиздра,Жирновск,Жуков,Жуковка,Жуковский,Завитинск,Заводоуковск,Заволжск'.split(',')

    const a = words[parseInt(Math.random() * words.length)]
    const b = words[parseInt(Math.random() * words.length)]

    return {
      varData: {
        a,
        b
      },
      code: `
        var a = "${a}";
        var b = "${b}";
      `
    }
  },
  testedCodeFunction: (varData, word) => varData.a.length < varData.b.length ? varData.a.length === word.length : varData.b.length === word.length,
  confirm: false
}, {
  id: 16,
  emoji: '📅',
  description: 'Напишите условие которое будет находить две даты из списка консоль, <selection>03.06.01</selection> и <selection>19.08.07</selection>. Используя метод <selection>==</selection> — равно и логический оператор <selection>||</selection> — Или. Используйте конструкцию: <selection>console.log(date)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const dates = ['03.06.01', '19.08.07', '05.12.21', '29.08.87', '15.02.27', '11.12.17', '01.01.11']

    const date = dates[parseInt(Math.random() * dates.length)]

    return {
      varData: {
        date
      },
      code: `
        var date = "${date}";
      `
    }
  },
  testedCodeFunction: (varData, date) => ((date === varData.date && varData.date === '03.06.01') || (date === varData.date && varData.date === '19.08.07')),
  confirm: false
}, {
  id: 17,
  emoji: '⏰',
  description: 'Напишите условие которое будет включать будилиник в определенные часы с <selection>6 часов утра</selection> по <selection>10 часов утра</selection> используя операторы <selection>>=</selection> — больше или равно и <selection>>=</selection> — меньше или равно. Используйте конструкцию: <selection>console.log(alarm)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    if (window._17time === undefined) {
      window._17time = 0
    }

    const time = window._17time

    return {
      varData: {
        time,
      },
      code: `
        var time = ${time};
        var alarm = "Вставай на работу!";
      `,
      endCode: `
        ;window._17time += 1;
        if (window._17time > 23) {
          window._17time = 0;
        }
      `
    }
  },
  testedCodeFunction: (varData, alarm) => alarm === "Вставай на работу!" && (varData.time >= 6 && varData.time <= 10),
  confirm: false
}, {
  id: 18,
  emoji: '👩',
  description: 'Напишите условие которое найдет человека по имени и возрасту известно что ее зовут <selection>Вика</selection> и ей <selection>23 года</selection>, по некоторым данным ей возраст может быть записан числом <selection>23</selection>. Используя операторы <selection>==</selection> — равно и логический оператор <selection>&&</selection> — И, логический оператор <selection>||</selection> — Или. Используйте конструкцию: <selection>console.log(name, age)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const names = ["Вика", "Вика", "Вика", "Вика", "Вика", "Толик", "Аня", "Игорь", "Марина", "Стас", "Даша", "Саша"]
    const ages = ["23 года", 23, "23 года", 23, "23 года", 23, "15 лет", "47 лет", "17 лет", 25, 27, "19 лет"]

    const name = names[parseInt(Math.random() * names.length)]
    const age = ages[parseInt(Math.random() * ages.length)]

    return {
      varData: {
        name,
        age
      },
      code: `
        var name = "${name}";
        var age = ${typeof(age) === 'number' ? `${age}`: `"${age}"`};
      `
    }
  },
  testedCodeFunction: (varData, name, age) => (varData.name === name && varData.age === age) && name === 'Вика' && (age === '23 года' || age === 23),
  confirm: false
}, {
  id: 19,
  emoji: '▶️',
  description: 'Напишите условие которое не пропустит в консоль отрицательные счила используя операторы <selection>></selection> — Больше. Используйте конструкцию: <selection>console.log(number)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const numbers = Array(100).fill(0).map((_, key) => key - 50)

    const number = numbers[parseInt(Math.random() * numbers.length)]

    return {
      varData: {
        number
      },
      code: `
        var number = ${number};
      `
    }
  },
  testedCodeFunction: (varData, number) => varData.number === number && number > -1,
  confirm: false
}, {
  id: 20,
  emoji: '👍',
  description: 'Напишите условия которые будут по очереди изменять положение от лайка к дизлайку. Используя конструкцию <selection>state = !state</selection> — инвертировать значение. Используйте конструкцию: <selection>console.log(like)</selection> и <selection>console.log(dislike)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    if (window._20state === undefined) {
      window._20state = true
    }

    const state = window._20state
    const dislike = '👎'
    const like = '👍'

    return {
      varData: {
        dislike,
        like,
        state
      },
      code: `
        var state = ${state};
        var dislike = "${dislike}";
        var like = "${like}";
      `,
      endCode: `
        ;window._20state = state;
      `
    }
  },
  testedCodeFunction: (varData, state) => {
    if (state === varData.like) {
      return varData.state === false
    }

    if (state === varData.dislike) {
      return varData.state === true
    }

    return false
  },
  confirm: false
}, {
  id: 21,
  emoji: '👨',
  description: 'Напишите условие которое найдет человека по имени и возрасту известно что ее зовут <selection>Саша</selection> и ему <selection>27 лет</selection>, по некоторым данным ей возраст может быть записан числом <selection>27</selection>. Используя операторы <selection>==</selection> — равно и логический оператор <selection>&&</selection> — И, логический оператор <selection>||</selection> — Или. Используйте конструкцию: <selection>console.log(name, age)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const names = ["Саша", "Саша", "Саша", "Саша", "Саша", "Толик", "Аня", "Игорь", "Марина", "Стас", "Даша", "Вика"]
    const ages = ["27 лет", 27, "27 лет", 27, "27 лет", 27, "13 лет", "29 лет", "30 лет", 33, 21, "19 лет"]

    const name = names[parseInt(Math.random() * names.length)]
    const age = ages[parseInt(Math.random() * ages.length)]

    return {
      varData: {
        name,
        age
      },
      code: `
        var name = "${name}";
        var age = ${typeof(age) === 'number' ? `${age}`: `"${age}"`};
      `
    }
  },
  testedCodeFunction: (varData, name, age) => (varData.name === name && varData.age === age) && name === 'Саша' && (age === '27 лет' || age === 27),
  confirm: false
}, {
  id: 22,
  emoji: '🍆',
  description: 'Напишите условие которое будет собирать только овощи. используя оператор <selection>==</selection> — равно и логический оператор <selection>||</selection> — или. Используйте конструкцию: <selection>console.log(vegetable)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const vegetables = `Яблоко,Апельсин,Баклажан,Груша,Морковь,Арбуз,Огурец,Томат,Картофель`.split(',')

    const vegetable = vegetables[parseInt(Math.random() * vegetables.length)]

    return {
      varData: {
        vegetable
      },
      code: `
        var vegetable = "${vegetable}";
      `
    }
  },
  testedCodeFunction: (varData, vegetable) => `Баклажан,Морковь,Огурец,Томат,Картофель`.split(',').includes(varData.vegetable) && varData.vegetable === vegetable,
  confirm: false
}, {
  id: 23,
  emoji: '💻',
  description: 'Напишите условие которое искать выбирать предложения в которых есть слова <selection>JS</selection> и <selection>JavaScript</selection>. используя метод <selection>match</selection> — регулярные выражения. Используйте конструкцию: <selection>console.log(string.match(/(JS|JavaScript)/gi))</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const strings = [
      'JS — мультипарадигменный язык программирования.',
      'JavaScript® (часто просто JS) — это легковесный, интерпретируемый или JIT-компилируемый, объектно-ориентированный язык с функциями первого класса.',
      'JavaScript (/ˈdʒɑːvəˌskrɪpt/), often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.',
      'JS — это язык, программы на котором можно выполнять в разных средах.',
      'C++ (читается си-плюс-плюс) — компилируемый, статически типизированный язык программирования общего назначения.',
      'Поддерживает такие парадигмы программирования, как процедурное программирование, объектно-ориентированное программирование, обобщённое программирование.',
      'Язык C++ (произносится как «Си плюс плюс»)',
      'Java — строго типизированный объектно-ориентированный язык программирования',
      'Программирование на C#.',
      'C# — объектно-ориентированный язык программирования.',
      'Сторонники C# называют его самым мультипарадигменным, универсальным, продвинутым и удобным в использовании языком программирования.',
      'C# — это язык с C-подобным синтаксисом.',
      'PHP is a popular general-purpose scripting language that is especially suited to web development.'
    ]

    const string = strings[parseInt(Math.random() * strings.length)]

    return {
      varData: {
        string
      },
      code: `
        var string = "${string}";
      `
    }
  },
  testedCodeFunction: (varData, string) => string.find(s => s === 'JS' || s === 'JavaScript') && varData.string.match(/(JS|JavaScript)/gi).find(s => s === 'JS' || s === 'JavaScript'),
  confirm: false
}, {
  id: 25,
  emoji: '🕓',
  description: 'Напишите условия которые будут выполнять функцию часов. Для этого используйте конструкцию прибавление числа <selection>s++</selection> — конкатинация и <selection>></selection> — больше. Также используйте и другие переменные: <selection>s</selection> — секунды, <selection>m</selection> — минуты и <selection>h</selection> — часы. Каждое из условий ограничивает единицу времени и перемещает другую единицу на шаг вперед до ограничителя.',
  testedTime: 1,
  updateTime: 100,
  defaultCodeFunction: () => {
    window.consoleOff = false

    if (window._30ticker_s === undefined) {
      window._30ticker_s = 10
    }
    if (window._30ticker_m === undefined) {
      window._30ticker_m = 35
    }
    if (window._30ticker_h === undefined) {
      window._30ticker_h = 20
    }

    const s = window._30ticker_s
    const m = window._30ticker_m
    const h = window._30ticker_h

    return {
      varData: {
        s,
        m,
        h
      },
      code: `
        var s = ${s}; // от 0 до 59
        var m = ${m}; // от 0 до 59
        var h = ${h}; // от 0 до 23
      `,
      endCode: `
        window._30ticker_s = s;
        window._30ticker_m = m;
        window._30ticker_h = h;

        try {
          window.consoleOff = true
          const nodeConsole = document.querySelector('#console')

          if (nodeConsole) {
            nodeConsole.innerHTML = \`
              <div style='width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; position: relative;'>
                <img style='width: 200px; height: 200px; border-radius: 100%; position: absolute;' src='${img_time}' />
                <img  style='width: 200px; height: 200px; border-radius: 100%; position: absolute; transform: rotateZ(\${(s*6)\}deg)' src='${img_s}' />
                <img  style='width: 200px; height: 200px; border-radius: 100%; position: absolute; transform: rotateZ(\${(m*6)\}deg)' src='${img_m}' />
                <img  style='width: 200px; height: 200px; border-radius: 100%; position: absolute; transform: rotateZ(\${(h*15)\}deg)' src='${img_h}' />
                <div style='padding: 8px 10px; background: #fff; border-radius: 10px; position: absolute; top: 20px;color: #000000bd;'>\${(h => (h + '').length > 1 ? h : '0'+h)(h)}:\${(m => (m + '').length > 1 ? m : '0'+m)(m)\}:\${(s => (s + '').length > 1 ? s : '0'+s)(s)\}</div>
              </div>
            \`
          }

          window.hiddeLog(s, m, h)
        } catch (e) {}

        ;var r = ${Math.random()};
      `
    }
  },
  testedCodeFunction: (varData, _s, _m, _h) => {
    let s = varData.s
    let m = varData.m
    let h = varData.h

    s++
    if (s > 59) {
     s = 0
     m++
    }

    if (m > 59) {
     m = 0
     h++
    }

    if (h > 23) {
      h = 0
    }

    if ((window._30task_true && s < 70 && m < 70 && h < 25) || (_s === s && _m === m && _h === h && _h === 23 && m === 59 && s === 59 && s < 70 && m < 70 && h < 25)) {
      window._30task_true = true
      return true
    } else {
      return false
    }
  },
  confirm: false
}, {
  id: 25,
  emoji: '🚂',
  description: 'Напишите условие которое выдаст билет <selection>Сочи - Краснодар - Москва</selection>. Для этого используйте оператор <selection>==</selection> — равно, чтобы выбрать элемент из массива с билетами используйте <selection>tickets[i]</selection>. Используйте конструкцию: <selection>console.log(tickets[i])</selection> чтобы вывести в консоль.',
  testedTime: 30,
  updateTime: 1000,
  defaultCodeFunction: () => {
    if (window._31tick === undefined) {
      window._31tick = 0
    }

    const tickets = [
      'Сочи - Краснодар - Москва',
      'Астрахань - Москва',
      'Саратов - Ростов',
      'Сочи - Москва',
      'Сочи - Санкт-Петербург',
      'Пятигорск - Санкт-Петербург'
    ]

    const i = window._31tick

    return {
      varData: {
        tickets,
        i
      },
      code: `
        var tickets = [${tickets.map(ticket => '\n "'+ticket+'"').join(', ')}\n]; // Билеты на поезд
        var i = ${i};
      `,
      endCode: `
        if (window._31tick >= tickets.length - 1) {
          i = 0
        } else {
          i += 1;
        }
        window._31tick = i
      `
    }
  },
  testedCodeFunction: (varData, ticket) => varData.tickets[varData.i] === ticket && ticket === 'Сочи - Краснодар - Москва',
  confirm: false
}, {
  id: 26,
  emoji: '🐙',
  description: 'Напишите условие которое соберет ровно 10 осьминогов <selection>🐙</selection> в переменную. Используйте оператор <selection>==</selection> — равенство, <selection><=</selection> — меньше или равно, конструкцию прибавления строки <selection>octopuses += animal</selection> — конкатинация и метод <selection>length</selection> — определяет размер строки. Внимание каждый из символов emoji занимает 2 символа в строке. Используйте конструкцию: <selection>console.log(octopuses)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const animals = ['🐙', '🐙', '🐙', '🐈', '🐇', '🦢', '🦜', '🐐', '🐓', '🐠', '🐳', '🐘', '🦞', '🦄', '🐍']
    const animal = animals[parseInt(Math.random() * animals.length)]

    if (window._27animal === undefined) {
      window._27animal = ""
    }

    const octopuses = window._27animal

    return {
      varData: {
        animal,
        octopuses
      },
      code: `
        var animal = "${animal}";
        var octopuses = "${octopuses}"; // ${octopuses.length} length
      `,
      endCode: `
        ;window._27animal = octopuses;
        ;${Math.random()}; // react update
      `
    }
  },
  testedCodeFunction: (varData, octopuses) => (varData.octopuses.length === 20 && varData.octopuses.split('').filter(octopus => octopus === '\uD83D').length === 10) && (octopuses.length === 20 && octopuses.split('').filter(octopus => octopus === '\uD83D').length === 10),
  confirm: false
}, {
  id: 27,
  emoji: '🎲',
  description: 'Напишите условия которые заставят программу выводить <selection>Fizz</selection> — при условии что <selection>number</selection> делиться на 3 без остатка, также если 5 делится без остатка выводить нужно <selection>Buzz</selection>, а если 5 и 3 делятся без остатка <selection>FizzBuzz</selection> и в противном случае когда и 5 и 3 не делятся без остатка выводить только <selection>number</selection>. Используйте оператор <selection>%</selection> — Взятие остатка от деления и  оператор <selection>==</selection> — равенство. Используйте конструкцию: <selection>console.log(output)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    if (window._28fizzbuzz === undefined) {
      window._28fizzbuzz = 1
    }

    const number = window._28fizzbuzz

    return {
      varData: {
        number
      },
      code: `
        var number = ${number};
        var output = '';
      `,
      endCode: `
        ;window._28fizzbuzz += 1;
        if (window._28fizzbuzz > 100) {
          window._28fizzbuzz = 1
        }
      `
    }
  },
  testedCodeFunction: (varData, data) => {
    let output = ''

    if (varData.number % 3 === 0) {
     output += 'Fizz';
    }

    if (varData.number % 5 === 0) {
     output += 'Buzz';
    }

    if (output) {
      return output === data
    } else {
      return varData.number === data
    }
  },
  confirm: false
}, {
  id: 28,
  emoji: '➕',
  description: 'Напишите условие которое будет выводить только результат сложения используя оператор <selection>==</selection> — равенство. Этот калькулятор сломан и иногда вместо чисел принимает строки их нужно отфильровать спомощью функцию <selection>typeof</selection> — определяет тип данных в переменной. Используйте конструкцию: <selection>console.log(a + b)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: () => {
    const symbols = ['+', '+', '+', '-', '/', '*', '%']
    const as = ['3wffwe34', '34222e', 'sf43', '_325g2de', '$2335%432', '$3', '>3', ...Array(40).fill(0).map((_, key) => key - 5)]
    const bs = ['eeww3', 'helloworld', 'yes1', 'l21ol', '^32', '+098', '(19673)', ...Array(40).fill(0).map((_, key) => key)]

    const symbol = symbols[parseInt(Math.random() * symbols.length)]
    const b = bs[parseInt(Math.random() * bs.length)]
    const a = as[parseInt(Math.random() * as.length)]

    return {
      varData: {
        a,
        b,
        symbol
      },
      code: `
        var a = ${typeof(a) === 'number' ? `${a}`: `"${a}"`};
        var b = ${typeof(b) === 'number' ? `${b}`: `"${b}"`};
        var symbol = "${symbol}";
      `
    }
  },
  testedCodeFunction: (varData, sum) => (typeof(varData.a) === 'number' && typeof(varData.b) === 'number') && varData.a + varData.b === sum && varData.symbol === '+',
  confirm: false
}, {
  id: 29,
  emoji: '🚗',
  description: 'Напишите условия которые научат машину не врезаться, у машины нет цели но есть только путь, чтобы перемещаться по дороге присвивайте переменной <selection>carY</selection> одно из двух значений <selection>0</selection> или <selection>1</selection>, также используйте оператор <selection>==</selection> — равно, чтобы выбрать в какой момент свернуть с одно полосы на другую. Начните тест 🚀 сразу чтобы получить больше данных.',
  testedTime: 300,
  updateTime: 1000,
  defaultCodeFunction: () => {
    window.consoleOff = false

    if (window._32roadX === undefined) {
      window._32roadX = 15
    }

    if (window._32carY === undefined) {
      window._32carY = 1
    }

    const roadX = window._32roadX
    const carY = window._32carY

    return {
      varData: {
        roadX,
        carY
      },
      code: `
        var carY = ${carY}; // от 0 до 1
        var roadX = ${roadX}; // от 15 до 0
      `,
      endCode: `
        window.consoleOff = true

        if (roadX < 1) {
          roadX = 16
        }

        roadX -= 1

        const road = Array(16).fill(' ')

        road[roadX] = '🚗'

        if (roadX === 11 || roadX === 8) {
          window.hiddeLog(roadX, carY, 0)
          window.hiddeLog(roadX, carY, 0)
        }

        if (roadX === 5 || roadX === 0) {
          window.hiddeLog(roadX, carY, 1)
          window.hiddeLog(roadX, carY, 1)
          window.hiddeLog(roadX, carY, 1)
        }

        try {
          window.consoleOff = true
          const nodeConsole = document.querySelector('#console')

          const symbol = s => \`<span style="position: relative; display: inline-flex; justify-content: center; align-items: center; overflow: hidden; cursor: text;"><span style="transform: scale(0.01)">\🚕</span><span style="position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; box-sizing: border-box, z-index: 1999; font-size: \${parseInt(s).toString() !== 'NaN' ? '8px' : '15px'\}; color: \${parseInt(s).toString() !== 'NaN' ? '#ddd' : '#fff'\};">\${s\}</span></span>\`

          if (nodeConsole) {
            nodeConsole.innerHTML = \`
              <div style="position: relative; display: flex; flex-direction: column; width: 100%;">
                <div style="width: 100%;">
                  \${symbol('🚕')\}\${symbol('1')\}\${symbol('2')\}\${symbol('3')\}\${symbol('4')\}\${symbol('🚙')\}\${symbol('6')\}\${symbol('7')\}\${symbol('8')\}\${symbol('9')\}\${symbol('10')\}\${symbol('11')\}\${symbol('12')\}\${symbol('13')\}\${symbol('14')\}\${symbol('15')\}
                </div>
                <div style="width: 100%;">
                  ========================================
                </div>
                <div style="width: 100%;">
                  \${symbol('0')\}\${symbol('1')\}\${symbol('🚛')\}\${symbol('3')\}\${symbol('4')\}\${symbol('5')\}\${symbol('6')\}\${symbol('7')\}\${symbol('🚚')\}\${symbol('9')\}\${symbol('10')\}\${symbol('🚌')\}\${symbol('12')\}\${symbol('13')\}\${symbol('14')\}\${symbol('15')\}
                </div>
                <div style="width: 100%; position: absolute; \${carY ? 'bottom: 0px;' : 'top: 0px;'\} left: 0px;">
                  \${road.map(r => symbol(r)).join('')\}
                </div>
              </div>
            \`
          }
        } catch (e) {
          console.log(e)
        }

        window._32roadX = roadX
        window._32carY = carY

        ;var r = ${Math.random()};
      `
    }
  },
  testedCodeFunction: (varData, roadX, carY, isCarY) => {
    return varData.roadX - 1 === roadX && carY === isCarY
  },
  confirm: false
}, {
  id: 30,
  emoji: '📀',
  description: 'Напишите условие которое будет пропускать только цвета например <selection>#ff00aa</selection> — цвет в шестнадцатеричной системе счисления. Используя метод <selection>match</selection> — регулярные выражения. Присвойте переменной <selection>consoleBgColor</selection> нормальный цвет',
  defaultCodeFunction: () => {
    window.consoleOff = false

    const getRandomColor = () => {
      const symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

      const r = () => symbols[parseInt(Math.random() * symbols.length)]

      return `#${r()}${r()}${r()}${r()}${r()}${r()}`
    }

    const colors = ['Hey, бэйби', 'брекеты', 'косичка', 'мини-юбка', 'кепка', 'Этот трек не для тверка', 'дискотека', 'Дискотека, дискотека-дискотека', 'Дискотека, это дискотека века', 'Hey, диджей!', 'Hey, битмейкер!', 'Hey, уличный дэнсер!', 'Шк-шк, шейкер-шейкер!', 'Hey, патимейкер!', 'Hey, патимейкер!', 'Hey, патимейкер!', 'Hey, патимейкер!', 'Hey, патимейкер!', 'Йоги - ноги на угли', 'зимой на ноги - уги', 'Мы танцуем буги-вуги', 'Дикий Маугли - джунгли, сам свои гугли в Гугле', 'Матрешки - куклы в кукле, этот день - дубль в дубле', 'Поделились на команды, пока мы дули-дули', 'Они крутят факи, дули - ха-ха, они продули!', 'Досвидули!', 'Досвидули-досвидули', 'Досвидули-дули, досвидули-дули', 'Hey, диджей!', 'Hey, битмейкер!', 'Hey, уличный дэнсер!', 'Шк-шк, шейкер-шейкер!', 'Hey, патимейкер!', 'Hey, патимейкер!', 'Hey, патимейкер!', 'Hey, патимейкер!', 'Hey, патимейкер!', 'Шк-шк, шейкер-шейкер!', 'Эй, патимейкер!', 'Hey, патимейкер!', 'Эй, патимейкер!', 'Hey, патимейкер!', 'Эй, патимейкер!', 'Hey, патимейкер!', 'Эй, патимейкер!', 'Hey, патимейкер!', 'Эй, патимейкер!', 'Hey, патимейкер!', 'Эй, патимейкер!', 'Hey, патимейкер!', 'Эй, патимейкер!', 'Hey, патимейкер!', 'Эй, патимейкер!', 'Hey, патимейкер!', ...Array(100).fill(0).map(e => getRandomColor())]
    const color = colors[parseInt(Math.random() * colors.length)]

    return {
      varData: {
        color
      },
      code: `
        var color = "${color}";
        var consoleBgColor = '#000000bd';
      `,
      endCode: `
        try {
          window.consoleOff = true

          const nodeConsole = document.querySelector('#console')
          nodeConsole.style.background = consoleBgColor.length !== 9 ? consoleBgColor + 'bd' : consoleBgColor
          if (consoleBgColor !== '#000000bd') {
            window.hiddeLog(consoleBgColor)
            nodeConsole.innerHTML = '<img style="margin-left: -140px; margin-top: -20px;" src="https://acegif.com/wp-content/uploads/2021/4fh5wi/pepefrg-4.gif" alt="" />'
          } else {
            window.hiddeLog(consoleBgColor)
          }
        } catch (e) {
          window.hiddeLog(consoleBgColor)
        }

        ;var r = ${Math.random()};
      `
    }
  },
  testedCodeFunction: (varData, data) => (data === '#000000bd' && !varData.color.match(/#/)) || (varData.color === data && varData.color.match(/#/)),
  confirm: false
}]

const fs = require('fs')

let text = ''

tasks.forEach(({ id, description, emoji }, i) => {
  text += `
    # Задание #${id} ${emoji}

    ${description.replace(/selection/gi, 'b')} [Пройти тестирование](https://prohetamine.github.io/ifpractic/?id=${id})


  `.replace(/    /gi, '')
})

fs.writeFileSync(__dirname+'/README.md', text)
