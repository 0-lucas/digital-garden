'use strict';

var Matrix = require('../../../maths/matrix/Matrix.js');
var Bounds = require('../bounds/Bounds.js');
var matrixAndBoundsPool = require('../bounds/utils/matrixAndBoundsPool.js');

"use strict";
const tempMatrix = new Matrix.Matrix();
const getFastGlobalBoundsMixin = {
  /**
   * Computes the global bounds for the container, considering its children and optionally
   * factoring in render layers. It starts by clearing the provided bounds object, then
   * recursively calculates the bounds, and finally applies the world transformation.
   * @param {boolean} [factorRenderLayers] - Whether to consider render layers in the calculation.
   * @param {Bounds} [bounds] - The bounds object to store the result. If not provided, a new one is created.
   * @returns {Bounds} The computed bounds.
   * @memberof scene.Container#
   */
  getFastGlobalBounds(factorRenderLayers, bounds) {
    bounds || (bounds = new Bounds.Bounds());
    bounds.clear();
    this._getGlobalBoundsRecursive(!!factorRenderLayers, bounds, this.parentRenderLayer);
    if (!bounds.isValid) {
      bounds.set(0, 0, 0, 0);
    }
    const renderGroup = this.renderGroup || this.parentRenderGroup;
    bounds.applyMatrix(renderGroup.worldTransform);
    return bounds;
  },
  /**
   * Recursively calculates the global bounds for the container and its children.
   * It considers visibility, measurability, and effects, and applies transformations
   * as necessary to compute the bounds accurately.
   * @param {boolean} factorRenderLayers - Whether to consider render layers in the calculation.
   * @param {Bounds} bounds - The bounds object to update with the calculated values.
   * @param {IRenderLayer} currentLayer - The current render layer being processed.
   * @memberof scene.Container#
   */
  _getGlobalBoundsRecursive(factorRenderLayers, bounds, currentLayer) {
    let localBounds = bounds;
    if (factorRenderLayers && this.parentRenderLayer && this.parentRenderLayer !== currentLayer)
      return;
    if (this.localDisplayStatus !== 7 || !this.measurable) {
      return;
    }
    const manageEffects = !!this.effects.length;
    if (this.renderGroup || manageEffects) {
      localBounds = matrixAndBoundsPool.boundsPool.get().clear();
    }
    if (this.boundsArea) {
      bounds.addRect(this.boundsArea, this.worldTransform);
    } else {
      if (this.renderPipeId) {
        const viewBounds = this.bounds;
        localBounds.addFrame(
          viewBounds.minX,
          viewBounds.minY,
          viewBounds.maxX,
          viewBounds.maxY,
          this.groupTransform
        );
      }
      const children = this.children;
      for (let i = 0; i < children.length; i++) {
        children[i]._getGlobalBoundsRecursive(factorRenderLayers, localBounds, currentLayer);
      }
    }
    if (manageEffects) {
      let advanced = false;
      const renderGroup = this.renderGroup || this.parentRenderGroup;
      for (let i = 0; i < this.effects.length; i++) {
        if (this.effects[i].addBounds) {
          if (!advanced) {
            advanced = true;
            localBounds.applyMatrix(renderGroup.worldTransform);
          }
          this.effects[i].addBounds(localBounds, true);
        }
      }
      if (advanced) {
        localBounds.applyMatrix(renderGroup.worldTransform.copyTo(tempMatrix).invert());
        bounds.addBounds(localBounds, this.relativeGroupTransform);
      }
      bounds.addBounds(localBounds);
      matrixAndBoundsPool.boundsPool.return(localBounds);
    } else if (this.renderGroup) {
      bounds.addBounds(localBounds, this.relativeGroupTransform);
      matrixAndBoundsPool.boundsPool.return(localBounds);
    }
  }
};

exports.getFastGlobalBoundsMixin = getFastGlobalBoundsMixin;
//# sourceMappingURL=getFastGlobalBoundsMixin.js.map
