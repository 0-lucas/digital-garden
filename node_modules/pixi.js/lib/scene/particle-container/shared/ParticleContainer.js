'use strict';

var Bounds = require('../../container/bounds/Bounds.js');
var ViewContainer = require('../../view/ViewContainer.js');
var particleData = require('./particleData.js');

"use strict";
const emptyBounds = new Bounds.Bounds(0, 0, 0, 0);
const _ParticleContainer = class _ParticleContainer extends ViewContainer.ViewContainer {
  /**
   * @param options - The options for creating the sprite.
   */
  constructor(options = {}) {
    options = {
      ..._ParticleContainer.defaultOptions,
      ...options,
      dynamicProperties: {
        ..._ParticleContainer.defaultOptions.dynamicProperties,
        ...options?.dynamicProperties
      }
    };
    const { dynamicProperties, shader, roundPixels, texture, particles, ...rest } = options;
    super({
      label: "ParticleContainer",
      ...rest
    });
    /** The unique identifier for the render pipe of this ParticleContainer. */
    this.renderPipeId = "particle";
    this.batched = false;
    /** Indicates if the children of this ParticleContainer have changed and need to be updated. */
    this._childrenDirty = false;
    this.texture = texture || null;
    this.shader = shader;
    this._properties = {};
    for (const key in particleData.particleData) {
      const property = particleData.particleData[key];
      const dynamic = dynamicProperties[key];
      this._properties[key] = {
        ...property,
        dynamic
      };
    }
    this.allowChildren = true;
    this.roundPixels = roundPixels ?? false;
    this.particleChildren = particles ?? [];
  }
  /**
   * Adds one or more particles to the container.
   *
   * Multiple items can be added like so: `myContainer.addParticle(thingOne, thingTwo, thingThree)`
   * @param {...IParticle} children - The Particle(s) to add to the container
   * @returns {IParticle} - The first child that was added.
   */
  addParticle(...children) {
    for (let i = 0; i < children.length; i++) {
      this.particleChildren.push(children[i]);
    }
    this.onViewUpdate();
    return children[0];
  }
  /**
   * Removes one or more particles from the container.
   * @param {...IParticle} children - The Particle(s) to remove
   * @returns {IParticle} The first child that was removed.
   */
  removeParticle(...children) {
    let didRemove = false;
    for (let i = 0; i < children.length; i++) {
      const index = this.particleChildren.indexOf(children[i]);
      if (index > -1) {
        this.particleChildren.splice(index, 1);
        didRemove = true;
      }
    }
    if (didRemove)
      this.onViewUpdate();
    return children[0];
  }
  /**
   * Updates the particle container.
   * Please call this when you modify the particleChildren array.
   * or any static properties of the particles.
   */
  update() {
    this._childrenDirty = true;
  }
  onViewUpdate() {
    this._childrenDirty = true;
    super.onViewUpdate();
  }
  /**
   * ParticleContainer does not calculated bounds as it would slow things down,
   * its up to you to set this via the boundsArea property
   */
  get bounds() {
    return emptyBounds;
  }
  /** @private */
  updateBounds() {
  }
  /**
   * Destroys this sprite renderable and optionally its texture.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.texture=false] - Should it destroy the current texture of the renderable as well
   * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the renderable as well
   */
  destroy(options = false) {
    super.destroy(options);
    const destroyTexture = typeof options === "boolean" ? options : options?.texture;
    if (destroyTexture) {
      const destroyTextureSource = typeof options === "boolean" ? options : options?.textureSource;
      const texture = this.texture ?? this.particleChildren[0]?.texture;
      if (texture) {
        texture.destroy(destroyTextureSource);
      }
    }
    this.texture = null;
    this.shader?.destroy();
  }
  /**
   * Removes all particles from this container that are within the begin and end indexes.
   * @param beginIndex - The beginning position.
   * @param endIndex - The ending position. Default value is size of the container.
   * @returns - List of removed particles
   */
  removeParticles(beginIndex, endIndex) {
    const children = this.particleChildren.splice(beginIndex, endIndex);
    this.onViewUpdate();
    return children;
  }
  /**
   * Removes a particle from the specified index position.
   * @param index - The index to get the particle from
   * @returns The particle that was removed.
   */
  removeParticleAt(index) {
    const child = this.particleChildren.splice(index, 1);
    this.onViewUpdate();
    return child[0];
  }
  /**
   * Adds a particle to the container at a specified index. If the index is out of bounds an error will be thrown.
   * If the particle is already in this container, it will be moved to the specified index.
   * @param {Container} child - The particle to add.
   * @param {number} index - The absolute index where the particle will be positioned at the end of the operation.
   * @returns {Container} The particle that was added.
   */
  addParticleAt(child, index) {
    this.particleChildren.splice(index, 0, child);
    this.onViewUpdate();
    return child;
  }
  /**
   * This method is not available in ParticleContainer.
   *
   * Calling this method will throw an error. Please use `ParticleContainer.addParticle()` instead.
   * @param {...any} _children
   * @throws {Error} Always throws an error as this method is not available.
   */
  addChild(..._children) {
    throw new Error(
      "ParticleContainer.addChild() is not available. Please use ParticleContainer.addParticle()"
    );
  }
  /**
   * This method is not available in ParticleContainer.
   * Calling this method will throw an error. Please use `ParticleContainer.removeParticle()` instead.
   * @param {...any} _children
   * @throws {Error} Always throws an error as this method is not available.
   */
  removeChild(..._children) {
    throw new Error(
      "ParticleContainer.removeChild() is not available. Please use ParticleContainer.removeParticle()"
    );
  }
  /**
   * This method is not available in ParticleContainer.
   *
   * Calling this method will throw an error. Please use `ParticleContainer.removeParticles()` instead.
   * @param {number} [_beginIndex]
   * @param {number} [_endIndex]
   * @throws {Error} Always throws an error as this method is not available.
   */
  removeChildren(_beginIndex, _endIndex) {
    throw new Error(
      "ParticleContainer.removeChildren() is not available. Please use ParticleContainer.removeParticles()"
    );
  }
  /**
   * This method is not available in ParticleContainer.
   *
   * Calling this method will throw an error. Please use `ParticleContainer.removeParticleAt()` instead.
   * @param {number} _index
   * @throws {Error} Always throws an error as this method is not available.
   */
  removeChildAt(_index) {
    throw new Error(
      "ParticleContainer.removeChildAt() is not available. Please use ParticleContainer.removeParticleAt()"
    );
  }
  /**
   * This method is not available in ParticleContainer.
   *
   * Calling this method will throw an error. Please use `ParticleContainer.getParticleAt()` instead.
   * @param {number} _index
   * @throws {Error} Always throws an error as this method is not available.
   */
  getChildAt(_index) {
    throw new Error(
      "ParticleContainer.getChildAt() is not available. Please use ParticleContainer.getParticleAt()"
    );
  }
  /**
   * This method is not available in ParticleContainer.
   *
   * Calling this method will throw an error. Please use `ParticleContainer.setParticleIndex()` instead.
   * @param {ContainerChild} _child
   * @param {number} _index
   * @throws {Error} Always throws an error as this method is not available.
   */
  setChildIndex(_child, _index) {
    throw new Error(
      "ParticleContainer.setChildIndex() is not available. Please use ParticleContainer.setParticleIndex()"
    );
  }
  /**
   * This method is not available in ParticleContainer.
   *
   * Calling this method will throw an error. Please use `ParticleContainer.getParticleIndex()` instead.
   * @param {ContainerChild} _child
   * @throws {Error} Always throws an error as this method is not available.
   */
  getChildIndex(_child) {
    throw new Error(
      "ParticleContainer.getChildIndex() is not available. Please use ParticleContainer.getParticleIndex()"
    );
  }
  /**
   * This method is not available in ParticleContainer.
   *
   * Calling this method will throw an error. Please use `ParticleContainer.addParticleAt()` instead.
   * @param {ContainerChild} _child
   * @param {number} _index
   * @throws {Error} Always throws an error as this method is not available.
   */
  addChildAt(_child, _index) {
    throw new Error(
      "ParticleContainer.addChildAt() is not available. Please use ParticleContainer.addParticleAt()"
    );
  }
  /**
   * This method is not available in ParticleContainer.
   *
   * Calling this method will throw an error. Please use `ParticleContainer.swapParticles()` instead.
   * @param {ContainerChild} _child
   * @param {ContainerChild} _child2
   */
  swapChildren(_child, _child2) {
    throw new Error(
      "ParticleContainer.swapChildren() is not available. Please use ParticleContainer.swapParticles()"
    );
  }
  /**
   * This method is not available in ParticleContainer.
   *
   * Calling this method will throw an error.
   * @param _child - The child to reparent
   * @throws {Error} Always throws an error as this method is not available.
   */
  reparentChild(..._child) {
    throw new Error("ParticleContainer.reparentChild() is not available with the particle container");
  }
  /**
   * This method is not available in ParticleContainer.
   *
   * Calling this method will throw an error.
   * @param _child - The child to reparent
   * @param _index - The index to reparent the child to
   * @throws {Error} Always throws an error as this method is not available.
   */
  reparentChildAt(_child, _index) {
    throw new Error("ParticleContainer.reparentChildAt() is not available with the particle container");
  }
};
/**
 * Defines the default options for creating a ParticleContainer.
 * @property {Record<string, boolean>} dynamicProperties - Specifies which properties are dynamic.
 * @property {boolean} roundPixels - Indicates if pixels should be  rounded.
 */
_ParticleContainer.defaultOptions = {
  dynamicProperties: {
    vertex: false,
    // Indicates if vertex positions are dynamic.
    position: true,
    // Indicates if particle positions are dynamic.
    rotation: false,
    // Indicates if particle rotations are dynamic.
    uvs: false,
    // Indicates if UV coordinates are dynamic.
    color: false
    // Indicates if particle colors are dynamic.
  },
  roundPixels: false
  // Indicates if pixels should be rounded for rendering.
};
let ParticleContainer = _ParticleContainer;

exports.ParticleContainer = ParticleContainer;
//# sourceMappingURL=ParticleContainer.js.map
