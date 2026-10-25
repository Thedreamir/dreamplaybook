import type { Source, Part, Puzzle, DNode, Chapter } from './types';

const SOURCES: Source[] = [
    { id: 'S1', kind: 'Пресса', title: 'The Guardian: Musical.ly, the craze turning pop fans into stars (4 сентября 2016): Cicada, 250 тыс. долларов, 20 тыс. в банке, 95 млн пользователей', url: 'https://www.theguardian.com/technology/2016/sep/04/musical-ly-lip-synch-video-app-turns-pop-fans-into-stars' },
    { id: 'S2', kind: 'Пресса', title: 'Forbes: From Musers To Money (11 мая 2017): образовательная соцсеть, Lip Sync Battle, раунд около 100 млн при оценке около 500 млн, подарки с декабря 2016', url: 'https://www.forbes.com/sites/natalierobehmed/2017/05/11/from-musers-to-money-inside-video-app-musical-lys-coming-of-age/' },
    { id: 'S3', kind: 'Пересказ подкаста', title: 'Class Central по подкасту Acquired: Алекс Чжу в SAP с июня 2012, образование и MOOC, короткие видео', url: 'https://www.classcentral.com/report/moocs-tiktok/' },
    { id: 'S4', kind: 'Пресса', title: 'Reuters: ByteDance buying Musical.ly for up to 1 billion (10 ноября 2017)', url: 'https://www.reuters.com/article/lifestyle/chinas-bytedance-buying-lip-sync-app-musically-for-up-to-1-bln-idUSKBN1DA0BQ/' },
    { id: 'S5', kind: 'Пресса', title: 'New York Times DealBook: Musical.ly sold to Bytedance for 800 million to 1 billion (10 ноября 2017): 120 млн пользователей Toutiao и около 60 млн Musical.ly в США и Европе', url: 'https://www.nytimes.com/2017/11/10/business/dealbook/musically-sold-app-video.html' },
    { id: 'S6', kind: 'Пресса', title: 'TechCrunch: Musical.ly is merging into sister app TikTok (2 августа 2018)', url: 'https://techcrunch.com/2018/08/02/musically-tiktok/' },
    { id: 'S7', kind: 'Первичка', title: 'ByteDance: история компании: основана в 2012, Toutiao в августе 2012, Douyin в сентябре 2016', url: 'https://www.bytedance.com/en/' },
    { id: 'S8', kind: 'Пресса', title: 'Reuters: Timeline: ByteDance founder who put TikTok on global map to quit as CEO (2021)', url: 'https://www.reuters.com/article/technology/timeline-bytedance-founder-who-put-tiktok-on-global-map-to-quit-as-ceo-idUSKCN2D111D/' },
    { id: 'S9', kind: 'Первичка', title: 'TikTok Newsroom: Thanks a billion! (27 сентября 2021): больше 1 млрд в месяц', url: 'https://newsroom.tiktok.com/en-us/1-billion-people-on-tiktok' },
    { id: 'S10', kind: 'Первичка', title: 'FTC: Musical.ly (ныне TikTok) заплатит 5,7 млн долларов по делу о детских данных (27 февраля 2019)', url: 'https://www.ftc.gov/news-events/news/press-releases/2019/02/video-social-networking-app-musically-agrees-settle-ftc-allegations-it-violated-childrens-privacy' },
    { id: 'S11', kind: 'Пресса', title: 'Reuters: ByteDance, выручка 2021 около 58 млрд долларов (+70%), 2020 год 34,3 млрд (по источникам)', url: 'https://www.reuters.com/business/tiktok-owner-bytedance-appoints-lawyer-julie-gao-new-cfo-2022-04-25/' },
    { id: 'S12', kind: 'Пресса', title: 'Reuters: China\'s Bytedance scrubs Musical.ly brand in favor of TikTok (2018): купили почти за 1 млрд, TikTok запущен в 2016 по версии статьи', url: 'https://www.reuters.com/article/technology/chinas-bytedance-scrubs-musically-brand-in-favor-of-tiktok-idUSKBN1KN0BN/' },
    { id: 'S13', kind: 'Пресса', title: 'Caixin: Upstart ByteDance takes on China\'s internet goliaths (11 ноября 2018): раунд при оценке 75 млрд', url: 'https://www.caixinglobal.com/2018-11-11/in-depth-upstart-bytedance-takes-on-chinas-internet-goliaths-101345485.html' },
];

const PARTS: Part[] = [
    {
        id: 'p0', n: '0', title: 'Пролог: приложение для уроков, которое стало лентой для всех', kicker: 'Почему TikTok стоит в томе рядом с Instagram и Discord', xp: 20,
        blocks: [
            { t: 'p', text: 'TikTok объявил в сентябре 2021 года, что больше 1 млрд человек пользуются им каждый месяц (S9). Начиналось это как образовательное приложение Cicada, у которого осталось около 20 тыс. долларов в банке (S1).', src: ['S1', 'S9'] },
            { t: 'fact', label: 'Пользователи в месяц, сентябрь 2021', value: 'больше 1 млрд, по заявлению TikTok', src: ['S9'] },
            { t: 'p', text: 'Вопрос главы: что делать, если продукт не растёт, а люди пользуются им не так, как ты придумал.' },
            { t: 'card', icon: 'target', title: 'Как читать главу', label: 'МЕТКИ ЧЕСТНОСТИ', rows: [
                { k: '[S1...S12]', v: 'Источник. Нажми на метку, чтобы увидеть, откуда факт.' },
                { k: 'Не нашёл', v: 'Данных в открытых источниках нет. Автор их не придумывает.' },
                { k: 'ИИ-реконструкция', v: 'Сцена или реплика придуманы для тренировки. Это не слова реальных людей.' },
                { k: 'Расхождение', v: 'Если источники спорят, показываем обе версии.' },
            ] },
        ],
    },
    {
        id: 'p1', n: '1', title: 'Генезис основателей', kicker: 'Два приложения, две команды, один рынок', xp: 20,
        blocks: [
            { t: 'p', text: 'У TikTok два корня. Первый: китайские предприниматели Алекс Чжу и Лую Ян. Forbes пишет, что они начали с образовательной соцсети и быстро поняли, что обучающие видео не вызывают интереса (S2). По Class Central со ссылкой на подкаст Acquired, Чжу с июня 2012 года работал в SAP «футуристом» по теме образования, когда о MOOC начали писать из-за низкого процента завершения курсов (S3).', src: ['S2', 'S3'] },
            { t: 'p', text: 'Второй корень: ByteDance. Её основали в 2012 году Чжан Имин и Лян Рубо. Toutiao запустили в августе 2012, Douyin в сентябре 2016 (S7).', src: ['S7'] },
            { t: 'video', title: 'Acquired: TikTok (подкаст, 9 декабря 2019)', note: 'Подробный разбор истории Musical.ly и ByteDance. Открывается на сайте подкаста.', url: 'https://www.acquired.fm/episodes/tiktok' },
            { t: 'warn', title: 'Расхождение: когда запустили TikTok', text: 'Reuters в сводке 2021 года пишет: Douyin 2016, TikTok 2017 (S8). Reuters в статье 2018 года пишет: TikTok запущен в 2016 (S12). Вероятнее всего, в 2016 году запустили китайскую версию Douyin, а международный TikTok вышел в 2017. Это наше объяснение, а не цитата.', src: ['S8', 'S12'] },
            { t: 'ladder', title: 'Лестница абстракции: откуда пришла идея', steps: [
                'Конкретно: короткие обучающие видео про разные темы (S1)',
                'Закономерность: людей привлекает не урок, а музыка и общение (S2)',
                'Принцип: смотри, зачем люди реально открывают приложение (S2)',
                'Применение: 15-секундные клипы под музыку (S12)',
            ] },
        ],
    },
    {
        id: 'p2', n: '2', title: 'Поиск боли', kicker: 'Пивот от последних 20 тысяч долларов', xp: 20,
        blocks: [
            { t: 'p', text: 'Guardian пишет: Musical.ly выросла из провала Cicada, образовательного приложения с короткими видео. По рассказу, когда в банке оставалось 20 тыс. долларов, основатели сделали последний пивот, чтобы оправдать 250 тыс. долларов венчурных инвестиций (S1).', src: ['S1'] },
            { t: 'p', text: 'Forbes приводит слова Чжу: по четвергам был всплеск загрузок. Spike TV показывал «Lip Sync Battle» по четвергам, и после шоу люди искали в App Store «lip sync» и находили приложение (S2).', src: ['S2'] },
            { t: 'warn', title: 'Что мы не знаем', text: 'Рассказ про 20 тыс. долларов в Guardian подан как «рассказ» («the story goes»), не как документ. Подтвердить числа из первичных источников нам не удалось.', src: ['S1'] },
        ],
    },
    {
        id: 'p3', n: '3', title: 'MVP и первые люди', kicker: 'Подростки, Vine и охота по ключевым словам', xp: 25,
        blocks: [
            { t: 'p', text: 'Приложение вышло в 2014 году. К сентябрю 2016 года у Musical.ly, по Guardian, было около 95 млн пользователей (S1). К маю 2017 года, по Forbes со слов компании, больше 200 млн зарегистрированных, в основном 13-21 год (S2).', src: ['S1', 'S2'] },
            { t: 'p', text: 'Forbes связывает рост ещё и с закрытием Vine: компания объявила о закрытии в октябре 2016 года, и аудитория пошла в соседние приложения (S2).', src: ['S2'] },
            { t: 'ladder', title: 'Лестница первых людей', steps: [
                '2014: выход приложения, образовательный формат не взлетел (S1, S2)',
                '2015-2016: всплески по четвергам после Lip Sync Battle (S2)',
                'Сентябрь 2016: около 95 млн пользователей (S1)',
                'Май 2017: больше 200 млн зарегистрированных (S2)',
                'Цифры первых 100, 1000 и 10 000 пользователей: не нашёл в открытых источниках',
            ] },
            { t: 'gap', text: 'Не нашёл данных о первых 100, 1000 и 10 000 пользователей. Не придумываем.' },
            { t: 'chart', title: 'Musical.ly и TikTok: пользователи (шкала логарифмическая)', bars: [{ label: 'Сен 2016', value: 95000000, text: '95 млн' }, { label: 'Май 2017', value: 200000000, text: '200 млн+' }, { label: 'Сен 2021', value: 1000000000, text: '1 млрд+' }], note: 'Разные метрики: 95 млн пользователей (Guardian), больше 200 млн зарегистрированных (Forbes), 1 млрд активных в месяц (TikTok).', src: ['S1', 'S2', 'S9'] },
        ],
    },
    {
        id: 'p4', n: '4', title: 'Деньги, питч и оценка', kicker: 'От 250 тысяч до сделки почти на миллиард', xp: 25,
        blocks: [
            { t: 'p', text: 'Forbes по источникам: в 2016 году Musical.ly закрыла раунд около 100 млн долларов под руководством GGV Capital, оценка около 500 млн, всего привлечено больше 116 млн (оценка Forbes). Компания комментировать отказалась (S2).', src: ['S2'] },
            { t: 'p', text: 'В ноябре 2017 года ByteDance купила Musical.ly. Reuters называет «до 1 млрд долларов» (S4), NYT называет от 800 млн до 1 млрд со ссылкой на источник (S5), а в 2018 году Reuters пишет «почти 1 млрд» (S12). Точная цена в открытых источниках не названа.', src: ['S4', 'S5', 'S12'] },
            { t: 'warn', title: 'Расхождение: цена сделки', text: 'Три формулировки: до 1 млрд (Reuters, 2017), от 800 млн до 1 млрд (NYT) и почти 1 млрд (Reuters, 2018). Все ссылаются на источники, а не на документ. Мы показываем диапазон.', src: ['S4', 'S5', 'S12'] },
            { t: 'card', icon: 'chart', title: 'Деньги по источникам', label: 'ОТ 250 ТЫС. ДО 1 МЛРД', rows: [
                { k: 'Cicada', v: '250 тыс. венчурных, 20 тыс. в банке (S1)' },
                { k: '2016', v: 'около 100 млн при оценке около 500 млн, Forbes по источникам (S2)' },
                { k: 'Ноябрь 2017', v: 'сделка от 800 млн до 1 млрд (S4, S5)' },
                { k: 'Октябрь 2018', v: 'ByteDance оценили в 75 млрд, по Caixin (S13)' },
            ] },
        ],
    },
    {
        id: 'p5', n: '5', title: 'PMF, монетизация, экосистема', kicker: 'Слияние двух приложений и 58 млрд выручки', xp: 25,
        blocks: [
            { t: 'p', text: 'NYT пишет: сделка соединяет 120 млн пользователей Toutiao в Китае и около 60 млн пользователей Musical.ly в США и Европе (S5). 2 августа 2018 года Musical.ly влилась в TikTok вместе с аккаунтами и данными (S6).', src: ['S5', 'S6'] },
            { t: 'img', file: '/img/tt-news-merge.jpg', alt: 'Заголовок TechCrunch о слиянии Musical.ly и TikTok', caption: 'Слияние приложений, TechCrunch, 2 августа 2018. Скриншот заголовка.', credit: 'TechCrunch', url: 'https://techcrunch.com/2018/08/02/musically-tiktok/' },
            { t: 'p', text: 'Деньги: с декабря 2016 года Musical.ly позволяла платить авторам прямо в приложении через виртуальные подарки (S2). Выручка ByteDance по данным Reuters: около 58 млрд долларов в 2021 году (рост 70%) и 34,3 млрд в 2020 (S11). Это данные по всей компании, а не по TikTok отдельно.', src: ['S2', 'S11'] },
            { t: 'p', text: '27 февраля 2019 года FTC объявила: Musical.ly (ныне TikTok) заплатит 5,7 млн долларов за сбор данных детей младше 13 лет без согласия родителей (S10). 27 сентября 2021 года TikTok объявил о 1 млрд человек в месяц (S9).', src: ['S9', 'S10'] },
            { t: 'img', file: '/img/tt-news-ftc.jpg', alt: 'Пресс-релиз FTC о Musical.ly', caption: 'Пресс-релиз FTC от 27 февраля 2019 года. Скриншот заголовка.', credit: 'FTC', url: 'https://www.ftc.gov/news-events/news/press-releases/2019/02/video-social-networking-app-musically-agrees-settle-ftc-allegations-it-violated-childrens-privacy' },
            { t: 'gap', text: 'Не нашёл: доход TikTok отдельно от ByteDance и разбивку по странам в открытых источниках. Мы их не приводим.' },
        ],
    },
    {
        id: 'p6', n: '6', title: 'Первые принципы', kicker: 'Что остаётся, если убрать музыку и подростков', xp: 25,
        blocks: [
            { t: 'p', text: 'Разберём до атомов. Что даёт TikTok? Короткий клип, который можно снять за минуту без навыков. Остальное, музыка, эффекты, подарки, добавлялось вокруг. Cicada делала ставку на обучение, люди выбрали развлечение.' },
            { t: 'ladder', title: 'Путь рассуждения, по документам', steps: [
                'Атом: короткое видео, которое легко снять (S2)',
                'Лишнее: формат урока (S1, S2)',
                'Спрос: поиск «lip sync» после телешоу (S2)',
                'Деньги: подарки авторам, затем бизнес ByteDance (S2, S11)',
            ] },
            { t: 'card', icon: 'stone', title: 'Закон среды (кандидат в высеченные законы)', label: 'ДЛЯ ФИНАЛЬНОГО РАЗДЕЛА', rows: [
                { k: 'Формулировка', v: 'Если продукт не растёт, смотри, зачем люди его реально открывают, и переделай его под это, пока не закончились деньги' },
                { k: 'Опора', v: 'Cicada стала Musical.ly после последнего пивота (S1), рост шёл от случайного поискового запроса (S2)' },
                { k: 'Оговорка', v: 'Это рассказ про одну компанию. Многие пивоты не спасают, а число неудавшихся мы не знаем' },
            ] },
        ],
    },
    {
        id: 'p7', n: '7', title: 'Что переносимо тебе', kicker: 'Три упражнения на этой неделе', xp: 25,
        blocks: [
            { t: 'card', icon: 'rules', title: 'Что делать', label: 'ПЕРЕНОС', rows: [
                { k: '1. Найди реальное использование', v: 'Зачем люди на самом деле открывают твой продукт? Спроси пять человек и запиши дословно.' },
                { k: '2. Найди внешний триггер', v: 'Что снаружи, например шоу, новость, праздник, приводит тебе людей?' },
                { k: '3. Посчитай запас', v: 'Сколько месяцев у тебя до нуля? Пивот делают, пока ещё есть деньги, не после.' },
            ] },
            { t: 'card', icon: 'bulb', title: 'Вопрос для себя', label: 'ПОДУМАЙ', rows: [
                { k: 'Вопрос', v: 'Если бы мне пришлось начать продукт с нуля завтра, оставил бы я эту функцию?' },
            ] },
        ],
    },
];

const PUZZLES: Puzzle[] = [
    {
        id: 'pz1', title: 'Пазл 1. Деньги заканчиваются', xp: 20, src: ['S1'],
        setup: 'Образовательное приложение не растёт. В банке 20 тыс. долларов. Что делаешь?',
        options: [
            { text: 'Закрываешь компанию', verdict: 'Они сделали последний пивот.' },
            { text: 'Пробуешь другой формат на тех же людях и тех же деньгах', verdict: 'Так и вышло: Musical.ly.' },
            { text: 'Просишь ещё денег на тот же продукт', verdict: 'Не описано.' },
        ],
        best: 1, fact: 'Cicada сделала последний пивот и стала Musical.ly (Guardian, по рассказу).',
    },
    {
        id: 'pz2', title: 'Пазл 2. Странный всплеск', xp: 20, src: ['S2'],
        setup: 'Каждый четверг вечером загрузки растут. Ты не знаешь почему. Что делаешь?',
        options: [
            { text: 'Не обращаешь внимания', verdict: 'Они обратили.' },
            { text: 'Выясняешь причину и подстраиваешься под неё', verdict: 'Причиной оказалось шоу Lip Sync Battle и поиск «lip sync».' },
            { text: 'Покупаешь рекламу в четверг', verdict: 'Не описано.' },
        ],
        best: 1, fact: 'Всплеск по четвергам шёл после Lip Sync Battle (Чжу, по Forbes).',
    },
    {
        id: 'pz3', title: 'Пазл 3. Покупатель из другой страны', xp: 25, src: ['S4', 'S5'],
        setup: 'Компания из другой страны хочет купить тебя, чтобы войти на рынок, где у тебя 60 млн пользователей. Что просишь?',
        options: [
            { text: 'Слияние с их продуктом и большую цену', verdict: 'Сделка от 800 млн до 1 млрд, потом слияние с TikTok.' },
            { text: 'Отказываешься', verdict: 'Сделка состоялась.' },
            { text: 'Ждёшь год', verdict: 'Не описано.' },
        ],
        best: 0, fact: 'ByteDance купила Musical.ly в ноябре 2017 года и влила её в TikTok в августе 2018.',
    },
];

const DIALOGUE: DNode[] = [
    {
        id: 'd1', speaker: 'Инвестор (ИИ-реконструкция)',
        text: 'Образовательные видео у вас не растут. Что дальше?',
        choices: [
            { text: 'Смотрим, чем люди пользуются сами, и переделываем продукт под это.', reply: 'Так и начался Musical.ly.', good: true, next: 'd2' },
            { text: 'Вкладываем в рекламу.', reply: 'Продукт не растёт, реклама не спасёт.', good: false, next: 'd2' },
            { text: 'Ждём.', reply: 'Деньги кончатся.', good: false, next: 'd2' },
        ],
    },
    {
        id: 'd2', speaker: 'Наставник (ИИ-реконструкция)',
        text: 'Рост идёт по четвергам. Что делаешь?',
        choices: [
            { text: 'Выясняю причину и усиливаю её.', reply: 'Это путь Чжу: нашёл поиск «lip sync» после шоу.', good: true, next: 'd3' },
            { text: 'Игнорирую.', reply: 'Всплеск был подсказкой.', good: false, next: 'd3' },
            { text: 'Прошу инвесторов объяснить.', reply: 'Они не знают вашего продукта.', good: false, next: 'd3' },
        ],
    },
    {
        id: 'd3', speaker: 'Покупатель (ИИ-реконструкция)',
        text: 'Мы покупаем вас и сливаем с нашим приложением. Согласны?',
        choices: [
            { text: 'Да, если пользователи и аккаунты переносятся целиком.', reply: 'Так и было: аккаунты и данные перенесли.', good: true },
            { text: 'Нет, сохраняем бренд.', reply: 'Бренд Musical.ly закрыли.', good: false },
            { text: 'Торгуемся без условий.', reply: 'Не описано.', good: false },
        ],
    },
];

const TIPS = ['Что такое Cicada?', 'Почему пивот?', 'Что такое Lip Sync Battle?', 'Сколько стоила сделка?', 'Что не нашёл автор?'];

export const TIKTOK: Chapter = {
    id: 'tiktok', no: '14', company: 'TikTok', year: '2014',
    title: 'TikTok: как приложение для уроков стало лентой для миллиарда',
    sub: 'Cicada, последние 20 тысяч долларов, четверги с Lip Sync Battle и сделка почти на миллиард.',
    eyebrow: 'ГЛАВА 14',
    sources: SOURCES, parts: PARTS, puzzles: PUZZLES, dialogue: DIALOGUE, tips: TIPS,
};
