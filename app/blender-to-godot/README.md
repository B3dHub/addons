## Introduction

Blender-to-Godot is a Blender addon that exports objects, animations, collisions and components to Godot Engine. It is designed to be simple and easy to use. You can export your models to Godot Engine with just a few clicks. This addon is perfect for game developers, architects, and 3D artists who want to export their models to Godot Engine. Get Blender-to-Godot today and start exporting your models to Godot Engine with ease!

## Why to choose Blender-to-Godot?

- Object Export
- Collection Export
- Collision Export
- Component Export
- Animation Export
- Rename Tool
- Export to Godot
- Export to Disk
- Clean UI/UX

## [Collision](https://b3dhub.github.io/blender-to-godot-docs/collision.html)

Add auto and custom collision.

![Collision types panel in addon interface](https://b3dhub.github.io/addons/images/blender-to-godot/ui_collision.png)

### [Box](https://b3dhub.github.io/blender-to-godot-docs/collision.html#box)

Box collision will create based on the bounding box of the selection.

Creating box collision:

![Creating box collision from object bounds](https://b3dhub.github.io/addons/images/blender-to-godot/box.gif)

Box collision in edit mode:

![Editing box collision in edit mode](https://b3dhub.github.io/addons/images/blender-to-godot/box_editmode.gif)

Custom box collision:

![Custom box collision from selected faces](https://b3dhub.github.io/addons/images/blender-to-godot/box_custom.gif)

### [Capsule](https://b3dhub.github.io/blender-to-godot-docs/collision.html#capsule)

Capsule collision will create based on the bounding box and the depth of the selection.

Creating capsule collision:

![Creating capsule collision from object bounds](https://b3dhub.github.io/addons/images/blender-to-godot/capsule.gif)

Capsule collision in edit mode:

![Editing capsule collision in edit mode](https://b3dhub.github.io/addons/images/blender-to-godot/capsule_editmode.gif)

Custom capsule collision:

![Custom capsule collision from selected faces](https://b3dhub.github.io/addons/images/blender-to-godot/capsule_custom.gif)

### [Sphere](https://b3dhub.github.io/blender-to-godot-docs/collision.html#sphere)

Sphere collision will create based on the bounding box of the selection.

Creating sphere collision:

![Creating sphere collision from object bounds](https://b3dhub.github.io/addons/images/blender-to-godot/sphere.gif)

Sphere collision in edit mode:

![Editing sphere collision in edit mode](https://b3dhub.github.io/addons/images/blender-to-godot/sphere_editmode.gif)

Custom sphere collision:

![Custom sphere collision from selected faces](https://b3dhub.github.io/addons/images/blender-to-godot/sphere_custom.gif)

### [Cylinder](https://b3dhub.github.io/blender-to-godot-docs/collision.html#cylinder)

Cylinder collision will create based on the bounding box and the depth of the selection.

Creating cylinder collision:

![Creating cylinder collision from object bounds](https://b3dhub.github.io/addons/images/blender-to-godot/cylinder.gif)

Cylinder collision in edit mode:

![Editing cylinder collision in edit mode](https://b3dhub.github.io/addons/images/blender-to-godot/cylinder_editmode.gif)

Custom cylinder collision:

![Custom cylinder collision from selected faces](https://b3dhub.github.io/addons/images/blender-to-godot/cylinder_custom.gif)

### [Convex](https://b3dhub.github.io/blender-to-godot-docs/collision.html#convex)

Convex collision will create based on the selection.

Creating convex collision:

![Creating convex collision from object mesh](https://b3dhub.github.io/addons/images/blender-to-godot/convex.gif)

Convex collision in edit mode:

![Editing convex collision in edit mode](https://b3dhub.github.io/addons/images/blender-to-godot/convex_editmode.gif)

Custom convex collision:

![Custom convex collision from selected geometry](https://b3dhub.github.io/addons/images/blender-to-godot/convex_custom.gif)

Convex collision with V-HACD:

![Automatic convex decomposition using V-HACD](https://b3dhub.github.io/addons/images/blender-to-godot/convex_vhacd.gif)

## [Component](https://b3dhub.github.io/blender-to-godot-docs/component.html)

Create component such as Navmesh, Rigid body etc.

![Component types panel in addon interface](https://b3dhub.github.io/addons/images/blender-to-godot/ui_component.png)

### [Navmesh](https://b3dhub.github.io/blender-to-godot-docs/component.html#navmesh)

Create navigation (-navmesh)

A mesh node with the `-navmesh` suffix will be converted to a navigation mesh. The original Mesh object will be removed at import-time.

### [Occluder](https://b3dhub.github.io/blender-to-godot-docs/component.html#occluder)

Create Occluder (-occonly)

If a mesh is imported with the `-occ` suffix an [Occluder3D](https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/node_type_customization.html#create-navigation-navmesh) node will be created based on the geometry of the mesh, it does not replace the mesh. A mesh node with the `-occonly` suffix will be converted to an [Occluder3D](https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/node_type_customization.html#create-navigation-navmesh) on import.

### [Rigid Body](https://b3dhub.github.io/blender-to-godot-docs/component.html#rigid-body)

Rigid Body (-rigid)

A mesh node with the `-rigid` suffix will be imported as a [RigidBody3D](https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/node_type_customization.html#create-navigation-navmesh).

### [Vehicle Body](https://b3dhub.github.io/blender-to-godot-docs/component.html#vehicle-body)

Create a VehicleBody (-vehicle)

A mesh node with the `-vehicle` suffix will be imported as a child to a [VehicleBody3D](https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/node_type_customization.html#create-navigation-navmesh) node.

### [Vehicle Wheel](https://b3dhub.github.io/blender-to-godot-docs/component.html#vehicle-wheel)

Create a VehicleWheel (-wheel)

A mesh node with the `-wheel` suffix will be imported as a child to a [VehicleWheel3D](https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/node_type_customization.html#create-navigation-navmesh) node.

## [Rename Tool](https://b3dhub.github.io/blender-to-godot-docs/tool.html)

Rename object and its collisions.

![Renaming objects with collisions automatically](https://b3dhub.github.io/addons/images/blender-to-godot/rename.gif)

## [Export](https://b3dhub.github.io/blender-to-godot-docs/export.html)

Export objects and collections to Godot or Disk.

- Add a folder path.
- Select the objects or collections.
- Hit export.

![Exporting objects to Godot Engine with collisions and components](https://b3dhub.github.io/addons/images/blender-to-godot/export.gif)

## Support

Join our Discord server to stay updated.

[![B3dHub Discord server widget](https://discord.com/api/guilds/959138815602229389/widget.png?theme=dark&style=banner3)](https://discord.gg/sdnHHZpWbT)
