import type { IRenderLayer } from '../../layers/RenderLayer';
import type { ContainerChild } from '../Container';
export interface ChildrenHelperMixin<C = ContainerChild> {
    allowChildren: boolean;
    addChild<U extends (C | IRenderLayer)[]>(...children: U): U[0];
    removeChild<U extends (C | IRenderLayer)[]>(...children: U): U[0];
    removeChildren(beginIndex?: number, endIndex?: number): C[];
    removeChildAt<U extends (C | IRenderLayer)>(index: number): U;
    getChildAt<U extends (C | IRenderLayer)>(index: number): U;
    setChildIndex(child: C | IRenderLayer, index: number): void;
    getChildIndex(child: C | IRenderLayer): number;
    addChildAt<U extends (C | IRenderLayer)>(child: U, index: number): U;
    swapChildren<U extends (C | IRenderLayer)>(child: U, child2: U): void;
    removeFromParent(): void;
    reparentChild<U extends C[]>(...child: U): U[0];
    reparentChildAt<U extends C>(child: U, index: number): U;
}
export declare const childrenHelperMixin: ChildrenHelperMixin<ContainerChild>;
