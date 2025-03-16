export default required;
declare namespace required {
    namespace biblatex {
        let article: (string | string[])[];
        let book: (string | string[])[];
        let mvbook: (string | string[])[];
        let inbook: (string | string[])[];
        let booklet: (string | string[])[];
        let collection: (string | string[])[];
        let mvcollection: (string | string[])[];
        let incollection: (string | string[])[];
        let dataset: (string | string[])[];
        let online: (string | string[])[];
        let patent: (string | string[])[];
        let periodical: (string | string[])[];
        let proceedings: (string | string[])[];
        let mvproceedings: (string | string[])[];
        let inproceedings: (string | string[])[];
        let report: (string | string[])[];
        let thesis: (string | string[])[];
        let unpublished: (string | string[])[];
        let conference: (string | string[])[];
        let electronic: (string | string[])[];
        let mastersthesis: (string | string[])[];
        let phdthesis: (string | string[])[];
        let techreport: (string | string[])[];
        let www: (string | string[])[];
    }
    namespace bibtex {
        let article_1: string[];
        export { article_1 as article };
        let book_1: (string | string[])[];
        export { book_1 as book };
        let booklet_1: string[];
        export { booklet_1 as booklet };
        let inbook_1: (string | string[])[];
        export { inbook_1 as inbook };
        let incollection_1: string[];
        export { incollection_1 as incollection };
        let inproceedings_1: string[];
        export { inproceedings_1 as inproceedings };
        let mastersthesis_1: string[];
        export { mastersthesis_1 as mastersthesis };
        let phdthesis_1: string[];
        export { phdthesis_1 as phdthesis };
        let proceedings_1: string[];
        export { proceedings_1 as proceedings };
        let techreport_1: string[];
        export { techreport_1 as techreport };
        let unpublished_1: string[];
        export { unpublished_1 as unpublished };
    }
}
