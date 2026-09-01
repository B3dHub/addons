## Introduction

Blender-to-Unreal is a Blender addon that exports objects, animations, collisions, sockets, and LODs to Unreal Engine. It is designed to be simple and easy to use. You can export your models to Unreal Engine with just a few clicks. This addon is perfect for game developers, architects, and 3D artists who want to export their models to Unreal Engine. Get Blender-to-Unreal today and start exporting your models to Unreal Engine with ease!

## Why to choose Blender-to-Unreal?

- Object Export
- Collection Export
- Collision Export
- Socket Export
- LOD Export
- Animation Export
- Rename Tool
- Edge Decal Tool
- Vehicle Rigging
- Export to Unreal
- Export to Disk
- Clean UI/UX

## [Collision](https://b3dhub.github.io/blender-to-unreal-docs/collision.html)

Add auto and custom collision.

![Collision types panel in addon interface](https://b3dhub.github.io/addons/images/blender-to-unreal/collisions.png)

### [Box](https://b3dhub.github.io/blender-to-unreal-docs/collision.html#box)

Box collision will create based on the bounding box of the selection.

Creating box collision:

![Creating box collision from object bounds](https://b3dhub.github.io/addons/images/blender-to-unreal/box.webp)

Box collision in edit mode:

![Editing box collision in edit mode](https://b3dhub.github.io/addons/images/blender-to-unreal/box_editmode.webp)

Custom box collision:

![Custom box collision from selected faces](https://b3dhub.github.io/addons/images/blender-to-unreal/box_custom.webp)

### [Capsule](https://b3dhub.github.io/blender-to-unreal-docs/collision.html#capsule)

Capsule collision will create based on the bounding box and the depth of the selection.

Creating capsule collision:

![Creating capsule collision from object bounds](https://b3dhub.github.io/addons/images/blender-to-unreal/capsule.webp)

Capsule collision in edit mode:

![Editing capsule collision in edit mode](https://b3dhub.github.io/addons/images/blender-to-unreal/capsule_editmode.webp)

Custom capsule collision:

![Custom capsule collision from selected faces](https://b3dhub.github.io/addons/images/blender-to-unreal/capsule_custom.webp)

### [Sphere](https://b3dhub.github.io/blender-to-unreal-docs/collision.html#sphere)

Sphere collision will create based on the bounding box of the selection.

Creating sphere collision:

![Creating sphere collision from object bounds](https://b3dhub.github.io/addons/images/blender-to-unreal/sphere.webp)

Sphere collision in edit mode:

![Editing sphere collision in edit mode](https://b3dhub.github.io/addons/images/blender-to-unreal/sphere_editmode.webp)

Custom sphere collision:

![Custom sphere collision from selected faces](https://b3dhub.github.io/addons/images/blender-to-unreal/sphere_custom.webp)

### [Cylinder](https://b3dhub.github.io/blender-to-unreal-docs/collision.html#cylinder)

Cylinder collision will create based on the bounding box and the depth of the selection.

Creating cylinder collision:

![Creating cylinder collision from object bounds](https://b3dhub.github.io/addons/images/blender-to-unreal/cylinder.webp)

Cylinder collision in edit mode:

![Editing cylinder collision in edit mode](https://b3dhub.github.io/addons/images/blender-to-unreal/cylinder_editmode.webp)

### [Convex](https://b3dhub.github.io/blender-to-unreal-docs/collision.html#convex)

Convex collision will create based on the selection.

Creating convex collision:

![Creating convex collision from object mesh](https://b3dhub.github.io/addons/images/blender-to-unreal/convex.webp)

Convex collision in edit mode:

![Editing convex collision in edit mode](https://b3dhub.github.io/addons/images/blender-to-unreal/convex_editmode.webp)

Custom convex collision:

![Custom convex collision from selected geometry](https://b3dhub.github.io/addons/images/blender-to-unreal/convex_custom.webp)

Convex collision with V-HACD:

![Automatic convex decomposition using V-HACD](https://b3dhub.github.io/addons/images/blender-to-unreal/convex_vhacd.webp)

## [Socket](https://b3dhub.github.io/blender-to-unreal-docs/socket.html)

Add socket to the selected objects.

![Socket creation panel in addon interface](https://b3dhub.github.io/addons/images/blender-to-unreal/socket.png)

### [Mesh](https://b3dhub.github.io/blender-to-unreal-docs/socket.html#box)

Mesh socket will create in the 3d cursor location.

Creating mesh socket:

![Creating mesh socket at cursor location](https://b3dhub.github.io/addons/images/blender-to-unreal/socket.webp)

Mesh socket in edit mode:

![Positioning socket in edit mode](https://b3dhub.github.io/addons/images/blender-to-unreal/socket_editmode.webp)

Custom mesh socket:

![Custom socket attached to mesh surface](https://b3dhub.github.io/addons/images/blender-to-unreal/socket_custom.webp)

## [LOD](https://b3dhub.github.io/blender-to-unreal-docs/lod.html)

Create, Update, and Preset LODs.

![LOD management panel in addon interface](https://b3dhub.github.io/addons/images/blender-to-unreal/lods.png)

### [Create](https://b3dhub.github.io/blender-to-unreal-docs/lod.html#create)

Create LODs for the selected objects.

![Creating LOD levels for selected objects](https://b3dhub.github.io/addons/images/blender-to-unreal/lod_create.gif)

### [Update](https://b3dhub.github.io/blender-to-unreal-docs/lod.html#update)

Update LODs for the selected objects.

![Updating existing LOD levels with new settings](https://b3dhub.github.io/addons/images/blender-to-unreal/lod_update.gif)

### [Preset](https://b3dhub.github.io/blender-to-unreal-docs/lod.html#preset)

Preset LODs for future use.

![Saving and loading LOD presets for reuse](https://b3dhub.github.io/addons/images/blender-to-unreal/lod_preset.gif)

## [Rename Tool](https://b3dhub.github.io/blender-to-unreal-docs/tool.html)

Rename objects and its Collisions and LODs.

![Renaming objects with collisions and LODs automatically](https://b3dhub.github.io/addons/images/blender-to-unreal/rename.gif)

## Vehicle Rigging

You need a vehicle body and wheels named `Wheel` parented to it. You can load them manually if the names don't match, or use the `Load Vehicle Wheels` operator. Once loaded, just press the `Rig` operator. The bones will be added to the object's origin.

> Note: The vehicle body needs to be facing in the +X axis.

![Automatically rigging vehicle with wheel bones](https://b3dhub.github.io/addons/images/blender-to-unreal/vehicle_rigging.gif)

## [Export](https://b3dhub.github.io/blender-to-unreal-docs/export.html)

Export objects and collections to Unreal or Disk.

- Add a folder path.
- Select the objects or collections.
- Hit export.

![Exporting objects to Unreal Engine with collisions and LODs](https://b3dhub.github.io/addons/images/blender-to-unreal/export.gif)

## Support

Join our Discord server to stay updated.

[![B3dHub Discord server widget](https://discord.com/api/guilds/959138815602229389/widget.png?theme=dark&style=banner3)](https://discord.gg/sdnHHZpWbT)

## Changelogs

[View Changelogs](https://discord.com/channels/959138815602229389/959152281058697216)
