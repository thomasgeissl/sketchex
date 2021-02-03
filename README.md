# sketchex

sketch cli exporter

It exports

- all pages
- all artboards
- all slices (exportables, e.g. artboards, groups)
- all layers, even the none exportable ones (artboards, groups, subgroups, subsubgroups, ..., items)

and creates framerx code components.

Additionally it creates a layout (should probably be renamed) component for each layer to enable/disable child layers and to add children via the framer ide.

Sketch is osx only, hence sketchex only runs on osx.

## status
Use at your own risk, it is still very likely outdated.


## usage

- installation: `npm install -g https://github.com/thomasgeissl/sketchex.git`
- export: `sketchex framerx sketchfilepath outputdir`

## supported output platforms

- framerx
- react

## Credits
Many thanks to [Nick Bratton](https://github.com/nick-bratton) for lot of improvements.


