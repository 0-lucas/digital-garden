'use strict';

var warn = require('../../utils/logging/warn.js');
var Container = require('../container/Container.js');

"use strict";
const _RenderLayerClass = class _RenderLayerClass extends Container.Container {
  /**
   * Creates a new RenderLayer instance
   * @param options - Configuration options for the RenderLayer
   * @param {boolean} [options.sortableChildren=false] - If true, layer children will be automatically sorted each render
   * @param {Function} [options.sortFunction] - Custom function to sort layer children. Default sorts by zIndex
   */
  constructor(options = {}) {
    options = { ..._RenderLayerClass.defaultOptions, ...options };
    super();
    /** List of objects to be rendered by this layer */
    this.renderLayerChildren = [];
    this.sortableChildren = options.sortableChildren;
    this.sortFunction = options.sortFunction;
  }
  /**
   * Add an Container to this render layer. The Container will be rendered as part of this layer
   * while maintaining its original parent in the scene graph.
   * If the Container already belongs to a layer, it will be removed from the old layer before being added to this one.
   * @param children - The Container(s) to add to this layer
   */
  attach(...children) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.parentRenderLayer) {
        if (child.parentRenderLayer === this)
          continue;
        child.parentRenderLayer.detach(child);
      }
      this.renderLayerChildren.push(child);
      child.parentRenderLayer = this;
      const renderGroup = this.renderGroup || this.parentRenderGroup;
      if (renderGroup) {
        renderGroup.structureDidChange = true;
      }
    }
    return children[0];
  }
  /**
   * Remove an Container from this render layer. The Container will no longer be rendered
   * as part of this layer but maintains its original parent.
   * @param children - The Container(s) to remove from this layer
   */
  detach(...children) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const index = this.renderLayerChildren.indexOf(child);
      if (index !== -1) {
        this.renderLayerChildren.splice(index, 1);
      }
      child.parentRenderLayer = null;
      const renderGroup = this.renderGroup || this.parentRenderGroup;
      if (renderGroup) {
        renderGroup.structureDidChange = true;
      }
    }
    return children[0];
  }
  /** Remove all objects from this render layer. */
  detachAll() {
    const layerChildren = this.renderLayerChildren;
    for (let i = 0; i < layerChildren.length; i++) {
      layerChildren[i].parentRenderLayer = null;
    }
    this.renderLayerChildren.length = 0;
  }
  collectRenderables(instructionSet, renderer, _currentLayer) {
    const layerChildren = this.renderLayerChildren;
    const length = layerChildren.length;
    if (this.sortableChildren) {
      this.sortRenderLayerChildren();
    }
    for (let i = 0; i < length; i++) {
      if (!layerChildren[i].parent) {
        warn.warn(
          "Container must be added to both layer and scene graph. Layers only handle render order - the scene graph is required for transforms (addChild)",
          layerChildren[i]
        );
      }
      layerChildren[i].collectRenderables(instructionSet, renderer, this);
    }
  }
  /**
   * Sort the layer's children using the defined sort function.
   * Will be called each render if sortableChildren is true.
   * Otherwise can call this manually.
   */
  sortRenderLayerChildren() {
    this.renderLayerChildren.sort(this.sortFunction);
  }
  _getGlobalBoundsRecursive(factorRenderLayers, bounds, _currentLayer) {
    if (!factorRenderLayers)
      return;
    const children = this.renderLayerChildren;
    for (let i = 0; i < children.length; i++) {
      children[i]._getGlobalBoundsRecursive(true, bounds, this);
    }
  }
};
/**
 * Default options for RenderLayer instances
 * @property {boolean} sortableChildren - If true, layer children will be automatically sorted each render.
 * Default false.
 * @property {Function} sortFunction - Function used to sort layer children. Default sorts by zIndex.
 */
_RenderLayerClass.defaultOptions = {
  sortableChildren: false,
  sortFunction: (a, b) => a.zIndex - b.zIndex
};
let RenderLayerClass = _RenderLayerClass;
const RenderLayer = RenderLayerClass;

exports.RenderLayer = RenderLayer;
exports.RenderLayerClass = RenderLayerClass;
//# sourceMappingURL=RenderLayer.js.map
