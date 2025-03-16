'use strict';

var Extensions = require('../../extensions/Extensions.js');
var PoolGroup = require('../../utils/pool/PoolGroup.js');
var BatchableMesh = require('../mesh/shared/BatchableMesh.js');
var NineSliceGeometry = require('./NineSliceGeometry.js');

"use strict";
class NineSliceSpritePipe {
  constructor(renderer) {
    this._gpuSpriteHash = /* @__PURE__ */ Object.create(null);
    this._destroyRenderableBound = this.destroyRenderable.bind(this);
    this._renderer = renderer;
    this._renderer.renderableGC.addManagedHash(this, "_gpuSpriteHash");
  }
  addRenderable(sprite, instructionSet) {
    const gpuSprite = this._getGpuSprite(sprite);
    if (sprite.didViewUpdate)
      this._updateBatchableSprite(sprite, gpuSprite);
    this._renderer.renderPipes.batch.addToBatch(gpuSprite, instructionSet);
  }
  updateRenderable(sprite) {
    const gpuSprite = this._gpuSpriteHash[sprite.uid];
    if (sprite.didViewUpdate)
      this._updateBatchableSprite(sprite, gpuSprite);
    gpuSprite._batcher.updateElement(gpuSprite);
  }
  validateRenderable(sprite) {
    const gpuSprite = this._getGpuSprite(sprite);
    return !gpuSprite._batcher.checkAndUpdateTexture(
      gpuSprite,
      sprite._texture
    );
  }
  destroyRenderable(sprite) {
    const batchableMesh = this._gpuSpriteHash[sprite.uid];
    PoolGroup.BigPool.return(batchableMesh.geometry);
    PoolGroup.BigPool.return(batchableMesh);
    this._gpuSpriteHash[sprite.uid] = null;
    sprite.off("destroyed", this._destroyRenderableBound);
  }
  _updateBatchableSprite(sprite, batchableSprite) {
    batchableSprite.geometry.update(sprite);
    batchableSprite.setTexture(sprite._texture);
  }
  _getGpuSprite(sprite) {
    return this._gpuSpriteHash[sprite.uid] || this._initGPUSprite(sprite);
  }
  _initGPUSprite(sprite) {
    const batchableMesh = PoolGroup.BigPool.get(BatchableMesh.BatchableMesh);
    batchableMesh.geometry = PoolGroup.BigPool.get(NineSliceGeometry.NineSliceGeometry);
    batchableMesh.renderable = sprite;
    batchableMesh.transform = sprite.groupTransform;
    batchableMesh.texture = sprite._texture;
    batchableMesh.roundPixels = this._renderer._roundPixels | sprite._roundPixels;
    this._gpuSpriteHash[sprite.uid] = batchableMesh;
    if (!sprite.didViewUpdate) {
      this._updateBatchableSprite(sprite, batchableMesh);
    }
    sprite.on("destroyed", this._destroyRenderableBound);
    return batchableMesh;
  }
  destroy() {
    for (const i in this._gpuSpriteHash) {
      const batchableMesh = this._gpuSpriteHash[i];
      batchableMesh.geometry.destroy();
    }
    this._gpuSpriteHash = null;
    this._renderer = null;
  }
}
/** @ignore */
NineSliceSpritePipe.extension = {
  type: [
    Extensions.ExtensionType.WebGLPipes,
    Extensions.ExtensionType.WebGPUPipes,
    Extensions.ExtensionType.CanvasPipes
  ],
  name: "nineSliceSprite"
};

exports.NineSliceSpritePipe = NineSliceSpritePipe;
//# sourceMappingURL=NineSliceSpritePipe.js.map
