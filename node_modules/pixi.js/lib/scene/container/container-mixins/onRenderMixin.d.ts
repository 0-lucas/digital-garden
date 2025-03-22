import type { Renderer } from '../../../rendering/renderers/types';
import type { Container } from '../Container';
export interface OnRenderMixinConstructor {
    onRender?: ((renderer: Renderer) => void | null);
}
export interface OnRenderMixin extends Required<OnRenderMixinConstructor> {
    _onRender: ((renderer: Renderer) => void) | null;
}
export declare const onRenderMixin: Partial<Container>;
