export function add(name: any, dict: any): void;
export function remove(name: any): void;
export function has(name: any): any;
export function list(): string[];
export function get(name: any): any;
export const register: Register;
export namespace htmlDict {
    let wr_start: string;
    let wr_end: string;
    let en_start: string;
    let en_end: string;
    let ul_start: string;
    let ul_end: string;
    let li_start: string;
    let li_end: string;
}
export namespace textDict {
    let wr_start_1: string;
    export { wr_start_1 as wr_start };
    let wr_end_1: string;
    export { wr_end_1 as wr_end };
    let en_start_1: string;
    export { en_start_1 as en_start };
    let en_end_1: string;
    export { en_end_1 as en_end };
    let ul_start_1: string;
    export { ul_start_1 as ul_start };
    let ul_end_1: string;
    export { ul_end_1 as ul_end };
    let li_start_1: string;
    export { li_start_1 as li_start };
    let li_end_1: string;
    export { li_end_1 as li_end };
}
import Register from '../util/register.js';
