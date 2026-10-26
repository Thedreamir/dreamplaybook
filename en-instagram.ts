import type { Chapter, Part } from './types';
import { INSTAGRAM } from './ch-instagram';
import { KIND } from './en-common';

const TITLE: Record<string, string> = {
    S1: 'TechCrunch (Kim-Mai Cutler): From 0 To 1 Billion In Two Years (Apr 9, 2012): Burbn, the pivot, launch on Oct 6, 2010, 25,000 on the first day',
    S2: 'TechCrunch: A Pivotal Pivot (Nov 8, 2010): Systrom\'s quotes from Quora, $500,000 before the pivot, 100,000 in a week',
    S3: 'Wired, Mike Krieger: Why Instagram Worked (Oct 20, 2014): about 1,000 Burbn users, the July 2010 decision, 100 testers, the first day',
    S4: 'TechCrunch: Instagram Filters Through Suitors To Capture $7 Million In Funding Led By Benchmark (Feb 2, 2011)',
    S5: 'Los Angeles Times: How Kevin Systrom built Instagram (Apr 10, 2012): $50 million round at a $500 million valuation, 13 employees, 200,000 in the first week',
    S6: 'Reuters: Facebook to buy Instagram for $1 billion (Apr 9, 2012)',
    S7: 'The Verge: Facebook Instagram acquisition costs $715 million (Oct 24, 2012), per the Form 10-Q',
    S8: 'Orrick: Instagram acquired by Facebook (Sep 7, 2012): $300 million in cash and about 23 million shares',
    S9: 'The Verge: Instagram launches ads with sponsored post from Michael Kors (Nov 1, 2013)',
    S10: 'TechCrunch: Instagram launches Stories (Aug 2, 2016)',
    S11: 'TechCrunch: Instagram hits 1 billion monthly users (Jun 20, 2018)',
    S12: 'Wired: Facebook buys Instagram (Apr 9, 2012): Zuckerberg quote on independence',
    S13: 'TechCrunch: Instagram Stories has 100 million daily active users after just 2 months (Oct 6, 2016)',
};

const PARTS: Part[] = [
    { id: 'p0', n: '0', title: 'Prologue: the app with everything removed', kicker: 'Why Instagram sits in the volume next to WhatsApp and TikTok', xp: 20, blocks: [
        { t: 'p', text: 'Instagram launched on October 6, 2010. 18 months later Facebook announced a purchase for $1 billion. The company had 13 people then (S5, S6). In June 2018 the app announced 1 billion monthly active users (S11).', src: ['S5', 'S6', 'S11'] },
        { t: 'fact', label: 'Employees at the time of the deal, April 2012', value: '13 per the LA Times', src: ['S5'] },
        { t: 'stickers', items: [{ big: '25K', small: 'in a day' }, { big: '13', small: 'people' }, { big: '$1B', small: 'the deal' }, { big: '2010', small: 'launch' }] },
        { t: 'p', text: 'The question of the chapter: what do you do if you have a finished product with a dozen features and people use one.' },
        { t: 'card', icon: 'target', title: 'How to read the chapter', label: 'HONESTY LABELS', rows: [
            { k: '[S1...S12]', v: 'Source. Tap the label to see where the fact comes from.' },
            { k: 'Not found', v: 'The data is not in open sources. The author does not invent it.' },
            { k: 'AI reconstruction', v: 'A scene or line invented for practice. These are not the words of real people.' },
            { k: 'Discrepancy', v: 'If sources disagree, we show both versions.' },
        ] },
    ] },
    { id: 'p1', n: '1', title: 'Genesis of the founders', kicker: 'Whiskey, Burbn and an engineer from Meebo', xp: 20, blocks: [
        { t: 'p', text: 'Kevin Systrom started with an app called Burbn: the name comes from his interest in whiskey and bourbon. According to TechCrunch, it had about four tabs: check in at a place, write your plans and so on. All in HTML5, which is slow (S1).', src: ['S1'] },
        { t: 'img', file: '/img/ig-systrom.jpg', alt: 'Kevin Systrom, 2013', caption: 'Kevin Systrom, 2013. Photo: TechCrunch, CC BY 2.0 license.', credit: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Kevin_Systrom_2013.jpg' },
        { t: 'p', text: 'Mike Krieger came after about a year and a half at Meebo. He tested the interface on high-school students whom he brought to the office (S1). One more detail: in 2004, still a Stanford student, he built a photo service, and Facebook offered him a job on photos. He declined (S5).', src: ['S1', 'S5'] },
        { t: 'img', file: '/img/ig-krieger.jpg', alt: 'Mike Krieger on stage', caption: 'Mike Krieger at a conference. Photo from Wikimedia Commons, CC BY 2.0 license.', credit: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Mike_Krieger_(8009759472).jpg' },
        { t: 'warn', title: 'What we do not know', text: 'We did not find the exact day Systrom and Krieger became partners. The sources differ in shades: TechCrunch writes that Krieger came "around the time" Burbn users began sharing photos (S1), while Krieger himself dates the decision to change the product to mid-July 2010 (S3).', src: ['S1', 'S3'] },
        { t: 'ladder', title: 'Ladder of abstraction: where the idea came from', steps: [
            'Concrete: Burbn, check-ins and plans (S1)',
            'Pattern: users checked in rarely but shared photos constantly (S1)',
            'Principle: watch what people do on their own, not what you invented (S1, S3)',
            'Application: take photos, comments and likes from Burbn and remove the rest (S2)',
        ] },
    ] },
    { id: 'p2', n: '2', title: 'Finding the pain', kicker: 'Users themselves showed where the pain was', xp: 20, blocks: [
        { t: 'p', text: 'Krieger writes: people liked Burbn, there were "a few enthusiastic" daily users, but the peak was about 1,000 users, and explaining what the product was drew "blank stares" (S3).', src: ['S3'] },
        { t: 'p', text: 'At the same time the best updates came from friends who posted photos to Burbn after processing them in early filter apps: that is how they made up for the weak cameras of the iPhone 3G (S3). TechCrunch adds: Burbn was used to share photos of lattes, dogs and beer (S1).', src: ['S1', 'S3'] },
        { t: 'img', file: '/img/ig-news-pivot.jpg', alt: 'TechCrunch headline A Pivotal Pivot', caption: 'How the change of product was written about in autumn 2010: TechCrunch, November 8, 2010. Screenshot of the headline.', credit: 'TechCrunch', url: 'https://techcrunch.com/2010/11/08/instagram-a-pivotal-pivot/' },
        { t: 'p', text: 'Systrom saw a gap between Hipstamatic, which has many filters but little social interaction, and Facebook, which has interaction but where photos are not the main thing. Instagram sat between them (S1). He explained it himself: he wanted to be very good at one thing, and mobile photos looked like a good opportunity (S2).', src: ['S1', 'S2'] },
        { t: 'warn', title: 'What we do not know', text: 'There is no systematic user survey before the product change in the sources. The basis of the decision: observing what people do inside Burbn, and conversations in the beta group.' },
    ] },
    { id: 'p3', n: '3', title: 'MVP and the first people', kicker: 'Eight weeks, three taps and 100 testers', xp: 25, blocks: [
        { t: 'p', text: 'Krieger dates the decision to change the product to mid-July 2010, after a meeting with an investor: the product needed narrowing, or it would fall apart trying to be everything (S3). Then a week in a cafe with sketches: photos large and centered, comments right in the feed, even though this made scrolling harder (S3).', src: ['S3'] },
        { t: 'p', text: 'Two weeks later there was a first version with Systrom\'s first filters. They sent it to 100 Burbn testers (S3). A photo could be posted in three taps, tags for people and places were optional, and the feed was public by default, like Twitter (S1).', src: ['S1', 'S3'] },
        { t: 'img', file: '/img/ig-sketch.jpg', alt: 'An early Instagram interface sketch', caption: 'An early sketch of the Instagram interface by Mike Krieger, 2010.', credit: 'Wired, Mike Krieger', url: 'https://www.wired.com/2014/10/why-instagram-worked/' },
        { t: 'img', file: '/img/ig-first.jpg', alt: 'The first photos on Instagram', caption: 'The first photos taken in Instagram by Mike Krieger, 2010.', credit: 'Wired, Mike Krieger', url: 'https://www.wired.com/2014/10/why-instagram-worked/' },
        { t: 'ladder', title: 'Ladder of the first people', steps: [
            'Burbn: a peak of about 1,000 users (S3)',
            'July 2010: 100 testers received the first version of Instagram (S3)',
            'First day, October 6, 2010: 25,000 sign-ups (S1, S3)',
            'First week: 100,000 per TechCrunch, 200,000 per the LA Times, see the discrepancy (S2, S5)',
            'In less than three months: 1 million (S1, S4)',
        ] },
        { t: 'warn', title: 'Discrepancy: how many in the first week', text: 'TechCrunch in November 2010: "a week after launch, 100,000; a week later 200,000" (S2). The LA Times in 2012: "200,000 in the first week" (S5). We do not know which version is more accurate and show both.', src: ['S2', 'S5'] },
        { t: 'chart', title: 'Instagram user growth (logarithmic scale)', bars: [{ label: 'Burbn, peak', value: 1000, text: '1K' }, { label: 'Day 1', value: 25000, text: '25K' }, { label: 'Week 1', value: 100000, text: '100K' }, { label: '3 months', value: 1000000, text: '1M' }, { label: 'Feb 2011', value: 1750000, text: '1.75M' }, { label: 'Apr 2012', value: 30000000, text: '30M+' }, { label: 'Jun 2018', value: 1000000000, text: '1B' }], note: 'First week: 100,000 per TechCrunch (the LA Times writes 200,000). April 2012: more than 30 million registered. June 2018: monthly active.', src: ['S3', 'S1', 'S2', 'S4', 'S5', 'S11'] },
        { t: 'p', text: 'Growth was organic: per TechCrunch, Instagram spent not a cent on acquiring users (S1). Users also came from outside the US: roughly half were abroad, with especially many in Japan (S4, S3).', src: ['S1', 'S3', 'S4'] },
        { t: 'fact', label: 'The server on day one', value: 'it did not hold the load; in Japan users created a night peak because of the time zone', src: ['S3'] },
        { t: 'video', title: 'Systrom and Krieger: From Stanford to Startup (54 min, May 11, 2011)', note: 'The founders\' lecture at Stanford seven months after launch. It opens on the Stanford site; we do not host the video.', url: 'https://stvp.stanford.edu/av/stanford-startup-entire-talk' },
    ] },
    { id: 'p4', n: '4', title: 'Money, pitch and valuation', kicker: 'From $500,000 to $1 billion in two years', xp: 25, blocks: [
        { t: 'p', text: 'Even before the product change Systrom closed a $500,000 seed from Baseline Ventures and Andreessen Horowitz. The investors, he says, told him: define what company you want to build (S2).', src: ['S2'] },
        { t: 'p', text: 'In February 2011 Benchmark led a $7 million Series A; Baseline, Jack Dorsey, Chris Sacca and Adam D\'Angelo took part. Matt Cohler joined the board. Systrom did not name a valuation; TechCrunch believes it was above $20 million (S4). By then the app had 1.75 million users and 290,000 photos a day (S4).', src: ['S4'] },
        { t: 'img', file: '/img/ig-news-series-a.jpg', alt: 'TechCrunch headline about the Benchmark round', caption: 'News of the Series A, TechCrunch, February 2, 2011. Screenshot of the headline.', credit: 'TechCrunch', url: 'https://techcrunch.com/2011/02/02/instagram-funding/' },
        { t: 'p', text: 'In April 2012, per the LA Times, Instagram closed a $50 million round at a $500 million valuation. On Monday Facebook bought it for $1 billion (S5). Reuters names the round\'s investors as Sequoia and Greylock, citing a source (S6).', src: ['S5', 'S6'] },
        { t: 'warn', title: 'Discrepancy: how much the deal cost', text: 'In the announcement: about $1 billion in cash and shares (S6). After the fall of Facebook\'s stock, the Form 10-Q valued the deal at $715 million (S7). $300 million in cash and about 23 million shares (S8). This is one and the same agreement, valued on different days.', src: ['S6', 'S7', 'S8'] },
        { t: 'card', icon: 'chart', title: 'Valuation per documents', label: 'FROM $500,000 TO $1 BILLION', rows: [
            { k: 'Seed', v: '$500,000, Baseline and a16z (S2)' },
            { k: 'February 2011', v: '$7 million, valuation above $20 million per TechCrunch (S4)' },
            { k: 'April 2012', v: '$50 million at a $500 million valuation (S5)' },
            { k: 'The deal', v: '$1 billion at announcement, $715 million per the 10-Q (S6, S7)' },
        ] },
        { t: 'p', text: 'Systrom, per the LA Times, turned down Facebook\'s first offer. After the Series A he banned meetings with people outside the company, except press and hiring engineers, so as not to get distracted (S5).', src: ['S5'] },
    ] },
    { id: 'p5', n: '5', title: 'PMF, monetization, ecosystem', kicker: 'The network first, money later', xp: 25, blocks: [
        { t: 'p', text: 'When announcing the deal Zuckerberg wrote that Facebook "intends to develop Instagram independently" (S12). The app, per the LA Times, had no revenue at the time of purchase and had more than 30 million registered users (S5).', src: ['S5', 'S12'] },
        { t: 'p', text: 'Advertising appeared on November 1, 2013: the first ad was shown by Michael Kors and appeared in all users\' feeds (S9). Stories launched on August 2, 2016, when Snapchat had 150 million daily users (S10). By October 2016 Stories had 100 million daily viewers (S13).', src: ['S9', 'S10', 'S13'] },
        { t: 'p', text: 'In June 2018 Instagram announced 1 billion monthly actives; it was 800 million in September 2017 (S11).', src: ['S11'] },
        { t: 'gap', text: 'Instagram\'s revenue by year inside Meta is not separated in the open sources we read. We do not give it.' },
    ] },
    { id: 'p6', n: '6', title: 'First principles', kicker: 'What is left if you cross out the features', xp: 25, blocks: [
        { t: 'p', text: 'Let us take it down to atoms. What does Instagram do? It takes a photo from the phone, makes it beautiful and shows it to friends. Everything else, places, plans, points, Systrom and Krieger crossed out (S2).' },
        { t: 'ladder', title: 'The path of reasoning, per the documents', steps: [
            'Atom: a shot, a filter, a feed (S2)',
            'Unnecessary: place check-ins, plans, points (S2)',
            'Friction: three taps and public by default (S1)',
            'Growth: organic, 25,000 in the first day (S1)',
        ] },
        { t: 'card', icon: 'stone', title: 'Law of the environment (candidate for the carved laws)', label: 'FOR THE FINAL SECTION', rows: [
            { k: 'Wording', v: 'When a new device gives a new capability, the winner is the product that does one action and removes everything extra' },
            { k: 'Support', v: 'The iPhone 4 camera became good enough to push out ordinary cameras, and the iOS base was large enough for a network effect (S1)' },
            { k: 'Caveat', v: 'This is how TechCrunch writes it, after the success. Among competitors the sources name PicPlz; it did not become as big (author\'s estimate, not data)' },
        ] },
    ] },
    { id: 'p7', n: '7', title: 'What transfers to you', kicker: 'Three exercises for this week', xp: 25, blocks: [
        { t: 'card', icon: 'rules', title: 'What to do', label: 'TRANSFER', rows: [
            { k: '1. Find what they do without your hint', v: 'Which one feature of your product do people use most?' },
            { k: '2. Cross out the rest', v: 'What happens if you keep only it for two months?' },
            { k: '3. Remove friction', v: 'How many taps to the first result? Can you cut it in half?' },
        ] },
        { t: 'card', icon: 'bulb', title: 'A question for yourself', label: 'THINK', rows: [
            { k: 'Question', v: 'Which part of my product do I defend only because a year went into it?' },
        ] },
    ] },
];

export const INSTAGRAM_EN: Chapter = {
    ...INSTAGRAM,
    title: 'Instagram: how a dozen features became one',
    sub: 'Burbn, the pivot to photos, 25,000 on day one and a $1 billion deal that became $715 million.',
    eyebrow: 'CHAPTER 13',
    parts: PARTS,
    sources: INSTAGRAM.sources.map(s => ({ ...s, kind: KIND[s.kind] ?? s.kind, title: TITLE[s.id] ?? s.title })),
};
