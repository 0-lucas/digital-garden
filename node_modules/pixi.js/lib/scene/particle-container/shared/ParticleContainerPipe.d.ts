import { Matrix } from '../../../maths/matrix/Matrix';
import { UniformGroup } from '../../../rendering/renderers/shared/shader/UniformGroup';
import { State } from '../../../rendering/renderers/shared/state/State';
import { ParticleBuffer } from './ParticleBuffer';
import type { InstructionSet } from '../../../rendering/renderers/shared/instructions/InstructionSet';
import type { RenderPipe } from '../../../rendering/renderers/shared/instructions/RenderPipe';
import type { Shader } from '../../../rendering/renderers/shared/shader/Shader';
import type { Renderer } from '../../../rendering/renderers/types';
import type { ParticleContainer } from './ParticleContainer';
export interface ParticleContainerAdaptor {
    execute(particleContainerPop: ParticleContainerPipe, container: ParticleContainer): void;
}
/**
 * Renderer for Particles that is designer for speed over feature set.
 * @memberof scene
 */
export declare class ParticleContainerPipe implements RenderPipe<ParticleContainer> {
    /** The default shader that is used if a sprite doesn't have a more specific one. */
    defaultShader: Shader;
    adaptor: ParticleContainerAdaptor;
    readonly state: State;
    readonly renderer: Renderer;
    private _gpuBufferHash;
    private readonly _destroyRenderableBound;
    readonly localUniforms: UniformGroup<{
        uTranslationMatrix: {
            value: Matrix;
            type: "mat3x3<f32>";
        };
        uColor: {
            value: Float32Array;
            type: "vec4<f32>";
        };
        uRound: {
            value: number;
            type: "f32";
        };
        uResolution: {
            value: number[];
            type: "vec2<f32>";
        };
    }>;
    /**
     * @param renderer - The renderer this sprite batch works for.
     * @param adaptor
     */
    constructor(renderer: Renderer, adaptor: ParticleContainerAdaptor);
    validateRenderable(_renderable: ParticleContainer): boolean;
    addRenderable(renderable: ParticleContainer, instructionSet: InstructionSet): void;
    getBuffers(renderable: ParticleContainer): ParticleBuffer;
    private _initBuffer;
    updateRenderable(_renderable: ParticleContainer): void;
    destroyRenderable(renderable: ParticleContainer): void;
    execute(container: ParticleContainer): void;
    /** Destroys the ParticleRenderer. */
    destroy(): void;
}
