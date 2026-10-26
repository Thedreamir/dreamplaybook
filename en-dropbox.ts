import type { Chapter, Part } from './types';
import { DROPBOX } from './ch-dropbox';
import { KIND } from './en-common';

const TITLE: Record<string, string> = {
    S1: 'Drew Houston\'s original Y Combinator application (2007), public copy on the YC site',
    S2: 'Forbes: Dropbox and Google files without borders (Jun 28, 2010): the bus at South Station, $15,000 from YC, $1.2 million from Sequoia, 4 million users',
    S3: 'Inc.: How to Raise $1.2 Million in Venture Capital, told by Drew Houston (Jul 5, 2011)',
    S4: 'TechCrunch: Secretive Storage Company Dropbox Took Sequoia Funding in 2007 (Sep 4, 2008)',
    S5: 'Patrick McKenzie (Kalzumeus): Dropbox-style Two-sided Sharing Incentives (Apr 28, 2010), analysis of a talk by the Dropbox team',
    S6: 'Mention Me: Dropbox referral success story: referral figures (+60% sign-ups, 35% of daily sign-ups) in Houston\'s words. We did not read the original talk',
    S7: 'Dropbox, Inc. Form S-1 (Feb 23, 2018): 500 million registered users',
    S8: 'CNBC: Dropbox files to go public (Feb 23, 2018): 2017 revenue $1.11 billion, loss $111.7 million, average revenue per paying user $111.91',
    S9: 'Dropbox: IPO pricing press release (Mar 22, 2018): 36 million shares at $21, ticker DBX',
    S10: 'Reuters: Dropbox IPO priced at $21 per share (Mar 22, 2018): market value about $9.18 billion',
    S11: 'VentureBeat: Dropbox opens trading at $29, up 38% on IPO price (Mar 23, 2018)',
    S12: 'Dropbox response to SEC comments on the prospectus: 500 million is all ever registered, not active users',
    S13: 'Sequoia: the Dropbox story, an account of choosing AWS and leaving it',
};

const PARTS: Part[] = [
    { id: 'p0', n: '0', title: 'Prologue: the file that is not here', kicker: 'Why Dropbox sits in the volume next to Notion and Figma', xp: 20, blocks: [
        { t: 'p', text: 'Dropbox solves one everyday problem: the file you need is on the wrong computer. In the 2018 prospectus the company writes that it has more than 500 million registered users in 180 countries (S7).' },
        { t: 'warn', title: 'What "500 million" means', text: 'In its response to SEC comments the company itself admits: this is everyone who ever registered, whether or not the person uses the service now (S12). The number of active users is much lower, and we do not have the exact figure.' },
        { t: 'fact', label: 'Revenue, 2017', value: '$1.11 billion (+31%), net loss $111.7 million', src: ['S8'] },
        { t: 'p', text: 'The question of the chapter: how in 2007 do you sell an idea that nobody can picture, and how do you grow a user base almost without advertising.' },
        { t: 'card', icon: 'target', title: 'How to read the chapter', label: 'HONESTY LABELS', rows: [
            { k: '[S1...S13]', v: 'Source. Tap the label to see where the fact comes from.' },
            { k: 'Not found', v: 'The data is not in open sources. The author does not invent it.' },
            { k: 'AI reconstruction', v: 'A scene or line invented for practice. These are not the words of real people.' },
            { k: 'Discrepancy', v: 'If sources disagree, we show both versions.' },
        ] },
    ] },
    { id: 'p1', n: '1', title: 'Genesis of the founders', kicker: 'A forgotten flash drive and four hours on a bus', xp: 20, blocks: [
        { t: 'p', text: 'According to Forbes, in December 2006 Drew Houston was waiting for a bus at Boston\'s South Station. He faced a four-hour ride to Manhattan and wanted to work on a project. The flash drive with the project was left in his apartment. Houston says: "I knew there had to be a better way. A flash drive is no better than a floppy disk" (S2).' },
        { t: 'p', text: 'By then Houston was about 24, had graduated from MIT (bachelor\'s in computer science, 2006) and worked as an engineer at Bit9. In the YC application he writes that he has programmed since age five and started startups at 14 (S1).' },
        { t: 'p', text: 'The YC application in April 2007 was for a single founder. Houston writes himself: "strictly speaking, I am the only founder so far" and "the odds for solo founders are bad, so I am looking for a second" (S1). Arash Ferdowsi dropped out of MIT and joined later. Forbes writes that the two of them sat in a tiny apartment in Cambridge and worked 15 hours a day for four months (S2).' },
        { t: 'ladder', title: 'Ladder of abstraction: where the idea came from', steps: [
            'Concrete: the flash drive stayed at home, the project is unavailable',
            'Pattern: any file you have to carry will sooner or later be in the wrong place',
            'Principle: a file should be everywhere you are, with no action on your part',
            'Application: a folder that syncs itself between computers',
        ] },
    ] },
    { id: 'p2', n: '2', title: 'Finding the pain', kicker: 'Not "the cloud", but "it just works"', xp: 20, blocks: [
        { t: 'p', text: 'In the YC application the idea is stated like this: Dropbox syncs files between computers, and it is "better than uploading or email because it is automatic, built into Windows and fits into your normal work". Files are stored on Amazon S3 (S1).' },
        { t: 'p', text: 'Houston compares the product to an approach of "taking the best of subversion, trac and rsync and making it work for an ordinary person". Hackers have access to such tools, everyone else does not (S1).' },
        { t: 'p', text: 'Notice the important thing. The idea is not about storage, it is about the absence of actions. In 2006 people already knew how to send files by email. The product removed a step.' },
        { t: 'warn', title: 'What we do not know', text: 'How many people Houston surveyed before the application, the sources we read do not say. We do not invent a number. According to Forbes, Google Docs came out in October 2006, two years before Dropbox (S2). There were many competitors by 2007, and the application names Sharpcast directly (S1).' },
    ] },
    { id: 'p3', n: '3', title: 'MVP and the first people', kicker: 'A demo video instead of a working product', xp: 25, blocks: [
        { t: 'p', text: 'The application has no link to a working service. It has a screencast and a Windows installer. Houston writes: "here is the screencast I will also post on news.yc, and if you have Windows, here is the latest build" (S1).' },
        { t: 'p', text: 'The application and the Hacker News post are dated April 2007. In the discussion Houston posted his YC app (HN id 8863, April 4, 2007). Readers saw the same video as YC.' },
        { t: 'ladder', title: 'Ladder of the first people', steps: [
            'First: Houston himself and hacker friends (S1)',
            'Then: the demo video at YC and on Hacker News (S1)',
            'Private beta in March 2008 per TechCrunch (S4)',
            '4 million users by mid-2010 per Forbes (S2)',
            'Numbers for the first 100, 1,000 and 10,000: not found in open sources',
        ] },
        { t: 'gap', text: 'It is often written that the waiting list grew from 5,000 to 75,000 after a video on Digg. I did not find this in the primary documents I read, so we do not give the figure.' },
    ] },
    { id: 'p4', n: '4', title: 'Money, pitch and valuation', kicker: 'From $15,000 to a $9 billion IPO', xp: 25, blocks: [
        { t: 'p', text: 'According to Forbes, in April 2007 YC gave Houston $15,000. In September 2007 he and Ferdowsi moved to San Francisco and within two weeks got a meeting with Sequoia (S2).' },
        { t: 'p', text: 'Houston tells Inc.: they wanted a few hundred thousand, and Sequoia seemed out of reach. A pitch on Friday, the next morning Michael Moritz came to their home, on Monday a dinner with Sameer Gandhi and a discussion of numbers. A few days later came a request for wire details. The balance grew from $60 to $1.2 million (S3).' },
        { t: 'fact', label: 'Sequoia round', value: '$1.2 million, September 2007 (S3, S4)', src: ['S3', 'S4'] },
        { t: 'p', text: 'The round became public only in September 2008: TechCrunch called it "small" and Sequoia\'s second known investment in a YC company after Loopt (S4). By mid-2010, per Forbes, the company had raised $7.2 million in total (S2).' },
        { t: 'card', icon: 'chart', title: 'Going public', label: 'PER DOCUMENTS', rows: [
            { k: 'March 22, 2018', v: '36 million shares at $21, ticker DBX (S9)' },
            { k: 'Range', v: 'first $18 to $20 a share (Reuters, S10)' },
            { k: 'Market value', v: 'about $9.18 billion at a price of $21 (S10)' },
            { k: 'March 23', v: 'trading opened at $29, +38% (S11)' },
        ] },
        { t: 'warn', title: 'A caveat about valuation', text: 'Market capitalization is calculated from the share price and the number of shares and does not prove by itself that the company is "worth" that much. Reuters calls it "about".' },
    ] },
    { id: 'p5', n: '5', title: 'PMF, monetization, ecosystem', kicker: 'Free, and one friend for two gigabytes', xp: 25, blocks: [
        { t: 'p', text: 'The model in 2010: free space, and you pay for more. Search advertising turned out to be too expensive, competitors with venture money raised the stakes, and the team focused on referrals (S5).' },
        { t: 'p', text: 'The key in the referral program is two-sided benefit. The friend gets more space than through an ordinary link, and so do you. McKenzie writes that the marginal cost of extra space is negligible while the value of a gained customer is large (S5).' },
        { t: 'fact', label: 'Referral effect (in Houston\'s words, retold)', value: '+60% sign-ups, 35% of daily sign-ups come from the program, in April 2010 2.8 million invitations in a month', src: ['S6'] },
        { t: 'warn', title: 'Source of the figure', text: 'The 60% and 35% figures come from a retelling of the talk, not from the talk itself. We did not open the original, so the S6 label says "Retelling".' },
        { t: 'p', text: 'By the IPO, average revenue per paying user was $111.91 (S8). The total number of paying users is not in the materials we read, so we do not give it.' },
        { t: 'card', icon: 'layers', title: 'The cloud under the hood', label: 'INFRASTRUCTURE', rows: [
            { k: 'Start', v: 'storage on Amazon S3 (S1)' },
            { k: 'Decision', v: 'Sequoia writes that they were among the first to reach scale on AWS (S13)' },
            { k: 'Later', v: 'the company left AWS for its own hardware, a risky step (S13)' },
        ] },
    ] },
    { id: 'p6', n: '6', title: 'First principles', kicker: 'What is left if you throw out the word "cloud"', xp: 25, blocks: [
        { t: 'p', text: 'Let us take it down to atoms. What is a file? A set of bytes in one place. What is "a file everywhere"? A copy of the bytes in several places that match. Everything else, including the cloud, the interface and the price plans, is a way to do this invisibly.' },
        { t: 'ladder', title: 'The path of reasoning, per the documents', steps: [
            'Atom: the bytes must match on every device (S1)',
            'Remove the user\'s step: no uploading, everything happens by itself (S1)',
            'Instead of describing, show: a video in 2007 (S1)',
            'Build growth on the product itself: the friend benefits, and so do you (S5)',
        ] },
        { t: 'card', icon: 'stone', title: 'Law of the environment (candidate for the carved laws)', label: 'FOR THE FINAL SECTION', rows: [
            { k: 'Wording', v: 'If the reward for an invitation lies inside the product itself, and costs you almost nothing, growth stops depending on an advertising budget' },
            { k: 'Support', v: 'Dropbox gave up expensive search advertising and grew on a two-sided referral program (S5, S6)' },
            { k: 'Caveat', v: 'This works when the product is needed by itself and the bonus can be given almost for free. For a physical good the mechanism is different' },
        ] },
    ] },
    { id: 'p7', n: '7', title: 'What transfers to you', kicker: 'Three exercises for this week', xp: 25, blocks: [
        { t: 'card', icon: 'rules', title: 'What to do', label: 'TRANSFER', rows: [
            { k: '1. Show, do not describe', v: 'Record a two-minute video of the product before it is ready, like Houston' },
            { k: '2. Find a step you can remove', v: 'Write out all the user\'s steps and cross out the one that exists only out of habit' },
            { k: '3. Invent a reward for a friend', v: 'What can you pay for an invitation that costs you almost nothing but is valuable to the person?' },
        ] },
        { t: 'card', icon: 'bulb', title: 'A question for yourself', label: 'THINK', rows: [
            { k: 'Question', v: 'Which step in my product does a person take not because it is needed, but because that is how it is done?' },
        ] },
    ] },
];

export const DROPBOX_EN: Chapter = {
    ...DROPBOX,
    title: 'Dropbox: how a forgotten flash drive became a folder everywhere',
    sub: 'From a video in the YC application to the 2018 IPO and a lesson about growth through friends.',
    eyebrow: 'CHAPTER 06',
    parts: PARTS,
    sources: DROPBOX.sources.map(s => ({ ...s, kind: KIND[s.kind] ?? s.kind, title: TITLE[s.id] ?? s.title })),
};
