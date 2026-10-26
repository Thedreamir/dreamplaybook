import { useEffect, useState } from 'react';
import type { Chapter } from './types';
export type Lang = 'ru' | 'en';
export const getLang = (): Lang => { try { return localStorage.getItem('pb.lang') === 'en' ? 'en' : 'ru'; } catch { return 'ru'; } };
export const setLang = (l: Lang) => { try { localStorage.setItem('pb.lang', l); } catch {} window.dispatchEvent(new Event('pb-lang')); };
export function useLang(): Lang {
    const [l, set] = useState<Lang>(getLang);
    useEffect(() => { const f = () => set(getLang()); window.addEventListener('pb-lang', f); return () => window.removeEventListener('pb-lang', f); }, []);
    return l;
}
// English chapters live in en-<id>.ts and are registered here. Missing ones fall back to RU.
import { DUOLINGO_EN } from './en-duolingo';
import { APPLE_EN } from './en-apple';
import { AIRBNB_EN } from './en-airbnb';
import { UBER_EN } from './en-uber';
import { STRIPE_EN } from './en-stripe';
import { DROPBOX_EN } from './en-dropbox';
import { NOTION_EN } from './en-notion';
import { FIGMA_EN } from './en-figma';
import { CANVA_EN } from './en-canva';
import { SHOPIFY_EN } from './en-shopify';
import { TELEGRAM_EN } from './en-telegram';
import { WHATSAPP_EN } from './en-whatsapp';
import { INSTAGRAM_EN } from './en-instagram';
import { TIKTOK_EN } from './en-tiktok';
import { DISCORD_EN } from './ch-discord';
import { TINDER_EN } from './ch-tinder';
export const EN: Record<string, Chapter> = { duolingo: DUOLINGO_EN, apple: APPLE_EN, airbnb: AIRBNB_EN, uber: UBER_EN, stripe: STRIPE_EN, dropbox: DROPBOX_EN, notion: NOTION_EN, figma: FIGMA_EN, canva: CANVA_EN, shopify: SHOPIFY_EN, telegram: TELEGRAM_EN, whatsapp: WHATSAPP_EN, instagram: INSTAGRAM_EN, tiktok: TIKTOK_EN, discord: DISCORD_EN, tinder: TINDER_EN };
