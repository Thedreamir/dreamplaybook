import type { Chapter, Part } from './types';
import { NOTION } from './ch-notion';
import { KIND } from './en-common';

const TITLE: Record<string, string> = {
    S1: 'Sequoia Capital: Notion spotlight (Megan Finnerty): Kyoto 2015, laying off the team, the $2 million angel round of 2013',
    S2: 'Figma Blog: Design on a deadline, how Notion pulled itself back from the brink of failure: interview with Ivan Zhao',
    S3: 'First Round Capital: Notion portfolio page, the 2013 seed round of $2 million, Josh Kopelman',
    S4: 'Forbes (Alex Konrad): Notion reaches $10 billion valuation, boosted by remote work and TikTok (Oct 8, 2021)',
    S5: 'Notion Blog: Sequoia and Index buy employee shares at a $10 billion valuation (Jul 29, 2022)',
    S6: 'CNBC: Notion rides AI boom to $500 million in annual revenue (Sep 18, 2025)',
    S7: 'Forbes (Anna Tong): Notion kicks off employee share sale at $11 billion valuation (Dec 15, 2025), per unnamed people',
};

const PARTS: Part[] = [
    { id: 'p0', n: '0', title: 'Prologue: the company that almost died', kicker: 'Why Notion sits in the volume next to Dropbox and Figma', xp: 20, blocks: [
        { t: 'p', text: 'Notion was founded in 2013, released the first version of its product in 2016, and in 2025 told CNBC it has more than 100 million users and $500 million in annual revenue (S6).' },
        { t: 'fact', label: 'Annual revenue', value: '$500 million (September 2025, per the company), later, per Forbes, more than $600 million ARR (anonymous sources)', src: ['S6', 'S7'] },
        { t: 'fact', label: 'Money raised', value: 'about $330 million over its whole history, last round in 2021 (S6)', src: ['S6'] },
        { t: 'p', text: 'The question of the chapter: what do you do when people do not need your product and money is running out. Notion\'s answer: stop, lay off the team and start over.' },
        { t: 'card', icon: 'target', title: 'How to read the chapter', label: 'HONESTY LABELS', rows: [
            { k: '[S1...S7]', v: 'Source. Tap the label to see where the fact comes from.' },
            { k: 'Not found', v: 'The data is not in open sources. The author does not invent it.' },
            { k: 'AI reconstruction', v: 'A scene or line invented for practice. These are not the words of real people.' },
            { k: 'Discrepancy', v: 'If sources disagree, we show both versions.' },
        ] },
    ] },
    { id: 'p1', n: '1', title: 'Genesis of the founders', kicker: 'The idea of "the computer as paper"', xp: 20, blocks: [
        { t: 'p', text: 'In 2013 Ivan Zhao and Simon Last raised about $2 million from angels, mostly friends and acquaintances (S1). First Round writes that it wrote the largest check in the $2 million seed round, and that it was hooked by Zhao\'s "imagine if" from the very start (S3).' },
        { t: 'p', text: 'Zhao\'s big idea, per Sequoia: let anyone build on any device with the same freedom as with writing. He compares it to the printing press: while only scribes and clergy could read, most people did not write great books. Today, according to the text, only 0.34% of people in the world are programmers (S1).' },
        { t: 'warn', title: 'What this number is', text: 'The 0.34% figure is given by the Sequoia author in a retelling of Zhao\'s speech. The article does not say where it comes from.' },
        { t: 'ladder', title: 'Ladder of abstraction: where the idea came from', steps: [
            'Concrete: software is closed to those who cannot program',
            'Pattern: tools of creation belonged to a few, like writing before print',
            'Principle: a person should assemble software for themselves from blocks',
            'Application: a single working document that assembles like a construction set',
        ] },
    ] },
    { id: 'p2', n: '2', title: 'Finding the pain', kicker: 'They built what they wanted, not what people wanted', xp: 20, blocks: [
        { t: 'p', text: 'The first version of Notion was a software application that a person without programming skills could use. Zhao tells Figma: "people were not interested". And adds: "we were too focused on what we wanted to bring to the world. We should have listened to what the world wanted from us" (S2).' },
        { t: 'p', text: 'This is the most honest admission in the chapter. The idea is beautiful, but the pain was chosen not from the customer but from the founders.' },
        { t: 'warn', title: 'What we do not know', text: 'How many users the first version had and how many people turned away is not in the sources we read. First Round writes that the team rebuilt the product four times, but that is wording from the fund\'s site, and we did not find details of the four versions (S3).' },
    ] },
    { id: 'p3', n: '3', title: 'MVP and the first people', kicker: 'Kyoto, 18 hours a day and Figma', xp: 25, blocks: [
        { t: 'p', text: 'In 2015, per Sequoia, money was running out. The founders laid off their only colleagues, moved from San Francisco to Kyoto (living there cost less than half) and rented a small house (S1).' },
        { t: 'p', text: 'Figma writes that the team was four people: "by the burn rate we would all have died together, there was no choice". They sublet the San Francisco office and went where they could focus (S2).' },
        { t: 'warn', title: 'Discrepancy: team size', text: 'Figma speaks of "a team of four" (S2). Sequoia writes "their only colleagues" without a number (S1). We show both versions.' },
        { t: 'p', text: 'Figma noticed that Zhao became its most active user: he sat in the editor more than 18 hours a day and drew version after version of the future Notion 1.0. He and Last worked at the same time in one file: one programs while the other designs, and the reverse (S2).' },
        { t: 'ladder', title: 'Ladder of the first people', steps: [
            'First: friends and acquaintances who bought shares (S1)',
            '2015: the move, the layoffs, the rebuild (S1, S2)',
            '2016: launch of the first version, as CNBC calls it (S6)',
            '2019: 1 million users, April 2020: 4 million, October 2021: more than 20 million (S4)',
        ] },
        { t: 'gap', text: 'What exactly made the product needed by people in 2016 is explained differently by different sources. We did not find a single document with retention metrics.' },
    ] },
    { id: 'p4', n: '4', title: 'Money, pitch and valuation', kicker: 'An expensive round after the silence', xp: 25, blocks: [
        { t: 'p', text: 'The 2013 seed round: about $2 million, the largest check from First Round (S3). Until 2021 the company, per Forbes, raised relatively small sums (S4).' },
        { t: 'p', text: 'In April 2020 the valuation was $2 billion; in October 2021 a $275 million round led by Coatue and Sequoia with Base10 valued the company at $10 billion (S4). The company did not disclose revenue then (S4).' },
        { t: 'card', icon: 'chart', title: 'Valuation per documents', label: 'FROM $2 TO $11 BILLION', rows: [
            { k: 'April 2020', v: '$2 billion, per Forbes (S4)' },
            { k: 'October 2021', v: '$10 billion, $275 million round (S4)' },
            { k: 'July 2022', v: '$10 billion, Sequoia and Index bought employee shares (S5)' },
            { k: 'December 2025', v: '$11 billion, employee share sale, per Forbes\'s anonymous sources, about $300 million (S7)' },
        ] },
        { t: 'warn', title: 'Discrepancy on the December deal', text: 'Forbes writes about $11 billion and about $300 million, citing people familiar with the matter, and adds that Bloomberg had earlier reported $12 billion (S7). We did not read an official statement.' },
    ] },
    { id: 'p5', n: '5', title: 'PMF, monetization, ecosystem', kicker: 'TikTok, templates and a server that went down', xp: 25, blocks: [
        { t: 'p', text: 'Forbes writes about an unusual problem: Notion went viral on TikTok. On January 4, 2021 millions of people opened the service at the start of the year and found it down; a month later it happened again. The user base grew fivefold in 2020, and Gen Z fell in love with the minimalist service (S4).' },
        { t: 'p', text: 'The company spent half a year rebuilding its infrastructure to cope with the influx. The Reddit community had 150,000 subscribers, almost ten times more than Slack\'s, according to Forbes (S4).' },
        { t: 'fact', label: 'Users', value: '1 million (2019), 4 million (April 2020), more than 20 million (October 2021), more than 100 million (2025, per the company)', src: ['S4', 'S6'] },
        { t: 'p', text: 'By 2025 Notion released an AI agent on OpenAI and Anthropic models. CNBC notes that competition with Microsoft remains the main risk (S6). Forbes writes that half of revenue comes from AI products, and the company brings in cash flow (S7, anonymous sources).' },
        { t: 'warn', title: 'Caveat', text: 'The 2025 figures come from the company itself or from anonymous sources. We have no independent check.' },
    ] },
    { id: 'p6', n: '6', title: 'First principles', kicker: 'What is left if you throw out the word "productivity"', xp: 25, blocks: [
        { t: 'p', text: 'Let us take it down to atoms. What is a work tool? A place where information lies and a way to change it. Notion built this from identical blocks: text, table, page. Blocks stack like cubes. The rest, from templates to agents, is combinations of blocks.' },
        { t: 'ladder', title: 'The path of reasoning, per the documents', steps: [
            'Idea: tools of creation should be available to everyone (S1)',
            'Failure: the first version did what the founders wanted (S2)',
            'Reset: lay off the team, move, rebuild from scratch (S1, S2)',
            'New approach: listen to what the world needs (S2)',
        ] },
        { t: 'card', icon: 'stone', title: 'Law of the environment (candidate for the carved laws)', label: 'FOR THE FINAL SECTION', rows: [
            { k: 'Wording', v: 'If a product does not work, a cheap place and a full reset are sometimes better than slow dying' },
            { k: 'Support', v: 'Kyoto cost less than half of San Francisco, and Notion 1.0 was born there (S1, S2)' },
            { k: 'Caveat', v: 'This is a survivor\'s story. The sources do not say how many teams did the same and did not survive' },
        ] },
    ] },
    { id: 'p7', n: '7', title: 'What transfers to you', kicker: 'Three exercises for this week', xp: 25, blocks: [
        { t: 'card', icon: 'rules', title: 'What to do', label: 'TRANSFER', rows: [
            { k: '1. Check whose desire it is', v: 'Write out what you do for yourself and what people ask for. Where do they overlap?' },
            { k: '2. Count your burn rate', v: 'If money lasts three months, what is the cheapest way to rebuild the product?' },
            { k: '3. Make the product from blocks', v: 'Which 3 simple blocks let you assemble many scenarios?' },
        ] },
        { t: 'card', icon: 'bulb', title: 'A question for yourself', label: 'THINK', rows: [
            { k: 'Question', v: 'What would I bring to the world if the world did not want something else?' },
        ] },
    ] },
];

export const NOTION_EN: Chapter = {
    ...NOTION,
    title: 'Notion: how a company survived by starting over',
    sub: 'Kyoto, 18 hours a day and a lesson about whose desire it really is.',
    eyebrow: 'CHAPTER 07',
    parts: PARTS,
    sources: NOTION.sources.map(s => ({ ...s, kind: KIND[s.kind] ?? s.kind, title: TITLE[s.id] ?? s.title })),
};
