import { Sprite, type SpriteOptions } from '../scene/sprite/Sprite';
import { Ticker } from '../ticker/Ticker';
import { GifSource } from './GifSource';
import type { SCALE_MODE } from '../rendering/renderers/shared/texture/const';
/**
 * Optional module to import to decode and play animated GIFs.
 * @example
 * import { Assets } from 'pixi.js';
 * import { GifSprite } from 'pixi.js/gif';
 *
 * const source = await Assets.load('example.gif');
 * const gif = new GifSprite({ source });
 * @namespace gif
 */
/**
 * Default options for all GifSprite objects.
 * @memberof gif
 */
interface GifSpriteOptions extends Omit<SpriteOptions, 'texture'> {
    /** Source to the GIF frame and animation data */
    source: GifSource;
    /** Whether to start playing right away */
    autoPlay?: boolean;
    /**
     * Scale Mode to use for the texture
     * @type {PIXI.SCALE_MODE}
     */
    scaleMode?: SCALE_MODE;
    /** To enable looping */
    loop?: boolean;
    /** Speed of the animation */
    animationSpeed?: number;
    /** Set to `false` to manage updates yourself */
    autoUpdate?: boolean;
    /** The completed callback, optional */
    onComplete?: null | (() => void);
    /** The loop callback, optional */
    onLoop?: null | (() => void);
    /** The frame callback, optional */
    onFrameChange?: null | ((currentFrame: number) => void);
    /** Fallback FPS if GIF contains no time information */
    fps?: number;
}
/**
 * Runtime object to play animated GIFs. This object is similar to an AnimatedSprite.
 * It support playback (seek, play, stop) as well as animation speed and looping.
 * @memberof gif
 * @see Thanks to {@link https://github.com/matt-way/gifuct-js/ gifuct-js}
 */
declare class GifSprite extends Sprite {
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
    static defaultOptions: Omit<GifSpriteOptions, 'source'>;
    /**
     * The speed that the animation will play at. Higher is faster, lower is slower.
     * @default 1
     */
    animationSpeed: number;
    /**
     * Whether or not the animate sprite repeats after playing.
     * @default true
     */
    loop: boolean;
    /**
     * User-assigned function to call when animation finishes playing. This only happens
     * if loop is set to `false`.
     * @example
     * animation.onComplete = () => {
     *   // finished!
     * };
     */
    onComplete?: () => void;
    /**
     * User-assigned function to call when animation changes which texture is being rendered.
     * @example
     * animation.onFrameChange = () => {
     *   // updated!
     * };
     */
    onFrameChange?: (currentFrame: number) => void;
    /**
     * User-assigned function to call when `loop` is true, and animation is played and
     * loops around to start again. This only happens if loop is set to `true`.
     * @example
     * animation.onLoop = () => {
     *   // looped!
     * };
     */
    onLoop?: () => void;
    /** The total duration of animation in milliseconds. */
    readonly duration: number;
    /** Whether to play the animation after constructing. */
    readonly autoPlay: boolean;
    /** Collection of frame to render. */
    private _source;
    /** Dirty means the image needs to be redrawn. Set to `true` to force redraw. */
    dirty: boolean;
    /** The current frame number (zero-based index). */
    private _currentFrame;
    /** `true` uses PIXI.Ticker.shared to auto update animation time.*/
    private _autoUpdate;
    /** `true` if the instance is currently connected to PIXI.Ticker.shared to auto update animation time. */
    private _isConnectedToTicker;
    /** If animation is currently playing. */
    private _playing;
    /** Current playback position in milliseconds. */
    private _currentTime;
    /**
     * @param source - Source, default options will be used.
     */
    constructor(source: GifSource);
    /**
     * @param options - Options for the GifSprite
     */
    constructor(options: GifSpriteOptions);
    /** Stops the animation. */
    stop(): void;
    /** Plays the animation. */
    play(): void;
    /**
     * Get the current progress of the animation from 0 to 1.
     * @readonly
     */
    get progress(): number;
    /** `true` if the current animation is playing */
    get playing(): boolean;
    /**
     * Updates the object transform for rendering. You only need to call this
     * if the `autoUpdate` property is set to `false`.
     * @param ticker - Ticker instance
     */
    update(ticker: Ticker): void;
    /** Redraw the current frame, is necessary for the animation to work when */
    private _updateFrame;
    /**
     * Whether to use PIXI.Ticker.shared to auto update animation time.
     * @default true
     */
    get autoUpdate(): boolean;
    set autoUpdate(value: boolean);
    /** Set the current frame number */
    get currentFrame(): number;
    set currentFrame(value: number);
    /** Instance of the data, contains frame textures */
    get source(): GifSource;
    /**
     * Internally handle updating the frame index
     * @param value
     */
    private _updateFrameIndex;
    /** Get the total number of frame in the GIF. */
    get totalFrames(): number;
    /**
     * Destroy and don't use after this.
     * @param destroyData - Destroy the data, cannot be used again.
     */
    destroy(destroyData?: boolean): void;
    /**
     * Cloning the animation is a useful way to create a duplicate animation.
     * This maintains all the properties of the original animation but allows
     * you to control playback independent of the original animation.
     * If you want to create a simple copy, and not control independently,
     * then you can simply create a new Sprite, e.g. `const sprite = new Sprite(animation.texture)`.
     *
     * The clone will be flagged as `dirty` to immediatly trigger an update
     */
    clone(): GifSprite;
}
export { GifSprite };
export type { GifSpriteOptions };
