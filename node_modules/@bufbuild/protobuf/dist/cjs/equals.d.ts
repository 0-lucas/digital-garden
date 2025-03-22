import type { MessageShape } from "./types.js";
import type { DescMessage } from "./descriptors.js";
/**
 * Compare two messages of the same type.
 *
 * Note that this function disregards extensions and unknown fields, and that
 * NaN is not equal NaN, following the IEEE standard.
 */
export declare function equals<Desc extends DescMessage>(schema: Desc, a: MessageShape<Desc>, b: MessageShape<Desc>): boolean;
