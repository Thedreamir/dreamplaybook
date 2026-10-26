import React, { useEffect, useRef, useState } from 'react';

const URL_BOOK = 'dreamplaybook.vercel.app';
const CAPS_EN = [
    'How great companies actually begin.',
    'The part founders rarely tell.',
    'A lesson worth keeping.',
    'Read it once. Remember it for years.',
    'Every empire starts small.',
];
const CAPS_RU = [
    'Так на самом деле начинаются великие компании.',
    'То, о чём основатели говорят редко.',
    'Урок, который стоит сохранить.',
    'Прочитай один раз, запомни на годы.',
    'Любая империя начинается с малого.',
];

function wrap(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
    const words = text.split(/\s+/); const lines: string[] = []; let cur = '';
    for (const w of words) { const t = cur ? cur + ' ' + w : w; if (ctx.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t; }
    if (cur) lines.push(cur); return lines;
}
const clip = (s: string, n = 420) => { if (s.length <= n) return s; const cut = s.slice(0, n); const i = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('; ')); return (i > 160 ? cut.slice(0, i + 1) : cut.replace(/\s+\S*$/, '') + '...'); };
const rr = (c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); };

export async function renderCard(caption: string, quote: string, source: string): Promise<HTMLCanvasElement> {
    try { await Promise.all([document.fonts.load('700 64px "Playfair Display Variable"'), document.fonts.load('italic 400 44px "Literata Variable"'), document.fonts.load('600 30px "Inter Variable"')]); } catch { /* fall back to system fonts */ }
    const W = 1080, H = 1350; const cv = document.createElement('canvas'); cv.width = W; cv.height = H; const c = cv.getContext('2d')!;
    const bg = c.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, '#2b1d12'); bg.addColorStop(1, '#14100b'); c.fillStyle = bg; c.fillRect(0, 0, W, H);
    // caption
    c.textAlign = 'center'; c.fillStyle = '#f6e7c6'; c.font = '700 66px "Playfair Display Variable", Georgia, serif';
    const cl = wrap(c, caption || ' ', W - 160).slice(0, 3); cl.forEach((l, i) => c.fillText(l, W / 2, 150 + i * 80));
    c.fillStyle = '#c9a15a'; c.font = '600 28px "Inter Variable", system-ui, sans-serif'; c.fillText(source.toUpperCase(), W / 2, 150 + cl.length * 80 + 10);
    // paper card
    const top = 150 + cl.length * 80 + 60; const ch = H - top - 150; const x = 70, w = W - 140;
    c.save(); c.shadowColor = 'rgba(0,0,0,.55)'; c.shadowBlur = 50; c.shadowOffsetY = 20; rr(c, x, top, w, ch, 34);
    const pg = c.createLinearGradient(0, top, 0, top + ch); pg.addColorStop(0, '#fbf3df'); pg.addColorStop(1, '#efe1c2'); c.fillStyle = pg; c.fill(); c.restore();
    c.strokeStyle = 'rgba(110,75,30,.45)'; c.lineWidth = 3; rr(c, x, top, w, ch, 34); c.stroke();
    // quote
    c.fillStyle = '#c28a2c'; c.textAlign = 'left'; c.font = '700 150px "Playfair Display Variable", Georgia, serif'; c.fillText('\u201C', x + 50, top + 150);
    c.fillStyle = '#2a1c0c'; let fs = 46; let lines: string[] = [];
    const q = clip(quote.replace(/\s+/g, ' '));
    for (; fs >= 30; fs -= 2) { c.font = `400 ${fs}px "Literata Variable", Georgia, serif`; lines = wrap(c, q, w - 130); if (lines.length * (fs * 1.45) < ch - 260) break; }
    lines.forEach((l, i) => c.fillText(l, x + 65, top + 215 + i * fs * 1.45));
    c.fillStyle = '#7a5a2c'; c.font = '600 28px "Inter Variable", system-ui, sans-serif'; c.fillText(source, x + 65, top + ch - 50);
    // footer
    c.textAlign = 'center'; c.fillStyle = '#e8c985'; c.font = '700 40px "Playfair Display Variable", Georgia, serif'; c.fillText('DreamPlaybook', W / 2, H - 80);
    c.fillStyle = '#a88a55'; c.font = '500 26px "Inter Variable", system-ui, sans-serif'; c.fillText(URL_BOOK, W / 2, H - 38);
    return cv;
}

export function ShareSheet({ quote, source, lang, onClose }: { quote: string; source: string; lang: 'ru' | 'en'; onClose: () => void }) {
    const caps = lang === 'en' ? CAPS_EN : CAPS_RU;
    const [idx, setIdx] = useState(0);
    const [cap, setCap] = useState(caps[0]);
    const [img, setImg] = useState('');
    const [msg, setMsg] = useState('');
    const [editQ, setEditQ] = useState(false);
    const [q, setQ] = useState(quote);
    const cvRef = useRef<HTMLCanvasElement | null>(null);
    const t = (ru: string, en: string) => (lang === 'en' ? en : ru);
    useEffect(() => { let alive = true; const h = setTimeout(async () => { const cv = await renderCard(cap, q, source); if (!alive) return; cvRef.current = cv; setImg(cv.toDataURL('image/png')); }, 120); return () => { alive = false; clearTimeout(h); }; }, [cap, q, source]);
    const go = (d: number) => { const n = (idx + d + caps.length) % caps.length; setIdx(n); setCap(caps[n]); };
    const blob = () => new Promise<Blob | null>(r => cvRef.current ? cvRef.current.toBlob(r, 'image/png') : r(null));
    const text = cap + ' ' + 'https://' + URL_BOOK;
    const doShare = async () => {
        const b = await blob(); if (!b) return; const file = new File([b], 'dreamplaybook.png', { type: 'image/png' });
        const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
        try {
            if (nav.canShare && nav.canShare({ files: [file] })) { await navigator.share({ files: [file], text }); return; }
            if (navigator.share) { await navigator.share({ text, url: 'https://' + URL_BOOK }); setMsg(t('Картинку сохрани кнопкой ниже и приложи', 'Save the image below and attach it')); return; }
            setMsg(t('Поделиться недоступно в этом браузере. Сохрани картинку', 'Sharing is not available in this browser. Save the image'));
        } catch { /* user cancelled */ }
    };
    const save = async () => { const b = await blob(); if (!b) return; const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'dreamplaybook-card.png'; document.body.appendChild(a); a.click(); a.remove(); setMsg(t('Сохранено', 'Saved')); };
    const copy = async () => { try { await navigator.clipboard.writeText(text); setMsg(t('Подпись скопирована', 'Caption copied')); } catch { setMsg(t('Не удалось скопировать', 'Could not copy')); } };
    return <div className="scrim" onClick={onClose}>
        <div className="sheet glass share" onClick={e => e.stopPropagation()}>
            <div className="share-top"><div className="sheet-t">{t('Отправить кому-то', 'Send this to someone')}</div><button className="x" onClick={onClose} aria-label="Close">×</button></div>
            <div className="share-img">{img ? <img src={img} alt="" /> : <div className="share-wait">…</div>}</div>
            <div className="share-cap">
                <button className="arr" onClick={() => go(-1)} aria-label="prev">‹</button>
                <input value={cap} onChange={e => setCap(e.target.value)} maxLength={90} aria-label="caption" />
                <button className="arr" onClick={() => go(1)} aria-label="next">›</button>
            </div>
            <div className="share-hint">{t('листай подписи · нажми на текст, чтобы изменить', 'swipe for captions · tap text to edit')} · {idx + 1} / {caps.length}</div>
            <div className="share-row">
                <button onClick={doShare}><b>↗</b>{t('Поделиться', 'Share')}</button>
                <a href={'https://wa.me/?text=' + encodeURIComponent(text)} target="_blank" rel="noreferrer"><b>W</b>WhatsApp</a>
                <a href={'sms:&body=' + encodeURIComponent(text)}><b>✉</b>iMessage</a>
                <button onClick={save}><b>↓</b>{t('Сохранить', 'Save image')}</button>
                <button onClick={copy}><b>⧉</b>{t('Копировать', 'Copy')}</button>
            </div>
            <button className="linkbtn" onClick={() => setEditQ(!editQ)}>{t('Изменить цитату', 'Edit quote')}</button>
            {editQ && <textarea className="share-q" value={q} onChange={e => setQ(e.target.value)} rows={5} />}
            {msg && <div className="note-s">{msg}</div>}
        </div>
    </div>;
}
