import { CHAPTERS as BASE } from './books';
import { EN } from './i18n';
import { atlasOf } from './atlas';
EN.atlas = atlasOf(BASE.map(c => EN[c.id] || c), true);
export const CHAPTERS = [...BASE, atlasOf(BASE, false)];
