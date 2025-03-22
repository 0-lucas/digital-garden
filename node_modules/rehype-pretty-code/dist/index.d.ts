import { Element, Properties, Text, Root } from 'hast';
import { BuiltinTheme, ThemeRegistrationRaw, ShikiTransformer, BundledHighlighterOptions, Highlighter } from 'shiki';
import { Transformer } from 'unified';

type LineElement = Omit<Element, 'properties'> & {
    properties: Properties & {
        className?: Array<string>;
    };
};
type CharsElement = Omit<Element, 'properties' | 'children'> & {
    properties: Properties & {
        className?: Array<string>;
    };
    children: Array<Element | Text>;
};
type Theme = BuiltinTheme | ThemeRegistrationRaw;
interface Options {
    grid?: boolean;
    theme?: Theme | Record<string, Theme>;
    keepBackground?: boolean;
    bypassInlineCode?: boolean;
    defaultLang?: string | {
        block?: string;
        inline?: string;
    };
    tokensMap?: Record<string, string>;
    transformers?: Array<ShikiTransformer>;
    filterMetaString?(str: string): string;
    getHighlighter?(options: BundledHighlighterOptions<any, any>): Promise<Highlighter>;
    onVisitLine?(element: LineElement): void;
    onVisitHighlightedLine?(element: LineElement, id: string | undefined): void;
    onVisitHighlightedChars?(element: CharsElement, id: string | undefined): void;
    onVisitTitle?(element: Element): void;
    onVisitCaption?(element: Element): void;
}

declare function rehypePrettyCode(options?: Options): void | Transformer<Root, Root>;

export { type CharsElement, type LineElement, type Options, type Theme, rehypePrettyCode as default, rehypePrettyCode };
