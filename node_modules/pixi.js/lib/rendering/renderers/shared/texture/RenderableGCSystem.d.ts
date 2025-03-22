import { ExtensionType } from '../../../../extensions/Extensions';
import { type RenderOptions } from '../system/AbstractRenderer';
import type { Renderer } from '../../types';
import type { Renderable } from '../Renderable';
import type { System } from '../system/System';
/**
 * Options for the {@link RenderableGCSystem}.
 * @memberof rendering
 * @property {boolean} [renderableGCActive=true] - If set to true, this will enable the garbage collector on the renderables.
 * @property {number} [renderableGCAMaxIdle=60000] -
 * The maximum idle frames before a texture is destroyed by garbage collection.
 * @property {number} [renderableGCCheckCountMax=60000] - time between two garbage collections.
 */
export interface RenderableGCSystemOptions {
    /**
     * If set to true, this will enable the garbage collector on the GPU.
     * @default true
     * @memberof rendering.SharedRendererOptions
     */
    renderableGCActive: boolean;
    /**
     * The maximum idle frames before a texture is destroyed by garbage collection.
     * @default 60 * 60
     * @memberof rendering.SharedRendererOptions
     */
    renderableGCMaxUnusedTime: number;
    /**
     * Frames between two garbage collections.
     * @default 600
     * @memberof rendering.SharedRendererOptions
     */
    renderableGCFrequency: number;
}
/**
 * The RenderableGCSystem is responsible for cleaning up GPU resources that are no longer being used.
 *
 * When rendering objects like sprites, text, etc - GPU resources are created and managed by the renderer.
 * If these objects are no longer needed but not properly destroyed (via sprite.destroy()), their GPU resources
 * would normally leak. This system prevents that by automatically cleaning up unused GPU resources.
 *
 * Key features:
 * - Runs every 30 seconds by default to check for unused resources
 * - Cleans up resources not rendered for over 1 minute
 * - Works independently of rendering - will clean up even when not actively rendering
 * - When cleaned up resources are needed again, new GPU objects are quickly assigned from a pool
 * - Can be disabled with renderableGCActive:false for manual control
 *
 * Best practices:
 * - Always call destroy() explicitly when done with renderables (e.g. sprite.destroy())
 * - This system is a safety net, not a replacement for proper cleanup
 * - Adjust frequency and timeouts via options if needed
 *
 * Example:
 * ```js
 * // Sprite created but reference lost without destroy
 * let sprite = new Sprite(texture);
 *
 * // internally the renderer will assign a resource to the sprite
 * renderer.render(sprite);
 *
 * sprite = null; // Reference lost but GPU resources still exist
 *
 * // After 1 minute of not being rendered:
 * // - RenderableGC will clean up the sprite's GPU resources
 * // - JS garbage collector can then clean up the sprite itself
 * ```
 * @implements {System<RenderableGCSystemOptions>}
 */
export declare class RenderableGCSystem implements System<RenderableGCSystemOptions> {
    /**
     * Extension metadata for registering this system with the renderer.
     * @ignore
     */
    static extension: {
        readonly type: readonly [ExtensionType.WebGLSystem, ExtensionType.WebGPUSystem];
        readonly name: "renderableGC";
        readonly priority: 0;
    };
    /**
     * Default configuration options for the garbage collection system.
     * These can be overridden when initializing the renderer.
     */
    static defaultOptions: RenderableGCSystemOptions;
    /** Maximum time in ms a resource can be unused before being garbage collected */
    maxUnusedTime: number;
    /** Reference to the renderer this system belongs to */
    private _renderer;
    /** Array of renderables being tracked for garbage collection */
    private readonly _managedRenderables;
    /** ID of the main GC scheduler handler */
    private _handler;
    /** How frequently GC runs in ms */
    private _frequency;
    /** Current timestamp used for age calculations */
    private _now;
    /** Array of hash objects being tracked for cleanup */
    private readonly _managedHashes;
    /** ID of the hash cleanup scheduler handler */
    private _hashHandler;
    /** Array of arrays being tracked for cleanup */
    private readonly _managedArrays;
    /** ID of the array cleanup scheduler handler */
    private _arrayHandler;
    /**
     * Creates a new RenderableGCSystem instance.
     * @param renderer - The renderer this garbage collection system works for
     */
    constructor(renderer: Renderer);
    /**
     * Initializes the garbage collection system with the provided options.
     * @param options - Configuration options for the renderer
     */
    init(options: RenderableGCSystemOptions): void;
    /**
     * Gets whether the garbage collection system is currently enabled.
     * @returns True if GC is enabled, false otherwise
     */
    get enabled(): boolean;
    /**
     * Enables or disables the garbage collection system.
     * When enabled, schedules periodic cleanup of resources.
     * When disabled, cancels all scheduled cleanups.
     */
    set enabled(value: boolean);
    /**
     * Adds a hash table to be managed by the garbage collector.
     * @param context - The object containing the hash table
     * @param hash - The property name of the hash table
     */
    addManagedHash<T>(context: T, hash: string): void;
    /**
     * Adds an array to be managed by the garbage collector.
     * @param context - The object containing the array
     * @param hash - The property name of the array
     */
    addManagedArray<T>(context: T, hash: string): void;
    /**
     * Updates the GC timestamp and tracking before rendering.
     * @param options - The render options
     * @param options.container - The container to render
     */
    prerender({ container }: RenderOptions): void;
    /**
     * Starts tracking a renderable for garbage collection.
     * @param renderable - The renderable to track
     */
    addRenderable(renderable: Renderable): void;
    /**
     * Performs garbage collection by cleaning up unused renderables.
     * Removes renderables that haven't been used for longer than maxUnusedTime.
     */
    run(): void;
    /** Cleans up the garbage collection system. Disables GC and removes all tracked resources. */
    destroy(): void;
    /**
     * Removes a renderable from being tracked when it's destroyed.
     * @param renderable - The renderable to stop tracking
     */
    private _removeRenderable;
    /**
     * Updates the GC tick counter for a render group and its children.
     * @param renderGroup - The render group to update
     * @param gcTick - The new tick value
     */
    private _updateInstructionGCTick;
}
