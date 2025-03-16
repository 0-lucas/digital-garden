interface ColorStop {
    color: string;
    offset?: {
        unit: string;
        value: string;
    };
    hint?: {
        unit: string;
        value: string;
    };
}

type LinearOrientation = {
    type: 'directional';
    value: string;
} | {
    type: 'angular';
    value: {
        unit: string;
        value: string;
    };
};
interface LinearResult {
    orientation: LinearOrientation;
    repeating: boolean;
    stops: ColorStop[];
}
declare function parseLinearGradient(input: string): LinearResult;

type RgExtentKeyword = 'closest-corner' | 'closest-side' | 'farthest-corner' | 'farthest-side';
type RadialPropertyValue = {
    type: 'keyword';
    value: string;
} | {
    type: 'length';
    value: {
        unit: string;
        value: string;
    };
};
interface RadialResult {
    shape: 'circle' | 'ellipse';
    repeating: boolean;
    size: RadialPropertyValue[];
    position: {
        x: RadialPropertyValue;
        y: RadialPropertyValue;
    };
    stops: ColorStop[];
}
declare function parseRadialGradient(input: string): RadialResult;

type RectColorSpace = 'srgb' | 'srgb-linear' | 'lab' | 'oklab' | 'xyz' | 'xyz-d50' | 'xyz-d65';
type PolarColorSpace = 'hsl' | 'hwb' | 'lch' | 'oklch';
type HueInterpolationMethod = `${'shorter' | 'longer' | 'increasing' | 'decreasing'} hue`;
interface ConicGradient {
    angle: string;
    repeating: boolean;
    position: string;
    color?: Color;
    stops: ColorStop[];
}
type Color = {
    space: RectColorSpace | PolarColorSpace;
    method?: HueInterpolationMethod;
};
declare function parseConicGradient(input: string): ConicGradient;

export { ColorStop, LinearResult, RadialPropertyValue, RadialResult, RgExtentKeyword, parseConicGradient, parseLinearGradient, parseRadialGradient };
