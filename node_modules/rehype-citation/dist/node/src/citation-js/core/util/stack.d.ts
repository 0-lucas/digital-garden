export default TokenStack;
declare class TokenStack {
    static getPatternText(pattern: any): string;
    static getMatchCallback(pattern: any): any;
    constructor(array: any);
    stack: any;
    index: number;
    current: any;
    tokensLeft(): number;
    matches(pattern: any): any;
    matchesSequence(sequence: any): any;
    consumeToken(pattern?: RegExp, { inverse, spaced }?: {
        inverse?: boolean;
        spaced?: boolean;
    }): any;
    consumeWhitespace(pattern?: RegExp, { optional }?: {
        optional?: boolean;
    }): any;
    consumeN(length: any): any;
    consumeSequence(sequence: any): any;
    consume(pattern?: RegExp, { min, max, inverse, tokenMap, tokenFilter }?: {
        min?: number;
        max?: number;
        inverse?: boolean;
        tokenMap: any;
        tokenFilter: any;
    }): any;
}
