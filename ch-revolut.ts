import type { Source, Part, Puzzle, DNode, Chapter } from './types';

const build = (en: boolean): Chapter => {
    const L = (ru: string, e: string) => (en ? e : ru);
    const P = L('Пресса', 'Press'), F = L('Первое лицо через прессу', 'First person via press'), D = L('Первичка', 'Primary');
    const SOURCES: Source[] = [
        { id: 'S1', kind: F, title: L('Forbes (колонка Филипа Солтера): интервью с Николаем Сторонским (9 декабря 2015): идея из потерь на комиссиях, 55 тыс. пользователей, 3,5 млн долларов', 'Forbes (Philip Salter\'s column): interview with Nikolay Storonsky (Dec 9, 2015): the idea from losses on fees, 55,000 users, $3.5 million'), url: 'https://www.forbes.com/sites/philipsalter/2015/12/09/london-fintech-entrepreneur-talking-about-a-revolution/' },
        { id: 'S2', kind: P, title: L('The Guardian: The smartphone app revolutionising foreign currency exchange (12 мая 2016): запуск в июле 2015, более 90 валют, межбанковский курс', 'The Guardian: The smartphone app revolutionising foreign currency exchange (May 12, 2016): launched July 2015, more than 90 currencies, the interbank rate'), url: 'https://www.theguardian.com/small-business-network/2016/may/12/the-smartphone-app-revolutionising-foreign-currency-exchange' },
        { id: 'S3', kind: P, title: L('Finance Magnates: Revolut Launches with Fresh £1.5M in Funding (20 июля 2015)', 'Finance Magnates: Revolut Launches with Fresh £1.5M in Funding (Jul 20, 2015)'), url: 'https://www.financemagnates.com/fintech/payments/revolut-launches-with-fresh-1-5m-in-funding-and-goal-to-replace-banks/' },
        { id: 'S4', kind: P, title: L('Reuters: Britain\'s Revolut surges to record profit as it seeks $40 bln valuation (2 июля 2024): выручка 1,8 млрд фунтов, прибыль до налогов 438 млн, задержка отчётов 2021 и 2022', 'Reuters: Britain\'s Revolut surges to record profit as it seeks $40 bln valuation (Jul 2, 2024): revenue £1.8 billion, pre-tax profit £438 million, delayed 2021 and 2022 accounts'), url: 'https://www.reuters.com/business/finance/revoluts-2023-revenue-rises-18-bln-pounds-cnbc-reports-2024-07-01/' },
        { id: 'S5', kind: P, title: L('Reuters: Revolut gets UK banking licence after three-year wait (25 июля 2024): лицензия с ограничениями, стадия «мобилизации», 9 млн клиентов в Великобритании', 'Reuters: Revolut gets UK banking licence after three-year wait (Jul 25, 2024): a licence with restrictions, the "mobilisation" stage, 9 million UK customers'), url: 'https://www.reuters.com/technology/revolut-gets-uk-banking-licence-after-three-year-wait-2024-07-25/' },
        { id: 'S6', kind: P, title: L('Reuters: Revolut joins Europe\'s biggest banks with $45 billion valuation after share sale (16 августа 2024)', 'Reuters: Revolut joins Europe\'s biggest banks with $45 billion valuation after share sale (Aug 16, 2024)'), url: 'https://www.reuters.com/business/finance/britains-revolut-valued-45-bln-share-sale-2024-08-16/' },
        { id: 'S7', kind: D, title: L('Revolut: годовой отчёт за 2023 (выручка 1,80 млрд фунтов против 0,92 млрд в 2022)', 'Revolut: annual report for 2023 (revenue £1.80 billion vs £0.92 billion in 2022)'), url: 'https://assets.revolut.com/pdf/annualreport2023.pdf' },
        { id: 'S8', kind: D, title: L('Revolut: годовой отчёт за 2024 (52,5 млн розничных клиентов против 38,0 млн в 2023)', 'Revolut: annual report for 2024 (52.5 million retail customers vs 38.0 million in 2023)'), url: 'https://assets.revolut.com/pdf/annualreport2024.pdf' },
    ];
    const PARTS: Part[] = [
        { id: 'p0', n: '0', title: L('Пролог: карта для путешественников, которая стала банком', 'Prologue: a card for travelers that became a bank'), kicker: L('Почему Revolut стоит в томе после Character.AI', 'Why Revolut follows Character.AI in the volume'), xp: 20, era: '2015-2024', blocks: [
            { t: 'p', text: L('Revolut запустился в июле 2015 года как приложение с предоплаченной картой для трат в более чем 90 валютах по межбанковскому курсу (S2). В августе 2024 года он оценён в 45 млрд долларов при вторичной продаже акций (S6).', 'Revolut launched in July 2015 as an app with a prepaid card for spending in more than 90 currencies at the interbank rate (S2). In August 2024 it was valued at $45 billion in a secondary share sale (S6).'), src: ['S2', 'S6'] },
            { t: 'fact', label: L('Оценка, август 2024', 'Valuation, August 2024'), value: L('45 млрд долларов, по Reuters (33 млрд в 2021)', '$45 billion, per Reuters ($33 billion in 2021)'), src: ['S6'] },
            { t: 'warn', title: L('Границы главы', 'Limits of the chapter'), text: L('Источники проверены до конца 2024 года. Цифры компании меняются часто, перед использованием проверь свежие данные.', 'Sources are checked up to the end of 2024. The company\'s figures change often, so check fresh data before relying on them.') },
            { t: 'p', text: L('Вопрос главы: как начать с одной мелкой, но неприятной боли, и годами строить вокруг неё банк, не имея лицензии.', 'The question of the chapter: how to start with one small but annoying pain and build a bank around it over years without having a licence.') },
            { t: 'card', icon: 'target', title: L('Как читать главу', 'How to read the chapter'), label: L('МЕТКИ ЧЕСТНОСТИ', 'HONESTY LABELS'), rows: [
                { k: '[S1...S8]', v: L('Источник. Нажми на метку, чтобы увидеть, откуда факт.', 'Source. Tap the label to see where the fact comes from.') },
                { k: L('Не нашёл', 'Not found'), v: L('Данных в открытых источниках нет. Автор их не придумывает.', 'The data is not in open sources. The author does not invent it.') },
                { k: L('ИИ-реконструкция', 'AI reconstruction'), v: L('Сцена или реплика придуманы для тренировки. Это не слова реальных людей.', 'A scene or line invented for practice. These are not the words of real people.') },
                { k: L('Расхождение', 'Discrepancy'), v: L('Если источники спорят, показываем обе версии.', 'If sources disagree, we show both versions.') },
            ] },
        ] },
        { id: 'p1', n: '1', title: L('Генезис основателей', 'Genesis of the founders'), kicker: L('Трейдер по деривативам, который устал терять на комиссиях', 'A derivatives trader tired of losing money on fees'), xp: 20, era: '2012-2015', blocks: [
            { t: 'p', text: L('Николай Сторонский до Revolut был трейдером по долевым деривативам в Credit Suisse (S1). Он говорит, что придумал бизнес за три года до интервью 2015 года. Он много ездил и терял сотни фунтов на комиссиях за обмен валют. Как человек из финансов, он знал, какой курс должен получать (S1).', 'Before Revolut Nikolay Storonsky was an equity derivatives trader at Credit Suisse (S1). He says he thought of the business three years before the 2015 interview. He travelled a lot and wasted hundreds of pounds on foreign transaction fees and exchange rate commissions. As a financial person he knew the rate he should be getting (S1).'), src: ['S1'] },
            { t: 'p', text: L('Он искал мультивалютную карту, ему сказали, что это невозможно. «Но я был полон решимости сделать это» (S1). Соучредитель: Владислав Яценко (S2).', 'He looked for a multi-currency card and was told it was not possible. "But I was determined to make it work" (S1). Co-founder: Vladyslav Yatsenko (S2).'), src: ['S1', 'S2'] },
            { t: 'ladder', title: L('Лестница абстракции: откуда пришла идея', 'Ladder of abstraction: where the idea came from'), steps: [
                L('Конкретно: сотни фунтов потерь на комиссиях при поездках (S1)', 'Concrete: hundreds of pounds lost on fees while travelling (S1)'),
                L('Закономерность: банки и обменники берут 2,75-3% сверх курса (S2)', 'Pattern: banks and bureaux add 2.75-3% above the rate (S2)'),
                L('Принцип: покажи клиенту честный курс и убери скрытые комиссии (S1, S2)', 'Principle: show the customer the real rate and remove hidden commissions (S1, S2)'),
            ] },
        ] },
        { id: 'p2', n: '2', title: L('Поиск боли', 'Finding the pain'), kicker: L('Комиссии на обмене и в банкоматах', 'Exchange and ATM fees'), xp: 20, era: '2015', blocks: [
            { t: 'p', text: L('The Guardian: путешественники сталкиваются с «минным полем» скрытых и запутанных комиссий. Банки и обменники зарабатывают, добавляя к курсу плату за снятие наличных 2,75-3% (S2). Revolut предложил так называемый межбанковский курс, тот, по которому банки кредитуют друг друга (S2).', 'The Guardian: spending abroad is a "minefield" of hidden and confusing charges. Banks and bureaux make money by adding cash withdrawal fees of 2.75-3% above the rate (S2). Revolut offered the so-called interbank rate, the rate at which banks lend to each other (S2).'), src: ['S2'] },
            { t: 'p', text: L('Целевые группы при запуске, по Finance Magnates: путешественники и сектор денежных переводов (S3).', 'Target groups at launch, per Finance Magnates: travelers and the remittance sector (S3).'), src: ['S3'] },
            { t: 'warn', title: L('Что мы не знаем', 'What we do not know'), text: L('Ограничения карты: Guardian пишет о бесплатном снятии наличных до 500 фунтов в месяц и комиссии 2% сверх (S2). Условия менялись, сегодняшние тарифы надо смотреть на сайте.', 'Card limits: the Guardian writes of fee-free cash withdrawals up to £500 a month, then a 2% fee (S2). Terms changed, and today\'s tariffs need to be checked on the site.'), src: ['S2'] },
        ] },
        { id: 'p3', n: '3', title: L('MVP и первые люди', 'MVP and the first people'), kicker: L('Карта Mastercard и приложение, 55 тысяч за пять месяцев', 'A Mastercard and an app, 55,000 users in five months'), xp: 25, era: '2015-2016', blocks: [
            { t: 'p', text: L('Revolut публично запустился 20 июля 2015 года, объявив о привлечении 1,5 млн фунтов (S3). Это была цифровая учётная запись с физической предоплаченной картой Mastercard, с переводами по SMS, WhatsApp или почте (S2, S3).', 'Revolut publicly launched on July 20, 2015, announcing it had closed £1.5 million (S3). It was a digital account with a physical prepaid Mastercard, with transfers by SMS, WhatsApp or email (S2, S3).'), src: ['S2', 'S3'] },
            { t: 'p', text: L('К декабрю 2015 года, по интервью Forbes, у приложения было больше 55 тыс. активных пользователей и обработано больше 140 млн долларов, около 1,3 млн в день с июля (S1). Деньги клиентов лежат на отдельных счетах в Barclays, куда банк не может их давать в кредит (S1). Офис был в акселераторе Level39 в Canary Wharf (S1).', 'By December 2015, per the Forbes interview, the app had more than 55,000 active users and had processed more than $140 million, about $1.3 million a day since July (S1). Customer money is held in ring-fenced accounts at Barclays, which cannot lend it out (S1). The office was in the Level39 accelerator in Canary Wharf (S1).'), src: ['S1'] },
            { t: 'ladder', title: L('Лестница первых людей', 'Ladder of the first people'), steps: [
                L('Июль 2015: запуск, 1,5 млн фунтов (S3)', 'July 2015: launch, £1.5 million (S3)'),
                L('Декабрь 2015: больше 55 тыс. активных, больше 140 млн долларов оборота (S1)', 'December 2015: more than 55,000 active, more than $140 million processed (S1)'),
                L('Май 2016: больше 90 валют (S2)', 'May 2016: more than 90 currencies (S2)'),
                L('Цифры первых 100 и 1000 пользователей: не нашёл в открытых источниках', 'Numbers for the first 100 and 1,000 users: not found in open sources'),
            ] },
            { t: 'gap', text: L('Не нашёл данных о числе пользователей в первые недели. Не придумываем.', 'Not found: user counts for the first weeks. We do not invent them.') },
        ] },
        { id: 'p4', n: '4', title: L('Деньги, питч и оценка', 'Money, pitch and valuation'), kicker: L('От 1,5 млн фунтов до 45 млрд долларов', 'From £1.5 million to $45 billion'), xp: 25, era: '2015-2024', blocks: [
            { t: 'p', text: L('Июль 2015: раунд на 1,5 млн фунтов под руководством Balderton Capital с участием Seedcamp (S3). Декабрь 2015: Сторонский говорит, что в сумме привлечено около 3,5 млн долларов от Venrex, Point9, Seedcamp и Balderton (S1). Он говорит, что опыт финансиста помог с условиями сделки и доверием инвесторов (S1).', 'July 2015: a £1.5 million round led by Balderton Capital with Seedcamp (S3). December 2015: Storonsky says about $3.5 million in total had been raised from Venrex, Point9, Seedcamp and Balderton (S1). He says his finance background helped with term-sheet terms and investor trust (S1).'), src: ['S1', 'S3'] },
            { t: 'p', text: L('2021: оценка 33 млрд долларов (S4, S6). 16 августа 2024: вторичная продажа акций при оценке 45 млрд, которую вели Coatue и D1 Capital Partners, участвовал Tiger Global. Reuters сравнивает: это больше, чем у Societe Generale (19 млрд) и сопоставимо с Barclays (43 млрд) по данным LSEG на тот день (S6).', '2021: a $33 billion valuation (S4, S6). August 16, 2024: a secondary share sale at $45 billion, led by Coatue and D1 Capital Partners with Tiger Global participating. Reuters compares: more than Societe Generale ($19 billion) and comparable to Barclays ($43 billion) per LSEG data that day (S6).'), src: ['S4', 'S6'] },
            { t: 'warn', title: L('Расхождение: деньги первого раунда', 'Discrepancy: first-round money'), text: L('Finance Magnates в июле 2015: 1,5 млн фунтов (S3). Forbes в декабре 2015 со слов Сторонского: около 3,5 млн долларов всего (S1). Это разные моменты и разные валюты, и суммы не обязательно противоречат друг другу, но совпадения не проверены.', 'Finance Magnates in July 2015: £1.5 million (S3). Forbes in December 2015 per Storonsky: about $3.5 million in total (S1). These are different moments and currencies and the amounts may not contradict each other, but the match is not verified.'), src: ['S1', 'S3'] },
            { t: 'chart', title: L('Оценка Revolut, млрд долларов', 'Revolut valuation, $ billions'), bars: [{ label: '2021', value: 33, text: '33B' }, { label: L('Авг 2024', 'Aug 2024'), value: 45, text: '45B' }], note: L('Вторичная продажа акций 2024 года, не новый раунд для компании.', 'The 2024 secondary share sale, not a new round for the company.'), src: ['S6'] },
        ] },
        { id: 'p5', n: '5', title: L('PMF, монетизация, экосистема', 'PMF, monetization, ecosystem'), kicker: L('Выручка 1,8 млрд фунтов и три года без лицензии', 'Revenue of £1.8 billion and three years without a licence'), xp: 25, era: '2021-2024', blocks: [
            { t: 'p', text: L('Годовой отчёт за 2023: выручка выросла с 0,92 млрд фунтов в 2022 до 1,80 млрд (+95%) (S7). Reuters: процентные доходы выросли до 500 млн с 83 млн фунтов, прибыль до налогов 438 млн фунтов в 2023, а в 2022 был убыток 25,4 млн (S4).', 'The 2023 annual report: revenue grew from £0.92 billion in 2022 to £1.80 billion (+95%) (S7). Reuters: interest income rose to £500 million from £83 million, pre-tax profit was £438 million in 2023, against a £25.4 million loss in 2022 (S4).'), src: ['S4', 'S7'] },
            { t: 'p', text: L('Лицензия: 25 июля 2024 года Revolut получил британскую банковскую лицензию с ограничениями, ждав три года. Началась 12-месячная стадия «мобилизации», в которой объём депозитов ограничен (S5).', 'The licence: on July 25, 2024 Revolut received a UK banking licence with restrictions after a three-year wait. A 12-month "mobilisation" stage began, in which total deposits are limited (S5).'), src: ['S5'] },
            { t: 'warn', title: L('Проблемы отчётности', 'Reporting problems'), text: L('Reuters: компания дважды задерживала публикацию годовых отчётов, аудитор не смог независимо проверить всю выручку в отчёте за 2021 год. Отчёт за 2023 был первым за три года, опубликованным вовремя. Интерим-финдиректор заявил, что внутренний контроль улучшен (S4, S5).', 'Reuters: the company twice delayed publication of its annual accounts, and its auditor could not independently verify all revenue in the 2021 accounts. The 2023 report was the first in three years published on time. The interim CFO said internal controls had improved (S4, S5).'), src: ['S4', 'S5'] },
            { t: 'warn', title: L('Расхождение: число клиентов', 'Discrepancy: customer count'), text: L('Reuters 25 июля 2024: 40 млн в мире, 9 млн в Великобритании (S5). Reuters 16 августа 2024: 45 млн по заявлению компании (S6). Отчёты компании: 38,0 млн в 2023 и 52,5 млн в 2024 (S8). Это разные даты и разные определения клиента.', 'Reuters July 25, 2024: 40 million worldwide, 9 million in the UK (S5). Reuters August 16, 2024: 45 million per the company (S6). Company reports: 38.0 million in 2023 and 52.5 million in 2024 (S8). Different dates and different definitions of a customer.'), src: ['S5', 'S6', 'S8'] },
            { t: 'chart', title: L('Выручка Revolut, млрд фунтов', 'Revolut revenue, £ billions'), bars: [{ label: '2022', value: 0.92, text: '0.92' }, { label: '2023', value: 1.8, text: '1.80' }], note: L('Данные годового отчёта за 2023.', 'Data from the 2023 annual report.'), src: ['S7'] },
        ] },
        { id: 'p6', n: '6', title: L('Первые принципы', 'First principles'), kicker: L('Что остаётся, если убрать банк и оставить курс', 'What remains if you remove the bank and keep the rate'), xp: 25, era: '2015', blocks: [
            { t: 'p', text: L('До атомов. Что нужно клиенту? Платить за границей по честному курсу без неожиданных комиссий. Всё остальное, счета, переводы, кредиты, добавлялось позже вокруг этого доверия.', 'To atoms. What does the customer need? To pay abroad at a fair rate with no surprise fees. Everything else, accounts, transfers, loans, was added later around that trust.') },
            { t: 'ladder', title: L('Путь рассуждения, по документам', 'The path of reasoning, per the documents'), steps: [
                L('Атом: честный курс при трате за границей (S1, S2)', 'Atom: a fair rate when spending abroad (S1, S2)'),
                L('Лишнее: скрытые комиссии и отделения (S2)', 'Unnecessary: hidden fees and branches (S2)'),
                L('Спрос: путешественники и переводы (S3)', 'Demand: travelers and remittances (S3)'),
                L('Деньги: проценты, подписки и услуги вокруг счёта (S4)', 'Money: interest, subscriptions and services around the account (S4)'),
            ] },
            { t: 'card', icon: 'stone', title: L('Закон среды (кандидат в высеченные законы)', 'Law of the environment (candidate for the carved laws)'), label: L('ДЛЯ ФИНАЛЬНОГО РАЗДЕЛА', 'FOR THE FINAL SECTION'), rows: [
                { k: L('Формулировка', 'Wording'), v: L('Начни с одной мелкой боли, которую платят все, и строй вокруг неё доверие, а услуги добавляй потом', 'Start with one small pain that everyone pays for, and build trust around it, adding services later') },
                { k: L('Опора', 'Support'), v: L('Честный курс как ядро (S2), позже выручка выросла за счёт процентов и других услуг (S4)', 'A fair rate as the core (S2), and later revenue grew from interest and other services (S4)') },
                { k: L('Оговорка', 'Caveat'), v: L('Быстрый рост принёс проблемы отчётности и три года ожидания лицензии (S4, S5). Рост опережал контроль', 'Fast growth brought reporting problems and a three-year licence wait (S4, S5). Growth ran ahead of controls') },
            ] },
        ] },
        { id: 'p7', n: '7', title: L('Что переносимо тебе', 'What transfers to you'), kicker: L('Три упражнения на этой неделе', 'Three exercises for this week'), xp: 25, blocks: [
            { t: 'card', icon: 'rules', title: L('Что делать', 'What to do'), label: L('ПЕРЕНОС', 'TRANSFER'), rows: [
                { k: L('1. Найди скрытую комиссию', '1. Find the hidden fee'), v: L('Где люди в твоей области платят больше, чем думают? Выпиши цифры.', 'Where do people in your field pay more than they think? Write the numbers.') },
                { k: L('2. Покажи честную цену', '2. Show the honest price'), v: L('Как ты покажешь цену так, чтобы клиент увидел разницу?', 'How will you show the price so the customer sees the difference?') },
                { k: L('3. Проверь контроль', '3. Check your controls'), v: L('Если ты вырастешь в десять раз, что сломается в учёте и правилах?', 'If you grow tenfold, what breaks in your bookkeeping and rules?') },
            ] },
            { t: 'card', icon: 'bulb', title: L('Вопрос для себя', 'A question for yourself'), label: L('ПОДУМАЙ', 'THINK'), rows: [
                { k: L('Вопрос', 'Question'), v: L('За что мои клиенты переплачивают, сами того не замечая?', 'What do my customers overpay for without noticing?') },
            ] },
        ] },
    ];
    const PUZZLES: Puzzle[] = [
        { id: 'pz1', title: L('Пазл 1. Скрытая комиссия', 'Puzzle 1. The hidden fee'), xp: 20, src: ['S1'],
          setup: L('Ты теряешь деньги на комиссиях за обмен и тебе говорят, что мультивалютной карты не бывает. Что делаешь?', 'You lose money on exchange fees and are told a multi-currency card is not possible. What do you do?'),
          options: [
            { text: L('Смиряешься', 'Accept it'), verdict: L('Сторонский так не сделал.', 'Storonsky did not.') },
            { text: L('Строишь решение сам', 'Build the solution yourself'), verdict: L('Так появился Revolut.', 'This is how Revolut appeared.') },
            { text: L('Ждёшь, пока банки изменят условия', 'Wait for banks to change terms'), verdict: L('Не описано.', 'Not described.') },
          ], best: 1, fact: L('Сторонский: «Я был полон решимости сделать это» (S1).', 'Storonsky: "I was determined to make it work" (S1).') },
    ];
    const DIALOGUE: DNode[] = [
        { id: 'd1', speaker: L('Регулятор (ИИ-реконструкция)', 'Regulator (AI reconstruction)'), text: L('Ваш учёт нужно улучшить, прежде чем мы выдадим лицензию. Что скажете?', 'Your bookkeeping needs to improve before we grant a licence. What do you say?'), choices: [
            { text: L('Улучшим контроль и опубликуем отчёт вовремя', 'We will improve controls and publish on time'), reply: L('Так компания и сделала в 2024 году.', 'This is what the company did in 2024.'), good: true },
            { text: L('Лицензия не так важна', 'The licence is not that important'), reply: L('Три года ожидания показали обратное.', 'Three years of waiting showed otherwise.'), good: false },
        ] },
    ];
    return {
        id: 'revolut', no: '22', company: 'Revolut', year: '2015',
        title: L('Revolut: как предоплаченная карта путешественника пришла к 45 миллиардам', 'Revolut: how a traveler\'s prepaid card reached $45 billion'),
        sub: L('Честный курс, 55 тысяч пользователей за пять месяцев, три года без лицензии и вторичная продажа акций.', 'A fair rate, 55,000 users in five months, three years without a licence and a secondary share sale.'),
        eyebrow: L('ГЛАВА 22', 'CHAPTER 22'),
        sources: SOURCES, parts: PARTS, puzzles: PUZZLES, dialogue: DIALOGUE,
        tips: [L('Покажи честную цену.', 'Show the honest price.')],
    };
};

export const REVOLUT = build(false);
export const REVOLUT_EN = build(true);
