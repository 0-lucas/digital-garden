export function type(input: any): any;
export function addTypeParser(format: any, { dataType, predicate, extends: extend }: {
    dataType: any;
    predicate: any;
    extends: any;
}): void;
export function hasTypeParser(type: any): any;
export function removeTypeParser(type: any): void;
export function listTypeParser(): string[];
export function treeTypeParser(): {
    name: string;
    children: {
        name: string;
        children: any;
    }[];
};
export const typeMatcher: RegExp;
