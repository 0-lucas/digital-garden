import { FilterEffect } from '../../../filters/FilterEffect';
import type { Filter } from '../../../filters/Filter';
import type { Rectangle } from '../../../maths/shapes/Rectangle';
import type { MaskEffect } from '../../../rendering/mask/MaskEffectManager';
import type { Container } from '../Container';
import type { Effect } from '../Effect';
export interface EffectsMixinConstructor {
    mask?: Mask;
    setMask?: (options: Partial<MaskOptionsAndMask>) => void;
    filters?: Filter | Filter[];
}
export type Mask = number | Container | null;
export interface MaskOptions {
    inverse: boolean;
}
export interface MaskOptionsAndMask extends MaskOptions {
    mask: Mask;
}
export interface EffectsMixin extends Required<EffectsMixinConstructor> {
    _maskEffect?: MaskEffect;
    _maskOptions?: MaskOptions;
    _filterEffect?: FilterEffect;
    filterArea?: Rectangle;
    effects?: Effect[];
    _markStructureAsChanged(): void;
    addEffect(effect: Effect): void;
    removeEffect(effect: Effect): void;
}
export declare const effectsMixin: Partial<Container>;
