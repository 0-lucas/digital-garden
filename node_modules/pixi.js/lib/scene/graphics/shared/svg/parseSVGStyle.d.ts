import type { FillStyle, StrokeStyle } from '../FillTypes';
import type { Session } from './SVGParser';
/**
 * A map of SVG style attributes and their default values.
 * Each attribute has a type and default value used for SVG parsing.
 * - 'paint' type can be a color or gradient
 * - 'number' type is a numeric value
 * - 'string' type is a text value
 */
export declare const styleAttributes: {
    fill: {
        type: string;
        default: number;
    };
    'fill-opacity': {
        type: string;
        default: number;
    };
    stroke: {
        type: string;
        default: number;
    };
    'stroke-width': {
        type: string;
        default: number;
    };
    'stroke-opacity': {
        type: string;
        default: number;
    };
    'stroke-linecap': {
        type: string;
        default: string;
    };
    'stroke-linejoin': {
        type: string;
        default: string;
    };
    'stroke-miterlimit': {
        type: string;
        default: number;
    };
    'stroke-dasharray': {
        type: string;
        default: string;
    };
    'stroke-dashoffset': {
        type: string;
        default: number;
    };
    opacity: {
        type: string;
        default: number;
    };
};
/** Represents the result of parsing SVG style attributes */
export type StyleResult = {
    /** The stroke style properties */
    strokeStyle: StrokeStyle;
    /** The fill style properties */
    fillStyle: FillStyle;
    /** Whether fill should be applied */
    useFill: boolean;
    /** Whether stroke should be applied */
    useStroke: boolean;
};
/**
 * Parses SVG style attributes and inline styles to determine fill and stroke properties.
 * Handles both direct attributes and CSS-style declarations in the style attribute.
 * @param svg - The SVG element to parse styles from
 * @param session - The current SVG parsing session containing definitions
 * @returns An object containing the parsed fill and stroke styles
 */
export declare function parseSVGStyle(svg: SVGElement, session: Session): StyleResult;
/**
 * Parses a single SVG style attribute and updates the style result accordingly.
 * Handles color values, gradients, opacities and other style properties.
 * @param session - The current SVG parsing session containing definitions
 * @param result - The style result object to update
 * @param id - The attribute name/id to parse
 * @param value - The attribute value to parse
 */
export declare function parseAttribute(session: Session, result: StyleResult, id: string, value: string): void;
