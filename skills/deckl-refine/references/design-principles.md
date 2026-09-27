# Design principles

Use the sections relevant to the current interface. These are decision criteria, not a required aesthetic.

## Hierarchy and composition

Identify the task the page supports and make its next meaningful action recognizable. Some pages support exploration rather than one dominant action; preserve that distinction.

Group related content through proximity, alignment, and consistent rhythm. Use a surface or border when it clarifies an independent object, interactive region, or comparison. Avoid placing a card inside another card when it adds no meaning.

Vary composition when the information changes. A comparison may need a table; a process may need a sequence; a gallery may need images. Do not force every section into three equal feature cards. Repetition is useful when items are truly equivalent.

## Typography

Start with the existing type family. Improve role, size, weight, line height, and width before replacing it. Add a new font only when the current one cannot support the intended direction and font loading is acceptable.

Use a small, coherent hierarchy for page titles, section headings, body text, labels, and metadata. Secondary content still needs readable size and contrast. Avoid turning large amounts of operational information into tiny uppercase labels.

Judge line length and wrapping with actual content. Do not force manual line breaks that fail at other viewport widths. Let long names, translated labels, and browser zoom reveal weak assumptions.

## Spacing and alignment

Use existing spacing tokens or establish a compact scale where needed. Make internal spacing smaller than the separation between unrelated groups. Dense tools can use tighter spacing while retaining distinct groups and usable targets.

Align text and controls by their visual relationships. Equal numeric padding does not always produce optical alignment. Check the rendered result when possible.

## Color and surfaces

Assign colors roles: text, muted text, background, surface, border, action, and status. Reuse roles consistently. Preserve established brand colors and supported themes.

Reserve stronger contrast or saturation for meaningful emphasis. Multiple equally prominent accents can obscure the next action. Color alone must not communicate status or selection.

Gradients, shadows, and textures may support depth or identity. Keep them only when they help the actual design. Do not replace every distinctive surface with a flat neutral one.

## Copy and imagery

Prefer language that describes the action or benefit precisely. Replace vague promotional claims only with facts supported by the brief or product. Preserve meaning during copy edits.

Choose images that explain the product, subject, or context. Decorative images should support the composition without competing with essential information. Reuse available assets before requesting or generating more.

## Interaction and accessibility

Use buttons for actions and links for navigation. Associate labels with inputs and make errors discoverable and actionable. Tooltips do not replace essential labels or instructions.

Check keyboard reachability, logical focus order, visible focus, and focus handling in affected dialogs or menus. Preserve native semantics before introducing custom behavior.

For a WCAG AA target, check normal text against 4.5:1 contrast, large text against 3:1, and applicable control boundaries or indicators against 3:1. Do not infer full accessibility compliance from a contrast check alone.

Make target sizes and spacing suitable for touch. Keep hover-dependent information available through focus or explicit interaction. Respect user preferences such as reduced motion.

## Responsive structure

Choose breakpoints where content stops working, using existing conventions where suitable. Reorder or stack content deliberately. Tables may need controlled scrolling or a different compact representation; removing important columns is not automatically a solution.

Check that sticky elements, fixed actions, and overlays do not cover content or keyboard focus. Avoid hardcoded heights for regions containing variable text.
