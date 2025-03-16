'use strict';

var Extensions = require('../../../../extensions/Extensions.js');
var clean = require('../../../../utils/data/clean.js');

"use strict";
let renderableGCTick = 0;
const _RenderableGCSystem = class _RenderableGCSystem {
  /**
   * Creates a new RenderableGCSystem instance.
   * @param renderer - The renderer this garbage collection system works for
   */
  constructor(renderer) {
    /** Array of renderables being tracked for garbage collection */
    this._managedRenderables = [];
    /** Array of hash objects being tracked for cleanup */
    this._managedHashes = [];
    /** Array of arrays being tracked for cleanup */
    this._managedArrays = [];
    this._renderer = renderer;
  }
  /**
   * Initializes the garbage collection system with the provided options.
   * @param options - Configuration options for the renderer
   */
  init(options) {
    options = { ..._RenderableGCSystem.defaultOptions, ...options };
    this.maxUnusedTime = options.renderableGCMaxUnusedTime;
    this._frequency = options.renderableGCFrequency;
    this.enabled = options.renderableGCActive;
  }
  /**
   * Gets whether the garbage collection system is currently enabled.
   * @returns True if GC is enabled, false otherwise
   */
  get enabled() {
    return !!this._handler;
  }
  /**
   * Enables or disables the garbage collection system.
   * When enabled, schedules periodic cleanup of resources.
   * When disabled, cancels all scheduled cleanups.
   */
  set enabled(value) {
    if (this.enabled === value)
      return;
    if (value) {
      this._handler = this._renderer.scheduler.repeat(
        () => this.run(),
        this._frequency,
        false
      );
      this._hashHandler = this._renderer.scheduler.repeat(
        () => {
          for (const hash of this._managedHashes) {
            hash.context[hash.hash] = clean.cleanHash(hash.context[hash.hash]);
          }
        },
        this._frequency
      );
      this._arrayHandler = this._renderer.scheduler.repeat(
        () => {
          for (const array of this._managedArrays) {
            clean.cleanArray(array.context[array.hash]);
          }
        },
        this._frequency
      );
    } else {
      this._renderer.scheduler.cancel(this._handler);
      this._renderer.scheduler.cancel(this._hashHandler);
      this._renderer.scheduler.cancel(this._arrayHandler);
    }
  }
  /**
   * Adds a hash table to be managed by the garbage collector.
   * @param context - The object containing the hash table
   * @param hash - The property name of the hash table
   */
  addManagedHash(context, hash) {
    this._managedHashes.push({ context, hash });
  }
  /**
   * Adds an array to be managed by the garbage collector.
   * @param context - The object containing the array
   * @param hash - The property name of the array
   */
  addManagedArray(context, hash) {
    this._managedArrays.push({ context, hash });
  }
  /**
   * Updates the GC timestamp and tracking before rendering.
   * @param options - The render options
   * @param options.container - The container to render
   */
  prerender({
    container
  }) {
    this._now = performance.now();
    container.renderGroup.gcTick = renderableGCTick++;
    this._updateInstructionGCTick(container.renderGroup, container.renderGroup.gcTick);
  }
  /**
   * Starts tracking a renderable for garbage collection.
   * @param renderable - The renderable to track
   */
  addRenderable(renderable) {
    if (!this.enabled)
      return;
    if (renderable._lastUsed === -1) {
      this._managedRenderables.push(renderable);
      renderable.once("destroyed", this._removeRenderable, this);
    }
    renderable._lastUsed = this._now;
  }
  /**
   * Performs garbage collection by cleaning up unused renderables.
   * Removes renderables that haven't been used for longer than maxUnusedTime.
   */
  run() {
    const now = this._now;
    const managedRenderables = this._managedRenderables;
    const renderPipes = this._renderer.renderPipes;
    let offset = 0;
    for (let i = 0; i < managedRenderables.length; i++) {
      const renderable = managedRenderables[i];
      if (renderable === null) {
        offset++;
        continue;
      }
      const renderGroup = renderable.renderGroup ?? renderable.parentRenderGroup;
      const currentTick = renderGroup?.instructionSet?.gcTick ?? -1;
      if ((renderGroup?.gcTick ?? 0) === currentTick) {
        renderable._lastUsed = now;
      }
      if (now - renderable._lastUsed > this.maxUnusedTime) {
        if (!renderable.destroyed) {
          const rp = renderPipes;
          if (renderGroup)
            renderGroup.structureDidChange = true;
          rp[renderable.renderPipeId].destroyRenderable(renderable);
        }
        renderable._lastUsed = -1;
        offset++;
        renderable.off("destroyed", this._removeRenderable, this);
      } else {
        managedRenderables[i - offset] = renderable;
      }
    }
    managedRenderables.length -= offset;
  }
  /** Cleans up the garbage collection system. Disables GC and removes all tracked resources. */
  destroy() {
    this.enabled = false;
    this._renderer = null;
    this._managedRenderables.length = 0;
    this._managedHashes.length = 0;
    this._managedArrays.length = 0;
  }
  /**
   * Removes a renderable from being tracked when it's destroyed.
   * @param renderable - The renderable to stop tracking
   */
  _removeRenderable(renderable) {
    const index = this._managedRenderables.indexOf(renderable);
    if (index >= 0) {
      renderable.off("destroyed", this._removeRenderable, this);
      this._managedRenderables[index] = null;
    }
  }
  /**
   * Updates the GC tick counter for a render group and its children.
   * @param renderGroup - The render group to update
   * @param gcTick - The new tick value
   */
  _updateInstructionGCTick(renderGroup, gcTick) {
    renderGroup.instructionSet.gcTick = gcTick;
    for (const child of renderGroup.renderGroupChildren) {
      this._updateInstructionGCTick(child, gcTick);
    }
  }
};
/**
 * Extension metadata for registering this system with the renderer.
 * @ignore
 */
_RenderableGCSystem.extension = {
  type: [
    Extensions.ExtensionType.WebGLSystem,
    Extensions.ExtensionType.WebGPUSystem
  ],
  name: "renderableGC",
  priority: 0
};
/**
 * Default configuration options for the garbage collection system.
 * These can be overridden when initializing the renderer.
 */
_RenderableGCSystem.defaultOptions = {
  /** Enable/disable the garbage collector */
  renderableGCActive: true,
  /** Time in ms before an unused resource is collected (default 1 minute) */
  renderableGCMaxUnusedTime: 6e4,
  /** How often to run garbage collection in ms (default 30 seconds) */
  renderableGCFrequency: 3e4
};
let RenderableGCSystem = _RenderableGCSystem;

exports.RenderableGCSystem = RenderableGCSystem;
//# sourceMappingURL=RenderableGCSystem.js.map
