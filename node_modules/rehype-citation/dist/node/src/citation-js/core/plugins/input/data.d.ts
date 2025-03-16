export function data(input: any, type: any): any;
export function dataAsync(input: any, type: any): Promise<any>;
export function addDataParser(format: any, { parser, async }: {
    parser: any;
    async: any;
}): void;
export function hasDataParser(type: any, async: any): any;
export function removeDataParser(type: any, async: any): void;
export function listDataParser(async: any): string[];
