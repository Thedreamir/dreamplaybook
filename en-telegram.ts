import type { Chapter, Part } from './types';
import { TELEGRAM } from './ch-telegram';
import { KIND } from './en-common';

const TITLE: Record<string, string> = {
    S1: 'Telegram blog: Celebrating 6 Years of Telegram: launch on August 14, 2013',
    S2: 'TechCrunch: Meet Telegram (Oct 27, 2013): brothers Nikolai and Pavel Durov, 18 months of research, secret chats',
    S3: 'CNBC (from the New York Times): Once celebrated in Russia, Pavel Durov chooses exile (Dec 3, 2014): no investors, no ads or marketing, about 50 million users by his account',
    S4: 'Wired (March 2015): Telegram downloaded 4.95 million times in four days after the Facebook-WhatsApp deal, the promise "no ads, no fees forever"',
    S5: 'Reuters: Telegram raises $1 billion through bond sales (March 2021)',
    S6: 'Interfax: Telegram generates revenue exceeding $1 bln in 2024 (Dec 23, 2024), per Durov',
    S7: 'TechCrunch: Durov says app now has 1B users (Mar 19, 2025): $547 million profit for 2024, per Durov',
};

const PARTS: Part[] = [
    { id: 'p0', n: '0', title: 'Prologue: a messenger without ads', kicker: 'Why Telegram sits in the volume next to WhatsApp and Discord', xp: 20, blocks: [
        { t: 'p', text: 'Telegram launched on August 14, 2013 (S1). In March 2025 Pavel Durov stated that the service has more than 1 billion monthly active users, and that profit for 2024 was $547 million (S7).' },
        { t: 'warn', title: 'Whose numbers these are', text: 'Telegram\'s users and profit are reported by Durov himself in his channel. Telegram is a private company, and the sources we read contain no independent audit of these figures (S6, S7).' },
        { t: 'fact', label: 'Monthly users, March 2025', value: 'more than 1 billion (versus 950 million a year earlier), per Durov', src: ['S7'] },
        { t: 'p', text: 'The question of the chapter: how to grow a messenger almost without ads, without outside investors in the first years and with a founder in exile.' },
        { t: 'card', icon: 'target', title: 'How to read the chapter', label: 'HONESTY LABELS', rows: [
            { k: '[S1...S7]', v: 'Source. Tap the label to see where the fact comes from.' },
            { k: 'Not found', v: 'The data is not in open sources. The author does not invent it.' },
            { k: 'AI reconstruction', v: 'A scene or line invented for practice. These are not the words of real people.' },
            { k: 'Discrepancy', v: 'If sources disagree, we show both versions.' },
        ] },
    ] },
    { id: 'p1', n: '1', title: 'Genesis of the founders', kicker: 'Two brothers, VK and 18 months of research', xp: 20, blocks: [
        { t: 'p', text: 'TechCrunch in 2013: Nikolai and Pavel Durov, creators of VK (VKontakte), launched in 2006, began work on Telegram 18 months earlier as a research project, because they wanted to make something "truly secure and fun at the same time" (S2).' },
        { t: 'p', text: 'According to CNBC, the Kremlin then increased pressure on the internet, Putin\'s allies took control of VK, and Durov sold his remaining stake and left Russia in April 2014, having refused to hand over data of Ukrainian protesters (S3). Wired writes about being "fired" from his own company and the exile that followed (S4).' },
        { t: 'warn', title: 'Discrepancy: left or was fired', text: 'CNBC describes a departure after pressure from the authorities and the sale of his stake (S3). Wired quotes his post about being fired and about control by Putin\'s allies (S4). We do not assess the political details and give both wordings.' },
        { t: 'ladder', title: 'Ladder of abstraction: where the idea came from', steps: [
            'Concrete: correspondence can be intercepted, especially after the Snowden revelations (S2)',
            'Pattern: the more a service depends on one state, the higher the risk of pressure',
            'Principle: a messenger is needed that does not depend on one place and one company',
            'Application: a fast and secure messenger with secret chats',
        ] },
    ] },
    { id: 'p2', n: '2', title: 'Finding the pain', kicker: 'Speed and privacy instead of ads', xp: 20, blocks: [
        { t: 'p', text: 'TechCrunch names three properties: speed, security and features like secret chats with encryption and self-destructing messages (S2). According to Wired, the main difference is in positioning: "we take back the right to privacy", with no ads and no fees, and without a corporate owner chasing profit (S4).' },
        { t: 'warn', title: 'What we do not know', text: 'How many users said that it was privacy that worried them is not in the sources we read. We give no surveys.' },
    ] },
    { id: 'p3', n: '3', title: 'MVP and the first people', kicker: 'A launch that was not advertised', xp: 25, blocks: [
        { t: 'p', text: 'The launch was on August 14, 2013 (S1). In December 2014 Durov said there were no outside investors, ads or marketing, and about 50 million users, almost all outside Russia (S3).' },
        { t: 'p', text: 'Wired gives an event that sped up growth: four days after Facebook bought WhatsApp for $19 billion, in February 2014, Telegram was downloaded 4.95 million times. WhatsApp had a four-hour outage in those days (S4).' },
        { t: 'ladder', title: 'Ladder of the first people', steps: [
            'Start: August 2013, no ads (S1, S3)',
            'February 2014: 4.95 million downloads in four days after the WhatsApp purchase (S4)',
            'December 2014: about 50 million users, by his account (S3)',
            'Numbers for the first 100, 1,000 and 10,000 users: not found',
        ] },
    ] },
    { id: 'p4', n: '4', title: 'Money, pitch and valuation', kicker: 'Durov\'s money, bonds and silence around valuation', xp: 25, blocks: [
        { t: 'p', text: 'In 2014 Wired writes that the project is financed by Durov himself (S4). In March 2021 he reported that Telegram had raised more than $1 billion through bond sales, including $150 million from Mubadala and Abu Dhabi Catalyst Partners. The other investors are not named (S5).' },
        { t: 'p', text: 'By the end of 2024, per Durov, the company had placed debt of about $2 billion over four years, repaid a significant part in autumn 2024 and holds more than $500 million in cash reserves, not counting crypto assets (S6).' },
        { t: 'gap', text: 'A valuation of Telegram as a company is not in the sources we read. These are not shares but bonds, and the numbers we found are self-reported.' },
    ] },
    { id: 'p5', n: '5', title: 'PMF, monetization, ecosystem', kicker: 'From the promise of "never" to a subscription', xp: 25, blocks: [
        { t: 'p', text: 'In 2015 Wired quotes the promise on the site: "no ads, no fees forever" (S4). In December 2024 Durov writes that the company became profitable for the first time after three years of monetization, Premium subscribers grew to more than 12 million (triple), and advertising revenue grew several times over (S6).' },
        { t: 'warn', title: 'Discrepancy: the promise and the subscription', text: 'In 2014 and 2015 "no fees forever" and "no ads" were declared (S3, S4). By 2024 there is Premium and advertising (S6). In CNBC Durov in 2014 himself added a caveat that over time he might charge for extra services (S3). We show both versions.' },
        { t: 'fact', label: 'Revenue, 2024 (per Durov)', value: 'more than $1 billion, profit $547 million, 12 million Premium subscribers', src: ['S6', 'S7'] },
    ] },
    { id: 'p6', n: '6', title: 'First principles', kicker: 'What is left if you throw out the word "messenger"', xp: 25, blocks: [
        { t: 'p', text: 'Let us take it down to atoms. What does a messenger need? To deliver a message fast and keep outsiders from reading it. Everything after that, including channels, bots and subscriptions, is a superstructure added once there is trust and users.' },
        { t: 'ladder', title: 'The path of reasoning, per the documents', steps: [
            'Atom: a message must arrive fast and protected (S2)',
            'Money: first personal, not advertising (S3, S4)',
            'Growth: an event, not advertising, like the day of the WhatsApp purchase (S4)',
            'Monetization: later, after scale (S6)',
        ] },
        { t: 'card', icon: 'stone', title: 'Law of the environment (candidate for the carved laws)', label: 'FOR THE FINAL SECTION', rows: [
            { k: 'Wording', v: 'When a competitor errs or changes the rules, the nearest clear alternative gets growth, if the product is already ready' },
            { k: 'Support', v: 'After the Facebook-WhatsApp deal Telegram was downloaded 4.95 million times in four days (S4)' },
            { k: 'Caveat', v: 'One day does not prove the cause. Wired also names a WhatsApp outage in the same days' },
        ] },
    ] },
    { id: 'p7', n: '7', title: 'What transfers to you', kicker: 'Three exercises for this week', xp: 25, blocks: [
        { t: 'card', icon: 'rules', title: 'What to do', label: 'TRANSFER', rows: [
            { k: '1. Be ready for someone else\'s event', v: 'Which event at a competitor will make people look for an alternative, and is your product ready?' },
            { k: '2. Choose one promise', v: 'Which one property, for example speed or privacy, will you hold better than anyone?' },
            { k: '3. Be honest about money', v: 'What did you promise customers about price, and what happens if you have to change it?' },
        ] },
        { t: 'card', icon: 'bulb', title: 'A question for yourself', label: 'THINK', rows: [
            { k: 'Question', v: 'Which of my promises am I ready to keep even when it gets in the way of money?' },
        ] },
    ] },
];

export const TELEGRAM_EN: Chapter = {
    ...TELEGRAM,
    title: 'Telegram: how a messenger without ads reached a billion',
    sub: 'Two brothers, 18 months of research and numbers that only the founder himself knows.',
    eyebrow: 'CHAPTER 11',
    parts: PARTS,
    sources: TELEGRAM.sources.map(s => ({ ...s, kind: KIND[s.kind] ?? s.kind, title: TITLE[s.id] ?? s.title })),
};
