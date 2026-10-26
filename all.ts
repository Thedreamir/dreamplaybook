import { CHAPTERS as BASE } from './books';
import { EN } from './i18n';
import { atlasOf } from './atlas';
import { MEDIA } from './media';
import type { Chapter } from './types';

// documentary photos (Wikimedia Commons, licences in the captions), inserted after the first block of the first part
const addMedia = (c: Chapter | undefined, en: boolean) => {
    if (!c) return;
    const m = MEDIA[c.id];
    const blocks = c.parts[0]?.blocks;
    if (!m || !blocks || blocks.some(b => b.t === 'img' && b.file === m.file)) return;
    blocks.splice(1, 0, { t: 'img', file: m.file, alt: en ? m.altEn : m.altRu, caption: en ? m.capEn : m.capRu, credit: 'Wikimedia Commons', url: m.url });
};
BASE.forEach(c => { addMedia(c, false); addMedia(EN[c.id], true); });
EN.atlas = atlasOf(BASE.map(c => EN[c.id] || c), true);
export const CHAPTERS = [...BASE, atlasOf(BASE, false)];
