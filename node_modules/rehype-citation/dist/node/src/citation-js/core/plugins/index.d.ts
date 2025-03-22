export function add(ref: any, plugins?: {}): void;
export function remove(ref: any): void;
export function has(ref: any): boolean;
export function list(): string[];
import * as input from './input/index.js';
import * as output from './output.js';
import * as dict from './dict.js';
import * as config from './config.js';
export { input, output, dict, config };
