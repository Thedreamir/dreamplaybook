import type { Source, Part, Puzzle, DNode, Chapter } from './types';

const build = (en: boolean): Chapter => {
    const L = (ru: string, e: string) => (en ? e : ru);
    const P = L('Пресса', 'Press');
    const SOURCES: Source[] = [
        { id: 'S1', kind: P, title: L('TechCrunch: How Roblox avoided the gaming graveyard and grew into a $2.5B company, The Roblox EC-1 Part I (11 июля 2019): Knowledge Revolution, Dynablox, 2004, смерть Кассела в 2013, Robux в 2008', 'TechCrunch: How Roblox avoided the gaming graveyard and grew into a $2.5B company, The Roblox EC-1 Part I (Jul 11, 2019): Knowledge Revolution, Dynablox, 2004, Cassel\'s death in 2013, Robux in 2008'), url: 'https://techcrunch.com/2019/07/11/how-roblox-avoided-the-gaming-graveyard-and-grew-into-a-2-5b-company/' },
        { id: 'S2', kind: P, title: L('Reuters: Gaming company Roblox surges 54% in debut on NYSE (10 марта 2021): 45,2 млрд полностью разводнённая оценка, Series H 29,5 млрд', 'Reuters: Gaming company Roblox surges 54% in debut on NYSE (Mar 10, 2021): $45.2 billion fully diluted valuation, Series H at $29.5 billion'), url: 'https://www.reuters.com/article/technology/gaming-company-roblox-surges-54-in-debut-on-nyse-idUSKBN2B21W3/' },
        { id: 'S3', kind: P, title: L('VentureBeat: Roblox plans to list shares on March 10, reports 82% revenue growth to $923 million for 2020 (22 февраля 2021): цифры 2018-2020 из S-1', 'VentureBeat: Roblox plans to list shares on March 10, reports 82% revenue growth to $923 million for 2020 (Feb 22, 2021): 2018-2020 figures from the S-1'), url: 'https://venturebeat.com/games/roblox-plans-to-list-shares-on-march-10-reports-82-revenue-growth-to-923-million-for-2020/' },
        { id: 'S4', kind: P, title: L('Reuters: Roblox reference share price set at $45 ahead NYSE debut (9 марта 2021): оценка около 30 млрд', 'Reuters: Roblox reference share price set at $45 ahead NYSE debut (Mar 9, 2021): implied value about $30 billion'), url: 'https://www.reuters.com/article/business/roblox-reference-share-price-set-at-45-ahead-nyse-debut-idUSKBN2B12SV/' },
    ];
    const PARTS: Part[] = [
        { id: 'p0', n: '0', title: L('Пролог: платформа, которой пришлось ждать пятнадцать лет', 'Prologue: a platform that had to wait fifteen years'), kicker: L('Почему Roblox стоит в томе после Spotify', 'Why Roblox follows Spotify in the volume'), xp: 20, era: '1989-2021', blocks: [
            { t: 'p', text: L('TechCrunch в 2019 году пишет, что Roblox потребовалось не меньше десяти лет, чтобы набрать ход, и что о нём почти не писали (S1). Основан в 2004 году, на биржу вышел в марте 2021 (S1, S2).', 'TechCrunch in 2019 writes that Roblox took at least a decade to hit its stride and that it barely got press (S1). It was founded in 2004 and went public in March 2021 (S1, S2).'), src: ['S1', 'S2'] },
            { t: 'fact', label: L('Средние дневные пользователи, 2020', 'Average daily active users, 2020'), value: L('32,6 млн (17,6 млн в 2019), по S-1 в пересказе VentureBeat', '32.6 million (17.6 million in 2019), per the S-1 as retold by VentureBeat'), src: ['S3'] },
            { t: 'p', text: L('Вопрос главы: как не свернуть с идеи платформы, когда всё вокруг тянет сделать одну хитовую игру.', 'The question of the chapter: how not to leave the idea of a platform when everything around pulls you to make one hit game.') },
            { t: 'card', icon: 'target', title: L('Как читать главу', 'How to read the chapter'), label: L('МЕТКИ ЧЕСТНОСТИ', 'HONESTY LABELS'), rows: [
                { k: '[S1...S4]', v: L('Источник. Нажми на метку, чтобы увидеть, откуда факт.', 'Source. Tap the label to see where the fact comes from.') },
                { k: L('Не нашёл', 'Not found'), v: L('Данных в открытых источниках нет. Автор их не придумывает.', 'The data is not in open sources. The author does not invent it.') },
                { k: L('ИИ-реконструкция', 'AI reconstruction'), v: L('Сцена или реплика придуманы для тренировки. Это не слова реальных людей.', 'A scene or line invented for practice. These are not the words of real people.') },
                { k: L('Расхождение', 'Discrepancy'), v: L('Если источники спорят, показываем обе версии.', 'If sources disagree, we show both versions.') },
            ] },
        ] },
        { id: 'p1', n: '1', title: L('Генезис основателей', 'Genesis of the founders'), kicker: L('Симулятор физики, в котором дети строили аварии', 'A physics simulator in which kids built car crashes'), xp: 20, era: '1989-2004', blocks: [
            { t: 'p', text: L('Дэвид Базучки с братом Грегом основали в 1989 году Knowledge Revolution, компанию учебного софта. Программа позволяла моделировать физические эксперименты. Базучки: «Всем было интересно строить свой эксперимент. Когда мы приходили в школы, они делали аварии машин и падающие здания, смешные штуки» (S1).', 'David Baszucki and his brother Greg founded Knowledge Revolution in 1989, a teaching software company. The program let students simulate physics experiments. Baszucki: "The fun seemed to be in building your own experiment. When we went into schools and labs, they were all making car crashes and buildings fall down, making really funny stuff" (S1).'), src: ['S1'] },
            { t: 'p', text: L('Почти через десять лет компанию купила MSC Software за 20 млн долларов. Базучки остался там ещё на четыре года, потом стал бизнес-ангелом и вложился в Friendster (S1). TechCrunch считает, что наследие Knowledge Revolution и Friendster дало две части Roblox: физическую песочницу с инструментами создания и социальный граф (S1).', 'Almost a decade later the company was acquired by MSC Software for $20 million. Baszucki stayed another four years, then became an angel investor and put money into Friendster (S1). TechCrunch argues that the legacy of Knowledge Revolution and Friendster gave Roblox two parts: a physics sandbox with strong creation tools and a social graph (S1).'), src: ['S1'] },
            { t: 'p', text: L('Roblox, сначала называвшийся Dynablox, начали в 2004 году Базучки и Эрик Кассель, инженер из Knowledge Revolution (S1).', 'Roblox, first called Dynablox, was started in 2004 by Baszucki and Erik Cassel, an engineer from Knowledge Revolution (S1).'), src: ['S1'] },
            { t: 'ladder', title: L('Лестница абстракции: откуда пришла идея', 'Ladder of abstraction: where the idea came from'), steps: [
                L('Конкретно: ученики превращают учебный симулятор в игру (S1)', 'Concrete: students turn a teaching simulator into a game (S1)'),
                L('Закономерность: людям интереснее строить своё, чем смотреть чужое (S1)', 'Pattern: people prefer building their own to watching others\' (S1)'),
                L('Принцип: дать инструменты и общество, пусть строят они (S1)', 'Principle: give tools and a community, and let them build (S1)'),
            ] },
        ] },
        { id: 'p2', n: '2', title: L('Поиск боли', 'Finding the pain'), kicker: L('Много игровых порталов, почти все погибли', 'Many game portals, almost all died'), xp: 20, era: '2004-2008', blocks: [
            { t: 'p', text: L('Roblox возник в плодородное время: широкополосный интернет, рост многопользовательских игр, виртуальные миры вроде Second Life (2003), IMVU (2004), Metaplace (2006) и детские платформы вроде Habbo Hotel (2000) и Club Penguin (2005) (S1).', 'Roblox was founded in a fertile period: broadband, the growth of multiplayer gaming, virtual worlds like Second Life (2003), IMVU (2004), Metaplace (2006) and children\'s platforms like Habbo Hotel (2000) and Club Penguin (2005) (S1).'), src: ['S1'] },
            { t: 'p', text: L('В начале основатели не всегда понимали, что делает их идею особой. Базучки: «Было несколько ложных стартов, но в итоге мы сказали: нужен один объединяющий продукт» (S1). Решение: игры делают пользователи, а компания берёт на себя инструменты, серверы и поиск игр (S1).', 'At the start the founders were not always sure what made their vision unique. Baszucki: "We had a couple false starts, but we finally said, we have to go for this complete unifying product" (S1). The answer: users make the games, and the company takes on tools, servers and discovery (S1).'), src: ['S1'] },
            { t: 'warn', title: L('Что мы не знаем', 'What we do not know'), text: L('Какие именно были «ложные старты» и сколько они стоили, в проверенных нами источниках не сказано.', 'What exactly the "false starts" were and what they cost is not said in the sources we checked.'), src: ['S1'] },
        ] },
        { id: 'p3', n: '3', title: L('MVP и первые люди', 'MVP and the first people'), kicker: L('Шляпы, Robux и дети-разработчики', 'Hats, Robux and kid developers'), xp: 25, era: '2005-2013', blocks: [
            { t: 'p', text: L('Первые игры на платформе во многом делала сама компания, потом перестала: всё стало делать сообщество (S1). Первой попыткой продавать виртуальные товары были шляпы для аватаров. По словам сотрудников, спрос оказался «подавляюще успешным» (S1).', 'In the early years Roblox made many of its own games, then stopped: the community created everything (S1). The first attempt at selling virtual goods was hats for avatars. Staff say demand was "overwhelmingly successful" (S1).'), src: ['S1'] },
            { t: 'p', text: L('Продажа внутренней валюты Robux началась в 2008, виртуальные товары для разработчиков в 2013 (S1). Мобильное приложение вышло в 2012 году (S1). Большинство разработчиков были детьми: один из них, Мэттью Дин, начал в 16 лет, выложил игру Catalogue Heaven за пару недель и забыл, а через полгода она была на первой странице (S1).', 'Sales of the in-game currency Robux began in 2008, virtual goods for developers in 2013 (S1). The mobile app came out in 2012 (S1). Most developers were kids: one of them, Matthew Dean, started at 16, built Catalogue Heaven in a couple of weeks and forgot about it, and six months later it was on the front page (S1).'), src: ['S1'] },
            { t: 'p', text: L('Потеря: в 2013 году умер сооснователь Эрик Кассель. Базучки: «Он почувствовал недомогание, пошёл домой, и мы узнали, что у него рак» (S1). Кассель предложил встроить скрипты на Lua, чтобы пользователи могли сделать что угодно, вместо жёсткого кода (S1).', 'The loss: in 2013 co-founder Erik Cassel died. Baszucki: "He almost had like an upset stomach one day and went home, and we found out he had cancer" (S1). Cassel proposed embedding Lua scripting so users could do anything, instead of hard-coded features (S1).'), src: ['S1'] },
            { t: 'ladder', title: L('Лестница первых людей', 'Ladder of the first people'), steps: [
                L('2004: начало, платформа Dynablox (S1)', '2004: the start, the Dynablox platform (S1)'),
                L('2008: продажа Robux (S1)', '2008: Robux sales begin (S1)'),
                L('2012: мобильное приложение (S1)', '2012: the mobile app (S1)'),
                L('2019: 90 млн уникальных в месяц (S1)', '2019: 90 million monthly uniques (S1)'),
                L('Цифры первых 100, 1000 и 10 000 пользователей: не нашёл в открытых источниках', 'Numbers for the first 100, 1,000 and 10,000 users: not found in open sources'),
            ] },
            { t: 'gap', text: L('Не нашёл данных о числе пользователей в первые годы. Не придумываем.', 'Not found: user counts for the early years. We do not invent them.') },
        ] },
        { id: 'p4', n: '4', title: L('Деньги, питч и оценка', 'Money, pitch and valuation'), kicker: L('От 4 до 29,5 млрд за одиннадцать месяцев и прямой листинг', 'From $4 billion to $29.5 billion in eleven months and a direct listing'), xp: 25, era: '2019-2021', blocks: [
            { t: 'p', text: L('Reuters: в январе 2021 Roblox привлёк около 520 млн долларов в раунде Series H при полностью разводнённой оценке 29,5 млрд, более чем в семь раз выше, чем 4 млрд в Series G за 11 месяцев до этого (S2). В 2019 году, по TechCrunch, раунд в 150 млн вёл Greylock (S1).', 'Reuters: in January 2021 Roblox raised about $520 million in a Series H at a fully diluted valuation of $29.5 billion, more than seven times the $4 billion of the Series G 11 months earlier (S2). In 2019, per TechCrunch, a $150 million round was led by Greylock (S1).'), src: ['S1', 'S2'] },
            { t: 'p', text: L('VentureBeat: компания планировала IPO осенью, но отложила и выбрала прямой листинг, где акции продают акционеры, а компания денег не привлекает (S3). 10 марта 2021 акции закрылись на 69,47 доллара (+54,4%), оценка 45,2 млрд с учётом опционов (S2).', 'VentureBeat: the company had planned an IPO in the fall, but postponed it and chose a direct listing, where shareholders sell shares and the company raises no capital (S3). On March 10, 2021 the shares closed at $69.47 (+54.4%), a valuation of $45.2 billion including options (S2).'), src: ['S2', 'S3'] },
            { t: 'warn', title: L('Расхождение: оценка при выходе', 'Discrepancy: valuation at the listing'), text: L('Референсная цена 45 долларов подразумевала около 30 млрд (S4). Закрытие 10 марта: 45,2 млрд полностью разводнённая и 38,2 млрд рыночная капитализация (S2). Это разные метрики: с опционами и без, референс и рынок.', 'The reference price of $45 implied about $30 billion (S4). The March 10 close: $45.2 billion fully diluted and $38.2 billion market capitalization (S2). These are different measures: with and without options, reference and market.'), src: ['S2', 'S4'] },
            { t: 'chart', title: L('Оценка Roblox, млрд долларов', 'Roblox valuation, $ billions'), bars: [{ label: L('Series G, 2020', 'Series G, 2020'), value: 4, text: '4B' }, { label: L('Series H, янв 2021', 'Series H, Jan 2021'), value: 29.5, text: '29.5B' }, { label: L('Закрытие, 10 мар 2021', 'Close, Mar 10 2021'), value: 45.2, text: '45.2B' }], note: L('Закрытие дня торгов: полностью разводнённая оценка. Рыночная капитализация в тот день 38,2 млрд.', 'Close of trading day: fully diluted valuation. Market capitalization that day was $38.2 billion.'), src: ['S2'] },
        ] },
        { id: 'p5', n: '5', title: L('PMF, монетизация, экосистема', 'PMF, monetization, ecosystem'), kicker: L('Выручка 923,9 млн и разработчики, которые зарабатывают', 'Revenue of $923.9 million and developers who earn'), xp: 25, era: '2018-2020', blocks: [
            { t: 'p', text: L('Монетизация: игроки покупают Robux и тратят их в играх, созданных пользователями. Roblox оставляет 30% и делит основную часть с разработчиками (S3). SEC просила изменить учёт продажи виртуальной валюты, из-за чего листинг задержался (S3).', 'Monetization: players buy Robux and spend them in user-made games. Roblox keeps 30% and shares the bulk with developers (S3). The SEC asked for accounting changes on the sale of virtual currency, which delayed the listing (S3).'), src: ['S3'] },
            { t: 'p', text: L('По S-1 в пересказе VentureBeat: выручка 325,0 млн в 2018, 508,4 млн в 2019, 923,9 млн в 2020 (+82%). Бронирования 499,0 млн, 694,3 млн и около 1,9 млрд. Чистый убыток 88,1 млн, 71,0 млн и 253,3 млн. Часы использования: 30,6 млрд в 2020, в среднем 2,6 часа в день на дневного пользователя (S3).', 'Per the S-1 as retold by VentureBeat: revenue $325.0 million in 2018, $508.4 million in 2019, $923.9 million in 2020 (+82%). Bookings $499.0 million, $694.3 million and about $1.9 billion. Net loss $88.1 million, $71.0 million and $253.3 million. Hours engaged: 30.6 billion in 2020, an average of 2.6 hours a day per daily user (S3).'), src: ['S3'] },
            { t: 'p', text: L('Разработчики: больше 1,25 млн заработали Robux, около 4300 заработали больше 100 тыс. Robux, более 1250 заработали больше 10 тыс. долларов, 300 больше 100 тыс. долларов (S3). Roblox говорит, что людей старше 13 лет на платформе уже больше, чем младше (S2, слова Базучки).', 'Developers: over 1.25 million earned Robux, about 4,300 earned more than 100,000 Robux, over 1,250 earned more than $10,000, and 300 more than $100,000 (S3). Roblox says there are now more users over 13 than under 13 (S2, Baszucki\'s words).'), src: ['S2', 'S3'] },
            { t: 'chart', title: L('Выручка Roblox, млн долларов', 'Roblox revenue, $ millions'), bars: [{ label: '2018', value: 325, text: '325' }, { label: '2019', value: 508.4, text: '508' }, { label: '2020', value: 923.9, text: '924' }], note: L('Выручка по правилам учёта. Бронирования в 2020 году были около 1,9 млрд, это другая метрика.', 'Revenue per accounting rules. Bookings in 2020 were about $1.9 billion, a different metric.'), src: ['S3'] },
            { t: 'gap', text: L('Не нашёл: цифры после 2021 года в проверенных мной источниках. Не придумываем.', 'Not found: figures after 2021 in sources I verified. We do not invent them.') },
        ] },
        { id: 'p6', n: '6', title: L('Первые принципы', 'First principles'), kicker: L('Что остаётся, если убрать игры и оставить платформу', 'What remains if you remove the games and keep the platform'), xp: 25, era: '2004', blocks: [
            { t: 'p', text: L('До атомов. Что даёт Roblox? Простые инструменты, чтобы человек мог сделать игру, и аудиторию, которая в неё придёт. Игры делают пользователи. Компания берёт на себя серверы, поиск, платежи и безопасность.', 'To atoms. What does Roblox give? Simple tools so a person can make a game, and an audience that will come to it. Users make the games. The company takes on servers, discovery, payments and safety.') },
            { t: 'ladder', title: L('Путь рассуждения, по документам', 'The path of reasoning, per the documents'), steps: [
                L('Атом: человек строит и показывает другим (S1)', 'Atom: a person builds and shows others (S1)'),
                L('Лишнее: игры самой компании, смена мира на мир (S1)', 'Unnecessary: the company\'s own games, walking between worlds (S1)'),
                L('Спрос: шляпы и аватары (S1)', 'Demand: hats and avatars (S1)'),
                L('Деньги: Robux и доля 30% (S3)', 'Money: Robux and a 30% cut (S3)'),
            ] },
            { t: 'card', icon: 'stone', title: L('Закон среды (кандидат в высеченные законы)', 'Law of the environment (candidate for the carved laws)'), label: L('ДЛЯ ФИНАЛЬНОГО РАЗДЕЛА', 'FOR THE FINAL SECTION'), rows: [
                { k: L('Формулировка', 'Wording'), v: L('Если платформа верна, держись долгой цели годами и не отвлекайся на короткие хиты', 'If the platform is right, hold the long goal for years and do not get distracted by short hits') },
                { k: L('Опора', 'Support'), v: L('Команда не свернула к виртуальным мирам и хитовым играм; документ с видением остался верным через пять лет (S1)', 'The team did not turn to virtual worlds or hit games; the vision document stayed valid five years later (S1)') },
                { k: L('Оговорка', 'Caveat'), v: L('Выжить пятнадцать лет получилось у одной компании. Сколько таких же платформ закрылись, мы не считали', 'One company lasted fifteen years. We did not count how many similar platforms shut down') },
            ] },
        ] },
        { id: 'p7', n: '7', title: L('Что переносимо тебе', 'What transfers to you'), kicker: L('Три упражнения на этой неделе', 'Three exercises for this week'), xp: 25, blocks: [
            { t: 'card', icon: 'rules', title: L('Что делать', 'What to do'), label: L('ПЕРЕНОС', 'TRANSFER'), rows: [
                { k: L('1. Дай инструмент', '1. Give a tool'), v: L('Что пользователь мог бы сделать сам, если дать ему инструмент?', 'What could your user make on their own if you gave them a tool?') },
                { k: L('2. Выпиши долгую цель', '2. Write the long goal'), v: L('Запиши видение на одну страницу и проверяй раз в год, что оно ещё верно.', 'Write the vision on one page and check once a year that it is still true.') },
                { k: L('3. Реши, что делает компания', '3. Decide what the company does'), v: L('Что делает только твоя команда, а что делают пользователи?', 'What does only your team do, and what do your users do?') },
            ] },
            { t: 'card', icon: 'bulb', title: L('Вопрос для себя', 'A question for yourself'), label: L('ПОДУМАЙ', 'THINK'), rows: [
                { k: L('Вопрос', 'Question'), v: L('Если бы мой продукт не мог быть хитом, смог бы он быть платформой?', 'If my product could not be a hit, could it be a platform?') },
            ] },
        ] },
    ];
    const PUZZLES: Puzzle[] = [
        { id: 'pz1', title: L('Пазл 1. Хитовая игра или платформа', 'Puzzle 1. A hit game or a platform'), xp: 20, src: ['S1'],
          setup: L('Твоя внутренняя функция имела успех, шляпы хорошо продаются. Друзья советуют сделать из этого отдельную компанию. Что делаешь?', 'One of your internal features is a hit, hats sell well. Friends advise you to build a company around it. What do you do?'),
          options: [
            { text: L('Бросаешь платформу', 'Drop the platform'), verdict: L('Команда так не сделала.', 'The team did not do this.') },
            { text: L('Берёшь урок и остаёшься верным платформе', 'Take the lesson and stay with the platform'), verdict: L('Так и вышло.', 'That is what happened.') },
            { text: L('Ничего не делаешь', 'Do nothing'), verdict: L('Не описано.', 'Not described.') },
          ], best: 1, fact: L('Roblox не ушёл в «компанию про онлайн-персону», остался платформой (S1).', 'Roblox did not become a "company about an online persona" and stayed a platform (S1).') },
    ];
    const DIALOGUE: DNode[] = [
        { id: 'd1', speaker: L('Советчик (ИИ-реконструкция)', 'Adviser (AI reconstruction)'), text: L('Сделай одну хитовую игру, платформы никто не любит. Что скажешь?', 'Make one hit game, nobody likes platforms. What do you say?'), choices: [
            { text: L('Остаёмся при платформе', 'We stay with the platform'), reply: L('Так и поступили.', 'That is what they did.'), good: true },
            { text: L('Делаем игру', 'We make the game'), reply: L('Не описано.', 'Not described.'), good: false },
        ] },
    ];
    return {
        id: 'roblox', no: '18', company: 'Roblox', year: '2004',
        title: L('Roblox: как платформа ждала пятнадцать лет и вышла на 45 миллиардов', 'Roblox: how a platform waited fifteen years and listed at $45 billion'),
        sub: L('Knowledge Revolution, шляпы, Robux, потеря сооснователя и прямой листинг.', 'Knowledge Revolution, hats, Robux, the loss of a co-founder and a direct listing.'),
        eyebrow: L('ГЛАВА 18', 'CHAPTER 18'),
        sources: SOURCES, parts: PARTS, puzzles: PUZZLES, dialogue: DIALOGUE,
        tips: [L('Держи долгую цель.', 'Hold the long goal.')],
    };
};

export const ROBLOX = build(false);
export const ROBLOX_EN = build(true);
