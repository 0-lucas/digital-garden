export class TypeParser {
    constructor(data: any);
    data: any;
    validateDataType(): void;
    validateParseType(): void;
    validateTokenList(): void;
    validatePropertyConstraint(): void;
    validateElementConstraint(): void;
    validateExtends(): void;
    validate(): void;
    parseTokenList(): ((input: any) => any)[];
    parsePropertyConstraint(): ((input: any) => any)[];
    parseElementConstraint(): ((input: any) => any)[];
    parsePredicate(): any[];
    getCombinedPredicate(): any;
    getDataType(): any;
    get dataType(): any;
    get predicate(): any;
    get extends(): any;
}
export class DataParser {
    constructor(parser: any, { async }?: {
        async: any;
    });
    parser: any;
    async: any;
    validate(): void;
}
export class FormatParser {
    constructor(format: any, parsers?: {});
    format: any;
    typeParser: TypeParser;
    dataParser: DataParser;
    asyncDataParser: DataParser;
    validateFormat(): void;
    validate(): void;
}
