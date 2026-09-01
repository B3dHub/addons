## Introduction

Blender-to-Unity is a Blender addon that exports objects, animations, colliders, and LODs to Unity Engine. It is designed to be simple and easy to use. You can export your models to Unity with just a few clicks. This addon is perfect for game developers, architects, and 3D artists who want to export their models to Unity Engine. Get Blender-to-Unity today and start exporting your models to Unity with ease!

## Why to choose Blender-to-Unity?

- Object Export
- Collections Export
- Collider Export
- LOD Export
- Animation Export
- Rename Tool
- Export to Unity & Disk
- Auto Extract Materials & Textures
- Auto Create Shader Types
- Clean UI/UX

## [Collider](https://b3dhub.github.io/blender-to-unity-docs/collider.html)

Add auto and custom collider.

![Collider types panel in addon interface](https://b3dhub.github.io/addons/images/blender-to-unity/colliders.png)

### [Box](https://b3dhub.github.io/blender-to-unity-docs/collider.html#box)

Box collider will create based on the bounding box of the selection.

Creating box collider:

![Creating box collider from object bounds](https://b3dhub.github.io/addons/images/blender-to-unity/box.webp)

Box collider in edit mode:

![Editing box collider in edit mode](https://b3dhub.github.io/addons/images/blender-to-unity/box_editmode.webp)

Custom box collider:

![Custom box collider from selected faces](https://b3dhub.github.io/addons/images/blender-to-unity/box_custom.webp)

### [Capsule](https://b3dhub.github.io/blender-to-unity-docs/collider.html#capsule)

Capsule collider will create based on the bounding box and the depth of the selection.

Creating capsule collider:

![Creating capsule collider from object bounds](https://b3dhub.github.io/addons/images/blender-to-unity/capsule.webp)

Capsule collider in edit mode:

![Editing capsule collider in edit mode](https://b3dhub.github.io/addons/images/blender-to-unity/capsule_editmode.webp)

Custom capsule collider:

![Custom capsule collider from selected faces](https://b3dhub.github.io/addons/images/blender-to-unity/capsule_custom.webp)

### [Sphere](https://b3dhub.github.io/blender-to-unity-docs/collider.html#sphere)

Sphere collider will create based on the bounding box of the selection.

Creating sphere collider:

![Creating sphere collider from object bounds](https://b3dhub.github.io/addons/images/blender-to-unity/sphere.webp)

Sphere collider in edit mode:

![Editing sphere collider in edit mode](https://b3dhub.github.io/addons/images/blender-to-unity/sphere_editmode.webp)

Custom sphere collider:

![Custom sphere collider from selected faces](https://b3dhub.github.io/addons/images/blender-to-unity/sphere_custom.webp)

### [Cylinder](https://b3dhub.github.io/blender-to-unity-docs/collider.html#cylinder)

Cylinder collider will create based on the bounding box and the depth of the selection.

Creating cylinder collider:

![Creating cylinder collider from object bounds](https://b3dhub.github.io/addons/images/blender-to-unity/cylinder.gif)

Cylinder collider in edit mode:

![Editing cylinder collider in edit mode](https://b3dhub.github.io/addons/images/blender-to-unity/cylinder_editmode.webp)

### [Convex](https://b3dhub.github.io/blender-to-unity-docs/collider.html#convex)

Convex collider will create based on the selection.

Creating convex collider:

![Creating convex mesh collider from object](https://b3dhub.github.io/addons/images/blender-to-unity/convex.webp)

Convex collider in edit mode:

![Editing convex mesh collider in edit mode](https://b3dhub.github.io/addons/images/blender-to-unity/convex_editmode.webp)

Custom convex collider:

![Custom convex mesh collider from selected geometry](https://b3dhub.github.io/addons/images/blender-to-unity/convex_custom.webp)

Convex collider with V-HACD:

![Automatic convex decomposition using V-HACD](https://b3dhub.github.io/addons/images/blender-to-unity/convex_vhacd.webp)

## [LOD](https://b3dhub.github.io/blender-to-unity-docs/lod.html)

Create, Update, and Preset LODs.

![LOD management panel in addon interface](https://b3dhub.github.io/addons/images/blender-to-unity/lods.png)

### [Create](https://b3dhub.github.io/blender-to-unity-docs/lod.html#create)

Create LODs for the selected objects.

![Creating LOD levels for selected objects](https://b3dhub.github.io/addons/images/blender-to-unity/lod_create.gif)

### [Update](https://b3dhub.github.io/blender-to-unity-docs/lod.html#update)

Update LODs for the selected objects.

![Updating existing LOD levels with new settings](https://b3dhub.github.io/addons/images/blender-to-unity/lod_update.gif)

### [Preset](https://b3dhub.github.io/blender-to-unity-docs/lod.html#preset)

Preset LODs for future use.

![Saving and loading LOD presets for reuse](https://b3dhub.github.io/addons/images/blender-to-unity/lod_preset.gif)

## [Rename Tool](https://b3dhub.github.io/blender-to-unity-docs/tool.html)

Rename objects and its Colliders and LODs.

![Renaming objects with colliders and LODs automatically](https://b3dhub.github.io/addons/images/blender-to-unity/rename.gif)

## [Export](https://b3dhub.github.io/blender-to-unity-docs/export.html)

Export objects and collections to Unity or Disk.

- Add a folder path.
- Select the objects or collections.
- Hit export.

![Exporting objects to Unity with colliders and LODs](https://b3dhub.github.io/addons/images/blender-to-unity/export.gif)

If you want to have colliders and create shader types in Unity automatically.

- Import the `BUImporter_v3` script while the Unity project is open (drag-n-drop), it should compile the script.
- Install the `com.unity.nuget.newtonsoft-json` unity package (required for BUImporter_v3).

To install the `com.unity.nuget.newtonsoft-json` package in Unity:

1. Open Unity Package Manager, go to `Window > Package Manager` in the Unity Editor.
2. Add Package by name, click the `+` button in the top left corner of the Package Manager window.
3. Enter `com.unity.nuget.newtonsoft-json` as package name.

- learn more: [https://github.com/applejag/Newtonsoft.Json-for-Unity/wiki/Install-official-via-UPM#installing-the-package-via-upm-window](https://github.com/applejag/Newtonsoft.Json-for-Unity/wiki/Install-official-via-UPM#installing-the-package-via-upm-window)

## Support

Join our Discord server to stay updated.

[![B3dHub Discord server widget](https://discord.com/api/guilds/959138815602229389/widget.png?theme=dark&style=banner3)](https://discord.gg/sdnHHZpWbT)

## Changelogs

[View Changelogs](https://discord.com/channels/959138815602229389/965691425557721159)
