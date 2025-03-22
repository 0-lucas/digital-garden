import type { VertexFormat } from '../../../rendering/renderers/shared/geometry/const';
import type { IParticle } from './Particle';
export interface ParticleRendererProperty {
    attributeName: string;
    format: VertexFormat;
    code: string;
    dynamic: boolean;
    updateFunction?: (ps: IParticle[], f32v: Float32Array, u32v: Uint32Array, offset: number, stride: number) => void;
}
export declare const particleData: Record<string, ParticleRendererProperty>;
