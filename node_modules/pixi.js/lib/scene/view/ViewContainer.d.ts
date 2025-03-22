import { type InstructionSet } from '../../rendering/renderers/shared/instructions/InstructionSet';
import { type Renderer } from '../../rendering/renderers/types';
import { Bounds } from '../container/bounds/Bounds';
import { Container, type ContainerOptions } from '../container/Container';
import { type IRenderLayer } from '../layers/RenderLayer';
import type { PointData } from '../../maths/point/PointData';
import type { View } from '../../rendering/renderers/shared/view/View';
import type { DestroyOptions } from '../container/destroyTypes';
export interface ViewContainerOptions extends ContainerOptions, PixiMixins.ViewContainerOptions {
}
export interface ViewContainer extends PixiMixins.ViewContainer, Container {
}
/**
 * A ViewContainer is a type of container that represents a view.
 * This view can be a Sprite, a Graphics object, or any other object that can be rendered.
 * This class is abstract and should not be used directly.
 * @memberof scene
 */
export declare abstract class ViewContainer extends Container implements View {
    /** @private */
    readonly renderPipeId: string;
    /** @private */
    readonly canBundle = true;
    /** @private */
    allowChildren: boolean;
    /** @private */
    _roundPixels: 0 | 1;
    /** @private */
    _lastUsed: number;
    protected _bounds: Bounds;
    protected _boundsDirty: boolean;
    /**
     * The local bounds of the view.
     * @type {rendering.Bounds}
     */
    get bounds(): Bounds;
    /** @private */
    protected abstract updateBounds(): void;
    /**
     * Whether or not to round the x/y position of the sprite.
     * @type {boolean}
     */
    get roundPixels(): boolean;
    set roundPixels(value: boolean);
    constructor(options: ViewContainerOptions);
    /**
     * Checks if the object contains the given point.
     * @param point - The point to check
     */
    containsPoint(point: PointData): boolean;
    /** @private */
    abstract batched: boolean;
    /** @private */
    protected onViewUpdate(): void;
    destroy(options?: DestroyOptions): void;
    collectRenderablesSimple(instructionSet: InstructionSet, renderer: Renderer, currentLayer: IRenderLayer): void;
}
