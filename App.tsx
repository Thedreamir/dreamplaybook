import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocalState } from './storage';
import './style.css';
import { CHAPTERS } from './books';
import type { Block, Chapter } from './types';

type Prog = {
    done: string[]; xp: number; streak: number; last: string; hl: string[]; chests: string[];
    pz: Record<string, number>; dlg: string[];
    theme: string; font: string; size: number; bright: number;
};
const INIT: Prog = { done: [], xp: 0, streak: 0, last: '', hl: [], chests: [], pz: {}, dlg: [], theme: 'oled', font: 'serif', size: 18, bright: 100 };
const today = () => new Date().toISOString().slice(0, 10);
const yesterday = () => new Date(Date.now() - 86400000).toISOString().slice(0, 10);

function Icon({ name }: { name: string }) {
    const c = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
    const paths: Record<string, React.ReactNode> = {
        target: <><circle cx="12" cy="12" r="8" {...c} /><circle cx="12" cy="12" r="3.5" {...c} /></>,
        layers: <><path d="M12 3l9 5-9 5-9-5 9-5z" {...c} /><path d="M3 13l9 5 9-5" {...c} /></>,
        flame: <path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 2 2 2 0-3-1-5 1-8z" {...c} />,
        users: <><circle cx="9" cy="8" r="3" {...c} /><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" {...c} /><path d="M16 5.5a3 3 0 0 1 0 5M18 14c2 .7 3 2.6 3 5" {...c} /></>,
        coins: <><ellipse cx="12" cy="7" rx="7" ry="3" {...c} /><path d="M5 7v5c0 1.7 3 3 7 3s7-1.3 7-3V7M5 12v5c0 1.7 3 3 7 3s7-1.3 7-3v-5" {...c} /></>,
        chart: <path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6" {...c} />,
        rules: <path d="M5 4h14v16H5zM9 9h6M9 13h6" {...c} />,
        stone: <path d="M6 20V9l6-5 6 5v11zM10 20v-6h4v6" {...c} />,
        path: <path d="M4 18c5 0 3-6 8-6s3-6 8-6" {...c} />,
        book: <path d="M5 4h10a4 4 0 0 1 4 4v12H9a4 4 0 0 1-4-4zM5 16a4 4 0 0 1 4-4h10" {...c} />,
        puzzle: <path d="M9 4h4v3a2 2 0 1 0 4 0V4h3v6h-3a2 2 0 1 0 0 4h3v6H9v-3a2 2 0 1 0-4 0v3H4v-6h3a2 2 0 1 0 0-4H4V4z" {...c} />,
        chat: <path d="M4 5h16v11H9l-5 4z" {...c} />,
        bulb: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3 11c1 1 1 2 1 3h4c0-1 0-2 1-3a6 6 0 0 0-3-11z" {...c} />,
        gear: <><circle cx="12" cy="12" r="3" {...c} /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" {...c} /></>,
        check: <path d="M5 12l5 5 9-10" {...c} strokeWidth={2.6} />,
        chest: <><path d="M4 10a8 5 0 0 1 16 0v9H4z" {...c} /><path d="M4 12h16M12 12v3" {...c} /></>,
        play: <path d="M8 5l11 7-11 7z" {...c} />,
        stop: <rect x="6" y="6" width="12" height="12" rx="2" {...c} />,
        share: <path d="M12 15V4M8 8l4-4 4 4M5 13v7h14v-7" {...c} />,
        copy: <><rect x="8" y="8" width="12" height="12" rx="2" {...c} /><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" {...c} /></>,
        star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" {...c} />,
        send: <path d="M4 12l16-8-6 16-3-6z" {...c} />,
    };
    return <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">{paths[name] ?? paths.target}</svg>;
}

const STOP = new Set(['что', 'как', 'это', 'для', 'или', 'при', 'про', 'его', 'она', 'они', 'был', 'была', 'были', 'есть', 'ли', 'и', 'в', 'на', 'не', 'по', 'с', 'о', 'у', 'к', 'за', 'из', 'от', 'до', 'же', 'так', 'такое', 'почему', 'сколько', 'какой', 'какая']);
const stem = (w: string) => w.toLowerCase().replace(/[^a-zа-яё0-9]/gi, '').slice(0, 5);
const tokens = (s: string) => s.split(/\s+/).map(stem).filter(w => w.length > 1 && !STOP.has(w));

type Chunk = { text: string; src: string[]; part: string };
const chunksOf = (PARTS: Chapter['parts']): Chunk[] => PARTS.flatMap(p => p.blocks.flatMap((b): Chunk[] => {
    if (b.t === 'p') return [{ text: b.text, src: b.src ?? [], part: p.title }];
    if (b.t === 'fact') return [{ text: b.label + ': ' + b.value, src: b.src ?? [], part: p.title }];
    if (b.t === 'warn') return [{ text: b.title + '. ' + b.text, src: b.src ?? [], part: p.title }];
    if (b.t === 'gap') return [{ text: b.text, src: [], part: p.title }];
    if (b.t === 'card') return [{ text: b.title + '. ' + b.rows.map(r => r.k + ': ' + r.v).join('. '), src: b.src ?? [], part: p.title }];
    return [];
}));
function answer(CHUNKS: Chunk[], q: string): { text: string; src: string[]; part?: string } {
    const qt = tokens(q);
    if (!qt.length) return { text: 'Задай вопрос по материалу главы. Например: что здесь главное?', src: [] };
    const scored = CHUNKS.map(c => {
        const ct = tokens(c.text);
        const score = qt.reduce((a, t) => a + (ct.includes(t) ? 1 : 0), 0);
        return { c, score };
    }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);
    if (!scored.length || scored[0].score < 1) return { text: 'В материале этой главы про это ничего нет. Я отвечаю только по главе и не буду выдумывать.', src: [] };
    const top = scored[0].c;
    return { text: top.text, src: top.src, part: top.part };
}

function Confetti() {
    const items = useMemo(() => Array.from({ length: 28 }, (_, i) => ({ i, left: (i * 37) % 100, delay: (i % 7) * 0.06, dur: 1.1 + (i % 5) * 0.18, hue: i % 3 })), []);
    return <div className="confetti" aria-hidden="true">{items.map(x => <span key={x.i} style={{ left: x.left + '%', animationDelay: x.delay + 's', animationDuration: x.dur + 's' }} data-h={x.hue} />)}</div>;
}

function Sup({ src, onSrc }: { src?: string[]; onSrc: () => void }) {
    if (!src || !src.length) return null;
    return <button className="chip" onClick={e => { e.stopPropagation(); onSrc(); }} aria-label={'Источники ' + src.join(', ')}>{src.join(' ')}</button>;
}

const accOf = (id: string) => String(Math.max(0, CHAPTERS.findIndex(c => c.id === id)) % 8);
const KW = /(\$\s?\d[\d\s.,]*(?:\s?(?:млн|млрд|тыс\.?))?|\d[\d\s.,]*\s?(?:%|млн|млрд|тыс\.|долл\.|\$)|«[^»]{2,40}»)/g;
function Rich({ text }: { text: string }) {
    const parts = text.split(KW);
    return <>{parts.map((t, i) => i % 2 ? <mark key={i} className="kw">{t}</mark> : t)}</>;
}
function BlockView({ b, id, hl, toggle, onSrc }: { b: Block; id: string; hl: boolean; toggle: () => void; onSrc: () => void }) {
    if (b.t === 'p') return <p className={'para' + (hl ? ' is-hl' : '')} onClick={toggle} data-id={id}><Rich text={b.text} /> <Sup src={b.src} onSrc={onSrc} /></p>;
    if (b.t === 'fact') return <div className={'fact glass' + (hl ? ' is-hl' : '')} onClick={toggle}><span className="fact-l">{b.label}</span><span className="fact-v">{b.value} <Sup src={b.src} onSrc={onSrc} /></span></div>;
    if (b.t === 'gap') return <div className="gap"><b>Не нашёл.</b> {b.text.replace(/^Не нашёл: /, '')}</div>;
    if (b.t === 'img') return <figure className="fig"><img src={b.file} alt={b.alt} loading="lazy" /><figcaption>{b.caption} <a href={b.url || '#'} target="_blank" rel="noreferrer">{b.credit}</a></figcaption></figure>;
    if (b.t === 'stickers') return <div className="stickers">{b.items.map((s, i) => <div key={i} className={'sticker t' + (i % 4)}><div><b>{s.big}</b><small>{s.small}</small></div></div>)}</div>;
    if (b.t === 'chart') { const mx = Math.log10(Math.max(...b.bars.map(x => x.value))); return <figure className="chart"><div className="chart-t">{b.title}</div>{b.bars.map((x, i) => <div className="bar-row" key={i}><span className="bar-k">{x.label}</span><span className="bar-tr"><i style={{ width: Math.max(4, Math.log10(x.value) / mx * 100) + '%' }} /></span><span className="bar-v">{x.text}</span></div>)}<figcaption>{b.note} <Sup src={b.src} onSrc={onSrc} /></figcaption></figure>; }
    if (b.t === 'video') return <a className="vid" href={b.url} target="_blank" rel="noreferrer"><span className="vid-ic">▶</span><span><b>{b.title}</b><small>{b.note}</small></span></a>;
    if (b.t === 'warn') return <div className="warn glass"><div className="warn-t">{b.title}</div><p>{b.text} <Sup src={b.src} onSrc={onSrc} /></p></div>;
    if (b.t === 'ladder') return <div className="ladder glass"><div className="mx-l">ЛЕСТНИЦА АБСТРАКЦИИ</div><div className="mx-t">{b.title}</div>{b.steps.map((s, i) => <div className="rung" key={i} style={{ marginLeft: i * 10 }}><i>{i + 1}</i><span>{s}</span></div>)}</div>;
    return <div className="mx glass"><div className="mx-head"><span className="mx-ic"><Icon name={b.icon} /></span><div><div className="mx-l">{b.label}</div><div className="mx-t">{b.title}</div></div></div>{b.rows.map((r, i) => <div className="mx-row" key={i}><div className="mx-k">{r.k}</div><div className="mx-v">{r.v}</div></div>)}{b.src ? <Sup src={b.src} onSrc={onSrc} /> : null}</div>;
}

function Reader({ ch, onBack }: { ch: Chapter; onBack: () => void }) {
    const { parts: PARTS, puzzles: PUZZLES, dialogue: DIALOGUE, sources: SOURCES, tips: BUDDY_TIPS } = ch;
    const CHUNKS = useMemo(() => chunksOf(PARTS), [PARTS]);
    const [p, setP, saved] = useLocalState<Prog>(ch.id === 'duolingo' ? 'duo-ref.v1' : 'pb.' + ch.id + '.v1', INIT);
    const [tab, setTab] = useState<'path' | 'read' | 'practice' | 'buddy' | 'notes'>('path');
    const [part, setPart] = useState(0);
    const [sheet, setSheet] = useState<'' | 'settings' | 'sources'>('');
    const [boom, setBoom] = useState(false);
    const [toast, setToast] = useState('');
    const [speaking, setSpeaking] = useState(false);
    const [chat, setChat] = useState<{ me: boolean; text: string; src?: string[]; part?: string }[]>([{ me: false, text: 'Я бадди этой главы. Отвечаю только тем, что есть в материале, с указанием источника. Выбери вопрос или напиши свой.' }]);
    const [q, setQ] = useState('');
    const [dstep, setDstep] = useState(0);
    const [dpick, setDpick] = useState<number | null>(null);
    const scroller = useRef<HTMLDivElement>(null);

    const upd = (f: (x: Prog) => Prog) => { if (saved.ready) setP(f(p)); };
    useEffect(() => { document.documentElement.setAttribute('data-theme', p.theme); try { localStorage.setItem('pb.theme', p.theme); } catch {} }, [p.theme]);
    useEffect(() => { scroller.current?.scrollTo({ top: 0 }); }, [tab, part]);
    useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(''), 1800); return () => clearTimeout(t); }, [toast]);
    useEffect(() => () => { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); }, []);

    const total = PARTS.length;
    const doneN = PARTS.filter(x => p.done.includes(x.id)).length;
    const current = PARTS.findIndex(x => !p.done.includes(x.id));

    const celebrate = (msg: string) => { setBoom(true); setToast(msg); setTimeout(() => setBoom(false), 1800); };
    const touchStreak = (x: Prog): Prog => {
        if (x.last === today()) return x;
        return { ...x, last: today(), streak: x.last === yesterday() ? x.streak + 1 : 1 };
    };
    const finish = (pt: typeof PARTS[number]) => {
        if (p.done.includes(pt.id)) { setToast('Урок уже пройден'); return; }
        upd(x => touchStreak({ ...x, done: [...x.done, pt.id], xp: x.xp + pt.xp }));
        celebrate('+' + pt.xp + ' XP');
    };
    const toggleHl = (id: string) => upd(x => ({ ...x, hl: x.hl.includes(id) ? x.hl.filter(h => h !== id) : [...x.hl, id] }));
    const speak = (text: string) => {
        if (!('speechSynthesis' in window)) { setToast('Озвучка не поддерживается в этом браузере'); return; }
        window.speechSynthesis.cancel();
        if (speaking) { setSpeaking(false); return; }
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'ru-RU'; u.onend = () => setSpeaking(false); u.onerror = () => setSpeaking(false);
        setSpeaking(true); window.speechSynthesis.speak(u);
    };
    const openChest = (id: string, need: string[]) => {
        if (p.chests.includes(id)) { setToast('Сундук уже открыт'); return; }
        if (!need.every(n => p.done.includes(n))) { setToast('Сначала пройди уроки выше'); return; }
        upd(x => touchStreak({ ...x, chests: [...x.chests, id], xp: x.xp + 30 }));
        celebrate('Сундук: +30 XP');
    };
    const ask = (text: string) => {
        if (!text.trim()) return;
        const a = answer(CHUNKS, text);
        setChat(c => [...c, { me: true, text }, { me: false, text: a.text, src: a.src, part: a.part }]);
        setQ('');
    };
    const pick = (pz: typeof PUZZLES[number], i: number) => {
        if (p.pz[pz.id] !== undefined) return;
        const good = i === pz.best;
        upd(x => touchStreak({ ...x, pz: { ...x.pz, [pz.id]: i }, xp: x.xp + (good ? pz.xp : 5) }));
        if (good) celebrate('Верно: +' + pz.xp + ' XP'); else setToast('+5 XP за попытку. Смотри разбор');
    };

    const nodes: { kind: 'part' | 'chest' | 'practice' | 'dlg'; id: string; idx?: number; need?: string[]; label: string }[] = [];
    PARTS.forEach((x, i) => {
        nodes.push({ kind: 'part', id: x.id, idx: i, label: x.title });
        if (i % 3 === 2 && i < PARTS.length - 1) nodes.push({ kind: 'chest', id: 'c' + (i + 1), need: PARTS.slice(i - 2, i + 1).map(y => y.id), label: 'Сундук ' + (i + 1) / 3 });
    });
    nodes.push({ kind: 'practice', id: 'pr', label: 'Пазлы решений' }, { kind: 'dlg', id: 'dl', label: 'Диалог: решение основателя' });
    const offs = [0, 38, 58, 38, 0, -38, -58, -38];
    const level = Math.floor(p.xp / 60) + 1;
    const fontFam = p.font === 'inter' ? 'var(--f-inter)' : p.font === 'serif' ? 'var(--f-read)' : 'var(--f-sys)';
    const readStyle = { fontSize: p.size + 'px', fontFamily: fontFam, filter: 'brightness(' + p.bright / 100 + ')' } as React.CSSProperties;
    const pt = PARTS[part];

    const dnode = DIALOGUE[dstep];

    return <div className="app" data-theme={p.theme} data-acc={accOf(ch.id)}>
        <header className="top">
            <div className="brand"><button className="ghost back" onClick={onBack} aria-label="Все главы">‹</button><span className="dot" />DreamPlaybook<small>глава {ch.no}</small></div>
            <div className="stats">
                <button className="icon-btn" onClick={() => setSheet('settings')} aria-label="Настройки чтения"><Icon name="gear" /></button>
            </div>
        </header>
        <div className="scroller" ref={scroller}>
            {tab === 'path' && <section className="pane fade">
                <div className="hero glass">
                    <div className="eyebrow">{ch.eyebrow}</div>
                    <h1>{ch.title}</h1>
                    <p className="sub">{ch.sub}</p>
                    <div className="bar"><i style={{ width: (doneN / total * 100) + '%' }} /></div>
                    <div className="bar-l">{doneN} из {total} уроков · уровень {level}</div>
                    <button className="cta" onClick={() => { setPart(Math.max(current, 0)); setTab('read'); }}>{doneN === 0 ? 'Начать' : doneN === total ? 'Перечитать' : 'Продолжить'}</button>
                    <button className="linkbtn" onClick={() => setSheet('sources')}>Источники главы ({SOURCES.length})</button>
                </div>
                <div className="skillpath">
                    {nodes.map((n, i) => {
                        const off = offs[i % offs.length];
                        const done = n.kind === 'part' ? p.done.includes(n.id) : n.kind === 'chest' ? p.chests.includes(n.id) : n.kind === 'practice' ? PUZZLES.every(z => p.pz[z.id] !== undefined) : p.dlg.includes('done');
                        const isCur = n.kind === 'part' && n.idx === current;
                        const act = () => {
                            if (n.kind === 'part') { setPart(n.idx!); setTab('read'); }
                            else if (n.kind === 'chest') openChest(n.id, n.need!);
                            else if (n.kind === 'practice') setTab('practice');
                            else { setTab('practice'); setTimeout(() => document.getElementById('dialogue')?.scrollIntoView({ behavior: 'smooth' }), 80); }
                        };
                        return <div className="pnode" key={n.id} style={{ transform: 'translateX(' + off + 'px)' }}>
                            <button className={'orb ' + n.kind + (done ? ' done' : '') + (isCur ? ' cur' : '')} onClick={act} aria-label={n.label}>
                                <Icon name={done ? 'check' : n.kind === 'chest' ? 'chest' : n.kind === 'practice' ? 'puzzle' : n.kind === 'dlg' ? 'chat' : 'book'} />
                            </button>
                            <div className="plabel">{n.label}</div>
                        </div>;
                    })}
                </div>
                <div className="blessed">Blessed by &lt;O&gt;</div>
            </section>}

            {tab === 'read' && <section className="pane fade reader" style={readStyle}>
                <div className="r-top">
                    <button className="ghost" onClick={() => setTab('path')}>← Путь</button>
                    <div className="seg">
                        <button className={!speaking ? 'on' : ''} onClick={() => { if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); } }}>Читать</button>
                        <button className={speaking ? 'on' : ''} onClick={() => speak(pt.blocks.map(b => b.t === 'p' ? b.text : b.t === 'fact' ? b.label + '. ' + b.value : '').filter(Boolean).join(' '))}><Icon name={speaking ? 'stop' : 'play'} />Слушать</button>
                    </div>
                </div>
                <div className="eyebrow">ЧАСТЬ {pt.n} · {pt.kicker.toUpperCase()}</div>
                <h2>{pt.title}</h2>
                <p className="hint">Нажми на абзац, чтобы сохранить мысль.</p>
                {pt.blocks.map((b, i) => <BlockView key={pt.id + i} b={b} id={pt.id + '-' + i} hl={p.hl.includes(pt.id + '-' + i)} toggle={() => toggleHl(pt.id + '-' + i)} onSrc={() => setSheet('sources')} />)}
                <div className="r-nav">
                    <button className="linkbtn" onClick={() => setSheet('sources')}>Источники главы</button>
                    <button className="cta" onClick={() => finish(pt)}>{p.done.includes(pt.id) ? 'Урок пройден' : 'Завершить урок +' + pt.xp + ' XP'}</button>
                    <div className="two">
                        <button className="ghost" disabled={part === 0} onClick={() => setPart(part - 1)}>← Назад</button>
                        <button className="ghost" disabled={part === total - 1} onClick={() => setPart(part + 1)}>Дальше →</button>
                    </div>
                </div>
            </section>}

            {tab === 'practice' && <section className="pane fade">
                <div className="eyebrow">ПРАКТИКА</div>
                <h2>Пазлы решений</h2>
                <p className="hint">Как шахматные задачи: выбери ход основателя, потом смотри, что было на самом деле.</p>
                {PUZZLES.map(z => {
                    const cz = p.pz[z.id];
                    return <div className="puzzle glass" key={z.id}>
                        <div className="pz-t">{z.title}</div>
                        <p>{z.setup}</p>
                        {z.options.map((o, i) => <button key={i} className={'opt' + (cz === i ? (i === z.best ? ' good' : ' bad') : '') + (cz !== undefined && i === z.best ? ' good' : '')} onClick={() => pick(z, i)} disabled={cz !== undefined}>
                            <span>{o.text}</span>{cz !== undefined && (cz === i || i === z.best) ? <em>{o.verdict}</em> : null}
                        </button>)}
                        {cz !== undefined && <div className="pz-fact"><b>Что было.</b> {z.fact} <Sup src={z.src} onSrc={() => setSheet('sources')} /></div>}
                    </div>;
                })}
                <div id="dialogue" className="puzzle glass">
                    <div className="pz-t">Сценарный диалог</div>
                    <div className="tag">ИИ-реконструкция: сцена придумана для тренировки, это не слова реальных людей</div>
                    {p.dlg.includes('done') ? <><p><b>Диалог пройден.</b> Возвращайся к нему после чтения следующих глав.</p><button className="ghost" onClick={() => { setDstep(0); setDpick(null); upd(x => ({ ...x, dlg: [] })); }}>Пройти заново</button></> : <>
                        <div className="bubble"><small>{dnode.speaker}</small>{dnode.text}</div>
                        {dnode.choices.map((c, i) => <button key={i} className={'opt' + (dpick === i ? (c.good ? ' good' : ' bad') : '')} disabled={dpick !== null} onClick={() => setDpick(i)}>
                            <span>{c.text}</span>{dpick === i ? <em>{c.reply}</em> : null}
                        </button>)}
                        {dpick !== null && <button className="cta" onClick={() => {
                            const good = dnode.choices[dpick].good;
                            if (dstep >= DIALOGUE.length - 1) { upd(x => touchStreak({ ...x, dlg: ['done'], xp: x.xp + 25 })); celebrate('Диалог пройден +25 XP'); }
                            else { setDstep(dstep + 1); if (good) setToast('Хороший ход'); }
                            setDpick(null);
                        }}>{dstep >= DIALOGUE.length - 1 ? 'Завершить' : 'Дальше'}</button>}
                    </>}
                </div>
            </section>}

            {tab === 'buddy' && <section className="pane fade buddy">
                <div className="eyebrow">БАДДИ ГЛАВЫ</div>
                <h2>Спроси по материалу</h2>
                <p className="hint">Прототип ищет ответ только в тексте этой главы и указывает источник. Генеративной модели здесь нет, поэтому он не выдумывает.</p>
                <div className="chat">
                    {chat.map((m, i) => <div key={i} className={'msg ' + (m.me ? 'me' : 'bot')}>{m.text}{m.part ? <small>Из части: {m.part}</small> : null}{m.src && m.src.length ? <Sup src={m.src} onSrc={() => setSheet('sources')} /> : null}</div>)}
                </div>
                <div className="tips">{BUDDY_TIPS.map(t => <button key={t} className="tip" onClick={() => ask(t)}>{t}</button>)}</div>
                <form className="ask" onSubmit={e => { e.preventDefault(); ask(q); }}>
                    <input value={q} onChange={e => setQ(e.target.value)} placeholder="Вопрос по главе" aria-label="Вопрос" />
                    <button className="send" aria-label="Отправить"><Icon name="send" /></button>
                </form>
            </section>}

            {tab === 'notes' && <section className="pane fade">
                <div className="eyebrow">МОИ МЫСЛИ</div>
                <h2>Сохранённое</h2>
                {p.hl.length === 0 && <p className="hint">Пока пусто. В читалке нажми на абзац или карточку, чтобы сохранить.</p>}
                {p.hl.map(id => {
                    const [pid, bi] = id.split('-'); const part_ = PARTS.find(x => x.id === pid); const b = part_?.blocks[Number(bi)]; if (!b) return null;
                    const text = b.t === 'p' ? b.text : b.t === 'fact' ? b.label + ': ' + b.value : '';
                    if (!text) return null;
                    return <div className="note glass" key={id}>
                        <div className="n-t">«{text}»</div>
                        <div className="n-f">DreamPlaybook · {ch.company} · {part_?.title}</div>
                        <div className="two">
                            <button className="ghost" onClick={() => { void navigator.clipboard?.writeText('«' + text + '»\nDreamPlaybook, ' + ch.company); setToast('Скопировано'); }}><Icon name="copy" />Копировать</button>
                            <button className="ghost" onClick={() => toggleHl(id)}>Убрать</button>
                        </div>
                    </div>;
                })}
            </section>}
        </div>

        <nav className="tabs" aria-label="Разделы">
            {([['path', 'Путь', 'path'], ['read', 'Читать', 'book'], ['practice', 'Практика', 'puzzle'], ['buddy', 'Бадди', 'chat'], ['notes', 'Мысли', 'bulb']] as const).map(([k, l, ic]) =>
                <button key={k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}><Icon name={ic} /><span>{l}</span></button>)}
        </nav>

        {boom && <Confetti />}
        {toast && <div className="toast" role="status">{toast}</div>}

        {sheet && <div className="scrim" onClick={() => setSheet('')}>
            <div className="sheet glass" onClick={e => e.stopPropagation()}>
                {sheet === 'settings' ? <>
                    <div className="sheet-t">Настройки чтения</div>
                    <div className="set-l">Тема</div>
                    <div className="seg wide">{[['oled', 'Индиго'], ['graphite', 'Серый'], ['sepia', 'Сепия'], ['light', 'Фарфор']].map(([k, l]) => <button key={k} className={p.theme === k ? 'on' : ''} onClick={() => upd(x => ({ ...x, theme: k }))}>{l}</button>)}</div>
                    <div className="set-l">Шрифт</div>
                    <div className="seg wide">{[['serif', 'Literata'], ['inter', 'Inter'], ['sys', 'Системный']].map(([k, l]) => <button key={k} className={p.font === k ? 'on' : ''} onClick={() => upd(x => ({ ...x, font: k }))}>{l}</button>)}</div>
                    <div className="set-l">Размер текста: {p.size}</div>
                    <input type="range" min={14} max={24} value={p.size} onChange={e => upd(x => ({ ...x, size: Number(e.target.value) }))} />
                    <div className="set-l">Яркость: {p.bright}%</div>
                    <input type="range" min={50} max={110} value={p.bright} onChange={e => upd(x => ({ ...x, bright: Number(e.target.value) }))} />
                    <div className="note-s">{saved.message}</div>
                    <button className="cta" onClick={() => setSheet('')}>Готово</button>
                </> : <>
                    <div className="sheet-t">Источники главы</div>
                    <div className="src-list">{SOURCES.map(s => <div className="src" key={s.id}><b>{s.id}</b><div><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a><small>{s.kind}</small></div></div>)}</div>
                    <button className="cta" onClick={() => setSheet('')}>Закрыть</button>
                </>}
            </div>
        </div>}
    </div>;
}

export function App() {
    const [open, setOpen] = useState<string | null>(() => { try { return localStorage.getItem('pb.open'); } catch { return null; } });
    const go = (id: string | null) => { setOpen(id); try { id ? localStorage.setItem('pb.open', id) : localStorage.removeItem('pb.open'); } catch {} };
    const ch = CHAPTERS.find(c => c.id === open);
    if (ch) return <Reader key={ch.id} ch={ch} onBack={() => go(null)} />;
    return <div className="app" data-theme={(() => { try { return localStorage.getItem('pb.theme') || 'oled'; } catch { return 'oled'; } })()} data-acc="0">
        <header className="top"><div className="brand"><span className="dot" />DreamPlaybook<small>том 1</small></div></header>
        <div className="scroller"><section className="pane fade">
            <div className="hero glass">
                <div className="eyebrow">ТОМ 1 · КАК РОЖДАЮТСЯ ИМПЕРИИ</div>
                <h1>Истории основателей от первых принципов</h1>
                <p className="sub">Каждая глава: рождение идеи, боль, первые пользователи, деньги, рост. Только факты с источниками, а где данных нет, так и написано.</p>
                <div className="bar-l">Глав готово: {CHAPTERS.length} из 24</div>
            </div>
            <div className="shelf">
                {CHAPTERS.map(c => <button key={c.id} className="book glass" onClick={() => go(c.id)}>
                    <span className="book-no">{c.no}</span>
                    <span className="book-b"><b>{c.company}</b><small>{c.sub}</small></span>
                    <span className="book-y">{c.year}</span>
                </button>)}
            </div>
            <div className="blessed">Blessed by &lt;O&gt;</div>
        </section></div>
    </div>;
}

