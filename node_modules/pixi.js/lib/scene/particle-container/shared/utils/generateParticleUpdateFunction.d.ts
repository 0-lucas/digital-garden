import type { IParticle } from '../Particle';
import type { ParticleRendererProperty } from '../particleData';
export type ParticleUpdateFunction = (ps: IParticle[], f32v: Float32Array, u32v: Uint32Array) => void;
export declare function generateParticleUpdateFunction(properties: Record<string, ParticleRendererProperty>): {
    dynamicUpdate: ParticleUpdateFunction;
    staticUpdate: ParticleUpdateFunction;
};
