import type { Chapter, Part } from './types';
import { SHOPIFY } from './ch-shopify';
import { KIND } from './en-common';

const TITLE: Record<string, string> = {
    S1: 'Q&A with Tobias Lütke on Signal vs. Noise (37signals): Snowdevil, 6,000 active merchants, $100 million in sales a year, profitable since 2008',
    S2: 'Shopify Blog: Earliest Merchant Stories: "the first store on Shopify was our own", Snow Devil, 2004',
    S3: 'National Post: Snowboard to computer code business: a platform built from scratch on Ruby on Rails',
    S4: 'Bessemer Venture Partners: investment memo on Shopify (Oct 12, 2010): request for up to $7 million in Series A',
    S5: 'Tobi Lütke, "Shopify announces $7 million in financing" (Dec 13, 2010): stores made more than $100 million in sales in 2010',
    S6: 'Shopify: $15 million Series B (Oct 17, 2011): Bessemer, FirstMark, Felicis, Georgian',
    S7: 'Shopify: IPO price $17, 7.7 million shares (May 20, 2015)',
    S8: 'Shopify: fourth quarter and full year 2025 results (Feb 11, 2026)',
    S9: 'Shopify, 2025 annual report (Form 10-K): revenue $11.5 billion, GMV $378 billion',
    S10: 'NPR: Shopify, Tobias Lütke (Aug 2, 2019): announcement of the How I Built This episode. Only the intro text was read',
};

const PARTS: Part[] = [
    { id: 'p0', n: '0', title: 'Prologue: snowboards as the reason', kicker: 'Why Shopify sits in the volume next to Canva and Stripe', xp: 20, blocks: [
        { t: 'p', text: 'Shopify began with a snowboard store. According to the 2025 annual report, the company\'s revenue grew 30% to $11.5 billion, and merchants on the platform sold $378 billion of goods (growth 29%) (S9).' },
        { t: 'fact', label: 'Revenue, 2025', value: 'about $11.5 billion (+30%)', src: ['S9'] },
        { t: 'fact', label: 'Merchant sales (GMV), 2025', value: '$378 billion (+29%)', src: ['S9'] },
        { t: 'p', text: 'The question of the chapter: how to turn your own pain into a platform for millions of other people\'s stores.' },
        { t: 'card', icon: 'target', title: 'How to read the chapter', label: 'HONESTY LABELS', rows: [
            { k: '[S1...S10]', v: 'Source. Tap the label to see where the fact comes from.' },
            { k: 'Not found', v: 'The data is not in open sources. The author does not invent it.' },
            { k: 'AI reconstruction', v: 'A scene or line invented for practice. These are not the words of real people.' },
            { k: 'Discrepancy', v: 'If sources disagree, we show both versions.' },
        ] },
    ] },
    { id: 'p1', n: '1', title: 'Genesis of the founders', kicker: 'A programmer who wanted to sell snowboards', xp: 20, blocks: [
        { t: 'p', text: 'Shopify writes on its blog: "the first store on Shopify was our own". In 2004 Tobi Lütke and partners launched Snow Devil, an online snowboard store. They did not find a platform with the power and flexibility they needed and decided to build their own (S2).' },
        { t: 'p', text: 'Lütke himself tells 37signals: "we did not start for the sake of an online store system, but to sell snowboards. We hoped to find software that would let us run a store on the internet" (S1). The National Post writes that he decided not to bend someone else\'s shopping cart but to build a platform from scratch on Ruby on Rails (S3).' },
        { t: 'warn', title: 'Discrepancy: when the company was founded', text: 'The Snow Devil store launched in 2004 (S2). Wikipedia gives 2006 as the year Shopify was founded and names three founders: Lütke, Daniel Weinand and Scott Lake. We did not check this against primary documents and show both years.' },
        { t: 'ladder', title: 'Ladder of abstraction: where the idea came from', steps: [
            'Concrete: no store software of 2004 fit snowboards',
            'Pattern: everyone who wants to sell online has the same problem',
            'Principle: the software has more potential than the snowboards (S10)',
            'Application: sell not snowboards but the ability to open a store',
        ] },
    ] },
    { id: 'p2', n: '2', title: 'Finding the pain', kicker: 'The pain was the founders\' own', xp: 20, blocks: [
        { t: 'p', text: 'Lütke found the pain in himself: he needed to sell snowboards online and there was no suitable software (S1). Per NPR, other online sellers were so impressed by his store that they started asking for a license to the technology, and the founders saw that the software had more potential than the snowboards (S10, quoted from the episode announcement).' },
        { t: 'p', text: 'Notice the order. First he solved his own problem, then someone else\'s request came. He did not invent a market; he saw it in people who looked at a finished store.' },
        { t: 'warn', title: 'What we do not know', text: 'How many sellers asked for a license and how many snowboards Snow Devil sold before the change of course is not in the sources we read.' },
    ] },
    { id: 'p3', n: '3', title: 'MVP and the first people', kicker: 'A platform instead of a store', xp: 25, blocks: [
        { t: 'p', text: 'In Lütke\'s words, they built the platform from scratch on Ruby on Rails. The first merchants, per NPR, came with license requests (S10). By 2010 in an interview he speaks of about 6,000 active merchants from 60 countries who sold more than $100 million of goods in a year, and of being profitable since 2008 (S1).' },
        { t: 'ladder', title: 'Ladder of the first people', steps: [
            'First: the founders themselves, then sellers who saw Snow Devil (S10)',
            '2010: about 6,000 active merchants (S1)',
            '2010: $100 million in sales on the platform (S5)',
            'Numbers for the first 100, 1,000 and 10,000 merchants: not found in open sources',
        ] },
        { t: 'warn', title: 'Caveat', text: 'The 2010 figures come from Lütke himself and from the company blog. We have no independent check. He adds that he does not disclose exact revenue, only "a few million".' },
    ] },
    { id: 'p4', n: '4', title: 'Money, pitch and valuation', kicker: 'From $7 million in 2010 to the IPO in 2015', xp: 25, blocks: [
        { t: 'p', text: 'In October 2010 Bessemer Venture Partners filed a request to approve an investment of up to $7 million in Shopify\'s Series A (S4). In December 2010 Lütke wrote to merchants that the company had raised $7 million (S5). In October 2011 Shopify closed a $15 million Series B with Bessemer, FirstMark, Felicis and Georgian Partners (S6).' },
        { t: 'p', text: 'In May 2015 Shopify went public: 7.7 million shares at $17, listed on the NYSE and TSX (S7).' },
        { t: 'card', icon: 'chart', title: 'Money per documents', label: 'FROM $7 MILLION TO THE IPO', rows: [
            { k: 'October 2010', v: 'Bessemer request for up to $7 million (S4)' },
            { k: 'December 2010', v: 'Series A, $7 million (S5)' },
            { k: 'October 2011', v: 'Series B, $15 million (S6)' },
            { k: 'May 2015', v: 'IPO, $17 a share, 7.7 million shares (S7)' },
        ] },
        { t: 'gap', text: 'Shopify\'s valuations at the 2010 and 2011 rounds are not in the sources we read.' },
    ] },
    { id: 'p5', n: '5', title: 'PMF, monetization, ecosystem', kicker: 'A subscription plus a share of sales', xp: 25, blocks: [
        { t: 'p', text: 'Shopify earns from two streams. Per the 2025 report, these are subscriptions (Subscription solutions) and merchant solutions (Merchant solutions: payments and other services tied to sales volume) (S9, S8).' },
        { t: 'fact', label: 'Revenue, 2025', value: '$11.5 billion, free cash flow about 17% (per the company)', src: ['S8', 'S9'] },
        { t: 'p', text: 'The platform grew along with its merchants: the more they sell, the more Shopify earns. This is an upside tied to the customer\'s success.' },
        { t: 'warn', title: 'Caveat', text: 'We did not check the line-by-line revenue breakdown in the report and do not give the share of subscriptions and services.' },
    ] },
    { id: 'p6', n: '6', title: 'First principles', kicker: 'What is left if you throw out the word "e-commerce"', xp: 25, blocks: [
        { t: 'p', text: 'Let us take it down to atoms. What do you need to sell? A storefront, a cart, payment, delivery. All of this can be put into one tool so that a person can start in a day. Shopify does not sell snowboards, it sells the ability to start.' },
        { t: 'ladder', title: 'The path of reasoning, per the documents', steps: [
            'Atom: a sale = storefront + cart + payment (S2)',
            'Own pain: no suitable platform (S1)',
            'Solution: build it yourself and give it to others (S3, S10)',
            'Growth: we earn when they earn (S9)',
        ] },
        { t: 'card', icon: 'stone', title: 'Law of the environment (candidate for the carved laws)', label: 'FOR THE FINAL SECTION', rows: [
            { k: 'Wording', v: 'Solve your pain in a way that others can use the solution, and sell them the tool, not the result' },
            { k: 'Support', v: 'The snowboard store became the platform\'s first customer (S2)' },
            { k: 'Caveat', v: 'This is the story of one founder. The sources do not say how many similar attempts did not become platforms' },
        ] },
    ] },
    { id: 'p7', n: '7', title: 'What transfers to you', kicker: 'Three exercises for this week', xp: 25, blocks: [
        { t: 'card', icon: 'rules', title: 'What to do', label: 'TRANSFER', rows: [
            { k: '1. Find your pain', v: 'Which task do you solve yourself because there is no suitable tool?' },
            { k: '2. Ask other people', v: 'Show your solution to five people with the same task and write down what they ask for' },
            { k: '3. Tie income to their success', v: 'How can you earn more when the customer earns more?' },
        ] },
        { t: 'card', icon: 'bulb', title: 'A question for yourself', label: 'THINK', rows: [
            { k: 'Question', v: 'What have I already built for myself that someone else needs too?' },
        ] },
    ] },
];

export const SHOPIFY_EN: Chapter = {
    ...SHOPIFY,
    title: 'Shopify: how a snowboard store became a platform',
    sub: 'Your own pain, someone else\'s request and $378 billion in sales.',
    eyebrow: 'CHAPTER 10',
    parts: PARTS,
    sources: SHOPIFY.sources.map(s => ({ ...s, kind: KIND[s.kind] ?? s.kind, title: TITLE[s.id] ?? s.title })),
};
