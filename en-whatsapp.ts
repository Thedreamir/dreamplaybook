import type { Chapter, Part } from './types';
import { WHATSAPP } from './ch-whatsapp';
import { KIND } from './en-common';

const TITLE: Record<string, string> = {
    S1: 'Cult of Mac: How Apple Accidentally Helped To Create $19 Billion WhatsApp (February 2014): June 2009, the status app, iOS push notifications',
    S2: 'TechCrunch: WhatsApp Was Valued At ~$1.5B In Final Round Before Sale (Feb 21, 2014): three rounds, only Sequoia',
    S3: 'Facebook: press release on the WhatsApp acquisition (Feb 19, 2014), attached to Form 8-K: about $16 billion, 450 million monthly, 1 million sign-ups a day',
    S4: 'WhatsApp blog (Jan Koum): "Partnering with Facebook" (Feb 19, 2014): no ads, a nominal fee, autonomy',
    S5: 'Reuters: Facebook to buy WhatsApp for $19 billion (Feb 19, 2014)',
    S6: 'Reuters: WhatsApp says it has 2 billion users (Feb 12, 2020), the company did not disclose how it counts',
};

const PARTS: Part[] = [
    { id: 'p0', n: '0', title: 'Prologue: the app that could not be broken', kicker: 'Why WhatsApp sits in the volume next to Telegram and Instagram', xp: 20, blocks: [
        { t: 'p', text: 'WhatsApp was sold to Facebook in February 2014. In its release Facebook wrote: more than 450 million people a month and more than 1 million new sign-ups every day (S3). In February 2020 the company announced 2 billion users and did not disclose how they were counted (S6).' },
        { t: 'fact', label: 'Monthly users, February 2014', value: 'more than 450 million, per Facebook and Koum', src: ['S3', 'S4'] },
        { t: 'p', text: 'The question of the chapter: how to do one simple action so well that it wins without ads and without new features.' },
        { t: 'card', icon: 'target', title: 'How to read the chapter', label: 'HONESTY LABELS', rows: [
            { k: '[S1...S6]', v: 'Source. Tap the label to see where the fact comes from.' },
            { k: 'Not found', v: 'The data is not in open sources. The author does not invent it.' },
            { k: 'AI reconstruction', v: 'A scene or line invented for practice. These are not the words of real people.' },
            { k: 'Discrepancy', v: 'If sources disagree, we show both versions.' },
        ] },
    ] },
    { id: 'p1', n: '1', title: 'Genesis of the founders', kicker: 'Two former Yahoo employees and a status app', xp: 20, blocks: [
        { t: 'p', text: 'Jan Koum and Brian Acton, former Yahoo engineers, were building an app where every person in your contacts showed a status: what they are doing right now. According to Cult of Mac, in June 2009 they were ready to give up because the app was not working out (S1).' },
        { t: 'p', text: 'Then the platform changed. Apple added push notifications in iOS 3, and an app that could say "I am here" turned into a messenger.' },
        { t: 'warn', title: 'What we do not know', text: 'The exact day they decided to build a messenger is not named in the sources we read. Cult of Mac names only June 2009 as the moment of doubt.' },
        { t: 'ladder', title: 'Ladder of abstraction: where the idea came from', steps: [
            'Concrete: a person wants to know what friends are doing',
            'Pattern: the notification about a status turned out to be needed more than the status itself',
            'Principle: the platform gave a new capability, and the product found its function (S1)',
            'Application: a messenger tied to a phone number',
        ] },
    ] },
    { id: 'p2', n: '2', title: 'Finding the pain', kicker: 'One thing done well', xp: 20, blocks: [
        { t: 'p', text: 'Cult of Mac writes: the founders "broke the rules of Silicon Valley", did not chase press and did not add features, but concentrated on one thing: sending messages (S1).' },
        { t: 'p', text: 'In the statement at the deal Koum describes the same: simple, powerful and instant messaging (S3). And promises: no ads in conversations and a nominal fee (S4).' },
        { t: 'warn', title: 'What we do not know', text: 'How exactly the founders tested the pain before launch is not in the sources we read. We give no surveys and no numbers.' },
    ] },
    { id: 'p3', n: '3', title: 'MVP and the first people', kicker: 'Charging first, so as not to drown in ads', xp: 25, blocks: [
        { t: 'p', text: 'Koum wrote in the blog that in "a little less than five years" the team built a service with 450 million monthly active users and more than 320 million a day (S4).' },
        { t: 'ladder', title: 'Ladder of the first people', steps: [
            '2009: the status app turns into a messenger after push (S1)',
            'February 2014: more than 450 million a month, 320 million a day (S3, S4)',
            'February 2014: 1 million new sign-ups every day (S3)',
            'Numbers for the first 100, 1,000 and 10,000 users: not found in open sources',
        ] },
    ] },
    { id: 'p4', n: '4', title: 'Money, pitch and valuation', kicker: 'One investor and three rounds', xp: 25, blocks: [
        { t: 'p', text: 'TechCrunch, from VC Experts documents: WhatsApp had three rounds, and the only investor was Sequoia. A seed of $250,000 in 2009, then $8 million in 2011 at a valuation of about $80 million, and $52 million in July 2013 at a valuation of about $1.5 billion (S2).' },
        { t: 'p', text: 'Sequoia ended up owning about 20% (the outlet heard "high double digits"), and its stake in the deal was worth about $3 billion (S2).' },
        { t: 'warn', title: 'Discrepancy: how much the deal cost', text: 'Facebook in its release names about $16 billion: $4 billion in cash and about $12 billion in shares (S3). Reuters and others write $19 billion, adding up to another $3 billion in shares for employees with conditions (S5). These are different calculations of the same deal, not different deals. We show both numbers.' },
        { t: 'card', icon: 'chart', title: 'Valuation per documents', label: 'FROM $80 MILLION TO $16 BILLION', rows: [
            { k: '2011', v: 'about $80 million, $8 million round (S2)' },
            { k: 'July 2013', v: 'about $1.5 billion, $52 million round (S2)' },
            { k: 'February 2014', v: 'about $16 billion per Facebook, $19 billion with the employee stake per Reuters (S3, S5)' },
        ] },
    ] },
    { id: 'p5', n: '5', title: 'PMF, monetization, ecosystem', kicker: 'A nominal fee, not advertising', xp: 25, blocks: [
        { t: 'p', text: 'In the statement at the deal the team promised independence: WhatsApp stays autonomous, with no ads in conversations, with a nominal fee, and works on any phone in any country (S4). Facebook promised to keep the brand and independent operation (S3).' },
        { t: 'p', text: 'In February 2020 WhatsApp announced 2 billion users. Reuters notes that the company did not disclose the counting method (S6).' },
        { t: 'gap', text: 'What happened to the promises about ads and fees after 2014 we did not check in this chapter. Data on WhatsApp revenue is not in the sources we read.' },
    ] },
    { id: 'p6', n: '6', title: 'First principles', kicker: 'What is left if you throw out all the features', xp: 25, blocks: [
        { t: 'p', text: 'Let us take it down to atoms. What does a messenger do? It takes a message and delivers it to a person by phone number. Everything else can be added later. WhatsApp bet on making this work always and everywhere, on any phone.' },
        { t: 'ladder', title: 'The path of reasoning, per the documents', steps: [
            'Atom: the message must arrive (S1)',
            'Unnecessary: features and press (S1)',
            'Money: a nominal fee, no ads (S4)',
            'Growth: by itself, 1 million sign-ups a day (S3)',
        ] },
        { t: 'card', icon: 'stone', title: 'Law of the environment (candidate for the carved laws)', label: 'FOR THE FINAL SECTION', rows: [
            { k: 'Wording', v: 'When a platform gives a new capability, a product that does one thing extremely well gets growth without advertising' },
            { k: 'Support', v: 'iOS push notifications turned a status app into a messenger (S1)' },
            { k: 'Caveat', v: 'This is an explanation after success. Many simple apps did not grow' },
        ] },
    ] },
    { id: 'p7', n: '7', title: 'What transfers to you', kicker: 'Three exercises for this week', xp: 25, blocks: [
        { t: 'card', icon: 'rules', title: 'What to do', label: 'TRANSFER', rows: [
            { k: '1. Choose one action', v: 'Which one action must your product do better than anyone?' },
            { k: '2. Cross out features', v: 'Which three features can you remove without losing a customer?' },
            { k: '3. Watch the platform', v: 'Which update of someone else\'s platform in the last year opened a new capability for you?' },
        ] },
        { t: 'card', icon: 'bulb', title: 'A question for yourself', label: 'THINK', rows: [
            { k: 'Question', v: 'What in my product is unnecessary, and who is stopping me from removing it?' },
        ] },
    ] },
];

export const WHATSAPP_EN: Chapter = {
    ...WHATSAPP,
    title: 'WhatsApp: how one feature won without ads',
    sub: 'Statuses, push notifications, one investor and a deal worth $16 or $19 billion.',
    eyebrow: 'CHAPTER 12',
    parts: PARTS,
    sources: WHATSAPP.sources.map(s => ({ ...s, kind: KIND[s.kind] ?? s.kind, title: TITLE[s.id] ?? s.title })),
};
