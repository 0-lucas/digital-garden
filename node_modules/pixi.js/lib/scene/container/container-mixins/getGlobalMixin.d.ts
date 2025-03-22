import type { Matrix } from '../../../maths/matrix/Matrix';
import type { Container } from '../Container';
export declare function bgr2rgb(color: number): number;
export interface GetGlobalMixin {
    getGlobalAlpha(skipUpdate: boolean): number;
    getGlobalTransform(matrix: Matrix, skipUpdate: boolean): Matrix;
    getGlobalTint(skipUpdate?: boolean): number;
}
export declare const getGlobalMixin: Partial<Container>;
