'use strict';

"use strict";
const collectRenderablesMixin = {
  /**
   * Main method to collect renderables from the container and its children.
   * It checks the container's properties to decide whether to use a simple or advanced collection method.
   * @param {InstructionSet} instructionSet - The set of instructions to which the renderables will be added.
   * @param {Renderer} renderer - The renderer responsible for rendering the scene.
   * @param {IRenderLayer} currentLayer - The current render layer being processed.
   * @memberof scene.Container#
   */
  collectRenderables(instructionSet, renderer, currentLayer) {
    if (this.parentRenderLayer && this.parentRenderLayer !== currentLayer || this.globalDisplayStatus < 7 || !this.includeInBuild)
      return;
    if (this.sortableChildren) {
      this.sortChildren();
    }
    if (this.isSimple) {
      this.collectRenderablesSimple(instructionSet, renderer, currentLayer);
    } else if (this.renderGroup) {
      renderer.renderPipes.renderGroup.addRenderGroup(this.renderGroup, instructionSet);
    } else {
      this.collectRenderablesWithEffects(instructionSet, renderer, currentLayer);
    }
  },
  /**
   * Simple method for collecting renderables from the container's children.
   * This method is efficient and used when the container is marked as simple.
   * @param {InstructionSet} instructionSet - The set of instructions to which the renderables will be added.
   * @param {Renderer} renderer - The renderer responsible for rendering the scene.
   * @param {IRenderLayer} currentLayer - The current render layer being processed.
   * @memberof scene.Container#
   */
  collectRenderablesSimple(instructionSet, renderer, currentLayer) {
    const children = this.children;
    const length = children.length;
    for (let i = 0; i < length; i++) {
      children[i].collectRenderables(instructionSet, renderer, currentLayer);
    }
  },
  /**
   * Advanced method for collecting renderables, which handles additional effects.
   * This method is used when the container has complex processing needs.
   * @param {InstructionSet} instructionSet - The set of instructions to which the renderables will be added.
   * @param {Renderer} renderer - The renderer responsible for rendering the scene.
   * @param {IRenderLayer} currentLayer - The current render layer being processed.
   * @memberof scene.Container#
   */
  collectRenderablesWithEffects(instructionSet, renderer, currentLayer) {
    const { renderPipes } = renderer;
    for (let i = 0; i < this.effects.length; i++) {
      const effect = this.effects[i];
      const pipe = renderPipes[effect.pipe];
      pipe.push(effect, this, instructionSet);
    }
    this.collectRenderablesSimple(instructionSet, renderer, currentLayer);
    for (let i = this.effects.length - 1; i >= 0; i--) {
      const effect = this.effects[i];
      const pipe = renderPipes[effect.pipe];
      pipe.pop(effect, this, instructionSet);
    }
  }
};

exports.collectRenderablesMixin = collectRenderablesMixin;
//# sourceMappingURL=collectRenderablesMixin.js.map
