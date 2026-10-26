import type { Source, Part, Puzzle, DNode, Chapter } from './types';

const build = (en: boolean): Chapter => {
    const L = (ru: string, e: string) => (en ? e : ru);
    const P = L('Пресса', 'Press'), I = L('Инвестор', 'Investor');
    const SOURCES: Source[] = [
        { id: 'S1', kind: P, title: L('TechCrunch: интервью с Майклом Эктоном Смитом о стратегии Calm (4 февраля 2020)', 'TechCrunch: Calm co-CEO Michael Acton Smith on strategy (Feb 4, 2020)'), url: 'https://techcrunch.com/2020/02/04/calm-ceo-michael-acton-smith-on-subscription-media-celebrity-collaborations-and-calms-startup-journey/' },
        { id: 'S2', kind: P, title: L('TechCrunch: Calm становится единорогом, 88 млн долларов (6 февраля 2019)', 'TechCrunch: Calm hits unicorn status with $88 million (Feb 6, 2019)'), url: 'https://techcrunch.com/2019/02/06/meditation-app-calm-hits-unicorn-status-with-fresh-88-million-funding/' },
        { id: 'S3', kind: P, title: L('Crunchbase News: Calm привлекает 88 млн, серия B (6 февраля 2019)', 'Crunchbase News: Calm raises $88M Series B (Feb 6, 2019)'), url: 'https://news.crunchbase.com/venture/calm-raises-88m-series-b-to-become-mental-healths-first-unicorn/' },
        { id: 'S4', kind: P, title: L('CNBC Make It: два друга, «ужасная» идея, Calm стоит 2 млрд (16 января 2025)', 'CNBC Make It: 2 friends, a "terrible" idea, Calm is worth $2 billion (Jan 16, 2025)'), url: 'https://www.cnbc.com/make-it/2025/01/16/2-friends-spent-years-getting-turned-down-for-their-terrible-ideanow-the-calm-app-is-worth-2-billion.html' },
        { id: 'S5', kind: P, title: L('Business Insider: Calm привлекает 75 млн при оценке 2 млрд (8 декабря 2020)', 'Business Insider: Calm raises $75 million at a $2 billion valuation (Dec 8, 2020)'), url: 'https://www.businessinsider.com/meditation-app-calm-valued-2-billion-whats-next-2020-12' },
        { id: 'S6', kind: I, title: L('Lightspeed Venture Partners: Calm is creating quite a storm (1 июля 2019, автор: инвестор Calm)', 'Lightspeed Venture Partners: Calm is creating quite a storm (Jul 1, 2019, by a Calm investor)'), url: 'https://lsvp.com/stories/calm-is-creating-quite-a-storm/' },
    ];
    const PARTS: Part[] = [
        { id: 'p0', n: '0', title: L('Пролог: «ужасная» идея, которая стоит 2 миллиарда', 'Prologue: a "terrible" idea worth $2 billion'), kicker: L('Calm против Headspace', 'Calm versus Headspace'), xp: 20, era: '2012-2020', blocks: [
            { t: 'p', text: L('Calm запущен в 2012 году (S2). В декабре 2020 года он привлёк 75 млн долларов при оценке 2 млрд, общий объём привлечённых денег 217 млн (S5). CNBC в 2025 году приводит ту же оценку и больше 150 млн загрузок (S4).', 'Calm launched in 2012 (S2). In December 2020 it raised $75 million at a $2 billion valuation, bringing total funding to $217 million (S5). CNBC in 2025 repeats the same valuation and more than 150 million downloads (S4).'), src: ['S2', 'S4', 'S5'] },
            { t: 'fact', label: L('Оценка, декабрь 2020', 'Valuation, December 2020'), value: L('2 млрд долларов, раунд серии C на 75 млн', '$2 billion, a $75 million Series C'), src: ['S5'] },
            { t: 'warn', title: L('Границы главы', 'Limits of the chapter'), text: L('Это одна из двух глав о медитации. Для сравнения читай главу о Headspace. Данные Calm после 2020 года в источниках главы не проверены.', 'This is one of two meditation chapters. Read the Headspace chapter for comparison. Calm data after 2020 is not verified in this chapter\'s sources.') },
            { t: 'card', icon: 'target', title: L('Как читать главу', 'How to read the chapter'), label: L('МЕТКИ ЧЕСТНОСТИ', 'HONESTY LABELS'), rows: [
                { k: '[S1...S6]', v: L('Источник. Нажми на метку, чтобы увидеть, откуда факт.', 'Source. Tap the label to see where the fact comes from.') },
                { k: L('Не нашёл', 'Not found'), v: L('Данных в открытых источниках нет. Автор их не придумывает.', 'The data is not in open sources. The author does not invent it.') },
                { k: L('ИИ-реконструкция', 'AI reconstruction'), v: L('Сцена или реплика придуманы для тренировки.', 'A scene or line invented for practice.') },
            ] },
        ] },
        { id: 'p1', n: '1', title: L('Генезис основателей', 'Genesis of the founders'), kicker: L('Два предпринимателя из Лондона', 'Two entrepreneurs from London'), xp: 20, era: '2012', blocks: [
            { t: 'p', text: L('Сооснователи и сопредседатели Майкл Эктон Смит и Алекс Тью раньше основали игровой стартап Mind Candy и агрегатор новостей Pop Jam (S1). По CNBC, после лет работы во главе нескольких компаний Эктон Смит выгорел. Он считал медитацию модными словами, пока друг Алекс Тью не посоветовал её (S4).', 'Co-founders and co-CEOs Michael Acton Smith and Alex Tew previously founded the gaming startup Mind Candy and the news aggregator Pop Jam (S1). Per CNBC, after years at the helm of several businesses Acton Smith was burnt out. He thought meditation was "woo woo" until his friend Alex Tew recommended it (S4).'), src: ['S1', 'S4'] },
            { t: 'p', text: L('Они пришли к выводу, что есть ценные, простые техники, но нет «хороших носителей, чтобы обучать им массовую аудиторию» (S4). Тью известен вирусным проектом, это «страница за миллион долларов» (S1).', 'They concluded there were valuable, simple techniques but no "great vehicles for teaching it to a mainstream audience" (S4). Tew is known for the viral "million-dollar home page" (S1).'), src: ['S1', 'S4'] },
        ] },
        { id: 'p2', n: '2', title: L('Боль и отличие от соперника', 'Pain and the difference from the rival'), kicker: L('Мягче и играючи', 'Softer and more playful'), xp: 20, era: '2012-2014', blocks: [
            { t: 'p', text: L('Платить за подписку было трудно, потому что вокруг было много бесплатных приложений для расслабления. Чтобы отличиться от Headspace, они сделали подход к осознанности более игривым и менее серьёзным (S4).', 'It was hard to get people to pay for a subscription when other free relaxation apps existed. To differentiate from rivals like Headspace, they made Calm\'s approach to mindfulness more playful and less serious (S4).'), src: ['S4'] },
            { t: 'p', text: L('Из интервью 2020: главный козырь, талантливая преподавательница Тамара Левитт, собранный в одном месте контент и бренд «Calm» (S1).', 'From the 2020 interview: the key assets were a brilliant teacher, Tamara Levitt, content brought together in one place, and the "Calm" brand (S1).'), src: ['S1'] },
        ] },
        { id: 'p3', n: '3', title: L('MVP и первые люди', 'MVP and the first people'), kicker: L('Шесть месяцев и сто отказов', 'Six months and over 100 meetings'), xp: 25, era: '2012-2018', blocks: [
            { t: 'p', text: L('По CNBC, почти полгода и встречи с больше чем сотней человек понадобились, чтобы найти первых ангелов. Между 2012 и 2014 они привлекли 1,5 млн долларов (S4). Эктон Смит: «мы держали расходы как можно ниже и росли за счёт сарафанного радио». До первых трат на маркетинг было около 8 млн загрузок (S4, S1).', 'Per CNBC, it took nearly six months and meetings with over 100 people to secure the first angel investors. Between 2012 and 2014 they raised $1.5 million (S4). Acton Smith: "we kept costs as tight as we could, and we just grew by word of mouth". About eight million downloads came before any marketing spend (S4, S1).'), src: ['S1', 'S4'] },
            { t: 'p', text: L('Переломный момент, по Эктону Смиту: ежедневная десятиминутная медитация Daily Calm, которая помогла сделать практику привычкой (S1). Первой крупной знаменитостью был Стивен Фрай, с ним пошёл заметный рост (S1).', 'The inflection point, per Acton Smith: the daily ten-minute Daily Calm, which helped make meditation a habit (S1). The first major celebrity was Stephen Fry, which brought immediate success (S1).'), src: ['S1'] },
            { t: 'gap', text: L('Не нашёл: число первых 100, 1000 и 10 000 пользователей. Есть только 8 млн загрузок до маркетинга, это слова основателя.', 'Not found: the numbers of the first 100, 1,000 and 10,000 users. There is only 8 million downloads before marketing, which is the founder\'s own word.') },
        ] },
        { id: 'p4', n: '4', title: L('Деньги и оценка', 'Money and valuation'), kicker: L('От 1,5 млн до единорога за семь лет', 'From $1.5 million to a unicorn in seven years'), xp: 25, era: '2018-2020', blocks: [
            { t: 'p', text: L('Июнь 2018: серия A. 6 февраля 2019: серия B на 88 млн долларов при оценке 1 млрд. TechCrunch не смог выяснить, до или после вложения считается эта оценка (S2, S3). В декабре 2020: серия C на 75 млн при оценке 2 млрд, лидер Lightspeed, участвуют Goldman Sachs и Insight Venture Partners, всего привлечено 217 млн (S5).', 'June 2018: the Series A. February 6, 2019: an $88 million Series B at a $1 billion valuation. TechCrunch could not clarify whether the valuation was pre- or post-money (S2, S3). December 2020: a $75 million Series C at $2 billion, led by Lightspeed with Goldman Sachs and Insight Venture Partners, total funding $217 million (S5).'), src: ['S2', 'S3', 'S5'] },
            { t: 'warn', title: L('Расхождение: серия A', 'Discrepancy: the Series A'), text: L('Crunchbase: серия A 28 млн долларов, закрыта в июне 2018 (S3). CNBC: серия A 27 млн в 2018 (S4). Разница в один миллион, объяснения в источниках нет.', 'Crunchbase: a $28 million Series A closed in June 2018 (S3). CNBC: a $27 million Series A in 2018 (S4). The difference is $1 million and the sources do not explain it.'), src: ['S3', 'S4'] },
            { t: 'warn', title: L('Расхождение: общий объём денег', 'Discrepancy: total funding'), text: L('TechCrunch в феврале 2020: больше 140 млн (S1). Business Insider в декабре 2020: 217 млн с учётом раунда в 75 млн (S5). Это разные даты, а 140 + 75 примерно дают 215, но мы это не складываем как факт.', 'TechCrunch in February 2020: more than $140 million (S1). Business Insider in December 2020: $217 million including the $75 million round (S5). Different dates, and 140 + 75 is roughly 215, but we do not add them up as a fact.'), src: ['S1', 'S5'] },
            { t: 'chart', title: L('Оценка Calm, млрд долларов', 'Calm valuation, $ billions'), bars: [{ label: L('Фев 2019', 'Feb 2019'), value: 1, text: '1' }, { label: L('Дек 2020', 'Dec 2020'), value: 2, text: '2' }], note: L('Раунды серии B и серии C.', 'The Series B and Series C rounds.'), src: ['S2', 'S5'] },
        ] },
        { id: 'p5', n: '5', title: L('PMF и монетизация', 'PMF and monetization'), kicker: L('Подписки, сон и знаменитости', 'Subscriptions, sleep and celebrities'), xp: 25, era: '2017-2020', blocks: [
            { t: 'chart', title: L('Загрузки, млн', 'Downloads, millions'), bars: [{ label: L('Фев 2019', 'Feb 2019'), value: 40, text: '40' }, { label: L('Июль 2019', 'Jul 2019'), value: 50, text: '50' }, { label: L('Фев 2020', 'Feb 2020'), value: 70, text: '70' }, { label: L('Янв 2025', 'Jan 2025'), value: 150, text: '150+' }], note: L('Разные источники и даты (S3, S6, S1, S4). Это «больше чем», а не точные числа.', 'Different sources and dates (S3, S6, S1, S4). These are "more than" figures, not exact numbers.'), src: ['S1', 'S3', 'S4', 'S6'] },
            { t: 'p', text: L('Платных подписчиков: больше 1 млн в феврале 2019 (S3), почти 2 млн в июле 2019 (S6), больше 2 млн в феврале 2020 (S1). Lightspeed пишет, что Calm стал самым кассовым приложением по здоровью в App Store и получил титул «приложение года» от Apple в 2017 (S6). Это слова инвестора компании.', 'Paying subscribers: more than 1 million in February 2019 (S3), almost 2 million in July 2019 (S6), more than 2 million in February 2020 (S1). Lightspeed writes that Calm was the top-grossing health and fitness app in the App Store and was named Apple\'s 2017 App of the Year (S6). This is the voice of a company investor.'), src: ['S1', 'S3', 'S6'] },
            { t: 'p', text: L('Цены по CNBC: 14,99 доллара в месяц, 69,99 в год или разовая оплата 399,99. Есть бесплатная версия с ограниченным контентом (S4). Цены менялись, сверяй с сайтом.', 'Prices per CNBC: $14.99 a month, $69.99 a year, or a one-time $399.99. There is a free version with limited content (S4). Prices change, so check the site.'), src: ['S4'] },
        ] },
        { id: 'p6', n: '6', title: L('Первые принципы', 'First principles'), kicker: L('Что остаётся, если убрать приложение', 'What remains if you remove the app'), xp: 25, era: '2012', blocks: [
            { t: 'p', text: L('До атомов. Людям нужен спокойный голос в нужный момент, особенно перед сном. Остальное, подписка, знаменитости, бренд, сделано, чтобы этот голос было легко найти и хотелось возвращаться. Эктон Смит: «Мы хотим быть с вами всю жизнь, а не научить одному навыку» (S1).', 'To atoms. People need a calm voice at the right moment, especially before sleep. The rest, the subscription, celebrities, the brand, exists to make that voice easy to find and worth returning to. Acton Smith: "we want to be with you for life, not just to learn one skill" (S1).') },
            { t: 'ladder', title: L('Путь рассуждения, по документам', 'The path of reasoning, per the documents'), steps: [
                L('Атом: простые техники, но нет хорошего носителя для массовой аудитории (S4)', 'Atom: simple techniques but no good vehicle for a mainstream audience (S4)'),
                L('Один преподаватель, одно место, один бренд (S1)', 'One teacher, one place, one brand (S1)'),
                L('Ежедневная привычка: Daily Calm (S1)', 'A daily habit: Daily Calm (S1)'),
                L('Сон, музыка, знаменитости расширяют повод открыть приложение (S1)', 'Sleep, music, celebrities widen the reasons to open the app (S1)'),
            ] },
            { t: 'card', icon: 'stone', title: L('Закон среды (кандидат в высеченные законы)', 'Law of the environment (candidate for the carved laws)'), label: L('ДЛЯ ФИНАЛЬНОГО РАЗДЕЛА', 'FOR THE FINAL SECTION'), rows: [
                { k: L('Формулировка', 'Wording'), v: L('Когда рынок занят серьёзным игроком, выбери другой тон. Различие в характере тоже продукт', 'When a serious player holds the market, pick another tone. A difference in character is also a product') },
                { k: L('Опора', 'Support'), v: L('Calm сделал подход играючи и мягче, чем соперники вроде Headspace (S4)', 'Calm made its approach playful and softer than rivals like Headspace (S4)') },
                { k: L('Оговорка', 'Caveat'), v: L('Это слова основателей. Какая часть успеха пришла от тона, а какая от времени и сна, мы не знаем', 'These are the founders\' words. How much of the success came from tone and how much from timing and sleep we do not know') },
            ] },
        ] },
        { id: 'p7', n: '7', title: L('Что переносимо тебе', 'What transfers to you'), kicker: L('Три упражнения на этой неделе', 'Three exercises for this week'), xp: 25, blocks: [
            { t: 'card', icon: 'rules', title: L('Что делать', 'What to do'), label: L('ПЕРЕНОС', 'TRANSFER'), rows: [
                { k: L('1. Выбери тон', '1. Pick a tone'), v: L('Чем твой голос отличается от лидера рынка, и это правда твой голос?', 'How does your voice differ from the market leader, and is it truly yours?') },
                { k: L('2. Найди ежедневный повод', '2. Find the daily reason'), v: L('Что человек будет делать каждый день, чтобы вернуться? Daily Calm был таким поводом.', 'What will a person do every day to come back? Daily Calm was such a reason.') },
                { k: L('3. Пройди сто встреч', '3. Do a hundred meetings'), v: L('Calm искал первых ангелов полгода и больше чем у сотни людей (S4). Сколько встреч ты готов пройти?', 'Calm spent half a year and over 100 meetings finding its first angels (S4). How many meetings are you ready for?') },
            ] },
            { t: 'card', icon: 'bulb', title: L('Вопрос для себя', 'A question for yourself'), label: L('ПОДУМАЙ', 'THINK'), rows: [
                { k: L('Вопрос', 'Question'), v: L('Что в моём продукте скажет за меня, что я другой, без слов «лучше»?', 'What in my product says I am different without saying "better"?') },
            ] },
        ] },
    ];
    const PUZZLES: Puzzle[] = [
        { id: 'pz1', title: L('Пазл 1. Бесплатные соперники', 'Puzzle 1. Free rivals'), xp: 20, src: ['S4'],
          setup: L('Вокруг много бесплатных приложений, а ты просишь деньги. Что делаешь?', 'There are many free apps and you ask for money. What do you do?'),
          options: [
            { text: L('Делаешь всё бесплатным', 'Make everything free'), verdict: L('Не то, что сделал Calm.', 'Not what Calm did.') },
            { text: L('Выбираешь свой тон и сильный контент в одном месте', 'Pick your tone and strong content in one place'), verdict: L('Так и поступил Calm, по словам основателей.', 'That is what Calm did, per the founders.') },
            { text: L('Копируешь лидера', 'Copy the leader'), verdict: L('Calm сознательно отличался от Headspace.', 'Calm deliberately differed from Headspace.') },
          ], best: 1, fact: L('CNBC, 2025 (S4) и TechCrunch, 2020 (S1). Это слова основателей.', 'CNBC, 2025 (S4) and TechCrunch, 2020 (S1). These are the founders\' words.') },
    ];
    const DIALOGUE: DNode[] = [
        { id: 'd1', speaker: L('Инвестор (ИИ-реконструкция)', 'Investor (AI reconstruction)'), text: L('Зачем платить за медитацию, если есть бесплатное?', 'Why would anyone pay for meditation when there are free options?'), choices: [
            { text: L('У нас один сильный преподаватель, одно место и ежедневная практика', 'We have one strong teacher, one place and a daily practice'), reply: L('Это близко к ответу Эктона Смита в интервью (S1).', 'This is close to Acton Smith\'s answer in the interview (S1).'), good: true },
            { text: L('Бесплатное хуже', 'Free is worse'), reply: L('Это общая фраза без причины.', 'This is a general statement without a reason.'), good: false },
        ] },
    ];
    return {
        id: 'calm', no: '26', company: 'Calm', year: '2012',
        title: L('Calm: как «ужасная» идея про сон и тишину стала приложением за 2 миллиарда', 'Calm: how a "terrible" idea about sleep and stillness became a $2 billion app'),
        sub: L('Полгода поиска ангелов, 8 млн загрузок без маркетинга и единорог за семь лет.', 'Six months to find angels, 8 million downloads before marketing and a unicorn in seven years.'),
        eyebrow: L('ГЛАВА 26', 'CHAPTER 26'),
        sources: SOURCES, parts: PARTS, puzzles: PUZZLES, dialogue: DIALOGUE,
        tips: [L('Выбери свой тон.', 'Pick your tone.')],
    };
};

export const CALM = build(false);
export const CALM_EN = build(true);
