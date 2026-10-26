import type { Chapter, Part } from './types';
import { STRIPE } from './ch-stripe';
import { KIND } from './en-common';

const TITLE: Record<string, string> = {
    S1: '/dev/finance inc.: the original Stripe pitch document, 2010 (copy on raeez.com, team co-author Raeez Lorgat)',
    S2: 'TechCrunch: Sequoia-Backed Stripe Wants To Disrupt The Online Payments Space (Sep 30, 2011): launch, 2.9% + 30 cents, $2 million from Thiel, Musk, Sequoia, a16z',
    S3: 'Bloomberg: Stripe said to get funding valuing startup at $100 million (Feb 9, 2012), per two unnamed people',
    S4: 'Paul Graham, "Schlep Blindness" (January 2012): Stripe as an example of an idea nobody saw because of dislike for drudgery',
    S5: 'TechCrunch (guest post by Derek Andersen): interview with Patrick Collison at Startup Grind (May 20, 2012): Auctomatic, YC, $18 million',
    S6: 'Bloomberg: How Two Brothers Turned Seven Lines of Code Into a $9.2 Billion Startup (Aug 1, 2017). Only the headline and teaser were read',
    S7: 'Reuters: Stripe valued at $91.5 billion in latest tender offer (Feb 27, 2025)',
    S8: 'The Irish Times: Stripe valuation rises to $106.7 billion, above the 2021 peak of $95 billion (Sep 24, 2025), citing Axios',
    S9: 'Stripe: 2025 annual letter and tender offer at a $159 billion valuation (Feb 24, 2026)',
    S10: 'Stripe: 2024 annual letter, payment volume $1.4 trillion (Feb 27, 2025)',
};

const PARTS: Part[] = [
    { id: 'p0', n: '0', title: 'Prologue: the payment form as a wall', kicker: 'Why Stripe sits in the volume next to Dropbox and Shopify', xp: 20, blocks: [
        { t: 'p', text: 'Stripe does not sell an app. It sells other companies the ability to take money from a customer. According to the 2025 annual letter, companies on Stripe moved $1.9 trillion through it, 34% more than in 2024.' },
        { t: 'fact', label: 'Payment volume on Stripe, 2025', value: '$1.9 trillion (+34%), about 1.6% of world GDP by the company\'s own estimate', src: ['S9'] },
        { t: 'fact', label: 'Payment volume, 2024', value: '$1.4 trillion (+38% from 2023)', src: ['S10'] },
        { t: 'fact', label: 'Businesses on the platform', value: 'more than 5 million, directly or through platforms (company\'s self-description)', src: ['S9'] },
        { t: 'p', text: 'The question of the chapter: what do you do when a market has existed for a long time, everyone is unhappy with it, and nobody takes on fixing it because it is boring and hard.' },
        { t: 'card', icon: 'target', title: 'How to read the chapter', label: 'HONESTY LABELS', rows: [
            { k: '[S1...S10]', v: 'Source. Tap the label to see where the fact comes from.' },
            { k: 'Not found', v: 'The data is not in open sources. The author does not invent it.' },
            { k: 'AI reconstruction', v: 'A scene or line invented for practice. These are not the words of real people.' },
            { k: 'Discrepancy', v: 'If sources disagree, we show both versions.' },
        ] },
    ] },
    { id: 'p1', n: '1', title: 'Genesis of the founders', kicker: 'Two brothers from Ireland, a first company sold for $5 million and a second attempt', xp: 20, blocks: [
        { t: 'p', text: 'Patrick Collison won the Irish Young Scientist exhibition in 2005. The 2010 pitch document says he created a programming language based on LISP, and by nineteen had agreed to sell his first company, Auctomatic, for $5 million. His brother John founded Auctomatic with him at sixteen (S1).' },
        { t: 'p', text: 'Auctomatic was a tool for eBay sellers. According to the retelling of the interview, they applied to Y Combinator, joined forces with two other founders, moved to San Francisco, and then the company was bought by Live Current Media. The author calls the lifespan before the sale short (S5).' },
        { t: 'warn', title: 'Discrepancy: how long the first company lived', text: 'The pitch document says "18 months from incorporation to sale" (S1). The TechCrunch retelling of the interview says "10 months" (S5). We do not know what counts as the start, so we show both numbers.' },
        { t: 'p', text: 'John, per the same retelling, dropped out of Harvard (S5). The first version of the new idea was called /dev/payments, and the company /dev/finance inc. (S1).' },
        { t: 'ladder', title: 'Ladder of abstraction: where the idea came from', steps: [
            'Concrete: to accept payments on a website you need a bank account, a payment gateway and weeks of paperwork',
            'Pattern: the harder it is to take money, the fewer ideas reach their first customer',
            'Principle: in the App Store the developer does not talk to banks, Apple does it for them (stated directly in the pitch)',
            'Application: a service that does the same for any website',
        ] },
    ] },
    { id: 'p2', n: '2', title: 'Finding the pain', kicker: 'Three quotes from the pitch that prove the problem', xp: 20, blocks: [
        { t: 'p', text: 'The pitch document opens with the words "it is expensive, slow and hard to start accepting payments on the internet". Then come three quotes from developers who were hurt by this (S1).' },
        { t: 'fact', label: 'Andrew Catton, DabbleDB', value: '"Three weeks for the app, three months for subscriptions"', src: ['S1'] },
        { t: 'fact', label: 'Ross Boucher, 280 North', value: 'planned subscriptions half a year ago, gave up because of the complexity and built an iPhone app instead', src: ['S1'] },
        { t: 'fact', label: 'Aston Motes, Dropbox', value: 'accepting cards turned out harder than expected, and the time would be better spent on the core product', src: ['S1'] },
        { t: 'p', text: 'Notice: the pain is not taken from imagination. These are words of people who had this very site and this very problem. Later Paul Graham called this "schlep blindness": every hacker knew for ten years how painful it is to accept payments, yet they went off to build recipe sites. He writes that Stripe is the brightest example (S4).' },
        { t: 'warn', title: 'What we do not know', text: 'How many conversations with developers the founders held before launch is not in the open sources we read. We do not invent a number.' },
    ] },
    { id: 'p3', n: '3', title: 'MVP and the first people', kicker: 'Build for developers, not for financiers', xp: 25, blocks: [
        { t: 'p', text: 'The 2010 pitch describes two products in one. For the merchant: one account instead of a bundle of bank plus gateway plus processor. For the developer: a simple API (S1).' },
        { t: 'p', text: 'The public launch was in late September 2011. TechCrunch lists the terms: support for Ruby, PHP and Python, no merchant account or gateway needed, Stripe stores the cards, payouts to a bank account every 7 days, price 2.9% plus 30 cents per successful payment, no monthly fee and no hidden charges (S2).' },
        { t: 'p', text: 'At first only developers in the US could pay. The article says directly that an international version is coming "soon" (S2).' },
        { t: 'ladder', title: 'Ladder of the first people', steps: [
            'First: friendly startups and YC companies that had the same problem (S1, S5)',
            'Next: a closed beta until September 30, 2011 (S2)',
            'Public launch for developers in the US (S2)',
            'Numbers for the first 100, 1,000 and 10,000 customers: not found in open sources',
        ] },
        { t: 'gap', text: 'How many customers were in the beta and in the first year. The story about "seven lines of code" is often quoted (Bloomberg headline, S6), but we read only the headline and teaser and did not check how many lines the original had.' },
    ] },
    { id: 'p4', n: '4', title: 'Money, pitch and valuation', kicker: 'Thiel, Musk, Sequoia and $100 million in 2012', xp: 25, blocks: [
        { t: 'p', text: 'In September 2011 TechCrunch reported that Stripe had received $2 million from Peter Thiel, Elon Musk, Sequoia, Andreessen Horowitz and SV Angel. Patrick confirmed that the round happened. The outlet called a valuation of "about $20 million" a rumor (S2).' },
        { t: 'p', text: 'In February 2012 Bloomberg wrote, citing two people, that Stripe raised $18 million from Sequoia and others at a $100 million valuation. Later the interview with Patrick mentions $18 million as a fact (S3, S5).' },
        { t: 'warn', title: 'Valuations: what is confirmed', text: 'The valuations of $20 million (2011) and $100 million (2012) came from rumors and anonymous sources (S2, S3). They are not company statements.' },
        { t: 'card', icon: 'chart', title: 'Valuation by year, as the sources named it', label: 'FROM RUMORS TO FIGURES', rows: [
            { k: '2011', v: 'about $20 million, rumor (S2)' },
            { k: '2012', v: '$100 million, anonymous sources (S3)' },
            { k: '2021', v: '$95 billion, peak, per the Irish Times (S8)' },
            { k: 'February 2025', v: '$91.5 billion, tender offer, Reuters (S7)' },
            { k: 'September 2025', v: '$106.7 billion, per Axios (S8)' },
            { k: 'February 2026', v: '$159 billion, tender offer, Stripe statement (S9)' },
        ] },
        { t: 'p', text: 'A tender offer means employees sell their shares while the company does not go public. Stripe did this in 2025 and 2026 (S7, S9).' },
    ] },
    { id: 'p5', n: '5', title: 'PMF, monetization, ecosystem', kicker: 'From a payment form to financial infrastructure', xp: 25, blocks: [
        { t: 'p', text: 'Stripe earns money from a percentage of each payment. In 2011 it was 2.9% plus 30 cents (S2). We did not check today\'s rates and do not give them.' },
        { t: 'p', text: 'Over time the payment API became the base for several products. In the 2025 letter the company names a Revenue suite (Billing, Invoicing, Tax and more) reaching an annual run rate of $1 billion, and writes that 25% of new companies in Delaware are created through Stripe Atlas (self-description, S9).' },
        { t: 'fact', label: 'Who uses it, in Stripe\'s own words', value: '90% of the Dow Jones index companies and 80% of the Nasdaq 100', src: ['S9'] },
        { t: 'fact', label: 'Profitability', value: 'in the 2025 letter the company calls itself "robustly profitable" (self-description)', src: ['S9'] },
        { t: 'card', icon: 'layers', title: 'The ecosystem as a ladder', label: 'WHAT WAS ADDED TO PAYMENTS', rows: [
            { k: 'Payment', v: 'accepting cards with one piece of code (S2)' },
            { k: 'Subscriptions and invoices', v: 'Billing, Invoicing (S9)' },
            { k: 'Taxes', v: 'Tax (S9)' },
            { k: 'Company formation', v: 'Atlas (S9)' },
        ] },
        { t: 'warn', title: 'Caveat', text: 'All 2025 figures in this part come from Stripe\'s own letter and release. We have no independent check.' },
    ] },
    { id: 'p6', n: '6', title: 'First principles', kicker: 'What is left if you throw out the word "fintech"', xp: 25, blocks: [
        { t: 'p', text: 'Let us take the idea down to atoms. What is a payment on a website? The customer gives card data, the bank checks it and transfers money to the seller. Everything else, including contracts, accounts and gateways, exists only because banks worked that way. Stripe did not change physics, it took over the drudgery.' },
        { t: 'ladder', title: 'Stripe\'s path of reasoning, per the documents', steps: [
            'Atom: accepting a card = check and transfer money',
            'Unnecessary for the developer: merchant account, gateway, paperwork (S2)',
            'Model: the App Store had already hidden this complexity behind one partner (S1)',
            'Solution: one account and code that the developer controls',
        ] },
        { t: 'card', icon: 'stone', title: 'Law of the environment (candidate for the carved laws)', label: 'FOR THE FINAL SECTION', rows: [
            { k: 'Wording', v: 'Boring drudgery that everyone tolerates and nobody fixes is the biggest opportunity' },
            { k: 'Support', v: 'Graham names Stripe the main example of schlep blindness (S4). The pitch opens with a description of this drudgery (S1)' },
            { k: 'Caveat', v: 'This is an explanation after the fact. The sources do not say how many similar ideas did not survive' },
        ] },
    ] },
    { id: 'p7', n: '7', title: 'What transfers to you', kicker: 'Three exercises for this week', xp: 25, blocks: [
        { t: 'card', icon: 'rules', title: 'What to do', label: 'TRANSFER', rows: [
            { k: '1. Find the drudgery', v: 'Write down three tasks in your field that everyone does and everyone hates' },
            { k: '2. Find witnesses', v: 'Talk to five people who feel this pain and write their words down verbatim, as in the Stripe pitch' },
            { k: '3. Remove steps', v: 'Ask: which steps exist only because of history, not because of physics?' },
        ] },
        { t: 'card', icon: 'bulb', title: 'A question for yourself', label: 'THINK', rows: [
            { k: 'Question', v: 'Which problem do you want someone to solve for you? (wording from S4)' },
        ] },
    ] },
];

export const STRIPE_EN: Chapter = {
    ...STRIPE,
    title: 'Stripe: how boring drudgery became infrastructure',
    sub: 'Two brothers, three developer quotes and code instead of a merchant account. The road to $1.9 trillion in payments a year.',
    eyebrow: 'CHAPTER 05',
    parts: PARTS,
    sources: STRIPE.sources.map(s => ({ ...s, kind: KIND[s.kind] ?? s.kind, title: TITLE[s.id] ?? s.title })),
};
