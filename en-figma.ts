import type { Chapter, Part } from './types';
import { FIGMA } from './ch-figma';
import { KIND } from './en-common';

const TITLE: Record<string, string> = {
    S1: 'Dylan Field, "Design: Meet the internet", Figma blog (Dec 3, 2015): launch, WebGL, $18 million',
    S2: 'Evan Wallace, "Multiplayer Editing in Figma", Figma blog (Sep 28, 2016): public release and multiplayer',
    S3: 'Index Ventures: Figma goes public, thirteen unforgettable years with Dylan Field: the founders\' pitch, $749 million revenue in 2024',
    S4: 'TechCrunch: the history of Figma (Jun 25, 2023): the 2012 idea and the bet on the browser',
    S5: 'Bloomberg: Figma is now worth $10 billion (Jun 24, 2021): $200 million round',
    S6: 'Reuters: Adobe shelves $20 billion Figma deal (Dec 18, 2023): $1 billion compensation, 1,300 employees',
    S7: 'Adobe, Form 8-K (Dec 17, 2023): termination of the merger agreement with Figma',
    S8: 'Reuters: Figma files for US IPO (Jul 1, 2025): Q1 2025 revenue $228.2 million, $12.5 billion valuation in the 2024 tender offer',
    S9: 'CNBC: Figma prices IPO at $33 (Jul 30, 2025): $1.2 billion raised, $19.3 billion valuation',
};

const PARTS: Part[] = [
    { id: 'p0', n: '0', title: 'Prologue: design in one link', kicker: 'Why Figma sits in the volume next to Notion and Canva', xp: 20, blocks: [
        { t: 'p', text: 'Figma moved from the desktop into the browser. Index Ventures writes that in 2024 Figma\'s revenue was $749 million (almost +50% for the year) and that more than 13 million people use it every month (S3).' },
        { t: 'fact', label: 'Revenue, 2024', value: '$749 million, about +50% (per Index Ventures, a fund that invested in Figma)', src: ['S3'] },
        { t: 'fact', label: 'First quarter 2025', value: '$228.2 million revenue versus $156.2 million a year earlier', src: ['S8'] },
        { t: 'p', text: 'The question of the chapter: how do you build a product that everyone calls impossible, and how do you survive a $20 billion deal that did not happen.' },
        { t: 'card', icon: 'target', title: 'How to read the chapter', label: 'HONESTY LABELS', rows: [
            { k: '[S1...S9]', v: 'Source. Tap the label to see where the fact comes from.' },
            { k: 'Not found', v: 'The data is not in open sources. The author does not invent it.' },
            { k: 'AI reconstruction', v: 'A scene or line invented for practice. These are not the words of real people.' },
            { k: 'Discrepancy', v: 'If sources disagree, we show both versions.' },
        ] },
    ] },
    { id: 'p1', n: '1', title: 'Genesis of the founders', kicker: 'A hackathon, WebGL and a Thiel fellowship', xp: 20, blocks: [
        { t: 'p', text: 'Dylan Field writes in the blog: in April 2011 his schoolmate Evan Wallace came back to the Brown computer lab from a hackathon. He showed that he had rewritten a server-side image processing API in WebGL and said: "with this you can build creative tools in the browser" (S1).' },
        { t: 'p', text: 'Then for a year they discussed the idea, and with the support of the Thiel fellowship decided to found a company (S1). Index Ventures adds: Wallace had been Field\'s teaching assistant, and then the two of them came to a pitch at Index\'s San Francisco office (S3).' },
        { t: 'warn', title: 'Discrepancy: when the idea began', text: 'Field names April 2011 and a year of discussion before deciding to found a company (S1). TechCrunch writes that the idea of a browser tool came in 2012 (S4). We do not know what counts as the start, so we show both versions.' },
        { t: 'ladder', title: 'Ladder of abstraction: where the idea came from', steps: [
            'Concrete: designers work in separate files and pass them around',
            'Pattern: what cannot be done together in real time gets used less',
            'Principle: after Google Docs any software can be made online and collaborative (S1)',
            'Application: a browser-based interface editor built on WebGL',
        ] },
    ] },
    { id: 'p2', n: '2', title: 'Finding the pain', kicker: 'Three years of silence and the doubts of skeptics', xp: 20, blocks: [
        { t: 'p', text: 'Field writes that creative tools did not move online because the browser was not powerful enough, and WebGL changed that (S1). TechCrunch adds that in 2012 web technologies were not ready for such a task in real time (S4).' },
        { t: 'p', text: 'Index Ventures writes that many people told the founders it was impossible. The founders themselves "did not yet know exactly what the product would be" when they came to the pitch (S3).' },
        { t: 'warn', title: 'What we do not know', text: 'How many designers the founders surveyed before launch is not in the sources we read. We do not invent a number.' },
    ] },
    { id: 'p3', n: '3', title: 'MVP and the first people', kicker: 'A closed beta and multiplayer', xp: 25, blocks: [
        { t: 'p', text: 'In December 2015 Field announced the launch of Figma "after three years of silence and hard work" (S1). It was a closed beta.' },
        { t: 'p', text: 'The public release came out in late September 2016. Wallace writes that at first they did not build collaborative editing: they saved the whole document at once, and people sometimes overwrote each other. He calls multiplayer "a huge technical investment that takes a lot of time and resources", and says the team first considered cheap workarounds, like a "baton pass" mode (S2).' },
        { t: 'ladder', title: 'Ladder of the first people', steps: [
            'First: the founders themselves and the team using Figma in-house (S1)',
            'December 2015: closed beta (S1)',
            'September 2016: public release with multiplayer (S2)',
            'Numbers for the first 100, 1,000 and 10,000 users: not found in open sources',
        ] },
        { t: 'gap', text: 'How many users were in the closed beta and in the first year after release is not in the documents we read.' },
    ] },
    { id: 'p4', n: '4', title: 'Money, pitch and valuation', kicker: 'From $18 million to a $20 billion that never happened', xp: 25, blocks: [
        { t: 'p', text: 'By the launch in December 2015 Figma had raised $18 million from Greylock, Index and OATV and from angels, among them Jeff Weiner, DJ Patil, Adam Nash and Soleio Cuervo (S1).' },
        { t: 'p', text: 'In June 2021 the company raised $200 million at a $10 billion valuation, five times higher than a year earlier. Investors included Durable Capital and Morgan Stanley (S5).' },
        { t: 'p', text: 'In September 2022 Adobe announced the purchase of Figma for $20 billion (S3, S4). In December 2023 Adobe backed out: "no clear path" to approval by antitrust authorities in Europe and the United Kingdom. Adobe paid Figma $1 billion in compensation (S6, S7).' },
        { t: 'card', icon: 'chart', title: 'Valuation per documents', label: 'FROM $18 MILLION TO $19.3 BILLION', rows: [
            { k: 'December 2015', v: '$18 million raised in total (S1)' },
            { k: 'June 2021', v: '$10 billion, $200 million round (S5)' },
            { k: 'September 2022', v: '$20 billion, Adobe purchase price, deal not closed (S3, S4)' },
            { k: '2024', v: '$12.5 billion, tender offer (S8)' },
            { k: 'July 2025', v: 'IPO at $33, valuation $19.3 billion, $1.2 billion raised (S9)' },
        ] },
        { t: 'warn', title: 'Caveat', text: 'Most of the $1.2 billion in the IPO went to existing shareholders, not to the company (CNBC, S9). The $19.3 billion valuation is a CNBC calculation at the offering price.' },
    ] },
    { id: 'p5', n: '5', title: 'PMF, monetization, ecosystem', kicker: 'One link instead of a file', xp: 25, blocks: [
        { t: 'p', text: 'Field describes the product like this: "share a design by link, give contextual comments, set shared brand colors for the team" (S1). This is what turns a tool from personal into a team one.' },
        { t: 'p', text: 'Reuters writes that in 2023 the company grew from 800 to 1,300 employees, expected annual recurring revenue to grow 40% to more than $600 million and was already generating cash flow. This data came from an unnamed source (S6).' },
        { t: 'fact', label: 'Reach per Index', value: '13 million monthly users, 95% of the Fortune 500, more than 1,000 customers spending more than $100,000 a year', src: ['S3'] },
        { t: 'warn', title: 'Caveat', text: 'The 2024 figures come from a fund that invested in Figma and from the company\'s own account. We have no independent check.' },
    ] },
    { id: 'p6', n: '6', title: 'First principles', kicker: 'What is left if you throw out the word "design"', xp: 25, blocks: [
        { t: 'p', text: 'Let us take it down to atoms. What is a design file? Data that several people need to see and change. Then the file is not needed: what is needed is one shared copy that everyone sees at once. It is what Google Docs did to text.' },
        { t: 'ladder', title: 'The path of reasoning, per the documents', steps: [
            'Atom: data should be shared, not copied (S1)',
            'Blocker: the browser was too weak until WebGL appeared (S1)',
            'Bet: build in the browser, even though many said it was impossible (S3)',
            'Result: multiplayer as the core, not a feature (S2)',
        ] },
        { t: 'card', icon: 'stone', title: 'Law of the environment (candidate for the carved laws)', label: 'FOR THE FINAL SECTION', rows: [
            { k: 'Wording', v: 'When a new technology removes an old limit, a product impossible yesterday can become the standard if you invest in the hard part' },
            { k: 'Support', v: 'WebGL made a browser editor possible, and multiplayer required a huge investment (S1, S2)' },
            { k: 'Caveat', v: 'This is an explanation after the fact. Many bets on new technology do not pay off' },
        ] },
    ] },
    { id: 'p7', n: '7', title: 'What transfers to you', kicker: 'Three exercises for this week', xp: 25, blocks: [
        { t: 'card', icon: 'rules', title: 'What to do', label: 'TRANSFER', rows: [
            { k: '1. Find a limit that disappeared', v: 'Which technology in the last three years made possible what was not possible before?' },
            { k: '2. Decide what the hard core is', v: 'Which part of your product will demand a big investment but create an advantage?' },
            { k: '3. Make the product shared', v: 'What in your product is personal now but would gain from a shared link?' },
        ] },
        { t: 'card', icon: 'bulb', title: 'A question for yourself', label: 'THINK', rows: [
            { k: 'Question', v: 'What does everyone consider impossible in my field, and what exactly has changed?' },
        ] },
    ] },
];

export const FIGMA_EN: Chapter = {
    ...FIGMA,
    title: 'Figma: how design moved into the browser',
    sub: 'WebGL, three years of silence, a $20 billion deal that did not happen, and the 2025 IPO.',
    eyebrow: 'CHAPTER 08',
    parts: PARTS,
    sources: FIGMA.sources.map(s => ({ ...s, kind: KIND[s.kind] ?? s.kind, title: TITLE[s.id] ?? s.title })),
};
