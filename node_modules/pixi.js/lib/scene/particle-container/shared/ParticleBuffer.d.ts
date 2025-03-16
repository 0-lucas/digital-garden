import { Geometry } from '../../../rendering/renderers/shared/geometry/Geometry';
import { ViewableBuffer } from '../../../utils/data/ViewableBuffer';
import type { IndexBufferArray } from '../../../rendering/renderers/shared/geometry/Geometry';
import type { IParticle } from './Particle';
import type { ParticleRendererProperty } from './particleData';
import type { ParticleUpdateFunction } from './utils/generateParticleUpdateFunction';
/**
 * Options for creating a ParticleBuffer.
 * @property {number} size - The size of the particle buffer.
 * @property {Record<string, ParticleRendererProperty>} properties - A record of attributes that the particle container uses.
 */
export interface ParticleBufferOptions {
    size: number;
    properties: Record<string, ParticleRendererProperty>;
}
/**
 * The ParticleBuffer holds the buffers and geometry for a particle container.
 * It also contains the upload functions for the static and dynamic properties.
 * @internal
 */
export declare class ParticleBuffer {
    /** The buffer containing static attribute data for all elements in the batch. */
    staticAttributeBuffer: ViewableBuffer;
    /** The buffer containing dynamic attribute data for all elements in the batch. */
    dynamicAttributeBuffer: ViewableBuffer;
    private readonly _staticBuffer;
    private readonly _dynamicBuffer;
    /** The buffer containing index data for all elements in the batch. */
    indexBuffer: IndexBufferArray;
    private readonly _dynamicStride;
    private readonly _staticStride;
    /** The geometry of the particle buffer. */
    readonly geometry: Geometry;
    private _size;
    private readonly _dynamicUpload;
    private readonly _staticUpload;
    private readonly _generateParticleUpdateCache;
    constructor(options: ParticleBufferOptions);
    getParticleUpdate(properties: Record<string, ParticleRendererProperty>): {
        dynamicUpdate: ParticleUpdateFunction;
        staticUpdate: ParticleUpdateFunction;
    };
    generateParticleUpdate(properties: Record<string, ParticleRendererProperty>): {
        dynamicUpdate: ParticleUpdateFunction;
        staticUpdate: ParticleUpdateFunction;
    };
    update(particles: IParticle[], uploadStatic: boolean): void;
    destroy(): void;
}
