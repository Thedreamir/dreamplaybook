import type { Source, Part, Puzzle, DNode, Chapter } from './types';

const build = (en: boolean): Chapter => {
    const L = (ru: string, e: string) => (en ? e : ru);
    const P = L('Пресса', 'Press');
    const SOURCES: Source[] = [
        { id: 'S1', kind: P, title: L('Reuters: Spotify\'s winding road from outsider to music industry ally (3 апреля 2018): хронология 1999-2018, 2006 основание, 2008 запуск, 2011 США, 2014 10 млн платящих из 40 млн активных', 'Reuters: Spotify\'s winding road from outsider to music industry ally (Apr 3, 2018): timeline 1999-2018, founded 2006, launched 2008, US in 2011, 2014: 10 million paying of 40 million active'), url: 'https://www.reuters.com/article/technology/spotifys-winding-road-from-outsider-to-music-industry-ally-idUSKCN1HA1M8/' },
        { id: 'S2', kind: P, title: L('BBC Newsbeat: How Spotify came to be worth billions (1 марта 2018): слова Ека из интервью Telegraph 2010, оценка выше 23 млрд', 'BBC Newsbeat: How Spotify came to be worth billions (Mar 1, 2018): Ek\'s words from a 2010 Telegraph interview, valuation above $23 billion'), url: 'https://www.bbc.com/news/newsbeat-43240886' },
        { id: 'S3', kind: L('Колонка (с оговоркой)', 'Opinion (with caveat)'), title: L('TechCrunch: Spotify, Napster and The Quest For Premium Music Dollars (7 августа 2009): гостевая колонка Майкла Робертсона, основателя MP3.com, автор сам называет взгляд «предвзятым»', 'TechCrunch: Spotify, Napster and The Quest For Premium Music Dollars (Aug 7, 2009): guest post by Michael Robertson, founder of MP3.com, who calls his own view "biased"'), url: 'https://techcrunch.com/2009/08/07/spotify-napster-and-the-quest-for-premium-music-dollars/' },
        { id: 'S4', kind: P, title: L('Reuters: Spotify plans to list shares, fend off Apple and Amazon (1 марта 2018): 71 млн платящих, 159 млн активных, выручка 4,09 млрд евро за 2017', 'Reuters: Spotify plans to list shares, fend off Apple and Amazon (Mar 1, 2018): 71 million premium subscribers, 159 million monthly actives, revenue of EUR 4.09 billion for 2017'), url: 'https://www.reuters.com/article/us-spotify-ipo/spotify-files-for-ipo-of-up-to-1-billion-idUSKCN1GC2YF/' },
        { id: 'S5', kind: P, title: L('Reuters: NYSE sets Spotify reference price at $132 (3 апреля 2018)', 'Reuters: NYSE sets Spotify reference price at $132 (Apr 3, 2018)'), url: 'https://www.reuters.com/article/us-spotify-ipo-price/nyse-sets-spotify-reference-price-at-132-idUSKCN1HA06A/' },
    ];
    const PARTS: Part[] = [
        { id: 'p0', n: '0', title: L('Пролог: сервис, который победил пиратов их же оружием', 'Prologue: a service that beat the pirates with their own weapon'), kicker: L('Почему Spotify стоит в томе после Tinder', 'Why Spotify follows Tinder in the volume'), xp: 20, era: '1999-2018', blocks: [
            { t: 'p', text: L('Spotify основан в 2006 году, публично запущен в 2008 (S1). К началу 2018 года у него было 71 млн платящих подписчиков и около 159 млн активных в месяц, вдвое больше платящих, чем у Apple (S4).', 'Spotify was founded in 2006 and publicly launched in 2008 (S1). By early 2018 it had 71 million paying subscribers and about 159 million monthly actives, twice as many payers as Apple (S4).'), src: ['S1', 'S4'] },
            { t: 'fact', label: L('Платящие подписчики, весна 2018', 'Paying subscribers, spring 2018'), value: L('71 млн (Apple: 36 млн), по Reuters', '71 million (Apple: 36 million), per Reuters'), src: ['S4'] },
            { t: 'p', text: L('Вопрос главы: как построить легальный продукт, который лучше пиратского, в отрасли, которая тебя ненавидит.', 'The question of the chapter: how to build a legal product that beats the pirated one, in an industry that hates you.') },
            { t: 'card', icon: 'target', title: L('Как читать главу', 'How to read the chapter'), label: L('МЕТКИ ЧЕСТНОСТИ', 'HONESTY LABELS'), rows: [
                { k: '[S1...S5]', v: L('Источник. Нажми на метку, чтобы увидеть, откуда факт.', 'Source. Tap the label to see where the fact comes from.') },
                { k: L('Не нашёл', 'Not found'), v: L('Данных в открытых источниках нет. Автор их не придумывает.', 'The data is not in open sources. The author does not invent it.') },
                { k: L('ИИ-реконструкция', 'AI reconstruction'), v: L('Сцена или реплика придуманы для тренировки. Это не слова реальных людей.', 'A scene or line invented for practice. These are not the words of real people.') },
                { k: L('Расхождение', 'Discrepancy'), v: L('Если источники спорят, показываем обе версии.', 'If sources disagree, we show both versions.') },
            ] },
        ] },
        { id: 'p1', n: '1', title: L('Генезис основателей', 'Genesis of the founders'), kicker: L('Два шведских предпринимателя после Napster', 'Two Swedish entrepreneurs after Napster'), xp: 20, era: '1999-2006', blocks: [
            { t: 'p', text: L('Reuters начинает с фона. В 1999 году Napster запускает волну пиратства, в 2001 Apple открывает iTunes, в 2003 появляется Myspace. Диск-продажи падают, у индустрии кризис, суды против фанатов и сервисов (S1).', 'Reuters starts with the background. In 1999 Napster triggers a wave of piracy, in 2001 Apple opens iTunes, in 2003 Myspace appears. Record sales fall, the industry is in crisis, with lawsuits against fans and services (S1).'), src: ['S1'] },
            { t: 'p', text: L('В 2006 году Даниэль Ек и Мартин Лоренцон основали Spotify. Reuters называет их «серийными шведскими предпринимателями» и пишет, что сначала Spotify задумывали как пиринговый сервис обмена файлами (S1). Ек раньше был техническим директором Stardoll, а Лоренцон сооснователем Tradedoubler (S3, колонка).', 'In 2006 Daniel Ek and Martin Lorentzon founded Spotify. Reuters calls them "serial Swedish entrepreneurs" and writes that Spotify was first conceived as a peer-to-peer file-sharing service (S1). Ek had been CTO at Stardoll and Lorentzon a co-founder of Tradedoubler (S3, an opinion post).'), src: ['S1', 'S3'] },
            { t: 'ladder', title: L('Лестница абстракции: откуда пришла идея', 'Ladder of abstraction: where the idea came from'), steps: [
                L('Конкретно: файлообменник, как пиратские сервисы (S1)', 'Concrete: a file-sharing service, like the pirate ones (S1)'),
                L('Закономерность: пиратство нельзя запретить законом (S2, слова Ека)', 'Pattern: piracy cannot be legislated away (S2, Ek\'s words)'),
                L('Принцип: сделать сервис лучше пиратского и платить индустрии (S2)', 'Principle: make a service better than piracy that also pays the industry (S2)'),
            ] },
        ] },
        { id: 'p2', n: '2', title: L('Поиск боли', 'Finding the pain'), kicker: L('Пиратство было удобнее, чем покупка', 'Piracy was more convenient than buying'), xp: 20, era: '2006-2008', blocks: [
            { t: 'p', text: L('Ек в интервью Telegraph 2010 года, как его цитирует BBC: «Я понял, что от пиратства нельзя уйти законами. Единственный способ решить проблему: создать сервис, который лучше пиратства и при этом компенсирует деньги музыкальной индустрии» (S2).', 'Ek in a 2010 Telegraph interview, as quoted by BBC: "I realised that you can never legislate away from piracy. The only way to solve the problem was to create a service that was better than piracy and at the same time compensates the music industry" (S2).'), src: ['S2'] },
            { t: 'p', text: L('Reuters: индустрия сопротивлялась «неограниченному доступу», предпочитая модель продаж загрузок по образцу iTunes (S1). То есть боль была двойная: у слушателей пиратство удобнее, у лейблов страх потерять продажи.', 'Reuters: the industry resisted "unlimited access", preferring the download-sales model of iTunes (S1). So the pain was twofold: for listeners piracy was more convenient, for labels there was fear of losing sales.'), src: ['S1'] },
            { t: 'warn', title: L('Что мы не знаем', 'What we do not know'), text: L('Как именно Ек и Лоренцон перешли от идеи пирингового сервиса к легальному, и когда, в открытых источниках не расписано. Reuters говорит лишь, что идея «превратилась» в легальный сервис.', 'How exactly Ek and Lorentzon moved from a peer-to-peer idea to a legal service, and when, is not detailed in open sources. Reuters only says the idea "morphed" into a legal service.'), src: ['S1'] },
        ] },
        { id: 'p3', n: '3', title: L('MVP и первые люди', 'MVP and the first people'), kicker: L('Бесплатно с рекламой, чтобы привлечь и конвертировать', 'Free with ads, to attract and convert'), xp: 25, era: '2008-2014', blocks: [
            { t: 'p', text: L('В 2008 году Spotify публично запустился в Стокгольме (S1). BBC: сервис был бесплатным с рекламой, в расчёте, что люди перейдут на платную подписку без рекламы (S2).', 'In 2008 Spotify launched publicly from Stockholm (S1). BBC: the service was free with ads, in the hope that people would upgrade to a paid ad-free subscription (S2).'), src: ['S1', 'S2'] },
            { t: 'p', text: L('Колонка Майкла Робертсона 2009 года описывает продукт так: библиотека 3,5 млн песен, интуитивный интерфейс, клиент для компьютера, музыка идёт с серверов или через P2P с компьютеров других пользователей, бесплатный уровень с рекламой и премиум-уровень за 13 долларов в месяц, работает в Великобритании, Швеции, Норвегии, Финляндии, Франции и Испании (S3). Автор конкурирует с Napster и сам называет колонку предвзятой.', 'Michael Robertson\'s 2009 post describes the product like this: a library of 3.5 million songs, an intuitive interface, a desktop client, music served from servers or via P2P from other users\' computers, a free ad-supported tier and a premium tier at $13 a month, available in the UK, Sweden, Norway, Finland, France and Spain (S3). The author competes with Napster and calls the post biased himself.'), src: ['S3'] },
            { t: 'p', text: L('В 2011 году Spotify подписал первые лицензионные договоры с крупными лейблами США, до того контракты ограничивались опытами за рубежом (S1). В 2014 году, по Reuters, у него было 10 млн платящих среди 40 млн активных пользователей (S1).', 'In 2011 Spotify signed its first US licensing deals with major labels, which had before limited contracts to experiments overseas (S1). In 2014, per Reuters, it had 10 million paying among 40 million active users (S1).'), src: ['S1'] },
            { t: 'ladder', title: L('Лестница первых людей', 'Ladder of the first people'), steps: [
                L('2008: публичный запуск в Европе (S1)', '2008: public launch in Europe (S1)'),
                L('2009: шесть стран, 3,5 млн песен (S3)', '2009: six countries, 3.5 million songs (S3)'),
                L('2011: первые договоры с лейблами в США (S1)', '2011: first US label deals (S1)'),
                L('2014: 40 млн активных, 10 млн платящих (S1)', '2014: 40 million active, 10 million paying (S1)'),
                L('Цифры первых 100, 1000 и 10 000 пользователей: не нашёл в открытых источниках', 'Numbers for the first 100, 1,000 and 10,000 users: not found in open sources'),
            ] },
            { t: 'gap', text: L('Не нашёл данных о числе пользователей в 2008 году и о том, как шло приглашение по инвайтам. Не придумываем.', 'Not found: user counts for 2008 and how any invite phase worked. We do not invent them.') },
        ] },
        { id: 'p4', n: '4', title: L('Деньги, питч и оценка', 'Money, pitch and valuation'), kicker: L('Доли лейблам, деньги инвесторов и прямой выход на биржу', 'Equity for labels, investor money and a direct listing'), xp: 25, era: '2009-2018', blocks: [
            { t: 'p', text: L('По колонке 2009 года, Spotify поднял «десятки миллионов» от венчурных инвесторов и дал доли звукозаписывающим лейблам. В таблице автора указаны 28 млн долларов как привлечённые, но он пишет, что цифры «утекли» и компания их не раскрывала (S3). Принимай это как слух, не как факт.', 'Per the 2009 post, Spotify raised "tens of millions" from venture investors and gave equity to the record labels. The author\'s table lists $28 million as raised, but he writes that figures "leaked" and the company had not disclosed them (S3). Treat it as a rumor, not a fact.'), src: ['S3'] },
            { t: 'p', text: L('1 марта 2018 года Spotify подал на прямой листинг на NYSE без новых акций и без традиционных андеррайтеров (S4). 2016: Spotify занял 1 млрд долларов долга, который конвертируется в акции при выходе на биржу (S4). 3 апреля 2018 года NYSE установила референсную цену 132 доллара. Это не цена предложения и не цена открытия (S5).', 'On March 1, 2018 Spotify filed for a direct listing on the NYSE, with no new shares and no traditional underwriters (S4). In 2016 Spotify had raised $1 billion in debt that converts into shares on a listing (S4). On April 3, 2018 the NYSE set a reference price of $132. It is not an offering price or an opening price (S5).'), src: ['S4', 'S5'] },
            { t: 'warn', title: L('Расхождение: оценка перед листингом', 'Discrepancy: valuation before the listing'), text: L('Reuters по своим расчётам по частным сделкам: около 19 млрд долларов (S4). BBC: Spotify говорит, что стоимость может превысить 23 млрд (S2). Это разные измерения: расчёт по прошлым сделкам и ожидание компании.', 'Reuters by its own calculation from private transactions: about $19 billion (S4). BBC: Spotify says the value could exceed $23 billion (S2). These are different measures: a calculation from past deals and the company\'s expectation.'), src: ['S2', 'S4'] },
            { t: 'chart', title: L('Spotify: оценка перед листингом, млрд долларов', 'Spotify: valuation before the listing, $ billions'), bars: [{ label: L('Reuters, расчёт', 'Reuters, calculation'), value: 19, text: '~19B' }, { label: L('Ожидание компании (BBC)', 'Company expectation (BBC)'), value: 23, text: '23B+' }], note: L('Два разных способа оценки. Это не оценка рынка в день торгов.', 'Two different ways to estimate. It is not the market valuation on trading day.'), src: ['S2', 'S4'] },
        ] },
        { id: 'p5', n: '5', title: L('PMF, монетизация, экосистема', 'PMF, monetization, ecosystem'), kicker: L('Двусторонняя модель и выручка 4 млрд евро', 'A two-sided model and EUR 4 billion in revenue'), xp: 25, era: '2014-2018', blocks: [
            { t: 'p', text: L('Модель: бесплатный сервис с рекламой привлекает пользователей, часть переходит на платную подписку без рекламы (S1, S2). Reuters: в 2014 году из 40 млн активных платили 10 млн (S1).', 'The model: a free ad-supported service attracts users, some move to a paid ad-free subscription (S1, S2). Reuters: in 2014, of 40 million active users, 10 million paid (S1).'), src: ['S1', 'S2'] },
            { t: 'p', text: L('Выручка 2017 года выросла на 39% до 4,09 млрд евро с 2,95 млрд в 2016. Операционный убыток вырос до 378 млн евро с 349 млн (S4). Аналитики по-разному оценивали, как компания придёт к прибыли (S4).', 'Revenue for 2017 rose 39% to EUR 4.09 billion from 2.95 billion in 2016. The operating loss widened to EUR 378 million from 349 million (S4). Analysts differed on how the company would reach profit (S4).'), src: ['S4'] },
            { t: 'p', text: L('Конкуренты: Apple Music появился в 2015 году, SoundCloud Go в 2016 (S2). Тейлор Свифт убрала музыку со Spotify на три года и вернулась в 2017 после новых договоров с лейблами (S1).', 'Competitors: Apple Music appeared in 2015, SoundCloud Go in 2016 (S2). Taylor Swift pulled her music from Spotify for three years and returned in 2017 after new deals with labels (S1).'), src: ['S1', 'S2'] },
            { t: 'gap', text: L('Не нашёл: прибыль Spotify после 2018 года в проверенных мной источниках и долю платящих по странам. Не придумываем.', 'Not found: Spotify profit after 2018 in sources I verified, and a payer share by country. We do not invent them.') },
        ] },
        { id: 'p6', n: '6', title: L('Первые принципы', 'First principles'), kicker: L('Что остаётся, если убрать музыку и оставить удобство', 'What remains if you remove the music and keep the convenience'), xp: 25, era: '2006', blocks: [
            { t: 'p', text: L('До атомов. Что делает Spotify? Мгновенный доступ к любой песне без владения файлом и без нарушения закона. Пиратство давало то же, но нелегально. Нужно было сделать так же просто и заплатить правообладателям.', 'To atoms. What does Spotify do? Instant access to any song without owning a file and without breaking the law. Piracy gave the same, but illegally. The task was to make it equally easy and pay the rights holders.') },
            { t: 'ladder', title: L('Путь рассуждения, по документам', 'The path of reasoning, per the documents'), steps: [
                L('Атом: мгновенный доступ к любой песне (S2)', 'Atom: instant access to any song (S2)'),
                L('Лишнее: покупка и хранение файлов (S1)', 'Unnecessary: buying and storing files (S1)'),
                L('Спрос: пиратство показало, что люди хотят доступ (S1, S2)', 'Demand: piracy showed that people want access (S1, S2)'),
                L('Деньги: бесплатно с рекламой, платно без (S1, S2)', 'Money: free with ads, paid without (S1, S2)'),
            ] },
            { t: 'card', icon: 'stone', title: L('Закон среды (кандидат в высеченные законы)', 'Law of the environment (candidate for the carved laws)'), label: L('ДЛЯ ФИНАЛЬНОГО РАЗДЕЛА', 'FOR THE FINAL SECTION'), rows: [
                { k: L('Формулировка', 'Wording'), v: L('Если люди обходят закон, потому что так удобнее, сделай законный путь удобнее и дели деньги с теми, кому они причитаются', 'If people break the rules because it is more convenient, make the legal path more convenient and share the money with those who are owed it') },
                { k: L('Опора', 'Support'), v: L('Слова Ека о сервисе «лучше пиратства» (S2), доли лейблам и их сопротивление (S1, S3)', 'Ek\'s words about a service "better than piracy" (S2), equity for labels and their resistance (S1, S3)') },
                { k: L('Оговорка', 'Caveat'), v: L('Споры с артистами о выплатах остаются (S1, Свифт). Мы не оцениваем, справедливы ли выплаты', 'Disputes with artists about payouts remain (S1, Swift). We do not judge whether the payouts are fair') },
            ] },
        ] },
        { id: 'p7', n: '7', title: L('Что переносимо тебе', 'What transfers to you'), kicker: L('Три упражнения на этой неделе', 'Three exercises for this week'), xp: 25, blocks: [
            { t: 'card', icon: 'rules', title: L('Что делать', 'What to do'), label: L('ПЕРЕНОС', 'TRANSFER'), rows: [
                { k: L('1. Найди обходной путь', '1. Find the workaround'), v: L('Что люди делают в обход твоей отрасли, потому что так проще? Это и есть спрос.', 'What do people do around your industry because it is easier? That is the demand.') },
                { k: L('2. Найди тех, кто теряет', '2. Find who loses'), v: L('Кто потеряет от твоего продукта и как сделать, чтобы они тоже выиграли?', 'Who would lose from your product and how can you make them win too?') },
                { k: L('3. Придумай бесплатный вход', '3. Design a free entry'), v: L('Что человек получит бесплатно, а за что захочет заплатить?', 'What does a person get free and what will they want to pay for?') },
            ] },
            { t: 'card', icon: 'bulb', title: L('Вопрос для себя', 'A question for yourself'), label: L('ПОДУМАЙ', 'THINK'), rows: [
                { k: L('Вопрос', 'Question'), v: L('Что люди делают у меня в обход правил, и почему им так удобнее?', 'What do people do around the rules in my area, and why is it easier for them?') },
            ] },
        ] },
    ];
    const PUZZLES: Puzzle[] = [
        { id: 'pz1', title: L('Пазл 1. Пиратство побеждает', 'Puzzle 1. Piracy is winning'), xp: 20, src: ['S2'],
          setup: L('Люди скачивают музыку нелегально, потому что так удобнее. Что делаешь?', 'People download music illegally because it is more convenient. What do you do?'),
          options: [
            { text: L('Требуешь ужесточить законы', 'Demand harsher laws'), verdict: L('Ек считал, что так проблему не решить.', 'Ek believed this would not solve the problem.') },
            { text: L('Делаешь легальный сервис лучше пиратского', 'Build a legal service better than piracy'), verdict: L('Так он и поступил.', 'This is what he did.') },
            { text: L('Ничего', 'Nothing'), verdict: L('Не описано.', 'Not described.') },
          ], best: 1, fact: L('Ек: сервис должен быть лучше пиратства и компенсировать индустрию (S2).', 'Ek: the service must be better than piracy and compensate the industry (S2).') },
    ];
    const DIALOGUE: DNode[] = [
        { id: 'd1', speaker: L('Лейбл (ИИ-реконструкция)', 'Label (AI reconstruction)'), text: L('Мы боимся, что бесплатный уровень убьёт продажи. Что скажешь?', 'We fear a free tier will kill sales. What do you say?'), choices: [
            { text: L('Бесплатный уровень приведёт людей к платной подписке', 'The free tier will bring people to the paid subscription'), reply: L('Так была устроена модель.', 'That is how the model was built.'), good: true },
            { text: L('Откажемся от бесплатного уровня', 'We will drop the free tier'), reply: L('Не описано.', 'Not described.'), good: false },
        ] },
    ];
    return {
        id: 'spotify', no: '17', company: 'Spotify', year: '2008',
        title: L('Spotify: как лучше пиратства и платить индустрии', 'Spotify: how to beat piracy and still pay the industry'),
        sub: L('Ек и Лоренцон, бесплатный уровень с рекламой, доли лейблам и прямой листинг на NYSE.', 'Ek and Lorentzon, a free ad tier, equity for labels and a direct listing on the NYSE.'),
        eyebrow: L('ГЛАВА 17', 'CHAPTER 17'),
        sources: SOURCES, parts: PARTS, puzzles: PUZZLES, dialogue: DIALOGUE,
        tips: [L('Сделай законный путь удобнее.', 'Make the legal path more convenient.')],
    };
};

export const SPOTIFY = build(false);
export const SPOTIFY_EN = build(true);
