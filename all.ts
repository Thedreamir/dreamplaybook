import { CHAPTERS as BASE } from './books';
import { EN } from './i18n';
import { atlasOf } from './atlas';
import { MEDIA } from './media';
import { MEDIA_X } from './media-x';
import { VIDEOS } from './videos';
import type { Chapter } from './types';

// documentary photos (Wikimedia Commons, licences in the captions), inserted after the first block of the first part
const addMedia = (c: Chapter | undefined, en: boolean) => {
    if (!c) return;
    const m = MEDIA[c.id];
    const blocks = c.parts[0]?.blocks;
    if (!m || !blocks || blocks.some(b => b.t === 'img' && b.file === m.file)) return;
    blocks.splice(1, 0, { t: 'img', file: m.file, alt: en ? m.altEn : m.altRu, caption: en ? m.capEn : m.capRu, credit: 'Wikimedia Commons', url: m.url });
};
const addExtra = (c: Chapter | undefined, en: boolean) => {
    if (!c) return;
    const list = MEDIA_X[c.id];
    if (!list) return;
    const blocks = (c.parts[1] || c.parts[0])?.blocks;
    if (!blocks) return;
    list.forEach((m, i) => {
        if (blocks.some(b => b.t === 'img' && b.file === m.file)) return;
        blocks.splice(Math.min(1 + i * 2, blocks.length), 0, { t: 'img', file: m.file, alt: en ? m.altEn : m.altRu, caption: en ? m.capEn : m.capRu, credit: 'Wikimedia Commons', url: m.url });
    });
};
const addVideo = (c: Chapter | undefined, en: boolean) => {
    if (!c) return;
    const v = VIDEOS[c.id];
    const blocks = (c.parts[1] || c.parts[0])?.blocks;
    if (!v || !blocks || blocks.some(b => b.t === 'video')) return;
    blocks.push({ t: 'video', title: en ? v.te : v.tr, note: en ? v.ne : v.nr, url: v.url });
};
const NEWS = /^(Пресса|Press|Первичка|Primary|Первое лицо|First)/;
const addNews = (c: Chapter | undefined, en: boolean) => {
    if (!c || !c.sources) return;
    const blocks = (c.parts[2] || c.parts[1] || c.parts[0])?.blocks;
    if (!blocks || blocks.some(b => b.t === 'link')) return;
    const seen = new Set<string>();
    const picks = c.sources.filter(s => NEWS.test(s.kind) && /^https?:/.test(s.url) && !seen.has(s.url) && seen.add(s.url)).slice(0, 3);
    picks.forEach(s => blocks.push({ t: 'link', title: s.title, note: s.kind + ' · ' + s.url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0], url: s.url }));
};
const METRIC = /(выручк|оборот|структур|активн|продаж|бронирован|поездк|ночей|GMV|GBV|прибыл|подписчик|пользовател|капитализац|валов|revenue|turnover|active|sales|bookings|trips|nights|profit|subscribers|users|market cap|gross)/i;
const EVENT = /(основан|запущ|запуск|привлёк|привлек|вышел|выпустил|продан|продал|купил|покупк|объявил|отказал|уехал|выиграл|пришёл|торгов|раунд|IPO|founded|launch|raised|released|sold|acquired|acquisition|announced|abandoned|left|won|joined|trading|round)/i;
const DROP_LABEL = /(масштаб|структур|за \d{4} год|scale|structure|for \d{4}|в 20\d\d$)/i;
const DROP_TEXT = /(годов(ому|ого|ой) (письму|отчёт\w*)|по состоянию на|не опираемся|не проверили|annual (letter|report)|as of|not verified|do not rely|did this in|сделала это в)/i;
const isEvent = (k: string, v: string) => !DROP_LABEL.test(k) && !DROP_TEXT.test(k + ' ' + v) && !(METRIC.test(k + ' ' + v) && !EVENT.test(k + ' ' + v));
const YR = /\b(1[5-9]\d\d|20\d\d)\b/;
const addTimeline = (c: Chapter | undefined, en: boolean) => {
    if (!c || c.id === 'atlas' || c.id === 'zakon' || c.id === 'laws') return;
    const last = c.parts[c.parts.length - 1]?.blocks;
    if (!last || last.some(b => b.t === 'card' && b.label === (en ? 'TIMELINE' : 'ХРОНОЛОГИЯ'))) return;
    const rows: { y: number; k: string; v: string }[] = [];
    const seen = new Set<string>();
    c.parts.forEach(p => p.blocks.forEach(b => {
        if (b.t !== 'fact') return;
        const m = YR.exec(b.label);
        if (!m || seen.has(b.label + b.value) || !isEvent(b.label, b.value)) return;
        seen.add(b.label + b.value);
        rows.push({ y: parseInt(m[1], 10), k: b.label, v: b.value });
    }));
    if (rows.length < 3) {
        // fallback: dated sentences taken verbatim from this chapter's own paragraphs (nothing added)
        rows.length = 0;
        const DT = /(\d{1,2}\s+[A-Za-zА-Яа-яё]+\s+)?\b(1[5-9]\d\d|20\d\d)\b/;
        const seenY = new Set<string>();
        c.parts.forEach(p => p.blocks.forEach(b => {
            if (b.t !== 'p') return;
            b.text.split(/(?<=[.!?])\s+/).forEach(sn => {
                const m = DT.exec(sn);
                if (!m || sn.length < 25 || sn.length > 230 || /^\s*[\[(]?S\d/.test(sn)) return;
                const key = m[0].trim();
                if (seenY.has(key) || !isEvent(key, sn)) return;
                seenY.add(key);
                rows.push({ y: parseInt(m[2], 10), k: key, v: sn.replace(/\s*\(S\d+(,\s*S\d+)*\)/g, '').trim() });
            });
        }));
        if (rows.length < 3) return;
    }
    const DROPY: Record<string, number> = { stripe: 2025, notion: 2013, canva: 2016, shopify: 2010, apple: 1980 };
    if (DROPY[c.id]) { const keep = rows.filter(r => r.y !== DROPY[c.id]); if (keep.length >= 3) { rows.length = 0; rows.push(...keep); } }
    rows.sort((a, b) => a.y - b.y);
    last.push({ t: 'card', icon: 'stone', title: en ? 'Timeline from this chapter' : 'Хронология из этой главы', label: en ? 'TIMELINE' : 'ХРОНОЛОГИЯ', rows: rows.slice(0, 10).map(r => ({ k: r.k, v: r.v })) });
};
BASE.forEach(c => { addTimeline(c, false); addTimeline(EN[c.id], true); });
BASE.forEach(c => { addNews(c, false); addNews(EN[c.id], true); });
BASE.forEach(c => { addVideo(c, false); addVideo(EN[c.id], true); });
BASE.forEach(c => { addExtra(c, false); addExtra(EN[c.id], true); });
BASE.forEach(c => { addMedia(c, false); addMedia(EN[c.id], true); });
EN.atlas = atlasOf(BASE.map(c => EN[c.id] || c), true);
export const CHAPTERS = [...BASE, atlasOf(BASE, false)];
