import type { IParticle } from '../../scene/particle-container/shared/Particle';
import type { ParticleRendererProperty } from '../../scene/particle-container/shared/particleData';
export type ParticleUpdateFunction = (ps: IParticle[], f32v: Float32Array, u32v: Uint32Array, offset: number, stride: number) => void;
export declare function generateParticleUpdatePolyfill(properties: ParticleRendererProperty[]): {
    dynamicUpdate: ParticleUpdateFunction;
    staticUpdate: ParticleUpdateFunction;
};
