declare function parseContentMine(data: any): {
    type: any;
    title: any;
} & {
    type: string;
};
declare function parseBibJson(data: any): {
    type: any;
    title: any;
};
export { parseContentMine as quickscrapeRecord, parseBibJson as record };
