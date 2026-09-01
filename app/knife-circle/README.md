## Introduction

Knife Circle is a powerful Blender add-on for projecting precise circular cuts onto mesh objects with a real-time preview. It features GPU-accelerated rendering, interactive radius control, and works seamlessly in both Object and Edit modes. Perfect for creating clean geometric cuts with accuracy and speed.

## Features

- Interactive Control
- Fixed / Freeform Modes
- Adjustable Segments
- Numeric Input
- Quick Shapes
- Cut Through
- Dual Mode Support
- Precision Mode
- Snap Mode

## Quick Start

1. **Select** one or more mesh objects
2. **Activate** the Circle Knife tool from the toolbar
3. **Click** to place the circle center
4. **Move** the mouse to adjust radius
5. **Confirm** with Left Click or **Cancel** with Right Click/ESC

## Controls

- `Left Click` — Confirm: execute the knife projection
- `Right Click / ESC` — Cancel: exit without changes
- `Mouse Move` — Adjust Radius: dynamic radius control
- `Scroll Up` — More Segments: increase circle smoothness (max 256)
- `Scroll Down` — Fewer Segments: decrease segments (min 3)
- `Shift + Mouse Move` — Precise Mode: 10x slower radius adjustment
- `Ctrl + Mouse Move` — Snap Mode: snap radius to 5-unit increments
- `F` — Fixed / Freeform Mode: switch between fixed/freeform modes
- `X` — Cut Through Mode: switch between surface/through modes
- `T` — Triangle: set to 3 segments for triangle
- `S` — Square: set to 4 segments for square
- `C` — Circle: set to 32 segments for smooth circle
- `0-9, Period` — Numeric Input: type exact radius value
- `Backspace` — Delete Digit: remove last typed character
- `Enter / Numpad Enter` — Apply Value: confirm numeric input

## Interactive Control

Click to set the circle center, then move the mouse to dynamically adjust the radius with real-time preview.

![Interactive control demonstration](https://b3dhub.github.io/addons/images/knife-circle/interactive-controls.gif)

## Fixed / Freeform Mode

Toggle between Fixed mode (click to set center, move to adjust radius) and Freeform mode (click and drag to define both center and radius simultaneously) using the `F` key.

![Freeform mode demonstration showing click-and-drag to define center and radius](https://b3dhub.github.io/addons/images/knife-circle/freeform.gif)

## Adjustable Segments

Modify the number of segments on-the-fly using the mouse scroll wheel.

![Adjustable segments demonstration](https://b3dhub.github.io/addons/images/knife-circle/adjustable-segments.gif)

## Numeric Input

Type exact radius values for precise cuts. Start the tool, type a value like `75.5`, and press Enter to apply.

![Numeric input demonstration](https://b3dhub.github.io/addons/images/knife-circle/numeric-input.gif)

## Quick Shapes

Instantly switch between common shapes with a single keypress - `T` for Triangle (3 segments), `S` for Square (4 segments), `C` for Circle (32 segments).

![Quick shape shortcuts demonstration](https://b3dhub.github.io/addons/images/knife-circle/quick-shapes.gif)

## Cut Through

Toggle between two modes with the `X` key - Blue preview cuts only visible front faces, Red preview cuts through the entire mesh.

![Cut through mode demonstration](https://b3dhub.github.io/addons/images/knife-circle/cut-through.gif)

## Support

Join our Discord server to stay updated.

[![B3dHub Discord server widget](https://discord.com/api/guilds/959138815602229389/widget.png?theme=dark&style=banner3)](https://discord.gg/sdnHHZpWbT)

## Changelogs

[View Changelogs](https://discord.com/channels/959138815602229389/1439518778001199156)
