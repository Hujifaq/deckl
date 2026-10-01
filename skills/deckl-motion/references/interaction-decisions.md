# Decide how product motion behaves

## Response and timing

A press needs immediate feedback; a larger spatial transition needs enough time to communicate movement. Start an entrance decisively when the user is waiting for its response. Let travel decelerate toward its destination. A continuous progress indicator may need linear motion; a dragged surface may benefit from a spring preserving momentum. These are contextual choices, not universal curve bans.

## Retarget instead of restarting

If a menu opens and is immediately closed, move from its current visual state. Do not jump to the original keyframe. Use an interruptible transition or animation controller; cancel stale completion callbacks. The latest requested state owns the result. Verify open-close-open in quick succession and navigation away mid-animation.

## Origin and continuity

An anchored popover can unfold from the trigger; a centered dialog has a different spatial relationship. Derive the origin from actual placement, including collision flipping. Preserve the user's sense of location when content moves. Animated layout must not move a button away just as it is clicked.

## Gesture handoff

Track the active pointer and release capture on completion or cancellation. Separate dragging from page scrolling. Choose dismissal from distance and recent velocity appropriate to the component; avoid a magic threshold copied from an unrelated example. Cancellation should return to a stable state. Keep a keyboard-operable alternative.

## Async state

Make pending, success, and failure understandable independently of motion. Do not delay a usable result for an animation minimum. Interrupted exit must not leave hidden focusable controls or block an action. With reduced motion, preserve meaning through stable layout and immediate state feedback.
