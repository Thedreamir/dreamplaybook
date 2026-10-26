import type { Chapter, Part } from './types';
import { UBER } from './ch-uber';
import { KIND } from './en-common';

const TITLE: Record<string, string> = {
    S1: 'Uber Technologies, Inc. Form S-1 (April 2019): CEO letter, 2018 metrics, trip milestones',
    S2: 'Travis Kalanick, "Uber\'s Founding" (Dec 22, 2010), Uber blog',
    S3: 'Ryan Graves, "It\'s out, we\'re funded" (Oct 15, 2010): the $1.25 million round',
    S4: 'TechCrunch: Hitching a ride with UberCab (Oct 15, 2010): 45 drivers, a 7-8 minute wait',
    S5: 'Forbes: Uber IPO, Inside the 2008 pitch that birthed an $80 billion startup (May 10, 2019)',
    S6: 'The Guardian: excerpt from Brad Stone\'s book on Uber (Jan 29, 2017): UberCab.com domain registered in August 2008',
    S7: 'Garrett Camp, "Uber\'s path forward" (Jun 20, 2017), Medium',
    S8: 'Reuters: Uber valued at $82 billion in IPO (May 10, 2019)',
    S9: 'The New York Times: Uber\'s stock disappoints, capping a rocky path to its IPO (May 10, 2019)',
    S10: 'Uber: results for Q4 and full year 2025 (Feb 4, 2026)',
    S11: 'Uber Technologies, Inc. 424B4 prospectus (May 2019): 180 million shares offered by the company',
};

const PARTS: Part[] = [
    { id: 'p0', n: '0', title: 'Prologue: a button instead of a search', kicker: 'Why Uber sits in the volume next to Airbnb', xp: 20, blocks: [
        { t: 'p', text: 'Uber began with an idea of how to stop standing on a San Francisco street trying to catch a car. By its 2025 results the company made 13.6 billion trips and handled $193.5 billion in gross bookings. In the fourth quarter 202 million people used it every month.', src: ['S10'] },
        { t: 'fact', label: 'Trips, 2025', value: '13,567 million (+20% from 11,273 million in 2024)', src: ['S10'] },
        { t: 'fact', label: 'Gross bookings, 2025', value: '$193,454 million (+19% from $162,773 million)', src: ['S10'] },
        { t: 'fact', label: 'Monthly active platform consumers, Q4 2025', value: '202 million (+18% for the year), more than 40 million trips a day', src: ['S10'] },
        { t: 'p', text: 'The question of the chapter: how do you launch a market that needs drivers and riders at the same time, and how do you not lose yourself on the way to growth? The chapter honestly shows what did not work for Uber too: losses, scandals and the founder\'s own admission.' },
        { t: 'card', icon: 'target', title: 'How to read the chapter', label: 'HONESTY LABELS', rows: [
            { k: '[S1...S11]', v: 'Source. Tap the label to see where the fact comes from.' },
            { k: 'Not found', v: 'The data is not in open sources. The author does not invent it.' },
            { k: 'AI reconstruction', v: 'A scene or line invented for practice. These are not the words of real people.' },
            { k: 'Discrepancy', v: 'If sources disagree, we show both versions.' },
        ] },
    ] },
    { id: 'p1', n: '1', title: 'Genesis of the founders', kicker: 'A Paris winter, a shared limousine and a disputed date', xp: 20, blocks: [
        { t: 'p', text: 'According to Travis Kalanick, in late 2008 he and Garrett Camp spent a week in Paris at the LeWeb conference. Camp had sold StumbleUpon to eBay, and Kalanick had sold Red Swoosh to Akamai in 2007. They talked until five in the morning about what to do next.', src: ['S2'] },
        { t: 'p', text: 'Camp\'s big idea was to solve the taxi problem in San Francisco. Kalanick writes that it began as a limousine split: he and Camp share the cost of a driver, a Mercedes S-Class and parking, and an iPhone app calls the car on demand. Kalanick himself calls this funny and adds that everything changed a lot.', src: ['S2'] },
        { t: 'p', text: 'From March 2009 Camp worked seriously on the app as a side project. In summer 2009 Kalanick joined as "Chief Incubator": he was to run the company temporarily, bring the product to a prototype and find a manager who would handle operations. Both thought the business would be "pretty low-tech, mostly operational".', src: ['S2'] },
        { t: 'warn', title: 'Discrepancy: when the idea was born', text: 'The story of "a night in Paris in winter 2008" comes from Kalanick. The excerpt of Brad Stone\'s book in The Guardian says Camp registered the domain UberCab.com in August 2008, before Paris. In 2017 Garrett Camp writes only that the app prototype was built in 2009. I did not find which version is more accurate. Perhaps Camp had the idea earlier and Paris was the place where the two of them discussed it.', src: ['S2', 'S6', 'S7'] },
        { t: 'ladder', title: 'Ladder of abstraction: where the idea came from', steps: [
            'Concrete: in San Francisco it is impossible to catch a car, especially at night and off-peak',
            'Pattern: the more expensive and inconvenient the choice, the more people are left without a ride',
            'Principle: a smartphone knows where you are, so a car can be called with one button',
            'Application: an app that connects a person and a car on demand',
        ] },
    ] },
    { id: 'p2', n: '2', title: 'Finding the pain', kicker: 'What exactly did not work in taxis', xp: 20, blocks: [
        { t: 'p', text: 'Kalanick names the pain directly: "getting stranded on the streets of San Francisco is familiar to any resident". In October 2010 TechCrunch writes that finding a taxi, especially at peak time, is irritating, and the limousine market in San Francisco is unreliable.', src: ['S2', 'S4'] },
        { t: 'card', icon: 'target', title: 'What was measured in 2010', label: 'PER TECHCRUNCH', rows: [
            { k: 'Average wait', v: '7-8 minutes' },
            { k: 'Price of a ride', v: 'The reporter\'s ride to the TechCrunch office with tip: $36, a little more than double the price of the first ride back (in traffic)' },
            { k: 'What the rider gets', v: 'Knowing the exact pickup time' },
        ], src: ['S4'] },
        { t: 'p', text: 'In the 2008 investor presentation, as Forbes retells it, they promised "reliable transportation like running water" and a membership model. Later the membership was dropped, and a car description and number were added so the rider knows the right person came.', src: ['S5'] },
        { t: 'gap', text: 'Not found: a study of the San Francisco taxi market in 2008-2009 that would show the size of the audience ready to pay more for reliability.' },
    ] },
    { id: 'p3', n: '3', title: 'MVP and the first people', kicker: '3 cars, 45 drivers, 1,000+ riders', xp: 25, blocks: [
        { t: 'p', text: 'In January 2010 Uber ran its first test in New York: three cars drove around SoHo, Chelsea and Union Square, and a few people used the system. The team was Camp, Kalanick and Oscar Salazar, Camp\'s friend from graduate school, who helped build the prototype.', src: ['S2'] },
        { t: 'p', text: 'Ryan Graves came in as general manager and started on March 1, 2010. He was found through a tweet: Kalanick was looking for someone with business development experience, and Graves simply replied with his email. The San Francisco launch took place on May 31, 2010.', src: ['S2', 'S4'] },
        { t: 'p', text: 'Kalanick writes that "thousands of active riders" in San Francisco began with him and Camp inviting friends, while Graves went around startup demos.', src: ['S2'] },
        { t: 'ladder', title: 'Ladder of the first people', steps: [
            'First users: a few people in the New York test, January 2010, 3 cars (I did not find the exact number)',
            'Up to 1,000: "thousands of active riders" in San Francisco by the end of 2010 in Kalanick\'s words (I did not find the exact number)',
            'October 2010: 45 drivers in San Francisco, a headquarters of five people',
            '1 billion trips: March 2016, five years after launch (per the S-1)',
        ] },
        { t: 'card', icon: 'chart', title: 'Speed of growth per the S-1', label: 'PRIMARY DATA', rows: [
            { k: '1 billion trips', v: 'March 2016' },
            { k: '2 billion', v: 'October 2016, seven months later' },
            { k: '5 billion', v: 'September 2017, 11 months later' },
            { k: '10 billion', v: 'September 2018, 12 months later' },
            { k: 'Full year 2018', v: '91 million monthly active consumers, 14 million trips a day, 700+ cities, $78 billion paid to drivers' },
        ], src: ['S1'] },
        { t: 'warn', title: 'What cannot be called an MVP by the book', text: 'The test with three cars in New York was a check that it worked, and the San Francisco launch was already a real service. UberCab dropped "Cab" from the name in 2010, around the time it received its first cease-and-desist letter from the city of San Francisco (per Forbes).', src: ['S5'] },
    ] },
    { id: 'p4', n: '4', title: 'Money and valuation', kicker: 'From $1.25 million to $8.1 billion', xp: 25, blocks: [
        { t: 'p', text: 'In the 2008 presentation the founders, per Forbes, saw the best case as $1 billion in revenue, and a "more realistic" one as entering 5% of large US cities and $20 million in profit. The promise to be "profitable by design" looked strange years later: in 2018 operating losses were about $3 billion.', src: ['S5'] },
        { t: 'fact', label: 'October 2010 round', value: '$1.25 million: First Round Capital, Lowercase Capital and several angels', src: ['S3', 'S4'] },
        { t: 'fact', label: 'Scale before the IPO, 2018', value: 'About $11 billion in revenue and about $3 billion in operating losses', src: ['S5'] },
        { t: 'gap', text: 'Not found in primary sources: amounts and valuations of the 2011-2018 rounds. They are known from the press, but I did not take figures without a document.' },
        { t: 'fact', label: 'IPO, May 9-10, 2019', value: '180 million shares from the company, price $45, $8.1 billion raised', src: ['S11', 'S8', 'S9'] },
        { t: 'fact', label: 'Valuation at pricing', value: '$82.4 billion per Reuters, the low end of the target range', src: ['S8'] },
        { t: 'fact', label: 'First trading day', value: 'Close at $41.57, down 7.6%. Market value with options $76.5 billion, almost the same as private investors paid in August 2018 ($76 billion)', src: ['S9'] },
        { t: 'warn', title: 'Discrepancy: what the company was worth', text: 'Reuters: $82.4 billion at pricing at $45. The New York Times: $76.5 billion at the first-day close, with options and restricted shares. These are different moments and different ways of counting. The NYT also writes that a year earlier bankers had talked about a valuation of up to $120 billion.', src: ['S8', 'S9'] },
    ] },
    { id: 'p5', n: '5', title: 'PMF, money and ecosystem', kicker: 'From one button to a platform', xp: 30, blocks: [
        { t: 'p', text: 'In the S-1 the company calls itself a platform: a network of tens of millions of drivers, consumers, restaurants and shippers. It launches new products using the shared network, technology, operations and experience. For example, Uber Eats launched a little over three years before the S-1.', src: ['S1'] },
        { t: 'p', text: 'By 2025, in the words of the chief financial officer, the platform has $193 billion in gross bookings and $10 billion in free cash flow. The company grew 20%+ for five years in a row (per the successor in the CFO role).', src: ['S10'] },
        { t: 'card', icon: 'layers', title: 'The 2025 numbers', label: 'PER COMPANY RESULTS', rows: [
            { k: 'Operating income (GAAP)', v: '$5,565 million, almost double the $2,799 million in 2024' },
            { k: 'Net income', v: '$10,053 million ($9,856 million in 2024). Both years contain large one-off items: a $6.4 billion tax effect in 2024 and a revaluation of investments in 2025' },
            { k: 'Adjusted EBITDA', v: '$8,730 million (+35%)' },
        ], src: ['S10'] },
        { t: 'p', text: 'This growth had a price. In 2017 Garrett Camp wrote that the company, "in the chase for growth, let parts of our culture go", that they did not build the systems needed to scale, and "did not listen enough to those who brought us here: our team and especially our drivers".', src: ['S7'] },
        { t: 'warn', title: 'What cannot be claimed', text: 'The sources do not show how much of the growth came from convenience and how much from aggressive expansion and subsidies. The sources I used have no subsidy figures.' },
    ] },
    { id: 'p6', n: '6', title: 'First principles', kicker: 'Taking decisions apart to the foundation', xp: 30, blocks: [
        { t: 'p', text: 'The decision: build an app that calls a car. What must actually be true for such a service to work? We break it into parts.' },
        { t: 'card', icon: 'rules', title: 'First principles: a two-sided market', label: 'AUTHOR\'S ANALYSIS (HYPOTHESIS)', rows: [
            { k: 'Observation 1', v: 'The rider does not need a car, the rider needs predictability: "in 7-8 minutes it will be here"' },
            { k: 'Observation 2', v: 'Without drivers the rider has nothing to call, without riders the driver has nothing to wait for. Each side needs the other' },
            { k: 'Observation 3', v: 'The founders did not go to a hundred cities. They tested the idea on three cars, then opened one city and grew there' },
            { k: 'Conclusion', v: 'Launching a two-sided market starts from one dense point. This is the author\'s hypothesis, not a law' },
        ], src: ['S2', 'S4'] },
        { t: 'card', icon: 'stone', title: 'Law of the environment (candidate for the carved laws)', label: 'FOR THE FINAL SECTION', rows: [
            { k: 'Wording', v: 'A network that gets smarter with every trip turns one product into a platform for new products' },
            { k: 'Support', v: 'The S-1 describes it exactly this way: each new product adds nodes to the network and strengthens shared capabilities (S1). Uber Eats launched as the next product on the same network' },
            { k: 'Caveat', v: 'This is the company\'s self-description in the prospectus. The losses on the way to it are visible in the 2018 numbers' },
        ] },
        { t: 'warn', title: 'The price of growth without a system', text: 'Camp himself writes that the focus on growth led to problems, and that the company had to change leadership and update its values. Growth without culture and without care for drivers turned out to be fragile.', src: ['S7'] },
    ] },
    { id: 'p7', n: '7', title: 'What transfers to you', kicker: 'Rules you can take into any product', xp: 25, blocks: [
        { t: 'card', icon: 'bulb', title: 'Five rules from this case', label: 'TRANSFERABLE', rows: [
            { k: '1. Start with an inconvenience you know yourself', v: 'Camp knew the pain himself: stuck on the street without a car' },
            { k: '2. Measure the promise', v: 'An average wait of 7-8 minutes was a measurable promise, not a slogan' },
            { k: '3. Test small', v: 'Three cars in New York before launching a city' },
            { k: '4. Hire an operator', v: 'Kalanick himself looked for a general manager: the idea and the operations do not have to be in the same hands' },
            { k: '5. Growth without a system breaks', v: 'Camp himself admitted that drivers and the team were not listened to enough' },
        ] },
        { t: 'warn', title: 'Where these rules will not work', text: 'Uber grew in an era of cheap capital and with big losses (about $3 billion operating in 2018 per Forbes). Not every startup can grow that way.', src: ['S5'] },
        { t: 'gap', text: 'Not found: data on rider and driver churn in the early years, the exact number of riders in the first months, the amounts of the 2011-2018 rounds.' },
    ] },
];

export const UBER_EN: Chapter = {
    ...UBER,
    title: 'Uber: how a button on a phone turned into a network',
    sub: 'From a shared limousine to 13.6 billion trips a year, and the price that had to be paid for growth.',
    eyebrow: 'CHAPTER 04',
    parts: PARTS,
    sources: UBER.sources.map(s => ({ ...s, kind: KIND[s.kind] ?? s.kind, title: TITLE[s.id] ?? s.title })),
};
