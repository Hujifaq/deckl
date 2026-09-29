# Motion decisions and failure checks

## State feedback

Use a brief color, opacity, or transform transition to acknowledge a state change. Keep durations coherent with the existing product. Fast feedback and longer spatial transitions may need different timing; do not apply one duration to everything.

Preserve native focus and pressed states. Avoid moving a target enough that clicking or tapping it becomes difficult. Limit transitioned properties instead of using `transition: all` indiscriminately.

## Entrance sequencing

Use sequence to establish hierarchy or introduce a small related group. Keep cumulative delays short enough that users do not wait for controls. Do not stagger an entire long list or make every return scroll replay an entrance.

The initial document should expose important content. Add animation only after successful initialization, or provide a reliable visibility fallback. Intersection-based enhancement often suffices without a continuous scroll listener.

## Scroll narrative

Use pinning or scrubbing only when continuous progress clarifies the story. Base distances on measured content and container sizes rather than a fixed number of screens. Guard against zero or negative travel when the content already fits.

Check sticky-header offsets, font loading, resized media, and changed content. Recompute measurements through the animation system's refresh lifecycle. Ensure pin spacers and transforms are removed when a scene is disabled or unmounted.

Touch-sized and reduced-motion alternatives should present the same narrative in a readable ordinary flow. Avoid a wide track that traps focus off-screen or hides information without animation support.

## Image and media transitions

Reserve media dimensions before loading. Preserve subject framing during scale or crop transitions. Do not upscale low-resolution imagery to create a cinematic effect. Poster frames or static assets should explain the content before video or rendering initializes.

Pause nonessential looping media when it is off-screen where practical. Respect user playback controls and avoid unexpected audio.

## Shared-element and route transitions

Preserve route state, keyboard focus, scroll restoration, and the meaning of browser back/forward navigation. Handle interrupted transitions and direct entry to the destination. Do not block routing on an animation finishing.

## Advanced rendering

Use canvas or WebGL only when the concept needs capabilities beyond ordinary layout. Provide accessible DOM content, a usable fallback, and an appropriate loading strategy. Measure initialization cost, memory pressure, and interaction responsiveness with available tools. Do not claim performance from library choice alone.

## ScrollTrigger implementation decisions

Use a component-owned context or the framework integration for lifecycle cleanup. Use `gsap.matchMedia()` for breakpoint and reduced-motion variants and revert its work when the component unmounts. Pin a stable wrapper; transform a child. Use function-based travel and `invalidateOnRefresh` when dimensions change; skip scenes with no travel. Read the installed version's [ScrollTrigger documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) and [matchMedia documentation](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/) when implementing.

Start scrubbed spatial progress with linear easing; add smoothing only if it improves control in the actual scene. Keep entrance timing separate from scroll progress. For conventional UI feedback, 120–220 ms is a useful starting range; a short editorial entrance might use 450–800 ms. These are tuning suggestions, not requirements. Long staggers should never gate the primary action.

Test deep linking into the scene, reverse scroll, rapid scroll, changed viewport height, font loading, route re-entry, and reduced-motion toggling. Inspect the content at the midpoint as well as its final state. Scroll scenes must look composed throughout the journey.
