export default rehypeCitationGenerator;
export type Node = import('hast').Node;
export type Parent = import('hast').Parent;
export type Root = import('hast').Root;
export type Element = import('hast').Element;
export type Visitor = import('unist-util-visit').Visitor<Node>;
export type CiteItem = import('./types').CiteItem;
export type Mode = import('./types').Mode;
export type Options = import('./types').Options;
/**
 * Rehype plugin that formats citations in markdown documents and insert bibliography in html format
 *
 *    [-@wadler1990]                              --> (1990)
 *    [@hughes1989, sec 3.4]                      --> (Hughes 1989, sec 3.4)
 *    [see @wadler1990; and @hughes1989, pp. 4]   --> (see Wadler 1990 and Hughes 1989, pp. 4)
 *
 * @param {*} Cite cite object from citation-js configured with the required CSLs
 * @return {import('unified').Plugin<[Options?], Root>}
 */
declare function rehypeCitationGenerator(Cite: any): import('unified').Plugin<[Options?], Root>;
