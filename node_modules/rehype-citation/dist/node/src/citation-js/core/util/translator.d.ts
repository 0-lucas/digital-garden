export class Translator {
    constructor(props: any);
    convertToSource: (input: any) => {};
    convertToTarget: (input: any) => {};
}
export namespace Translator {
    let CONVERT_TO_SOURCE: symbol;
    let CONVERT_TO_TARGET: symbol;
}
