import type { Chapter, Part } from './types';
import { AIRBNB } from './ch-airbnb';
import { KIND } from './en-common';

const TITLE: Record<string, string> = {
    S1: 'Airbnb, Inc. Form S-1 (Nov 16, 2020): business, trust system, 2019 and 2020 metrics',
    S2: 'Founders\' letter "What Makes Airbnb, Airbnb" from the S-1 (published Feb 22, 2021)',
    S3: 'Paul Graham (Y Combinator), "The Airbnbs" (Dec 10, 2020)',
    S4: 'Wired: Airbnb\'s surprising path to Y Combinator (2017)',
    S5: 'CNBC Make It: Chesky on how cereal boxes brought the first investors (Apr 18, 2023)',
    S6: 'Sequoia Capital, Alfred Lin: Airbnb IPO, Embracing the Adventure (Dec 10, 2020)',
    S7: 'Airbnb: press release on IPO pricing, $68 per share (Dec 9-10, 2020)',
    S8: 'Reuters (via Investing.com): Airbnb prices IPO at $68, raises about $3.5 billion',
    S9: 'Investopedia: first trading day, close at $144.71, market value near $100 billion (Dec 10, 2020)',
    S10: 'CNBC: the S-1 showed $219 million net income on $1.34 billion quarterly revenue (Nov 17, 2020)',
    S11: 'Airbnb: shareholder letter for Q4 and full year 2025 (Feb 12, 2026), exhibit to 8-K',
};

const PARTS: Part[] = [
    { id: 'p0', n: '0', title: 'Prologue: three air mattresses', kicker: 'Why Airbnb sits in the volume next to Apple', xp: 20, blocks: [
        { t: 'p', text: 'The core of Airbnb: strangers agree to sleep in other people\'s homes. According to the 2025 shareholder letter, revenue was $12.2 billion, net income $2.5 billion, and guests booked 533 million nights and experiences.', src: ['S11'] },
        { t: 'fact', label: 'Revenue, 2025', value: '$12.2 billion (+10% for the year)', src: ['S11'] },
        { t: 'fact', label: 'Nights and experiences booked, 2025', value: '533.0 million (+8%)', src: ['S11'] },
        { t: 'fact', label: 'Gross booking value (GBV), 2025', value: '$91.3 billion (+12%)', src: ['S11'] },
        { t: 'p', text: 'The question of the chapter: how do you make millions of strangers trust each other enough to let one another into their homes? This chapter needs honesty: many polished Airbnb stories differ between sources, and we show exactly where.' },
        { t: 'card', icon: 'target', title: 'How to read the chapter', label: 'HONESTY LABELS', rows: [
            { k: '[S1...S11]', v: 'Source. Tap the label to see where the fact comes from.' },
            { k: 'Not found', v: 'The data is not in open sources. The author does not invent it.' },
            { k: 'AI reconstruction', v: 'A scene or line invented for practice. These are not the words of real people.' },
            { k: 'Discrepancy', v: 'If sources disagree, we show both versions.' },
        ] },
    ] },
    { id: 'p1', n: '1', title: 'Genesis of the founders', kicker: 'Two designers, one engineer and a rent bill', xp: 20, blocks: [
        { t: 'p', text: 'Brian Chesky and Joe Gebbia studied together at the Rhode Island School of Design. In 2007 they lived in San Francisco and could not pay the rent. A design conference was in town, hotels were full, and they inflated three air mattresses and turned the apartment into "Airbed & Breakfast".', src: ['S1', 'S2'] },
        { t: 'p', text: 'Three guests stayed: Michael, Kat and Amol. In the founders\' words, the guests arrived as strangers and left as friends, and that pushed them toward a thought: "Maybe there is a bigger idea here". Soon the engineer Nathan Blecharczyk joined them.', src: ['S2'] },
        { t: 'fact', label: 'First hosts', value: 'Chesky and Gebbia, three guests on mattresses in 2007', src: ['S2'] },
        { t: 'p', text: 'Paul Graham writes that this very experience kept them from giving up: host and guest first came together out of necessity, and both were happy. Graham believes they had tasted the future and could not let it go.', src: ['S3'] },
        { t: 'ladder', title: 'Ladder of abstraction: where the idea came from', steps: [
            'Concrete: three mattresses in an apartment during a conference, to pay the rent',
            'Pattern: both host and guest got something they did not expect, and both were happy',
            'Principle: some people have spare space, others have none, and only distrust stands between them',
            'Application: build a system where strangers can trust each other',
        ] },
        { t: 'warn', title: 'What is little known', text: 'Founding dates and the exact makeup of the early partnership come from sources of uneven depth. I rely on the founders\' letter and the S-1 description. Legal precision would need legal documents, and I did not look for them.', src: ['S1', 'S2'] },
    ] },
    { id: 'p2', n: '2', title: 'Finding the pain', kicker: 'What problem they were really solving', xp: 20, blocks: [
        { t: 'p', text: 'For the host, the pain was money. When Chesky and Gebbia traveled to New York, their main discovery was that many hosts, like them, needed that money to pay for housing. This was at the height of the worst recession in decades.', src: ['S3'] },
        { t: 'p', text: 'For the guest, the pain was different. The founders bet that travelers would want to stay in someone\'s home and feel part of a place instead of a tourist. Trust is named as the key. According to the S-1, it is built from host and guest profiles, built-in messaging, mutual reviews and protected payments.', src: ['S1', 'S6'] },
        { t: 'p', text: 'Alfred Lin of Sequoia writes that the founders had only a vague idea of many key things: what makes a good host, how to build trust, how to handle payments. They were strongest in vision and worked out the details along the way.', src: ['S6'] },
        { t: 'card', icon: 'target', title: 'Two sides of the pain', label: 'ANALYSIS FROM THE FACTS ABOVE', rows: [
            { k: 'Host', v: 'Needs money, and spare space sits empty' },
            { k: 'Guest', v: 'Wants to live like a local, and hotels do not give that feeling' },
            { k: 'What gets in the way', v: 'Distrust between strangers: everyone fears being cheated or having belongings damaged' },
            { k: 'Not in the sources', v: 'A survey of guests and hosts of that time showing the share who refuse because of distrust' },
        ] },
        { t: 'gap', text: 'Not found: a 2008 market study showing the size of the audience ready to sleep at strangers\' homes.' },
    ] },
    { id: 'p3', n: '3', title: 'MVP and the first people', kicker: 'From zero to 10,000 registered', xp: 25, blocks: [
        { t: 'p', text: 'By autumn 2008 the idea was not growing. According to Wired, Chesky and Gebbia ran out of money, fell into debt, and Blecharczyk went back to Boston. Graham recalls they financed the company with credit cards and kept a folder with the card limits.', src: ['S4', 'S3'] },
        { t: 'p', text: 'The founders then came up with cereal boxes: Obama O\'s and Cap\'n McCain\'s, themed on the 2008 presidential campaign. Obama O\'s sold out in three days and were resold for $350 a box. Chesky says the company earned $30,000 from cereal.', src: ['S4', 'S5'] },
        { t: 'warn', title: 'Discrepancy: how much and why', text: 'Chesky (words at a Stanford event, retold by CNBC): they sold more than 1,000 boxes and earned $30,000, and Paul Graham gave money precisely because of the cereal. Wired: cereal brought between $20,000 and $30,000, and the adviser Michael Seibel sent them to Y Combinator. Graham\'s essay "The Airbnbs" does not contain the word "cereal"; he writes that he disliked the idea but liked the founders. I take the retelling of Chesky\'s words as his version, not as fact.', src: ['S5', 'S4', 'S3'] },
        { t: 'p', text: 'In January 2009 Airbnb joined Y Combinator. Terms, per Wired: $20,000 for 6% of the company. The goal for the YC period was called "ramen profitability" and equaled $4,000 a month: $3,500 for rent and $500 for food.', src: ['S4', 'S3'] },
        { t: 'p', text: 'Growth began in a narrow market. The founders knew from search data that demand was highest in New York, so they went there in person: they visited hosts, helped make listings more attractive, and photographed the homes themselves with a rented camera.', src: ['S3'] },
        { t: 'card', icon: 'chart', title: 'First weeks of growth, February 2009', label: 'PRIMARY DATA FROM BRIAN\'S EMAIL TO GRAHAM', rows: [
            { k: 'First week of February', v: '$460 in fees' },
            { k: 'Second', v: '$897' },
            { k: 'Third', v: '$1,428' },
            { k: 'February 22, 2009', v: 'Chesky writes to Graham that the company is ramen profitable' },
        ], src: ['S3'] },
        { t: 'ladder', title: 'Ladder of the first people', steps: [
            'First 3: guests on mattresses in the founders\' apartment, 2007',
            'Up to 100 and 1,000: I did not find exact user numbers for this stage',
            'April 2009: 2,500 listings and 10,000 registered users (per Sequoia)',
            '2019: 54 million active guests in a year, 327 million nights and experiences (per the S-1)',
        ] },
        { t: 'fact', label: 'Sequoia seed, April 2009', value: '$585,000 at 2,500 listings and 10,000 registered users', src: ['S6'] },
        { t: 'warn', title: 'Discrepancy: seed amount', text: 'Sequoia gives $585,000. Startup data aggregators say $600,000 and a valuation of $2.4-2.5 million. I did not find the primary valuation of this round, so I do not use a valuation figure.', src: ['S6'] },
    ] },
    { id: 'p4', n: '4', title: 'Money and valuation', kicker: 'From credit cards to $3.5 billion', xp: 25, blocks: [
        { t: 'p', text: 'Investors did not believe. Graham recalls that one potential investor walked out of a cafe in the middle of a meeting and never came back, leaving his smoothie unfinished. Graham also writes that he disliked the idea itself until he saw how they worked.', src: ['S3'] },
        { t: 'fact', label: 'Y Combinator (January 2009)', value: '$20,000 for 6% of the company', src: ['S4'] },
        { t: 'fact', label: 'Sequoia seed (April 2009)', value: '$585,000', src: ['S6'] },
        { t: 'p', text: 'Later rounds: the amounts and valuations are not given in the open primary sources I used. So only what I found in primary documents.' },
        { t: 'gap', text: 'Not found in primary sources: amounts and valuations of the 2010-2019 rounds. Aggregators give figures, but I did not use them without a document.' },
        { t: 'card', icon: 'coins', title: 'Scale before the IPO', label: 'PER THE S-1', rows: [
            { k: 'Revenue 2019', v: '$4.8 billion, +32% from $3.7 billion in 2018' },
            { k: 'GBV 2019', v: '$38.0 billion, +29% from $29.4 billion' },
            { k: 'Guests 2019', v: '54 million active, 327 million nights and experiences' },
            { k: 'Since founding', v: 'More than 825 million guest arrivals' },
            { k: 'Listings on Sep 30, 2020', v: '7.4 million available, 5.6 million active' },
        ], src: ['S1'] },
        { t: 'p', text: 'Then came the pandemic. According to the founders\' letter, the business dropped by almost 80%. According to the S-1, in April 2020 gross nights booked fell 72% year over year.', src: ['S2', 'S1'] },
        { t: 'p', text: 'Even so, by the third quarter of 2020 the company showed $219 million in net income on revenue of $1.34 billion.', src: ['S10'] },
        { t: 'fact', label: 'IPO, December 9-10, 2020', value: '51,323,531 shares at $68: 50 million sold by the company, 1,323,531 by shareholders', src: ['S7'] },
        { t: 'fact', label: 'Amount raised', value: 'About $3.5 billion. Author\'s calculation for the company\'s shares: 50 million x 68 = $3.4 billion', src: ['S8', 'S7'] },
        { t: 'fact', label: 'First day', value: 'Close at $144.71, up almost 113%, market value near $100 billion', src: ['S9'] },
    ] },
    { id: 'p5', n: '5', title: 'PMF, money and ecosystem', kicker: 'How trust turned into a business', xp: 30, blocks: [
        { t: 'p', text: 'The company\'s main invention, per the S-1, is not the website but the trust system that lets millions of strangers trust each other. It includes reviews, protected messaging and payments, risk assessment, verification, insurance and host protection, age limits and a round-the-clock safety line.', src: ['S1'] },
        { t: 'p', text: 'In 2019, 84% of revenue came from hosts whose first guest check-in happened no later than December 31, 2018. And 79% of hosts came to the platform on their own, directly.', src: ['S1'] },
        { t: 'p', text: 'During the pandemic the company cut everything that was not core and returned to hosts. According to the letter, it also turned in-person experiences into online ones in two weeks and created a host fund, for which it set aside more than 9 million shares.', src: ['S2'] },
        { t: 'card', icon: 'layers', title: 'What became the ecosystem', label: 'PER COMPANY DATA', rows: [
            { k: 'Hosts', v: 'More than 4 million as of the 2020 letter' },
            { k: 'New products', v: 'In 2025 Airbnb Services and Experiences launched, plus a pilot with boutique hotels in New York, Los Angeles, Madrid, San Francisco' },
            { k: 'Payment flexibility', v: 'Reserve Now, Pay Later in the US: a booking without paying upfront' },
            { k: 'Scale', v: 'More than 220 countries and regions, but most of the business is in five countries' },
        ], src: ['S2', 'S11'] },
        { t: 'gap', text: 'Not found in these sources: the exact share of fees charged to hosts and guests today. It is described in the filings, but I did not check those pages.' },
        { t: 'warn', title: 'What cannot be claimed', text: 'We know the S-1 describes the trust system as the main invention. But the sources do not show which part of trust (reviews, payments, insurance) brought the growth.', src: ['S1'] },
    ] },
    { id: 'p6', n: '6', title: 'First principles', kicker: 'Taking decisions apart to the foundation', xp: 30, blocks: [
        { t: 'p', text: 'The decision: let a stranger into your home. What must be true for a person to agree? We break it into parts instead of copying the formula "marketplace".' },
        { t: 'card', icon: 'rules', title: 'First principles: trust between strangers', label: 'AUTHOR\'S ANALYSIS (HYPOTHESIS)', rows: [
            { k: 'Observation 1', v: 'Host and guest are ready to trade if both get something they did not expect. Graham describes exactly this' },
            { k: 'Observation 2', v: 'Distrust is removed not by words but by a system: profiles, reviews, payment through the platform, protection' },
            { k: 'Observation 3', v: 'The market began not with broad advertising but with one city and manual work: trips, photographs, live hosts' },
            { k: 'Conclusion', v: 'Trust can be designed. This is the author\'s hypothesis, not a law' },
        ], src: ['S3', 'S1'] },
        { t: 'card', icon: 'chart', title: 'Do things that do not scale', label: 'EXAMPLE FROM THE SOURCES', rows: [
            { k: 'What they did', v: 'Went to New York and personally photographed hosts\' homes' },
            { k: 'Result', v: 'Weeks with $460, $897 and $1,428 in fees, ramen profitability on February 22, 2009' },
            { k: 'Caveat', v: 'Causation is not proven: Graham writes that growth began about three weeks after YC started' },
        ], src: ['S3'] },
        { t: 'card', icon: 'stone', title: 'Law of the environment (candidate for the carved laws)', label: 'FOR THE FINAL SECTION', rows: [
            { k: 'Wording', v: 'In a marketplace the winner is the one who designed trust between the sides, not the one with more listings' },
            { k: 'Support', v: 'The trust system is named in the S-1 as the main invention, and 84% of 2019 revenue came from hosts with a check-in no later than the end of 2018 (S1)' },
            { k: 'Caveat', v: 'This is a hypothesis. We do not know which part of the trust system produced the growth' },
        ] },
    ] },
    { id: 'p7', n: '7', title: 'What transfers to you', kicker: 'Rules you can take into any product', xp: 25, blocks: [
        { t: 'card', icon: 'bulb', title: 'Five rules from this case', label: 'TRANSFERABLE', rows: [
            { k: '1. Start with sharp pain on both sides', v: 'The host needs money, the guest needs a place. If one side has no pain, the market will not start' },
            { k: '2. One city before all others', v: 'New York, where search already showed demand. Grow not wide but where it is already hot' },
            { k: '3. Manual work at the start', v: 'Photographs and visits by the founders taught them the main thing about hosts' },
            { k: '4. Design trust', v: 'Reviews, payments, protection: without them strangers will not take the step' },
            { k: '5. Survive until growth', v: 'They had credit cards and cereal, and they did not quit because they saw the idea worked' },
        ] },
        { t: 'warn', title: 'Where these rules will not work', text: 'Airbnb grew in 2008-2010, when the short-term rental market barely existed. The rules come from one case. City laws on short-term rentals appear in the sources above only as a risk.', src: ['S11'] },
        { t: 'gap', text: 'Not found: data on guest churn and repeat bookings in the early years, and the exact 2010-2019 rounds.' },
    ] },
];

export const AIRBNB_EN: Chapter = {
    ...AIRBNB,
    title: 'Airbnb: how three air mattresses became a trust system',
    sub: 'How strangers learned to let each other into their homes, and what had to be done by hand to make it happen.',
    eyebrow: 'CHAPTER 03',
    parts: PARTS,
    sources: AIRBNB.sources.map(s => ({ ...s, kind: KIND[s.kind] ?? s.kind, title: TITLE[s.id] ?? s.title })),
};
