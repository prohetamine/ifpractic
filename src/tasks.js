const TASKS = [{
  id: 1,
  emoji: '0️⃣',
  description: 'Напишите условие которое не пропустит в консоль числа меньше чем 0.5 используя оператор <selection>></selection> — Больше. Используйте конструкцию: <selection>console.log(number)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: old => {
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
  defaultCodeFunction: old => {
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
  testedCodeFunction: (varData, name) => (varData.name !== '') === (name !== ''),
  confirm: false
}, {
  id: 3,
  emoji: '🔞',
  description: 'Напишите условие которое не пропустит в консоль людей младше 18 и без имени используя операторы <selection>></selection> — Больше <selection>!=</selection> — не равенство и логический опреатор <selection>&&</selection> — И. Используйте конструкцию: <selection>console.log(name, age)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: old => {
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
  defaultCodeFunction: old => {
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
  description: 'Напишите условие которое будет выводить только почтовые ящики в консоль, каждый почтовый ящик должен иметь @. используя метод <selection>match</selection> — регулярные выражения. Используйте конструкцию: <selection>console.log(email)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: old => {
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
  defaultCodeFunction: old => {
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
  defaultCodeFunction: old => {
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
  defaultCodeFunction: old => {
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
  defaultCodeFunction: old => {
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
  defaultCodeFunction: old => {
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
  defaultCodeFunction: old => {
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
  description: 'Напишите условие которое будет любые слова кроме связанных с короновирусом, избергайте слова начинаюищеся на <selection>коронави</selection> и <selection>COVID-19</selection>. используя метод <selection>match</selection> — регулярные выражения, логический оператор <selection>!</selection> — отрицание. Используйте конструкцию: <selection>console.log(word)</selection> чтобы вывести в консоль.',
  defaultCodeFunction: old => {
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
  defaultCodeFunction: old => {
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
  defaultCodeFunction: old => {
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
}].map(task => ({
  ...task,
  testedCodeFunction: (...args) => {
    try {
      return task.testedCodeFunction(...args)
    } catch (e) {
      return false
    }
  },
  defaultCodeFunction: (a) => {
    const defaultCodeFunction = task.defaultCodeFunction(a)
    return {
      ...defaultCodeFunction,
      code: defaultCodeFunction.code.replace(/        /gi, '').replace(/\n/, '')
    }
  }
}))


export default TASKS
