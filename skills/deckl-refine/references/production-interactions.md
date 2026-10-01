# Production interaction review

Use only the sections relevant to the affected feature. Reuse the project's established component library and behavior before hand-building a replacement.

## Forms and async work

Keep labels, validation relationships, input types, autofill, and submission semantics intact. Distinguish invalid input, pending work, success, and server failure. Keep entered values after recoverable errors; place error information where users can act on it. Prevent duplicate consequential submissions without trapping recovery. Do not present optimistic success where failure cannot be safely reversed.

## Dialogs and navigation

Use existing accessible primitives. Verify entry focus, Escape where appropriate, containment for modal dialogs, and focus return to a sensible control. Closing animation must not leave an invisible overlay blocking the page. Preserve browser Back, deep links, and route state. Hover styling cannot be the only way to discover or operate an action.

## Tables and operational interfaces

Keep comparisons aligned, sorting/filter state visible, and selection meaningful across paging. Distinguish no records from no matching results and unavailable data. Try long names, large values, missing values, and permission-restricted states. Preserve density when users need to scan many records; a card conversion is not automatically an improvement.

## Mobile and variable content

Inspect soft-keyboard obstruction, sticky actions, safe areas, zoom, and long translated content. Gate hover enhancements by input capability rather than screen width alone. Avoid removing native feedback unless replacing it with an accessible equivalent. Distinguish emulation from physical-device evidence.

## Release evidence

Run the affected task using safe local fixtures, including its meaningful failure path. Inspect console errors and relevant project checks. Record supported browsers actually exercised and remaining gaps. Performance budgets should come from the project baseline and target devices, not an invented universal score. Do not infer accessibility certification or production readiness from a build alone.
