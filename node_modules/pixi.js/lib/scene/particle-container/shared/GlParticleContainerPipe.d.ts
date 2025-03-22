import { ExtensionType } from '../../../extensions/Extensions';
import { ParticleContainerPipe } from './ParticleContainerPipe';
import type { WebGLRenderer } from '../../../rendering/renderers/gl/WebGLRenderer';
export declare class GlParticleContainerPipe extends ParticleContainerPipe {
    /** @ignore */
    static extension: {
        readonly type: readonly [ExtensionType.WebGLPipes];
        readonly name: "particle";
    };
    constructor(renderer: WebGLRenderer);
}
