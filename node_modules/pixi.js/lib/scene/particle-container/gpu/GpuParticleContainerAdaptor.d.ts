import type { ParticleContainer } from '../shared/ParticleContainer';
import type { ParticleContainerAdaptor, ParticleContainerPipe } from '../shared/ParticleContainerPipe';
export declare class GpuParticleContainerAdaptor implements ParticleContainerAdaptor {
    execute(particleContainerPipe: ParticleContainerPipe, container: ParticleContainer): void;
}
