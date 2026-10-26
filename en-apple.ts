import type { Chapter, Part } from './types';
import { APPLE } from './ch-apple';
import { KIND } from './en-common';

const TITLE: Record<string, string> = {
    S1: 'Apple Computer, Inc. Prospectus, December 12, 1980 (4.6 million shares at $22): financials, product, use of proceeds',
    S2: 'Fast Company, oral history of the founding of Apple for its 50th anniversary (2026): Wozniak, Wayne, Terrell, Baum, McKenna, Bushnell',
    S3: 'Computer History Museum: early Apple business documents (preliminary investor memo, 1977)',
    S4: 'AppleMatters: January 3, 1977, Apple goes corporate (Commodore, Markkula, credit line)',
    S5: 'Sequoia Capital: Don Valentine tells the Apple story',
    S6: 'Computer History Museum, This Day in History: Apple IPO, December 12, 1980',
    S7: 'Apple Investor Relations FAQ: IPO date and price',
    S8: 'Apple, financial statements for Q4 and full fiscal year 2025 (as of Sep 27, 2025)',
    S9: 'heise online: The first Byte Shop opened 50 years ago (Dec 21, 2025)',
    S10: 'BBC: VisiCalc, the program that changed the Apple II (sales began Oct 17, 1979)',
    S11: 'Wikipedia, Apple I: price $666.66, about 200 built, all but 25 sold within 9-10 months (used only as a map)',
    S12: 'Fortune: how Steve Jobs raised money for the first Apple (selling the van)',
    S13: 'Apple Newsroom: the App Store ecosystem, $1.4 trillion in 2025 per an Analysis Group study (Jun 4, 2026)',
};

const PARTS: Part[] = [
    { id: 'p0', n: '0', title: 'Prologue: a garage, not a factory', kicker: 'Why Apple opens the volume', xp: 20, blocks: [
        { t: 'p', text: 'Apple started with a circuit board that one engineer built for himself, and with one person who understood that such a board could be sold. According to the fiscal 2025 report (as of September 27, 2025), the company\'s net sales were $416.2 billion and net income $112.0 billion.', src: ['S8'] },
        { t: 'fact', label: 'Net sales, fiscal 2025', value: '$416,161 million (2024: $391,035 million)', src: ['S8'] },
        { t: 'fact', label: 'Of which services', value: '$109,158 million, about 26% (author\'s calculation: 109,158 / 416,161)', src: ['S8'] },
        { t: 'p', text: 'The question of the chapter: how did a company that began with a board for a hobby club become an environment where others build their business? We go through five parts: genesis, pain, first people, money, growth and ecosystem. Then we take it all apart from first principles.' },
        { t: 'card', icon: 'target', title: 'How to read the chapter', label: 'HONESTY LABELS', rows: [
            { k: '[S1...S13]', v: 'Source. Tap the label to see where the fact comes from.' },
            { k: 'Not found', v: 'The data is not in open sources. The author does not invent it.' },
            { k: 'AI reconstruction', v: 'A scene or line invented for practice. These are not the words of real people.' },
            { k: 'Discrepancy', v: 'If sources disagree, we show both versions and say which deserves more trust.' },
        ] },
    ] },
    { id: 'p1', n: '1', title: 'Genesis of the founders', kicker: 'Two with different talents and a third whose share is disputed', xp: 20, blocks: [
        { t: 'p', text: 'In 1973 Steve Wozniak joined the calculator division of Hewlett-Packard as an engineer. In 1974 Steve Jobs worked as a video game technician at Atari. Wozniak himself says he never tried to start a business or an industry: he wanted other engineers to look at his circuits and say he had an unusual mind.', src: ['S2'] },
        { t: 'p', text: 'Jobs, on the contrary, had been dreaming up businesses for years. He suggested to his Atari colleague Ronald Wayne that they open an arcade machine business, and Wayne replied that it was the fastest way to lose $50,000.', src: ['S2'] },
        { t: 'fact', label: 'Founding', value: 'April 1, 1976: a partnership of Wozniak, Jobs and Wayne, named Apple Computer Company', src: ['S2'] },
        { t: 'fact', label: 'Shares under the partnership (per Wayne)', value: 'Jobs 45%, Wozniak 45%, Wayne 10% "as an arbiter" in disputes', src: ['S2'] },
        { t: 'warn', title: 'Discrepancy: what happened to Wayne\'s share', text: 'According to documents retold by Fast Company, 12 days later Wayne signed an amendment: he receives $800 for his 10%. Wayne himself denies this and says he never sold his share for any money. I did not find the signed document in the open, so the dispute cannot be settled.', src: ['S2'] },
        { t: 'ladder', title: 'Ladder of abstraction: where the idea came from', steps: [
            'Concrete: Wozniak built a small computer around a $30 processor and showed it at the club',
            'Pattern: other hobbyists wanted the same but could not build it',
            'Principle: talent makes the product, and the seller sees who needs it',
            'Application: Jobs proposed selling printed circuit boards instead of giving the schematic away',
        ] },
    ] },
    { id: 'p2', n: '2', title: 'Finding the pain', kicker: 'What the problem really was', xp: 20, blocks: [
        { t: 'p', text: 'By 1975 microcomputers had appeared. The Altair 8800 cost about $400 as a kit, and clubs and shops grew up around it. But all you could buy was a construction set that had to be soldered and debugged. The Homebrew club and its newsletter were the place where such hobbyists shared circuits.', src: ['S9'] },
        { t: 'p', text: 'Wozniak could not afford the expensive Intel 8080: the chip cost hundreds of dollars. When the MOS 6502 came out with similar properties, he bought it at an electronics parts store for less than $30.', src: ['S2'] },
        { t: 'p', text: 'Wozniak first wanted HP itself to build a personal computer. He showed them the price and demonstrations, and the company said no. By his account it was the first of five HP refusals.', src: ['S2'] },
        { t: 'card', icon: 'target', title: 'What the pain really was', label: 'ANALYSIS FROM THE FACTS ABOVE', rows: [
            { k: 'For whom', v: 'Electronics hobbyists in the club. They want a computer of their own, but expensive chips and building from scratch shut out almost everyone' },
            { k: 'What exactly got in the way', v: 'The price of the processor, plus having to make the board, the video output and the keyboard yourself' },
            { k: 'What Apple offered', v: 'A ready, assembled and tested board you could connect to a television' },
            { k: 'What is not in the sources', v: 'A customer survey or market-size data. It was not measured, and the author does not invent it' },
        ] },
        { t: 'gap', text: 'Not found: interviews with the first Apple I buyers where they name their reason for buying. We have the founders\' words, but not the customers\'.' },
    ] },
    { id: 'p3', n: '3', title: 'MVP and first people', kicker: '50 units for $25,000, not 100/1,000/10,000', xp: 25, blocks: [
        { t: 'p', text: 'To pay for the first boards, Jobs sold his Volkswagen van and Wozniak sold his HP-65 calculator. According to Fortune, together this gave about $1,300. Wozniak clarifies: he sold the calculator for $500 but received only half.', src: ['S12', 'S2'] },
        { t: 'p', text: 'Wozniak showed the prototype at the Homebrew club. Paul Terrell, owner of the Byte Shop in Mountain View, saw it and the next day ordered 50 units at $500 each: an order for $25,000, paid on delivery. On 30-day terms Apple could buy the parts, build the computers and pay up.', src: ['S2', 'S9'] },
        { t: 'p', text: 'Terrell expected a computer ready to use. He got an "IKEA kit": a board with parts, while the case, keyboard, power supply and monitor were added by the buyer. Wozniak admits they had no money, no resources and no business experience.', src: ['S2'] },
        { t: 'p', text: 'When Jobs brought the order to the distributor Cramer Electronics, they called Terrell to check whether the order was real. He confirmed it. The father of Allen Baum, a future employee, lent another $5,000 as a short-term loan, and it was repaid in about a month.', src: ['S2'] },
        { t: 'ladder', title: 'Ladder of first people', steps: [
            '1: a prototype at the club where the most interested people gather',
            '50: one shop order for $25,000, paid on delivery',
            'about 175 to 200: total Apple I units built, all but 25 sold within 9-10 months (per a reference work, as a map)',
            '1,000 and 10,000: not found, no such data for Apple I in the sources',
        ] },
        { t: 'fact', label: 'Apple I profit', value: 'about $8,000', src: ['S4'] },
        { t: 'fact', label: 'Apple II, sold as of October 31, 1980', value: 'about 131,000 computers (without peripherals)', src: ['S1'] },
        { t: 'warn', title: 'Why this cannot be called a "textbook MVP"', text: 'The Apple I was not a stripped-down product for a test. It was a real board with real parts, sold for money. The test was a single shop order whose payment immediately let them buy raw materials. This is the author\'s conclusion from the facts above.', src: ['S2'] },
    ] },
    { id: 'p4', n: '4', title: 'Money and valuation', kicker: 'From $1,300 to $101 million', xp: 25, blocks: [
        { t: 'p', text: 'The Apple II needed more money than they had. According to AppleMatters, before incorporation the founders tried to sell the partnership to Commodore for $100,000 and a promise of jobs. Commodore watched the demonstration and refused.', src: ['S4'] },
        { t: 'p', text: 'Nolan Bushnell says Jobs offered him a third of the company for $50,000. He refused, which he regrets, but he introduced Jobs to Don Valentine of Sequoia. Valentine himself recalls that many investors did not want to talk to Jobs because of his odd appearance.', src: ['S2', 'S5'] },
        { t: 'p', text: 'Valentine was not convinced and sent Jobs to Mike Markkula, a former Intel manager, a 33-year-old retiree. Markkula visited the garage, saw the Apple II prototype and went from adviser to partner.', src: ['S2'] },
        { t: 'warn', title: 'Discrepancy: how much Markkula put in', text: 'Computer History Museum: $250,000 for one third of the company. Fast Company: he put in $91,000 and guaranteed a $250,000 loan. AppleMatters: he put in $92,000 and received a $250,000 credit line at Bank of America. I did not find the signed agreement in the open, so the exact contribution and share cannot be named. The versions share one thing: the figure $250,000 appears, but in different roles.', src: ['S3', 'S2', 'S4'] },
        { t: 'fact', label: 'Incorporation', value: 'January 3, 1977, Markkula as chairman of the board', src: ['S2'] },
        { t: 'fact', label: 'January 1978 round', value: 'Arthur Rock invested $57,600, with Venrock and Sequoia also in the round', src: ['S2'] },
        { t: 'card', icon: 'coins', title: 'Revenue per the prospectus', label: 'PRIMARY DATA', rows: [
            { k: 'Jan 3 - Sep 30, 1977', v: '$773,977 revenue, $41,575 profit' },
            { k: 'Fiscal 1978', v: '$7,883,486 revenue, $793,497 profit' },
            { k: 'Fiscal 1979', v: '$47,938,981 revenue, $5,072,812 profit' },
            { k: 'Fiscal 1980', v: '$117,901,543 revenue, $11,697,983 profit' },
            { k: 'Growth (author\'s calculation)', v: 'In 1979 revenue grew about 6.1 times, in 1980 about 2.5 times' },
        ], src: ['S1'] },
        { t: 'fact', label: 'IPO, December 12, 1980', value: '4.6 million shares at $22: 4.0 million sold by the company, 0.6 million by shareholders. $101.2 million in total', src: ['S1', 'S7'] },
        { t: 'fact', label: 'Net proceeds to the company', value: 'about $82.1 million, of which about $7.85 million went to repay short-term debt', src: ['S1'] },
        { t: 'fact', label: 'First day', value: 'The shares rose about 32% to $29, market value about $1.778 billion. More than 40 of roughly 1,000 employees became millionaires', src: ['S6'] },
        { t: 'warn', title: 'Discrepancy: the price the shares were sold at', text: 'The Computer History Museum writes that the price was initially planned at $14 and trading opened at $22. The prospectus cover and Apple Investor Relations give the offering price as $22. I trust the primary document more: $22. Where $14 came from, I did not find.', src: ['S6', 'S1', 'S7'] },
    ] },
    { id: 'p5', n: '5', title: 'PMF, money and ecosystem', kicker: 'How a hobby board became a platform', xp: 30, blocks: [
        { t: 'p', text: 'The Apple II came out in 1977 and stood next to the Tandy TRS-80 and the Commodore PET. The point was not that the computer was the most powerful. It promised that an ordinary person would plug it into the wall and everything would work. Wozniak says nobody would take a computer home just as a computer: it needed to play, so color was a huge step.', src: ['S2'] },
        { t: 'p', text: 'The deciding thing was not the computer itself but a program. On October 17, 1979 sales of VisiCalc began, the first spreadsheet for personal computers, and it came out for the Apple II. It is called the program that turned the Apple II from a hobby into a work tool.', src: ['S10'] },
        { t: 'fact', label: 'Apple II prices in the prospectus', value: 'from $1,850 to $5,000 and above with memory and peripherals', src: ['S1'] },
        { t: 'p', text: 'Sales went through independent dealers. The prospectus says dealers did about 90% of repairs and diagnostics at that time. The company also acknowledges the risk of dependence on dealers.', src: ['S1'] },
        { t: 'p', text: 'In 1980 Apple employed about 1,015 people, and research and development spending per the prospectus was about $600,000, $3.6 million and $7.3 million in fiscal 1978, 1979 and 1980.', src: ['S1'] },
        { t: 'card', icon: 'layers', title: 'The ecosystem today', label: 'DATA FROM THE REPORTS', rows: [
            { k: 'Services', v: '$109.2 billion for fiscal 2025, plus 13.5% over $96.2 billion a year earlier (author\'s calculation)' },
            { k: 'App Store ecosystem', v: '$1.4 trillion for 2025. This is a commissioned Analysis Group study that Apple itself ordered' },
            { k: 'What it means', v: 'It no longer sells only a device. It sells access to the buyers the device brought in' },
        ], src: ['S8', 'S13'] },
        { t: 'warn', title: 'What cannot be claimed', text: 'It does not follow from the sources above that VisiCalc is what gave the Apple II its market share. We know the program came out first on the Apple II and that revenue grew, but causation is not proven in these documents.' },
    ] },
    { id: 'p6', n: '6', title: 'First principles', kicker: 'Taking decisions down to the foundation', xp: 30, blocks: [
        { t: 'p', text: 'Take Apple\'s decision to sell an assembled board, and then a complete computer. The question: what does a person who wants a computer actually need? We break it into parts.' },
        { t: 'card', icon: 'rules', title: 'First principles: a computer for a person', label: 'AUTHOR\'S ANALYSIS (HYPOTHESIS)', rows: [
            { k: 'Observation 1', v: 'A person wants a result, not parts. Terrell asked for something you could take out of a box and use' },
            { k: 'Observation 2', v: 'Before 1977 only a skilled engineer could buy a personal computer. The Apple II, TRS-80 and PET made it accessible to an ordinary buyer' },
            { k: 'Observation 3', v: 'The fewer parts the buyer has to add, the more people decide to buy: the Apple I was a board, the Apple II already a complete computer' },
            { k: 'Conclusion', v: 'The product grew from a kit into an appliance, and the mass market came with readiness. This is the author\'s hypothesis, not a law' },
        ], src: ['S2'] },
        { t: 'card', icon: 'chart', title: 'What to rebuild from scratch', label: 'EXERCISE', rows: [
            { k: '1', v: 'Write down what the buyer must do himself to start using your product' },
            { k: '2', v: 'Cross out everything that can be done for him. What is left? That is the next version' },
            { k: '3', v: 'Ask: who else can add value on top, as VisiCalc did on top of the Apple II?' },
        ] },
        { t: 'card', icon: 'stone', title: 'Law of the environment (candidate for the carved laws)', label: 'FOR THE FINAL SECTION', rows: [
            { k: 'Wording', v: 'A device is sold once, while an environment in which others build value on top of it sells everything else for the rest of the time' },
            { k: 'Support', v: 'VisiCalc on the Apple II (S10) and $1.4 trillion in the App Store ecosystem per a study commissioned by Apple (S13)' },
            { k: 'Caveat', v: 'This is a hypothesis. Causation between the program and growth is not proven in the sources' },
        ] },
    ] },
    { id: 'p7', n: '7', title: 'What transfers to you', kicker: 'Rules you can take into any product', xp: 25, blocks: [
        { t: 'card', icon: 'bulb', title: 'Five rules from this case', label: 'TRANSFERABLE', rows: [
            { k: '1. Sell before you build everything', v: 'The order for 50 units paid for raw materials before production. Prepayment or payment on delivery removes the need for money' },
            { k: '2. A narrow group first', v: 'The Homebrew club was small, but everyone there understood the product. Start where you do not have to explain' },
            { k: '3. Look for money among those who understand the product', v: 'Markkula was a customer and an engineer, and that outweighed the refusals of those who judged by appearance' },
            { k: '4. Remove the buyer\'s friction', v: 'The Apple II differed from the Apple I in that it worked right away' },
            { k: '5. Let others build on top', v: 'VisiCalc shows how another person\'s program can sell your hardware' },
        ] },
        { t: 'warn', title: 'Where these rules will not work', text: 'The rules come from one case in the 1970s. Back then the market had almost no competitors and there was no internet. Do not test your product against them alone.' },
        { t: 'gap', text: 'Not found: data on churn and retention of Apple II buyers in the first years, and the exact dates when sales reached 1,000 and 10,000 computers.' },
    ] },
];

export const APPLE_EN: Chapter = {
    ...APPLE,
    title: 'Apple: from a board for a hobby club to an environment where others build',
    sub: 'How an order for 50 boards and one spreadsheet turned a garage project into a company, and then into a platform.',
    eyebrow: 'CHAPTER 02',
    parts: PARTS,
    sources: APPLE.sources.map(s => ({ ...s, kind: KIND[s.kind] ?? s.kind, title: TITLE[s.id] ?? s.title })),
};
