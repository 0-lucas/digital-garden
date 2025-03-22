import { Texture } from '../rendering/renderers/shared/texture/Texture.mjs';
import { Sprite } from '../scene/sprite/Sprite.mjs';
import { UPDATE_PRIORITY } from '../ticker/const.mjs';
import { Ticker } from '../ticker/Ticker.mjs';
import { GifSource } from './GifSource.mjs';

"use strict";
const _GifSprite = class _GifSprite extends Sprite {
  /** @ignore */
  constructor(...args) {
    const options = args[0] instanceof GifSource ? { source: args[0] } : args[0];
    const {
      scaleMode,
      source,
      fps,
      loop,
      animationSpeed,
      autoPlay,
      autoUpdate,
      onComplete,
      onFrameChange,
      onLoop,
      ...rest
    } = Object.assign(
      {},
      _GifSprite.defaultOptions,
      options
    );
    super({ texture: Texture.EMPTY, ...rest });
    /**
     * The speed that the animation will play at. Higher is faster, lower is slower.
     * @default 1
     */
    this.animationSpeed = 1;
    /**
     * Whether or not the animate sprite repeats after playing.
     * @default true
     */
    this.loop = true;
    /** The total duration of animation in milliseconds. */
    this.duration = 0;
    /** Whether to play the animation after constructing. */
    this.autoPlay = true;
    /** Dirty means the image needs to be redrawn. Set to `true` to force redraw. */
    this.dirty = false;
    /** The current frame number (zero-based index). */
    this._currentFrame = 0;
    /** `true` uses PIXI.Ticker.shared to auto update animation time.*/
    this._autoUpdate = false;
    /** `true` if the instance is currently connected to PIXI.Ticker.shared to auto update animation time. */
    this._isConnectedToTicker = false;
    /** If animation is currently playing. */
    this._playing = false;
    /** Current playback position in milliseconds. */
    this._currentTime = 0;
    this.onRender = () => this._updateFrame();
    this.texture = source.textures[0];
    this.duration = source.frames[source.frames.length - 1].end;
    this._source = source;
    this._playing = false;
    this._currentTime = 0;
    this._isConnectedToTicker = false;
    Object.assign(this, {
      fps,
      loop,
      animationSpeed,
      autoPlay,
      autoUpdate,
      onComplete,
      onFrameChange,
      onLoop
    });
    this.currentFrame = 0;
    if (autoPlay) {
      this.play();
    }
  }
  /** Stops the animation. */
  stop() {
    if (!this._playing) {
      return;
    }
    this._playing = false;
    if (this._autoUpdate && this._isConnectedToTicker) {
      Ticker.shared.remove(this.update, this);
      this._isConnectedToTicker = false;
    }
  }
  /** Plays the animation. */
  play() {
    if (this._playing) {
      return;
    }
    this._playing = true;
    if (this._autoUpdate && !this._isConnectedToTicker) {
      Ticker.shared.add(this.update, this, UPDATE_PRIORITY.HIGH);
      this._isConnectedToTicker = true;
    }
    if (!this.loop && this.currentFrame === this._source.frames.length - 1) {
      this._currentTime = 0;
    }
  }
  /**
   * Get the current progress of the animation from 0 to 1.
   * @readonly
   */
  get progress() {
    return this._currentTime / this.duration;
  }
  /** `true` if the current animation is playing */
  get playing() {
    return this._playing;
  }
  /**
   * Updates the object transform for rendering. You only need to call this
   * if the `autoUpdate` property is set to `false`.
   * @param ticker - Ticker instance
   */
  update(ticker) {
    if (!this._playing) {
      return;
    }
    const elapsed = this.animationSpeed * ticker.deltaTime / Ticker.targetFPMS;
    const currentTime = this._currentTime + elapsed;
    const localTime = currentTime % this.duration;
    const localFrame = this._source.frames.findIndex((frame) => frame.start <= localTime && frame.end > localTime);
    if (currentTime >= this.duration) {
      if (this.loop) {
        this._currentTime = localTime;
        this._updateFrameIndex(localFrame);
        this.onLoop?.();
      } else {
        this._currentTime = this.duration;
        this._updateFrameIndex(this.totalFrames - 1);
        this.onComplete?.();
        this.stop();
      }
    } else {
      this._currentTime = localTime;
      this._updateFrameIndex(localFrame);
    }
  }
  /** Redraw the current frame, is necessary for the animation to work when */
  _updateFrame() {
    if (!this.dirty) {
      return;
    }
    this.texture = this._source.frames[this._currentFrame].texture;
    this.dirty = false;
  }
  /**
   * Whether to use PIXI.Ticker.shared to auto update animation time.
   * @default true
   */
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(value) {
    if (value !== this._autoUpdate) {
      this._autoUpdate = value;
      if (!this._autoUpdate && this._isConnectedToTicker) {
        Ticker.shared.remove(this.update, this);
        this._isConnectedToTicker = false;
      } else if (this._autoUpdate && !this._isConnectedToTicker && this._playing) {
        Ticker.shared.add(this.update, this);
        this._isConnectedToTicker = true;
      }
    }
  }
  /** Set the current frame number */
  get currentFrame() {
    return this._currentFrame;
  }
  set currentFrame(value) {
    this._updateFrameIndex(value);
    this._currentTime = this._source.frames[value].start;
  }
  /** Instance of the data, contains frame textures */
  get source() {
    return this._source;
  }
  /**
   * Internally handle updating the frame index
   * @param value
   */
  _updateFrameIndex(value) {
    if (value < 0 || value >= this.totalFrames) {
      throw new Error(`Frame index out of range, expecting 0 to ${this.totalFrames}, got ${value}`);
    }
    if (this._currentFrame !== value) {
      this._currentFrame = value;
      this.dirty = true;
      this.onFrameChange?.(value);
    }
  }
  /** Get the total number of frame in the GIF. */
  get totalFrames() {
    return this._source.totalFrames;
  }
  /**
   * Destroy and don't use after this.
   * @param destroyData - Destroy the data, cannot be used again.
   */
  destroy(destroyData = false) {
    this.stop();
    super.destroy();
    if (destroyData) {
      this._source.destroy();
    }
    const forceClear = null;
    this._source = forceClear;
    this.onComplete = forceClear;
    this.onFrameChange = forceClear;
    this.onLoop = forceClear;
  }
  /**
   * Cloning the animation is a useful way to create a duplicate animation.
   * This maintains all the properties of the original animation but allows
   * you to control playback independent of the original animation.
   * If you want to create a simple copy, and not control independently,
   * then you can simply create a new Sprite, e.g. `const sprite = new Sprite(animation.texture)`.
   *
   * The clone will be flagged as `dirty` to immediatly trigger an update
   */
  clone() {
    const clone = new _GifSprite({
      source: this._source,
      autoUpdate: this._autoUpdate,
      loop: this.loop,
      autoPlay: this.autoPlay,
      scaleMode: this.texture.source.scaleMode,
      animationSpeed: this.animationSpeed,
      onComplete: this.onComplete,
      onFrameChange: this.onFrameChange,
      onLoop: this.onLoop
    });
    clone.dirty = true;
    return clone;
  }
};
/**
 * Default options for all GifSprite objects.
 * @property {PIXI.SCALE_MODE} [scaleMode='linear'] - Scale mode to use for the texture.
 * @property {boolean} [loop=true] - To enable looping.
 * @property {number} [animationSpeed=1] - Speed of the animation.
 * @property {boolean} [autoUpdate=true] - Set to `false` to manage updates yourself.
 * @property {boolean} [autoPlay=true] - To start playing right away.
 * @property {Function} [onComplete=null] - The completed callback, optional.
 * @property {Function} [onLoop=null] - The loop callback, optional.
 * @property {Function} [onFrameChange=null] - The frame callback, optional.
 * @property {number} [fps=30] - Fallback FPS if GIF contains no time information.
 */
_GifSprite.defaultOptions = {
  scaleMode: "linear",
  fps: 30,
  loop: true,
  animationSpeed: 1,
  autoPlay: true,
  autoUpdate: true,
  onComplete: null,
  onFrameChange: null,
  onLoop: null
};
let GifSprite = _GifSprite;

export { GifSprite };
//# sourceMappingURL=GifSprite.mjs.map
