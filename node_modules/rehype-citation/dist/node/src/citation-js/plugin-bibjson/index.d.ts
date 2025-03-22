export const ref: "@bibjson";
export namespace parsers {
    export { json };
}
export const formats: {
    '@bibjson/quickscrape+record+object': {
        parse: (data: any) => {
            type: any;
            title: any;
        } & {
            type: string;
        };
        parseType: {
            propertyConstraint: {
                props: string;
                value(links: any): boolean;
            };
            extends: string;
        };
    };
    '@bibjson/record+object': {
        parse: (data: any) => {
            type: any;
            title: any;
        };
        parseType: {
            dataType: string;
            propertyConstraint: ({
                props: string;
                match?: undefined;
                value?: undefined;
            } | {
                props: string[];
                match: string;
                value(authors: any): boolean;
            })[];
        };
    };
    '@bibjson/collection+object': {
        parse(collection: any): any;
        parseType: {
            dataType: string;
            propertyConstraint: {
                props: string;
                value(metadata: any): boolean;
            }[];
        };
    };
};
import * as json from './json.js';
