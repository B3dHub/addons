## Introduction

Cargo Bridge is a Blender add-on that imports your downloaded [KitBash3D Cargo](https://kitbash3d.com/pages/cargo) library directly from the Blender interface. Assets are indexed from Cargo's own SQLite manifest, sorted by kit, and shown in a fast thumbnail browser. Models, materials, textures and HDRIs can be imported without leaving the 3D Viewport or Shader Editor.

> Disclaimer: Assets must be `downloaded through the Cargo desktop app` first. This add-on is a standalone browser and does not require the official Cargo Connector.

> Note: The add-on does not download asset files from KitBash3D. It imports assets that already exist in your local Cargo library. Only preview images are fetched and cached from Cargo's public CDN.

## Features

- Grid View
- Kit Filtering
- Readable Names
- Asset Search
- Asset Details
- Official Cargo Previews
- Pagination
- Import Models
- Collider Handling
- Collection Instances
- Import Materials
- Material Node Groups
- Texture Variants
- Import Textures
- Import HDRIs
- Preferences

## Workflow

1. Download the assets through the [Cargo desktop app](https://kitbash3d.com/pages/cargo).
2. Cargo stores kits in `%APPDATA%\kitbash3d\kits` on Windows, with the equivalent application data folder on macOS and Linux.
3. Add the path in the add-on preferences under the `Library` tab. Either the `kitbash3d` folder or its `kits` folder works.
4. Open the Sidebar (N-Panel) and switch to the `C-Bridge` tab.
5. Pick a kit, search, and press `Import`. Materials and textures are also available in the Shader Editor, and HDRIs in the World shader editor.

## Grid View

Browse downloaded models, materials and HDRIs by kit. Cargo folder codes are converted to readable names, with the kit name shown above each thumbnail.

![Cargo Bridge grid view displaying downloaded Cargo assets by kit](https://b3dhub.github.io/addons/images/cargo-bridge/grid_view.gif)

## Asset Search

Search assets by name. The search box filters the current asset type and resets pagination.

![Searching for Cargo assets by name using the search bar](https://b3dhub.github.io/addons/images/cargo-bridge/asset_search.gif)

## Asset Details

View previews, resolution, poly count, height, material count and texture size. Model views, material balls and HDRI composites are downloaded from Cargo's CDN and cached.

![Viewing Cargo asset details including previews and model statistics](https://b3dhub.github.io/addons/images/cargo-bridge/asset_details.gif)

## Pagination

Navigate through pages of assets with the arrows or page buttons.

![Navigating through multiple pages of Cargo assets](https://b3dhub.github.io/addons/images/cargo-bridge/pagination.gif)

## Import Models

Import models and assemblies with their Cargo materials rebuilt. Geometry is imported with Blender's USD importer into a new collection at the 3D cursor. Cargo materials are rebuilt from their MaterialX graph, and colliders are imported hidden or removed depending on the options.

Enable `Import as Collection Instance` to keep the asset in a hidden source collection and place an instance at the 3D cursor.

![Importing Cargo models and assemblies into Blender](https://b3dhub.github.io/addons/images/cargo-bridge/import_assets.gif)

## Import Materials

Build native Principled BSDF materials from Cargo MaterialX files. Materials are parsed with `pxr` and rebuilt with base color, metalness, roughness, normal, height, emission, transmission, subsurface, coat and sheen. The resolution and format that were actually downloaded are selected automatically.

Use `Apply Material` to assign the material to the selected objects, or `Mark as Asset` for the Asset Browser. In the Shader Editor, a Cargo material can also be added as a reusable shader node group.

![Importing Cargo materials into Blender](https://b3dhub.github.io/addons/images/cargo-bridge/import_materials.gif)

## Import Textures

In the Shader Editor, switch to the `Textures` tab and add a texture as an Image Texture node, or import it as a material. Choose `sRGB` for color maps and `Non-Color` for masks, roughness and other data maps.

![Adding Cargo textures as image texture nodes in the Shader Editor](https://b3dhub.github.io/addons/images/cargo-bridge/import_textures.gif)

## Import HDRIs

Select an HDRI in the 3D Viewport to set it as the scene world, or add it as an Environment Texture node in the World shader editor.

![Setting a Cargo HDRI as the scene world in Blender](https://b3dhub.github.io/addons/images/cargo-bridge/import_hdris.gif)

## Preferences

- `Library`: Cargo library path and the optional Pillow dependency.
- `Model`: Import Colliders and Import as Collection Instance.
- `Material`: Skip Existing Materials, Use Gamma Node, Hide Texture Nodes, displacement method and scale, and copying textures beside the .blend file.
- `Texture`: sRGB or Non-Color colorspace for standalone texture assets.
- `Preview`: Sort order, assets per page, thumbnail scale, popup scale and showing asset names.

## Notes

- Cargo Connector is not required. This is a standalone browser.
- Only explicitly downloaded assets are listed. Model parts and dependency materials stay with their parent kit.
- Previews are cached in the platform user cache and downloaded in the background. If the CDN is unavailable, cards fall back to the downloaded base color, material base color or raw HDRI.
- Repeated sub-components use unique mesh data in this version; there is no custom USD mesh instancer.
- Pillow is optional. Install it from the Library preferences for faster thumbnail scaling on large libraries.

## Copyright Disclaimer

This add-on is an independent tool and is not affiliated with, authorized, sponsored, or otherwise approved by KitBash3D.

All Cargo assets and content remain the property of KitBash3D and are subject to their terms of use and licensing agreements.

KitBash3D and Cargo are trademarks or registered trademarks of KitBash3D in the USA and elsewhere.

## Support

Join our Discord server to stay updated.

[![B3dHub Discord server widget](https://discord.com/api/guilds/959138815602229389/widget.png?theme=dark&style=banner3)](https://discord.gg/sdnHHZpWbT)

## Changelogs

[View Changelogs](https://discord.gg/F3FYWqxvGT)
