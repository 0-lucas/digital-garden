import { Texture } from '../../../rendering/renderers/shared/texture/Texture';
import type { ColorSource } from '../../../color/Color';
/**
 * Represents a particle with properties for position, scale, rotation, color, and texture.
 * @property {number} x - The x-coordinate of the particle.
 * @property {number} y - The y-coordinate of the particle.
 * @property {number} scaleX - The scale factor in the x-axis.
 * @property {number} scaleY - The scale factor in the y-axis.
 * @property {number} anchorX - The x-coordinate of the anchor point.
 * @property {number} anchorY - The y-coordinate of the anchor point.
 * @property {number} rotation - The rotation of the particle in radians.
 * @property {number} color - The color of the particle as a hexadecimal number.
 * @property {Texture} texture - The texture of the particle.
 * @memberof scene
 */
export interface IParticle {
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    anchorX: number;
    anchorY: number;
    rotation: number;
    color: number;
    texture: Texture;
}
/**
 * Represents the options for creating a new particle.
 * @property {number} x - The x-coordinate of the particle.
 * @property {number} y - The y-coordinate of the particle.
 * @property {number} scaleX - The scale factor in the x-axis.
 * @property {number} scaleY - The scale factor in the y-axis.
 * @property {number} anchorX - The x-coordinate of the anchor point.
 * @property {number} anchorY - The y-coordinate of the anchor point.
 * @property {number} rotation - The rotation of the particle in radians.
 * @property {Texture} texture - The texture of the particle.
 * @property {ColorSource} tint - The tint color of the particle as a hexadecimal number.
 * @property {number} alpha - The alpha value of the particle.
 * @memberof scene
 */
export type ParticleOptions = Omit<Partial<IParticle>, 'color'> & {
    texture: Texture;
    tint?: ColorSource;
    alpha?: number;
};
/**
 * Represents a single particle within a particle container. This class implements the IParticle interface,
 * providing properties and methods to manage the particle's position, scale, rotation, color, and texture.
 *
 * The reason we use a particle over a sprite is that these are much lighter weight and we can create a lot of them
 * without taking on the overhead of a full sprite.
 *
 * Here is an example of how to create a new particle:
 *
 * ```javascript
 * const particle = new Particle({
 *   texture,
 *   x: 100,
 *   y: 100,
 *   scaleX: 0.5,
 *   scaleY: 0.5,
 *   rotation: Math.PI / 2,
 *   color: 0xff0000,
 * });
 * ```
 * @implements {IParticle}
 * @memberof scene
 */
export declare class Particle implements IParticle {
    /** Default options for constructing with options */
    static defaultOptions: Partial<ParticleOptions>;
    /** The x-coordinate of the anchor point. */
    anchorX: number;
    /** The y-coordinate of the anchor point. */
    anchorY: number;
    /** The x-coordinate of the particle. */
    x: number;
    /** The y-coordinate of the particle. */
    y: number;
    /** The scale factor in the x-axis. */
    scaleX: number;
    /** The scale factor in the y-axis. */
    scaleY: number;
    /** The rotation of the particle in radians. */
    rotation: number;
    /** The color of the particle as a hexadecimal number. */
    color: number;
    /** The texture of the particle. */
    texture: Texture;
    private _alpha;
    private _tint;
    constructor(options: Texture | ParticleOptions);
    /** Gets or sets the alpha value of the particle. */
    get alpha(): number;
    set alpha(value: number);
    /** Gets or sets the tint color of the particle. */
    get tint(): number;
    set tint(value: ColorSource);
    private _updateColor;
}
