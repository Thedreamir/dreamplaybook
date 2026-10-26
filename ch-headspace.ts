import type { Source, Part, Puzzle, DNode, Chapter } from './types';

const build = (en: boolean): Chapter => {
    const L = (ru: string, e: string) => (en ? e : ru);
    const P = L('Пресса', 'Press');
    const SOURCES: Source[] = [
        { id: 'S1', kind: P, title: L('NPR, How I Built This: Headspace, Энди Паддикомб и Рич Пирсон (23 сентября 2019)', 'NPR, How I Built This: Headspace, Andy Puddicombe and Rich Pierson (Sep 23, 2019)'), url: 'https://www.npr.org/2019/09/18/762035049/headspace-andy-puddicombe-and-rich-pierson' },
        { id: 'S2', kind: P, title: L('Reuters: Ginger и Headspace объединяются в сделке на 3 млрд долларов (25 августа 2021)', 'Reuters: Ginger and Headspace to merge in a $3 billion deal (Aug 25, 2021)'), url: 'https://www.reuters.com/legal/transactional/digital-health-firms-ginger-headspace-merge-2021-08-25/' },
        { id: 'S3', kind: P, title: L('Fierce Healthcare: Headspace получает 105 млн долларов долгового финансирования (26 июля 2023)', 'Fierce Healthcare: Headspace banks $105M in financing (Jul 26, 2023)'), url: 'https://www.fiercehealthcare.com/digital-health/headspace-banks-105m-new-financing-it-eyes-potential-ma-and-expansion-enterprise' },
        { id: 'S4', kind: P, title: L('Fierce Healthcare: Ginger и Headspace планируют слияние (25 августа 2021)', 'Fierce Healthcare: Ginger and Headspace plan merger (Aug 25, 2021)'), url: 'https://www.fiercehealthcare.com/digital-health/ginger-and-headspace-plan-to-merge-to-scale-up-comprehensive-digital-mental-health' },
    ];
    const PARTS: Part[] = [
        { id: 'p0', n: '0', title: L('Пролог: монах и человек с выгоранием', 'Prologue: a monk and a burned-out adman'), kicker: L('Медитация как продукт', 'Meditation as a product'), xp: 20, era: '2010-2023', blocks: [
            { t: 'p', text: L('Headspace основан в 2010 году. NPR: к 2019 году у приложения были пользователи в 190 странах и годовая выручка больше 100 млн долларов (S1). В 2021 году компания объявила о слиянии с Ginger в сделке на 3 млрд долларов (S2).', 'Headspace was founded in 2010. NPR: by 2019 the app had users in 190 countries and annual revenue of more than $100 million (S1). In 2021 the company announced a merger with Ginger in a $3 billion deal (S2).'), src: ['S1', 'S2'] },
            { t: 'fact', label: L('Сделка, август 2021', 'Deal, August 2021'), value: L('3 млрд долларов, объединённая компания Headspace Health', '$3 billion, the combined company Headspace Health'), src: ['S2'] },
            { t: 'warn', title: L('Границы главы', 'Limits of the chapter'), text: L('Источники: NPR, Reuters, Fierce Healthcare. Данных о ранних месяцах и первых пользователях в них почти нет, это отмечено ниже.', 'Sources: NPR, Reuters, Fierce Healthcare. They hold almost no data on the early months and first users, which is marked below.') },
            { t: 'card', icon: 'target', title: L('Как читать главу', 'How to read the chapter'), label: L('МЕТКИ ЧЕСТНОСТИ', 'HONESTY LABELS'), rows: [
                { k: '[S1...S4]', v: L('Источник. Нажми на метку, чтобы увидеть, откуда факт.', 'Source. Tap the label to see where the fact comes from.') },
                { k: L('Не нашёл', 'Not found'), v: L('Данных в открытых источниках нет. Автор их не придумывает.', 'The data is not in open sources. The author does not invent it.') },
                { k: L('ИИ-реконструкция', 'AI reconstruction'), v: L('Сцена или реплика придуманы для тренировки.', 'A scene or line invented for practice.') },
            ] },
        ] },
        { id: 'p1', n: '1', title: L('Генезис основателей', 'Genesis of the founders'), kicker: L('Два человека, у которых не совпадали миры', 'Two people from different worlds'), xp: 20, era: '2010', blocks: [
            { t: 'p', text: L('NPR: Энди Паддикомб в начале двадцатых отдал всё, что имел, и стал учиться на буддийского монаха. Через десять лет он захотел донести пользу своих техник до большего числа людей. Он вёл клинику медитации в Лондоне, где встретил Рича Пирсона, выгоревшего на работе в крупном лондонском рекламном агентстве. Вместе они основали Headspace в 2010 году (S1).', 'NPR: Andy Puddicombe, in his early twenties, gave away everything he owned to train as a Buddhist monk. After ten years he wanted to bring the benefits of his techniques to more people. While running a meditation clinic in London he met Rich Pierson, who had burned out at a high-powered London ad agency. Together they founded Headspace in 2010 (S1).'), src: ['S1'] },
            { t: 'ladder', title: L('Лестница абстракции', 'Ladder of abstraction'), steps: [
                L('Конкретно: клиника медитации в Лондоне и выгоревший клиент (S1)', 'Concrete: a meditation clinic in London and a burned-out visitor (S1)'),
                L('Закономерность: опытный практик и человек, который умеет делать массовый продукт (S1)', 'Pattern: an experienced practitioner and someone who knows how to make a mass-market product (S1)'),
                L('Принцип: знание одного и упаковка другого дают то, чего нет у каждого по отдельности', 'Principle: one\'s knowledge and the other\'s packaging give what neither has alone'),
            ] },
            { t: 'warn', title: L('Что это за вывод', 'What kind of conclusion this is'), text: L('Третья ступень лестницы это наша интерпретация, а не слова основателей.', 'The third rung of the ladder is our interpretation, not the founders\' words.') },
        ] },
        { id: 'p2', n: '2', title: L('Боль', 'Pain'), kicker: L('Выгорание и непонятная практика', 'Burnout and an unclear practice'), xp: 20, era: '2010', blocks: [
            { t: 'p', text: L('Из NPR видно две боли: выгорание Пирсона (S1) и желание Паддикомба сделать практику доступной за пределами клиники (S1).', 'NPR shows two pains: Pierson\'s burnout (S1) and Puddicombe\'s wish to make the practice available beyond the clinic (S1).'), src: ['S1'] },
            { t: 'gap', text: L('Не нашёл в этих источниках: исследование рынка, интервью с пользователями, первые прототипы. Не придумываем.', 'Not found in these sources: market research, user interviews, first prototypes. We do not invent them.') },
        ] },
        { id: 'p3', n: '3', title: L('MVP и первые люди', 'MVP and the first people'), kicker: L('Что известно о начале', 'What is known about the start'), xp: 20, era: '2010-2019', blocks: [
            { t: 'gap', text: L('Не нашёл: число первых 100, 1000 и 10 000 пользователей, дату первого приложения и первые деньги. В использованных источниках этих сведений нет.', 'Not found: the numbers of the first 100, 1,000 and 10,000 users, the date of the first app and the first money. These details are not in the sources used.') },
            { t: 'p', text: L('Что есть: основание в 2010 (S1), к 2019 пользователи в 190 странах и выручка больше 100 млн долларов (S1), к августу 2021 около 70 млн пользователей по Reuters (S2).', 'What exists: founded in 2010 (S1), by 2019 users in 190 countries and revenue above $100 million (S1), by August 2021 about 70 million users per Reuters (S2).'), src: ['S1', 'S2'] },
        ] },
        { id: 'p4', n: '4', title: L('Деньги и оценка', 'Money and valuation'), kicker: L('Слияние на 3 миллиарда и сокращения', 'A $3 billion merger and layoffs'), xp: 25, era: '2021-2023', blocks: [
            { t: 'p', text: L('25 августа 2021: Headspace и Ginger объявляют слияние, оценка объединённой компании 3 млрд долларов. Ginger в марте привлёк 100 млн. Главой Headspace Health должен стать Расселл Гласс, CEO Ginger (S2). Слияние закрыто в октябре 2021, в компании было больше 800 сотрудников (S3).', 'August 25, 2021: Headspace and Ginger announce a merger valuing the combined company at $3 billion. Ginger had raised $100 million in March. Russell Glass, Ginger\'s CEO, was to head Headspace Health (S2). The merger closed in October 2021 with a workforce of more than 800 (S3).'), src: ['S2', 'S3'] },
            { t: 'p', text: L('Июль 2023: Headspace привлекает 105 млн долларов долга от Oxford Finance. Незадолго до этого уволены 181 человек, около 15% штата, а в декабре перед тем 4%, примерно 50 человек. Гласс про первое сокращение: «Мы были слишком оптимистичны» (S3).', 'July 2023: Headspace takes $105 million in debt from Oxford Finance. Earlier that month it laid off 181 people, about 15% of staff, after cutting about 4%, roughly 50 people, in December. Glass on the first cut: "we were just too optimistic" (S3).'), src: ['S3'] },
            { t: 'warn', title: L('Расхождение: сколько пользователей', 'Discrepancy: how many users'), text: L('Reuters: около 70 млн пользователей у Headspace (S2). Fierce Healthcare: объединённый охват до 100 млн потребителей (S4). Это разные компании и разные определения: Reuters считает Headspace, Fierce объединённую компанию.', 'Reuters: about 70 million users for Headspace (S2). Fierce Healthcare: a combined reach of 100 million consumers (S4). Different scopes: Reuters counts Headspace, Fierce counts the combined company.'), src: ['S2', 'S4'] },
            { t: 'warn', title: L('Спорный эпизод', 'A contested episode'), text: L('Fierce со ссылкой на L.A. Times: уволенные терапевты рассказывали, что их отключили от платформы без предупреждения. Компания отвечает, что уведомила пациентов и что большинство записались к новым специалистам в течение 10 дней (S3). Мы приводим обе стороны.', 'Fierce citing the L.A. Times: laid-off therapists said they were cut off from the platform without warning. The company says it notified members and most booked new providers within 10 days (S3). We show both sides.'), src: ['S3'] },
            { t: 'chart', title: L('Оценка при слиянии и долг, млн долларов', 'Merger valuation and debt, $ millions'), bars: [{ label: L('Слияние 2021', 'Merger 2021'), value: 3000, text: '3,000' }, { label: L('Долг 2023', 'Debt 2023'), value: 105, text: '105' }], note: L('Это разные виды цифр: оценка компании и долговая линия. Сравнивать их нельзя.', 'These are different kinds of numbers: a company valuation and a debt facility. They are not comparable.'), src: ['S2', 'S3'] },
        ] },
        { id: 'p5', n: '5', title: L('PMF и монетизация', 'PMF and monetization'), kicker: L('От потребителя к работодателям', 'From consumers to employers'), xp: 25, era: '2021-2023', blocks: [
            { t: 'p', text: L('В 2023 Гласс говорит, что рынок прямых потребителей сужается, и компания делает ставку на работодателей и медицинские страховки. К тому времени она работала больше чем с 4 000 работодателей в 200 странах (S3). В 2021 это были сотрудники 2 700 компаний (S2).', 'In 2023 Glass says the direct-to-consumer market is constricting and the company is betting on employers and health plans. By then it worked with more than 4,000 employers across 200 countries (S3). In 2021 it served employees of 2,700 companies (S2).'), src: ['S2', 'S3'] },
            { t: 'p', text: L('Гласс называет причины: потребители режут расходы на подписки, инфляция, замедление продаж малому бизнесу (S3). В 2022 компания купила приложение Shine и Sayana, ИИ-платформу психического здоровья (S3).', 'Glass names the causes: consumers cutting subscriptions, inflation, slower sales to small businesses (S3). In 2022 the company bought the Shine app and Sayana, an AI mental-health platform (S3).'), src: ['S3'] },
        ] },
        { id: 'p6', n: '6', title: L('Первые принципы', 'First principles'), kicker: L('Что остаётся, если убрать приложение', 'What remains if you remove the app'), xp: 25, era: '2021', blocks: [
            { t: 'p', text: L('До атомов. Человеку нужно меньше стресса. Медитация это один способ, терапия другой. Слияние сделано, чтобы закрыть весь путь: от профилактики до лечения. Цитата Гласса: «Нужно было думать о профилактике» (S2).', 'To atoms. A person needs less stress. Meditation is one way, therapy another. The merger was meant to cover the whole path: from prevention to treatment. Glass: "we needed to think prevention" (S2).') },
            { t: 'ladder', title: L('Путь рассуждения, по документам', 'The path of reasoning, per the documents'), steps: [
                L('Атом: меньше стресса и больше устойчивости (S1)', 'Atom: less stress and more resilience (S1)'),
                L('Профилактика сама по себе не полный путь (S2)', 'Prevention alone is not the full path (S2)'),
                L('Слияние добавляет коучинг, терапию, психиатрию (S2)', 'The merger adds coaching, therapy, psychiatry (S2)'),
                L('Потребительский рынок слабеет, оплата идёт от работодателей (S3)', 'The consumer market weakens, payment shifts to employers (S3)'),
            ] },
            { t: 'card', icon: 'stone', title: L('Закон среды (кандидат в высеченные законы)', 'Law of the environment (candidate for the carved laws)'), label: L('ДЛЯ ФИНАЛЬНОГО РАЗДЕЛА', 'FOR THE FINAL SECTION'), rows: [
                { k: L('Формулировка', 'Wording'), v: L('Когда платит человек, продукт зависит от его кошелька. Когда платит организация, продукт зависит от её бюджета. Выбирай, чья среда тебе нужна', 'When the person pays, the product depends on their wallet. When an organization pays, it depends on its budget. Choose whose environment you need') },
                { k: L('Опора', 'Support'), v: L('Ставка на работодателей и страховые после ослабления потребительского рынка (S3)', 'A bet on employers and health plans after the consumer market weakened (S3)') },
                { k: L('Оговорка', 'Caveat'), v: L('Слова CEO о причинах, независимой проверки нет. Результат поворота в 2023 ещё не виден', 'The CEO\'s own account of the causes, with no independent check. The result of the 2023 turn is not yet visible') },
            ] },
        ] },
        { id: 'p7', n: '7', title: L('Что переносимо тебе', 'What transfers to you'), kicker: L('Три упражнения на этой неделе', 'Three exercises for this week'), xp: 25, blocks: [
            { t: 'card', icon: 'rules', title: L('Что делать', 'What to do'), label: L('ПЕРЕНОС', 'TRANSFER'), rows: [
                { k: L('1. Найди дополняющего человека', '1. Find a complementary person'), v: L('Кто умеет то, чего не умеешь ты, и кому нужно то, что умеешь ты?', 'Who can do what you cannot, and who needs what you can do?') },
                { k: L('2. Назови, кто платит', '2. Name who pays'), v: L('Человек, работодатель или организация? Выпиши плюсы и минусы каждого.', 'The person, an employer or an organization? Write the pros and cons of each.') },
                { k: L('3. Проверь оптимизм', '3. Check your optimism'), v: L('Что в твоём плане держится на слове «наверняка»?', 'What in your plan rests on the word "surely"?') },
            ] },
            { t: 'card', icon: 'bulb', title: L('Вопрос для себя', 'A question for yourself'), label: L('ПОДУМАЙ', 'THINK'), rows: [
                { k: L('Вопрос', 'Question'), v: L('Если мои клиенты перестанут платить сами, кто станет платить за мой продукт?', 'If my customers stop paying themselves, who would pay for my product?') },
            ] },
        ] },
    ];
    const PUZZLES: Puzzle[] = [
        { id: 'pz1', title: L('Пазл 1. Кто платит', 'Puzzle 1. Who pays'), xp: 20, src: ['S3'],
          setup: L('Потребительский рынок слабеет, подписки режут. Куда смотреть?', 'The consumer market is weakening and people cut subscriptions. Where to look?'),
          options: [
            { text: L('Ждать, пока вернётся', 'Wait until it returns'), verdict: L('Не то, что сделал Headspace.', 'Not what Headspace did.') },
            { text: L('К работодателям и страховым', 'To employers and health plans'), verdict: L('Так поступил Headspace, по словам Гласса.', 'This is what Headspace did, per Glass.') },
            { text: L('Поднять цену', 'Raise the price'), verdict: L('Источник об этом не говорит.', 'The source does not mention this.') },
          ], best: 1, fact: L('Fierce Healthcare, июль 2023 (S3). Результат ещё не известен.', 'Fierce Healthcare, July 2023 (S3). The result is not yet known.') },
    ];
    const DIALOGUE: DNode[] = [
        { id: 'd1', speaker: L('Член совета (ИИ-реконструкция)', 'Board member (AI reconstruction)'), text: L('Рост замедлился. Режем штат или ждём?', 'Growth has slowed. Do we cut staff or wait?'), choices: [
            { text: L('Режем сейчас, ясно объясняем причины и сохраняем уход за клиентами', 'Cut now, explain the reasons clearly and protect customer care'), reply: L('Гласс говорит, что приоритет это безопасность участников (S3), но практика вызвала споры.', 'Glass says member safety was the priority (S3), but the practice drew disputes.'), good: true },
            { text: L('Ждём, рынок вернётся', 'Wait, the market will return'), reply: L('Гласс признаёт, что в декабре они были «слишком оптимистичны» (S3).', 'Glass admits that in December they were "too optimistic" (S3).'), good: false },
        ] },
    ];
    return {
        id: 'headspace', no: '25', company: 'Headspace', year: '2010',
        title: L('Headspace: от монаха и выгоревшего рекламщика к слиянию на 3 миллиарда', 'Headspace: from a monk and a burned-out adman to a $3 billion merger'),
        sub: L('Медитационное приложение, слияние с Ginger и поворот к работодателям.', 'A meditation app, the merger with Ginger and the turn toward employers.'),
        eyebrow: L('ГЛАВА 25', 'CHAPTER 25'),
        sources: SOURCES, parts: PARTS, puzzles: PUZZLES, dialogue: DIALOGUE,
        tips: [L('Назови, кто платит.', 'Name who pays.')],
    };
};

export const HEADSPACE = build(false);
export const HEADSPACE_EN = build(true);
