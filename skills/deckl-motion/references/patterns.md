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
