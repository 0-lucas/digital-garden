export function add(data: any, options?: {}, log?: boolean): any;
export function addAsync(data: any, options?: {}, log?: boolean): Promise<any>;
export function set(data: any, options?: {}, log?: boolean): any;
export class set {
    constructor(data: any, options?: {}, log?: boolean);
    data: any[];
}
export function setAsync(data: any, options?: {}, log?: boolean): Promise<any>;
export class setAsync {
    constructor(data: any, options?: {}, log?: boolean);
    data: any[];
}
export function reset(log: any): this;
export class reset {
    constructor(log: any);
    data: any[];
    _options: {};
}
