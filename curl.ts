// Page curl: the old page is cloned as an overlay and clipped by a moving fold line;
// the folded-over flap (reflection of the revealed corner) is drawn in SVG. 60fps via rAF.
type P = [number, number];
const clipHalf = (poly: P[], n: P, c: number, keepLE: boolean): P[] => {
    const f = (p: P) => (n[0] * p[0] + n[1] * p[1] - c) * (keepLE ? 1 : -1);
    const out: P[] = [];
    for (let i = 0; i < poly.length; i++) {
        const a = poly[i], b = poly[(i + 1) % poly.length], fa = f(a), fb = f(b);
        if (fa <= 0) out.push(a);
        if ((fa < 0 && fb > 0) || (fa > 0 && fb < 0)) { const t = fa / (fa - fb); out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); }
    }
    return out;
};
const pts = (poly: P[]) => poly.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
const ease = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);

export const SIMPLE_FOR_ALL = true; // flip to true to ship the soft page change without the curl
export function pageCurl(app: HTMLElement, reader: HTMLElement, host: HTMLElement, dir: 'next' | 'prev', swap: () => void, done: () => void) {
    const nav = navigator as Navigator & { deviceMemory?: number };
    const weak = SIMPLE_FOR_ALL || (nav.hardwareConcurrency ?? 8) <= 4 || (nav.deviceMemory ?? 8) <= 4 || reader.scrollHeight > 9000;
    if (weak || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { swap(); reader.animate([{ opacity: 0, transform: 'translateX(' + (dir === 'next' ? 24 : -24) + 'px)' }, { opacity: 1, transform: 'none' }], { duration: 420, easing: 'cubic-bezier(.2,.7,.3,1)' }); setTimeout(done, 440); return; }
    const hr = host.getBoundingClientRect();
    const rr = reader.getBoundingClientRect();
    const W = hr.width, H = hr.height;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ov = document.createElement('div');
    ov.style.cssText = `position:fixed;left:${hr.left}px;top:${hr.top}px;width:${W}px;height:${H}px;overflow:hidden;z-index:70;pointer-events:none`;
    const clone = reader.cloneNode(true) as HTMLElement;
    clone.querySelectorAll('img,iframe,video,svg').forEach(e => e.remove());
    clone.classList.remove('turn-out-next');
    clone.style.cssText += `;position:absolute;left:${rr.left - hr.left}px;top:${rr.top - hr.top}px;width:${rr.width}px;margin:0;animation:none;max-height:${Math.max(200, H - (rr.top - hr.top))}px;overflow:hidden`;
    
    const holder = document.createElement('div');
    holder.style.cssText = 'position:absolute;inset:0;contain:strict;will-change:clip-path';
    holder.appendChild(clone);
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', String(W)); svg.setAttribute('height', String(H));
    svg.style.cssText = 'position:absolute;inset:0;overflow:visible';
    svg.innerHTML = `<defs>
      <linearGradient id="pcg" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#cbb98e"/><stop offset=".12" stop-color="#fbf3de"/><stop offset=".6" stop-color="#fffdf5"/><stop offset="1" stop-color="#e9dcbd"/></linearGradient>
      <linearGradient id="pcs" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="rgba(0,0,0,.42)"/><stop offset="1" stop-color="rgba(0,0,0,0)"/></linearGradient></defs>
      <polygon id="pcsh" fill="url(#pcs)"/><polygon id="pcf" fill="url(#pcg)"/>`;
    ov.appendChild(holder); ov.appendChild(svg);
    app.appendChild(ov);
    swap();
    const sx = dir === 'next' ? 1 : -1;
    const corner: P = [dir === 'next' ? W : 0, H];
    const n0: P = [-0.72 * sx, -0.69]; // from corner toward the page
    const L = Math.hypot(n0[0], n0[1]); const n: P = [n0[0] / L, n0[1] / L];
    const rect: P[] = [[0, 0], [W, 0], [W, H], [0, H]];
    const dMax = Math.max(...rect.map(p => n[0] * (p[0] - corner[0]) + n[1] * (p[1] - corner[1]))) + 12;
    const nc = n[0] * corner[0] + n[1] * corner[1];
    const dur = 1900; const t0 = performance.now();
    const shEl = svg.querySelector('#pcsh') as SVGPolygonElement, flEl = svg.querySelector('#pcf') as SVGPolygonElement;
    const g1 = svg.querySelector('#pcg') as SVGLinearGradientElement, g2 = svg.querySelector('#pcs') as SVGLinearGradientElement;
    const frame = (now: number) => {
        if (fin) return;
        const t = Math.min(1, (now - t0) / dur); const d = ease(t) * dMax; const c = nc + d;
        const old = clipHalf(rect, n, c, false); // old page remains beyond the fold
        holder.style.clipPath = old.length > 2 ? `polygon(${old.map(p => p[0] + 'px ' + p[1] + 'px').join(',')})` : 'polygon(0 0,0 0,0 0)';
        const rev = clipHalf(rect, n, c, true);
        const flap = rev.map((p): P => { const k = 2 * (n[0] * p[0] + n[1] * p[1] - c); return [p[0] - k * n[0], p[1] - k * n[1]]; });
        const flapIn = clipHalf(clipHalf(clipHalf(clipHalf(flap, [1, 0], W, true), [-1, 0], 0, true), [0, 1], H, true), [0, -1], 0, true);
        flEl.setAttribute('points', flapIn.length > 2 && d > 0.5 ? pts(flapIn) : '');
        g1.setAttribute('x1', String(corner[0] + n[0] * 0)); 
        const gx = n[0], gy = n[1];
        const base: P = [gx * c, gy * c];
        // gradient runs across the fold from fold line outward over the flap
        g1.setAttribute('x1', String(base[0] - gx * 0)); g1.setAttribute('y1', String(base[1]));
        g1.setAttribute('x2', String(base[0] + gx * Math.max(30, d * 0.9))); g1.setAttribute('y2', String(base[1] + gy * Math.max(30, d * 0.9)));
        const band = clipHalf(clipHalf(rect, n, c, false), n, c + 46, true);
        shEl.setAttribute('points', band.length > 2 && d > 0.5 ? pts(band) : '');
        g2.setAttribute('x1', String(base[0])); g2.setAttribute('y1', String(base[1]));
        g2.setAttribute('x2', String(base[0] + gx * 46)); g2.setAttribute('y2', String(base[1] + gy * 46));
        if (t < 1) requestAnimationFrame(frame); else finish();
    };
    let fin = false; const finish = () => { if (fin) return; fin = true; ov.remove(); done(); };
    setTimeout(finish, dur + 500);
    requestAnimationFrame(frame);
}
