import type { Source, Part, Puzzle, DNode, Chapter } from './types';

const build = (en: boolean): Chapter => {
    const L = (ru: string, e: string) => (en ? e : ru);
    const D = L('Первичка', 'Primary');
    const SOURCES: Source[] = [
        { id: 'S1', kind: D, title: L('Kaspi.kz: проспект IPO (форма 424B4, SEC, 18 января 2024), включая письмо Михеила Ломтадзе', 'Kaspi.kz: IPO prospectus (Form 424B4, SEC, January 18, 2024), including the letter from Mikheil Lomtadze'), url: 'https://www.sec.gov/Archives/edgar/data/1985487/000119312524011265/d425809d424b4.htm' },
        { id: 'S2', kind: D, title: L('Kaspi.kz, раздел для инвесторов: «История инноваций» (хронология продуктов 2012-2019)', 'Kaspi.kz investor site: "History of Innovation" (product timeline 2012-2019)'), url: 'https://ir.kaspi.kz/about/history/' },
    ];
    const PARTS: Part[] = [
        { id: 'p0', n: '0', title: L('Пролог: одно приложение вместо десяти', 'Prologue: one app instead of ten'), kicker: L('Почему именно Казахстан, и почему это глава для тебя', 'Why Kazakhstan, and why this chapter is for you'), xp: 20, era: '2012-2024', blocks: [
            { t: 'p', text: L('Kaspi.kz это казахстанская компания, которая в январе 2024 года вышла на биржу Nasdaq под тикером KSPI по цене 92 доллара за акцию (S1). Это не приложение для одной задачи. По проспекту, у компании два суперприложения: для потребителей и для предпринимателей (S1).', 'Kaspi.kz is a Kazakhstani company that listed on Nasdaq in January 2024 under the ticker KSPI at $92 per share (S1). It is not a single-task app. Per the prospectus, the company has two super apps: one for consumers and one for merchants (S1).'), src: ['S1'] },
            { t: 'fact', label: L('Аудитория, сентябрь 2023', 'Audience, September 2023'), value: L('13,5 млн средних месячных активных пользователей, из них 65% заходят ежедневно', '13.5 million average monthly active users, 65% of them daily'), src: ['S1'] },
            { t: 'warn', title: L('Границы главы', 'Limits of the chapter'), text: L('Эта глава опирается на два первичных документа: проспект IPO и хронологию на сайте компании. Это слова самой компании, а не независимое расследование. Данные на конец 2023 года.', 'This chapter rests on two primary documents: the IPO prospectus and the timeline on the company site. These are the company\'s own words, not an independent investigation. Data is as of late 2023.') },
            { t: 'card', icon: 'target', title: L('Как читать главу', 'How to read the chapter'), label: L('МЕТКИ ЧЕСТНОСТИ', 'HONESTY LABELS'), rows: [
                { k: '[S1, S2]', v: L('Источник. Нажми на метку, чтобы увидеть, откуда факт.', 'Source. Tap the label to see where the fact comes from.') },
                { k: L('Не нашёл', 'Not found'), v: L('Данных в открытых источниках нет. Автор их не придумывает.', 'The data is not in open sources. The author does not invent it.') },
                { k: L('ИИ-реконструкция', 'AI reconstruction'), v: L('Сцена или реплика придуманы для тренировки.', 'A scene or line invented for practice.') },
            ] },
        ] },
        { id: 'p1', n: '1', title: L('Генезис основателей', 'Genesis of the founders'), kicker: L('Кто стоит за компанией', 'Who is behind the company'), xp: 20, era: '2012', blocks: [
            { t: 'p', text: L('В проспекте продающими акционерами названы Вячеслав Ким, Михеил Ломтадзе и Asia Equity Partners Limited (S1). Ломтадзе подписывает письмо как CEO и сооснователь (S1).', 'The prospectus names Vyacheslav Kim, Mikheil Lomtadze and Asia Equity Partners Limited as the selling shareholders (S1). Lomtadze signs the letter as CEO and co-founder (S1).'), src: ['S1'] },
            { t: 'gap', text: L('Не нашёл в этих двух источниках: что именно подтолкнуло основателей, их первые разговоры, ранние деньги. Эти сведения не придумываем, их можно искать в интервью.', 'Not found in these two sources: what exactly pushed the founders, their first conversations, early money. We do not invent these details, they can be searched for in interviews.') },
        ] },
        { id: 'p2', n: '2', title: L('Боль и продукты шаг за шагом', 'Pain and products step by step'), kicker: L('Хронология самой компании', 'The company\'s own timeline'), xp: 20, era: '2012-2019', blocks: [
            { t: 'p', text: L('Компания сама публикует хронологию. 2012: оплата счетов и электронный кошелёк. 2013: расширение сети терминалов для пополнения кошельков. 2014: платформа маркетплейса, Kaspi Bonus, онлайн-кредиты на покупки. 2015: дебетовая карта Kaspi Gold и онлайн-автокредиты с Kolesa.kz. 2016: Kaspi Red. 2017: мобильное приложение, переводы по номеру телефона и по карте, Kaspi Maps. 2018: переводы по QR, бизнес-приложение, банкоматы с распознаванием лица. 2019: покупки в мобильном приложении и терминал с QR для продавцов (S2).', 'The company publishes its own timeline. 2012: bill payments and an e-wallet. 2013: expansion of the terminal network for topping up wallets. 2014: a marketplace platform, Kaspi Bonus, online consumer finance. 2015: the Kaspi Gold debit card and online car loans with Kolesa.kz. 2016: Kaspi Red. 2017: a mobile app, P2P transfers by phone number and by card, Kaspi Maps. 2018: QR transfers, a business app, ATMs with face recognition. 2019: purchases in the mobile app and a QR payment terminal for merchants (S2).'), src: ['S2'] },
            { t: 'ladder', title: L('Лестница: от платежей к экосистеме', 'Ladder: from payments to ecosystem'), steps: [
                L('2012: платежи и кошелёк (S2)', '2012: payments and wallet (S2)'),
                L('2014: маркетплейс и кредиты на покупки (S2)', '2014: marketplace and purchase finance (S2)'),
                L('2017: приложение и переводы (S2)', '2017: the app and transfers (S2)'),
                L('2019: покупки и QR для продавцов (S2)', '2019: purchases and QR for merchants (S2)'),
            ] },
            { t: 'warn', title: L('Оговорка', 'Caveat'), text: L('Хронология пишет сама компания, это перечень запусков, а не оценка их успеха. Что из этого приживалось, а что нет, в источнике не сказано.', 'The timeline is written by the company and lists launches, not how successful they were. Which ones took hold and which did not is not stated in the source.') },
        ] },
        { id: 'p3', n: '3', title: L('MVP и первые люди', 'MVP and the first people'), kicker: L('Что мы знаем о первых пользователях', 'What we know about the first users'), xp: 20, era: '2012-2017', blocks: [
            { t: 'gap', text: L('Не нашёл в открытых источниках: число первых 100, 1000 и 10 000 пользователей. В проспекте есть данные за 2023 год, но не по первым месяцам.', 'Not found in open sources: the numbers of the first 100, 1,000 and 10,000 users. The prospectus has 2023 data but not the first months.') },
            { t: 'p', text: L('Что видно из хронологии: вход шёл через повседневные платежи (оплата счетов, кошелёк, терминалы), и только через пять лет появилось мобильное приложение (S2).', 'What the timeline shows: entry came through everyday payments (bill payments, wallet, terminals), and the mobile app appeared only five years later (S2).'), src: ['S2'] },
        ] },
        { id: 'p4', n: '4', title: L('Деньги и оценка', 'Money and valuation'), kicker: L('IPO на миллиард долларов, где компания не получила ничего', 'A billion-dollar IPO where the company received nothing'), xp: 25, era: '2022-2024', blocks: [
            { t: 'p', text: L('Проспект от 18 января 2024: 11,3 млн ADS по 92 доллара, всего 1 039,6 млн долларов. Предлагают акции продающие акционеры, компания «не получает доходов от этого предложения» (S1). После вычета скидки андеррайтеров они получают 1 003,2 млн (S1).', 'Prospectus dated January 18, 2024: 11.3 million ADSs at $92, a total of $1,039.6 million. The shares are offered by the selling shareholders, and the company "will not receive any of the proceeds" (S1). After the underwriting discount they receive $1,003.2 million (S1).'), src: ['S1'] },
            { t: 'p', text: L('За 2022 год консолидированная выручка 1 271 млрд тенге (2 678 млн долларов), чистая прибыль 589 млрд тенге (1 241 млн долларов). Рост к 2021 году: 44% выручка и 35% прибыль (S1). Долларовые суммы пересчитаны компанией по её курсу.', 'For 2022, consolidated revenue was ₸1,271 billion ($2,678 million), net income ₸589 billion ($1,241 million). Growth vs 2021: 44% revenue and 35% net income (S1). Dollar figures are converted by the company at its own rate.'), src: ['S1'] },
            { t: 'chart', title: L('Выручка и чистая прибыль 2022, млн долларов (по расчёту компании)', '2022 revenue and net income, $ millions (company conversion)'), bars: [{ label: L('Выручка', 'Revenue'), value: 2678, text: '2,678' }, { label: L('Прибыль', 'Net income'), value: 1241, text: '1,241' }], note: L('Проспект, раздел о бизнесе.', 'Prospectus, business overview.'), src: ['S1'] },
            { t: 'warn', title: L('Что это не значит', 'What this does not mean'), text: L('Оценка при IPO в этих источниках не приводится. Цена 92 доллара за акцию это не оценка всей компании, и мы её не вычисляем без числа акций.', 'The IPO valuation is not given in these sources. The $92 per share price is not a company valuation, and we do not compute one without the share count.') },
        ] },
        { id: 'p5', n: '5', title: L('PMF, монетизация, экосистема', 'PMF, monetization, ecosystem'), kicker: L('Два суперприложения и частота использования', 'Two super apps and frequency of use'), xp: 25, era: '2023', blocks: [
            { t: 'p', text: L('По проспекту, предложение включает платежи, маркетплейс и финтех-решения для потребителей и продавцов. Компания связывает рост с сетевыми эффектами (S1). На 30 сентября 2023 года в среднем приходилось 68 транзакций в месяц на активного потребителя (S1).', 'Per the prospectus, the offering includes payments, marketplace and fintech solutions for consumers and merchants. The company links growth to network effects (S1). As of September 30, 2023 there were 68 monthly transactions per active consumer (S1).'), src: ['S1'] },
            { t: 'p', text: L('Из письма Ломтадзе: самым важным решением он называет суперприложение. Эксперты по IT советовали отдельные приложения, а маркетологи говорили, что нельзя продавать накопительный счёт и кухонные аксессуары под одним брендом (S1). Он пишет, что единый бренд убирает барьеры и экономит на маркетинге (S1).', 'From Lomtadze\'s letter: he calls the super app the most important decision. IT experts advised separate apps, and marketers said you cannot brand a savings account and kitchen accessories the same way (S1). He writes that a single brand removes barriers and saves on marketing (S1).'), src: ['S1'] },
            { t: 'warn', title: L('Это слова CEO', 'These are the CEO\'s words'), text: L('Письмо в проспекте это рассказ самого основателя перед инвесторами. Показатели ADL и KResearch, на которые ссылается проспект, мы не проверяли.', 'The letter in the prospectus is the founder\'s own story to investors. The ADL and KResearch figures the prospectus cites were not checked by us.') },
        ] },
        { id: 'p6', n: '6', title: L('Первые принципы', 'First principles'), kicker: L('Что остаётся, если убрать бренд и оставить частоту', 'What remains if you remove the brand and keep the frequency'), xp: 25, era: '2023', blocks: [
            { t: 'p', text: L('До атомов. Ежедневные платежи и покупки происходят часто. Если всё это в одном месте, человек заходит каждый день, и каждый новый продукт получает готовую аудиторию. Из письма: «Почему человек должен скачивать несколько приложений?» (S1).', 'To atoms. Daily payments and purchases happen often. If all of it is in one place, a person comes in every day, and each new product gets a ready audience. From the letter: "Why should they download multiple apps?" (S1).') },
            { t: 'ladder', title: L('Путь рассуждения, по документам', 'The path of reasoning, per the documents'), steps: [
                L('Атом: частые повседневные операции (S1, S2)', 'Atom: frequent everyday operations (S1, S2)'),
                L('Вход: платежи и кошелёк, затем кредиты на покупки (S2)', 'Entry: payments and wallet, then purchase finance (S2)'),
                L('Усиление: приложение и QR для продавцов (S2)', 'Reinforcement: the app and QR for merchants (S2)'),
                L('Результат по их словам: 68 транзакций в месяц на потребителя (S1)', 'Result in their words: 68 transactions a month per consumer (S1)'),
            ] },
            { t: 'card', icon: 'stone', title: L('Закон среды (кандидат в высеченные законы)', 'Law of the environment (candidate for the carved laws)'), label: L('ДЛЯ ФИНАЛЬНОГО РАЗДЕЛА', 'FOR THE FINAL SECTION'), rows: [
                { k: L('Формулировка', 'Wording'), v: L('Собери частые действия людей в одном месте, и каждый новый продукт начнёт с готовой аудиторией', 'Gather people\'s frequent actions in one place, and each new product starts with a ready audience') },
                { k: L('Опора', 'Support'), v: L('Хронология продуктов (S2) и слова основателя о суперприложении (S1)', 'The product timeline (S2) and the founder\'s words on the super app (S1)') },
                { k: L('Оговорка', 'Caveat'), v: L('Это самоописание компании. Причинность между суперприложением и успехом не доказана независимо', 'This is the company\'s self-description. Causality between the super app and success is not independently proven') },
            ] },
        ] },
        { id: 'p7', n: '7', title: L('Что переносимо тебе', 'What transfers to you'), kicker: L('Три упражнения на этой неделе', 'Three exercises for this week'), xp: 25, blocks: [
            { t: 'card', icon: 'rules', title: L('Что делать', 'What to do'), label: L('ПЕРЕНОС', 'TRANSFER'), rows: [
                { k: L('1. Найди частое действие', '1. Find the frequent action'), v: L('Что твой клиент делает каждый день, а ты можешь сделать проще?', 'What does your customer do every day that you can make simpler?') },
                { k: L('2. Начни с него', '2. Start there'), v: L('Начни с самого частого действия, а не с самого прибыльного продукта.', 'Start with the most frequent action, not the most profitable product.') },
                { k: L('3. Опиши идею на трёх страницах', '3. Write the idea in three pages'), v: L('Ломтадзе пишет, что для каждого продукта они готовят трёхстраничное описание с простыми ответами (S1). Попробуй так же.', 'Lomtadze writes that for every product they prepare a three-page description with simple answers (S1). Try the same.') },
            ] },
            { t: 'card', icon: 'bulb', title: L('Вопрос для себя', 'A question for yourself'), label: L('ПОДУМАЙ', 'THINK'), rows: [
                { k: L('Вопрос', 'Question'), v: L('Какое действие мои клиенты повторяют чаще всего, и могу ли я стать местом, где оно происходит?', 'Which action do my customers repeat most, and can I become the place where it happens?') },
            ] },
        ] },
    ];
    const PUZZLES: Puzzle[] = [
        { id: 'pz1', title: L('Пазл 1. Одно приложение или несколько', 'Puzzle 1. One app or several'), xp: 20, src: ['S1'],
          setup: L('Эксперты советуют отдельные приложения для финансов и торговли. Что выбираешь?', 'Experts advise separate apps for finance and commerce. What do you choose?'),
          options: [
            { text: L('Отдельные приложения', 'Separate apps'), verdict: L('Это совет, который, по письму, получили в Kaspi.', 'This is the advice Kaspi, per the letter, was given.') },
            { text: L('Одно суперприложение', 'One super app'), verdict: L('Это выбор Kaspi по словам Ломтадзе.', 'This was Kaspi\'s choice per Lomtadze.') },
            { text: L('Ждать данных рынка', 'Wait for market data'), verdict: L('Не описано в источнике.', 'Not described in the source.') },
          ], best: 1, fact: L('Ломтадзе называет это «лучшим решением» (S1). Это его оценка, не независимая.', 'Lomtadze calls it "our best decision" (S1). That is his assessment, not independent.') },
    ];
    const DIALOGUE: DNode[] = [
        { id: 'd1', speaker: L('Эксперт по маркетингу (ИИ-реконструкция)', 'Marketing expert (AI reconstruction)'), text: L('Нельзя продавать накопительный счёт и кухонные аксессуары под одним брендом. Почему вы так делаете?', 'You cannot sell a savings account and kitchen accessories under one brand. Why are you doing it?'), choices: [
            { text: L('Зачем клиенту несколько приложений и логинов?', 'Why should a customer need several apps and logins?'), reply: L('Это близко к тому, что пишет Ломтадзе (S1).', 'This is close to what Lomtadze writes (S1).'), good: true },
            { text: L('Так делают все', 'Everyone does it'), reply: L('В письме сказано как раз обратное: крупнейшие компании выбирали отдельные приложения (S1).', 'The letter says the opposite: leading companies pursued single-purpose apps (S1).'), good: false },
        ] },
    ];
    return {
        id: 'kaspi', no: '23', company: 'Kaspi.kz', year: '2012',
        title: L('Kaspi.kz: как платежи стали суперприложением и вышли на Nasdaq', 'Kaspi.kz: how payments became a super app and reached Nasdaq'),
        sub: L('Платежи, маркетплейс и кредиты в одном приложении, 13,5 млн пользователей и IPO на миллиард долларов.', 'Payments, a marketplace and finance in one app, 13.5 million users and a billion-dollar IPO.'),
        eyebrow: L('ГЛАВА 23', 'CHAPTER 23'),
        sources: SOURCES, parts: PARTS, puzzles: PUZZLES, dialogue: DIALOGUE,
        tips: [L('Начни с самого частого действия.', 'Start with the most frequent action.')],
    };
};

export const KASPI = build(false);
export const KASPI_EN = build(true);
