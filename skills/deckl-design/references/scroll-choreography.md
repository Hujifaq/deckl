# Scroll choreography

Use this when the brief calls for an expressive showcase. The following are original design options, not a claim about a universal award-winning formula.

## Select a scene from the content

| Content | Scene | Static/mobile translation |
| --- | --- | --- |
| A physical product with useful detail views | A stable product stage changes crop or viewpoint as narrative chapters advance. | Detail images follow their corresponding copy in document flow. |
| Selected projects | A project index coordinates active text with a large media stage. | Each project has a visible thumbnail and link; no hover dependency. |
| A material or transformation story | A framed image expands into an immersive section, then resolves into detail. | Preserve the strongest crop and continue into the detail section. |
| Chronological artwork or editorial sequence | A measured horizontal gallery driven by vertical progress, when spatial continuity matters. | Normal vertical sequence or native scrollable gallery with usable controls. |
| An expressive statement | Short line reveals introduce an idea while adjacent media establishes atmosphere. | Complete heading visible immediately. |

For a scene, define its subject, entry composition, midpoint, exit, scroll distance, and fallback. Choose distance from the amount of information and movement, then tune in the browser. Avoid multi-screen dead stretches, delayed navigation, and repeated full-page reveals.

## Implement

For GSAP, register ScrollTrigger in the appropriate client environment. Scope animation to the owning component and dispose it on unmount. Use matchMedia to create desktop motion and cleanly revert at breakpoint or reduced-motion changes. Pin a stable wrapper and animate its child. Use function-based dimensions when refresh must recalculate travel; skip horizontal translation when travel is zero. See [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) and [matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/).

The DOM and CSS must remain readable before initialization. Keep keyboard targets reachable during a scene and provide equivalent access to content. Reserve media space. Refresh measurements after relevant asset or font changes, not every frame. Avoid two animation systems controlling the same transform.

## Review the actual sequence

Inspect entry, midpoint, exit, reverse scroll, fast scroll, resize, and route re-entry. Look for sudden jumps, clipped text, stale pin space, focus leaving the viewport, or a pause that outlasts its content. Check touch and reduced motion separately. A screenshot verifies composition; it does not verify choreography.
