import { H } from './bio';
const build = (en: boolean) => {
    const L = (ru: string, e: string) => (en ? e : ru);
    const h = H(L, en);
    const S = [
        h.src('S1', 'Компания (первичный, самоописание)', 'Company (primary, self-description)', 'Ford Motor Company: The Moving Assembly Line and the Five-Dollar Workday', 'Ford Motor Company: The Moving Assembly Line and the Five-Dollar Workday', 'https://corporate.ford.com/articles/history/moving-assembly-line/'),
        h.src('S2', 'Музей', 'Museum', 'The Henry Ford: Ford\'s Five Dollar Day Revolution', 'The Henry Ford: Ford\'s Five Dollar Day Revolution', 'https://www.thehenryford.org/collections/explore/articles/fords-five-dollar-day'),
        h.src('S3', 'Библиотека Конгресса США', 'Library of Congress', 'Ford Implements the Moving Assembly Line (This Month in Business History)', 'Ford Implements the Moving Assembly Line (This Month in Business History)', 'https://guides.loc.gov/this-month-in-business-history/October/Ford'),
        h.src('S4', 'Документальный проект', 'Documentary project', 'PBS American Experience: The Life of Henry Ford', 'PBS American Experience: The Life of Henry Ford', 'https://www.pbs.org/wgbh/americanexperience/features/henryford/'),
        h.src('S5', 'Журнал экономической истории', 'Journal of Economic History', 'The Model T (Cambridge University Press, 2025)', 'The Model T (Cambridge University Press, 2025)', 'https://www.cambridge.org/core/journals/journal-of-economic-history/article/model-t/A783993184F1741EDC6F6A76B9D6D98D'),
    ];
    const P = [
        h.part('p0', '0', 'Пролог: кто и почему', 'Prologue: who and why', 'Зачем разбирать Форда сегодня', 'Why break down Ford today', '1903-1925', [
            h.p('Генри Форд ввёл движущийся конвейер на заводе Highland Park в Мичигане в октябре 1913 года (S3). Время сборки Model T сократилось с 12,5 часа до 93 минут (S3, S2).', 'Henry Ford introduced the moving assembly line at the Highland Park plant in Michigan in October 1913 (S3). Assembly time for the Model T fell from 12.5 hours to 93 minutes (S3, S2).', ['S2', 'S3']),
            h.fact('Цена Model T', 'Model T price', 'Упала с 825 или 850 долларов в 1908 до 260 в 1924-1925 (источники расходятся)', 'Fell from $825 or $850 in 1908 to $260 in 1924-1925 (sources differ)', ['S1', 'S3']),
            h.w('Границы разбора', 'Limits of the breakdown', 'Это разбор бизнес-логики по открытым источникам. Мы не оцениваем личность и не разбираем взгляды Форда, которые выходят за тему.', 'This is a breakdown of business logic from open sources. We do not assess the person or discuss Ford\'s views beyond the topic.'),
            h.hdrCard(),
        ]),
        h.part('p1', '1', 'Старт и условия', 'Starting conditions', 'Что было до Model T', 'What came before the Model T', '1903-1908', [
            h.p('PBS: с 1903 по 1908 год компания выпустила девять разных моделей, от A до S. Самой успешной была Model N, в рекламе её описывали как «качественный, практичный автомобиль», поднятый «из списка роскоши». Её продажи предвещали успех Model T (S4).', 'PBS: between 1903 and 1908 the company made nine different cars, Models A to S. The most successful, the Model N, was advertised as "a high-grade, practical automobile" raised "out of the list of luxuries". Its sales foreshadowed the success of the Model T (S4).', ['S4']),
            h.g('Не нашёл в этих источниках: стартовый капитал Ford Motor Company и роль отдельных инвесторов. Не придумываем.', 'Not found in these sources: Ford Motor Company\'s starting capital and the roles of individual investors. We do not invent them.'),
        ]),
        h.part('p2', '2', 'Атомы: что делает машину дорогой', 'Atoms: what makes a car expensive', 'Время и разброс деталей', 'Time and parts variation', '1908-1913', [
            h.p('Cambridge: дизайн сделал Model T популярной, но доступной для среднего класса её сделало сочетание дизайна с массовым производством. Элементы массового производства, например стандартизация деталей, использовались и раньше. В 1910 производство переехало на новый завод Highland Park, и серия улучшений привела в 1913 к новому применению движущейся линии (S5).', 'Cambridge: the Model T\'s design made it popular, but the combination of design with mass production made it affordable to the middle class. Elements of mass production, such as part standardization, were already in use. In 1910 production moved to the new Highland Park plant and a series of improvements culminated in 1913 with the novel use of a moving assembly line (S5).', ['S5']),
            h.p('Библиотека Конгресса: идея конвейера вдохновлена другими отраслями, такими как пекарни, мельницы, пивоварни и мясоперерабатывающие заводы (S3). Форд, по его словам в источнике компании, перенёс работу к рабочим, а не рабочих к машине (S1).', 'The Library of Congress: the idea of the line was inspired by other industries such as bakeries, mills, breweries and meat packing plants (S3). Ford, per the company source, brought the work to the workers instead of the workers moving around the vehicle (S1).', ['S1', 'S3']),
            h.lad('Лестница рассуждения (наша реконструкция по источникам)', 'Ladder of reasoning (our reconstruction from sources)', [
                ['Атом: цена машины это время труда и разброс деталей (S5)', 'Atom: the price of a car is labour time and parts variation (S5)'],
                ['Сократи время: пусть работа идёт к человеку, а не человек к работе (S1)', 'Cut the time: bring the work to the person, not the person to the work (S1)'],
                ['Снизь цену: время ушло, цена падает, рынок растёт (S2, S3)', 'Lower the price: the time went, the price falls, the market grows (S2, S3)'],
            ]),
        ]),
        h.part('p3', '3', 'Ход: конвейер и пять долларов', 'The move: the line and five dollars', 'Скука на линии и ответ в пять долларов', 'Boredom on the line and the five-dollar answer', '1913-1914', [
            h.p('Рабочие находили конвейер скучным, потому что делали одну-две операции вместо сборки целой машины. Им не нравился и жёсткий ритм. Они начали уходить к конкурентам (S1). По музею Henry Ford, некоторые опаздывали и прогуливали, многие просто увольнялись (S2).', 'Workers found the line boring because they did one or two tasks instead of building a whole vehicle. They also disliked the strict timing. They began leaving for competitors (S1). Per The Henry Ford, some took to lateness and absenteeism, many simply quit (S2).', ['S1', 'S2']),
            h.p('5 января 1914 года Форд и вице-президент Джеймс Казенс объявили, что удваивают зарплату до пяти долларов в день (S2). Одновременно сократили смену на час, что позволило ввести третью смену и работать круглосуточно (S1).', 'On January 5, 1914, Ford and vice president James Couzens announced they would double wages to five dollars a day (S2). They also cut the shift by an hour, which allowed a third shift and 24-hour operation (S1).', ['S1', 'S2']),
            h.w('Это не просто повышение', 'It was not simply a raise', 'The Henry Ford: это была программа участия в прибыли, а не повышение. Рабочий со ставкой 2,30 в день получал её и по новой схеме, но чтобы получить пять, нужно было выполнить требования компании. Среди них: не пить, не бить семью, не брать жильцов, держать дом в чистоте, регулярно откладывать на счёт (S2).', 'The Henry Ford: it was a profit-sharing plan, not a raise. A worker on $2.30 a day kept that under the new scheme, but to get five he had to meet the company\'s requirements. These included no alcohol, no abuse of family, no boarders, a clean home and regular savings (S2).', ['S2']),
            h.w('Спор о причинах', 'The dispute about causes', 'Музей перечисляет версии: оправдать ускорение конвейера, остановить текучесть, чистая филантропия, расчёт. Источники не выбирают одну (S2).', 'The museum lists the theories: justifying the line speed-up, countering turnover, pure philanthropy, calculation. The sources do not pick one (S2).', ['S2']),
        ]),
        h.part('p4', '4', 'Цифры', 'The numbers', 'Время, цена и где источники расходятся', 'Time, price and where sources differ', '1908-1925', [
            h.chart('Время сборки Model T, минуты', 'Model T assembly time, minutes', [
                { label: ['До', 'Before'], value: 750, text: '750' }, { label: ['После', 'After'], value: 93, text: '93' },
            ], '12,5 часа это 750 минут. По источникам (S2, S3).', '12.5 hours is 750 minutes. Per sources (S2, S3).', ['S2', 'S3']),
            h.chart('Цена Model T, доллары', 'Model T price, dollars', [
                { label: ['1908', '1908'], value: 850, text: '850' }, { label: ['1914', '1914'], value: 490, text: '490' }, { label: ['1924', '1924'], value: 260, text: '260' },
            ], 'Для 1908 взята цифра Библиотеки Конгресса (S3), у Ford 825 (S1).', 'For 1908 the Library of Congress figure is used (S3), Ford says 825 (S1).', ['S1', 'S3']),
            h.w('Расхождение: цена в 1908', 'Discrepancy: the 1908 price', 'Ford Motor Company: 825 долларов в 1908, 260 в 1925 (S1). Библиотека Конгресса: 850 в 1908, 490 в 1914, 260 в 1924, это примерно 8 200 нынешних долларов (S3). Мы показываем обе версии и не выбираем.', 'Ford Motor Company: $825 in 1908, $260 in 1925 (S1). The Library of Congress: $850 in 1908, $490 in 1914, $260 in 1924, about $8,200 in today\'s dollars (S3). We show both and do not choose.', ['S1', 'S3']),
        ]),
        h.part('p5', '5', 'Цена хода', 'The cost of the move', 'Монотонность, текучесть и контроль над жизнью', 'Monotony, turnover and control over life', '1913-1914', [
            h.p('Музей: взрывной рост производства достался ценой удовлетворённости рабочих. Цель конвейера была превратить квалифицированное ремесло в простые, повторяющиеся операции, и те, кто гордился работой, быстро скучали (S2). Форд, как пишет сама компания, оказался в ситуации, когда люди уходили (S1).', 'The museum: explosive production gains came at the cost of worker satisfaction. The goal of the line was to turn skilled craft into simple, rote tasks, and those who had taken pride in their labour quickly got bored (S2). Ford, as the company itself writes, found people leaving (S1).', ['S1', 'S2']),
            h.p('Побочный эффект: «фордизм», то есть массовое производство плюс повышенные зарплаты, распространился по другим отраслям (S1).', 'A side effect: "Fordism", mass production combined with higher wages, spread to other industries (S1).', ['S1']),
        ]),
        h.part('p6', '6', 'Первые принципы', 'First principles', 'Что остаётся, если убрать завод', 'What remains if you remove the factory', '1913', [
            h.p('До атомов. Цена продукта это время и разброс. Сократи время, и цена падает. Но ускорение имеет цену в людях, и ей нужно управлять. Ford делал это зарплатой, и источники показывают, что у этого решения были условия и спорные мотивы.', 'To atoms. A product\'s price is time and variation. Cut the time and the price falls. But speed has a human cost and it must be managed. Ford did it through pay, and the sources show that this decision had conditions and disputed motives.'),
            h.card('stone', 'Закон, который виден (гипотеза)', 'A visible law (hypothesis)', 'ГИПОТЕЗА', 'HYPOTHESIS', [
                ['Формулировка', 'Wording', 'Когда резко снижаешь время и цену, плати за людей, которые это держат, иначе потеряешь их', 'When you sharply cut time and price, pay for the people who hold it up, or you will lose them'],
                ['Опора', 'Support', 'Текучесть из-за монотонности и ответ в виде пяти долларов (S1, S2)', 'Turnover from monotony and the five-dollar response (S1, S2)'],
                ['Оговорка', 'Caveat', 'Музей называет несколько возможных причин решения, не одну (S2)', 'The museum lists several possible reasons for the decision, not one (S2)'],
            ]),
        ]),
        h.part('p7', '7', 'Что переносимо тебе', 'What transfers to you', 'Три упражнения на неделю', 'Three exercises for the week', '', [
            h.card('rules', 'Что делать', 'What to do', 'ПЕРЕНОС', 'TRANSFER', [
                ['1. Засеки время', '1. Time it', 'Сколько часов уходит на твой главный продукт от начала до конца? Выпиши шаги.', 'How many hours does your main product take end to end? Write out the steps.'],
                ['2. Убери ходьбу', '2. Remove the walking', 'Где человек ходит к работе вместо того, чтобы работа шла к нему?', 'Where does a person walk to the work instead of the work coming to them?'],
                ['3. Назови цену ускорения', '3. Name the price of speed', 'Кто в твоей команде заплатит за ускорение и что ты им дашь?', 'Who on your team pays for the speed-up and what will you give them?'],
            ]),
        ]),
    ];
    return h.wrap({ id: 'ford', no: '30', name: 'Форд', year: '1913', tr: 'Форд: как время сборки стало ценой и чем за это заплатили люди', te: 'Ford: how assembly time became price and what people paid for it', sr: 'Движущийся конвейер, пять долларов в день и цена Model T, по открытым источникам.', se: 'The moving assembly line, five dollars a day and the Model T price, from open sources.' }, S, P,
        { tr: 'Пазл. Цена ускорения', te: 'Puzzle. The price of speed', sr: 'Ты резко ускорил производство, но люди начали уходить. Что делаешь?', se: 'You sped up production sharply but people started leaving. What do you do?', opts: [
            ['Ничего, рынок труда большой', 'Nothing, the labour market is large', 'Ford видел потери работников (S1).', 'Ford saw workers leaving (S1).'],
            ['Меняешь условия труда и платишь, не теряя темпа', 'Change the working terms and pay, without losing pace', 'Так поступил Ford: пять долларов и сокращение смены (S1, S2).', 'This is what Ford did: five dollars and a shorter shift (S1, S2).'],
            ['Замедляешь линию', 'Slow the line', 'Источники этого не описывают.', 'The sources do not describe this.'],
        ], best: 1, fr: 'S1, S2. Мотивы решения спорны.', fe: 'S1, S2. The motives of the decision are disputed.' },
        { sp: ['Рабочий (ИИ-реконструкция)', 'Worker (AI reconstruction)'], q: ['Я делаю одну операцию весь день. Почему мне оставаться?', 'I do one operation all day. Why should I stay?'], a: ['За повышенную оплату и короткую смену, но условия честно назвать', 'For higher pay and a shorter shift, with the conditions named honestly', 'Так выглядела политика Ford, вместе с условиями (S2).', 'This is what Ford\'s policy looked like, along with its conditions (S2).'], b: ['Работа есть работа', 'A job is a job', 'Именно из-за такого ответа люди и уходили (S1).', 'This kind of answer is why people left (S1).'] },
        ['Заплати за ускорение.', 'Pay for the speed-up.']);
};
export const FORD = build(false);
export const FORD_EN = build(true);
