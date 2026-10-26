import type { Chapter, Part } from './types';
import { TIKTOK } from './ch-tiktok';
import { KIND } from './en-common';

const TITLE: Record<string, string> = {
    S1: 'The Guardian: Musical.ly, the craze turning pop fans into stars (Sep 4, 2016): Cicada, $250,000, $20,000 in the bank, 95 million users',
    S2: 'Forbes: From Musers To Money (May 11, 2017): an educational social network, Lip Sync Battle, a round of about $100 million at a valuation of about $500 million, gifts since December 2016',
    S3: 'Class Central on the Acquired podcast: Alex Zhu at SAP since June 2012, education and MOOCs, short videos',
    S4: 'Reuters: ByteDance buying Musical.ly for up to $1 billion (Nov 10, 2017)',
    S5: 'New York Times DealBook: Musical.ly sold to Bytedance for $800 million to $1 billion (Nov 10, 2017): 120 million Toutiao users and about 60 million Musical.ly users in the US and Europe',
    S6: 'TechCrunch: Musical.ly is merging into sister app TikTok (Aug 2, 2018)',
    S7: 'ByteDance: company history: founded in 2012, Toutiao in August 2012, Douyin in September 2016',
    S8: 'Reuters: Timeline: ByteDance founder who put TikTok on global map to quit as CEO (2021)',
    S9: 'TikTok Newsroom: Thanks a billion! (Sep 27, 2021): more than 1 billion a month',
    S10: 'FTC: Musical.ly (now TikTok) to pay $5.7 million in a children\'s data case (Feb 27, 2019)',
    S11: 'Reuters: ByteDance, 2021 revenue about $58 billion (+70%), 2020 $34.3 billion (per sources)',
    S12: 'Reuters: China\'s Bytedance scrubs Musical.ly brand in favor of TikTok (2018): bought for almost $1 billion, TikTok launched in 2016 per the article',
    S13: 'Caixin: Upstart ByteDance takes on China\'s internet goliaths (Nov 11, 2018): round at a $75 billion valuation',
};

const PARTS: Part[] = [
    { id: 'p0', n: '0', title: 'Prologue: a lesson app that became a feed for everyone', kicker: 'Why TikTok sits in the volume next to Instagram and Discord', xp: 20, blocks: [
        { t: 'p', text: 'TikTok announced in September 2021 that more than 1 billion people use it every month (S9). It began as the educational app Cicada, which had about $20,000 left in the bank (S1).', src: ['S1', 'S9'] },
        { t: 'fact', label: 'Monthly users, September 2021', value: 'more than 1 billion, per TikTok\'s statement', src: ['S9'] },
        { t: 'p', text: 'The question of the chapter: what do you do if the product is not growing and people use it not the way you imagined.' },
        { t: 'card', icon: 'target', title: 'How to read the chapter', label: 'HONESTY LABELS', rows: [
            { k: '[S1...S12]', v: 'Source. Tap the label to see where the fact comes from.' },
            { k: 'Not found', v: 'The data is not in open sources. The author does not invent it.' },
            { k: 'AI reconstruction', v: 'A scene or line invented for practice. These are not the words of real people.' },
            { k: 'Discrepancy', v: 'If sources disagree, we show both versions.' },
        ] },
    ] },
    { id: 'p1', n: '1', title: 'Genesis of the founders', kicker: 'Two apps, two teams, one market', xp: 20, blocks: [
        { t: 'p', text: 'TikTok has two roots. The first: Chinese entrepreneurs Alex Zhu and Luyu Yang. Forbes writes that they started with an educational social network and quickly understood that teaching videos did not draw interest (S2). According to Class Central citing the Acquired podcast, Zhu worked from June 2012 at SAP as a "futurist" on education, when MOOCs began to be written about because of low course completion rates (S3).', src: ['S2', 'S3'] },
        { t: 'p', text: 'The second root: ByteDance. It was founded in 2012 by Zhang Yiming and Liang Rubo. Toutiao launched in August 2012, Douyin in September 2016 (S7).', src: ['S7'] },
        { t: 'video', title: 'Acquired: TikTok (podcast, December 9, 2019)', note: 'A detailed account of the history of Musical.ly and ByteDance. It opens on the podcast site.', url: 'https://www.acquired.fm/episodes/tiktok' },
        { t: 'warn', title: 'Discrepancy: when TikTok launched', text: 'Reuters in a 2021 timeline writes: Douyin 2016, TikTok 2017 (S8). Reuters in a 2018 article writes: TikTok launched in 2016 (S12). Most likely the Chinese version Douyin launched in 2016 and international TikTok came out in 2017. This is our explanation, not a quote.', src: ['S8', 'S12'] },
        { t: 'ladder', title: 'Ladder of abstraction: where the idea came from', steps: [
            'Concrete: short teaching videos on different topics (S1)',
            'Pattern: people are drawn not by the lesson but by music and socializing (S2)',
            'Principle: look at why people actually open the app (S2)',
            'Application: 15-second clips set to music (S12)',
        ] },
    ] },
    { id: 'p2', n: '2', title: 'Finding the pain', kicker: 'A pivot from the last $20,000', xp: 20, blocks: [
        { t: 'p', text: 'The Guardian writes: Musical.ly grew out of the failure of Cicada, an educational app with short videos. According to the story, when $20,000 was left in the bank, the founders made a last pivot to justify $250,000 of venture investment (S1).', src: ['S1'] },
        { t: 'p', text: 'Forbes quotes Zhu: on Thursdays there was a spike in downloads. Spike TV aired "Lip Sync Battle" on Thursdays, and after the show people searched the App Store for "lip sync" and found the app (S2).', src: ['S2'] },
        { t: 'warn', title: 'What we do not know', text: 'The $20,000 story in the Guardian is presented as a "story" ("the story goes"), not as a document. We could not confirm the numbers from primary sources.', src: ['S1'] },
    ] },
    { id: 'p3', n: '3', title: 'MVP and the first people', kicker: 'Teenagers, Vine and keyword hunting', xp: 25, blocks: [
        { t: 'p', text: 'The app came out in 2014. By September 2016 Musical.ly, per the Guardian, had about 95 million users (S1). By May 2017, per Forbes citing the company, more than 200 million registered, mostly aged 13-21 (S2).', src: ['S1', 'S2'] },
        { t: 'p', text: 'Forbes also ties the growth to the shutdown of Vine: the company announced the closure in October 2016, and the audience went to neighboring apps (S2).', src: ['S2'] },
        { t: 'ladder', title: 'Ladder of the first people', steps: [
            '2014: the app comes out, the educational format does not take off (S1, S2)',
            '2015-2016: Thursday spikes after Lip Sync Battle (S2)',
            'September 2016: about 95 million users (S1)',
            'May 2017: more than 200 million registered (S2)',
            'Numbers for the first 100, 1,000 and 10,000 users: not found in open sources',
        ] },
        { t: 'gap', text: 'I did not find data on the first 100, 1,000 and 10,000 users. We do not invent it.' },
        { t: 'chart', title: 'Musical.ly and TikTok: users (logarithmic scale)', bars: [{ label: 'Sep 2016', value: 95000000, text: '95M' }, { label: 'May 2017', value: 200000000, text: '200M+' }, { label: 'Sep 2021', value: 1000000000, text: '1B+' }], note: 'Different metrics: 95 million users (Guardian), more than 200 million registered (Forbes), 1 billion monthly actives (TikTok).', src: ['S1', 'S2', 'S9'] },
    ] },
    { id: 'p4', n: '4', title: 'Money, pitch and valuation', kicker: 'From $250,000 to a deal of almost a billion', xp: 25, blocks: [
        { t: 'p', text: 'Forbes, citing sources: in 2016 Musical.ly closed a round of about $100 million led by GGV Capital at a valuation of about $500 million, with more than $116 million raised in total (Forbes estimate). The company declined to comment (S2).', src: ['S2'] },
        { t: 'p', text: 'In November 2017 ByteDance bought Musical.ly. Reuters says "up to $1 billion" (S4), the NYT says $800 million to $1 billion citing a source (S5), and in 2018 Reuters writes "almost $1 billion" (S12). The exact price is not named in open sources.', src: ['S4', 'S5', 'S12'] },
        { t: 'warn', title: 'Discrepancy: the deal price', text: 'Three wordings: up to $1 billion (Reuters, 2017), $800 million to $1 billion (NYT) and almost $1 billion (Reuters, 2018). All cite sources, not a document. We show the range.', src: ['S4', 'S5', 'S12'] },
        { t: 'card', icon: 'chart', title: 'Money per sources', label: 'FROM $250,000 TO $1 BILLION', rows: [
            { k: 'Cicada', v: '$250,000 venture, $20,000 in the bank (S1)' },
            { k: '2016', v: 'about $100 million at a valuation of about $500 million, Forbes citing sources (S2)' },
            { k: 'November 2017', v: 'deal of $800 million to $1 billion (S4, S5)' },
            { k: 'October 2018', v: 'ByteDance valued at $75 billion, per Caixin (S13)' },
        ] },
    ] },
    { id: 'p5', n: '5', title: 'PMF, monetization, ecosystem', kicker: 'The merger of two apps and $58 billion in revenue', xp: 25, blocks: [
        { t: 'p', text: 'The NYT writes: the deal joins 120 million Toutiao users in China and about 60 million Musical.ly users in the US and Europe (S5). On August 2, 2018 Musical.ly merged into TikTok together with accounts and data (S6).', src: ['S5', 'S6'] },
        { t: 'img', file: '/img/tt-news-merge.jpg', alt: 'TechCrunch headline about the merger of Musical.ly and TikTok', caption: 'The merger of the apps, TechCrunch, August 2, 2018. Screenshot of the headline.', credit: 'TechCrunch', url: 'https://techcrunch.com/2018/08/02/musically-tiktok/' },
        { t: 'p', text: 'Money: since December 2016 Musical.ly let people pay creators right in the app through virtual gifts (S2). ByteDance revenue per Reuters: about $58 billion in 2021 (growth 70%) and $34.3 billion in 2020 (S11). This is data for the whole company, not for TikTok alone.', src: ['S2', 'S11'] },
        { t: 'p', text: 'On February 27, 2019 the FTC announced: Musical.ly (now TikTok) will pay $5.7 million for collecting data of children under 13 without parental consent (S10). On September 27, 2021 TikTok announced 1 billion people a month (S9).', src: ['S9', 'S10'] },
        { t: 'img', file: '/img/tt-news-ftc.jpg', alt: 'FTC press release about Musical.ly', caption: 'FTC press release of February 27, 2019. Screenshot of the headline.', credit: 'FTC', url: 'https://www.ftc.gov/news-events/news/press-releases/2019/02/video-social-networking-app-musically-agrees-settle-ftc-allegations-it-violated-childrens-privacy' },
        { t: 'gap', text: 'Not found: TikTok revenue separate from ByteDance and a country breakdown in open sources. We do not give them.' },
    ] },
    { id: 'p6', n: '6', title: 'First principles', kicker: 'What is left if you remove music and teenagers', xp: 25, blocks: [
        { t: 'p', text: 'Let us take it down to atoms. What does TikTok give? A short clip that can be shot in a minute without skills. The rest, music, effects, gifts, was added around it. Cicada bet on learning, people chose entertainment.' },
        { t: 'ladder', title: 'The path of reasoning, per the documents', steps: [
            'Atom: a short video that is easy to shoot (S2)',
            'Unnecessary: the lesson format (S1, S2)',
            'Demand: the search for "lip sync" after a TV show (S2)',
            'Money: gifts to creators, then the ByteDance business (S2, S11)',
        ] },
        { t: 'card', icon: 'stone', title: 'Law of the environment (candidate for the carved laws)', label: 'FOR THE FINAL SECTION', rows: [
            { k: 'Wording', v: 'If a product is not growing, look at why people actually open it, and rebuild it for that before the money runs out' },
            { k: 'Support', v: 'Cicada became Musical.ly after the last pivot (S1), and growth came from an accidental search query (S2)' },
            { k: 'Caveat', v: 'This is a story about one company. Many pivots do not save a company, and we do not know the number of failures' },
        ] },
    ] },
    { id: 'p7', n: '7', title: 'What transfers to you', kicker: 'Three exercises for this week', xp: 25, blocks: [
        { t: 'card', icon: 'rules', title: 'What to do', label: 'TRANSFER', rows: [
            { k: '1. Find the real use', v: 'Why do people actually open your product? Ask five people and write it down verbatim.' },
            { k: '2. Find an external trigger', v: 'What outside, for example a show, news, a holiday, brings you people?' },
            { k: '3. Count your runway', v: 'How many months do you have until zero? A pivot is made while there is still money, not after.' },
        ] },
        { t: 'card', icon: 'bulb', title: 'A question for yourself', label: 'THINK', rows: [
            { k: 'Question', v: 'If I had to start the product from zero tomorrow, would I keep this feature?' },
        ] },
    ] },
];

export const TIKTOK_EN: Chapter = {
    ...TIKTOK,
    title: 'TikTok: how a lesson app became a feed for a billion',
    sub: 'Cicada, the last $20,000, Thursdays with Lip Sync Battle and a deal of almost a billion.',
    eyebrow: 'CHAPTER 14',
    parts: PARTS,
    sources: TIKTOK.sources.map(s => ({ ...s, kind: KIND[s.kind] ?? s.kind, title: TITLE[s.id] ?? s.title })),
};
