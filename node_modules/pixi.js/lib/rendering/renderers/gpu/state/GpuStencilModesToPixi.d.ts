export interface StencilState {
    stencilWriteMask?: number;
    stencilReadMask?: number;
    stencilFront?: {
        compare: 'always' | 'equal' | 'not-equal';
        passOp: 'increment-clamp' | 'decrement-clamp' | 'keep' | 'replace';
    };
    stencilBack?: {
        compare: 'always' | 'equal' | 'not-equal';
        passOp: 'increment-clamp' | 'decrement-clamp' | 'keep' | 'replace';
    };
}
export declare const GpuStencilModesToPixi: StencilState[];
