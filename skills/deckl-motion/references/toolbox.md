# Motion toolbox

Concrete techniques and starting values. Pick what the chosen behavior needs; nothing here is a required effect. Browser support for scroll-driven animations, view transitions, and `@starting-style` differs by browser and version: check current support (MDN or caniuse) against the project's targets, gate with `@supports` or feature detection, and make the unanimated page complete.

## Starting values

Begin here, then tune by watching the real interface. Frequently repeated actions sit at the short end; large spatial changes sit at the long end.

| Movement | Duration | Easing |
| --- | --- | --- |
| Press or toggle feedback | 80–150ms | ease-out |
| Hover color or opacity | 150–200ms | ease-out |
| Menu, popover, tooltip | 150–250ms | ease-out in; exit about 70% as long |
| Drawer, sheet, dialog | 250–400ms | ease-out in, ease-in out |
| Shared-element or page transition | 300–600ms | ease-in-out |
| Entrance stagger | 30–60ms per item; total under about 300ms | ease-out |
| Scroll-scrubbed progress | Linked to scroll, no duration | linear |
| Parallax travel | Within the crop's overscan; often 5–15% of the frame | linear |

```css
:root {
  --ease-out: cubic-bezier(0.2, 0, 0, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  /* Approximate spring with slight overshoot; generate exact curves with a linear() tool. */
  --ease-spring: linear(0, 0.31 8%, 0.79 18%, 1.04 28%, 1.09 36%, 1.04 47%, 0.99 60%, 1);
}
```

## Reduced motion

Reduced motion means removing travel, zoom, parallax, and continuous movement. Brief opacity or color changes remain acceptable, and content must stay visible.

```css
/* Motion is added only for visitors who have not asked to reduce it. */
@media (prefers-reduced-motion: no-preference) {
  .panel { transition: translate 300ms var(--ease-out), opacity 300ms var(--ease-out); }
}
```

```js
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
const apply = () => (reduce.matches ? disableScene() : enableScene());
reduce.addEventListener('change', apply);
apply();
```

## Entrance reveal that never hides content

Content stays visible unless the script that reveals it is running. Do not apply reveals to the first viewport.

```css
@media (prefers-reduced-motion: no-preference) {
  .reveal-ready .reveal:not(.is-visible) { opacity: 0; translate: 0 1.5rem; }
  .reveal { transition: opacity 500ms var(--ease-out), translate 500ms var(--ease-out); }
}
```

```js
const items = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    entry.target.classList.add('is-visible');
    io.unobserve(entry.target); // Reveal once; returning visitors should not wait again.
  }
}, { rootMargin: '0px 0px -10% 0px' });
items.forEach(el => io.observe(el));
document.documentElement.classList.add('reveal-ready');
```

## CSS scroll-driven animation

Good for parallax, progress indicators, and simple scene changes without JavaScript. Use GSAP or another engine when you need pinning with measured spacing, coordinated timelines, or callbacks.

```css
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .frame { overflow: clip; }
    .frame > img {
      display: block;
      width: 100%;
      height: 120%;            /* 20% overscan */
      object-fit: cover;
      animation: drift linear both;
      animation-timeline: view(); /* After the shorthand, which resets it. */
    }
    /* 15% of the image's 120% height is 18% of the frame: inside the overscan at both ends. */
    @keyframes drift { from { translate: 0 -15%; } to { translate: 0 0; } }
  }
}

.progress { transform-origin: 0 50%; }
@supports (animation-timeline: scroll()) {
  .progress { animation: grow linear both; animation-timeline: scroll(root); }
  @keyframes grow { from { scale: 0 1; } }
}
```

Use `animation-range` (for example `entry 0% cover 50%`) to confine a change to part of an element's journey. Check both ends and the midpoint for exposed edges.

## View transitions

Same-document state change, such as filtering a gallery or opening a detail view:

```js
function transition(update) {
  if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return update();
  return document.startViewTransition(update);
}
transition(() => renderDetail(item));
```

```css
.card[data-active] img, .detail img { view-transition-name: project-image; } /* Unique per page at a time. */
::view-transition-group(project-image) { animation-duration: 400ms; animation-timing-function: var(--ease-in-out); }
```

Cross-document navigation on a same-origin multi-page site:

```css
@media (prefers-reduced-motion: no-preference) {
  @view-transition { navigation: auto; }
}
```

Keep focus, scroll restoration, and Back behavior correct; never block navigation on the animation.

## Entry and exit for dialogs and popovers

```css
dialog {
  opacity: 1;
  translate: 0 0;
  transition: opacity 200ms var(--ease-out), translate 200ms var(--ease-out),
    display 200ms allow-discrete, overlay 200ms allow-discrete;
}
dialog:not([open]) { opacity: 0; translate: 0 0.5rem; }
@starting-style { dialog[open] { opacity: 0; translate: 0 0.5rem; } }
/* Reduced motion: fade only; the position changes without travel. */
@media (prefers-reduced-motion: reduce) { dialog { transition-property: opacity, display, overlay; } }
```

The same pattern works for `[popover]` with `:popover-open`.

## Interruptible JavaScript animation

Retarget from the current visual state instead of restarting:

```js
let current;
function setOpen(panel, open) {
  const from = getComputedStyle(panel).translate; // Includes a running animation's value.
  current?.cancel();
  current = panel.animate(
    [{ translate: from }, { translate: open ? '0 0' : '0 100%' }],
    { duration: 300, easing: 'cubic-bezier(0.2, 0, 0, 1)', fill: 'forwards' },
  );
  current.finished.then(a => { a.commitStyles(); a.cancel(); }).catch(() => {}); // Rejected when interrupted.
}
```

## GSAP ScrollTrigger scene with cleanup

```js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function mountGallery(root) {
  const mm = gsap.matchMedia(root);
  mm.add({ motion: '(prefers-reduced-motion: no-preference)', wide: '(min-width: 64rem)' }, ({ conditions }) => {
    if (!conditions.motion || !conditions.wide) return; // Ordinary flow.
    const track = root.querySelector('.track');
    const travel = () => Math.max(0, track.scrollWidth - root.clientWidth);
    if (!travel()) return;
    gsap.to(track, {
      x: () => -travel(),
      ease: 'none',
      scrollTrigger: { trigger: root, pin: true, scrub: true, end: () => `+=${travel()}`, invalidateOnRefresh: true },
    });
  });
  return () => mm.revert(); // Call on unmount or route change.
}
```

In React, `useGSAP` from `@gsap/react` scopes and reverts the same work. A horizontal track can carry focusable items out of view; see the access notes in [scroll scene engineering](scroll-engineering.md).

## Performance

- Prefer `transform`, `translate`, `scale`, `rotate`, and `opacity`. Animating `width`, `height`, `top`, `left`, or `margin` forces layout on every frame.
- Do not read layout (`getBoundingClientRect`, `offsetHeight`) inside per-frame code; measure on resize or refresh.
- Use `will-change` only on elements that are about to animate, and remove it afterward; promoted layers cost memory.
- Large `filter`, `backdrop-filter`, and mask animations are expensive; profile them on a mid-range phone.
- Transform-based motion does not cause layout shift (CLS). Keep event handlers short so motion work does not delay the response to input (INP).
- Measure with the browser's Performance panel under stated conditions. A library choice is not evidence of smoothness.
