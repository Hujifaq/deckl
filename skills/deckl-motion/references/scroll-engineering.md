# Engineer a scroll scene without prescribing its appearance

Define the visual progression first. This guide governs lifecycle and access, not the arrangement of the artwork.

## Parallax depth

Choose the visual relationship before the mechanism: a photograph moving behind a fixed crop, foreground and background planes separating, or a section handing its imagery into the next. Establish which element anchors the scene and which layers move relative to it. Choose direction and travel from the artwork and narrative; avoid a preset depth stack or mandatory slow-background/fast-foreground formula.

Map the section's entrance and exit to bounded local progress. Keep spatial progress linear initially; add modest scrub smoothing only if the result still tracks fast scroll and direction changes. Do not run a separate time loop that keeps drifting after the user stops. Read the current scroll position during initialization so restored pages and deep links do not animate from the wrong starting point.

Clip moving media with a stable frame and reserve its dimensions. Measure the usable overscan after cover sizing and subject framing; keep every position within that allowance. If the crop cannot support the desired travel, reduce the movement or deliberately change the framing. Check both endpoints and the midpoint for exposed edges, clipped faces, stretched imagery, and collisions with adjoining sections. Oversized low-resolution media is not a substitute for suitable assets.

Keep the layout wrapper stable and translate inner layers. Separate parallax and hover/entrance transforms onto nested elements, or compose them in one owner, so multiple engines do not overwrite each other. Use the project's existing scroll engine or a coordinated update path. Avoid layout reads and component state updates on every frame; refresh geometry only when relevant dimensions change. Do not add wheel interception or smooth-scroll machinery solely to create parallax.

Let headings, body copy, and action targets anchor readability unless their movement is an intentional part of the brief. Use the mobile crop and actual device behavior to choose a smaller effect, fewer planes, or a static composition; mobile does not require disabling every effect. For reduced motion, remove continuous depth movement and restore a coherent static view without clipping information or leaving empty scene space.

Check touch scroll, rapid reversals, restored positions, resizing, and content loading. Watch for seams, floating text, sluggish catch-up, and jumps when entering or leaving the scene. Profile paint and compositing costs when large layers or filters are involved; apply promotion hints only where measured behavior warrants them.

## Measurement

Measure the viewport that actually clips the content. For horizontal travel, use max(0, content width minus visible container width). If travel is zero, leave ordinary flow. Derive scroll distance from the intended progression and tune it by watching; distance is not automatically viewport height times the number of panels.

Recalculate after relevant media, font, and container changes. Coalesce refreshes instead of triggering refresh recursively on every resize notification. Function-based animation values must re-read dimensions if the library's refresh is expected to change them.

## Ownership

A stable wrapper owns pinning and a child owns the visual transform. Keep setup and teardown in the component lifecycle. With GSAP, scoped context and matchMedia can own animations and breakpoint changes; revert the owned work on unmount. Avoid killing unrelated global triggers. In server-rendered projects, initialize browser-dependent behavior on the client and keep the initial document useful.

## Access

A horizontal track can move keyboard targets out of view. Decide how focusing an item reveals it, or use ordinary flow/native scrolling if reliable keyboard access cannot be preserved. Anchor links and direct entry must reach meaningful content. Reduced motion should restore useful layout without empty pin spacers.

## Failure cases to exercise

- Resize across the scene's activation breakpoint and back.
- Load an image late; change font metrics; verify updated positions.
- Enter at the middle through a deep link or restored scroll position.
- Scroll rapidly forward, backward, and beyond the release point.
- Navigate away and return; check duplicate triggers and stale styles.
- Tab through interactive content at several scene positions.

Use the installed engine's documentation for exact APIs. The existing scene's composition and measured behavior determine the final implementation.
