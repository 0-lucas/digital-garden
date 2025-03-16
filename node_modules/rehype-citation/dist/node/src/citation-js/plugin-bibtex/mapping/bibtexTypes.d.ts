export default bibtexTypes;
declare namespace bibtexTypes {
    namespace source {
        let article: string;
        let book: string;
        let booklet: string;
        let conference: string;
        let inbook: string;
        let incollection: string;
        let inproceedings: string;
        let manual: string;
        let mastersthesis: string;
        let misc: string;
        let phdthesis: string;
        let proceedings: string;
        let techreport: string;
        let unpublished: string;
    }
    let target: {
        article: string;
        'article-journal': string;
        'article-magazine': string;
        'article-newspaper': string;
        book: string;
        chapter: string;
        manuscript: string;
        'paper-conference': string;
        report: string;
        review: string;
        'review-book': string;
    };
}
