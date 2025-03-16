export function parseDate(date: any): number[];
export function parseMonth(value: any): any[];
export function formatLabel(author: any, issued: any, suffix: any, title: any): string;
export const TYPE: "BibTeX type";
export const LABEL: "BibTeX label";
export namespace MONTHS {
    let jan: number;
    let feb: number;
    let mar: number;
    let apr: number;
    let may: number;
    let jun: number;
    let jul: number;
    let aug: number;
    let sep: number;
    let oct: number;
    let nov: number;
    let dec: number;
    let january: number;
    let february: number;
    let march: number;
    let april: number;
    let june: number;
    let july: number;
    let august: number;
    let september: number;
    let october: number;
    let november: number;
    let december: number;
}
export namespace TYPE_KEYS {
    let bathesis: string;
    let mathesis: string;
    let phdthesis: string;
    let candthesis: string;
    let techreport: string;
    let resreport: string;
    let software: string;
    let datacd: string;
    let audiocd: string;
    let patent: string;
    let patentde: string;
    let patenteu: string;
    let patentfr: string;
    let patentuk: string;
    let patentus: string;
    let patreq: string;
    let patreqde: string;
    let patreqeu: string;
    let patreqfr: string;
    let patrequk: string;
    let patrequs: string;
}
export const STANDARD_NUMBERS_PATTERN: RegExp;
export namespace Converters {
    namespace PICK {
        function toTarget(...args: any[]): any;
        function toSource(value: any): any[];
    }
    namespace DATE {
        function toTarget(date: any): {
            literal: any;
            'date-parts'?: undefined;
        } | {
            'date-parts': any;
            literal?: undefined;
        };
        function toSource(date: any): any;
    }
    namespace YEAR_MONTH {
        function toTarget(year: any, month: any, day: any): {
            literal: any;
            'date-parts'?: undefined;
        } | {
            'date-parts': any[][];
            literal?: undefined;
        };
        function toSource(date: any): any[];
    }
    namespace EPRINT {
        function toTarget(id: any, type: any): any;
        function toSource(id: any): any[];
    }
    namespace EVENT_TITLE {
        function toTarget(title: any, addon: any): any;
        function toSource(title: any): any;
    }
    namespace HOW_PUBLISHED {
        function toTarget(howPublished: any): any;
    }
    namespace KEYWORDS {
        function toTarget(list: any): any;
        function toSource(list: any): any;
    }
    namespace LABEL {
        function toTarget(label: any): any[];
        function toSource(id: any, label: any, author: any, issued: any, suffix: any, title: any): any;
    }
    namespace NAMES {
        function toTarget(list: any): any;
        function toSource(list: any): any;
    }
    namespace NAMES_ORCID {
        function toTarget(list: any, orcid: any): any;
        function toSource(list: any): ({}[] | {
            item: any[];
        })[];
    }
    namespace PAGES {
        function toTarget(pages: any): any;
        function toSource(pages: any): any;
    }
    namespace STANDARD_NUMBERS {
        function toTarget(...args: any[]): any;
        function toSource(number: any): any;
    }
    namespace STATUS {
        function toSource(state: any): any;
    }
    namespace TITLE {
        function toTarget(title: any, subtitle: any, addon: any): any;
        function toSource(title: any): any[];
    }
}
