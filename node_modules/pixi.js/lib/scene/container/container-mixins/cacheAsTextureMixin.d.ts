import type { Container } from '../Container';
import type { CacheAsTextureOptions } from '../RenderGroup';
export interface CacheAsTextureMixinConstructor {
    cacheAsTexture?: (val: boolean | CacheAsTextureOptions) => void;
}
export interface CacheAsTextureMixin extends Required<CacheAsTextureMixinConstructor> {
    /**
     * Caches this container as a texture. This allows the container to be rendered as a single texture,
     * which can improve performance for complex static containers.
     * @param val - If true, enables caching with default options. If false, disables caching.
     * Can also pass options object to configure caching behavior.
     * @memberof scene.Container#
     */
    cacheAsTexture: (val: boolean | CacheAsTextureOptions) => void;
    /**
     * Updates the cached texture of this container. This will flag the container's cached texture
     * to be redrawn on the next render.
     * @memberof scene.Container#
     */
    updateCacheTexture: () => void;
    /**
     * Legacy property for backwards compatibility with PixiJS v7 and below.
     * Use `cacheAsTexture` instead.
     * @deprecated Since PixiJS v8
     * @memberof scene.Container#
     */
    cacheAsBitmap: boolean;
    /**
     * Whether this container is currently cached as a texture.
     * @readonly
     * @memberof scene.Container#
     */
    readonly isCachedAsTexture: boolean;
}
export declare const cacheAsTextureMixin: Partial<Container>;
