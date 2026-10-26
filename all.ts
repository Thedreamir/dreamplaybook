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
BASE.forEach(c => { addVideo(c, false); addVideo(EN[c.id], true); });
BASE.forEach(c => { addExtra(c, false); addExtra(EN[c.id], true); });
BASE.forEach(c => { addMedia(c, false); addMedia(EN[c.id], true); });
EN.atlas = atlasOf(BASE.map(c => EN[c.id] || c), true);
export const CHAPTERS = [...BASE, atlasOf(BASE, false)];
