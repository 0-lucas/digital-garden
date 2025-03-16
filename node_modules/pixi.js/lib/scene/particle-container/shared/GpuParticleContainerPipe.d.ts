import { ExtensionType } from '../../../extensions/Extensions';
import { ParticleContainerPipe } from './ParticleContainerPipe';
import type { WebGPURenderer } from '../../../rendering/renderers/gpu/WebGPURenderer';
export declare class GpuParticleContainerPipe extends ParticleContainerPipe {
    /** @ignore */
    static extension: {
        readonly type: readonly [ExtensionType.WebGPUPipes];
        readonly name: "particle";
    };
    constructor(renderer: WebGPURenderer);
}
