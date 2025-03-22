'use strict';

var Bounds = require('../container/bounds/Bounds.js');
var Container = require('../container/Container.js');

"use strict";
class ViewContainer extends Container.Container {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(options) {
    super(options);
    /** @private */
    this.canBundle = true;
    /** @private */
    this.allowChildren = false;
    /** @private */
    this._roundPixels = 0;
    /** @private */
    this._lastUsed = -1;
    this._bounds = new Bounds.Bounds(0, 1, 0, 0);
    this._boundsDirty = true;
  }
  /**
   * The local bounds of the view.
   * @type {rendering.Bounds}
   */
  get bounds() {
    if (!this._boundsDirty)
      return this._bounds;
    this.updateBounds();
    this._boundsDirty = false;
    return this._bounds;
  }
  /**
   * Whether or not to round the x/y position of the sprite.
   * @type {boolean}
   */
  get roundPixels() {
    return !!this._roundPixels;
  }
  set roundPixels(value) {
    this._roundPixels = value ? 1 : 0;
  }
  /**
   * Checks if the object contains the given point.
   * @param point - The point to check
   */
  containsPoint(point) {
    const bounds = this.bounds;
    const { x, y } = point;
    return x >= bounds.minX && x <= bounds.maxX && y >= bounds.minY && y <= bounds.maxY;
  }
  /** @private */
  onViewUpdate() {
    this._didViewChangeTick++;
    this._boundsDirty = true;
    if (this.didViewUpdate)
      return;
    this.didViewUpdate = true;
    const renderGroup = this.renderGroup || this.parentRenderGroup;
    if (renderGroup) {
      renderGroup.onChildViewUpdate(this);
    }
  }
  destroy(options) {
    super.destroy(options);
    this._bounds = null;
  }
  collectRenderablesSimple(instructionSet, renderer, currentLayer) {
    const { renderPipes, renderableGC } = renderer;
    renderPipes.blendMode.setBlendMode(this, this.groupBlendMode, instructionSet);
    const rp = renderPipes;
    rp[this.renderPipeId].addRenderable(this, instructionSet);
    renderableGC.addRenderable(this);
    this.didViewUpdate = false;
    const children = this.children;
    const length = children.length;
    for (let i = 0; i < length; i++) {
      children[i].collectRenderables(instructionSet, renderer, currentLayer);
    }
  }
}

exports.ViewContainer = ViewContainer;
//# sourceMappingURL=ViewContainer.js.map
