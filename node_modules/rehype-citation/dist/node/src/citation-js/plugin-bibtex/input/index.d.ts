export const ref: "@bibtex";
export const formats: {
    '@biblatex/text': {
        parse: typeof parseFile;
        parseType: {
            dataType: string;
            predicate: RegExp;
        };
    };
    '@biblatex/entry+object': {
        parse(input: any): any;
        parseType: {
            dataType: string;
            propertyConstraint: {
                props: string[];
            };
        };
    };
    '@biblatex/entries+list': {
        parse: typeof parseEntries;
        parseType: {
            elementConstraint: string;
        };
    };
    '@bibtex/text': {
        parse: typeof parseFile;
        outputs: string;
    };
    '@bibtex/entry+object': {
        parse(input: any): any;
    };
    '@bibtex/entries+list': {
        parse: typeof parseBibtex;
    };
    '@bibtxt/text': {
        parse: (src: any) => any;
        parseType: {
            dataType: string;
            predicate: RegExp;
        };
    };
};
import { parse as parseFile } from './file.js';
import { parse as parseEntries } from './entries.js';
import { parseBibtex } from './entries.js';
