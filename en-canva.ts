import type { Chapter, Part } from './types';
import { CANVA } from './ch-canva';
import { KIND } from './en-common';

const TITLE: Record<string, string> = {
    S1: 'TechCrunch: Canva raises $3 million to make design accessible to everyone (Mar 19, 2013): seed, Fusion Books, 10% of the Australian yearbook market',
    S2: 'TechCrunch: Canva launches (Aug 26, 2013): public beta, invitations sent from the waiting list',
    S3: 'Business Insider: interview with Melanie Perkins (Aug 2016): MaiTai Maui, about 100 investor meetings, 1.5 to 10 million users in a year',
    S4: 'BBC: The 30-year-old woman who designed a $1bn business (2017): the pitch to Bill Tai, Palo Alto',
    S5: 'Sydney Morning Herald: Kitesurfing and pitching (May 23, 2019): kitesurfing since 2011, Fusion Books since 2008',
    S6: 'Canva: 10-year timeline (2023): waiting list, 100,000 users, Series A, $165 million valuation',
    S7: 'Canva: $40 billion valuation, $200 million round (Sep 15, 2021)',
    S8: 'Forbes: Canva valued at $42 billion in employee share sale (Aug 21, 2025): 240 million users, $3.3 billion revenue',
};

const PARTS: Part[] = [
    { id: 'p0', n: '0', title: 'Prologue: the yearbook as a laboratory', kicker: 'Why Canva sits in the volume next to Figma and Shopify', xp: 20, blocks: [
        { t: 'p', text: 'Canva grew out of school yearbooks in Perth. According to the company\'s statement in August 2025, Canva has more than 240 million monthly active users, $3.3 billion in annual revenue and 27 million paying seats (S8).' },
        { t: 'fact', label: 'Scale in 2025 (company statement)', value: '240 million monthly users, $3.3 billion annual revenue, 27 million paying', src: ['S8'] },
        { t: 'fact', label: 'Valuation in September 2021', value: '$40 billion, $200 million round', src: ['S7'] },
        { t: 'p', text: 'The question of the chapter: how a person without connections, without money and without a technical team in Perth reached Silicon Valley and heard "no" a hundred times.' },
        { t: 'card', icon: 'target', title: 'How to read the chapter', label: 'HONESTY LABELS', rows: [
            { k: '[S1...S8]', v: 'Source. Tap the label to see where the fact comes from.' },
            { k: 'Not found', v: 'The data is not in open sources. The author does not invent it.' },
            { k: 'AI reconstruction', v: 'A scene or line invented for practice. These are not the words of real people.' },
            { k: 'Discrepancy', v: 'If sources disagree, we show both versions.' },
        ] },
    ] },
    { id: 'p1', n: '1', title: 'Genesis of the founders', kicker: 'Fusion Books and the question of why design is so hard', xp: 20, blocks: [
        { t: 'p', text: 'Melanie Perkins founded Fusion Books together with Cliff Obrecht: an online system where students make yearbook pages. According to TechCrunch, by 2013 the company held 10% of the Australian yearbook market and had expanded to New Zealand and France (S1).' },
        { t: 'warn', title: 'Discrepancy: when Fusion Books was founded', text: 'Business Insider writes 2007 and adds that Perkins was 19 then (S3). TechCrunch also names 2007 (S1). The Sydney Morning Herald writes 2008 (S5). We show both years.' },
        { t: 'p', text: 'Perkins tells TechCrunch: "we always knew our technology was more powerful than the yearbook market". In summer 2012 the team decided to take this technology to a bigger market (S1). The third co-founder, Cameron Adams, joined in 2011 (S5).' },
        { t: 'ladder', title: 'Ladder of abstraction: where the idea came from', steps: [
            'Concrete: students cannot lay out yearbook pages well',
            'Pattern: to make even a simple design you need a professional tool or a designer',
            'Principle: "many points of friction between an idea and a design" (Perkins\'s words, S1)',
            'Application: a simple online editor for anyone who is not a designer',
        ] },
    ] },
    { id: 'p2', n: '2', title: 'Finding the pain', kicker: 'Points of friction between an idea and a design', xp: 20, blocks: [
        { t: 'p', text: 'Perkins explains the pain this way: if you have an idea and want to turn it into a design, there is a "huge number of points of friction". A simple design takes a lot of time unless you are a professional designer (S1).' },
        { t: 'p', text: 'In August 2013 TechCrunch compares Canva to Google Docs: a "good enough" substitute for complex Office with a simpler interface. For most people who need a flyer, an invitation or a blog image, Canva is enough (S2).' },
        { t: 'warn', title: 'What we do not know', text: 'How many Fusion Books customers confirmed demand for a broader product before Canva\'s launch is not in the sources we read.' },
    ] },
    { id: 'p3', n: '3', title: 'MVP and the first people', kicker: 'A waiting list of 50,000 people', xp: 25, blocks: [
        { t: 'p', text: 'According to TechCrunch in August 2013, the technology took about a year to build. A design was assembled from draggable blocks, and the library held more than a million photos, graphics and fonts (S2).' },
        { t: 'p', text: 'The launch in August 2013 was a public beta: invitations went to those who had signed up in advance, and new users registered for phased access (S2). Per Canva\'s timeline, by launch the waiting list had more than 50,000 people, and by the end of the second year 100,000 users (S6).' },
        { t: 'ladder', title: 'Ladder of the first people', steps: [
            'First: schools that used Fusion Books (S1)',
            'Waiting list: more than 50,000 people (S6, per the company)',
            'By the end of the second year: 100,000 users (S6)',
            'By 2016: from 1.5 to 10 million users in 12 months (S3)',
        ] },
        { t: 'warn', title: 'Caveat', text: 'The waiting list and first-year figures come from the company\'s own timeline. We found no independent checks.' },
    ] },
    { id: 'p4', n: '4', title: 'Money, pitch and valuation', kicker: 'A hundred meetings, kitesurfing and a $3 million seed', xp: 25, blocks: [
        { t: 'p', text: 'Perkins says that in 2012 she and Obrecht went looking for money, and investors would not agree. She says she held about 100 meetings, and not one ended in a deal. A line from the interview: "we were rejected all the time, but it was obvious to me that this is the future of design" (S3).' },
        { t: 'p', text: 'To get into the circle of investors she learned kitesurfing. The SMH writes that this was in 2011, while Business Insider places the invitation to Bill Tai\'s event MaiTai Maui in 2012 (S3, S5). The BBC describes how she flew to Palo Alto for a meeting with Tai, and how he, though glued to his phone, introduced her to other people and later invested himself (S4).' },
        { t: 'warn', title: 'Discrepancy on dates', text: 'Kitesurfing: 2011 per the SMH (S5) and 2012 as the year of the event per Business Insider (S3). Perhaps these were two different steps, but the sources do not clarify.' },
        { t: 'p', text: 'In March 2013 Canva announced a $3 million seed from Matrix Partners, InterWest Partners, 500 Startups and angels, among them Lars Rasmussen, Bill Tai and Ken Goldman (S1).' },
        { t: 'card', icon: 'chart', title: 'Valuation per documents', label: 'FROM SEED TO $42 BILLION', rows: [
            { k: 'March 2013', v: '$3 million seed (S1)' },
            { k: '2015', v: 'Series A $15 million, valuation $165 million (S6)' },
            { k: 'September 2021', v: '$40 billion, $200 million round (S7)' },
            { k: 'August 2025', v: '$42 billion, employee share sale (S8)' },
        ] },
    ] },
    { id: 'p5', n: '5', title: 'PMF, monetization, ecosystem', kicker: 'Free for everyone, paid for teams', xp: 25, blocks: [
        { t: 'p', text: 'In 2015 Canva released Canva for Work (later Canva Pro). The timeline notes that by that year the company had 50 employees and 50 million designs created, at 1.5 million monthly users (S6).' },
        { t: 'p', text: 'By 2016, per Business Insider, there were 50,000 paying business teams, and the iPhone app was downloaded 330,000 times in two weeks. The company had raised more than $27 million (S3).' },
        { t: 'p', text: 'In September 2021, per Canva\'s statement, revenue more than doubled in a year and was due to exceed $1 billion annualized by the end of the year. The company created 120 designs a second and offered more than 800,000 templates (S7).' },
        { t: 'fact', label: 'Profitability', value: 'the company says it has been profitable for eight years in a row (per the August 2025 statement)', src: ['S8'] },
        { t: 'warn', title: 'Caveat', text: 'The 2025 figures come from the company\'s own statement. We have no independent check.' },
    ] },
    { id: 'p6', n: '6', title: 'First principles', kicker: 'What is left if you throw out the word "designer"', xp: 25, blocks: [
        { t: 'p', text: 'Let us take it down to atoms. What does a person making a poster need? Size, font, picture and layout. A designer needs all of this on purpose; everyone else needs ready decisions. Canva gave templates and blocks and hid the complexity.' },
        { t: 'ladder', title: 'The path of reasoning, per the documents', steps: [
            'Atom: someone who is not a designer wants a ready, good result (S1)',
            'Unnecessary: a complex professional tool (S2)',
            'Solution: draggable blocks and templates in the browser (S2)',
            'Money: teams pay, not everyone (S3, S6)',
        ] },
        { t: 'card', icon: 'stone', title: 'Law of the environment (candidate for the carved laws)', label: 'FOR THE FINAL SECTION', rows: [
            { k: 'Wording', v: 'The winner is not the one who gives more features, but the one who removes complexity for the biggest and least visible customer' },
            { k: 'Support', v: 'TechCrunch compares Canva to a "good enough" Google Docs against Office (S2)' },
            { k: 'Caveat', v: 'This is a 2013 journalistic assessment. How exactly the product retains users, the sources do not reveal' },
        ] },
    ] },
    { id: 'p7', n: '7', title: 'What transfers to you', kicker: 'Three exercises for this week', xp: 25, blocks: [
        { t: 'card', icon: 'rules', title: 'What to do', label: 'TRANSFER', rows: [
            { k: '1. Find your small laboratory', v: 'Where do you already have a small working business that proves the technology?' },
            { k: '2. Count your "no"s', v: 'Write down every refusal and what in it can be improved, like Perkins with 100 meetings' },
            { k: '3. Hide the complexity', v: 'Which decision can you replace with a template?' },
        ] },
        { t: 'card', icon: 'bulb', title: 'A question for yourself', label: 'THINK', rows: [
            { k: 'Question', v: 'Who in my field today cannot do a simple thing because the tools are too complex?' },
        ] },
    ] },
];

export const CANVA_EN: Chapter = {
    ...CANVA,
    title: 'Canva: how a yearbook from Perth became design for everyone',
    sub: 'A hundred rejections, kitesurfing, a waiting list of 50,000 people and 240 million users.',
    eyebrow: 'CHAPTER 09',
    parts: PARTS,
    sources: CANVA.sources.map(s => ({ ...s, kind: KIND[s.kind] ?? s.kind, title: TITLE[s.id] ?? s.title })),
};
