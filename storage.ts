import { useState } from 'react';

export function useLocalState<T>(key: string, init: T): [T, (v: T) => void, { ready: boolean; message: string }] {
    const [v, setV] = useState<T>(() => {
        try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : init; } catch { return init; }
    });
    const set = (x: T) => { setV(x); try { localStorage.setItem(key, JSON.stringify(x)); } catch {} };
    return [v, set, { ready: true, message: 'Сохраняется на этом устройстве' }];
}
