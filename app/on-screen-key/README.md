## Introduction

On-Screen Key is a Blender addon that displays your keystrokes and mouse input as a fading stack of operator-style boxes — each input a rounded widget with its native Blender event icons and text, exactly like the status bar. It draws directly inside the editor, so your inputs are always visible while recording, streaming, or teaching.

## Features

- Native event icons — keys render as Blender-style event icons with auto-fitting text, modifiers as Shift/Ctrl/Alt/OS glyphs
- Platform-correct keys — modifier glyphs match the platform (Cmd on macOS, Win on Windows), mirroring Blender's native rendering
- History stack — the last few inputs each render as their own operator-style box, newest at the bottom, each fading out over the key duration
- Mouse input — clicks, drags, double-clicks and scroll wheels each show their dedicated icon; held buttons stay lit; rapid scrolls in one direction group into a single entry
- Broad input coverage — letters, digits, F1–F24, numpad, punctuation and media keys, extra mouse buttons, trackpad gestures and NDOF devices
- Operator names — show the executed operator's label after the input, e.g. `X Delete`
- Theme aware — box and text colors follow the theme's Tool widget colors, or use custom colors
- Every editor — draws in the 3D Viewport, Image Editor, Node Editor and Video Sequencer, toggled from each editor's overlay panel
- Follows the active editor — the overlay tracks the editor under the mouse, so it always draws where you are working
- Auto-start — the toggle is remembered, so if it is left on the overlay starts automatically the next time Blender launches
- Help & links — a Help subpanel exposes the changelog popup, documentation, bug reporting and store links

## On-Screen Key vs Screencast Keys

| Feature         | On-Screen Key                                                                            | Screencast Keys                                          |
| --------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Input display   | Native Blender event icons, matching the status bar                                      | Plain text event names                                   |
| History         | Fading stack of operator-style boxes, newest at the bottom                               | Event history list, last event, or repeat count          |
| Mouse input     | Dedicated native icons for click, drag, double-click and scroll; held buttons stay lit; rapid scrolls group | Mouse figures, event history, hold status, custom mouse images |
| Operator names  | Shown inline after the input, e.g. `X Delete`                                            | Separate "Last Operator" display (label and/or id name)  |
| Colors          | Theme Tool-widget colors, or custom fills and text tint                                  | Custom text, shadow and background colors                |
| Editor coverage | 3D Viewport, Image Editor, Node Editor, Video Sequencer via each overlay panel            | Draws to a chosen Area, Region, Window or the mouse cursor |
| Toggle          | Configurable shortcut (default Shift+Alt+C) plus persistent auto-start                    | Shift+Alt+C, optional enable-on-startup                  |

In short: On-Screen Key trades Screencast Keys' older-Blender support and extra mouse-position options for native, theme-matched icon rendering and a fading operator-box history that covers every major editor.

## Workflow

- `Shift`+`Alt`+`C` — toggle the overlay (configurable in the add-on preferences)
- **3D View > Overlays > Guides > On-Screen Key** — toggle from the overlay panel
- **3D View > Sidebar (N) > View** — toggle from the sidebar tab

From scripts (also works in background mode):

```python
bpy.ops.osk.toggle()
```

## Demo

Key presses stacking up and fading out as operator-style boxes, with native Blender event icons and text.

![On-Screen Key Demo](https://b3dhub.github.io/addons/images/on-screen-key/demo.gif)

## Settings

| Setting          | Description                                          |
| ---------------- | ---------------------------------------------------- |
| Align            | Left, Center or Right edge of the editor             |
| Scale            | Sizes the icons, box and margins (1.0–2.0)           |
| Opacity          | Opacity of the box, icons and text (0.1–1.0)         |
| Duration         | Seconds an input stays on screen (1–10)              |
| History          | Number of recent inputs kept in the stack (1–10)     |
| Operator Names   | Show the executed operator after the input           |
| Reset Overlay    | Clear the overlay when the active editor changes     |
| Shortcut         | Keyboard shortcut to toggle the overlay (empty for none) |
| Use Theme Colors | Fill boxes from the theme's Tool widget colors       |
| Inner            | Older box fill when theme colors are off             |
| Selected         | Newest box fill when theme colors are off            |
| Text             | Icon and keycap text tint when theme colors are off  |

## Support

Join our Discord server to stay updated.

[![B3dHub Discord server widget](https://discord.com/api/guilds/959138815602229389/widget.png?theme=dark&style=banner3)](https://discord.gg/sdnHHZpWbT)

## Changelogs

[View Changelogs](https://discord.gg/SsXRGa2qku)
