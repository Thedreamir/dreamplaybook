import type { Source, Part, Puzzle, DNode, Chapter, Block } from './types';
type L2 = (ru: string, en: string) => string;
export const H = (L: L2, en: boolean) => ({
    p: (ru: string, e: string, src?: string[]): Block => ({ t: 'p', text: L(ru, e), src }),
    w: (tr: string, te: string, ru: string, e: string, src?: string[]): Block => ({ t: 'warn', title: L(tr, te), text: L(ru, e), src }),
    g: (ru: string, e: string): Block => ({ t: 'gap', text: L(ru, e) }),
    fact: (lr: string, le: string, vr: string, ve: string, src?: string[]): Block => ({ t: 'fact', label: L(lr, le), value: L(vr, ve), src }),
    lad: (tr: string, te: string, steps: [string, string][]): Block => ({ t: 'ladder', title: L(tr, te), steps: steps.map(s => L(s[0], s[1])) }),
    card: (icon: string, tr: string, te: string, lr: string, le: string, rows: [string, string, string, string][]): Block => ({ t: 'card', icon, title: L(tr, te), label: L(lr, le), rows: rows.map(r => ({ k: L(r[0], r[1]), v: L(r[2], r[3]) })) }),
    chart: (tr: string, te: string, bars: { label: [string, string]; value: number; text: string }[], nr: string, ne: string, src?: string[]): Block => ({ t: 'chart', title: L(tr, te), bars: bars.map(b => ({ label: L(b.label[0], b.label[1]), value: b.value, text: b.text })), note: L(nr, ne), src }),
    part: (id: string, n: string, tr: string, te: string, kr: string, ke: string, era: string, blocks: Block[]): Part => ({ id, n, title: L(tr, te), kicker: L(kr, ke), xp: 20, era, blocks } as Part),
    src: (id: string, kr: string, ke: string, tr: string, te: string, url: string): Source => ({ id, kind: L(kr, ke), title: L(tr, te), url }),
    hdrCard: (): Block => ({ t: 'card', icon: 'target', title: L('Как читать разбор', 'How to read the breakdown'), label: L('МЕТКИ ЧЕСТНОСТИ', 'HONESTY LABELS'), rows: [
        { k: '[S1, S2...]', v: L('Источник. Нажми на метку, чтобы увидеть, откуда факт.', 'Source. Tap the label to see where the fact comes from.') },
        { k: L('Не нашёл', 'Not found'), v: L('Данных в открытых источниках нет. Автор их не придумывает.', 'The data is not in open sources. The author does not invent it.') },
        { k: L('ИИ-реконструкция', 'AI reconstruction'), v: L('Сцена или реплика придуманы для тренировки.', 'A scene or line invented for practice.') },
    ] }),
    wrap: (meta: { id: string; no: string; name: string; year: string; tr: string; te: string; sr: string; se: string }, sources: Source[], parts: Part[], puzzle: { tr: string; te: string; sr: string; se: string; opts: [string, string, string, string][]; best: number; fr: string; fe: string }, dlg: { sp: [string, string]; q: [string, string]; a: [string, string, string, string]; b: [string, string, string, string] }, tip: [string, string]): Chapter => ({
        id: meta.id, no: meta.no, company: meta.name, year: meta.year, title: L(meta.tr, meta.te), sub: L(meta.sr, meta.se), eyebrow: L('РАЗБОР ' + meta.no, 'BREAKDOWN ' + meta.no),
        sources, parts,
        puzzles: [{ id: 'pz1', title: L(puzzle.tr, puzzle.te), xp: 20, src: ['S1'], setup: L(puzzle.sr, puzzle.se), options: puzzle.opts.map(o => ({ text: L(o[0], o[1]), verdict: L(o[2], o[3]) })), best: puzzle.best, fact: L(puzzle.fr, puzzle.fe) } as any],
        dialogue: [{ id: 'd1', speaker: L(dlg.sp[0], dlg.sp[1]), text: L(dlg.q[0], dlg.q[1]), choices: [
            { text: L(dlg.a[0], dlg.a[1]), reply: L(dlg.a[2], dlg.a[3]), good: true },
            { text: L(dlg.b[0], dlg.b[1]), reply: L(dlg.b[2], dlg.b[3]), good: false },
        ] } as any],
        tips: [L(tip[0], tip[1])],
    } as Chapter),
});
