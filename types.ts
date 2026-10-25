export type Source = { id: string; title: string; url: string; kind: string };
export type Block =
    | { t: 'p'; text: string; src?: string[] }
    | { t: 'fact'; label: string; value: string; src?: string[] }
    | { t: 'gap'; text: string }
    | { t: 'card'; icon: string; title: string; label: string; rows: { k: string; v: string }[]; src?: string[] }
    | { t: 'ladder'; title: string; steps: string[] }
    | { t: 'img'; file: string; alt: string; caption: string; credit: string; url?: string }
    | { t: 'video'; title: string; note: string; url: string }
    | { t: 'warn'; title: string; text: string; src?: string[] };
export type Part = { id: string; n: string; title: string; kicker: string; xp: number; blocks: Block[] };

export type Puzzle = { id: string; title: string; setup: string; options: { text: string; verdict: string }[]; best: number; fact: string; src: string[]; xp: number };
export type DNode = { id: string; speaker: string; text: string; choices: { text: string; reply: string; good: boolean; next?: string }[] };
export type Chapter = {
    id: string; no: string; company: string; title: string; sub: string; eyebrow: string; year: string;
    sources: Source[]; parts: Part[]; puzzles: Puzzle[]; dialogue: DNode[]; tips: string[];
};
