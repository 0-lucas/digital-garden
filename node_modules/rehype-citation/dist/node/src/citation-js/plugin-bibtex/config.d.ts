declare namespace _default {
    export { constants };
    export namespace types {
        export { biblatex };
        export { bibtex };
    }
    export namespace parse {
        let biblatex_1: boolean;
        export { biblatex_1 as biblatex };
        export let strict: boolean;
        export let sentenceCase: string;
    }
    export namespace format {
        let useIdAsLabel: boolean;
        let checkLabel: boolean;
        let asciiOnly: boolean;
    }
    export namespace biber {
        let annotationMarker: string;
        let namedAnnotationMarker: string;
    }
}
export default _default;
import * as constants from './input/constants.js';
import biblatex from './mapping/biblatexTypes.js';
import bibtex from './mapping/bibtexTypes.js';
