export class Grammar {
    constructor(rules: any, state: any);
    rules: any;
    defaultState: any;
    mainRule: string;
    log: any[];
    parse(iterator: any, mainRule: any): any;
    lexer: any;
    token: any;
    state: any;
    matchEndOfFile(): boolean;
    matchToken(type: any): boolean;
    consumeToken(type: any, optional: any): any;
    consumeRule(rule: any): any;
}
