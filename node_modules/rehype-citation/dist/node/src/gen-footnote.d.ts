export function genFootnoteSection(citationDict: {
    int: string;
}, footnoteArray: {
    type: 'citation' | 'existing';
    oldId: string;
}[], footnoteSection: Element | undefined): Element;
export type Element = import('hast').Element;
export type ElementContent = import('hast').ElementContent;
