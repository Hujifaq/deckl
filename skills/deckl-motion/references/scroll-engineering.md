# Engineer a scroll scene without prescribing its appearance

Define the visual progression first. This guide governs lifecycle and access, not the arrangement of the artwork.

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
