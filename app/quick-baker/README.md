## Introduction

Quick Baker is an exceptional PBR texture-baking addon that brilliantly utilizes Blender's native baking operator for baking `PBR`, `Mesh`, `Principled BSDF`, and `Cycles` maps. It significantly enhances the Blender baking process for multiple objects with multiple materials, offering unparalleled efficiency. Capable of baking both high-to-low and low-to-low poly objects. It simplifies the baking process with an ingenious automatic cage setup. Designed with speed and ease-of-use in mind, Quick Baker stands out as the ultimate tool for your baking needs.

## Why to choose Quick Baker?

- Object Bake
- High-to-Low Poly Bake
- Single Texture Set
- Multiple Texture Set
- Auto Cage
- Auto UDIM Bake
- Channel Packing
- Vertex Color for Material ID
- Existing Texture Bake
- Map Preview
- Material Bake
- Node Bake
- UDIM Node Bake
- Post Bake Options
- 50 Unique Maps
- Map Presets
- Bake Presets
- Clean UI/UX

## Object Bake

Bake single or multiple objects.

![Baking PBR textures for single and multiple objects](https://b3dhub.github.io/addons/images/quick-baker/object_bake.gif)

## High-to-Low Poly Bake

Bake high-to-low or low-to-low objects.

![Baking high-poly detail onto low-poly model](https://b3dhub.github.io/addons/images/quick-baker/high_to_low_bake.gif)

## Single Texture Set

Bake multiple objects and materials into single texture set.

![Baking multiple objects into single texture set](https://b3dhub.github.io/addons/images/quick-baker/single_texture_set.gif)

## Multiple Texture Set

Bake multiple objects and materials into separate texture set.

![Baking multiple objects into separate texture sets](https://b3dhub.github.io/addons/images/quick-baker/multiple_texture_set.gif)

## Auto Cage

Automatically create/adjust cage objects for high-to-low bake.

![Automatically creating and adjusting cage for baking](https://b3dhub.github.io/addons/images/quick-baker/auto_cage.gif)

## Auto UDIM Bake

Automatically bake UDIM maps based on UV layout.

![Automatically baking UDIM tiles based on UV layout](https://b3dhub.github.io/addons/images/quick-baker/auto_udim_bake.gif)

## Channel Packing

Pack multiple maps into one image (ideal for game engines).

![Packing multiple texture maps into RGB channels](https://b3dhub.github.io/addons/images/quick-baker/channel_packing.gif)

## Vertex Color for Material ID

Create vertex color for material id map.

![Creating vertex color for material ID map](https://b3dhub.github.io/addons/images/quick-baker/vertex_color_material_id.gif)

## Existing Texture Bake

Bake on existing texture map.

![Baking onto existing texture map](https://b3dhub.github.io/addons/images/quick-baker/existing_texture_bake.gif)

## Map Preview

Preview maps before baking (e.g. AO, Curvature, etc).

![Previewing ambient occlusion and curvature maps](https://b3dhub.github.io/addons/images/quick-baker/map_preview.gif)

## Node Bake

Bake shader nodes into image.

![Baking shader nodes into texture image](https://b3dhub.github.io/addons/images/quick-baker/node_bake.gif)

## UDIM Node Bake

Bake shader nodes into image for UDIM object.

![Baking shader nodes for UDIM object](https://b3dhub.github.io/addons/images/quick-baker/udim_node_bake.gif)

## 50 Unique Maps

Bake 50 unique maps

![Collection of 50 unique bake map types available](https://b3dhub.github.io/addons/images/quick-baker/maps.png)

## Limitations

- Only works with `Principled BSDF`, `Mix Shader`, and `Add Shader` nodes.
- If you encounter the `Out of Memory` error, you should lower the processes count to 1-2 in the Global Bake panel. The higher process count is useful when baking low-resolution maps (e.g. 1K).

## Support

Join our Discord server to stay updated.

[![B3dHub Discord server widget](https://discord.com/api/guilds/959138815602229389/widget.png?theme=dark&style=banner3)](https://discord.gg/sdnHHZpWbT)

## Changelogs

[View Changelogs](https://discord.com/channels/959138815602229389/1013054795562614794)
