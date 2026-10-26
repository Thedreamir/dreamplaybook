import type { Source, Part, Puzzle, DNode, Chapter } from './types';

const build = (en: boolean): Chapter => {
    const L = (ru: string, e: string) => (en ? e : ru);
    const P = L('Пресса', 'Press');
    const SOURCES: Source[] = [
        { id: 'S1', kind: P, title: L('Polygon: From solo Minecraft dev to startup to $2.5B acquisition in less than six years (15 сентября 2014): Cave Game, проект 2009 года, трое основателей уходят после сделки', 'Polygon: From solo Minecraft dev to startup to $2.5B acquisition in less than six years (Sep 15, 2014): Cave Game, a 2009 project, three founders leaving after the deal'), url: 'https://www.polygon.com/2014/9/15/6152925/who-is-mojang-minecraft/' },
        { id: 'S2', kind: P, title: L('Reuters: Microsoft to buy Minecraft maker Mojang for $2.5 billion (15 сентября 2014): выручка 2013, 40 сотрудников, слова Перссона, 71% у Нотча', 'Reuters: Microsoft to buy Minecraft maker Mojang for $2.5 billion (Sep 15, 2014): 2013 revenue, 40 employees, Persson\'s words, Notch owns 71%'), url: 'https://www.reuters.com/article/mojang-ma-microsoft-idUKL6N0RG3ED20140915/' },
        { id: 'S3', kind: P, title: L('TechRadar: The history of Minecraft, the best selling PC game ever (4 сентября 2020): Infiniminer, RubyDung, первая альфа', 'TechRadar: The history of Minecraft, the best selling PC game ever (Sep 4, 2020): Infiniminer, RubyDung, the first alpha'), url: 'https://www.techradar.com/news/the-history-of-minecraft' },
        { id: 'S4', kind: P, title: L('Game Developer: Minecraft pulled in more than $80M in Mojang\'s first 15 months (23 марта 2012): 25 млн загрузок, 5 млн копий на ПК, отказ от капитала Шона Паркера', 'Game Developer: Minecraft pulled in more than $80M in Mojang\'s first 15 months (Mar 23, 2012): 25 million downloads, 5 million PC copies, Sean Parker turned down'), url: 'https://www.gamedeveloper.com/business/-i-minecraft-i-pulled-in-more-than-80m-in-mojang-s-first-15-months' },
        { id: 'S5', kind: P, title: L('Polygon: Minecraft developer Mojang\'s profits more than doubled in 2013 (20 марта 2014): по данным WSJ, 100 млн зарегистрированных, 14,3% платящих', 'Polygon: Minecraft developer Mojang\'s profits more than doubled in 2013 (Mar 20, 2014): per WSJ, 100 million registered, 14.3% paid'), url: 'https://www.polygon.com/2014/3/20/5531046/minecraft-mojang-profits-doubled-2013/' },
    ];
    const PARTS: Part[] = [
        { id: 'p0', n: '0', title: L('Пролог: игра одного человека, которую купили за 2,5 млрд', 'Prologue: one person\'s game that sold for $2.5 billion'), kicker: L('Почему Minecraft стоит в томе после Roblox', 'Why Minecraft follows Roblox in the volume'), xp: 20, era: '2009-2014', blocks: [
            { t: 'p', text: L('Polygon: Minecraft начался как личный проект Маркуса «Нотча» Перссона в 2009 году. Он хотел сделать что-то очень простое, с одними весёлыми механиками, «доступное и возникающее само» (S1). 15 сентября 2014 года Microsoft объявила о покупке Mojang за 2,5 млрд долларов (S1, S2).', 'Polygon: Minecraft started as a pet project by Markus "Notch" Persson in 2009. He wanted to make something very simple that featured only fun mechanics and felt "accessible and emergent" (S1). On September 15, 2014 Microsoft announced it would buy Mojang for $2.5 billion (S1, S2).'), src: ['S1', 'S2'] },
            { t: 'fact', label: L('Цена сделки, сентябрь 2014', 'Deal price, September 2014'), value: L('2,5 млрд долларов, Reuters', '$2.5 billion, Reuters'), src: ['S2'] },
            { t: 'p', text: L('Вопрос главы: как сделать продукт, который растёт сам, и что делать, когда он стал больше, чем ты готов нести.', 'The question of the chapter: how to build a product that grows by itself, and what to do when it becomes bigger than you can carry.') },
            { t: 'card', icon: 'target', title: L('Как читать главу', 'How to read the chapter'), label: L('МЕТКИ ЧЕСТНОСТИ', 'HONESTY LABELS'), rows: [
                { k: '[S1...S5]', v: L('Источник. Нажми на метку, чтобы увидеть, откуда факт.', 'Source. Tap the label to see where the fact comes from.') },
                { k: L('Не нашёл', 'Not found'), v: L('Данных в открытых источниках нет. Автор их не придумывает.', 'The data is not in open sources. The author does not invent it.') },
                { k: L('ИИ-реконструкция', 'AI reconstruction'), v: L('Сцена или реплика придуманы для тренировки. Это не слова реальных людей.', 'A scene or line invented for practice. These are not the words of real people.') },
                { k: L('Расхождение', 'Discrepancy'), v: L('Если источники спорят, показываем обе версии.', 'If sources disagree, we show both versions.') },
            ] },
        ] },
        { id: 'p1', n: '1', title: L('Генезис основателя', 'Genesis of the founder'), kicker: L('Программист в свободное время и игра, которую он увидел у другого', 'A programmer in his spare time and a game he saw in someone else\'s work'), xp: 20, era: '2009', blocks: [
            { t: 'p', text: L('TechRadar: в 2009 году шведский программист Маркус Перссон, ранее помогавший с MMO Wurm Online, в свободное время делал игру RubyDung, смесь Dungeon Keeper, Dwarf Fortress и Rollercoaster Tycoon (S3). Reuters добавляет, что он раньше работал в King (создатель Candy Crush) (S2).', 'TechRadar: in 2009 Swedish coder Markus Persson, who had earlier helped develop the MMO Wurm Online, was working in his spare time on a game called RubyDung, a mix of Dungeon Keeper, Dwarf Fortress and Rollercoaster Tycoon (S3). Reuters adds that he had previously worked at King (maker of Candy Crush) (S2).'), src: ['S2', 'S3'] },
            { t: 'p', text: L('Пробуя ввести вид от первого лица, он остался недоволен результатом, а потом нашёл Infiniminer Зака Барта (Zachtronics). Перссон на Tumblr: «Боже, я понял, что это та игра, которую я хочу сделать». Он написал простой движок в этом стиле, переиспользовав часть арта и кода RubyDung (S3).', 'Trying to add a first-person view, he was less than satisfied with the result, and then he found Zach Barth\'s Infiniminer (Zachtronics). Persson on Tumblr: "My god, I realized that that was the game I wanted to do". He wrote a simple first-person engine in that style, reusing some art and code from RubyDung (S3).'), src: ['S3'] },
            { t: 'ladder', title: L('Лестница абстракции: откуда пришла идея', 'Ladder of abstraction: where the idea came from'), steps: [
                L('Конкретно: Infiniminer, игра про добычу блоков, которую забросили после утечки кода (S3)', 'Concrete: Infiniminer, a block-mining game abandoned after its code leaked (S3)'),
                L('Закономерность: блочный мир легко строить и понимать (S3)', 'Pattern: a block world is easy to build and understand (S3)'),
                L('Принцип: простые механики, из которых игроки сами делают игру (S1)', 'Principle: simple mechanics from which players make the game themselves (S1)'),
            ] },
        ] },
        { id: 'p2', n: '2', title: L('Поиск боли', 'Finding the pain'), kicker: L('Свобода вместо сценария', 'Freedom instead of a script'), xp: 20, era: '2009', blocks: [
            { t: 'p', text: L('Здесь «боли» в привычном смысле нет. Перссон, по цитате TechRadar: «Я не считаю себя настоящим разработчиком игр. Я делаю игры, потому что это весело, потому что я люблю игры и программирование» (S3). Он решил сделать простую игру с веселыми механиками (S1).', 'There is no "pain" in the usual sense here. Persson, as quoted by TechRadar: "I don\'t see myself as a real game developer. I make games because it\'s fun, and because I love games and I love to program" (S3). He set out to make a simple game with fun mechanics (S1).'), src: ['S1', 'S3'] },
            { t: 'warn', title: L('Что мы не знаем', 'What we do not know'), text: L('Мы не нашли данных, что Перссон проводил исследование спроса. По источникам, это был проект для себя, который подхватили игроки.', 'We found no evidence that Persson ran demand research. Per the sources it was a project for himself that players picked up.'), src: ['S1', 'S3'] },
        ] },
        { id: 'p3', n: '3', title: L('MVP и первые люди', 'MVP and the first people'), kicker: L('Браузерная версия, платная альфа и месяцы быстрых правок', 'A browser version, a paid alpha and months of fast changes'), xp: 25, era: '2009-2011', blocks: [
            { t: 'p', text: L('TechRadar: первая версия на Java сразу узнаваема. Перссон писал: «Отклик был очень положительным, я был поражён частотой кадров и тем, как хорошо оно работало в браузере, так что решил идти до конца» (S3). Он выложил первую альфу с названием Minecraft. Игроков привлекали свобода и творчество (S3).', 'TechRadar: the very first Java version is immediately recognizable. Persson wrote: "The response was very positive, and I was blown away by the framerate and how well it ran in a browser, so I decided to go for it" (S3). He put up the first alpha under the name Minecraft. Players were fascinated by the freedom and creativity (S3).'), src: ['S3'] },
            { t: 'p', text: L('Скорость: через месяц в игре были песок, вода, лава и простое динамическое освещение, через два месяца шли первые тесты мультиплеера (S3). Дата первой публичной альфы: 17 мая 2009 по Википедии, мы здесь на неё не опираемся, так как не проверили первоисточник.', 'Speed: within a month the game had sand, water, lava and rudimentary lighting, within two months the first multiplayer tests (S3). The date of the first public alpha is 17 May 2009 per Wikipedia, which we do not rely on here since we did not check a primary source.'), src: ['S3'] },
            { t: 'p', text: L('Mojang официально основан в октябре 2010 года (S4). К марту 2012 года у Minecraft было больше 25 млн загрузок, а версия для ПК продалась больше чем в 5 млн копий (S4).', 'Mojang was officially founded in October 2010 (S4). By March 2012 Minecraft had more than 25 million downloads, and the PC version had sold more than 5 million copies (S4).'), src: ['S4'] },
            { t: 'ladder', title: L('Лестница первых людей', 'Ladder of the first people'), steps: [
                L('2009: первая альфа, быстрые правки месяцами (S3)', '2009: the first alpha, months of fast changes (S3)'),
                L('Октябрь 2010: официальное основание Mojang (S4)', 'October 2010: Mojang officially founded (S4)'),
                L('Март 2012: 25 млн загрузок, 5 млн копий на ПК (S4)', 'March 2012: 25 million downloads, 5 million PC copies (S4)'),
                L('Цифры первых 100, 1000 и 10 000 игроков: не нашёл в открытых источниках', 'Numbers for the first 100, 1,000 and 10,000 players: not found in open sources'),
            ] },
            { t: 'gap', text: L('Не нашёл данных о числе игроков и цене первой альфы. Не придумываем.', 'Not found: player counts and the price of the first alpha. We do not invent them.') },
        ] },
        { id: 'p4', n: '4', title: L('Деньги, питч и оценка', 'Money, pitch and valuation'), kicker: L('Без инвесторов: отказ Шону Паркеру и сделка с Microsoft', 'No investors: turning down Sean Parker and the Microsoft deal'), xp: 25, era: '2012-2014', blocks: [
            { t: 'p', text: L('Mojang не брал внешний капитал. Game Developer (S4): компания рассказала, что к ней обращались голливудские продюсеры и Шон Паркер, сооснователь Napster, который возил команду на частном самолёте в Лондон. Mojang отказал. Гендиректор Карл Манне: «В целом мы не хотели привлекать капитал тогда и не хотим сейчас» (S4).', 'Mojang did not take outside capital. Game Developer (S4): the company said it had been approached by Hollywood producers and by Sean Parker, the Napster co-founder, who took the team on his private jet to London. Mojang declined. CEO Carl Manneh: "Generally we didn\'t want to raise capital at the time and we still don\'t" (S4).'), src: ['S4'] },
            { t: 'p', text: L('В сентябре 2014 года Microsoft согласилась купить Mojang за 2,5 млрд долларов. Reuters: Нотч владел 71% через свою компанию Notch Development AB, единственным советником Mojang был JP Morgan, а трое основателей уходили после сделки (S2). Перссон в блоге: «Дело не в деньгах. Дело в моём рассудке. Вас слишком много, и я не могу отвечать за что-то настолько большое» (S2).', 'In September 2014 Microsoft agreed to buy Mojang for $2.5 billion. Reuters: Notch owned 71% through his company Notch Development AB, JP Morgan was Mojang\'s sole adviser, and the three founders were leaving after the deal (S2). Persson in a blog post: "It\'s not about the money. It\'s about my sanity. There are too many of you, and I can\'t be responsible for something this big" (S2).'), src: ['S2'] },
            { t: 'warn', title: L('Расхождение: цифры 2013 года', 'Discrepancy: 2013 figures'), text: L('Reuters: выручка 2,05 млрд крон (287 млн долларов), операционная прибыль 896 млн крон (S2). WSJ через Polygon: выручка 2,07 млрд крон (322,4 млн долларов), прибыль 816 млн крон (S5). Курс пересчёта и показатель прибыли в двух источниках разные. Мы показываем обе версии.', 'Reuters: revenue 2.05 billion crowns ($287 million), operating profit 896 million crowns (S2). WSJ via Polygon: revenue 2.07 billion crowns ($322.4 million), profit 816 million crowns (S5). The conversion rate and the profit measure differ between the two sources. We show both versions.'), src: ['S2', 'S5'] },
        ] },
        { id: 'p5', n: '5', title: L('PMF, монетизация, экосистема', 'PMF, monetization, ecosystem'), kicker: L('Платная игра без донатной модели и 40 человек в команде', 'A paid game without free-to-play and a team of 40'), xp: 25, era: '2011-2014', blocks: [
            { t: 'p', text: L('Минимальная модель: продаёшь игру один раз. Polygon (по WSJ): студия меньше чем с 40 сотрудниками дошла до выручки больше 2 млрд крон с игрой 2009 года, без free-to-play (S5). Reuters: за 15 месяцев после октября 2010 доход до налогов был 80 млн долларов (S4).', 'The minimal model: you sell the game once. Polygon (per WSJ): a studio of fewer than 40 employees reached revenue above 2 billion crowns with a 2009 game, without free-to-play (S5). Game Developer: pre-tax revenue was $80 million in the 15 months after October 2010 (S4).'), src: ['S4', 'S5'] },
            { t: 'p', text: L('В начале 2014 года Нотч объявил, что оригинальная версия на ПК достигла 100 млн зарегистрированных, 14,3% из них платящие (S5). К февралю 2014 года версия для Xbox 360, вышедшая в мае 2013, превысила 11 млн продаж (S5). Около 40% копий скачано на телефоны и планшеты (S2).', 'In early 2014 Notch announced that the original PC version had reached 100 million registered users, 14.3% of them paid (S5). By February 2014 the Xbox 360 version, released in May 2013, passed 11 million sales (S5). About 40% of copies were downloaded to phones and tablets (S2).'), src: ['S2', 'S5'] },
            { t: 'p', text: L('Наделла (Microsoft): «Minecraft больше, чем отличная игровая франшиза: это открытая платформа мира, которую ведёт живое сообщество» (S2).', 'Nadella (Microsoft): "Minecraft is more than a great game franchise - it is an open world platform, driven by a vibrant community we care deeply about" (S2).'), src: ['S2'] },
            { t: 'chart', title: L('Выручка Mojang, млн долларов (по источникам)', 'Mojang revenue, $ millions (per sources)'), bars: [{ label: L('Окт 2010 - 15 мес.', 'Oct 2010, 15 months'), value: 80, text: '80M' }, { label: '2013 (Reuters)', value: 287, text: '287M' }, { label: '2013 (WSJ)', value: 322, text: '322M' }], note: L('Первый столбец за 15 месяцев и до налогов. Два последних: один и тот же год в разных источниках и курсах.', 'The first bar is for 15 months and pre-tax. The last two: the same year in different sources and exchange rates.'), src: ['S2', 'S4', 'S5'] },
            { t: 'gap', text: L('Не нашёл: цифры после 2014 года в проверенных мной источниках. Не придумываем.', 'Not found: figures after 2014 in sources I verified. We do not invent them.') },
        ] },
        { id: 'p6', n: '6', title: L('Первые принципы', 'First principles'), kicker: L('Что остаётся, если убрать графику и оставить блок', 'What remains if you remove the graphics and keep the block'), xp: 25, era: '2009', blocks: [
            { t: 'p', text: L('До атомов. Что даёт Minecraft? Мир из блоков, в котором можно ставить и ломать. Всё остальное, цели, истории, постройки, придумывают игроки. Создатель даёт основу и быстро её правит.', 'To atoms. What does Minecraft give? A world of blocks in which you can place and break. Everything else, goals, stories, buildings, is invented by the players. The creator gives a base and edits it fast.') },
            { t: 'ladder', title: L('Путь рассуждения, по документам', 'The path of reasoning, per the documents'), steps: [
                L('Атом: поставить и сломать блок (S1, S3)', 'Atom: place and break a block (S1, S3)'),
                L('Лишнее: сюжет и сложная графика (S1)', 'Unnecessary: a plot and complex graphics (S1)'),
                L('Спрос: игроки хотят свободу и творчество (S3)', 'Demand: players want freedom and creativity (S3)'),
                L('Деньги: продажа копий без внешних инвесторов (S4, S5)', 'Money: selling copies without outside investors (S4, S5)'),
            ] },
            { t: 'card', icon: 'stone', title: L('Закон среды (кандидат в высеченные законы)', 'Law of the environment (candidate for the carved laws)'), label: L('ДЛЯ ФИНАЛЬНОГО РАЗДЕЛА', 'FOR THE FINAL SECTION'), rows: [
                { k: L('Формулировка', 'Wording'), v: L('Дай простую основу и покажи её рано: люди сделают из неё то, что ты не придумал', 'Give a simple base and show it early: people will make out of it what you did not imagine') },
                { k: L('Опора', 'Support'), v: L('Первая альфа вышла быстро и обновлялась месяцами (S3), игроки сами стали ядром роста (S1)', 'The first alpha came out fast and was updated for months (S3), and players themselves became the core of growth (S1)') },
                { k: L('Оговорка', 'Caveat'), v: L('Перссон сам сказал, что проект стал слишком большим для него (S2). Рост без команды и без границ может быть тяжёлым для человека', 'Persson himself said the project became too big for him (S2). Growth without a team and boundaries can be heavy for a person') },
            ] },
        ] },
        { id: 'p7', n: '7', title: L('Что переносимо тебе', 'What transfers to you'), kicker: L('Три упражнения на этой неделе', 'Three exercises for this week'), xp: 25, blocks: [
            { t: 'card', icon: 'rules', title: L('Что делать', 'What to do'), label: L('ПЕРЕНОС', 'TRANSFER'), rows: [
                { k: L('1. Найди простую основу', '1. Find the simple base'), v: L('Что в твоём продукте можно свести к одному действию, которое приятно повторять?', 'What in your product can be reduced to one action that is pleasant to repeat?') },
                { k: L('2. Покажи рано', '2. Show early'), v: L('Выложи сырую версию и записывай, что люди с ней делают.', 'Ship a rough version and write down what people do with it.') },
                { k: L('3. Реши, что будет, когда вырастет', '3. Decide what happens when it grows'), v: L('Хватит ли тебе сил и команды, если продукт вырастет в десять раз? Что тогда?', 'Will you have the energy and a team if the product grows tenfold? What then?') },
            ] },
            { t: 'card', icon: 'bulb', title: L('Вопрос для себя', 'A question for yourself'), label: L('ПОДУМАЙ', 'THINK'), rows: [
                { k: L('Вопрос', 'Question'), v: L('Что я бы сделал, если бы мой проект стал больше, чем я готов нести?', 'What would I do if my project became bigger than I am ready to carry?') },
            ] },
        ] },
    ];
    const PUZZLES: Puzzle[] = [
        { id: 'pz1', title: L('Пазл 1. Предложение инвестора', 'Puzzle 1. An investor offers money'), xp: 20, src: ['S4'],
          setup: L('Игра продаётся, деньги идут. Знаменитый инвестор зовёт тебя на частный самолёт и предлагает капитал. Что делаешь?', 'The game is selling, money is coming in. A famous investor invites you onto his private jet and offers capital. What do you do?'),
          options: [
            { text: L('Берёшь деньги', 'Take the money'), verdict: L('Mojang не взял.', 'Mojang did not.') },
            { text: L('Отказываешься, если капитал тебе не нужен', 'Decline if you do not need capital'), verdict: L('Так и сделал Mojang.', 'This is what Mojang did.') },
            { text: L('Продаёшь компанию', 'Sell the company'), verdict: L('Это произошло позже, в 2014 году.', 'That came later, in 2014.') },
          ], best: 1, fact: L('Mojang отказал Шону Паркеру и не привлекал капитал (S4).', 'Mojang turned down Sean Parker and did not raise capital (S4).') },
    ];
    const DIALOGUE: DNode[] = [
        { id: 'd1', speaker: L('Друг (ИИ-реконструкция)', 'Friend (AI reconstruction)'), text: L('Игра стала слишком большой. Что делаешь?', 'The game became too big. What do you do?'), choices: [
            { text: L('Передаю её команде и ухожу', 'I hand it to a team and leave'), reply: L('Перссон так и сделал.', 'Persson did this.'), good: true },
            { text: L('Продолжаю в одиночку', 'I carry on alone'), reply: L('Он сказал, что это для него слишком тяжело.', 'He said it was too heavy for him.'), good: false },
        ] },
    ];
    return {
        id: 'minecraft', no: '19', company: 'Minecraft', year: '2009',
        title: L('Minecraft: как личный проект стал игрой за 2,5 миллиарда', 'Minecraft: how a pet project became a game worth $2.5 billion'),
        sub: L('Infiniminer, первая альфа, отказ Шону Паркеру и уход основателя.', 'Infiniminer, the first alpha, turning down Sean Parker and the founder\'s exit.'),
        eyebrow: L('ГЛАВА 19', 'CHAPTER 19'),
        sources: SOURCES, parts: PARTS, puzzles: PUZZLES, dialogue: DIALOGUE,
        tips: [L('Дай простую основу.', 'Give a simple base.')],
    };
};

export const MINECRAFT = build(false);
export const MINECRAFT_EN = build(true);
