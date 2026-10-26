import type { Source, Part, Puzzle, DNode, Chapter } from './types';
import { CANDIDATES } from './laws-data';

type Law = { id: string; ru: string; en: string; whyRu: string; whyEn: string; cases: number[]; counterRu: string; counterEn: string; testRu: string; testEn: string };
const LAWS: Law[] = [
    { id: 'place', ru: 'Закон места', en: 'The law of place',
      whyRu: 'Побеждает не лучшая функция, а место, где человек уже живёт и откуда начинает следующее действие.', whyEn: 'The winner is not the best function but the place where a person already lives and from which he starts the next action.',
      cases: [1, 2, 23], counterRu: 'Для Apple причинность не доказана (гл. 2), Kaspi описывает себя сам (гл. 23).', counterEn: 'For Apple causality is not proven (ch. 2), and Kaspi describes itself (ch. 23).',
      testRu: 'Какое действие мои люди уже делают каждый день, и могу ли я стать местом, где оно происходит?', testEn: 'What do my people already do every day, and can I become the place where it happens?' },
    { id: 'motion', ru: 'Закон одного движения', en: 'The law of one motion',
      whyRu: 'Убери из действия всё лишнее, пока не останется движение, которое делают не думая.', whyEn: 'Remove everything extra from the action until one motion remains that people make without thinking.',
      cases: [9, 12, 13, 16], counterRu: 'Простой жест не гарантирует хороший результат (гл. 16), многие простые приложения не выросли (гл. 12).', counterEn: 'A simple gesture does not guarantee a good outcome (ch. 16), and many simple apps did not grow (ch. 12).',
      testRu: 'Сколько шагов от желания до результата у моего клиента, и какой первым можно убрать?', testEn: 'How many steps lie between desire and result for my customer, and which one can go first?' },
    { id: 'trust', ru: 'Закон доверия', en: 'The law of trust',
      whyRu: 'Там, где деньги и чужие люди, побеждает тот, кто спроектировал доверие и убрал скрытую цену, а не тот, у кого больше предложений.', whyEn: 'Where money and strangers meet, the winner designs trust and removes the hidden price, not the one with more listings.',
      cases: [3, 5, 17, 22], counterRu: 'Быстрый рост Revolut обогнал контроль и принёс три года ожидания лицензии (гл. 22).', counterEn: 'Revolut\'s fast growth outran its controls and brought a three-year licence wait (ch. 22).',
      testRu: 'За что мои клиенты переплачивают, сами не замечая, и как показать честную цену?', testEn: 'What do my customers overpay for without noticing, and how can I show the honest price?' },
    { id: 'wave', ru: 'Закон волны', en: 'The law of the wave',
      whyRu: 'Когда платформа, устройство или технология дают новую возможность, выигрывает продукт, который готов к ней раньше других.', whyEn: 'When a platform, device or technology gives a new capability, the product that is ready for it first wins.',
      cases: [8, 11, 12, 13, 20, 21], counterRu: 'Многие ставки на новую технологию не окупаются (гл. 8), а Telegram и WhatsApp делили одни и те же дни сбоя (гл. 11).', counterEn: 'Many bets on new technology do not pay off (ch. 8), and Telegram and WhatsApp shared the same outage days (ch. 11).',
      testRu: 'Какая возможность появилась за последние два года, и что я могу сделать с ней, чего вчера не мог никто?', testEn: 'Which capability appeared in the last two years, and what can I do with it that no one could yesterday?' },
    { id: 'wreck', ru: 'Закон обломков', en: 'The law of the wreckage',
      whyRu: 'Самая нужная деталь может жить внутри неудачного проекта. Береги деньги и внимание, чтобы успеть её заметить.', whyEn: 'The most needed part may live inside a failed project. Save money and attention long enough to notice it.',
      cases: [7, 14, 15, 24], counterRu: 'Это истории выживших. У Ситрона (гл. 15) были деньги и связи. Сколько команд не нашли ничего, мы не знаем (гл. 7, 24).', counterEn: 'These are survivors\' stories. Citron (ch. 15) had money and connections. How many teams found nothing we do not know (ch. 7, 24).',
      testRu: 'Что в моём неудачном проекте люди использовали бы, даже если проект закрыть?', testEn: 'What in my failed project would people still use if the project were closed?' },
    { id: 'baked', ru: 'Закон встроенного роста', en: 'The law of built-in growth',
      whyRu: 'Если награда лежит внутри продукта и почти ничего не стоит тебе, а основа простая и видна рано, рост не зависит от рекламы.', whyEn: 'If the reward sits inside the product and costs you almost nothing, and the base is simple and shown early, growth does not depend on ads.',
      cases: [6, 19, 26], counterRu: 'Для физического товара механизм другой (гл. 6), а рост без границ тяжёл для человека (гл. 19).', counterEn: 'For physical goods the mechanism differs (ch. 6), and growth without limits is heavy on a person (ch. 19).',
      testRu: 'Что я могу дать пользователю внутри продукта, чтобы он сам привёл следующего?', testEn: 'What can I give the user inside the product so that they bring the next one themselves?' },
    { id: 'payer', ru: 'Закон платящего', en: 'The law of the payer',
      whyRu: 'Кто платит, тот и определяет продукт. Человек, организация и инвестор тянут продукт в разные стороны. Выбирай платящего осознанно.', whyEn: 'Whoever pays shapes the product. A person, an organization and an investor pull in different directions. Choose the payer on purpose.',
      cases: [10, 20, 25], counterRu: 'Слова CEO о причинах поворота не проверены независимо, результат ещё не виден (гл. 25), эффект правил OpenAI спорен (гл. 20).', counterEn: 'The CEO\'s account of the turn is not independently checked and the result is not yet visible (ch. 25), and the effect of OpenAI\'s rules is disputed (ch. 20).',
      testRu: 'Если мои нынешние клиенты перестанут платить, кто будет платить?', testEn: 'If my current customers stop paying, who will?' },
    { id: 'control', ru: 'Закон скорости и контроля', en: 'The law of speed and control',
      whyRu: 'Рост, который опережает контроль, возвращается счётом: отчётностью, безопасностью, усталостью создателя. Заранее реши, что ты не отдаёшь ради скорости.', whyEn: 'Growth that outruns control comes back as a bill: reporting, safety, the creator\'s exhaustion. Decide in advance what you will not trade for speed.',
      cases: [4, 19, 21, 22], counterRu: 'Скорость тоже была причиной успеха. Мы не утверждаем, что медленнее было бы лучше (гл. 21).', counterEn: 'Speed was also a reason for the success. We do not claim that slower would have been better (ch. 21).',
      testRu: 'Что сломается у меня при росте в десять раз: учёт, безопасность, команда?', testEn: 'What breaks for me at tenfold growth: bookkeeping, safety, the team?' },
];

const GROUPS = [
    { ru: 'Среда и место', en: 'Environment and place', nos: [1, 2, 17, 23], noteRu: 'Продукт живёт внутри среды. Кто владеет средой, тот задаёт правила.', noteEn: 'A product lives inside an environment. Whoever owns the environment sets the rules.' },
    { ru: 'Боль, доверие и простота', en: 'Pain, trust and simplicity', nos: [3, 5, 9, 16, 22, 26], noteRu: 'Боль чаще скучная, чем эффектная. Побеждает тот, кто сделал её простой и честной.', noteEn: 'The pain is more often boring than glamorous. The winner makes it simple and honest.' },
    { ru: 'Рост без рекламы', en: 'Growth without ads', nos: [6, 11, 12, 13, 19], noteRu: 'Рост встроен в продукт или приходит с чужой волной.', noteEn: 'Growth is built into the product or arrives with someone else\'s wave.' },
    { ru: 'Провал, поворот и выживание', en: 'Failure, pivot and survival', nos: [7, 14, 15, 24, 18], noteRu: 'Выживают те, кто смотрит, что люди реально используют.', noteEn: 'The survivors look at what people really use.' },
    { ru: 'Технология, деньги и цена роста', en: 'Technology, money and the price of growth', nos: [4, 8, 10, 20, 21, 25], noteRu: 'Новая возможность и деньги дают скорость, а скорость отправляет счёт.', noteEn: 'A new capability and money give speed, and speed sends the bill.' },
];

const build = (en: boolean) => {
    const L = (ru: string, e: string) => (en ? e : ru);
    const SOURCES: Source[] = [
        { id: 'S1', kind: L('Наш синтез', 'Our synthesis'), title: L('Двадцать шесть глав Тома 1 этой книги, у каждой свои первичные источники', 'The twenty-six chapters of Volume 1 of this book, each with its own primary sources'), url: 'https://dreamplaybook.vercel.app' },
    ];
    const cand = (n: number) => CANDIDATES.find(c => Number(c.no) === n)!;
    const chap = (no: number, ru: string, e: string) => L(`гл. ${no} ${ru}`, `ch. ${no} ${e}`);

    // ---- Chapter 27: Закон среды ----
    const zParts: Part[] = [
        { id: 'p0', n: '0', title: L('Что такое закон среды', 'What the law of the environment is'), kicker: L('Откуда он берётся и чем не является', 'Where it comes from and what it is not'), xp: 20, era: '2026', blocks: [
            { t: 'p', text: L('В конце каждой из двадцати шести глав стоит карточка «Закон среды»: одна фраза о том, что повторяется в этой истории. Здесь мы собрали их все в одном месте и расставили по темам.', 'At the end of each of the twenty-six chapters there is a card, "Law of the environment": one sentence about what repeats in that story. Here we gather them all in one place and arrange them by theme.') },
            { t: 'p', text: L('Идея простая. Продукт не живёт сам по себе. Его окружают платформа, устройство, конкурент, регулятор, тот, кто платит, и привычка людей. Чаще всего решает среда, а не сам продукт. Закон среды это то, что остаётся, когда убираешь название компании.', 'The idea is simple. A product does not live on its own. It is surrounded by a platform, a device, a competitor, a regulator, a payer and people\'s habits. More often than not the environment decides, not the product itself. A law of the environment is what remains when you remove the company\'s name.') },
            { t: 'warn', title: L('Чем это не является', 'What this is not'), text: L('Это не доказанные законы и не научные выводы. Каждая формулировка вытекает из одной истории, а истории пишут про выживших. У каждой есть оговорка. Закон мы позволяем себе назвать только там, где то же самое повторилось минимум в двух разных главах. Это наш синтез.', 'These are not proven laws and not scientific conclusions. Each wording comes from one story, and stories are written about survivors. Each has a caveat. We allow ourselves to call something a law only where the same thing repeated in at least two different chapters. This is our synthesis.') },
            { t: 'fact', label: L('Материал', 'Material'), value: L('26 глав, 26 кандидатов, 5 тем, 8 законов в финале', '26 chapters, 26 candidates, 5 themes, 8 laws in the finale') },
        ] },
        ...GROUPS.map((g, i): Part => ({
            id: 'p' + (i + 1), n: String(i + 1), title: L(g.ru, g.en), kicker: L(g.noteRu, g.noteEn), xp: 20, era: '2026',
            blocks: [
                { t: 'p', text: L(g.noteRu, g.noteEn) },
                ...g.nos.map((n): Block2 => {
                    const c = cand(n);
                    return { t: 'card', icon: 'stone', title: `${c.no} ${c.co}`, label: L('КАНДИДАТ', 'CANDIDATE'), rows: [{ k: L('Формулировка', 'Wording'), v: L(c.ru, c.en || c.ru) }] };
                }),
            ],
        })),
        { id: 'p6', n: '6', title: L('Как пользоваться', 'How to use it'), kicker: L('Один вопрос про среду', 'One question about the environment'), xp: 25, blocks: [
            { t: 'card', icon: 'rules', title: L('Пять вопросов про свою среду', 'Five questions about your environment'), label: L('УПРАЖНЕНИЕ', 'EXERCISE'), rows: [
                { k: L('1. Место', '1. Place'), v: L('Где мои люди уже живут каждый день?', 'Where do my people already live every day?') },
                { k: L('2. Волна', '2. Wave'), v: L('Что изменилось в мире за два года, что даёт мне новую возможность?', 'What changed in the world in two years that gives me a new capability?') },
                { k: L('3. Платящий', '3. Payer'), v: L('Кто платит, и чего он хочет на самом деле?', 'Who pays, and what do they really want?') },
                { k: L('4. Конкурент', '4. Competitor'), v: L('Что он делает плохо и что может поменять завтра?', 'What does it do badly and what could it change tomorrow?') },
                { k: L('5. Счёт', '5. The bill'), v: L('Что сломается, если я вырасту в десять раз?', 'What breaks if I grow tenfold?') },
            ] },
        ] },
    ];
    // ---- Chapter 28: Высеченные законы ----
    const lParts: Part[] = [
        { id: 'p0', n: '0', title: L('Как мы высекаем', 'How we carve'), kicker: L('Правило отбора', 'The selection rule'), xp: 20, era: '2026', blocks: [
            { t: 'p', text: L('Высеченный закон это формулировка, которая повторилась минимум в двух разных главах, у которой есть названная оговорка и проверочный вопрос. Законы ниже получились из двадцати шести глав Тома 1.', 'A carved law is a wording that repeated in at least two different chapters, has a named caveat and a test question. The laws below came out of the twenty-six chapters of Volume 1.') },
            { t: 'warn', title: L('Честность', 'Honesty'), text: L('Выборка не случайная: мы писали про известные истории успеха. Закон здесь значит «закономерность в этих историях», а не «так будет у тебя». Контрпримеры указаны у каждого закона. Многие неудачи в нашу выборку не попали.', 'The sample is not random: we wrote about well-known success stories. A law here means "a pattern in these stories", not "this will happen to you". Counterpoints are listed for each law. Many failures are not in our sample.') },
            { t: 'fact', label: L('Законов', 'Laws'), value: String(LAWS.length) },
        ] },
        ...LAWS.map((l, i): Part => ({
            id: 'p' + (i + 1), n: String(i + 1), title: L(l.ru, l.en), kicker: L(l.whyRu, l.whyEn), xp: 20, era: '2026',
            blocks: [
                { t: 'card', icon: 'stone', title: L(l.ru, l.en), label: L('ВЫСЕЧЕНО', 'CARVED'), rows: [
                    { k: L('Закон', 'The law'), v: L(l.whyRu, l.whyEn) },
                    { k: L('Где повторилось', 'Where it repeated'), v: l.cases.map(n => `${n} ${cand(n).co}`).join(', ') },
                    { k: L('Против', 'Against'), v: L(l.counterRu, l.counterEn) },
                    { k: L('Проверь себя', 'Test yourself'), v: L(l.testRu, l.testEn) },
                ] },
                ...l.cases.slice(0, 3).map((n): Block2 => ({ t: 'p', text: L(`${n} ${cand(n).co}: ${cand(n).ru}.`, `${n} ${cand(n).co}: ${cand(n).en || cand(n).ru}.`) })),
            ],
        })),
        { id: 'p9', n: '9', title: L('Что дальше', 'What next'), kicker: L('Законы нужно проверять', 'Laws need testing'), xp: 25, blocks: [
            { t: 'p', text: L('Лучшая проверка закона это попытка его сломать. Возьми один закон, найди компанию, где он не сработал, и напиши, почему. Так закон станет твоим.', 'The best test of a law is trying to break it. Take one law, find a company where it failed, and write why. That is how a law becomes yours.') },
            { t: 'gap', text: L('Не сделано: проверка законов на неудачниках. В Томе 1 мы описывали только известные истории. Это задача для следующего тома.', 'Not done: testing the laws on failures. In Volume 1 we described only well-known stories. That is a task for the next volume.') },
        ] },
    ];
    const mk = (id: string, no: string, title: string, sub: string, parts: Part[]): Chapter => ({
        id, no, company: L('Синтез', 'Synthesis'), year: '2026', title, sub, eyebrow: L('ГЛАВА ' + no, 'CHAPTER ' + no),
        sources: SOURCES, parts, puzzles: [{ id: 'pz1', title: L('Пазл. Какой закон', 'Puzzle. Which law'), xp: 20, src: ['S1'],
            setup: L('Ты видишь, что конкурент закрыл свой сервис, и его пользователи ищут замену. Какой закон применим?', 'You see a competitor shut down its service and its users look for a replacement. Which law applies?'),
            options: [
                { text: L('Закон волны', 'The law of the wave'), verdict: L('Да, гл. 11 про Telegram. Но оговорка: сбой могут делить и другие.', 'Yes, ch. 11 on Telegram. But note the caveat: others can share the outage.') },
                { text: L('Закон платящего', 'The law of the payer'), verdict: L('Не совсем про это.', 'Not quite about this.') },
                { text: L('Закон обломков', 'The law of the wreckage'), verdict: L('Это про ценное внутри своего провала.', 'That is about the valuable part inside your own failure.') },
            ], best: 0, fact: L('Наш синтез, не доказательство.', 'Our synthesis, not proof.') }],
        dialogue: [{ id: 'd1', speaker: L('Скептик (ИИ-реконструкция)', 'Skeptic (AI reconstruction)'), text: L('Вы изучили только победителей. Почему я должен верить закону?', 'You studied only winners. Why should I believe a law?'), choices: [
            { text: L('Не должен. Проверь его на неудачниках, мы указали контраргументы', 'You should not. Test it on failures, we listed counterpoints'), reply: L('Это честный ответ.', 'This is an honest answer.'), good: true },
            { text: L('Потому что это закон', 'Because it is a law'), reply: L('Так закон превращается в догму.', 'That turns a law into dogma.'), good: false },
        ] }],
        tips: [L('Проверь закон на неудачнике.', 'Test the law on a failure.')],
    } as Chapter);

    return [
        mk('zakon', '27', L('Закон среды: что повторяется в двадцати шести историях', 'The law of the environment: what repeats across twenty-six stories'), L('Двадцать шесть кандидатов в законы, пять тем и вопросы про твою среду.', 'Twenty-six candidate laws, five themes and questions about your environment.'), zParts),
        mk('laws', '28', L('Высеченные законы', 'The carved laws'), L('Восемь закономерностей с контрпримерами и проверочными вопросами.', 'Eight patterns with counterpoints and test questions.'), lParts),
    ];
};
type Block2 = Part['blocks'][number];
const ru = build(false), enc = build(true);
export const ZAKON = ru[0], LAWS_CH = ru[1], ZAKON_EN = enc[0], LAWS_EN = enc[1];
