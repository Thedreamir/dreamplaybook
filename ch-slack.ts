import type { Source, Part, Puzzle, DNode, Chapter } from './types';

const build = (en: boolean): Chapter => {
    const L = (ru: string, e: string) => (en ? e : ru);
    const P = L('Пресса', 'Press'), D = L('Первичка', 'Primary'), W = L('Энциклопедия (вторичный)', 'Encyclopedia (secondary)');
    const SOURCES: Source[] = [
        { id: 'S1', kind: P, title: L('CNBC: Slack, the billion-dollar accident (31 октября 2014): Glitch провалился, 30 000 команд, оценка 1,12 млрд', 'CNBC: Slack, the billion-dollar accident (Oct 31, 2014): Glitch failed, 30,000 teams, $1.12 billion valuation'), url: 'https://www.cnbc.com/2014/10/31/slack-the-billion-dollar-accident.html' },
        { id: 'S2', kind: P, title: L('Fast Company: хронология Slack от Glitch до NYSE (20 июня 2019)', 'Fast Company: Slack timeline from Glitch to NYSE (Jun 20, 2019)'), url: 'https://www.fastcompany.com/90366968/slack-timeline-how-it-went-from-glitch-to-nyse-in-8-years' },
        { id: 'S3', kind: P, title: L('VentureBeat: Why is messaging app Slack exploding? Founder: "I have no f--king idea" (19 января 2015)', 'VentureBeat: Why is messaging app Slack exploding? Founder: "I have no f--king idea" (Jan 19, 2015)'), url: 'https://venturebeat.com/business/why-is-messaging-app-slack-exploding-founder-i-have-no-f-king-idea' },
        { id: 'S4', kind: P, title: L('Vox: Slack\'s business is reliable. Its IPO-less IPO plan is risky (26 апреля 2019)', 'Vox: Slack\'s business is reliable. Its IPO-less IPO plan is risky (Apr 26, 2019)'), url: 'https://www.vox.com/2019/4/26/18517990/slack-ipo-direct-listing-s1-spotify' },
        { id: 'S5', kind: D, title: L('Slack Technologies: форма S-1 (SEC, 26 апреля 2019)', 'Slack Technologies: Form S-1 (SEC, April 26, 2019)'), url: 'https://www.sec.gov/Archives/edgar/data/1764925/000162828019004786/slacks-1.htm' },
        { id: 'S6', kind: W, title: L('Wikipedia: Slack Technologies (Tiny Speck, Glitch, листинг, сделка с Salesforce)', 'Wikipedia: Slack Technologies (Tiny Speck, Glitch, listing, Salesforce deal)'), url: 'https://en.wikipedia.org/wiki/Slack_Technologies' },
    ];
    const PARTS: Part[] = [
        { id: 'p0', n: '0', title: L('Пролог: игра, которая провалилась, и чат, который остался', 'Prologue: the game that failed and the chat that remained'), kicker: L('Самый известный разворот в стартапах', 'The best-known pivot in startups'), xp: 20, era: '2011-2021', blocks: [
            { t: 'p', text: L('Slack вырос из внутренней системы связи, которую Стюарт Баттерфилд построил для своей игры Glitch. В Glitch играли мало, игра провалилась. Но команде понравился чат, и они закрыли игру и занялись Slack (S1).', 'Slack grew out of a communication system Stewart Butterfield built for his video game Glitch. Few people played Glitch and the game failed. But the team loved the chat they had built, so they shut down the game and focused on Slack (S1).'), src: ['S1'] },
            { t: 'fact', label: L('Оценка, октябрь 2014', 'Valuation, October 2014'), value: L('1,12 млрд долларов после раунда в 120 млн, через восемь месяцев после запуска', '$1.12 billion after a $120 million round, eight months after launch'), src: ['S1'] },
            { t: 'warn', title: L('Границы главы', 'Limits of the chapter'), text: L('Источники: пресса и документы SEC. Дата рождения Slack в источниках разная, ниже показываем расхождение.', 'Sources: press and SEC filings. The date of Slack\'s birth differs across sources, the discrepancy is shown below.') },
            { t: 'card', icon: 'target', title: L('Как читать главу', 'How to read the chapter'), label: L('МЕТКИ ЧЕСТНОСТИ', 'HONESTY LABELS'), rows: [
                { k: '[S1...S6]', v: L('Источник. Нажми на метку, чтобы увидеть, откуда факт.', 'Source. Tap the label to see where the fact comes from.') },
                { k: L('Не нашёл', 'Not found'), v: L('Данных в открытых источниках нет. Автор их не придумывает.', 'The data is not in open sources. The author does not invent it.') },
                { k: L('ИИ-реконструкция', 'AI reconstruction'), v: L('Сцена или реплика придуманы для тренировки.', 'A scene or line invented for practice.') },
            ] },
        ] },
        { id: 'p1', n: '1', title: L('Генезис: Tiny Speck и Glitch', 'Genesis: Tiny Speck and Glitch'), kicker: L('Сооснователь Flickr делает игру', 'A Flickr co-founder builds a game'), xp: 20, era: '2009-2012', blocks: [
            { t: 'p', text: L('Компания называлась Tiny Speck, её возглавлял Стюарт Баттерфилд, сооснователь Flickr (S6). По Wikipedia, ангельское финансирование 1,5 млн долларов в 2009, серия A на 5 млн от Accel и Andreessen Horowitz в 2010, серия B на 10,7 млн в 2011 (S6). Glitch запущен 27 сентября 2011 года, закрытие объявлено в ноябре 2012 года (S6).', 'The company was called Tiny Speck, headed by Stewart Butterfield, the co-founder of Flickr (S6). Per Wikipedia: $1.5 million angel funding in 2009, a $5 million Series A from Accel and Andreessen Horowitz in 2010, a $10.7 million Series B in 2011 (S6). Glitch launched on September 27, 2011 and its closing was announced in November 2012 (S6).'), src: ['S6'] },
            { t: 'p', text: L('Vox: с последними деньгами Баттерфилд развернул компанию к инфраструктуре сообщений, которой команда пользовалась внутри (S4).', 'Vox: with the last of the money Butterfield pivoted the company toward the messaging infrastructure the team used internally (S4).'), src: ['S4'] },
            { t: 'warn', title: L('Вторичный источник', 'Secondary source'), text: L('Раунды 2009-2011 взяты из Wikipedia, первичных документов о них я не нашёл.', 'The 2009-2011 rounds come from Wikipedia, and I did not find primary documents for them.'), src: ['S6'] },
        ] },
        { id: 'p2', n: '2', title: L('Боль: свой же чат', 'Pain: their own chat'), kicker: L('Команда сама была первым клиентом', 'The team was its own first customer'), xp: 20, era: '2012-2013', blocks: [
            { t: 'p', text: L('Fast Company: Glitch хорошо удавалась одна вещь, общение. Игроки могли делиться и переписываться, и это навело основателя на мысль переделать продукт (S2). CNBC: команде нравилось, что они могли общаться, делиться файлами и искать историю чата (S1).', 'Fast Company: one thing Glitch did well was digital communication. Players could share and chat, which led its co-founder to consider retooling the product (S2). CNBC: the team loved that they could communicate, share files and search chat history (S1).'), src: ['S1', 'S2'] },
            { t: 'p', text: L('Название это аббревиатура: Searchable Log of All Conversation and Knowledge, то есть «поисковый журнал всех разговоров и знаний» (S6).', 'The name is an acronym: Searchable Log of All Conversation and Knowledge (S6).'), src: ['S6'] },
            { t: 'ladder', title: L('Лестница абстракции', 'Ladder of abstraction'), steps: [
                L('Конкретно: чат внутри игры, которым пользовалась команда (S1)', 'Concrete: a chat inside the game that the team used (S1)'),
                L('Закономерность: люди ценят общий поиск по истории и файлам (S1)', 'Pattern: people value shared searchable history and files (S1)'),
                L('Принцип: если ты сам не можешь без своего инструмента, он нужен и другим', 'Principle: if you cannot live without your own tool, others may need it too'),
            ] },
        ] },
        { id: 'p3', n: '3', title: L('MVP и первые люди', 'MVP and the first people'), kicker: L('Запуск и первые тысячи команд', 'Launch and the first thousands of teams'), xp: 25, era: '2013-2014', blocks: [
            { t: 'p', text: L('Fast Company: в августе 2013 родился Slack, за первые 24 часа зарегистрировалось 8 000 компаний (S2). CNBC на 31 октября 2014 года: с запуска в феврале у компании 30 000 команд, включая 73 000 платящих пользователей. Клиенты: Expedia, Pandora, Salesforce (S1).', 'Fast Company: Slack was born in August 2013, and 8,000 companies signed up in the first 24 hours (S2). CNBC as of October 31, 2014: since launching in February the company had 30,000 teams, including 73,000 paid individual users. Customers: Expedia, Pandora, Salesforce (S1).'), src: ['S1', 'S2'] },
            { t: 'warn', title: L('Расхождение: когда запуск', 'Discrepancy: when the launch was'), text: L('Fast Company ставит рождение Slack на август 2013 года (S2). CNBC пишет «с запуска в феврале» (S1), то есть про февраль 2014. Скорее всего, это разные события, закрытая стадия и публичный запуск, но источники этого явно не объясняют.', 'Fast Company puts Slack\'s birth in August 2013 (S2). CNBC says "since launching in February" (S1), meaning February 2014. These are probably different events, a preview stage and a public launch, but the sources do not say so explicitly.'), src: ['S1', 'S2'] },
            { t: 'gap', text: L('Не нашёл подтверждённых данных о первых 100 и 1000 пользователях. Есть только цифра 8 000 компаний за 24 часа из одного источника.', 'Not found: confirmed data on the first 100 and 1,000 users. There is only the 8,000 companies in 24 hours figure from one source.') },
        ] },
        { id: 'p4', n: '4', title: L('Деньги и оценка', 'Money and valuation'), kicker: L('От 1,12 млрд в 2014 до 27,7 млрд в 2020', 'From $1.12 billion in 2014 to $27.7 billion in 2020'), xp: 25, era: '2014-2021', blocks: [
            { t: 'p', text: L('31 октября 2014: раунд 120 млн долларов при оценке 1,12 млрд с учётом новых денег. Раунд возглавили Kleiner Perkins и Google Ventures, участвовали Andreessen Horowitz, Accel и Social+Capital (S1). VentureBeat: всего привлечено 180 млн (S3).', 'October 31, 2014: a $120 million round at a $1.12 billion valuation including the new money, led by Kleiner Perkins and Google Ventures, with Andreessen Horowitz, Accel and Social+Capital participating (S1). VentureBeat: $180 million raised in total (S3).'), src: ['S1', 'S3'] },
            { t: 'p', text: L('Fast Company: апрель 2016: 200 млн, оценка больше 3,8 млрд, 2,7 млн ежедневных пользователей, 800 тысяч платящих. Сентябрь 2017: 250 млн, оценка 5,1 млрд. Февраль 2019: последняя частная оценка 7,1 млрд (S2).', 'Fast Company: April 2016: $200 million, a valuation above $3.8 billion, 2.7 million daily users, 800,000 of them paid. September 2017: $250 million, a $5.1 billion valuation. February 2019: last private valuation $7.1 billion (S2).'), src: ['S2'] },
            { t: 'p', text: L('20 июня 2019 года Slack вышел на NYSE прямым листингом, без классического IPO (S6, S4). 1 декабря 2020 года Salesforce объявил о покупке за 27,7 млрд долларов, сделка закрыта 21 июля 2021 (S6).', 'On June 20, 2019 Slack listed on the NYSE through a direct listing, not a classic IPO (S6, S4). On December 1, 2020 Salesforce announced it would acquire Slack for $27.7 billion, and the deal closed on July 21, 2021 (S6).'), src: ['S4', 'S6'] },
            { t: 'chart', title: L('Оценка Slack, млрд долларов', 'Slack valuation, $ billions'), bars: [{ label: '2014', value: 1.12, text: '1.12' }, { label: '2016', value: 3.8, text: '3.8' }, { label: '2017', value: 5.1, text: '5.1' }, { label: '2019', value: 7.1, text: '7.1' }, { label: '2020', value: 27.7, text: '27.7' }], note: L('2014-2019: частные раунды, 2020: цена сделки с Salesforce, это не одно и то же.', '2014-2019: private rounds, 2020: the Salesforce deal price, which is not the same thing.'), src: ['S1', 'S2', 'S6'] },
        ] },
        { id: 'p5', n: '5', title: L('PMF и монетизация', 'PMF and monetization'), kicker: L('Рост, который удивил основателя', 'Growth that surprised the founder'), xp: 25, era: '2015-2019', blocks: [
            { t: 'p', text: L('Заголовок VentureBeat цитирует основателя: «Понятия не имею» на вопрос, почему Slack так быстро растёт (S3). Это его слова в интервью, мы не расшифровываем их глубже.', 'The VentureBeat headline quotes the founder: "I have no idea" when asked why Slack was exploding (S3). These are his words in an interview, and we do not read more into them.'), src: ['S3'] },
            { t: 'p', text: L('Форма S-1 (2019): за неделю, закончившуюся 31 января 2019 года, пользователи вместе провели в Slack больше 50 млн часов и отправили больше 1 млрд сообщений. В типичный рабочий день пользователи платящих клиентов были подключены в среднем девять часов и активно пользовались больше 90 минут (S5).', 'The 2019 S-1: in the week ended January 31, 2019 users spent more than 50 million hours actively in Slack and sent more than 1 billion messages. On a typical workday, users at paid customers averaged nine hours connected and more than 90 minutes actively using it (S5).'), src: ['S5'] },
            { t: 'p', text: L('В июле 2018 Slack купил HipChat и Stride у Atlassian и перевёл их пользователей на свою платформу (S2).', 'In July 2018 Slack bought HipChat and Stride from Atlassian and migrated their users to its platform (S2).'), src: ['S2'] },
        ] },
        { id: 'p6', n: '6', title: L('Первые принципы', 'First principles'), kicker: L('Что остаётся, если убрать игру', 'What remains if you remove the game'), xp: 25, era: '2013', blocks: [
            { t: 'p', text: L('До атомов. Команде нужен один общий поток разговоров с поиском и файлами. Игра оказалась носителем, а не продуктом. Люди, которые строили игру, были первыми и самыми требовательными пользователями чата.', 'To atoms. A team needs one shared stream of conversation with search and files. The game turned out to be a carrier, not the product. The people who built the game were the first and most demanding users of the chat.') },
            { t: 'ladder', title: L('Путь рассуждения, по документам', 'The path of reasoning, per the documents'), steps: [
                L('Атом: общий поток разговоров с поиском и файлами (S1)', 'Atom: a shared stream of conversation with search and files (S1)'),
                L('Носитель умер: игру закрыли (S1, S6)', 'The carrier died: the game was shut down (S1, S6)'),
                L('Инструмент выжил, потому что команда им пользовалась сама (S1, S4)', 'The tool survived because the team used it itself (S1, S4)'),
            ] },
            { t: 'card', icon: 'stone', title: L('Закон среды (кандидат в высеченные законы)', 'Law of the environment (candidate for the carved laws)'), label: L('ДЛЯ ФИНАЛЬНОГО РАЗДЕЛА', 'FOR THE FINAL SECTION'), rows: [
                { k: L('Формулировка', 'Wording'), v: L('Смотри, чем ты сам пользуешься каждый день: рабочий инструмент может оказаться ценнее главного продукта', 'Look at what you use every day yourself: a working tool may be worth more than the main product') },
                { k: L('Опора', 'Support'), v: L('Glitch закрыт, Slack вырос из его чата (S1, S4)', 'Glitch was closed, Slack grew out of its chat (S1, S4)') },
                { k: L('Оговорка', 'Caveat'), v: L('Это история одного выжившего. Сколько команд так и не нашли ценный инструмент внутри провала, мы не знаем', 'This is one survivor\'s story. How many teams never found a valuable tool inside a failure, we do not know') },
            ] },
        ] },
        { id: 'p7', n: '7', title: L('Что переносимо тебе', 'What transfers to you'), kicker: L('Три упражнения на этой неделе', 'Three exercises for this week'), xp: 25, blocks: [
            { t: 'card', icon: 'rules', title: L('Что делать', 'What to do'), label: L('ПЕРЕНОС', 'TRANSFER'), rows: [
                { k: L('1. Найди свой внутренний инструмент', '1. Find your internal tool'), v: L('Какой скрипт, таблицу или чат ты сделал для себя и без чего не можешь?', 'Which script, sheet or chat did you make for yourself and cannot live without?') },
                { k: L('2. Проверь на другом', '2. Test it on someone else'), v: L('Дай его одному знакомому на неделю и посмотри, вернётся ли он.', 'Give it to one acquaintance for a week and see whether they come back.') },
                { k: L('3. Реши, что закрыть', '3. Decide what to close'), v: L('Если основной проект не идёт, что из него стоит сохранить?', 'If the main project is not working, what from it is worth keeping?') },
            ] },
            { t: 'card', icon: 'bulb', title: L('Вопрос для себя', 'A question for yourself'), label: L('ПОДУМАЙ', 'THINK'), rows: [
                { k: L('Вопрос', 'Question'), v: L('Что я построил как средство, а оно ценнее цели?', 'What did I build as a means that is worth more than the goal?') },
            ] },
        ] },
    ];
    const PUZZLES: Puzzle[] = [
        { id: 'pz1', title: L('Пазл 1. Провал игры', 'Puzzle 1. The failed game'), xp: 20, src: ['S1'],
          setup: L('Твоя игра провалилась, но внутренним чатом команда довольна. Что делаешь?', 'Your game failed but the team loves its internal chat. What do you do?'),
          options: [
            { text: L('Чинишь игру', 'Fix the game'), verdict: L('Не то, что сделал Баттерфилд.', 'Not what Butterfield did.') },
            { text: L('Закрываешь игру, делаешь чат продуктом', 'Close the game, make the chat the product'), verdict: L('Так и вышло: Slack.', 'That is what happened: Slack.') },
            { text: L('Закрываешь компанию', 'Close the company'), verdict: L('Тоже вариант, но так Slack бы не появился.', 'Also an option, but then Slack would not exist.') },
          ], best: 1, fact: L('CNBC: команда закрыла Glitch и занялась Slack (S1).', 'CNBC: the team shut down Glitch and focused on Slack (S1).') },
    ];
    const DIALOGUE: DNode[] = [
        { id: 'd1', speaker: L('Инвестор (ИИ-реконструкция)', 'Investor (AI reconstruction)'), text: L('Ваша игра не взлетела. Почему мы должны верить в чат?', 'Your game did not take off. Why should we believe in a chat?'), choices: [
            { text: L('Мы сами им пользуемся каждый день, и вот первые команды', 'We use it ourselves every day, and here are the first teams'), reply: L('Это сильнее, чем обещания.', 'This is stronger than promises.'), good: true },
            { text: L('Игра ещё может получиться', 'The game may still work out'), reply: L('Игра закрыта, так что этот ответ ведёт в тупик (S1).', 'The game was closed, so this answer leads nowhere (S1).'), good: false },
        ] },
    ];
    return {
        id: 'slack', no: '24', company: 'Slack', year: '2013',
        title: L('Slack: как провалившаяся игра оставила после себя чат за 27,7 миллиарда', 'Slack: how a failed game left behind a chat worth $27.7 billion'),
        sub: L('Glitch закрыт, внутренний чат стал продуктом, оценка выросла с 1,12 до 27,7 млрд за шесть лет.', 'Glitch was closed, the internal chat became the product, and the valuation grew from $1.12 billion to $27.7 billion in six years.'),
        eyebrow: L('ГЛАВА 24', 'CHAPTER 24'),
        sources: SOURCES, parts: PARTS, puzzles: PUZZLES, dialogue: DIALOGUE,
        tips: [L('Смотри на свой рабочий инструмент.', 'Look at your own working tool.')],
    };
};

export const SLACK = build(false);
export const SLACK_EN = build(true);
