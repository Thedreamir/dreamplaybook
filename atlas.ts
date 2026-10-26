import type { Chapter, Part, Block } from './types';

const GROUPS: { id: string; ru: string; en: string; kr: string; ke: string; from: number; to: number }[] = [
    { id: 'p1', ru: 'Продукты и сервисы, часть 1', en: 'Products and services, part 1', kr: 'Главы 1-9', ke: 'Chapters 1-9', from: 1, to: 9 },
    { id: 'p2', ru: 'Продукты и сервисы, часть 2', en: 'Products and services, part 2', kr: 'Главы 10-18', ke: 'Chapters 10-18', from: 10, to: 18 },
    { id: 'p3', ru: 'Продукты и сервисы, часть 3', en: 'Products and services, part 3', kr: 'Главы 19-26', ke: 'Chapters 19-26', from: 19, to: 26 },
    { id: 'p4', ru: 'Законы', en: 'Laws', kr: 'Главы 27-28', ke: 'Chapters 27-28', from: 27, to: 28 },
    { id: 'p5', ru: 'Разборы от первых принципов', en: 'First-principles breakdowns', kr: 'Главы 29-34', ke: 'Chapters 29-34', from: 29, to: 34 },
];

export const atlasOf = (list: Chapter[], en: boolean): Chapter => {
    const L = (ru: string, e: string) => (en ? e : ru);
    const num = (c: Chapter) => parseInt(c.no, 10);
    const parts: Part[] = GROUPS.map((g, i): Part => ({
        id: g.id, n: String(i), title: L(g.ru, g.en), kicker: L(g.kr, g.ke), xp: 10, era: '',
        blocks: list.filter(c => num(c) >= g.from && num(c) <= g.to).map((c): Block => ({
            t: 'card', icon: 'stone', title: `${c.no} ${c.company}`, label: c.year,
            rows: [{ k: L('Глава', 'Chapter'), v: c.title }, { k: L('О чём', 'About'), v: c.sub }],
        })),
    }));
    const dated = list.filter(c => /^\d{4}/.test(c.year)).sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10) || num(a) - num(b));
    parts.push({ id: 'pt', n: '5', title: L('Хронология по годам глав', 'Timeline by chapter year'), kicker: L('Год из карточки главы', 'The year on each chapter'), xp: 10, era: '', blocks: [
        { t: 'p', text: L('Год здесь тот, что указан на самой главе: у компаний обычно год старта, у разборов год ключевого эпизода. Это не единая шкала событий, а порядок глав по их собственным годам.', 'The year is the one shown on each chapter: usually the start year for companies and the key episode year for breakdowns. This is not a single event scale, only the chapters ordered by their own years.') },
        ...dated.map((c): Block => ({ t: 'fact', label: c.year, value: `${c.no} ${c.company}` })),
    ] });
    parts.push({ id: 'p6', n: '6', title: L('Как пользоваться атласом', 'How to use the atlas'), kicker: L('Это указатель', 'This is an index'), xp: 10, blocks: [
        { t: 'p', text: L('Атлас ничего не добавляет к фактам. Каждая карточка берёт название, год и описание из самой главы. Источники, расхождения и оговорки смотри внутри глав.', 'The atlas adds nothing to the facts. Each card takes the name, year and description from the chapter itself. See the chapters for sources, discrepancies and caveats.') },
        { t: 'p', text: L('Хронология выше упорядочена по году на карточке главы. Точные даты событий внутри глав в неё не входят.', 'The timeline above is ordered by the year on each chapter. Exact event dates inside chapters are not part of it.') },
    ] });
    return {
        id: 'atlas', no: '35', company: L('Атлас', 'Atlas'), year: '', title: L('Атлас: все главы одним взглядом', 'Atlas: every chapter at a glance'),
        sub: L('Указатель по всем компаниям, законам и разборам тома.', 'An index of every company, law and breakdown in the volume.'),
        eyebrow: L('ГЛАВА 35', 'CHAPTER 35'), sources: [], parts,
        puzzles: [{ id: 'pz1', title: L('Пазл. Где искать', 'Puzzle. Where to look'), xp: 10, src: [],
            setup: L('Ты хочешь понять, как компании переживали нехватку денег. Куда идти сначала?', 'You want to see how companies survived running short of money. Where to go first?'),
            options: [
                { text: L('В законы (27-28)', 'The laws (27-28)'), verdict: L('Да, там сведены повторяющиеся закономерности с контрпримерами.', 'Yes, repeating patterns are gathered there with counterexamples.') },
                { text: L('В указатель имён', 'The name index'), verdict: L('Атлас только указывает на главы.', 'The atlas only points to chapters.') },
            ], best: 0, fact: L('Подсказка по навигации, не факт о компаниях.', 'A navigation hint, not a fact about companies.') }],
        dialogue: [], tips: [L('Начни с главы, чья история ближе к твоей.', 'Start with the chapter whose story is closest to yours.')],
    };
};
