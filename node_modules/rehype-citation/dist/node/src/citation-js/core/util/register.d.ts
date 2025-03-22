export default Register;
declare class Register {
    constructor(data?: {});
    data: {};
    set(key: any, value: any): this;
    add(...args: any[]): this;
    delete(key: any): this;
    remove(...args: any[]): this;
    get(key: any): any;
    has(key: any): any;
    list(): string[];
}
